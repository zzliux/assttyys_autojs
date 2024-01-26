import funcList from './funcListIndex';
import commonConfigArr from './commonConfig';
import { IScheme } from '@/interface/IScheme';
import { merge } from './tool';

const SchemeList: IScheme[] = [
	{
		id: 1,
		schemeName: '通用准备退出',
		star: true,
		list: [0, 1, 2, 3],
	},
	{
		id: 2,
		schemeName: '组队乘客',
		star: true,
		list: [0, 1, 2, 3, 4],
	},
	{
		id: 3,
		schemeName: '组队司机',
		star: true,
		list: [0, 1, 2, 3, 5],
	},
	{
		id: 4,
		schemeName: '个人御魂',
		star: false,
		list: [0, 1, 2, 3, 6],
	},
	{
		id: 5,
		schemeName: '个人突破',
		list: [0, 1, 2, 3, 7, 10, 8, 9, 11],
		config: {
			'8': {
				count: '2',
				afterCountOper: '停止脚本',
				type: '个人突破',
			},
			'10': {
				type: '个人突破',
			},
		},
	},
	{
		id: 5,
		schemeName: '个人突破_降级',
		star: true,
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
		schemeName: '个突_9退4_进攻',
		groupName: '个突9退4',
		star: true,
		list: [0, 1, 2, 3, 8, 9, 10],
		config: {
			'0': {
				scheme_switch_enabled: true,
				next_scheme: '个突_9退4_退出',
			},
			'3': { type: '关闭' },
			'8': {
				count: '2',
				afterCountOper: '停止脚本',
				type: '个人突破',
			},
			'9': {
				priority: '4->5->3->2->1->0',
				scheme_switch_enabled: true,
			},
			'10': { type: '个人突破' },
		},
		commonConfig: {
			// 通用参数
			multiColorSimilar: 97,
		},
	},
	{
		id: 5,
		schemeName: '个突_9退4_退出',
		groupName: '个突9退4',
		list: [0, 1, 2, 3, 8, 9, 10],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: '4',
				scheme_switch_enabled: true,
				next_scheme: '个突_9退4_进攻',
			},
			'1': { exitBeforeReady: true },
			'2': { rechallenge: true },
			'8': {
				count: '2',
				afterCountOper: '停止脚本',
				type: '个人突破',
			},
			'9': { priority: '0->1->2->3->4->5' },
			'10': { type: '个人突破' },
		},
		commonConfig: {
			// 通用参数
			multiColorSimilar: 97,
		},
	},
	{
		id: 6,
		schemeName: '寮突破',
		star: true,
		list: [0, 1, 2, 3, 8, 9, 10, 12, 29],
		config: {
			'8': {
				count: '2',
				afterCountOper: '关闭界面',
				type: '寮突破',
			},
			'10': {
				type: '寮突破',
			},
		},
	},
	{
		id: 7,
		schemeName: '个人探索',
		star: true,
		list: [0, 15, 1, 2, 3, 13, 14, 29],
		config: {
			'0': {
				next_scheme: '关闭BUFF',
			},
		},
	},
	{
		id: 8,
		schemeName: '组队探索_队长',
		star: false,
		list: [0, 15, 1, 2, 3, 5, 14],
		config: {
			'15': {
				type: '队长',
			},
		},
	},
	{
		id: 8,
		schemeName: '组队探索_打手',
		star: false,
		list: [0, 15, 1, 2, 3, 4, 25],
		config: {
			'15': {
				type: '打手',
			},
		},
	},
	{
		id: 9,
		schemeName: '地鬼日常',
		star: true,
		list: [1, 2, 16, 29],
	},
	{
		id: 10,
		schemeName: '逢魔日常',
		star: true,
		list: [1, 2, 3, 23, 24, 26, 508, 8, 504],
		config: {
			'508': {
				switch_ji_enabled: false,
			},
		},
	},
	{
		id: 11,
		schemeName: '百鬼夜行',
		list: [3, 17, 18, 19, 20, 21],
	},
	{
		id: 12,
		schemeName: '抽厕纸',
		list: [3, 22],
	},
	{
		id: 13,
		groupName: '切换方案样例',
		schemeName: '例_个人探索30次_转个人突破',
		star: true,
		list: [0, 15, 1, 2, 3, 13, 14],
		config: {
			'0': {
				jspd_enabled_2: true,
				jspd_times_2: 30,
				scheme_switch_enabled: true,
				next_scheme: '例_个人突破_结束后转寮突破',
			},
		},
	},
	{
		id: 14,
		groupName: '切换方案样例',
		schemeName: '例_个人突破_结束后转寮突破',
		star: true,
		list: [0, 1, 2, 3, 7, 10, 8, 9, 11, 25],
		config: {
			'8': {
				count: '2',
				afterCountOper: '切换方案',
				type: '个人突破',
				next_scheme: '寮突破',
			},
			'10': {
				type: '个人突破',
			},
		},
	},
	{
		id: 15,
		schemeName: '组队_自动匹配流程',
		star: true,
		list: [0, 1, 2, 3, 5, 27],
	},
	{
		id: 16,
		schemeName: '继续育成',
		list: [3, 28],
	},
	{
		id: 17,
		schemeName: '斗技',
		list: [0, 1, 2, 3, 30, 307],
	},
	{
		id: 18,
		schemeName: '结界卡_继续合成',
		list: [0, 3, 31],
	},
	{
		id: 19,
		schemeName: '道馆',
		list: [0, 1, 2, 3, 32],
		star: true,
	},
	{
		id: 22,
		schemeName: '秘闻',
		list: [0, 51, 1, 2, 3, 34],
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
		id: 23,
		schemeName: '悬赏',
		star: true,
		list: [0, 1, 2, 3, 52, 29, 41, 42, 43, 44, 45, 46, 47, 48, 49],
		config: {
			'52': {
				scheme_switch_enabled: false,
			},
		},
	},
	{
		id: 24,
		schemeName: '金币妖怪',
		list: [0, 1, 2, 3, 35, 37, 38],
		config: {
			'37': {
				target: '金币妖怪',
				createMode: '创建队伍',
				next_scheme: '关闭BUFF',
			},
		},
	},
	{
		id: 25,
		schemeName: '宴会',
		star: true,
		list: [0, 3, 1000, 1001],
		config: {
			'1001': {
				change_shikigami_index: '1',
			},
		},
	},
	{
		id: 26,
		schemeName: '关闭BUFF',
		list: [502, 1, 2, 3, 29, 40, 501],
	},
	{
		id: 27,
		schemeName: '开启BUFF_打探索',
		list: [501, 50],
	},
	//  {
	//     id: 28,
	//     schemeName: '悬赏_庭院打开悬赏界面',
	//     list: [52],
	// },
	{
		id: 29,
		schemeName: '返回庭院',
		list: [3, 503],
		config: {
			'503': {
				scheme_switch_enabled: false,
				next_scheme: '通用准备退出',
				afterCountOper: '停止脚本',
			},
		},
	},
	{
		id: 30,
		schemeName: '式神寄养',
		star: true,
		groupName: '式神寄养',
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
		groupName: '式神寄养',
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
		groupName: '定时任务',
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
		id: 33,
		schemeName: '狩猎战',
		list: [0, 1, 2, 3, 507],
	},
	{
		id: 34,
		schemeName: '庭院进入寮每日活动(自动)',
		list: [3, 505, 506, 516],
		config: {
			'506': {
				auto_switch_enabled: true,
				gateOfHades_switch: false,
			},
			'516': {
				count: '40',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
		},
	},
	{
		id: 35,
		schemeName: '六道萤草',
		list: [0, 1, 2, 3, 24, 201, 202, 203, 207, 204, 205, 206, 208, 209],
		commonConfig: {
			loopDelay: 200,
			afterClickDelayRandom: 200,
			colorSimilar: 93,
			multiColorSimilar: 95,
		},
	},
	{
		id: 36,
		schemeName: '定时任务-启动游戏-每日寮活动',
		star: true,
		groupName: '定时任务',
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
		id: 39,
		schemeName: '夜行荒河',
		list: [2, 3, 220, 221],
	},
	{
		id: 40,
		schemeName: '定时任务-启动游戏-每日逢魔',
		star: true,
		groupName: '定时任务',
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
		id: 41,
		schemeName: '实例-更换式神预设御魂',
		groupName: '切换方案样例',
		list: [509, 510, 511],
		config: {
			'510': {
				groupName: '默认分组',
				defaultName: '队伍1',
			},
			'511': {
				count: '3',
				afterCountOper: '退出式神录',
			},
		},
	},
	{
		id: 42,
		schemeName: '阴门挑战',
		list: [0, 1, 2, 3, 5, 513],
	},
	{
		id: 43,
		schemeName: '首领退治',
		list: [0, 1, 2, 3, 512],
	},
	{
		id: 44,
		schemeName: '狭间暗域',
		list: [0, 1, 3, 514, 515],
	},
	{
		id: 45,
		schemeName: '喂猫喂狗',
		list: [3, 517],
	},
	{
		id: 46,
		schemeName: '定时任务-启动游戏-喂猫喂狗',
		star: false,
		groupName: '定时任务',
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
		id: 47,
		groupName: '御魂奉纳',
		schemeName: '奉纳御魂_贪食鬼吃经验',
		list: [0, 301, 303],
		star: true,
	},
	{
		id: 48,
		groupName: '御魂奉纳',
		schemeName: '奉纳御魂_开始奉纳',
		list: [0, 2, 302],
	},
	{
		id: 49,
		groupName: '绘卷进度检测',
		schemeName: '绘卷进度_检测并提醒',
		list: [0, 304],
		star: true,
	},
	{
		id: 50,
		groupName: '绘卷进度检测',
		schemeName: '绘卷进度_持续查询进度',
		list: [0, 305],
	},
	{
		id: 51,
		schemeName: '定时任务-启动游戏-寮突',
		star: true,
		groupName: '定时任务',
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
		groupName: '定时任务',
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
		id: 53,
		schemeName: '庭院进入寮每日活动(包含阴门)',
		list: [3, 505, 506, 516],
		config: {
			'506': {
				auto_switch_enabled: false,
				gateOfHades_switch: true,
			},
			'516': {
				count: '40',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
		},
	},
	{
		id: 54,
		schemeName: '庭院进入寮每日活动(不包含阴门)',
		list: [3, 505, 506, 516],
		config: {
			'506': {
				auto_switch_enabled: false,
				gateOfHades_switch: false,
			},
			'516': {
				count: '40',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
		},
	},
	{
		id: 55,
		schemeName: '定时任务-启动游戏-庭院进入寮每日活动(包含阴门)',
		star: true,
		groupName: '定时任务',
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
		groupName: '定时任务',
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
		id: 57,
		groupName: '组队循环示例',
		schemeName: '组队队长创建和邀请',
		list: [0, 27, 306],
		commonConfig: {
			colorSimilar: 91,
		},
	},
	{
		id: 58,
		groupName: '组队循环示例',
		schemeName: '组队队员接受邀请',
		list: [4],
		config: {
			'4': {
				exit: true,
			},
		},
	},
	{
		id: 59,
		schemeName: '强化御魂',
		list: [0, 303, 309],
		config: {
			'0': {
				jspd_times_longtime_nodo: '1',
			},
		},
		commonConfig: {
			multiColorSimilar: 93,
		},
		star: true,
	},
	{
		id: 60,
		schemeName: '定时任务-启动游戏-悬赏',
		star: false,
		groupName: '定时任务',
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
		id: 61,
		schemeName: '暴食鬼吃经验',
		list: [0, 310],
		config: {
			'0': {
				jspd_times_longtime_nodo: '1',
			},
		},
		star: true,
	},
	{
		id: 62,
		schemeName: '通用活动',
		star: true,
		list: [0, 1, 2, 3, 312],
	},
	{
		id: 63,
		schemeName: '重启模拟器',
		list: [991],
	},
	{
		id: 64,
		schemeName: '每日签到与收取邮件',
		list: [0, 2, 3, 518],
		config: {
			'0': {
				jspd_enabled_longtime_nodo: true,
				jspd_times_longtime_nodo: 1,
			},
		},
	},
	{
		id: 65,
		schemeName: '定时任务-启动游戏-每日签到与收取邮件',
		star: true,
		groupName: '定时任务',
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
	},
	{
		id: 66,
		schemeName: '契灵',
		list: [510, 0, 1, 51, 2, 3, 313, 29],
		star: true,
		config: {
			'510': {
				fastMode: true
			}
		}
	}, {
		id: 67,
		schemeName: '庭院进入寮每日活动(狭间)',
		list: [3, 505, 506, 516],
		config: {
			'506': {
				gateOfHades_switch: false,
			},
			'516': {
				count: '2',
				afterCountOper: '不做任何操作',
				next_scheme: '通用准备退出',
			},
		},
	}, {
		id: 68,
		schemeName: '定时任务-启动游戏-庭院进入寮每日活动(狭间)',
		star: true,
		groupName: '定时任务',
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
	}, {
		id: 69,
		schemeName: '六道椒图',
		star: true,
		list: [0, 1, 316, 2, 3, 24],
	},
	{
		id: 70,
		schemeName: '开启经验BUFF_经验妖怪',
		list: [501, 50],
		config: {
			'50': {
				scheme_switch_enabled: true,
				next_scheme: '经验妖怪',
				buff_type: '经验',
				ready_once_buff: false,
			},
		},
	},
	{
		id: 71,
		schemeName: '开启金币BUFF_金币妖怪',
		list: [501, 50],
		config: {
			'50': {
				scheme_switch_enabled: true,
				next_scheme: '金币',
				buff_type: '金币',
				ready_once_buff: false,
			},
		},
	},
	{
		id: 72,
		schemeName: '经验妖怪',
		list: [0, 1, 2, 3, 35, 37, 38],
		config: {
			'37': {
				target: '经验',
				createMode: '创建队伍',
				next_scheme: '关闭BUFF',
			},
		},
	},
	{
		id: 73,
		schemeName: '年兽',
		list: [0, 1, 2, 3, 35, 37, 38],
		config: {
			'37': {
				target: '年兽',
				createMode: '自动匹配',
				next_scheme: '关闭BUFF',
			},
		},
	},
	{
		id: 74,
		schemeName: '定时任务-启动游戏-金币妖怪',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '开启金币BUFF_金币妖怪',
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
		groupName: '定时任务',
		list: [1, 2, 3, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '开启经验BUFF_经验妖怪',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 99,
		schemeName: '伊吹之擂',
		list: [0, 3, 24, 99, 100],
	},
	{
		id: 100,
		schemeName: '缘结趣游',
		list: [0, 24, 319],
	}
	// , {
	// 	id: 102,
	// 	schemeName: '活动_破晓之时',
	// 	list: [0, 1, 2, 3, 24, 317],
	// 	groupName: '活动',
	// 	star: true,
	// 	config: {
	// 		'0': { // key为功能的ID（1表示准备）
	// 			jspd_enabled_longtime_nodo: true,
	// 			jspd_times_longtime_nodo: 3,
	// 		}
	// 	},
	// }
	// , {
	//   id: 102,
	//   schemeName: '活动_守缘合战',
	//   list: [0, 1, 2, 3, 24, 133],
	//   star: true,
	// }
	// , {
	//     id: 101,
	//     groupName: '活动',
	//     schemeName: '银之绮都_妖塔燃战',
	//     star: true,
	//     list: [0, 1, 2, 3, 128]
	// }
	// , {
	//     id: 102,
	//     groupName: '活动',
	//     schemeName: '夏日游园会_消消乐',
	//     star: true,
	//     list: [0, 3, 129, 130],
	//     commonConfig: { multiColorSimilar: 95 }
	// }
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
