import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func501 implements InterfaceFuncOrigin {
	id = 501;
	name = '打开BUFF界面';
	desc = '支持从探索地图、庭院打开buff界面';
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 探索地图打开buff界面
		desc: [1280, 720,
			[
				[left, 45, 60, 0xeff5fb],
				[right, 1168, 146, 0xd9cec1],
				[right, 1124, 32, 0xd7b388],
				[right, 1226, 30, 0xd3af84],
				[left, 18, 705, 0x754830],
				[left, 210, 711, 0x985b32],
			]
		],
		oper: [
			[center, 1280, 720, 428, 24, 453, 65, 1500],
		]
		// }, {
		// 	// 准备
		// 	desc: [1280, 720,
		// 		[
		// 			[center, 213, 701, 0x241818],
		// 			[center, 146, 680, 0xfce8cf],
		// 			[center, 122, 681, 0xfdead3],
		// 			[left, 109, 43, 0xcea374],
		// 			[left, 188, 23, 0xd3ae86],
		// 			[right, 1071, 694, 0x241818],
		// 		]
		// 	],
		// 	oper: [
		// 		[center, 1280, 720, 119, 660, 149, 704, 1500],
		// 	]
		// }, {
		// 	// 八歧大蛇
		// 	desc: [1280, 720,
		// 		[
		// 			[left, 44, 43, 0xc2cbe3],
		// 			[right, 1124, 47, 0xd8b188],
		// 			[right, 1237, 47, 0xd3af84],
		// 			[left, 231, 43, 0x583716],
		// 			[right, 1135, 48, 0xd7b38a],
		// 			[center, 424, 58, 0xfbe6cf],
		// 			[center, 455, 62, 0xfad6bb],
		// 		]
		// 	],
		// 	oper: [
		// 		[center, 1280, 720, 425, 41, 451, 75, 1500],
		// 	]
		// }, {
		// 	// 业原火
		// 	desc: [1280, 720,
		// 		[
		// 			[left, 44, 43, 0xc2cbe3],
		// 			[right, 1124, 47, 0xd8b188],
		// 			[right, 1237, 47, 0xd3af84],
		// 			[left, 231, 43, 0x583716],
		// 			[right, 1135, 48, 0xd7b38a],
		// 			[left, 294, 58, 0xfbe4cd],
		// 			[center, 323, 57, 0xfde0c7],
		// 		]
		// 	],
		// 	oper: [
		// 		[center, 1280, 720, 295, 41, 322, 77, 1500],
		// 	]
		// }, {
		// 	// 卑弥呼
		// 	desc: [1280, 720,
		// 		[
		// 			[left, 44, 43, 0xc2cbe3],
		// 			[right, 1124, 47, 0xd8b188],
		// 			[right, 1237, 47, 0xd3af84],
		// 			[left, 231, 43, 0x583716],
		// 			[right, 1135, 48, 0xd7b38a],
		// 			[center, 423, 62, 0xfbdbc2],
		// 			[center, 453, 59, 0xfbdcc2],
		// 		]
		// 	],
		// 	oper: [
		// 		[center, 1280, 720, 423, 43, 452, 76, 1500],
		// 	]
		// }, {
		// 	// 永生之海
		// 	desc: [1280, 720,
		// 		[
		// 			[left, 44, 43, 0xc2cbe3],
		// 			[right, 1124, 47, 0xd8b188],
		// 			[right, 1237, 47, 0xd3af84],
		// 			[left, 231, 43, 0x583716],
		// 			[right, 1135, 48, 0xd7b38a],
		// 			[center, 647, 58, 0xfce0c9],
		// 			[center, 677, 59, 0xfce0c8],
		// 		]
		// 	],
		// 	oper: [
		// 		[center, 1280, 720, 647, 46, 678, 78, 1500],
		// 	]
		// }, {
		// 	// 觉醒
		// 	desc: [1280, 720,
		// 		[
		// 			[left, 44, 43, 0xc2cbe3],
		// 			[right, 1124, 47, 0xd8b188],
		// 			[left, 250, 42, 0x583716],
		// 			[right, 1130, 67, 0xcca273],
		// 			[right, 1213, 61, 0xcda374],
		// 			[center, 1001, 610, 0xe0d5be],
		// 			[center, 333, 55, 0xfbe2ca],
		// 			[center, 362, 57, 0xfbdec5],
		// 		]
		// 	],
		// 	oper: [
		// 		[center, 1280, 720, 332, 41, 363, 78, 1500],
		// 	]
	}, {
		// 庭院
		desc: [1280, 720,
			[
				[left, 264, 41, 0x493738],
				[right, 1156, 37, 0xd7b28a],
				[right, 1229, 48, 0xcfa676],
				[right, 1228, 650, 0xd6c6c3],
				[right, 1226, 601, 0x5b1919],
				[center, 337, 72, 0x765828]
			]
		],
		oper: [
			[center, 1280, 720, 359, 45, 396, 74, 1500]
		]
	}]
}