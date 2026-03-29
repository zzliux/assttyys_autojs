import {
	IFuncOrigin,
	IFuncOperatorOrigin,
	IFuncOperator,
} from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1099 implements IFuncOrigin {
	id = 1099;
	name = '每周契灵商店';
	operator: IFuncOperatorOrigin[] = [{ // 0 契灵_商店
		desc: [
			1280, 720,
			[
				[left, 265, 656, 0x5d4532],
				[left, 269, 656, 0xf5e2da],
				[left, 279, 656, 0xf9e6e2],
				[left, 308, 660, 0xfce6e4],
				[left, 316, 655, 0xf7dfdd],
				[left, 286, 641, 0xf3f3d6],
			]
		],
		oper: [
			[center, 1280, 720, 268, 631, 316, 674, 1000],
		]
	}, { // 1 商店御魂
		desc: [
			1280, 720,
			[
				[left, 108, 432, 0x9b3b1e],
				[left, 134, 433, 0xf6f1de],
				[left, 154, 434, 0xf7f2df],
				[left, 177, 432, 0xf3eedc],
				[left, 198, 432, 0xf3eedb],
				[left, 217, 432, 0xa74221],
			]
		],
		oper: [
			[center, 1280, 720, 207, 482, 280, 504, 1000],
		]
	}, { // 2 商店御魂已全部兑换_第四位
		desc: [
			1280, 720,
			[
				[right, 980, 437, 0x35140d],
				[right, 1015, 435, 0x625f57],
				[right, 1036, 435, 0x928f84],
				[right, 1059, 436, 0x8f8c81],
				[right, 1080, 435, 0x89867b],
			]
		]
	}, { // 3 购买确认_二行字
		desc: [1280, 720,
			[
				[center, 578, 554, 0xf3b25e],
				[center, 578, 575, 0xf3b25e],
				[right, 702, 555, 0xf3b25e],
				[right, 702, 577, 0xf3b25e],
				[right, 697, 467, 0xffdda4],
				[right, 785, 471, 0xffdea4],
			]
		],
		oper: [
			[center, 1280, 720, 766, 449, 804, 487, 1000],
			[center, 1280, 720, 567, 549, 716, 580, 1000],
		]
	}, { // 4 商店御魂已全部兑换_第一位
		desc: [1280, 720,
			[
				[left, 108, 434, 0x32130a],
				[left, 134, 432, 0x928f85],
				[left, 144, 429, 0x949186],
				[left, 177, 432, 0x918e84],
				[left, 198, 432, 0x918e83],
				[left, 215, 433, 0x38160b],
			]
		]
	}, { // 5 商店御魂已全部兑换_第三位
		desc: [1280, 720,
			[
				[right, 689, 439, 0x35150d],
				[right, 715, 436, 0x8e8b81],
				[right, 724, 431, 0x949186],
				[right, 757, 434, 0x928f84],
				[right, 778, 435, 0x8e8b80],
				[right, 810, 441, 0x34130d],
			]
		],
	}, { // 6 探索地图进入契灵之境
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 940, 648, 996, 683, 2500],
		]
	}, { // 7 庭院进入探索
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 658, 127, 697, 170, 1000],
		]
	}, { // 8 关闭
		oper: [
			[center, 1280, 720, 608, 680, 734, 711, 1000],
		]
	},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.qiling_shop) {
			if (thisScript.oper({
				id: 1099,
				name: '契灵兑换',
				operator: [thisOperator[0], thisOperator[1], thisOperator[6], thisOperator[7]]
			})) {
				return true;
			}
			let curCnt = 0;
			const maxCount = 2;
			while (thisScript.oper({
				name: '御魂兑换',
				operator: [thisOperator[3]]
			})) {
				curCnt++;
				thisScript.keepScreen(false);
				if (curCnt >= maxCount) {
					thisScript.myToast('领取完毕');
					thisScript.oper({
						name: '御魂关闭',
						operator: [thisOperator[8]]
					})
					return true;
				}
				sleep(1000);
			}
			if (thisScript.oper({
				id: 1099,
				name: '契灵兑换完成',
				operator: [thisOperator[2], thisOperator[4], thisOperator[5]]
			})) {
				thisScript.doPush(thisScript, { text: '兑换完毕', before() { thisScript.myToast('兑换完毕'); } });
				thisScript.global.qiling_shop = false;
				return true;
			}
		}
	}
}
