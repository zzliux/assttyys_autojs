import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator, } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func605 implements IFuncOrigin {
	id = 605;
	name = '寮宴会';
	desc = '';
	config = [{
		desc: '',
		config: [{
			name: 'admin',
			desc: '寮管理主动开启并筹备',
			type: 'switch',
			default: false,
		}]
	}]
	operator: IFuncOperatorOrigin[] = [{ //	0 检测_宴会
		desc: [1280, 720,
			[
				[left, 40, 39, 0xfdeeb4],
				[right, 1127, 35, 0xd7af82],
				[right, 1181, 40, 0xcfa578],
				[right, 1243, 41, 0xcca174],
				[right, 1063, 21, 0xfa8c42],
				[left, 101, 474, 0xe5bc8b],
				[right, 1216, 645, 0xfefcf7],
			],
		],
		oper: [
			[left, 1280, 720, 19, 156, 98, 242, 1200], //	点击左侧式神
			[center, 1280, 720, 1006, 175, 1037, 238, 1000], //	点击轮换
		],
	}, { //	1 检测_寮会结束
		desc: [1280, 720,
			[
				[center, 590, 177, 0xe4b231],
				[center, 717, 166, 0xf1f1e6],
				[center, 652, 223, 0xe8a639],
				[left, 102, 200, 0xf3d9af],
				[left, 101, 446, 0xf3d8a5],
				[right, 1219, 639, 0xfffdf9],
				[right, 1057, 69, 0xf7dca9],
			],
		],
	}, { //	2 检测_吃饭式神未开轮换
		desc: [1280, 720,
			[
				[center, 330, 257, 0xf2d7ab],
				[center, 568, 257, 0xf2d7ab],
				[center, 806, 257, 0xf2d7a9],
				[center, 753, 129, 0x301c13],
				[left, 216, 711, 0x3e2d1c],
				[right, 1228, 687, 0x381c10],
				[right, 1170, 559, 0xe8d6ae],
				[right, 1024, 287, 0x2f398b],
			],
		],
		oper: [
			[right, 1280, 720, 1005, 177, 1040, 231, 1200], //	点击_轮换按钮
		],
	}, { //	3 检测_吃饭式神已开轮换
		desc: [1280, 720,
			[
				[center, 330, 257, 0xf2d7ab],
				[center, 568, 257, 0xf2d7ab],
				[center, 806, 257, 0xf2d7a9],
				[center, 753, 129, 0x301c13],
				[right, 1228, 687, 0x381c10],
				[right, 1170, 559, 0xe8d6ae],
				[right, 1023, 296, 0xffffff],
			],
		],
		oper: [
			[left, 1280, 720, 30, 17, 75, 62, 1200], //	返回
		],
	}, { //	4 宴会_寮管理开启
		desc: [1280, 720,
			[
				[right, 940, 228, 0x9aaf98],
				[right, 991, 240, 0xcb614a],
				[right, 1014, 231, 0xcb6049],
				[right, 1034, 221, 0xc74c4b],
				[right, 1051, 219, 0xc85050],
				[right, 1064, 231, 0xcc5554],
			]
		],
		oper: [
			[center, 1280, 720, 922, 197, 1091, 305, 522],
		]
	}, { //	5 宴会_料理筹备界面
		desc: [1280, 720,
			[
				[left, 157, 96, 0x43312f],
				[left, 157, 144, 0x1e1311],
				[center, 418, 80, 0x32231f],
				[center, 434, 122, 0x241815],
				[left, 188, 112, 0xeab35a],
				[center, 365, 111, 0xeab85d],
			]
		]
	}, { // 6 宴会_宴会筹备完成
		desc: [1280, 720,
			[
				[right, 678, 596, 0x8bb729],
				[right, 766, 648, 0xe94f48],
				[right, 884, 602, 0xcdc2bb],
				[right, 946, 626, 0xb7213c],
				[right, 1097, 652, 0x745130],
				[right, 1147, 645, 0xefeade],
			]
		],
		oper: [
			[center, 1280, 720, 910, 326, 965, 371, 1000],
			[center, 1280, 720, 834, 382, 942, 417, 1000],
		]
	}, { // 7 宴会_一键放入
		desc: [1280, 720,
			[
				[center, 478, 417, 0x453429],
				[center, 576, 427, 0x46362a],
				[right, 712, 425, 0x443328],
				[right, 817, 427, 0x453429],
				[left, 307, 149, 0x870818],
			]
		],
		oper: [
			[center, 1280, 720, 707, 416, 813, 438, 1000],
			[center, 1280, 720, 1083, 422, 1117, 456, 1000],
		]
	}, { // 8 点击阴阳寮
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 544, 612, 594, 661, 1200]	// 点击阴阳寮
		]
	}, { // 9 判断是否为寮首页
		desc: [
			1280, 720,
			[
				[right, 1096, 630, 0xb1251f],
				[right, 1105, 662, 0xdbe3f1],
				[left, 45, 39, 0xf4e4a3],
				[center, 886, 644, 0xe0cbaa],
			]
		],
		oper: [
			[center, 1280, 720, 868, 627, 927, 684, 1200]	// 点击下方神社
		],
		retest: 1000
	}, { // 10 本周已开启两次
		desc: [1280, 720,
			[
				[center, 582, 228, 0xe3d2bf],
				[right, 991, 233, 0x7b7570],
				[center, 584, 324, 0xe7d6c4],
				[right, 797, 364, 0xa72d02],
				[right, 805, 366, 0xb44e28],
				[right, 804, 378, 0xb14720],
				[right, 797, 378, 0xa72d02],
			]
		],
		oper: [
			[center, 1280, 720, 24, 40, 76, 73, 1000],
		]
	}, { // 11 探索地图界面
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 1145, 212, 1163, 227, 1000],
			[center, 1280, 720, 1144, 500, 1160, 510, 1000],
			[center, 1280, 720, 890, 518, 1000, 558, 1000],
		]
	}, { // 12 挑战
		desc: [
			1280, 720,
			[
				[center, 347, 127, 0x493625],
				[center, 892, 140, 0x473524],
				[right, 1080, 288, 0x925520],
				[right, 1080, 422, 0x5f3d28],
			]
		],
		oper: [
			[center, 1280, 720, 1078, 379, 1113, 457, 1000],
		]
	}, { // 13 狸猫挑战
		desc: [
			1280, 720,
			[
				[left, 274, 511, 0x774f31],
				[left, 293, 514, 0xfae9ad],
				[left, 284, 533, 0x824018],
				[left, 282, 520, 0xc48a4e],
				[left, 302, 522, 0xf5f5dd],
			]
		],
		oper: [
			[center, 1280, 720, 892, 521, 998, 554, 1000],
		]
	}, { // 14 饿鬼挑战
		desc: [
			1280, 720,
			[
				[left, 280, 504, 0xf8dc67],
				[left, 276, 510, 0xf8df7d],
				[left, 289, 515, 0x655b5c],
				[left, 300, 528, 0xf9f9f3],
				[left, 300, 551, 0x5078a9],
				[left, 313, 537, 0xd5cbce],
			]
		],
		oper: [
			[center, 1280, 720, 890, 518, 1000, 558, 1000],
		]
	}, { // 15 河童挑战
		desc: [
			1280, 720,
			[
				[left, 272, 508, 0x446a7d],
				[left, 302, 510, 0x5cb297],
				[left, 292, 524, 0xae9745],
				[left, 285, 544, 0x2c203e],
				[left, 300, 548, 0x5156a5],
			]
		],
		oper: [
			[center, 1280, 720, 888, 517, 998, 561, 1000],
		]
	}, { // 16 返回
		desc: [
			1280, 720,
			[
				[left, 192, 94, 0x644628],
				[right, 1054, 146, 0xe4b6b7],
				[right, 1086, 420, 0x8d5321],
				[right, 1095, 547, 0x3b2313],
			]
		],
		oper: [
			[center, 1280, 720, 1030, 125, 1070, 157, 1000],
		]
	}, { // 17 第一章
		desc: [
			1280, 720,
			[
				[right, 1141, 214, 0xf8f3e0],
				[right, 1159, 213, 0xf8f3e0],
				[right, 1173, 206, 0xf7f2df],
				[right, 1115, 225, 0xe7e1cf],
				[right, 1150, 340, 0xf8f3e0],
			]
		]
	}, { // 18 庭院进入探索
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 658, 127, 697, 170, 1000],
		]
	}, { // 10 探索地图进入秘闻
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 544, 636, 602, 701, 1000],
		]
	}, { // 20 秘闻往下滑动
		desc: [1280, 720,
			[
				[left, 61, 149, 0x532f2c],
				[left, 74, 484, 0x573534],
				[left, 122, 135, 0x918776],
				[right, 763, 134, 0x9c917f],
				[right, 1193, 137, 0x552d28],
				[right, 836, 178, 0x69413c],
			]
		],
		oper: [
			[center, 1280, 720, 758, 587, 803, 618, 1000],
			[center, 1280, 720, 751, 27, 799, 56, 1000],
		]
	}, { // 21 点击荒川秘闻(左)
		desc: [1280, 720,
			[
				[left, 139, 278, 0x717c8d],
				[left, 137, 356, 0x707b8c],
				[left, 215, 299, 0xe8eaef],
				[left, 242, 360, 0xe7e9ee],
				[left, 174, 356, 0x222231],
				[left, 235, 279, 0xe08275],
			]
		],
		oper: [
			[center, 1280, 720, 181, 297, 428, 346, 1000],
		]
	}, { // 22 进入荒川秘闻
		desc: [1280, 720,
			[
				[right, 955, 204, 0xd0e6e6],
				[right, 1158, 192, 0x802f2f],
				[right, 1055, 476, 0x183e5d],
				[right, 1035, 531, 0x204b68],
				[right, 941, 447, 0xdfdee2],
				[right, 968, 363, 0x2e345b],
				[right, 1010, 347, 0x293172],
			]
		],
		oper: [
			[center, 1280, 720, 1150, 606, 1245, 677, 1000],
		]
	}, { // 23 荒川秘闻往下滑动
		desc: [1280, 720,
			[
				[left, 96, 164, 0xbc9cd4],
				[left, 77, 226, 0xa385b7],
				[left, 83, 184, 0xb999d2],
				[left, 103, 186, 0xbc9bd4],
				[left, 142, 66, 0x3a383e],
				[right, 1098, 66, 0x3d3b41],
				[right, 890, 152, 0xf3f6f7],
			]
		],
		oper: [
			[center, 1280, 720, 575, 582, 612, 615, 1000],
			[center, 1280, 720, 580, 121, 615, 152, 1000],
		]
	}, { // 24 荒川秘闻挑战
		desc: [1280, 720,
			[
				[left, 189, 357, 0x782d2c],
				[left, 306, 368, 0xb24d44],
				[left, 223, 362, 0x7d2e2e],
				[center, 350, 428, 0xeba94f],
				[center, 368, 410, 0x882111],
				[center, 387, 442, 0x231818],
			]
		],
		oper: [
			[center, 1280, 720, 198, 395, 289, 450, 1000],
			[center, 1280, 720, 1056, 575, 1149, 643, 1000],
		]
	}, { // 25 点击荒川秘闻(右)
		desc: [1280, 720,
			[
				[center, 489, 282, 0x738294],
				[center, 488, 350, 0x6b7888],
				[center, 556, 294, 0xe4e1e6],
				[center, 560, 319, 0xd6d7de],
				[center, 579, 361, 0xe6e7ee],
				[center, 639, 295, 0xd6cfc6],
			]
		],
		oper: [
			[center, 1280, 720, 181, 297, 428, 346, 1000],
		]
	}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconfig = thisScript.scheme.config['605'];
		if (thisScript.global.liao_banquet_collect) {
			if (thisScript.oper({
				name: '第一章',
				operator: [thisOperator[17]]
			})) {
				thisScript.doPush(thisScript, { text: '宴会筹备失败，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(3000);
				return;
			}
			if (thisScript.oper({
				name: '探索界面',
				operator: [{ desc: thisOperator[11].desc }]
			})) {
				let point;
				if (thisScript.runTimes['2'] === undefined || thisScript.runTimes['2'] < 1) {
					point = thisScript.findMultiColor('宴会筹备_狸猫');
				} else if (thisScript.runTimes['2'] < 2) {
					point = thisScript.findMultiColor('宴会筹备_饿鬼');
				} else if (thisScript.runTimes['2'] < 3) {
					point = thisScript.findMultiColor('宴会筹备_河童');
				} else if (thisScript.runTimes['2'] < 6) {
					thisScript.regionClick([thisOperator[19].oper[0]]);
				} else {
					thisScript.doPush(thisScript, { text: '宴会筹备已完成，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
					sleep(3000);
					return;
				}
				if (point) {
					const oper = [[point.x + 5, point.y + 5, point.x + 10, point.y + 10, 2500]];
					thisScript.regionClick(oper);
					return true;
				} else {
					thisScript.regionSwipe(thisOperator[11].oper[0], thisOperator[11].oper[1], [1000, 1050], 200);
				}
				return true;
			}
			if (thisScript.oper({
				name: '打怪确认',
				operator: [thisOperator[12], thisOperator[18]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '偏移返回',
				operator: [thisOperator[16]]
			})) {
				return true;
			}
			const pointA = thisScript.findMultiColor('宴会筹备');
			if (pointA) {
				const oper = [[pointA.x, pointA.y, pointA.x + 10, pointA.y + 10, 1000]];
				thisScript.regionClick(oper);
				thisScript.regionClick([thisOperator[11].oper[2]]);
				return true;
			}
			if (thisScript.oper({
				name: '进入荒川秘闻',
				operator: [thisOperator[21], thisOperator[22], thisOperator[25]]
			})) {
				return true;
			}
			if (thisScript.runTimes['2'] === 6) {
				thisScript.global.liao_banquet_collect = false;
				thisScript.global.liao_banquet_onGoing = true;
				return true;
			} else if (thisScript.oper({
				name: '荒川秘闻挑战',
				operator: [thisOperator[24]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '荒川秘闻往下滑动',
				operator: [{ desc: thisOperator[23].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[23].oper[0], thisOperator[23].oper[1], [400, 510], 1000);
				return true;
			}
			if (thisScript.oper({
				name: '秘闻往下滑动',
				operator: [{ desc: thisOperator[20].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[20].oper[0], thisOperator[20].oper[1], [400, 510], 1000);
				return true;
			}
		}
		if (thisScript.global.liao_banquet_onGoing) {
			if (thisScript.oper({
				name: '宴会_结束',
				operator: [{ desc: thisOperator[1].desc }, thisOperator[10]]
			})) {
				thisScript.rerun('返回庭院');
				return true;
			}
			if (thisconfig.admin) {
				if (!thisScript.oper({
					name: '宴会_吃饭界面',
					operator: [{ desc: thisOperator[0].desc }],
				}) && thisScript.oper({
					name: '宴会__寮管理开启',
					operator: [thisOperator[4], thisOperator[9]],
				})) {
					return true;
				}
				if (thisScript.oper({
					name: '宴会__宴会筹备界面',
					operator: [thisOperator[5]],
				})) {
					if (thisScript.oper({
						name: '宴会__宴会筹备完成',
						operator: [thisOperator[6]],
					})) {
						return true;
					} else {
						thisScript.global.liao_banquet_collect = true;
						thisScript.global.liao_banquet_onGoing = false;
						return true;
					}
				}
			}
			if (thisScript.oper({
				name: '进入寮神社',
				operator: [thisOperator[8]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '宴会_吃饭界面',
				operator: [{ desc: thisOperator[0].desc }],
			})) {
				const point1 = thisScript.findMultiColor('宴会_举高高');
				if (point1) {
					console.log('查找举高高成功');
					const oper = [[point1.x, point1.y, point1.x, point1.y, 120]];
					thisScript.regionClick(oper);
					return true;
				}
				if (!thisScript.global.banquet_change_flag) {
					return thisScript.oper({
						name: '宴会_式神轮换',
						operator: [{ oper: thisOperator[0].oper }]
					});
				}
				return true;
			}
			if (thisScript.oper({
				name: '检测_吃饭式神已开轮换',
				operator: [thisOperator[3]],
			})) {
				thisScript.global.banquet_change_flag = true;
				return true;
			}
			if (thisScript.oper({
				name: '检测_吃饭式神未开轮换',
				operator: [thisOperator[2]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '宴会_一键放入',
				operator: [thisOperator[7]]
			})) {
				return true;
			}
		}
		return false;
	}
}