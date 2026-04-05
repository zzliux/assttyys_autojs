import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1108 implements IFuncOrigin {
	id = 1108;
	name = '档期式神领取蓝票';
	desc = '集结时领取六张蓝票,式神上线后购买祈愿福礼(推荐星期二运行)';
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
	}, { // 6 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1200]
		]

	}, { // 7 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 1080, 184, 1133, 234, 1000], //  庭院点击召唤
		],
	}, { // 8 完成弹窗
		desc: [1280, 720,
			[
				[right, 1047, 160, 0xe8d3cf],
				[right, 1062, 162, 0xe8d4cf],
				[right, 1054, 168, 0xe8d3cf],
				[right, 1050, 174, 0xecd0cd],
				[right, 1063, 177, 0xe8d6d1],
			]
		],
		oper: [
			[center, 1280, 720, 1038, 155, 1072, 182, 1000],
		]
	}, { // 9 祈愿福礼
		desc: [1280, 720,
			[
				[left, 36, 320, 0x893c35],
				[left, 60, 318, 0x893c35],
				[left, 89, 290, 0xb70f0f],
				[left, 83, 350, 0x893c35],
				[left, 81, 390, 0x762f29],
			]
		],
		oper: [
			[center, 1280, 720, 44, 297, 74, 400, 1000],
		]
	}, { // 10 祈愿福礼免费
		desc: [1280, 720,
			[
				[left, 298, 337, 0xddc7b4],
				[center, 500, 341, 0xd6bda8],
				[center, 325, 491, 0xc2b6ad],
				[center, 395, 495, 0xc4b9b1],
				[center, 438, 611, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 344, 599, 460, 627, 1000],
		]
	}, { // 11 第一天
		desc: [1280, 720,
			[
				[left, 308, 517, 0xc9a88b],
				[left, 319, 518, 0xeb3c26],
				[center, 335, 501, 0xe7c677],
				[center, 342, 507, 0xebd5ac],
			]
		],
		oper: [
			[center, 1280, 720, 303, 498, 342, 531, 1000],
		]
	}, { // 12 第二天
		desc: [1280, 720,
			[
				[center, 383, 517, 0xcdad90],
				[center, 396, 520, 0xe93218],
				[center, 399, 517, 0xed4e36],
				[center, 418, 507, 0xebd5ad],
			]
		],
		oper: [
			[center, 1280, 720, 380, 498, 413, 533, 1000],
		]
	}, { // 13 第三天
		desc: [1280, 720,
			[
				[center, 454, 518, 0xc6a78b],
				[center, 466, 520, 0xe92b15],
				[center, 471, 515, 0xef5340],
				[center, 482, 502, 0x88b7cf],
			]
		],
		oper: [
			[center, 1280, 720, 455, 495, 493, 536, 1000],
		]
	}, { // 14 购买确认
		desc: [1280, 720,
			[
				[center, 434, 129, 0x93501f],
				[right, 907, 135, 0x914820],
				[center, 433, 533, 0xd3bba1],
				[center, 587, 536, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 569, 524, 712, 553, 1000],
		]
	}, { // 15 购买完成
		desc: [1280, 720,
			[
				[left, 293, 508, 0xecba53],
				[center, 368, 508, 0xf3bf55],
				[center, 443, 509, 0xeebb54],
				[left, 42, 38, 0xf6e9ab],
			]
		],
		oper: [
			[center, 1280, 720, 30, 22, 70, 53, 1000],
		]
	},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.day_chouKa) {
			if (thisScript.oper({
				id: 518,
				name: '检测_抽卡',
				operator: [thisOperator[2], thisOperator[3], thisOperator[4], thisOperator[5]
					, thisOperator[6], thisOperator[7], thisOperator[8]],
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 518,
				name: '检测_祈愿福礼',
				operator: [thisOperator[9], thisOperator[10], thisOperator[11], thisOperator[12]
					, thisOperator[13], thisOperator[14], thisOperator[15]]
			})) {
				return true;
			}
			let curCnt = 0;
			const maxCount = 3;
			while (thisScript.oper({
				id: 518,
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
						id: 518,
						name: '返回庭院',
						operator: [{ oper: thisOperator[0].oper }]
					});
				}
				sleep(2000);
			}
		}
		return false;
	}
}
