// require('@/system/FloatButton/FloatButton');
import FloatButton from '@/system/FloatButton/FloatButton';
import schemeDialog from '@/system/schemeDialog';
import script from '@/system/script';
import { showScheduleDialog } from '@/system/Schedule/scheduleDialog';
import { storeCommon } from '@/system/Store/store';
// import { myToast } from '@/common/toolAuto';

/**
 * 悬浮按钮，对大柒的悬浮按钮进行封装
 */
export class MyFloaty {
	fb: any;
	init() {
		const storeSettings = storeCommon.get('settings', {});
		const trueCount = storeSettings.defaultFloat.filter(item => item.referred === true).length;
		if (this.fb) return;
		const self = this;
		this.fb = new FloatButton();
		this.fb.setMenuOpenAngle(180);
		this.fb.setAllButtonSize(30);
		if (trueCount > 1) {
			this.fb.setMenuRadius(40);
		} else {
			this.fb.setMenuRadius(34);
		}
		this.fb.setIcon('file://' + files.cwd() + '/assets/img/ay.png');
		this.fb.setColor('#FFFFFF');
		this.fb.setAutoCloseMenuTime(3000);
		// this.fb.addItem('Home')
		//     //设置图标
		//     .setIcon('@drawable/ic_home_black_48dp')
		//     //图标着色
		//     .setTint('#FFFFFF')
		//     //背景颜色
		//     .setColor('#0099FF')
		//     //点击事件
		//     .onClick((_view, _name) => {
		//         script.stop();
		//         var i = new android.content.Intent(activity, activity.class);
		//         i.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
		//         i.addFlags(android.content.Intent.FLAG_ACTIVITY_SINGLE_TOP);
		//         context.startActivity(i);
		//         return false;
		//     });



		const runStopItem = this.fb.addItem('RunStop');
		// 启用复选框属性
		runStopItem.toCheckbox(mUtil => {
			// 未选中样式
			mUtil.icon1('@drawable/ic_play_arrow_black_48dp').tint1('#FFFFFF').color1('#08BC92');
			// 选中样式
			mUtil.icon2('@drawable/ic_stop_black_48dp').tint2('#FFFFFF').color2('#DC1C2C');
		})
			// 设置属性为选中 第一种
			// .setChecked(true, true)
			.onClick((_view, _name, state) => {
				if (state) {
					const storeSettings = storeCommon.get('settings', {});
					if (storeSettings.floaty_scheme_openApp) {
						script.launchRelatedApp();
					}
					script.isPause = false; // 全新启动
					if (script.job?.status === 'running') { // 通过定时任务启动的然后又暂停了，再全新启动的话，需要把job事件完成
						script.job.doDone();
					}
					self.thisRun();
				} else {
					self.thisStop();
				}
				// 返回 true:保持菜单开启 false:关闭菜单
				return false;
			});

		this.fb.addItem('SchemeListMenu')
			// 设置图标
			.setIcon('@drawable/ic_format_indent_increase_black_48dp')
			// 图标着色
			.setTint('#FFFFFF')
			// 背景颜色
			.setColor('#bfc1c0')
			// 点击事件
			.onClick((_view, _name) => {
				script.stop();
				schemeDialog.show(this);
				return false;
			});

		this.fb.addItem('SchemeAutoRun')
			.setIcon('@drawable/ic_playlist_play_black_48dp')
			// 图标着色
			.setTint('#FFFFFF')
			// 背景颜色
			.setColor('#FF9933')
			// 点击事件
			.onClick((_view, _name) => {
				script.stop();
				self.thisRun('autoRun');
				return false;
			});
		// if (storeSettings.defaultFloat.find(item => item.floatyName === '暂停图标' && item.referred === true)) {
		// 	this.fb.addItem('Pause')
		// 		.setIcon('@drawable/ic_pause_black_48dp')
		// 		.setTint('#FFFFFF')
		// 		.setColor('#FF4800')
		// 		.onClick((_view, _name) => {
		// 			isRunStopChecked = !isRunStopChecked;
		// 			runStopItem.setChecked(isRunStopChecked, true); // 手动更新 UI
		// 			if (globalThis.runThread && globalThis.runThread.isAlive()) {
		// 				self.thisPause();
		// 				myToast('已暂停,再按一次继续');
		// 			} else {
		// 				self.thisRun();
		// 			}
		// 			return false;
		// 		});
		// }
		if (storeSettings.defaultFloat.find(item => item.floatyName === '截图图标' && item.referred === true)) {
			this.fb.addItem('CapScreen')
				.setIcon('@drawable/ic_landscape_black_48dp')
				// 图标着色
				.setTint('#FFFFFF')
				.setColor('#FF3300')
				.onClick((_view, _name) => {
					threads.start(function () {
						sleep(600);
						script.keepScreen(); // 更新图片
						const bmp = script.helperBridge.helper.GetBitmap();
						const img = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(bmp);
						const path = `/sdcard/assttyys/screenshot/${new Date().getTime()}.png`;
						files.ensureDir(path);
						img.saveTo(path);
						img.recycle();
						bmp.recycle();
						media.scanFile(path);
						script.myToast(`截图已保存至${path}`);
					});
					return false;
				});
		}
		if (storeSettings.defaultFloat.find(item => item.floatyName === '日志图标' && item.referred === true)) {
			this.fb.addItem('ViewLogConsole')
				.setIcon('@drawable/ic_assignment_black_48dp')
				// 图标着色
				.setTint('#FFFFFF')
				.setColor('#FFCCCC')
				.onClick((_view, _name) => {
					const i = new android.content.Intent(activity, activity.class);
					i.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
					i.addFlags(android.content.Intent.FLAG_ACTIVITY_SINGLE_TOP);
					context.startActivity(i);
					setTimeout(() => {
						app.startActivity('console');
					}, 500);
					return false;
				});
		}

		if ($device.sdkInt >= 23 && storeSettings.defaultFloat.find(item => item.floatyName === '定时图标' && item.referred === true)) { // android 6
			this.fb.addItem('ScheduleList')
				.setIcon('@drawable/ic_list_black_48dp')
				// 图标着色
				.setTint('#FFFFFF')
				.setColor('#FF66CC')
				.onClick((_view, _name) => {
					showScheduleDialog();
				});
		}
		if (trueCount > 1) {
			this.fb.setAllButtonPadding(8);
		} else {
			this.fb.setAllButtonPadding(6);
		}
		this.fb.getViewUtil('logo').setPadding(0);
		this.fb.setColor('#00000000');
		this.fb.show();

		script.setRunCallback(function () {
			setTimeout(() => {
				runStopItem.setChecked(true, true);
				self.fb.removeItem('Pause'); // 暂停的时候启动可能会还有一个暂停按钮，需提前删除
				self.fb.insertItem('Pause', 1)
					.toCheckbox(mUtil => {
						// 未选中样式
						mUtil.icon1('@drawable/ic_pause_black_48dp').tint1('#FFFFFF').color1('#FF4800');
						// 选中样式
						mUtil.icon2('@drawable/ic_eject_black_48dp').tint2('#FFFFFF').color2('#FF4800').rotation2(90);
					})
					.onClick((_view, _name, state) => {
						if (state) {
							self.thisPause(); // 暂停也会调用的StopCallBack，下面两行不能执行
						} else {
							self.thisRun();
							// 删除自己，通过RunCallback再添加自己
							self.fb.removeItem('Pause');
						}
						// runStopItem.setChecked(false, true);
						// self.fb.removeItem('Pause');
						return false;
					});
			}, 500);
			// self.fb.setTint('#ff08bc92');
			ui.run(function () {
				// @ts-expect-error d.ts文件问题
				self.fb.getView('logo').setColorFilter(colors.argb(255, 0x08, 0xbc, 0x92));
			});
		});

		script.setStopCallback(function () {
			setTimeout(() => {
				runStopItem.setChecked(false, true);
				// 非暂停状态的停止移除暂停按钮
				if (!script.isPause) self.fb.removeItem('Pause');
			}, 500)
			// self.fb.setTint('#00000000');
			ui.run(function () {
				// @ts-expect-error d.ts文件问题
				self.fb.getView('logo').setColorFilter(colors.argb(0, 0, 0, 0));
			});
		});
	}

	thisRun(type?: string) {
		type = type || 'run';
		if (app.autojs.versionCode >= 8081200) {
			// @ts-expect-error d.ts文件问题
			const capOpt = images.getScreenCaptureOptions();
			if (null == capOpt) {
				// 通过报错来切换图标状态
				script[type](this);
				toastLog('无截图权限');
			} else {
				script[type](this);
			}
		} else {
			script[type](this);
		}
	}

	thisStop() {
		script.stop();
	}

	thisPause() {
		script.pause();
	}
}

export default new MyFloaty();
