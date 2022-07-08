const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 29,
	name: '庭院进入探索地图',
	desc: '请使用默认庭院皮肤，启用该功能后在庭院下会自动进入探索地图界面',
	operator: [{
		desc: [1280, 720,
			[
				[center, 403, 39, 0xfbc975],
				[center, 439, 76, 0xf27c5d],
				[right, 1062, 55, 0xcca173],
				[right, 1152, 54, 0xcda170],
				[right, 1236, 50, 0xcba274],
				[right, 1222, 607, 0xefda9f],
				[right, 1226, 638, 0xdfd0c8],
				[right, 1128, 616, 0xe8f9ff],
				[right, 1102, 621, 0x98b9db]
			]
		],
		oper: [
			[left, 1280, 720, 0, 0, 32, 63, 1000]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
				name: '庭院判断',
				operator: [{
					desc: thisOperator[0].desc
				}]
			})) {
			let point = thisScript.findMultiColor('庭院_探索灯笼');
			if (point) {
				let oper = [
					[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]
				];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			} else {
				return false
			}
		}
		return false;
	}
}