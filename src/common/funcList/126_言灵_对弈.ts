import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
export class Func126 implements IFuncOrigin {
  id = 126;
  name = '言灵活动_对弈';
  operator: IFuncOperatorOrigin[] = [{
    desc: [1280, 720,
      [[right, 1151, 590, 0xd7533d],
      [right, 1155, 628, 0x232626],
      [right, 1184, 588, 0xd1543f],
      [right, 1171, 622, 0xd6503a]]
    ],
    oper: [
      [right, 1280, 720, 1152, 573, 1212, 636, 1000]  //  挑战
    ]
  }, {//暗_选取
    desc: [1280, 720,
      [[right, 1188, 330, 0x726966],
      [right, 1236, 330, 0xf8f3e0],
      [right, 1258, 382, 0x675e5c],
      [right, 1217, 382, 0xb6b1a3]]
    ],
    oper: [
      [center, 1280, 720, 0, 0, 50, 20, 1000]
    ]
  }, {//亮_选取
    desc: [1280, 720,
      [[right, 1190, 334, 0xcd6235],
      [right, 1236, 330, 0xf4ecda],
      [right, 1252, 390, 0x9c331b],
      [right, 1219, 375, 0xefead8]]
    ],
    oper: [
      [right, 1280, 720, 1175, 316, 1258, 396, 1000]  //  挑战
    ]
  }, {//挨个点击
    oper: [
      [right, 1280, 720, 42, 179, 98, 256, 0],
      [right, 1280, 720, 206, 200, 267, 272, 0],
      [right, 1280, 720, 372, 198, 434, 277, 0],
      [right, 1280, 720, 538, 203, 590, 276, 0],
      [right, 1280, 720, 709, 203, 754, 272, 0],
      [right, 1280, 720, 860, 194, 924, 273, 0],
      [right, 1280, 720, 1025, 205, 1088, 272, 0],
      [right, 1280, 720, 48, 420, 126, 474, 0],
      [right, 1280, 720, 206, 415, 298, 469, 0],
      [right, 1280, 720, 374, 408, 464, 469, 0],
      [right, 1280, 720, 540, 414, 624, 471, 0],
      [right, 1280, 720, 697, 420, 785, 492, 0],
      [right, 1280, 720, 854, 413, 925, 492, 0],
      [right, 1280, 720, 1020, 410, 1091, 498, 0]
    ]
  }, {//倒计时
    desc: [1280, 720,
      [[center, 426, 624, 0xfd6047],
      [center, 426, 625, 0xff6148],
      [center, 426, 626, 0xff6148]]
    ]
  }]
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    if (thisScript.oper({
      id: 126,
      name: '对弈_挑战',
      operator: [thisOperator[0]]
    })) {
      thisScript.global.yl_next = 0;
      return true;
    }
    if (thisScript.oper({
      id: 126,
      name: '亮_选取',
      operator: [thisOperator[2]]
    })) {
      return true;
    }
    if (thisScript.oper({
      id: 126,
      name: '暗_选取',
      operator: [{ desc: thisOperator[1].desc }]
    }) && thisScript.oper({
      id: 126,
      name: '倒计时',
      operator: [thisOperator[4]]
    })) {
      let point = thisScript.findMultiColor('言灵活动_对弈');
      if (point) {
        let oper = [[point.x, point.y, point.x + thisOperator[1].oper[0][2], point.y + thisOperator[1].oper[0][3], thisOperator[1].oper[0][4]]];
        thisScript.regionClick(oper);
      } else if (thisScript.oper({
        id: 126,
        name: '倒计时',
        operator: [thisOperator[4]]
      })) {
        if(thisScript.global.yl_next>13){
          thisScript.global.yl_next=0;
        }
        let x = thisScript.global.yl_next;
        thisScript.regionClick([thisOperator[3].oper[x]]);
        thisScript.keepScreen(false);
        if (!thisScript.oper({
          id: 126,
          name: '亮_选取',
          operator: [thisOperator[2]]
        })) {
          thisScript.global.yl_next++;
        }
      }
      return true;
    }
    return false;
  }
}