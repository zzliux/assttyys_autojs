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
		nextOffset: '',
		level: '10',
		config: {
			scheme: '寄养',
		}
	},
	{
		id: 2,
		name: '放置结界卡',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 2,
		interval: '5',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '结界卡',
		}
	},
	{
		id: 3,
		name: '寮活动',
		desc: '自动参加寮活动',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 0 19 * * *',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '寮活动启动器',
		}
	},
	{
		id: 4,
		name: '寮突破',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 0 6 * * *',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '寮突破',
		}
	},
	{
		id: 5,
		name: '悬赏',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 1 7,17 * * *',
		nextOffset: '',
		level: '1',
		config: {
			scheme: '悬赏',
		}
	},
	{
		id: 6,
		name: '日常',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 0 17 * * *',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '地鬼日常',
		}
	},
	{
		id: 7,
		name: '斗技',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 0 12 * * *',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '斗技',
		}
	},
	{
		id: 8,
		name: '竞速秘闻',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 0 10 * * 2',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '秘闻前五层',
		}
	},
	{
		id: 9,
		name: '六道椒图',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 0 10 * * 2',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '六道椒图',
		}
	},
	{
		id: 10,
		name: '契灵_队长',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 0 11 * * 2',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '契灵_队长',
		}
	},
	{
		id: 11,
		name: '契灵_队员',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 0 11 * * 2',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '契灵_队员',
		}
	},
	{
		id: 13,
		name: '周三神秘商人',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 0 0 * * 3',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '周三神秘商人',
		}
	},
	{
		id: 14,
		name: '百鬼棋局',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 0 12 * * 2',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '百鬼棋局',
		}
	},
	{
		id: 14,
		name: '每周资源领取',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 59 11 * * 2',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '每周资源领取',
		}
	},
	{
		id: 15,
		name: '对弈竞猜',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 50 11/2 * * *',
		nextOffset: '',
		level: '10',
		config: {
			scheme: '对弈竞猜',
		}
	},
];

export default ScheduleDefaultList;