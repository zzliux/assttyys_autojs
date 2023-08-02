import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func309 implements IFuncOrigin {
  id = 309;
  name = '强化御魂';
  desc = '在批量强化界面强化御魂,逻辑在群公告的手册里';
  operator: IFuncOperatorOrigin[] = [{//0  长按选取
    desc: [
      1280, 720,
      [
        [center, 892, 620, 0xc3c3c3],
        [right, 1014, 650, 0xb8b8b8],
        [center, 720, 638, 0x392b1e],
        [left, 120, 230, 0xe5642b],
        [left, 225, 236, 0xe6662c],
      ]
    ],
    oper: [
      [center, 1280, 720, 127, 191, 216, 285, 500]//第一排第一位御魂
    ]
  }, {//1   全部强化
    desc: [
      1280, 720,
      [
        [center, 884, 621, 0xf9ba65],
        [center, 891, 651, 0xf4b261],
        [right, 1022, 652, 0xe7a656],
        [right, 1022, 621, 0xf9b861],
        [center, 958, 632, 0xf3b25d],
      ]
    ],
    oper: [
      [center, 1280, 720, 880, 620, 1034, 655, 500]
    ]
  }, {//2  +3计算强化
    desc: [
      1280, 720,
      [
        [center, 773, 161, 0xd8a85a],
        [center, 731, 161, 0xd0a459],
        [center, 731, 195, 0xc89d55],
        [center, 773, 195, 0xc29c56],
        [right, 1183, 628, 0xf6e6af],
        [right, 1221, 680, 0xecca95],
      ]
    ],
    oper: [
      [center, 1280, 720, 1176, 639, 1244, 690, 500],//计算
      [center, 1280, 720, 1176, 639, 1244, 690, 2500],//强化
    ]
  }, {//3  弃置
    desc: [
      1280, 720,
      [
        [right, 1189, 398, 0xf75a4e],
        [right, 1186, 412, 0xfb594f],
        [right, 1194, 410, 0xff5e50],
        [right, 1209, 410, 0xfe5d50],
        [right, 1218, 400, 0xff5e50],
        [right, 1218, 418, 0xff5c50],
      ]
    ],
    oper: [
      [center, 1280, 720, 1182, 388, 1229, 427, 1000],//弃置
    ]
  }, {//4  继续强化
    desc: [
      1280, 720,
      [
        [right, 1192, 139, 0xc7b79e],
        [right, 1220, 158, 0xc7b79e],
        [right, 1188, 606, 0xe3ba82],
        [right, 1240, 655, 0xe2af74],
        [right, 1212, 626, 0x271913],
        [right, 1215, 608, 0xecc38b],
      ]
    ],
    oper: [
      [center, 1280, 720, 1176, 639, 1244, 690, 1000]
    ]
  }, {//5  +6计算强化
    desc: [
      1280, 720,
      [
        [center, 590, 62, 0xdec183],
        [center, 680, 65, 0xe9af66],
        [center, 474, 134, 0xd5a659],
        [center, 515, 134, 0xd4a55a],
        [center, 516, 168, 0xc19c55],
        [center, 474, 168, 0xc49a53],
      ]
    ],
    oper: [
      [center, 1280, 720, 876, 615, 935, 664, 500],//计算
      [center, 1280, 720, 876, 615, 935, 664, 2000],//强化
    ]
  }, {//6  +15计算强化
    desc: [
      1280, 720,
      [
        [center, 479, 137, 0x110d09],
        [center, 507, 166, 0x130d09],
        [center, 520, 134, 0xd6a559],
        [center, 562, 134, 0xd8a95b],
        [center, 562, 170, 0xdfb467],
        [center, 520, 168, 0xc49b53],
      ]
    ],
    oper: [
      [center, 1280, 720, 632, 138, 663, 165, 500],//+15
      [center, 1280, 720, 876, 615, 935, 664, 500],//计算
      [center, 1280, 720, 876, 615, 935, 664, 2500],//强化
    ]
  }, {//7  第一排第一位为+15御魂(必须在最前)
    desc: [
      1280, 720,
      [
        [center, 419, 120, 0xe8e8ea],
        [center, 419, 128, 0xe6e6e8],
        [center, 429, 118, 0xc8c4c5],
        [center, 425, 122, 0xe8e8ea],
        [center, 431, 127, 0xe5e4e6],
        [center, 427, 131, 0xd3d1d2],
        [center, 423, 91, 0x4156d7],
        [center, 439, 91, 0x4c5ad7],
      ]
    ],
    oper: [
      [center, 1280, 720, 28, 18, 71, 56, 500]//返回
    ]
  }
  ]
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    if (thisScript.oper({
      name: '强化御魂',
      operator: [{ desc: thisOperator[0].desc }]
    })) {
      thisScript.regionClick([[...thisOperator[0].oper[0], 1000]]);
      return true;
    }
    return thisScript.oper({
      name: '强化御魂',
      operator: [thisOperator[7], thisOperator[1],thisOperator[2], thisOperator[3],
      thisOperator[4], thisOperator[5], thisOperator[6]]
    })
  }
}
