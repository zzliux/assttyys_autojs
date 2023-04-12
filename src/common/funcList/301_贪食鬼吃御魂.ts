import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func301 implements IFuncOrigin {
  id = 301;
  name = '贪食鬼吃御魂';
  desc = '在御魂界面里打开,吃掉弃置御魂';
  config = [{
    desc: '结束后切换方案',
    config: [{
      name: 'scheme_switch_enabled',
      desc: '是否启用',
      type: 'switch',
      default: true,
    }, {
      name: 'next_scheme',
      desc: '下一个方案',
      type: 'scheme',
      default: '奉纳御魂_开始奉纳',
    }]
  }];
  operator: IFuncOperatorOrigin[] = [{
    //0,右下角贪食鬼
    desc: [1280, 720,
      [[right, 1167, 624, 0x69bbbb],
      [right, 1191, 617, 0xd7c9ba],
      [right, 1192, 646, 0xd23e4f],
      [right, 1197, 667, 0x292020]
      ]
    ],
    oper: [
      [center, 1280, 720, 1164, 621, 1207, 660, 1000]
    ]
  }, {  //1,进食习惯
    desc: [1280, 720, [
      [center, 363, 294, 0x332725],
      [center, 949, 230, 0xebdac9],
      [center, 902, 565, 0xf4b25f],
      [center, 750, 278, 0x2c3244]
    ]
    ],
    oper: [
      [center, 1280, 720, 820, 532, 978, 588, 3000]
    ]
  }, {  //2,贪食鬼
    desc: [1280, 720, [
      [right, 1012, 491, 0xece3d3],
      [right, 1016, 537, 0xe3d5c3],
      [center, 818, 243, 0xb34a1d],
      [center, 813, 591, 0xf4b25f]]
    ],
    oper: [
      [center, 1280, 720, 940, 608, 990, 645, 1000]
    ]
  }, {  //3.不再提示
    desc: [1280, 720, [
      [center, 519, 422, 0xdf6851],
      [center, 759, 421, 0xf4b25f],
      [center, 559, 357, 0x715e4f],
      [center, 637, 288, 0xA82F2D]
    ]
    ],
    oper: [
      [center, 1280, 720, 677, 408, 834, 453, 1000]
    ]
  }, {  //4,进食完毕或无进食御魂
    desc: [1280, 720, [
      [right, 1018, 497, 0x4b322e],
      [right, 1012, 539, 0x241a1c],
      [center, 866, 249, 0xb54f23],
      [center, 813, 591, 0xf4b25f]]
    ],
    oper: [
      [center, 1280, 720, 1038, 299, 1115, 406, 1000],
      [center, 1280, 720, 939, 217, 960, 243, 1000]
    ]
  }];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    if (thisScript.oper({
      name: '右下角贪食鬼',
      operator: [{
        desc: thisOperator[0].desc,
        oper: thisOperator[0].oper,
      }]
    })) { }
    if (thisScript.oper({
      name: '进食习惯',
      operator: [{
        desc: thisOperator[1].desc,
        oper: thisOperator[1].oper,
      }]
    })) { }
    if (thisScript.oper({
      name: '贪食鬼',
      operator: [{
        desc: thisOperator[2].desc,
        oper: thisOperator[2].oper,
      }]
    })) { }
    if (thisScript.oper({
      name: '不再提示',
      operator: [{
        desc: thisOperator[3].desc,
        oper: thisOperator[3].oper,
      }]
    })) { }
    if (thisScript.oper({
      name: '进食完毕或无进食御魂',
      operator: [{
        desc: thisOperator[4].desc,
        oper: [thisOperator[4].oper[0], thisOperator[4].oper[1]]
      }]
    })) {
      let thisconf = thisScript.scheme.config['301'];
      if (thisconf && thisconf.scheme_switch_enabled) {
        thisScript.setCurrentScheme(thisconf.next_scheme as string);
        thisScript.myToast(`切换方案为[${thisconf.next_scheme}]`);
        thisScript.rerun();
        sleep(3000);
        return;
      }
    }
    return false;
  }
}