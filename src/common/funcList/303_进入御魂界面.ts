import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func303 implements IFuncOrigin {
 id = 303;
 name = '进入御魂界面';
 desc = '从式神录进入御魂内的界面';
 operator: IFuncOperatorOrigin[] = [{
  //右侧详细
  desc: [1280, 720, [
   [left, 114, 15, 0xaf8c56],
   [left, 183, 35, 0xaf8c56],
   [left, 63, 657, 0xfbf2e0],
   [center, 658, 629, 0xdebaba]]
  ],
  oper: [
   [center, 1280, 720, 1192, 320, 1246, 397, 1000]
  ]
 }, {
  //御魂灯笼
  desc: [1280, 720, [
   [left, 114, 15, 0xaf8c56],
   [left, 183, 35, 0xaf8c56],
   [right, 1230, 249, 0xded1bf],
   [right, 1226, 281, 0xe7dfce]]
  ],
  oper: [
   [center, 1280, 720, 1182, 235, 1231, 293, 1000]
  ]
 }, {
  //更换
  desc: [1280, 720, [
   [left, 114, 15, 0xaf8c56],
   [left, 183, 35, 0xaf8c56],
   [right, 1204, 268, 0xFFF9F2],
   [right, 907, 187, 0xC7723D]]
  ],
  oper: [
   [center, 1280, 720, 867, 179, 933, 255, 1000]
  ]
 }]
}
