const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 501,
	name: '探索地图打开BUFF界面',
	operator: [{
		desc: [1280, 720,
			[
				[left, 44, 59, 0xeff5fb],
				[right, 1126, 35, 0xd7b389],
				[right, 1225, 33, 0xd3af84],
				[right, 1169, 147, 0xd4cebf],
				[left, 34, 693, 0x643f2e],
				[left, 155, 695, 0x64402f],
				[left, 254, 690, 0x653d2c]
			]
		],
		oper: [
			[center, 1280, 720, 428, 24, 453, 65, 2000],
		]
	}]
}