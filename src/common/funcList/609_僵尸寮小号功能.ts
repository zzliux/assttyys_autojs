import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func609 implements IFuncOrigin {
	id = 609;
	name = '僵尸寮小号功能';
	desc = '用于切换小号进行每日寮任务';
	config = [{
		desc: '',
		config: [{
			name: 'account_count',
			desc: '账号数量',
			type: 'number',
			default: '10',
		}]
	}, {
		desc: '执行功能选择',
		config: [{
			name: 'juanGouYu',
			desc: '寮里捐100勾玉',
			type: 'switch',
			default: false,
		}, {
			name: 'liaoSanshi',
			desc: '寮三十(同心队战斗三十次)',
			type: 'switch',
			default: false,
		}, {
			name: 'agency',
			desc: '一键代办',
			type: 'switch',
			default: false,
		}, {
			name: 'regionBoss',
			desc: '地域鬼王',
			type: 'switch',
			default: false,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 用户中心
		desc: [1280, 720,
			[
				[right, 1225, 255, 0xd0c3ac],
				[right, 1229, 245, 0xc8bca4],
				[right, 1222, 245, 0xddcdb7],
				[right, 1227, 233, 0x816c56],
				[right, 1238, 240, 0x806c5a],
			]
		],
		oper: [
			[center, 1280, 720, 1208, 228, 1236, 254, 1000],
		]
	}, { // 1 切换账号
		desc: [1280, 720,
			[
				[left, 294, 332, 0x5e6266],
				[center, 336, 333, 0x5e6266],
				[center, 531, 311, 0x5e6266],
				[right, 746, 331, 0x606366],
				[left, 315, 483, 0x5e6266],
			]
		],
		oper: [
			[center, 1280, 720, 947, 195, 1066, 224, 1000],
		]
	}, { // 2 选择账号界面_账号选择框未打开
		desc: [1280, 720,
			[
				[center, 540, 214, 0xe50113],
				[center, 575, 210, 0xe50517],
				[center, 626, 216, 0x3d3a3a],
				[center, 655, 218, 0x413e3e],
				[center, 705, 216, 0x3e3b3b],
				[center, 735, 223, 0x3c3939],
				[center, 451, 445, 0xfb4f4f],
				[center, 837, 445, 0xfb4f4f],
			]
		],
		oper: [
			[center, 1280, 720, 596, 415, 678, 469, 1000], // 登录
			[center, 1280, 720, 580, 297, 703, 364, 1000], // 打开账号选择框
		]
	}, { // 3 选择账号界面_账号选择框已打开
		desc: [1280, 720,
			[
				[center, 540, 214, 0xe50113],
				[center, 575, 210, 0xe50517],
				[center, 626, 216, 0x3d3a3a],
				[center, 655, 218, 0x413e3e],
				[center, 705, 216, 0x3e3b3b],
				[center, 735, 223, 0x3c3939],
				[center, 473, 463, 0xd8d8d8],
				[center, 473, 572, 0xd8d8d8],
			]
		],
		oper: [
			[center, 1280, 720, 825, 569, 854, 596, 1000], // 上拉起始点
			[center, 1280, 720, 849, 2, 873, 24, 1000], // 上拉结束点
			[center, 1280, 720, 780, 467, 825, 502, 1000], // 选择账号
		]
	}, { // 4 选择安卓或苹果平台
		desc: [1280, 720,
			[
				[center, 532, 383, 0x1a1a1a],
				[center, 696, 383, 0x8ec220],
				[center, 530, 424, 0x1a1a1a],
				[center, 693, 422, 0x8ec220],
			]
		],
		oper: [
			[center, 1280, 720, 687, 377, 746, 430, 1000], // 安卓
			[center, 1280, 720, 527, 376, 586, 433, 1000], // 苹果
		]
	}, { // 5 打开头像界面
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 35, 37, 84, 85, 1000], // 点击头像
		]
	}, { // 6 用户中心
		desc: [1280, 720,
			[
				[left, 123, 95, 0xdcac79],
				[right, 1181, 177, 0xbe6819],
				[right, 1182, 269, 0x593824],
				[right, 1183, 365, 0x593824],
				[right, 1182, 459, 0x593824],
				[left, 283, 634, 0xd3cbc7],
			]
		],
		oper: [
			[center, 1280, 720, 236, 478, 264, 492, 1000],
		]
	}, { // 7 进入阴阳寮
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 544, 627, 584, 653, 1000], // 点击阴阳寮
		]
	}, { // 8 阴阳寮界面
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
			[center, 1280, 720, 1175, 621, 1225, 669, 1000] // 点击寮信息
		]
	}, { // 9 寮信息界面
		desc: '寮信息界面',
		oper: [
			[center, 1280, 720, 269, 499, 293, 514, 1000], // 进入捐勾玉
		]
	}, { // 10 捐赠勾玉界面
		desc: [1280, 720,
			[
				[center, 399, 129, 0x6e4b38],
				[center, 888, 130, 0x644333],
				[center, 469, 295, 0x412e2a],
				[right, 797, 291, 0x402d2a],
				[center, 569, 541, 0xf3b25e],
				[center, 702, 559, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 788, 285, 826, 320, 200], // 加次数
			[center, 1280, 720, 788, 285, 826, 320, 200], // 加次数
			[center, 1280, 720, 788, 285, 826, 320, 200], // 加次数
			[center, 1280, 720, 788, 285, 826, 320, 200], // 加次数
			[center, 1280, 720, 565, 524, 710, 568, 1000], // 确认捐赠
		]
	}, { // 11 寮界面
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
			[center, 1280, 720, 45, 166, 186, 210, 1000], // 进入集体任务
		]
	}, { // 12 集体任务界面
		desc: [1280, 720,
			[
				[center, 503, 67, 0x835b46],
				[center, 710, 66, 0x593716],
				[center, 725, 65, 0x593716],
				[center, 750, 433, 0xd7982b],
				[center, 853, 433, 0xd99c2d],
			]
		],
		oper: [
			[center, 1280, 720, 1142, 100, 1186, 140, 1000], // 点击关闭
		]
	}, { // 13 已完成二十次组队
		desc: [1280, 720,
			[
				[right, 1015, 427, 0xeee9d7],
				[right, 1023, 428, 0xf4efdc],
				[right, 1015, 438, 0xf0ead8],
				[right, 1022, 438, 0xd3cdbc],
				[right, 1028, 429, 0xddd7c6],
				[right, 1037, 434, 0xdfdac8],
				[right, 1032, 423, 0x928a7c],
				[right, 1032, 440, 0xa0998a],
			]
		],
	}, { // 14 庭院组队
		desc: [1280, 720,
			[
				[center, 436, 631, 0xe3e0de],
				[center, 458, 628, 0xebe9e8],
				[center, 473, 629, 0xd6cdca],
				[center, 468, 656, 0x7a6c6f],
				[center, 439, 652, 0xc1b7b2],
			]
		],
		oper: [
			[center, 1280, 720, 437, 627, 471, 665, 1000],
		]
	}, { // 15 组队里_首次进入有大拇指
		desc: [1280, 720,
			[
				[left, 86, 635, 0xeda7a1],
				[left, 118, 693, 0x881a28],
				[left, 127, 682, 0x8e1c2a],
				[left, 137, 678, 0x8d1b29],
				[left, 48, 628, 0xfffee0],
			]
		],
		oper: [
			[center, 1280, 720, 36, 595, 117, 651, 1000],
		]
	}, { // 16 进入同心队
		desc: [1280, 720,
			[
				[left, 45, 596, 0xae3838],
				[left, 108, 599, 0xa0a0ae],
				[left, 88, 618, 0xf4d9c5],
				[left, 46, 628, 0xfdead5],
				[left, 86, 647, 0xffdbaf],
			]
		],
		oper: [
			[center, 1280, 720, 43, 589, 104, 642, 1000],
		]
	}, { // 17 同心队界面
		desc: [1280, 720,
			[
				[left, 83, 244, 0xf9e9bb],
				[left, 83, 287, 0xdabe8d],
				[left, 82, 387, 0xd4bbb8],
				[left, 112, 437, 0xc3a09c],
				[left, 112, 385, 0xd0b5b1],
				[right, 1129, 214, 0x6e342c],
			]
		],
		oper: [
			[center, 1280, 720, 509, 360, 761, 553, 1000], // ocr区域
			[center, 1280, 720, 1094, 622, 1177, 682, 1000], // 集结

		]
	}, { // 18 勾选队友一
		desc: [1280, 720,
			[
				[center, 423, 91, 0xa22927],
				[right, 886, 621, 0xa5312d],
				[center, 608, 263, 0x3b2b10],
				[center, 615, 262, 0x402f11],
				[center, 491, 345, 0x936e4a],
			]
		],
		oper: [
			[center, 1280, 720, 608, 258, 616, 267, 1000],
		]
	}, { // 19 勾选队友二
		desc: [1280, 720,
			[
				[center, 423, 91, 0xa22927],
				[right, 886, 621, 0xa5312d],
				[center, 491, 345, 0x936e4a],
				[right, 703, 263, 0x3c2c10],
				[right, 710, 263, 0x3e2e10],
			]
		],
		oper: [
			[center, 1280, 720, 702, 259, 711, 267, 1000],
		]
	}, { // 20 已勾选两名队友
		desc: [1280, 720,
			[
				[center, 610, 261, 0x4b5ee9],
				[center, 616, 267, 0x4555d0],
				[right, 704, 259, 0x485be3],
				[right, 710, 267, 0x4656d3],
				[center, 416, 91, 0xa22927],
				[right, 882, 619, 0xa83732],
			]
		],
		oper: [
			[center, 1280, 720, 518, 319, 757, 366, 1000],
		]
	}, { // 21 集结完毕
		desc: [1280, 720,
			[
				[left, 82, 237, 0xd3bab7],
				[left, 114, 276, 0xc3a09c],
				[left, 80, 381, 0xf3e2b6],
				[left, 112, 436, 0xe7c799],
				[left, 297, 301, 0x5f697f],
				[right, 860, 302, 0x616a7d],
			]
		],
		oper: [
			[center, 1280, 720, 970, 646, 1021, 690, 1000],
		]
	}, { // 22 已集结_选雷麒麟
		desc: [1280, 720,
			[
				[center, 421, 5, 0x2c0b09],
				[right, 782, 5, 0x2e0e0a],
				[center, 431, 97, 0x35140d],
				[right, 762, 97, 0x35140e],
				[right, 760, 54, 0xd6c4a1],
				[left, 167, 525, 0xe8d6c1],
				[center, 336, 521, 0xe8d6c1],
			]
		],
		oper: [
			[center, 1280, 720, 162, 502, 341, 541, 1000],
		]
	}, { // 23 已集结_选层数
		desc: [1280, 720,
			[
				[center, 421, 5, 0x2c0b09],
				[right, 782, 5, 0x2e0e0a],
				[center, 431, 97, 0x35140d],
				[right, 762, 97, 0x35140e],
				[right, 760, 54, 0xd6c4a1],
				[left, 167, 525, 0xffcc7a],
				[center, 336, 521, 0xfed17d],
			]
		],
		oper: [
			[center, 1280, 720, 399, 193, 580, 217, 1000], // 层数上划起始
			[center, 1280, 720, 401, 679, 573, 706, 1000], // 层数上划结束
			[center, 1280, 720, 406, 262, 579, 310, 1000], // 选择一层
			[center, 1280, 720, 995, 608, 1149, 643, 1000], // 选择创建
		]
	}, { // 24 已集结_创建
		desc: [1280, 720,
			[
				[center, 421, 5, 0x2c0b09],
				[right, 782, 5, 0x2e0e0a],
				[center, 431, 97, 0x35140d],
				[right, 762, 97, 0x35140e],
				[right, 760, 54, 0xd6c4a1],
				[right, 830, 573, 0xf3b25e],
				[right, 920, 607, 0xf3b25e],
				[left, 223, 61, 0xe4778d],
			]
		],
		oper: [
			[center, 1280, 720, 820, 570, 931, 609, 1000],
		]
	}, { // 25 挑战
		desc: [1280, 720,
			[
				[right, 1186, 624, 0xf0da8d],
				[right, 1240, 629, 0x3b2d1e],
				[right, 1204, 659, 0x35291c],
				[right, 1228, 664, 0xe7c969],
				[right, 1251, 675, 0x836633],
			]
		],
		oper: [
			[center, 1280, 720, 1187, 616, 1246, 673, 1000],
		]
	}, { // 26 散队
		desc: [1280, 720,
			[
				[center, 421, 5, 0x2d0d0a],
				[right, 782, 5, 0x36100b],
				[center, 431, 97, 0x290702],
				[right, 762, 97, 0x290701],
				[right, 760, 54, 0xd6c4a1],
			]
		],
		oper: [
			[center, 1280, 720, 747, 41, 780, 70, 1000],
		]
	}, { // 27 队员列表
		desc: [1280, 720,
			[
				[left, 80, 383, 0xf4e2b6],
				[left, 82, 439, 0xe0c596],
				[left, 111, 290, 0xbd9893],
				[left, 84, 236, 0xd5bdba],
			]
		],
		oper: [
			[center, 1280, 720, 84, 212, 110, 300, 1000],
		]
	}, { // 28 进入预存
		desc: [1280, 720,
			[
				[right, 935, 277, 0xffe0bc],
				[right, 948, 272, 0xffe1bd],
				[right, 963, 278, 0xffe0bc],
				[right, 950, 302, 0xffe4bc],
				[right, 940, 294, 0x513927],
				[right, 958, 295, 0x513927],
			]
		],
		oper: [
			[center, 1280, 720, 939, 274, 963, 299, 1000],
		]
	}, { // 29 一键预存
		desc: [1280, 720,
			[
				[right, 1209, 521, 0xc25b4b],
				[right, 1190, 565, 0xb24c40],
				[right, 1195, 605, 0x8c362d],
				[right, 1242, 538, 0xcb6955],
				[right, 1159, 577, 0xc2aaa0],
			]
		],
		oper: [
			[center, 1280, 720, 1201, 547, 1228, 575, 1000],
		]
	}, { // 30 预存退出
		desc: [1280, 720,
			[
				[left, 38, 27, 0xa36d3f],
				[left, 66, 39, 0x9e6a3b],
				[left, 37, 52, 0x875d3a],
				[left, 251, 40, 0x583716],
				[left, 265, 40, 0x593716],
			]
		],
		oper: [
			[center, 1280, 720, 37, 27, 63, 52, 1000],
		]
	}, { // 31 退出组队
		desc: [1280, 720,
			[
				[left, 41, 40, 0xf6ebab],
				[left, 56, 28, 0xefd390],
				[left, 54, 49, 0xf0d491],
				[left, 60, 62, 0xe1c493],
			]
		],
		oper: [
			[center, 1280, 720, 33, 26, 67, 57, 1000],
		]
	}, { // 32 一键代办
		desc: [1280, 720,
			[
				[right, 796, 420, 0xf5e5ad],
				[right, 796, 426, 0xf8ebb7],
				[right, 796, 432, 0xefefaf],
				[right, 796, 439, 0xfde7b1],
				[left, 260, 41, 0x4d3738],
				[center, 328, 46, 0x775928],
			]
		],
		oper: [
			[center, 1280, 720, 785, 418, 810, 445, 1000],
		]
	}, { // 33 一键完成
		desc: [1280, 720,
			[
				[right, 1132, 621, 0xf59141],
				[right, 1196, 635, 0xfaa24f],
				[right, 1155, 656, 0xffb061],
				[right, 1162, 684, 0xffcf94],
				[right, 1137, 661, 0xfff8e8],
			]
		],
		oper: [
			[center, 1280, 720, 1123, 603, 1203, 677, 1000],
		]
	}, { // 34 检测_签到解读弹窗
		desc: [
			1280, 720,
			[
				[right, 860, 98, 0xeecccc],
				[right, 882, 98, 0xeecccc],
				[right, 868, 107, 0xe8d4d0],
				[right, 875, 105, 0xe7d6ce],
				[right, 867, 113, 0xe8d5cf],
			]
		],
		oper: [
			[center, 1280, 720, 854, 108, 893, 124, 1200], //  点击关闭
		],
	}, { // 35 检测_签到解读弹窗_大吉
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
	}, { // 36 检测_是否有邮件
		desc: [1280, 720,
			[
				[right, 1152, 39, 0xd7b288],
				[right, 1140, 46, 0xd2ab7f],
				[right, 1155, 54, 0xcba072],
				[right, 1225, 35, 0xd4ae84],
				[right, 1174, 23, 0xfd3e3e],
			],
		],
		oper: [
			[center, 1280, 720, 1137, 32, 1171, 58, 1000], //  点击邮箱
		],
	}, { // 37 检测_邮件弹窗_无全部领取
		desc: [1280, 720,
			[
				[center, 577, 83, 0x765139],
				[center, 603, 25, 0x494264],
				[center, 575, 85, 0x78533b],
				[center, 497, 642, 0xd5c8b7],
				[right, 1138, 66, 0x383347],
				[left, 111, 602, 0x625247],
			]
		],
		oper: [
			[left, 1280, 720, 186, 608, 303, 637, 1200], //  点击全部已读
			[right, 1280, 720, 1159, 94, 1199, 131, 1200], //  点击关闭
		],
	}, { // 38 检测_邮件弹窗_领取全部
		desc: [1280, 720,
			[
				[center, 577, 83, 0x765139],
				[center, 603, 25, 0x494264],
				[center, 575, 85, 0x78533b],
				[center, 497, 642, 0xd5c8b7],
				[right, 1138, 66, 0x383347],
				[left, 47, 622, 0xeee8d4],
				[left, 138, 617, 0xca9c73],
				[left, 69, 667, 0xdfd2c2],
				[left, 102, 673, 0xc59463],
			]
		],
		oper: [
			[left, 1280, 720, 71, 597, 129, 638, 600], //  点击_全部领取
		],
	}, { // 39 检测_全部领取弹窗
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
	}, { // 40 检测_获得奖励弹窗
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
	}, { // 41 邮件_获得插画
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
	}, { // 42 经验已满确认
		desc: [1280, 720,
			[
				[center, 485, 406, 0xdf6851],
				[center, 572, 437, 0xdf6851],
				[right, 692, 404, 0xf3b25e],
				[right, 786, 441, 0xf4b35d],
			]
		],
		oper: [
			[center, 1280, 720, 688, 405, 796, 439, 1000],
		]
	}, { // 43 领取完成
		desc: [1280, 720,
			[
				[center, 322, 55, 0xffe986],
				[center, 328, 58, 0xfee677],
				[center, 422, 61, 0xffe776],
				[center, 479, 60, 0xffe675],
			]
		],
		oper: [
			[center, 1280, 720, 562, 655, 728, 709, 1000],
		]
	}, { // 44 庭院已打开菜单
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 654, 121, 703, 178, 1000],
		]
	}, { // 45 探索地图界面
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 641, 633, 701, 698, 1000],
		]
	}, { // 46 筛选
		desc: [1280, 720,
			[
				[right, 1108, 50, 0xfaf4e4],
				[right, 1124, 39, 0xc96e73],
				[right, 1136, 39, 0xd37a7e],
				[right, 1145, 41, 0xb16565],
				[right, 1155, 48, 0xfbf8e8],
			]
		],
		oper: [
			[center, 1280, 720, 1117, 40, 1145, 60, 1000],
		]
	}, { // 47 收藏
		desc: [1280, 720,
			[
				[right, 1195, 601, 0xa98d72],
				[right, 1229, 604, 0xa28664],
				[right, 1222, 686, 0xa4896c],
				[right, 1195, 686, 0x9b7c5d],
			]
		],
		oper: [
			[center, 1280, 720, 1192, 597, 1231, 692, 1000],
		]
	}, { // 48 第一只
		desc: [1280, 720,
			[
				[right, 1202, 599, 0xe4c9a7],
				[right, 1228, 649, 0xdec3a0],
				[right, 1090, 238, 0xf4e9a2],
				[right, 1129, 272, 0xe4c665],
				[right, 1101, 270, 0x460409],
			]
		],
		oper: [
			[center, 1280, 720, 1084, 234, 1159, 289, 1000],
		]
	}, { // 49 第二只
		desc: [1280, 720,
			[
				[right, 1202, 599, 0xe4c9a7],
				[right, 1228, 649, 0xdec3a0],
				[right, 1101, 397, 0xf2e598],
				[right, 1109, 423, 0x5b060d],
				[right, 1116, 422, 0xeecf69],
				[right, 1144, 399, 0xc5091f],
			]
		],
		oper: [
			[center, 1280, 720, 1084, 234, 1159, 289, 1000],
		]
	}, { // 50 第三只
		desc: [1280, 720,
			[
				[right, 1202, 599, 0xe4c9a7],
				[right, 1228, 649, 0xdec3a0],
				[right, 1122, 590, 0xdeb655],
				[right, 1133, 592, 0xe1ba56],
				[right, 1130, 580, 0xe4c665],
				[right, 1105, 577, 0x56060c],
			]
		],
	}, { // 51 挑战
		desc: [1280, 720,
			[
				[right, 1107, 559, 0xdac6ad],
				[right, 1216, 562, 0xe2c8a1],
				[right, 1147, 514, 0xd3c7b1],
				[right, 1125, 601, 0x0a0a09],
				[right, 1144, 608, 0x191e13],
			]
		],
		oper: [
			[center, 1280, 720, 1104, 537, 1203, 606, 1000],
		]
	}, { // 52 关闭挑战
		desc: [1280, 720,
			[
				[left, 137, 216, 0xddd6ce],
				[left, 181, 631, 0xd7cdc6],
				[right, 1209, 43, 0xeecccc],
				[right, 1087, 624, 0xebe5ce],
				[right, 1205, 437, 0xa05437],
			]
		],
		oper: [
			[center, 1280, 720, 1195, 30, 1226, 59, 1000],
		]
	}, { // 53 选择安卓或苹果平台_带有鸿蒙入口
		desc: [1280, 720,
			[
				[right, 801, 373, 0x000000],
				[right, 804, 437, 0x000000],
				[center, 632, 375, 0x8ec220],
				[center, 639, 438, 0x8ec220],
				[center, 462, 376, 0x1a1a1a],
				[center, 472, 408, 0xf9f9fb],
			]
		],
		oper: [
			[center, 1280, 720, 606, 378, 665, 434, 1000],
			[center, 1280, 720, 441, 375, 500, 432, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['609'];
		if (thisScript.global.account_state === 'login') {
			if (thisScript.global.account_num >= (thisconf.account_count as number)) {
				thisScript.stop();
				return true;
			}
			if (thisScript.oper({
				id: 609,
				name: '退出账号',
				operator: [thisOperator[0], thisOperator[1]]
			})) {
				return true
			}
			if (thisScript.oper({
				id: 609,
				name: '第一个号直接登录.否者打开账号选择框',
				operator: [{ desc: thisOperator[2].desc }]
			})) {
				if (thisScript.global.account_num === 0 || thisScript.global.account_num % 2 === 1) {
					thisScript.regionClick([thisOperator[2].oper[0]]);
				} else {
					thisScript.regionClick([thisOperator[2].oper[1]]);
				}
				return true;
			}
			if (thisScript.oper({
				id: 609,
				name: '第一个号直接登录.否者打开账号选择框(带有鸿蒙入口)',
				operator: [{ desc: thisOperator[53].desc }]
			})) {
				if (thisScript.global.account_num === 0 || thisScript.global.account_num % 2 === 1) {
					thisScript.regionClick([thisOperator[53].oper[0]]);
				} else {
					thisScript.regionClick([thisOperator[53].oper[1]]);
				}
				return true;
			}
			if (thisScript.oper({
				id: 609,
				name: '选取最后一个账号',
				operator: [{ desc: thisOperator[3].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[3].oper[0], thisOperator[3].oper[1], [500, 700], 1500);
				thisScript.regionClick([thisOperator[3].oper[2]]);
				thisScript.regionClick([thisOperator[2].oper[0]]);
				return true;
			}
			if (thisScript.oper({
				id: 609,
				name: '选择平台',
				operator: [{ desc: thisOperator[4].desc }]
			})) {
				thisScript.regionClick([thisOperator[4].oper[thisScript.global.account_num % 2]]);
				thisScript.global.account_state = 'function';
				return true;
			}
			if (thisScript.oper({
				id: 609,
				name: '庭院',
				operator: [{ desc: thisOperator[5].desc }]
			})) {
				thisScript.global.account_state = 'function';
				return true;
			}
		}
		if (thisScript.global.account_state === 'function') {
			if (thisScript.oper({
				id: 609,
				name: '选择平台',
				operator: [{ desc: thisOperator[4].desc }]
			})) {
				thisScript.regionClick([thisOperator[4].oper[thisScript.global.account_num % 2]]);
				return true;
			}
			if (!thisScript.global.function_Swith) {// 首次执行,读取按钮状况
				thisScript.global.function_Swith = {
					'juanGouYu': thisconf.juanGouYu as boolean,
					'liaoSanshi': thisconf.liaoSanshi as boolean,
					'liaoSanshi_tongXinDui_qiLin': true,
					'liaoSanshi_tongXinDui_check': false,
					'liaoSanshi_tongXinDui_fight': false,
					'liaoSanshi_tongXinDui_yuCun': false,
					'liaoSanshi_tongXinDui_back': false,
					'agency': thisconf.agency as boolean,
					'regoinBoos': thisconf.regoinBoos as boolean,
					'regoinBoos_num': 0,
					'regoinBoos_fight': false,
				};
			}
			if (thisScript.global.function_Swith.juanGouYu) {
				if (thisScript.oper({
					id: 609,
					name: '进入阴阳寮信息',
					operator: [thisOperator[7], thisOperator[8]]
				})) {
					return true;
				}
				let curCnt = 0;
				const maxCount = 3;
				while (thisScript.oper({
					id: 609,
					name: '点击捐赠勾玉',
					operator: [thisOperator[9]]
				})) {
					curCnt++;
					thisScript.keepScreen(false);
					if (curCnt >= maxCount) {
						thisScript.myToast('已达到捐赠上限');
						thisScript.global.function_Swith.juanGouYu = false;
						return true;
					}
					sleep(500)
				}
				if (thisScript.oper({
					id: 609,
					name: '捐赠',
					operator: [thisOperator[10]]
				})) {
					thisScript.global.function_Swith.juanGouYu = false;
					return true;
				}
			}
			if (thisScript.global.function_Swith.liaoSanshi) {
				if (thisScript.global.function_Swith.liaoSanshi_tongXinDui_check) {
					if (thisScript.oper({
						id: 609,
						name: '进入集体任务界面',
						operator: [thisOperator[7], thisOperator[11]]
					})) {
						return true;
					}
					if (thisScript.oper({
						id: 609,
						name: '进入集体任务',
						operator: [{ desc: thisOperator[12].desc }]
					})) {
						// 如果已完成三十次同心队,则预存体力,否则开始同心队战斗(战斗完成后再跳转至预存体力)
						if (thisScript.oper({
							id: 609,
							name: '任务完成三十次',
							operator: [{ desc: thisOperator[13].desc }]
						})) {
							thisScript.global.function_Swith.liaoSanshi_tongXinDui_yuCun = true;
						} else {
							thisScript.global.function_Swith.liaoSanshi_tongXinDui_fight = true;
						}
						thisScript.global.function_Swith.liaoSanshi_tongXinDui_check = false;
						thisScript.global.function_Swith.liaoSanshi_tongXinDui_fight = true;
						thisScript.regionClick([thisOperator[12].oper[0]]);
						return true;
					}
				}
				if (thisScript.global.function_Swith.liaoSanshi_tongXinDui_fight) {
					if (thisScript.runTimes['2'] >= 30) {
						thisScript.myToast('已完成三十次组队,跳转预存体力');
						thisScript.global.function_Swith.liaoSanshi_tongXinDui_fight = false;
						thisScript.global.function_Swith.liaoSanshi_tongXinDui_yuCun = true;
						return true;
					}
					if (thisScript.oper({
						id: 609,
						name: '已集结',
						operator: [thisOperator[22], thisOperator[24], thisOperator[25]]
					})) {
						return true;
					}
					if (thisScript.oper({
						id: 609,
						name: '已集结',
						operator: [{ desc: thisOperator[23].desc }]
					})) {
						thisScript.regionBezierSwipe(thisOperator[23].oper[0], thisOperator[23].oper[1], [300, 500], 1000);
						thisScript.regionClick([thisOperator[23].oper[2]]);
						thisScript.regionClick([thisOperator[23].oper[3]]);
						return true;
					}
					if (thisScript.oper({
						id: 609,
						name: '进入同心队',
						operator: [thisOperator[14], thisOperator[15], thisOperator[16]]
					})) {
						return true;
					}
					if (thisScript.oper({
						id: 609,
						name: '进入同心队',
						operator: [{ desc: thisOperator[17].desc }]
					})) {
						if (thisScript.getOcrDetector()) {
							const Str_ocr = thisScript.findNum(0, thisOperator[17].oper[0]);
							if (Array.isArray(Str_ocr) && Str_ocr.length > 0) {
								for (const item of Str_ocr) {
									const num = Number(item?.label);
									if (Number.isNaN(num) || num < 120) {
										console.log('队友体力小于120,跳过');
										thisScript.global.function_Swith.liaoSanshi_tongXinDui_fight = false;
										thisScript.global.function_Swith.liaoSanshi_tongXinDui_yuCun = true;
										return true;
									}
								}
								console.log('队友体力大于120,开始战斗');
								thisScript.regionClick([thisOperator[17].oper[1]]);
								return true;
							} else {
								console.log('OCR 没识别到字符,跳过');
								thisScript.global.function_Swith.liaoSanshi_tongXinDui_fight = false;
								thisScript.global.function_Swith.liaoSanshi_tongXinDui_yuCun = true;
								return true;
							}
						} else {
							thisScript.myToast('未安装OCR，无法进行ocr识别');
							thisScript.doPush(thisScript, { text: '未安装OCR，无法进行ocr识别' });
							thisScript.stop();
							sleep(3000);
						}
						return true;
					}
					if (thisScript.oper({
						id: 609,
						name: '进入组队',
						operator: [thisOperator[18], thisOperator[19], thisOperator[20], thisOperator[21]]
					})) {
						return true;
					}
					if (thisScript.oper({
						id: 609,
						name: '进入组队',
						operator: [thisOperator[21]]
					})) {
						thisScript.runTimes['2'] = 0; // 重置组队次数
						return true;
					}
				}
				if (thisScript.global.function_Swith.liaoSanshi_tongXinDui_yuCun) {
					if (thisScript.oper({
						id: 609,
						name: '队员列表',
						operator: [thisOperator[26], thisOperator[27], thisOperator[28]]
					})) {
						return true;
					}
					if (thisScript.oper({
						id: 609,
						name: '一键预存',
						operator: [thisOperator[29]]
					})) {
						thisScript.global.function_Swith.liaoSanshi_tongXinDui_yuCun = false;
						thisScript.global.function_Swith.liaoSanshi_tongXinDui_back = true;
						return true;
					}
				}
				if (thisScript.global.function_Swith.liaoSanshi_tongXinDui_back) {
					if (thisScript.oper({
						id: 609,
						name: '返回',
						operator: [thisOperator[30], thisOperator[31]]
					})) {
						return true;
					}
					if (thisScript.oper({
						id: 609,
						name: '庭院',
						operator: [{ desc: thisOperator[5].desc }]

					})) {
						thisScript.global.function_Swith.liaoSanshi_tongXinDui_back = false;
						return true;
					}
				}
			}
			if (thisScript.global.function_Swith.agency) {
				let curCnt = 0;
				const maxCount = 2;
				while (thisScript.oper({
					id: 609,
					name: '一键代办',
					operator: [thisOperator[33]]
				})) {
					curCnt++;
					thisScript.keepScreen(false);
					if (curCnt >= maxCount) {
						thisScript.myToast('已达到一键代办');
						thisScript.global.function_Swith.agency = false;
						return true;
					}
					sleep(1000);
				}
				if (thisScript.oper({
					id: 609,
					name: '一键代办',
					operator: [thisOperator[36], thisOperator[37], thisOperator[38], thisOperator[39]
						, thisOperator[40], thisOperator[41], thisOperator[42], thisOperator[43]
						, thisOperator[32], thisOperator[34], thisOperator[35]]
				})) {
					return true;
				}
			}
			if (thisScript.global.function_Swith.regoinBoos) {
				if (thisScript.global.function_Swith.regoinBoos_fight && thisScript.oper({
					id: 609,
					name: '地域鬼王_战斗后关闭',
					operator: [thisOperator[52]]
				})) {
					thisScript.global.function_Swith.regoinBoos_fight = false;
					thisScript.global.function_Swith.regoinBoos_num = (thisScript.global.function_Swith.regoinBoos_num as number) + 1;
					if (thisScript.global.function_Swith.regoinBoos_num as number >= 3) {
						thisScript.global.function_Swith.regoinBoos = false;
					}
					return true;
				}
				if (thisScript.oper({
					id: 609,
					name: '地域鬼王',
					operator: [thisOperator[44], thisOperator[45], thisOperator[46], thisOperator[47]]
				})) {
					return true;
				}
				let curCnt = 0;
				const maxCount = 3;
				while (thisScript.oper({
					id: 609,
					name: '点挑战',
					operator: [thisOperator[51]]
				})) {
					thisScript.global.function_Swith.regoinBoos_fight = true;
					curCnt++;
					thisScript.keepScreen(false);
					if (curCnt >= maxCount) {
						return true;
					}
					sleep(1000);
				}
				if (thisScript.oper({
					id: 609,
					name: '选鬼王',
					operator: [thisOperator[48 + (thisScript.global.function_Swith.regoinBoos_num as number)]]
				})) {
					return true;
				}
			}
			if (!thisScript.global.function_Swith.juanGouYu && !thisScript.global.function_Swith.liaoSanshi &&
				!thisScript.global.function_Swith.agency && !thisScript.global.function_Swith.regoinBoos &&
				thisScript.oper({
					id: 609,
					name: '庭院',
					operator: [{ desc: thisOperator[5].desc }]
				})) {
				thisScript.global.account_state = 'logout';
				return true;
			}
		}
		if (thisScript.global.account_state === 'logout') {
			if (thisScript.oper({
				id: 609,
				name: '打开头像菜单',
				operator: [thisOperator[5], thisOperator[6]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 609,
				name: '完成退出',
				operator: [{ desc: thisOperator[1].desc }]
			})) {
				thisScript.global.account_num += 1;
				thisScript.global.function_Swith = null;
				thisScript.global.account_state = 'login';
				return true;
			}
		}
	}
}