/**
 * 
 * @param {String} flag 'su'|'sh'
 */
function myShell (flag, bufferSize) {
    bufferSize = bufferSize || 1024;
    let self = this;
    this.boundary = '----boundaryb366db0c41ab7f1dc7562c3921719203';
    this.boundaryArray = new java.lang.String('\n' + this.boundary + '\n').getBytes(); // echo 出来的boundary在stdout前后会有个换行符
    let tempBuffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, bufferSize);

    this.process = java.lang.Runtime.getRuntime().exec(flag);
    this.writer = new java.io.BufferedWriter(new java.io.OutputStreamWriter(this.process.getOutputStream()));
    this.successInputStream = new java.io.BufferedInputStream(this.process.getInputStream());
    this.errorReader = new java.io.BufferedReader(new java.io.InputStreamReader(this.process.getErrorStream()));
    this.successMsg = [];
    this.callbackList = [];
    let count = -1;
    threads.start(function () {
        let byteArrayOutputStream = new java.io.ByteArrayOutputStream();
        let lastBuffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 0);
        while ((count = self.successInputStream.read(tempBuffer)) !== -1) {
            // console.log('===1===');
            let concatBuffer = java.util.Arrays.copyOf(lastBuffer, lastBuffer.length + count);
            java.lang.System.arraycopy(tempBuffer, 0, concatBuffer, lastBuffer.length, count);
            // console.log('===2===');
            let ido = -1;
            if (concatBuffer.length < self.boundaryArray.length) {
                // 长度不到boundary，直接把当前buff作为下个buffer头
                lastBuffer = concatBuffer;
                // console.log('===3===');
            } else if ((ido = indexOf(concatBuffer, self.boundaryArray)) === -1) {
                // 如果当前buffer头+当前buffer不包含boundary，从后往前截取boundary长度个元素作为下个buffer头
                // 如果当前分片的中包含了不完整的boundary，在截取后下一个分片中的boundary一定是完整的
                lastBuffer = java.util.Arrays.copyOfRange(concatBuffer, concatBuffer.length - self.boundaryArray.length, concatBuffer.length);
                byteArrayOutputStream.write(concatBuffer, 0, concatBuffer.length - self.boundaryArray.length);
                // console.log('===4===');
            } else {
                // 如果包含boundary了，说明已记录完整的byte了，执行回调，再把boundary后的内容最为下一个buffer头
                // 有至少一个boundary
                // console.log('===5===');
                lastBuffer = java.util.Arrays.copyOfRange(concatBuffer, ido + self.boundaryArray.length, concatBuffer.length);
                byteArrayOutputStream.write(concatBuffer, 0, ido);
                let cb = self.callbackList.shift();
                cb && cb(byteArrayOutputStream.toByteArray());
                byteArrayOutputStream.reset();
                // 有多个boundary 处理剩下的
                while ((ido = indexOf(lastBuffer, self.boundaryArray)) !== -1) {
                    // console.log('===6===');
                    byteArrayOutputStream.write(lastBuffer, 0, ido);
                    let cb = self.callbackList.shift();
                    cb && cb(byteArrayOutputStream.toByteArray());
                    byteArrayOutputStream.reset();
                    lastBuffer = java.util.Arrays.copyOfRange(lastBuffer, ido + self.boundaryArray.length, lastBuffer.length);
                }
            }
        }
    });

    
    threads.start(function () {
        let s = null;
        while (s = self.errorReader.readLine()) { // 这个会阻塞
            console.error(s);
        }
    });
}

function indexOf(srcArray, targetArray) {
    let i = 0, j = 0;
    let index = -1;
    // console.log('===7===');
    while (i < srcArray.length) {
        while (j < targetArray.length) {
            if (srcArray[i] == targetArray[j]) {
                if (j == 0) index = i;
                if (i == srcArray.length - 1) {
                    break;
                }
                i++;
                j++;
            }
            else {
                index = -1;
                j = 0;
                break;
            }
        }
        i++;
    }
    // console.log('===8===');
    if (j < targetArray.length - 1) index = -1;
    return index;
}

/**
 * 
 * @param {*} command 
 * @param {*} callback 
 */
myShell.prototype.exec = function (command, callback) {
    this.callbackList.push(callback);
    let self = this;

    self.writer.write(command);
    self.writer.newLine();
    self.writer.flush();
    self.writer.write('echo \'' + this.boundary + '\'');
    self.writer.newLine();
    self.writer.flush();
}

myShell.prototype.destroy = function () {
    this.writer.write('exit');
    this.writer.newLine();
    this.writer.flush();
    this.writer.close();
    this.successInputStream.close();
    this.errorReader.close();
    this.process.destroy();
}

if (typeof module == 'undefined') {
    module = {};
    let sh = new myShell('sh');
    events.on('exit', function () {
        sh.destroy();
    });
    sh.exec('echo \'1n1\'', function (res) {
        console.log(new java.lang.String(res));
    });

    // 很奇怪这个指令执行有点问题
    sh.exec('screencap -p', function (res) {
        console.log('screenlen: ' + res.length);
        files.writeBytes('/sdcard/脚本/1.png', res);
    });
    sh.exec('echo \'1n1\'', function (res) {
        console.log(new java.lang.String(res));
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
