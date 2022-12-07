const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 111,
	name: '红叶行狩_杂项',
	operator: [{
		// 匹配
		desc: [1280, 720,
			[
				[left, 105, 633, 0xc8b693],
				[left, 46, 37, 0xf5e5a5],
				[right, 1186, 123, 0x773027],
				[right, 1134, 568, 0xd0c8c0],
				[right, 1156, 568, 0xcbc2ba],
				[right, 1159, 612, 0xcbc9c7],
				[right, 1126, 604, 0x272420],
			]
		],
		oper: [
			[right, 1280, 720, 1102, 553, 1186, 642, 1000]
		]
	}, {
		// 选择随机
		desc: [1280, 720,
			[
				[right, 1161, 486, 0x3c2218],
				[right, 1215, 42, 0xdfc7a2],
				[left, 48, 39, 0xf3e4a4],
				[center, 390, 88, 0x651a24],
				[center, 869, 86, 0x651a24],
			]
		],
		oper: [
			[right, 1280, 720, 1139, 438, 1188, 488, 200],
			[right, 1280, 720, 1139, 438, 1188, 488, 5000]
		]
	}, {
		// 选择骰子
		desc: [1280, 720,
			[
				[right, 1207, 42, 0xdfc7a2],
				[center, 404, 87, 0x651a24],
				[center, 860, 87, 0x651a24],
				[left, 44, 37, 0xf6e9ad],
				[left, 252, 40, 0x583716],
			]
		],
		oper: [
			[right, 1280, 720, 1093, 536, 1182, 647, 500]
		]
	}, {
		// 挑战
		desc: [1280, 720,
			[
				[right, 1188, 588, 0xc8bfb7],
				[center, 931, 173, 0xf1cfcf],
				[right, 1216, 43, 0x433c31],
				[left, 44, 38, 0x4a4634],
				[center, 615, 591, 0xb31b18],
				[right, 1191, 359, 0xd5c4c0],
			]
		],
		oper: [
			[right, 1280, 720, 1141, 584, 1228, 665, 1000]
		]
	}, {
		// BOSS的挑战
		desc: [1280, 720,
			[
				[right, 1188, 588, 0xc8bfb7],
				[right, 1191, 359, 0xd5c4c0],
				[right, 1115, 135, 0xf1cfcf],
				[center, 394, 131, 0xfed88e],
				[right, 1179, 355, 0xd7c6c6],
			]
		],
		oper: [
			[right, 1280, 720, 1141, 584, 1228, 665, 1000]
		]
	}, {
		// 选祝福
		desc: [1280, 720,
			[
				[left, 47, 39, 0x494532],
				[center, 672, 94, 0xffe5bf],
				[center, 391, 90, 0x1f080b],
				[center, 808, 513, 0x632c24],
				[center, 461, 515, 0x6a3228],
			]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 428, 499, 499, 534, 1000, 5],
				[center, 1280, 720, 767, 500, 856, 534, 1000, 5],
			]
		]
	}, {
		// 结束
		desc: [1280, 720,
			[
				[center, 845, 666, 0xca9c84],
				[center, 514, 151, 0x2e2626],
				[center, 136, 71, 0x372729],
				[center, 330, 533, 0xf6ddc5],
				[center, 1235, 73, 0x291c21],
			]
		],
		oper: [
			[right, 1280, 720, 94, 82, 1083, 634, 1000]
		]
	}]
}