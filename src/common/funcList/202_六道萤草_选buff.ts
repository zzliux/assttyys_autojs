import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func202 implements IFuncOrigin {
	id = 202;
	name = '六道萤草_选buff';
	desc = '腐草为萤-5级，妖力化身-2级，六道净化-1级，萤火之光-最好5级';
	config = [{
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
	}, {
		desc: '配置',
		config: [{
			name: 'priority',
			desc: '各buff的优先级（仅未满buff时生效）',
			type: 'list',
			data: [
				'腐草为萤,妖力化身,六道净化,萤火之光',
				'腐草为萤,六道净化,妖力化身,萤火之光',
				'六道净化,妖力化身,腐草为萤,萤火之光',
				'六道净化,腐草为萤,妖力化身,萤火之光',
			],
			default: '腐草为萤,妖力化身,六道净化,萤火之光',
			value: null,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
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
			[center, 1280, 720, 0, 0, 385 - 268 - 40, 592 - 556 - 10, 500], // 选择按钮的大小
			[center, 1280, 720, 1189, 622, 1238, 677, 500], // 右下角刷新按钮
			[center, 1280, 720, 682, 398, 802, 449, 600], // 刷新确认
			[right, 1280, 720, 1156, 10, 1265, 69, -1], // 金币区域
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
	}, {
		// 选buff后的获得奖励确认，颜色比较近，可能会有误判断的情况
		desc: [1280, 720,
			[
				[center, 554, 142, 0xfede96],
				[center, 622, 143, 0xf7e691],
				[center, 745, 181, 0xffeeaa],
				[center, 583, 184, 0xf6e6b4],
				[center, 635, 192, 0xeacd7e],
			]
		],
		oper: [
			[right, 1280, 720, 913, 129, 1245, 648, 500],
		]
	}, {
		// buff名字区域
		oper: [
			// [center, 1280, 720, 113, 257, 321, 346, -1], // 第一个
			// [center, 1280, 720, 386, 262, 593, 344, -1], // 第二个
			// [center, 1280, 720, 659, 257, 868, 342, -1], // 第三个
			[center, 1280, 720, 113, 257, 868, 342, -1], // 一起的框框
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['202'];
		if (!thisScript.global.d6d) {
			thisScript.global.d6d = {
				// 0当前个数，1目标个数
				腐草为萤: [parseInt(thisconf.腐草为萤 as string, 10) || 0, 5],
				妖力化身: [parseInt(thisconf.妖力化身 as string, 10) || 0, 2],
				六道净化: [parseInt(thisconf.六道净化 as string, 10) || 0, 1],
				萤火之光: [parseInt(thisconf.萤火之光 as string, 10) || 0, 5]
			}
		}
		// TODO 待优化：达到目标个数后直接乱选buff
		// TODO 待优化：只要有一个普通buff如生命加成、攻击加成、命中加成则不刷新

		if (thisScript.oper({
			name: '六道萤草_选buff',
			operator: [{
				desc: thisOperator[0].desc
			}, {
				desc: thisOperator[1].desc
			}]
		}, 500)) {
			let confPriorty = thisconf.priority || '腐草为萤,妖力化身,六道净化,萤火之光';
			let priorty = String(confPriorty).split(','); // 未达到目标的优先级
			let priorty2 = ['萤火之光', '妖力化身']; // 达到目标后的优先级
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
				// 判断剩下多少钱，如果剩下的钱不够刷新直接给刷新次数置为上限
				let coins = 50;
				if (thisScript.getOcr()) {
					let result = thisScript.findText('.+', 0, thisOperator[0].oper[3], '包含');
					console.log(result);
					if (result.length) {
						coins = parseInt(result[0].label);
						if (Number.isNaN(coins)) {
							coins = 50;
						}
					} else {
						coins = 0;
					}
				}
				
				// 如果三个里面有两个为xx加成，则不刷新，省钱
				// thisOperator[4].oper.forEach(item => {
				// 	const r = thisScript.findText('.+加成', 0, item, '包含');
				// 	if (r.length) jcCnt++;
				// });
				const r = thisScript.findText('.+加成', 0, thisOperator[4].oper[0], '包含');
				if (r.length >= 2) {
					thisScript.global.d6RefreshCnt = 3;
				}

				if (thisScript.global.d6RefreshCnt < 3 && coins >= 50) {
					// 刷新次数小于3次，金币大于50则刷新
					thisScript.global.d6RefreshCnt++;
					thisScript.helperBridge.regionClick([thisOperator[0].oper[1], thisOperator[0].oper[2]], thisScript.scheme.commonConfig.afterClickDelayRandom); // 刷新
				} else {
					// 随机点
					let rn = random(0, 2);
					thisScript.myToast(`没找到，随机点击第${rn + 1}个`);
					thisScript.helperBridge.regionClick([thisOperator[1].oper[rn]], thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.global.d6RefreshCnt = 0;
					// 如果有确认奖励就能很快的跳出
					thisScript.compareColorLoop(thisOperator[3].desc, 1500);
					thisScript.myToast(`当前buff：${priorty.map(name => name + ':' + thisScript.global.d6d[name][0]).join(', ')}`);
				}
			} else {
				// 腐草为萤
				if (thisScript.global.d6d['腐草为萤'][0] === 0 && type !== '腐草为萤') {
					thisScript.myToast(`未找到${priorty[0]}`);
					sleep(500);
					return false;
				} else if (thisScript.global.d6d['腐草为萤'][0] === 0 && type === '腐草为萤') {
					// 如果是开局的腐草不会弹获得奖励，需要手工统计
					thisScript.global.d6d['腐草为萤'][0] = 1;
				}
				// 找到了就点
				thisScript.myToast(`选择${type}`);
				const toClickRegion = [
					toClick.x,
					toClick.y,
					toClick.x + thisOperator[0].oper[0][2],
					toClick.y + thisOperator[0].oper[0][3],
					thisOperator[0].oper[0][4],
				];
				thisScript.helperBridge.regionClick([toClickRegion], thisScript.scheme.commonConfig.afterClickDelayRandom);
				// 如果有确认奖励就能很快的跳出
				thisScript.compareColorLoop(thisOperator[3].desc, 1500);
				// if (thisScript.global.d6d[type][0] === 0) {
				// 	thisScript.global.d6LoadBuff = true;
				// }
				// thisScript.global.d6d[type][0]++;
				// 拿到所有buff后再装buff
				// if (thisScript.global.d6LoadBuff) {
				// 	let hasCnt = 0;
				// 	['腐草为萤', '妖力化身', '六道净化', '萤火之光'].forEach(name => hasCnt += Math.min(thisScript.global.d6d[name][0], 1));
				// 	if (hasCnt < 4) thisScript.global.d6LoadBuff = false;
				// }
				// if (thisScript.global.d6LoadBuff) {
				// 	thisScript.myToast('准备装buff');
				// }
				// thisScript.myToast(`当前buff：${['腐草为萤', '妖力化身', '六道净化', '萤火之光'].map(name => name + ':' + thisScript.global.d6d[name][0]).join(', ')}`);
				thisScript.global.d6RefreshCnt = 0;
			}
			return true;
		}
		return false;
	}
}