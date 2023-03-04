import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func048 implements InterfaceFuncOrigin {
	id = 48;
	name = '悬赏_杂项';
	operator: InterfaceFuncOperatorOrigin[] = [{
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
		desc: [1280, 720,
			[
				[center, 379, 112, 0xf2edca],
				[center, 372, 131, 0xe4cd9c],
				[center, 371, 183, 0xc9a763],
				[center, 531, 130, 0xe3caa1],
				[center, 526, 180, 0xd3a863],
				[center, 803, 150, 0xdbba80],
				[center, 658, 156, 0xdcba77],
				[center, 894, 186, 0xcda863],
				[center, 797, 177, 0xd3a965]
			]
		],
		oper: [
			[left, 1280, 720, 452, 605, 870, 683, 2000],
		]
	}, {
		// 处于秘闻副本列表时点击返回按钮
		desc: [1280, 720,
			[
				[left, 40, 40, 0xc2cbe0],
				[left, 269, 45, 0x593716],
				[left, 114, 32, 0xcdc7b9],
				[left, 110, 59, 0xcdc7ba],
				[right, 1163, 28, 0xd3b38c],
				[right, 1193, 602, 0xe3d8c2],
				[right, 1139, 639, 0xa88867],
				[right, 1260, 637, 0x946931],
				[right, 1196, 694, 0xa98866]
			]
		],
		oper: [
			[left, 1280, 720, 36, 23, 67, 62, 2000],
		]
	}, {
		// 处于秘闻副本列表时点击返回按钮 旧
		desc: [1280, 720,
			[
				[left, 114, 34, 0xc9c3b5],
				[left, 110, 41, 0xded9cb],
				[left, 110, 59, 0xccc7ba],
				[left, 143, 34, 0xc7c2b4],
				[left, 176, 34, 0xe2dccc],
				[left, 226, 52, 0xd6d0c1],
				[left, 259, 44, 0xddae48]
			]
		],
		oper: [
			[left, 1280, 720, 36, 23, 67, 62, 2000],
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
	}]
}