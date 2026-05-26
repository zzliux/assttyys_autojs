import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;


export class Func691 implements IFuncOrigin {
	id = 691;
	name = '新号流程';
	desc = '';
	config = [{
		desc: '',
		config: [{
			name: 'name',
			desc: '昵称前缀(不超过三个字)',
			type: 'text',
			default: '徒弟',
		}, {
			name: 'shiFu_name',
			desc: '师傅昵称(必须全名)',
			type: 'text',
			default: '师傅',
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '师徒_徒弟领体力',
		}, {
			name: 'levelUP_scheme',
			desc: '切换升级方案',
			type: 'scheme',
			default: '师徒_徒弟升级',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 选最新区
		desc: [1280, 720,
			[
				[center, 488, 85, 0x9c8363],
				[center, 564, 61, 0xe7c78c],
				[center, 619, 56, 0xe9d29a],
				[right, 668, 66, 0xe1c182],
				[right, 724, 54, 0xefd39c],
				[right, 1085, 111, 0xe7d4ce],
			]
		],
		oper: [
			[center, 1280, 720, 226, 212, 375, 252, 1000], // 全平台
			[center, 1280, 720, 502, 133, 1056, 622, 1000], // ocr昵称区域
			[center, 1280, 720, 434, 142, 603, 198, 1000], // 选区
			[center, 1280, 720, 562, 574, 722, 617, 1200], // 点击开始游戏
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
			[center, 1280, 720, 855, 245, 896, 281, 200],
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
				[right, 844, 535, 0x664bdf],
				[right, 845, 541, 0x5539de],
				[right, 845, 550, 0x5c4ee0],
				[right, 871, 553, 0x2932c1],
				[right, 903, 540, 0x2345b3],
			]
		],
		oper: [
			[center, 1280, 720, 847, 528, 904, 551, 700],
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
	}, { // 12 小白三点对话 // 可废弃
		desc: [1280, 720,
			[
				[center, 480, 228, 0xdac8c7],
				[center, 480, 232, 0xdcd4cd],
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
	}, { // 14 神乐三点对话 // 废弃
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
	}, { // 15 打开菜单
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1200]
		]
	}, { // 16 关联手机
		desc: [1280, 720,
			[
				[right, 997, 451, 0xe7cfb1],
				[right, 1058, 491, 0xdec2a3],
				[right, 1020, 536, 0xd7b17b],
				[right, 876, 204, 0xe8e0d4],
			]
		],
		oper: [
			[center, 1280, 720, 968, 463, 1036, 522, 1000],
			[center, 1280, 720, 475, 483, 579, 523, 1000],
		]
	}, { // 17 已拜师
		desc: [1280, 720,
			[
				[center, 573, 661, 0x2a2a2a],
				[center, 598, 642, 0x343434],
				[center, 578, 634, 0xdddddd],
				[center, 595, 667, 0xc8c8c8],
				[center, 601, 660, 0xcecece],
			]
		],
		oper: [
			[center, 1280, 720, 23, 26, 58, 58, 1000],
		]
	}, { // 18 改普攻 // 废弃
		desc: [1280, 720,
			[
				[center, 573, 661, 0x2a2a2a],
				[center, 598, 642, 0x343434],
				[right, 1204, 703, 0xb4a59a],
				[right, 1214, 703, 0xcdbcb0],
				[right, 1233, 701, 0xddcabe],
				[right, 1233, 709, 0xc1b1a5],
			]
		],
		oper: [
			[center, 1280, 720, 805, 653, 845, 682, 1000],
			[center, 1280, 720, 912, 651, 947, 688, 1000],
			[center, 1280, 720, 1012, 662, 1048, 689, 1000],
			[center, 1280, 720, 1110, 656, 1143, 688, 1000],
			[center, 1280, 720, 1200, 660, 1240, 686, 1000],
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
			[center, 1280, 720, 143, 237, 283, 275, 1000],
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
				[left, 263, 610, 0x7a2721],
				[center, 357, 629, 0xe5e3e1],
			]
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
			[center, 1280, 720, 245, 325, 282, 354, 1000],
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
			[center, 1280, 720, 54, 97, 146, 117, 1000],
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
	}, { // 41 第一天奖励
		desc: [1280, 720,
			[
				[left, 251, 315, 0xe5aa6a],
				[left, 257, 398, 0xfdcfa4],
				[left, 250, 520, 0xfec892],
				[left, 257, 638, 0xfece9e],
				[center, 363, 633, 0xfdc479],
			]
		],
		oper: [
			[center, 1280, 720, 265, 364, 350, 410, 1000],
		]
	}, { // 42 领取完成
		desc: [1280, 720,
			[
				[left, 258, 377, 0x998d82],
				[center, 356, 390, 0x97897a],
				[center, 361, 643, 0x988977],
				[left, 262, 645, 0x988977],
				[left, 307, 518, 0x98887c],
			]
		],
		oper: [
			[center, 1280, 720, 26, 19, 52, 52, 1000],
		]
	}, { // 43 错误的进入到了式神升星
		desc: [1280, 720,
			[
				[center, 457, 581, 0xd3424c],
				[right, 1061, 664, 0xf3e1ca],
				[right, 946, 631, 0xf3e1ca],
				[center, 550, 582, 0xf5e4e0],
				[center, 466, 549, 0xa26d58],
			]
		],
		oper: [
			[center, 1280, 720, 37, 23, 66, 52, 1000],
			[center, 1280, 720, 34, 21, 67, 56, 1000],
		],
		retest: 1000,
	}, { // 44 确认输入框
		desc: [1280, 720,
			[
				[right, 1040, 30, 0xd6d7d7],
				[right, 1119, 37, 0xd6d7d7],
				[right, 1179, 33, 0xd6d7d7],
				[right, 1248, 34, 0xd6d7d7],
				[right, 998, 47, 0x009688],
			]
		],
		oper: [
			[center, 1280, 720, 1033, 19, 1128, 53, 1000],
		]
	}, { // 45 图鉴
		desc: [1280, 720,
			[
				[left, 104, 618, 0x859bc2],
				[left, 154, 632, 0xdccdcc],
				[left, 137, 646, 0x6784b5],
				[left, 136, 626, 0x8da3c8],
			]
		],
		oper: [
			[center, 1280, 720, 110, 614, 150, 642, 1000],
		]
	}, { // 46 装饰
		desc: [1280, 720,
			[
				[center, 454, 44, 0x0a0705],
				[right, 786, 56, 0x070403],
				[right, 924, 362, 0x76614d],
				[left, 120, 686, 0x22130e],
			]
		],
		oper: [
			[center, 1280, 720, 678, 652, 725, 692, 1000],
		]
	}, { // 47 界面装扮
		desc: [1280, 720,
			[
				[left, 110, 302, 0x735d40],
				[left, 120, 361, 0x312418],
				[left, 125, 409, 0x2f2619],
				[left, 117, 487, 0x2e241c],
			]
		],
		oper: [
			[center, 1280, 720, 129, 396, 249, 431, 1000],
		]
	}, { // 48 试用限时按钮
		desc: [1280, 720,
			[
				[left, 117, 299, 0x745d41],
				[left, 127, 362, 0x665239],
				[left, 123, 410, 0x483723],
				[right, 933, 629, 0x836b4f],
				[right, 1159, 626, 0xe69838],
			]
		],
		oper: [
			[center, 1280, 720, 1151, 621, 1187, 642, 1000],
		]
	}, { // 49 试用限时按钮已关闭
		desc: [1280, 720,
			[
				[right, 1156, 625, 0xaaa686],
				[right, 1161, 632, 0xa4a182],
				[right, 1151, 633, 0xa2a080],
				[right, 1182, 627, 0x836b50],
				[right, 1180, 636, 0x836b50],
				[left, 112, 302, 0x745f40],
			]
		],
		oper: [
			[center, 1280, 720, 23, 24, 60, 56, 1000],
			[center, 1280, 720, 23, 24, 60, 56, 1000],
		]
	}, { // 50 好友
		desc: [1280, 720,
			[
				[right, 878, 618, 0xef98a3],
				[right, 926, 636, 0xe7cbc6],
				[right, 889, 655, 0x6e3089],
				[right, 920, 650, 0x9eddf3],
			]
		],
		oper: [
			[center, 1280, 720, 882, 625, 930, 662, 1000],
		]
	}, { // 51 协战
		desc: [1280, 720,
			[
				[right, 1218, 208, 0xb9661a],
				[right, 1208, 331, 0x5e3d29],
				[right, 1210, 455, 0x5c3b27],
				[right, 1207, 579, 0x5e3d29],
			]
		],
		oper: [
			[center, 1280, 720, 1210, 540, 1236, 615, 1000],
		]
	}, { // 52 出战
		desc: [1280, 720,
			[
				[center, 495, 388, 0xb49778],
				[right, 647, 391, 0xb59779],
				[center, 503, 481, 0xa98d6e],
				[center, 623, 488, 0xa68a6b],
				[right, 658, 475, 0xdec39c],
				[center, 486, 197, 0x4a302d],
			]
		],
		oper: [
			[center, 1280, 720, 505, 384, 636, 464, 1000],
		]
	}, { // 53 暗色协战
		desc: [1280, 720,
			[
				[right, 1208, 213, 0x6d4019],
				[right, 1214, 329, 0x492f1f],
				[right, 1212, 449, 0x462e1f],
				[right, 1210, 583, 0x452c1d],
			]
		],
		oper: [
			[center, 1280, 720, 1208, 534, 1237, 619, 1000],
		]
	}, { // 54 关闭好友
		desc: [1280, 720,
			[
				[center, 497, 389, 0xb49779],
				[right, 648, 394, 0xb39678],
				[center, 611, 374, 0x0181a7],
				[center, 619, 378, 0xfffcf5],
				[center, 613, 488, 0xa38868],
			]
		],
		oper: [
			[center, 1280, 720, 1158, 94, 1196, 132, 1000],
		]
	}, { // 55 探索返回 待改
		desc: [1280, 720,
			[
				[left, 123, 25, 0xf9edb7],
				[left, 134, 49, 0xf3e18e],
				[left, 52, 43, 0xefda98],
				[left, 67, 654, 0xc955c8],
				[left, 176, 648, 0xbd9418],
			]
		],
		oper: [
			[center, 1280, 720, 30, 20, 72, 53, 1000],
		]
	}, { // 56 组队界面_挑战亮
		desc: [1280, 720,
			[
				[left, 42, 38, 0xf7eaac],
				[right, 1177, 667, 0xd8b871],
				[right, 1187, 679, 0xcda35d],
				[right, 1188, 609, 0xf1e096],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717]
			]
		],
		oper: [
			[right, 1280, 720, 1192, 613, 1251, 677, 2000]
		]
	}, { // 57 组队界面_退出
		desc: [1280, 720,
			[
				[left, 53, 29, 0xefcf8c],
				[left, 41, 38, 0xf7ebad],
				[left, 55, 51, 0xefd394],
				[right, 1003, 615, 0xf4b25d],
				[right, 716, 622, 0xf4b25d],
			]
		],
		oper: [
			[center, 1280, 720, 33, 23, 63, 56, 1000],
			[center, 1280, 720, 1021, 243, 1086, 290, 1000],
		]
	}, { // 58 晴明普攻
		desc: [1280, 720,
			[
				[right, 1013, 643, 0x293473],
				[right, 1020, 659, 0xe7ffff],
				[right, 1027, 664, 0xdefbff],
				[right, 1038, 662, 0xd5ffff],
				[right, 1032, 672, 0xe9fcff],
			]
		],
		oper: [
			[center, 1280, 720, 616, 191, 644, 219, 100], // 鬼青左右中
			[center, 1280, 720, 823, 174, 849, 199, 100],
			[center, 1280, 720, 941, 262, 966, 287, 100],
			[center, 1280, 720, 1200, 651, 1250, 687, 1000],
		]
	}, { // 59 暗色提示
		desc: [1280, 720,
			[
				[left, 33, 8, 0x1d1413],
				[left, 33, 23, 0x5a4b3c],
				[left, 47, 31, 0x59493a],
				[left, 34, 41, 0x55432f],
				[left, 12, 32, 0x36281b],
			]
		],
		oper: [
			[center, 1280, 720, 138, 174, 181, 215, 1000],
		]
	}, { // 60 雪女二技能
		desc: [1280, 720,
			[
				[right, 1103, 647, 0xffffff],
				[right, 1125, 664, 0xf4ffff],
				[right, 1137, 644, 0x32baff],
				[right, 1148, 673, 0x1c35bb],
				[right, 1097, 670, 0xffffff],
			]
		],
		oper: [
			[center, 1280, 720, 1103, 643, 1146, 695, 1000],
		]
	}, { // 61 草人普攻
		desc: [1280, 720,
			[
				[right, 1013, 652, 0xfcffff],
				[right, 1007, 672, 0xf2fedf],
				[right, 1001, 683, 0xe8f9cb],
				[right, 1040, 663, 0x103c18],
				[right, 1047, 671, 0x63ba29],
			]
		],
		oper: [
			[center, 1280, 720, 616, 191, 644, 219, 100], // 鬼青左右中
			[center, 1280, 720, 823, 174, 849, 199, 100],
			[center, 1280, 720, 941, 262, 966, 287, 100],
		]
	}, { // 62 火狐普攻
		desc: [1280, 720,
			[
				[right, 1005, 660, 0x950410],
				[right, 1043, 650, 0xc10057],
				[right, 1048, 664, 0x8c003c],
				[right, 1038, 671, 0xd11139],
				[right, 1047, 649, 0xad004a],
			]
		],
		oper: [
			[center, 1280, 720, 616, 191, 644, 219, 100], // 鬼青左右中
			[center, 1280, 720, 823, 174, 849, 199, 100],
			[center, 1280, 720, 941, 262, 966, 287, 100],
		]
	}, { // 63 犬神三技能
		desc: [1280, 720,
			[
				[right, 1227, 643, 0x10284a],
				[right, 1244, 660, 0xe7cf8c],
				[right, 1246, 674, 0xffea83],
				[right, 1246, 682, 0xffd35a],
				[right, 1224, 658, 0x274473],
				[right, 1226, 667, 0xf4ebba],
			]
		],
		oper: [
			[center, 1280, 720, 1203, 645, 1245, 689, 1000],
		]
	}, { // 64 犬神普攻
		desc: [1280, 720,
			[
				[right, 1029, 644, 0xe2b842],
				[right, 1045, 668, 0xffffff],
				[right, 995, 654, 0x091523],
				[right, 1006, 661, 0x314970],
				[right, 1056, 678, 0x1f3d66],
			]
		],
		oper: [
			[center, 1280, 720, 610, 210, 644, 235, 100],
			[center, 1280, 720, 482, 260, 510, 288, 100],
			[center, 1280, 720, 705, 212, 723, 240, 100],
		]
	}, { // 65 雪女二技能无高亮
		desc: [1280, 720,
			[
				[right, 1103, 647, 0xfafeff],
				[right, 1125, 664, 0xd8fdff],
				[right, 1137, 644, 0x159eff],
				[right, 1148, 673, 0x0019ab],
				[right, 1097, 670, 0xecfbfc],
			]
		],
		oper: [
			[center, 1280, 720, 1103, 643, 1146, 695, 1000],
		]
	}, { // 66 音频包
		desc: [1280, 720,
			[
				[center, 385, 165, 0x6a4838],
				[right, 867, 165, 0x6a4838],
				[right, 923, 163, 0xe7d3ce],
				[right, 898, 555, 0x634131],
				[center, 381, 554, 0x634531],
				[right, 677, 490, 0xf4b25d],
			]
		],
		oper: [
			[center, 1280, 720, 914, 147, 942, 171, 5000],
		]
	}, { // 67 鬼使白
		desc: [1280, 720,
			[
				[center, 625, 238, 0xdccccf],
				[center, 638, 238, 0xdacece],
				[right, 651, 238, 0xe7d7c6],
				[center, 389, 57, 0xfbd3a1],
				[right, 1223, 647, 0xe0cdc8],
			]
		],
		oper: [
			[center, 1280, 720, 620, 223, 656, 254, 1000],
		]
	}, { // 68 剧情内?
		desc: [1280, 720,
			[
				[left, 33, 31, 0xd6c4a2],
				[left, 50, 33, 0xd6c3a5],
				[left, 51, 46, 0xd6c5a4],
				[left, 36, 50, 0xd6c5a2],
				[left, 46, 50, 0xd6c3a5],
			]
		],
	}, { // 69 鬼使白二技能_开自动
		desc: [1280, 720,
			[
				[right, 1202, 662, 0xd21151],
				[right, 1218, 650, 0xefc0c8],
				[right, 1231, 653, 0xdb0c43],
				[right, 1233, 659, 0xec0b47],
			]
		],
		oper: [
			[center, 1280, 720, 110, 602, 141, 627, 1000],
			[center, 1280, 720, 45, 648, 81, 679, 1000],
		]
	}, { // 70 走一步
		oper: [
			[center, 1280, 720, 651, 438, 667, 455, 1000],
		]
	}, { // 71 战斗界面
		desc: '战斗界面',
	}, { // 72 再次进入剧情_鬼使白
		desc: [1280, 720,
			[
				[right, 868, 262, 0xe4e4df],
				[right, 864, 238, 0xdccdd3],
				[right, 876, 238, 0xdccfd1],
				[right, 890, 238, 0xd7ced3],
				[right, 876, 209, 0xe7e5dc],
			]
		],
		oper: [
			[center, 1280, 720, 861, 225, 893, 252, 1000],
		]
	}, { // 73 八百比
		desc: [1280, 720,
			[
				[right, 1014, 460, 0xf5f3f4],
				[right, 1055, 505, 0x74201d],
				[right, 1046, 564, 0x732021],
				[right, 977, 579, 0xad2829],
				[right, 979, 463, 0x21c6d0],
			]
		],
		oper: [
			[center, 1280, 720, 453, 318, 526, 396, 1000],
		]
	}, { // 74 神乐获取
		desc: [1280, 720,
			[
				[center, 432, 110, 0xa7371e],
				[right, 742, 341, 0xca2448],
				[right, 737, 502, 0xfcdbcb],
				[right, 649, 511, 0xffd4c6],
				[center, 609, 362, 0xa9c1c6],
				[right, 1166, 94, 0xe9d2cf],
			]
		],
		oper: [
			[center, 1280, 720, 1152, 81, 1182, 107, 1000],
		]
	}, { // 75 再次进入剧情_鬼使黑
		desc: [1280, 720,
			[
				[right, 861, 255, 0xddcdd1],
				[right, 874, 255, 0xddd0d1],
				[right, 888, 255, 0xd8cfd3],
				[right, 862, 229, 0xeae7d4],
				[right, 887, 277, 0xe5e5d5],
			]
		],
		oper: [
			[center, 1280, 720, 857, 237, 892, 269, 1000],
		]
	}, { // 76 青蛙瓷器
		desc: [1280, 720,
			[
				[right, 684, 185, 0xffffff],
				[right, 722, 292, 0xffffff],
				[right, 693, 412, 0xffffff],
				[right, 743, 489, 0xffffff],
				[right, 979, 252, 0x84b218],
				[right, 1017, 427, 0x425476],
				[right, 920, 515, 0xfcfcfc],
			]
		],
		oper: [
			[center, 1280, 720, 465, 297, 559, 385, 1000],
		]
	}, { // 77 LV.9
		desc: [1280, 720,
			[
				[right, 846, 260, 0xffffff],
				[right, 860, 259, 0xc6a896],
				[right, 869, 258, 0xd0b19f],
				[right, 878, 258, 0xc1a291],
				[right, 888, 254, 0xd0b19f],
			]
		],
		oper: [
			[center, 1280, 720, 249, 327, 285, 356, 1000],
		]
	}, { // 78 组队未解锁
		desc: [1280, 720,
			[
				[left, 121, 623, 0x748bb9],
				[left, 170, 632, 0xdccbcc],
				[center, 415, 632, 0xb9b8af],
				[center, 433, 635, 0xfffde4],
				[center, 564, 630, 0xc3a491],
				[right, 727, 631, 0xded0ce],
			]
		],
		oper: [
			[center, 1280, 720, 126, 612, 168, 645, 1000],
		]
	}, { // 79 暗色妖气探索
		desc: [1280, 720,
			[
				[right, 789, 221, 0x5e3d40],
				[right, 1186, 254, 0x433d4c],
				[right, 1189, 592, 0x585a38],
				[right, 770, 483, 0x4e5457],
				[center, 368, 533, 0x72623a],
			]
		],
		oper: [
			[center, 1280, 720, 102, 21, 132, 52, 1000],
		]
	}, { // 80 判断经验妖怪
		desc: [1280, 720,
			[
				[center, 419, 175, 0xcbb59c],
				[right, 871, 179, 0xcbb59c],
				[center, 357, 361, 0xf4e2cb],
				[right, 822, 452, 0xf4e2cb],
				[right, 863, 385, 0xd23646],
				[center, 569, 512, 0xf4b25d],
				[right, 707, 516, 0xf4b25d],
			]
		],
		oper: [
			[center, 1280, 720, 547, 497, 738, 533, 1000],
		]
	}, { // 81 无亲友
		desc: [1280, 720,
			[
				[center, 485, 204, 0x4c4842],
				[center, 589, 415, 0xb9b4af],
				[center, 626, 451, 0x8b8580],
				[right, 1222, 575, 0xbe6a18],
				[right, 719, 400, 0xa19b97],
			]
		],
		oper: [
			[center, 1280, 720, 1159, 101, 1201, 133, 1000],
		]
	}, { // 82 已进入剧情
		desc: [1280, 720,
			[
				[center, 589, 129, 0x392c1b],
				[right, 655, 71, 0x3c331b],
				[right, 721, 293, 0x945529],
				[right, 825, 296, 0x4e2c1d],
				[right, 882, 396, 0x573b2c],
			]
		],
	}, { // 83 雪女二技能暗
		desc: [1280, 720,
			[
				[right, 1103, 647, 0x626464],
				[right, 1125, 664, 0x556364],
				[right, 1137, 644, 0x083e64],
				[right, 1148, 673, 0x000a43],
				[right, 1097, 670, 0x5d6263],
			]
		],
		oper: [
			[center, 1280, 720, 1002, 651, 1049, 687, 1000],
			[center, 1280, 720, 622, 208, 642, 236, 1000],
			[center, 1280, 720, 489, 260, 514, 294, 1000],
			[center, 1280, 720, 677, 327, 704, 351, 1000],
			[center, 1280, 720, 698, 225, 722, 254, 1000],
		]
	}, { // 84 过场暂停(防止雨女卡主)
		desc: [1280, 720,
			[
				[center, 444, 69, 0x9f8566],
				[right, 827, 62, 0x9c866b],
				[right, 835, 124, 0xaa9c84],
				[right, 841, 202, 0x273940],
				[center, 471, 194, 0x2a3943],
			]
		],
	}, { // 85 图鉴御魂切换到外观
		desc: [1280, 720,
			[
				[left, 178, 103, 0xb0adb5],
				[left, 220, 40, 0x8ad3c6],
				[right, 648, 600, 0x218ebc],
				[right, 1149, 97, 0x633238],
			]
		],
		oper: [
			[center, 1280, 720, 1134, 92, 1172, 132, 1000],
			[center, 1280, 720, 857, 657, 905, 697, 1000],
		]
	}, { // 86 判断_是否为庭院中的'町中'立牌
		desc: [1280, 720,
			[
				[right, 1067, 221, 0xb5aaad],
				[right, 1054, 321, 0x989694],
				[right, 1054, 344, 0x969592],
				[right, 1052, 352, 0x999595],
				[right, 1056, 413, 0x938f8f],
				[right, 1054, 433, 0x8e8b8a]
			]
		],
		oper: [
			[right, 1280, 720, 1012, 228, 1093, 298, 1000],
		]
	},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['691'];
		if (!thisScript.global.newAccount) {
			thisScript.global.newAccount = {
				'create': true,
				'createNoob': false,
				'timer': 0,
				'apply': false,
				'jingYan': false,
				'closePB': false, // 关闭皮肤试用
				'getBird': false,
				'join': false,
			};
		}
		if (thisScript.global.newAccount.create) {
			if (thisScript.oper({
				id: 691,
				name: '选区',
				operator: [thisOperator[1]],
			})) {
				const prefix = thisconf.name;
				const timestamp = Date.now(); // 当前时间戳
				const compressedTimestamp = timestamp.toString(36); // 转换为36进制
				const shortened = compressedTimestamp.slice(-5); // 取后5个字符
				const input = className('android.widget.EditText').findOne(1000);
				if (input) {
					input.setText(prefix as string + shortened);
					thisScript.keepScreen(false);
					thisScript.oper({
						id: 692,
						name: 'over',
						operator: [thisOperator[44]]
					})
					sleep(300);
				} else {
					log('未找到输入框', 'error');
					return false;
				}
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '起号',
				operator: [{ desc: thisOperator[0].desc }],
			})) {
				const name = thisScript.findText(String(thisconf.name), 0, thisOperator[0].oper[1], '包含');
				if (name.length > 0) {
					const toClickRegion = [
						name[0].points[0].x + 5, name[0].points[0].y,
						name[0].points[0].x + 40, name[0].points[0].y + 20, 1000,
					]
					thisScript.regionClick([toClickRegion]);
				} else {
					thisScript.regionClick([thisOperator[0].oper[0]]);
					thisScript.regionClick([thisOperator[0].oper[2]]);
				}
				thisScript.regionClick([thisOperator[0].oper[3]]);
				thisScript.global.game_area = 'findMultiColor_皮肤广告关闭按钮';
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '起号',
				operator: [thisOperator[2]],
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '剧情',
				operator: thisOperator.slice(3, 17)
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '剧情',
				operator: [{ desc: thisOperator[19].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[19].oper[0], thisOperator[19].oper[1], [1000, 1300], 200);
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '剧情',
				operator: [thisOperator[19], thisOperator[20]],
			})) {
				return true;
			}
			const point = thisScript.findMultiColor('剧情三点');
			if (point) {
				thisScript.regionClick([[point.x, point.y, point.x + 3, point.y + 3, 1000]])
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '守护||庭院',
				operator: [thisOperator[21], thisOperator[22]],
			})) {
				thisScript.global.newAccount.create = false;
				thisScript.global.newAccount.apply = true;
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '申请',
				operator: [thisOperator[17]],
			})) {
				thisScript.global.newAccount.create = false;
				thisScript.global.newAccount.getBird = true;
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '申请',
				operator: [thisOperator[82]],
			})) {
				thisScript.global.newAccount.create = false;
				thisScript.global.newAccount.createNoob = true;
				return true;
			}
		}
		if (thisScript.global.newAccount.createNoob) {
			if (thisScript.oper({
				id: 691,
				name: 'createNoob',
				operator: [thisOperator[84]]
			})) {
				sleep(5000);
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: 'createNoob',
				operator: [thisOperator[58], thisOperator[59], thisOperator[60], thisOperator[61]
					, thisOperator[62], thisOperator[63], thisOperator[64], thisOperator[65]
					, thisOperator[13], thisOperator[66], thisOperator[67], thisOperator[69]
					, thisOperator[72], thisOperator[35], thisOperator[73], thisOperator[74]
					, thisOperator[75], thisOperator[76], thisOperator[83]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: 'createNoob',
				operator: [thisOperator[77]]
			})) {
				thisScript.global.newAccount.createNoob = false;
				thisScript.global.newAccount.getBird = true;
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: 'createNoob',
				operator: [thisOperator[68]],
			}) && !thisScript.oper({
				id: 691,
				name: 'createNoob',
				operator: [thisOperator[71]],
			})) {
				let point = thisScript.findMultiColor('剧情三点_普', null, false, false, false);
				if (point) {
					thisScript.regionClick([[point.x, point.y, point.x + 3, point.y + 3, 700]])
					return true;
				}
				point = thisScript.findMultiColor('剧情三点_战', null, false, false, false);
				if (point) {
					thisScript.regionClick([[point.x, point.y, point.x + 3, point.y + 3, 700]])
					return true;
				}
				point = thisScript.findMultiColor('剧情黄眼', null, false, false, false);
				if (point) {
					thisScript.regionClick([[point.x, point.y, point.x + 3, point.y + 3, 700]])
					return true;
				}
				point = thisScript.findMultiColor('剧情问号', null, false, false, false);
				if (point) {
					thisScript.regionClick([[point.x, point.y, point.x + 3, point.y + 3, 700]])
					return true;
				} else {
					thisScript.global.newAccount.timer = Number(thisScript.global.newAccount.timer) + 1
					if (thisScript.global.newAccount.timer > 4) {
						thisScript.global.newAccount.timer = 0;
						return thisScript.oper({
							id: 691,
							name: 'createNoob',
							operator: [thisOperator[70]],
						})
					}
				}
			}
			const point = thisScript.findMultiColor('皮肤广告关闭按钮', null, false, false, false);
			if (point) {
				thisScript.regionClick([[point.x, point.y, point.x + 3, point.y + 3, 700]])
				return true;
			}
		}
		if (thisScript.global.newAccount.apply) {
			if (thisScript.oper({
				id: 691,
				name: '申请',
				operator: [thisOperator[23], thisOperator[86]],
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '输入',
				operator: [thisOperator[24]],
			})) {
				const prefix = thisconf.shiFu_name;
				const input = className('android.widget.EditText').findOne(1000);
				if (input) {
					input.setText(prefix as string);
					thisScript.keepScreen(false);
					thisScript.oper({
						id: 692,
						name: 'over',
						operator: [thisOperator[44]]
					})
					sleep(4000);
					thisScript.regionClick(thisOperator[25].oper);
				} else {
					log('未找到输入框', 'error');
					return false;
				}
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '申请',
				operator: [thisOperator[22], thisOperator[26], thisOperator[27]],
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '申请',
				operator: [thisOperator[28]],
			})) {
				thisScript.global.newAccount.apply = false;
				thisScript.global.newAccount.getBird = true;
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '申请',
				operator: [thisOperator[17]],
			})) {
				thisScript.global.newAccount.apply = false;
				thisScript.global.newAccount.jingYan = true;
				return true;
			}
		}
		if (thisScript.global.newAccount.getBird) {
			if (thisScript.oper({
				id: 691,
				name: '守护完成',
				operator: [thisOperator[29], thisOperator[30]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '新手奖励',
				operator: [thisOperator[38], thisOperator[39], thisOperator[41]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '领取完成',
				operator: [thisOperator[42]]
			})) {
				thisScript.global.newAccount.getBird = false;
				thisScript.global.newAccount.closePB = true;
				return true;
			}
		}
		if (thisScript.global.newAccount.closePB) {
			if (thisScript.oper({
				id: 691,
				name: '关闭PB',
				operator: [thisOperator[45], thisOperator[46], thisOperator[47], thisOperator[48]
					, thisOperator[35], thisOperator[78], thisOperator[85]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 691,
				name: '关闭PB',
				operator: [thisOperator[49]]
			})) {
				thisScript.global.newAccount.closePB = false;
				thisScript.global.newAccount.jingYan = true;
				return true;
			}
		}
		if (thisScript.global.newAccount.jingYan) {
			if (thisScript.oper({
				id: 691,
				name: '关闭PB',
				operator: [{ desc: thisOperator[78].desc }]
			})) {
				thisScript.rerun(thisconf.levelUP_scheme);
				sleep(1000);
				return true;
			}
			if (thisScript.oper({
				name: '庭院判断',
				operator: [{ desc: thisOperator[31].desc }]
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
			if (thisScript.oper({
				id: 691,
				name: '残废组队',
				operator: [thisOperator[32], thisOperator[33], thisOperator[34], thisOperator[35], thisOperator[36]
					, thisOperator[37], thisOperator[18], thisOperator[55], thisOperator[56]]
			})) {
				return true;
			}
			let curCnt = 0;
			const maxCount = 4;
			while (thisScript.oper({
				name: '创建队伍',
				operator: [thisOperator[36]]
			})) {
				curCnt++;
				thisScript.keepScreen();
				if (curCnt >= maxCount) {
					if (thisScript.oper({
						id: 691,
						name: '残废组队',
						operator: [thisOperator[57]]
					})) {
						return true;
					}
				}
			}
			const point = thisScript.findMultiColor('皮肤广告关闭按钮');
			if (point) {
				console.log('识别广告关闭按钮成功');
				const oper = [[point.x - 10, point.y - 10, point.x, point.y, 1000]];
				thisScript.regionClick(oper);
			}
		}
		if (thisScript.global.newAccount.join) {
			if (thisScript.oper({
				id: 691,
				name: '好友加协战',
				operator: [thisOperator[50], thisOperator[51], thisOperator[52], thisOperator[53]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'join',
				operator: [thisOperator[54]]
			})) {
				thisScript.rerun(thisconf.next_scheme);
				sleep(1000);
				return true;
			}
		}
		if (thisScript.oper({
			id: 691,
			name: '已有珍旅居',
			operator: [thisOperator[40]]
		})) {
			thisScript.global.newAccount.jingYan = false;
			thisScript.global.newAccount.join = true;
			return true;
		}
		if (thisScript.oper({
			id: 691,
			name: '杂项',
			operator: [thisOperator[7], thisOperator[10], thisOperator[16], thisOperator[15]
				, thisOperator[43], thisOperator[79]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 691,
			name: '杂项',
			operator: [thisOperator[80]]
		})) {
			thisScript.global.newAccount = {
				'create': false,
				'createNoob': false,
				'timer': 0,
				'apply': false,
				'jingYan': true,
				'closePB': false, // 关闭皮肤试用
				'getBird': false,
				'join': false,
			};
			return true;
		}
		if (thisScript.oper({
			id: 691,
			name: '杂项',
			operator: [thisOperator[81]]
		})) {
			thisScript.global.newAccount = {
				'create': false,
				'createNoob': false,
				'timer': 0,
				'apply': true,
				'jingYan': false,
				'closePB': false, // 关闭皮肤试用
				'getBird': false,
				'join': false,
			};
			return true;
		}
		const point = thisScript.findMultiColor('红手指');
		if (point) {
			thisScript.regionClick([[point.x, point.y, point.x + 3, point.y + 3, 1000]])
			return true;
		}
	}
}