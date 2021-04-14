const sh = new Shell(true);
events.on('exit', function () {
    sh.exit();
});

// new myAutomator(sh);
// const eventDeviceStr = sh.execAndWaitFor('getevent -p');
// files.write('./eventDeviceStr', eventDeviceStr);
execPromise(sh, 'getevent -p', 200).then(function (eventDeviceStr) {
    files.write('./eventDeviceStr', eventDeviceStr);
    const reg = /add device.+?:\s+(.+)\r?\n\s+name:\s+"(.+?)"/g;
    const r = eventDeviceStr.match(reg);
    console.log(r);
});

// let arr1 = ['su', 'aosp:/ $ su'];
// let arr2 = ['su', 'aosp:/ $ su', 'getevent -p'];
function mixinRepeatKeywords(arr1, arr2) {
    let arrIndex = 0;
    for (let i = 1; i <= arr1.length && i <= arr2.length; i++) {
        let sub1 = arr1.slice(arr1.length - i, arr1.length);
        let sub2 = arr2.slice(0, i);

        let flag = true;
        for (let j = 0; j < sub1.length; j++) {
            if (sub1[j] !== sub2[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            arrIndex = i;
            break;
        }
    }
    return arr1.concat(arr2.slice(arrIndex, arr2.length));
}
// mixinRepeatKeywords(arr1, arr2);

function execPromise(sh, cmd, overTime) {
    
    let outPutArr = [];
    let outPutArr2 = [];
    let lastOutPutDate = null;
    let ret = new Promise(function (resolve, reject) {
        // 计时器，超过overTime毫秒没有输出则计为已返回所有数据
        const timmer = setInterval(function() {
            if (lastOutPutDate && new Date().getTime() - lastOutPutDate.getTime() > overTime) {
                clearInterval(timmer);
                sh.setCallback({ onNewLine: function () { }});
                files.write('./eventDeviceStrr', JSON.stringify(outPutArr2));
                resolve(outPutArr.join('\n'));
            }
        }, 100)
        sh.setCallback({
            onNewLine: function (line) {
                lastOutPutDate = new Date();
                const arr = line.split(/\r?\n/);
                outPutArr = mixinRepeatKeywords(outPutArr, arr);
                outPutArr2.push(arr);

                // const index = outPutArr.lastIndexOf(arr[0]);
                // if (-1 !== index) {
                //     outPutArr = outPutArr.slice(index, outPutArr.length - index).concat(arr);
                // } else {
                //     outPutArr = outPutArr.concat(arr);
                // }
            },
            // onOutput: function (str) {
            //     if (/( # | \$ )$/.test(str)) {
            //         sh.setCallback({ onNewLine: function () { }, onOutput: function () {} });
            //         resolve(outPutArr.join('\n'));
            //     }
            // }
        });
    });
    sh.exec(cmd);
    return ret;
}
/**
 * 建议给一个独立的shell对象进来，如果有setCallback的话调用该方法后的回调会消失
 * @param {*} shell 
 */
function myAutomator(sh) {

    // let eventDeviceStr = this.sh.execAndWaitFor('getevent -p');

    // files.write('./eventDeviceStr', eventDeviceStr);
    // let r = eventDeviceStr.match(/add device.+?:\s+(.+)\r?\n\s+name:\s+"(.+?)"/g);
    // console.log(r);
}


