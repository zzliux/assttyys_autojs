import { Script } from '@/system/script';
import {
	IFuncOrigin,
	IFuncOperatorOrigin,
	IFuncOperator,
} from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func518 implements IFuncOrigin {
	id = 518;
	name = '签到与领取邮箱奖励';
	desc = '庭院签到与领取邮箱奖励，只适配默认皮肤';
	operator: IFuncOperatorOrigin[] = [
		{
			// 0 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
			desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
			oper: [
				[right, 1280, 720, 1168, 592, 1230, 690, 1200], // 庭院打开菜单
				[center, 1280, 720, 882, 626, 924, 668, 1200], //  庭院点击好友
				[center, 1280, 720, 660, 626, 697, 664, 1200], //  庭院点击商店
			],
		},
		{
			// 1 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
			desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		},
		{
			//	2 页面是否为庭院(菜单已展开)另一种图标 御祝图标 只支持默认庭院皮肤与默认装饰
			desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
		},
		{
			// 3 庭院已打开菜单，另另外一种图标
			desc: '庭院已打开菜单_另另外一种图标',
		},
		{
			//  4 检测_是否有邮件
			desc: [1280, 720,
				[
					[right, 1152, 39, 0xd7b288],
					[right, 1173, 26, 0xfe0101],
					[right, 1140, 46, 0xd2ab7f],
					[right, 1155, 54, 0xcba072],
					[right, 1225, 35, 0xd4ae84],
				],
			],
			oper: [
				[center, 1280, 720, 1137, 32, 1171, 58, 1000], //  点击邮箱
			],
		},
		{
			//  5 检测_邮件弹窗_无全部领取
			desc: [1280, 720,
				[
					[center, 570, 64, 0x5f4836],
					[right, 1182, 54, 0x3b383d],
					[right, 1169, 642, 0x544433],
					[center, 494, 635, 0xc8baab],
					[left, 106, 77, 0x654924],
					[left, 121, 659, 0x443729],
					[left, 127, 651, 0xbeb3a2],
				],
			],
			oper: [
				[center, 1280, 720, 403, 121, 467, 182, 1200], //  点击第一个邮件
				[right, 1280, 720, 1159, 94, 1199, 131, 1200], //  点击关闭
			],
		},
		{
			//  6 检测_邮件弹窗_领取全部
			desc: [1280, 720,
				[
					[center, 570, 64, 0x5f4836],
					[right, 1182, 54, 0x3b383d],
					[right, 1169, 642, 0x544433],
					[center, 494, 635, 0xc8baab],
					[left, 106, 77, 0x654924],
					[left, 107, 662, 0xf5d4a3],
					[left, 139, 666, 0xf3d3a2],
				],
			],
			oper: [
				[left, 1280, 720, 100, 636, 149, 677, 600], //  点击_全部领取
			],
		},
		{
			//  7 检测_全部领取弹窗
			desc: [1280, 720,
				[
					[right, 1051, 112, 0xc4ae93],
					[right, 1038, 597, 0xcbb59e],
					[left, 234, 116, 0xcbb59e],
					[left, 236, 612, 0xcbb49c],
					[center, 577, 573, 0xdc6950],
					[center, 721, 581, 0xf4b25f],
					[center, 520, 81, 0x5f4220],
				],
			],
			oper: [
				[center, 1280, 720, 707, 561, 842, 592, 1200], //  点击确定
			],
		},
		{
			//  8 检测_获得奖励弹窗
			desc: [1280, 720,
				[
					[center, 372, 188, 0x38281c],
					[center, 369, 471, 0x8e6a41],
					[center, 766, 492, 0xc6ad94],
					[center, 884, 239, 0xa99078],
					[center, 912, 193, 0x38281c],
					[center, 921, 480, 0x89683e],
					[center, 748, 173, 0xf5ebbd],
					[center, 523, 184, 0xe0cd89],
				],
			],
			oper: [
				[left, 1280, 720, 255, 575, 1058, 664, 1200], //  点击空白处
			],
		},
		{
			//  9 检测_签到
			desc: [1280, 720,
				[
					[left, 260, 503, 0xaf8758],
					[left, 268, 537, 0x9e6d43],
					[left, 282, 514, 0xc4a382],
					[left, 274, 512, 0xdfd8ce],
					[left, 262, 531, 0xcdbdac],
				],
			],
			oper: [
				[left, 1280, 720, 256, 500, 271, 530, 1200], //  点击_签到
			],
		},
		{
			//  10 检测_签到盒子
			desc: [1280, 720,
				[
					[center, 639, 160, 0xddc59a],
					[center, 692, 115, 0xcdb382],
					[center, 716, 192, 0xb3915e],
					[center, 660, 292, 0xe7d7c3],
					[center, 640, 374, 0xbb884e],
					[center, 554, 328, 0x905833],
				],
			],
			oper: [
				[center, 1280, 720, 612, 240, 664, 308, 1200], //  点击_签到盒子
			],
		},
		{
			//  11 检测_签到解读弹窗
			desc: [1280, 720,
				[
					[center, 479, 356, 0xa72d03],
					[center, 506, 356, 0xa82f05],
					[center, 515, 353, 0xad3c15],
					[center, 495, 414, 0xe0d7d6],
					[right, 772, 420, 0xe9e2e3],
					[center, 500, 507, 0xad3f19],
				],
			],
			oper: [
				[center, 1280, 720, 854, 108, 893, 124, 1200], //  点击关闭
			],
		},
		{
			//  12 检测_签到解读弹窗_大吉
			desc: [1280, 720,
				[
					[center, 469, 99, 0xd3cec2],
					[center, 789, 619, 0xc4beac],
					[center, 847, 601, 0xe1d5c7],
					[center, 848, 544, 0xedece3],
					[center, 780, 102, 0xa39a8a],
					[center, 461, 631, 0xc0b694],
				],
			],
			oper: [
				[center, 1280, 720, 854, 108, 893, 124, 1200], //  点击关闭
			],
		},
		{
			//  13 检测_2000天御祝图标签到
			desc: [1280, 720,
				[
					[left, 280, 524, 0xc07e32],
					[left, 258, 525, 0xbc832e],
					[left, 268, 538, 0x905f21],
					[left, 265, 492, 0xa66c23],
				],
			],
			oper: [
				[left, 1280, 720, 256, 500, 271, 530, 1200], //  点击_签到
			],
		},
		{
			//  14 检测_2000天御祝图标每日奖励
			desc: [1280, 720,
				[
					[left, 246, 511, 0xeee2d1],
					[left, 251, 507, 0xf1e9d8],
					[left, 268, 521, 0xdb474f],
					[left, 279, 518, 0xba363e],
					[left, 250, 534, 0xa22b3c],
					[left, 261, 539, 0xeeeedd],
				],
			],
			oper: [
				[left, 1280, 720, 258, 508, 276, 525, 1200], //  点击每日奖励
			],
		},
		{
			//  15 检测_2000天御祝图标每日奖励领取确认弹窗
			desc: [1280, 720,
				[
					[center, 440, 240, 0xc4ae94],
					[center, 838, 243, 0xcbb59e],
					[center, 836, 476, 0xbda78d],
					[center, 788, 420, 0xf4b25f],
					[center, 577, 420, 0xdf6851],
					[center, 440, 474, 0xc4ad93],
					[center, 636, 273, 0xcbb59e],
				],
			],
			oper: [
				[center, 1280, 720, 696, 406, 784, 440, 1200], //  点击确认
			],
		},
		{
			//  16 检测_寮包
			desc: [1280, 720,
				[
					[left, 268, 540, 0xddac72],
					[left, 251, 535, 0xca8845],
					[left, 261, 537, 0xca8d4c],
				],
			],
			oper: [
				[left, 1280, 720, 258, 508, 276, 525, 1200], //  点击寮包
			],
		},
		{
			//  17 检测_寮包奖励
			desc: [1280, 720,
				[
					[center, 895, 211, 0x37271f],
					[center, 370, 206, 0x38281c],
					[center, 366, 459, 0x906a41],
					[center, 915, 450, 0x8e6a41],
					[center, 872, 257, 0xb29b82],
					[center, 675, 204, 0xecdba8],
				],
			],
			oper: [
				[left, 1280, 720, 255, 575, 1058, 664, 1200], //  点击空白处
			],
		},
		{
			//  18 检测_御魂加成
			desc: [1280, 720,
				[
					[left, 287, 528, 0x07ace3],
					[left, 252, 535, 0xed7600],
					[left, 250, 510, 0x109ace],
				],
			],
			oper: [
				[left, 1280, 720, 256, 500, 271, 530, 1200], //  点击_御魂加成
			],
		},
		{
			//  19 检测_御魂_获取奖励
			desc: [1280, 720,
				[
					[center, 526, 194, 0xfbf1ca],
					[center, 620, 196, 0xfbf4d0],
					[center, 872, 300, 0xb29b82],
					[center, 418, 288, 0xb69f86],
					[center, 464, 406, 0xc9b298],
				],
			],
			oper: [
				[left, 1280, 720, 255, 575, 1058, 664, 1200], //  点击空白处
			],
		},
		{
			//  20 检测_勾玉卡奖励
			desc: [1280, 720,
				[
					[center, 745, 515, 0xc6a98c],
					[center, 760, 507, 0xe92b12],
					[center, 739, 494, 0xb80e0e],
				],
			],
			oper: [
				[center, 1280, 720, 739, 502, 756, 516, 1200], //  点击勾玉卡
			],
		},
		{
			//  21 检测_体力奖励
			desc: [1280, 720,
				[
					[center, 760, 518, 0x1e241c],
					[center, 737, 510, 0x0e100c],
					[center, 757, 507, 0xfc5825],
					[center, 736, 493, 0xe05424],
				],
			],
			oper: [
				[center, 1280, 720, 739, 502, 756, 516, 1200], //  点击体力
			],
		},
		{
			//  22 检测_同兰之心
			desc: [1280, 720,
				[
					[left, 277, 531, 0xbe3636],
					[left, 263, 500, 0x942020],
					[left, 282, 513, 0xf1bd69],
				],
			],
			oper: [
				[left, 1280, 720, 256, 500, 271, 530, 1200], //  点击_同兰之心
			],
		},
		{
			//  23 检测_御魂是否满了
			desc: [1280, 720,
				[
					[center, 832, 249, 0xcbb59e],
					[center, 831, 464, 0xcbb59e],
					[center, 685, 415, 0xf4b25f],
					[center, 595, 430, 0xf4b25f],
					[center, 455, 464, 0xcbb59e],
					[left, 133, 662, 0x655743],
					[left, 277, 154, 0x59534d],
				],
			],
			oper: [
				[center, 1280, 720, 594, 405, 685, 435, 1200], // 点击 确认
			],
		},
		{
			//  24 已适配v66 检测_好友弹窗_左下角为好友
			desc: [1280, 720,
				[
					[left, 86, 653, 0xeff1eb],
					[left, 90, 652, 0xeeede7],
					[left, 150, 98, 0xc29472],
					[left, 175, 134, 0xdbb291],
					[right, 1120, 624, 0xf4b25f],
					[center, 718, 67, 0x5c3a19],
				],
			],
			oper: [
				[left, 1280, 720, 85, 634, 125, 689, 2000], //  点击左下角好友
				[left, 1280, 720, 19, 47, 58, 70, 1200], // 点击 吉闻
			],
		},
		{
			//  25 已适配v66 检测_领取友情点_是否有一键收取
			desc: [1280, 720,
				[
					[center, 495, 104, 0xcbbdaa],
					[left, 228, 127, 0xd4ab89],
					[left, 183, 646, 0x301c18],
					[right, 1125, 616, 0xf4b25f],
					[left, 96, 549, 0xffce7d],
					[left, 90, 573, 0xfdd37d],
				],
			],
			oper: [
				[left, 1280, 720, 78, 541, 166, 579, 1200], // 点击 一键收取
			],
		},
		{
			//  26 已适配v66 友情点已领取
			desc: [1280, 720,
				[
					[center, 495, 104, 0xcbbdaa],
					[left, 228, 127, 0xd4ab89],
					[left, 183, 646, 0x301c18],
					[right, 1125, 616, 0xf4b25f],
					[left, 130, 546, 0xc9bbaa],
				],
			],
			oper: [
				[right, 1280, 720, 1159, 102, 1190, 131, 1200], // 点击 关闭
			],
		},
		{
			//  27 检测_吉闻_有一键祝福
			desc: [1280, 720,
				[
					[left, 263, 122, 0xe3ceb2],
					[right, 1207, 500, 0xfcd37c],
					[right, 1093, 583, 0xf3f3e7],
					[right, 1030, 120, 0xe3cdaf],
					[right, 1105, 381, 0x5d3c28],
					[left, 153, 106, 0x544234],
				],
			],
			oper: [
				[right, 1280, 720, 1069, 578, 1105, 623, 1200], //  点击_一键祝福
			],
		},
		{
			//  28 检测_一键祝福弹窗
			desc: [1280, 720,
				[
					[center, 432, 216, 0xcbc1b6],
					[center, 855, 502, 0xcfc1ba],
					[center, 700, 457, 0xf4b25f],
					[center, 825, 398, 0xe3dbd3],
					[center, 564, 446, 0xf4b25f],
				],
			],
			oper: [
				[center, 1280, 720, 577, 443, 710, 476, 1200], //  点击_祝福
			],
		},
		{
			//  29 检测_无祝福
			desc: [1280, 720,
				[
					[left, 263, 122, 0xe3ceb2],
					[right, 1030, 120, 0xe3cdaf],
					[right, 1105, 381, 0x5d3c28],
					[left, 153, 106, 0x544234],
					[right, 1045, 619, 0xe3c9aa],
					[right, 1049, 541, 0xe0c8af],
				],
			],
			oper: [
				[right, 1280, 720, 1060, 125, 1093, 161, 1200], //  点击_关闭
			],
		},
		{
			//  30  检测_商店_热门推荐
			desc: [1280, 720,
				[
					[right, 1204, 28, 0xd7c5a2],
					[right, 1009, 147, 0xe7d5cf],
					[right, 1008, 540, 0x251210],
					[right, 1041, 550, 0x503434],
				],
			],
			oper: [
				[right, 1280, 720, 1000, 136, 1022, 156, 1200], //  点击 关闭
			],
		},
		{
			//  31 检测_商店主页
			desc: [1280, 720,
				[
					[center, 353, 656, 0x8d232f],
					[center, 641, 666, 0xb88045],
					[right, 1143, 678, 0x842121],
					[right, 1166, 681, 0xd03a3a],
					[right, 1131, 674, 0x653e2f],
					[center, 251, 694, 0x56482b],
					[center, 711, 678, 0x483629],
				]
			],
			oper: [
				[center, 1280, 720, 1140, 650, 1175, 690, 1000], //  点击 礼包屋
			],
		},
		{
			//  32 检测_商店_礼包屋_推荐页签
			desc: [1280, 720,
				[
					[left, 30, 26, 0xf4e4a4],
					[right, 1249, 28, 0xd7c5a2],
					[left, 99, 115, 0x2f1e1a],
					[right, 1178, 666, 0xd13b39],
					[right, 1135, 674, 0xdcb65b],
				]
			],
		},
		{
			//  33  检测_商店_礼包屋
			desc: [
				1280, 720,
				[
					[left, 29, 26, 0xf5e7a7],
					[right, 1249, 28, 0xd7c4a1],
					[right, 1195, 652, 0xd03a3a],
					[right, 1204, 60, 0x130a08],
					[center, 866, 660, 0x3973c6],
					[left, 20, 558, 0x645241],
				]
			],
			oper: [
				[left, 1280, 720, 21, 9, 51, 42, 1800], //  点击 礼包屋返回
				[left, 1280, 720, 24, 15, 83, 62, 1800], //  点击 热门推荐返回
				[left, 1280, 720, 26, 37, 72, 81, 1800], //  点击 商店返回
			],
		},
		{
			//  34 检测_好友羁绊提升弹窗
			desc: [1280, 720,
				[
					[center, 833, 136, 0x7c5c2e],
					[center, 588, 369, 0x301c10],
					[center, 626, 413, 0xcf9796],
					[center, 683, 412, 0x2d1b10],
					[center, 584, 445, 0x8e5b39],
				],
			],
			oper: [
				[right, 1280, 720, 1143, 72, 1176, 101, 1200], //  点击关闭
			],
		},
		{
			//  35 检测_商店_礼包屋_热卖页签
			desc: [
				1280, 720,
				[
					[left, 30, 26, 0xf4e4a4],
					[right, 1226, 130, 0xfcdab2],
					[right, 1227, 222, 0x967e71],
					[right, 1227, 312, 0x967d71],
					[right, 1134, 687, 0xf0c967],
					[right, 1148, 665, 0x842121],
					[right, 1195, 675, 0xd2ab51],
				]
			],
			oper: [
				[right, 1280, 720, 1186, 194, 1237, 247, 1200], //  点击 推荐页签
			],
		},
		{
			//  36 检测_商店_推荐页签_每日领取
			desc: [
				1280, 720,
				[
					[left, 285, 196, 0xececeb],
					[left, 285, 323, 0xdfa555],
					[center, 478, 326, 0xdba155],
					[left, 273, 186, 0x1a1a1a],
					[left, 313, 192, 0x282524],
					[center, 431, 283, 0x2e1e2b],
					[center, 446, 251, 0xde2110],
					[left, 211, 272, 0xebded4],
				]
			],
			oper: [
				[left, 1280, 720, 218, 223, 284, 282, 2200], //  点击 每日领取
			],
		},
		{
			//  37 检测_商店_热门推荐_另一种适配
			desc: [1280, 720,
				[
					[right, 1085, 493, 0x4a1a19],
					[right, 1075, 534, 0x5c1919],
					[right, 1139, 594, 0x64413d],
					[right, 1137, 606, 0x412725],
					[center, 571, 587, 0x6c4741],
				],
			],
			oper: [[right, 1280, 720, 1115, 108, 1149, 136, 1200]],
		},
		{
			// 38 检测是否为好友弹窗 页签处于最近
			desc: [
				1280, 720,
				[
					[left, 156, 173, 0xd4c4b3],
					[left, 175, 134, 0xa2765d],
					[center, 745, 72, 0x58402f],
					[center, 338, 137, 0xdbb291],
					[right, 1220, 168, 0x653f20],
				]
			],
			oper: [
				[left, 1280, 720, 156, 97, 226, 135, 1200]  //  点击 好友页签
			]
		},
		{ // 39 邮件_获得插画
			desc: [
				1280, 720,
				[
					[center, 530, 65, 0xfaf4ce],
					[center, 610, 71, 0xfefdd5],
					[center, 682, 74, 0xf2e8c1],
					[center, 732, 77, 0xebe0b7],
					[center, 550, 100, 0xae9562],
					[center, 736, 107, 0xa18551],
				]
			],
			oper: [
				[center, 1280, 720, 830, 15, 1101, 75, 1000],
			]
		}, { // 40 神秘商人
			desc: [
				1280, 720,
				[
					[left, 316, 545, 0x4f0c18],
					[left, 317, 560, 0x520c18],
					[center, 435, 542, 0x870d19],
					[center, 440, 555, 0x820416],
				]
			],
			oper: [
				[center, 1280, 720, 991, 606, 1159, 693, 1000],
			]
		}, { // 41 商店-热门推荐3
			desc: [
				1280, 720,
				[
					[left, 45, 36, 0xf5e6a6],
					[center, 1186, 668, 0xaa0c0c],
					[center, 1152, 656, 0x842121],
					[center, 1005, 670, 0xf7cf5e],
					[center, 1015, 636, 0xa163dd],
					[center, 1223, 687, 0x533732],
				]
			],
			oper: [
				[center, 1280, 720, 1146, 631, 1196, 691, 1000],
			]
		}, { // 42 式神拓展包弹窗
			desc: '式神拓展包弹窗',
			oper: [
				[center, 1280, 720, 908, 138, 950, 178, 1000],
				[center, 1280, 720, 660, 626, 697, 664, 1200], //  商店位置，用于跳过动画
			]
		}, { // 43 好友窗口_‘最近’切换至‘好友’
			desc: [
				1280, 720,
				[
					[left, 150, 101, 0x8e644d],
					[left, 226, 103, 0x946b55],
					[left, 263, 100, 0xc89976],
					[center, 340, 100, 0xcea283],
					[center, 393, 46, 0x3d3b41],
					[center, 559, 67, 0x5f4836],
					[right, 1221, 207, 0xc06919],
				]
			],
			oper: [
				[center, 1280, 720, 145, 96, 240, 136, 1000],
			]
		}, { // 44 点到头像_返回
			desc: [
				1280, 720,
				[
					[center, 331, 55, 0x37291d],
					[right, 1110, 77, 0x5f2731],
					[right, 1183, 175, 0xc26a19],
					[left, 90, 652, 0x674822],
					[left, 91, 622, 0x283146],
				]
			],
			oper: [
				[center, 1280, 720, 1083, 81, 1133, 116, 1000],
			]
		}, { // 45 拓展包关闭
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
		}, { // 46 礼包屋未打开
			desc: [
				1280, 720,
				[
					[right, 1133, 675, 0xdeb659],
					[right, 1149, 667, 0x842121],
					[right, 1136, 648, 0xa57935],
					[right, 1177, 647, 0x80b3cc],
					[left, 160, 158, 0x86474e],
					[center, 528, 323, 0xff7b23],
				]
			],
			oper: [
				[center, 1280, 720, 1137, 654, 1184, 696, 1000],
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (
			thisScript.oper({
				id: 518,
				name: '页面是否为庭院',
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[0]],
				}, {
					desc: thisOperator[1].desc,
				}, {
					desc: thisOperator[2].desc,
				}, {
					desc: thisOperator[3].desc,
				}],
			})
		) {
			if (thisScript.global.daily_collection === 'friend') {
				return thisScript.oper({
					id: 518,
					name: '点击_好友',
					operator: [{
						oper: [thisOperator[0].oper[1]],
					}],
				});
			}

			if (thisScript.global.daily_collection === 'store') {
				return thisScript.oper({
					id: 518,
					name: '点击_商店',
					operator: [{
						oper: [thisOperator[0].oper[2], thisOperator[0].oper[2]], // 点两次跳过推荐
					}],
				});
			}

			if (thisScript.global.checked_yard_count < 3) {
				if (
					thisScript.oper({
						id: 518,
						name: '检测_是否有邮件',
						operator: [thisOperator[4]],
					})
				) {
					return true;
				}
			}

			return thisScript.oper({
				id: 518,
				name: '检测_是否有邮件或签到',
				operator: [
					thisOperator[9],
					thisOperator[13],
					thisOperator[16],
					thisOperator[18],
					thisOperator[20],
					thisOperator[21],
					thisOperator[22],
				],
			});
		}

		if (
			thisScript.oper({
				id: 518,
				name: '检测_商店_礼包屋',
				operator: [{
					desc: thisOperator[33].desc,
				}],
			}) &&
			thisScript.global.daily_collection !== 'store'
		) {
			return thisScript.oper({
				id: 518,
				name: '返回庭院',
				operator: [{
					oper: thisOperator[33].oper,
				}],
			});
		}

		if (
			thisScript.oper({
				id: 518,
				name: '检测_领取奖励弹窗',
				operator: [
					thisOperator[43],
					thisOperator[5],
					thisOperator[7],
					thisOperator[8],
					thisOperator[9],
					thisOperator[10],
					thisOperator[11],
					thisOperator[39],
					thisOperator[40],
					thisOperator[44],
				],
			})
		) {
			return true;
		}

		if (
			thisScript.oper({
				id: 518,
				name: '检测_御魂是否满了',
				operator: [thisOperator[23]],
			})
		) {
			thisScript.global.checked_yard_count = 4;
			thisScript.doPush(thisScript, {
				text: '御魂已满，无法收取邮件奖励',
				before() {
					thisScript.myToast('正在上传数据');
				},
			});
		}

		if (
			thisScript.oper({
				id: 518,
				name: '检测_领取全部奖励弹窗',
				operator: [{
					desc: thisOperator[6].desc,
				}],
			})
		) {
			//	超过3次领取失败 判断为御魂满了
			if (thisScript.global.checked_yard_count > 3) {
				return thisScript.oper({
					id: 518,
					name: '关闭弹窗',
					operator: [{
						oper: [thisOperator[5].oper[1]],
					}],
				});
			} else {
				if (!thisScript.global.checked_yard_count) {
					thisScript.global.checked_yard_count = 1;
				} else {
					thisScript.global.checked_yard_count += 1;
				}

				return thisScript.oper({
					id: 518,
					name: '检测_领取全部奖励弹窗',
					operator: [{
						oper: thisOperator[6].oper,
					}],
				});
			}
		}

		if (
			thisScript.oper({
				id: 518,
				name: '友情点已领取',
				operator: [
					thisOperator[26], //  友情点已领取 关闭弹窗
				],
			})
		) {
			thisScript.global.daily_collection = 'store';
			return true;
		}

		if (
			thisScript.oper({
				id: 518,
				name: '检测_签到_每日奖励_寮包',
				operator: [
					thisOperator[10],
					thisOperator[11],
					thisOperator[12],
					thisOperator[14],
					thisOperator[15],
					thisOperator[17],
					thisOperator[19],
					thisOperator[25], //  领取友情点
					thisOperator[24], //  检测_好友弹窗
					thisOperator[27], //  检测_吉闻_有一键祝福
					thisOperator[28], //  一键祝福弹窗
					thisOperator[29], //  无祝福
					thisOperator[30], //  检测_商店_热门推荐
					thisOperator[45], //  拓展包关闭
					thisOperator[31], //  检测_商店主页
					thisOperator[34], //  检测_好友羁绊
					thisOperator[35], //  检测_商店_礼包屋_热卖页签
					thisOperator[37], //  检测_商店_热门推荐_另一种适配
					thisOperator[38], //  检测是否为好友弹窗 页签处于最近
					thisOperator[41], //  检测_商店_热门推荐3
					thisOperator[42], //  关式神拓展包弹窗并跳过动画
					thisOperator[46], //  礼包屋未打开
				],
			})
		) {
			return true;
		}

		if (
			thisScript.oper({
				id: 518,
				name: '检测_商店_礼包屋_推荐页签',
				operator: [thisOperator[32]],
			})
		) {
			//  若3次找不到每日领取，直接视为已领取
			if (
				thisScript.oper({
					id: 518,
					name: '检测_商店_推荐页签_每日领取',
					operator: [thisOperator[36]],
				}) ||
				thisScript.global.checked_yard_count >= 3
			) {
				thisScript.global.checked_yard_count = 0;
				thisScript.global.daily_collection = 'courtyard';
				// 已领取后返回庭院
				thisScript.regionClick(thisOperator[33].oper);
			}

			if (!thisScript.global.checked_yard_count) {
				thisScript.global.checked_yard_count = 1;
			} else {
				thisScript.global.checked_yard_count += 1;
			}
			sleep(1000);
			return true;
		}

		return false;
	}
}

export default new Func518();
