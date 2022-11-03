import { myToast, doOspPush } from '@/common/toolAuto';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 16,
	name: '地鬼_热门挑战',
	desc: '在地域鬼王界面时，自动选热门进行挑战',
	operator: [{
		desc: [1280, 720,
			[
				[left, 60, 58, 0xc2cbe3],
				[left, 69, 670, 0xaf544c],
				[right, 1157, 49, 0xfbf5e5],
				[right, 1137, 39, 0xce737b],
				[right, 1206, 42, 0xc55149],
				[right, 1197, 532, 0xf4f4f4]
			]
		],
		oper: [
			[right, 1280, 720, 1116, 34, 1148, 62, 1000], // 筛选
			[right, 1280, 720, 1187, 155, 1239, 289, 500], // 热门
			[right, 1280, 720, 1093, 235, 1136, 282, 500], // 第一个
			[right, 1280, 720, 1096, 395, 1139, 447, 500], // 第二个
			[right, 1280, 720, 1094, 547, 1140, 592, 500], // 第三个
			[left, 1280, 720, 0, 0, 13, 19, 0], // 难度把手大小区域
			[left, 1280, 720, 47, 234, 120, 344, 0], // 难度把手滑动停止区域
			[left, 1280, 720, 1104, 505, 1207, 583, 0], // 挑战
		]
	}, {
		// 关闭界面
		desc: [1280, 720,
			[
				[left, 137, 216, 0xddd6ce],
				[left, 181, 631, 0xd7cdc6],
				[right, 1209, 43, 0xeecccc],
				[right, 1204, 520, 0xe8d5b0],
				[right, 1087, 624, 0xebe5ce],
				[right, 1210, 391, 0xb25d3b],
			]
		],
		oper: [
			[center, 1280, 720, 1195, 30, 1226, 59, 500]
		]
	}, {
		desc: [1280, 720,
			[
				[left, 202, 388, 0x161211], // 第一个没打
				[left, 308, 386, 0x161211], // 第二个没打
				[left, 418, 385, 0x161211], // 第三个没打
			] 
		],
		oper: [
			[left, 1280, 720, 38, 409, 88, 430, 800] // 今日挑战
		]
	}, {
		// 探索地图界面
		desc: [1280, 720,
			[
				[left, 45, 60, 0xeff5fb],
				[right, 1168, 146, 0xd9cec1],
				[right, 1124, 32, 0xd7b388],
				[right, 1226, 30, 0xd3af84],
				[left, 18, 705, 0x754830],
				[left, 210, 711, 0x985b32],
			]
		],
		oper: [
			[left, 1280, 720, 741, 638, 800, 695, 2000] // 今日挑战
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
				name: '探索界面',
				operator: [thisOperator[3]]
			})) {
				
			return true;
		}
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
				doOspPush(thisScript, { text: '脚本已停止，请查看。', before() { myToast('脚本即将停止，正在上传数据'); } });
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