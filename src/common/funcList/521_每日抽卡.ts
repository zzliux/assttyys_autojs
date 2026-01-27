
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func521 implements IFuncOrigin {
	id = 521;
	name = '每日抽卡';
	desc = '抽取免费一抽';
	operator: IFuncOperatorOrigin[] = [{ // 0 召唤
		desc: [
			1280, 720,
			[
				[left, 58, 21, 0xefd590],
				[left, 48, 30, 0xf6e6a8],
				[left, 60, 41, 0xedcf8b],
				[left, 177, 36, 0xb18956],
				[left, 200, 17, 0x2a2534],
				[left, 265, 31, 0x593716],
				[left, 179, 17, 0xb28956],
				[left, 177, 36, 0xb18956],
			]
		],
		oper: [
			[center, 1280, 720, 33, 12, 71, 44, 1000],
		]
	}, { // 1 星期二集结蓝票
		desc: [
			1280, 720,
			[
				[left, 286, 451, 0x89b9d2],
				[left, 290, 452, 0x89b9d0],
				[left, 279, 471, 0x56add1],
				[left, 288, 471, 0x57acc2],
				[left, 308, 448, 0xeee4d7],
			]
		],
		oper: [
			[center, 1280, 720, 209, 502, 266, 556, 1000],
		]
	}, { // 2 跳对话
		desc: [
			1280, 720,
			[
				[center, 629, 556, 0xd9bf89],
				[center, 631, 556, 0xd9bf89],
				[center, 637, 551, 0xd7c18b],
				[center, 637, 548, 0xe1cba3],
				[center, 643, 556, 0xdbbe8a],
				[center, 645, 556, 0xdabc87],
				[center, 637, 563, 0xdbc18e],
			]
		],
		oper: [
			[center, 1280, 720, 947, 433, 978, 461, 1000],
		]
	}, { // 3 试炼挑战
		desc: [
			1280, 720,
			[
				[right, 1172, 662, 0x271c1b],
				[right, 1177, 661, 0x2d2023],
				[right, 1174, 657, 0x231b1b],
				[right, 1170, 652, 0x4c2c24],
				[right, 1095, 581, 0xb83821],
				[right, 1156, 581, 0xba3e1b],
			]
		],
		oper: [
			[center, 1280, 720, 1073, 537, 1172, 614, 1000],
		]
	}, { // 4 小白提示框
		desc: [
			1280, 720,
			[
				[center, 385, 272, 0x565352],
				[center, 483, 200, 0x464342],
				[center, 748, 185, 0x3e3c3b],
				[center, 903, 366, 0x705946],
				[left, 298, 382, 0xcf3448],
				[center, 418, 355, 0xf6f3e6],
			]
		],
		oper: [
			[center, 1280, 720, 603, 582, 688, 638, 1000],
		]
	}, { // 5 试炼挑战完毕
		desc: [
			1280, 720,
			[
				[right, 1167, 667, 0xd73022],
				[right, 1175, 660, 0xe7b889],
				[right, 1181, 656, 0xd83728],
				[right, 1178, 650, 0xce2e1b],
				[right, 1179, 667, 0xd83528],
			]
		],
		oper: [
			[center, 1280, 720, 28, 17, 68, 56, 1000],
		]
	}, { // 6 免费1/1
		desc: [
			1280, 720,
			[
				[center, 588, 696, 0xe3decd],
				[center, 592, 698, 0xf4efdc],
				[center, 612, 696, 0xefead8],
				[center, 616, 693, 0xe7e2d0],
				[center, 643, 696, 0xf6f1de],
				[center, 654, 695, 0xdcd7c6],
				[center, 664, 696, 0xf5f0dd],
			]
		],
		oper: [
			[center, 1280, 720, 604, 616, 654, 655, 1000],
		]
	}, { // 7 抽卡滑动
		desc: [
			1280, 720,
			[
				[center, 435, 608, 0x87ccee],
				[center, 603, 662, 0xcfcdcb],
				[center, 633, 659, 0xecebeb],
				[center, 679, 663, 0xdad9d7],
				[center, 691, 663, 0xc6c3c1],
				[center, 704, 663, 0xe1e0df],
				[center, 852, 625, 0x80c3e7],
			]
		],
		oper: [
			[center, 1280, 720, 458, 431, 505, 474, 1000],
			[center, 1280, 720, 781, 148, 825, 189, 1000],
		]
	}, { // 8 抽卡确认
		desc: [
			1280, 720,
			[
				[center, 430, 628, 0xf3b25e],
				[center, 570, 628, 0xf3b25e],
				[center, 572, 660, 0xf3b25e],
				[center, 435, 658, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 426, 625, 584, 672, 1000],
		]
	}, { // 9 抽卡头像框弹窗关闭
		desc: [
			1280, 720,
			[
				[left, 60, 19, 0x625539],
				[left, 48, 31, 0x665f44],
				[left, 138, 17, 0x493823],
				[left, 177, 37, 0x493823],
				[left, 223, 32, 0x251709],
			]
		],
		oper: [
			[center, 1280, 720, 311, 12, 397, 57, 1000],
		]
	}, { // 10 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1200]
		]

	}, { // 11 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 1080, 184, 1133, 234, 1000], //  庭院点击召唤
		],
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.day_chouKa) {
			if (thisScript.oper({
				id: 518,
				name: '检测_抽卡',
				operator: [thisOperator[2], thisOperator[3], thisOperator[4], thisOperator[5]
					, thisOperator[6], thisOperator[8], thisOperator[9], thisOperator[10]
					, thisOperator[11]],
			})) {
				return true;
			}
			let curCnt = 0;
			const maxCount = 3;
			while (thisScript.oper({
				name: '检测_抽卡界面',
				operator: [{ desc: thisOperator[0].desc }]
			})) {
				if (thisScript.oper({
					id: 518,
					name: '检测_是否有集结',
					operator: [thisOperator[1]],
				})) {
					return true;
				}
				curCnt++;
				thisScript.keepScreen(false);
				if (curCnt >= maxCount) {
					thisScript.global.day_chouKa = false;
					return thisScript.oper({
						name: '返回庭院',
						operator: [{ oper: thisOperator[0].oper }]
					});
				}
				sleep(2000);
			}
			if (thisScript.oper({
				id: 518,
				name: '检测_抽卡滑动',
				operator: [{ desc: thisOperator[7].desc }],
			})) {
				thisScript.regionSwipe(thisOperator[7].oper[0], thisOperator[7].oper[1], [1000, 1300], 200);
				return true;
			}
		}
		return false;
	}
}
