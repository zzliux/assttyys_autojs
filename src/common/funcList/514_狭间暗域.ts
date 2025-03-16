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
					name: 'boss_type',
					desc: '挑战类型',
					type: 'list',
					data: ['豹子咬', '打满时间'],
					default: '豹子咬',
					value: null,
				},
				{
					name: 'boss_order',
					desc: '挑战顺序',
					type: 'list',
					data: ['小到大', '大到小'],
					default: '小到大',
					value: null,
				},
				{
					name: 'boss_select',
					desc: '挑战区域',
					type: 'list',
					data: ['神龙孔雀', '神龙狐狸', '神龙豹子', '孔雀狐狸', '孔雀豹子', '狐狸豹子'],
					default: '神龙孔雀',
					value: null,
				}
			],
		},  {
			desc: '前往怪物的等待时间，单位为秒，根据自己设备来选择，建议设备卡的设置等待时间久一点',
			config: [{
				name: 'boss_time',
				desc: '前往怪物等待时间',
				type: 'list',
				data: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
				default: '5',
				value: null,
			}]
		}
	];
	operator: IFuncOperatorOrigin[] = [
		{
			//    检测_选择暗域页面未封印未开启=====0
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
			//	检测_暗域第三人称主页=====1
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
			//  检测_怪物分布页=====2
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
				[center, 1280, 720, 686, 153, 751, 215, 1200], //  首领0
				[center, 1280, 720, 534, 298, 601, 360, 1200], //  副将1
				[center, 1280, 720, 846, 303, 917, 361, 1200], //  副将2
				[center, 1280, 720, 450, 420, 509, 481, 1200], //  精英3
				[center, 1280, 720, 688, 420, 754, 481, 1200], //  精英4
				[center, 1280, 720, 934, 420, 999, 481, 1200], //  精英5
				[left, 1280, 720, 128, 147, 194, 210, 1200], //  神龙暗域0
				[left, 1280, 720, 126, 281, 195, 345, 1200], //  孔雀暗域1
				[left, 1280, 720, 129, 414, 198, 479, 1200], //  白藏主暗域2
				[left, 1280, 720, 128, 553, 200, 612, 1200], //  黑豹暗域3
			],
		},
		{
			//  检测_所有暗域已被封印=====3
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
			//  获取奖励弹窗=====4
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
		{
			//	开始战斗界面，豹子咬退出=====5
			desc: [
				1280,
				720,
				[
					[left, 33, 39, 0xcea67b],
					[left, 171, 179, 0xc69252],
					[left, 255, 25, 0xd3ad81],
					[right, 1144, 64, 0xdbd3c3],
					[right, 1266, 563, 0x594428]
				]
			],
			oper: [
				[left, 1280, 720, 23, 19, 50, 47, 1000]
			],
		},
		{
			// 点击退出=====6
			desc: [
				1280,
				720,
				[
					[left, 47, 30, 0x594a38],
					[center, 485, 422, 0xde6952],
					[center, 569, 438, 0xde6952],
					[center, 696, 420, 0xf4b25d],
					[center, 790, 437, 0xf4b35d]
				]
			],
			oper: [
				[center, 1280, 720, 690, 403, 792, 440, 1000],
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['514'];//	前面区域，后面小怪
		if (thisScript.global.narrow_time === 0) {// 用户自定义等待时间
			thisScript.global.narrow_time = parseInt(thisconf.boss_time as string) * 1000;
		}
		if (!thisScript.global.narrow_state) {
			if (thisconf && thisconf.boss_type  === '豹子咬') {
				thisScript.global.narrow_mode = true;
			}
		}
		if (!thisScript.global.narrow_state) {//	为空的话，这里会初始化数据
			if (thisconf && thisconf.boss_order === '小到大') {
				switch (thisconf.boss_select) {
					case '神龙孔雀': {
						thisScript.global.narrow_state = {
							'0_3': false, //	这里填写攻打顺序
							'0_4': false,
							'0_5': false,
							'1_3': false,
							'1_4': false,
							'1_5': false,
							'1_1': false,
							'1_2': false,
							'0_1': false,
							'0_2': false,
							'0_0': false,
							'1_0': false,
						}
						break;
					}
					case '神龙狐狸': {
						thisScript.global.narrow_state = {
							'0_3': false, //	这里填写攻打顺序
							'0_4': false,
							'0_5': false,
							'2_3': false,
							'2_4': false,
							'2_5': false,
							'2_1': false,
							'2_2': false,
							'0_1': false,
							'0_2': false,
							'0_0': false,
							'2_0': false,
						}
						break;
					}
					case '神龙豹子': {
						thisScript.global.narrow_state = {
							'0_3': false, //	这里填写攻打顺序
							'0_4': false,
							'0_5': false,
							'3_3': false,
							'3_4': false,
							'3_5': false,
							'3_1': false,
							'3_2': false,
							'0_1': false,
							'0_2': false,
							'0_0': false,
							'3_0': false,
						}
						break;
					}
					case '孔雀狐狸': {
						thisScript.global.narrow_state = {
							'1_3': false, //	这里填写攻打顺序
							'1_4': false,
							'1_5': false,
							'2_3': false,
							'2_4': false,
							'2_5': false,
							'2_1': false,
							'2_2': false,
							'1_1': false,
							'1_2': false,
							'1_0': false,
							'2_0': false,
						}
						break;
					}
					case '孔雀豹子': {
						thisScript.global.narrow_state = {
							'1_3': false, //	这里填写攻打顺序
							'1_4': false,
							'1_5': false,
							'3_3': false,
							'3_4': false,
							'3_5': false,
							'3_1': false,
							'3_2': false,
							'1_1': false,
							'1_2': false,
							'1_0': false,
							'3_0': false,
						}
						break;
					}
					case '狐狸豹子': {
						thisScript.global.narrow_state = {
							'2_3': false, //	这里填写攻打顺序
							'2_4': false,
							'2_5': false,
							'3_3': false,
							'3_4': false,
							'3_5': false,
							'3_1': false,
							'3_2': false,
							'2_1': false,
							'2_2': false,
							'2_0': false,
							'3_0': false,
						}
						break;
					}
				}
			} else {
				switch (thisconf.boss_select) {
					case '神龙孔雀': {
						thisScript.global.narrow_state = {
							'0_0': false,
							'1_0': false,
							'1_1': false,
							'1_2': false,
							'0_1': false,
							'0_2': false,
							'0_3': false, //	这里填写攻打顺序
							'0_4': false,
							'0_5': false,
							'1_3': false,
							'1_4': false,
							'1_5': false,
						}
						break;
					}
					case '神龙狐狸': {
						thisScript.global.narrow_state = {
							'0_0': false,
							'2_0': false,
							'2_1': false,
							'2_2': false,
							'0_1': false,
							'0_2': false,
							'0_3': false, //	这里填写攻打顺序
							'0_4': false,
							'0_5': false,
							'2_3': false,
							'2_4': false,
							'2_5': false,
						}
						break;
					}
					case '神龙豹子': {
						thisScript.global.narrow_state = {
							'0_0': false,
							'3_0': false,
							'3_1': false,
							'3_2': false,
							'0_1': false,
							'0_2': false,
							'0_3': false, //	这里填写攻打顺序
							'0_4': false,
							'0_5': false,
							'3_3': false,
							'3_4': false,
							'3_5': false,
						}
						break;
					}
					case '孔雀狐狸': {
						thisScript.global.narrow_state = {
							'1_0': false,
							'2_0': false,
							'2_1': false,
							'2_2': false,
							'1_1': false,
							'1_2': false,
							'1_3': false, //	这里填写攻打顺序
							'1_4': false,
							'1_5': false,
							'2_3': false,
							'2_4': false,
							'2_5': false,
						}
						break;
					}
					case '孔雀豹子': {
						thisScript.global.narrow_state = {
							'1_0': false,
							'3_0': false,
							'3_1': false,
							'3_2': false,
							'1_1': false,
							'1_2': false,
							'1_3': false, //	这里填写攻打顺序
							'1_4': false,
							'1_5': false,
							'3_3': false,
							'3_4': false,
							'3_5': false,
						}
						break;
					}
					case '狐狸豹子': {
						thisScript.global.narrow_state = {
							'2_0': false,
							'3_0': false,
							'3_1': false,
							'3_2': false,
							'2_1': false,
							'2_2': false,
							'2_3': false, //	这里填写攻打顺序
							'2_4': false,
							'2_5': false,
							'3_3': false,
							'3_4': false,
							'3_5': false,
						}
						break;
					}
				}
			}
		}
		if (thisScript.global.narrow_mode) {
			if (
				thisScript.oper({
					name: '检测_退出战斗_点击退出',
					operator: [thisOperator[5]],
				})
			) {
				return true;
			}
			if (
				thisScript.oper({
					name: '检测_确定退出窗口',
					operator: [
						{
							desc: thisOperator[6].desc,
						}
					]
				})
			) {
				const result = thisScript.oper({
					name: '点击确认退出',
					operator: [
						{
							oper: thisOperator[6].oper,
						},
					],
				})
				sleep(4000)// 点击确认后，等待行动条第一个行动完毕
				return result;
			}

		}
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

			const allTrue = Object.values(thisScript.global.narrow_state).every(value => value === true);// 所有怪都打完，直接返回庭院
			if (allTrue) {
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
					console.log('狭间已经打完，返回庭院');
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
				// console.log('当前狭间状态:', thisScript.global.narrow_state);

				const map = currentState.split('_');// 分割文本
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

				sleep(1500);

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
					thisScript.global.checked_yard_count += 1;
				}
				thisScript.oper({
					name: '点击怪物',
					operator: [
						{
							oper: [thisOperator[2].oper[Number.parseInt(monster, 10)]],
						},
					],
				});
				return true;
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
