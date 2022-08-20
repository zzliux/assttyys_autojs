const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 113,
	name: '梦旅竞速_杂项',
	operator: [{
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
				[right, 1113, 287, 0xffffcf],
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
	}]
}