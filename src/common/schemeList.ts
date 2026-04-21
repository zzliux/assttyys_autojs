import funcList from './funcListIndex';
import commonConfigArr from './commonConfig';
import { IScheme } from '@/interface/IScheme';
import { merge } from './tool';

const SchemeList: IScheme[] = [
	// ========== 未分组 ==========
	{
		id: 11,
		schemeName: '小功能合集',
		star: true,
		list: [0, 1, 2, 3, 17, 22, 28, 31, 302, 309, 310, 319],
	},
	{
		id: 26,
		schemeName: '关闭BUFF',
		list: [502, 0, 1, 2, 3, 501, 29, 40],
	},
	{
		id: 29,
		schemeName: '返回庭院',
		list: [0, 1, 2, 3, 24, 503],
		config: {
			'0': {
				jspd_enabled_longtime_nodo: true,
				jspd_times_longtime_nodo: 1,
			},
		},
	},
	{
		id: 62,
		schemeName: '通用准备退出',
		star: true,
		list: [0, 1, 2, 3, 24],
	},
	// ========== 战斗 ==========
	{
		id: 62,
		schemeName: '通用活动',
		groupNames: ['战斗'],
		star: true,
		list: [0, 1, 2, 3, 312],
	},
	{
		id: 3,
		schemeName: '组队司机',
		groupNames: ['战斗'],
		star: true,
		list: [0, 1, 2, 3, 5],
	},
	{
		id: 2,
		schemeName: '组队乘客',
		groupNames: ['战斗'],
		star: true,
		list: [0, 1, 2, 3, 4],
	},
	{
		id: 3,
		schemeName: '个人突破_打9退4',
		groupNames: ['战斗'],
		star: true,
		list: [690, 51, 0, 1, 2, 3, 7, 8, 9, 10, 29, 503],
		config: {
			'7': {
				switch_nineWin: true,
			},
			'9': {
				scheme_switch_enabled: true,
			},
			'51': {
				greenType: '自定义坐标',
				'preSearch': true,
			},
		},
	},
	{
		id: 4,
		schemeName: '个人突破_降级',
		groupNames: ['战斗'],
		list: [0, 1, 2, 3, 8, 9, 10, 11],
		config: {
			'0': {
				jspd_enabled_1: true,
				jspd_times_1: 27,
			},
			'1': {
				exitBeforeReady: true,
			},
		},
	},
	{
		id: 5,
		schemeName: '寮突破',
		groupNames: ['战斗'],
		star: true,
		list: [0, 1, 2, 3, 8, 9, 10, 12, 29],
		config: {
			'8': {
				type: '寮突破',
			},
			'10': {
				type: '寮突破',
			},
		},
	},
	{
		id: 2,
		schemeName: '个人御魂',
		groupNames: ['战斗'],
		star: false,
		list: [0, 1, 2, 3, 6],
	},
	{
		id: 6,
		schemeName: '个人探索',
		groupNames: ['战斗'],
		star: true,
		list: [0, 1, 2, 3, 13, 14, 29],
	},
	{
		id: 12,
		schemeName: '妖气封印',
		groupNames: ['战斗'],
		list: [0, 1, 2, 3, 5, 27],
	},
	// ========== 日常 ==========
	{
		id: 23,
		schemeName: '寄养',
		groupNames: ['日常'],
		star: true,
		list: [690, 0, 1, 2, 3, 700, 702, 503],
	}, {
		id: 23,
		schemeName: '结界卡',
		groupNames: ['日常'],
		star: true,
		list: [690, 0, 1, 2, 3, 700, 701, 503],
	},
	{
		id: 23,
		schemeName: '悬赏',
		groupNames: ['日常'],
		star: true,
		list: [690, 0, 1, 2, 3, 18, 29, 503],
	},
	{
		id: 9,
		schemeName: '地鬼日常',
		groupNames: ['日常'],
		star: true,
		list: [690, 0, 1, 2, 3, 16, 29, 503],
		config: {
			'16': {
				next_scheme: '逢魔日常'
			}
		}
	},
	{
		id: 10,
		schemeName: '逢魔日常',
		groupNames: ['日常'],
		star: true,
		list: [1, 2, 3, 23, 24, 26, 508, 8, 504],
		config: {
			'508': {
				next_scheme: '每日签到与收取邮件',
			},
		},
	},
	{
		id: 64,
		schemeName: '每日签到与收取邮件',
		groupNames: ['日常'],
		list: [0, 1, 2, 3, 518, 521],
		config: {
			'0': {
				jspd_enabled_longtime_nodo: true,
				jspd_times_longtime_nodo: 1,
				after_operation: '切换方案',
				next_scheme: '喂猫喂狗'
			},
		},
	},
	{
		id: 45,
		schemeName: '喂猫喂狗',
		groupNames: ['日常'],
		list: [0, 1, 2, 3, 517],
		config: {
			'517': {
				next_scheme: '个人突破_打9退4'
			},
		},
	},
	{
		id: 72,
		schemeName: '经验妖怪',
		groupNames: ['日常'],
		list: [0, 50, 1, 2, 3, 5, 27],
		config: {
			'27': {
				mission: '经验妖怪',
			},
			'50': {
				ready_once_buff: true,
				buff_type: '经验',
			},
		},
	},
	{
		id: 24,
		schemeName: '金币妖怪',
		groupNames: ['日常'],
		list: [0, 50, 1, 2, 3, 5, 27],
		config: {
			'27': {
				mission: '金币妖怪',
			},
			'50': {
				ready_once_buff: true,
				buff_type: '金币',
			},
		},
	},
	// ========== 寮活动 ==========
	{
		id: 33,
		schemeName: '寮活动启动器',
		groupNames: ['寮活动'],
		list: [690, 0, 1, 2, 3, 505, 600, 503],
	},
	{
		id: 33,
		schemeName: '狩猎战',
		groupNames: ['寮活动'],
		list: [509, 510, 0, 1, 2, 3, 601],
	},
	{
		id: 19,
		schemeName: '道馆',
		groupNames: ['寮活动'],
		list: [509, 510, 0, 1, 2, 3, 602],
		star: true,
	},
	{
		id: 44,
		schemeName: '狭间暗域',
		groupNames: ['寮活动'],
		list: [318, 311, 315, 510, 0, 1, 2, 3, 603],
	},
	{
		id: 25,
		schemeName: '宴会',
		groupNames: ['寮活动'],
		star: true,
		list: [0, 1, 2, 3, 605, 503],
	},
	{
		id: 43,
		schemeName: '首领退治',
		groupNames: ['寮活动'],
		list: [509, 510, 0, 1, 2, 3, 604],
	},
	{
		id: 42,
		schemeName: '阴门挑战',
		groupNames: ['寮活动'],
		list: [509, 510, 0, 1, 2, 3, 5, 606],
	},
	{
		id: 76,
		schemeName: '僵尸寮自动攻打道馆',
		groupNames: ['寮活动'],
		list: [509, 510, 311, 519, 505, 51, 0, 1, 2, 3, 602],
		config: {
			'51': {
				greenType: '自定义坐标',
				preSearch: true,
			},
			'311': {
				redType: '神荒',
			},
			'602': {
				after_fail_operation: '再战道馆',
				exit_second: true,
			},
		},
	},
	// ========== 每周活动 ==========
	{
		id: 17,
		schemeName: '斗技',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 0, 1, 2, 3, 30, 307, 503],
	},
	{
		id: 22,
		schemeName: '秘闻前五层',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 315, 0, 50, 1, 2, 3, 34, 308, 29, 503],
		star: true,
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 5,
				after_operation: '切换方案',
				next_scheme: '秘闻后五层'
			},
			'50': {
				buff_type: '金币',
				ready_once_buff: true
			}
		},
	},
	{
		id: 22,
		schemeName: '秘闻后五层',
		groupNames: ['每周活动'],
		list: [509, 510, 315, 0, 40, 1, 2, 3, 34, 308],
		star: true,
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 5,
				after_operation: '切换方案',
				next_scheme: '返回庭院'
			},
			'40': {
				ready_once_buff: true
			}
		},
	},
	{
		id: 69,
		schemeName: '六道椒图',
		groupNames: ['每周活动'],
		star: true,
		list: [690, 509, 510, 0, 1, 316, 2, 3, 24, 29, 503],
		config: {
			'316': {
				overTimes: '2'
			}
		}
	},
	{
		id: 102,
		schemeName: '每周真蛇_队长',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 1106, 0, 1, 2, 3, 306, 5, 1106, 6, 53, 29, 503],
	},
	{
		id: 102,
		schemeName: '每周真蛇_队员',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 0, 1, 2, 3, 4, 24, 1106, 503],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 2,
			},
		}
	},
	{
		id: 66,
		schemeName: '契灵_单人',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 0, 1, 2, 3, 313, 29],
		star: true,
	},
	{
		id: 66,
		schemeName: '契灵_队长',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 0, 1, 2, 3, 306, 5, 313, 29],
		config: {
			'313': {
				team: '队长'
			},
			'503': {
				oper_35: false
			}
		}
	},
	{
		id: 66,
		schemeName: '契灵_队员',
		groupNames: ['每周活动'],
		list: [690, 509, 510, 0, 1, 2, 3, 4, 313, 29],
		config: {
			'313': {
				team: '队员'
			}
		}
	},
	{
		id: 78,
		schemeName: '周三神秘商人',
		groupNames: ['每周活动'],
		list: [690, 0, 1, 2, 3, 24, 1110, 503],
		config: {
			0: {
				jspd_times_longtime_nodo: '1',
			},
		},
	},
	{
		id: 78,
		schemeName: '百鬼棋局',
		groupNames: ['每周活动'],
		list: [0, 1, 2, 3, 24, 320],
		config: {
			0: {
				jspd_times_longtime_nodo: '5',
			},
		},
	},
	{
		id: 78,
		schemeName: '每周资源领取',
		groupNames: ['每周活动'],
		list: [690, 0, 1, 2, 3, 24, 1100, 1101, 1102, 1103, 1104, 1105, 1107, 1108, 1109, 1111, 503],
		config: {
			0: {
				jspd_times_longtime_nodo: '1',
			},
		},
	},
	// ========== 罕见活动 ==========
	{
		id: 49,
		schemeName: '绘卷进度_检测并提醒',
		groupNames: ['罕见活动'],
		list: [0, 2, 3, 304],
		star: true,
	},
	{
		id: 39,
		schemeName: '夜行荒河',
		groupNames: ['罕见活动'],
		list: [2, 3, 220, 221],
	},
	{
		id: 99,
		schemeName: '伊吹之擂',
		groupNames: ['罕见活动'],
		list: [0, 3, 24, 99],
	},
	{
		id: 101,
		schemeName: '对弈竞猜',
		groupNames: ['罕见活动'],
		list: [0, 2, 3, 401],
		config: {
			'0': {
				jspd_times_longtime_nodo: '1',
			},
		},
	},
	{
		id: 78,
		schemeName: '清自己1-4星鬼王',
		groupNames: ['罕见活动'],
		list: [0, 1, 2, 3, 24, 317],
	},
	// ========== 循环任务 ==========
	{
		id: 111,
		schemeName: '循环_魂十队长',
		star: true,
		hidden: true,
		list: [690, 509, 510, 0, 1, 2, 3, 5, 27, 306, 503],
		groupNames: ['循环任务'],
		config: {
			'0': {
				'jspd_enabled_2': true,
				'jspd_times_2': '80',
				'after_operation': '切换方案',
				'next_scheme': '循环_突破打9退4'
			},
			'27': { 'level': '魂十' },
			'503': { 'oper_26': false },
		}
	},
	{
		id: 111,
		schemeName: '循环_御魂队员',
		star: true,
		list: [690, 50, 0, 1, 2, 3, 4, 503],
		groupNames: ['循环任务'],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: '80',
				after_operation: '切换方案',
				next_scheme: '循环_突破打9退4'
			},
			'50': {
				buff_type: '御魂',
				ready_once_buff: true
			},
			'503': {
				'oper_26': false
			},
		}
	},
	{
		id: 111,
		schemeName: '循环_探索队长',
		star: true,
		hidden: true,
		list: [690, 509, 510, 0, 1, 2, 3, 5, 27, 306, 25, 14, 503],
		groupNames: ['循环任务'],
		config: {
			'0': {
				'jspd_enabled_2': true,
				'jspd_times_2': '80',
				'after_operation': '切换方案',
				'next_scheme': '循环_突破打9退4'
			},
			'27': { 'level': '探索（困难）' },
			'503': { 'oper_26': false, 'oper_27': false },
		}
	},
	{
		id: 111,
		schemeName: '循环_探索队员',
		star: true,
		list: [690, 50, 0, 1, 2, 3, 4, 25, 503],
		groupNames: ['循环任务'],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: '80',
				after_operation: '切换方案',
				next_scheme: '循环_突破打9退4'
			},
			'50': {
				buff_type: '经验',
				ready_once_buff: true
			},
			'503': {
				'oper_26': false,
				'oper_27': false
			},
		}
	},
	{
		id: 3,
		schemeName: '循环_突破打9退4',
		groupNames: ['循环任务'],
		star: true,
		list: [690, 51, 0, 1, 2, 3, 7, 8, 9, 10, 29, 503],
		config: {
			'7': {
				switch_nineWin: true,
			},
			'8': {
				inv: true,
				designated_scheme: '循环',
			},
			'9': {
				scheme_switch_enabled: true,
			},
			'51': {
				greenType: '自定义坐标',
				'preSearch': true,
			},
		},
	},
	// ========== 小号部分 ==========
	{
		id: 111,
		schemeName: '僵尸寮日常任务',
		star: true,
		list: [0, 1, 2, 3, 24, 609, 690, 503],
		groupNames: ['小号部分'],
		hidden: true,
		config: {
			'0': {
				jspd_times_longtime_nodo: '1',
			},
			'609': {
				next_scheme: '__关闭应用__'
			},
			'690': {
				scheme_switch_enabled: true,
				next_scheme: '__不做动作__'
			}
		}
	},
	{
		id: 79,
		schemeName: '协战十五',
		groupNames: ['小号部分'],
		list: [690, 694, 0, 1, 2, 3, 6, 53, 29, 503],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 15,
				stop_with_launched_app_exit: true,
			},
			'53': { challenge_type: '觉醒-火麒麟' },
		},
	},
	// ========== 师徒部分 ==========
	{
		id: 79,
		schemeName: '师徒_师傅战斗',
		groupNames: ['师徒部分'],
		hidden: true,
		list: [690, 510, 0, 1, 2, 3, 693, 503],
		config: {
			'0': {
				stop_with_launched_app_exit: true,
			}
		},
	},
	{
		id: 79,
		schemeName: '师徒_徒弟登录',
		groupNames: ['师徒部分'],
		list: [690, 0, 1, 2, 3, 5, 24, 691, 503],
		config: {
			'691': {
				next_scheme: '师徒_徒弟领体力',
			},
			'690': {
				area: '徒弟',
				name: '',
			}
		},
	},
	{
		id: 79,
		schemeName: '师徒_徒弟领体力',
		groupNames: ['师徒部分'],
		list: [690, 0, 1, 2, 3, 518, 503],
		config: {
			'0': {
				jspd_times_longtime_nodo: '0.5',
				after_operation: '切换方案',
				next_scheme: '师徒_徒弟金币'
			}
		},
	},
	{
		id: 79,
		schemeName: '师徒_徒弟金币',
		groupNames: ['师徒部分'],
		list: [0, 1, 2, 3, 27, 306, 5],
		config: {
			'27': {
				mission: '金币妖怪',
				next_scheme: '师徒_徒弟经验'
			}
		},
	},
	{
		id: 79,
		schemeName: '师徒_徒弟经验',
		groupNames: ['师徒部分'],
		list: [0, 1, 2, 3, 27, 306, 5],
		config: {
			'27': {
				mission: '经验妖怪',
				next_scheme: '师徒_徒弟石距'
			}
		},
	}, {
		id: 79,
		schemeName: '师徒_徒弟石距',
		groupNames: ['师徒部分'],
		list: [0, 1, 2, 3, 27, 306, 5],
		config: {
			'27': {
				mission: '石距',
				next_scheme: '师徒_徒弟协战'
			}
		},
	}, {
		id: 79,
		schemeName: '师徒_徒弟协战',
		groupNames: ['师徒部分'],
		list: [690, 694, 0, 1, 2, 3, 53, 6, 29, 503],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 15,
				after_operation: '切换方案',
				next_scheme: '师徒_徒弟守护'
			},
			'6': {
				next_scheme: '师徒_徒弟守护'
			}
		},
	},
	{
		id: 79,
		schemeName: '师徒_徒弟守护',
		groupNames: ['师徒部分'],
		list: [690, 0, 1, 2, 3, 5, 692, 29, 503],
		config: {
			'692': {
				next_scheme: '__关闭应用__'
			}
		},
	},
	// 完整demo
	// , {
	//     id: 2,
	//     schemeName: '组队队长',
	//     star: false,
	//     list: [0, ], // funcList中的id集合
	//     config: { // 方案中的配置，如返回空的话使用默认配置
	//         '1': { // key为功能的ID（1表示准备）
	//             enabled: false,
	//             position: '五人-左1'
	//         }
	//     },
	//     commonConfig: { // 通用参数
	//         clickDelay: 200, // 点击后固定延时
	//         clickDelayRandom: 1000, // 点击后延时随机数
	//         // 等
	//     }
	// }
];

