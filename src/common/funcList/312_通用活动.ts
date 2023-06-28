import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator, IFuncConfigOrigin } from '@/interface/IFunc';
import { Script } from '@/system/script';
import { routeLocationKey } from 'vue-router';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func312 implements IFuncOrigin {
  id = 312;
  name = '通用活动';
  desc: '识别到“左上角感叹号”或“右上角体力”或“右下角锁定阵容”图标后，再识别右下角是否有“战”字样（需要ocr），详细看手册';
  config = [{
    desc: '',
    config: [{
      name: 'xySwitch',
      desc: '不识别“战”字直接点固定坐标',
      type: 'switch',
      default: false,
      value: null,
    }, {
      name: 'xy',
      desc: '固定坐标，格式为：左上角x,左上角y,右下角x,右下角y，例：1134,590,1225,645',
      type: 'text',
      default: '1134,590,1225,645',
      value: null,
    }, {
      name: 'exit',
      desc: '达到时间后退出',
      type: 'switch',
      default: false,
      value: null,
    }, {
      name: 'time',
      desc: '目标时间（输入数字，逗号分隔）',
      type: 'text',
      default: '1,20',
      value: null,
    }]
  }]
  operator: IFuncOperatorOrigin[] = [{
    desc: [//当前成绩
      1280, 720,
      [
        [left, 73, 98, 0xdabe87],
        [left, 95, 106, 0xe9d196],
        [left, 117, 104, 0xdec38b],
        [left, 144, 97, 0xe5cc92],
        [left, 46, 28, 0xd8b38b],
        [left, 178, 24, 0xd2b189],
      ]
    ],
    oper: [
      [center, 1280, 720, 750, 420, 1279, 719, -1],//右下角范围
      [center, 1280, 720, 1166, 48, 1233, 81, -1],//时间范围
      [left, 1280, 720, 22, 19, 52, 47, 500], // 左上角返回
      [center, 1280, 720, 683, 401, 795, 442, 500], // 确认
    ]
  }];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    let thisConf = thisScript.scheme.config['312'];
    if ((thisScript.findMultiColor("活动说明的感叹号") || thisScript.findMultiColor("体力图标") ||
      thisScript.findMultiColor("右下角锁定阵容"))) {
      if (!thisConf.xySwitch && thisScript.getOcrDetector()) {
        let result = thisScript.findText('.+', 0, thisOperator[0].oper[0], '包含');
        if (result.length === 0) {
          console.log(`未识别到任何字样`);
          return false;
        } else {
          for (let i in result) {
            console.log(`昵称历遍:${result[i].label}`)
          }
          let toClickRegion = null;
          let fightForOne = thisScript.findTextByOcrResult("战", result, '包含')
          if (fightForOne.length) {
            toClickRegion = [
              fightForOne[0].points[0].x,
              fightForOne[0].points[0].y,
              fightForOne[0].points[0].x,
              fightForOne[0].points[0].y + 65,
              1000,
            ]
          }
          if (toClickRegion && thisScript.helperBridge.regionClick([toClickRegion], thisScript.scheme.commonConfig.afterClickDelayRandom)) {
            sleep(1000);
            return true;
          }
        }
      } else if (thisConf.xySwitch) {
        let xy = String(thisConf.xy).split(',');
        if (xy.length !== 4) {
          thisScript.myToast('1自定义坐标格式定义错误，请检查');
          return true;
        }
        let inX1 = parseInt(xy[0]);
        let inY1 = parseInt(xy[1]);
        let inX2 = parseInt(xy[2]);
        let inY2 = parseInt(xy[3]);
        if (Number.isNaN(inX1) || Number.isNaN(inY1) || Number.isNaN(inX2) || Number.isNaN(inY2)) {
          thisScript.myToast('自定义坐标格式定义错误，请检查');
          return true;
        };
        let oper = [
          [inX1, inY1, inX2, inY2, 1000]
        ];
        thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
      }

    }

    if (thisConf.exit && thisScript.oper({
      name: '当前成绩',
      operator: [{ desc: thisOperator[0].desc }]
    }) && thisScript.getOcrDetector()) {
      let time = String(thisConf.time).split(',');
      let result = thisScript.findText('.+', 0, thisOperator[0].oper[1], '包含');
      if (result.length === 0) {
        console.log(`未识别到任何字样`);
        return false;
      } else {
        let realTime = String(result[0].label).split(':');
        if (Number.isNaN(realTime[0]) && Number.isNaN(realTime[1])) {
          console.log("非数字，等待5秒继续检测");
          sleep(5000);
        } else if (Number(realTime[0]) == Number(time[0]) && Number(realTime[1]) <= Number(time[1]) || Number(realTime[0]) < Number(time[0])) {
          return thisScript.oper({
            id: 312,
            name: '退出',
            operator: [{
              oper: [thisOperator[0].oper[2], thisOperator[0].oper[3]]
            }]
          }, 0)
        } else {
          sleep(5000);
        }
      }
    }

    return false;
  }
}