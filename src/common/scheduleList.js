const ScheduleDefaultList = [{
    id: 1,
    name: '式神寄养',
    desc: '自动续式神寄养，建议把执行时间提前5分钟，启动前需要退出游戏',
    checked: false,
    lastRunTime: '',
    job: undefined,
    isShutdownTheGame: true,
    config: {
      scheme: '定时任务-启动游戏-式神寄养',
      cron: '0 0,6,12,18 * * * *',
    }
  }];

  export default ScheduleDefaultList;