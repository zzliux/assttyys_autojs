import { myToast, doOspPush } from '@/common/toolAuto';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 205,
	name: '六道萤草_仿造转换',
	operator: [{
		// 仿造
		desc: [1280, 720,
			[
				[left, 20, 43, 0xf0f6f7],
				[left, 252, 38, 0x583716],
				[left, 66, 649, 0x2e4a55],
				[right, 1240, 208, 0xafc8bf],
				[right, 1242, 340, 0x33505e],
				// [right, 1185, 635, 0x8d7f60],
				// [right, 1184, 629, 0x8d7f60],
				// [right, 1165, 633, 0x8d7f60],
				// [right, 1204, 647, 0x222730],
			]
		],
		oper: [
			[left, 1280, 720, 0, 0, 893 - 843, 244 - 197, 500], // 技能大小
			[right, 1280, 720, 1165, 622, 1230, 699, 500], // 仿造区域
			[left, 1280, 720, 16, 23, 60, 65, 500], // 左上角返回
			[center, 1280, 720, 674, 406, 842, 456, 1000], // 确定
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '六道萤草_仿造转换',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			let priorty = ['腐草为萤', '妖力化身', '六道净化', '萤火之光']; // 未达到目标的优先级
			let priorty2 = ['萤火之光', '妖力化身', '六道净化']; // 达到目标后的优先级
			let toClick = null;
			let type = null;
			let overCnt = 0;
			priorty.forEach(item => {
				if (thisScript.global.d6d[item][0] >= thisScript.global.d6d[item][1]) {
					overCnt++;
				}
			});
			if (overCnt < priorty.length) {
				for (let i = 0; i < priorty.length; i++) {
					if (thisScript.global.d6d[priorty[i]][0] >= thisScript.global.d6d[priorty[i]][1]) {
						continue;
					}
					const p = thisScript.findMultiColor(`六道萤草_仿造_${priorty[i]}`);
					if (p) {
						toClick = p;
						type = priorty[i];
						break;
					}
				}
				
				// 3次都没找到的话，重选，不过滤
				if (!toClick) {
					for (let i = 0; i < priorty.length; i++) {
						const p = thisScript.findMultiColor(`六道萤草_仿造_${priorty[i]}`);
						if (p) {
							toClick = p;
							type = priorty[i];
							break;
						}
					}
				}
			}
			// 如果上面没找到，按第二优先排序选
			if (!toClick) {
				for (let i = 0; i < priorty2.length; i++) {
					const p = thisScript.findMultiColor(`六道萤草_仿造_${priorty2[i]}`);
					if (p) {
						toClick = p;
						type = priorty2[i];
						break;
					}
				}
			}
			if (!toClick) {
				// 没有就退
				thisScript.helperBridge.regionClick([thisOperator[0].oper[2], thisOperator[0].oper[3]], thisScript.scheme.commonConfig.afterClickDelayRandom);
			} else {
				// 找到了就点
				myToast(`选择${type}`);
				const toClickRegion = [
					toClick.x,
					toClick.y,
					toClick.x + thisOperator[0].oper[0][2],
					toClick.y + thisOperator[0].oper[0][3],
					thisOperator[0].oper[0][4],
				];
				thisScript.helperBridge.regionClick([toClickRegion, thisOperator[0].oper[1], thisOperator[0].oper[3]], thisScript.scheme.commonConfig.afterClickDelayRandom);
				thisScript.global.d6d[type][0]++;
				thisScript.global.d6RefreshCnt = 0;
				console.log(`thisScript.global.d6d: ${JSON.stringify(thisScript.global.d6d)}`);
			}
			sleep(200);
			return true;
		}
		return false;
	}
}