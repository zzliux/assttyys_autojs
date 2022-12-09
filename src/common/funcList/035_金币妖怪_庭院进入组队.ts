import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func035 implements InterfaceFuncOrigin {
	id = 35;
	name = '金币妖怪_庭院进入组队 ';
	desc = '从庭院进入组队界面（请提前手动打开buff）';
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 庭院未打开菜单
		desc: [1280, 720,
			[[right, 1211, 606, 0x885f46],
			[right, 1205, 624, 0x987777],
			[right, 1208, 646, 0xaf4949],
			[right, 1175, 680, 0xb08e7d]]
		],
		oper: [
			[left, 1280, 720, 0, 0, 32, 63, 1000]
		]
	}, { // 庭院已打开菜单
		desc: [1280, 720,
			[
				[center, 560, 608, 0xbc3433],
				[center, 542, 639, 0x7b1515],
				[center, 575, 646, 0xc1b8b0],
				[center, 590, 638, 0xb07970]
			]
		],
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, {
		// 庭院已打开菜单，另外一种图标
		desc: [1280, 720,
			[
				[right, 1223, 662, 0xdbcbc7],
				[right, 1155, 41, 0xd7b188],
				[center, 451, 631, 0xe8e4e1],
				[center, 673, 651, 0xdb8b3f],
			]
		],
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}]
}