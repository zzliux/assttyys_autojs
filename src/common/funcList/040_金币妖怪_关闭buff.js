const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 40,
	name: '金币妖怪_关闭buff',
	operator: [{
		desc: [1280, 720,
			[
				[center, 352, 526, 0x9c977e],
				[center, 933, 526, 0x747865],
				[center, 848, 528, 0xb89e7c],
				[center, 497, 522, 0x9e9d8c],
				[center, 363, 120, 0xd4c4bb],
				[center, 913, 121, 0xd8c7bf],
				[center, 878, 124, 0xdfd4cb]
			]
		],
		oper: [
			[center, 1280, 720, 27, 16, 68, 58, 2000],
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
				name: '金币妖怪_buff界面',
				operator: [{
					desc: thisOperator[0].desc
				}]
			})) {
			// 金币妖怪_判断挑战次数是否用完
			let point = thisScript.findMultiColor('金币妖怪_查找开启的buff') || null
			if (point) {
				thisScript.helperBridge.regionClick([
					[point.x, point.y, point.x + 1, point.y + 1, 1000]
				], thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true
			} else {
				thisScript.stop();
				return false
			}
		}
	}
}