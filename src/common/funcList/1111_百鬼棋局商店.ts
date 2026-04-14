import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1111 implements IFuncOrigin {
	id = 1111;
	name = '百鬼棋局商店';
	operator: IFuncOperatorOrigin[] = [{ // 0 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
	}, { // 1 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
	}, { //	2 页面是否为庭院(菜单已展开)另一种图标 御祝图标 只支持默认庭院皮肤与默认装饰
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
	}, { // 3 庭院已打开菜单，另另外一种图标
		desc: '庭院已打开菜单_另另外一种图标',
	}, { // 4 检测_町中
		desc: [
			1280, 720,
			[
				[right, 1053, 441, 0x8c8888],
				[right, 1096, 229, 0xa8a196],
				[right, 1040, 239, 0xb6b0bb],
				[right, 1220, 48, 0xcba375],
				[right, 1155, 38, 0xd7b28a],
			]
		],
		oper: [
			[center, 1280, 720, 205, 159, 235, 198, 1000],	//	点击鼬乐园灯笼
		]
	}, { // 5 商店
		desc: [1280, 720,
			[
				[left, 51, 645, 0xffefb5],
				[left, 92, 661, 0xf7e3ad],
				[left, 67, 673, 0xe7cf9c],
				[left, 69, 635, 0xfff3b9],
				[left, 70, 654, 0xf1e2ad],
			]
		],
		oper: [
			[center, 1280, 720, 52, 642, 87, 677, 1000],
		]
	}, { // 6 礼盒
		desc: [1280, 720,
			[
				[right, 752, 203, 0xbd866b],
				[right, 748, 251, 0xc6a286],
				[right, 874, 190, 0xbb896f],
				[right, 873, 241, 0xc0997e],
				[right, 868, 293, 0xc6a189],
			]
		],
		oper: [
			[center, 1280, 720, 770, 262, 849, 300, 1000],
		]
	}, { // 7 购买确认_一行字
		desc: [
			1280, 720,
			[
				[center, 566, 535, 0xf3b25e],
				[center, 570, 566, 0xf3b25e],
				[right, 708, 533, 0xf3b25e],
				[right, 710, 566, 0xf3b25e],
				[right, 785, 443, 0xfedca3],
				[right, 797, 439, 0x3f2d2b],
			]
		],
		oper: [
			[center, 1280, 720, 762, 438, 803, 473, 1000],
			[center, 1280, 720, 560, 528, 717, 573, 1000],
			[center, 1280, 720, 1042, 176, 1187, 585, 500],
		]
	}, { // 8 购买完成
		desc: [1280, 720,
			[
				[right, 752, 212, 0x61493b],
				[right, 971, 212, 0x5e4739],
				[right, 861, 215, 0x604839],
				[right, 868, 448, 0x614a3b],
				[right, 1082, 211, 0x5e4738],
			]
		],
		oper: [
			[center, 1280, 720, 1126, 79, 1161, 105, 1000],
		]
	},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.chessShop) {
			if (thisScript.oper({
				name: '庭院判断',
				operator: [{ desc: thisOperator[0].desc }, { desc: thisOperator[1].desc }
					, { desc: thisOperator[2].desc }, { desc: thisOperator[3].desc }]
			})) {
				const point = thisScript.findMultiColor('庭院_町中竖牌');
				if (point) {
					const oper = [
						[point.x, point.y, point.x + 10, point.y + 10, 1000]
					];
					thisScript.regionClick(oper);
					return true;
				}
			}
			if (thisScript.oper({
				name: '杂项',
				operator: [thisOperator[4], thisOperator[5], thisOperator[6], thisOperator[7]]
			})) {
				return true;
			}
		}
		if (thisScript.oper({
			name: '杂项',
			operator: [thisOperator[8]]
		})) {
			thisScript.global.chessShop = false;
			return true;
		}
		return false;
	}
}