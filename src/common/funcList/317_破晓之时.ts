import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func317 implements IFuncOrigin {
  id = 317;
  name = '破晓之时';
  desc = "自行筹齐5个月读buuf再开启,方案只会乱点关卡和放弃";
  operator: IFuncOperatorOrigin[] = [{
    desc: [
      1280, 720,
      [
        [left, 30, 34, 0xdfd4f1],
        [left, 240, 38, 0x593716],
        [left, 318, 28, 0x3d467c],
        [left, 59, 626, 0xf5e2bc],
        [left, 80, 664, 0xecd8ac],
        [left, 202, 570, 0x553037],
        [left, 202, 508, 0xb57f6a],
      ]
    ]
  }, {//1 挑战
    desc: [
      1280, 720,
      [
        [center, 873, 457, 0xefdaac],
        [center, 899, 458, 0xffe7bd],
        [center, 878, 476, 0xfef1d6],
        [center, 896, 474, 0xf3dfc4],
        [center, 955, 473, 0xfaefdb],
        [right, 980, 466, 0xfaefdb],
      ]
    ],
    oper: [
      [center, 1280, 720, 858, 442, 912, 490, 500]
    ]
  }, {//2 挑战成功
    desc: [
      1280, 720,
      [
        [center, 412, 223, 0xd6a774],
        [center, 488, 253, 0xe9bb86],
        [center, 586, 264, 0xfeead1],
        [center, 662, 266, 0xfadcb8],
        [center, 699, 259, 0xf4c693],
        [center, 840, 257, 0xffdbb3],
      ]
    ],
    oper: [
      [center, 1280, 720, 940, 350, 1217, 507, 500]
    ]
  }, {//3 获取成功
    desc: [
      1280, 720,
      [
        [center, 508, 171, 0xffcfa6],
        [center, 568, 174, 0xe9ba87],
        [center, 600, 175, 0xf8ce9c],
        [center, 663, 192, 0xffecd5],
        [center, 755, 170, 0xffd3a2],
      ]
    ],
    oper: [
      [center, 1280, 720, 857, 459, 913, 506, 500]
    ]
  }, {//4 六道挑战
    desc: [
      1280, 720,
      [
        [center, 873, 478, 0xffeebb],
        [center, 901, 478, 0xffe4bc],
        [center, 870, 504, 0xfdf0e2],
        [center, 905, 504, 0xfce8d4],
        [center, 885, 466, 0x3b3148],
        [center, 885, 505, 0x835149],
      ]
    ],
    oper: [
      [center, 1280, 720, 860, 464, 913, 509, 500]
    ]
  }, {//5 六道挑战
    desc: [
      1280, 720,
      [
        [center, 872, 498, 0xffeebb],
        [center, 886, 487, 0x3a3148],
        [center, 900, 501, 0xffe4bc],
        [center, 890, 516, 0xfff2d7],
        [center, 882, 516, 0xffefce],
        [center, 862, 509, 0x43364c],
      ]
    ],
    oper: [
      [center, 1280, 720, 861, 483, 914, 535, 500]
    ]
  }, {//6 点固定事件位置
    oper: [
      [center, 1280, 720, 976, 280, 1039, 341, 500], // 位置:右位
      [center, 1280, 720, 612, 143, 698, 207, 500], // 位置:上位
    ]
  }, {//7 结束
    desc: [
      1280, 720,
      [
        [center, 416, 280, 0xdbac78],
        [center, 488, 304, 0xebbd88],
        [center, 588, 322, 0xfeebd5],
        [center, 694, 308, 0xfbd6ab],
        [center, 795, 260, 0xf1c390],
        [center, 843, 318, 0xffe2c2],
      ]
    ],
    oper: [
      [center, 1280, 720, 940, 350, 1217, 507, 500]
    ]
  }, {//8 事件
    desc: [
      1280, 720,
      [
        [left, 30, 34, 0xdfd4f1],
        [left, 240, 38, 0x593716],
        [left, 318, 28, 0x3d467c],
        [left, 59, 626, 0xf5e2bc],
        [left, 80, 664, 0xecd8ac],
        [left, 306, 524, 0xc19373],
        [center, 356, 541, 0x4c2d33],

      ]
    ]
  }, {//9 事件
    desc: [
      1280, 720,
      [
        [left, 30, 34, 0xdfd4f1],
        [left, 240, 38, 0x593716],
        [left, 318, 28, 0x3d467c],
        [left, 59, 626, 0xf5e2bc],
        [left, 80, 664, 0xecd8ac],
        [left, 226, 497, 0xae7a67],
        [left, 233, 544, 0x58323a],
      ]
    ],
    oper: [
      [center, 1280, 720, 342, 294, 453, 387, 500], // 位置:右位
      [center, 1280, 720, 598, 216, 709, 297, 500], // 位置:上位
    ]
  }];

  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    if (thisScript.oper({
      name: '破晓之时_执行事件',
      operator: [thisOperator[1], thisOperator[2], thisOperator[3],
      thisOperator[4], thisOperator[5], thisOperator[9],]
    })) {
      return true;
    }

    let point = thisScript.findMultiColor('破晓之时_放弃');
    if (point) {
      let oper = [[
        point.x - 5,
        point.y - 5,
        point.x + 5,
        point.y + 5,
        1200
      ]];
      sleep(500);
      thisScript.regionClick(oper);
      return true;
    }

    if (thisScript.oper({
      name: '破晓之时_选事件',
      operator: [{ desc: thisOperator[0].desc }, { desc: thisOperator[8].desc }]
    })) {
      thisScript.regionClick([thisOperator[6].oper[thisScript.global.d6Loop]]);
      if (++thisScript.global.d6Loop > 1) {
        thisScript.global.d6Loop = 0;
      }
      return true;
    }

    if (thisScript.oper({
      name: '破晓之时_结束',
      operator: [thisOperator[7]]
    })) {
      thisScript.doPush(thisScript, { text: `脚本已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
      thisScript.stop();
    }
  }
}