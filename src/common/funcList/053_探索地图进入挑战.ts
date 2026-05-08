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
			data: ['默认', '倒数第一', '倒数第二', '倒数第三', '倒数第四'],
			default: '默认',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 0 探索地图界面
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 168, 645, 210, 674, 1000], // 御魂
			[center, 1280, 720, 356, 646, 401, 678, 1000], // 御灵
			[center, 1280, 720, 70, 644, 115, 675, 1000], // 觉醒
		]
	}, {
		// 1 御魂选类型的界面
		desc: [
			1280, 720,
			[
				[left, 266, 131, 0xbd975a],
				[center, 589, 114, 0xd4bd8b],
				[right, 921, 132, 0x67522e],
				[right, 1193, 90, 0xa28c5a],
				[right, 1190, 647, 0x3f3226],
				[right, 1220, 659, 0xefe3c3],
			]
		],
		oper: [
			[center, 1280, 720, 129, 319, 294, 386, 1000], // 御魂-八岐大蛇
			[center, 1280, 720, 452, 289, 604, 371, 1000], // 御魂-业原火
			[center, 1280, 720, 760, 278, 919, 348, 1000], // 御魂-日轮之陨
			[center, 1280, 720, 1054, 253, 1212, 318, 1000], // 御魂-永生之海
		]
	}, { // 2 觉醒选类型的界面
		desc: [
			1280, 720,
			[
				[left, 278, 147, 0xdbbc78],
				[center, 598, 144, 0xd8be85],
				[right, 891, 162, 0xe2c78c],
				[right, 1206, 153, 0xa78b65],
				[right, 1156, 230, 0x9854b9],
			]
		],
		oper: [
			[center, 1280, 720, 138, 361, 300, 422, 1000], // 觉醒-火麒麟
			[center, 1280, 720, 441, 293, 610, 344, 1000], // 觉醒-风麒麟
			[center, 1280, 720, 744, 347, 911, 411, 1000], // 觉醒-水麒麟
			[center, 1280, 720, 1053, 290, 1206, 346, 1000], // 觉醒-雷麒麟
		]
	}, { // 3 御灵-暗神龙
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
	}, { // 4 御魂层数滑动
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
			[center, 1280, 720, 99, 636, 186, 678, 1000], // 滑动_开启点
			[center, 1280, 720, 108, 88, 172, 125, 1000], // 滑动_结束点
			[center, 1280, 720, 107, 324, 202, 351, 1000], // 倒数第四
			[center, 1280, 720, 111, 428, 182, 451, 1000], // 倒数第三
			[center, 1280, 720, 107, 535, 180, 557, 1000], // 倒数第二
			[center, 1280, 720, 105, 639, 180, 662, 1000], // 倒数第一
		]
	}, { // 5 御魂入口_第一位置
		desc: [1280, 720,
			[
				[left, 92, 657, 0xd0aa17],
				[left, 110, 646, 0xb1860e],
				[left, 73, 641, 0x91190d],
				[left, 96, 636, 0xb58508],
				[left, 85, 673, 0xa12118],
			]
		],
		oper: [
			[center, 1280, 720, 72, 644, 116, 678, 1000],
		]
	}, { // 6 御魂入口_第二位置
		desc: [1280, 720,
			[
				[left, 168, 641, 0x8d170e],
				[left, 193, 637, 0xb98706],
				[left, 181, 673, 0xa22117],
				[left, 195, 667, 0xecd22d],
				[left, 206, 647, 0xae820e],
			]
		],
		oper: [
			[center, 1280, 720, 165, 641, 211, 681, 1000],
		]
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['53'];
		// '御魂-八岐大蛇', '御魂-业原火', '御魂-日轮之陨', '御魂-永生之海'
		let operator: IFuncOperator[];
		if ('御魂-八岐大蛇' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[5].desc,
				oper: [thisOperator[5].oper[0]]
			}, {
				desc: thisOperator[6].desc,
				oper: [thisOperator[6].oper[0]]
			}, {
				desc: thisOperator[1].desc,
				oper: [thisOperator[1].oper[0]]
			}]
			if (thisScript.global.sneak_level_open && thisScript.oper({
				id: 52,
				name: '八岐大蛇_滑动',
				operator: [{ desc: thisOperator[4].desc }]
			})) {
				thisScript.regionBezierSwipe(thisOperator[4].oper[0], thisOperator[4].oper[1], [400, 500], 1500);
				switch (thisconf.sneak_level) {
					case '倒数第四':
						thisScript.regionClick([thisOperator[4].oper[2]]);
						break;
					case '倒数第三':
						thisScript.regionClick([thisOperator[4].oper[3]]);
						break;
					case '倒数第二':
						thisScript.regionClick([thisOperator[4].oper[4]]);
						break;
					case '倒数第一':
						thisScript.regionClick([thisOperator[4].oper[5]]);
						break;
					case '默认':
						break;
				}
				thisScript.global.sneak_level_open = false;
				return true;
			}
		} else if ('御魂-业原火' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[5].desc,
				oper: [thisOperator[5].oper[0]]
			}, {
				desc: thisOperator[6].desc,
				oper: [thisOperator[6].oper[0]]
			}, {
				desc: thisOperator[1].desc,
				oper: [thisOperator[1].oper[1]]
			}]
		} else if ('御魂-日轮之陨' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[5].desc,
				oper: [thisOperator[5].oper[0]]
			}, {
				desc: thisOperator[6].desc,
				oper: [thisOperator[6].oper[0]]
			}, {
				desc: thisOperator[1].desc,
				oper: [thisOperator[1].oper[2]]
			}]
		} else if ('御魂-永生之海' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[5].desc,
				oper: [thisOperator[5].oper[0]]
			}, {
				desc: thisOperator[6].desc,
				oper: [thisOperator[6].oper[0]]
			}, {
				desc: thisOperator[1].desc,
				oper: [thisOperator[1].oper[3]]
			}]
		}
		// '御灵', '觉醒-火麒麟', '觉醒-风麒麟', '觉醒-水麒麟', '觉醒-雷麒麟'
		else if ('御灵' === thisconf.challenge_type) {
			operator = [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[1]]
			}, thisOperator[3]]
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