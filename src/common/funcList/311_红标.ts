import {
  IFuncOrigin,
  IFuncOperatorOrigin,
  IFuncOperator,
} from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
// const left = 0;
const center = 1;
// const right = 2;

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
          data: ['PVE顶部BOSS血条固定红标', '自定义坐标'],
          default: 'PVE顶部BOSS血条固定红标',
        },
        {
          name: 'redPosition',
          desc: '红标坐标，仅红标类型为自定义坐标时生效，(格式x(横轴),y(纵轴)左上角为0,0)，实际点击时xy坐标会在±20内随机点击，如625,220',
          type: 'text',
          default: '625,220',
        },
      ],
    },
  ];
  operator: IFuncOperatorOrigin[] = [
    {
      //  开始战斗后的场景
      desc: '战斗界面',
    },
    {
      //  1 检测_PVE顶部BOSS血条
      desc: [
        1280,
        720,
        [
          [center, 430, 3, 0x42291f],
          [center, 380, 5, 0x41271f],
          [center, 337, 4, 0x1e110c],
        ],
      ],
      oper: [
        [center, 1280, 720, 387, 15, 418, 54, 1200], //  点击 PVE顶部BOSS血条红标
      ],
    },
    {
      //  检测_PVE顶部BOSS血条已添加红标
      desc: [
        1280,
        720,
        [
          [center, 395, 47, 0x755842],
          [center, 410, 59, 0x755743],
          [center, 430, 3, 0x42291f],
          [center, 380, 5, 0x41271f],
          [center, 337, 4, 0x1e110c],
        ],
      ],
    },
  ];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    const thisconf = thisScript.scheme.config['311'];

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
        const posPam = String(thisconf.redPosition).split(',');
        if (posPam.length !== 2) {
          thisScript.myToast('自定义坐标格式定义错误，请检查');
          return true;
        }
        const inX = parseInt(posPam[0]);
        const inY = parseInt(posPam[1]);
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
      } else if (thisconf.redType === 'PVE顶部BOSS血条固定红标') {
        if (
          thisScript.oper({
            id: 311,
            name: '红标-PVE顶部BOSS血条已被标记',
            operator: [thisOperator[2]],
          })
        ) {
          // 点一次 需要准备方案重置才能再次点击
          thisScript.global.redFlag = true;
          return true;
        }

        if (
          thisScript.oper({
            id: 311,
            name: '红标-检测_PVE顶部BOSS血条并点击红标',
            operator: [thisOperator[1]],
          })
        ) {
          // 点一次 需要准备方案重置才能再次点击
          thisScript.global.redFlag = true;
          return true;
        }
      }
    }

    return false;
  }
}
