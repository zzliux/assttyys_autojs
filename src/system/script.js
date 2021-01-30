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
    setRunCallback: function (callback) {
        this.runCallback = callback;
    },
    setStopCallback: function (callback) {
        this.stopCallback = callback;
    },
    initFuncList: function () {
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
                            operator[k].desc = helperBridge.helper.GetCmpColorArray(operator[k].desc[0], operator[k].desc[1], operator[k].desc[2]);
                            operator[k].oper = helperBridge.regionClickTrans(operator[k].oper);
                        }
                    }
                    this.scheme.funcList.push(thisFuncList);
                }
            }
        }
    },
    run: function () {
        var self = this;
        this.initFuncList();
        if (null === this.scheme) {
            if(typeof self.stopCallback === 'function') {
                self.stopCallback();
            }
            return;
        }
        this.runThread = threads.start(function () {
            try {
                // var img = images.captureScreen()
                // images.save(img, '/sdcard/1.png');
                while (true) {
                    helperBridge.helper.KeepScreen(false);
                    for (let i = 0; i < self.scheme.funcList.length; i++) {
                        let operator = self.scheme.funcList[i].operator;
                        if (typeof operator === 'function') {
                            operator.apply(this);
                        } else {
                            // TODO 公共
                            operator.forEach(item => {
                                let rs = helperBridge.helper.CompareColorEx(item.desc, self.scheme.commonConfig.colorSimilar, 0);
                                if (rs) {
                                    console.log('执行：' + self.scheme.funcList[i].name);
                                    console.log(item.oper);
                                    helperBridge.regionClick(item.oper);
                                }
                            });
                        }
                    }
                    sleep(self.scheme.commonConfig.loopDelay);
                    // console.log('运行中。');
                }
                
            } catch (e) {
                self.runThread = null;
                console.log(e);
                if(typeof self.stopCallback === 'function') {
                    self.stopCallback();
                }
            }
        });
        if (typeof this.runCallback === 'function') {
            this.runCallback();
        }
    },
    stop: function () {
        if (null !== this.runThread) {
            this.runThread.interrupt();
            if(typeof this.stopCallback === 'function') {
                this.stopCallback();
            }
        }
        this.runThread = null;
    }
}

export default script;