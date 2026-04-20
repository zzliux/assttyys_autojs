import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;


export class Func692 implements IFuncOrigin {
	id = 692;
	name = '徒弟流程';
	config = [{
		desc: '',
		config: [{
			name: 'name',
			desc: '身份证名字',
			type: 'text',
			default: '名字',
		}, {
			name: 'number',
			desc: '身份证号码',
			type: 'text',
			default: '号码',
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '返回庭院',
		}]
	}];
	// 5 6 8 9 10 11 12 51 52  为废弃
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院_花合战
		desc: [
			1280, 720,
			[
				[center, 792, 616, 0xd9c0b7],
				[center, 822, 606, 0xef1717],
				[center, 800, 628, 0xb24343],
				[center, 820, 645, 0xf4ecc7],
				[center, 790, 648, 0xa8918c],
			]
		],
		oper: [
			[center, 1280, 720, 773, 621, 821, 660, 1000],
		]
	}, { // 1 花合战首页_奖励页签
		desc: [
			1280, 720,
			[
				[left, 39, 36, 0xf6f2cf],
				[left, 234, 35, 0xe4e5e7],
				[right, 1237, 345, 0x333259],
				[right, 1196, 390, 0x3a3b62],
				[right, 1220, 343, 0x8993b6],
				[right, 1215, 374, 0x8993b6],
			]
		],
		oper: [
			[center, 1280, 720, 1202, 329, 1232, 409, 1000],	//	点击 任务页签
		]
	}, { // 2 花合战首页-任务页签且右下角含有全部领取
		desc: [
			1280, 720,
			[
				[right, 1231, 228, 0x35345e],
				[right, 1228, 361, 0xdae1d9],
				[center, 950, 600, 0xfdd27e],
				[center, 938, 631, 0xfdd27d],
			]
		],
		oper: [
			[center, 1280, 720, 911, 611, 965, 655, 1500],	//	点击 全部领取
			[center, 1280, 720, 911, 611, 965, 655, 1500],	//	奖励提示框
		]
	}, { // 3  花合战界面退出
		desc: [
			1280, 720,
			[
				[left, 39, 37, 0xf6f2d0],
				[left, 234, 37, 0xe6e7e8],
				[right, 1211, 216, 0x8993b6],
				[right, 1220, 349, 0x5f597c],
				[right, 1212, 362, 0xd3dae1],
				[right, 1211, 401, 0xdce4d5],
			]
		],
		oper: [
			[center, 1280, 720, 24, 20, 60, 55, 1000],
		]
	}, { // 4  花合战上新
		desc: [1280, 720,
			[
				[right, 1130, 58, 0x4a33df],
				[right, 1154, 71, 0x242dbf],
				[right, 1194, 54, 0x1d55a9],
				[right, 1211, 54, 0x1c449f],
				[right, 1187, 49, 0xf8ffff],
			]
		],
		oper: [
			[center, 1280, 720, 1167, 50, 1190, 66, 2000],
		]
	}, { // 5 花合战开启
		desc: [1280, 720,
			[
				[center, 432, 700, 0x44496b],
				[center, 476, 701, 0x4a4f6f],
				[right, 728, 699, 0x68658f],
				[right, 911, 689, 0x79729c],
			]
		],
		oper: [
			[center, 1280, 720, 789, 666, 884, 706, 1000],
		]
	}, { // 6 花合战花札购买
		desc: [1280, 720,
			[
				[left, 242, 707, 0x56597e],
				[center, 344, 708, 0x65638a],
				[center, 473, 700, 0x6c668f],
				[center, 566, 708, 0x504b6e],
			]
		],
		oper: [
			[center, 1280, 720, 787, 673, 897, 707, 1000],
		]
	}, { // 7 御魂选类型的界面
		desc: [
			1280, 720,
			[
				[left, 45, 37, 0xf5e5a5],
				[right, 1232, 43, 0xcaa274],
				[left, 182, 141, 0x323045],
				[center, 547, 133, 0x5b3232],
				[right, 889, 147, 0x555534],
				[right, 1240, 181, 0x344158],
			]
		],
		oper: [
			[center, 1280, 720, 85, 117, 325, 503, 500], // 御魂-八岐大蛇
		]
	}, { // 8 三类御魂 废弃
		desc: [1280, 720,
			[
				[left, 41, 36, 0xf9eeb3],
				[right, 1124, 47, 0xd8b188],
				[right, 1237, 47, 0xd3af84],
				[right, 1161, 608, 0xded2bb],
				[right, 1207, 671, 0x372015]
			]
		],
		oper: [
			[right, 1280, 720, 1116, 602, 1197, 683, 2000]
		]
	}, { // 9 御魂九层 废弃
		desc: [1280, 720,
			[
				[left, 220, 443, 0xcfb88e],
				[center, 424, 443, 0xcfb88e],
				[left, 277, 490, 0xbaa887],
				[center, 387, 480, 0xccb489],
				[right, 1002, 608, 0xdfd3bc],
			]
		],
		oper: [
			[center, 1280, 720, 215, 335, 435, 372, 1000],
		]
	}, { // 10 未准备 废弃
		desc: '准备界面_未准备',
		oper: [
			[center, 1280, 720, 528, 527, 678, 597, 1000],
		]
	}, { // 11 上阵 废弃
		desc: [1280, 720,
			[
				[left, 266, 658, 0xf95e89],
				[center, 334, 675, 0xf95e89],
				[center, 372, 643, 0xee5a83],
				[left, 297, 512, 0xfa5c88],
			]
		],
		oper: [
			[center, 1280, 720, 297, 561, 337, 601, 1000],
			[center, 1280, 720, 387, 285, 429, 321, 1000],
			[center, 1280, 720, 1135, 557, 1217, 611, 1000],
		]
	}, { // 12 自选御魂 废弃
		desc: [1280, 720,
			[
				[center, 532, 136, 0xfbe9a8],
				[center, 602, 120, 0xf4d676],
				[right, 793, 129, 0xf6db88],
				[right, 919, 123, 0xf6da7f],
				[right, 1016, 205, 0xfef6d7],
			]
		],
		oper: [
			[center, 1280, 720, 1113, 130, 1147, 165, 1000],
		]
	}, { // 13 准备 废弃
		desc: '准备界面_未准备',
		oper: [
			[right, 1280, 720, 1137, 542, 1228, 632, 1000], // 准备
		]
	}, { // 14 庭院界面
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 1074, 519, 1105, 561, 1000],
		]
	}, { // 15 无法出师
		desc: [1280, 720,
			[
				[center, 573, 660, 0x2c2c2c],
				[center, 598, 641, 0x353535],
				[center, 578, 633, 0xdddddd],
				[center, 589, 660, 0xc4c4c4],
			]
		],
		oper: [
			[center, 1280, 720, 29, 24, 56, 49, 1000],
		]
	}, { // 16 庭院进入探索
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 658, 127, 697, 170, 1000],
		]
	}, { // 17 点击契约碎片
		desc: [1280, 720,
			[
				[center, 559, 233, 0xa1321c],
				[center, 574, 234, 0xa1321c],
				[center, 560, 330, 0x912514],
				[center, 573, 344, 0x8c2212],
			]
		],
		oper: [
			[center, 1280, 720, 590, 555, 649, 590, 2000],
		]
	}, { // 18 点击二十五章
		desc: [1280, 720,
			[
				[left, 45, 36, 0xf5e5a6],
				[left, 125, 29, 0xf9eeb7],
				[left, 68, 653, 0xd45ed4],
				[left, 182, 639, 0xad8012],
				[left, 259, 642, 0xe8dbcd],
			]
		],
		oper: [
			[center, 1280, 720, 1066, 204, 1242, 228, 1000],
		]
	}, { // 19 关闭二十五章
		desc: [1280, 720,
			[
				[center, 339, 191, 0x451854],
				[center, 470, 201, 0x2d2d2d],
				[center, 410, 425, 0xc7b096],
				[right, 905, 543, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 1031, 130, 1061, 164, 1000],
		]
	}, { // 20 约碎片滑动
		desc: [1280, 720,
			[
				[center, 591, 167, 0x2c334a],
				[right, 1098, 174, 0x493829],
				[right, 719, 545, 0x444f6c],
				[right, 1098, 543, 0x6c5b45],
			]
		],
		oper: [
			[center, 1280, 720, 1147, 352, 1212, 412, 1000],
			[center, 1280, 720, 71, 325, 155, 388, 1000],
		]
	}, { // 21 守护历练
		desc: [1280, 720,
			[
				[right, 976, 186, 0xdddbce],
				[right, 1206, 172, 0x584247],
				[right, 1188, 240, 0x6d5058],
				[right, 1196, 354, 0x6f525b],
				[right, 964, 546, 0x6e4d5a],
				[right, 1170, 630, 0x7f5a68],
			]
		],
		oper: [
			[center, 1280, 720, 1098, 261, 1204, 370, 1000],
		]
	}, { // 22 守护历练(邀请师傅)
		desc: [1280, 720,
			[
				[center, 370, 259, 0xfefefd],
				[center, 406, 259, 0xfefefd],
				[center, 386, 260, 0xfffffe],
				[center, 387, 274, 0xfefefe],
			]
		],
		oper: [
			[center, 1280, 720, 366, 259, 404, 285, 1000],
		]
	}, { // 23 邀请
		desc: [1280, 720,
			[
				[center, 425, 230, 0x3c496b],
				[center, 435, 244, 0x515a78],
				[center, 539, 580, 0xdf6851],
				[right, 732, 575, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 471, 209, 532, 234, 1000],
			[center, 1280, 720, 729, 558, 826, 590, 1000],
		]
	}, { // 24 灰挑战
		desc: [1280, 720,
			[
				[right, 1184, 610, 0xdedede],
				[right, 1186, 635, 0xd3d3d3],
				[right, 1205, 657, 0x2c2c2c],
				[right, 1239, 626, 0x323232],
				[right, 1228, 653, 0xcbcbcb],
			]
		]
	}, { // 25 守护次数完成
		desc: [1280, 720,
			[
				[right, 1147, 573, 0xccc9bd],
				[right, 1155, 574, 0xb8b3a5],
				[right, 1173, 567, 0xcbc8bc],
				[right, 1179, 566, 0xb8b2a5],
				[right, 1180, 576, 0xccc9bd],
				[right, 964, 543, 0x6e4d5a],
				[right, 1209, 176, 0x5a434b],
			]
		],
		oper: [
			[center, 1280, 720, 109, 22, 143, 50, 1000],
		]
	}, { // 26  准备
		desc: '准备界面_未准备',
		oper: [
			[right, 1280, 720, 1137, 542, 1228, 632, 1500], // 准备
		]
	}, { // 27 可出师挑战
		desc: [1280, 720,
			[
				[center, 562, 631, 0xf2e197],
				[center, 576, 659, 0x36291c],
				[center, 599, 643, 0x3d2e20],
				[center, 601, 659, 0xeac86e],
			]
		],
		oper: [
			[center, 1280, 720, 566, 638, 597, 665, 1000],
		]
	}, { // 28 选择魂八
		desc: [1280, 720,
			[
				[right, 1099, 314, 0x6e4424],
				[right, 1174, 314, 0x6f4525],
				[right, 1125, 321, 0xdeb444],
				[right, 1157, 315, 0xe4bc57],
			]
		],
		oper: [
			[center, 1280, 720, 1103, 295, 1175, 320, 1000],
		]
	}, { // 29 魂八确认
		desc: [1280, 720,
			[
				[right, 880, 440, 0x673d1f],
				[right, 967, 457, 0x6f4526],
				[right, 1053, 437, 0x693f20],
				[right, 1144, 458, 0x6b4122],
			]
		],
		oper: [
			[center, 1280, 720, 1051, 436, 1143, 463, 1000],
		]
	}, { // 30 组队
		desc: [1280, 720,
			[
				[right, 983, 608, 0xe4dac3],
				[right, 985, 672, 0xe4d8c2],
				[right, 1160, 600, 0xdcd0b9],
				[right, 1160, 677, 0xe3d8c2],
				[left, 251, 402, 0xcfb88e],
				[center, 390, 403, 0xcfb88e],
			]
		],
		oper: [
			[center, 1280, 720, 950, 610, 1031, 673, 1000],
		]
	}, { // 31 创建队伍
		desc: [1280, 720,
			[
				[center, 440, 618, 0xf3b25e],
				[center, 565, 642, 0xf3b25e],
				[right, 1000, 612, 0xf3b25e],
				[right, 1149, 639, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 1005, 613, 1141, 645, 1000],
			[center, 1280, 720, 824, 571, 932, 608, 1000],
		]
	}, { // 32 确认邀请
		desc: [1280, 720,
			[
				[left, 41, 240, 0xdf6f5d],
				[left, 36, 256, 0xde705d],
				[left, 131, 248, 0x57b463],
				[left, 154, 243, 0x61bc6c],
			]
		],
		oper: [
			[center, 1280, 720, 120, 236, 163, 269, 1000],
		]
	}, { // 33 挑战
		desc: [1280, 720,
			[
				[right, 1184, 610, 0xf2e198],
				[right, 1237, 628, 0x3d2f20],
				[right, 1205, 659, 0x35291c],
				[right, 1228, 664, 0xe7c969],
			]
		],
		oper: [
			[center, 1280, 720, 1189, 622, 1244, 668, 1000],
		]
	}, { // 34 组队退出
		desc: [1280, 720,
			[
				[left, 53, 30, 0xf0d692],
				[left, 44, 37, 0xf5e5a6],
				[left, 57, 49, 0xf0d491],
				[left, 62, 37, 0x774e2b],
			]
		],
		oper: [
			[center, 1280, 720, 34, 28, 70, 59, 1000],
			[center, 1280, 720, 683, 411, 839, 451, 1000],
		]
	}, { // 35 独当一面
		desc: [1280, 720,
			[
				[center, 483, 159, 0xfadf9e],
				[right, 796, 159, 0xfade9f],
				[right, 707, 170, 0xf6d489],
				[center, 593, 184, 0xf4c669],
			]
		],
		oper: [
			[center, 1280, 720, 523, 607, 743, 637, 1000],
		]
	}, { // 36 出师ssr
		desc: [1280, 720,
			[
				[right, 1127, 643, 0xe7d68c],
				[right, 1180, 663, 0xd7bc6b],
				[right, 1148, 631, 0xebda95],
				[right, 1144, 677, 0x312519],
			]
		],
		oper: [
			[center, 1280, 720, 1150, 81, 1187, 109, 1000],
		]
	}, { // 37 放弃传承
		desc: [1280, 720,
			[
				[left, 51, 626, 0xe1d3b5],
				[left, 72, 633, 0xcec3a2],
				[left, 73, 651, 0xccbc95],
				[left, 72, 620, 0xe5d8b9],
				[left, 51, 653, 0xc8b591],
			]
		],
		oper: [
			[center, 1280, 720, 50, 623, 77, 656, 1000],
			[center, 1280, 720, 683, 411, 839, 451, 1000],
		]
	}, { // 38 是否为登录页
		desc: [1280, 720,
			[
				// 进入游戏按钮
				[center, 704, 602, 0xffffff],
				[center, 713, 611, 0xffffff],
				[center, 623, 597, 0xfffefe],
				[center, 630, 601, 0xfdfdfd],
				[center, 590, 611, 0xffffff],
				[center, 588, 592, 0xfefdfd],
				// 左上角阴阳师毛笔字
				[left, 86, 53, 0xfdfddb],
				[left, 88, 182, 0xfbdfae],
			]
		],
		oper: [
			[center, 1280, 720, 720, 515, 789, 534, 1000], // 游戏区区域
		],
	}, { // 39 是否为选择游戏区域
		desc: [
			1280, 720,
			[
				[left, 162, 149, 0xd9a756],
				[center, 643, 74, 0xe1bf80],
				[right, 1050, 592, 0xffe1bd],
			]
		],
		oper: [
			[center, 1280, 720, 1172, 571, 1209, 607, 1000],
		],
	}, { // 40 确认注销
		desc: [1280, 720,
			[
				[center, 344, 583, 0x796859],
				[center, 354, 596, 0x7a695b],
				[right, 681, 570, 0xdf6851],
				[right, 850, 580, 0xf3b25e],
				[right, 944, 596, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 339, 579, 364, 600, 1000],
			[center, 1280, 720, 846, 568, 951, 601, 1000],
		]
	}, { // 41 勾选第一个区
		desc: [1280, 720,
			[
				[center, 333, 51, 0x6a4636],
				[right, 959, 51, 0x634333],
				[right, 957, 666, 0x644334],
				[center, 329, 667, 0x664535],
				[right, 780, 324, 0x483518],
				[center, 439, 562, 0x725f4d],
			]
		],
		oper: [
			[center, 1280, 720, 776, 322, 796, 341, 2000],
			[center, 1280, 720, 430, 546, 448, 564, 1000],
			[center, 1280, 720, 660, 598, 778, 635, 1000],
		]
	}, { // 42 输入姓名
		desc: [1280, 720,
			[
				[center, 549, 376, 0x322f2d],
				[center, 639, 371, 0x24221f],
				[right, 688, 377, 0x1e1b19],
				[center, 599, 371, 0x191715],
			]
		],
		oper: [
			[center, 1280, 720, 547, 366, 628, 385, 1000],
		]
	}, { // 43 输入身份证
		desc: [1280, 720,
			[
				[center, 549, 430, 0x141210],
				[center, 599, 422, 0x1a1816],
				[center, 639, 422, 0x2b2926],
				[right, 683, 423, 0x151311],
				[right, 734, 423, 0x1f1d1b],
			]
		],
		oper: [
			[center, 1280, 720, 549, 419, 598, 435, 1000],
		]
	}, { // 44 确认输入
		oper: [
			[center, 1280, 720, 663, 480, 778, 512, 1000],
		]
	}, { // 45 取消犹豫期
		desc: [1280, 720,
			[
				[center, 464, 489, 0xdf6851],
				[center, 584, 511, 0xdf6851],
				[right, 679, 487, 0xf3b25e],
				[right, 813, 515, 0xf3b35e],
				[center, 333, 146, 0x624133],
				[right, 978, 145, 0x684636],
			]
		],
		oper: [
			[center, 1280, 720, 461, 482, 598, 515, 1000],
		]
	}, { // 46 我确定
		desc: [1280, 720,
			[
				[center, 414, 385, 0x2b2b2a],
				[center, 428, 392, 0x454443],
				[center, 474, 383, 0x2a2929],
				[center, 451, 378, 0x333232],
				[center, 442, 396, 0x343433],
			]
		],
		oper: [
			[center, 1280, 720, 414, 376, 476, 402, 1000],
		]
	}, { // 47 我确定的确定
		desc: [1280, 720,
			[
				[center, 469, 470, 0xdf6851],
				[center, 558, 498, 0xdf6851],
				[right, 733, 473, 0xf3b25e],
				[right, 822, 498, 0xf3b25e],
				[right, 835, 390, 0xe3dcd4],
			]
		],
		oper: [
			[center, 1280, 720, 723, 461, 826, 504, 1000],
		]
	}, { // 48 完成注销
		desc: [1280, 720,
			[
				[center, 425, 223, 0x664535],
				[right, 846, 223, 0x6e4a38],
				[center, 418, 495, 0x664535],
				[right, 849, 495, 0x664535],
				[center, 584, 434, 0xf3b25e],
				[right, 696, 443, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 566, 416, 712, 445, 1000],
		]
	}, { // 49 暗色二十五章
		desc: [1280, 720,
			[
				[right, 1060, 203, 0x2e211c],
				[right, 1061, 221, 0x2e211c],
				[right, 1243, 203, 0x2e211c],
				[right, 1249, 229, 0x543a15],
			]
		],
		oper: [
			[center, 1280, 720, 1066, 202, 1246, 228, 1000],
		]
	}, { // 50 暗色契约碎片
		desc: [1280, 720,
			[
				[right, 651, 162, 0x1d212e],
				[right, 1092, 161, 0x362a1f],
				[right, 722, 635, 0x30374b],
				[right, 1111, 632, 0x554634],
			]
		],
		oper: [
			[center, 1280, 720, 368, 18, 413, 54, 1000],
		]
	}, { // 51 暗色协战
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
	}, { // 52 购买体力
		desc: [1280, 720,
			[
				[center, 363, 205, 0xcec4bb],
				[right, 875, 219, 0xd2c9c3],
				[center, 336, 496, 0xa3999e],
				[right, 919, 473, 0xcfc6be],
				[center, 586, 475, 0xf3b25e],
				[right, 701, 476, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 568, 454, 712, 485, 2000],
			[center, 1280, 720, 581, 672, 724, 699, 1000],
		]
	}, { // 53 打开菜单
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1200]
		]
	}, { // 54 确认输入框
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
	}, { // 55 从御魂退出
		desc: [1280, 720,
			[
				[left, 68, 174, 0x8a78a6],
				[left, 94, 208, 0x8d7caa],
				[left, 77, 254, 0x7a6b9a],
				[left, 85, 202, 0x9480ac],
				[left, 44, 36, 0xf7eaac],
				[left, 127, 25, 0xf9eeb7],
				[left, 119, 29, 0xf7eab4],
			]
		],
		oper: [
			[center, 1280, 720, 109, 23, 142, 53, 1000],
		]
	},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['692'];
		if (!thisScript.global.tuDi) {
			thisScript.global.tuDi = {
				'flower': true,
				'cheak': false,
				'five': false,
				'join': false,
				'over': false,
				'finish': false,
				'clean': false,
			};
		}
		if (thisScript.global.tuDi.flower) {
			if (thisScript.oper({
				id: 692,
				name: '花合战',
				operator: [thisOperator[0], thisOperator[1], thisOperator[4], thisOperator[5]
					, thisOperator[6], thisOperator[55]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: '花合战_任务界面',
				operator: [{ desc: thisOperator[3].desc }]
			})) {
				if (thisScript.oper({
					id: 692,
					name: '花合战_领取奖励',
					operator: [thisOperator[2]]
				})) {
					return true;
				} else {
					thisScript.global.tuDi.flower = false;
					thisScript.global.tuDi.cheak = true;
					log('结束检查,执行守护')
					return true;
				}
			}
		}
		if (thisScript.global.tuDi.cheak) {
			if (thisScript.oper({
				id: 692,
				name: 'cheak',
				operator: [thisOperator[3], thisOperator[14]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'cheak',
				operator: [thisOperator[15]]
			})) {
				thisScript.global.tuDi.cheak = false;
				thisScript.global.tuDi.five = true;
				log('结束检查,执行守护')
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'cheak',
				operator: [thisOperator[27]]
			})) {
				thisScript.global.tuDi.cheak = false;
				thisScript.global.tuDi.over = true;
				return true;
			}
		}
		if (thisScript.global.tuDi.five) {
			if (thisScript.oper({
				id: 692,
				name: 'five',
				operator: [thisOperator[25]]
			})) {
				log('结束守护')
				thisScript.rerun(thisconf.next_scheme);
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'five',
				operator: [thisOperator[16], thisOperator[17], thisOperator[18], thisOperator[49], thisOperator[19]
					, thisOperator[21], thisOperator[22], thisOperator[26], thisOperator[50]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'five',
				operator: [thisOperator[23]]
			})) {
				thisScript.keepScreen();
				for (let i = 0; i < 15; i++) {
					if (!thisScript.oper({
						id: 692,
						name: 'five',
						operator: [{ desc: thisOperator[24].desc }]
					})) {
						break;
					}
					thisScript.keepScreen()
					sleep(1000);
				}
				return true
			}
			if (thisScript.oper({
				id: 692,
				name: 'five',
				operator: [{ desc: thisOperator[20].desc }]
			})) {
				thisScript.regionBezierSwipe(thisOperator[20].oper[0], thisOperator[20].oper[1], [300, 400], 1000);
				return true;
			}
		}
		if (thisScript.global.tuDi.over) {
			if (thisScript.oper({
				id: 692,
				name: 'over',
				operator: [thisOperator[28], thisOperator[29], thisOperator[7], thisOperator[30]
					, thisOperator[31], thisOperator[32]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'over',
				operator: [thisOperator[33]]
			})) {
				thisScript.global.tuDi.over = false;
				thisScript.global.tuDi.finish = true;
				return true;
			}
		}
		if (thisScript.global.tuDi.finish) {
			if (thisScript.oper({
				id: 692,
				name: '师徒',
				operator: [thisOperator[34], thisOperator[35], thisOperator[36]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: '师徒',
				operator: [thisOperator[37]]
			})) {
				thisScript.global.tuDi.finish = false;
				thisScript.global.tuDi.clean = true;
				thisScript.stopRelatedApp();
				sleep(1000);
				thisScript.launchRelatedApp();
				return true;
			}
		}
		if (thisScript.global.tuDi.clean) {
			if (thisScript.oper({
				id: 692,
				name: 'over',
				operator: [thisOperator[38], thisOperator[39], thisOperator[40], thisOperator[41], thisOperator[45]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'over',
				operator: [thisOperator[42]]
			})) {
				const input = className('android.widget.EditText').findOne(1000);
				if (input) {
					input.setText(String(thisconf.name));
					thisScript.keepScreen(false);
					thisScript.oper({
						id: 692,
						name: 'over',
						operator: [thisOperator[54]]
					})
					sleep(300);
				} else {
					log('未找到输入框', 'error');
					return false;
				}
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'over',
				operator: [thisOperator[43]]
			})) {
				const input = className('android.widget.EditText').findOne(1000);
				if (input) {
					input.setText(String(thisconf.number));
					thisScript.keepScreen(false);
					thisScript.oper({
						id: 692,
						name: 'over',
						operator: [thisOperator[54]]
					})
					sleep(300);
				} else {
					log('未找到输入框', 'error');
					return false;
				}
				thisScript.regionClick(thisOperator[44].oper);
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'over',
				operator: [thisOperator[46]]
			})) {
				const input = className('android.widget.EditText').findOne(1000);
				if (input) {
					input.setText('我确定注销本角色');
					thisScript.keepScreen(false);
					thisScript.oper({
						id: 692,
						name: 'over',
						operator: [thisOperator[54]]
					})
					sleep(300);
				} else {
					log('未找到输入框', 'error');
					return false;
				}
				thisScript.regionClick(thisOperator[47].oper);
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'over',
				operator: [thisOperator[48]]
			})) {
				thisScript.rerun('__关闭应用__')
				return true;
			}
		}
		if (thisScript.oper({
			id: 692,
			name: '杂项',
			operator: [thisOperator[53]]
		})) {
			return true;
		}
		return false;
	}
}