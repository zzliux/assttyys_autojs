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
    interval: '355',
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
    interval: '* 0 19 * * *',
    level: '10',
    config: {
      scheme: '定时任务-启动游戏-每日寮活动',
    }
  },
  {
    id: 3,
    name: '逢魔',
    desc: '自动参加逢魔活动',
    checked: false,
    lastRunTime: null,
    nextDate: null,
    repeatMode: 3,
    interval: '* 0 17 * * *',
    level: '10',
    config: {
      scheme: '定时任务-启动游戏-每日逢魔',
    }
  },
  {
    id: 4,
    name: '喂猫喂狗',
    desc: '自动喂猫喂狗',
    checked: false,
    lastRunTime: null,
    nextDate: null,
    repeatMode: 3,
    interval: '* 10 5,16,23 * * *',
    level: '5',
    config: {
      scheme: '定时任务-启动游戏-喂猫喂狗',
    }
  }
];

export default ScheduleDefaultList;