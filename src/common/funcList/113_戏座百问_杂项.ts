import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
const left = 0;
const center = 1;
const right = 2;

export class Func113 implements IFuncOrigin {
	id = 113;
	name = '梦旅竞速_杂项';
	operator: IFuncOperatorOrigin[] = [{
		// 开始
		desc: [1280, 720,
			[
				[left, 34, 37, 0xf6e8a9],
				[left, 114, 28, 0xf9eeb7],
				[left, 305, 35, 0x1e1925],
				[right, 1179, 596, 0xe8dcc5],
				[right, 1221, 625, 0xe4d9c3],
				[right, 1225, 40, 0xd7c3a2],
				[left, 102, 364, 0x5f3c6a],
			]
		],
		oper: [
			[center, 1280, 720, 1132, 583, 1232, 676, 1000],
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
	}, {
		// 回答正确，不进行任何操作
		desc: [1280, 720,
			[
				[right, 1200, 130, 0xf5e4ec],
				[left, 38, 40, 0xf6e7a7],
				[right, 940, 35, 0xd1c9da],
				[right, 1017, 36, 0xd0c9db],
				[center, 536, 335, 0xfefde9],
				[right, 652, 334, 0xfefced],
				[right, 722, 362, 0xfddba9],
			]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 500],
		],
		retest: 200
	}]
}