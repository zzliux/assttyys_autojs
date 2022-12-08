import { getWidthPixels } from "@auto.pro/core";
import Bezier from 'bezier-js';

class MyAutomator {

    tapType: number;
    dirctionReverse: boolean;
    RA: any;
    shell: any;

    setTapType(tapType: 0 | 1 | 2 | 3): void {
        this.tapType = { '无障碍': 0, 'RootAutomator': 1, 'Shell': 2, 'Root': 3 }[tapType]; // 0 无障碍， 1 RootAutomator， 2 Shell， 3 普通Root
        console.log(`修改automator：${tapType}：${this.tapType}`);
        let self = this;
        if (this.tapType == 0) {
        } else if (this.tapType == 1) {
            let thd = threads.start(function () {
                // @ts-ignore
                if (!self.RA) self.RA = new RootAutomator();
            });
            // 5秒无响应直接杀死
            setTimeout(() => {
                if (thd.isAlive()) {
                    thd.interrupt();
                    toastLog('RootAutomator初始化失败，可能是环境不支持');
                }
            },5000)
        } else if (this.tapType == 2) {
            // @ts-ignore
            if (!this.shell) this.shell = new Shell(true);
        } else if (this.tapType == 3) {
            // none
        }
    }

    press(x: number, y: number, delay: number): void {
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
    }

    swipe(x0: number, y0: number, x1: number, y1: number, delay: number): void {
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
    }

    gesture = gesture;

    // helperBridge过来的
    regionBezierSwipe(transedOperS: Array<number>, transedOperE: Array<number>, duration: Array<number>, randomSleep: number, type: number): void {
        const time = random(duration[0], duration[1])
        // swipe(
        //     random(transedOperS[0], transedOperS[2]), // x1
        //     random(transedOperS[1], transedOperS[3]), // y1
        //     random(transedOperE[0], transedOperE[2]), // x2
        //     random(transedOperE[1], transedOperE[3]), // y2
        //     time // duration
        // );
        // sleep(time + random(0, randomSleep))

        const x1 = random(transedOperS[0], transedOperS[2]);
        const y1 = random(transedOperS[1], transedOperS[3]);
        const x2 = random(transedOperE[0], transedOperE[2]);
        const y2 = random(transedOperE[1], transedOperE[3]);
        if (this.tapType != 0) {
            this.swipe(x1, y1, x2, y2, time);
            sleep(time + 200 + random(0, randomSleep));
            return;
        }
        const xMax = Math.max(x1, x2);
        const xMin = Math.min(x1, x2);
        const yMax = Math.max(y1, y2);
        const yMin = Math.min(y1, y2);
        const screenWidth = getWidthPixels();
        let c1, c2;
        // TODO 开始和结束的附近的点需要更密集
        if (!type) {
            if (random(1, 2) == 1) { // 左
                c1 = [
                    random(0, xMin),
                    random((yMin + (yMax - yMin) / 4), (yMin + (yMax - yMin) / 2))
                ];
                c2 = [
                    random(0, xMin),
                    random((yMin + (yMax - yMin) / 2), 3 * (yMin + (yMax - yMin) / 4))
                ];
            } else { // 右
                c1 = [
                    random(xMax, screenWidth),
                    random((yMin + (yMax - yMin) / 4), (yMin + (yMax - yMin) / 2))
                ];
                c2 = [
                    random(xMax, screenWidth),
                    random((yMin + (yMax - yMin) / 2), 3 * (yMin + (yMax - yMin) / 4))
                ];
            }
        } else {
            // TODO 上和下的
        }

        const curve = new Bezier(x1, y1, ...c1, ...c2, x2, y2);
        const pointsOrigin = curve.getLUT(200).map(p => [Math.floor(p['x']), Math.floor(p['y'])]);
        let toRetain = [0, 1, 2, 3, 4, 5, 191, 192, 193, 194, 195, 196, 197, 198, 199];
        for (let i = 190, stepLen = 1; i > 5; i -= stepLen, stepLen++) {
            toRetain.push(i);
        }
        toRetain = toRetain.sort((a, b) => Math.floor(a) - Math.floor(b));
        let points = [];
        toRetain.forEach(item => {
            points.push(pointsOrigin[item]);
        });
        this.gesture(time, ...points);
        sleep(time + random(0, randomSleep));
    }

    constructor(tapType: number, dirctionReverse?: boolean) {
        let self = this;
        this.tapType = { '无障碍': 0, 'RootAutomator': 1, 'Shell': 2, 'Root': 3 }[tapType]; // 0 无障碍， 1 RootAutomator， 2 Shell， 3 普通Root
        console.log(`初始化automator：${tapType}`);
        this.dirctionReverse = dirctionReverse;
        if (this.tapType == 0) {
        } else if (this.tapType == 1) {
            let thd = threads.start(function () {
                // @ts-ignore
                self.RA = new RootAutomator();
            });
            // 5秒无响应直接杀死
            setTimeout(() => {
                if (thd.isAlive()) {
                    thd.interrupt();
                    toastLog('RootAutomator初始化失败，可能是环境不支持');
                }
            },5000)
        } else if (this.tapType == 2) {
            // @ts-ignore
            this.shell = new Shell(true);
        } else if (this.tapType == 3) {
            // none
        }
    }
}

export default MyAutomator;