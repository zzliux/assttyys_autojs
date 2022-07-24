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
				[right, 1161, 608, 0xded2bb],
				[right, 1207, 671, 0x372015]
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
				[right, 1124, 36, 0xd7b388],
				[right, 1225, 49, 0xcba375]
			]
		],
		oper: [
			[left, 1280, 720, 32, 45, 70, 86, 1000],
			[center, 1280, 720, 700, 386, 850, 418, 1000]
		]
	}]
}