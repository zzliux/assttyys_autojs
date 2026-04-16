import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func101 implements IFuncOrigin {
	id = 101;
	name = '每月活动_经营';
	operator: IFuncOperatorOrigin[] = [{ // 0 挑战准备界面
		desc: [
			1280, 720,
			[
				[right, 1134, 592, 0x42589f],
				[right, 1223, 590, 0x4259a1],
				[right, 1135, 674, 0x616890],
				[right, 1221, 674, 0x59628f],
				[right, 1176, 662, 0xfffdf6],
				[right, 1177, 594, 0xfffdf7],
			]
		],
		oper: [
			[center, 1280, 720, 1129, 595, 1222, 667, 1000],
		]
	}, { // 1 挑战界面
		desc: [
			1280, 720,
			[
				[left, 55, 36, 0xa06c3c],
				[center, 332, 10, 0xaf905b],
				[left, 26, 50, 0x845b3b],
				[left, 244, 37, 0x593716],
				[left, 169, 34, 0xf8f3e0],
			]
		]
	}, { // 2 挑战达成
		desc: [
			1280, 720,
			[
				[center, 767, 27, 0xd5ccad],
				[center, 795, 27, 0x75504a],
				[center, 789, 49, 0x745148],
				[center, 781, 53, 0x6d4941],
				[center, 804, 55, 0xe9d1b1],
			]
		],
		oper: [
			[center, 1280, 720, 770, 27, 802, 51, 1000],
			[center, 1280, 720, 683, 401, 793, 441, 1000],
		]
	}, { // 3 挑战选店长
		desc: [
			1280, 720,
			[
				[left, 89, 101, 0x76623c],
				[right, 1177, 105, 0x8c7d41],
				[left, 156, 598, 0x738cb7],
				[center, 438, 102, 0x2d3957],
				[right, 1066, 109, 0x26304a],
			]
		],
		oper: [
			[center, 1280, 720, 266, 296, 406, 440, 200],
			[center, 1280, 720, 547, 296, 668, 433, 200],
			[center, 1280, 720, 806, 290, 939, 434, 200],
			[center, 1280, 720, 1054, 291, 1133, 434, 200],
			[center, 1280, 720, 1099, 604, 1177, 660, 1000],
		]
	}, { // 4 结算
		desc: [1280, 720,
			[
				[center, 378, 303, 0x775630],
				[center, 375, 443, 0x836138],
				[right, 908, 289, 0x73542f],
				[right, 923, 449, 0x87643b],
				[right, 891, 349, 0xa68b73],
				[center, 396, 355, 0xa2846c],
			]
		],
		oper: [
			[center, 1280, 720, 1065, 252, 1151, 425, 1000],
			[center, 1280, 720, 1065, 252, 1151, 425, 1000],
		]
	}, { // 5 票不足
		desc: [
			1280, 720,
			[
				[left, 260, 545, 0xeecfa0],
				[center, 468, 543, 0xedcfa4],
				[center, 539, 549, 0xe8c894],
				[center, 713, 546, 0xe6c692],
				[center, 922, 543, 0xefd1a3],
				[right, 998, 548, 0xe8c793],
			]
		],
		oper: [
			[center, 1280, 720, 1065, 252, 1151, 425, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 101,
			name: '经营_结束',
			operator: [thisOperator[5]]
		})) {
			thisScript.doPush(thisScript, { text: '经营活动已结束，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			sleep(3000);
			return true;
		}
		if (thisScript.oper({
			id: 101,
			name: '经营_杂项',
			operator: [thisOperator[0], thisOperator[2], thisOperator[4]]
		})) {
			return true;
		}

		if (thisScript.oper({
			id: 101,
			name: '经营_选人',
			operator: [{
				desc: thisOperator[3].desc,
				oper: [
					thisOperator[3].oper[0],
					thisOperator[3].oper[1],
					thisOperator[3].oper[2],
					thisOperator[3].oper[3],
				]
			}]
		})) {
			thisScript.regionSwipe(thisOperator[3].oper[2], thisOperator[3].oper[1], [500, 800]);
			thisScript.regionClick([thisOperator[3].oper[3], thisOperator[3].oper[4]]);
			return true;
		}

		if (thisScript.oper({
			name: '经营_箱子',
			operator: [{ desc: thisOperator[1].desc }]
		})) {
			const point3 = thisScript.findMultiColor('经营_选取店长');
			if (point3) {
				thisScript.regionClick([[point3.x + 20, point3.y - 80, point3.x + 60, point3.y - 60, 200]]);
				return true;
			}
			const point = thisScript.findMultiColor('经营_箱子');
			if (point) {
				thisScript.regionClick([[point.x - 15, point.y - 15, point.x + 15, point.y + 15, 200]]);
				return true;
			}
			const point2 = thisScript.findMultiColor('经营_加号');
			if (point2) {
				thisScript.regionClick([[point2.x - 15, point2.y - 15, point2.x + 15, point2.y + 15, 200]]);
				return true;
			}
		}


		return false;
	}
}
