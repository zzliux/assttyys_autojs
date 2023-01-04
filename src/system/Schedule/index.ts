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
    repeatMode: 0 | 1 | 2;

    /**
     * 间隔时间（min）
     */
    interval: number;

    /**
     * 状态
     */
    status?: 'wating' | 'running' | 'done';

    /**
     * 其它配置
     */
    config?: Record<string, string>;

    /**
     * 开始运行时执行的回调
     */
    runningCallback?: Function;
}

export class Job extends JobOptions {

    constructor(options: JobOptions) {
        super();
        Object.keys(options).forEach(key => {
            this[key] = options[key];
        });
        this.status = 'wating';
    }

    doRun() {
        if (this.repeatMode === 1) {
            this.nextDate = new Date(Date.now() + this.interval * 60 * 1000);
        }
        this.status = 'running';
        this.lastRunTime = new Date();
        this.runningCallback && this.runningCallback.apply(this);
    }
    
    doDone() {
        this.lastStopTime = new Date();
        if (this.repeatMode === 0) {
            this.status = 'done';
            return;
        } else if (this.repeatMode === 1) {
            this.status = 'wating';
            return;
        } else if (this.repeatMode === 2) {
            this.nextDate = new Date(Date.now() + this.interval);
            this.status = 'wating';
            return;
        }
    }
}

class Schedule {

    timer: NodeJS.Timeout;
    timeout: number = 2000;
    jobList: Job[];

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
        let job = null;
        for (let i = 0; i < this.jobList.length; i++) {
            const thisJob = this.jobList[i];
            if (thisJob.nextDate.getTime() <= Date.now() && thisJob.status === 'wating') {
                job = thisJob;
                index = i;
                break;
            }
        }
        if (job) {
            if (job.repeatMode === 0) {
                this.jobList.splice(index, 1);
            }
            // 运行的时候可能会阻塞
            job.doRun();
        }
        setTimeout(this.timerCallback.bind(this), this.timeout);
    }
}

export default new Schedule();