import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const left = 0;
const center = 1;
const right = 2;

export class Func053 implements IFuncOrigin {
	id = 53;
	name = '探索地图进入挑战';
	desc = '从探索地图进入御魂、御灵等个人挑战界面，注意，仅进入挑战界面，挑战层数请自行';
	config = [{
		desc: '配置',
		config: [{
			name: 'challenge_type',
			desc: '挑战类型',
			type: 'list',
			data: ['御魂-八岐大蛇', '御魂-业原火', '御魂-日轮之陨', '御魂-永生之海', '御灵', '觉醒-火麒麟', '觉醒-风麒麟', '觉醒-水麒麟', '觉醒-雷麒麟'],
			default: '御魂-八岐大蛇',
		}, {
			name: 'sneak_level',
			desc: '御魂层数',
			type: 'list',
			data: ['魂十', '魂土', '魂王', '魂十三'],
			default: '魂十',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 0 探索地图界面
		desc: '探索地图界面',
		oper: [
			[left, 1280, 720, 155, 640, 211, 694, 1000], // 御魂
			[left, 1280, 720, 346, 634, 404, 695, 1000], // 御灵
			[left, 1280, 720, 56, 639, 111, 699, 1000], // 觉醒
		]
	}, {
		// 1 御魂选类型的界面
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
			[center, 1280, 720, 454, 115, 675, 488, 500], // 御魂-业原火
			[center, 1280, 720, 802, 122, 1052, 492, 500], // 御魂-日轮之陨
			[center, 1280, 720, 1152, 126, 1246, 497, 500], // 御魂-永生之海
		]
	}, {
		// 2 觉醒选类型的界面
		desc: [
			1280, 720,
			[
				[left, 44, 36, 0xf7eaac],
				[left, 250, 42, 0x583716],
				[right, 1178, 44, 0xd7b38a],
				[right, 1240, 42, 0xd3af83],
				[left, 195, 561, 0x6d444d],
				[center, 528, 545, 0x9b9e7a],
				[center, 817, 552, 0x6d7f9a],
				[right, 1095, 553, 0x927ca2],
			]
		],
		oper: [
			[center, 1280, 720, 86, 131, 299, 557, 500], // 觉醒-火麒麟
			[center, 1280, 720, 385, 137, 589, 548, 500], // 觉醒-风麒麟
			[center, 1280, 720, 679, 138, 898, 556, 500], // 觉醒-水麒麟
			[center, 1280, 720, 976, 138, 1199, 559, 500], // 觉醒-雷麒麟
		]
	}, {
		// 3 御灵-暗神龙
		desc: [
			1280, 720,
			[
				[left, 44, 36, 0xf7eaac],
				[right, 1240, 40, 0xd3af84],
				[right, 1174, 41, 0xd7b389],
				[left, 136, 179, 0x2b2b44],
				[left, 129, 501, 0x7c789d],
				[left, 293, 492, 0x575778],
			]
		],
		oper: [
			[center, 1280, 720, 126, 136, 300, 621, 500],
		]
	}, {
		// 4 御灵-暗白藏主
		desc: [
			1280, 720,
			[
				[left, 44, 36, 0xf7eaac],
				[right, 1240, 40, 0xd3af84],
				[right, 1174, 41, 0xd7b389],
				[center, 439, 147, 0x47252e],
				[center, 586, 168, 0x4f2b34],
				[center, 509, 441, 0xf9f8f8],
				[center, 546, 387, 0xc26676],
			]
		],
		oper: [
			[center, 1280, 720, 413, 146, 587, 617, 500],
		]
	}, {
		// 5 御灵-暗黑豹
		desc: [
			1280, 720,
			[
				[left, 44, 36, 0xf7eaac],
				[right, 1240, 40, 0xd3af84],
				[right, 1174, 41, 0xd7b389],
				[center, 802, 168, 0x23232b],
				[center, 760, 190, 0x909193],
				[center, 867, 419, 0xf9f9f9],
				[center, 841, 401, 0x421f1d],
			]
		],
		oper: [
			[center, 1280, 720, 706, 148, 886, 610, 500],
		]
	}, {
		// 6 御灵-暗孔雀
		desc: [
			1280, 720,
			[
				[left, 44, 36, 0xf7eaac],
				[right, 1240, 40, 0xd3af84],
				[right, 1174, 41, 0xd7b389],
				[center, 1121, 254, 0x50a3b2],
				[center, 1021, 333, 0x565466],
				[center, 1080, 497, 0x8293a2],
				[center, 1055, 450, 0x8384bc],
			]
		],
		oper: [
			[center, 1280, 720, 993, 149, 1169, 616, 500],
		]
	}, {
		// 7 探索地图界面_含时空秘境
		desc: '探索地图界面_含时空秘境',
		oper: [
			[left, 1280, 720, 155, 640, 211, 694, 1000], // 御魂
			[left, 1280, 720, 444, 638, 507, 701, 1000], // 御灵
			[left, 1280, 720, 56, 639, 111, 699, 1000], // 觉醒
		]
	}, { // 8 御魂层数滑动
		desc: [
			1280, 720,
			[
				[left, 44, 38, 0xf6e8a9],
				[left, 125, 28, 0xf9eeb7],
				[left, 58, 50, 0xf1d793],
				[left, 95, 187, 0x8c7ba8],
				[left, 67, 194, 0x8d7da8],
			]
		],
		oper: [
			[center, 1280, 720, 396, 531, 430, 561, 1000], // 滑动_开启点
			[center, 1280, 720, 373, 25, 405, 59, 1000], // 滑动_结束点
			[center, 1280, 720, 303, 448, 354, 483, 1000], // 魂王
			[center, 1280, 720, 189, 331, 453, 381, 1000], // 魂土
			[center, 1280, 720, 185, 225, 455, 278, 1000], // 魂十
			[center, 1280, 720, 298, 560, 350, 587, 1000], // 魂十三
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['53'];
		// '御魂-八岐大蛇', '御魂-业原火', '御魂-日轮之陨', '御魂-永生之海'
		let operator: IFuncOperator[];
		if ('御魂-八岐大蛇' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[0]]
			}, {
				desc: thisOperator[1].desc,
				oper: [thisOperator[1].oper[0]]
			}]
			if (thisScript.global.sneak_level_open && thisScript.oper({
				id: 52,
				name: '八岐大蛇_滑动',
				operator: [{ desc: thisOperator[8].desc }]
			})) {
				thisScript.regionBezierSwipe(thisOperator[8].oper[0], thisOperator[8].oper[1], [400, 500], 1500);
				switch (thisconf.sneak_level) {
					case '魂王':
						thisScript.regionClick([thisOperator[8].oper[2]]);
						break;
					case '魂土':
						thisScript.regionClick([thisOperator[8].oper[3]]);
						break;
					case '魂十':
						thisScript.regionClick([thisOperator[8].oper[4]]);
						break;
					case '魂十三':
						thisScript.regionClick([thisOperator[8].oper[5]]);
						break;
				}
				thisScript.global.sneak_level_open = false;
				return true;
			}
		} else if ('御魂-业原火' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[0]]
			}, {
				desc: thisOperator[1].desc,
				oper: [thisOperator[1].oper[1]]
			}]
		} else if ('御魂-日轮之陨' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[0]]
			}, {
				desc: thisOperator[1].desc,
				oper: [thisOperator[1].oper[2]]
			}]
		} else if ('御魂-永生之海' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[0]]
			}, {
				desc: thisOperator[1].desc,
				oper: [thisOperator[1].oper[3]]
			}]
		}
		// '御灵', '觉醒-火麒麟', '觉醒-风麒麟', '觉醒-水麒麟', '觉醒-雷麒麟'
		else if ('御灵' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[7].desc,
				oper: [thisOperator[7].oper[1]]
			}, {
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[1]]
			}, thisOperator[3], thisOperator[4], thisOperator[5], thisOperator[6]]
		} else if ('觉醒-火麒麟' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[2]]
			}, {
				desc: thisOperator[2].desc,
				oper: [thisOperator[2].oper[0]]
			}]
		} else if ('觉醒-风麒麟' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[2]]
			}, {
				desc: thisOperator[2].desc,
				oper: [thisOperator[2].oper[1]]
			}]
		} else if ('觉醒-水麒麟' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[2]]
			}, {
				desc: thisOperator[2].desc,
				oper: [thisOperator[2].oper[2]]
			}]
		} else if ('觉醒-雷麒麟' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[2]]
			}, {
				desc: thisOperator[2].desc,
				oper: [thisOperator[2].oper[3]]
			}]
		}

		return thisScript.oper({
			id: 52,
			name: thisconf.challenge_type as string,
			operator: operator
		});
	}
}