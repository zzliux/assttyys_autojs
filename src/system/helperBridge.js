import { getWidthPixels, getHeightPixels } from "@auto.pro/core";


const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

const devWidth = 1280;
const devHeight = 720;
const screenWidth = getWidthPixels();
const screenHeight = getHeightPixels();
const scale = screenHeight / devHeight;
if (screenWidth < screenHeight) {
    let t = screenWidth;
    screenWidth = screenHeight;
    screenHeight = t;
}

export const helperBridge = {
    helper: null,
    init: function () {
        this.helper = new AnchorGraphicHelper(runtime, devWidth, devHeight, 0, 0, screenWidth, screenHeight);
    },
    // [[right, 1119, 504, 1227, 592, 2000]]
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
            let sr = this.helper.GetPoint(oper[i][1], oper[i][2], oper[i][0]);
            let er = this.helper.GetPoint(oper[i][3], oper[i][4], oper[i][0]);
            oper[i] = [
                sr.x,
                sr.y,
                er.x,
                er.y,
                oper[i][5]
            ]
        }
        return oper;
    },

    // [[1119, 504, 1227, 592, 2000]]
    regionClick(transedOper, randomSleep) {
        transedOper.forEach(item => {
            click(random(item[0], item[2]), random(item[1], item[3]));
            sleep(item[4] + random(0, randomSleep || 0));
        });
    }
};

export default helperBridge;