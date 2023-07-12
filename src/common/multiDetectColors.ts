import { IMultiDetectColorsOrigin } from "@/interface/IMultiColor";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

const multiDetectColors: IMultiDetectColorsOrigin = {
	'准备界面_未准备': {
		desc: [1280, 720,
			[
				[right, 1124, 698, 0xd0af86],
				[right, 1240, 702, 0xcead83],
				[right, 1191, 596, 0xa46149],
				[right, 1182, 586, 0xf7e6c3],
				[center, 360, 699, 0x241818],
				[left, 32, 23, 0xdbb48b]
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
				[right, 1268, 80, 0x946430],
				[right, 1266, 545, 0x573f26],
			]
		]
	},
	'战斗界面_手动状态': {
		desc: [
			1280, 720,
			[
				[left, 34, 23, 0xdbb48b],
				[left, 106, 24, 0xcfa375],
				[right, 1270, 132, 0x48371f],
				[right, 1270, 700, 0x241919],
				[left, 46, 671, 0xefc9ab],
				[left, 81, 670, 0xf0caac],
			]
		]
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
	'退出结算_邀请好友确认': {
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
				[right, 1168, 146, 0xd9cec1],
				[right, 1124, 32, 0xd7b388],
				[right, 1226, 30, 0xd3af84],
				[left, 18, 705, 0x754830],
				[left, 210, 711, 0x985b32],
			]
		]
	},
	'庭院未打开菜单': {
		desc: [1280, 720,
			[
				[right, 1211, 606, 0x885f46],
				[right, 1205, 624, 0x987777],
				[right, 1208, 646, 0xaf4949],
				[right, 1175, 680, 0xb08e7d]
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
				[center, 346, 405, 0xc7af95],
				[center, 1122, 419, 0x864e1f],
				[center, 1101, 537, 0xebd9b3],
			]
		]
	}
};


export default multiDetectColors;
