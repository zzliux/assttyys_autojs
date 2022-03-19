importClass(android.content.pm.ApplicationInfo);

import { fromEvent } from 'rxjs';
import { effect$ } from "@auto.pro/core";
import myFloaty from '@/system/myFloaty';
import webviewEvents from '@/system/webviewEvents';
import InputHideUtil from '@/system/inputhideutil';

webviewEvents();

// effect$是作业线程，当core的权限全部到位后，effect$才开始运作
effect$.subscribe(() => {
    // 监听放在effect里，只有当权限到位后，监听才生效
    if (floaty.checkPermission()) {
        myFloaty.init();
    }
    InputHideUtil.assistActivity(activity);
});

fromEvent(ui.emitter, 'resume').subscribe(() => {
    // context.getResources().getConfiguration().orientation === 1 ? '竖屏' : '横屏';
    // 进入时如果是横屏，重置为竖屏
    if (context.getResources().getConfiguration().orientation !== 1) {
        // activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
    }
    // webview.runHtmlJS('window.innerHeight').subscribe((height) => {
    //     toastLog(`页面高度=${height}`);
    // })
});
