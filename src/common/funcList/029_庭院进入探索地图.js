const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 29,
	name: '庭院进入探索地图',
	desc: '请使用默认庭院皮肤，启用该功能后在庭院下会自动进入探索地图界面',
	operator: [{
		desc: [1280,720,
			[[center,229,30,0x614040],
			[center,404,36,0xfbcb78],
			[center,437,79,0xee7a59],
			[center,1151,53,0xcba574],
			[center,1237,54,0xceac79],
			[right,1235,610,0x5c7575],
			[center,1020,597,0xc73e4c],
			[center,635,608,0xf4f4f3],
			[center,373,623,0xe2dfdc],
			[center,746,630,0xd9ceca]]
		],
		oper: [
			[left, 1280, 720, 0, 0, 32, 63, 1000]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '庭院判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			let point = thisScript.findMultiColor('庭院_探索灯笼');
			if (point) {
				let oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			} else {
				return false
			}
		}
		return false;
	}
}