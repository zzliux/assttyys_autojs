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
			[center, 1280, 720, 1173, 131, 1221, 165, 1000],
			[center, 1280, 720, 1180, 676, 1220, 708, 1000],
		]
	}, { // 4 皮肤券_购买
		desc: [1280, 720,
			[
				[center, 604, 134, 0xd8ac6f],
				[center, 628, 129, 0xdbae6f],
				[right, 652, 129, 0xd7ac6e],
				[center, 619, 189, 0x44234a],
				[center, 627, 161, 0x4a264f],
			]
		],
		oper: [
			[center, 1280, 720, 596, 156, 658, 212, 1000],
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
		desc: [1280, 720,
			[
				[center, 604, 134, 0x725c3b],
				[center, 628, 129, 0x725d3b],
				[right, 652, 129, 0x715c3b],
				[center, 619, 189, 0x291929],
				[center, 627, 161, 0x2c1b2c],
			]
		],
		oper: [
			[center, 1280, 720, 1174, 226, 1220, 265, 1000],
		]
	}, { // 7 金达摩
		desc: [
			1280, 720,
			[
				[center, 604, 134, 0x725c3b],
				[center, 628, 129, 0x725d3b],
				[right, 652, 129, 0x715c3b],
				[center, 619, 189, 0x291929],
				[center, 627, 161, 0x2c1b2c],
				[right, 822, 204, 0x9a621b],
				[right, 832, 204, 0x8f5113],
				[right, 844, 181, 0x8c5215],
			]
		],
		oper: [
			[center, 1280, 720, 22, 11, 58, 46, 1000],
			[center, 1280, 720, 22, 11, 58, 46, 1000],
		]
	}, { // 8 SP皮肤券
		desc: [
			1280, 720,
			[
				[right, 812, 134, 0xd7ac6e],
				[right, 836, 129, 0xdaad6f],
				[right, 855, 121, 0xd8ad6f],
				[right, 842, 203, 0xf56f2f],
				[right, 834, 207, 0xf76931],
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
				operator: [thisOperator[7]]
			})) {
				thisScript.global.fengZi = false;
				return true;
			}
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
				return true;
			}
			if (thisScript.oper({
				id: 1103,
				name: '风姿皮肤券_杂项',
				operator: [thisOperator[8]]
			})) {
				thisScript.global.fengZi = false;
				return true;
			}
		}
		return false;
	}
}
