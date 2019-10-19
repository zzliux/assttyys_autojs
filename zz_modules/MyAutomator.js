/**
 * bugs: RootAutomator执行时高概率不起作用，重启脚本程序后有可能会解决问题
 */

function MyAutomator(tapType) {
    this.tapType = tapType; // 0 无障碍， 1 RootAutomator， 2 Shell
    if (tapType == 0) {
        var BezierSwiper = require('./bezierSwiper');
        this.bezierSwiper = new BezierSwiper();
    } else if (tapType == 1) {
        var BezierSwiper = require('./bezierSwiper');
        this.RA = new RootAutomator();
        this.bezierSwiper = new BezierSwiper(this.RA);
    } else if (tapType == 2) {
        var that = this;
        this.shell = new Shell(true);
    }
}

MyAutomator.prototype = {
    press: function (x, y, delay) {
        if (this.tapType == 0) {
            press(x, y, delay);
        } else if (this.tapType == 1) {
            let dm = context.getResources().getDisplayMetrics();
            if (dm.widthPixels > dm.heightPixels) {
                this.RA.press(dm.heightPixels - y, x, delay);
            } else {
                this.RA.press(x, y, delay);
            }
        } else if (this.tapType == 2) {
            this.shell.execAndWaitFor('input swipe ' + x + ' ' + y + ' ' + x + ' ' + y + ' ' + delay);
        }
    },

    swipe: function (x0, y0, x1, y1, delay) {
        if (this.tapType == 0) {
            this.bezierSwiper.swipe(x0, y0, x1, y1, delay);
        } else if (this.tapType == 1) {
            let dm = context.getResources().getDisplayMetrics();
            if (dm.widthPixels > dm.heightPixels) {
                this.bezierSwiper.swipe(dm.heightPixels - y0, x0, dm.heightPixels - y1, x1, delay);
            } else {
                this.bezierSwiper.swipe(x0, y0, x1, y1, delay);
            }
        } else if (this.tapType == 2) {
            this.shell.execAndWaitFor('input swipe ' + x0 + ' ' + y0 + ' ' + x1 + ' ' + y1 + ' ' + delay);
        }
    }
};


module.exports = MyAutomator;