import { webview } from "@/system";
import script from '@/system/script';
import store from '@/system/store';
import ScheduleDefaultList from '@/common/scheduleList';
import schedule, { Job } from '@/system/Schedule'
import { setCurrentScheme } from "@/common/tool";
// // import schedule from 'node-schedule';

// const emt = events.emitter()
// events.EventEmitter = function () {}
// Object.keys(emt).forEach(function (key) {
//     events.EventEmitter.prototype[key] = emt[key];
// });

// let schedule = null;
// import('node-schedule').then(function (inSchedule) {
//     schedule = inSchedule;
// });

export default function webviewSchedule() {

    // 启动时把所有调度停用，确保schedule和store里面的scheduleList同步
    const savedScheduleList = store.get("scheduleList", ScheduleDefaultList);
    savedScheduleList.forEach(item => item.checked = false);
    store.put('scheduleList', savedScheduleList);


    // 返回已保存的方案列表，如果未保存过，返回common中的scheduleList
    webview.on("getScheduleList").subscribe(([param, done]) => {
        let savedScheduleList = store.get("scheduleList", ScheduleDefaultList);

        // if (Array.isArray(savedScheduleList)) {
        //     savedScheduleList.forEach(item => {
        //         item.job = script.getScheduleJobInstance(item.id);
        //         item.checked = item.job ? item.checked : false;
        //     });
        // }

        done(savedScheduleList);
    });

    // 保存方案列表
    webview.on("saveScheduleList").subscribe(([scheduleList, done]) => {
        store.put("scheduleList", scheduleList);
        // if (Array.isArray(scheduleList)) {
        //     scheduleList.forEach(item => {
        //         item.job && script.setScheduleJobInstance(item.id, item.job);
        //     });
        // }

        console.log('scheduleList已保存');
        done("success");
    });


    // schedule.add(new Job({
    //     name: 'test',
    //     nextDate: new Date(Date.now() + 10000),
    //     repeatMode: 1,
    //     interval: 10000,
    //     runningCallback: function() {
    //         console.log(`调度任务，当前时间：${new Date().toUTCString()}`);
    //         console.log(`调度任务，this：${this}`);
    //     }
    // }));

    webview.on('scheduleChange').subscribe(([job, done]) => {
        if (job.checked) {
            const jobObj = new Job({
                ...job,
                nextDate: new Date(job.nextDate),
                runningCallback() {
                    updateJobStore(this);
                    setCurrentScheme(job.config.scheme, store);
                    script.rerunWithJob(this);
                }
            });
            jobObj.setDoneCallback(function () {
                updateJobStore(this);
            });
            schedule.add(jobObj);
        } else {
            schedule.remove(job.name);
        }
        done();

        function updateJobStore(job) {
            const sl = store.get("scheduleList", ScheduleDefaultList);
            for (let storedJob of sl) {
                if (storedJob.name === job.name) {
                    storedJob.nextDate = job.nextDate;
                    storedJob.lastRunTime = job.lastRunTime;
                    storedJob.lastStopTime = job.lastStopTime;

                    store.put('scheduleList', sl);
                    return true;
                }
            }
            return false;
        }
    });

    // const jobList = [];
    // webview.on('scheduleChange').subscribe(([item, done]) => {
    //     const index = jobList.findIndex(job => job.id === item.id);

    //     if (index != -1) {
    //         if (item.checked) {
    //             jobList[index].job.reschedule(item.config.cron, async function () {
    //                 setCurrentScheme(item.config.scheme, store);
    //                 script.rerun();
    //                 item.lastRunTime = new Date().toLocaleString();
    //             });
    //         } else {
    //             jobList[index].job.cancel();
    //         }

    //     } else {
    //         const jobTemp = schedule.scheduleJob(item.config.cron, async function () {
    //             setCurrentScheme(item.config.scheme, store);
    //             script.rerun();
    //             item.lastRunTime = new Date().toLocaleString();
    //         });
    //         jobList.push({
    //             id: item.id,
    //             job: jobTemp
    //         })
    //     }

    //     console.log(jobList);
    //     done(true);
    // });
}


