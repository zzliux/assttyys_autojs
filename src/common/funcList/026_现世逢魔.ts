// TODO
// 自现世逢魔点一下能全开后，该功能关键逻辑已不适用
// 需修改为记录当前是第几次任务（0~4)，然后点击对应的任务图标

import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func026 implements IFuncOrigin {
	id = 26;
	name = '现世逢魔';
	desc = '逢魔界面点击右下角的图标后点击右侧相关事件图标';
	operator: IFuncOperatorOrigin[] = [{ // 0 现世逢魔首页
		desc: [1280, 720,
			[
				[left, 19, 700, 0x3c3841],
				[center, 754, 39, 0x583716],
				[center, 1181, 650, 0xffffff],
				[left, 54, 676, 0x433b42],
				[left, 45, 48, 0xf5e5a5],
			]
		],
		oper: [
			[right, 1280, 720, 1157, 616, 1202, 666, 5000], // 发现
		]
	}, { // 1次逢魔
		desc: [1280, 720,
			[
				[right, 1240, 505, 0x8ebaf3],
				[right, 1220, 430, 0x91bbf3],
				[right, 1246, 371, 0x8cb9f3],
				[right, 1226, 310, 0x8fbdf1],]
		],
		oper: [
			[right, 1280, 720, 1233, 496, 1252, 514, 3000],
			[right, 1280, 720, 1215, 425, 1228, 440, 3000],
			[right, 1280, 720, 1243, 360, 1256, 378, 3000],
			[right, 1280, 720, 1219, 298, 1235, 315, 3000],
		]
	}, { // 2 最后一次奖励
		desc: [1280, 720,
			[
				[right, 1243, 264, 0x5c4a6f],
				[right, 1224, 262, 0x5e4c6c]]
		],
		oper: [
			[right, 1280, 720, 1223, 208, 1246, 251, 1500]
		]
	}, { // 3 花钱的宝箱都不领
		desc: [1280, 720,
			[
				[left, 45, 48, 0x655e44],
				[center, 436, 338, 0xcbb59e],
				[center, 803, 342, 0xcbb59e],
				[center, 578, 444, 0xf4b25f],
				[center, 537, 213, 0x694737],
				[center, 658, 507, 0x694837]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}, { // 4 神秘任务_不做
		desc: [1280, 720,
			[
				[left, 45, 48, 0x4a4532],
				[center, 650, 140, 0xcaa85d],
				[center, 846, 132, 0xe8d4cf],
				[center, 564, 339, 0x86201f],
				[center, 566, 234, 0x852221]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}, { // 5 鬼王_挑战
		desc: [
			1280, 720,
			[
				[center, 114, 54, 0xc3a765],
				[center, 1139, 73, 0xeecccc],
				[center, 1117, 565, 0xead9ba],
				[center, 631, 652, 0x1f1c19],
				[center, 122, 161, 0xd4cac3],
				[center, 1121, 611, 0xf3d5a6],
				[right, 981, 628, 0xefcd9a],
				[center, 869, 630, 0xedcf99],
				[center, 780, 624, 0xc39656],
			]
		],
		oper: [
			[center, 1280, 720, 1075, 550, 1150, 631, 1000]
		]
	},
	{	//	6 检测_逢魔界面 逢魔·极
		desc: [
			1280, 720,
			[
				[right, 974, 428, 0xd05b45],
				[center, 347, 471, 0xdc583d],
				[center, 810, 656, 0x5a5650],
				[center, 921, 677, 0x521c18],
				[right, 1024, 656, 0x331215],
				[left, 42, 48, 0x50545d],
			]
		],
		oper: [
			[center, 1280, 720, 478, 554, 828, 620, 1200]	//	点击 空白处
		]
	}, { // 7 现世逢魔_四次位置
		oper: [
			[center, 1280, 720, 1227, 499, 1264, 523, 1000],
			[center, 1280, 720, 1210, 427, 1235, 448, 1000],
			[center, 1280, 720, 1240, 363, 1259, 384, 1000],
			[center, 1280, 720, 1217, 304, 1241, 325, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '现世逢魔_界面判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			if (thisScript.global.xianShiFengMo < 4) {
				if (thisScript.global.xianShiFengMo === 0) {
					thisScript.regionClick([thisOperator[0].oper[0]]);
				}
				thisScript.regionClick([thisOperator[7].oper[thisScript.global.xianShiFengMo]]);
				thisScript.global.xianShiFengMo++;
				return true;
			}
			if (!thisScript.oper({
				name: '现世逢魔_最后一次奖励',
				operator: [{
					desc: thisOperator[2].desc,
				}]
			})) {
				thisScript.regionClick(thisOperator[2].oper);
				sleep(5000);
				return true;
			}
			sleep(1500);
			return false;
		}
		if (thisScript.oper({
			name: '宝箱_不领|神秘任务_不做|鬼王_挑战',
			operator: [thisOperator[3], thisOperator[4], thisOperator[5], thisOperator[6]]
		})) {
			return true;
		}
		return false;
	}
}