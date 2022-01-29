import { getWidthPixels, getHeightPixels } from "@auto.pro/core";
import drawFloaty from "@/system/drawFloaty";
import Bezier from 'bezier-js';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
const needRoot = device.sdkInt < 24;
let ra = null;
if (needRoot) {
    try {
        // ra = new RootAutomator();
    } catch (e) {
        console.error(e);
    }
}

const devWidth = 1280;
const devHeight = 720;
let screenWidth = getWidthPixels();
let screenHeight = getHeightPixels();
const scale = screenHeight / devHeight;
if (screenWidth < screenHeight) {
    let t = screenWidth;
    screenWidth = screenHeight;
    screenHeight = t;
}

export const helperBridge = {
    helper: null,
    helperPoly: {},
    getHelper(dw, dh) {
        if (!this.helperPoly[dw + '_' + dh]) {
            this.helperPoly[dw + '_' + dh] = new AnchorGraphicHelper(runtime, dw, dh, 0, 0, screenWidth - 1, screenHeight - 1);
        }
        return this.helperPoly[dw + '_' + dh];
    },
    init: function () {
        this.helper = new AnchorGraphicHelper(runtime, devWidth, devHeight, 0, 0, screenWidth - 1, screenHeight - 1);
        this.helperPoly['1280_720'] = this.helper;
    },
    // [[right, 1280, 720, 1119, 504, 1227, 592, 2000]]
    regionClickTrans(oper) {
        for (let i = 0; i < oper.length; i++) {
            let regionWidth = null;
            let regionHeight = null;
            let regionX = null;
            let regionY = null;
            
            // if (oper[i][0] == center) {
            //     regionWidth = (oper[i][3] - oper[i][1]) * scale;
            //     regionHeight = (oper[i][4] - oper[i][2]) * scale;
            //     regionX = screenWidth / 2 + (oper[i][1] - (devWidth / 2)) * scale
            //     regionY = screenHeight / 2 + (oper[i][2] - (devHeight / 2)) * scale
            // } else if (oper[i][0] === left) {
            //     regionWidth = (oper[i][3] - oper[i][1]) * scale;
            //     regionHeight = (oper[i][4] - oper[i][2]) * scale;
            //     regionX = oper[i][1] * scale;
            //     regionY = oper[i][2] * scale;
            // } else if (oper[i][0] === right) {
            //     regionWidth = (oper[i][3] - oper[i][1]) * scale;
            //     regionHeight = (oper[i][4] - oper[i][2]) * scale;
            //     regionX = screenWidth - ((devWidth - oper[i][1]) * scale);
            //     regionY = oper[i][2] * scale;
            // } else if (oper[i][0] === normal) {
            //     // TODO
            // }
            // oper[i] = [
            //     regionX,
            //     regionY,
            //     regionX + regionWidth,
            //     regionY + regionHeight,
            //     oper[i][5]
            // ];
            if (oper[i][3] === -1) {
                oper[i] = [-1, -1, -1, -1, ...oper[i].slice(7)]
            } else {
                let sr = this.getHelper(oper[i][1], oper[i][2]).GetPoint(oper[i][3], oper[i][4], oper[i][0]);
                let er = this.getHelper(oper[i][1], oper[i][2]).GetPoint(oper[i][5], oper[i][6], oper[i][0]);
                oper[i] = [sr.x, sr.y, er.x, er.y, ...oper[i].slice(7)]
            }
        }
        return oper;
    },

    // [[1119, 504, 1227, 592, 2000]]
    regionClick(transedOper, randomSleep) {
        transedOper.forEach(item => {
            if (item[0] >= 0) {
                let x = random(item[0], item[2]);
                let y = random(item[1], item[3]);
                console.log(`执行点击操作 === x坐标:${x}, y坐标:${y}`);
                if (drawFloaty.instacne) {
                    let toDraw = [{
                        color: 'orange',
                        region: [item[0], item[1], item[2], item[3]]
                    }, {
                        color: 'red',
                        region: [x - 5, y - 5, x + 5, y + 5]
                    }];
                    drawFloaty.draw(toDraw, 500);
                    sleep(500);
                }
                if (needRoot) {
                    Tap(x, y);
                    sleep(random(10, 60));
                } else {
                    press(x, y, random(10, 60));
                }
            } else {
                console.log(`传入坐标信息为(${JSON.stringify(item)}), 不执行操作`);
            }
            sleep(item[4] + random(0, randomSleep || 0));
        });
    },

    // [[
	//     [69, 171, 170, 452, 1000, 2], // 最后一个参数，表示执行这个的概率，[0, 2)命中
	//     [1104,72, 1200,687, 1000, 5], // [2, 5)命中 
	// ]]
    regionStepRandomClick(transedOperStepRandom, randomSleep) {
        // 生成一套，然后给regionClick操作
        let oper = [];
        transedOperStepRandom.forEach(item => {
            let sum = 0;
            for (let i = 0; i < item.length; i++) {
                sum += item[i][5];
            }
            let rn = random(0, sum - 1);
            let curSum = 0;
            for (let i = 0; i < item.length; i++) {
                // 命中
                if (rn >= curSum && rn < curSum + item[i][5]) {
                    oper.push(item[i]);
                    break;
                }
                curSum += item[i][5];
            }
        });
        this.regionClick(oper, randomSleep);
    },
    regionSwipe(transedOperS, transedOperE, duration, randomSleep) {
        const time = random(duration[0], duration[1])
        if (needRoot) {
            Swipe(
                random(transedOperS[0], transedOperS[2]), // x1
                random(transedOperS[1], transedOperS[3]), // y1
                random(transedOperE[0], transedOperE[2]), // x2
                random(transedOperE[1], transedOperE[3]), // y2
                time // duration
            );
            sleep(time + random(0, randomSleep))
        } else {
            swipe(
                random(transedOperS[0], transedOperS[2]), // x1
                random(transedOperS[1], transedOperS[3]), // y1
                random(transedOperE[0], transedOperE[2]), // x2
                random(transedOperE[1], transedOperE[3]), // y2
                time // duration
            );
            sleep(time + random(0, randomSleep))
        }
    },
    /**
     * @paths [{ x: 123, y: 234 }, { delay: 200, x: 111, y: 333}, { delay: 200, x: 111, y: 222 }]
     */
    swipePath(paths) {
        // TODO root下需要补点，否则拖不过去
        if (needRoot) {
            // 使用rootautomator用画path
            if (ra) {
                ra.touchDown(paths[0].x, paths[0].y);
                for (let i = 1; i < paths.length; i++) {
                    sleep(paths[i].delay);
                    ra.touchMove(paths[i].x, paths[i].y);
                }
                ra.touchUp();
            } else {
                // ra获取报错的话就不管手势了，直接用Swipe代替
                let time = 0;
                paths.forEach(item => {
                    time += item.delay || 0;
                });
                Swipe(
                    paths[0].x, // x1
                    paths[0].y, // y1
                    paths[paths.length - 1].x, // x2
                    paths[paths.length - 1].y, // y2
                    time // duration
                );
                sleep(time + 10);
            }
        } else {
            // 使用无障碍gesture画path
            let points = [[paths[0].x, paths[0].y]];
            let duration = 0;
            for (let i = 1; i < paths.length; i++) {
                duration += paths[i].delay;
                points.push([paths[i].x, paths[i].y]);
            }
            gesture(duration, ...points);      
            sleep(duration);      
        }
    },
    // [1119, 504, 1227, 592, 2000]
    // type0-竖直方向，1-水平方向 TODO
    regionBezierSwipe(transedOperS, transedOperE, duration, randomSleep, type) {
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
        if (needRoot) {
            Swipe(x1, y1, x2, y2, time);
            sleep(time + 200 + random(0, randomSleep));
            return;
        }
        const xMax = Math.max(x1, x2);
        const xMin = Math.min(x1, x2);
        const yMax = Math.max(y1, y2);
        const yMin = Math.min(y1, y2);
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
        toRetain = toRetain.sort((a, b) => parseInt(a) - parseInt(b));
        let points = [];
        toRetain.forEach(item => {
            points.push(pointsOrigin[item]);
        });
        gesture(time, ...points);
        sleep(time + random(0, randomSleep));
    }
};

export default helperBridge;