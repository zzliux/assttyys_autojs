import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func312 implements IFuncOrigin {
  id = 312;
  name = '百鬼奕';
  config = [{
    desc: '',
    config: [{
      name: 'switch_threeten',
      desc: '获得三胜并获得十次奖励就停止',
      type: 'switch',
      default: true,
    }]
  }]
  operator: IFuncOperatorOrigin[] = [{
    oper: [
      [center, 1280, 720, 1073, 533, 1275, 716, -1],
    ]
  }];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    if (thisScript.getOcrDetector()) {
      let result = thisScript.findText('.+', 0, thisOperator[0].oper[0], '包含');
      if (result.length === 0) {
        console.log(`未识别到任何昵称`);
        return false;
      } else {
        for (let i in result) {
          console.log(`昵称历遍:${result[i].label}`)
        }
      }
    }
  }
}