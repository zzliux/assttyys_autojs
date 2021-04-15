/**
 * 
 * @param {String} flag 'su'|'sh'
 */
function myShell (flag) {
    let self = this;
    this.process = java.lang.Runtime.getRuntime().exec(flag);
    this.writer = new java.io.BufferedWriter(new java.io.OutputStreamWriter(this.process.getOutputStream()));
    this.successReader = new java.io.BufferedReader(new java.io.InputStreamReader(this.process.getInputStream()));
    this.errorReader = new java.io.BufferedReader(new java.io.InputStreamReader(this.process.getErrorStream()));
    this.successMsgDate = new Date();
    this.successMsg = '';
    this.execLock = threads.lock();
    threads.start(function () {
        let s = null;
        while (s = self.successReader.readLine()) { // 这个会阻塞
            successMsgDate = new Date();
            self.successMsg += s + '\n';
        }
    });
}

/**
 * 
 * @param {*} command 
 * @param {*} overtime 个人测试建议大于200ms
 * @param {*} callback 
 */
myShell.prototype.exec = function (command, overtime, callback) {
    if (typeof callback !== 'function') {
        callback = function () {}
    }
    if (typeof overtime === 'function') {
        callback = overtime;
        overtime = 200;
    } else {
        overtime = overtime || 200;
    }
    let self = this;
    // threads.start(function () {
        self.execLock.lock();
        self.writer.write(command);
        self.writer.newLine();
        self.writer.flush();
        self.successMsgDate = new Date();
        let timmer = setInterval(function () {
            if (new Date().getTime() - self.successMsgDate.getTime() > overtime) {
                clearInterval(timmer);
                let result = self.successMsg
                self.successMsg = '';
                self.execLock.unlock();
                callback(result);
            }
        }, 50);
    // });
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
    // events.on('exit', function () {
        
        sh.exec('input swipe 100 100 200 200 500', function (_res) {
            sh.destroy();
        });
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
