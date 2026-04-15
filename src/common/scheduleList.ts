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
			scheme: '通用活动',
		}
	},
	{
		id: 2,
		name: '寮活动',
		desc: '自动参加寮活动',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 0 19 * * *',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '通用活动',
		}
	},
	{
		id: 3,
		name: '寮突破',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 10 7 * * *',
		nextOffset: '0,30',
		level: '10',
		config: {
			scheme: '通用活动',
		}
	},
	{
		id: 4,
		name: '悬赏',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 0 7,1 * * *',
		nextOffset: '0,30',
		level: '1',
		config: {
			scheme: '通用活动',
		}
	},
	{
		id: 5,
		name: '每日签到与领取邮箱奖励',
		desc: '',
		checked: false,
		lastRunTime: null,
		nextDate: new Date('2026-04-15T16:00:00.000Z'),
		repeatMode: 3,
		interval: '0 10 1 * * *',
		nextOffset: '0,30',
		level: '1',
		config: {
			scheme: '通用活动',
		}
	},
];

export default ScheduleDefaultList;