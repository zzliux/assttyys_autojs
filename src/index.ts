import { effect$ } from '@auto.pro/core';
import myFloaty from '@/system/MyFloaty';
import webviewEvents from '@/system/webviewEvents';
import InputHideUtil from '@/system/inputhideutil';
import { storeCommon } from '@/system/store';
import drawFloaty from '@/system/drawFloaty';

webviewEvents();

// effect$是作业线程，当core的权限全部到位后，effect$才开始运作
effect$.subscribe(() => {
	// 监听放在effect里，只有当权限到位后，监听才生效
	if (floaty.checkPermission()) {
		myFloaty.init();
	}
	const storeSettings = storeCommon.get('settings', {});
	if (storeSettings?.floaty_debugger_draw) {
		drawFloaty.init();
	}
	InputHideUtil.assistActivity(activity);
});
