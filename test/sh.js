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
    // this.execLock = new java.util.concurrent.locks.ReentrantLock();
    threads.start(function () {
        let s = null;
        while (true) {
            s = self.successReader.readLine(); // 这个会阻塞
            // console.log(s);
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
    threads.start(function () {
        console.log(command + ':' + self.execLock);
        self.execLock.lock();
        self.writer.write(command);
        self.writer.newLine();
        self.writer.flush();
        self.successMsgDate = new Date();
        let timmer = setInterval(function () {
            console.log(command + ':self.successMsgDate.getTime(): ' + self.successMsgDate.getTime());
            if (new Date().getTime() - self.successMsgDate.getTime() > overtime) {
                clearInterval(timmer);
                let result = self.successMsg
                self.successMsg = '';
                self.execLock.unlock();
                callback(result);
            }
        }, 50);
    });
}


if (typeof module == 'undefined') {
    module = {};
    const sh = new myShell('su');

    sleep(1000);

    sh.exec('getevent -p', function (eventDeviceStr) {
        console.info('getevent -p');
        files.write('eventDeviceStr', eventDeviceStr);
    });
    
    sh.exec('ls -an', function (lsanstr) {
        console.info('ls -an');
        files.write('lsanstr', lsanstr)
    });
    // sleep(1000);
}


module.exports = myShell;
