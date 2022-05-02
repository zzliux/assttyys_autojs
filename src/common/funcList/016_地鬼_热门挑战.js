const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 16,
	name: '地鬼_热门挑战',
	desc: '在地域鬼王界面时，自动选热门进行挑战',
	// config: [{
	// 	desc: '',
	// 	config: [{
	// 		name: 'callengeTimes',
	// 		desc: '开放挑战次数',
	// 		type: 'list',
	// 		data: ['1', '2', '3'],
	// 		default: '3',
	// 		value: null,
	// 	}]
	// }],
	operator: [{
		desc: [1280,720,
			[[left,60,58,0xc2cbe3],
			[left,69,670,0xaf544c],
			[right,1157,49,0xfbf5e5],
			[right,1137,39,0xce737b],
			[right,1206,42,0xc55149],
			[right,1197,532,0xf4f4f4]]
		],
		oper: [
			[right, 1280,720, 1116,34, 1148,62, 1000], // 筛选
			[right, 1280,720, 1187,155, 1239,289, 500], // 热门
			[right, 1280,720, 1093,235, 1136,282, 500], // 第一个
			[right, 1280,720, 1096,395, 1139,447, 500], // 第二个
			[right, 1280,720, 1094,547, 1140,592, 500], // 第三个
			[left, 1280,720, 0, 0, 13, 19, 0], // 难度把手大小区域
			[left, 1280,720, 53,265, 108,326, 0], // 难度把手滑动停止区域
			[left, 1280,720, 1104,495, 1177,563, 0], // 挑战
		]
	}, {
		// 关闭界面
		desc: [1280,720,
			[[center,159,224,0xe2dad3],
			[center,236,223,0xeccba1],
			[center,455,223,0xefd0a1],
			[center,530,218,0xe7e1db],
			[center,1157,71,0xeecccc]]
		],
		oper: [
			[center, 1280, 720, 1145,59, 1165,83, 500]
		]
	}, {
		desc: [1280,720,
			[[left,202,388,0x161211], // 第一个没打
			[left,308,386,0x161211], // 第二个没打
			[left,418,385,0x161211]] // 第三个没打
		],
		oper: [
			[left, 1280, 720, 38,409, 88,430, 800] // 今日挑战
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '地鬼_挑战_关闭',
			operator: [{
				desc: thisOperator[1].desc,
				oper: thisOperator[1].oper,
			}]
		})) {
			return true;
		}
		if (thisScript.oper({
			name: '地鬼_热门挑战',
			operator: [{
				desc: thisOperator[0].desc,
				oper: thisOperator[2].oper
			}]
		}, 2000)) { // 加了个两秒的重检测时间，防止退出来后
			thisScript.keepScreen();
			thisScript.global.dgCurNum = -1;
			for (let i = 0; i < thisOperator[2].desc.length; i++) {
				if (thisScript.oper({
					name: `地鬼_检测第${i}个未打`,
					operator: [{
						desc: [thisOperator[2].desc[i]]
					}]
				})) {
					thisScript.global.dgCurNum = i;
					break;
				}
			}

			if (thisScript.global.dgCurNum === -1) {
				toastLog('已完成');
				thisScript.stop();
				return;
			}
			let clickOper = thisOperator[0].oper[2 + thisScript.global.dgCurNum];
			thisScript.helperBridge.regionClick([thisOperator[0].oper[0], thisOperator[0].oper[1], clickOper], thisScript.scheme.commonConfig.afterClickDelayRandom);
			// sleep(1500);
			if (thisScript.compareColorLoop(thisOperator[1].desc, 3000)) {
				sleep(1500);
				thisScript.keepScreen(true);
				let point = thisScript.findMultiColor('地鬼_难度把手');
				if (point) {
					let beginRegion = [
						point.x,
						point.y,
						point.x + thisOperator[0].oper[5][2],
						point.y + thisOperator[0].oper[5][3],
					];
					thisScript.helperBridge.regionSwipe(beginRegion, thisOperator[0].oper[6], [100, 300], 200);
				}
				thisScript.helperBridge.regionClick([thisOperator[0].oper[7]], thisScript.scheme.commonConfig.afterClickDelayRandom);
				toastLog(`地鬼_热门挑战_第${thisScript.global.dgCurNum + 1}次`);
				sleep(1500);
				return true;
			}
		}
	}
}