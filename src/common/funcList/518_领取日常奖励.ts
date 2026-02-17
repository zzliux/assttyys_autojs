import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator, } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func518 implements IFuncOrigin {
	id = 518;
	name = '领取日常奖励';
	desc = '一键代办,商店黑蛋,发送吉闻,花合战';
	operator: IFuncOperatorOrigin[] = [
		{
			// 0 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
			desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
			oper: [
				[right, 1280, 720, 1168, 592, 1230, 690, 1200]
			]
		}, { // 1 一键代办
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
		}, { // 2 一键完成
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
		}, { // 3 一键代办_特殊转日常
			desc: [1280, 720,
				[
					[right, 1143, 136, 0x997349],
					[right, 1202, 181, 0x997045],
					[right, 1145, 248, 0xfac083],
					[right, 1214, 293, 0xfbc58f],
					[right, 1167, 186, 0x997048],
					[right, 1174, 293, 0xfac289],
				]
			],
			oper: [
				[center, 1280, 720, 1143, 142, 1207, 178, 1000],
			]
		}, { // 4 领取完成
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
		}, { // 5 经验已满确认
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
		}, { // 6 检测_签到解读弹窗
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
		}, { // 7 检测_签到解读弹窗_大吉
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
		}, { // 8 检测_是否有邮件
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
				[center, 1280, 720, 1137, 32, 1171, 58, 2000], //  点击邮箱
			],
		}, { // 9 检测_邮件弹窗_无全部领取
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
				[center, 1280, 720, 262, 142, 415, 188, 1000], // 点击第一个邮件
			],
		}, { // 10 检测_邮件弹窗_领取全部
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
		}, { // 11 检测_全部领取弹窗
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
		}, { // 12 检测_获得奖励弹窗
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
		}, { // 13 邮件_获得插画
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
		}, { // 14 邮箱_头像框
			desc: [1280, 720,
				[
					[right, 1207, 52, 0x973646],
					[right, 1220, 53, 0xe8d4cf],
					[right, 1230, 47, 0xe9d5d0],
					[right, 1234, 55, 0x983474],
					[right, 1220, 69, 0x973b63],
				]
			],
			oper: [
				[center, 1280, 720, 1206, 42, 1241, 69, 1000],
			]
		}, { // 15 领取溢出结界卡
			desc: [1280, 720,
				[
					[left, 143, 118, 0xcdd0fa],
					[center, 478, 217, 0xc8cff7],
					[center, 445, 177, 0x643c25],
					[right, 1019, 600, 0xf3b25e],
					[right, 1127, 627, 0xf3b25e],
				]
			],
			oper: [
				[center, 1280, 720, 1013, 597, 1126, 628, 1000],
			]
		}, { // 16 获得奖励弹窗
			desc: [1280, 720,
				[
					[center, 373, 352, 0x87643c],
					[center, 368, 424, 0x8f6b41],
					[right, 912, 357, 0x8a673d],
					[right, 919, 438, 0x8e6a41],
					[center, 388, 364, 0x563b1c],
					[center, 393, 391, 0x9d8169],
					[right, 915, 439, 0x8e6a41],
				],
			],
			oper: [
				[left, 1280, 720, 255, 575, 1058, 664, 1200], //  点击空白处
			],
		}, { // 17 可删除邮件
			desc: [1280, 720,
				[
					[left, 192, 147, 0xe2ca9b],
					[left, 195, 156, 0xe9e1d8],
					[left, 195, 174, 0xf1dcb2],
					[center, 458, 178, 0x643c25],
					[center, 475, 217, 0xc8d3f4],
					[left, 143, 120, 0xcbcff9],
					[center, 567, 608, 0xc8b08a],
					[center, 567, 635, 0xba9e7e],
				]
			],
			oper: [
				[center, 1280, 720, 1155, 97, 1194, 129, 1000],
			]
		}, { // 18 邮件_御魂已满 无图,待做
		}, { // 19 庭院_商店
			desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
			oper: [
				[center, 1280, 720, 660, 626, 697, 664, 1200], //  庭院点击商店
			],
		}, { // 20 拓展包关闭
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
		}, { // 21 礼包屋
			desc: [1280, 720,
				[
					[right, 1132, 672, 0x66402f],
					[right, 1143, 675, 0x842121],
					[right, 1149, 666, 0x842121],
					[right, 1177, 665, 0xd03a3a],
					[right, 1184, 676, 0xd23b3b],
					[right, 1194, 676, 0x513728],
				]
			],
			oper: [
				[center, 1280, 720, 1146, 664, 1187, 692, 1000],
			]
		}, { // 22 礼包屋_已打开
			desc: [1280, 720,
				[
					[right, 1132, 672, 0xd8ae53],
					[right, 1143, 675, 0x842121],
					[right, 1149, 666, 0x842121],
					[right, 1177, 665, 0xd03a3a],
					[right, 1184, 676, 0xd23b3b],
					[right, 1194, 676, 0xd6af55],
				]
			],
			oper: [
				[center, 1280, 720, 92, 9, 131, 45, 1000],
			]
		}, { // 23 日常_领取黑蛋
			desc: [1280, 720,
				[
					[center, 323, 141, 0xe41010],
					[left, 292, 310, 0xc38646],
					[left, 236, 218, 0xe1e1e1],
					[left, 254, 217, 0x242221],
					[left, 182, 168, 0xc19561],
				]
			],
			oper: [
				[center, 1280, 720, 220, 204, 285, 276, 1000],
				[center, 1280, 720, 619, 552, 691, 596, 1000],
			]
		}, { // 24 检测_同兰之心
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
		}, { // 25 庭院_好友
			desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
			oper: [
				[center, 1280, 720, 886, 634, 928, 667, 1000], //  庭院点击好友
			],
		}, { // 26 好友_吉闻
			desc: [1280, 720,
				[
					[left, 45, 46, 0xe29e47],
					[left, 44, 75, 0xfcc567],
					[left, 74, 58, 0xd38a39],
					[left, 20, 60, 0xc27830],
				]
			],
			oper: [
				[center, 1280, 720, 26, 46, 68, 76, 2000],
			]
		}, { // 27 一键祝福
			desc: [1280, 720,
				[
					[center, 565, 78, 0xd4a04c],
					[center, 575, 82, 0xd5a54e],
					[right, 762, 91, 0x593716],
					[right, 1124, 508, 0xffcd7c],
					[right, 1200, 529, 0xfecc7d],
				]
			],
			oper: [
				[center, 1280, 720, 1113, 507, 1208, 527, 1000],
			]
		}, { // 28 无一键祝福
			desc: [1280, 720,
				[
					[center, 563, 68, 0xdfb55f],
					[center, 565, 78, 0xd4a04c],
					[right, 760, 93, 0x593716],
					[right, 1068, 571, 0x52362d],
					[right, 1069, 634, 0x533730],
				]
			],
			oper: [
				[center, 1280, 720, 1061, 127, 1092, 161, 1000],
			]
		}, { // 29 祝福界面
			desc: [1280, 720,
				[
					[center, 403, 225, 0x836e7b],
					[center, 404, 244, 0x6e5a71],
					[center, 405, 249, 0x806b77],
					[right, 842, 214, 0xe8d3d1],
					[center, 618, 442, 0xf3b25e],
				]
			],
			oper: [
				[center, 1280, 720, 564, 440, 721, 490, 1000],
			]
		}, { // 30 祝福退出
			desc: [1280, 720,
				[
					[right, 833, 215, 0xd96c86],
					[right, 843, 215, 0xe8d4cf],
					[right, 859, 215, 0xd66db9],
					[right, 843, 202, 0xc6738e],
				]
			],
			oper: [
				[center, 1280, 720, 825, 206, 861, 230, 1000],
			]
		}, { // 31 吉闻退出
			desc: [1280, 720,
				[
					[right, 1062, 145, 0x733539],
					[right, 1097, 143, 0x652946],
					[right, 1077, 128, 0x652f38],
					[right, 1077, 160, 0x753643],
					[right, 1077, 145, 0xead4cf],
				]
			],
			oper: [
				[center, 1280, 720, 1058, 130, 1096, 165, 1000],
			]
		}, { // 32 好友退出
			desc: [1280, 720,
				[
					[right, 1164, 116, 0x733539],
					[right, 1194, 116, 0x713150],
					[right, 1175, 96, 0x59292e],
					[right, 1179, 131, 0x743642],
				]
			],
			oper: [
				[center, 1280, 720, 1161, 101, 1199, 135, 1000],
			]
		}, { // 33 代办退出
			desc: [1280, 720,
				[
					[left, 44, 29, 0xf0d693],
					[left, 44, 45, 0xf0d793],
					[left, 111, 28, 0xf9eeb7],
					[left, 123, 48, 0xf4e491],
					[center, 448, 41, 0xc95634],
				]
			],
			oper: [
				[center, 1280, 720, 22, 28, 65, 54, 1000],
			]
		}, { // 34 商店退出
			desc: [1280, 720,
				[
					[left, 103, 20, 0xf7ebb3],
					[left, 123, 22, 0xf8eaab],
					[left, 112, 16, 0xf8ecb6],
					[left, 119, 40, 0xf4e491],
					[left, 29, 27, 0xf8ecaf],
				]
			],
			oper: [
				[center, 1280, 720, 97, 18, 127, 46, 1000],
			]
		}, { // 35 庭院_花合战
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
		}, { // 36 花合战首页_奖励页签
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
		}, { // 37 花合战首页-任务页签且右下角含有全部领取
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
		}, { // 38  花合战界面退出
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
		}, { // 39  花合战上新
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
				[center, 1280, 720, 1167, 50, 1190, 66, 1000],
				[center, 1280, 720, 1167, 50, 1190, 66, 1000],
				[center, 1280, 720, 1167, 50, 1190, 66, 1000],
			]
		}, { // 40 代办_红字(已完成)
			desc: [1280, 720,
				[
					[right, 1075, 153, 0xaa3322],
					[right, 1073, 162, 0xaa3322],
					[right, 1064, 167, 0xb63b2a],
					[right, 989, 182, 0xae2719],
					[center, 469, 67, 0x593616],
				]
			],
		}, { // 41 牌
			desc: [1280, 720,
				[
					[right, 1169, 49, 0x231f1d],
					[right, 1228, 59, 0x292422],
					[right, 1196, 40, 0x211d1b],
					[right, 1200, 63, 0x1e1b1d],
					[right, 1198, 51, 0x221e1e],
					[right, 1215, 59, 0xcbc29f],
					[right, 1195, 59, 0xb9b191],
				]
			],
			oper: [
				[center, 1280, 720, 1168, 48, 1200, 64, 1000],
				[center, 1280, 720, 1168, 48, 1200, 64, 1000],
				[center, 1280, 720, 1168, 48, 1200, 64, 1000],
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (!thisScript.global.function_Swith) {// 首次执行,读取按钮状况
			thisScript.global.function_Swith = {
				'agency': true,
				'shop': true,
				'friend': true,
				'flower': true,
				'email': true,
			};
		}
		if (thisScript.oper({
			id: 518,
			name: '杂项',
			operator: [thisOperator[0], thisOperator[16], thisOperator[24], thisOperator[41]]
		})) {
			return true;
		}
		if (thisScript.global.function_Swith.email) {
			if (thisScript.oper({
				id: 518,
				name: '邮件',
				operator: [thisOperator[8], thisOperator[10]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 518,
				name: '邮件',
				operator: [thisOperator[17]]
			})) {
				thisScript.global.function_Swith.email = false;
				return true;
			}
		}
		if (thisScript.oper({
			id: 518,
			name: '邮件',
			operator: [thisOperator[9], thisOperator[11], thisOperator[15]]
		})) {
			return true;
		}
		if (thisScript.global.function_Swith.agency) {
			if (thisScript.oper({
				id: 518,
				name: '一键代办_完成',
				operator: [thisOperator[40]]
			})) {
				thisScript.myToast('已达到一键代办');
				thisScript.global.function_Swith.agency = false;
				return true;
			}
			let curCnt = 0;
			const maxCount = 2;
			while (thisScript.oper({
				id: 518,
				name: '一键代办',
				operator: [thisOperator[2]]
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
				id: 518,
				name: '一键代办',
				operator: [thisOperator[1], thisOperator[3], thisOperator[4], thisOperator[5]
					, thisOperator[6], thisOperator[7],]
			})) {
				return true;
			}
		}
		if (thisScript.global.function_Swith.shop) {
			if (thisScript.oper({
				id: 518,
				name: '商店_杂项',
				operator: [thisOperator[19], thisOperator[20], thisOperator[21], thisOperator[5]
					, thisOperator[6], thisOperator[7],]
			})) {
				return true;
			}
			let curCnt = 0;
			const maxCount = 10;
			while (thisScript.oper({
				id: 518,
				name: '商店_领取',
				operator: [{ desc: thisOperator[22].desc }]
			})) {
				curCnt++;
				thisScript.keepScreen(false);
				if (thisScript.oper({
					id: 518,
					name: '商店_领取',
					operator: [thisOperator[23]]
				})) {
					thisScript.regionClick(thisOperator[22].oper)
					thisScript.global.function_Swith.shop = false;
					return true;
				}
				const point = thisScript.findMultiColor('商店_日常');
				if (point) {
					thisScript.regionClick([[point.x - 50, point.y + 20, point.x - 30, point.y + 40, 1000]]);
					return true;
				}
				if (curCnt >= maxCount) {
					thisScript.myToast(`连续差查找${maxCount}次未找到，跳过领取`);
					thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.regionClick(thisOperator[22].oper)
					thisScript.global.function_Swith.shop = false;
					return true;
				}
				sleep(500);
			}
		}
		if (thisScript.global.function_Swith.friend) {
			if (thisScript.oper({
				id: 518,
				name: '吉闻',
				operator: [thisOperator[25], thisOperator[26], thisOperator[27]]
			})) {
				return true;
			}
			let curCnt = 0;
			const maxCount = 3;
			while (thisScript.oper({
				id: 518,
				name: '祝福界面',
				operator: [thisOperator[29]]
			})) {
				curCnt++;
				thisScript.keepScreen(false);
				if (curCnt >= maxCount) {
					thisScript.doPush(thisScript, { text: '无祝福语言,自行输入', before() { thisScript.myToast('无祝福语言,自行输入'); } });
					thisScript.global.function_Swith.friend = false;
					return true;
				}
				sleep(1000);
			}
			if (thisScript.oper({
				id: 518,
				name: '吉闻结束',
				operator: [thisOperator[28]]
			})) {
				thisScript.global.function_Swith.friend = false;
				return true;
			}
		}
		if (thisScript.global.function_Swith.flower) {
			if (thisScript.oper({
				id: 518,
				name: '花合战',
				operator: [thisOperator[35], thisOperator[36], thisOperator[39]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 518,
				name: '花合战_任务界面',
				operator: [{ desc: thisOperator[38].desc }]
			})) {
				if (thisScript.oper({
					name: '花合战_领取奖励',
					operator: [thisOperator[37]]
				})) {
					return true;
				} else {
					// 退出
					thisScript.regionClick(thisOperator[38].oper);
					thisScript.global.function_Swith.flower = false;
					return true;
				}
			}
		}
		if (thisScript.oper({
			id: 518,
			name: '退出',
			operator: [thisOperator[30], thisOperator[31], thisOperator[32], thisOperator[33]
				, thisOperator[34], thisOperator[38]]
		})) {
			return true;
		}
		return false;
	}
}
export default new Func518();
