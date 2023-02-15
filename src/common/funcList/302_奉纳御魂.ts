import { Script } from '@/system/script';
import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { count } from '__console__';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func018 implements InterfaceFuncOrigin {
  id = 302;
  name = '奉纳御魂';
  desc = '奉纳弃置御魂(排序需改为“等级/星级”)';
  operator: InterfaceFuncOperatorOrigin[] = [{
    //奉纳
    desc: [1280, 720, [
      [right, 1171, 215, 0xd4c4b3],
      [right, 1212, 216, 0xd0bfaf],
      [right, 1205, 248, 0xeae3d1],
      [right, 1178, 247, 0xeae1d0]]
    ],
    oper: [
      [center, 1280, 720, 1164, 212, 1211, 273, 1000]
    ]
  }, {
    //第一排一行御魂+0
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
  }, {
    //开始奉纳
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
  }, {
    //神赐一排
    desc: [1280, 720, [
      [center, 345, 285, 0x817876],
      [center, 340, 327, 0xb5a5a5],
      [center, 937, 276, 0x78706d],
      [center, 940, 321, 0xb0a29e]]
    ],
    oper: [
      [center, 1280, 720, 580, 604, 702, 668, 1000]
    ]
  }, {
    //神赐二排
    desc: [1280, 720, [
      [center, 602, 209, 0xc39a47],
      [center, 678, 203, 0xc09a45],
      [center, 368, 371, 0x906b41],
      [center, 922, 366, 0x89683e]]
    ],
    oper: [
      [center, 1280, 720, 580, 604, 702, 668, 1000]
    ]
  }
  , {
    //背景墙
    desc: [1280,720,[
      [center,895,275,0xe0984a],
      [center,875,656,0x524b45],
      [center,852,467,0x000000],
      [center,877,466,0x000000]]
    ]
  }
  ];

  operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
    if (thisScript.oper({
      name: '奉纳',
      operator: [{
        desc: thisOperator[0].desc,
        oper: thisOperator[0].oper,
      }]
    })) { }
    if (thisScript.oper({
      name: '第一排一行御魂',
      operator: [{
        desc: thisOperator[1].desc,
      }]
    })) {
      let x=[138+random(10,-10),292+random(10,-10),1000+random(200,-200)];
      press(x[0],x[1],x[2]);
    }
    if (thisScript.oper({
      name: '开始奉纳',
      operator: [{
        desc: thisOperator[2].desc,
        oper: thisOperator[2].oper,
      }]
    })) {
      sleep(300)
     }
    if (thisScript.oper({
      name: '神赐第一排',
      operator: [{
        desc: thisOperator[3].desc,
        oper: thisOperator[3].oper,
      }]
    })) { }
    if (thisScript.oper({
      name: '神赐第二排',
      operator: [{
        desc: thisOperator[4].desc,
        oper: thisOperator[4].oper,
      }]
    })) { }
    if (!thisScript.oper({
      name: '第一排第一个御魂+0',
      operator: [{
        desc: thisOperator[1].desc,
      }]
    }) && thisScript.oper({
      name:'背景墙，灰奉纳',
      operator:[{
        desc: thisOperator[5].desc,
      }]
    })) { 
      thisScript.doOspPush(thisScript, { text: '奉纳完成，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
      sleep(3000);
    }
    return true;
}
}