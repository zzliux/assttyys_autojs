/*
 * @Author: 大柒
 * @QQ: 531310591@qq.com
 * @Date: 2021-04-18 04:22:51
 * @Version: Auto.Js Pro
 * @Description: 悬浮按钮模块入口
 * @LastEditors: 大柒
 * @LastEditTime: 2021-04-19 16:44:52
 */
/*eslint-disable */
global.FloatButton = function () {
    require('./widget/RoundButton');
    let fbUtil = require('./js/init');
    let CreateRoundButtonView = require('./js/CreateRoundButtonView');
    let Anim = require('./js/Anim');
    let mAnim;
    let mWindows = { logo: null, menu: null };
    let mMenuViews = [];
    let mViewUtils = {};
    let mItemsXY = [];
    let mActions = new Array();
    let [w, h] = [device.width, device.height];

    let mConfig = {};
    mConfig.y = 0.5;
    mConfig.size = fbUtil.dp2px(40);
    mConfig.tint = '#00000000';
    mConfig.color = '#FFFFFF';
    mConfig.isInit = false;
    mConfig.isShow = false;
    mConfig.padding = fbUtil.dp2px(8);
    mConfig.logoAlpha = 0.7;
    mConfig.isMenuOpen = false;
    mConfig.isOrientation = fbUtil.isHorizontalScreen();
    mConfig.menuRadius = fbUtil.dp2px(80);
    mConfig.timer = null;
    //动画
    mConfig.anim = {};
    //状态
    mConfig.state = {};
    mConfig.state.anim = false;
    mConfig.state.menuOpen = false;
    mConfig.state.direction = false;
    mConfig.state.orientation = fbUtil.isHorizontalScreen();
    //on事件
    mConfig.eventActions = {};
    mConfig.eventActions.show = new Function();//显示事件
    mConfig.eventActions.hide = new Function();//隐藏事件
    mConfig.eventActions.close = new Function();//关闭事件
    mConfig.eventActions.item_click = new Function();//点击事件
    mConfig.eventActions.direction_changed = new Function();//停靠方向改变事件
    mConfig.eventActions.menu_state_changed = new Function();//菜单状态改变事件
    mConfig.eventActions.orientation_changed = new Function();//屏幕方向改变事件
    //时间
    mConfig.time = {};
    mConfig.time.menu = 210;//菜单动画时间
    mConfig.time.show = 500;//logo 显示动画时间
    mConfig.time.direction = 350;//停靠动画时间
    mConfig.time.buttonAnim = 210;//按钮切换动画时间
    mConfig.time.autoCloseMenu = 0;//菜单自动关闭时间

    // 展开扇形角度
    mConfig.angle = 180;

    function FloatButton() {
        mAnim = new Anim(this);
        mConfig.anim.stateChanged = mAnim.stateChanged;

        //监听初始化完成
        new ObjectDefinePro(mConfig, 'isInit', (value) => {
            if (value) {
                for (let action of mActions) action();
                mActions = [];
            }
        });

        new ObjectDefinePro(mConfig, 'isShow', (value) => {
            mConfig.eventActions[value ? 'show' : 'hide'](value);
        });

        //监听Size变化
        new ObjectDefinePro(mConfig, 'size', (value) => {
            postAction(() => {
                for (let key in mViewUtils) mViewUtils[key].setSize(value);
                updateItemCoordinate();//更新坐标
                updateMenuWindow();
            });
        });

        //监听Padding变化
        new ObjectDefinePro(mConfig, 'padding', (value) => {
            postAction(() => { for (let key in mViewUtils) mViewUtils[key].setPadding(value) });
        });

        new ObjectDefinePro(mConfig.state, 'menuOpen', value => {
            mAnim.menu(value);
            mConfig.eventActions.menu_state_changed(value);
        });

        // //监听左右停靠方向发生变化
        new ObjectDefinePro(mConfig.state, 'direction', value => {
            mConfig.eventActions.direction_changed(value);
        });

        //监听屏幕方向发生变化
        new ObjectDefinePro(mConfig.state, 'orientation', value => {
            if (mConfig.isOrientation == value) return;
            mConfig.isOrientation = value;
            postAction(() => {
                if (mConfig.state.menuOpen) {
                    mConfig.state.menuOpen = false;
                }
                if (value) {
                    [w, h] = [device.height, device.width];
                } else {
                    [w, h] = [device.width, device.height];
                }
                updateLogoWindow();
                updateMenuWindow();
            });
            mConfig.eventActions.orientation_changed(value);
        });

        //初始化FloatButton
        initFloatButton();
    }

    FloatButton.prototype.setIcon = function (value) {
        postAction(() => mViewUtils.logo.setIcon(value));
    }

    FloatButton.prototype.setTint = function (value) {
        postAction(() => mViewUtils.logo.setTint(value));
    }

    FloatButton.prototype.setColor = function (value) {
        postAction(() => mViewUtils.logo.setColor(value));
    }

    FloatButton.prototype.addItem = function (name) {
        let viewUtil = new CreateRoundButtonView(name, mConfig);
        mViewUtils[name] = viewUtil;
        mMenuViews.push({name, view: viewUtil.getView()}); // 改为数组存储
        postAction(() => {
            mWindows.menu.content.addView(viewUtil.getView());
            updateItemCoordinate();
            updateMenuWindow();
            mAnim.createAnim(mItemsXY, mMenuViews);
        });
        return viewUtil;
    }

    FloatButton.prototype.insertItem = function (name, index) {
        let viewUtil = new CreateRoundButtonView(name, mConfig);
        mViewUtils[name] = viewUtil;
        mMenuViews.splice(index, 0, {name, view: viewUtil.getView()}); // 改为数组插入
        postAction(() => {
            mWindows.menu.content.addView(viewUtil.getView(), index);
            updateItemCoordinate();
            updateMenuWindow();
            mAnim.createAnim(mItemsXY, mMenuViews);
        });
        return viewUtil;
    }

    FloatButton.prototype.removeItem = function (name) {
        let index = mMenuViews.findIndex(item => item.name === name);
        if (index === -1) return;
        postAction(() => {
            mWindows.menu.content.removeView(mMenuViews[index].view);
            mMenuViews.splice(index, 1);
            delete mViewUtils[name];
            updateItemCoordinate();
            updateMenuWindow();
            mAnim.createAnim(mItemsXY, mMenuViews);
        });
    }

    FloatButton.prototype.on = function (eventType, eventAction) {
        mConfig.eventActions[eventType] = eventAction;
    }

    FloatButton.prototype.setAllButtonSize = function (dp) {
        mConfig.size = fbUtil.dp2px(dp);
    }

    FloatButton.prototype.setAllButtonPadding = function (dp) {
        mConfig.padding = fbUtil.dp2px(dp);
    }

    FloatButton.prototype.setMenuRadius = function (dp) {
        mConfig.menuRadius = fbUtil.dp2px(dp);
        postAction(() => { updateMenuWindow(); updateItemCoordinate() });
    }

    FloatButton.prototype.getConfig = function () {
        return mConfig;
    };


    FloatButton.prototype.show = function (action) {
        action = action || new Function();
        if (mConfig.isShow) {
            action();
            return;
        }
        postAction(() => mAnim.show(action));
    }

    FloatButton.prototype.hide = function (action) {
        if (!mConfig.isShow) {
            action();
            return;
        }
        postAction(() => mAnim.hide(action));
    }

    FloatButton.prototype.init = function () {
        if (mConfig.isInit) {
            toastLog('不要重复初始化!');
            return;
        }
        initFloatButton();
    }

    FloatButton.prototype.close = function () {
        if (mConfig.isInit) {
            for (let key in mWindows) {
                mWindows[key].close();
            }
            mConfig.isInit = false;
        }
    }

    FloatButton.prototype.getWindow = function (name) {
        return mWindows[name];
    }

    FloatButton.prototype.getView = function (name) {
        return mViewUtils[name].getView();
    }

    FloatButton.prototype.getWidth = function () {
        return w;
    }

    FloatButton.prototype.getHeight = function () {
        return h;
    }

    FloatButton.prototype.getViewUtil = function (name) {
        return mViewUtils[name] || null;
    }

    FloatButton.prototype.setAutoCloseMenuTime = function (value) {
        if (value <= 0) {
            mConfig.time.autoCloseMenu = 0;
        } else if (parseInt(value) < 2000) {
            mConfig.time.autoCloseMenu = 2000;
        } else {
            mConfig.time.autoCloseMenu = parseInt(value);
        }
    }

    FloatButton.prototype.setMenuOpen = function (value, action) {
        action = action || new Function();
        if (!mConfig.isShow) {
            action(false);
            return;
        }
        action(true);
        mConfig.state.menuOpen = value;
    }

    FloatButton.prototype.setMenuOpenAngle = function (value) {
        mConfig.angle = value;
    }


    function initFloatButton() {
        if (mConfig.isInit) return;
        mWindows.logo = null;
        mWindows.menu = null;
        ui.isUiThread() ? threads.start(initWindow) : initWindow();
    }

    //初始化悬浮窗
    function initWindow() {
        mWindows.menu = floaty.rawWindow("<frame id='content' w='*' h='*' visibility='invisible' />");
        mWindows.logo = floaty.rawWindow("<frame id='content' w='auto' h='auto' />");
        //修复 更新悬浮窗LayoutParams 报错
        ui.run(() => {
            mWindows.menu.content.getRootView().getLayoutParams().alpha = 0.8; // alpha设置0.8，在安卓12以上实现悬浮窗穿透（好像失效了）
            mWindows.logo.content.getRootView().getLayoutParams().alpha = 0.8; // alpha设置0.8，在安卓12以上实现悬浮窗穿透（好像失效了）
            mWindows.logo.setSize(-2, -2);
            mWindows.menu.setSize(-2, -2);
            mWindows.logo.setTouchable(false);
            mWindows.menu.setTouchable(false);
            mViewUtils.logo = new CreateRoundButtonView('logo', mConfig);
            mViewUtils.logo.setSize(mConfig.size);
            mViewUtils.logo.setPadding(mConfig.padding);
            mWindows.logo.content.addView(mViewUtils.logo.getView());
            mViewUtils.logo.getView().attr('alpha', mConfig.logoAlpha);
            let mx = (mConfig.state.direction ? mConfig.size : -mConfig.size);
            mViewUtils.logo.getView().setTranslationX(mx);
        });
        //Logo悬浮窗更新
        updateLogoWindow();
        createTouchListener(mWindows.logo);
        //初始化完成
        //定时器 监听屏幕旋转
        //广播在7.4.1无法使用
        setInterval(() => {
            mConfig.state.orientation = fbUtil.isHorizontalScreen();
        }, 500);
        mConfig.isInit = true;
    }

    //更新Logo悬浮窗
    function updateLogoWindow() {
        mConfig.state.orientation = fbUtil.isHorizontalScreen();
        let x = (mConfig.state.direction ? w - mConfig.size + mConfig.padding : -mConfig.padding);
        let y = parseInt(h * mConfig.y - mConfig.size / 2);
        mWindows.logo.setPosition(x, y);
    }

    //更新Menu悬浮窗
    function updateMenuWindow() {
        let lw = mWindows.logo;
        let size = mConfig.size / 2;
        let [w1, y1] = [mWindows.menu.getWidth(), lw.getY()];
        let x = (mConfig.state.direction ? w - w1 - size + mConfig.padding : -mConfig.padding + size);
        let y = y1 - mConfig.menuRadius;
        let mGravity = 'center_vertical' + (mConfig.state.direction ? '|right' : '');
        ui.run(() => {
            let view;
            for (let item of mMenuViews) { // 改为遍历数组
                view = item.view;
                view.attr('layout_gravity', mGravity)
            }
        });
        mWindows.menu.setPosition(x, y);
    }

    //更新item坐标
    function updateItemCoordinate() {
        mItemsXY = [];
        let arr = { x: [], y: [] };
        let len = mMenuViews.length; // 改为获取数组长度
        let angle = mConfig.angle / (len - 1);
        let firstAngle = 90 - mConfig.angle / 2;
        let degree, value, x, y;
        let mr = mConfig.menuRadius;
        for (let i = 0; i < 2; i++) {
            degree = i ? firstAngle : 360 - firstAngle;
            arr.x[i] = [];
            arr.y[i] = [];
            for (let e = 0; e < len; e++) {
                value = degree * Math.PI / 180;
                x = parseInt(mr * Math.sin(value));
                y = -parseInt(mr * Math.cos(value));
                arr.x[i][e] = (Math.abs(x) < 10 ? 0 : x);
                arr.y[i][e] = (Math.abs(y) < 10 ? 0 : y);
                i ? degree += angle : degree -= angle;
            }
        }
        mItemsXY = arr;
        mWindows.menu.setSize(mr + mConfig.size, mr * 2 + mConfig.size);
    }

    function ObjectDefinePro(obj, key, action) {
        var mValue = obj[key];
        Object.defineProperty(obj, key, {
            get: function () {
                return mValue;
            },
            set: function (newval) {
                mValue = newval;
                action(newval);
            }
        })
    }

    function postAction(action) {
        mConfig.isInit ? ui.run(action) : mActions.push(() => ui.run(action));
    }

    function createTouchListener(win) {
        let x, y, x1, y1, winX, winY, isMove = false;
        mViewUtils.logo.getView().setOnTouchListener(function (view, event) {
            if (mConfig.state.anim) return true;
            switch (event.getAction()) {
                case event.ACTION_DOWN:
                    isMove = false;
                    x = event.getRawX();
                    y = event.getRawY();
                    winX = win.getX();
                    winY = win.getY();
                    return true;
                case event.ACTION_MOVE:
                    if (!isMove) {
                        if (Math.abs(event.getRawX() - x) > 30 || Math.abs(event.getRawY() - y) > 30) {
                            view.attr('alpha', 1);
                            isMove = true;
                        }
                    } else if (!mConfig.isMenuOpen) {
                        x1 = winX + (event.getRawX() - x);
                        win.setPosition(x1, winY + (event.getRawY() - y));
                    }
                    return true;
                case event.ACTION_UP:
                    if (mConfig.state.anim) return true;
                    if (!isMove) {
                        mConfig.state.menuOpen = !mConfig.state.menuOpen;
                    } else if (!mConfig.isMenuOpen) {
                        mConfig.state.direction = (winX + (event.getRawX() - x) > (w / 2) - (mConfig.size / 2))
                        mAnim.direction(win.getX(), win.getY(), updateMenuWindow);
                    }
                    if (isMove) updateMenuWindow();
                    isMove = false;
                    return true;
            }
            return true;
        });
    }

    return FloatButton;
}();

// module.exports = FloatButton;
export default FloatButton;