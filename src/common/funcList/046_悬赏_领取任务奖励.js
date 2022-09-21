const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 46,
	name: '悬赏_领取任务奖励',
	checked: false,
	operator: [{
		desc: [1280, 720,
			[
				[left, 47, 62, 0xedf4fb],
				[right, 1169, 147, 0xd4cebf],
				[left, 28, 676, 0x5d3a28],
				[left, 159, 700, 0x643d2a],
				[left, 463, 706, 0x6f422c],
				[right, 1228, 30, 0xd3af84],
			]
		],
		oper: [
			[left, 1280, 720, 0, 0, 42, 51, 2000],
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
				name: '悬赏_探索界面',
				operator: [{
					desc: thisOperator[0].desc
				}]
			})) {
			let point = thisScript.findMultiColor('悬赏_宝箱') || null;
			if (point != null) {
				let oper = [
					[point.x, point.y, point.x + 1, point.y + 1, 1000]
				];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			} else {
				return false
			}
		} else {
			return false
		}
	}
}