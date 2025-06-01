import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1103 implements IFuncOrigin {
	id = 1103;
	name = '风姿皮肤券';
	desc: '进入风姿购买所有皮肤券';
	operator: IFuncOperatorOrigin[] = [{ // 0 图鉴
		desc: [
			1280, 720,
			[
				[left, 92, 618, 0x8198c3],
				[left, 96, 633, 0x778fbe],
				[left, 123, 628, 0x90a5ca],
				[left, 124, 642, 0x7892bf],
				[left, 113, 623, 0xe3d9d8],
			]
		],
		oper: [
			[center, 1280, 720, 96, 610, 139, 642, 1000],
		]
	}, { // 1 风姿
		desc: [1280, 720,
			[
				[left, 316, 667, 0xae8e51],
				[left, 320, 661, 0xdfcc96],
				[center, 332, 661, 0xe4cfa6],
				[center, 344, 652, 0xffedaa],
				[center, 364, 664, 0xdcbe8a],
			]
		],
		oper: [
			[center, 1280, 720, 315, 655, 364, 688, 1000],
		]
	}, { // 2 兑换
		desc: [
			1280, 720,
			[
				[center, 683, 513, 0x7a2222],
				[center, 873, 227, 0x86322b],
				[right, 997, 542, 0x812e28],
				[right, 1097, 397, 0x85302e],
			]
		],
		oper: [
			[center, 1280, 720, 1194, 591, 1240, 630, 1000],
		]
	}, { // 3 滑动
		desc: [
			1280, 720,
			[
				[center, 950, 41, 0x2d1f14],
				[right, 1253, 95, 0x3e251c],
				[right, 1256, 261, 0x281c13],
				[right, 1258, 511, 0x2e2016],
				[right, 1145, 457, 0x2a1c14],
			]
		],
		oper: [
			[center, 1280, 720, 1163, 123, 1219, 165, 1000],
			[center, 1280, 720, 1180, 676, 1220, 708, 1000],
		]
	}, { // 4 皮肤券_购买
		desc: [
			1280, 720,
			[
				[center, 603, 115, 0xd6ab6e],
				[center, 645, 113, 0xd2a76b],
				[center, 607, 175, 0xd2d2d3],
				[center, 627, 150, 0x4a244e],
				[center, 624, 180, 0x46224a],
			]
		],
		oper: [
			[center, 1280, 720, 591, 143, 652, 195, 1000],
		]
	}, { // 5 购买确认_二行字
		desc: [
			1280, 720,
			[
				[center, 560, 546, 0xf4b35f],
				[center, 562, 581, 0xf3b25e],
				[center, 713, 582, 0xf1af5d],
				[center, 712, 545, 0xf4b35e],
				[center, 772, 467, 0x462b22],
				[center, 795, 475, 0x422d29],
			]
		],
		oper: [
			[center, 1280, 720, 763, 448, 799, 488, 1000],
			[center, 1280, 720, 561, 543, 714, 584, 1000],
		]
	}, { // 6 皮肤券_购买完毕_下一组
		desc: [
			1280, 720,
			[
				[center, 609, 176, 0x6e6d6d],
				[center, 627, 150, 0x2d192c],
				[center, 636, 152, 0x311c2e],
				[center, 623, 183, 0x2b182a],
				[center, 617, 188, 0x636264],
			]
		],
		oper: [
			[center, 1280, 720, 1171, 209, 1222, 256, 1000],
		]
	}, { // 7 金达摩
		desc: [
			1280, 720,
			[
				[center, 592, 111, 0xd9ad6f],
				[center, 639, 112, 0xd9ad6f],
				[center, 664, 113, 0xd4a96c],
				[center, 661, 197, 0xee6930],
				[center, 623, 193, 0x9d621c],
			]
		],
		oper: [
			[center, 1280, 720, 22, 11, 58, 46, 1000],
			[center, 1280, 720, 22, 11, 58, 46, 1000],
		]
	}, { // 8 皮肤券_暗色+金达摩_暗色
		desc: [
			1280, 720,
			[
				[center, 801, 178, 0x74622a],
				[center, 823, 158, 0x7e7132],
				[center, 845, 173, 0x4d2d10],
				[center, 831, 192, 0x4f3011],
				[center, 820, 183, 0x786830],
			]
		],
		oper: [
			[center, 1280, 720, 22, 11, 58, 46, 1000],
			[center, 1280, 720, 22, 11, 58, 46, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.fengZi) {
			if (thisScript.oper({
				id: 1103,
				name: '风姿皮肤券_杂项',
				operator: [thisOperator[0], thisOperator[1], thisOperator[4], thisOperator[5]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 1103,
				name: '风姿皮肤券_杂项',
				operator: [thisOperator[2]]
			})) {
				thisScript.regionSwipe(thisOperator[3].oper[0], thisOperator[3].oper[1], [100, 300], 1000);
				thisScript.regionClick([thisOperator[3].oper[0]]);
				return true;
			}
			if (thisScript.oper({
				id: 1103,
				name: '风姿皮肤券_杂项',
				operator: [thisOperator[6]]
			})) {
				if (thisScript.oper({
					id: 1103,
					name: '风姿皮肤券_杂项',
					operator: [thisOperator[8]]
				})) {
					thisScript.global.fengZi = false;
					return true;
				}
			}
			if (thisScript.oper({
				id: 1103,
				name: '风姿皮肤券_杂项',
				operator: [thisOperator[7]]
			})) {
				thisScript.global.fengZi = false;
				return true;
			}
		}
		return false;
	}
}
