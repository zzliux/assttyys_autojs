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

export class Func603 implements IFuncOrigin {
	id = 603;
	name = '狭间暗域';
	config = [
		{
			desc: '',
			config: [{
				name: 'boss_order',
				desc: '挑战顺序',
				type: 'list',
				data: ['小到大', '大到小'],
				default: '小到大',
				value: null,
			}, {
				name: 'boss_select',
				desc: '挑战区域',
				type: 'lists',
				data: ['神龙', '孔雀', '狐狸', '豹子'],
				default: ['孔雀', '狐狸'],
			}, {
				name: 'sneak',
				desc: '蛇',
				type: 'number',
				default: '10',
			}],
		},
		{
			desc: '用于战斗前进入式神录进行御魂装配和战斗上预设阵容，需启用315和510功能，逗号分隔，0,0表示不切换预设，5,1表示第5个分组第1组预设',
			config: [{
				name: 'preset_pair_小蛇',
				desc: '小蛇',
				type: 'text',
				default: '0,0',
			}, {
				name: 'preset_pair_精英',
				desc: '精英',
				type: 'text',
				default: '0,0',
			}, {
				name: 'preset_pair_副将',
				desc: '副将',
				type: 'text',
				default: '0,0',
			}, {
				name: 'preset_pair_首领',
				desc: '首领',
				type: 'text',
				default: '0,0',
			}],
		}
	];
	operator: IFuncOperatorOrigin[] = [{ // 0 检测_寮进入狭间
		desc: [1280, 720,
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
	}, { // 1 进入战报
		desc: [1280, 720,
			[
				[right, 1221, 369, 0x3d455e],
				[right, 1224, 391, 0xd3bd9c],
				[right, 1233, 391, 0xc7bb9e],
				[right, 1244, 405, 0x454d67],
				[right, 1199, 399, 0x3e485e],
				[right, 1204, 419, 0xfdf7cf],
			]
		],
		oper: [
			[center, 1280, 720, 1205, 376, 1239, 418, 1000],
		]
	}, { // 2 前往
		desc: [1280, 720,
			[
				[right, 1113, 593, 0x4d2c37],
				[right, 1159, 605, 0xdbc6c9],
				[right, 1202, 596, 0x502f3c],
				[right, 1120, 672, 0x381f28],
				[right, 1158, 661, 0xdbc6ca],
				[right, 1195, 670, 0x321823],
			]
		],
		oper: [
			[center, 1280, 720, 1124, 598, 1196, 657, 700],
		]
	}, { // 3 战报页内
		desc: [1280, 720,
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
			[center, 1280, 720, 686, 153, 751, 215, 700], //  首领0
			[center, 1280, 720, 534, 298, 601, 360, 700], //  副将1
			[center, 1280, 720, 846, 303, 917, 361, 700], //  副将2
			[center, 1280, 720, 450, 420, 509, 481, 700], //  精英3
			[center, 1280, 720, 688, 420, 754, 481, 700], //  精英4
			[center, 1280, 720, 934, 420, 999, 481, 700], //  精英5
			[left, 1280, 720, 128, 147, 194, 210, 700], //  神龙暗域0
			[left, 1280, 720, 126, 281, 195, 345, 700], //  孔雀暗域1
			[left, 1280, 720, 129, 414, 198, 479, 700], //  白藏主暗域2
			[left, 1280, 720, 128, 553, 200, 612, 700], //  黑豹暗域3
		],
	}, { // 4 小蛇
		desc: [1280, 720,
			[
				[center, 519, 554, 0xbec3d8],
				[center, 482, 576, 0xc0bfe4],
				[center, 476, 593, 0xcec9cf],
				[center, 473, 608, 0xd0ccd4],
				[center, 482, 603, 0xbfbad4],
				[center, 522, 603, 0x171515],
			]
		],
		oper: [
			[center, 1280, 720, 472, 557, 536, 610, 500],
		]
	}, { // 5 式神录
		desc: [1280, 720,
			[
				[right, 1197, 483, 0x3a435b],
				[right, 1223, 484, 0xdfd2b8],
				[right, 1236, 477, 0x404860],
				[right, 1223, 468, 0x3c445c],
				[right, 1238, 497, 0xc5b08c],
				[right, 1211, 498, 0xc8bb94],
			]
		],
		oper: [
			[center, 1280, 720, 1203, 471, 1247, 509, 1500],
		]
	}, { // 6 战报页内_退出
		desc: [1280, 720,
			[
				[left, 285, 120, 0xd7c7b1],
				[left, 192, 113, 0xe6e2db],
				[right, 1123, 135, 0xb9ac9e],
				[left, 222, 650, 0xc6bdb1],
				[center, 653, 157, 0xea6209],
				[center, 819, 295, 0xf1cb7d],
				[center, 507, 297, 0xf1cc7c],
			]
		],
		oper: [
			[center, 1280, 720, 1149, 100, 1186, 124, 1000],
		]
	}, { // 7 集结中
		desc: [1280, 720,
			[
				[center, 597, 72, 0xe5e1d2],
				[center, 601, 80, 0xf3eedc],
				[center, 631, 73, 0xf3eedd],
				[center, 630, 81, 0xebe7d7],
				[center, 616, 75, 0xdedacd],
			]
		],
	}, { // 8 战报页覆盖了挑战界面
		desc: [1280, 720,
			[
				[right, 1196, 591, 0x150c10],
				[right, 1199, 622, 0x353031],
				[right, 1201, 635, 0x363132],
				[right, 1198, 665, 0x0d0709],
				[right, 1230, 549, 0x210e0a],
				[right, 1239, 549, 0x210e09],
			]
		],
		oper: [
			[center, 1280, 720, 1151, 94, 1186, 122, 1000],
		]
	}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['603'];
		if (!thisScript.global.xiaJian) {
			thisScript.global.xiaJian = {
				'huanYuHun': false,
				'fenZu': 0,
				'zhenRong': 0,
			};
		}
		// 记录当前2功能已运行次数
		if (thisScript.global.runTime_2 === null) {
			if (!thisScript.runTimes['2']) {
				thisScript.runTimes['2'] = 0
			}
			thisScript.global.runTime_2 = thisScript.runTimes['2'];
		}
		// 获取狭间首领参数
		let boss_select_one;
		let boss_select_two;
		switch (thisconf.boss_select[0]) {
			case '神龙':
				boss_select_one = 0;
				break;
			case '孔雀':
				boss_select_one = 1;
				break;
			case '狐狸':
				boss_select_one = 2;
				break;
			case '豹子':
				boss_select_one = 3;
				break;
			default:
				console.log('设置错误');
				break;
		}
		switch (thisconf.boss_select[1]) {
			case '神龙':
				boss_select_two = 0;
				break;
			case '孔雀':
				boss_select_two = 1;
				break;
			case '狐狸':
				boss_select_two = 2;
				break;
			case '豹子':
				boss_select_two = 3;
				break;
			default:
				console.log('设置错误');
				break;
		}
		// 记录为数组
		let sort_0 = null;
		if (thisconf.boss_order === '小到大') {
			sort_0 = [boss_select_one, boss_select_one, boss_select_one, boss_select_two, boss_select_two, boss_select_two,
				boss_select_two, boss_select_two, boss_select_one, boss_select_one,
				boss_select_one, boss_select_two]
		} else {
			sort_0 = [boss_select_one, boss_select_two,
				boss_select_two, boss_select_two, boss_select_one, boss_select_one,
				boss_select_one, boss_select_one, boss_select_one, boss_select_two, boss_select_two, boss_select_two]
		}
		let sort_1 = null;
		if (thisconf.boss_order === '小到大') {
			sort_1 = ['3', '4', '5', '3', '4', '5', '2', '1', '2', '1', '0', '0']
		} else {
			sort_1 = ['0', '0', '2', '1', '2', '1', '3', '4', '5', '3', '4', '5']
		}
		// Real:用结算次数获取当前已攻打第几个怪物
		const Real = thisScript.runTimes['2'] - thisScript.global.runTime_2 - (thisconf.sneak as number)
		if (Real >= 12) {
			log('已完成狭间,返回庭院')
			thisScript.rerun('返回庭院')
			return true;
		}
		// 首次进入_判断换预设御魂
		let presetStr: string | undefined
		if ((thisconf.sneak as number) > 0 && thisScript.runTimes['2'] === thisScript.global.runTime_2) {
			presetStr = thisconf['preset_pair_小蛇'] as string;
		} else {
			// 攻打固定次数换预设御魂
			const arr = thisconf.boss_order === '小到大'
				? { 0: '精英', 6: '副将', 10: '首领' }
				: { 0: '首领', 2: '副将', 6: '精英' };
			const type = arr[Real];
			if (type) {
				presetStr = thisconf[`preset_pair_${type}`] as string
			}
		}
		// 检测是否需要换御魂
		if (presetStr) {
			// 读取参数位置
			const [p, q] = presetStr.split(/[,，]/);
			thisScript.global.preset_once_groupNum = parseInt(p?.trim(), 10);
			thisScript.global.preset_once_defaultNum = parseInt(q?.trim(), 10);
			thisScript.global.preset_once_team_groupNum = parseInt(p?.trim(), 10);
			thisScript.global.preset_once_team_defaultNum = parseInt(q?.trim(), 10);
			if (thisScript.global.preset_once_groupNum > 0) {
				if (thisScript.global.preset_once_groupNum === thisScript.global.xiaJian.fenZu &&
					thisScript.global.preset_once_defaultNum === thisScript.global.xiaJian.zhenRong) {
					// 当分组和阵容都匹配时，无需更新数据，直接跳过
				} else {
					thisScript.global.xiaJian.fenZu = thisScript.global.preset_once_groupNum
					thisScript.global.xiaJian.zhenRong = thisScript.global.preset_once_defaultNum
					thisScript.global.shangyushe = true;
					thisScript.global.change_shikigami_state = 'flushed';
				}
			} else {
				thisScript.global.shangyushe = false;
				thisScript.global.change_shikigami_state = 'finish';
			}
		} else {
			thisScript.global.shangyushe = false;
			thisScript.global.change_shikigami_state = 'finish';
		}
		// 开始比色
		if (thisScript.oper({
			name: '检测_寮进入狭间',
			operator: [{ desc: thisOperator[0].desc }],
		})) {
			return thisScript.oper({
				name: '点击_第一个选项暗域',
				operator: [{ oper: [thisOperator[0].oper[boss_select_one]] }]
			});
		}
		if (!(thisScript.global.change_shikigami_state === 'finish')) {
			if (thisScript.oper({
				name: '狭间_进入式神录',
				operator: [thisOperator[5], thisOperator[6]]
			})) {
				return true;
			}
		}
		if (thisScript.oper({
			name: '集结中',
			operator: [{ desc: thisOperator[7].desc }],
		})) {
			sleep(1000);
			return true;
		}
		if (thisScript.oper({
			name: '选择攻打',
			operator: [thisOperator[1], thisOperator[2]]
		})) {
			return true;
		}
		let curCnt = 0;
		const maxCount = 3;
		while (thisScript.oper({
			name: '检测_战报页内',
			operator: [{ desc: thisOperator[3].desc }]
		})) {
			if (thisScript.oper({
				name: '卡主',
				operator: [thisOperator[8]]
			})) {
				return true;
			}
			if (thisScript.runTimes['2'] - thisScript.global.runTime_2 < (thisconf.sneak as number)) {
				if (thisScript.oper({
					name: '小蛇',
					operator: [thisOperator[4]]
				})) {
					return true;
				}
			}
			thisScript.oper({
				name: '选择进攻暗域',
				operator: [{ oper: [thisOperator[3].oper[sort_0[Real] + 6]] }]
			})
			thisScript.oper({
				name: '选择进攻暗域',
				operator: [{ oper: [thisOperator[3].oper[sort_1[Real]]] }]
			})
			log('准备攻打:' + (sort_0[Real]) + '区域,' + sort_1[Real] + '号怪')
			curCnt++;
			thisScript.keepScreen(false);
			if (curCnt >= maxCount) {
				thisScript.global.runTime_2 -= 1
				break;
			}
			sleep(500);
		}
		return false;
	}
}