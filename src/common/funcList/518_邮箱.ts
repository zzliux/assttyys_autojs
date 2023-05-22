import { Script } from '@/system/script';
import {
  IFuncOrigin,
  IFuncOperatorOrigin,
  IFuncOperator,
} from '@/interface/IFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func518 implements IFuncOrigin {
  id = 518;
  name = '签到与领取邮箱奖励';
  desc = '庭院签到与领取邮箱奖励，只适配默认皮肤';
  operator: IFuncOperatorOrigin[] = [
    {
      // 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
      desc: [
        1280,
        720,
        [
          [right, 1226, 47, 0xcda47a],
          [right, 1157, 45, 0xb39671],
          [center, 389, 65, 0xfbc573],
          [right, 1207, 637, 0xdfd1cb],
        ],
      ],
    },
    {
      // 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
      desc: [
        1280,
        720,
        [
          [right, 1226, 47, 0xcda47a],
          [right, 1157, 45, 0xb29670],
          [center, 389, 65, 0xfbc573],
          [right, 1228, 646, 0xd6c6c3],
        ],
      ],
    },
    {
      //	// 页面是否为庭院(菜单已展开)另一种图标 御祝图标 只支持默认庭院皮肤与默认装饰
      desc: [
        1280,
        720,
        [
          [right, 1223, 662, 0xdbcbc7],
          [right, 1155, 41, 0xd7b188],
          [center, 451, 631, 0xe8e4e1],
          [center, 673, 651, 0xdb8b3f],
        ],
      ],
    },
    {
      // 庭院已打开菜单，另另外一种图标
      desc: [
        1280,
        720,
        [
          [right, 1223, 658, 0xdac9c4],
          [right, 1155, 41, 0xd6b187],
          [center, 451, 631, 0xe6e3e1],
          [center, 683, 657, 0xda6b29],
        ],
      ],
    },
    {
      //  检测_是否有邮件
      desc: [
        1280,
        720,
        [
          [left, 253, 521, 0xe0cdac],
          [left, 275, 530, 0xceb18d],
          [left, 284, 528, 0xc7a581],
          [left, 273, 511, 0xe7d5b6],
        ],
      ],
      oper: [
        [left, 1280, 720, 258, 508, 276, 525, 1200], //  点击邮箱
      ],
    },
    {
      //  检测_邮件弹窗_无全部领取
      desc: [
        1280,
        720,
        [
          [center, 570, 64, 0x5f4836],
          [right, 1182, 54, 0x3b383d],
          [right, 1169, 642, 0x544433],
          [center, 494, 635, 0xc8baab],
          [left, 106, 77, 0x654924],
          [left, 121, 659, 0x443729],
          [left, 127, 651, 0xbeb3a2],
        ],
      ],
      oper: [
        [center, 1280, 720, 403, 121, 467, 182, 1200], //  点击第一个邮件
        [right, 1280, 720, 1159, 94, 1199, 131, 1200], //  点击关闭
      ],
    },
    {
      //  检测_邮件弹窗_领取全部
      desc: [
        1280,
        720,
        [
          [center, 570, 64, 0x5f4836],
          [right, 1182, 54, 0x3b383d],
          [right, 1169, 642, 0x544433],
          [center, 494, 635, 0xc8baab],
          [left, 106, 77, 0x654924],
          [left, 107, 662, 0xf5d4a3],
          [left, 139, 666, 0xf3d3a2],
        ],
      ],
      oper: [
        [left, 1280, 720, 100, 636, 149, 677, 600], //  点击_全部领取
      ],
    },
    {
      //  检测_全部领取弹窗
      desc: [
        1280,
        720,
        [
          [right, 1051, 112, 0xc4ae93],
          [right, 1038, 597, 0xcbb59e],
          [left, 234, 116, 0xcbb59e],
          [left, 236, 612, 0xcbb49c],
          [center, 577, 573, 0xdc6950],
          [center, 721, 581, 0xf4b25f],
          [center, 520, 81, 0x5f4220],
        ],
      ],
      oper: [
        [center, 1280, 720, 707, 561, 842, 592, 1200], //  点击确定
      ],
    },
    {
      //  检测_获得奖励弹窗
      desc: [
        1280,
        720,
        [
          [center, 372, 188, 0x38281c],
          [center, 369, 471, 0x8e6a41],
          [center, 766, 492, 0xc6ad94],
          [center, 884, 239, 0xa99078],
          [center, 912, 193, 0x38281c],
          [center, 921, 480, 0x89683e],
          [center, 748, 173, 0xf5ebbd],
          [center, 523, 184, 0xe0cd89],
        ],
      ],
      oper: [
        [left, 1280, 720, 255, 575, 1058, 664, 1200], //  点击空白处
      ],
    },
    {
      //  检测_签到
      desc: [
        1280,
        720,
        [
          [left, 260, 503, 0xaf8758],
          [left, 268, 537, 0x9e6d43],
          [left, 282, 514, 0xc4a382],
          [left, 274, 512, 0xdfd8ce],
          [left, 262, 531, 0xcdbdac],
        ],
      ],
      oper: [
        [left, 1280, 720, 256, 500, 271, 530, 1200], //  点击_签到
      ],
    },
    {
      //  检测_签到盒子
      desc: [
        1280,
        720,
        [
          [center, 639, 160, 0xddc59a],
          [center, 692, 115, 0xcdb382],
          [center, 716, 192, 0xb3915e],
          [center, 660, 292, 0xe7d7c3],
          [center, 640, 374, 0xbb884e],
          [center, 554, 328, 0x905833],
        ],
      ],
      oper: [
        [center, 1280, 720, 612, 240, 664, 308, 1200], //  点击_签到盒子
      ],
    },
    {
      //  检测_签到解读弹窗
      desc: [
        1280,
        720,
        [
          [center, 785, 203, 0xe9dfdf],
          [center, 848, 603, 0xe3d7ca],
          [center, 909, 450, 0xf7e5db],
          [center, 880, 613, 0xaf4c8e],
          [center, 468, 543, 0xded3d2],
          [center, 461, 441, 0xdfd6d6],
          [center, 773, 641, 0xdecece],
        ],
      ],
      oper: [
        [center, 1280, 720, 858, 96, 888, 118, 1200], //  点击关闭
      ],
    },
  ];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    if (
      thisScript.oper({
        id: 518,
        name: '页面是否为庭院',
        operator: [
          {
            desc: thisOperator[0].desc,
          },
          {
            desc: thisOperator[1].desc,
          },
          {
            desc: thisOperator[2].desc,
          },
          {
            desc: thisOperator[3].desc,
          },
        ],
      })
    ) {
      return thisScript.oper({
        id: 518,
        name: '检测_是否有邮件或签到',
        operator: [thisOperator[4], thisOperator[9]],
      });
    }

    if (
      thisScript.oper({
        id: 518,
        name: '检测_领取全部奖励弹窗',
        operator: [
          thisOperator[5],
          thisOperator[6],
          thisOperator[7],
          thisOperator[8],
          thisOperator[9],
          thisOperator[10],
          thisOperator[11],
        ],
      })
    ) {
      return true;
    }

    if (
      thisScript.oper({
        id: 518,
        name: '检测_签到',
        operator: [
          thisOperator[10],
          thisOperator[11],
        ],
      })
    ) {
      return true;
    }

    return false;
  }
}

export default new Func518();
