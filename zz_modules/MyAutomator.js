/**
 * bugs: RootAutomator执行时高概率不起作用，重启脚本程序后有可能会解决问题
 */

function MyAutomator(tapType, dirctionReverse) {
    this.tapType = tapType; // 0 无障碍， 1 RootAutomator， 2 Shell， 3 普通Root
    this.dirctionReverse = dirctionReverse;
    if (tapType == 0) {
        var BezierSwiper = require('./bezierSwiper');
        this.bezierSwiper = new BezierSwiper();
    } else if (tapType == 1) {
        var BezierSwiper = require('./bezierSwiper');
        this.RA = new RootAutomator();
        this.bezierSwiper = new BezierSwiper(this.RA);
    } else if (tapType == 2) {
        this.shell = new Shell(true);
    } else if (tapType == 3) {
        // none
    }
}

MyAutomator.prototype = {
    press: function (x, y, delay) {
        if (this.dirctionReverse) {
            let dm = context.getResources().getDisplayMetrics();
            let tmpx = dm.heightPixels - y;
            y = x;
            x = tmpx;
        }
        if (this.tapType == 0) {
            press(x, y, delay);
        } else if (this.tapType == 1) {
            this.RA.press(x, y, delay);
        } else if (this.tapType == 2) {
            this.shell.execAndWaitFor('input swipe ' + x + ' ' + y + ' ' + x + ' ' + y + ' ' + delay);
        } else if (this.tapType == 3) {
            Tap(x, y); // 忽略点击时长, 官方不支持
        }
    },

    swipe: function (x0, y0, x1, y1, delay) {
        if (this.dirctionReverse) {
            let dm = context.getResources().getDisplayMetrics();
            let tmpx = dm.heightPixels - y0;
            y0 = x0;
            x0 = tmpx;
            tmpx = dm.heightPixels - y1;
            y1 = x1;
            x1 = tmpx;
        }

        if (this.tapType == 0) {
            // this.bezierSwiper.swipe(x0, y0, x1, y1, delay);
            swipe(x0, y0, x1, y1, delay);
        } else if (this.tapType == 1) {
            // this.bezierSwiper.swipe(x0, y0, x1, y1, delay);
            this.RA.swipe(x0, y0, x1, y1, delay);
        } else if (this.tapType == 2) {
            this.shell.execAndWaitFor('input swipe ' + x0 + ' ' + y0 + ' ' + x1 + ' ' + y1 + ' ' + delay);
        } else if (this.tapType == 3) {
            Swipe(x0, y0, x1, y1, delay);
        }
    }
};


module.exports = MyAutomator;