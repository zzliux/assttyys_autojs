import funcList from './funcListIndex';
import commonConfigArr from './commonConfig';
import { IScheme } from '@/interface/IScheme';
import { merge } from './tool';

const SchemeList: IScheme[] = [
	{
		id: 2,
		schemeName: '【日常】御魂组队乘客',
		groupName: '日常',
		star: true,
		list: [509, 510, 511, 0, 1, 2, 3, 4],
		config: {
			'510': {
				'groupName': '默认分组',
				'defaultName': '队伍1',
				'fastMode': true,
				'groupNum': '1',
				'defaultNum': '1'
			},
			'511': {
				'count': '3',
				'afterCountOper': '退出式神录'
			}
		}
	},
	{
		id: 2,
		schemeName: '【日常】御魂组队司机70次',
		groupName: '日常',
		star: true,
		list: [509, 510, 511, 0, 1, 2, 3, 5],
		config: {
			'0': {
				'jspd_enabled_longtime_nodo': true,
				'jspd_times_longtime_nodo': 3,
				'jspd_enabled_zjsj': false,
				'jspd_times_zjsj': 30,
				'jspd_txpl_zjsj': 60,
				'jspd_enabled_1': false,
				'jspd_times_1': 20,
				'jspd_enabled_2': true,
				'jspd_times_2': '70',
				'stop_with_launched_app_exit': false,
				'scheme_switch_enabled': false,
				'next_scheme': '【绘卷】突破_9退4_进攻-30次探索',
				'pause_enabled': false,
				'define_run_time': '10,30',
				'define_pause_time': '2,7'
			},
			'5': {
				'type': '三人'
			},
			'510': {
				'groupName': '默认分组',
				'defaultName': '队伍1',
				'fastMode': true,
				'groupNum': '1',
				'defaultNum': '1'
			},
			'511': {
				'count': '3',
				'afterCountOper': '退出式神录'
			}
		}
	},
	{
		id: 1,
		schemeName: '【日常】定时任务-启动游戏-突破_9退4_进攻',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 3, 502, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '【日常】突破_9退4_进攻',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 1,
		schemeName: '【日常】定时任务-启动游戏-寮突破',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 502, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '【日常】寮突破',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 1,
		schemeName: '【日常】定时任务-启动游戏-悬赏',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 502, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '【日常】悬赏',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 1,
		schemeName: '【日常】定时任务-启动游戏-式神寄养',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 502, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '【日常】式神寄养',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 1,
		schemeName: '【绘卷】定时任务-启动游戏-突破_9退4_进攻-30次探索',
		groupName: '定时任务',
		star: true,
		list: [1, 2, 502, 503, 993],
		config: {
			'503': {
				'scheme_switch_enabled': false,
				'next_scheme': '通用准备退出',
				'afterCountOper': '不进行任何操作'
			},
			'993': {
				'area': '',
				'is_shutdown_the_game_before': true,
				'next_scheme': '【绘卷】突破_9退4_进攻-30次探索',
				'account_index': 0,
				'account_name': ''
			}
		},
	},
	{
		id: 1,
		schemeName: '【日常】定时任务-启动游戏-地鬼',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 502, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '【日常】地鬼',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 1,
		schemeName: '【日常】定时任务-启动游戏-逢魔',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 502, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '【日常】逢魔',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 1,
		schemeName: '【日常】定时任务-启动游戏-签到与邮件',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 502, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '【日常】签到与邮件',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 1,
		schemeName: '【日常】定时任务-启动游戏-经验妖怪',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 502, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '【日常】开启经验BUFF_经验妖怪',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 1,
		schemeName: '【日常】定时任务-启动游戏-金币妖怪',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 502, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '【日常】开启金币BUFF_金币妖怪',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 1,
		schemeName: '【周常】定时任务-启动游戏-斗技',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 502, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '【周常】斗技',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 1,
		schemeName: '【周常】定时任务-启动游戏-秘闻',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 502, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '【周常】秘闻',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 1,
		schemeName: '定时任务-奉纳御魂_贪食鬼吃经验',
		star: true,
		groupName: '定时任务',
		list: [1, 2, 502, 503, 993],
		config: {
			'993': {
				area: '',
				is_shutdown_the_game_before: true,
				next_scheme: '奉纳御魂_贪食鬼吃经验',
			},
			'503': {
				afterCountOper: '不进行任何操作',
			},
		},
	},
	{
		id: 2,
		schemeName: '【日常】突破_9退4_进攻',
		groupName: '日常',
		star: false,
		list: [509, 510, 511, 0, 51, 1, 2, 3, 8, 9, 11, 10, 25, 29],
		config: {
			'0': {
				'jspd_enabled_longtime_nodo': true,
				'jspd_times_longtime_nodo': 3,
				'jspd_enabled_zjsj': false,
				'jspd_times_zjsj': 30,
				'jspd_txpl_zjsj': 60,
				'jspd_enabled_1': false,
				'jspd_times_1': 20,
				'jspd_enabled_2': false,
				'jspd_times_2': 20,
				'stop_with_launched_app_exit': false,
				'scheme_switch_enabled': true,
				'next_scheme': '返回庭院',
				'pause_enabled': false,
				'define_run_time': '10,30',
				'define_pause_time': '2,7'
			},
			'1': {
				'exitBeforeReady': false
			},
			'2': {
				'rechallenge': false,
				'no_sushi_switch_enabled': false,
				'next_scheme': '关闭BUFF'
			},
			'3': {
				'type': '关闭',
				'switch': 'true',
				'yytype': '关闭'
			},
			'8': {
				'count': '2',
				'afterCountOper': '切换方案',
				'next_scheme': '【日常】寮突破',
				'type': '个人突破',
				'cdWaitTime': '30,60',
				'cdSwitchSchemeEnable': false,
				'cdSwitchScheme': '个人突破'
			},
			'9': {
				'priority': '4->5->3->2->1->0',
				'scheme_switch_enabled': true,
				'next_scheme': '【日常】突破_9退4_退出'
			},
			'10': {
				'type': '个人突破'
			},
			'51': {
				'greenType': '自定义坐标',
				'greenPosition': '245,500',
				'greenText': '绿标专用',
				'greenTextMatchMode': '模糊',
				'preSearch': true,
				'offset': '0,0'
			},
			'510': {
				'groupName': '默认分组',
				'defaultName': '队伍1',
				'fastMode': true,
				'groupNum': '3',
				'defaultNum': '1'
			},
			'511': {
				'count': '3',
				'afterCountOper': '退出式神录'
			}
		},
	},
	{
		id: 2,
		schemeName: '【日常】寮突破',
		groupName: '日常',
		star: false,
		list: [509, 510, 511,  0, 51, 1, 2, 3, 8, 9, 10, 12, 29],
		config: {
			'0': {
				'jspd_enabled_longtime_nodo': true,
				'jspd_times_longtime_nodo': 3,
				'jspd_enabled_zjsj': false,
				'jspd_times_zjsj': 30,
				'jspd_txpl_zjsj': 60,
				'jspd_enabled_1': false,
				'jspd_times_1': 20,
				'jspd_enabled_2': false,
				'jspd_times_2': 20,
				'stop_with_launched_app_exit': false,
				'scheme_switch_enabled': true,
				'next_scheme': '返回庭院',
				'pause_enabled': false,
				'define_run_time': '10,30',
				'define_pause_time': '2,7'
			},
			'8': {
				count: '2',
				afterCountOper: '关闭界面',
				type: '寮突破',
			},
			'10': {
				type: '寮突破',
			},
			'51': {
				'greenType': '自定义坐标',
				'greenPosition': '245,500',
				'greenText': '绿标专用',
				'greenTextMatchMode': '模糊',
				'preSearch': true,
				'offset': '0,0'
			},
			'510': {
				'groupName': '默认分组',
				'defaultName': '队伍1',
				'fastMode': true,
				'groupNum': '3',
				'defaultNum': '1'
			},
			'511': {
				'count': '3',
				'afterCountOper': '退出式神录'
			}
		},
	},
	{
		id: 2,
		schemeName: '【日常】突破_9退4_退出',
		groupName: '日常',
		star: false,
		list: [0, 1, 2, 3, 8, 9, 11, 10],
		config: {
			'0': {
				'jspd_enabled_longtime_nodo': true,
				'jspd_times_longtime_nodo': 3,
				'jspd_enabled_zjsj': false,
				'jspd_times_zjsj': 30,
				'jspd_txpl_zjsj': 60,
				'jspd_enabled_1': false,
				'jspd_times_1': 20,
				'jspd_enabled_2': true,
				'jspd_times_2': '4',
				'stop_with_launched_app_exit': false,
				'scheme_switch_enabled': true,
				'next_scheme': '【日常】突破_9退4_进攻',
				'pause_enabled': false,
				'define_run_time': '10,30',
				'define_pause_time': '2,7'
			},
			'1': {
				'exitBeforeReady': true
			},
			'2': {
				'rechallenge': true,
				'no_sushi_switch_enabled': false,
				'next_scheme': '关闭BUFF'
			},
			'3': {
				'type': '关闭',
				'switch': 'true',
				'yytype': '关闭'
			},
			'8': {
				'count': '2',
				'afterCountOper': '停止脚本',
				'next_scheme': '【绘卷】30次探索-突破_9退4_进攻',
				'type': '个人突破',
				'cdWaitTime': '30,60',
				'cdSwitchSchemeEnable': false,
				'cdSwitchScheme': '个人突破'
			},
			'9': {
				'priority': '0->1->2->3->4->5',
				'scheme_switch_enabled': false,
				'next_scheme': '个突_9退4_退出'
			},
			'10': {
				'type': '个人突破'
			}
		},
		commonConfig: {
			'loopDelay': 200,
			'afterClickDelayBase': 0,
			'afterClickDelayRandom': 200,
			'colorSimilar': 93,
			'multiColorSimilar': 96
		},
	},
	{
		id: 2,
		schemeName: '【日常】突破_降级',
		star: false,
		groupName: '日常',
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
		id: 2,
		schemeName: '【日常】式神寄养',
		groupName: '日常',
		star: false,
		list: [3, 999, 998, 997, 994, 995],
		config: {
			'3': {
				type: '关闭',
			},
			'994': {
				count: '6',
				maxTimeForwait: '10',
				afterCountOper: '停止脚本',
				next_scheme: '通用准备退出',
			},
			'995': {
				next_scheme: '返回庭院',
				afterCountOper: '停止脚本',
				isAutoFosterCare: true,
				maxTimeForwait: '10',
			},
			'997': {
				priority: '太鼓6->斗鱼6->太鼓5->斗鱼5->太鼓4->太鼓3->斗鱼4',
			},
		},
		commonConfig: {
			'loopDelay': 200,
			'afterClickDelayBase': 0,
			'afterClickDelayRandom': 200,
			'colorSimilar': 93,
			'multiColorSimilar': 96
		},
	},
	{
		id: 2,
		schemeName: '【日常】地鬼',
		groupName: '日常',
		star: false,
		list: [1, 2, 16, 29],
	},
	{
		id: 2,
		schemeName: '【日常】逢魔',
		groupName: '日常',
		star: false,
		list: [509, 510, 511, 1, 2, 3, 23, 24, 26, 508, 8, 504],
		config: {
			'508': {
				switch_ji_enabled: false,
			},
			'510': {
				'groupName': '默认分组',
				'defaultName': '队伍1',
				'fastMode': true,
				'groupNum': '2',
				'defaultNum': '1'
			},
			'511': {
				'count': '3',
				'afterCountOper': '退出式神录'
			}
		},
	},
	{
		id: 2,
		schemeName: '【日常】签到与邮件',
		groupName: '日常',
		list: [0, 2, 3, 518],
		config: {
			'0': {
				jspd_enabled_longtime_nodo: true,
				jspd_times_longtime_nodo: 1,
			},
		},
	},
	{
		id: 2,
		schemeName: '【日常】开启经验BUFF_经验妖怪',
		groupName: '日常',
		list: [509, 510, 511, 501, 50],
		config: {
			'50': {
				scheme_switch_enabled: true,
				next_scheme: '【日常】经验妖怪',
				buff_type: '经验',
				ready_once_buff: false,
			},
			'510': {
				'groupName': '默认分组',
				'defaultName': '队伍1',
				'fastMode': true,
				'groupNum': '4',
				'defaultNum': '2'
			},
			'511': {
				'count': '3',
				'afterCountOper': '退出式神录'
			}
		},
	},
	{
		id: 2,
		schemeName: '【日常】经验妖怪',
		groupName: '日常',
		list: [0, 1, 2, 3, 35, 37, 38],
		config: {
			'37': {
				target: '经验',
				createMode: '自动匹配',
				next_scheme: '关闭BUFF',
			},
		},
	},
	{
		id: 2,
		schemeName: '【日常】开启金币BUFF_金币妖怪',
		groupName: '日常',
		list: [509, 510, 511, 501, 50],
		config: {
			'50': {
				scheme_switch_enabled: true,
				next_scheme: '【日常】金币妖怪',
				buff_type: '金币',
				ready_once_buff: false,
			},
			'510': {
				'groupName': '默认分组',
				'defaultName': '队伍1',
				'fastMode': true,
				'groupNum': '4',
				'defaultNum': '3'
			},
			'511': {
				'count': '3',
				'afterCountOper': '退出式神录'
			}
		},
	},
	{
		id: 2,
		schemeName: '【日常】金币妖怪',
		groupName: '日常',
		list: [0, 1, 2, 3, 35, 37, 38],
		config: {
			'37': {
				target: '金币',
				createMode: '自动匹配',
				next_scheme: '关闭BUFF',
			},
		},
	},
	{
		id: 2,
		schemeName: '【日常】悬赏',
		groupName: '日常',
		star: true,
		list: [509, 510, 511, 0, 1, 2, 3, 52, 29, 41, 42, 43, 44, 45, 46, 47, 48, 49],
		config: {
			'52': {
				scheme_switch_enabled: false,
			},
			'510': {
				'groupName': '默认分组',
				'defaultName': '队伍1',
				'fastMode': true,
				'groupNum': '4',
				'defaultNum': '1'
			},
			'511': {
				'count': '3',
				'afterCountOper': '退出式神录'
			}
		},
	},
	{
		id: 3,
		schemeName: '【周常】斗技',
		star: false,
		groupName: '周常',
		list: [509, 510, 511, 51, 0, 1, 2, 3, 30, 307],
		config: {
			'510': {
				'groupName': '默认分组',
				'defaultName': '队伍1',
				'fastMode': true,
				'groupNum': '6',
				'defaultNum': '1'
			},
			'511': {
				'count': '3',
				'afterCountOper': '退出式神录'
			},
			'51': {
				'greenType': '自定义坐标',
				'greenPosition': '245,500',
				'greenText': '绿标专用',
				'greenTextMatchMode': '模糊',
				'preSearch': true,
				'offset': '0,0'
			}
		},
	},
	{
		id: 3,
		schemeName: '【周常】秘闻',
		star: false,
		groupName: '周常',
		list: [509, 510, 511, 51, 0, 1, 2, 3, 34, 29],
		config: {
			'0': {
				jspd_enabled_1: true,
				jspd_times_1: 11,
			},
			'51': {
				'greenType': '自定义坐标',
				'greenPosition': '245,500',
				'greenText': '绿标专用',
				'greenTextMatchMode': '模糊',
				'preSearch': true,
				'offset': '0,0'
			},
			'510': {
				'groupName': '默认分组',
				'defaultName': '队伍1',
				'fastMode': true,
				'groupNum': '7',
				'defaultNum': '1'
			},
			'511': {
				'count': '3',
				'afterCountOper': '退出式神录',
			},
		},
	},
	{
		id: 4,
		schemeName: '【绘卷】突破_9退4_进攻-30次探索',
		groupName: '绘卷',
		star: false,
		list: [509, 510, 511, 0, 51, 1, 2, 3, 8, 9, 11, 10, 25, 29],
		config: {
			'0': {
				'jspd_enabled_longtime_nodo': true,
				'jspd_times_longtime_nodo': 3,
				'jspd_enabled_zjsj': false,
				'jspd_times_zjsj': 30,
				'jspd_txpl_zjsj': 60,
				'jspd_enabled_1': false,
				'jspd_times_1': 20,
				'jspd_enabled_2': false,
				'jspd_times_2': 20,
				'stop_with_launched_app_exit': false,
				'scheme_switch_enabled': true,
				'next_scheme': '返回庭院-30次探索-突破_9退4_进攻',
				'pause_enabled': false,
				'define_run_time': '10,30',
				'define_pause_time': '2,7'
			},
			'1': {
				'exitBeforeReady': false
			},
			'2': {
				'rechallenge': false,
				'no_sushi_switch_enabled': false,
				'next_scheme': '关闭BUFF'
			},
			'3': {
				'type': '关闭',
				'switch': 'true',
				'yytype': '关闭'
			},
			'8': {
				'count': '2',
				'afterCountOper': '切换方案',
				'next_scheme': '返回庭院-30次探索-突破_9退4_进攻',
				'type': '个人突破',
				'cdWaitTime': '30,60',
				'cdSwitchSchemeEnable': false,
				'cdSwitchScheme': '个人突破'
			},
			'9': {
				'priority': '4->5->3->2->1->0',
				'scheme_switch_enabled': true,
				'next_scheme': '【绘卷】突破_9退4_退出'
			},
			'10': {
				'type': '个人突破'
			},
			'51': {
				'greenType': '自定义坐标',
				'greenPosition': '245,500',
				'greenText': '绿标专用',
				'greenTextMatchMode': '模糊',
				'preSearch': true,
				'offset': '0,0'
			},
			'510': {
				'groupName': '默认分组',
				'defaultName': '队伍1',
				'fastMode': true,
				'groupNum': '3',
				'defaultNum': '1'
			},
			'511': {
				'count': '3',
				'afterCountOper': '退出式神录'
			}
		},
	},
	{
		id: 4,
		schemeName: '【绘卷】30次探索-突破_9退4_进攻',
		groupName: '绘卷',
		star: false,
		list: [509, 510, 511, 15, 0, 1, 2, 3, 13, 14, 29],
		config: {
			'0': {
				'jspd_enabled_longtime_nodo': true,
				'jspd_times_longtime_nodo': 3,
				'jspd_enabled_zjsj': false,
				'jspd_times_zjsj': 30,
				'jspd_txpl_zjsj': 60,
				'jspd_enabled_1': false,
				'jspd_times_1': 20,
				'jspd_enabled_2': true,
				'jspd_times_2': 30,
				'stop_with_launched_app_exit': false,
				'scheme_switch_enabled': true,
				'next_scheme': '返回庭院-突破_9退4_进攻-30次探索',
				'pause_enabled': false,
				'define_run_time': '10,30',
				'define_pause_time': '2,7'
			},
			'1': {
				'exitBeforeReady': false
			},
			'2': {
				'rechallenge': false,
				'no_sushi_switch_enabled': false,
				'next_scheme': '关闭BUFF'
			},
			'3': {
				'type': '关闭',
				'switch': 'true',
				'yytype': '关闭'
			},
			'14': {
				'type': '打经验',
				'swipeTime': '4',
				'swipeSpeed': '慢'
			},
			'15': {
				'type': '打手',
				'dog_food_type': '素材',
				'handle_position': '20%'
			},
			'510': {
				'groupName': '默认分组',
				'defaultName': '队伍1',
				'fastMode': true,
				'groupNum': '4',
				'defaultNum': '1'
			},
			'511': {
				'count': '3',
				'afterCountOper': '退出式神录'
			}
		},
		commonConfig: {
			'loopDelay': 200,
			'afterClickDelayBase': 0,
			'afterClickDelayRandom': 200,
			'colorSimilar': 93,
			'multiColorSimilar': 96
		},
	},
	{
		id: 4,
		schemeName: '【绘卷】突破_9退4_退出',
		groupName: '绘卷',
		star: false,
		list: [0, 1, 2, 3, 8, 9, 11, 10],
		config: {
			'0': {
				'jspd_enabled_longtime_nodo': true,
				'jspd_times_longtime_nodo': 3,
				'jspd_enabled_zjsj': false,
				'jspd_times_zjsj': 30,
				'jspd_txpl_zjsj': 60,
				'jspd_enabled_1': false,
				'jspd_times_1': 20,
				'jspd_enabled_2': true,
				'jspd_times_2': '4',
				'stop_with_launched_app_exit': false,
				'scheme_switch_enabled': true,
				'next_scheme': '【绘卷】突破_9退4_进攻-30次探索',
				'pause_enabled': false,
				'define_run_time': '10,30',
				'define_pause_time': '2,7'
			},
			'1': {
				'exitBeforeReady': true
			},
			'2': {
				'rechallenge': true,
				'no_sushi_switch_enabled': false,
				'next_scheme': '关闭BUFF'
			},
			'3': {
				'type': '关闭',
				'switch': 'true',
				'yytype': '关闭'
			},
			'8': {
				'count': '2',
				'afterCountOper': '切换方案',
				'next_scheme': '【绘卷】30次探索-突破_9退4_进攻',
				'type': '个人突破',
				'cdWaitTime': '30,60',
				'cdSwitchSchemeEnable': false,
				'cdSwitchScheme': '个人突破'
			},
			'9': {
				'priority': '0->1->2->3->4->5',
				'scheme_switch_enabled': false,
				'next_scheme': '个突_9退4_退出'
			},
			'10': {
				'type': '个人突破'
			}
		},
		commonConfig: {
			'loopDelay': 200,
			'afterClickDelayBase': 0,
			'afterClickDelayRandom': 200,
			'colorSimilar': 93,
			'multiColorSimilar': 96
		},
	},
	{
		id: 4,
		schemeName: '返回庭院-30次探索-突破_9退4_进攻',
		groupName: '绘卷',
		list: [3, 502, 503],
		config: {
			'503': {
				scheme_switch_enabled: true,
				next_scheme: '【绘卷】30次探索-突破_9退4_进攻',
				afterCountOper: '停止脚本',
			},
		}
	},
	{
		id: 4,
		schemeName: '返回庭院-突破_9退4_进攻-30次探索',
		groupName: '绘卷',
		list: [3, 502, 503],
		config: {
			'503': {
				scheme_switch_enabled: true,
				next_scheme: '【绘卷】突破_9退4_进攻-30次探索',
				afterCountOper: '停止脚本',
			},
		}
	},
	{
		id: 5,
		schemeName: '通用活动',
		groupName: '通用',
		star: true,
		list: [0, 1, 2, 3, 312],
	},
	{
		id: 5,
		schemeName: '返回庭院',
		groupName: '通用',
		list: [3, 502, 503],
		config: {
			'503': {
				scheme_switch_enabled: false,
				next_scheme: '通用准备退出',
				afterCountOper: '停止脚本',
			},
		}
	},
	{
		id: 5,
		schemeName: '关闭BUFF',
		groupName: '通用',
		list: [502, 1, 2, 3, 29, 40, 501],
		config: {
			'40': {
				scheme_switch_enabled: true,
				next_scheme: '返回庭院'
			}
		}
	},
	{
		id: 5,
		groupName: '通用',
		schemeName: '奉纳御魂_贪食鬼吃经验',
		list: [0, 509, 301, 303],
		star: true,
	},
	{
		id: 5,
		groupName: '通用',
		schemeName: '奉纳御魂_开始奉纳',
		list: [0, 2, 302],
	},
	{
		id: 5,
		schemeName: '抽厕纸',
		groupName: '通用',
		star: true,
		list: [3, 22],
	},	
];

// 遍历commonConfigArr，将每一项的config属性值赋值给commonConfig
const commonConfig = {};
for (let i = 0; i < commonConfigArr.length; i++) {
	for (let j = 0; j < commonConfigArr[i].config.length; j++) {
		const item = commonConfigArr[i].config[j];
		commonConfig[item.name] = item.default;
	}
}
// 遍历funcList，将每一项的config属性值赋值给allConfig
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

// 遍历SchemeList，将每一项的schemeName作为key，将item.list中的funcId作为value，存入innerSchemeListName中
SchemeList.forEach((item, id) => {
	innerSchemeListName[item.schemeName] = true;
	const thisConfig = {};
	// 遍历item.list，如果allConfig中存在funcId，则将funcId作为key，allConfig[funcId]作为value，存入thisConfig中
	item.list.forEach((funcId) => {
		if (allConfig[funcId]) {
			thisConfig[funcId] = allConfig[funcId];
		}
	});
	// 将SchemeList[id]与merge函数的参数进行合并，并将合并后的结果赋值给SchemeList[id]
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

// 将innerSchemeListName赋值给schemeNameMap，并将SchemeList赋值给default
export const schemeNameMap = innerSchemeListName;
export default SchemeList;