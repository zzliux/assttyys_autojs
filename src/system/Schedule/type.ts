export type RepeatModeType = 0 | 1 | 2 | 3;

/**
 * waiting: 啥也没干
 * queueing: 队列中，等待执行
 * running: 执行中
 * done: 运行完成
 */
export type StatusType = 'waiting'| 'queueing' | 'running' | 'done';