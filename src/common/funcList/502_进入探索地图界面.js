const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 502,
	name: '进入探索地图界面',
	desc: '支持从突破界面、觉醒界面、御魂界面、御灵界面、探索章节界面、探索界面退出至探索地图界面',
	operator: [{
		// 突破界面
		desc: [1280, 720,
			[
				[center, 83, 167, 0xd7bfa2],
				[center, 308, 102, 0x4a3929],
				[center, 734, 94, 0x583716],
				[center, 1227, 135, 0x652b44],
				[center, 905, 78, 0x413e45]
			]
		],
		oper: [
			[center, 1280, 720, 1187, 113, 1227, 151, 1000],
		]
	}, { // 三类御魂
		desc: [1280, 720,
			[
				[left, 44, 43, 0xc2cbe3],
				[right, 1124, 47, 0xd8b188],
				[right, 1237, 47, 0xd3af84],
				[left, 231, 43, 0x583716],
				[right, 1135, 48, 0xd7b38a],
			]
		],
		oper: [
			[left, 1280, 720, 38, 23, 79, 66, 2000]
		]
	}, { // 御灵
		desc: [1280, 720,
			[
				[left, 37, 37, 0xc3cce1],
				[right, 1121, 47, 0xd7b389],
				[right, 1230, 46, 0xd3ae83],
				[right, 1106, 628, 0xe5d9c3],
				[right, 1188, 679, 0x371f16],
				[right, 1091, 663, 0x472c1f]
			]
		],
		oper: [
			[left, 1280, 720, 38, 23, 79, 66, 2000]
		]
	}, {
		// 探索章节界面
		desc: [1280, 720,
			[
				[center, 276, 129, 0x493624],
				[center, 867, 131, 0x493624],
				[center, 1043, 147, 0xeecccc],
				[center, 904, 535, 0xf4b25f],
				[right, 1121, 35, 0xd7b389],
				[right, 1222, 32, 0xd3af85]
			]
		],
		oper: [
			[center, 1280, 720, 1036, 133, 1065, 158, 500]
		]
	}, {
		// 探索界面
		desc: [1280, 720,
			[
				[left, 38, 65, 0xf1f5fb],
				[left, 36, 570, 0x983254],
				[left, 29, 672, 0x615a77],
				[right, 1227, 30, 0xd3af84],
				[right, 1129, 46, 0xcea375],
			]
		],
		oper: [
			[left, 1280, 720, 32, 45, 70, 86, 1000],
			[center, 1280, 720, 700, 386, 850, 418, 1000]
		]
	}, {
		// 组队界面
		desc: [1280, 720,
			[
				[left, 43, 37, 0xf5e6a8],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717],
				[left, 57, 565, 0xf9f9f1],
				[center, 830, 58, 0xfee0c8],
			]
		],
		oper: [
			[left, 1280, 720, 31, 20, 70, 59, 1000],
		]
	}, {
		// 永生之海组队
		desc: [1280, 720,
			[
				[left, 29, 39, 0x1f160e],
				[left, 55, 45, 0xd7c5a2],
				[left, 126, 43, 0xd7c5a2],
				[center, 654, 306, 0xeae1e2],
				[center, 633, 327, 0xfdfbf9],
				[center, 636, 309, 0x413f53],
				[center, 655, 323, 0x343244],
			]
		],
		oper: [
			[left, 1280, 720, 32, 16, 70, 58, 1000],
		]
	}, {
		// 创建队伍界面
		desc: [1280, 720,
			[
				[center, 300, 107, 0xd4bdaa],
				[center, 456, 596, 0xdf6851],
				[center, 929, 588, 0xf4b25f],
				[center, 952, 463, 0xd7bfaa],
				[left, 40, 40, 0x666047],
			]
		],
		oper: [
			[left, 1280, 720, 342, 564, 467, 619, 500],
		]
	}, {
		// 组队界面
		desc: [1280, 720,
			[
				[center, 448, 624, 0xf4b25f],
				[left, 41, 38, 0xf6e8aa],
				[center, 926, 149, 0xd3c3b6],
				[center, 621, 625, 0xcfbfae],
			]
		],
		oper: [
			[left, 1280, 720, 28, 20, 71, 62, 1000],
		]
	}]
}