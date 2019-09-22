var funcConfig = require('./funcConfig');

/**
 * 必须实现两个方法：setUserConfigs, run
 */
var myScript = {
    
    userConfigs: {
        loopDelay: 200, // 循环延时
        afterClickDelay: 200, // 点击后延时
        afterClickDelayRandom: 200, // 点击后延时随机数
        colorSimilar: 30, // 颜色相似度(比较时三个点的颜色差之和小于该值时表示相等))
        isShowToast: true,
    },


    toast: function (toastStr) {
        if (this.userConfigs.isShowToast) {
            toast(toastStr);
        }
    },

    /**
     * 用户配置.
     * @param {Object} userConfigs
     */
    setUserConfigs: function (userConfigs) {
        this.userConfigs = deepObjectMerge(this.userConfigs, userConfigs);
    },

    numberToFuncConfig: [
        null // 0
        , { // 1
            name: '准备',
            func: 'ready'
        }
        , { // 2
            name: '退出结算',
            func: function () { // 2 退出结算
                var result = assttyysCommonFuncProxy('exitSettlement1');
                return result;
            }
        }
    ],

    memImage: null,

    /**
     * 脚本入口
     */
    run: function () {
        sleep(2000);
        toast('脚本开始执行。');
        var numberFuncArr = this.userConfigs.input_funcSelect.split(',');
        for (let i = 0; i < numberFuncArr.length; i++) {
            numberFuncArr[i] = parseInt(numberFuncArr[i]);
        }

        while (true) {

            this.memImage = captureScreen();

            for (let i = 0; i < numberFuncArr.length; i++) {
                var funcObj = this.numberToFuncConfig[numberFuncArr[i]];
                var result = false;
                if (typeof funcObj.func === 'function') {
                    result = funcObj.func();
                } else {
                    result = this.assttyysCommonFunc(funcObj.func);
                }
                if (result) {
                    console.log('[assttyys] run success: ' + funcObj.name);
                    this.toast(funcObj.name);
                    break;
                }
            }

            sleep(this.userConfigs.loopDelay);
        }
    },

    assttyysCommonFunc: function (funcName) {
        return this.commonClick(funcConfig[funcName]);
    },
    

    /**
     * option = {
     *     judgePoints: [{x, y, c, i}],
     *     operaPoints: [{x, y, ox, oy, ad}]  -- offsetX, offsetY, afterDelay
     * }
     * @param {Object} option 
     */
    commonClick: function (option) {
        if (null === this.memImage) {
            this.memImage = captureScreen();
        }
        for (let i = 0; i < option.judgePoints.length; i++) {
            var jp = option.judgePoints[i];
            var isColorSimilar = false;
            try {
                var co = images.pixel(this.memImage, jp.x, jp.y);
                isColorSimilar = images.detectsColor(this.memImage, jp.c, jp.x, jp.y, this.userConfigs.colorSimilar, 'diff');
            } catch (e) {
                console.log('isColorSimilar calc error!' + e);
                console.log('memImage.width = ' + this.memImage.getWidth() + ', memImage.height = ' + this.memImage.getHeight());
                // 不管它
            }
            // 匹配点不相似 || 非匹配点相似
            if (!(jp.i && isColorSimilar) || (!jp.i && isColorSimilar)) {
                return false;
            }
        }

        for (let i = 0; i < option.operaPoints.length; i++) {
            console.log('[assttyys] operaPoints: ' + i);
            var op = option.operaPoints[i];
            var x = op.x + parseInt(random(0, op.ox));
            var y = op.y + parseInt(random(0, op.oy));
            // this.ra.tap(x, y); 不起作用, 不管它
            Tap(x, y);
            var delay = op.ad + this.userConfigs.afterClickDelay + parseInt(random(0, this.userConfigs.afterClickDelayRandom));
            sleep(delay);
        }
        return true;
    }
}

function assttyysCommonFuncProxy(funcName) {
    return myScript.assttyysCommonFunc(funcName);
}

function deepObjectMerge(FirstOBJ, SecondOBJ) { // 深度合并对象
    for (var key in SecondOBJ) {
        FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === "[object Object]" ?
            deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key];
    }
    return FirstOBJ;
}

module.exports = myScript;