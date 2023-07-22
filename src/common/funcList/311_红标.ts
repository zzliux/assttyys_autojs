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

export class Func311 implements IFuncOrigin {
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
          default: '自定义坐标',
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
  operator: IFuncOperatorOrigin[] = [
    {
      // 开始战斗后的场景
      desc: '战斗界面',
    },
  ];
  operatorFunc(
    thisScript: Script,
    thisOperator: IFuncOperator[]
  ): boolean {
    let thisconf = thisScript.scheme.config['311'];

    // 已点击 需要准备方案重置
    if (thisScript.global.redFlag) {
      return false;
    }

    if (
      thisScript.oper({
        id: 311,
        name: '红标-战斗界面检测',
        operator: [
          {
            desc: '战斗界面',
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
        thisScript.regionClick([toClick]);
        return true;
      }
    }

    return false;
  }
}
