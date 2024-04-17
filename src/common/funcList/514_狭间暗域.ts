import {
	IFuncOrigin,
	IFuncOperatorOrigin,
	IFuncOperator,
} from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func514 implements IFuncOrigin {
	id = 514;
	name = '狭间暗域';
	config = [
		{
			desc: '',
			config: [
				{
					name: 'boss_order',
					desc: '挑战顺序',
					type: 'list',
					data: ['从大到小', '从小到大'],
					default: '从大到小',
					value: null,
				},
			],
		},
	];
	operator: IFuncOperatorOrigin[] = [
		{
			//    检测_选择暗域页面未封印未开启
			desc: [
				1280,
				720,
				[
					[left, 269, 206, 0xe4d0ad],
					[left, 297, 181, 0xe4d8b3],
					[left, 182, 227, 0xccaadd],
					[left, 251, 364, 0xc9bb97],
					[center, 431, 155, 0xe1d6b3],
					[center, 716, 176, 0xe8e0bf],
					[right, 1090, 155, 0xe7dcaf],
					[right, 1177, 603, 0x231b1c],
				],
			],
			oper: [
				[left, 1280, 720, 108, 256, 293, 364, 1200], // 点击神龙
				[center, 1280, 720, 407, 175, 592, 283, 1200], // 点击孔雀
				[center, 1280, 720, 709, 251, 890, 339, 1200], //  点击白藏主
				[right, 1280, 720, 1028, 224, 1210, 340, 1200], //  点击黑豹
			],
		},
		{
			//	检测_暗域第三人称主页
			desc: [
				1280,
				720,
				[
					[right, 1240, 301, 0xcebd9b],
					[right, 1222, 483, 0xdfd1b6],
					[left, 157, 49, 0xd4ae83],
					[left, 224, 63, 0xcca174],
					[center, 883, 27, 0xf99049],
				],
			],
			oper: [
				[right, 1280, 720, 1202, 374, 1245, 411, 1200], //	点击战报
			],
		},
		{
			//  检测_怪物分布页
			desc: [
				1280,
				720,
				[
					[left, 285, 120, 0xd7c7b1],
					[left, 192, 113, 0xe6e2db],
					[right, 1123, 135, 0xb9ac9e],
					[left, 222, 650, 0xc6bdb1],
					[center, 653, 157, 0xea6209],
					[center, 819, 295, 0xf1cb7d],
					[center, 507, 297, 0xf1cc7c],
				],
			],
			oper: [
				[center, 1280, 720, 686, 153, 751, 215, 1200], //  首领
				[center, 1280, 720, 534, 298, 601, 360, 1200], //  副将1
				[center, 1280, 720, 846, 303, 917, 361, 1200], //  副将2
				[center, 1280, 720, 450, 420, 509, 481, 1200], //  精英1
				[center, 1280, 720, 688, 420, 754, 481, 1200], //  精英2
				[center, 1280, 720, 934, 420, 999, 481, 1200], //  精英3
				[left, 1280, 720, 128, 147, 194, 210, 1200], //  神龙暗域
				[left, 1280, 720, 126, 281, 195, 345, 1200], //  孔雀暗域
				[left, 1280, 720, 129, 414, 198, 479, 1200], //  白藏主暗域
				[left, 1280, 720, 128, 553, 200, 612, 1200], //  黑豹暗域
			],
		},
		{
			//  检测_所有暗域已被封印
			desc: [
				1280,
				720,
				[
					[left, 285, 120, 0xd7c7b1],
					[left, 192, 113, 0xe6e2db],
					[right, 1123, 135, 0xb9ac9e],
					[left, 222, 650, 0xc6bdb1],
					[center, 653, 157, 0xea6209],
					[center, 819, 295, 0xf1cb7d],
					[center, 507, 297, 0xf1cc7c],
					[left, 150, 187, 0xfffcd6],
					[left, 152, 321, 0xfffbd4],
					[left, 154, 453, 0xfffcd5],
					[left, 156, 585, 0xfffcd5],
				],
			],
			oper: [
				[right, 1280, 720, 1146, 90, 1188, 123, 1200], // 点击关闭
			],
		},
		{
			//  获取奖励弹窗
			desc: [
				1280,
				720,
				[
					[center, 523, 198, 0xe0cc88],
					[center, 358, 202, 0x38281c],
					[center, 922, 208, 0x38281c],
					[center, 919, 465, 0x8e6a41],
					[center, 365, 445, 0x8f6941],
					[center, 860, 257, 0xbea68d],
				],
			],
			oper: [
				[center, 1280, 720, 498, 527, 885, 632, 1200], //  点击_掩盖层
			],
		},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['514'];

		if (
			thisScript.oper({
				name: '检测_选择暗域页面未封印',
				operator: [
					{
						desc: thisOperator[0].desc,
					},
				],
			})
		) {
			if (thisconf && thisconf.boss_order === '从小到大') {
				thisScript.global.narrow_state = {
					'0_3': false,
					'0_4': false,
					'0_5': false,
					'3_3': false,
					'3_4': false,
					'3_5': false,
					'2_1': false,
					'2_2': false,
					'0_1': false,
					'0_2': false,
					'1_0': false,
					'2_0': false,
				};
			} else {
				thisScript.global.narrow_state = {
					'1_0': false,
					'2_0': false,
					'2_1': false,
					'2_2': false,
					'0_1': false,
					'0_2': false,
					'0_3': false,
					'0_4': false,
					'0_5': false,
					'3_3': false,
					'3_4': false,
					'3_5': false,
				};
			}

			return thisScript.oper({
				name: '点击_神龙暗域',
				operator: [
					{
						oper: [thisOperator[0].oper[1]],
					},
				],
			});
		}

		if (
			thisScript.oper({
				name: '检测_暗域第三人称主页',
				operator: [{ desc: thisOperator[1].desc }],
			})
		) {
			return thisScript.oper({
				name: '点击战报',
				operator: [{ oper: thisOperator[1].oper }],
			});
		}

		if (
			thisScript.oper({
				name: '检测_怪物分布页',
				operator: [
					{
						desc: thisOperator[2].desc,
					},
				],
			})
		) {
			const point = thisScript.findMultiColor('狭间暗域_怪物分布奖励');

			if (point) {
				console.log('怪物分布奖励获取成功');
				const oper = [
					[point.x - 10, point.y - 10, point.x + 10, point.y + 10, 120],
				];
				thisScript.regionClick(oper);
				return true;
			}

			if (
				thisScript.oper({
					name: '检测_所有暗域已被封印',
					operator: [
						{
							desc: thisOperator[3].desc,
						},
					],
				})
			) {
				thisScript.oper({
					name: '关闭战报弹窗',
					operator: [
						{
							oper: thisOperator[3].oper,
						},
					],
				});

				if (
					thisScript.runtimeParams &&
					thisScript.runtimeParams.liao_activity_state
				) {
					thisScript.runtimeParams.liao_activity_state['narrow'] = true;

					const next_scheme = '返回庭院';
					thisScript.rerun(next_scheme, {
						next_scheme_name: '庭院进入寮每日活动',
						liao_activity_state: thisScript.runtimeParams.liao_activity_state,
					});
				} else {
					const next_scheme = '返回庭院';
					thisScript.rerun(next_scheme);
				}
			}

			let currentState = '';

			Object.keys(thisScript.global.narrow_state).findIndex((key) => {
				if (!thisScript.global.narrow_state[key]) {
					console.log('当前挑战阶段为:', key);
					currentState = key;
					return true;
				}
				return false;
			});

			if (currentState) {
				console.log('当前狭间状态:', thisScript.global.narrow_state);

				const map = currentState.split('_');
				const area = map[0];
				const monster = map[1];

				thisScript.oper({
					name: '点击暗域',
					operator: [
						{
							oper: [thisOperator[2].oper[Number.parseInt(area, 10) + 6]],
						},
					],
				});

				sleep(2000);

				// 点击多次未能挑战，该boss已被挑战
				if (thisScript.global.checked_yard_count >= 3) {
					thisScript.global.checked_yard_count = 0;
					let currentState = '';

					Object.keys(thisScript.global.narrow_state).findIndex((key) => {
						if (!thisScript.global.narrow_state[key]) {
							console.log('当前挑战阶段为:', key);
							currentState = key;
							return true;
						}
						return false;
					});

					if (currentState) {
						thisScript.global.narrow_state[currentState] = true;
						return false;
					}
				} else {
					sleep(1500);
					if (!thisScript.global.checked_yard_count) {
						thisScript.global.checked_yard_count = 1;
					} else {
						thisScript.global.checked_yard_count += 1;
					}
				}

				return thisScript.oper({
					name: '点击怪物',
					operator: [
						{
							oper: [thisOperator[2].oper[Number.parseInt(monster, 10)]],
						},
					],
				});
			}
		}

		if (
			thisScript.oper({
				name: '检测_获得奖励弹窗',
				operator: [thisOperator[4]],
			})
		) {
			return true;
		}

		return false;
	}
}
