import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func113 implements InterfaceFuncOrigin {
	id = 113;
	name = '梦旅竞速_杂项';
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 开始
		desc: [1280, 720,
			[
				[left, 90, 670, 0xf9e9d0],
				[right, 1202, 652, 0xe2d9c9],
				[left, 33, 38, 0xf5e5a3],
				[left, 244, 39, 0x583615],
				[center, 642, 344, 0x47518b],
			]
		],
		oper: [
			[right, 1280, 720, 603, 301, 698, 400, 1000]
		]
	}, {
		// 游戏结束，再来一次
		desc: [1280, 720,
			[
				[center, 819, 538, 0x5d6898],
				[center, 514, 543, 0x7d86af],
				[left, 31, 44, 0x626567],
				[left, 155, 35, 0x495060],
				[center, 651, 190, 0xecccc4],
			]
		],
		oper: [
			[center, 1280, 720, 725, 533, 904, 575, 1000]
		]
	}, {
		desc: [1280, 720,
			[
				[left, 31, 44, 0x626567],
				[left, 167, 34, 0x495060],
				[center, 1090, 221, 0xd0c8d8],
				[center, 808, 76, 0xffefd1],
				[center, 1082, 546, 0xe3e4f2],
			]
		],
		oper: [
			[center, 1280, 720, 110, 101, 398, 482, 1000]
		]
	}]
}