import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func048 implements IFuncOrigin {
	id = 48;
	name = '悬赏_杂项';
	operator: IFuncOperatorOrigin[] = [{
		// 秘闻对话点击
		desc: [1280, 720,
			[
				[center, 500, 715, 0x000000],
				[center, 612, 715, 0x000000],
				[center, 773, 715, 0x000000],
				[center, 830, 716, 0x000000]
			]
		],
		oper: [
			[left, 1280, 720, 529, 688, 744, 706, 2000],
		]
	}, {
		// 秘闻挑战开启
		desc: '秘闻挑战开启',
		oper: [
			[left, 1280, 720, 452, 605, 870, 683, 2000],
		]
	}, {
		// 已适配66 处于秘闻挑战时点击返回按钮
		desc: [
			1280, 720,
			[
				[left, 39, 49, 0xc3cce1],
				[left, 49, 37, 0xc2cbe0],
				[left, 159, 64, 0x000000],
				[left, 253, 48, 0x593716],
				[left, 261, 40, 0xe1be54],
				[right, 1160, 558, 0xe3d8c1],
				[right, 1190, 607, 0xe4dac3],
				[right, 1201, 642, 0x372014],
				[left, 199, 34, 0x060506],
			]
		],
		oper: [
			[center, 1280, 720, 24, 19, 86, 76, 1000],
		]
	}, {
		// 已适配66 处于秘闻副本列表时点击返回按钮
		desc: [
			1280, 720,
			[
				[left, 39, 49, 0xc3cce1],
				[left, 49, 37, 0xc2cbe0],
				[left, 159, 64, 0x000000],
				[left, 253, 48, 0x593716],
				[left, 261, 40, 0xe1be54],
				[right, 1190, 607, 0xe4dac3],
				[left, 199, 34, 0x060506],
				[right, 1186, 609, 0xe4dac4],
				[right, 1205, 664, 0xe2d7c1],
			]
		],
		oper: [
			[center, 1280, 720, 24, 19, 86, 76, 1000],
		]
	}, {
		// 关闭宝箱奖励弹窗
		desc: [1280, 720,
			[
				[center, 323, 235, 0x604023],
				[center, 572, 228, 0xf1e4b3],
				[center, 960, 235, 0x614123],
				[center, 942, 266, 0x655f60],
				[center, 677, 263, 0x473424],
				[center, 660, 242, 0xe6d7a0],
				[center, 491, 266, 0x8a6937],
				[center, 786, 260, 0x9b7c45],
				[center, 941, 334, 0xbeb0ac],
				[center, 600, 194, 0xfcf3cf],
				[center, 669, 197, 0xfcf3cf]
			]
		],
		oper: [
			[center, 1280, 720, 443, 494, 788, 632, 1000]
		]
	}, {
		// 关闭宝箱奖励弹窗 旧
		desc: [1280, 720,
			[
				[center, 496, 199, 0xf4e4af],
				[center, 576, 198, 0xfbf3cf],
				[center, 525, 230, 0xe1d090],
				[center, 489, 266, 0x88602d],
				[center, 783, 262, 0x977542],
				[center, 781, 218, 0xeedeac],
				[center, 678, 238, 0xecdba8],
				[center, 337, 255, 0x645c5c],
				[center, 345, 279, 0x79716d],
				[center, 342, 330, 0xb8aba8],
				[center, 332, 342, 0x706057],
				[center, 957, 233, 0x624024],
				[center, 946, 252, 0x505050],
				[center, 936, 276, 0x776f6d],
				[center, 950, 347, 0x716058],
				[center, 928, 327, 0x69594b],
				[center, 921, 377, 0x89683e]
			]
		],
		oper: [
			[center, 1280, 720, 443, 494, 788, 632, 1000]
		]
	}, {
		// 关闭秘闻刷新记录提示
		desc: [1280, 720,
			[
				[center, 526, 311, 0xeeeecc],
				[center, 513, 355, 0xab8a5a],
				[center, 563, 364, 0xb1985c],
				[center, 565, 311, 0xf9ecc7],
				[center, 730, 308, 0xf3f3c9],
				[center, 750, 309, 0xf9f1c8],
				[center, 722, 360, 0xaf9966],
				[center, 763, 360, 0xb79d62],
				[center, 740, 366, 0xae9659],
				[center, 838, 324, 0xeedd99],
				[center, 825, 344, 0xead793],
				[center, 868, 312, 0xcb9958],
				[center, 914, 357, 0xb27f4c],
				[center, 867, 379, 0x392920]
			]
		],
		oper: [
			[center, 1280, 720, 326, 509, 1169, 692, 1000]
		]
	}]
}