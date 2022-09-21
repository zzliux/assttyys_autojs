const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 501,
	name: '打开BUFF界面',
	desc: '支持从探索地图、庭院打开buff界面',
	operator: [{
		// 探索地图打开buff界面
		desc: [1280, 720,
			[
				[left, 47, 62, 0xedf4fb],
				[right, 1169, 147, 0xd4cebf],
				[left, 28, 676, 0x5d3a28],
				[left, 159, 700, 0x643d2a],
				[left, 463, 706, 0x6f422c],
				[right, 1228, 30, 0xd3af84],
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
				[left, 420, 33, 0xf8ce7b],
				[left, 419, 87, 0xf48255],
				[left, 400, 59, 0xf7b069],
				[left, 440, 63, 0xf7aa67],
				[right, 1155, 36, 0xd7b28a],
				[right, 1236, 51, 0xcaa073],
			]
		],
		oper: [
			[center, 1280, 720, 397, 39, 441, 84, 1500]
		]
	}]
}