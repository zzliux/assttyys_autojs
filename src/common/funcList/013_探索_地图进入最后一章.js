const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 13,
	name: '探索_地图进入最后一章',
	desc: '在地图界面时，点击最后一章进行挑战',
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
			[right, 1280, 720, 1056,557, 1246,643,1000],
			[center, 1280, 720, 446,201, 492,255, 200],
			[center, 1280, 720, 889,517, 1002,559, 1000]
		],
		retest: 1000
	}, {
		desc: [1280,720,
			[[center,276,129,0x493624],
			[center,867,131,0x493624],
			[center,1043,147,0xeecccc],
			[center,904,535,0xf4b25f],
			[right,1121,35,0xd7b389],
			[right,1222,32,0xd3af85]]
		],
		oper: [
			[center, 1280, 720, 1036,133, 1065,158, 500]
		]
	}, {
		oper: [
			[left, 1280, 720, 0, 0, 77, 45, 1000]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '探索_地图判断',
			operator: [{ desc: thisOperator[0].desc, retest: 500 }]
		})) {
			let point = thisScript.findMultiColor('探索_宝箱');
			if (point) {
				let oper = [[point.x, point.y, point.x + thisOperator[2].oper[0][2], point.y + thisOperator[2].oper[0][3], thisOperator[2].oper[0][4]]];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			} else {
				if (thisScript.oper({
					name: '探索_地图进入最后一章',
					operator: [{
						desc: thisOperator[0].desc,
						oper: [thisOperator[0].oper[0]]
					}]
				})) {
					if (thisScript.compareColorLoop(thisOperator[1].desc, 3000)) {
						thisScript.helperBridge.regionClick([thisOperator[0].oper[1], thisOperator[0].oper[2]], thisScript.scheme.commonConfig.afterClickDelayRandom);
						return true;
					}
				}
				return false;
			}
		} else if (thisScript.oper({
			name: '探索_地图进入最后一章_关闭章节窗口',
			operator: [thisOperator[1]]
		})) {
			return true;
		}
		return false;
	}
}