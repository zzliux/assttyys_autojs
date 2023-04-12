import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func309 implements IFuncOrigin {
  id = 309;
  name = '强化御魂';
  desc = '在御魂-整理界面强化筛选或方案里的御魂+15';
  config = [{
    desc: '',
    config: [{
      name: 'switch',
      desc: '使用四星青吉鬼',
      type: 'switch',
      default: true,
    }]
  }]
  operator: IFuncOperatorOrigin[] = [{//0,整理界面
    desc: [1280, 720,
      [[center, 560, 651, 0xfae3a7],
      [center, 575, 649, 0xefdfad],
      [center, 490, 112, 0x433129],
      [left, 104, 668, 0x342824]]
    ]
  }, {//1,更改排序
    desc: [1280, 720,
      [[center, 437, 123, 0xd0cab9],
      [center, 461, 122, 0x8c8476],
      [center, 480, 122, 0xcdc7b6],
      [center, 498, 123, 0xf0ebd8],
      [center, 523, 123, 0x968e80]]
    ],
    oper: [
      [center, 1280, 720, 394, 110, 602, 146, 500],
      [center, 1280, 720, 422, 282, 586, 333, 500],
    ]
  }, {//2,进入整理
    desc: [1280, 720,
      [[right, 1170, 355, 0xe4d4c3],
      [right, 1168, 394, 0xdfd7c7],
      [right, 1208, 360, 0xe5dccc],
      [right, 1208, 391, 0xe7dece]]
    ],
    oper: [
      [center, 1280, 720, 1170, 355, 1208, 391, 1000],
      [center, 1280, 720, 546, 637, 582, 664, 1000]
    ]
  }, {//3,+15进度条
    desc: [1280, 720,
      [[right, 1007, 367, 0xcf4eff],
      [right, 1014, 364, 0xcb4df9],
      [right, 1054, 398, 0xd74ff9],
      [center, 784, 642, 0xd5a26f],
      [center, 762, 641, 0xe5c772]]
    ],
    oper: [
      [center, 1280, 720, 939, 618, 1098, 662, 1000],
      [center, 1280, 720, 29, 23, 63, 55, 1000],
    ]
  }, {//4,确认高级材料
    desc: [1280, 720,
      [[center, 468, 223, 0x6f4e3d],
      [center, 812, 222, 0x684736],
      [center, 472, 428, 0xdf6851],
      [center, 710, 428, 0xf4b25f]]
    ],
    oper: [
      [center, 1280, 720, 678, 408, 834, 450, 1000],
      [center, 1280, 720, 29, 23, 63, 55, 1000],
    ]
  }, {//5,等级提升
    desc: [1280, 720,
      [[center, 772, 118, 0xcca441],
      [right, 993, 116, 0xd7ab50],
      [right, 1069, 309, 0xe5d4c4],
      [center, 906, 606, 0xf4b25f]]
    ],
    oper: [
      [center, 1280, 720, 798, 591, 935, 629, 1000],
      [center, 1280, 720, 29, 23, 63, 55, 1000],
    ]
  }, {//6,青吉鬼
    desc: [1280, 720,
      [[left, 98, 180, 0x839f9c],
      [left, 144, 266, 0x74dada],
      [center, 766, 643, 0xe7c67b],
      [left, 264, 255, 0xd567f7]]
    ],
    oper: [
      [center, 1280, 720, 242, 233, 328, 325, 500],
    ]
  }, {//7,贪食鬼
    desc: [1280, 720,
      [[left, 88, 122, 0x4b5de9],
      [center, 760, 638, 0xe6cb80],
      [center, 783, 644, 0xdcb95a],
      [left, 144, 266, 0x74dada],
      [left, 182, 260, 0xdacab9]]
    ],
    oper: [
      [center, 1280, 720, 128, 238, 210, 330, 1000],
      [center, 1280, 720, 496, 468, 527, 496, 1000],
    ]
  }, {//8,找强化,找御魂
    oper: [
      [center, 1280, 720, 0, 0, 100, 40, 1000],
      [center, 1280, 720, 0, 0, 80, 80, 1000]
    ]
  }, {//9,退出(刷新)
    oper: [
      [center, 1280, 720, 27, 20, 66, 56, 1000]
    ]
  }, {//10,强化界面
    desc: [1280, 720,
      [[left, 87, 120, 0x485ce3],
      [left, 242, 122, 0x412e10],
      [center, 766, 643, 0xe7c67b],
      [right, 974, 642, 0xf4b25f]]
    ]
  }, {//11,上滑
    oper: [
      [center, 1280, 720, 94, 577, 188, 618, 0],
      [center, 1280, 720, 92, 255, 198, 310, 0],
    ]
  }
  ]
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    if (thisScript.oper({
      id: 309,
      name: '强化界面',
      operator: [thisOperator[10]]
    }) && !thisScript.oper({
      id: 309,
      name: '排序方式',
      operator: [{
        desc: thisOperator[1].desc
      }]
    })) {
      thisScript.oper({
        name: '更改排序方式',
        operator: [{
          oper: thisOperator[1].oper
        }]
      })
      return true;
    };

    if (thisScript.oper({
      id: 309,
      name: '强化御魂',
      operator: thisOperator.slice(2, 6)
    })) { return true; }

    let thisconf = thisScript.scheme.config['309'];
    if (thisconf.switch && thisScript.oper({
      id: 309,
      name: '青吉鬼',
      operator: [{
        desc: thisOperator[6].desc
      }]
    })) {
      thisScript.helperBridge.regionClick([[...thisOperator[6].oper[0], 1000]], thisScript.scheme.commonConfig.afterClickDelayRandom)
      thisScript.global.intensify_lagTime = new Date();
      return true;
    } else if (thisconf.switch == false && thisScript.oper({
      id: 309,
      name: '贪食鬼',
      operator: [thisOperator[7]]
    })) {
      thisScript.global.intensify_lagTime = new Date();
      return true;
    }
    let intensify_lagTime = thisScript.global.intensify_lagTime;
    if (!intensify_lagTime) {
      intensify_lagTime = new Date();
      thisScript.global.intensify_lagTime = new Date();
    }

    if (thisScript.oper({
      id: 309,
      name: '整理界面',
      operator: [thisOperator[0]]
    })) {
      let point_intensify = thisScript.findMultiColor('御魂强化_强化');
      if (point_intensify) {
        let oper_intensify = [[point_intensify.x, point_intensify.y, point_intensify.x + thisOperator[8].oper[0][2], point_intensify.y + thisOperator[8].oper[0][3], thisOperator[8].oper[0][4]]];
        thisScript.helperBridge.regionClick(oper_intensify, thisScript.scheme.commonConfig.afterClickDelayRandom);
        thisScript.global.intensify_lagTime = new Date();
        thisScript.global.intensify_NumOT = 0
        return true;
      }
      let point_level = thisScript.findMultiColor('御魂强化_零级');
      if (point_level) {
        let oper_level = [[point_level.x, point_level.y, point_level.x + thisOperator[8].oper[1][2], point_level.y + thisOperator[8].oper[1][3], thisOperator[8].oper[1][4]]];
        thisScript.helperBridge.regionClick(oper_level, thisScript.scheme.commonConfig.afterClickDelayRandom);
        thisScript.global.intensify_lagTime = new Date();
        return true;
      }
      intensify_lagTime = new Date();
      if (intensify_lagTime.getTime() - thisScript.global.intensify_lagTime.getTime() > 2000) {
        if (++thisScript.global.intensify_NumOT > 2) {
          thisScript.doOspPush(thisScript, { text: '多次未找到0级御魂，已停止。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
          thisScript.stop();  
        }
        thisScript.helperBridge.regionBezierSwipe(thisOperator[11].oper[0], thisOperator[11].oper[1], [1000, 1100], 200);
        thisScript.global.intensify_lagTime = new Date();
        return true;
      }

    }
  }
}