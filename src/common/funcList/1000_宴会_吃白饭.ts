import {
  IFuncOrigin,
  IFuncOperatorOrigin,
  IFuncOperator,
} from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1000 implements IFuncOrigin {
  id = 1000;
  name = '宴会';
  desc = '宴会_摆烂';
  operator: IFuncOperatorOrigin[] = [
    {
      //	0 检测_宴会
      desc: [
        1280,
        720,
        [
          [left, 40, 39, 0xfdeeb4],
          [right, 1127, 35, 0xd7af82],
          [right, 1181, 40, 0xcfa578],
          [right, 1243, 41, 0xcca174],
          [right, 1063, 21, 0xfa8c42],
          [left, 212, 106, 0x633f26],
          [left, 101, 474, 0xe5bc8b],
          [right, 1216, 645, 0xfefcf7],
        ],
      ],
      oper: [
        [left, 1280, 720, 19, 156, 98, 242, 1200], //	点击左侧式神
      ],
    },
    {
      //	1 检测_寮会结束
      desc: [
        1280,
        720,
        [
          [center, 590, 177, 0xe4b231],
          [center, 717, 166, 0xf1f1e6],
          [center, 652, 223, 0xe8a639],
          [left, 102, 200, 0xf3d9af],
          [left, 101, 446, 0xf3d8a5],
          [right, 1219, 639, 0xfffdf9],
          [right, 1057, 69, 0xf7dca9],
        ],
      ],
    },
    {
      //	2 检测_吃饭式神未开轮换
      desc: [
        1280,
        720,
        [
          [center, 330, 257, 0xf2d7ab],
          [center, 568, 257, 0xf2d7ab],
          [center, 806, 257, 0xf2d7a9],
          [center, 753, 129, 0x301c13],
          [left, 216, 711, 0x3e2d1c],
          [right, 1228, 687, 0x381c10],
          [right, 1170, 559, 0xe8d6ae],
          [right, 1024, 287, 0x2f398b],
        ],
      ],
      oper: [
        [right, 1280, 720, 1008, 292, 1040, 315, 1200], //	点击_自动轮换按钮
        [right, 1280, 720, 1005, 177, 1040, 231, 1200], //	点击_轮换按钮
      ],
    },
    {
      //	3 检测_吃饭式神已开轮换
      desc: [
        1280,
        720,
        [
          [center, 330, 257, 0xf2d7ab],
          [center, 568, 257, 0xf2d7ab],
          [center, 806, 257, 0xf2d7a9],
          [center, 753, 129, 0x301c13],
          [left, 216, 711, 0x3e2d1c],
          [right, 1228, 687, 0x381c10],
          [right, 1170, 559, 0xe8d6ae],
          [right, 1023, 296, 0xffffff],
        ],
      ],
      oper: [
        [left, 1280, 720, 30, 17, 75, 62, 1200], //	返回
      ],
    },
  ];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    if (
      thisScript.oper({
        name: '宴会_吃饭界面',
        operator: [
          {
            desc: thisOperator[0].desc,
          },
        ],
      })
    ) {
      const point1 = thisScript.findMultiColor('宴会_举高高');

      if (point1) {
        console.log('查找举高高成功');
        const oper = [[point1.x, point1.y, point1.x, point1.y, 120]];
        thisScript.regionClick(oper);
        return true;
      }

      if (!thisScript.global.banquet_change_flag) {
        return thisScript.oper({
          name: '宴会_式神轮换',
          operator: [
            {
              oper: thisOperator[0].oper,
            },
          ],
        });
      }
      return false;
    }

    if (
      thisScript.oper({
        name: '检测_吃饭式神已开轮换',
        operator: [thisOperator[3]],
      })
    ) {
      thisScript.global.banquet_change_flag = true;
      return true;
    }

    if (
      thisScript.oper({
        name: '检测_吃饭式神未开轮换',
        operator: [
          {
            desc: thisOperator[2].desc,
            oper: [thisOperator[2].oper[0]],
          },
        ],
      })
    ) {
      if (thisScript.global.checked_yard_count >= 3) {
        thisScript.global.checked_yard_count = 0;

        return thisScript.oper({
          name: '设置轮换式神',
          operator: [
            {
              oper: [thisOperator[2].oper[1]],
            },
          ],
        });
      } else {
        sleep(1500);
        if (
          !thisScript.global.checked_yard_count ||
          Number.isNaN(thisScript.global.checked_yard_count)
        ) {
          thisScript.global.checked_yard_count = 1;
        } else {
          thisScript.global.checked_yard_count += 1;
        }
      }
      return true;
    }

    if (
      thisScript.oper({
        name: '宴会_结束',
        operator: [
          {
            desc: thisOperator[1].desc,
          },
        ],
      })
    ) {
      if (
        thisScript.runtimeParams &&
        thisScript.runtimeParams.liao_activity_state
      ) {
        thisScript.runtimeParams.liao_activity_state['banquet'] = true;

        const next_scheme = '返回庭院';
        thisScript.rerun(next_scheme as string, {
          next_scheme_name: '庭院进入寮每日活动',
          liao_activity_state: thisScript.runtimeParams.liao_activity_state,
        });
      } else {
        const next_scheme = '返回庭院';
        thisScript.rerun(next_scheme);
      }
      return false;
    }
    return false;
  }
}
