import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func323 implements IFuncOrigin {
	id = 323;
	name = '同心队预存与战斗';
	desc = '用于寮三十，攻打13把觉醒一层+17把御魂一层';
	operator: IFuncOperatorOrigin[] = [{ // 0 进入同心队
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 310, 625, 378, 669, 1200]
		]
	}, { // 1 进入预存界面
		desc: [
			1280, 720,
			[
				[left, 231, 121, 0x72382f],
				[right, 1035, 115, 0x763930],
				[left, 81, 246, 0xf6e3b9],
				[left, 80, 411, 0xceb2ae],
				[center, 932, 278, 0xffe0bc],
				[center, 949, 293, 0xffdfb9],
			]
		],
		oper: [
			[center, 1280, 720, 928, 266, 963, 302, 1000],
		]
	}, { // 2 开始预存
		desc: [
			1280, 720,
			[
				[center, 866, 155, 0xe79969],
				[center, 865, 444, 0xe09162],
				[center, 913, 459, 0x0e0f0d],
				[center, 926, 518, 0xe9e8df],
				[right, 1190, 565, 0xb34d41],
				[right, 1224, 578, 0xc45847],
			]
		],
		oper: [
			[center, 1280, 720, 1196, 519, 1218, 600, 1000],
			[center, 1280, 720, 677, 410, 837, 456, 1000],
			[center, 1280, 720, 27, 20, 72, 58, 1000],
		]
	}, { // 3 集结
		desc: [
			1280, 720,
			[
				[left, 231, 121, 0x72382f],
				[right, 1035, 115, 0x763930],
				[left, 81, 246, 0xf6e3b9],
				[left, 80, 411, 0xceb2ae],
				[center, 932, 278, 0xffe0bc],
				[center, 949, 293, 0xffdfb9],
			]
		],
		oper: [
			[center, 1280, 720, 1089, 619, 1172, 685, 1000],
		]
	}, { // 4 集结好友一
		desc: [
			1280, 720,
			[
				[center, 564, 212, 0x464646],
				[center, 564, 233, 0x464646],
				[center, 414, 91, 0xa32b28],
				[center, 917, 90, 0xead4cf],
				[center, 612, 260, 0x402f11],
			]
		],
		oper: [
			[center, 1280, 720, 559, 224, 600, 262, 1000],
		]
	}, { // 5 集结好友二
		desc: [
			1280, 720,
			[
				[center, 659, 212, 0x464646],
				[center, 659, 232, 0x464646],
				[center, 420, 91, 0xa32b28],
				[center, 918, 91, 0xe9d4cf],
				[center, 707, 263, 0x402f11],
			]
		],
		oper: [
			[center, 1280, 720, 652, 220, 695, 261, 1000],
		]
	}, { // 6 觉醒集结
		desc: [
			1280, 720,
			[
				[center, 611, 259, 0x4a5ce5],
				[center, 424, 90, 0xa32b28],
				[center, 918, 91, 0xe9d4cf],
				[center, 782, 92, 0xa52f2b],
				[center, 705, 259, 0x495ce5],
				[center, 649, 498, 0x9e7852],
			]
		],
		oper: [
			[center, 1280, 720, 482, 478, 805, 529, 1000],
		]
	}, { // 7 集结完毕,进入副本
		desc: [
			1280, 720,
			[
				[center, 373, 6, 0x301006],
				[center, 817, 7, 0x2f1008],
				[center, 760, 54, 0xd6c4a1],
				[center, 490, 35, 0xece7d5],
				[right, 967, 634, 0xb3835a],
				[right, 1026, 689, 0x664a38],
				[right, 988, 664, 0xd3c5ad],
			]
		],
		oper: [
			[center, 1280, 720, 964, 635, 1024, 695, 1000],
		]
	}, { // 8 副本选择觉醒一
		desc: [
			1280, 720,
			[
				[left, 147, 126, 0x78502f],
				[center, 363, 127, 0x78502f],
				[left, 147, 183, 0x78502f],
				[center, 363, 182, 0x78502f],
				[right, 1220, 149, 0x875b4f],
				[center, 761, 52, 0xd6c4a1],
			]
		],
		oper: [
			[center, 1280, 720, 145, 274, 361, 324, 1000],
		]
	}, { // 9 滑动区域_组队点击区域_同心队找色范围_ocr区域
		oper: [
			[center, 1280, 720, 400, 191, 578, 244, 200], // 滑动起始
			[center, 1280, 720, 398, 595, 582, 709, 200], // 滑动结束
			[center, 1280, 720, 398, 258, 577, 311, 1000], // 点击一层
			[center, 1280, 720, 991, 604, 1151, 647, 1000], // 点击创建队伍
			[center, 1280, 720, 813, 563, 933, 611, 1000], // 点击创建
			[left, 1280, 720, 0, 0, 16, 16, 1000], // 同心队找色范围
			[left, 1280, 720, 1033, 133, 1067, 159, 1000], // 同心队奖励关闭
			[left, 1280, 720, 1033, 133, 1067, 159, 1000], // 同心队奖励关闭
			[left, 1280, 720, 521, 355, 779, 553, 1000], // ocr区域
		]
	}, { // 10 退出组队
		desc: [
			1280, 720,
			[
				[right, 1163, 28, 0xd6b085],
				[right, 1227, 28, 0xd4ae83],
				[right, 1209, 657, 0x34271b],
				[left, 43, 39, 0xf6e7a8],
				[left, 57, 568, 0xf8faee],
			]
		],
		oper: [
			[center, 1280, 720, 28, 18, 66, 55, 1000],
			[center, 1280, 720, 674, 406, 838, 454, 1000],
		]
	}, { // 11 副本选择御魂一
		desc: [
			1280, 720,
			[
				[left, 147, 126, 0x78502f],
				[center, 363, 127, 0x78502f],
				[left, 147, 183, 0x78502f],
				[center, 363, 182, 0x78502f],
				[right, 1220, 149, 0x875b4f],
				[center, 761, 52, 0xd6c4a1],
			]
		],
		oper: [
			[center, 1280, 720, 147, 565, 361, 620, 1000],
		]
	}, { // 12 退出同心队集结
		desc: [
			1280, 720,
			[
				[left, 83, 250, 0xd3b8b6],
				[left, 80, 414, 0xf0dbae],
				[center, 373, 5, 0x341107],
				[center, 817, 6, 0x2f1008],
				[center, 429, 33, 0xd4cfbf],
			]
		],
		oper: [
			[center, 1280, 720, 738, 31, 783, 75, 1000],
			[center, 1280, 720, 677, 408, 840, 454, 1000],
		]
	}, { // 13 退出同心队界面
		desc: [
			1280, 720,
			[
				[left, 232, 90, 0x353941],
				[right, 1032, 85, 0x353941],
				[left, 316, 88, 0x72372e],
				[center, 960, 90, 0x6c322b],
				[center, 806, 112, 0x5f3a27],
				[right, 1130, 299, 0x75382f],
			]
		],
		oper: [
			[center, 1280, 720, 28, 18, 71, 64, 1000],
		]
	}, { // 14 锁定阵容(燃烧的胧车)
		desc: [
			1280, 720,
			[
				[left, 131, 670, 0x7d6342],
				[left, 122, 666, 0x332314],
				[left, 149, 666, 0x302318],
				[left, 135, 651, 0x291d12],
				[left, 136, 678, 0x272015],
			]
		],
		oper: [
			[center, 1280, 720, 123, 655, 147, 675, 1000],
		]
	}, { // 15 锁定阵容(普通版)
		desc: [
			1280, 720,
			[
				[left, 28, 659, 0x2f251b],
				[left, 56, 659, 0x2d241b],
				[left, 42, 643, 0x141207],
				[left, 42, 674, 0x34281c],
			]
		],
		oper: [
			[center, 1280, 720, 30, 653, 54, 670, 1000],
		]
	}, { // 16 寮界面
		desc: [
			1280, 720,
			[
				[right, 1096, 630, 0xb1251f],
				[right, 1105, 662, 0xdbe3f1],
				[left, 45, 39, 0xf4e4a3],
				[center, 886, 644, 0xe0cbaa],
			]
		],
	}, { // 17 寮三十判定是否满三十
		desc: [
			1280, 720,
			[
				[left, 20, 166, 0xbd4529],
				[left, 44, 177, 0x342017],
				[left, 65, 173, 0x321e16],
				[left, 103, 170, 0x311d15],
				[left, 143, 206, 0x463024],
				[left, 131, 205, 0x473125],
				[left, 131, 211, 0x7b634d],
				[left, 131, 200, 0x877055],
			]
		],
		oper: [
			[center, 1280, 720, 29, 19, 71, 63, 1000],
		]
	}, { // 18 进入阴阳寮
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 544, 612, 594, 661, 1200]	// 点击阴阳寮
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// 是否做过寮三十
		if (thisScript.global.tongXinDui_ZhanDou === 'judge') {
			if (thisScript.oper({
				id: 323,
				name: '进入阴阳寮',
				operator: [thisOperator[18]]
			})) {
				sleep(1500);
				thisScript.keepScreen();
				const point = thisScript.findMultiColor('阴阳寮_奖励体力');
				if (point) {
					console.log('查找阴阳寮_奖励体力成功');
					const oper = [[
						point.x,
						point.y,
						point.x,
						point.y,
						1000
					]];
					thisScript.regionClick(oper);
					thisScript.regionClick([thisOperator[17].oper[0]]);
					return true;
				}
				return true;
			}
			if (thisScript.oper({
				id: 323,
				name: '寮界面内',
				operator: [thisOperator[16]]
			})) {
				if (thisScript.oper({
					id: 323,
					name: '阴阳寮界面内',
					operator: [thisOperator[17]]
				})) {
					thisScript.global.tongXinDui_ZhanDou = 'prestore';
					return true;
				} else {
					thisScript.regionClick([thisOperator[17].oper[0]]);
					thisScript.global.tongXinDui_ZhanDou = 'juexing';
					return true;
				}
			}
		}
		// 不做寮三十则预存_预存阶段
		if (thisScript.global.tongXinDui_ZhanDou === 'prestore') {
			if (thisScript.oper({
				id: 323,
				name: '同心队预存与预存_进入和预存',
				operator: [thisOperator[0], thisOperator[1]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 323,
				name: '同心队预存完毕',
				operator: [thisOperator[2]]
			})) {
				// 预存完毕,跳转到退出阶段
				thisScript.global.tongXinDui_ZhanDou = 'back';
				return true;
			}
		}
		// 做寮三十_觉醒阶段
		if (thisScript.global.tongXinDui_ZhanDou === 'juexing') {
			if (thisScript.getOcrDetector() && thisScript.oper({
				id: 323,
				name: '判断体力',
				operator: [{ desc: thisOperator[1].desc }]
			})) {
				const result = thisScript.findText('.+', 0, thisOperator[9].oper[8], '包含');
				if (result.length === 0) {
					console.log('未识别到任何字样');
					return false;
				} else {
					if (Number.isNaN(result[0].label) && Number.isNaN(result[1].label) && Number.isNaN(result[2].label) && Number.isNaN(result[3].label)) {
						console.log('非数字，继续识别');
						sleep(1000);
						return true;
					} else if (Number(result[0].label) < 120 || Number(result[1].label) < 120 || Number(result[2].label) < 120 || Number(result[3].label) < 120) {
						thisScript.global.tongXinDui_ZhanDou = 'prestore';
						return true;
					} else {
						if (thisScript.oper({
							id: 323,
							name: '同心队集结',
							operator: [thisOperator[3]]
						})) {
							return true;
						}
					}
				}
				return true;
			}
			if (thisScript.oper({
				id: 323,
				name: '同心队集结',
				operator: [thisOperator[0], thisOperator[3], thisOperator[4], thisOperator[5]
					, thisOperator[6], thisOperator[7], thisOperator[14], thisOperator[15]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 323,
				name: '同心队选择觉醒一',
				operator: [thisOperator[8]]
			})) {
				thisScript.regionSwipe(thisOperator[9].oper[0], thisOperator[9].oper[1], [400, 600], 0, 1000);
				thisScript.regionClick([thisOperator[9].oper[2]]);
				thisScript.regionClick([thisOperator[9].oper[3]]);
				thisScript.regionClick([thisOperator[9].oper[4]]);
				return true;
			}
			if (thisScript.runTimes['2'] >= 13) {
				thisScript.global.tongXinDui_ZhanDou = 'stage';
				return true;
			}
		}
		// 做寮三十_转换副本阶段
		if (thisScript.global.tongXinDui_ZhanDou === 'stage') {
			if (thisScript.oper({
				id: 323,
				name: '同心队退出组队',
				operator: [thisOperator[10]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 323,
				name: '同心队重新集结',
				operator: [thisOperator[7]]
			})) {
				thisScript.global.tongXinDui_ZhanDou = 'yuhun';
				return true;
			}
		}
		// 做寮三十_御魂阶段
		if (thisScript.global.tongXinDui_ZhanDou === 'yuhun') {
			if (thisScript.oper({
				id: 323,
				name: '同心队选择御魂一',
				operator: [thisOperator[11]]
			})) {
				thisScript.regionSwipe(thisOperator[9].oper[0], thisOperator[9].oper[1], [400, 600], 0, 1000);
				thisScript.regionClick([thisOperator[9].oper[2]]);
				thisScript.regionClick([thisOperator[9].oper[3]]);
				thisScript.regionClick([thisOperator[9].oper[4]]);
				return true;
			}
			if (thisScript.oper({
				id: 323,
				name: '同心队锁定阵容',
				operator: [thisOperator[14], thisOperator[15]]
			})) {
				return true;
			}
			if (thisScript.runTimes['2'] >= 30) {
				thisScript.global.tongXinDui_ZhanDou = 'back';
				return true;
			}
		}
		// 返回庭院阶段
		if (thisScript.global.tongXinDui_ZhanDou === 'back') {
			if (thisScript.oper({
				id: 323,
				name: '同心队退出集结',
				operator: [thisOperator[10], thisOperator[11], thisOperator[12], thisOperator[13]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 323,
				name: '已在庭院中',
				operator: [{ desc: thisOperator[0].desc }]
			})) {
				return false;
			}
		}
		// 待写 领取食盒+御魂完毕后再次预存
		return false;
	}
}
