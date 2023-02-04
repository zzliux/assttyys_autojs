import type { RepeatModeType, StatusType } from './type';
import { deepClone } from '@/common/tool';

export class JobOptions {

    id?: number;
    /**
     * job名
     */
    name: string;

    /**
     * job描述
     */
    desc: string;

    /**
     * 是否启用
     */
    checked?: boolean;

    /**
     * 上次运行开始时间
     */
    lastRunTime?: Date;

    /**
     * 上次运行结束时间
     */
    lastStopTime?: Date;

    /**
     * 下次执行时间
     */
    nextDate: Date;

    /**
     * 重复模式： 0不重复运行，1从开始运行时间计算重复间隔，2从运行结束计算重复间隔
     */
    repeatMode: RepeatModeType;

    /**
     * 间隔时间（min）
     */
    interval: number;

    /**
     * 状态
     */
    status?: StatusType;

    /**
     * 其它配置
     */
    config?: Record<string, string>;

    /**
     * 开始运行时执行的回调
     */
    runningCallback?: Function;

    /**
     * 执行任务优先级
     */
    level?: string;
}

export class Job extends JobOptions {

    private doneCallback: Function;

    status: StatusType = 'wating';
    level: string = '1';

    constructor(options: JobOptions) {
        super();
        this.id = options.id;
        this.name = options.name;
        this.desc = options.desc;
        this.checked = options.checked;
        this.lastRunTime = options.lastRunTime;
        this.lastStopTime = options.lastStopTime;
        this.nextDate = options.nextDate;
        this.repeatMode = options.repeatMode;
        this.interval = options.interval;
        this.config = options.config;
        this.runningCallback = options.runningCallback;
        this.level = options.level;
    }

    doRun = () =>  {
        if (this.repeatMode === 1) {
            this.nextDate = new Date(Date.now() + this.interval * 60 * 1000);
        }
        this.status = 'running';
        this.lastRunTime = new Date();
        this.lastStopTime = null;
        this.runningCallback && this.runningCallback.apply(this);
    }

    doDone = () => {
        this.lastStopTime = new Date();
        if (this.repeatMode === 0) {
            this.status = 'done';
            this.doneCallback && this.doneCallback.apply(this);
            return;
        } else if (this.repeatMode === 1) {
            this.status = 'wating';
            this.doneCallback && this.doneCallback.apply(this);
            return;
        } else if (this.repeatMode === 2) {
            this.nextDate = new Date(Date.now() + this.interval * 60 * 1000);
            this.doneCallback && this.doneCallback.apply(this);
            this.status = 'wating';
            return;
        }
    }

    setDoneCallback = (doneCallback: Function) => {
        this.doneCallback = doneCallback;
    }
}

class Schedule {

    timer: NodeJS.Timeout;
    timeout: number = 2000;
    jobList: Job[];
    jobStopCallback: Function;
    scheduleStatue: 'running' | 'idle' = 'idle';

    /**
     * @description 当前运行中的job
     */
    currentRunningJob: Job;

    /**
     * @description 任务队列
     */
    jobQueue: Job[] = [];

    constructor() {
        this.timer = setTimeout(this.timerCallback.bind(this), this.timeout);
        this.jobList = [];
    }

    add(job: Job): boolean {
        for (let i = 0; i < this.jobList.length; i++) {
            if (this.jobList[i].name === job.name) {
                this.jobList.splice(i, 1);
                break;
            }
        }
        this.jobList.push(job);
        return true;
    }

    remove(jobName: string): boolean {
        for (let i = 0; i < this.jobList.length; i++) {
            if (this.jobList[i].name === jobName) {
                this.jobList.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    getJobList(): Job[] {
        return this.jobList;
    }

    timerCallback() {
        let index = -1;
        let job: Job = null;

        this.scheduleStatue = this.jobList.findIndex(item => item.status === 'running') === -1 ? 'idle' : 'running';

        if (this.currentRunningJob && this.currentRunningJob.status !== 'running') {
            console.log('当前任务已完成:', this.currentRunningJob);
            this.currentRunningJob = null;
        }


        for (let i = 0; i < this.jobList.length; i++) {
            const thisJob = this.jobList[i];
            //  当前时间与执行时间间隔小于30分钟并且状态为等待
            if (((thisJob.nextDate.getTime() <= Date.now() && Date.now() - thisJob.nextDate.getTime() < 1800000) && thisJob.status === 'wating')) {
                job = thisJob;
                index = i;
                break;
            }
        }

        // 判断调度中心是否为空闲，待执行队列是否不为空
        if (this.scheduleStatue === 'idle' && this.jobQueue.length > 0) {
            // 获取待执行队列优先级最高的等级
            const maxLevel = Math.max(...this.jobQueue.map(item => Number.parseInt(item.level, 10)));
            const jobIndex = this.jobQueue.findIndex(item => Number.parseInt(item.level, 10) === maxLevel);
            const _job = this.jobQueue[jobIndex];

            if (job) {
                //  当前执行job优先级低于队列的任务，把当前job添加至待执行队列
                if (Number.parseInt(job.level, 10) < Number.parseInt(_job.level, 10)) {
                    job.status = 'paused';
                    this.jobQueue.push(deepClone(job));

                    job = _job;
                    this.jobQueue.splice(jobIndex, 1);
                }
            } else {
                job = _job;
                this.jobQueue.splice(jobIndex, 1);
            }
        }

        if (job) {
            if (job.repeatMode === 0) {
                this.jobList.splice(index, 1);
            }

            if (this.currentRunningJob) {
                if (Number.parseInt(this.currentRunningJob.level, 10) < Number.parseInt(job.level, 10)) {
                    this.currentRunningJob.status = 'paused';
                    this.jobQueue.push(deepClone(this.currentRunningJob));
                    this.currentRunningJob = job;
                    console.log('当前任务不为空,执行任务:', job);
                    job.doRun();
                    console.log('当前执行任务为:', this.currentRunningJob && this.currentRunningJob.name);
                    console.log('调度中心状态为:', this.scheduleStatue);
                    console.log('当前调度队列为:', this.jobQueue.length);           
                } else {
                    job.status = 'paused';
                    this.jobQueue.push(deepClone(job));
                }
            } else {
                this.currentRunningJob = job;
                console.log('当前任务为空,执行任务:', job);
                job.doRun();
                console.log('当前执行任务为:', this.currentRunningJob && this.currentRunningJob.name);
                console.log('调度中心状态为:', this.scheduleStatue);
                console.log('当前调度队列为:', this.jobQueue.length);     
            }
        }
        setTimeout(this.timerCallback.bind(this), this.timeout);
    }
}

export default new Schedule();