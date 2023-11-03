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
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[left, 19, 700, 0x3c3841],
				[left, 42, 46, 0xc3cbdf],
				[center, 754, 39, 0x583716],
				[center, 1181, 650, 0xffffff],
				[left, 43, 680, 0xc7957c],
				[left, 54, 676, 0x433b42]
			]
		],
		oper: [
			[right, 1280, 720, 1157, 616, 1202, 666, 5000], // 发现
		]
	}, {
		desc: [1280, 720,
			// 4次逢魔
			[[right, 1240, 505, 0x8ebaf3],
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
	}, {
		desc: [1280, 720,
			// 最后一次奖励
			[[right, 1243, 264, 0x5c4a6f],
				[right, 1224, 262, 0x5e4c6c]]
		],
		oper: [
			[right, 1280, 720, 1223, 208, 1246, 251, 1500]
		]
	}, { // 花钱的宝箱都不领
		desc: [1280, 720,
			[[left, 43, 51, 0x4f525c],
				[center, 436, 338, 0xcbb59e],
				[center, 803, 342, 0xcbb59e],
				[center, 578, 444, 0xf4b25f],
				[center, 537, 213, 0x694737],
				[center, 658, 507, 0x694837]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}, {
		// 神秘任务_不做
		desc: [1280, 720,
			[[left, 37, 50, 0x3c3e44],
				[center, 650, 140, 0xcaa85d],
				[center, 846, 131, 0xeecccc],
				[center, 564, 339, 0x86201f],
				[center, 566, 234, 0x852221]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}, {
		// 鬼王_挑战
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
	{	//	检测_逢魔界面 逢魔·极
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
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {

		if (thisScript.oper({
			name: '现世逢魔_界面判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			for (let i = 0; i < thisOperator[1].desc.length; i++) {
				if (thisScript.oper({
					name: `现世逢魔_第${i}次`,
					operator: [{
						desc: [thisOperator[1].desc[i] as [number, number, number, number]],
						oper: [
							thisOperator[0].oper[0],
							thisOperator[1].oper[i]
						]
					}]
				})) {
					return true;
				}
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
			sleep(5000);
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