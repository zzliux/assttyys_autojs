import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func402 implements IFuncOrigin {
	id = 402;
	name = '超鬼王';
	desc = '合成，攻打234星鬼王';
	operator: IFuncOperatorOrigin[] = [{ // 0 合成界面
		desc: [
			1280, 720,
			[
				[right, 1211, 188, 0xf0e6d8],
				[right, 1227, 214, 0xeccdb5],
				[right, 1239, 187, 0xede6da],
				[right, 1249, 173, 0xff1616],
			]
		],
		oper: [
			[center, 1280, 720, 1202, 180, 1244, 213, 1000],
		]
	}, { // 1 合成按钮
		desc: [
			1280, 720,
			[
				[center, 638, 591, 0xffb278],
				[center, 636, 615, 0xfed2b1],
				[center, 727, 592, 0xffb67f],
				[center, 721, 613, 0xffd0ae],
				[center, 688, 600, 0x754e2e],
			]
		],
		oper: [
			[center, 1280, 720, 623, 588, 728, 617, 1000],
			[center, 1280, 720, 836, 589, 945, 621, 3000],
		]
	}, { // 2 无合成次数
		desc: [
			1280, 720,
			[
				[center, 355, 244, 0x80644b],
				[center, 547, 238, 0xfadd9d],
				[center, 686, 245, 0xfadd9d],
				[center, 771, 259, 0xfadd9d],
				[center, 382, 303, 0xbb5816],
				[center, 380, 398, 0xbd8d12],
			]
		],
		oper: [
			[center, 1280, 720, 926, 226, 962, 260, 1000],
			[center, 1280, 720, 1045, 58, 1087, 88, 1000],
		]
	}, { // 3 300次副本挑战
		desc: [
			1280, 720,
			[
				[right, 1146, 597, 0xe1d6c1],
				[right, 1183, 600, 0x3c2b26],
				[right, 1205, 621, 0x3c2b26],
				[right, 1150, 646, 0xfd892e],
				[right, 1163, 634, 0xddd1bb],
				[right, 1170, 588, 0xe3d8c2],
			]
		],
		oper: [
			[center, 1280, 720, 1130, 591, 1213, 661, 1000],
		]
	}, { // 4 50次票收齐
		desc: [
			1280, 720,
			[
				[left, 269, 597, 0xcea740],
				[left, 265, 600, 0xcaa440],
				[left, 268, 602, 0xdbb140],
				[left, 271, 606, 0xecbd40],
				[left, 267, 610, 0xf0c040],
				[left, 298, 600, 0xf2eadd],
			]
		],
		oper: [
			[center, 1280, 720, 16, 19, 59, 58, 1000],
			[center, 1280, 720, 748, 160, 788, 272, 1000],
		]
	}, { // 5 召唤鬼王处_1星
		desc: [
			1280, 720,
			[
				[right, 1075, 557, 0xee7722],
				[right, 1075, 558, 0xf46d1a],
				[right, 1084, 557, 0x908889],
				[right, 1084, 558, 0x8f8688],
			]
		],
		oper: [
			[center, 1280, 720, 1127, 520, 1236, 540, 1000],
		]
	}, { // 6 低星鬼王攻打
		desc: [
			1280, 720,
			[
				[left, 261, 156, 0xfff2c9],
				[left, 283, 164, 0xf0e0d1],
				[left, 266, 183, 0xe8d7c1],
				[left, 266, 168, 0xfdf0c7],
				[left, 286, 180, 0xfaedc4],
			]
		],
		oper: [
			[center, 1280, 720, 1129, 575, 1223, 662, 1000],
		]
	}, { // 7 结算分数中
		desc: [
			1280, 720,
			[
				[left, 156, 179, 0xece3d6],
				[left, 180, 179, 0xfaf3e6],
				[left, 196, 181, 0xe4dbce],
				[left, 217, 180, 0xece4d7],
				[left, 240, 179, 0xe3dacc],
				[left, 260, 178, 0xf1eadd],
				[left, 277, 176, 0xe4dcce],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 402,
			name: '检测_鬼王合成',
			operator: [thisOperator[0], thisOperator[1], thisOperator[2]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 402,
			name: '检测_副本挑战',
			operator: [{ desc: thisOperator[3].desc }]
		})) {
			if (thisScript.oper({
				id: 402,
				name: '检测_50次票收齐',
				operator: [thisOperator[4]]
			})) {
				return true;
			} else {
				thisScript.regionClick([thisOperator[3].oper[0]]);
				return true;
			}
		}
		if (thisScript.oper({
			id: 402,
			name: '检测_召唤鬼王处_1星',
			operator: [thisOperator[5]]
		})) {
			return true;
		}
		const point = thisScript.findMultiColor('超鬼王_低星');
		if (point) {
			console.log('找到超鬼王_低星');
			const oper = [[
				point.x,
				point.y - 10,
				point.x + 10,
				point.y + 5,
				1200
			], [
				566, 438, 711, 477, 1200
			]];
			thisScript.regionClick(oper);
			return true;
		}
		if (thisScript.oper({
			id: 402,
			name: '攻打鬼王',
			operator: [thisOperator[6]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 402,
			name: '结算分数中',
			operator: [thisOperator[7]]
		})) {
			return true;
		}
		return false;
	}
}
