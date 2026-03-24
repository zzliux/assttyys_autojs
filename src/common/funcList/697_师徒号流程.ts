import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
let create = false; // true
let apply = false; // false
let jingYan = false; // false
let getBird = true; // true

export class Func697 implements IFuncOrigin {
	id = 697;
	name = '师徒号流程';
	desc = '';
	config = [{
		desc: '',
		config: [{
			name: 'name',
			desc: '昵称前缀',
			type: 'text',
			default: '徒弟',
		}, {
			name: 'shiFu_name',
			desc: '师傅昵称',
			type: 'text',
			default: '师傅',
		}, {
			name: 'apple',
			desc: '是否为苹果账号',
			type: 'switch',
			default: false,
		}, {
			name: 'area',
			desc: '游戏区服',
			type: 'text',
			default: '',
			value: '',
		}, {
			name: 'scheme_switch_enabled',
			desc: '是否切换方案(不切换则只运行一次)',
			type: 'switch',
			default: true,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '式神寄养',
		}, {
			name: 'close_game_new',
			desc: '长时间未识别时重启游戏',
			type: 'switch',
			default: true,
		}, {
			name: 'account_index',
			desc: '账号序号(用于同区多账号，账号序号优先级大于账号昵称)',
			type: 'text',
			default: 0,
			value: 0,
		}]
	}];