const commonConfig = {};
for (let i = 0; i < commonConfigArr.length; i++) {
	for (let j = 0; j < commonConfigArr[i].config.length; j++) {
		const item = commonConfigArr[i].config[j];
		commonConfig[item.name] = item.default;
	}
}
const allConfig = {};
for (let i = 0; i < funcList.length; i++) {
	const configs = funcList[i].config;
	if (configs) {
		allConfig[funcList[i].id] = {};
		for (const config of configs) {
			config.config.forEach((item) => {
				allConfig[funcList[i].id][item.name] = item.default;
			});
		}
	}
}

// 内置方案列表
const innerSchemeListName = {};

SchemeList.forEach((item, id) => {
	innerSchemeListName[item.schemeName] = true;
	const thisConfig = {};
	item.list.forEach((funcId) => {
		if (allConfig[funcId]) {
			thisConfig[funcId] = allConfig[funcId];
		}
	});
	SchemeList[id] = merge(
		{},
		{
			id: id + 1,
			schemeName: '未命名',
			inner: true,
			star: false,
			list: [],
			config: thisConfig,
			commonConfig: commonConfig,
		},
		item
	);
});

export const schemeNameMap = innerSchemeListName;
export default SchemeList;
export type GroupSchemeName = {
	groupName: string,
	hidden: boolean,
	schemeNames: string[]
}