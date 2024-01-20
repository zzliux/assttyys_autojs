/**
 * TODO 使用system/Schedule的Job作为ScheduleDefaultList的元素
 */

import { JobOptions } from '@/system/Schedule';

const ScheduleDefaultList: JobOptions[] = [
	{
		id: 1,
		name: '突破_9退4_进攻-寮突破',
		desc: '突破_9退4_进攻转寮突破',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '* 0 10,14,21 * * * * ',
		level: '1',
		config: {
			scheme: '【日常】定时任务-启动游戏-突破_9退4_进攻',
		}
	},
	{
		id: 1,
		name: '式神寄养',
		desc: '自动续式神寄养，建议把执行时间提前5分钟，启动前需要退出游戏',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 2,
		interval: '355',
		level: '10',
		config: {
			scheme: '【日常】定时任务-启动游戏-式神寄养',
		}
	},
	{
		id: 2,
		name: '绘卷',
		desc: '自动突破转探索30次',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '* * 15 0,6 11,12,13 0 * *',
		level: '2',
		config: {
			scheme: '【绘卷】突破_9退4_进攻-30次探索',
		},
	},
	{
		id: 3,
		name: '签到',
		desc: '每日签到',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '* 5 9 * * * * *',
		level: '3',
		config: {
			scheme: '【日常】定时任务-启动游戏-签到与邮件',
		},
	},
	{
		id: 4,
		name: '经验妖怪',
		desc: '经验妖怪',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '* 25 9 * * * * *',
		level: '4',
		config: {
			scheme: '【日常】定时任务-启动游戏-经验妖怪',
		},
	},
	{
		id: 5,
		name: '金币妖怪',
		desc: '金币妖怪',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '* 40 9 * * * * *',
		level: '5',
		config: {
			scheme: '【日常】定时任务-启动游戏-金币妖怪',
		},
	},
	{
		id: 6,
		name: '地鬼',
		desc: '地鬼',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '* 30 16 * * * * *',
		level: '6',
		config: {
			scheme: '【日常】定时任务-启动游戏-地鬼',
		},
	},
	{
		id: 7,
		name: '逢魔',
		desc: '逢魔',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '* 0 17 * * * * *',
		level: '7',
		config: {
			scheme: '【日常】定时任务-启动游戏-逢魔',
		},
	},
	{
		id: 8,
		name: '斗技',
		desc: '斗技',
		checked: true,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '* 45 13 * * 1 *',
		level: '6',
		config: {
			scheme: '【周常】定时任务-启动游戏-斗技',
		},
	},
	{
		id: 9,
		name: '秘闻',
		desc: '秘闻',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '* 45 13 * * 2 *',
		level: '6',
		config: {
			scheme: '【周常】定时任务-启动游戏-秘闻',
		},
	},
];

export default ScheduleDefaultList;