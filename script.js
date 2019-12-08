var funcConfig = require('./config/funcConfig');
var MyAutomator = require('./zz_modules/MyAutomator');
var myScript = function () {

    // 用户配置
    this.userConfigs = {
        loopDelay: 200, // 循环延时
        afterClickDelay: 200, // 点击后延时
        afterClickDelayRandom: 200, // 点击后延时随机数
        colorSimilar: 15, // 颜色相似度(比较时三个点的颜色差之和小于该值时表示相等))
        continuityTimeToStop: 20, // 连续执行20次相同功能后停止脚本, 有可能一个功能会被连续执行多次，这个值不宜过低，比如说退出结算，容易连续执行8次左右
        multiColorSimilar: 4, // 多点找色相似度
        isShowToast: true,
        tapType: 0, // 0 无障碍， 1 RootAutomator， 2 Shell
        dirctionReverse: false, // 坐标反转
        funcList: [],
    };

    // 放在内存中的图片，每次都从这个图片中搞
    this.memImage = null;

    // press 和 swipe在这里面
    this.automator = null;
}

/**
 * 必须实现两个方法：setUserConfigs, run
 */
myScript.prototype = {

    /**
     * 用户配置.
     * @param {Object} userConfigs
     */
    setUserConfigs: function (userConfigs) {
        if (userConfigs) {
            this.userConfigs = deepObjectMerge(this.userConfigs, userConfigs);
        } else {
            var ass = storages.create('assttyys');
            var funcList = ass.get('funcList');
            var userConfigConfig = ass.get('userConfigConfig') || {};
            userConfigConfig.funcList = funcList
            this.userConfigs = deepObjectMerge(this.userConfigs, userConfigConfig);
        }
        console.log(this.userConfigs);
    },

    /**
     * 脚本入口
     */
    run: function () {

        this.automator = new MyAutomator(this.userConfigs.tapType, this.userConfigs.dirctionReverse);

        var scriptFuncList = [];
        for (let i = 0, iLen = this.userConfigs.funcList.length; i < iLen; i++) {
            var funcI = this.userConfigs.funcList[i];
            for (let j = 1, jLen = funcConfig.length; j < jLen; j++) {
                var funcJ = funcConfig[j]
                if (funcI.funcId === funcJ.id) {
                    if (funcI.enable) {
                        scriptFuncList.push(funcJ);
                    }
                    break;
                }
            }
        }
        var continuityCount = 0;
        var lastFunc = -1;
        while (true) {
            this.captureScreen();
            for (let i = 0, iLen = scriptFuncList.length; i < iLen; i++) {
                result = this.commonClick(scriptFuncList[i]);
                if (result) {
                    if (scriptFuncList[i].id == lastFunc) {
                        continuityCount++;
                        console.log('[assttyys] continuityCount: ' + continuityCount);
                        if (continuityCount >= this.userConfigs.continuityTimeToStop) {
                            toastLog('连续执行' + scriptFuncList[i].name + '达到' + continuityCount + '次, 脚本停止');
                            // 广播停止脚本
                            events.broadcast.emit('DQFLOATY_STOP_CLICK', '');
                        }
                    } else {
                        lastFunc = scriptFuncList[i].id;
                        continuityCount = 1;
                    }
                    console.log('[assttyys] run success: ' + scriptFuncList[i].name);
                    // toastLog(scriptFuncList[i].name);
                    break;
                }
            }
            sleep(this.userConfigs.loopDelay);
        }
    },

    /**
     * @param {Object} funcObj 
     */
    commonClick: function (funcObj) {
        if (null === this.memImage) {
            this.captureScreen();
        }
        // 如果data是个数组，直接走公共方法
        // 如果data是个函数的话直接执行这个函数，函数里面的逻辑由配置参数直接自己实现
        var data = funcObj.data;
        if (typeof data === 'function') {
            return data.call(this);
        }
        for (var k = 0, kLen = data.length; k < kLen; k++) {
            kData = funcObj.data[k];
            var isJudged = true;
            var judgePoints = kData.judgePoints;
            for (let i = 0, iLen = judgePoints.length; i < iLen; i++) {
                var jp = judgePoints[i];
                var isColorSimilar = false;
                try {
                    // var co = images.pixel(this.memImage, jp.x, jp.y);
                    isColorSimilar = images.detectsColor(this.memImage, jp.c, jp.x, jp.y, this.userConfigs.colorSimilar, 'diff');

                    // console.log('[assttyys] jp: ');
                    // console.log(jp);
                    // console.log('[assttyys] co: ' + co);
                    // console.log('[assttyys] isColorSimilar: ' + isColorSimilar);
                } catch (e) {
                    // 不管它
                    console.log('isColorSimilar calc error!' + e);
                    console.log('memImage.width = ' + this.memImage.getWidth() + ', memImage.height = ' + this.memImage.getHeight());
                }
                // 匹配点不相似 || 非匹配点相似
                if ((jp.i && !isColorSimilar) || (!jp.i && isColorSimilar)) {
                    isJudged = false;
                    break;
                }
            }
            if (isJudged) {
                var operaPoints = kData.operaPoints;
                // console.log('[assttyys] judgePoints: ');
                // console.log(judgePoints);
                // console.log('[assttyys] operaPoints: ');
                // console.log(operaPoints);
                for (let i = 0, iLen = operaPoints.length; i < iLen; i++) {
                    var op = operaPoints[i];
                    var x = op.x + parseInt(random(0, op.ox));
                    var y = op.y + parseInt(random(0, op.oy));
                    this.automator.press(x, y, random(10, 100));
                    var delay = op.ad + this.userConfigs.afterClickDelay + parseInt(random(0, this.userConfigs.afterClickDelayRandom));
                    sleep(delay);
                }
                return true;
            }
        }
        return false;
    },

    captureScreen: function () {
        this.memImage = captureScreen();
    }
}

function deepObjectMerge(FirstOBJ, SecondOBJ) { // 深度合并对象
    for (var key in SecondOBJ) {
        FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === "[object Object]" ?
            deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key];
    }
    return FirstOBJ;
}

module.exports = myScript;