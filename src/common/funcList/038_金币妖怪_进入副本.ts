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

export class Func038 implements IFuncOrigin {
  id = 38;
  name = '金币妖怪_组队界面';
  operator: IFuncOperatorOrigin[] = [
    {
      // 0 是否为组队界面
      desc: [
        1280,
        720,
        [
          [center, 712, 45, 0x10161c],
          [left, 42, 38, 0xf6e9ab],
          [right, 1163, 44, 0xd3ab7d],
          [center, 830, 68, 0xf9dabf],
          [left, 181, 23, 0x050505],
          [center, 685, 9, 0x141e23],
        ],
      ],
      oper: [
        [right, 1280, 720, 1184, 620, 1235, 658, 1200], //	点击 挑战
      ],
    },
    {
      //	1 三人组队是否没有人
      desc: [
        1280,
        720,
        [
          [right, 1088, 252, 0xffffff],
          [center, 644, 253, 0xffffff],
          [center, 728, 48, 0x1a232b],
          [center, 580, 13, 0x141e24],
          [center, 829, 61, 0xfbdfc6],
          [left, 43, 37, 0xf5e6a8],
          [right, 1164, 45, 0xd1a879],
          [left, 114, 266, 0x440e00],
        ],
      ],
    },
    {
      //	2 两人组队是否没有人
      desc: [
        1280,
        720,
        [
          [center, 728, 48, 0x1a232b],
          [center, 580, 13, 0x141e24],
          [center, 829, 61, 0xfbdfc6],
          [left, 43, 37, 0xf5e6a8],
          [right, 1164, 45, 0xd1a879],
          [right, 1088, 253, 0xffffff],
          [center, 552, 274, 0x3a0b00],
        ],
      ],
    },
    {
      //	3 五人组队是否没有人
      desc: [
        1280,
        720,
        [
          [center, 728, 48, 0x1a232b],
          [center, 580, 13, 0x141e24],
          [center, 829, 61, 0xfbdfc6],
          [left, 43, 37, 0xf5e6a8],
          [right, 1164, 45, 0xd1a879],
          [right, 1169, 277, 0xffffff],
          [center, 910, 296, 0xffffff],
          [center, 664, 313, 0xffffff],
          [center, 420, 292, 0xffffff],
          [left, 52, 258, 0x3a0b00],
        ],
      ],
    },
  ];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    // 判断是不是组队界面并且判断队伍是否有人
    if (
      thisScript.oper({
				id: 38,
        name: '金币妖怪_组队界面',
        operator: [
          {
            desc: thisOperator[0].desc,
          },
        ],
      })
    ) {
      if (
        thisScript.oper({
					id: 38,
          name: '妖怪_组队界面是否没有人',
          operator: [thisOperator[1], thisOperator[2], thisOperator[3]],
        })
      ) {
				// 继续等
				return false;
      } else {
				return thisScript.oper({
					id: 38,
          name: '妖怪_组队界面有人 开撸',
          operator: [{
						oper: thisOperator[0].oper
					}],
        });
			}
    }
		return false;
  }
}