	operator: IFuncOperatorOrigin[] = [{ // 0 选最新区
		desc: [
			1280, 720,
			[
				[left, 162, 149, 0xd9a756],
				[center, 643, 74, 0xe1bf80],
				[right, 1050, 592, 0xffe1bd],
			]
		],
		oper: [
			[center, 1280, 720, 777, 238, 839, 289, 1000], // 选区
			[center, 1280, 720, 577, 585, 704, 611, 1000], // 进入游戏

		],
	}, { // 1 点击输入
		desc: [1280, 720,
			[
				[center, 485, 572, 0xa96240],
				[center, 494, 579, 0xaa7252],
				[center, 521, 586, 0xb59a82],
				[center, 505, 555, 0xdbd6ca],
				[center, 522, 568, 0xbccbc1],
				[right, 655, 571, 0x383632],
				[right, 756, 571, 0x1a1816],
			]
		],
		oper: [
			[center, 1280, 720, 552, 562, 777, 583, 1000],
		]
	}, { // 2 已输入 确认
		desc: [1280, 720,
			[
				[center, 485, 572, 0xa96240],
				[center, 494, 579, 0xaa7252],
				[center, 521, 586, 0xb59a82],
				[center, 505, 555, 0xdbd6ca],
				[center, 522, 568, 0xbccbc1],
			]
		],
		oper: [
			[center, 1280, 720, 568, 643, 713, 678, 1000],
		]
	}, { // 3 对话框
		desc: [1280, 720,
			[
				[center, 430, 543, 0x6b0707],
				[center, 444, 541, 0x820707],
				[center, 457, 542, 0x7f0607],
				[center, 353, 543, 0x370b0b],
			]
		],
		oper: [
			[center, 1280, 720, 855, 245, 896, 281, 1000],
		]
	}, { // 4 小白说明
		desc: [1280, 720,
			[
				[right, 714, 301, 0xffffff],
				[right, 893, 252, 0xf7f4e8],
				[right, 951, 400, 0xf5efe3],
				[right, 965, 494, 0xb29ba5],
				[right, 871, 438, 0xfbc36b],
				[right, 933, 574, 0x937788],
			]
		],
		oper: [
			[center, 1280, 720, 573, 526, 704, 608, 1000],
		]
	}, { // 5 神乐说明
		desc: [1280, 720,
			[
				[right, 706, 192, 0xffffff],
				[right, 747, 302, 0xffffff],
				[right, 861, 276, 0xcfc4b9],
				[right, 918, 316, 0xebe3da],
				[right, 1022, 550, 0xfddfd1],
				[right, 947, 421, 0xcf2850],
			]
		],
		oper: [
			[center, 1280, 720, 659, 514, 783, 586, 1000],
		]
	}, { // 6 犬神红手指
		desc: [1280, 720,
			[
				[right, 887, 255, 0xeca9a1],
				[right, 897, 273, 0xedb9a9],
				[right, 907, 287, 0xf0d0b9],
				[right, 926, 303, 0x8c1b29],
				[right, 940, 322, 0x9d1e2b],
			]
		],
		oper: [
			[center, 1280, 720, 854, 247, 897, 276, 1000],
		]
	}, { // 7 蓝色跳过
		desc: [1280, 720,
			[
				[right, 840, 533, 0x7156e3],
				[right, 910, 536, 0x1950ac],
				[right, 851, 557, 0x5c5add],
				[right, 875, 526, 0x2531b7],
				[right, 881, 551, 0x3b64d9],
			]
		],
		oper: [
			[center, 1280, 720, 847, 528, 904, 551, 1000],
		]
	}, { // 8 犬神说明
		desc: [1280, 720,
			[
				[right, 672, 189, 0xffffff],
				[right, 764, 310, 0xffffff],
				[right, 895, 485, 0x435385],
				[right, 1006, 490, 0x52629f],
				[right, 1000, 432, 0xe5ce7a],
			]
		],
		oper: [
			[center, 1280, 720, 610, 546, 760, 587, 1000],
		]
	}, { // 9 晴明普攻
		desc: [1280, 720,
			[
				[right, 1039, 661, 0xd6ffff],
				[right, 1028, 654, 0xdbffff],
				[right, 1008, 666, 0xfeffff],
				[right, 1013, 642, 0x262d64],
				[right, 1042, 689, 0x252257],
			]
		],
		oper: [
			[center, 1280, 720, 999, 642, 1048, 685, 1000],
			[center, 1280, 720, 766, 192, 802, 229, 1000],
			[center, 1280, 720, 766, 192, 802, 229, 1000],
		]
	}, { // 10 小白提示框
		desc: [1280, 720,
			[
				[center, 483, 195, 0x464342],
				[right, 808, 201, 0x423e3d],
				[left, 296, 383, 0xcb2e43],
				[right, 905, 406, 0x624a3a],
				[center, 427, 528, 0x645346],
			]
		],
		oper: [
			[center, 1280, 720, 528, 606, 699, 660, 1000],
		]
	}, { // 11 晴明守护
		desc: [1280, 720,
			[
				[right, 1134, 678, 0xe8b39d],
				[right, 1139, 688, 0xe8b092],
				[right, 1147, 700, 0xedc5b0],
				[right, 1155, 712, 0xf0d3be],
				[right, 1187, 717, 0x831725],
			]
		],
		oper: [
			[center, 1280, 720, 1098, 643, 1150, 694, 1000],
			[center, 1280, 720, 463, 344, 498, 398, 1000],
		]
	}, { // 12 小白三点对话
		desc: [1280, 720,
			[
				[center, 448, 310, 0xe9b295],
				[center, 454, 320, 0xedb9a9],
				[center, 464, 334, 0xf0d0b9],
				[center, 484, 354, 0x911d2a],
				[center, 497, 368, 0xa0202d],
			]
		],
		oper: [
			[center, 1280, 720, 415, 299, 450, 329, 1000],
		]
	}, { // 13 加速
		desc: [1280, 720,
			[
				[right, 1036, 52, 0xd7b089],
				[right, 1055, 52, 0xdab38c],
				[right, 1154, 59, 0xcfa680],
				[right, 1175, 59, 0xd1aa83],
			]
		],
		oper: [
			[center, 1280, 720, 1140, 36, 1187, 80, 1000],
		]
	}, { // 14 神乐三点对话
		desc: [1280, 720,
			[
				[center, 480, 228, 0xdac8c7],
				[center, 480, 232, 0xdcd4cd],
				[center, 493, 232, 0xddd4cd],
				[center, 493, 228, 0xdcd2ca],
				[center, 506, 228, 0xddd5cd],
				[center, 506, 232, 0xe3d4d2],
			]
		],
		oper: [
			[center, 1280, 720, 476, 222, 509, 245, 1000],
		]
	}, { // 15 犬神三点对话
		desc: [1280, 720,
			[
				[right, 1056, 406, 0xd7c5c3],
				[right, 1056, 410, 0xdad2cb],
				[right, 1069, 410, 0xdbd0cb],
				[right, 1069, 406, 0xdbd1cb],
				[right, 1082, 406, 0xdcd4ce],
				[right, 1082, 410, 0xe0d1d1],
			]
		],
		oper: [
			[center, 1280, 720, 1053, 393, 1086, 427, 1000],
		]
	}, { // 16 小白三点对话
		desc: [1280, 720,
			[
				[left, 268, 312, 0xdbc9c7],
				[left, 268, 316, 0xdbd3cc],
				[left, 281, 316, 0xdad2cb],
				[left, 281, 312, 0xdbd1c9],
				[left, 294, 316, 0xdfd0d0],
				[left, 294, 312, 0xdad2cb],
			]
		],
		oper: [
			[center, 1280, 720, 266, 299, 296, 330, 1000],
		]
	}, { // 17 犬神三点对话(错过了)
		desc: [1280, 720,
			[
				[left, 268, 312, 0xdbc9c7],
				[left, 268, 316, 0xdbd3cc],
				[left, 281, 316, 0xdad2cb],
				[left, 281, 312, 0xdbd1c9],
				[left, 294, 316, 0xdfd0d0],
				[left, 294, 312, 0xdad2cb],
			]
		],
		oper: [
			[center, 1280, 720, 266, 299, 296, 330, 1000],
		]
	}, { // 18 神乐三点对话(错过了)
		desc: [1280, 720,
			[
				[center, 480, 228, 0xdac8c7],
				[center, 480, 232, 0xdcd4cd],
				[center, 493, 232, 0xddd4cd],
				[center, 493, 228, 0xdcd2ca],
				[center, 506, 228, 0xddd5cd],
				[center, 506, 232, 0xe3d4d2],
			]
		],
		oper: [
			[center, 1280, 720, 476, 222, 509, 245, 1000],
		]
	}, { // 19 画蓝符
		desc: [1280, 720,
			[
				[center, 401, 100, 0xbbc6d4],
				[center, 393, 537, 0xb9cdda],
				[right, 878, 540, 0xbcd0de],
				[right, 881, 110, 0xbcc7d5],
			]
		],
		oper: [
			[center, 1280, 720, 608, 454, 664, 491, 1000],
			[center, 1280, 720, 618, 289, 664, 323, 1000],
		]
	}, { // 20 召唤确认
		desc: [1280, 720,
			[
				[right, 708, 636, 0xab7d42],
				[right, 849, 667, 0xab7d41],
				[center, 434, 634, 0xf3b25e],
				[center, 569, 665, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 431, 630, 574, 664, 1000],
		]
	}, { // 21 跳过新手流程
		desc: [1280, 720,
			[
				[center, 416, 478, 0xdf6851],
				[center, 543, 507, 0xdf6851],
				[right, 729, 473, 0xf3b25e],
				[right, 854, 509, 0xf4b25f],
			]
		],
		oper: [
			[center, 1280, 720, 428, 414, 445, 428, 1000],
			[center, 1280, 720, 721, 471, 866, 514, 9000],
		]
	},
	{ // 22 守护
		desc: [1280, 720,
			[
				[right, 1080, 380, 0xdcd8cd],
				[right, 1080, 404, 0xc3b591],
				[right, 1086, 380, 0xdbd7cc],
				[right, 1088, 404, 0xc8c7b8],
				[right, 1073, 397, 0x534f73],
			]
		],
		oper: [
			[center, 1280, 720, 1070, 385, 1100, 417, 1000],
		]
	}, { // 23 请教
		desc: [1280, 720,
			[
				[right, 1171, 236, 0x724726],
				[right, 1240, 230, 0x6f4424],
				[right, 1183, 363, 0x1e1614],
				[right, 1211, 535, 0x1e1614],
				[right, 1212, 593, 0x211815],
			]
		],
		oper: [
			[center, 1280, 720, 1177, 230, 1243, 253, 1000],
		]
	}, { // 24 更改完成 (全部)
		desc: [1280, 720,
			[
				[right, 766, 110, 0xddc7ae],
				[right, 911, 112, 0xddc7ae],
				[right, 912, 126, 0x503636],
				[right, 915, 138, 0xddc7ae],
				[right, 778, 132, 0xd2bca3],
				[right, 817, 128, 0x705844],
				[right, 835, 125, 0x735b47],
				[right, 841, 129, 0x6d5540],
			]
		],
		oper: [
			[center, 1280, 720, 959, 114, 1168, 140, 2000],
		]
	}, { // 25 输入完成
		oper: [
			[center, 1280, 720, 1222, 110, 1254, 143, 1000],
		]
	}, { // 26 改全部
		desc: [1280, 720,
			[
				[right, 766, 110, 0xddc7ae],
				[right, 911, 112, 0xddc7ae],
				[right, 912, 126, 0x503636],
				[right, 915, 138, 0xddc7ae],
				[right, 778, 132, 0xd2bca3],
			]
		],
		oper: [
			[center, 1280, 720, 761, 109, 925, 140, 1000],
		]
	}, { // 27 选全部
		desc: [1280, 720,
			[
				[center, 554, 37, 0xf4dfab],
				[center, 611, 41, 0xefd8a3],
				[right, 663, 50, 0xe3c486],
				[right, 722, 38, 0xf0dbab],
				[center, 436, 57, 0x744829],
			]
		],
		oper: [
			[center, 1280, 720, 137, 160, 291, 194, 1000],
		]
	}, { // 28 申请确认
		desc: [1280, 720,
			[
				[center, 489, 428, 0xf3b25e],
				[center, 575, 460, 0xf3b25e],
				[right, 712, 433, 0xf3b25e],
				[right, 810, 460, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 708, 426, 810, 466, 1000],
		]
	}, { // 29 守护关系完成
		desc: [1280, 720,
			[
				[center, 475, 155, 0xf3dd90],
				[center, 601, 166, 0xf2d985],
				[right, 753, 156, 0xf9e78e],
				[right, 817, 172, 0xefd184],
				[right, 876, 141, 0xf3db8e],
			]
		],
		oper: [
			[center, 1280, 720, 961, 203, 989, 233, 1000],
		]
	}, { // 30 已是守护关系
		desc: [1280, 720,
			[
				[left, 102, 301, 0xc28b7f],
				[left, 112, 314, 0xb96c63],
				[left, 122, 306, 0xb76e64],
				[center, 472, 320, 0x434e6d],
				[center, 483, 305, 0x414762],
			]
		],
		oper: [
			[center, 1280, 720, 21, 19, 56, 54, 1000],
		]
	}, { // 31 庭院
		desc: [1280, 720,
			[
				[left, 22, 26, 0x382215],
				[left, 310, 57, 0x3d3031],
				[left, 58, 60, 0xfcede0],
				[right, 1186, 665, 0xd5c4c2],
				[right, 1219, 624, 0xdeb473],
			]
		],
		oper: [
			[center, 1280, 720, 1181, 640, 1209, 670, 1000],
		]
	}, { // 32 残废组队
		desc: [1280, 720,
			[
				[center, 353, 643, 0xab5fcd],
				[center, 367, 630, 0xe7e5e3],
				[center, 394, 647, 0x7d3fb4],
				[center, 401, 642, 0xaca09d],
				[center, 370, 654, 0xbfb6b3],
			]
		],
		oper: [
			[center, 1280, 720, 361, 633, 397, 662, 1000],
		]
	}, { // 33 首次战斗
		desc: [1280, 720,
			[
				[center, 376, 369, 0xf3e1ca],
				[center, 379, 459, 0xf3e1ca],
				[right, 863, 378, 0xd03849],
				[right, 969, 389, 0xfaf1ea],
				[right, 710, 514, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 557, 494, 727, 528, 1000],
		]
	}, { // 34 战斗x2
		desc: [1280, 720,
			[
				[left, 118, 618, 0xecc5a7],
				[left, 132, 618, 0xe4bd9f],
				[left, 132, 609, 0xe9c3a5],
				[left, 128, 618, 0x733820],
				[left, 119, 610, 0x66341f],
			]
		],
		oper: [
			[center, 1280, 720, 108, 605, 145, 631, 1000],
			[center, 1280, 720, 20, 16, 50, 50, 1000],
			[center, 1280, 720, 692, 402, 790, 440, 1000],
		]
	}, { // 35 个性化推荐
		desc: [1280, 720,
			[
				[right, 730, 595, 0x23b160],
				[right, 878, 629, 0x23b160],
				[center, 376, 586, 0xb22224],
				[center, 560, 633, 0xb22224],
			]
		],
		oper: [
			[center, 1280, 720, 381, 585, 559, 629, 1000],
		]
	}, { // 36 组队大厅界面
		desc: '组队大厅',
		oper: [
			[center, 1280, 720, 1000, 610, 1147, 647, 1000],
		]
	}, { // 37 组队大厅_创建队伍（不带选择副本类型）
		desc: '组队大厅_创建队伍',
		oper: [
			[center, 1280, 720, 407, 417, 430, 441, 1000],
			[center, 1280, 720, 536, 490, 739, 534, 1000], // 经验妖怪界面_创建
		]
	}, { // 38 新手奖励
		desc: [1280, 720,
			[
				[center, 368, 633, 0xe4e1df],
				[center, 353, 644, 0xb062d3],
				[center, 394, 646, 0x7b3db0],
				[center, 375, 656, 0xb9adaa],
				[center, 365, 655, 0xbdb3af],
			]
		],
		oper: [
			[center, 1280, 720, 248, 323, 284, 353, 1000],
		]
	}, { // 39 上阵完成
		desc: [1280, 720,
			[
				[center, 360, 196, 0x151515],
				[center, 364, 228, 0xfcf6f0],
				[center, 363, 258, 0xcc1dea],
				[left, 47, 26, 0xefd48e],
				[left, 34, 36, 0xf7e9ac],
			]
		],
		oper: [
			[center, 1280, 720, 21, 18, 61, 55, 1000],
		]
	}, { // 40 出现珍旅居
		desc: [1280, 720,
			[
				[left, 214, 616, 0x3b332d],
				[left, 237, 615, 0x39322a],
				[left, 214, 651, 0xee7660],
				[left, 239, 652, 0xf17866],
			]
		],
	}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['697'];
		if (create) {
			if (thisScript.oper({
				id: 697,
				name: '选区',
				operator: [thisOperator[1]],
			})) {
				apply = true;
				const prefix = thisconf.name;
				const time = Date.now().toString(36); // 压缩时间戳
				const input = className('android.widget.EditText').findOne(1000);
				if (input) {
					input.setText(prefix as string + time);
					KeyCode(66); // Enter键
					sleep(300);
				} else {
					log('未找到输入框', 'error');
					return false;
				}
				return true;
			}
			if (thisScript.oper({
				id: 697,
				name: '起号',
				operator: [thisOperator[0], thisOperator[2]],
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 697,
				name: '剧情',
				operator: thisOperator.slice(3, 11)
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 697,
				name: '剧情',
				operator: [{ desc: thisOperator[19].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[19].oper[0], thisOperator[19].oper[1], [1000, 1300], 200);
				return true;
			}
			if (thisScript.oper({
				id: 697,
				name: '守护||庭院',
				operator: [thisOperator[22], thisOperator[31]],
			})) {
				create = false;
				return true;
			}
		}
		if (apply) {
			if (thisScript.oper({
				id: 697,
				name: '输入',
				operator: [thisOperator[24]],
			})) {
				const prefix = thisconf.shiFu_name;
				const input = className('android.widget.EditText').findOne(1000);
				if (input) {
					input.setText(prefix as string);
					KeyCode(66); // Enter键
					sleep(1000);
					thisScript.regionClick(thisOperator[25].oper);
				} else {
					log('未找到输入框', 'error');
					return false;
				}
				return true;
			}
			if (thisScript.oper({
				id: 697,
				name: '申请',
				operator: [thisOperator[22], thisOperator[23], thisOperator[26], thisOperator[27]],
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 697,
				name: '申请',
				operator: [thisOperator[28]],
			})) {
				apply = false;
				return true;
			}
		}
		if (thisScript.oper({
			id: 697,
			name: '守护完成',
			operator: [thisOperator[29], thisOperator[30], thisOperator[31]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 697,
			name: '残废组队',
			operator: [thisOperator[32]]
		})) {
			jingYan = true;
			return true;
		}
		if (jingYan) {
			if (getBird) {
				if (thisScript.oper({
					id: 697,
					name: '残废组队',
					operator: [thisOperator[38]]
				})) {
					return true;
				}
				if (thisScript.oper({
					id: 697,
					name: '残废组队',
					operator: [thisOperator[39]]
				})) {
					getBird = false;
					return true;
				}
			}
			if (thisScript.oper({
				id: 697,
				name: '残废组队',
				operator: [thisOperator[33], thisOperator[34], thisOperator[35], thisOperator[36]
					, thisOperator[37]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 697,
				name: '残废组队',
				operator: [thisOperator[40]]
			})) {
				jingYan = false;
				return true;
			}
			const point = thisScript.findMultiColor('皮肤广告关闭按钮');
			if (point) {
				console.log('识别广告关闭按钮成功');
				const oper = [[point.x - 10, point.y - 10, point.x, point.y, 3000]];
				thisScript.regionClick(oper);
				return true;
			}
		}
		if (thisScript.oper({
			id: 697,
			name: '杂项',
			operator: [thisOperator[10]]
		})) {
			return true;
		}
		const point = thisScript.findMultiColor('红手指');
		if (point) {
			thisScript.regionClick([[point.x, point.y, point.x + 3, point.y + 3, 1000]])
			return true;
		}
	}
}