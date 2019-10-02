var funcConfig = require('./funcConfig');


var myScript = function () {

    // 用户配置
    this.userConfigs = {
        loopDelay: 200, // 循环延时
        afterClickDelay: 200, // 点击后延时
        afterClickDelayRandom: 200, // 点击后延时随机数
        colorSimilar: 30, // 颜色相似度(比较时三个点的颜色差之和小于该值时表示相等))
        isShowToast: true,
        funcList: [],
    };

    // 放在内存中的图片，每次都从这个图片中搞
    this.memImage = null;
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
            this.userConfigs = deepObjectMerge(this.userConfigs, {
                funcList: funcList
            });
        }
    },

    /**
     * 脚本入口
     */
    run: function () {

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
        while (true) {
            var t1 = new Date();
            this.memImage = captureScreen();
            var t2 = new Date();
            console.log(t2.getTime() - t1.getTime());
            console.log(scriptFuncList.length);
            for (let i = 0, iLen = scriptFuncList.length; i < iLen; i++) {
                result = this.commonClick(scriptFuncList[i]);
                if (result) {
                    console.log('[assttyys] run success: ' + scriptFuncList[i].name);
                    toastLog(scriptFuncList[i].name);
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
            this.memImage = captureScreen();
        }
        var data = funcObj.data;
        for (var k = 0, kLen = data.length; k < kLen; k++) {
            kData = funcObj.data[k];
            var judgePoints = kData.judgePoints;
            for (let i = 0, iLen = judgePoints.length; i < iLen; i++) {
                var jp = judgePoints[i];
                var isColorSimilar = false;
                try {
                    var co = images.pixel(this.memImage, jp.x, jp.y);
                    isColorSimilar = images.detectsColor(this.memImage, jp.c, jp.x, jp.y, this.userConfigs.colorSimilar, 'diff');
                    console.log('[assttyys] co: ' + co);
                    console.log('[assttyys] c: ' + co);
                    console.log('[assttyys] isColorSimilar: ' + isColorSimilar);
                } catch (e) {
                    // 不管它
                    console.log('isColorSimilar calc error!' + e);
                    console.log('memImage.width = ' + this.memImage.getWidth() + ', memImage.height = ' + this.memImage.getHeight());
                }
                // 匹配点不相似 || 非匹配点相似
                if (!(jp.i && isColorSimilar) || (!jp.i && isColorSimilar)) {
                    return false;
                }
            }
            var operaPoints = kData.operaPoints;
            console.log(operaPoints);
            for (let i = 0, iLen = operaPoints.length; i < iLen; i++) {
                console.log('[assttyys] operaPoints: ' + i);
                var op = operaPoints[i];
                var x = op.x + parseInt(random(0, op.ox));
                var y = op.y + parseInt(random(0, op.oy));
                // this.ra.tap(x, y); 不起作用, 不管它
                Tap(x, y);
                var delay = op.ad + this.userConfigs.afterClickDelay + parseInt(random(0, this.userConfigs.afterClickDelayRandom));
                sleep(delay);
            }
            return true;
        }
        return false;
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