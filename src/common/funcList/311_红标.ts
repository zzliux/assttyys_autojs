import {
  InterfaceFuncOrigin,
  InterfaceFuncOperatorOrigin,
  InterfaceFuncOperator,
} from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func311 implements InterfaceFuncOrigin {
  id = 311;
  name = '红标';
  desc = '战斗界面标记敌方式神';
  config = [
    {
      desc: '红标',
      config: [
        {
          name: 'redType',
          desc: '红标类型',
          type: 'list',
          data: ['自定义坐标'],
          default: '自定义文本',
        },
        {
          name: 'redPosition',
          desc:
            '红标坐标，仅红标类型为自定义坐标时生效，(格式x(横轴),y(纵轴)左上角为0,0)，实际点击时xy坐标会在±20内随机点击，如625,220',
          type: 'text',
          default: '625,220',
        },
      ],
    },
  ];
  operator: InterfaceFuncOperatorOrigin[] = [
    {
      // 开始战斗后的场景
      desc: [
        1280,
        720,
        [
          [left, 34, 23, 0xdbb48b],
          [left, 106, 24, 0xcfa375],
          [right, 1270, 132, 0x48371f],
          [right, 1270, 700, 0x241919],
          [right, 1268, 80, 0x946430],
          [right, 1266, 545, 0x573f26],
        ],
      ],
    },
  ];
  operatorFunc(
    thisScript: Script,
    thisOperator: InterfaceFuncOperator[]
  ): boolean {
    let thisconf = thisScript.scheme.config['311'];

    // 已点击 需要准备方案重置
    if (thisScript.global.redFlag) {
      return false;
    }

    if (
      thisScript.oper({
        id: 311,
        name: '战斗界面检测',
        operator: [
          {
            desc: thisOperator[0].desc,
          },
        ],
      })
    ) {
      // 开启红标
      let toClick = null;
      if (thisconf.redType === '自定义坐标') {
        let posPam = String(thisconf.redPosition).split(',');
        if (posPam.length !== 2) {
          thisScript.myToast('自定义坐标格式定义错误，请检查');
          return true;
        }
        let inX = parseInt(posPam[0]);
        let inY = parseInt(posPam[1]);
        if (Number.isNaN(inX) || Number.isNaN(inY)) {
          thisScript.myToast('自定义坐标格式定义错误，请检查');
          return true;
        }
        toClick = [
          Math.max(inX - 20, 0),
          Math.max(inY - 20, 0),
          inX + 20,
          inY + 20,
          1000,
        ];
        sleep(1000);
        console.log('[红标]--点击坐标为', toClick);

        // 点一次 需要准备方案重置才能再次点击
        thisScript.global.redFlag = true;
        thisScript.helperBridge.regionClick(
          [toClick],
          thisScript.scheme.commonConfig.afterClickDelayRandom
        );
        return true;
      }
    }

    return false;
  }
}
