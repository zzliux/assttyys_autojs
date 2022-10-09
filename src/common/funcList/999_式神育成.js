const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 999,
	name: '式神育成',
	desc: '打开阴阳寮式神育成页面',
	checked: false,
	operator: [{
		// 在首页打开菜单
		desc: [1280, 720,
			[[right, 1211, 606, 0x885f46],
			[right, 1205, 624, 0x987777],
			[right, 1208, 646, 0xaf4949],
			[right, 1175, 680, 0xb08e7d]]
		],
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1200]	// 在首页打开菜单
		]
	}, { // 点击阴阳寮
		desc: [1280, 720,
			[[center, 560, 608, 0xbc3433],
			[center, 542, 639, 0x7b1515],
			[center, 575, 646, 0xc1b8b0],
			[center, 590, 638, 0xb07970]]
		],
		oper: [
			[center, 1280, 720, 544, 612, 594, 661, 1200]	// 点击阴阳寮
		]
	}, {
		// 点击阴阳寮，另外一种图标
		desc: [1280, 720,
			[
				[right, 1223, 662, 0xdbcbc7],
				[right, 1155, 41, 0xd7b188],
				[center, 451, 631, 0xe8e4e1],
				[center, 673, 651, 0xdb8b3f],
			]
		],
		oper: [
			[center, 1280, 720, 544, 612, 594, 661, 1200]	// 点击阴阳寮
		]
	}, { // 点击结界
		desc: [
			1280, 720,
			[
				[right, 976, 604, 0x371515],
				[right, 1002, 636, 0xac3d3d],
				[right, 989, 647, 0xd8b699],
				[right, 968, 680, 0xeaddc5]
			]
		],
		oper: [
			[center, 1280, 720, 939, 618, 1016, 682, 1200]
		]
	},
	{ //	判断_是否为己方结界
		desc: [1280, 720,
			[[center, 611, 300, 0x0c0804],
			[center, 913, 305, 0x0c0804],
			[left, 318, 305, 0x0c0804],
			[center, 605, 295, 0xae2e13],
			[left, 202, 462, 0x10100c]]
		],
		oper: [
			[center, 1280, 720, 582, 218, 638, 400, 600]
		]
	}]
}
