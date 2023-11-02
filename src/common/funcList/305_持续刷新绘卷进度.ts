import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func305 implements IFuncOrigin {
  id = 305;
  name = '持续刷新绘卷进度';
  desc = '自动刷新绘卷进度'
  config = [{
    desc: '详细设置',
    config: [{
      name: 'cdWaitTime',
      desc: '检测频率(s)，逗号分隔，表示检测频率的下限与上限',
      type: 'text',
      default: '10,15'
    }, {
      name: 'choiceEmaki',
      desc: '选择卷X（输入数字1,2,3,4,5,6）',
      type: 'text',
      default: '1'
    }
    ]
  }
  ];
  operator: IFuncOperatorOrigin[] = [{
    desc: [1280, 720, [//0,绘卷界面和卷X坐标
      [left, 26, 539, 0xd6ae21],
      [left, 32, 689, 0x42174a],
      [center, 559, 26, 0x543d33],
      [center, 676, 34, 0xf8f3e0]]
    ],
    oper: [
      [center, 1280, 720, 127, 124, 446, 350, 500],//卷1
      [center, 1280, 720, 476, 124, 800, 354, 500],//卷2
      [center, 1280, 720, 823, 123, 1150, 354, 500],//卷3
      [center, 1280, 720, 126, 378, 450, 606, 500],//卷4
      [center, 1280, 720, 476, 378, 801, 605, 500],//卷5
      [center, 1280, 720, 826, 379, 1146, 605, 500],//卷6
      [center, 1280, 720, 1188, 290, 1224, 402, 500],//排行榜
    ]
  }, {//1,绘卷进度界面
    desc: [1280, 720,
      [[left, 43, 50, 0x393735],
      [center, 637, 64, 0x946d52],
      [center, 604, 652, 0x946d52],
      [right, 1161, 67, 0xefcbce]]
    ],
    oper: [
      [center, 1280, 720, 1151, 54, 1175, 79, 500],//红色关闭
    ]
  }]

  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    const thisconf = thisScript.scheme.config['305'];
    const emaki = Number(thisconf.choiceEmaki) - 1;
    // console.log(thisOperator[0].oper[1])
    if (thisScript.oper({
      name: '绘卷界面',
      operator: [{
        desc: thisOperator[0].desc,
        oper: [thisOperator[0].oper[emaki], thisOperator[0].oper[6]]
      }]
    })) {
      const cdWaiteTimePair = String(thisconf.cdWaitTime).split(',');
      const cdWaitTime = random(parseInt(cdWaiteTimePair[0]), parseInt(cdWaiteTimePair[1]));
      thisScript.myToast(`绘卷刷新CD, ${(cdWaitTime)}秒后再次检测`);
      sleep(1000 * (cdWaitTime));
    }
    if (thisScript.oper({
      name: '绘卷进度界面',
      operator: [{
        desc: thisOperator[1].desc,
        oper: thisOperator[1].oper,
      }]
    })) {
      // ?? nothing to do
    }
    return false;
  }
}

