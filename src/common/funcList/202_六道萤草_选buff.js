import { myToast, doOspPush } from '@/common/toolAuto';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 202,
	name: '六道萤草_选buff',
	desc: '腐草为萤-5级，妖力化身-2级，六道净化-1级，萤火之光-最好5级',
	config: [{
		desc: '设置各buff初始数量，用于中途开始时的调整',
		config: [{
			name: '腐草为萤',
			desc: '腐草为萤',
			type: 'integer',
			default: 0,
		}, {
			name: '妖力化身',
			desc: '妖力化身',
			type: 'integer',
			default: 0,
		}, {
			name: '六道净化',
			desc: '六道净化',
			type: 'integer',
			default: 0,
		}, {
			name: '萤火之光',
			desc: '萤火之光',
			type: 'integer',
			default: 0,
		}]
	}],
	operator: [{
		// 首次进入选buff
		desc: [1280, 720,
			[
				[left, 24, 41, 0xedf5f5],
				[center, 351, 585, 0x677777],
				[center, 677, 584, 0x526363],
				[center, 992, 582, 0x4e5e67],
				[left, 66, 650, 0x30424f],
			]
		],
		oper: [
			[center, 1280, 720, 0, 0, 385 - 268 - 40, 592 - 556 - 10, 2500], // 选择按钮的大小
			[center, 1280, 720, 1189, 622, 1238, 677, 500], // 右下角刷新按钮
			[center, 1280, 720, 681, 397, 802, 450, 1500], // 重置确认
		]
	}, {
		// 打完一波后的
		desc: [1280, 720,
			[
				[left, 22, 43, 0xeff6f7],
				[center, 181, 586, 0x5c6c6c],
				[left, 60, 647, 0x2d3f4c],
				[center, 537, 581, 0x37484c],
				[center, 809, 582, 0x415252],
				[center, 1123, 583, 0x4f6063],
			]
		],
		oper: [
			[center, 1280, 720, 158, 556, 282, 591, 500], // 第一个选择按钮
			[center, 1280, 720, 433, 555, 555, 593, 500], // 第二个选择按钮
			[center, 1280, 720, 709, 556, 832, 592, 500], // 第三个选择按钮
		]
	}, {
		// 刷新确认
		desc: [1280, 720,
			[
				[center, 625, 256, 0xcbb59e],
				[center, 526, 391, 0x6e2d22],
				[center, 488, 413, 0xdf6851],
				[center, 784, 418, 0xf4b25f],
				[left, 28, 42, 0x626565],
				[right, 1218, 638, 0x534c3e],
			]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (!thisScript.global.d6d) {
			const thisconf = thisScript.scheme.config['202'];
			thisScript.global.d6d = {
				// 0当前个数，1目标个数
				腐草为萤: [parseInt(thisconf.腐草为萤) || 0, 5],
				妖力化身: [parseInt(thisconf.妖力化身) || 0, 2],
				六道净化: [parseInt(thisconf.六道净化) || 0, 1],
				萤火之光: [parseInt(thisconf.萤火之光) || 0, 4]
			}
		}
		if (thisScript.oper({
			name: '六道萤草_选buff',
			operator: [{
				desc: thisOperator[0].desc
			}, {
				desc: thisOperator[1].desc
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
					const p = thisScript.findMultiColor(`六道萤草_${priorty[i]}`);
					if (p) {
						toClick = p;
						type = priorty[i];
						break;
					}
				}
				// 3次都没找到的话，重选，不过滤
				if (!toClick && thisScript.global.d6RefreshCnt >= 3) {
					for (let i = 0; i < priorty.length; i++) {
						const p = thisScript.findMultiColor(`六道萤草_${priorty[i]}`);
						if (p) {
							toClick = p;
							type = priorty[i];
							break;
						}
					}
				}
			} else {
				for (let i = 0; i < priorty2.length; i++) {
					if (thisScript.global.d6d[priorty2[i]][0] >= 5) {
						continue;
					}
					const p = thisScript.findMultiColor(`六道萤草_${priorty2[i]}`);
					if (p) {
						toClick = p;
						type = priorty2[i];
						break;
					}
				}
			}
			if (!toClick) {
				// 没找到就刷新，3次刷新都没有就随机点
				if (typeof thisScript.global.d6RefreshCnt === 'undefined') {
					thisScript.global.d6RefreshCnt = 0;
				}
				if (thisScript.global.d6RefreshCnt >= 3) {
					let rn = random(0, 2);
					myToast(`没找到，随机点击第${rn + 1}个`);
					thisScript.helperBridge.regionClick([thisOperator[1].oper[rn]], thisScript.scheme.commonConfig.afterClickDelayRandom); // 刷新
					thisScript.global.d6RefreshCnt = 0;
				} else {
					thisScript.global.d6RefreshCnt++;
					thisScript.helperBridge.regionClick([thisOperator[0].oper[1]], thisScript.scheme.commonConfig.afterClickDelayRandom); // 刷新
					// 如果点了刷新不出确认，表示没钱了，直接给刷新次数置为3次表示这是最后一次
					if (thisScript.compareColorLoop(thisOperator[2].desc, 600)) {
						thisScript.helperBridge.regionClick([thisOperator[0].oper[2]], thisScript.scheme.commonConfig.afterClickDelayRandom); // 刷新
					} else {
						thisScript.global.d6RefreshCnt = 3;
					}

				}
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
				thisScript.helperBridge.regionClick([toClickRegion], thisScript.scheme.commonConfig.afterClickDelayRandom);
				if (thisScript.global.d6d[type][0] === 0 && type !== priorty[0]) {
					thisScript.global.d6LoadBuff = true;
				}
				thisScript.global.d6d[type][0]++;
				thisScript.global.d6RefreshCnt = 0;
				console.log(`thisScript.global.d6d: ${JSON.stringify(thisScript.global.d6d)}`);
			}
			return true;
		}
		return false;
	}
}