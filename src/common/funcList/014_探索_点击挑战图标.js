const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 14,
	name: '探索_点击挑战图标',
	desc: '在探索界面时，选择小怪或boss进攻，优先打boss，可配置无差别挑战或只打经验怪',
	config: [{
		desc: '',
		config: [{
			name: 'type',
			desc: '挑战类型',
			type: 'list',
			data: ['无差别', '打经验'],
			default: '打经验',
			value: null,
		}, {
			name: 'swipeTime',
			desc: '划屏次数',
			type: 'list',
			data: ['2', '3', '4', '5', '6'],
			default: '3',
			value: null,
		}]
	}],
	operator: [{
		desc: [1280,720,
			[[left,38,65,0xf1f5fb],
			[left,36,570,0x983254],
			[left,29,672,0x615a77],
			[right,1124,36,0xd7b388],
			[right,1225,49,0xcba375]]
		],
		oper: [
			[left, 1280, 720, 0, 0, 42, 51, 2000],
			[right, 1280, 720, 1121,117, 1224,209, 0],
			[left, 1280, 720, 46,215, 162,525, 0],
			[left, 1280, 720, 30,47, 71,85, 500],
			[center, 1280, 720, 702,388, 846,421, 500],
			[left, 1280, 720, 0, 0, 16, 16, 0],
			[right, 1280, 720, 0, 0, 1275, 715, 0]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let thisconf = thisScript.scheme.config['14'];
		while (thisScript.oper({
			name: '探索界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			if (thisScript.global.tsAttackSwhipeNum === undefined) {
				thisScript.global.tsAttackSwhipeNum = parseInt(thisconf.swipeTime);
				// sleep(3000); // 从地图进来，先休息一下再进行判断
			}
			let point = null;
			// TODO 挑战经验怪
			if ('打经验' === thisconf.type) {
				let trycnt = 5;
				do {
					point = thisScript.findMultiColor('探索_挑战BOSS');
					if (point) {
						let oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
						thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
						thisScript.global.tsAttackSwhipeNum = 1;
						return true;
					}
					let flagPoint = thisScript.findMultiColor('探索_经验标识');
					if (null != flagPoint) {
						let step = thisOperator[0].oper[5][2];
						// 从内向外多点找色，可点击的挑战图标，可能会处理为不停的进行多点找色，找不到的时候放大区域
						let l = step // 搜索区域宽高,5倍 "探索_经验怪标记" 的宽高，当这个区域找不到时，l以倍数增长，直到找到为止或者达到一定次数, 这样处理的话会找重复的地方
						for (let tryTimes = 1; tryTimes <= 15; tryTimes++, l += step) { // 尝试 12 次, 大概算了一下，12次内基本可以找到，找不到的话就滑屏
							let region = [flagPoint.x -  l / 2, flagPoint.y - l - 40, flagPoint.x + l / 2, flagPoint.y - 40];
							if (region[0] < 0) region[0] = 0;
							if (region[1] < 0) region[1] = 0;
							if (region[2] > thisOperator[0].oper[6][2]) region[2] = thisOperator[0].oper[6][2];
							if (region[3] > thisOperator[0].oper[6][3]) region[3] = thisOperator[0].oper[6][3];
							point = thisScript.findMultiColor('探索_挑战', region);
							if (point) {
								break;
							}
						}
					} else {
						sleep(400);
						thisScript.keepScreen(true);
					}
				} while (!point && --trycnt > 0);
			} else {
				point = thisScript.findMultiColor('探索_挑战BOSS');
				if (point) {
					let oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
					thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.global.tsAttackSwhipeNum = 1;
					return true;
				}
				point = thisScript.findMultiColor('探索_挑战');
			}
			if (point) {
				let oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			} else {
				if (--thisScript.global.tsAttackSwhipeNum <= 0) {
					thisScript.helperBridge.regionClick([thisOperator[0].oper[3], thisOperator[0].oper[4]], thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.global.tsAttackSwhipeNum = undefined;
					return true;
				}
				if (thisScript.oper({
					name: '探索界面_判断',
					operator: [{ desc: thisOperator[0].desc }]
				})) {
					// toastLog(`剩余滑屏次数：${thisScript.global.tsAttackSwhipeNum}`);
					thisScript.helperBridge.regionBezierSwipe(thisOperator[0].oper[1], thisOperator[0].oper[2], [800, 1200], 200);
					thisScript.keepScreen(true);
				} else {
					return false;
				}
			}
		}
		return false;
	}
}