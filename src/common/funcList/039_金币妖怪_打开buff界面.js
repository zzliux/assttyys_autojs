const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 39,
	name: '金币妖怪_打开buff界面',
	operator: [{
		desc: [1280, 720,
			[
				[left, 54, 23, 0xf6d490],
				[left, 37, 32, 0xa77440],
				[left, 52, 48, 0xeed491],
				[left, 196, 33, 0x0b0a0b],
				[left, 194, 49, 0x0a0a0a],
				[left, 35, 52, 0x483427],
				[left, 169, 62, 0xba9067]
			]
		],
		oper: [
			[center, 1280, 720, 27, 16, 68, 58, 2000],
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
				name: '金币妖怪_组队列表',
				operator: [{
					desc: thisOperator[0].desc
				}]
			})) {
			let point = thisScript.findMultiColor('金币妖怪_判断挑战次数是否用完') || null
			if (point && thisScript.oper({
					name: '金币妖怪_退出组队界面',
					operator: [thisOperator[0]]
				})) {
				thisScript.helperBridge.regionClick([
					[402, 35, 434, 81, 1000]
				], thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true
			} else {
				return false
			}
		} else {
			return false
		}
	}
}