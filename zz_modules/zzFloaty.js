/**
 * 传入的option里面的togWinLogo需要base64后的图片，而且长宽一定是480*480，不然会出毛病
 * @author: zzliux
 */


importClass(android.view.View);

var zzFloaty = {
    mainWin: null,
    togWin: null,
    mainWinShown: false,

    isMovingTogWin: false,

    togWinDownTime: 0,

    /**
     * togWin 被点击时的 x, y 坐标
     */
    togWinDownX: 0,
    togWinDownY: 0,

    /**
     * togWin 的 x, y 坐标
     */
    togWinX: 220,
    togWinY: 220,

    /**
     * 屏幕宽高
     */
    screenX: 1080,
    screenY: 1920,

    // 存储
    storage: null,

    /**
     * option = {
     *     storage: <Storage实例>. storages.get('xxx')
     *     mainLayout: <XML>. 主布局
     *     onMainWinShow: <Function>. 主布局show时回调
     *     onMainWinHide: <Function>. 主布局hide时回调
     *     onLoaded: <Function>. 悬浮加载完成后的回调
     *     beforeExit: <Function>. 程序退出前回调
     * }
     */
    init: function (option) {

        var dm = context.getResources().getDisplayMetrics();
        this.screenX = dm.widthPixels;
        this.screenY = dm.heightPixels;

        this.option = option;
        if (!option.storage) {
            option.storage = storages.create('zzFloaty');
        }

        this.storage = option.storage;
        var zzFloatyConfigs = this.storage.get('zzFloatyConfigs');
        // 恢复上次关闭时的坐标
        if (zzFloatyConfigs) {
            this.togWinX = zzFloatyConfigs.togWinX;
            this.togWinY = zzFloatyConfigs.togWinY;
        }

        this._initWin();
        this._intiEvents();

        if (option.onLoaded) {
            setTimeout(function () {
                option.onLoaded();
            }, 0);
        }
    },

    _initWin: function () {
        var option = this.option;

        this.mainWin = floaty.rawWindow('<frame id="main" bg="#eeeeeeee">' + option.mainLayout + '</frame>');
        this.mainWin.main.setVisibility(View.GONE);
        this.mainWin.setPosition(99999, 99999);

        var ayLogo = null;
        if (option.togWinLogo) {
            ayLogo = option.togWinLogo;
        } else {
            ayLogo = require('./assets/ay.png');
        }
        this.togWin = floaty.rawWindow('<frame><img id="action" w="50dp" h="50dp" radius="240" alpha="0.7" src="' + ayLogo + '"/></frame>');
        this.togWin.setPosition(this.togWinX, this.togWinY);
    },

    _intiEvents: function () {
        var that = this;
        this.togWin.action.setOnTouchListener(function (view, event) {
            switch (event.getAction()) {
                case event.ACTION_DOWN:
                    var dm = context.getResources().getDisplayMetrics();
                    that.screenX = dm.widthPixels;
                    that.screenY = dm.heightPixels;

                    that.togWinDownX = event.getRawX();
                    that.togWinDownY = event.getRawY();

                    that.togWinX = that.togWin.getX();
                    that.togWinY = that.togWin.getY();


                    that.togWinDownTime = new Date().getTime();
                    break;
                case event.ACTION_MOVE:
                    if (!that.isMovingTogWin && (Math.abs(event.getRawY() - that.togWinDownY) > 50 || Math.abs(event.getRawX() - that.togWinDownX) > 50)) {
                        that.isMovingTogWin = true;
                    }
                    if (that.isMovingTogWin) {
                        that.togWin.setPosition(that.togWinX + (event.getRawX() - that.togWinDownX),
                            that.togWinY + (event.getRawY() - that.togWinDownY));
                    }
                    if (new Date().getTime() - that.togWinDownTime > 1000 && !that.isMovingTogWin) {
                        
                        that.togWinX = that.togWin.getX();
                        that.togWinY = that.togWin.getY();
                        that.savePositionToStorage();

                        if (that.option.beforeExit) {
                            that.option.beforeExit();
                        }

                        exit();
                    }

                    break;
                case event.ACTION_UP:
                    that.isMovingTogWin = false;
                    if (!that.isMovingTogWin && Math.abs(event.getRawY() - that.togWinDownY) < 50 && Math.abs(event.getRawX() - that.togWinDownX) < 50) {
                        that.mainWinToggle();
                    }

                    // 贴边时收起
                    var isNearBorder = false;
                    var nearBorderDistance = 100;
                    var hideDistance = 50;

                    that.togWinX = that.togWin.getX();
                    that.togWinY = that.togWin.getY();

                    if (that.togWinX < nearBorderDistance) {
                        isNearBorder = true;
                        that.togWinX = -hideDistance;
                    } else if (that.togWinX + 150 > that.screenX - nearBorderDistance) {
                        isNearBorder = true;
                        that.togWinX = that.screenX - 150 + hideDistance;
                    } else if (that.togWinY < nearBorderDistance) {
                        isNearBorder = true;
                        that.togWinY = -hideDistance;
                    } else if (that.togWinY + 150 > that.screenY - nearBorderDistance) {
                        isNearBorder = true;
                        that.togWinY = that.screenY - 150 + hideDistance;
                    }

                    if (isNearBorder) {
                        that.togWin.setPosition(that.togWinX, that.togWinY)
                    }
                    break;
            }
            return true;
        });
    },

    savePositionToStorage: function () {
        var zzFloatyConfigs = this.storage.get('zzFloatyConfigs');
        if (!zzFloatyConfigs) {
            zzFloatyConfigs = {};
        }
        zzFloatyConfigs.togWinX = this.togWinX;
        zzFloatyConfigs.togWinY = this.togWinY;
        this.storage.put('zzFloatyConfigs', zzFloatyConfigs);
    },

    /**
     * 隐藏主悬浮
     */
    mainWinHide: function () {
        // 让主悬浮失去focus(不然的话外面无法打字)
        this.mainWin.disableFocus();
        this.mainWin.main.setVisibility(View.GONE);
        this.mainWin.setPosition(99999, 99999);
        if (this.option.onMainWinHide) {
            this.option.onMainWinHide();
        }
    },

    /**
     * 显示主悬浮
     */
    mainWinShow: function () {
        var dm = context.getResources().getDisplayMetrics();
        this.screenX = dm.widthPixels;
        this.screenY = dm.heightPixels;

        var x = this.screenX * 0.7;
        var y = this.screenY * 0.7;
        var posX = (this.screenX - x) / 2;
        var posY = (this.screenY - y) / 2;
        this.mainWin.setSize(x, y);
        this.mainWin.setPosition(posX, posY);
        this.mainWin.main.setVisibility(View.VISIBLE);
        // 手动focus到主悬浮上(不然的话里面无法打字)
        this.mainWin.requestFocus();
        if (this.option.onMainWinShow) {
            this.option.onMainWinShow();
        }
    },

    /**
     * 切换主悬浮的显示/隐藏
     */
    mainWinToggle: function () {
        if (this.mainWinShown) {
            this.mainWinShown = false;
            this.mainWinHide();
        } else {
            this.mainWinShown = true;
            this.mainWinShow();
        }
    }
};

module.exports = zzFloaty;
