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

export class Func1001 implements IFuncOrigin {
  id = 1001;
  name = '宴会_设置轮换式神';
  config = [
    {
      desc: '',
      config: [
        {
          name: 'change_shikigami_index',
          desc: '宴会更换狗粮式神 1白2蓝3红',
          type: 'list',
          data: ['1', '2', '3'],
          default: '1',
          value: '1',
        },
      ],
    },
  ];
  operator: IFuncOperatorOrigin[] = [
    {
      //	0 检测为宴会式神自动轮换弹窗
      desc: [
        1280,
        720,
        [
          [left, 221, 90, 0x31241c],
          [right, 1055, 102, 0x31211c],
          [right, 1053, 426, 0x31251c],
          [left, 218, 430, 0x32251c],
          [center, 584, 418, 0x453328],
          [center, 690, 431, 0x453529],
          [center, 762, 70, 0x593716],
          [left, 238, 692, 0x4d3120],
          [right, 1102, 436, 0xcfad53],
        ],
      ],
      oper: [
        [right, 1280, 720, 1072, 418, 1122, 461, 1200], //	点击 确定
        [center, 1280, 720, 629, 541, 700, 604, 500], //	点击 第四个坑位
        [center, 1280, 720, 765, 531, 820, 596, 500], //	点击 第五个坑位
        [center, 1280, 720, 909, 531, 962, 594, 500], //	点击 第六个坑位
        [right, 1280, 720, 1074, 60, 1107, 92, 1200], //	点击 关闭按钮
      ],
    },
  ];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    const thisconf = thisScript.scheme.config['1001'];

    if (
      thisScript.oper({
        name: '检测为宴会式神自动轮换弹窗',
        operator: [
          {
            desc: thisOperator[0].desc,
          },
        ],
      })
    ) {
      const change_shikigami_index = thisconf
        ? Number.parseInt(thisconf.change_shikigami_index as string, 10)
        : 1;

      if (thisScript.global.banquet_change_flag) {
        return thisScript.oper({
          name: '点击 关闭宴会式神轮换弹窗',
          operator: [
            {
              oper: [thisOperator[0].oper[4]],
            },
          ],
        });
      } else {
        for (let i = 0; i < 49; i++) {
          console.log(`${i}`);
          thisScript.oper({
            name: '检测为宴会式神自动轮换弹窗 ',
            operator: [
              {
                oper: [thisOperator[0].oper[change_shikigami_index]],
              },
            ],
          });
        }

        thisScript.global.banquet_change_flag = true;
        return thisScript.oper({
          name: '点击 宴会式神自动轮换弹窗确定',
          operator: [
            {
              oper: [thisOperator[0].oper[0]],
            },
          ],
        });
      }
    }
  }
}
