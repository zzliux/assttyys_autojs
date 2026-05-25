import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func695 implements IFuncOrigin {
	id = 695;
	name = '秘闻前四层';
	desc = '选择式神后清理前四层秘闻三十次(需满三十级并且珍旅居只借用了SP姑获鸟)';
	operator: IFuncOperatorOrigin[] = [{ // 0 珍旅居
		desc: [1280, 720,
			[
				[left, 201, 613, 0xe7a155],
				[left, 224, 611, 0x332c26],
				[left, 239, 651, 0xf47563],
				[left, 253, 646, 0x742c2a],
			]
		],
		oper: [
			[center, 1280, 720, 206, 625, 248, 660, 1000],
		]
	}, { // 1 唤妖借处
		desc: [1280, 720,
			[
				[right, 1160, 597, 0xefd7c6],
				[right, 1183, 598, 0xfdc8b2],
				[right, 1187, 622, 0xeecebc],
				[right, 1154, 630, 0xf7d7c6],
				[right, 1170, 652, 0xad6535],
			]
		],
		oper: [
			[center, 1280, 720, 1050, 272, 1072, 401, 1000],
		]
	}, { // 2 烬天玉藻前
		desc: [1280, 720,
			[
				[center, 486, 218, 0x9c6521],
				[center, 498, 245, 0xc6aa7b],
				[center, 513, 222, 0x885d2d],
				[center, 512, 269, 0xac7939],
				[center, 490, 272, 0x946531],
			]
		],
		oper: [
			[center, 1280, 720, 809, 443, 870, 503, 1000],
		]
	}, { // 3 已借用
		desc: [1280, 720,
			[
				[center, 491, 225, 0xebe2e4],
				[center, 507, 226, 0x4a3431],
				[center, 498, 223, 0xa596e7],
				[center, 501, 237, 0xece3e4],
				[center, 506, 261, 0xfffbf9],
			]
		],
		oper: [
			[center, 1280, 720, 22, 20, 58, 53, 1000],
			[center, 1280, 720, 22, 20, 58, 53, 1000],
		]
	}, { // 4 探索地图进入秘闻
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 547, 637, 594, 677, 1000],
		]
	}, { // 5 每周挑战秘闻弹窗，暗
		desc: [
			1280, 720,
			[
				[left, 110, 42, 0x44423d],
				[left, 211, 38, 0x44423e],
				[left, 31, 634, 0x211719],
				[right, 1255, 706, 0x2b2326],
				[right, 1264, 364, 0x110b0b],
				[center, 886, 24, 0x4b290d]
			]
		],
		oper: [
			[center, 1280, 720, 1020, 112, 1230, 371, 1000]
		]
	}, { // 6 秘闻挑战开启提示
		desc: '秘闻挑战开启',
		oper: [
			[left, 1280, 720, 452, 605, 870, 683, 2000],
		]
	}, { // 7 秘闻界面
		desc: [1280, 720,
			[
				[left, 68, 170, 0x532f2c],
				[left, 117, 174, 0xa5a097],
				[right, 818, 171, 0xb9b6ae],
				[left, 318, 46, 0x1f1d24],
			]
		],
		oper: [
			[center, 1280, 720, 272, 187, 338, 219, 1000],
			[center, 1280, 720, 618, 185, 695, 219, 1000],
			[center, 1280, 720, 268, 307, 341, 342, 1000],
			[center, 1280, 720, 627, 306, 696, 341, 1000],
			[center, 1280, 720, 276, 439, 333, 465, 1000],
			[center, 1280, 720, 637, 436, 703, 472, 1000],
			[center, 1280, 720, 275, 561, 343, 591, 1000],
			[center, 1280, 720, 636, 568, 692, 600, 1000],
			[center, 1280, 720, 1164, 620, 1226, 667, 1000],
		]
	}, { // 8 100勾
		desc: [1280, 720,
			[
				[center, 349, 203, 0xfada68],
				[center, 368, 198, 0xf7eb7b],
				[center, 390, 198, 0xffeb7b],
				[center, 376, 221, 0xfdfdfd],
				[center, 390, 226, 0xffffff],
				[center, 381, 216, 0xa51a14],
			]
		],
		oper: [
			[center, 1280, 720, 1157, 103, 1200, 138, 1000],
		]
	}, { // 9 翻页
		oper: [
			[center, 1280, 720, 463, 580, 477, 591, 1000],
			[center, 1280, 720, 467, 105, 485, 115, 1000],
		]
	}, { // 10 有最新
		desc: [1280, 720,
			[
				[center, 506, 163, 0x782021],
				[center, 523, 166, 0x782021],
				[center, 518, 214, 0x782021],
				[center, 509, 212, 0x782021],
			]
		],
	}, { // 11 孟婆特殊
		desc: [1280, 720,
			[
				[left, 296, 496, 0xf4b25d],
				[center, 381, 521, 0xf4b25d],
				[center, 620, 501, 0xf7b260],
				[right, 713, 525, 0xf4b25d],
				[right, 952, 498, 0xf4b25d],
				[right, 1051, 520, 0xf4b25d],
			]
		],
		oper: [
			[center, 1280, 720, 620, 505, 724, 532, 1000],
		]
	}, { // 12 浪川跳过
		desc: [1280, 720,
			[
				[right, 894, 324, 0xdbe0e3],
				[right, 914, 328, 0xe7e3e6],
				[right, 859, 416, 0x636367],
				[right, 785, 453, 0xd2cfd3],
				[right, 1057, 457, 0x763534],
				[right, 938, 508, 0x476070],
			]
		],
		oper: [
			[center, 1280, 720, 1157, 102, 1197, 135, 1000],
		]
	}, { // 13 苍风跳过
		desc: [1280, 720,
			[
				[right, 910, 268, 0xc6c4c8],
				[right, 940, 336, 0xcdc5c8],
				[right, 949, 293, 0xd0c5c9],
				[right, 882, 449, 0x2c2f34],
				[right, 802, 373, 0xc9c4d1],
				[right, 749, 385, 0x9a6f42],
			]
		],
		oper: [
			[center, 1280, 720, 1159, 102, 1197, 136, 1000],
		]
	}, { // 14 青蛙跳过
		desc: [1280, 720,
			[
				[right, 855, 194, 0xecd684],
				[right, 911, 207, 0xe7c57b],
				[right, 810, 371, 0xeceadb],
				[right, 884, 459, 0xfcd373],
				[right, 908, 512, 0x44423f],
			]
		],
		oper: [
			[center, 1280, 720, 1159, 99, 1195, 134, 1000],
		]
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.miWenClear === 'borrow') {
			if (thisScript.oper({
				id: 692,
				name: '借用式神',
				operator: [thisOperator[0], thisOperator[1], thisOperator[2]],
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: '借用式神',
				operator: [thisOperator[3]],
			})) {
				thisScript.global.miWenClear = 'fight'
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: '借用式神',
				operator: [{ desc: thisOperator[7].desc }],
			})) {
				thisScript.global.miWenClear = 'fight';
			}
		}
		if (thisScript.global.miWenClear === 'fight') {
			if (thisScript.oper({
				id: 692,
				name: '借用式神',
				operator: [thisOperator[8], thisOperator[12], thisOperator[13], thisOperator[14]],
			})) {
				thisScript.global.miWenClearTimer++;
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: '借用式神',
				operator: [thisOperator[4], thisOperator[5], thisOperator[6], thisOperator[11]
					, thisOperator[12]],
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: '借用式神',
				operator: [{ desc: thisOperator[7].desc }],
			})) {
				let realTimer = thisScript.global.miWenClearTimer;
				if (thisScript.oper({
					id: 692,
					name: '借用式神',
					operator: [{ desc: thisOperator[10].desc }],
				})) {
					while (realTimer >= 8) {
						realTimer = realTimer - 8;
						thisScript.regionSwipe(thisOperator[9].oper[0], thisOperator[9].oper[1], [2000, 2300], 500)
					}
				}
				realTimer = thisScript.global.miWenClearTimer % 8;
				thisScript.regionClick([thisOperator[7].oper[realTimer]])
				thisScript.regionClick([thisOperator[7].oper[8]])
				return true;
			}
		}
	}
}