import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func320 implements IFuncOrigin {
	id = 320;
	name = '百鬼棋局挂机';
	desc = '';
	config = [{
		desc: '配置',
		config: [{
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '返回庭院',
		}],
	}];
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
	}, { // 5 百鬼棋局
		desc: [1280, 720,
			[
				[left, 189, 159, 0xfffbc6],
				[left, 240, 266, 0xfff7ba],
				[center, 325, 162, 0x344a31],
				[center, 323, 311, 0x3f986a],
				[center, 340, 224, 0x295d39],
			]
		],
		oper: [
			[center, 1280, 720, 177, 172, 251, 243, 1000],
		]
	}, { //  6 百鬼棋局 战
		desc: [1280, 720,
			[
				[right, 1154, 633, 0xddd1bf],
				[right, 1231, 628, 0xe1d5c5],
				[right, 1189, 593, 0xe1d5c5],
				[right, 1173, 634, 0x3c2b26],
				[right, 1189, 669, 0xdfd3c3],
			]
		],
		oper: [
			[center, 1280, 720, 1151, 607, 1243, 668, 1000],
		]
	}, { // 7 百鬼棋局 退出
		desc: [1280, 720,
			[
				[left, 236, 20, 0xdab88e],
				[left, 164, 37, 0xcea375],
				[left, 100, 40, 0xcb9e6d],
				[left, 34, 39, 0xcfa67b],
			]
		],
		oper: [
			[center, 1280, 720, 23, 21, 54, 50, 1000],
			[center, 1280, 720, 685, 413, 831, 449, 1000],
		]
	}, { // 8 百鬼棋局 分享
		desc: [1280, 720,
			[
				[right, 1181, 590, 0xf0e3a5],
				[right, 1173, 612, 0xe4d092],
				[right, 1184, 637, 0x312419],
				[right, 1214, 643, 0xd1ae5a],
				[right, 1210, 602, 0x38281a],
			]
		],
		oper: [
			[center, 1280, 720, 1176, 361, 1243, 474, 1000],
			[center, 1280, 720, 1176, 361, 1243, 474, 1000],
		]
	}, { // 9 百鬼棋局 左下角返回大厅
		desc: [1280, 720,
			[
				[left, 57, 653, 0xf4b25d],
				[left, 58, 678, 0xf4b25d],
				[left, 219, 653, 0xf4b25d],
				[left, 215, 683, 0xf4b25d],
				[left, 133, 690, 0xf4b35d],
			]
		],
		oper: [
			[center, 1280, 720, 53, 650, 222, 688, 1000],
		]
	}, { // 10 返回大厅
		desc: [1280, 720,
			[
				[center, 569, 636, 0xffc879],
				[center, 573, 656, 0xfdc36e],
				[right, 717, 635, 0xffcd83],
				[right, 712, 662, 0xffdfaf],
				[right, 699, 650, 0xffdfab],
			]
		],
		oper: [
			[center, 1280, 720, 568, 634, 716, 666, 1000],
		]
	}, { // 11 阵容
		desc: [1280, 720,
			[
				[left, 235, 18, 0xdbb88f],
				[left, 236, 29, 0xd6b68c],
				[left, 236, 45, 0xdbb98f],
				[center, 488, 23, 0x31241a],
			]
		],
		oper: [
			[center, 1280, 720, 287, 20, 316, 49, 1000],
		]
	}, { // 12 应用
		desc: [1280, 720,
			[
				[right, 1092, 103, 0x6f4635],
				[right, 1088, 113, 0x5f3826],
				[right, 1143, 107, 0x613b2c],
				[right, 1143, 118, 0x724838],
				[right, 1115, 108, 0x6b4531],
			]
		],
		oper: [
			[center, 1280, 720, 1092, 104, 1138, 123, 1000],
		]
	}, { // 13 退出
		desc: [1280, 720,
			[
				[right, 1089, 108, 0x6e2b37],
				[right, 1087, 118, 0x61232d],
				[right, 1115, 106, 0x602429],
				[right, 1143, 106, 0x63242d],
				[right, 1143, 114, 0x692731],
			]
		],
		oper: [
			[center, 1280, 720, 26, 24, 53, 52, 1000],
		]
	}, { // 14 已打开
		desc: [1280, 720,
			[
				[right, 1213, 335, 0xb6975e],
				[right, 1228, 336, 0xd0b276],
				[right, 1232, 336, 0xc6a66b],
				[right, 1211, 334, 0xbd9e63],
			]
		],
		oper: [
			[center, 1280, 720, 1181, 426, 1221, 472, 1000],
			[center, 1280, 720, 1176, 627, 1221, 668, 1000],
		]
	}, { // 15 选BUFF
		desc: [1280, 720,
			[
				[right, 1175, 428, 0x71552d],
				[right, 1225, 428, 0x72532b],
				[right, 1232, 469, 0x594327],
				[right, 1182, 473, 0x534126],
				[right, 1209, 449, 0xdebe8c],
			]
		],
		oper: [
			[center, 1280, 720, 322, 249, 388, 306, 1000],
		]
	}, { // 16 币超过十个
		desc: [1280, 720,
			[
				[right, 1179, 649, 0xfff7ad],
				[right, 1178, 660, 0xf5b654],
				[right, 1189, 654, 0xf8c065],
				[right, 1194, 654, 0xe5bd53],
			]
		],
	}, { // 17 关闭商店状态
		desc: [1280, 720,
			[
				[right, 1024, 212, 0xf0edea],
				[right, 1025, 169, 0xfde0be],
				[right, 1032, 140, 0xfcd4bb],
				[right, 1025, 111, 0xfdc8ab],
			]
		],
		oper: [
			[center, 1280, 720, 39, 626, 71, 657, 1000],
		]
	}, { // 18 五阶
		desc: [1280, 720,
			[
				[left, 142, 690, 0xe9e2db],
				[left, 141, 695, 0xe0d4c7],
				[left, 141, 701, 0xe7ded5],
				[left, 149, 701, 0xf2efeb],
				[left, 147, 696, 0xf0ece7],
			]
		],
		oper: [
			[center, 1280, 720, 62, 629, 101, 658, 1000],
		]
	}, { // 19 600币
		desc: [1280, 720,
			[
				[left, 145, 671, 0xeb8b03],
				[left, 146, 677, 0xcd7907],
				[left, 152, 674, 0xe28504],
				[left, 156, 671, 0xd17c07],
				[left, 163, 671, 0xd07a07],
				[left, 167, 671, 0xef8d02],
				[left, 175, 671, 0xd57e06],
			]
		],
	}, { // 20 一阶段 不动
		desc: [1280, 720,
			[
				[left, 137, 696, 0xdccdbe],
				[left, 147, 695, 0xe4dbd0],
				[left, 156, 696, 0xd8c7b6],
				[left, 166, 699, 0xe7e0d7],
			]
		],
	}, { // 21 二阶段 不动
		desc: [1280, 720,
			[
				[left, 140, 691, 0xded1c3],
				[left, 146, 690, 0xded1c2],
				[left, 149, 699, 0xe0d5c8],
				[left, 136, 700, 0xeee9e3],
				[left, 156, 696, 0xd8c7b6],
				[left, 166, 699, 0xe7e0d7],
			]
		],
	}, { // 22 下阵
		desc: [1280, 720,
			[
				[left, 139, 691, 0xe7dfd6],
				[left, 146, 690, 0xdfd3c5],
				[left, 145, 695, 0xd4c2af],
				[left, 149, 700, 0xefebe6],
				[left, 138, 701, 0xf1eee9],
				[left, 156, 696, 0xd8c7b6],
				[left, 166, 699, 0xe7e0d7],
			]
		],
		oper: [
			[center, 1280, 720, 903, 634, 927, 656, 1000],
		]
	}, { // 23  发现御魂
		desc: [1280, 720,
			[
				[left, 299, 558, 0x6fabc8],
				[center, 367, 561, 0x70abc9],
				[center, 370, 672, 0xd5cfc5],
				[left, 294, 671, 0xd5cec5],
				[center, 330, 666, 0xded8ce],
				[center, 338, 687, 0xeceff2],
			]
		],
		oper: [
			[center, 1280, 720, 312, 255, 354, 287, 1000],
		]
	}, { // 24 选择御魂
		desc: [1280, 720,
			[
				[center, 376, 336, 0x3a271f],
				[center, 460, 355, 0x3c2921],
				[center, 597, 337, 0x3f2920],
				[right, 681, 354, 0x3b2921],
				[right, 821, 336, 0x3a2920],
				[center, 596, 427, 0x413826],
			]
		],
		oper: [
			[center, 1280, 720, 367, 330, 483, 357, 1000],
		]
	},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['320'];
		if (thisScript.global.chess === null) {
			thisScript.global.chess = {
				'ini': true,
				'num': 0,
				'cheak': 5,
				'levelFive': false
			}
		}
		if (thisScript.oper({
			name: '杂项',
			operator: [{ desc: thisOperator[6].desc }]
		})) {
			if (thisScript.oper({
				name: '杂项',
				operator: [{ desc: thisOperator[19].desc }]
			})) {
				thisScript.rerun(thisconf.next_scheme);
				sleep(1000);
				return;
			} else {
				thisScript.regionClick(thisOperator[6].oper)
			}
			thisScript.global.chess = null
			return true;
		}
		if (thisScript.oper({
			name: '杂项',
			operator: [thisOperator[4], thisOperator[5], thisOperator[15], thisOperator[8], thisOperator[9]
				, thisOperator[10], thisOperator[24]]
		})) {
			return true;
		}
		if (thisScript.global.chess.ini) {
			if (thisScript.oper({
				name: '标记阵容',
				operator: [thisOperator[11], thisOperator[12]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '标记阵容',
				operator: [thisOperator[13]]
			})) {
				thisScript.global.chess.ini = false;
				return true;
			}
		}
		if (!thisScript.global.chess.levelFive && thisScript.oper({
			name: '杂项',
			operator: [{ desc: thisOperator[18].desc }]
		})) {
			thisScript.global.chess.levelFive = true;
			return true;
		}
		let curCnt = 0;
		const maxCount = 8;
		while (thisScript.oper({
			name: '买式神',
			operator: [{ desc: thisOperator[14].desc }]
		})) {
			thisScript.global.chess.cheak = 5;
			curCnt++;
			thisScript.keepScreen(false);
			if (curCnt >= maxCount) {
				if (thisScript.oper({
					name: '杂项',
					operator: [thisOperator[16]]
				})) {
					if (!thisScript.global.chess.levelFive) {
						thisScript.regionClick([thisOperator[18].oper[0]]);
					} else {
						thisScript.regionClick([thisOperator[14].oper[0]]);
					}
				} else {
					thisScript.regionClick([thisOperator[14].oper[1]]);
				}
				return true;
			}
			const point = thisScript.findMultiColor('百鬼棋局_荐');
			if (point) {
				thisScript.regionClick([[point.x, point.y, point.x + 20, point.y + 20, 1000]]);
			}
			sleep(200);
		}
		if (!thisScript.global.chess.ini && thisScript.global.chess.cheak as number > 0 && thisScript.oper({
			name: '杂项',
			operator: [{ desc: thisOperator[17].desc }]
		})) {
			if (thisScript.oper({
				name: '一二阶',
				operator: [thisOperator[20], thisOperator[21]]
			})) {
				thisScript.global.chess.cheak = 0;
				return true;
			}
			let point = thisScript.findMultiColor('百鬼棋局_发现御魂');
			if (point) {
				thisScript.regionSwipe([point.x, point.y, point.x + 20, point.y + 20, 1000], thisOperator[23].oper[0], [700, 800], 500);
				return true
			}
			point = thisScript.findMultiColor('百鬼棋局_御魂');
			if (point) {
				thisScript.regionSwipe([point.x, point.y, point.x + 20, point.y + 20, 1000], thisOperator[17].oper[0], [700, 800], 500);
				return true
			}
			if (thisScript.oper({
				name: '三阶',
				operator: [{ desc: thisOperator[22].desc }]
			})) {
				point = thisScript.findMultiColorEx('百鬼棋局_棋盘一星');
				if (point) {
					for (let i = 0; i < point.length; i++) {
						const ponit_del = [point[i].x + 30, point[i].y + 50, point[i].x + 5, point[i].y + 55]
						thisScript.regionSwipe(ponit_del, thisOperator[22].oper[0], [700, 800], 500);
					}
				}
				thisScript.keepScreen(false);
			}
			point = thisScript.findMultiColorEx('百鬼棋局_一星');
			if (point) {
				for (let i = 0; i < point.length; i++) {
					const ponit_del = [point[i].x, point[i].y, point[i].x + 5, point[i].y + 5]
					const region = [point[i].x - 20, point[i].y, point[i].x + 20, point[i].y + 50,]
					const pointCheak = thisScript.findMultiColor('百鬼棋局_手牌荐', region);
					if (!pointCheak) {
						thisScript.global.chess.cheak = 5;
						thisScript.regionSwipe(ponit_del, thisOperator[17].oper[0], [700, 800], 500);
						break;
					}
				}
			}
			thisScript.global.chess.cheak = thisScript.global.chess.cheak as number - 1;
			return true;
		}
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
		return false;
	}
}