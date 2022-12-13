import type { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func998 implements InterfaceFuncOrigin {
	id = 998;
	name = '式神寄养';
	desc = '阴阳寮式神寄养页面';
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 点击式神寄养
		desc: [1280, 720,
			[[right, 1186, 74, 0xd4ccbb],
			[right, 1186, 95, 0x282420],
			[right, 1186, 136, 0xc19b6d],
			[right, 1200, 106, 0xbab19c]]
		],
		oper: [
			[right, 1280, 720, 1142, 50, 1226, 129, 1200]
		]
	},
	{
		// 已存在式神寄养
		desc: [1280, 720,
			[[right, 1147, 62, 0xf2dfb6],
			[right, 1222, 110, 0xf6e7a8],
			[right, 1082, 85, 0xaa3620],
			[right, 1080, 127, 0x666059]]
		],
		oper: [
			[right, 1280, 720, 1147, 49, 1222, 132, 1200],   // 点击正在寄养的式神
			[center, 1280, 720, 650, 488, 822, 545, 1200],    // 点击 前往查看 钮
		]
	},
	{
		// 已存在式神寄养 另一种适配
		desc: [1280, 720,
			[[right, 1147, 90, 0xf9efba],
			[right, 1222, 110, 0xf6e7a8],
			[right, 1082, 85, 0xaa3620],
			[right, 1080, 127, 0x666059]]
		],
		oper: [
			[right, 1280, 720, 1147, 49, 1222, 132, 1200],   // 点击正在寄养的式神
			[center, 1280, 720, 650, 488, 822, 545, 1200],    // 点击 前往查看 钮
		]
	}];
}
