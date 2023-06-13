import {
  IFuncOrigin,
  IFuncOperatorOrigin,
  IFuncOperator,
} from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func998 implements IFuncOrigin {
  id = 998;
  name = '式神寄养';
  desc = '阴阳寮式神寄养页面';
  operator: IFuncOperatorOrigin[] = [
    {
      //	0 检测_是否有体力
      desc: [
        1280,
        720,
        [
          [center, 841, 490, 0x10100c],
          [center, 840, 444, 0x691f0e],
          [center, 812, 459, 0x10100e],
          [center, 869, 457, 0x10100c],
          [center, 842, 480, 0x822f16],
          [center, 832, 587, 0x2d2322],
        ],
      ],
      oper: [
        [center, 1280, 720, 821, 440, 861, 484, 1200], //	点击 体力
      ],
    },
    {
      //	1 检测_是否有经验
      desc: [
        1280,
        720,
        [
          [center, 915, 487, 0x10100c],
          [center, 895, 456, 0x10100c],
          [center, 622, 308, 0xe2cbbf],
          [center, 918, 431, 0x10100c],
        ],
      ],
      oper: [
        [center, 1280, 720, 896, 440, 932, 480, 1200], //	点击 经验
      ],
    },
    {
      //	2 检测_体力经验弹窗
      desc: [
        1280,
        720,
        [
          [center, 332, 151, 0xeeddcc],
          [center, 918, 159, 0xeddccc],
          [center, 948, 556, 0xdfcebe],
          [center, 372, 553, 0xdfcebe],
          [center, 484, 133, 0x5d3c1f],
          [center, 782, 148, 0x6f5326],
          [center, 453, 678, 0x89341c],
          [center, 696, 675, 0x9cb9df],
        ],
      ],
      oper: [
        [center, 1280, 720, 611, 476, 676, 519, 1200], //	点击领取
        [center, 1280, 720, 956, 151, 994, 179, 1200], //  点击关闭
      ],
    },
    {
      //	3 检测_寄养奖励
      desc: [
        1280,
        720,
        [
          [center, 612, 141, 0x10100c],
          [center, 604, 192, 0x10100c],
          [center, 591, 166, 0xffc90d],
          [center, 606, 304, 0xe3cfc3],
        ],
      ],
      oper: [
        [center, 1280, 720, 592, 148, 628, 183, 1200], //	点击 寄养收成
      ],
    },
    {
      //	4 检测_获取奖励
      desc: [
        1280,
        720,
        [
          [center, 526, 194, 0xfbf1ca],
          [center, 620, 196, 0xfbf4d0],
          [center, 872, 300, 0xb29b82],
          [center, 418, 288, 0xb69f86],
          [center, 464, 406, 0xc9b298],
        ],
      ],
      oper: [
        [center, 1280, 720, 448, 609, 812, 671, 1200], //	点击 空白处
        [center, 1280, 720, 957, 148, 996, 180, 1200], //	点击_关闭
      ],
    },
    {
      // 5 点击式神寄养
      desc: [
        1280,
        720,
        [
          [right, 1186, 74, 0xd4ccbb],
          [right, 1186, 95, 0x282420],
          [right, 1186, 136, 0xc19b6d],
          [right, 1200, 106, 0xbab19c],
          [center, 756, 186, 0xac9b79],
        ],
      ],
      oper: [[right, 1280, 720, 1142, 50, 1226, 129, 1200]],
    },
    {
      //	6 检测_寄养的式神是否已经寄养结束
      desc: [
        1280,
        720,
        [
          [left, 40, 35, 0xeff5fb],
          [right, 1175, 564, 0xecdbb2],
          [left, 151, 695, 0x4d2f20],
          [right, 1075, 86, 0xaa3620],
          [right, 1166, 137, 0xd0a76d],
          [right, 1197, 128, 0xf3d793],
        ],
      ],
      oper: [
        [right, 1280, 720, 1147, 49, 1222, 132, 1200], // 点击寄养的式神
      ],
    },
    {
      //	7 检测_式神寄养式神页
      desc: [
        1280,
        720,
        [
          [right, 1084, 83, 0xa7371d],
          [right, 1184, 203, 0x525252],
          [right, 968, 204, 0x505150],
          [right, 1171, 564, 0xe5d4ab],
          [right, 1127, 715, 0x3e2d1c],
          [right, 1185, 152, 0x414141],
        ],
      ],
      oper: [
        [left, 1280, 720, 23, 24, 60, 63, 1200], //	点击 退出
      ],
    },
    {
      //	8 检测_式神育成是否不为空
      desc: [
        1280,
        720,
        [
          [left, 112, 228, 0xf8d086],
          [center, 324, 228, 0xf8d086],
          [center, 542, 228, 0xf7d086],
          [center, 752, 228, 0xf8d086],
          [right, 968, 228, 0xf8d086],
          [right, 1182, 228, 0xf8d086],
        ],
      ],
      oper: [
        [left, 1280, 720, 92, 299, 135, 333, 1200], //  第一个狗粮位置
        [left, 1280, 720, 297, 308, 352, 334, 1200], //  第二个狗粮位置
        [center, 1280, 720, 515, 297, 572, 342, 1200], //  第三个狗粮位置
        [center, 1280, 720, 728, 299, 780, 339, 1200], //  第四个狗粮位置
        [center, 1280, 720, 953, 294, 998, 344, 1200], //  第五个狗粮位置
        [right, 1280, 720, 1162, 315, 1211, 357, 1200], //  第六个狗粮位置
      ],
    },
    {
      //	9 检测_式神育成是否为空
      desc: [
        1280,
        720,
        [
          [left, 112, 228, 0xdabd9b],
          [center, 324, 228, 0xdabd9b],
          [center, 542, 228, 0xdabd9b],
          [center, 752, 228, 0xdabd9b],
          [right, 968, 228, 0xdabd9b],
          [right, 1182, 228, 0xdabd9b],
        ],
      ],
      oper: [
        [center, 1280, 720, 466, 544, 516, 607, 1200], //	点击 第三个式神
        [center, 1280, 720, 466, 544, 516, 607, 1200],
        [center, 1280, 720, 466, 544, 516, 607, 1200],
        [center, 1280, 720, 466, 544, 516, 607, 1200],
        [center, 1280, 720, 466, 544, 516, 607, 1200],
        [center, 1280, 720, 466, 544, 516, 607, 1200],
      ],
    },
    {
      //	10 判断_是否为己方结界
      desc: [
        1280,
        720,
        [
          [center, 611, 300, 0x0c0804],
          [center, 913, 305, 0x0c0804],
          [left, 318, 305, 0x0c0804],
          [center, 613, 294, 0xe1cf6b],
          [left, 202, 462, 0x10100c],
        ],
      ],
      oper: [
        [center, 1280, 720, 582, 270, 638, 400, 600], //  点击 式神养成
      ],
    },
    {
      //  11 判断_是否有结界卡奖励
      desc: [
        1280,
        720,
        [
          [center, 909, 304, 0xdecdc3],
          [center, 908, 150, 0x10100c],
          [center, 623, 308, 0xe4ccc1],
        ],
      ],
      oper: [
        [center, 1280, 720, 904, 171, 939, 197, 1200], //  点击 结界卡奖励
      ],
    },
  ];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    let thisconf = thisScript.scheme.config['998'];

    if (
      thisScript.global.jy_change_shikigami === 'change' &&
      thisScript.oper({
        id: 998,
        name: '判断_是否为己方结界',
        operator: [thisOperator[10]],
      })
    ) {
      return true;
    }

    if (
      thisScript.global.jy_change_shikigami !== 'jy_flag' &&
      thisScript.oper({
        id: 998,
        name: '检测是否为式神寄养列表',
        operator: [
          {
            desc: thisOperator[7].desc,
          },
        ],
      })
    ) {
      if (thisScript.global.jy_change_shikigami === 'finish') {
        thisScript.global.jy_change_shikigami = 'jy_flag';
        return thisScript.oper({
          id: 998,
          name: '退出式神寄养列表',
          operator: [
            {
              oper: [thisOperator[7].oper[0]],
            },
          ],
        });
      }

      if (
        thisScript.oper({
          id: 998,
          name: '检测式神育成是否为空',
          operator: [thisOperator[9]],
        })
      ) {
        thisScript.global.jy_change_shikigami = 'finish';
        return true;
      }

      if (
        thisScript.oper({
          id: 998,
          name: '检测式神育成是否不为空',
          operator: [
            {
              desc: thisOperator[8].desc,
            },
          ],
        })
      ) {
        console.log('检测式神育成是否不为空');
        let point = thisScript.findMultiColor('寄养狗粮_满级标识');
        if (point) {
          console.log(`狗粮满级了,清空狗粮`);
          return thisScript.oper({
            id: 998,
            name: '清空狗粮',
            operator: [
              {
                oper: thisOperator[8].oper,
              },
            ],
          });
        } else {
          // 狗粮没满级
          console.log('狗粮没满级');
          thisScript.global.jy_change_shikigami = 'finish';
          return true;
        }
      }

      return true;
    }

    if (thisScript.global.jy_change_shikigami === 'jy_flag') {
      if (
        thisScript.oper({
          id: 998,
          name: '检测是否为式神寄养列表',
          operator: [
            thisOperator[0],
            thisOperator[11],
            thisOperator[1],
            thisOperator[2],
            thisOperator[3],
            thisOperator[4],
            thisOperator[5],
            thisOperator[10],
            thisOperator[6],
          ],
        })
      ) {
        return true;
      }
    }

    return false;
  }
}
