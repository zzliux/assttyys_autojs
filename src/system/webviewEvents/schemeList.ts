import { fromEvent } from 'rxjs';
import { webview } from '@/system';
import store, { storeCommon } from '@/system/store';
import { requestMyScreenCapture } from '@/common/toolAuto';
import { getWidthPixels, getHeightPixels } from '@auto.pro/core';
// import _ from 'lodash';
import version, { versionList } from '@/common/version';
import defaultSchemeList, { schemeNameMap } from '@/common/schemeList';
import MyAutomator from '@/system/MyAutomator';
import helperBridge from '@/system/helperBridge';

export default function webviewSchemeList() {
	// 返回已保存的方案列表，如果未保存过，返回common中的schemeList
	webview.on('getSchemeList').subscribe(([_param, done]) => {
		const savedSchemeList = store.get('schemeList', defaultSchemeList);
		savedSchemeList.forEach(item => {
			item.inner = schemeNameMap[item.schemeName] || false;
		});
		done(savedSchemeList);
	});

	webview.on('getGroupNames').subscribe(([_param, done]) => {
		const savedSchemeList = store.get('schemeList', defaultSchemeList);
		const groupNamesMap = {};
		savedSchemeList.forEach(s => {
			if (s.groupName) groupNamesMap[s.groupName] = 1;
		});
		done(Object.keys(groupNamesMap));
	});

	// 保存方案列表
	webview.on('saveSchemeList').subscribe(([schemeList, done]) => {
		store.put('schemeList', schemeList);
		console.log('schemeList已保存');
		done('success');
	});

	/**
     * 收藏/取消收藏方案
     */
	webview.on('starScheme').subscribe(([opt, done]) => {
		const savedSchemeList = store.get('schemeList', defaultSchemeList);
		for (const scheme of savedSchemeList) {
			if (scheme.schemeName === opt.schemeName) {
				scheme.star = opt.star;
				done(scheme);
				store.put('schemeList', savedSchemeList);
				toastLog(`${!opt.star ? '取消' : ''}收藏成功`);
				return;
			}
		}
	});

	webview.on('webloaded').subscribe(([_param, done]) => {
		// 界面加载完成后申请截图权限
		requestMyScreenCapture(done, helperBridge);

		// 加载完界面后再注册返回事件
		fromEvent(ui.emitter, 'back_pressed').subscribe((e: any) => {
			e.consumed = true;
			webview.runHtmlFunction('routeBack');
		});

		// 注册返回界面的事件
		fromEvent(ui.emitter, 'resume').subscribe((_e) => {
			// 更新定时任务界面的数据
			webview.runHtmlJS('window.loadScheduleData && window.loadScheduleData()');
		});

		// 初始化automator
		const storeSettings = storeCommon.get('settings', {});
		if (!storeSettings.tapType) {
			if (device.sdkInt >= 24) {
				storeSettings.tapType = '无障碍';
			} else {
				storeSettings.tapType = 'Root';
			}
			storeCommon.put('settings', storeSettings);
		}
		helperBridge.setAutomator(new MyAutomator(storeSettings.tapType));
	});

	// TODO 使用core包的获取状态栏高度
	webview.on('getStatusBarHeight').subscribe(([_param, done]) => {
		const resources = context.getResources();
		const resourceId = resources.getIdentifier('status_bar_height', 'dimen', 'android');
		const statusBarHeight = resources.getDimensionPixelSize(resourceId);
		const density = context.getResources().getDisplayMetrics().density;
		done(Math.floor(statusBarHeight / density));
	});

	// 获取版本信息，前端对版本信息进行拼接，告知更新内容
	webview.on('versionInfo').subscribe(([_param, done]) => {
		// storages.remove('assttyys_ng_common');
		const storeVersion = storeCommon.get('storeVersion', null);
		storeCommon.put('storeVersion', version);
		done({
			storeVersion: storeVersion,
			versionList: versionList
		});
	});

	// 获取应用信息，每次进入app都会以弹窗形式出现
	webview.on('getAppInfo').subscribe(([_param, done]) => {
		const ret = { msg: '' };
		const w = getWidthPixels();
		const h = getHeightPixels();
		if (!(w == 1280 && h == 720) && !(w == 720 && h == 1280)) {
			ret.msg = `当前分辨率为 ${w} * ${h}, 非推荐分辨率 720 * 1280, 不保证正常运行。`;
		}
		done(ret);
	});

	webview.on('getClip').subscribe(([_param, done]) => {
		done(getClip());
	});

	// 提供toast给前端使用
	webview.on('toast').subscribe(([string, done]) => {
		done();
		toastLog(string);
	});

	// 退出，前端回到方案界面后返回按两次后退出
	webview.on('exit').subscribe(([_param, done]) => {
		done();
		exit();
	});
}