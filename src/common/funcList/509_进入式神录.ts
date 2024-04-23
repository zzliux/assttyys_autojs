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
					[right, 1024, 620, 0xe0d0d0],
					[right, 1000, 650, 0xd5c3c0],
					[right, 1004, 664, 0x493a38],
					[left, 182, 37, 0xd5c4a3],
					[left, 109, 24, 0xd7c5a2],
					[left, 47, 25, 0xd7c5a2],
					[right, 1043, 616, 0xebb555],
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
					[left, 47, 31, 0xd7c5a2],
					[left, 108, 24, 0xd7c5a2],
					[left, 181, 23, 0xd6c5a4],
					[center, 930, 659, 0xe3d8d8],
					[center, 940, 679, 0x493a38],
					[right, 984, 621, 0xebb552],
				]
			],
		oper: [
			[center, 1280, 720, 922, 628, 993, 681, 1200]	//	点击_式神
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
					[left, 182, 37, 0xd5c4a3],
					[left, 108, 26, 0xd7c5a2],
					[left, 47, 28, 0xd7c5a2],
					[left, 232, 139, 0x583716],
					[left, 76, 550, 0x322219],
					[right, 1039, 648, 0xd3c3bd],
					[center, 872, 606, 0x493a38],
					[center, 727, 611, 0xdfc7ac],
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
	}, { // 超鬼王界面
		desc: [
			1280, 720,
			[
				[right, 1020, 655, 0x694a1b],
				[right, 1048, 656, 0x654719],
				[right, 1041, 663, 0xffecc5],
				[right, 1034, 676, 0xfff1d8],
				[right, 1024, 681, 0xfff3df],
			]
		],
		oper: [
			[center, 1280, 720, 1012, 649, 1055, 690, 1000],
		]
	}, { // 12 误触_情报界面
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
					thisOperator[11], thisOperator[12]]
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
