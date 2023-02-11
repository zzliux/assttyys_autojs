import type { RepeatModeType, StatusType } from './type';
import { deepClone } from '@/common/tool';
import { checkedDateByCron, getNextByCron } from '@/common/toolCron';

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
     * 重复模式： 0不重复运行，1从开始运行时间计算重复间隔，2从运行结束计算重复间隔，3CRON表达式
     */
    repeatMode: RepeatModeType;

    /**
     * 间隔时间（min）
     */
    interval: string;

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

    /**
     * 任务是否已暂停
     */
    isPaused?: boolean;
}

export class Job extends JobOptions {

    private doneCallback: Function;

    status: StatusType = 'wating';
    level: string = '1';
    isPaused: boolean = false;

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

    doRun = () => {
        if (this.repeatMode === 1 && !this.isPaused) {
            this.nextDate = new Date(Date.now() + Number.parseInt(this.interval, 10) * 60 * 1000);
        }
        this.isPaused = false;
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
            this.nextDate = new Date(Date.now() + Number.parseInt(this.interval, 10) * 60 * 1000);
            this.doneCallback && this.doneCallback.apply(this);
            this.status = 'wating';
            return;
        } else if (this.repeatMode === 3) {
            this.nextDate = getNextByCron(this.interval);
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
    currentRunningJobId: number = null;

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

    getJobById(id: number): Job | null {
        const resultJobIndex = this.jobList.findIndex(item => item.id === id);
        if (resultJobIndex === -1) {
            return null;
        } else {
            return this.jobList[resultJobIndex];
        }
    }

    timerCallback() {
        let index = -1;
        let job: Job = null;

        this.scheduleStatue = this.jobList.findIndex(item => item.status === 'running') === -1
            ? 'idle' : 'running';
        const currentRunningJob = this.getJobById(this.currentRunningJobId);
        // console.log('--调度任务--当前任务:', this.currentRunningJobId);

        // console.log('result:', getNextByCron('0 14,16 2,14 29 2 0,2,4'));

        if (currentRunningJob === null) {
            this.currentRunningJobId = null;
        } else if (currentRunningJob.status !== 'running') {
            console.log('--调度任务--当前任务已完成:', currentRunningJob.id);
            this.currentRunningJobId = null;
        }


        for (let i = 0; i < this.jobList.length; i++) {
            const thisJob = this.jobList[i];
            if (thisJob.status === 'wating') {
                if (thisJob.repeatMode === 3) {
                    if (checkedDateByCron(thisJob.interval)) {
                        job = thisJob;
                        index = i;
                        break;
                    }
                } else if ((thisJob.nextDate.getTime() <= Date.now() && Date.now() - thisJob.nextDate.getTime() < 1800000)) {
                    job = thisJob;
                    index = i;
                    break;
                }
            }
        }

        // 判断调度中心是否为空闲，待执行队列是否不为空
        if (this.scheduleStatue === 'idle' && this.jobQueue.length > 0) {
            // 获取待执行队列优先级最高的等级
            const maxLevel = Math.max(...this.jobQueue.map(item => Number.parseInt(item.level, 10)));
            const jobIndex = this.jobQueue.findIndex(item => Number.parseInt(item.level, 10) === maxLevel);
            const _job = this.getJobById(this.jobQueue[jobIndex].id);

            if (_job !== null) {
                if (job) {
                    //  当前执行job优先级低于队列的任务，把当前job添加至待执行队列
                    if (_job && Number.parseInt(job.level, 10) < Number.parseInt(_job.level, 10)) {
                        job.isPaused = true;
                        this.jobQueue.push(job);

                        job = _job;
                        this.jobQueue.splice(jobIndex, 1);
                    }
                } else {
                    job = _job;
                    this.jobQueue.splice(jobIndex, 1);
                }
            }
        }

        if (job) {
            if (job.repeatMode === 0) {
                this.jobList.splice(index, 1);
            }

            if (this.currentRunningJobId !== null && currentRunningJob !== null) {
                if (Number.parseInt(currentRunningJob.level, 10) < Number.parseInt(job.level, 10)) {
                    this.jobQueue.push(deepClone(currentRunningJob));
                    this.currentRunningJobId = job.id;
                    currentRunningJob.isPaused = true;
                    console.log('--调度任务--当前任务不为空,执行任务:', job.id);
                    job.doRun();
                    console.log('--调度任务--当前执行任务为:', currentRunningJob && currentRunningJob.name);
                    console.log('--调度任务--调度中心状态为:', this.scheduleStatue);
                    console.log('--调度任务--当前调度队列为:', this.jobQueue.map(item => item.id));
                } else {
                    if (!job.isPaused) {
                        console.log('--调度任务--当前执行任务优先级高于调度任务');
                        job.isPaused = true;
                        this.jobQueue.push(deepClone(job));
                    }
                }
            } else {
                this.currentRunningJobId = job.id;
                job.doRun();
                console.log('--调度任务--当前任务为空,执行任务:', job.id, 'Id为:', this.currentRunningJobId);
                console.log('--调度任务--调度中心状态为:', this.scheduleStatue);
                console.log('--调度任务--当前调度队列为:', this.jobQueue.map(item => item.id));
            }
        }
        setTimeout(this.timerCallback.bind(this), this.timeout);
    }
}

export default new Schedule();