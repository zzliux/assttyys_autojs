import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func320 implements IFuncOrigin {
	id = 320;
	name = '百鬼棋局掉段';
	desc = '';
	operator: IFuncOperatorOrigin[] = [{ //  0 百鬼棋局 战
		desc: [1280, 720,
			[
				[right, 1154, 633, 0xddd1bf],
				[right, 1231, 628, 0xe1d5c5],
				[right, 1189, 593, 0xe1d5c5],
				[right, 1173, 634, 0x3c2b26],
				[right, 1189, 669, 0xdfd3c3],
			]
		],
		oper: [
			[center, 1280, 720, 1151, 607, 1243, 668, 1000],
		]
	}, { // 1 百鬼棋局 退出
		desc: [1280, 720,
			[
				[left, 236, 20, 0xdab88e],
				[left, 164, 37, 0xcea375],
				[left, 100, 40, 0xcb9e6d],
				[left, 34, 39, 0xcfa67b],
			]
		],
		oper: [
			[center, 1280, 720, 23, 21, 54, 50, 1000],
			[center, 1280, 720, 685, 413, 831, 449, 1000],
		]
	}, { // 2 百鬼棋局 分享
		desc: [1280, 720,
			[
				[right, 1181, 590, 0xf0e3a5],
				[right, 1173, 612, 0xe4d092],
				[right, 1184, 637, 0x312419],
				[right, 1214, 643, 0xd1ae5a],
				[right, 1210, 602, 0x38281a],
			]
		],
		oper: [
			[center, 1280, 720, 1176, 361, 1243, 474, 1000],
			[center, 1280, 720, 1176, 361, 1243, 474, 1000],
		]
	}, { // 3 百鬼棋局 再来一局
		desc: [1280, 720,
			[
				[right, 1076, 654, 0xf3b25e],
				[right, 1223, 653, 0xf3b25e],
				[right, 1223, 688, 0xf3b25e],
				[right, 1079, 687, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 1072, 648, 1234, 690, 1000],
		]
	}, { // 4 返回大厅
		desc: [1280, 720,
			[
				[center, 569, 636, 0xffc879],
				[center, 573, 656, 0xfdc36e],
				[right, 717, 635, 0xffcd83],
				[right, 712, 662, 0xffdfaf],
				[right, 699, 650, 0xffdfab],
			]
		],
		oper: [
			[center, 1280, 720, 568, 634, 716, 666, 1000],
		]
	},
	]
}