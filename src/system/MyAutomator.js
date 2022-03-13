function MyAutomator(tapType, dirctionReverse) {
    this.tapType = { '无障碍': 0, 'RootAutomator': 1, 'Shell': 2, 'Root': 3 }[tapType]; // 0 无障碍， 1 RootAutomator， 2 Shell， 3 普通Root
    console.log(`初始化automator：${tapType}`);
    this.dirctionReverse = dirctionReverse;
    if (this.tapType == 0) {
    } else if (this.tapType == 1) {
        this.RA = new RootAutomator();
    } else if (this.tapType == 2) {
        this.shell = new Shell(true);
    } else if (this.tapType == 3) {
        // none
    }
}

MyAutomator.prototype = {
    setTapType: function(tapType) {
        this.tapType = { '无障碍': 0, 'RootAutomator': 1, 'Shell': 2, 'Root': 3 }[tapType]; // 0 无障碍， 1 RootAutomator， 2 Shell， 3 普通Root
        console.log(`修改automator：${tapType}`);
        if (this.tapType == 0) {
        } else if (this.tapType == 1) {
            if (!this.RA) this.RA = new RootAutomator();
        } else if (this.tapType == 2) {
            if (!this.shell) this.shell = new Shell(true);
        } else if (this.tapType == 3) {
            // none
        }
    },
    press: function (x, y, delay) {
        if (this.dirctionReverse) {
            let dm = context.getResources().getDisplayMetrics();
            let wm = context.getSystemService(context.WINDOW_SERVICE);
            wm.getDefaultDisplay().getRealMetrics(dm);
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
            let wm = context.getSystemService(context.WINDOW_SERVICE);
            wm.getDefaultDisplay().getRealMetrics(dm);
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
    },

    gesture: gesture
};


export default MyAutomator;