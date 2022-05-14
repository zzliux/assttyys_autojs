/**
 * 
 * @param {String} flag 'su'|'sh'
 */
function myShell (flag) {
    let self = this;
    this.boundary = '----boundaryb366db0c41ab7f1dc7562c3921719203----';
    this.process = java.lang.Runtime.getRuntime().exec(flag);
    this.writer = new java.io.BufferedWriter(new java.io.OutputStreamWriter(this.process.getOutputStream()));
    // this.successReader = new java.io.BufferedReader(new java.io.InputStreamReader(this.process.getInputStream()));
    // this.errorReader = new java.io.BufferedReader(new java.io.InputStreamReader(this.process.getErrorStream()));
    this.successReader = new java.util.Scanner(this.process.getInputStream(), 'ISO-8859-1').useDelimiter('\n' + this.boundary + '\n');
    this.errorReader = new java.util.Scanner(this.process.getErrorStream(), 'ISO-8859-1').useDelimiter('\n' + this.boundary + '\n');
    // this.successMsg = [];
    this.successMsg = null;
    this.errorMsg = null;
    this.callbackList = [];
    this.errorCallbackList = [];
    // threads.start(function () {
    //     let s = null;
    //     // 修改为 read(char[] cbuf, int off, int len)
    //     // 在读取内容往全部内容拼出来的bytes里面最后2倍bondary程度中若出现bondary，则分割
    //     while (s = self.successReader.readLine()) { // 这个会阻塞
    //         if (s === self.boundary) {
    //             let cb = self.callbackList.shift();
    //             cb && cb(self.successMsg.join('\n'));
    //             self.successMsg = [];
    //         } else {
    //             self.successMsg.push(s);
    //         }
    //     }
    // });
    threads.start(function () {
        let s = null;
        while (s = self.successReader.next()) {
            console.log('ooooooooooooo');
            self.successMsg = new java.lang.String(s).getBytes('ISO-8859-1');
            let cb = self.callbackList.shift();
            cb && cb(self.successMsg);
        }
    });
    // threads.start(function () {
    //     let s = null;
    //     while (s = self.errorReader.next()) {
    //         console.log('eeeeeeeeeeeee');
    //         self.errorMsg = new java.lang.String(s).getBytes('ISO-8859-1');
    //         let ecb = self.errorCallbackList.shift();
    //         ecb && ecb(self.errorMsg);
    //     }
    // });
}

/**
 * 
 * @param {*} command 
 * @param {*} callback 
 */
myShell.prototype.exec = function (command, callback, errorCallback) {
    this.callbackList.push(callback);
    this.errorCallbackList.push(errorCallback);
    let self = this;

    self.writer.write(command)
    // self.writer.newLine();
    self.writer.write(' && echo \'' + this.boundary + '\'');
    self.writer.newLine();
    self.writer.flush();
}

myShell.prototype.destroy = function () {
    this.writer.write('exit');
    this.writer.newLine();
    this.writer.flush();
    this.writer.close();
    this.successReader.close();
    this.errorReader.close();
    this.process.destroy();
}

if (typeof module == 'undefined') {
    module = {};
    let sh = new myShell('su');
    events.on('exit', function () {
        sh.destroy();
    });
    sh.exec('echo \'1\\n1\'', function (res) {
        let s = new java.lang.String(res);
        console.log(s);
    });
    // sh.exec('echo 22', function (res) {
    //     let s = new java.lang.String(res);
    //     console.log(s);
    //     console.log('length = ' + s.length());
    // });
    // sh.exec('echo 33', function (res) {
    //     let s = new java.lang.String(res);
    //     console.log(s);
    //     console.log('length = ' + s.length());
    //     exit();
    // });
    sh.exec('screencap -p', function (res) {
        files.writeBytes(files.cwd() + '/test3.png', res);
        exit();
    });
        
    // sh.exec('input swipe 100 100 500 500 1500', function (_res) {
    //     sh.destroy();
    // });
        // sleep(1000);
    // });

    // sh.exec('getevent -p', function (eventDeviceStr) {
    //     console.info('getevent -p');
    //     files.write('eventDeviceStr', eventDeviceStr);
    // });
    
    // sh.exec('ls -an', function (lsanstr) {
    //     console.info('ls -an');
    //     files.write('lsanstr', lsanstr)
    // });
    // sleep(1000);
}


module.exports = myShell;
