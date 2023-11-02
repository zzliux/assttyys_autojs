import {
  IFuncOrigin,
  IFuncOperatorOrigin,
  IFuncOperator,
} from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
// const left = 0;
// const center = 1;
// const right = 2;

export class Func991 implements IFuncOrigin {
  id = 991;
  name = '重启模拟器';
  desc = '重启模拟器，减少模拟器崩溃的几率(官方说的: ))';
  operator: IFuncOperatorOrigin[] = [];
  operatorFunc(thisScript: Script, _thisOperator: IFuncOperator[]): boolean {
    const jobList = thisScript.schedule.getJobList();
    for (let i = 0; i < jobList.length; i++) {
      const thisJob = jobList[i];
      if (thisJob.status === 'waiting') {
        //  如果在这之后10分钟有需要执行的定时任务，等待10分钟又10秒
        if (
          thisJob.nextDate.getTime() >= Date.now() &&
          thisJob.nextDate.getTime() - Date.now() < 600000
        ) {
          console.log('检测到10分钟内有需要执行的定时任务，随眠10分钟又10秒');
          sleep(610000);
          return true;
        }
      }
    }
    thisScript.myToast('模拟器将会在10秒后重启!');
    sleep(10000);

    console.log('--- 重启模拟器 ---');
    $shell('reboot', true);

    return false;
  }
}
