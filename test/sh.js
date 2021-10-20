/**
 * 
 * @param {String} flag 'su'|'sh'
 */
function myShell (flag) {
    let self = this;
    this.boundary = '----boundaryb366db0c41ab7f1dc7562c3921719203';
    this.process = java.lang.Runtime.getRuntime().exec(flag);
    this.writer = new java.io.BufferedWriter(new java.io.OutputStreamWriter(this.process.getOutputStream()));
    this.successReader = new java.io.BufferedReader(new java.io.InputStreamReader(this.process.getInputStream()));
    this.errorReader = new java.io.BufferedReader(new java.io.InputStreamReader(this.process.getErrorStream()));
    this.successMsg = [];
    this.callbackList = [];
    threads.start(function () {
        let s = null;
        while (s = self.successReader.readLine()) { // 这个会阻塞
            if (s === self.boundary) {
                let cb = self.callbackList.shift();
                cb && cb(self.successMsg.join('\n'));
                self.successMsg = [];
            } else {
                self.successMsg.push(s);
            }
        }
    });
}

/**
 * 
 * @param {*} command 
 * @param {*} callback 
 */
myShell.prototype.exec = function (command, callback) {
    this.callbackList.push(callback);
    let self = this;

    self.writer.write(command + '\necho \'' + this.boundary + '\'\n');
    // self.writer.newLine();
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
    let sh = new myShell('sh');
    events.on('exit', function () {
        sh.destroy();
    });
    sh.exec('echo \'1\\n1\'', function (res) {
        console.log(res);
    });
    sh.exec('echo 22', function (res) {
        console.log(res);
    });
    sh.exec('echo 33', function (res) {
        console.log(res);
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
