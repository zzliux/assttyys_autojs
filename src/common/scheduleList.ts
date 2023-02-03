/**
 * TODO 使用system/Schedule的Job作为ScheduleDefaultList的元素
 */

import { JobOptions } from "@/system/Schedule";

const ScheduleDefaultList: JobOptions[] = [
  {
    id: 1,
    name: '式神寄养',
    desc: '自动续式神寄养，建议把执行时间提前5分钟，启动前需要退出游戏',
    checked: false,
    lastRunTime: null,
    nextDate: null,
    repeatMode: 2,
    interval: 6 * 60 - 1,
    level: '10',
    config: {
      scheme: '定时任务-启动游戏-式神寄养',
      // cron: '0 0 0,6,12,18 * * *',
    }
  },
  {
    id: 2,
    name: '寮活动',
    desc: '自动参加寮活动，目前只支持道馆、狩猎',
    checked: false,
    lastRunTime: null,
    nextDate: null,
    repeatMode: 1,
    interval: 24 * 60,
    level: '5',
    config: {
      scheme: '定时任务-启动游戏-每日寮活动',
      // cron: '0 0 19 * * 1-4',
    }
  },
  {
    id: 3,
    name: '逢魔',
    desc: '自动参加逢魔活动，目前不支持首领',
    checked: false,
    lastRunTime: null,
    nextDate: null,
    repeatMode: 1,
    interval: 24 * 60,
    level: '5',
    config: {
      scheme: '定时任务-启动游戏-每日逢魔',
      // cron: '0 0 17 * * *',
    }
  }
];

export default ScheduleDefaultList;