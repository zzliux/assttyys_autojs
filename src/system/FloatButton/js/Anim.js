/*
 * @Author: 大柒
 * @QQ: 531310591@qq.com
 * @Date: 2021-04-18 06:14:13
 * @Version: Auto.Js Pro
 * @Description: 动画模块
 * @LastEditors: 大柒
 * @LastEditTime: 2021-04-22 20:27:28
 */
/*eslint-disable */
function Anim(gd) {
    let fb = gd;
    let data = fb.getConfig();
    let mAnimList = { left: [], right: [] };
    let resources = resources = context.getResources();
    let status_bar_height = resources.getDimensionPixelSize(resources.getIdentifier("status_bar_height", "dimen", "android"));

    //动画方法
    importClass(android.animation.ValueAnimator)
    importClass(android.animation.ObjectAnimator);
    importClass(android.animation.AnimatorSet);
    importClass(android.view.animation.BounceInterpolator);
    let int = (n, v, a) => { return ObjectAnimator.ofInt(v, n, colors.parseColor(a[0]), colors.parseColor(a[1])) };
    let tx = (v, a) => { return ObjectAnimator.ofFloat(v, "translationX", a) };
    let ty = (v, a) => { return ObjectAnimator.ofFloat(v, "translationY", a) };
    let tz = (v, a) => { return ObjectAnimator.ofFloat(v, "translationZ", a) };
    let ap = (v, a) => { return ObjectAnimator.ofFloat(v, "alpha", a) };
    let sx = (v, a) => { return ObjectAnimator.ofFloat(v, "scaleX", a) };
    let sy = (v, a) => { return ObjectAnimator.ofFloat(v, "scaleY", a) };
    let pt = (a, t, d) => { let s = new AnimatorSet(); s.playTogether(a); s.setStartDelay(d = d || 0); s.setDuration(t = t || 300); s.start(); return s; };
    let inPt = (s, t, d) => { s.setEvaluator(new android.animation.ArgbEvaluator()); s.setStartDelay(d = d || 0); s.setDuration(t = t || 300); s.start(); return s; };
    let al = (a, f) => { a.addListener({ onAnimationEnd: f }) };


    this.show = function (action) {
        action = action || new Function();
        ui.run(() => {
            data.state.anim = true;
            fb.getView('logo').attr("visibility", "visible");
            var mx = data.state.direction ? [data.size, 0] : [-data.size, 0];
            fb.getView('logo').setTranslationX(mx);
            data.isShow = true;
            al(pt([tx(fb.getView('logo'), mx)], data.time.show), () => {
                fb.getWindow('logo').setTouchable(true);
                data.state.anim = false;
                data.isShow = true;
                action()
            })
        });
    }

    this.hide = function (action) {
        let lw = fb.getWindow('logo')
        let t = this;
        let arr;
        let mAction = function () {
            arr = (data.state.direction ? [0, data.size] : [0, -data.size]);
            pt([tx(fb.getView('logo'), arr)], data.time.show);;
            data.isShow = false;
        }
        ui.run(() => {
            lw.setTouchable(false);
            if (data.state.menuOpen) {
                t.menu(!data.state.menuOpen, mAction);
                data.state.menuOpen = false;
            } else {
                mAction();
            }
        });

    }

    /**
     * 停靠动画
     * 修复 悬浮球停靠时超出屏幕问题
     * @param {*} x 
     * @param {*} y 
     */
    this.direction = function (x, y, action) {
        action = action || new Function();
        data.state.anim = true;
        let d = data.state.direction
        let width = fb.getWidth();
        let x1 = (d ? width - data.size + data.padding : -data.padding);
        let y1 = 0;
        let lw = fb.getWindow('logo');
        let lbv = fb.getView('logo');
        ui.run(() => {
            lbv.attr('alpha', data.logoAlpha);
            let f;
            let h = fb.getHeight();
            let w = Math.abs(x - x1);
            //计算Y值是否超出屏幕
            let mAnimationUpdate;
            if (y < status_bar_height) {
                //超出上方屏幕
                y1 = Math.abs(y - status_bar_height);
                data.y = (Math.round((y + y1) / h * 100) / 100.00);
                mAnimationUpdate = (x > x1)
                    ? (animator) => {
                        f = animator.getAnimatedValue();
                        lw.setPosition(x - w * f, y + y1 * f);
                    }
                    : (animator) => {
                        f = animator.getAnimatedValue();
                        lw.setPosition(x + w * f, y + y1 * f);
                    }
            } else if (lw.getY() > h - data.size) {
                //超出下方屏幕
                y1 = Math.abs(y - (h - data.size - status_bar_height));
                data.y = (Math.round((y - y1) / h * 100) / 100.00);
                mAnimationUpdate = (x > x1)
                    ? (animator) => {
                        f = animator.getAnimatedValue();
                        lw.setPosition(x - w * f, y - y1 * f);
                    }
                    : (animator) => {
                        f = animator.getAnimatedValue();
                        lw.setPosition(x + w * f, y - y1 * f);
                    }
            } else {
                //正常
                data.y = (Math.round(y / h * 100) / 100.00);
                mAnimationUpdate = (x > x1)
                    ? (animator) => {
                        f = animator.getAnimatedValue();
                        lw.setPosition(x - w * f, y);
                    }
                    : (animator) => {
                        f = animator.getAnimatedValue();
                        lw.setPosition(x + w * f, y);
                    }
            }
            //动画
            let anim = ValueAnimator.ofFloat(0, 1);
            anim.setDuration(data.time.direction);
            anim.setInterpolator(new BounceInterpolator());
            anim.addUpdateListener(new ValueAnimator.AnimatorUpdateListener({
                onAnimationUpdate: mAnimationUpdate
            }));
            anim.addListener({
                onAnimationEnd: function () {
                    data.state.anim = false;
                    action();
                }
            });
            anim.start();
        });
    }

    //菜单动画
    this.menu = function (value, action) {
        action = action || new Function();
        if (data.isMenuOpen == value || data.state.anim) {
            action();
            return;
        };
        data.state.anim = true;//开启动画占用防止动画多开
        let mw = fb.getWindow('menu');
        let lbv = fb.getView('logo');
        ui.run(() => {
            value ? mw.content.attr("visibility", "visible") : mw.setTouchable(false);
            //移除定时器
            if (data.timer != null) {
                clearTimeout(data.timer);
                data.timer = null;
            };
            lbv.attr('alpha', 1);
            //获取要执行的动画集合
            let mAnim = mAnimList[data.state.direction ? 'right' : 'left'][value ? 0 : 1];
            al(pt(mAnim, data.time.menu), () => {
                if (value) {
                    mw.setTouchable(true);
                    if (data.time.autoCloseMenu != 0) {
                        data.timer = setTimeout(() => {
                            data.state.menuOpen = false;
                            data.timer = null;
                        }, data.time.autoCloseMenu);
                    }
                } else {
                    lbv.attr('alpha', data.logoAlpha);
                    mw.setTouchable(false);
                    mw.content.attr('visibility', 'invisible');
                }
                data.state.anim = false;
                data.isMenuOpen = value;
                action()
            });
        });
    }

    this.stateChanged = function (state, datas, view) {
        //强制执行动画 
        // data.state.anim = true;
        let e = state ? ['2', '1'] : ['1', '2'];
        let time = data.time.buttonAnim;
        let mColorEvaluator = function (value, colorstr) {
            view.attr("backgroundTint", colorstr);//改变背景着色
        }
        let mColorEvaluator1 = function (value, colorstr) {
            view.attr("tint", colorstr);//改变背景着色
        }
        ui.run(() => {
            let mColorAnim = ObjectAnimator.ofObject(view, "color", new ColorEvaluator(true, mColorEvaluator), datas['color' + e[0]], datas['color' + e[1]]);
            let mColorAnim1 = ObjectAnimator.ofObject(view, "color", new ColorEvaluator(true, mColorEvaluator1), datas['tint' + e[0]], datas['tint' + e[1]]);
            var mScaleXAnim = ObjectAnimator.ofFloat(view, "scaleX", [1, 0.7, 1]);
            var mScaleYAnim = ObjectAnimator.ofFloat(view, "scaleY", [1, 0.7, 1]);
            let anims = new AnimatorSet();
            anims.playTogether(mColorAnim, mColorAnim1, mScaleXAnim, mScaleYAnim);
            anims.setDuration(time);
            // anims.addListener({
            //     onAnimationEnd: function () {
            //         data.state.anim = false;
            //     }
            // })
            anims.start();
            setTimeout(() => {
                view.attr('src', datas['icon' + e[1]]);
                if (datas[`rotation${e[1]}`]) {
                    view.setRotation(datas[`rotation${e[1]}`]);
                }
            }, time / 2);
        });

    }

    //创建动画
    this.createAnim = function (data, views) {
        mAnimList = { left: [], right: [] };
        mAnimList.left[0] = getAnim(1, true);
        mAnimList.left[1] = getAnim(1, false);
        mAnimList.right[0] = getAnim(0, true);
        mAnimList.right[1] = getAnim(0, false);
        function getAnim(e, isShow) {
            let arr = [];
            let value, view;
            for (let i = 0; i < views.length; i++) { // 改为遍历数组
                view = views[i].view; // 获取view对象
                value = i; // 直接使用数组索引
                arr.push(tx(view, isShow ? [0, data.x[e][value]] : [data.x[e][value]]));
                arr.push(ty(view, isShow ? [0, data.y[e][value]] : [data.y[e][value]]));
                arr.push(sx(view, isShow ? [0, 1] : [1, 0]));
                arr.push(sy(view, isShow ? [0, 1] : [1, 0]));
            }
            return arr;
        }
    }

    /**
     * 颜色过度算法
     * 参考链接:https://blog.csdn.net/a136447572/article/details/89954075
     */
    function ColorEvaluator(value, action) {
        action = action || new Function();
        let mCurrentRed, mCurrentGreen, mCurrentBlue, mCurrentColor;

        // 在evaluate（）里写入对象动画过渡的逻辑:此处是写颜色过渡的逻辑
        this.evaluate = function (fraction, startValue, endValue) {
            // 获取到颜色的初始值和结束值
            let startColor = mCurrentColor || startValue;
            let endColor = colors.parseColor(endValue);

            // 通过字符串截取的方式将初始化颜色分为RGB三个部分，并将RGB的值转换成十进制数字
            // 那么每个颜色的取值范围就是0-255
            let [startRed, startGreen, startBlue] = [colors.red(startColor), colors.green(startColor), colors.blue(startColor)]

            let [endRed, endGreen, endBlue] = [colors.red(endColor), colors.green(endColor), colors.blue(endColor)];

            // 将初始化颜色的值定义为当前需要操作的颜色值
            [mCurrentRed, mCurrentGreen, mCurrentBlue] = [startRed, startGreen, startBlue];

            // 计算初始颜色和结束颜色之间的差值
            // 该差值决定着颜色变化的快慢:初始颜色值和结束颜色值很相近，那么颜色变化就会比较缓慢;否则,变化则很快
            // 具体如何根据差值来决定颜色变化快慢的逻辑写在getCurrentColor()里.
            var redDiff = Math.abs(startRed - endRed);
            var greenDiff = Math.abs(startGreen - endGreen);
            var blueDiff = Math.abs(startBlue - endBlue);
            var colorDiff = redDiff + greenDiff + blueDiff;

            if (mCurrentRed != endRed) {
                mCurrentRed = getCurrentColor(startRed, endRed, colorDiff, 0, fraction);
            }
            if (mCurrentGreen != endGreen) {
                mCurrentGreen = getCurrentColor(startGreen, endGreen, colorDiff, redDiff, fraction);
            }
            if (mCurrentBlue != endBlue) {
                mCurrentBlue = getCurrentColor(startBlue, endBlue, colorDiff, redDiff + greenDiff, fraction);
            }

            // 将计算出的当前颜色的值组装返回
            var color = colors.rgb(mCurrentRed, mCurrentGreen, mCurrentBlue)
            var currentColor = colors.toString(color);
            action(value, currentColor, color, colorStr => { mCurrentColor = colorStr }, fraction);//执行回调方法
            return currentColor;
        }

        // 具体是根据fraction值来计算当前的颜色。
        function getCurrentColor(startColor, endColor, colorDiff, offset, fraction) {
            var currentColor;
            if (startColor > endColor) {
                currentColor = startColor - parseInt((startColor - endColor) * fraction);
            } else {
                currentColor = startColor + parseInt((endColor - startColor) * fraction);
            }
            return currentColor;
        }
    }

};

module.exports = Anim;