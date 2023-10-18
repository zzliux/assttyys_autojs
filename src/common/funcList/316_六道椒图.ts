import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func316 implements IFuncOrigin {
   id = 316;
   name = '六道椒图';
   config = [{
      desc: '配置',
      config: [{
         name: 'pushResult',
         desc: '结束时使用ospPush推送结果',
         type: 'switch',
         default: false,
      }, {
         name: 'overTimes',
         desc: '挂机局数，完成后自动停止脚本，0表示一直刷',
         type: 'integer',
         default: '0'
      }],
   }];
   operator: IFuncOperatorOrigin[] = [{//0 事件 唤息亮
      desc: [
         1280, 720,
         [
            [left, 20, 43, 0xf0f6f7],
            [left, 252, 38, 0x583716],
            [left, 46, 656, 0xcdbb90],
            [left, 36, 648, 0xc9b285],
            [left, 201, 673, 0xc2ba90],
            [right, 1126, 652, 0xf5e3b3],
            [right, 1172, 623, 0xe5e1b9],
         ]
      ]
   }, {//1 点固定事件位置
      oper: [
         [center, 1280, 720, 625, 474, 734, 544, 0], // 位置:2位
         [center, 1280, 720, 335, 434, 466, 496, 0], // 位置:1位
         [center, 1280, 720, 880, 468, 1038, 543, 0], // 位置:3位
      ]
   }, {//2 事件 唤息暗
      desc: [
         1280, 720,
         [
            [left, 20, 43, 0xf0f6f7],
            [left, 252, 38, 0x583716],
            [left, 46, 656, 0xcdbb90],
            [left, 36, 648, 0xc9b285],
            [left, 201, 673, 0xc2ba90],
            [right, 1148, 648, 0xebebeb],
            [right, 1150, 614, 0x505050],
         ]
      ]
   }, {//3  鏖战
      desc: [
         1280, 720,
         [
            [left, 73, 532, 0x676a83],
            [left, 121, 577, 0x636882],
            [left, 115, 26, 0xf2eedc],
            [left, 120, 40, 0xf8f3e0],
            [left, 116, 48, 0xf8f3e0],
            [left, 138, 41, 0xf8f3e0],
            [left, 150, 35, 0xf8f3e0],
         ]
      ],
      oper: [
         [center, 1280, 720, 785, 291, 909, 378, 500],// 右怪
         [center, 1280, 720, 1120, 597, 1231, 682, 500],//  挑战
      ]
   }, {//4  buff抉择
      desc: [
         1280, 720,
         [
            [left, 256, 597, 0x3f3f3f],
            [center, 530, 599, 0x494949],
            [center, 807, 596, 0x494949],
            [right, 1131, 601, 0x353535],
            [right, 1085, 227, 0xdbd5c7],
         ]
      ],
      oper: [
         [center, 1280, 720, 1034, 578, 1137, 621, 500],// 万相之赐
      ]
   }, {//5  混沌_宝箱
      desc: [
         1280, 720,
         [
            [right, 1162, 637, 0x53606d],
            [right, 1177, 642, 0xc7b38e],
            [right, 1194, 633, 0xc4b08b],
            [right, 1216, 636, 0xd9c9a6],
            [right, 1217, 615, 0x36404a],
            [right, 1190, 684, 0xb6b69c],
         ]
      ],
      oper: [
         [center, 1280, 720, 1160, 609, 1227, 659, 1000],
      ]
   }, {//6  混沌_怪物
      desc: [
         1280, 720,
         [
            [left, 73, 532, 0x676a83],
            [left, 121, 577, 0x636882],
            [left, 105, 28, 0xf6f1de],
            [left, 119, 43, 0xf8f3e0],
            [left, 147, 28, 0xf8f3e0],
            [left, 154, 51, 0xf8f3e0],
            [left, 154, 38, 0xf7f2df],
         ]
      ],
      oper: [
         [center, 1280, 720, 680, 292, 801, 379, 500],
         [center, 1280, 720, 1120, 597, 1231, 682, 500],//  挑战
      ]
   }, {//7  商店
      desc: [
         1280, 720,
         [
            [center, 558, 628, 0xbdab86],
            [right, 1210, 606, 0x505d66],
            [right, 1199, 306, 0x333848],
            [right, 1217, 288, 0x9e9fb1],
            [right, 1211, 166, 0xe1d7c0],
         ]
      ]
   }, {//8  星之屿
      desc: [
         1280, 720,
         [
            [left, 73, 532, 0x676a83],
            [left, 121, 577, 0x636882],
            [left, 110, 31, 0xf8f3e0],
            [left, 121, 31, 0xf8f3e0],
            [left, 116, 41, 0xf8f3e0],
            [left, 111, 52, 0xf8f3e0],
            [left, 122, 52, 0xf8f3e0],
         ]
      ],
      oper: [
         [center, 1280, 720, 456, 274, 566, 347, 500],
         [center, 1280, 720, 1120, 597, 1231, 682, 500],//  挑战
      ]
   }, {//9  开始_开启
      desc: [
         1280, 720,
         [
            [right, 1145, 591, 0xf4e2ae],
            [right, 1162, 590, 0xf9e5af],
            [right, 1162, 622, 0xfae6b0],
            [right, 1142, 624, 0xf9e6af],
            [right, 1195, 633, 0xfae4ae],
            [right, 1185, 651, 0xf9e2ad],
            [right, 1153, 645, 0x384960],
         ]
      ],
      oper: [
         [center, 1280, 720, 1128, 606, 1217, 664, 1000],
      ]
   }, {//10  开始_确定
      desc: [
         1280, 720,
         [
            [right, 1148, 589, 0xfff5bb],
            [right, 1187, 604, 0xfff0b5],
            [right, 1196, 633, 0xfff3bd],
            [right, 1162, 664, 0xabc1d3],
            [right, 1180, 645, 0x3d4c62],
         ]
      ],
      oper: [
         [center, 1280, 720, 1145, 597, 1228, 662, 1000],
      ]
   }, {//11  开始_开启_60体
      desc: [
         1280, 720,
         [
            [right, 1166, 588, 0xfff4bd],
            [right, 1181, 585, 0xfff5bd],
            [right, 1182, 623, 0xffe9ad],
            [right, 1162, 619, 0xffe5ad],
            [right, 1208, 625, 0xf6efbd],
            [right, 1205, 653, 0xffe3ab],
            [right, 1171, 641, 0x404e62],
         ]
      ],
      oper: [
         [center, 1280, 720, 1142, 595, 1230, 659, 1000],
      ]
   }, {//12  开始_选择柔风
      desc: [
         1280, 720,
         [
            [left, 289, 205, 0x89e192],
            [left, 300, 201, 0xffffff],
            [center, 328, 211, 0x00add7],
            [center, 345, 225, 0x34d8dc],
            [center, 321, 248, 0xa25287],
            [left, 284, 592, 0x5a5a5a],
            [center, 355, 596, 0x484848],
         ]
      ],
      oper: [
         [center, 1280, 720, 268, 574, 374, 617, 1000],
      ]
   }, {//13  确认奖励
      desc: [1280, 720,
         [
            [center, 554, 142, 0xfede96],
            [center, 622, 143, 0xf7e691],
            [center, 745, 181, 0xffeeaa],
            [center, 583, 184, 0xf6e6b4],
            [center, 635, 192, 0xeacd7e],
         ]
      ],
      oper: [
         [right, 1280, 720, 913, 129, 1245, 648, 500],
      ]
   }, {//14  神秘_转换
      desc: [
         1280, 720,
         [
            [center, 913, 678, 0x39607c],
            [right, 1117, 668, 0x62503c],
            [center, 871, 230, 0x2ee1e5],
            [center, 935, 74, 0xc6c4b7],
            [center, 912, 72, 0xd9d5c6],
         ]
      ],
      oper: [
         [center, 1280, 720, 17, 20, 52, 58, 500],
      ]
   }, {//15  神秘_仿造
      desc: [
         1280, 720,
         [
            [right, 1221, 254, 0xd8d2cf],
            [right, 1225, 387, 0x323746],
            [right, 1182, 640, 0x8c7e60],
            [right, 1230, 668, 0x8c7e60],
            [right, 1247, 242, 0xd7cfc3],
            [right, 1246, 383, 0x282e3e],
         ]
      ],
      oper: [
         [center, 1280, 720, 830, 192, 900, 242, 500],
         [center, 1280, 720, 1168, 626, 1245, 688, 500],
         [center, 1280, 720, 677, 406, 838, 456, 500],
         [center, 1280, 720, 17, 20, 52, 58, 500],
      ]
   }, {//16  结束
      desc: [
         1280, 720,
         [
            [right, 1096, 620, 0xdbdbb6],
            [right, 1125, 618, 0xdcdabb],
            [right, 1108, 625, 0xd7d3b6],
            [right, 1141, 638, 0xc6c3a9],
            [right, 1144, 662, 0xaeab99],
            [right, 1106, 662, 0x596469],
            [right, 1119, 650, 0x3c4247],
         ]
      ],
      oper: [
         [center, 1280, 720, 517, 657, 1007, 710, 500],
      ]
   }, {//17  十位数的5
      desc: [
         1280, 720,
         [
            [right, 1211, 657, 0xbbab7f],
            [right, 1225, 633, 0xb8a67d],
            [right, 1199, 31, 0xb5b0a4],
            [right, 1199, 36, 0xb8b2a7],
            [right, 1205, 38, 0x9d988f],
            [right, 1201, 44, 0xb0aba0],
            [right, 1203, 30, 0x8c887e],
         ]
      ],
      oper: [
         [center, 1280, 720, 1191, 621, 1243, 676, 500],
      ]
   }, {//18  十位数的0
      desc: [
         1280, 720,
         [
            [right, 1211, 657, 0xbbab7f],
            [right, 1225, 633, 0xb8a67d],
            [right, 1198, 36, 0xa49e93],
            [right, 1206, 37, 0x948f85],
            [right, 1202, 30, 0x767169],
            [right, 1202, 44, 0x817d74],
         ]
      ],
      oper: [
         [center, 1280, 720, 1191, 621, 1243, 676, 500],
      ]
   }, {//19  boss_挑战
      desc: [
         1280, 720,
         [
            [right, 1137, 594, 0xfff3b9],
            [right, 1163, 601, 0xfff0b5],
            [right, 1151, 666, 0x8ea4b9],
            [right, 1168, 641, 0x3f4b5f],
            [right, 1191, 648, 0xfff2af],
            [right, 1217, 654, 0xffebb2],
         ]
      ],
      oper: [
         [center, 1280, 720, 1120, 586, 1229, 678, 500],
      ]
   }, {//20  boss_跳过
      desc: [
         1280, 720,
         [
            [right, 1143, 17, 0x223c61],
            [right, 1134, 31, 0x244869],
            [right, 1147, 31, 0xd1dced],
            [right, 1165, 31, 0x264882],
            [right, 1171, 30, 0xbccae0],
            [right, 1181, 26, 0xe0e1f0],
            [right, 1194, 29, 0x294174],
            [right, 1211, 31, 0xd0ddee],
         ]
      ],
      oper: [
         [center, 1280, 720, 1130, 19, 1232, 43, 500],
      ]
   }, { // 21 使用极的双倍
      desc: [
         1280, 720,
         [
            [center, 516, 443, 0xdf6851],
            [center, 686, 446, 0xf3b25e],
            [center, 667, 367, 0xf7e51d],
            [center, 879, 288, 0x282d38],
            [center, 434, 306, 0x272b33],
            [center, 152, 169, 0x594a25],
            [center, 120, 237, 0x575235],
            [center, 256, 223, 0x31211a],
         ]
      ],
      oper: [
         [center, 1280, 720, 671, 419, 794, 467, 1000],
      ]
   }, {//22  商店确认购买
      desc: [
         1280, 720,
         [
            [left, 115, 37, 0x66645c],
            [left, 212, 30, 0x66645c],
            [center, 463, 428, 0xdf6851],
            [center, 700, 436, 0xf3b25e],
            [right, 1200, 166, 0x56534f],
            [right, 1202, 310, 0x11141c],
         ]
      ],
      oper: [
         [center, 1280, 720, 678, 409, 837, 453, 500],// 确认购买
         [center, 1280, 720, 1174, 588, 1241, 649, 500],// 退出商店
      ]
   }, {//23  御神经验
      desc: [
         1280, 720,
         [
            [center, 581, 138, 0xfff0b7],
            [center, 610, 134, 0xffeeb3],
            [center, 674, 138, 0xfff2bc],
            [center, 708, 137, 0xfff0bc],
            [center, 694, 649, 0x69759f],
            [center, 589, 644, 0xbfcad6],
         ]
      ],
      oper: [
         [right, 1280, 720, 872, 146, 1197, 539, 500],
      ]
   }, {//24  低级buff
      desc: [
         1280, 720,
         [
            [left, 171, 219, 0x4c8dda],
            [left, 262, 216, 0x5aa1f6],
            [center, 445, 216, 0x4685cc],
            [center, 535, 216, 0x589ef1],
            [center, 719, 218, 0x4a89d4],
            [center, 809, 215, 0x5aa2f6],
         ]
      ]
   }];
   operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {

      if (thisScript.oper({
         name: '六道椒图_选事件',
         operator: [{ desc: thisOperator[0].desc }, { desc: thisOperator[2].desc }]
      })) {
         thisScript.regionClick([thisOperator[1].oper[thisScript.global.d6Loop]]);
         if (++thisScript.global.d6Loop > 2) {
            thisScript.global.d6Loop = 0;
         }
         return true;
      }

      if (thisScript.oper({
         id: 316,
         name: '六道椒图_选buff',
         operator: [{ desc: thisOperator[4].desc }]
      })) {
         if (thisScript.global.d6RouFeng < 5) {//  柔风达标前选buff
            let point = thisScript.findMultiColor("六道椒图_升级buff");
            if (point) {//  有升级按钮_选择升级
               let oper = [[
                  point.x - 40,
                  point.y + 410,
                  point.x + 70,
                  point.y + 440,
                  500
               ]];
               thisScript.regionClick(oper);
               thisScript.global.d6RouFeng++;
               log("当前柔风数量:" + thisScript.global.d6RouFeng);
               return true;
            }
            else if (thisScript.oper({
               id: 316,
               name: '六道椒图_低级buff',
               operator: [thisOperator[24]]
            })) {//  有低级buff_选择跳过
               thisScript.regionClick([thisOperator[4].oper[0]]);
               return true;
            } else if (thisScript.oper({//无升级按钮_选择刷新
               name: '六道椒图_刷新buff',
               operator: [thisOperator[17], thisOperator[18]]
            })) {
               return true;
            } else {//无升级按钮无刷新_选择跳过
               thisScript.regionClick([thisOperator[4].oper[0]]);
               return true;
            }
         } else {
            thisScript.regionClick([thisOperator[4].oper[0]]);
         }
         log("当前柔风数量:" + thisScript.global.d6RouFeng);
         return true;
      }

      if (thisScript.oper({
         id: 316,
         name: '六道椒图_商店确认购买',
         operator: [{ desc: thisOperator[22].desc }]
      })) {
         thisScript.regionClick([thisOperator[22].oper[0]]);
         thisScript.regionClick([thisOperator[22].oper[1]]);
         thisScript.global.d6RouFeng++;
         log("当前柔风数量:" + thisScript.global.d6RouFeng);
         return true;
      }
      if (thisScript.oper({
         id: 316,
         name: '六道椒图_商店购买buff',
         operator: [{ desc: thisOperator[7].desc }]
      })) {
         if (thisScript.global.d6RouFeng < 5) {//  柔风达标前购买buff
            let point = thisScript.findMultiColor("六道椒图_购买buff");
            if (point) {//  有购买按钮_选择购买
               let oper = [[
                  point.x - 10,
                  point.y + 50,
                  point.x + 10,
                  point.y + 140,
                  500
               ]];
               thisScript.regionClick(oper);
               thisScript.regionClick([thisOperator[22].oper[1]]);
            } else {
               thisScript.regionClick([thisOperator[22].oper[1]]);
               log("当前柔风数量:" + thisScript.global.d6RouFeng);
               return true;
            }
         } else {
            thisScript.regionClick([thisOperator[22].oper[1]]);
            log("当前柔风数量:" + thisScript.global.d6RouFeng);
            return true;
         }


      }

      if (thisScript.oper({
         id: 316,
         name: '六道椒图_神秘仿造',
         operator: [
            thisOperator[15]
         ]
      })) {
         thisScript.global.d6RouFeng++;
         log("当前柔风数量:" + thisScript.global.d6RouFeng);
         return true;
      }

      if (thisScript.oper({
         id: 316,
         name: '六道椒图_执行个别事件',
         operator: [
            thisOperator[3], thisOperator[5], thisOperator[6], thisOperator[8],
            thisOperator[9], thisOperator[10], thisOperator[12], thisOperator[13],
            thisOperator[14], thisOperator[19], thisOperator[20], thisOperator[21],
            thisOperator[23],
         ]
      })) {
         return true;
      }
      if (thisScript.oper({
         id: 316,
         name: '六道椒图_开始_重置参数',
         operator: [
            thisOperator[11]
         ]
      })) {
         thisScript.global.d6Loop = 0;
         thisScript.global.d6RouFeng = 1;
         thisScript.global.d6dCurrentBegin = new Date().getTime();
         if (!thisScript.global.d6dBegin) {
            thisScript.global.d6dBegin = new Date().getTime();
         }
         if (!thisScript.global.times) {
            thisScript.global.times = 0;
         }
         thisScript.global.times++
         return true;
      }

      if (thisScript.oper({
         id: 316,
         name: '六道椒图_结束',
         operator: [{
            desc: thisOperator[16].desc
         }]
      })) {
         const thisconf = thisScript.scheme.config['316'];
         thisconf.overTimes = Math.floor(Number(thisconf.overTimes) || 0);
         const now = new Date().getTime();
         const currentCost = Math.floor((now - thisScript.global.d6dCurrentBegin) / 1000); // 秒
         const cost = ((now - thisScript.global.d6dBegin) / 1000 / 60).toFixed(2); // 分
         const costAvg = Math.floor((now - thisScript.global.d6dBegin) / 1000 / (thisScript.global.times || 0)) // 秒
         // 中途进入的不计次
         const bufLog = `本局柔风buff：${thisScript.global.d6RouFeng}`;
         let toLog = `${bufLog}。通关次数: ${thisScript.global.times || 0}次, 本次通关时间: ${currentCost}秒, 平均通关时间: ${costAvg}秒, 总通关时间: ${cost}分`;
         if (thisconf.overTimes && thisScript.global.times >= thisconf.overTimes) {
            toLog = `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。` + toLog;
         }
         thisScript.myToast(toLog);

         if (thisconf.pushResult) {
            thisScript.doPush(thisScript, {
               text: toLog,
               before() {
                  thisScript.myToast('正在上传数据');
               }
            });
            sleep(2000);
         }

         if (thisconf.overTimes && thisScript.global.times >= thisconf.overTimes) {
            toLog = `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。` + toLog;
            thisScript.stop();
         }

         thisScript.regionClick(thisOperator[16].oper);
         return true;
      }

      return false;
   }
}