import funcList from './funcListIndex';
import commonConfigArr from './commonConfig';
import { IScheme } from '@/interface/IScheme';
import { merge } from './tool';

const SchemeList: IScheme[] = [
	{
		id: 11,
		schemeName: '小功能合集',
		star: true,
		list: [0, 1, 2, 3, 17, 22, 28, 31, 302, 309, 310, 319],
	},
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
		id: 2,
		schemeName: '个人御魂',
		groupNames: ['战斗'],
		star: false,
		list: [0, 1, 2, 3, 6],
	},
	{
		id: 3,
		schemeName: '个人突破_打9退4',
		groupNames: ['战斗'],
		star: true,
		list: [51, 0, 1, 2, 3, 8, 9, 10, 29],
		config: {
			'9': {
				scheme_switch_enabled: true,
			},
			'51': {
				greenType: '自定义坐标',
				'preSearch': true
			},
		},
		commonConfig: {
			// 通用参数
			multiColorSimilar: 97,
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
			'8': {
				count: '2',
				afterCountOper: '停止脚本',
				type: '个人突破',
			},
			'9': {
				priority: '0->1->2->3->4->5',
			},
			'10': {
				type: '个人突破',
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
		id: 6,
		schemeName: '个人探索',
		groupNames: ['战斗'],
		star: true,
		list: [0, 1, 2, 3, 13, 14, 29],
		config: {
			'0': {
				next_scheme: '关闭BUFF',
			},
		},
	},
	{
		id: 8,
		schemeName: '组队探索_队长',
		groupNames: ['战斗'],
		star: false,
		list: [0, 1, 2, 3, 5, 14],
	},
	{
		id: 8,
		schemeName: '组队探索_打手',
		groupNames: ['战斗'],
		star: false,
		list: [0, 1, 2, 3, 4, 25],
	},
	{
		id: 23,
		schemeName: '悬赏',
		groupNames: ['日常'],
		star: true,
		list: [0, 1, 2, 3, 18, 29],
	},
	{
		id: 9,
		schemeName: '地鬼日常',
		groupNames: ['日常'],
		star: true,
		list: [1, 2, 16, 29],
	},
	{
		id: 10,
		schemeName: '逢魔日常',
		groupNames: ['日常'],
		star: true,
		list: [1, 2, 3, 23, 24, 26, 508, 8, 504],
		config: {
			'508': {
				switch_ji_enabled: false,
			},
		},
	},
	{
		id: 45,
		schemeName: '喂猫喂狗',
		groupNames: ['日常'],
		list: [3, 517],
	},
	{
		id: 64,
		schemeName: '每日签到与收取邮件',
		groupNames: ['日常'],
		list: [0, 2, 3, 518, 521],
		config: {
			'0': {
				jspd_enabled_longtime_nodo: true,
				jspd_times_longtime_nodo: 1,
			},
		},
	},
	{
		id: 17,
		schemeName: '斗技',
		groupNames: ['每周活动'],
		list: [0, 1, 2, 3, 30, 307],
	},
	{
		id: 22,
		schemeName: '秘闻',
		groupNames: ['每周活动'],
		list: [0, 51, 1, 2, 3, 34, 308],
		star: true,
		config: {
			'0': {
				jspd_enabled_1: true,
				jspd_times_1: 15,
			},
			'51': {
				greenType: '自定义文本',
				greenText: '绿标专用',
				preSearch: true,
			},
		},
	},
	{
		id: 69,
		schemeName: '六道椒图',
		groupNames: ['每周活动'],
		star: true,
		list: [0, 1, 316, 2, 3, 24],
	},
	{
		id: 66,
		schemeName: '契灵',
		groupNames: ['每周活动'],
		list: [510, 0, 1, 51, 2, 3, 313, 29],
		star: true,
		config: {
			'510': {
				fastMode: true
			}
		}
	},
	{
		id: 33,
		schemeName: '狩猎战',
		groupNames: ['寮活动'],
		list: [0, 1, 2, 3, 507],
	},
	{
		id: 19,
		schemeName: '道馆',
		groupNames: ['寮活动'],
		list: [0, 1, 2, 3, 32],
		star: true,
	},
	{
		id: 44,
		schemeName: '狭间暗域',
		groupNames: ['寮活动'],
		list: [0, 1, 3, 514, 515],
	},
	{
		id: 25,
		schemeName: '宴会',
		groupNames: ['寮活动'],
		star: true,
		list: [0, 3, 1000, 1001],
		config: {
			'1001': {
				change_shikigami_index: '1',
			},
		},
	},
	{
		id: 43,
		schemeName: '首领退治',
		groupNames: ['寮活动'],
		list: [0, 1, 2, 3, 512],
	},
	{
		id: 42,
		schemeName: '阴门挑战',
		groupNames: ['寮活动'],
		list: [0, 1, 2, 3, 5, 513],
	},
	{
		id: 76,
		schemeName: '僵尸寮自动攻打道馆',
		groupNames: ['寮活动'],
		list: [311, 32, 519, 505, 51, 0, 1, 2],
		config: {
			'32': {
				after_fail_operation: '再战道馆',
				exit_second: true,
			},
			'51': {
				greenType: '自定义坐标',
				preSearch: true
			},
			'311': {
				redType: '神荒',
			},
			'519': {
				defense: 1,
				coefficient: 5,
				day: true
			},
		},
	},
	{
		id: 26,
		schemeName: '关闭BUFF',
		list: [502, 1, 2, 3, 501, 29, 40],
	},
	{
		id: 29,
		schemeName: '返回庭院',
		list: [3, 503],
		config: {
			'503': {
				after_operation: '停止脚本',
				next_scheme: '通用准备退出',
				afterCountOper: '停止脚本',
			},
		},
	},
	{
		id: 30,
		schemeName: '式神寄养',
		star: true,
		groupNames: ['式神寄养'],
		list: [0, 3, 999, 998, 997, 994, 995],
		config: {
			'0': {
				jspd_times_longtime_nodo: 20,
			},
			'3': {
				type: '关闭',
			},
			'994': {
				count: '6',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
			'995': {
				maxTimeForwait: '10',
				afterCountOper: '停止脚本',
				isAutoFosterCare: true,
				next_scheme: '返回庭院',
			},
			'997': {
				priority: '太鼓6->太鼓5->太鼓4->太鼓3->斗鱼6->斗鱼5->斗鱼4',
			},
		},
	},
	{
		id: 31,
		schemeName: '定时任务-启动游戏-式神寄养',
		star: true,
		groupNames: ['式神寄养'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '式神寄养',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
			'998': {
				change_enchantment_switch: false,
				change_enchantment_type: '太鼓',
			},
		},
	},
	{
		id: 32,
		schemeName: '式神指定寄养',
		star: true,
		groupNames: ['定时任务'],
		list: [3, 999, 998, 996, 994, 995],
		config: {
			'3': {
				type: '关闭',
			},
			'994': {
				count: '3',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
			'995': {
				next_scheme: '返回庭院',
				afterCountOper: '停止脚本',
				isAutoFosterCare: true,
				maxTimeForwait: '10',
			},
			'996': {
				friendName: '老王',
			},
		},
	},
	{
		id: 36,
		schemeName: '定时任务-启动游戏-每日寮活动',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '庭院进入寮每日活动(自动)',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 40,
		schemeName: '定时任务-启动游戏-每日逢魔',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '逢魔日常',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 46,
		schemeName: '定时任务-启动游戏-喂猫喂狗',
		star: false,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '喂猫喂狗',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 51,
		schemeName: '定时任务-启动游戏-寮突',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '寮突破',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 52,
		schemeName: '定时任务-启动游戏-地鬼',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '地鬼日常',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 55,
		schemeName: '定时任务-启动游戏-庭院进入寮每日活动(包含阴门)',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '庭院进入寮每日活动(包含阴门)',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 56,
		schemeName: '定时任务-启动游戏-庭院进入寮每日活动(不包含阴门)',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '庭院进入寮每日活动(不包含阴门)',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 60,
		schemeName: '定时任务-启动游戏-悬赏',
		star: false,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '悬赏',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 65,
		schemeName: '定时任务-启动游戏-每日签到与收取邮件',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '每日签到与收取邮件',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	}, {
		id: 68,
		schemeName: '定时任务-启动游戏-庭院进入寮每日活动(狭间)',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '庭院进入寮每日活动(狭间)',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 72,
		schemeName: '经验妖怪',
		groupNames: ['日常'],
		list: [0, 50, 1, 2, 3, 35, 37, 38],
		config: {
			'37': {
				target: '经验妖怪',
				createMode: '创建队伍',
				next_scheme: '关闭BUFF',
			},
			'50': {
				ready_once_buff: true,
				buff_type: '经验',
			}
		},
	},
	{
		id: 24,
		schemeName: '金币妖怪',
		list: [0, 50, 1, 2, 3, 35, 37, 38],
		groupNames: ['日常'],
		config: {
			'37': {
				target: '金币妖怪',
				createMode: '创建队伍',
				next_scheme: '关闭BUFF',
			},
			'50': {
				ready_once_buff: true,
				buff_type: '金币',
			}
		},
	},
	{
		id: 12,
		schemeName: '妖气封印',
		groupNames: ['战斗'],
		list: [0, 1, 2, 3, 5, 27],
	},
	{
		id: 74,
		schemeName: '定时任务-启动游戏-金币妖怪',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '金币妖怪',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 75,
		schemeName: '定时任务-启动游戏-经验妖怪',
		star: true,
		groupNames: ['定时任务'],
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '经验妖怪',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	}, {
		id: 78,
		schemeName: '每周资源领取',
		groupNames: ['每周活动'],
		list: [0, 24, 1100, 1101, 1102, 503],
		config: {
			0: {
				jspd_times_longtime_nodo: '1',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			}
		}
	}, {
		id: 102,
		schemeName: '每周真蛇',
		groupNames: ['每周活动'],
		list: [993, 509, 510, 1106, 0, 1, 2, 3, 53, 6, 503, 29],
		config: {
			'503': { afterCountOper: '不进行任何操作' },
			'510': { fastMode: true },
			'993': { scheme_switch_enabled: false },
			'1106': { switch_group: '1', switch_default: '1' }
		}
	},
	{
		id: 49,
		schemeName: '绘卷进度_检测并提醒',
		groupNames: ['罕见活动'],
		list: [0, 304],
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
		list: [0, 3, 24, 99, 100],
	}, {
		id: 101,
		schemeName: '对弈竞猜',
		groupNames: ['罕见活动'],
		list: [0, 2, 401],
		config: {
			'0': {
				jspd_times_longtime_nodo: '1',
			}
		}
	}, {
		id: 78,
		schemeName: '清自己1-4星鬼王',
		groupNames: ['罕见活动'],
		list: [0, 1, 2, 3, 24, 317],
	}, {
		// [{"schemeName":"123","star":true,"list":[3,500,505,516],"groupNames":["未分组"],"config":{"500":{"a_ctivity_gateOfHades":true,"a_ctivity_dojo":true,"a_ctivity_hunt":true,"a_ctivity_narrow":true,"a_ctivity_banquet":true,"a_ctivity_huntBoss":true}}}]
		id: 102,
		schemeName: '进入寮活动New',
		groupNames: ['寮活动'],
		list: [3, 500, 505, 516],
		config: {
			'500': {
				a_ctivity_gateOfHades: true,
				a_ctivity_dojo: true,
				a_ctivity_hunt: true,
				a_ctivity_narrow: true,
				a_ctivity_banquet: true,
				a_ctivity_huntBoss: true,
			}
		}
	},
	{
		id: 34,
		schemeName: '庭院进入寮每日活动(自动)',
		groupNames: ['寮活动'],
		list: [3, 505, 506, 516],
		config: {
			'506': {
				auto_switch_enabled: true,
				gateOfHades_switch: false,
			},
			'516': {
				count: '10',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
		},
	},
	{
		id: 53,
		schemeName: '庭院进入寮每日活动(包含阴门)',
		groupNames: ['寮活动'],
		list: [3, 505, 506, 516],
		config: {
			'506': {
				auto_switch_enabled: false,
				gateOfHades_switch: true,
				huntBoss_switch: false,
			},
			'516': {
				count: '10',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
		},
	},
	{
		id: 54,
		schemeName: '庭院进入寮每日活动(不包含阴门)',
		groupNames: ['寮活动'],
		list: [3, 505, 506, 516],
		config: {
			'506': {
				auto_switch_enabled: false,
				gateOfHades_switch: false,
				huntBoss_switch: true,
			},
			'516': {
				count: '10',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
		},
	}, {
		id: 67,
		schemeName: '庭院进入寮每日活动(狭间)',
		groupNames: ['寮活动'],
		list: [3, 505, 506, 516],
		config: {
			'506': {
				gateOfHades_switch: false,
				huntBoss_switch: false,
			},
			'516': {
				count: '2',
				afterCountOper: '不做任何操作',
				next_scheme: '通用准备退出',
			},
		},
	},
	{
		id: 63,
		schemeName: '重启模拟器',
		list: [991],
	},
	// , {
	// 	id: 102,
	// 	schemeName: '定时任务-启动游戏-对弈竞猜',
	// 	star: true,
	// 	groupNames: ['定时任务'],
	// 	list: [1, 2, 3, 503, 993],
	// 	config: {
	// 		'993': {
	// 			area: '',
	// 			is_shutdown_the_game_before: true,
	// 			next_scheme: '对弈竞猜',
	// 		},
	// 		'503': {
	// 			afterCountOper: '不进行任何操作',
	// 		},
	// 	},
	// }, {
	// 	id: 101,
	// 	schemeName: '对弈竞猜',
	// 	list: [0, 2, 401],
	// 	config: {
	// 		'0': {
	// 			jspd_times_longtime_nodo: '1',
	// 		}
	// 	},
	// }
	//
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