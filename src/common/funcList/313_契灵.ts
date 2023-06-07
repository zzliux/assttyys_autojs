import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator, IFuncConfigOrigin } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func313 implements IFuncOrigin {
  id = 313;
  name = '契灵';
  desc: '循环追踪，无追踪后石头召唤，无石头则持续探查(预设)';
  operator: IFuncOperatorOrigin[] = [{//0 追踪
    desc: [
      1280, 720,
      [
        [right, 1180, 478, 0xa69fcf],
        [right, 1192, 487, 0x6d6bc1],
        [right, 1165, 612, 0xfef4e6],
        [right, 1210, 608, 0xfdf3e5],
        [right, 1156, 634, 0xfef4e6],
        [right, 1174, 638, 0xfef4e6],
        [right, 1192, 631, 0xfdf3e5],
        [right, 1211, 630, 0xfef4e6],
      ]
    ],
    oper: [
      [center, 1280, 720, 1148, 602, 1225, 664, 1000],
      [center, 1280, 720, 18, 472, 79, 501, 3000],
    ]
  }, {//1  石头召唤
    desc: [
      1280, 720,
      [
        [left, 44, 40, 0xf5e4a4],
        [left, 208, 36, 0xf6f2e1],
        [left, 275, 35, 0xeac656],
        [right, 1184, 473, 0xc4bbdf],
        [right, 1192, 488, 0x6a73bf],
      ]
    ],
    oper: [
      [center, 1280, 720, 1163, 478, 1203, 503, 2000],//石头
    ]
  }, {//2  石头召唤确认
    desc: [
      1280, 720,
      [
        [center, 530, 627, 0xffdebd],
        [center, 597, 630, 0xd6c5b0],
        [center, 637, 629, 0xa98970],
        [center, 684, 631, 0xf3ecd9],
        [center, 729, 631, 0xf3ecd9],
        [center, 751, 630, 0xdfd2bd],
        [right, 1173, 635, 0xf4f2e1],
        [right, 1207, 640, 0xfdfbe9],
      ]
    ],
    oper: [
      [center, 1280, 720, 1153, 606, 1225, 668, 5000],
    ]
  }, {//3  契灵挑战
    desc: [
      1280, 720,
      [
        [center, 846, 645, 0xd9caa1],
        [center, 870, 633, 0xeadfae],
        [center, 867, 663, 0xc4aa88],
        [center, 861, 648, 0x533332],
        [right, 1174, 641, 0xff8f2f],
        [right, 1197, 606, 0xfef4e6],
      ]
    ],
    oper: [
      [center, 1280, 720, 1154, 594, 1235, 665, 1000],
    ]
  }, {//4   结契失败
    desc: [
      1280, 720,
      [
        [center, 512, 297, 0xbbbbbb],
        [center, 610, 277, 0xbbbbbb],
        [center, 684, 295, 0xb0b0b0],
        [center, 785, 296, 0xc0c0c0],
        [right, 1204, 590, 0x875015],
        [right, 1206, 627, 0x6c5220],
      ]
    ],
    oper: [
      [center, 1280, 720, 444, 552, 814, 701, 1000],
    ]
  }, {//5  结契成功
    desc: [
      1280, 720,
      [
        [center, 844, 44, 0x664d29],
        [center, 862, 46, 0xe5ce89],
        [center, 872, 45, 0xe5ce89],
        [center, 892, 51, 0xe4cd88],
        [center, 898, 52, 0xd9c280],
        [center, 877, 60, 0xe5ce89],
      ]
    ],
    oper: [
      [center, 1280, 720, 173, 534, 615, 691, 1000],
      [center, 1280, 720, 173, 534, 615, 691, 1000],
    ]
  }, {//6  探查
    desc: [
      1280, 720,
      [
        [right, 1155, 605, 0xfef4e6],
        [right, 1181, 598, 0xfef4e6],
        [right, 1197, 613, 0xfef4e6],
        [right, 1202, 600, 0xfef4e6],
        [right, 1161, 642, 0xe4652b],
        [right, 1171, 650, 0xe85f29],
        [right, 1189, 648, 0xfdf3e5],
      ]
    ],
    oper: [
      [center, 1280, 720, 1139, 586, 1223, 668, 2000],
    ]
  }, {//7  契灵式神录
    oper: [
      [center, 1280, 720, 944, 568, 982, 600, 1000],
    ]
  }]
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    if (thisScript.global.qiling_stage === 'find' && thisScript.oper({
      name: '石头召唤',
      operator: [thisOperator[1]]
    })) {
      thisScript.global.qilingshitou_Time--;
      if (thisScript.global.qilingshitou_Time < 0 && thisScript.oper({
        name: '探查',
        operator: [{ desc: thisOperator[6].desc }]
      })) {
        thisScript.global.qiling_stage = 'change'

      }
    }
    if (thisScript.global.qiling_stage === 'find' && thisScript.oper({
      name: '石头召唤确认',
      operator: [thisOperator[2]]
    })) {
      thisScript.global.qilingshitou_Time = 3;
      thisScript.global.qiling_stage = 'change'
    }

    if (thisScript.global.qiling_stage === 'change') {
      let arrFind = [`契灵_火灵`, `契灵_小黑`, `契灵_镇墓兽`, `契灵_茨球`]
      for (var i = 0; i < 4; i++) {
        if (thisScript.findMultiColor(arrFind[i])) {
          break;
        }
      }
      switch (i) {
        case 0:
          thisScript.global.qiling_groupNum = 4;
          thisScript.global.qiling_defaultNum = 1;
          break;
        case 1:
          thisScript.global.qiling_groupNum = 4;
          thisScript.global.qiling_defaultNum = 2;
          break;
        case 2:
          thisScript.global.qiling_groupNum = 4;
          thisScript.global.qiling_defaultNum = 3;
          break;
        case 3:
          thisScript.global.qiling_groupNum = 4;
          thisScript.global.qiling_defaultNum = 4;
          break;
        case 4:
          thisScript.global.qiling_groupNum = 5;
          thisScript.global.qiling_defaultNum = 1;
          break;
      }
      thisScript.helperBridge.regionClick([thisOperator[7]], thisScript.scheme.commonConfig.afterClickDelayRandom);
      thisScript.global.qiling_groupNum = null;
      thisScript.global.qiling_defaultNum = null;
      thisScript.global.qiling_stage = 'attack';
    }
    return false;
  }
}