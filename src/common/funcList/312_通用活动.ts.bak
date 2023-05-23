import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func312 implements IFuncOrigin {
  id = 312;
  name = '通用活动';
  desc: '截取右下角识别是否有“挑战”“进攻”字样（需要ocr）'
  operator: IFuncOperatorOrigin[] = [{
    oper: [
      [center, 1280, 720, 1073, 533, 1275, 716, -1],//右下角范围
    ]
  }];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    if (thisScript.findMultiColor("活动说明的感叹号") && thisScript.getOcrDetector()) {
      let result = thisScript.findText('.+', 0, thisOperator[0].oper[0], '包含');
      if (result.length === 0) {
        console.log(`未识别到任何字样`);
        return false;
      } else {
        for (let i in result) {
          console.log(`昵称历遍:${result[i].label}`)
        }
        let toClickRegion =  null;
        let fightForOne = thisScript.findTextByOcrResult("挑战", result, '包含')
        let fightForTwo = thisScript.findTextByOcrResult("战斗", result, '包含')
        if (fightForOne.length) {
          toClickRegion = [
            fightForOne[0].points[0].x,
            fightForOne[0].points[0].y,
            fightForOne[0].points[0].x,
            fightForOne[0].points[0].y + 65,
            1000,
          ]
        }else if(fightForTwo.length){
          toClickRegion = [
            fightForTwo[0].points[0].x,
            fightForTwo[0].points[0].y,
            fightForTwo[0].points[0].x,
            fightForTwo[0].points[0].y + 65,
            1000,
          ]
        }
        if (toClickRegion && thisScript.helperBridge.regionClick([toClickRegion], thisScript.scheme.commonConfig.afterClickDelayRandom)){
          return true;
        }
      }
    }
  }
}