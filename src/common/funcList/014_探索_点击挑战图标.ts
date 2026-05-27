import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func014 implements IFuncOrigin {
	id = 14;
	name = '探索_点击挑战图标';
	desc = '在探索界面时，选择小怪或boss进攻，优先打boss，可配置无差别挑战或只打经验怪或只打掉落怪';
	config = [{
		desc: '',
		config: [{
			name: 'xy',
			desc: '探索点击章节(格式为x,y)',
			type: 'text',
			default: '1156,501',
		}, {
			name: 'type',
			desc: '挑战类型',
			type: 'list',
			data: ['无差别', '打经验', '打掉落'],
			default: '无差别',
		}, {
			name: 'swipeTime',
			desc: '划屏次数',
			type: 'list',
			data: ['2', '3', '4', '5'],
			default: '4',
		}, {
			name: 'swipeSpeed',
			desc: '划屏速度（滑不动可适当调整划屏速度）',
			type: 'list',
			data: ['快', '中', '慢'],
			default: '慢',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 探索找怪界面
		desc: [1280, 720,
			[
				[left, 29, 672, 0x615a77],
				[left, 54, 60, 0xdec38c],
				[left, 124, 26, 0xf7eeb5],
				[right, 1163, 22, 0xd7b288],
				[right, 1223, 21, 0xd4ae84],
			]
		],
		oper: [
			[left, 1280, 720, 0, 0, 42, 51, 1000],
			[right, 1280, 720, 1121, 117, 1224, 209, 1000],
			[left, 1280, 720, 46, 215, 162, 525, 1000],
			[center, 1280, 720, 32, 20, 69, 51, 1000],
			[center, 1280, 720, 702, 388, 846, 421, 1000],
			[left, 1280, 720, 0, 0, 16, 16, 1000],
			[right, 1280, 720, 0, 0, 1275, 715, 1000],
		]
	}, { // 1 探索地图界面
		desc: '探索地图界面',
		retest: 1000
	}, { // 2 首领出现
		desc: [1280, 720,
			[
				[center, 512, 344, 0xffffde],
				[center, 558, 338, 0xfffff9],
				[center, 619, 340, 0xfffff0],
				[center, 675, 344, 0xfffff4],
				[center, 750, 348, 0xffffe0]
			]
		],
		oper: [
			[center, 1280, 720, 613, 248, 668, 297, 1000]
		]
	}, { // 3 困难界面进探索
		desc: [1280, 720,
			[
				[right, 898, 583, 0x523428],
				[right, 942, 589, 0xe4dac3],
				[right, 978, 625, 0xe1d6c0],
				[right, 1133, 659, 0xe2d7c1],
				[right, 1132, 596, 0xe7dbc4],
			]
		],
		oper: [
			[center, 1280, 720, 1090, 588, 1178, 663, 1000],
		]
	}, { // 4 无困难界面
		desc: [1280, 720,
			[
				[right, 995, 580, 0x5e3e2f],
				[right, 1081, 581, 0x583826],
				[right, 1041, 601, 0xe1d5c0],
				[right, 1047, 659, 0xe6dac5],
				[right, 1003, 676, 0x3b2118],
				[right, 1076, 672, 0x351f18],
			]
		],
		oper: [
			[center, 1280, 720, 995, 590, 1086, 668, 1000],
		]
	}, { // 5 红手指遮挡
		desc: [1280, 720,
			[
				[left, 58, 657, 0xffffff],
				[left, 76, 682, 0xefaa9c],
				[left, 136, 717, 0x3c1115],
				[left, 27, 668, 0x9b9599],
			]
		],
		oper: [
			[center, 1280, 720, 45, 650, 88, 693, 1000],
			[center, 1280, 720, 1153, 64, 1189, 89, 1000],
		]
	}, { // 6 选择困难
		desc: [1280, 720,
			[
				[left, 56, 325, 0x9d8f7c],
				[left, 95, 328, 0x9f9c95],
				[left, 109, 332, 0xa6a39c],
				[left, 122, 334, 0x9e9b95],
				[left, 127, 338, 0xa3a099],
			]
		],
		oper: [
			[center, 1280, 720, 44, 323, 137, 342, 1000],
		]
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['14'];
		if (thisScript.oper({
			name: '探索界面_杂项',
			operator: [{ desc: thisOperator[1].desc }],
		})) {
			const xy = thisScript.parseName(String(thisconf.xy));
			const inX1 = parseInt(xy[0]);
			const inY1 = parseInt(xy[1]);
			thisScript.regionClick([[inX1 - 10, inY1 - 10, inX1 + 10, inY1 + 10, 1000]]);
			return true;
		}
		if (thisScript.oper({
			name: '探索界面_杂项',
			operator: [thisOperator[5], thisOperator[6]],
		})) {
			return true;
		}
		if (thisScript.oper({
			name: '普通界面进探索',
			operator: [{ desc: thisOperator[4].desc }]
		})) {
			const point = thisScript.findMultiColor('探索_宝箱');
			if (point) {
				const oper = [[point.x, point.y, point.x + 10, point.y + 10, 500]];
				thisScript.regionClick(oper);
			} else {
				thisScript.regionClick([thisOperator[4].oper[0]]);
			}
			return true;
		}
		if (thisScript.oper({
			name: '困难界面进探索',
			operator: [{ desc: thisOperator[3].desc }]
		})) {
			const point = thisScript.findMultiColor('探索_宝箱');
			if (point) {
				const oper = [[point.x, point.y, point.x + 10, point.y + 10, 500]];
				thisScript.regionClick(oper);
			} else {
				thisScript.regionClick([thisOperator[3].oper[0]]);
			}
			return true;
		}
		while (thisScript.oper({
			name: '探索界面_判断',
			operator: [{ desc: thisOperator[0].desc, retest: 500 }],
		})) {
			if (thisScript.global.tsAttackSwhipeNum === undefined) {
				thisScript.global.tsAttackSwhipeNum = parseInt(String(thisconf.swipeTime), 10);
			}
			if (thisScript.oper({
				name: '首领出现',
				operator: [{ desc: thisOperator[2].desc }],
			})) {
				sleep(1000);
				thisScript.regionClick(thisOperator[2].oper);
				thisScript.global.tsAttackSwhipeNum = 1;
				return true;
			}
			let point = null;
			// 使用多点找色返回所有点的方法
			if ('无差别' === thisconf.type) {
				point = thisScript.findMultiColor('探索_挑战BOSS');
				if (point) {
					const oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
					thisScript.regionClick(oper);
					thisScript.global.tsAttackSwhipeNum = 1;
					return true;
				}
				point = thisScript.findMultiColor('探索_挑战');
			} else {
				let trycnt = 5;
				do {
					point = thisScript.findMultiColor('探索_挑战BOSS');
					if (point) {
						const oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
						thisScript.regionClick(oper);
						thisScript.global.tsAttackSwhipeNum = 1;
						return true;
					}
					let flagPointAll = [];
					if ('打经验' === thisconf.type) {
						flagPointAll = thisScript.findMultiColorEx('探索_经验标识');
					} else if ('打掉落' === thisconf.type) {
						flagPointAll = thisScript.findMultiColorEx('探索_掉落标识');
					}
					if (flagPointAll.length > 0) {
						const pointAll = thisScript.findMultiColorEx('探索_挑战');
						if (pointAll.length > 0) {
							let minDistPow = 0xFFFFFFFF;
							for (const flagPoint of flagPointAll) {
								for (const kPoint of pointAll) {
									if (kPoint.y - thisOperator[0].oper[5][2] > flagPoint.y) continue; // 排除挑战图标高度不在经验/掉落标识之上的
									const distPow = Math.pow(kPoint.x - flagPoint.x, 2) + Math.pow(kPoint.y - flagPoint.y, 2);
									if (minDistPow > distPow) {
										minDistPow = distPow;
										point = kPoint;
									}
								}
							}
							console.log(`Math.sqrt(minDistPow): ${Math.sqrt(minDistPow)}`);
							console.log(`thisOperator[0].oper[5][2] * 15 * 1.414: ${thisOperator[0].oper[5][2] * 15 * 1.414}`);
							if (!(Math.sqrt(minDistPow) < thisOperator[0].oper[5][2] * 15 * 1.414)) {
								point = null;
							}
						}
					} else {
						sleep(400);
						thisScript.keepScreen(true);
					}
				} while (!point && --trycnt > 0);
			}
			if (point) {
				const oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
				thisScript.regionClick(oper);
				return true;
			} else {
				if (--thisScript.global.tsAttackSwhipeNum <= 0) {
					if (thisScript.oper({
						name: '探索界面_判断',
						operator: [{ desc: thisOperator[0].desc }],
					})) {
						thisScript.regionClick([thisOperator[0].oper[3], thisOperator[0].oper[4]]);
						thisScript.global.tsAttackSwhipeNum = undefined;
					}
					return true;
				}
				if (thisScript.oper({
					name: '探索界面_判断',
					operator: [{ desc: thisOperator[0].desc }],
				})) {
					thisScript.myToast(`剩余滑屏次数：${thisScript.global.tsAttackSwhipeNum}`);
					thisScript.regionBezierSwipe(thisOperator[0].oper[1], thisOperator[0].oper[2], {
						'快': [200, 400],
						'中': [500, 700],
						'慢': [800, 1200],
					}[String(thisconf.swipeSpeed) || '慢'], 200);
					thisScript.keepScreen(true);
				} else {
					return false;
				}
			}
		}
		return false;
	}
}