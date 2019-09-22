importClass(android.widget.TextView.BufferType);

//请求竖屏截图
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}

var zzFloaty = require('./zz_modules/zzFloaty');

var mainLayout = <frame>
    <vertical>
        <viewpager id="webpager">
            <frame>
                <vertical>
                    <text text="功能选择" textSize="16sp"/>
                    <input id="input_funcSelect" text="1,2" />
                </vertical>
            </frame>
            <frame>
                <vertical>
                    <text text="调试配置界面" textSize="22sp" />
                </vertical>
            </frame>
        </viewpager>
    </vertical>
    <horizontal gravity="bottom|right">
        <button id="runScript" text="运行"/>
    </horizontal>
</frame>;

zzFloaty.init({
    storage: storages.create('assttyys'),
    mainLayout: mainLayout,
    onMainWinShow: function () {
        assttyys.stopScript();
        assttyys.loadUserConfig();
    },
    onMainWinHide: function () {
        assttyys.saveUserConfig();
    },
    onLoaded: function () {
        assttyys.bindEvents();
    },
    beforeExit: function () {
        assttyys.stopScript();
    }
});


var assttyys = {

    /**
     * 需要保存的控件的名字
     */
    toSaveEleNames: ['input_funcSelect'],

    mainWin: zzFloaty.mainWin,

    scriptThread: null,

    /**
     * 保存用户配置
     */
    saveUserConfig: function () {
        var that = this;
        threads.start(function () {
            var userConfigs = {};
            var storage = storages.create('assttyys');
            for (let i = 0; i < that.toSaveEleNames.length; i++) {
                var name = that.toSaveEleNames[i];
                userConfigs[name] = that.mainWin[name].text();
            }
            storage.put('userConfigs', userConfigs);
        });
    },

    /**
     * 加载用户配置(这个地方不能用多线程处理，只有主线程才能操作ui)
     */
    loadUserConfig: function () {
        var that = this;
        var storage = storages.create('assttyys');
        var userConfigs = storage.get('userConfigs');
        if (!userConfigs) {
            userConfigs = {};
            var storage = storages.create('assttyys');
            for (let i = 0; i < that.toSaveEleNames.length; i++) {
                var name = that.toSaveEleNames[i];
                userConfigs[name] = '';
            }
            storage.put('userConfigs', userConfigs);
        }

        for (let i = 0; i < that.toSaveEleNames.length; i++) {
            var name = that.toSaveEleNames[i];
            that.mainWin[name].text(userConfigs[name]);
        }
    },

    /**
     * 执行脚本.
     */
    runScript: function () {
        var that = this;
        zzFloaty.togWin.action.setColorFilter(colors.argb(255, 255, 153, 0));
        this.scriptThread = threads.start(function () {
            var userConfigs = storages.create('assttyys').get('userConfigs');
            var script = require('./script');
            script.setUserConfigs(userConfigs);
            script.run();
        });
    },

    /**
     * 停止脚本.
     */
    stopScript: function () {
        zzFloaty.togWin.action.setColorFilter(colors.argb(0, 0, 0, 0));
        if (null !== this.scriptThread) {
            this.scriptThread.interrupt();
            this.scriptThread = null;
        }
    },

    /**
     * 绑定事件.
     */
    bindEvents: function () {
        var that = this;
        this.mainWin.runScript.on('click', function () {
            zzFloaty.mainWinHide();
            that.runScript();
        });
    }
}




// zzFloaty.

// zzFloaty.mainWin

// 不结束
setInterval(() => {
    if (!assttyys.scriptThread) {
        // zzFloaty.togWin.action.setColorFilter(colors.argb(0, 0, 0, 0));
    }
    // console.log(assttyys.scriptThread);
}, 1000);
