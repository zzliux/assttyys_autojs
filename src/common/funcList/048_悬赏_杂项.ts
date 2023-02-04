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
				[center, 422, 715, 0x000000],
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
	}]
}