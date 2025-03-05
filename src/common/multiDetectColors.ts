import { IMultiDetectColorsOrigin } from '@/interface/IMultiColor';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

const multiDetectColors: IMultiDetectColorsOrigin = {
	'准备界面_未准备': {
		desc: [
			1280, 720,
			[
				[right, 1240, 702, 0xcead83],
				[right, 1182, 586, 0xf7e6c3],
				[center, 360, 699, 0x241818],
				[left, 32, 23, 0xdbb48b],
				[right, 1122, 698, 0xddbb8f],
			]
		]
	},
	'准备界面_已准备': {
		desc: [1280, 720,
			[
				[right, 1085, 601, 0xd3aa81],
				[right, 1267, 587, 0xd8bf96],
				[right, 1181, 620, 0xf0deb6],
				[right, 1147, 599, 0x3b3333],
				[left, 34, 41, 0xcea274],
				[left, 178, 52, 0x352824],
				[center, 373, 700, 0x241818],
			]
		]
	},
	'战斗界面': {
		desc: [1280, 720,
			[
				[left, 34, 23, 0xdbb48b],
				[left, 106, 24, 0xcfa375],
				[right, 1270, 132, 0x48371f],
				[right, 1270, 700, 0x241919],
				[right, 1266, 545, 0x573f26],
			]
		]
	},
	'战斗界面_手动状态': {
		desc: [1280, 720,
			[
				[left, 34, 23, 0xdbb48b],
				[left, 106, 24, 0xcfa375],
				[right, 1270, 700, 0x241919],
				[right, 1270, 130, 0x422f1d],
				[left, 48, 670, 0xeec8ab],
				[left, 82, 669, 0xf0caac],
				[left, 48, 661, 0xf0caac],
			]
		],
	},
	'退出结算_左上角贪吃鬼': {
		desc: [1280, 720,
			[
				[left, 50, 66, 0x693430],
				[left, 62, 65, 0xf5f5f5],
				[left, 112, 58, 0x312012],
				[left, 74, 90, 0x927150]
			]
		]
	},
	'退出结算_左上角贪吃鬼_mumu': {
		desc: [1280, 720,
			[
				[left, 50, 66, 0x693430],
				[left, 62, 65, 0xf5f5f5],
				[left, 112, 58, 0x3b2721],
				[left, 74, 90, 0x927150]
			]
		]
	},
	'退出结算_已打开的达摩_1': {
		desc: [1280, 720,
			[
				[center, 482, 611, 0x3c82ca],
				[center, 487, 620, 0x3b84c6],
				[center, 588, 619, 0x300204],
				[center, 712, 621, 0x340204],
				[center, 557, 418, 0xda961f]
			]
		]
	},
	/**
	 * @deprecated
	 */
	'退出结算_已打开的达摩_2': {
		desc: [1280, 720,
			[
				[center, 482, 611, 0x3c82ca],
				[center, 487, 620, 0x3b84c6],
				[center, 588, 619, 0x300204],
				[center, 712, 621, 0x340204]
			]
		]
	},
	'退出结算_已打开的达摩_3': {
		desc: [1280, 720,
			[
				[center, 438, 614, 0x3f84c9],
				[center, 588, 622, 0x340204],
				[center, 722, 618, 0x380204],
				[center, 533, 605, 0x712a0c],
				[center, 471, 612, 0x3b83c9]
			]
		]
	},
	'退出结算_取消确认框_未勾': {
		desc: [1280, 720,
			[
				[center, 460, 258, 0xcbb59e],
				[center, 799, 268, 0xcbb59e],
				[center, 467, 429, 0xdf6851],
				[center, 700, 431, 0xf4b25f],
				[center, 641, 429, 0xcbb59e],
				[center, 560, 356, 0x725f4d]
			]
		]
	},
	'退出结算_再次挑战_取消确认框_未勾': {
		desc: [
			1280, 720,
			[
				[center, 460, 258, 0xcbb59c],
				[center, 799, 268, 0xcbb59c],
				[center, 467, 429, 0xdf6851],
				[center, 700, 431, 0xf3b25e],
				[center, 641, 429, 0xcbb59c],
				[center, 560, 356, 0x3f2e10],
				[center, 541, 278, 0xcbb59c],
				[center, 744, 280, 0xcbb59c],
			]
		]
	},
	'退出结算_取消确认框': {
		desc: [1280, 720,
			[
				[center, 460, 258, 0xcbb59e],
				[center, 799, 268, 0xcbb59e],
				[center, 467, 429, 0xdf6851],
				[center, 700, 431, 0xf4b25f],
				[center, 641, 429, 0xcbb59e]
			]
		]
	},
	'退出结算_单人_胜利太鼓': {
		desc: [1280, 720,
			[
				[center, 481, 159, 0x841b12],
				[center, 458, 207, 0xa11c10],
				[center, 512, 205, 0xa11b10],
				[center, 515, 168, 0xc7b39e],
				[center, 447, 169, 0xc6b5a0],
				[center, 484, 222, 0xd3c4ae],
				[center, 510, 249, 0xd4c4ab]
			]
		]
	},
	'退出结算_组队_胜利太鼓': {
		desc: [1280, 720,
			[
				[center, 482, 104, 0x851b11],
				[center, 456, 148, 0x9e1c10],
				[center, 503, 147, 0x9d1c10],
				[center, 480, 132, 0xcfc0aa],
				[center, 514, 109, 0xc7b5a1],
				[center, 429, 171, 0xd6c9b1]
			]
		],
	},
	'退出结算_斗技_胜利太鼓': {
		desc: [
			1280, 720,
			[
				[center, 482, 104, 0x851b11],
				[center, 480, 132, 0xcfc0aa],
				[center, 514, 109, 0xc7b5a1],
				[center, 429, 171, 0xd6c9b1],
				[center, 510, 148, 0xab1c10],
			]
		]
	},
	'退出结算_单人_失败太鼓': {
		desc: [1280, 720,
			[
				[center, 465, 151, 0x514a5c],
				[center, 447, 189, 0x60566b],
				[center, 496, 192, 0x5b5165],
				[center, 466, 175, 0xb7a78e],
				[center, 502, 154, 0xae9982],
				[center, 418, 210, 0xb6a388]
			]
		]
	},
	'退出结算_组队_失败太鼓': {
		desc: [1280, 720,
			[
				[center, 466, 93, 0x514c5d],
				[center, 448, 135, 0x5d5469],
				[center, 497, 140, 0x5a5365],
				[center, 470, 123, 0xb8a88f],
				[center, 415, 151, 0xb8a589]
			]
		]
	},
	'退出结算_左上角统计图标': {
		desc: [1280, 720,
			[
				[left, 71, 65, 0xac8a5a],
				[left, 80, 59, 0x3c2a21],
				[left, 88, 67, 0xa8835a],
				[left, 77, 82, 0x3a2a22]
			]
		]
	},
	'退出结算_秘闻_胜利太鼓': {
		desc: [1280, 720,
			[
				[center, 816, 101, 0xd1b887],
				[center, 512, 117, 0x9e1c10],
				[center, 455, 122, 0x9f1c10],
				[center, 477, 81, 0x7c1910],
				[center, 481, 102, 0xcebeac],
				[center, 541, 139, 0xd0bfa7]
			]
		]
	},
	'退出结算_御魂溢出确认': {
		desc: [1280, 720,
			[
				[center, 448, 221, 0x684736],
				[center, 829, 222, 0x654434],
				[center, 705, 248, 0xcbb59e],
				[center, 504, 408, 0xcbb59e],
				[center, 762, 415, 0xcbb59e],
				[center, 771, 352, 0xcbb59e],
				[center, 519, 340, 0xcbb59e],
				[center, 604, 411, 0xf4b25f],
				[center, 684, 438, 0xf4b25f],
				[center, 698, 446, 0x923d2c],
				[center, 596, 493, 0x6d4c3b]
			]
		]
	},
	'退出结算_经验金币buff_第一个掉落': {
		desc: [1280, 720,
			[
				[left, 172, 657, 0x97bae0],
				[left, 187, 668, 0xf7e624],
				[left, 339, 668, 0xf7e525],
				[center, 268, 177, 0x52422c],
				[center, 363, 177, 0x5e492c],
				[center, 270, 269, 0x604938]
			]
		]
	},
	'退出结算_体力不足': {
		desc: [1280, 720,
			[
				[center, 586, 471, 0xf7b263],
				[center, 590, 362, 0xfa8f38],
				[center, 670, 366, 0x272420],
				[center, 645, 214, 0xf8f3e0]
			]
		]
	},
	'退出结算_经验金币妖怪_胜利太鼓': {
		desc: [1280, 720,
			[
				[center, 435, 68, 0x831a10],
				[center, 364, 67, 0xc94130],
				[left, 297, 44, 0xc83d2e],
				[center, 754, 81, 0xdfca9b],
				[left, 68, 197, 0x8abdce],
				[left, 140, 215, 0x7a5445],
				[left, 139, 238, 0x2b0910]
			]
		]
	},
	'突破界面': {
		desc: [1280, 720,
			[
				[center, 171, 104, 0x4a3624],
				[center, 564, 89, 0x5e4735],
				[center, 718, 92, 0x583716],
				[center, 728, 86, 0xdebc56],
				[center, 1210, 130, 0xebdac9],
				[center, 1076, 104, 0x4d3826],
			]
		]
	},
	'突破界面_寮': {
		desc: [
			1280, 720,
			[
				[center, 171, 104, 0x4a3624],
				[center, 564, 89, 0x5e4735],
				[center, 718, 92, 0x583716],
				[center, 728, 86, 0xdebc56],
				[center, 1210, 130, 0xebdac9],
				[center, 1076, 104, 0x4d3826],
				[left, 100, 653, 0xcaa97f],
			]
		]
	},
	'探索地图界面': {
		desc: [1280, 720,
			[
				[left, 45, 60, 0xeff5fb],
				[right, 1168, 146, 0xd5cec1],
				[right, 1124, 32, 0xd7b18b],
				[right, 1226, 30, 0xd3af84],
				[left, 18, 705, 0x754830],
				[left, 210, 711, 0x72452f],
			]
		]
	},
	'探索章节_挑战': {
		desc: [
			1280, 720,
			[
				[center, 318, 417, 0xc7af95],
				[center, 358, 133, 0x493625],
				[center, 1046, 135, 0x64323b],
				[center, 986, 539, 0xf3b25e],
				[center, 1095, 545, 0xe5d2ab],
				[center, 511, 562, 0xc7af94],
				[center, 1109, 385, 0x633d21],
			]
		]
	},
	'探索章节_挑战2': {
		desc: [
			1280, 720,
			[
				[center, 289, 124, 0x493625],
				[center, 1053, 125, 0x642d36],
				[center, 990, 532, 0xf3b25e],
				[center, 509, 552, 0xc7af94],
				// [center, 346, 405, 0xc7af95],
				[center, 1122, 419, 0x864e1f],
				[center, 1101, 537, 0xebd9b3],
			]
		]
	},
	'页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰': {
		desc: [
			1280, 720,
			[
				[right, 1208, 637, 0xddd2cc],
				[right, 1189, 668, 0xd9c7c3],
				[right, 1178, 707, 0x371f16],
				[right, 1220, 600, 0x331a12],
				[right, 1188, 645, 0x792413],
			]
		]
	},
	'页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰': {
		desc: [
			1280, 720,
			[
				[right, 1226, 47, 0xcda47a],
				[right, 1228, 646, 0xd6c6c3],
				[center, 366, 56, 0xf9cf9a],
				[right, 1154, 40, 0xd7b288],
			]
		],
	},
	'页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰': {
		desc: [1280, 720,
			[
				[right, 1223, 662, 0xdbcbc7],
				[right, 1155, 41, 0xd7b188],
				[center, 451, 631, 0xe8e4e1],
				[center, 673, 651, 0xdb8b3f],
			],
		],
	},
	'庭院已打开菜单_另另外一种图标': {
		desc: [1280, 720,
			[
				[right, 1223, 658, 0xdac9c4],
				[right, 1155, 41, 0xd6b187],
				[center, 451, 631, 0xe6e3e1],
				[center, 683, 657, 0xda6b29],
			],
		],
	},
	'BUFF界面': {
		desc: [
			1280, 720,
			[
				[center, 342, 529, 0x828270],
				[center, 938, 533, 0x6b715d],
				[center, 371, 128, 0xd4c6bc],
				[center, 908, 145, 0xddd0c6],
				[center, 407, 534, 0x8e8b79],
				[center, 371, 510, 0x868471],
				[center, 913, 149, 0xddd0c6],
			]
		]
	},
	'斗技主界面': {
		desc: [1280, 720,
			[
				[right, 1208, 178, 0x745845],
				[right, 1202, 574, 0xd8c8a7],
				[right, 1179, 602, 0x3c1e0c],
				[right, 1202, 643, 0xe2cfa0],
				[right, 1180, 624, 0xe2cca1],
				[right, 1189, 626, 0x3c1e0c],
				[center, 843, 290, 0x6e3926],
				[center, 842, 288, 0x713a2a],
			],
		],
	},
	'斗技主界面_名士': {
		desc: [
			1280, 720,
			[
				[left, 36, 24, 0xf7eaab],
				[center, 685, 356, 0x06295c],
				[right, 1228, 621, 0xd6c095],
				[right, 1203, 602, 0x3b1e0d],
				[center, 798, 40, 0x593615],
				[right, 1210, 80, 0x7b654f],
				[left, 212, 624, 0xe67a59],
			]
		]
	},
	'巅峰斗技主界面': {
		desc: [1280, 720,
			[
				[right, 1232, 617, 0xd2bb90],
				[right, 1189, 627, 0x3b1e0d],
				[right, 1190, 109, 0xd7ae7d],
				[left, 38, 25, 0xf5e5a6],
				[left, 223, 31, 0x593716],
				[right, 714, 19, 0x8a4526],
				[right, 743, 38, 0xecd79a],
			]
		],
	},
	'巅峰斗技主界面_段位保护': {
		desc: [1280, 720,
			[
				[right, 1232, 617, 0xbebba3],
				[right, 1189, 627, 0x55565a],
				[right, 1190, 109, 0xd7ae7d],
				[left, 38, 25, 0xf5e5a6],
				[left, 223, 31, 0x593716],
				[right, 714, 19, 0x8a4526],
				[right, 743, 38, 0xecd79a],
			]
		]
	},
	'巅峰斗技主界面_段位保护裂': {
		desc: [1280, 720,
			[
				[right, 1232, 617, 0xaebcb3],
				[right, 1190, 109, 0xd7ae7d],
				[left, 38, 25, 0xf5e5a6],
				[left, 223, 31, 0x593716],
				[right, 1189, 624, 0x677d8f],
				[right, 714, 19, 0x8a4526],
				[right, 743, 38, 0xecd79a],
			]
		],
	},
	'巅峰斗技主界面_名士': {
		desc: [
			1280, 720,
			[
				[right, 1204, 53, 0xe7cca4],
				[left, 513, 45, 0xba4c2e],
				[left, 773, 53, 0x593716],
				[left, 208, 25, 0x593716],
				[left, 46, 33, 0xf1db98],
				[right, 1184, 637, 0x3b1e0d],
				[right, 1183, 646, 0xe1cc9f],
			]
		]
	},
	'秘闻挑战开启': {
		desc: [1280, 720,
			[
				[center, 379, 112, 0xf2edca],
				[center, 372, 131, 0xe4cd9c],
				[center, 371, 183, 0xc9a763],
				[center, 531, 130, 0xe3caa1],
				[center, 526, 180, 0xd3a863],
				[center, 803, 150, 0xdbba80],
				[center, 658, 156, 0xdcba77],
				[center, 894, 186, 0xcda863],
				[center, 797, 177, 0xd3a965]
			]
		]
	},
	'寮神社界面': {
		desc: [
			1280, 720,
			[
				[right, 1176, 171, 0x7f543d],
				[right, 1219, 173, 0x7a5138],
				[right, 1220, 292, 0x7b5239],
				[right, 1176, 288, 0x855640],
				[right, 1179, 414, 0xbb764a],
				[right, 1218, 418, 0xbb7148],
				[right, 1178, 540, 0x81553f],
				[right, 1221, 536, 0x7c533a],
				[right, 1200, 662, 0x791f1f],
				[left, 46, 36, 0xeddc9a],
				[left, 50, 20, 0xecd391],
			]
		]
	},
	'寮信息界面': {
		desc: [
			1280, 720,
			[
				[center, 733, 38, 0x593716],
				[right, 1212, 171, 0xcc7c49],
				[right, 1218, 279, 0x81533d],
				[right, 1213, 415, 0x744a36],
				[right, 1216, 536, 0x764b37],
				[center, 130, 637, 0xb2a390],
				[center, 979, 663, 0x29140e],
				[center, 1090, 663, 0xbbb190],
			]
		]
	},
	'式神录': {
		desc: [
			1280, 720,
			[
				[left, 26, 12, 0x443028],
				[left, 35, 27, 0xf7e9ab],
				[left, 59, 27, 0x624532],
				[left, 114, 15, 0xaf8c56],
				[left, 155, 24, 0xaf8c56],
				[left, 211, 20, 0x382720],
			]
		]
	},
	'结界卡超上限提示': {
		desc: [
			1280, 720,
			[
				[center, 443, 223, 0x704c3b],
				[center, 839, 227, 0x4c3023],
				[center, 551, 361, 0x402f11],
				[center, 456, 418, 0xdf6851],
				[center, 686, 440, 0xf3b25e],
				[center, 849, 387, 0xcbb59c],
				[center, 853, 306, 0xcbb59c],
				[center, 462, 297, 0xcbb59c],
				[center, 848, 268, 0xcbb59c],
				[center, 454, 495, 0x6c4937],
				[center, 650, 285, 0xcbb59c],
			]
		],
	},
	'式神拓展包弹窗': {
		desc: [
			1280, 720,
			[
				[center, 366, 191, 0xc8b29a],
				[center, 909, 211, 0xcbb59e],
				[center, 494, 290, 0x46322a],
				[center, 600, 485, 0xf4b25f],
				[center, 896, 516, 0xcbb59e],
			]
		]
	},
	'组队大厅': {
		desc: [
			1280, 720,
			[
				[left, 42, 38, 0xf7e5a7],
				[right, 1194, 34, 0xd6c7a5],
				[left, 48, 490, 0x3e2822],
				[left, 49, 603, 0x952d30],
				[left, 108, 597, 0xa3a3b1],
			]
		]
	},
	'组队大厅_自动匹配': {
		desc: [1280, 720,
			[
				[center, 840, 143, 0xd7c8ba],
				[center, 623, 620, 0xccbbaa],
				[center, 721, 625, 0xf4b25f],
				[center, 446, 625, 0xf3b25e],
				[center, 722, 156, 0xdbcdc4],
				[center, 1134, 98, 0x482f28]
			]
		]
	},
	'组队大厅_创建队伍': {
		desc: [
			1280, 720,
			[
				[center, 377, 143, 0x5e4030],
				[center, 890, 143, 0x644434],
				[center, 401, 572, 0x5d4030],
				[center, 882, 573, 0x684635],
				[center, 629, 515, 0xf3b25e],
			]
		],
	},
	'组队大厅_选择副本类型_创建队伍': {
		desc: [
			1280, 720,
			[
				[left, 228, 62, 0xec859d],
				[center, 398, 66, 0x684a3b],
				[center, 402, 584, 0xdf6851],
				[center, 877, 590, 0xf3b25e],
			]
		]
	},
	'常驻悬浮窗方案': {
		desc: [
			1280, 720,
			[
				[left, -1, -1, 0x000000],
				[left, -1, -1, 0x000000],
				[left, -1, -1, 0x000000],
				[left, -1, -1, 0x000000],
			]
		]
	}
};


export default multiDetectColors;
