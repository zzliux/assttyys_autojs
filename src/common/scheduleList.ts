/**
 * TODO 使用system/Schedule的Job作为ScheduleDefaultList的元素
 */

import { JobOptions } from '@/system/Schedule';

const ScheduleDefaultList: JobOptions[] = [
	{
		id: 1,
		name: '式神寄养',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 2,
		interval: '359',
		nextOffset: '0,5',
		level: '10',
		config: {
			scheme: '定时任务-启动游戏-式神寄养',
		}
	},
	{
		id: 2,
		name: '寮活动',
		desc: '自动参加寮活动，目前只支持道馆、狩猎',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 19 * * *',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '定时任务-启动游戏-每日寮活动',
		}
	},
	{
		id: 5,
		name: '寮突',
		desc: '自动寮突',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 10 7 * * *',
		nextOffset: '0,30',
		level: '1',
		config: {
			scheme: '定时任务-启动游戏-寮突',
		}
	},
	{
		id: 13,
		name: '悬赏',
		desc: '自动悬赏',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 7,1 * * *',
		nextOffset: '0,30',
		level: '1',
		config: {
			scheme: '定时任务-启动游戏-悬赏',
		}
	},
	{
		id: 15,
		name: '每日签到与领取邮箱奖励',
		desc: '每日签到与领取邮箱奖励',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 10 1 * * *',
		nextOffset: '0,30',
		level: '1',
		config: {
			scheme: '定时任务-启动游戏-每日签到与收取邮件',
		}
	},
];

export default ScheduleDefaultList;