import { Script } from '@/system/script';
import { IFuncOrigin } from '@/interface/IFunc';
export class Func000 implements IFuncOrigin {
	id = 0;
	name = '结束判断';
	desc = '配置停止或切换方案的条件';
	config = [{
		desc: '长时间未执行功能停止脚本',
		config: [{
			name: 'jspd_enabled_longtime_nodo',
			desc: '是否启用',
			type: 'switch',
			default: true,
		}, {
			name: 'jspd_times_longtime_nodo',
			desc: '多少分钟后停止脚本',
			type: 'integer',
			default: 10,
		}]
	}, {
		desc: '运行时间判断',
		config: [{
			name: 'jspd_enabled_zjsj',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'jspd_times_zjsj',
			desc: '执行时间(min)',
			type: 'integer',
			default: 30,
		}, {
			name: 'jspd_txpl_zjsj',
			desc: '提醒频率(s)',
			type: 'integer',
			default: 60
		}]
	}, {
		desc: '准备功能次数判断',
		config: [{
			name: 'jspd_enabled_1',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'jspd_times_1',
			desc: '执行次数',
			type: 'integer',
			default: 20,
		}]
	}, {
		desc: '退出结算次数判断',
		config: [{
			name: 'jspd_enabled_2',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'jspd_times_2',
			desc: '执行次数',
			type: 'integer',
			default: 20,
		}]
	}, {
		desc: '脚本停止后结束应用，需配置关联应用，本功能需root',
		config: [{
			name: 'stop_with_launched_app_exit',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}]
	}, {
		desc: '结束后操作',
		config: [{
			name: 'after_operation',
			desc: '结束后的操作',
			type: 'list',
			data: ['停止脚本', '切换方案', '随机等待'],
			default: '停止脚本',
		}, {
			name: 'next_scheme',
			desc: '下一个方案（切换方案时生效）',
			type: 'scheme',
			default: '通用准备退出',
		}, {
			name: 'after_operation_sleep',
			desc: '随机等待时间（x,y 为区间，单位秒，随机等待时生效）',
			type: 'text',
			default: '10,20'
		}]
	}, {
		desc: '临时暂停',
		config: [{
			name: 'pause_enabled',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'define_run_time',
			type: 'text',
			desc: '运行时间，单位分钟，逗号分隔，启动时取区间随机数作为运行时间，休息完成后重新获取随机数',
			default: '10,30',
		}, {
			name: 'define_pause_time',
			type: 'text',
			desc: '暂停休息时间，单位分钟，逗号分隔，启动时取区间随机数作为休息时间，休息完成后重新获取随机数',
			default: '2,7',
		}]
	}];
	operatorFunc(thisScript: Script, _thisOperator): boolean {
		const thisconf = thisScript.scheme.config['0'];
		// 长时间未执行任何功能后停止脚本
		if (thisconf.jspd_enabled_longtime_nodo) {
			const now = new Date();
			if (now.getTime() - thisScript.currentDate.getTime() > +thisconf.jspd_times_longtime_nodo * 60000) {
				thisScript.myToast(`因长时间(${cvtTime((now.getTime() - thisScript.currentDate.getTime()) / 1000)})未执行任何操作，脚本停止`);
				stopOrReRun();
				return true;
			}
		}

		if (thisconf.jspd_enabled_zjsj) { // 执行时间
			let currentNotifyDate = thisScript.global.currentNotifyDate;
			if (!currentNotifyDate) {
				thisScript.myToast(`脚本将于${cvtTime(+thisconf.jspd_times_zjsj * 60)}后停止`);
				currentNotifyDate = new Date();
				thisScript.global.currentNotifyDate = currentNotifyDate;
			}
			const now = new Date();
			if (now.getTime() - currentNotifyDate.getTime() > +thisconf.jspd_txpl_zjsj * 1000) {
				const leftSec = (+thisconf.jspd_times_zjsj * 60000 + thisScript.runDate.getTime() - now.getTime()) / 1000;
				thisScript.global.currentNotifyDate = new Date();
				thisScript.myToast(`脚本将于${cvtTime(leftSec)}后停止`);
			}
			if (thisScript.runDate.getTime() + +thisconf.jspd_times_zjsj * 60000 < now.getTime()) {
				stopOrReRun();
				return true;
			}
		}

		if (thisconf.jspd_enabled_1) {
			if (thisScript.runTimes['1'] >= (thisconf.jspd_times_1 as number)) {
				thisScript.myToast(`准备功能执行${thisScript.runTimes['1']}次后停止脚本`);
				stopOrReRun();
				return true;
			}
			if (!thisScript.global.currentRunTimes) {
				thisScript.global.currentRunTimes = {};
			}
			if (thisScript.runTimes['1'] !== thisScript.global.currentRunTimes['1']) {
				thisScript.global.currentRunTimes['1'] = thisScript.runTimes['1'];
				thisScript.myToast(`准备功能已执行${thisScript.runTimes['1']}次, 继续执行${+thisconf.jspd_times_1 - thisScript.runTimes['1']}次后结束`);
			}
		}
		if (thisconf.jspd_enabled_2) {
			if (thisScript.runTimes['2'] >= (thisconf.jspd_times_2 as number)) {
				thisScript.myToast(`退出结算功能执行${thisScript.runTimes['2']}次后停止脚本`);
				stopOrReRun();
				return true;
			}
			if (!thisScript.global.currentRunTimes) {
				thisScript.global.currentRunTimes = {};
			}
			if (thisScript.runTimes['2'] !== thisScript.global.currentRunTimes['2']) {
				thisScript.global.currentRunTimes['2'] = thisScript.runTimes['2'];
				thisScript.myToast(`退出结算已执行${thisScript.runTimes['2']}次, 继续执行${+thisconf.jspd_times_2 - thisScript.runTimes['2']}次后结束`);
			}
		}
		if (thisconf.pause_enabled) {
			// define_run_time,define_pause_time
			if (thisScript.global.running === undefined) {
				thisScript.global.running = true;
				const pairRunning = String(thisconf.define_run_time).split(',');
				const pairPause = String(thisconf.define_pause_time).split(',');
				thisScript.global.define_run_time = Math.floor(random(+pairRunning[0] * 1000 * 60, +pairRunning[1] * 1000 * 60));
				thisScript.global.define_pause_time = Math.floor(random(+pairPause[0] * 1000 * 60, +pairPause[1] * 1000 * 60));
				thisScript.global.runningTime = new Date().getTime() + thisScript.global.define_run_time;
				thisScript.global.pauseTime = thisScript.global.runningTime + thisScript.global.define_pause_time;
			}
			if (thisScript.global.running) {
				if (new Date().getTime() >= thisScript.global.runningTime) {
					thisScript.global.running = false;
					thisScript.myToast('脚本暂停');
					return true;
				}
				if (!thisScript.global.notifyTime) {
					thisScript.global.notifyTime = new Date().getTime();
				}
				if (new Date().getTime() - thisScript.global.notifyTime > 10000) {
					thisScript.global.notifyTime = new Date().getTime();
					thisScript.myToast(`将于${cvtTime((thisScript.global.runningTime - new Date().getTime()) / 1000)}后暂停${cvtTime(thisScript.global.define_pause_time / 1000)}`);
				}
			} else {
				if (new Date().getTime() >= thisScript.global.pauseTime) {
					thisScript.global.running = undefined;
					return true;
				}
				if (new Date().getTime() - thisScript.global.notifyTime > 10000) {
					thisScript.global.notifyTime = new Date().getTime();
					thisScript.myToast(`将于${cvtTime((thisScript.global.pauseTime - new Date().getTime()) / 1000)}后恢复执行`);
				}
				sleep(Math.max(thisScript.global.define_pause_time / 10, 5000));
				return true;
			}
		}

		function stopOrReRun() {
			// 新逻辑
			if (thisconf.after_operation === '切换方案') {
				thisScript.rerun(thisconf.next_scheme);
				sleep(3000);
			} else if (thisconf.after_operation === '停止脚本') {
				thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				// 停止脚本时关闭应用
				if (thisconf.stop_with_launched_app_exit) {
					thisScript.stopRelatedApp();
				}
				thisScript.stop();
				sleep(3000);
			} else if (thisconf.after_operation === '随机等待') {
				// 偷个懒，先用sleep暂停
				const [min, max] = String(thisconf.after_operation_sleep).split(',').map(item => (+item) * 1000);
				const toSleep = random(min, max);
				thisScript.myToast(`等待${toSleep}ms`);
				sleep(toSleep);
				thisScript.rerun();
				sleep(3000);
			}
		}

		function cvtTime(s) {
			if (s > 3600) {
				return ((s / 3600).toFixed(2)) + '小时';
			} else if (s > 60) {
				return ((s / 60).toFixed(2)) + '分钟';
			} else {
				return ((s).toFixed(2)) + '秒';
			}
		}
	}
}

export default new Func000();
