import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func312 implements InterfaceFuncOrigin {
  id = 312;
  name = '百鬼奕';
  config = [{
    desc: '',
    config: [{
      name: 'switch_threeten',
      desc: '获得三胜并获得十次奖励就停止',
      type: 'switch',
      default: true,
    }]
  }]
  operator: InterfaceFuncOperatorOrigin[] = [{//  战
    desc: [1280, 720,
      [[left, 41, 36, 0xf9edb1],
      [left, 145, 36, 0xf6f1de],
      [left, 270, 454, 0x392c1f],
      [right, 1162, 610, 0xe4d2b1]]
    ],
    oper: [
      [right, 1280, 720, 1139, 590, 1204, 648, 1000]
    ],
  }, {//  选择
    desc: [1280, 720,
      [[center, 368, 28, 0xcd945c],
      [center, 367, 649, 0xca9761],
      [center, 360, 506, 0x443525],
      [center, 337, 542, 0xe0cb8b]]
    ],
    oper: [
      [right, 1280, 720, 324, 512, 370, 557, 1000]
    ]
  }, { //  百鬼奕失败
    desc: [1280, 720,
      [[center, 468, 185, 0x4e4657],
      [center, 450, 235, 0x5b5266],
      [center, 726, 236, 0xa19889],
      [center, 881, 238, 0xa69d8d]]
    ],
    oper: [
      [right, 1280, 720, 358, 543, 932, 661, 1000]
    ]
  }, { //  百鬼奕胜利
    desc: [1280, 720,
      [[center, 472, 197, 0x79180f],
      [center, 450, 254, 0xa11b11],
      [center, 754, 223, 0xc9b17e],
      [center, 916, 219, 0xdbc697]]
    ],
    oper: [
      [right, 1280, 720, 358, 543, 932, 661, 1000]
    ]
  }, {//  败场放弃
    desc: [1280, 720,
      [[center, 542, 224, 0x603f30],
      [center, 846, 223, 0xe8d3cf],
      [center, 742, 417, 0xf3b25e],
      [center, 532, 414, 0xdf6851]]
    ],
    oper: [
      [right, 1280, 720, 467, 398, 617, 442, 1000]
    ]
  }, {//三胜
    desc: [1280, 720,
      [[left, 151, 646, 0x8f1d10],
      [left, 168, 649, 0xad3313],
      [left, 151, 658, 0x993129],
      [left, 158, 653, 0x3c0b06]]
    ]
  }, {//十次
    desc: [1280, 720,
      [[center, 664, 623, 0xf8f3e0],
      [center, 664, 640, 0xf8f3e0],
      [center, 676, 622, 0xf8f3e0],
      [center, 677, 642, 0xcfcbbb],
      [center, 472, 611, 0xe4a63f],
      [center, 462, 638, 0xdb991c]]
    ]
  }];
  operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
    let thisconf = thisScript.scheme.config['312'];
    if (thisconf.switch_threeten &&
      thisScript.oper({
        id: 312,
        name: '三胜',
        operator: [thisOperator[5]]
      })) {
      console.log("已取得三胜");
      thisScript.global.bgy_three = true;
    };
    if (thisconf.switch_threeten &&
      thisScript.oper({
        id: 312,
        name: '十次',
        operator: [thisOperator[6]]
      })) {
      console.log("已取得十次奖励");
      thisScript.global.bgy_ten = true;
    }
    if (thisScript.global.bgy_three && thisScript.global.bgy_ten) {
      thisScript.doOspPush(thisScript, { text: '已三胜并获取十次奖励，已停止。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
      thisScript.stop();
      return true;
    }
    if (thisScript.oper({
      id: 312,
      name: '百鬼奕_杂项',
      operator: thisOperator.slice(0, -2)
    })) {
      return true;
    }
    return false;
  }
}