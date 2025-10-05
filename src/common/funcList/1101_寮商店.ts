import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1101 implements IFuncOrigin {
	id = 1101;
	name = '寮商店购买';
	desc: '进入功勋商店购买物品';
	config = [{
		desc: '选择需要购买的物品',
		config: [{
			name: 'oper_5',
			desc: '功勋礼包',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_7',
			desc: '风铃',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_8',
			desc: '经验手扎',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_9',
			desc: '三星白蛋',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_10',
			desc: '六星御魂',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_11',
			desc: '蓝票',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_12',
			desc: '黑碎',
			type: 'switch',
			default: true,
		}]
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院_阴阳寮
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 544, 612, 594, 661, 1200]	// 点击阴阳寮
		]
	}, { // 1 阴阳寮_寮信息
		desc: [1280, 720,
			[
				[center, 908, 667, 0xc76b41],
				[right, 985, 657, 0xead5b6],
				[right, 1090, 656, 0xfbfcfd],
				[right, 1171, 646, 0xc4b4a5],
				[right, 1212, 642, 0xfefcf8],
			]
		],
		oper: [
			[center, 1280, 720, 1175, 621, 1225, 669, 1000]
		]
	}, { // 2 寮信息_寮神社
		desc: [
			1280, 720,
			[
				[right, 1180, 166, 0xc47f50],
				[right, 1205, 170, 0xd07b46],
				[right, 1180, 415, 0x83553f],
				[right, 1213, 410, 0x774c38],
			]
		],
		oper: [
			[center, 1280, 720, 1180, 378, 1215, 440, 1000],
		]
	}, { // 3 寮神社_功勋商店
		desc: [
			1280, 720,
			[
				[right, 1181, 411, 0xc78350],
				[right, 1207, 413, 0xd17b47],
				[right, 713, 530, 0x644979],
				[right, 755, 512, 0xbe4032],
			]
		],
		oper: [
			[center, 1280, 720, 707, 473, 789, 528, 1000],
		]
	}, { // 4 功勋商店
		desc: [
			1280, 720,
			[
				[center, 448, 70, 0x684222],
				[center, 545, 65, 0xe2bf62],
				[center, 607, 69, 0xdcb351],
				[center, 650, 73, 0xd1aa41],
				[center, 693, 71, 0xd8af49],
				[right, 982, 84, 0x483121],
			]
		],
		oper: [
			[center, 1280, 720, 1035, 130, 1078, 166, 1000],
		]
	}, { // 5 功勋商店_功勋礼包
		desc: [
			1280, 720,
			[
				[center, 527, 303, 0xaa2b11],
				[center, 527, 313, 0xaa2b11],
				[center, 682, 302, 0xaa2b11],
				[center, 679, 324, 0xaa2b11],
				[center, 670, 306, 0xeed9c6],
				[center, 672, 314, 0xeaceba],
			]
		],
		oper: [
			[center, 1280, 720, 537, 199, 671, 322, 1000],
		]
	}, { // 6 功勋商店_樱饼 //废弃
		desc: [
			1280, 720,
			[
				[center, 748, 300, 0xaa2b11],
				[center, 748, 320, 0xaa2b11],
				[center, 910, 304, 0xaa2b11],
				[center, 911, 320, 0xaa2b11],
				[center, 889, 306, 0xe9cdb9],
				[center, 899, 311, 0xecd4c0],
			]
		],
		oper: [
			[center, 1280, 720, 763, 202, 903, 333, 1000],
		]
	}, { // 7 功勋商店_风铃
		desc: [
			1280, 720,
			[
				[left, 300, 553, 0xaa2b11],
				[left, 297, 572, 0xaa2b11],
				[center, 460, 554, 0xaa2b11],
				[center, 462, 571, 0xaa2b11],
				[center, 441, 566, 0xf1e2cf],
				[center, 449, 563, 0xf0e0cc],
			]
		],
		oper: [
			[center, 1280, 720, 305, 436, 448, 564, 1000],
		]
	}, { // 8 功勋商店_经验
		desc: [
			1280, 720,
			[
				[center, 526, 556, 0xaa2b11],
				[center, 525, 574, 0xaa2b11],
				[center, 685, 553, 0xaa2b11],
				[center, 685, 574, 0xaa2b11],
				[center, 669, 558, 0xecd4c0],
				[center, 673, 569, 0xe3bea9],
			]
		],
		oper: [
			[center, 1280, 720, 535, 441, 677, 565, 1000],
		]
	}, { // 9 功勋商店_白蛋
		desc: [
			1280, 720,
			[
				[center, 751, 553, 0xaa2b11],
				[center, 750, 573, 0xaa2b11],
				[center, 907, 555, 0xaa2b11],
				[center, 907, 575, 0xaa2b11],
				[center, 898, 566, 0xd69b85],
				[center, 897, 557, 0xf3e6d3],
			]
		],
		oper: [
			[center, 1280, 720, 772, 440, 894, 570, 1000],
		]
	}, { // 10 功勋商店_御魂
		desc: [
			1280, 720,
			[
				[left, 300, 272, 0xaa2b11],
				[left, 300, 296, 0xaa2b11],
				[center, 460, 273, 0xaa2b11],
				[center, 459, 296, 0xaa2b11],
				[center, 445, 278, 0xebd1bd],
				[center, 447, 290, 0xe5c2ae],
			]
		],
		oper: [
			[center, 1280, 720, 327, 167, 440, 284, 1000],
		]
	}, { // 11 功勋商店_蓝票
		desc: [
			1280, 720,
			[
				[center, 748, 273, 0xaa2b11],
				[center, 751, 295, 0xaa2b11],
				[center, 910, 275, 0xaa2b11],
				[center, 910, 295, 0xaa2b11],
				[center, 894, 279, 0xedd8c4],
				[center, 895, 290, 0xf0dfcb],
			]
		],
		oper: [
			[center, 1280, 720, 762, 161, 894, 287, 1000],
		]
	}, { // 12 功勋商店_黑碎
		desc: [
			1280, 720,
			[
				[center, 525, 527, 0xaa2b11],
				[center, 525, 547, 0xaa2b11],
				[center, 685, 527, 0xaa2b11],
				[center, 683, 546, 0xaa2b11],
				[center, 672, 532, 0xe8c9b4],
				[center, 672, 541, 0xefddca],
			]
		],
		oper: [
			[center, 1280, 720, 548, 424, 669, 536, 1000],
		]
	}, { // 13 功勋商店_皮肤券 带去色
		desc: [
			1280, 720,
			[
				[center, 525, 527, 0xaa2b11],
				[center, 525, 547, 0xaa2b11],
				[center, 685, 527, 0xaa2b11],
				[center, 683, 546, 0xaa2b11],
				[center, 672, 532, 0xe8c9b4],
				[center, 672, 541, 0xefddca],
			]
		],
		oper: [
			[center, 1280, 720, 548, 424, 669, 536, 1000],
		]
	}, { // 14 功勋商店_滑动
		oper: [
			[center, 1280, 720, 977, 578, 1010, 610, 1000],
			[center, 1280, 720, 966, 16, 998, 47, 1000],
		]
	}, { // 15 购买确认_一行字
		desc: [
			1280, 720,
			[
				[center, 562, 533, 0xf3b25e],
				[center, 562, 570, 0xf2b05d],
				[center, 712, 567, 0xf3b25e],
				[center, 712, 533, 0xf3b25e],
				[center, 771, 454, 0x412b24],
				[center, 795, 461, 0x422d2a],
			]
		],
		oper: [
			[center, 1280, 720, 762, 438, 803, 473, 1000],
			[center, 1280, 720, 560, 528, 717, 573, 1000],
		]
	}, { // 16 购买确认_二行字
		desc: [
			1280, 720,
			[
				[center, 560, 546, 0xf4b35f],
				[center, 562, 581, 0xf3b25e],
				[center, 713, 582, 0xf1af5d],
				[center, 712, 545, 0xf4b35e],
				[center, 772, 467, 0x462b22],
				[center, 795, 475, 0x422d29],
			]
		],
		oper: [
			[center, 1280, 720, 763, 448, 799, 488, 1000],
			[center, 1280, 720, 561, 543, 714, 584, 1000],
		]
	}, { // 17 购买确认_三行字
		desc: [
			1280, 720,
			[
				[center, 561, 558, 0xf6b660],
				[center, 561, 597, 0xf2b05d],
				[center, 713, 597, 0xf0af5d],
				[center, 713, 559, 0xf4b15e],
				[center, 770, 481, 0x422b24],
				[center, 795, 488, 0x422d2a],
			]
		],
		oper: [
			[center, 1280, 720, 761, 462, 800, 498, 1000],
			[center, 1280, 720, 560, 556, 715, 598, 1000],
		]
	}, { // 18 购买确认_黑碎
		desc: [
			1280, 720,
			[
				[center, 560, 501, 0xf5b55f],
				[center, 560, 538, 0xf6b65f],
				[center, 713, 502, 0xf4b15e],
				[center, 713, 537, 0xf4b25d],
				[center, 602, 523, 0xa06e60],
			]
		],
		oper: [
			[center, 1280, 720, 561, 501, 715, 537, 1000],
		]
	}, { // 19 庭院已打开菜单
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰'
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['1101'];
		if (thisScript.global.MT_liaoShop === 'start') { // 未完成
			if (thisScript.oper({
				id: 1101,
				name: '寮商店_进入',
				operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[3]]
			})) {
				return true;
			}
			let curCnt = 0;
			let maxCount = 5;
			while (thisScript.oper({
				id: 1101,
				name: '寮商店_功勋商店',
				operator: [{ desc: thisOperator[4].desc }]
			})) {
				const enabledThisOperator = Object.keys(thisConf).filter(keyName => /oper_\d+/.test(keyName) && thisConf[keyName]).map(keyName => thisOperator[parseInt(keyName.split('_')[1])]);
				if (thisScript.oper({
					id: 1101,
					name: '寮商店购买',
					operator: enabledThisOperator
				})) {
					return true;
				}
				curCnt++;
				if (maxCount === 5 && curCnt >= maxCount) {
					thisScript.regionSwipe(thisOperator[14].oper[0], thisOperator[14].oper[1], [400, 450]);
					maxCount = 10;
				} else if (maxCount === 10 && curCnt >= maxCount) {
					thisScript.global.MT_liaoShop = 'back';
					break;
				}
				sleep(1000);
				thisScript.keepScreen(false);
			}
			if (thisScript.oper({
				id: 1101,
				name: '寮商店_购买',
				operator: [thisOperator[15], thisOperator[16], thisOperator[17], thisOperator[18]]
			})) {
				return true;
			}
		} else if (thisScript.global.MT_liaoShop === 'back') { // 完成
			if (thisScript.oper({
				id: 1101,
				name: '寮商店_返回',
				operator: [thisOperator[4]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 1101,
				name: '寮商店_完成',
				operator: [thisOperator[19]]
			})) {
				thisScript.global.MT_liaoShop = 'end';
				return true;
			}
		}
		return false;
	}
}
