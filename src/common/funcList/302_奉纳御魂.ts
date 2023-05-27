import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func302 implements IFuncOrigin {
  id = 302;
  name = '奉纳御魂';
  desc = '奉纳弃置御魂，结束后返回式神录';
  config = [{
    desc: '结束后切换方案',
    config: [{
      name: 'scheme_switch_enabled',
      desc: '是否启用',
      type: 'switch',
      default: false,
    }, {
      name: 'next_scheme',
      desc: '下一个方案',
      type: 'scheme',
      default: '通用准备退出',
    }]
  }];
  operator: IFuncOperatorOrigin[] = [{
    //0,奉纳
    desc: [1280, 720, [
      [right, 1171, 215, 0xd4c4b3],
      [right, 1212, 216, 0xd0bfaf],
      [right, 1205, 248, 0xeae3d1],
      [right, 1178, 247, 0xeae1d0]]
    ],
    oper: [
      [center, 1280, 720, 1164, 212, 1211, 273, 1000]
    ]
  }, {  //1,第一排一行御魂+0
    desc: [1280, 720, [
      [left, 49, 134, 0x4a5de9],
      [left, 108, 252, 0xe7e2d0],
      [left, 112, 245, 0xf0ebd8],
      [left, 116, 251, 0xe9e4d2],
      [left, 175, 255, 0xffffff]]
    ],
    oper: [
      [center, 1280, 720, 820, 644, 922, 688, 1000]
    ]
  }, {  //2,开始奉纳
    desc: [1280, 720, [
      [left, 49, 134, 0x4a5de9],
      [left, 108, 252, 0xa5dde5],
      [left, 112, 245, 0xb6e5e9],
      [left, 116, 251, 0xa7dfe6],
      [left, 173, 252, 0x0685aa]]
    ],
    oper: [
      [center, 1280, 720, 820, 644, 922, 688, 1700]
    ]
  }, {  //3,神赐一排
    desc: [1280, 720, [
      [center, 345, 285, 0x817876],
      [center, 340, 327, 0xb5a5a5],
      [center, 937, 276, 0x78706d],
      [center, 940, 321, 0xb0a29e]]
    ],
    oper: [
      [center, 1280, 720, 580, 604, 702, 668, 1000]
    ]
  }, {  //4,神赐二排
    desc: [1280, 720, [
      [center, 602, 209, 0xc39a47],
      [center, 678, 203, 0xc09a45],
      [center, 368, 371, 0x906b41],
      [center, 922, 366, 0x89683e]]
    ],
    oper: [
      [center, 1280, 720, 580, 604, 702, 668, 1000]
    ]
  }, {  //5,背景墙
    desc: [1280, 720, [
      [center, 895, 275, 0xe0984a],
      [center, 875, 656, 0x524b45],
      [center, 852, 467, 0x000000],
      [center, 877, 466, 0x000000]]
    ],
    oper: [
      [center, 1280, 720, 26, 18, 66, 58, 1000]
    ]
  }, { //6,长按坐标和随机数
    oper: [
      [center, 1280, 720, 94, 244, 184, 347, 200]
    ]
  }, {//7,神赐三排
    desc: [1280, 720,
      [[center, 368, 314, 0x906b41],
      [center, 920, 313, 0x8c6940],
      [center, 616, 188, 0xddcc77],
      [center, 666, 187, 0xdcb85b]]
    ],
    oper: [
      [center, 1280, 720, 580, 604, 702, 668, 1000]
    ]
  }, {//8,更改排序方式
    desc: [1280, 720,
      [[center, 393, 130, 0xcdc7b6],
      [center, 428, 142, 0xe9e4d1],
      [center, 443, 136, 0xb4ad9e],
      [center, 461, 138, 0xf4efdc],
      [center, 485, 139, 0xe7e1cf]]
    ],
    oper: [
      [center, 1280, 720, 366, 118, 526, 152, 500],
      [center, 1280, 720, 380, 284, 541, 330, 1500],
    ]
  }
  ];

  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    if (!thisScript.oper({
      name: '排序方式',
      operator: [{
        desc: thisOperator[8].desc,
      }]
    }) && thisScript.oper({
      name: '背景墙，灰奉纳',
      operator: [{
        desc: thisOperator[5].desc
      }]
    })) {
      thisScript.oper({
        name: '切换排序',
        operator: [{
          oper: thisOperator[8].oper
        }]
      })
      return true;
    }

    if (thisScript.oper({
      name: '奉纳',
      operator: [thisOperator[0],thisOperator[2],thisOperator[3],
                thisOperator[4],thisOperator[7],
              ]
    })) { 
      sleep(500)
      return true;
    }

    if (thisScript.oper({
      name: '第一排一行御魂',
      operator: [{
        desc: thisOperator[1].desc,
      }]
    })) {
      thisScript.helperBridge.regionClick([[...thisOperator[6].oper[0], 1000]], thisScript.scheme.commonConfig.afterClickDelayRandom)
      return true;
    }

    if (!thisScript.oper({
      name: '第一排第一个御魂+0',
      operator: [{
        desc: thisOperator[1].desc,
      }]
    }) && thisScript.oper({
      name: '背景墙，灰奉纳',
      operator: [thisOperator[5]]
    })) {
      let thisconf = thisScript.scheme.config['302'];
      if (thisconf && thisconf.scheme_switch_enabled) {
        thisScript.setCurrentScheme(thisconf.next_scheme as string);
        thisScript.myToast(`切换方案为[${thisconf.next_scheme}]`);
        thisScript.rerun();
        sleep(3000);
        return;
      } else {
        thisScript.doPush(thisScript, { text: '奉纳结束或未正确使用，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
        thisScript.stop();
        sleep(3000);
        return;
      }
    }
    return false;
  }
}
