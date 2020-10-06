var MyAutomator = require('./zz_modules/MyAutomator');
var helperBridge = require('./zz_modules/graphicHelperBridge');
require('./zz_modules/dateFormatter');

let dm = context.getResources().getDisplayMetrics();
let wm = context.getSystemService(context.WINDOW_SERVICE);
wm.getDefaultDisplay().getRealMetrics(dm);

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

    this.graphicHelper = helperBridge;
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
        
        var configConfigPath = './config/funcConfig_' + dm.widthPixels + dm.heightPixels;
        if (dm.widthPixels < dm.heightPixels) {
            configConfigPath = './config/funcConfig_' + dm.heightPixels + dm.widthPixels;
        }
        
        var funcConfig;
        try {
            funcConfig = require(configConfigPath);
        } catch (err) {
            console.log('script.js: 脚本不支持当前分辨率' + dm.widthPixels + '*' + dm.heightPixels + '，加载默认分辨率1920*1080脚本');
            configConfigPath = './config/funcConfig_19201080';
            funcConfig = require(configConfigPath);
        }
        
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

        var loopTime = 0;
        var nowTime = new Date().getTime();
        var endTime = 0;
        if (this.userConfigs.auto_stop_upper_bound == -1) {
            toastLog('启动脚本');
        } else {
            loopTime = random(this.userConfigs.auto_stop_lower_bound, this.userConfigs.auto_stop_upper_bound) * 60000;
            endTime = nowTime + loopTime;
            var nowDate = new Date();
            var endDate = new Date();
            endDate.setTime(endTime);
            toastLog('当前时间为' + nowDate.format('Y-m-d H:i:s') + '，脚本将于' + endDate.format('Y-m-d H:i:s') + '后停止（执行时间' + (loopTime / 60000).toFixed(0) + 'min）');
        }
        var continuityCount = 0;
        var lastFunc = -1;
        while (true) {
            if (endTime && new Date().getTime() >= endTime) {
                toastLog('当前时间为' + new Date().format('Y-m-d H:i:s') + '，脚本停止。')
                sleep(2000);
                // 广播停止脚本
                events.broadcast.emit('DQFLOATY_STOP_CLICK', '');
                sleep(2000);
            }
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
        // 如果data是个数组，直接走公共方法
        // 如果data是个函数的话直接执行这个函数，函数里面的逻辑由配置参数直接自己实现
        var data = funcObj.data;
        if (typeof data === 'function') {
            return data.call(this);
        }
        for (var k = 0, kLen = data.length; k < kLen; k++) {
            kData = funcObj.data[k];
            var judgePoints = kData.judgePoints;
            var isJudged = this.graphicHelper.detectsMultiColors(judgePoints, this.userConfigs.colorSimilar);
            if (isJudged) {
                var operaPoints = kData.operaPoints;
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
        this.graphicHelper.keepScreen();
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