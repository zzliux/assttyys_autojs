import { webview } from '@/system';
import script from '@/system/script';
import store from '@/system/Store/store';
import ScheduleDefaultList from '@/common/scheduleList';
import schedule, { Job, JobOptions, mergeOffsetTime } from '@/system/Schedule'
import { getNextByCron } from '@/common/toolCron';
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

	// 3. 初始化scheduleList
	let savedScheduleList = store.get('scheduleList');
	if (!savedScheduleList) {
		console.log('初始化scheduleList', ScheduleDefaultList);
		store.put('scheduleList', ScheduleDefaultList);
		savedScheduleList = ScheduleDefaultList;
	}
	// 3.1 cron更新下次执行时间，时间字段转回date类型
	savedScheduleList.forEach((item: JobOptions) => {
		['lastRunTime', 'nextDate', 'lastStopTime'].forEach(keyName => {
			try {
				const dtstr = item[keyName as keyof JobOptions] as string;
				if (dtstr) {
					item[keyName as 'lastRunTime' | 'nextDate' | 'lastStopTime'] = new Date(dtstr);
				}
			} catch (e) {
				console.log(`${item.name}中${keyName}转换失败：${item[keyName as keyof JobOptions]}`)
				item[keyName as 'lastRunTime' | 'nextDate' | 'lastStopTime'] = null;
			}
		})
		if (item.repeatMode === 3 && item.checked) {
			const nextDate = getNextByCron(item.interval);
			if (!nextDate) return; // cron表达式解析失败，跳过该任务
			item.nextDate = mergeOffsetTime(nextDate, item.nextOffset);
		}
		jobToSchedule(item); // autojs端特有，用于将job加入schedule，mock做不到该逻辑，先注释
	});
	store.put('scheduleList', savedScheduleList);


	// 返回已保存的定时任务列表，如果未保存过，返回common中的scheduleList
	webview.on('getScheduleList').subscribe(([_param, done]) => {
		const savedScheduleList = store.get('scheduleList');
		done(savedScheduleList);
	});

	// 保存定时任务列表
	webview.on('saveScheduleList').subscribe(([scheduleList, done]) => {
		// store.put('scheduleList', scheduleList);
		// // if (Array.isArray(scheduleList)) {
		// //     scheduleList.forEach(item => {
		// //         item.job && script.setScheduleJobInstance(item.id, item.job);
		// //     });
		// // }

		// console.log('scheduleList已保存');
		// done('success');

		store.put('scheduleList', scheduleList);
		done({ error: 0, message: 'success' });
	});

	webview.on('getScheduleInstance').subscribe(([_param, done]) => {
		done(schedule);
	});

	webview.on('setScheduleLazyMode').subscribe(([lazyMode, done]) => {
		schedule.lazyMode = lazyMode;
		done('success');
	});

	webview.on('getScheduleLazyMode').subscribe(([_param, done]) => {
		done(schedule.lazyMode);
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
		jobToSchedule(job);
		schedule.immediateTimerInterval();
		done();
	});

	function jobToSchedule(job: JobOptions) {
		if (job.checked) {
			const jobObj = new Job({
				...job,
				nextDate: new Date(job.nextDate),
				runningCallback() {
					updateJobStore(this);
					script.isPause = false;
					script.setCurrentScheme(job.config.scheme);
					script.launchRelatedApp();
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

		function updateJobStore(job: JobOptions) {
			const sl = store.get('scheduleList', ScheduleDefaultList);
			for (const storedJob of sl) {
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
	}

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


