import store from '@/system/store';
import funcList from '@/common/funcList';
import helperBridge from '@/system/helperBridge';
import _ from 'lodash';

var script = {
    runThread: null,
    runCallback: null,
    stopCallback: null,
    scheme: null,
    enabledFuncList: null,
    keepScreen(mode) {
        helperBridge.helper.KeepScreen(mode);
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
    run() {
        var self = this;
        // helperBridge放进来，funcList里面operator执行时可以从this中取到helperBridge，解决直接导入helperBridge在端报错的问题
        this.helperBridge = helperBridge;
        this.initFuncList();
        if (null === this.scheme) {
            if (typeof self.stopCallback === 'function') {
                self.stopCallback();
            }
            return;
        }
        this.runThread = threads.start(function () {
            try {
                while (true) {
                    self.keepScreen(false);
                    for (let i = 0; i < self.scheme.funcList.length; i++) {
                        if (self.oper(self.scheme.funcList[i])) {
                            break;
                        }
                    }
                    sleep(self.scheme.commonConfig.loopDelay);
                }
            } catch (e) {
                self.runThread = null;
                console.log(e);
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
        if (null !== this.runThread) {
            this.runThread.interrupt();
            if (typeof this.stopCallback === 'function') {
                this.stopCallback();
            }
        }
        this.runThread = null;
    },
    oper(currFunc) {
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
                let rs = helperBridge.helper.CompareColorEx(item.desc, this.scheme.commonConfig.colorSimilar, 0);
                if (rs) {
                    console.log('执行：' + currFunc.name + '_' + id);
                    if (item.oper) {
                        helperBridge.regionClick(item.oper, this.scheme.commonConfig.afterClickDelayRandom);
                    }
                    return true;
                }
            }
        }
    }
}

export default script;