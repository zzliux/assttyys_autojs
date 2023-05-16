import { getWidthPixels, getHeightPixels } from "@auto.pro/core";
import drawFloaty from "@/system/drawFloaty";
import { getRegionBiasRnd2, hash, strHashToNum } from '@/common/toolAuto';
import { IMyAutomator } from '@/system/MyAutomator';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
const needRoot = device.sdkInt < 24;

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

export interface IhelperBridge {
    automator: IMyAutomator | null,
    helper: any | null,
    helperPoly: object,
    getHelper(dw: number, dh: number),
    init: () => void,
    regionClickTrans: (oper)=> any,
    setAutomator: (automator: IMyAutomator) => void,
    regionClick: (transedOper: [number, number, number, number, number][], randomSleep: number) => void,
    regionStepRandomClick: (transedOperStepRandom, randomSleep) => void,
    regionSwipe: (transedOperS, transedOperE, duration, randomSleep) => void,
    swipePath: (paths) => void,
    regionBezierSwipe: (transedOperS, transedOperE, duration, randomSleep, type) => void,
}

export class helperBridge implements IhelperBridge {
    automator = null;
    helper = null;
    helperPoly = {};
    getHelper(dw: number, dh: number) {
        if (!this.helperPoly[dw + '_' + dh]) {
            this.helperPoly[dw + '_' + dh] = com.scriptlib.AnchorGraphicHelper.Create(runtime, dw, dh, 0, 0, screenWidth - 1, screenHeight - 1);
        }
        return this.helperPoly[dw + '_' + dh];
    }
    init() {
        console.log('init', com.scriptlib.AnchorGraphicHelper);
        console.log(`ScriptLib Version: ${com.scriptlib.AnchorGraphicHelper.Version()}`);
        console.log(`ScriptLib initializing`);
        this.helper = this.getHelper(devWidth, devHeight);
        console.log(`ScriptLib initialize success`);
    }
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
    }

    setAutomator(automator: IMyAutomator) {
        this.automator = automator;
    }

    // [[1119, 504, 1227, 592, 2000]]
    // [[x1, y1, x2, y2, afterSleep, pressTimeout?]]
    regionClick(transedOper: [number, number, number, number, number, number?][], randomSleep: number) {
        let self = this;
        transedOper.forEach(item => {
            if (item[0] >= 0) {
                // let x = random(item[0], item[2]);
                // let y = random(item[1], item[3]);
                const [x, y] = getRegionBiasRnd2(item, [strHashToNum(device.getAndroidId(), item[0], item[2]), strHashToNum(device.getAndroidId(), item[1], item[3])], 1);
                const pressTimeout = item[5] ? random(item[5], item[5] + 50) : random(10, 60);
                console.log(`执行点击操作 === x坐标:${x}, y坐标:${y}`);
                if (drawFloaty.instacne) {
                    let toDraw = [{
                        color: 'orange',
                        region: [item[0], item[1], item[2], item[3]]
                    }, {
                        color: 'red',
                        region: [x - 5, y - 5, x + 5, y + 5]
                    }];
                    drawFloaty.draw(toDraw, 300);
                    // sleep(500);
                }
                self.automator.press(x, y, pressTimeout);
            } else {
                console.log(`传入坐标信息为(${JSON.stringify(item)}), 不执行操作`);
            }
            sleep(item[4] + random(0, randomSleep || 0));
        });
    }

    // [[
	//     [69, 171, 170, 452, 1000, 2], // 最后一个参数，表示执行这个的概率，[0, 2)命中
	//     [1104,72, 1200,687, 1000, 5], // [2, 5)命中 
	// ]]
    regionStepRandomClick(transedOperStepRandom, randomSleep) {
        // 生成一套，然后给regionClick操作
        let oper = [];
        transedOperStepRandom.forEach(item => {
            // let sum = 0;
            // for (let i = 0; i < item.length; i++) {
            //     sum += item[i][5];
            // }
            // let rn = random(0, sum - 1);
            // let curSum = 0;
            // for (let i = 0; i < item.length; i++) {
            //     // 命中
            //     if (rn >= curSum && rn < curSum + item[i][5]) {
            //         oper.push(item[i]);
            //         break;
            //     }
            //     curSum += item[i][5];
            // }
            oper.push(item[hash(0, item.length - 1, device.getAndroidId())]);
        });
        this.regionClick(oper, randomSleep);
    }
    regionSwipe(transedOperS, transedOperE, duration, randomSleep) {
        const time = random(duration[0], duration[1])
        this.automator.swipe(
            random(transedOperS[0], transedOperS[2]), // x1
            random(transedOperS[1], transedOperS[3]), // y1
            random(transedOperE[0], transedOperE[2]), // x2
            random(transedOperE[1], transedOperE[3]), // y2
            time // duration
        );
        sleep(time + random(0, randomSleep))
    }
    /**
     * @paths [{ x: 123, y: 234 }, { delay: 200, x: 111, y: 333}, { delay: 200, x: 111, y: 222 }]
     */
    swipePath(paths) {
        // TODO root下需要补点，否则拖不过去
        // if (needRoot) {
            // 使用rootautomator用画path
            // ra获取报错的话就不管手势了，直接用Swipe代替
            let time = 0;
            paths.forEach(item => {
                time += item.delay || 0;
            });
            this.automator.swipe(
                paths[0].x, // x1
                paths[0].y, // y1
                paths[paths.length - 1].x, // x2
                paths[paths.length - 1].y, // y2
                time // duration
            );
            sleep(time + 10);
        // } else {
        //     // 使用无障碍gesture画path
        //     let points = [[paths[0].x, paths[0].y]];
        //     let duration = 0;
        //     for (let i = 1; i < paths.length; i++) {
        //         duration += paths[i].delay;
        //         points.push([paths[i].x, paths[i].y]);
        //     }
        //     gesture(duration, ...points);      
        //     sleep(duration);      
        // }
    }
    // [1119, 504, 1227, 592, 2000]
    // type0-竖直方向，1-水平方向 TODO
    regionBezierSwipe(transedOperS, transedOperE, duration, randomSleep, type) {
        return this.automator.regionBezierSwipe(transedOperS, transedOperE, duration, randomSleep, type);
    }
};

const helperBridgeService = new helperBridge();

export default helperBridgeService;