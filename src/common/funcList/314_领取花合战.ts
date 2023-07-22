import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func314 implements IFuncOrigin {
  id = 314;
  name = '领取花合战';
  operator: IFuncOperatorOrigin[] = [{//0 庭院未打开菜单
    desc: '庭院未打开菜单',
    oper: [
      [right, 1280, 720, 1168, 592, 1230, 690, 1000]
    ]
  }, {//1 花合战500天
    desc: [
      1280, 720,
      [
        [center, 790, 617, 0xd6beb3],
        [center, 822, 606, 0xfc0101],
        [center, 802, 626, 0xba4343],
        [center, 823, 642, 0xf8e5b8],
        [center, 789, 648, 0xa8928d],
      ]
    ],
    oper: [
      [center, 1280, 720, 769, 622, 820, 660, 1000],
    ]
  }, {//2  任务
    desc: [
      1280, 720,
      [
        [left, 39, 36, 0xf6f2cf],
        [left, 234, 35, 0xe4e5e7],
        [right, 1237, 345, 0x333259],
        [right, 1196, 390, 0x3a3b62],
        [right, 1215, 382, 0x8993b6],
        [right, 1214, 345, 0x8993b6],
      ]
    ],
    oper: [
      [center, 1280, 720, 1202, 329, 1232, 409, 1000],
    ]
  }, {//3  全部领取
    desc: [
      1280, 720,
      [
        [right, 1231, 228, 0x35345e],
        [right, 1228, 361, 0xdae1d9],
        [center, 950, 600, 0xfdd27e],
        [center, 938, 631, 0xfdd27d],
      ]
    ],
    oper: [
      [center, 1280, 720, 911, 611, 965, 655, 1500],
      [center, 1280, 720, 911, 611, 965, 655, 1500],
      [center, 1280, 720, 24, 20, 60, 55, 1000],
    ]
  }, {//4 花合战
    desc: [
      1280, 720,
      [
        [center, 792, 616, 0xd9c0b7],
        [center, 822, 606, 0xfc0101],
        [center, 800, 628, 0xb24343],
        [center, 820, 645, 0xf4ecc7],
        [center, 790, 648, 0xa8918c],
      ]
    ],
    oper: [
      [center, 1280, 720, 773, 621, 821, 660, 1000],
    ]
  }, {//5  花合战界面退出
    desc: [
      1280, 720,
      [
        [left, 39, 37, 0xf6f2d0],
        [left, 234, 37, 0xe6e7e8],
        [right, 1211, 216, 0x8993b6],
        [right, 1220, 349, 0x5f597c],
        [right, 1212, 362, 0xd3dae1],
        [right, 1211, 401, 0xdce4d5],
      ]
    ],
    oper: [
      [center, 1280, 720, 24, 20, 60, 55, 1000],
    ]
  }
  ];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    thisScript.oper({
      name: '花合战',
      operator: [thisOperator[0], thisOperator[2],
      ]
    });

    if (thisScript.global.huahezhan && thisScript.oper({
      name: '花合战_进入',
      operator: [thisOperator[1], thisOperator[4]]
    })) {
      return true;
    }
    if (thisScript.oper({
      name: '花合战_任务界面',
      operator: [{ desc: thisOperator[5].desc }]
    })) {
      if (thisScript.oper({
        name: '花合战_领取奖励',
        operator: [thisOperator[3]]
      })) {
        return true;
      } else {
        //退出
        thisScript.regionClick(thisOperator[5].oper);
        thisScript.global.huahezhan = false;
        return true;
      }
    }


    return false;
  }
}