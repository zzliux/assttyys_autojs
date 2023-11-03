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
			name: 'type',
			desc: '挑战类型',
			type: 'list',
			data: ['无差别', '打经验', '打掉落'],
			default: '打经验',
			value: null,
		}, {
			name: 'swipeTime',
			desc: '划屏次数',
			type: 'list',
			data: ['2', '3', '4', '5', '6', '7', '8', '9', '10'],
			default: '4',
			value: null,
		}, {
			name: 'swipeSpeed',
			desc: '划屏速度（滑不动可适当调整划屏速度）',
			type: 'list',
			data: ['快', '中', '慢'],
			default: '慢',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[left, 38, 65, 0xf1f5fb],
				[left, 36, 570, 0x983254],
				[left, 29, 672, 0x615a77],
				[right, 1227, 30, 0xd3af84],
				[right, 1174, 33, 0xd7b287],
			]
		],
		oper: [
			[left, 1280, 720, 0, 0, 42, 51, 2000],
			[right, 1280, 720, 1121, 117, 1224, 209, 0],
			[left, 1280, 720, 46, 215, 162, 525, 0],
			[left, 1280, 720, 30, 47, 71, 85, 500],
			[center, 1280, 720, 702, 388, 846, 421, 500],
			[left, 1280, 720, 0, 0, 16, 16, 0],
			[right, 1280, 720, 0, 0, 1275, 715, 0]
		]
	}, {
		// 自动轮换
		desc: [1280, 720,
			[[left, 132, 666, 0x646464],
				[left, 66, 658, 0xedede5],
				[left, 42, 67, 0xe8f2fb],
				[right, 1120, 36, 0xd7b389],
				[right, 1233, 34, 0xd3af83]]
		],
		oper: [
			[left, 1280, 720, 122, 660, 245, 682, 500]
		]
	}, { // 首领出现
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
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		while (thisScript.oper({
			name: '探索界面_判断',
			operator: [{ desc: thisOperator[0].desc, retest: 500 }],
		})) {
			// 早期轮换会自动关闭，需手动打开关闭的轮换，现阴阳师已优化，轮换会保持上一次的状态
			// if (thisScript.oper({
			// 	name: '探索界面_自动轮换',
			// 	operator: [thisOperator[1]]
			// })) {
			// 	return true;
			// }
			const thisconf = thisScript.scheme.config['14'];
			if (thisScript.global.tsAttackSwhipeNum === undefined) {
				thisScript.global.tsAttackSwhipeNum = parseInt(String(thisconf.swipeTime), 10);
				// sleep(3000); // 从地图进来，先休息一下再进行判断
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
						operator: [{ desc: thisOperator[0].desc, retest: 2500 }],
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
					}[String(thisconf.swipeSpeed) || '慢'], 0, 200);
					sleep(500);
					thisScript.keepScreen(true);
				} else {
					return false;
				}
			}
		}
		return false;
	}
}