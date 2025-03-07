import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func316 implements IFuncOrigin {
	id = 316;
	name = '六道椒图';
	desc: '应排在[2退出结算]前';
	config = [{
		desc: '配置',
		config: [{
			name: 'pushResult',
			desc: '结束时使用ospPush推送结果',
			type: 'switch',
			default: false,
		}, {
			name: 'overTimes',
			desc: '挂机局数，完成后自动停止脚本，0表示一直刷',
			type: 'integer',
			default: '0'
		}],
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 事件 唤息亮
		desc: [
			1280, 720,
			[
				[left, 25, 43, 0xe8eaf5],
				[left, 250, 40, 0x593716],
				[left, 155, 50, 0xf8f3e0],
				[left, 54, 648, 0x272d42],
				[right, 1175, 598, 0x58452f],
				[right, 1186, 626, 0x5b4730],
			]
		],
	}, { // 1 点固定事件位置
		oper: [
			[center, 1280, 720, 625, 474, 734, 544, 0], // 位置:2位
			[center, 1280, 720, 335, 434, 466, 496, 0], // 位置:1位
			[center, 1280, 720, 880, 468, 1038, 543, 0], // 位置:3位
		]
	}, { // 2 事件 唤息暗
		desc: [
			1280, 720,
			[
				[left, 25, 43, 0xe8eaf5],
				[left, 250, 40, 0x593716],
				[left, 155, 50, 0xf8f3e0],
				[left, 54, 648, 0x272d42],
				[right, 1148, 648, 0xebebeb],
				[right, 1150, 614, 0x505050],
			]
		]
	}, { // 3 已适配66 鏖战
		desc: [
			1280, 720,
			[
				[left, 73, 532, 0x676a83],
				[left, 121, 577, 0x636882],
				[left, 120, 40, 0xf8f3e0],
				[left, 116, 48, 0xf8f3e0],
				[left, 138, 41, 0xf8f3e0],
				[left, 150, 35, 0xf8f3e0],
				[center, 440, 264, 0x242a36],
				[center, 745, 293, 0x242934],
				[left, 252, 42, 0x593716],
			]
		],
		oper: [
			[center, 1280, 720, 785, 291, 909, 378, 0], // 右怪
			// [center, 1280, 720, 1120, 597, 1231, 682, 500], // 挑战
		]
	}, { // 4 buff抉择
		desc: [
			1280, 720,
			[
				[left, 256, 597, 0x3f3f3f],
				[center, 530, 599, 0x494949],
				[center, 807, 596, 0x494949],
				[right, 1131, 601, 0x353535],
				[right, 1085, 227, 0xdbd5c7],
			]
		],
		oper: [
			[center, 1280, 720, 1034, 578, 1137, 621, 500], // 万相之赐
		]
	}, { // 5 已适配66 混沌_宝箱
		desc: [
			1280, 720,
			[
				[right, 1162, 637, 0x53606d],
				[right, 1177, 642, 0xc7b38e],
				[right, 1194, 633, 0xc4b08b],
				[right, 1217, 615, 0x36404a],
				[right, 1202, 634, 0xd7c7a2],
				[right, 1197, 606, 0x2d3643],
			]
		],
		oper: [
			[center, 1280, 720, 1160, 609, 1227, 659, 500],
		]
	}, { // 6 混沌_怪物
		desc: [
			1280, 720,
			[
				[left, 73, 532, 0x676a83],
				[left, 121, 577, 0x636882],
				[left, 105, 28, 0xf6f1de],
				[left, 119, 43, 0xf8f3e0],
				[left, 147, 28, 0xf8f3e0],
				[left, 154, 51, 0xf8f3e0],
				[left, 154, 38, 0xf7f2df],
			]
		],
		oper: [
			[center, 1280, 720, 680, 292, 801, 379, 0],
			// [center, 1280, 720, 1120, 597, 1231, 682, 500], // 挑战
		]
	}, { // 7 已适配66 商店
		desc: [
			1280, 720,
			[
				[center, 558, 628, 0xbdab86],
				[right, 1199, 306, 0x333848],
				[right, 1212, 335, 0x4f556c],
				[right, 1219, 198, 0xe5dfd5],
				[right, 1231, 618, 0xdbcaa8],
				[right, 1190, 624, 0xcebb96],
			]
		],
		oper: [
			[center, 1280, 720, 678, 409, 837, 453, 500], // 确认购买
			[center, 1280, 720, 1174, 588, 1241, 649, 500], // 退出商店
		]
	}, { // 8 已适配66 星之屿
		desc: [
			1280, 720,
			[
				[left, 73, 532, 0x676a83],
				[left, 121, 577, 0x636882],
				[left, 121, 31, 0xf8f3e0],
				[left, 116, 41, 0xf8f3e0],
				[left, 117, 52, 0xf8f3e0],
				[left, 122, 52, 0xf8f3e0],
				[center, 748, 253, 0x7b3a3a],
				[center, 422, 257, 0x222731],
			]
		],
		oper: [
			[center, 1280, 720, 456, 274, 566, 347, 0],
			// [center, 1280, 720, 1120, 597, 1231, 682, 500], // 挑战
		]
	}, { // 9 开始_开启
		desc: [
			1280, 720,
			[
				[right, 1145, 591, 0xf4e2ae],
				[right, 1162, 590, 0xf9e5af],
				[right, 1162, 622, 0xfae6b0],
				[right, 1142, 624, 0xf9e6af],
				[right, 1195, 633, 0xfae4ae],
				[right, 1185, 651, 0xf9e2ad],
				[right, 1153, 645, 0x384960],
			]
		],
		oper: [
			[center, 1280, 720, 1128, 606, 1217, 664, 500],
		]
	}, { // 10 开始_确定
		desc: [
			1280, 720,
			[
				[right, 1148, 589, 0xfff5bb],
				[right, 1187, 604, 0xfff0b5],
				[right, 1196, 633, 0xfff3bd],
				[right, 1162, 664, 0xabc1d3],
				[right, 1180, 645, 0x3d4c62],
			]
		],
		oper: [
			[center, 1280, 720, 1145, 597, 1228, 662, 500],
		]
	}, { // 11 已适配66 开始_开启_60体
		desc: [
			1280, 720,
			[
				[right, 1166, 588, 0xfff4bd],
				[right, 1181, 585, 0xfff5bd],
				[right, 1182, 623, 0xffe9ad],
				[right, 1181, 604, 0xfff0b5],
				[right, 1206, 623, 0xfff5be],
				[right, 1205, 653, 0xffe3ab],
				[right, 1171, 641, 0x404e62],
			]
		],
		oper: [
			[center, 1280, 720, 1142, 595, 1230, 659, 500],
		]
	}, { // 12 开始_选择柔风
		desc: [
			1280, 720,
			[
				[left, 289, 205, 0x89e192],
				[left, 300, 201, 0xffffff],
				[center, 328, 211, 0x00add7],
				[center, 345, 225, 0x34d8dc],
				[center, 321, 248, 0xa25287],
				[left, 284, 592, 0x5a5a5a],
				[center, 355, 596, 0x484848],
			]
		],
		oper: [
			[center, 1280, 720, 268, 574, 374, 617, 500],
		]
	}, { // 13 确认奖励
		desc: [1280, 720,
			[
				[center, 554, 142, 0xfede96],
				[center, 622, 143, 0xf7e691],
				[center, 745, 181, 0xffeeaa],
				[center, 583, 184, 0xf6e6b4],
				[center, 635, 192, 0xeacd7e],
			]
		],
		oper: [
			[right, 1280, 720, 913, 129, 1245, 648, 500],
		]
	}, { // 14 已适配66 神秘_转换
		desc: [
			1280, 720,
			[
				[center, 913, 678, 0x39607c],
				[center, 871, 230, 0x2ee1e5],
				[right, 1137, 665, 0x2a1d11],
				[center, 947, 65, 0x1d212c],
				[right, 1008, 84, 0x171b23],
				[left, 26, 39, 0xf3f4fb],
				[left, 265, 40, 0x593716],
			]
		],
		oper: [
			[center, 1280, 720, 17, 20, 52, 58, 500],
		]
	}, { // 15 神秘_仿造
		desc: [
			1280, 720,
			[
				[right, 1227, 240, 0xdfd5be],
				[right, 1215, 276, 0xe0dbda],
				[right, 1212, 392, 0x343849],
				[right, 1225, 387, 0x323746],
				[right, 1182, 640, 0x8c7e60],
				[right, 1230, 668, 0x8c7e60],
			]
		],
		oper: [
			[center, 1280, 720, 830, 192, 900, 242, 500],
			[center, 1280, 720, 1168, 626, 1245, 688, 500],
			[center, 1280, 720, 677, 406, 838, 456, 500],
			[center, 1280, 720, 17, 20, 52, 58, 500],
		]
	}, { // 16 结束
		desc: [
			1280, 720,
			[
				[right, 1096, 620, 0xdbdbb6],
				[right, 1125, 618, 0xdcdabb],
				[right, 1108, 625, 0xd7d3b6],
				[right, 1141, 638, 0xc6c3a9],
				[right, 1144, 662, 0xaeab99],
				[right, 1106, 662, 0x596469],
				[right, 1119, 650, 0x3c4247],
			]
		],
		oper: [
			[center, 1280, 720, 517, 657, 1007, 710, 500],
		]
	}, { // 17 十位数的5
		desc: [
			1280, 720,
			[
				[right, 1211, 657, 0xbbab7f],
				[right, 1225, 633, 0xb8a67d],
				[right, 1200, 45, 0x99948a],
				[right, 1204, 43, 0x9a968b],
				[right, 1204, 40, 0x7d7870],
				[right, 1198, 35, 0xb2ada1],
				[right, 1198, 33, 0xb2ada1],
			]
		],
		oper: [
			[center, 1280, 720, 1191, 621, 1243, 676, 500],
		]
	}, { // 18 十位数的0
		desc: [
			1280, 720,
			[
				[right, 1211, 657, 0xbbab7f],
				[right, 1225, 633, 0xb8a67d],
				[right, 1197, 39, 0xa7a296],
				[right, 1205, 39, 0x8f8a80],
				[right, 1205, 37, 0x8f8b80],
				[right, 1197, 36, 0xa7a297],
			]
		],
		oper: [
			[center, 1280, 720, 1191, 621, 1243, 676, 500],
		]
	}, { // 19 boss_挑战
		desc: [
			1280, 720,
			[
				[right, 1137, 594, 0xfff3b9],
				[right, 1163, 601, 0xfff0b5],
				[right, 1151, 666, 0x8ea4b9],
				[right, 1168, 641, 0x3f4b5f],
				[right, 1191, 648, 0xfff2af],
				[right, 1217, 654, 0xffebb2],
			]
		],
		oper: [
			[center, 1280, 720, 1120, 586, 1229, 678, 500],
		]
	}, { // 20 已适配66 boss_跳过
		desc: [
			1280, 720,
			[
				[right, 1203, 30, 0xd9e7f4],
				[right, 1203, 34, 0xc8dbf1],
				[right, 1207, 32, 0xd0e4f5],
				[right, 1220, 32, 0xc8d4ec],
				[right, 1211, 32, 0xccdaec],
				[right, 1202, 36, 0xb7ccec],
			]
		],
		oper: [
			[center, 1280, 720, 1130, 19, 1232, 43, 500],
		]
	}, { // 21 使用极的双倍
		desc: [
			1280, 720,
			[
				[center, 516, 443, 0xdf6851],
				[center, 686, 446, 0xf3b25e],
				[center, 667, 367, 0xf7e51d],
				[center, 879, 288, 0x282d38],
				[center, 434, 306, 0x272b33],
				[center, 152, 169, 0x594a25],
				[center, 120, 237, 0x575235],
				[center, 256, 223, 0x31211a],
			]
		],
		oper: [
			[center, 1280, 720, 671, 419, 794, 467, 1000],
		]
	}, { // 22 双倍 点取消
		desc: [
			1280, 720,
			[
				[center, 516, 443, 0xdf6851],
				[center, 686, 446, 0xf3b25e],
				[center, 667, 367, 0xf7e51d],
				[center, 879, 288, 0x282d38],
				[center, 434, 306, 0x272b33],
			]
		],
		oper: [
			[center, 1280, 720, 491, 419, 615, 471, 1000],
		]
	}, { // 23 商店确认购买
		desc: [
			1280, 720,
			[
				[left, 115, 37, 0x66645c],
				[left, 212, 30, 0x66645c],
				[center, 463, 428, 0xdf6851],
				[center, 700, 436, 0xf3b25e],
				[right, 1200, 166, 0x56534f],
				[right, 1202, 310, 0x11141c],
			]
		],
		oper: [
			[center, 1280, 720, 678, 409, 837, 453, 500], // 确认购买
			[center, 1280, 720, 1174, 588, 1241, 649, 500], // 退出商店
		]
	}, { // 24 御神经验
		desc: [
			1280, 720,
			[
				[center, 581, 138, 0xfff0b7],
				[center, 610, 134, 0xffeeb3],
				[center, 674, 138, 0xfff2bc],
				[center, 708, 137, 0xfff0bc],
				[center, 694, 649, 0x69759f],
				[center, 589, 644, 0xbfcad6],
			]
		],
		oper: [
			[right, 1280, 720, 872, 146, 1197, 539, 500],
		]
	}, { // 25 低级buff
		desc: [
			1280, 720,
			[
				[left, 217, 171, 0x4786d8],
				[center, 490, 171, 0x4687d9],
				[center, 762, 172, 0x4583d0],
				[left, 263, 216, 0x5ba0f2],
				[center, 536, 216, 0x5aa1f3],
				[center, 809, 216, 0x5aa1f5],
			]
		]
	}, { // 26 万象赐福取消购买
		desc: [
			1280, 720,
			[
				[center, 430, 111, 0x94561d],
				[center, 809, 113, 0x91461f],
				[center, 659, 276, 0xe29701],
				[center, 666, 276, 0xdf8f01],
				[center, 577, 560, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 939, 148, 1179, 281, 1000],
		]
	}, { // 27 挑战
		desc: [
			1280, 720,
			[
				[left, 25, 42, 0xeaebf7],
				[left, 64, 644, 0x232940],
				[right, 1168, 632, 0xffe9b0],
				[right, 1221, 601, 0x2a2e35],
				[right, 1160, 692, 0xd6eaf3],
			]
		],
		oper: [
			[right, 1280, 720, 1120, 597, 1231, 682, 500], // 挑战
		]
	}, {
		// 28 战斗失败选择放弃前行
		desc: [
			1280, 720,
			[
				[center, 449, 224, 0x724d3c],
				[center, 442, 425, 0xdf6851],
				[center, 691, 415, 0xf3b25e],
				[center, 871, 223, 0x634334],
				[center, 836, 406, 0x983b2e],
				[center, 431, 371, 0xcbb59c],
				[center, 846, 379, 0xcbb59c],
			]
		],
		oper: [
			[center, 1280, 720, 673, 406, 844, 458, 1000],
		]
	}, {
		// 29 战斗失败确定放弃
		desc: [
			1280, 720,
			[
				[center, 442, 222, 0x644434],
				[center, 819, 222, 0x6a4737],
				[center, 475, 352, 0xcbb59c],
				[center, 692, 417, 0xf3b25e],
				[center, 575, 408, 0xdf6851],
				[center, 800, 397, 0x993b2f],
				[center, 795, 346, 0xcbb59c],
				[center, 478, 364, 0xcbb59c],
			]
		],
		oper: [
			[center, 1280, 720, 680, 397, 802, 448, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {

		if (thisScript.oper({
			id: 316,
			name: '六道椒图_选事件',
			operator: [{ desc: thisOperator[0].desc }, { desc: thisOperator[2].desc }]
		}, 200)) {
			// thisScript.regionClick([thisOperator[1].oper[thisScript.global.d6Loop]]);
			// if (++thisScript.global.d6Loop > 2) {
			// 	thisScript.global.d6Loop = 0;
			// }
			const p = thisScript.findMultiColor('六道椒图_事件');
			if (p) {
				thisScript.regionClick([[p.x - 40, p.y + 20, p.x + 40, p.y + 80, 200]])
				return true;
			}
			return false;
		}

		if (thisScript.oper({
			id: 316,
			name: '六道椒图_事件购买buff',
			operator: [{ desc: thisOperator[4].desc }]
		})) {
			if (thisScript.global.d6RouFeng < 5) {//  柔风达标前选buff
				const point = thisScript.findMultiColor('六道椒图_升级buff');
				if (point) {//  有升级按钮_选择升级
					const oper = [[
						point.x - 40,
						point.y + 410,
						point.x + 70,
						point.y + 440,
						500
					]];
					thisScript.regionClick(oper);
					thisScript.global.d6RouFeng++;
					log('当前柔风数量:' + thisScript.global.d6RouFeng);
					return true;
				}
				else if (thisScript.oper({
					id: 316,
					name: '六道椒图_低级buff',
					operator: [thisOperator[25]]
				})) {//  有低级buff_选择跳过
					thisScript.regionClick([thisOperator[4].oper[0]]);
					return true;
				} else if (thisScript.oper({ // 无升级按钮_选择刷新
					name: '六道椒图_刷新buff',
					operator: [thisOperator[17], thisOperator[18]]
				})) {
					return true;
				} else { // 无升级按钮无刷新_选择跳过
					thisScript.regionClick([thisOperator[4].oper[0]]);
					return true;
				}
			} else {
				thisScript.regionClick([thisOperator[4].oper[0]]);
			}
			log('当前柔风数量:' + thisScript.global.d6RouFeng);
			return true;
		}

		if (thisScript.oper({
			id: 316,
			name: '六道椒图_商店确认购买',
			operator: [{ desc: thisOperator[23].desc }]
		})) {
			thisScript.regionClick([thisOperator[23].oper[0]]);
			thisScript.regionClick([thisOperator[23].oper[1]]);
			thisScript.global.d6RouFeng++;
			log('当前柔风数量:' + thisScript.global.d6RouFeng);
			return true;
		}
		if (thisScript.oper({
			id: 316,
			name: '六道椒图_商店购买buff',
			operator: [{ desc: thisOperator[7].desc }]
		})) {
			if (thisScript.global.d6RouFeng < 5) {//  柔风达标前购买buff
				const point = thisScript.findMultiColor('六道椒图_购买buff');
				if (point) {//  有购买按钮_选择购买
					const oper = [[
						point.x - 10,
						point.y + 50,
						point.x + 10,
						point.y + 140,
						500
					]];
					thisScript.regionClick(oper);
					thisScript.regionClick([thisOperator[23].oper[1]]);
				} else {
					thisScript.regionClick([thisOperator[23].oper[1]]);
					log('当前柔风数量:' + thisScript.global.d6RouFeng);
					return true;
				}
			} else {
				thisScript.regionClick([thisOperator[23].oper[1]]);
				console.log('当前柔风数量:' + thisScript.global.d6RouFeng);
				return true;
			}
		}


		if (thisScript.oper({
			id: 316,
			name: '六道椒图_神秘仿造',
			operator: [
				thisOperator[15]
			]
		})) {
			thisScript.global.d6RouFeng++;
			log('当前柔风数量:' + thisScript.global.d6RouFeng);
			return true;
		}

		if (thisScript.oper({
			id: 316,
			name: '六道椒图_执行个别事件',
			operator: [
				thisOperator[3], thisOperator[5], thisOperator[6], thisOperator[8],
				thisOperator[9], thisOperator[10], thisOperator[12], thisOperator[13],
				thisOperator[14], thisOperator[19], thisOperator[20], thisOperator[21],
				thisOperator[22], thisOperator[26], thisOperator[27], thisOperator[28],
				thisOperator[29],
			]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 316,
			name: '六道椒图_开始_重置参数',
			operator: [
				thisOperator[11]
			]
		})) {
			thisScript.global.d6Loop = 0;
			thisScript.global.d6RouFeng = 1;
			thisScript.global.d6dCurrentBegin = new Date().getTime();
			if (!thisScript.global.d6dBegin) {
				thisScript.global.d6dBegin = new Date().getTime();
			}
			if (!thisScript.global.times) {
				thisScript.global.times = 0;
			}
			thisScript.global.times++
			return true;
		}

		if (thisScript.oper({
			id: 316,
			name: '六道椒图_结束',
			operator: [{
				desc: thisOperator[16].desc
			}]
		})) {
			const thisconf = thisScript.scheme.config['316'];
			thisconf.overTimes = Math.floor(Number(thisconf.overTimes) || 0);
			const now = new Date().getTime();
			const currentCost = Math.floor((now - thisScript.global.d6dCurrentBegin) / 1000); // 秒
			const cost = ((now - thisScript.global.d6dBegin) / 1000 / 60).toFixed(2); // 分
			const costAvg = Math.floor((now - thisScript.global.d6dBegin) / 1000 / (thisScript.global.times || 0)) // 秒
			// 中途进入的不计次
			const bufLog = `本局柔风buff：${thisScript.global.d6RouFeng}`;
			let toLog = `${bufLog}。通关次数: ${thisScript.global.times || 0}次, 本次通关时间: ${currentCost}秒, 平均通关时间: ${costAvg}秒, 总通关时间: ${cost}分`;
			if (thisconf.overTimes && thisScript.global.times >= thisconf.overTimes) {
				toLog = `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。` + toLog;
			}
			thisScript.myToast(toLog);

			if (thisconf.pushResult) {
				thisScript.doPush(thisScript, {
					text: toLog,
					before() {
						thisScript.myToast('正在上传数据');
					}
				});
				sleep(2000);
			}

			if (thisconf.overTimes && thisScript.global.times >= thisconf.overTimes) {
				toLog = `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。` + toLog;
				thisScript.stop();
			}

			thisScript.regionClick(thisOperator[16].oper);
			return true;
		}

		return false;
	}
}