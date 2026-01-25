import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1102 implements IFuncOrigin {
	id = 1102;
	name = '每周商店购买';
	desc: '';
	config = [{
		desc: '',
		config: [{
			name: 'jiShouWu',
			desc: '寄售屋买票',
			type: 'switch',
			default: true,
		}]
	}, {
		desc: '',
		config: [{
			name: 'miJuanWu',
			desc: '秘卷屋买紫蛇皮御魂',
			type: 'switch',
			default: true,
		}]
	}, {
		desc: '杂货铺_特殊',
		config: [{
			name: 'teSu_yuling',
			desc: '买御灵票',
			type: 'switch',
			default: false,
		}, {
			name: 'teSu_qiling',
			desc: '买契灵盘',
			type: 'switch',
			default: false,
		}]
	}, {
		desc: '杂货铺_荣誉',
		config: [{
			name: 'rongYu_lanPiao',
			desc: '买蓝票',
			type: 'switch',
			default: true,
		}, {
			name: 'rongYu_heiSui',
			desc: '买黑碎',
			type: 'switch',
			default: true,
		}, {
			name: 'rongYu_sePi',
			desc: '买金蛇皮',
			type: 'switch',
			default: false,
		}, {
			name: 'rongYu_fengMo',
			desc: '买逢魔皮',
			type: 'switch',
			default: false,
		}, {
			name: 'rongYu_qingJiGui',
			desc: '买青吉鬼',
			type: 'switch',
			default: false,
		}]
	}, {
		desc: '杂货铺_友情',
		config: [{
			name: 'youQing_baiDan',
			desc: '买白蛋',
			type: 'switch',
			default: true,
		}]
	}, {
		desc: '杂货铺_勋章',
		config: [{
			name: 'oper_25',
			desc: '买蓝票',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_26',
			desc: '买黑碎',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_27',
			desc: '买御魂',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_28',
			desc: '买白蛋',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_29',
			desc: '买式神挑战券',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_30',
			desc: '买体力',
			type: 'switch',
			default: true,
		}]
	}, {
		desc: '杂货铺_魅力',
		config: [{
			name: 'meiLi_lanPiao',
			desc: '买蓝票',
			type: 'switch',
			default: true,
		}, {
			name: 'meiLi_heiSui',
			desc: '买黑碎',
			type: 'switch',
			default: true,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院_商店
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 660, 626, 697, 664, 1200], //  庭院点击商店
		],
	}, { // 1 拓展包关闭
		desc: [
			1280, 720,
			[
				[left, 319, 382, 0xd6c8a8],
				[center, 440, 165, 0x6b4837],
				[center, 591, 478, 0xf3b25e],
				[center, 926, 156, 0xe8d4cf],
			]
		],
		oper: [
			[center, 1280, 720, 905, 142, 945, 173, 1000],
		]
	}, { // 2 寄售屋
		desc: [
			1280, 720,
			[
				[left, 213, 671, 0x2a211f],
				[left, 222, 668, 0x8f5d2a],
				[left, 235, 669, 0xdfae5e],
				[left, 260, 667, 0x9b6634],
				[left, 270, 668, 0x322620],
				[left, 238, 647, 0x402f2e],
			]
		],
		oper: [
			[center, 1280, 720, 219, 652, 257, 680, 1000],
		]
	}, { // 3 寄售屋_兑换
		desc: [
			1280, 720,
			[
				[right, 1187, 121, 0xfce4c4],
				[right, 1227, 133, 0xfbe0bc],
				[right, 1187, 340, 0x987e71],
				[right, 1225, 326, 0x997f71],
			]
		],
		oper: [
			[center, 1280, 720, 1182, 312, 1224, 359, 1000],
		]
	}, { // 4 寄售屋_购买
		desc: [
			1280, 720,
			[
				[right, 1191, 341, 0xfee5c6],
				[right, 1221, 346, 0xfddbb2],
				[center, 698, 332, 0xb9ad9a],
				[center, 738, 336, 0xe92f14],
				[center, 798, 333, 0xada18f],
			]
		],
		oper: [
			[center, 1280, 720, 717, 207, 783, 266, 1000],
		]
	}, { // 5 寄售屋_购买_确认
		desc: [
			1280, 720,
			[
				[center, 430, 123, 0x5b3c3f],
				[center, 805, 122, 0x53383c],
				[center, 633, 245, 0x5e1ba1],
				[center, 588, 546, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 758, 438, 800, 474, 1000],
			[center, 1280, 720, 563, 530, 708, 578, 1000],
		]
	}, { // 6 寄售屋_完成
		desc: [
			1280, 720,
			[
				[center, 490, 444, 0x331944],
				[center, 539, 446, 0x311846],
				[center, 573, 461, 0x492165],
				[center, 569, 492, 0x391653],
				[center, 515, 500, 0x2e1541],
			]
		]
	}, { // 7 秘卷屋
		desc: [
			1280, 720,
			[
				[center, 466, 677, 0x4b382a],
				[center, 482, 678, 0xb3ad99],
				[center, 505, 668, 0xb0a893],
				[center, 512, 658, 0x9e434a],
				[center, 529, 672, 0xcac7b9],
				[center, 541, 673, 0x433327],
			]
		],
		oper: [
			[center, 1280, 720, 475, 660, 532, 693, 1000],
		]
	}, { // 8 秘卷屋_兑换
		desc: [
			1280, 720,
			[
				[left, 51, 215, 0x9b2d27],
				[left, 68, 217, 0x9b2d27],
				[left, 50, 356, 0x9b2d27],
				[left, 69, 354, 0x9b2d27],
				[left, 124, 273, 0xac811a],
				[left, 174, 304, 0xd6ab27],
			]
		],
		oper: [
			[center, 1280, 720, 191, 492, 214, 519, 1000],
		]
	}, { // 9 秘卷屋_购买
		desc: [
			1280, 720,
			[
				[center, 437, 127, 0x8c4f19],
				[center, 812, 120, 0x954c21],
				[center, 488, 456, 0xffdda4],
				[center, 574, 550, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 762, 433, 802, 475, 1000],
			[center, 1280, 720, 562, 528, 715, 571, 3000],
			[center, 1280, 720, 1244, 575, 1271, 601, 1000],
		]
	}, { // 10 杂货铺
		desc: [
			1280, 720,
			[
				[center, 867, 675, 0x4a372a],
				[center, 882, 677, 0x3c7bcf],
				[center, 890, 679, 0x2c63bd],
				[center, 910, 676, 0xe1c97d],
				[center, 931, 675, 0x3b2d22],
			]
		],
		oper: [
			[center, 1280, 720, 880, 665, 919, 691, 1000],
		]
	}, { // 11 杂货铺_特殊
		desc: [
			1280, 720,
			[
				[right, 1190, 110, 0xf0d7c0],
				[right, 1190, 146, 0xf8d2ad],
				[right, 1227, 111, 0xf2d5bb],
				[right, 1226, 145, 0xf8cca3],
				[right, 1208, 125, 0xfee3c1],
			]
		],
		oper: [
			[center, 1280, 720, 1107, 517, 1136, 542, 1000],
			[center, 1280, 720, 1082, 43, 1113, 74, 1000],
		]
	}, { // 12 杂货铺_购买确认
		desc: [1280, 720,
			[
				[right, 792, 188, 0xd3bda4],
				[center, 482, 177, 0xd0b79c],
				[center, 552, 477, 0x634e47],
				[right, 642, 476, 0x634f47],
				[center, 568, 572, 0xf3b25e],
				[right, 710, 574, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 771, 464, 796, 489, 1000],
			[center, 1280, 720, 624, 561, 682, 581, 1000],
		]
	}, { // 13 契灵盘_溢出
		desc: [
			1280, 720,
			[
				[center, 455, 222, 0x6a4736],
				[center, 838, 221, 0x654535],
				[center, 449, 494, 0x624233],
				[center, 832, 492, 0x624232],
				[center, 573, 421, 0xdf6851],
				[center, 701, 420, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 480, 400, 587, 443, 1000],
			[center, 1280, 720, 1086, 446, 1131, 490, 1000],
		]
	}, { // 14 杂货铺_荣誉
		desc: [
			1280, 720,
			[
				[right, 1189, 246, 0x8e766a],
				[right, 1227, 199, 0xb39385],
				[right, 1229, 233, 0x977e70],
				[right, 1205, 232, 0x977e70],
				[right, 1198, 262, 0x7c6559],
			]
		],
		oper: [
			[center, 1280, 720, 1187, 198, 1227, 239, 1000],
		]
	}, { // 15 杂货铺_荣誉内
		desc: [
			1280, 720,
			[
				[right, 1192, 203, 0xf6daba],
				[right, 1190, 235, 0xf8cca3],
				[right, 1226, 198, 0xebd4c8],
				[right, 1227, 221, 0xfbddb8],
			]
		],
		oper: [
			[center, 1280, 720, 1107, 517, 1136, 542, 1000],
			[center, 1280, 720, 1082, 43, 1113, 74, 1000],
		]
	}, { // 16 购买确认_一行字
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
	}, { // 17 购买确认_二行字
		desc: [
			1280, 720,
			[
				[center, 566, 550, 0xf3b25e],
				[center, 562, 581, 0xf3b25e],
				[center, 713, 582, 0xf1af5d],
				[center, 712, 545, 0xf4b35e],
				[center, 772, 467, 0x462b22],
				[right, 795, 453, 0x3e2c2a],
			]
		],
		oper: [
			[center, 1280, 720, 763, 448, 799, 488, 1000],
			[center, 1280, 720, 561, 543, 714, 584, 1000],
			[center, 1280, 720, 1042, 176, 1187, 585, 500],
		]
	}, { // 18 购买确认_三行字
		desc: [
			1280, 720,
			[
				[center, 570, 562, 0xf3b25e],
				[center, 571, 590, 0xf3b25e],
				[right, 708, 564, 0xf3b25e],
				[right, 709, 588, 0xf3b25e],
				[right, 784, 469, 0xfddba2],
				[right, 800, 467, 0x402e2c],
			]
		],
		oper: [
			[center, 1280, 720, 761, 462, 800, 498, 1000],
			[center, 1280, 720, 560, 556, 715, 598, 1000],
			[center, 1280, 720, 1042, 176, 1187, 585, 500],
		]
	}, { // 19 杂货铺_友情
		desc: [
			1280, 720,
			[
				[right, 1185, 314, 0x9b8174],
				[right, 1190, 347, 0x8f776b],
				[right, 1230, 309, 0xa5887b],
				[right, 1234, 350, 0x7c6458],
			]
		],
		oper: [
			[center, 1280, 720, 1194, 309, 1224, 353, 1000],
		]
	}, { // 20 友情内_白蛋
		desc: [
			1280, 720,
			[
				[center, 656, 211, 0xc89020],
				[center, 723, 211, 0xf9f5ec],
				[center, 694, 167, 0xf8e6d3],
				[center, 687, 230, 0x632f12],
				[center, 676, 176, 0x292324],
			]
		],
		oper: [
			[center, 1280, 720, 674, 174, 720, 236, 1000],
		]
	}, { // 21 白蛋_购买确认
		desc: [
			1280, 720,
			[
				[center, 438, 138, 0x26325f],
				[center, 813, 141, 0x263054],
				[center, 567, 516, 0xf3b25e],
				[center, 711, 526, 0xf3b25e],
				[center, 607, 547, 0xe3f0eb],
			]
		],
		oper: [
			[center, 1280, 720, 563, 511, 712, 551, 1000],
		]
	}, { // 22 白蛋_完成
		desc: [
			1280, 720,
			[
				[center, 676, 178, 0x0f0d0d],
				[center, 712, 180, 0x0f0d0d],
				[center, 692, 152, 0x5b5b5b],
				[center, 691, 200, 0x584d46],
				[center, 675, 227, 0x2f2e2e],
			]
		]
	}, { // 23 杂货铺_勋章
		desc: [
			1280, 720,
			[
				[right, 1190, 413, 0x9c8274],
				[right, 1192, 451, 0x856e63],
				[right, 1232, 406, 0xa98a7e],
				[right, 1234, 457, 0x836c5f],
			]
		],
		oper: [
			[center, 1280, 720, 1192, 408, 1230, 455, 1000],
		]
	}, { // 24 杂货铺_勋章内
		desc: [
			1280, 720,
			[
				[right, 1189, 415, 0xf7dcbc],
				[right, 1191, 457, 0xf6c49c],
				[right, 1231, 404, 0xe9d0c4],
				[right, 1230, 459, 0xf5c29a],
			]
		]
	}, { // 25 勋章_蓝票
		desc: [
			1280, 720,
			[
				[left, 244, 188, 0xcbd9e2],
				[left, 232, 151, 0xa0cbdd],
				[left, 257, 160, 0x89b9d1],
				[left, 244, 207, 0x32245f],
				[left, 178, 291, 0xbb894d],
			]
		],
		oper: [
			[center, 1280, 720, 224, 156, 274, 228, 1000],
		]
	}, { // 26 勋章_黑蛋
		desc: [
			1280, 720,
			[
				[center, 691, 195, 0xffe7d4],
				[center, 708, 176, 0x2a2727],
				[center, 680, 175, 0xffffff],
				[center, 655, 222, 0x62422e],
				[center, 698, 224, 0x474747],
				[center, 673, 239, 0x2d2b2a],
			]
		],
		oper: [
			[center, 1280, 720, 661, 177, 725, 248, 1000],
		]
	}, { // 27 勋章_御魂
		desc: [
			1280, 720,
			[
				[left, 254, 423, 0xfff1b7],
				[left, 232, 422, 0xbe8e1b],
				[left, 202, 418, 0xd1c985],
				[left, 233, 395, 0x9d7a21],
				[left, 213, 478, 0xb43528],
				[left, 276, 484, 0xb63a29],
			]
		],
		oper: [
			[center, 1280, 720, 213, 405, 277, 478, 1000],
		]
	}, { // 28 勋章_白蛋
		desc: [
			1280, 720,
			[
				[center, 470, 446, 0xf5d7c2],
				[center, 457, 427, 0x2a2424],
				[center, 488, 426, 0x2a2424],
				[center, 436, 477, 0x9e9d9d],
				[center, 493, 476, 0x8f8c8c],
			]
		],
		oper: [
			[center, 1280, 720, 438, 408, 495, 484, 1000],
		]
	}, { // 29 勋章_式神挑战券
		desc: [
			1280, 720,
			[
				[center, 699, 419, 0x7a2417],
				[center, 689, 396, 0x7b2215],
				[center, 667, 439, 0xccced2],
				[center, 680, 479, 0xcb5f51],
				[center, 717, 461, 0xc24c42],
			]
		],
		oper: [
			[center, 1280, 720, 673, 419, 719, 472, 1000],
		]
	}, { // 30 勋章_体力
		desc: [
			1280, 720,
			[
				[center, 915, 431, 0xff7f2b],
				[center, 888, 456, 0x0f0f0e],
				[center, 910, 477, 0x161814],
				[center, 931, 482, 0x20251c],
				[center, 949, 472, 0x1d2018],
				[center, 930, 435, 0xfe5a2a],
				[center, 903, 447, 0xd14420],
			]
		],
		oper: [
			[center, 1280, 720, 885, 418, 942, 468, 1000],
		]
	}, { // 31 勋章_暗部(有弹窗)
		desc: [
			1280, 720,
			[
				[right, 1225, 122, 0x3f342e],
				[right, 1225, 213, 0x3f342e],
				[right, 1235, 302, 0x3b302b],
				[right, 1224, 400, 0x685a48],
				[right, 1231, 489, 0x403630],
			]
		]
	}, { // 32 御魂购买成功
		desc: [
			1280, 720,
			[
				[center, 525, 78, 0xe7d798],
				[center, 611, 86, 0xd3bf78],
				[center, 680, 92, 0xbba361],
				[center, 762, 97, 0xa68a50],
			]
		],
		oper: [
			[center, 1280, 720, 1086, 355, 1136, 423, 1000],
		]
	}, { // 33 杂货铺_魅力
		desc: [
			1280, 720,
			[
				[right, 1188, 511, 0xa28679],
				[right, 1193, 558, 0x836d61],
				[right, 1231, 512, 0xa6897b],
				[right, 1231, 560, 0x7d655a],
			]
		],
		oper: [
			[center, 1280, 720, 1191, 510, 1230, 556, 1000],
		]
	}, { // 34 杂货铺_蓝票
		desc: [
			1280, 720,
			[
				[center, 688, 217, 0x452e6a],
				[center, 658, 215, 0x38255f],
				[center, 684, 166, 0x87b6ce],
				[center, 712, 220, 0x201554],
				[center, 685, 233, 0x448fb8],
			]
		],
		oper: [
			[center, 1280, 720, 667, 163, 719, 224, 1000],
		]
	}, { // 35 杂货铺_黑碎
		desc: [1280, 720,
			[
				[right, 952, 472, 0x3e3c3c],
				[right, 951, 480, 0xad883e],
				[right, 941, 473, 0x595555],
				[right, 895, 475, 0x575453],
				[right, 875, 397, 0xff9c45],
			]
		],
		oper: [
			[center, 1280, 720, 887, 419, 953, 474, 1000],
		]
	}, { // 36 杂货铺_魅力内
		desc: [
			1280, 720,
			[
				[right, 1188, 515, 0xf4d6b8],
				[right, 1193, 556, 0xf7caa4],
				[right, 1229, 513, 0xf6d6b7],
				[right, 1231, 555, 0xf8d0a7],
			]
		]
	}, { // 37 魅力_蓝票购买确认
		desc: [
			1280, 720,
			[
				[center, 441, 154, 0x603f6e],
				[center, 797, 151, 0x523b64],
				[center, 631, 276, 0x87b7ce],
				[center, 565, 505, 0xf3b25e],
				[center, 702, 531, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 567, 501, 707, 539, 1000],
		]
	}, { // 38 聊天框
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 1203, 31, 1240, 59, 1000],
		]
	}, { // 39 直播
		desc: [
			1280, 720,
			[
				[center, 613, 120, 0xbf9e62],
				[center, 643, 109, 0xf7f2bb],
				[center, 641, 135, 0xc4a366],
				[center, 630, 124, 0x5e3a16],
			]
		],
		oper: [
			[center, 1280, 720, 616, 123, 647, 146, 1000],
		]
	}, { // 40 cc直播
		desc: [
			1280, 720,
			[
				[left, 83, 181, 0x78502f],
				[left, 125, 229, 0x73c5fb],
				[left, 179, 188, 0xe8d6c1],
				[left, 245, 182, 0x785030],
				[left, 243, 250, 0x78502f],
				[left, 135, 226, 0x73c5fb],
			]
		],
		oper: [
			[center, 1280, 720, 91, 191, 238, 240, 1000],
		]
	}, { // 41 进入直播间
		desc: [
			1280, 720,
			[
				[right, 1174, 619, 0x871432],
				[right, 1201, 628, 0x99bac9],
				[right, 1186, 650, 0xfff2f0],
				[right, 1173, 653, 0xffe9e5],
				[right, 1160, 647, 0x8798b7],
			]
		],
		oper: [
			[center, 1280, 720, 343, 196, 511, 282, 1000],
		]
	}, { // 42 打开礼物
		desc: [
			1280, 720,
			[
				[center, 834, 674, 0xbfa587],
				[center, 931, 695, 0xc2ae91],
				[right, 986, 670, 0xbda283],
				[right, 1001, 693, 0x4a372c],
				[right, 1017, 692, 0x4a372c],
			]
		],
		oper: [
			[center, 1280, 720, 987, 667, 1028, 700, 1000],
		]
	}, { // 43 捐礼物
		desc: [
			1280, 720,
			[
				[right, 1157, 111, 0xe1ac3c],
				[right, 1176, 120, 0xefa428],
				[right, 1189, 138, 0xf0e2b5],
				[right, 1150, 133, 0x78c4d3],
				[right, 1123, 238, 0xdab656],
			]
		],
		oper: [
			[center, 1280, 720, 1140, 124, 1196, 200, 1000],
			[center, 1280, 720, 1011, 655, 1057, 683, 1000],
			[center, 1280, 720, 1134, 651, 1248, 687, 1000],
		]
	}, { // 44 直播间返回
		desc: [
			1280, 720,
			[
				[left, 26, 15, 0x5c362b],
				[left, 26, 48, 0x603a2e],
				[left, 40, 35, 0xefd3b6],
				[left, 49, 24, 0xeacfae],
				[left, 75, 23, 0x6d4034],
			]
		],
		oper: [
			[center, 1280, 720, 28, 16, 73, 55, 1000],
		]
	}, { // 45 直播代理人
		desc: [
			1280, 720,
			[
				[right, 1175, 620, 0x86082c],
				[right, 1153, 648, 0xa04b5c],
				[right, 1161, 649, 0x8595b7],
				[right, 1175, 654, 0xffe7e2],
				[right, 1184, 643, 0xfef4f3],
			]
		],
		oper: [
			[center, 1280, 720, 1155, 623, 1203, 665, 1000],
		]
	}, { // 46 红蛋
		desc: [
			1280, 720,
			[
				[right, 1156, 491, 0x84082c],
				[right, 1163, 525, 0xfff2f0],
				[right, 1142, 603, 0x9a0630],
				[right, 1152, 704, 0xfff1ef],
				[right, 1208, 590, 0x262c51],
			]
		],
		oper: [
			[center, 1280, 720, 1025, 687, 1044, 708, 2000],
			[center, 1280, 720, 528, 673, 580, 706, 1000],
			[center, 1280, 720, 528, 673, 580, 706, 1000],
		]
	}, { // 47 直播返回
		desc: [
			1280, 720,
			[
				[right, 1203, 635, 0x9ebac6],
				[right, 1193, 633, 0xf8f6f6],
				[right, 1181, 647, 0xfef2f2],
				[right, 1179, 630, 0x76092a],
				[right, 1175, 621, 0x86082c],
			]
		],
		oper: [
			[center, 1280, 720, 25, 16, 60, 45, 1000],
		]
	}, { // 48 直播卡加载
		desc: [1280, 720,
			[
				[left, 22, 19, 0x251612],
				[left, 83, 19, 0x271813],
				[left, 41, 34, 0x5f5449],
				[left, 53, 33, 0x5e5347],
				[left, 67, 34, 0x5c4d44],
				[left, 76, 58, 0x261712],
			]
		],
		oper: [
			[center, 1280, 720, 28, 19, 80, 55, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['1102'];
		if (thisScript.global.MT_shop === 'zhiBo') { // 直播魅力值
			if (!thisConf.meiLi_lanPiao && !thisConf.meiLi_heiSui) {
				thisScript.global.MT_shop = 'jiShouWu';
				return true;
			}
			if (!thisScript.global.zhiBoBack && thisScript.oper({
				id: 1102,
				name: '直播魅力值',
				operator: [thisOperator[38], thisOperator[39], thisOperator[40], thisOperator[41]
					, thisOperator[42]]
			})) {
				return true;
			}
			if (!thisScript.global.zhiBoBack && thisScript.oper({
				id: 1102,
				name: '直播魅力值',
				operator: [thisOperator[43]]
			})) {
				thisScript.global.zhiBoBack = true;
				return true;
			}
			if (thisScript.global.zhiBoBack && thisScript.oper({
				id: 1102,
				name: '直播魅力值',
				operator: [thisOperator[40], thisOperator[44], thisOperator[45]]
			})) {
				return true;
			}
			if (thisScript.global.zhiBoBack && thisScript.oper({
				id: 1102,
				name: '直播魅力值返回',
				operator: [thisOperator[46]]
			})) {
				thisScript.global.MT_shop = 'jiShouWu';
				return true;
			}
			let curCnt_min = 0;
			const maxCount_max = 5;
			while (thisScript.oper({
				id: 1102,
				name: '直播卡加载',
				operator: [{ desc: thisOperator[48].desc }]
			})) {
				curCnt_min++;
				thisScript.keepScreen();
				if (curCnt_min >= maxCount_max) {
					thisScript.myToast('直播加载失败，已跳过');
					thisScript.regionClick(thisOperator[48].oper);
					thisScript.global.MT_shop = 'jiShouWu';
					return false;
				}
				sleep(1000);
			}
		}
		if (thisScript.global.MT_shop === 'jiShouWu') { // 寄售屋买票
			if (!thisConf.jiShouWu) {
				thisScript.global.MT_shop = 'miJuanWu';
				return true;
			}
			if (thisScript.oper({
				id: 1102,
				name: '商店_寄售屋',
				operator: [thisOperator[2], thisOperator[3], thisOperator[4], thisOperator[5]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 1102,
				name: '商店_寄售屋完成',
				operator: [thisOperator[6]]
			})) {
				thisScript.global.MT_shop = 'miJuanWu';
				return true;
			}
		}
		if (thisScript.global.MT_shop === 'miJuanWu') { // 秘卷屋买御魂
			if (!thisConf.miJuanWu) {
				thisScript.global.MT_shop = 'zaHuoPu_teSu';
				return true;
			}
			if (thisScript.oper({
				id: 1102,
				name: '秘卷屋_买御魂',
				operator: [thisOperator[7]]
			})) {
				return true;
			}
			let curCnt = 0;
			const maxCount = 3;
			while (thisScript.oper({
				id: 1102,
				name: '杂货铺_特殊',
				operator: [thisOperator[8]]
			})) {
				curCnt++;
				if (curCnt >= maxCount) {
					thisScript.global.MT_shop = 'zaHuoPu_teSu';
					break;
				}
				thisScript.keepScreen(false);
				sleep(500);
			}
			if (thisScript.oper({
				id: 1102,
				name: '秘卷屋_完成',
				operator: [thisOperator[9]]
			})) {
				thisScript.global.MT_shop = 'zaHuoPu_teSu';
				return true;
			}
		}
		if (!(thisScript.global.MT_shop === 'done') && thisScript.oper({
			id: 1102,
			name: '商店',
			operator: [thisOperator[0], thisOperator[1], thisOperator[10], thisOperator[47]]
		})) {
			return true;
		}
		if (thisScript.global.MT_shop === 'zaHuoPu_teSu') { // 杂货铺买特殊
			if (thisScript.oper({
				id: 1102,
				name: '杂货铺_特殊',
				operator: [thisOperator[10], thisOperator[12]]
			})) {
				return true;
			}
			if (!thisConf.teSu_yuling && !thisConf.teSu_qiling) {
				thisScript.global.MT_shop = 'zaHuoPu_rongYu';
				return true;
			}
			if (thisScript.oper({
				id: 1102,
				name: '杂货铺_溢出',
				operator: [thisOperator[13]]
			})) {
				thisScript.global.MT_shop = 'zaHuoPu_rongYu';
				return true;
			}
			let curCnt = 0;
			const maxCount = 3;
			while (thisScript.oper({
				id: 1102,
				name: '杂货铺_特殊',
				operator: [{ desc: thisOperator[11].desc }]
			})) {
				let point = null;
				if (thisConf.teSu_yuling) {
					point = thisScript.findMultiColor('御灵票');
				}
				if (!point && thisConf.teSu_qiling) {
					point = thisScript.findMultiColor('契灵盘');
				}
				if (point) {
					thisScript.regionClick([[point.x - 15, point.y - 15, point.x + 15, point.y + 15, 200]]);
					return true;
				}
				curCnt++;
				if (curCnt > maxCount) {
					thisScript.global.MT_shop = 'zaHuoPu_rongYu';
					break;
				}
				thisScript.regionSwipe(thisOperator[11].oper[0], thisOperator[11].oper[1], [1500, 1550], 500);
				thisScript.keepScreen(false);
				sleep(500);
			}
		}
		if (thisScript.global.MT_shop === 'zaHuoPu_rongYu') { // 杂货铺买荣誉
			if (thisScript.global.shop_find === null) {
				thisScript.global.shop_find = Object.keys(thisConf).filter(keyName => /rongYu/.test(keyName) && thisConf[keyName])
				if (thisScript.global.shop_find.length === 0) {
					thisScript.global.MT_shop = 'zaHuoPu_youQing';
					return true;
				}
			}
			if (thisScript.oper({
				id: 1102,
				name: '杂货铺_荣誉',
				operator: [thisOperator[14], thisOperator[12], thisOperator[16], thisOperator[17]
					, thisOperator[18]]
			})) {
				return true;
			}
			let curCnt = 0;
			const maxCount = 3;
			while (thisScript.oper({
				id: 1102,
				name: '杂货铺_荣誉',
				operator: [{ desc: thisOperator[15].desc }]
			})) {
				let point = null;
				if (thisScript.global.shop_find.length > 0) {
					for (let i = 0; i < thisScript.global.shop_find.length; i++) {
						point = thisScript.findMultiColor(thisScript.global.shop_find[i]);
						if (point) {
							thisScript.regionClick([[point.x - 15, point.y - 15, point.x + 15, point.y + 15, 200]]);
							thisScript.global.shop_find.splice(i, 1);
							i--;
							return true;
						}
					}
				} else {
					thisScript.global.MT_shop = 'zaHuoPu_youQing'; // 物品已买完
					break;
				}
				curCnt++;
				thisScript.regionSwipe(thisOperator[15].oper[0], thisOperator[15].oper[1], [1500, 1550], 500);
				if (curCnt >= maxCount) {
					thisScript.global.MT_shop = 'zaHuoPu_youQing';
					break;
				}
				thisScript.keepScreen(false);
				sleep(500);
			}
		}
		if (thisScript.global.MT_shop === 'zaHuoPu_youQing') { // 杂货铺买友情
			if (!thisConf.youQing_baiDan || thisScript.oper({
				id: 1102,
				name: '杂货铺_完成',
				operator: [thisOperator[22]]
			})) {
				thisScript.global.MT_shop = 'zaHuoPu_xunZhang';
				return true;
			}
			if (thisScript.oper({
				id: 1102,
				name: '杂货铺_友情',
				operator: [thisOperator[19], thisOperator[20], thisOperator[21]]
			})) {
				return true;
			}
		}
		if (thisScript.global.MT_shop === 'zaHuoPu_xunZhang') { // 杂货铺买勋章
			const enabledThisOperator = Object.keys(thisConf)
				.filter(keyName => /oper_\d+/.test(keyName) && thisConf[keyName])
				.map(keyName => ({
					index: parseInt(keyName.split('_')[1]),
					value: thisOperator[parseInt(keyName.split('_')[1])]
				}))
				.sort((a, b) => b.index - a.index) // 按 index 从大到小排序
				.map(item => item.value); // 取排序后的 value
			if (enabledThisOperator.length === 0) {
				thisScript.global.MT_shop = 'zaHuoPu_meiLi';
				return true;
			}
			if (thisScript.oper({
				id: 1102,
				name: '杂货铺_勋章',
				operator: [thisOperator[23], thisOperator[16], thisOperator[32],]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 1102,
				name: '杂货铺_勋章',
				operator: [thisOperator[31]]
			})) {
				const point = thisScript.findMultiColor('黄色确认按钮');
				if (point) {
					thisScript.regionClick([[point.x, point.y, point.x + 15, point.y + 15, 1000]]);
					return true;
				}
				return true;
			}
			let curCnt = 0;
			const maxCount = 3;
			while (thisScript.oper({
				id: 1102,
				name: '杂货铺_勋章',
				operator: [thisOperator[24]]
			})) {
				if (thisScript.oper({
					id: 1102,
					name: '杂货铺_勋章',
					operator: enabledThisOperator
				})) {
					return true;
				}
				curCnt++;
				if (curCnt >= maxCount) {
					thisScript.global.MT_shop = 'zaHuoPu_meiLi';
					break;
				}
				thisScript.keepScreen(false);
				sleep(500);
			}
		}
		if (thisScript.global.MT_shop === 'zaHuoPu_meiLi') { // 杂货铺买魅力
			if (!thisConf.meiLi_lanPiao && !thisConf.meiLi_heiSui) {
				thisScript.global.MT_shop = 'done';
				return true;
			}
			if (thisScript.oper({
				id: 1102,
				name: '杂货铺_魅力',
				operator: [thisOperator[33], thisOperator[16], thisOperator[37]]
			})) {
				return true;
			}
			let curCnt = 0;
			const maxCount = 3;
			while (thisScript.oper({
				id: 1102,
				name: '杂货铺_特殊',
				operator: [{ desc: thisOperator[36].desc }]
			})) {
				if (thisConf.meiLi_heiSui && thisScript.oper({
					id: 1102,
					name: '杂货铺_黑碎',
					operator: [thisOperator[35]]
				})) {
					return true;
				}
				if (thisConf.meiLi_lanPiao && thisScript.oper({
					id: 1102,
					name: '杂货铺_蓝票',
					operator: [thisOperator[34]]
				})) {
					return true;
				}
				curCnt++;
				if (curCnt >= maxCount) {
					thisScript.global.MT_shop = 'done';
					break;
				}
				thisScript.keepScreen(false);
				sleep(500);
			}
		}
		return false;
	}
}