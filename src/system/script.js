import store from '@/system/store';
import funcList from '@/common/funcList';
import helperBridge from '@/system/helperBridge';
import multiColor from '@/common/multiColors';
import ocr from '@/system/ocr';
import { getWidthPixels, getHeightPixels } from "@auto.pro/core";
import _ from 'lodash';



var script = {
    runThread: null,
    runCallback: null,
    stopCallback: null,
    scheme: null,
    enabledFuncList: null,
    multiColor: null, // 多点找色用的，提前初始化，减轻运行中计算量
    hasRedList: false, // KeepScreen(true)时会初始化redList，如果没有初始化的话这个值为false，方便在有需要的时候初始化redlist且不重复初始化
    runDate: null,
    ocr: null, // 浩然的OCR
    getOcr() {
        if (!this.ocr) {
            this.ocr = ocr();
        }
        return this.ocr;
    },
    runTimes: {},
    lastFunc: null,
    global: null, // 每次启动重置为空对象，用于功能里面存变量
    device: {
        width: getWidthPixels(),
        height: getHeightPixels()
    },
    keepScreen(mode) {
        helperBridge.helper.KeepScreen(mode || false);
        if (mode) {
            this.hasRedList = true;
        } else {
            this.hasRedList = false;
        }
    },
    initRedList() {
        if (!this.hasRedList) {
            helperBridge.helper.GetRedList();
            this.hasRedList = true;
        }
    },  
    setRunCallback(callback) {
        this.runCallback = callback;
    },
    setStopCallback(callback) {
        this.stopCallback = callback;
    },
    
    // 将funcList中operator里面的desc和oper转换为适用当前正在分辨率的坐标
    initFuncList() {
        this.scheme = store.get('currentScheme', null);
        if (null === this.scheme) return;
        console.log('当前配置：');
        console.log(this.scheme);
        this.scheme.funcList = [];
        for (let i = 0; i < this.scheme.list.length; i++) {
            for (let j = 0; j < funcList.length; j++) {
                if (this.scheme.list[i] == funcList[j].id) {
                    let thisFuncList = _.cloneDeep(funcList[j]);
                    let operator = thisFuncList.operator;
                    if (operator && typeof operator !== 'function') {
                        for (let k = 0; k < operator.length; k++) {
                            if (operator[k].desc) {
                                operator[k].desc = helperBridge.helper.GetCmpColorArray(operator[k].desc[0], operator[k].desc[1], operator[k].desc[2]);
                                // for (let p = 0; p < operator[k].desc.length; p++) {
                                //     let kkk = operator[k].desc[p];
                                //     let tolog = [];
                                //     for (let q = 0; q < kkk.length; q++) {
                                //         tolog.push(kkk[q]);
                                //     }
                                //     console.log(tolog);
                                // }
                            }
                            if (operator[k].oper) {
                                operator[k].oper = helperBridge.regionClickTrans(operator[k].oper);
                            }
                        }
                    }
                    this.scheme.funcList.push(thisFuncList);
                }
            }
        }
    },
    initMultiColor() {
        let thisMultiColor = {};
        for (let key in multiColor) {
            thisMultiColor[key] = {
                region: [0, 0, this.device.width, this.device.height],
                desc: []
            };
            for (let desc of multiColor[key].desc) {
                thisMultiColor[key].desc.push(this.helperBridge.helper.GetFindColorArray(desc[0], desc[1], desc[2]));
            }
            if (multiColor[key].region) {
                let sr = this.helperBridge.getHelper(multiColor[key].region[1], multiColor[key].region[2]).GetPoint(multiColor[key].region[3], multiColor[key].region[4], multiColor[key].region[0]);
                let er = this.helperBridge.getHelper(multiColor[key].region[1], multiColor[key].region[2]).GetPoint(multiColor[key].region[5], multiColor[key].region[6], multiColor[key].region[0]);
                thisMultiColor[key].region = [sr.x, sr.y, er.x, er.y];
            }
        }
        this.multiColor = thisMultiColor;
    },
    findMultiColor(key, inRegion) {
        this.initRedList();
        let region = inRegion || this.multiColor[key].region;
        let desc = this.multiColor[key].desc;
        let similar = this.multiColor[key].similar || this.scheme.commonConfig.multiColorSimilar
        for (let i = 0; i < desc.length; i++) {
            let item = desc[i];
            let point = this.helperBridge.helper.FindMultiColor(region[0], region[1], region[2], region[3], item, similar, 1);
            if (point.x !== -1) {
                console.log(`[${key}]第${i}个查找成功， 坐标为：(${point.x}, ${point.y})`);
                return point;
            }
        }
        return null;
    },
    findMultiColorLoop(key, timeout, inRegion) {
        let times = Math.round(timeout / this.scheme.commonConfig.loopDelay);
        while (times--) {
            this.keepScreen(true);
            let point = this.findMultiColor(key, inRegion);
            if (point) {
                return point;
            }
            sleep(this.scheme.commonConfig.loopDelay);
        }
        return null;
    },
    compareColorLoop (desc, timeout, sign) {
        /**
         * 条件循环多点比色
         *
         * @param description: 色组描述
         * @param sim:         相似度
         * @param offset:      偏移查找
         * @param timeout:     超时时间
         * @param timelag:     间隔时间
         * @param sign:        跳出条件,0为比色成功时返回,1为比色失败时返回
         */
        return this.helperBridge.helper.CompareColorExLoop(desc, this.scheme.commonConfig.colorSimilar, 1, timeout, this.scheme.commonConfig.loopDelay, sign || 0);
    },
    run() {
        return this._run();
    },
    _run() {
        if (this.runThread) return;
        var self = this;
        try {
            if (device.sdkInt >= 24 && !auto.service) {
                toastLog("请开启无障碍服务再启动脚本");
                throw new Error('未开启无障碍服务');
            }
            // helperBridge放进来，funcList里面operator执行时可以从this中取到helperBridge，解决直接导入helperBridge在端报错的问题
            this.helperBridge = helperBridge;
            this.initFuncList();
            this.initMultiColor();
            this.runDate = new Date();
            this.currentDate = new Date();
            this.runTimes = {};
            this.global = {};
            if (null === this.scheme) {
                if (typeof self.stopCallback === 'function') {
                    self.stopCallback();
                }
                return;
            }
        } catch (e) {
            console.error(e);
            if (typeof self.stopCallback === 'function') {
                self.stopCallback();
            }
            return;
        }
        // test start
        // let img = images.captureScreen();
        // img.saveTo('/sdcard/testimg.png');
        // img.recycle();
        // test end
        toastLog(`运行方案[${this.scheme.schemeName}]`);
        // console.log(`运行方案[${this.scheme.schemeName}]`);
        this.runThread = threads.start(function () {
            try {
                while (true) {
                    self.keepScreen(false);
                    for (let i = 0; i < self.scheme.funcList.length; i++) {
                        if (self.oper(self.scheme.funcList[i])) {
                            self.currentDate = new Date();
                            break;
                        }
                    }
                    sleep(self.scheme.commonConfig.loopDelay);
                }
            } catch (e) {
                self.runThread = null;
                if (e.toString().indexOf('com.stardust.autojs.runtime.exception.ScriptInterruptedException') === -1) {
                    console.error($debug.getStackTrace(e));
                }
                if (typeof self.stopCallback === 'function') {
                    self.stopCallback();
                }
            }
        });
        if (typeof this.runCallback === 'function') {
            this.runCallback();
        }
    },
    stop() {
        events.broadcast.emit('SCRIPT_STOP', '');
    },
    _stop() {
        if (null !== this.runThread) {
            if (typeof this.stopCallback === 'function') {
                this.stopCallback();
            }
            this.runThread.interrupt();
        }
        this.runThread = null;
    },
    rerun() {
        events.broadcast.emit('SCRIPT_RERUN', '');
    },

    /**
     * 
     * @param {*} currFunc 
     * @param {*} retest 重试时间
     */
    oper(currFunc, retest) {
        let operator = currFunc.operator; // 需要计算的坐标通过operater传进去使用
        let operatorFunc = currFunc.operatorFunc;
        if (typeof operatorFunc === 'function') {
            if (operatorFunc.call(null, this, operator)) {
                console.log('执行：' + currFunc.name);
                return true;
            }
        } else {
            for (let id = 0; id < operator.length; id++) {
                let item = operator[id];
                let rs;
                if (item.desc && item.desc.length) {
                    rs = helperBridge.helper.CompareColorEx(item.desc, this.scheme.commonConfig.colorSimilar, 0);
                } else {
                    rs = true;
                }
                // console.log(`执行：currFunc.name:${currFunc.name} currFunc.id:${currFunc.id} lastFunc:${this.lastFunc} id:${id} oper:${item.oper} 比色结果:${rs}`);
                if (rs) {
                    retest = retest || item.retest || undefined;
                    if (retest && retest !== -1) {
                        sleep(retest);
                        this.keepScreen();
                        return this.oper(currFunc, -1);
                    }
                    if (!!currFunc.id && this.lastFunc !== currFunc.id && !item.notForCnt) {
                        if (!this.runTimes[currFunc.id]) {
                            this.runTimes[currFunc.id] = 0;
                        }
                        this.runTimes[currFunc.id]++;
                        this.lastFunc = currFunc.id;
                    }
                    if (item.oper) {
                        console.log(`执行：currFunc.name:${currFunc.name} currFunc.id:${currFunc.id} lastFunc:${this.lastFunc} id:${id} oper:${item.oper}`);
                        helperBridge.regionClick(item.oper, this.scheme.commonConfig.afterClickDelayRandom);
                    }
                    return true;
                }
            }
        }
    }
}

events.broadcast.on('SCRIPT_STOP', () => {
    script._stop();
});

events.broadcast.on('SCRIPT_RUN', () => {
    script._run();
});

events.broadcast.on('SCRIPT_RERUN', () => {
    script._stop();
    setTimeout(() => {
        script._run();
    }, 510);
});

export default script;