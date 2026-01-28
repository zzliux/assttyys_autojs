import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func509 implements IFuncOrigin {
	id = 509;
	name = '进入式神录';
	desc = '从不同页面进入式神录';
	operator: IFuncOperatorOrigin[] = [{   // 庭院_式神录
		desc: [
			1280, 720,
			[
				[right, 1217, 620, 0xcca56e],
				[right, 1222, 641, 0xddcdc7],
				[right, 1221, 663, 0xdac9c4],
				[right, 1219, 695, 0xb14c43],
				[right, 1222, 706, 0x432118],
			]
		],
		oper: [
			[right, 1280, 720, 1106, 623, 1153, 653, 1200]	// 点击式神录
		]
	}, {
		// 庭院_式神录，另外一种图标
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1106, 623, 1153, 653, 1200]	// 点击式神录
		]
	}, {
		// 庭院已打开菜单，另另外一种图标
		desc: '庭院已打开菜单_另另外一种图标',
		oper: [
			[right, 1280, 720, 1106, 623, 1153, 653, 1200]	// 点击式神录
		]
	},
	{   // 检测是否为式神录
		desc: [
			1280, 720,
			[
				[left, 34, 27, 0xf7ebae],
				[left, 231, 10, 0x302118],
				[left, 164, 38, 0x48332c],
				[left, 252, 90, 0x594641],
				[left, 307, 94, 0x604c48],
				[center, 405, 97, 0x5c4a48],
				[center, 483, 98, 0x5c4946],
				[center, 493, 687, 0x43322a],
				[left, 29, 673, 0x413028],
			]
		]
	},
	{
		desc:	//	道馆
			[
				1280, 720,
				[
					[right, 997, 626, 0xd4c4bf],
					[right, 1031, 619, 0xe0d8d4],
					[right, 1048, 618, 0xebb454],
					[left, 46, 34, 0xd6c4a1],
					[left, 175, 25, 0xd6c4a1],
				]
			],
		oper: [
			[right, 1280, 720, 995, 601, 1056, 663, 1200]	//	点击_式神
		]
	},
	{
		desc: //	狩猎
			[
				1280, 720,
				[
					[right, 1060, 650, 0xfff3f3],
					[center, 885, 661, 0xfff4f5],
					[left, 259, 35, 0x2a2937],
					[left, 175, 589, 0x684b2c],
					[left, 33, 592, 0x8a6137],
				]
			],
		oper: [
			[center, 1280, 720, 1031, 633, 1080, 685, 1000],	//	点击_式神
		]
	},
	{
		desc:	//	检测_阴门
			[
				1280, 720,
				[
					[left, 125, 56, 0x493624],
					[right, 1124, 56, 0x493624],
					[right, 1208, 76, 0x632942],
					[right, 1194, 397, 0x180a28],
					[right, 1137, 634, 0xc1b7ac],
					[center, 330, 615, 0xf4b25f],
					[center, 454, 630, 0xf4b25f],
					[left, 130, 646, 0x9a8f83],
				]
			],
		oper: [
			[left, 1280, 720, 145, 601, 190, 646, 1200]	//	点击式神按钮
		]
	},
	{
		desc: //    检测_狭间
			[
				1280, 720,
				[
					[right, 1165, 597, 0xd5bfc2],
					[right, 1155, 659, 0xd9c3c5],
					[right, 1168, 491, 0xddd3c4],
					[center, 476, 412, 0x53170f],
					[right, 1016, 111, 0xe8d4cf],
					[center, 547, 582, 0x840517],
				]
			],
		oper: [
			[right, 1280, 720, 1135, 456, 1182, 498, 1200]    //  点击式神按钮
		]
	},
	{	//	检测_首领
		desc:
			[
				1280, 720,
				[
					[center, 872, 606, 0x473a39],
					[center, 727, 611, 0xdfc7ac],
					[left, 32, 41, 0xd6c5a1],
					[right, 1022, 609, 0xf2f1f1],
					[right, 1031, 646, 0xe9e7e5],
					[right, 1064, 612, 0xebb454],
					[right, 752, 588, 0x170b2a],
				]
			],
		oper: [
			[right, 1280, 720, 1008, 600, 1081, 671, 1200]	//	点击式神按钮
		]
	}, { // 庭院未打开菜单
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1000]
		]
	}, { // 突破界面
		desc: '突破界面',
		oper: [
			// [right, 1280, 720, 1207, 617, 1245, 649, 1200]	//	点击式神按钮
		]
	}, { // 11 误触_情报界面
		desc: [
			1280, 720,
			[
				[left, 42, 273, 0x1d0f0f],
				[left, 40, 150, 0x664834],
				[left, 44, 49, 0xf0f5fb],
				[left, 63, 150, 0x6c4d37],
			]
		],
		oper: [
			[center, 1280, 720, 32, 34, 73, 65, 1000],
		]
	}, { // 12 探索地图
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 32, 34, 76, 81, 1000],
		]
	}, { // 13 秘闻
		desc: [1280, 720,
			[
				[right, 1210, 460, 0x3f2412],
				[right, 1226, 470, 0xe4d5b0],
				[right, 1240, 461, 0x40200f],
				[right, 1211, 487, 0xdabf94],
				[right, 1238, 486, 0xdec79e],
				[right, 1225, 457, 0x3f2312],
			]
		],
		oper: [
			[center, 1280, 720, 1209, 461, 1244, 491, 1000],
		]
	}, { // 14 真蛇
		desc: [
			1280, 720,
			[
				[center, 848, 545, 0x381f0f],
				[center, 856, 536, 0x3f2412],
				[center, 873, 547, 0xe5d6b2],
				[center, 893, 547, 0x361e0e],
				[center, 883, 564, 0xdac298],
				[center, 858, 563, 0xdabf94],
			]
		],
		oper: [
			[center, 1280, 720, 843, 534, 894, 570, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.change_shikigami_flag) {
			if (thisScript.oper({
				name: '是否为式神录',
				operator: [thisOperator[3]]
			})) {
				thisScript.global.change_shikigami_flag = false;
			}
			if (thisScript.oper({
				name: '庭院进入式神录',
				operator: [
					thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[4],
					thisOperator[5], thisOperator[6], thisOperator[7], thisOperator[9],
					thisOperator[11], thisOperator[12], thisOperator[13], thisOperator[14]]
			})) {
				sleep(1000);
				return true;
			}
		} else {
			return false;
		}
		return false;
	}
}
