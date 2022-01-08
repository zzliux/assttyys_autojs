const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 20,
	name: '百鬼夜行_随机散豆',
	desc: '在百鬼夜行的界面，随机自由散豆',
	operator: [{
		desc: [1280,720,
			[[left,45,42,0xf5e5a3],
			[center,242,657,0xf3b969],
			[center,640,6,0x261c29],
			[center,598,31,0x201723],
			[center,458,583,0x4f1e2c]]
		],
		oper: [
			[center, 1280, 720, 90,270, 1252,528, 500]
		]
	}]
}
