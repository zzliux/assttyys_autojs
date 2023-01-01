export class JobOptions {
    /**
     * job名
     */
    name: string;

    /**
     * 下次执行时间
     */
    nextDate: Date;

    /**
     * 重复模式： 0不重复运行，1从开始运行时间计算重复间隔，2从运行结束计算重复间隔
     */
    repeatMode: 0 | 1 | 2;

    /**
     * 间隔时间（ms）
     */
    interval: number;

    /**
     * 状态
     */
    status: 'wating' | 'running' | 'done';

    /**
     * 开始运行时执行的回调
     */
    runningCallback: Function;
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
            this.nextDate = new Date(Date.now() + this.interval);
        }
        this.status = 'running';
        this.runningCallback.apply(this);
    }
    
    doDone() {
        if (this.repeatMode === 0) {
            this.status = 'done';
            return;
        } else if (this.repeatMode === 1) {
            this.status = 'done';
            return;
        } else if (this.repeatMode === 2) {
            this.nextDate = new Date(Date.now() + this.interval);
            this.status = 'done';
            return;
        }
    }
}

class Schedule {

    timer: NodeJS.Timeout;
    timeout: number = 2000;
    jobList: Job[];

    constructor() {
        this.timer = setTimeout(this.timerCallback, this.timeout);
        this.jobList = [];
    }

    add(job: Job): void {
        this.jobList.push(job);
    }

    timerCallback() {
        let index = -1;
        let job = null;
        for (let i = 0; i < this.jobList.length; i++) {
            const thisJob = this.jobList[i];
            if (thisJob.nextDate.getTime() <= Date.now()) {
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
        setTimeout(this.timerCallback, this.timeout);
    }
}

export default new Schedule();