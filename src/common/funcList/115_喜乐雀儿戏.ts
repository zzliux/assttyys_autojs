import { IFuncOrigin, IFuncOperatorOrigin, type IFuncOperator } from '@/interface/IFunc';
import type { Script } from '@/system/script';
// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

export class Func113 implements IFuncOrigin {
	id = 115;
	name = '喜乐雀儿戏';
	operator: IFuncOperatorOrigin[] = [{ // 0 摸
		desc: [
			1280, 720,
			[
				[center, 709, 142, 0x256b72],
				[center, 720, 147, 0xfef0b3],
				[center, 751, 145, 0x297174],
				[center, 738, 176, 0x4a998a],
				[center, 715, 172, 0x449285],
				[center, 734, 158, 0xfef7ca],
				[center, 719, 147, 0xfef0b3],
			]
		],
		oper: [
			[center, 1280, 720, 709, 127, 746, 168, 1000],
		]
	}, { // 1 拖动弃置牌
		desc: [
			1280, 720,
			[
				[center, 356, 288, 0x82c0c2],
				[center, 655, 295, 0x84bec6],
				[right, 1007, 296, 0x89c2c6],
				[center, 648, 330, 0xd6f0f2],
				[center, 792, 333, 0xe5f9fb],
				[center, 720, 334, 0xe6f9fb],
			]
		]
	}, { // 2 选择吃牌
		desc: [
			1280, 720,
			[
				[center, 494, 468, 0x3c6870],
				[center, 520, 463, 0x6aacb3],
				[center, 791, 469, 0x3b686f],
				[center, 817, 465, 0x6aadb6],
			]
		],
		oper: [
			[center, 1280, 720, 429, 395, 606, 461, 1000],
		]
	}, { // 3 挑战者
		desc: [
			1280, 720,
			[
				[right, 1134, 204, 0xc4dab0],
				[center, 716, 684, 0x27746e],
				[right, 1271, 177, 0x748977],
				[right, 1225, 549, 0x477276],
				[right, 1262, 580, 0x1b3a44],
				[center, 790, 293, 0x163138],
			]
		],
		oper: [
			[center, 1280, 720, 521, 606, 716, 683, 1000],
		]
	}, { // 4 结算
		desc: [
			1280, 720,
			[
				[right, 1151, 608, 0xecd790],
				[right, 1167, 615, 0xe9d68f],
				[right, 1171, 640, 0xdec271],
				[right, 1185, 649, 0x32261b],
				[right, 1217, 636, 0xd7bd69],
			]
		],
		oper: [
			[center, 1280, 720, 386, 601, 558, 675, 1000],
		]
	}, { // 5 开始挑战
		desc: [
			1280, 720,
			[
				[right, 1146, 607, 0x26393c],
				[right, 1183, 605, 0x26393c],
				[right, 1164, 625, 0xf8fbfb],
				[right, 1111, 633, 0xd0b87a],
				[right, 1220, 649, 0x6d8e84],
				[right, 1170, 580, 0xf7f9fa],
			]
		],
		oper: [
			[center, 1280, 720, 1116, 583, 1215, 656, 1000],
		]
	}, { // 6 三选一
		desc: [
			1280, 720,
			[
				[center, 556, 457, 0x6db1b9],
				[center, 555, 479, 0x87c5cb],
				[center, 770, 463, 0x68aab1],
				[center, 767, 484, 0x83c3c8],
				[center, 659, 470, 0x376169],
			]
		],
		oper: [
			[center, 1280, 720, 569, 385, 764, 467, 1000],
		]
	}, { // 7 常驻悬浮窗
		desc: '常驻悬浮窗方案'
	}];


	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '喜乐雀儿戏_弃牌',
			operator: [thisOperator[1]]
		})) {
			const point = thisScript.findMultiColor('喜乐雀儿戏_手牌');
			if (point) {
				const oper1 = [point.x + 30, point.y + 40, point.x + 40, point.y + 50, 1000]
				const oper2 = [point.x + 30, point.y - 200, point.x + 40, point.y - 190, 1000]
				thisScript.regionSwipe(oper1, oper2, [500, 700], 0, 1000);
				return true;
			}
		}
		let point = null;
		if (thisScript.findMultiColor('喜乐雀儿戏_杠')) {
			point = thisScript.findMultiColor('喜乐雀儿戏_杠');
		} else if (thisScript.findMultiColor('喜乐雀儿戏_胡')) {
			point = thisScript.findMultiColor('喜乐雀儿戏_胡');
		} else if (thisScript.findMultiColor('喜乐雀儿戏_碰')) {
			point = thisScript.findMultiColor('喜乐雀儿戏_碰');
		} else if (thisScript.findMultiColor('喜乐雀儿戏_吃')) {
			point = thisScript.findMultiColor('喜乐雀儿戏_吃');
		}
		if (point) {
			const oper = [[point.x, point.y, point.x + 10, point.y + 10, 700]];
			thisScript.regionClick(oper);
			return true;
		}
		if (thisScript.oper({
			name: '喜乐雀儿戏_杂项',
			operator: [thisOperator[0], thisOperator[2], thisOperator[3], thisOperator[5], thisOperator[6]]
		})) {
			return true;
		}
		if (thisScript.oper({
			name: '喜乐雀儿戏_结束',
			operator: [thisOperator[4]]
		})) {
			thisScript.myToast('一轮已结束，推送提醒');
			thisScript.doPush(thisScript, { text: '一轮已结束，推送提醒', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			sleep(1000);
			return true;
		}
	}
}