import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func313 implements IFuncOrigin {
  id = 313;
  name = 'text';
  operator: IFuncOperatorOrigin[] = [{//  红
    desc: [1280, 720,
      [
        [center, 332, 74, 0xf66d7c],
        [center, 362, 74, 0xfb5f6b],
        [center, 366, 79, 0xffcba4],
        [center, 329, 79, 0xfdc5aa]
      ]
    ],
    oper: [
      [center, 1280, 720, 314, 32, 76, 68, 75]
    ]
  }, {
    desc: [1280, 720,
      [
        [right, 1026, 138, 0xd7e2e3],
        [right, 1055, 141, 0xe4eded],
        [right, 1084, 139, 0xe4eded],
        [right, 1112, 140, 0xd9e4e5]
      ]
    ]
  }];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    if (thisScript.oper({
      name: '界面检测',
      operator: [{
        desc: thisOperator[1].desc,
      }]
    })) {
      let leftx = thisOperator[0].oper[0][0];
      let lefty = thisOperator[0].oper[0][1];
      let upNextx = thisOperator[0].oper[0][2];
      let upThis = thisOperator[0].oper[0][3];
      let upNexty = thisOperator[0].oper[0][4];
      let arr = new Array();
      for (let y = 0; y < 9; y++) {
      arr[y] = new Array();
      lefty = lefty + y * upNexty;
      for (let x = 0; x < 9; x++) {
        leftx = leftx + x * upNextx;
        let region = [leftx, lefty, leftx + upThis, lefty + upThis];
        let arrFind = [`消消乐_红`, `消消乐_黑`, `消消乐_蓝`, `消消乐_黄`]
        for (let i = 0; i < 4; i++) {
          arr[y][x] = 4;
          if (thisScript.findMultiColor(arrFind[i], region)) {
            arr[y][x] = i;
            break;
          }
        }
        leftx = thisOperator[0].oper[0][0];
      }
      lefty = thisOperator[0].oper[0][1];
      }
      for (let i=0;i<arr.length;i++ ){
        log(arr[i]);
      }
      thisScript.stop();
      return false;
    }
  }
};