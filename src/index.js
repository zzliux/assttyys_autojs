import { fromEvent } from 'rxjs';
import { webview } from "@/system";
import { effect$, isRoot } from "@auto.pro/core";
import defaultSchemeList from '@/common/schemeList';
import myFloaty from '@/system/myFloaty';
import store, { storeCommon } from '@/system/store';
import helperBridge from "@/system/helperBridge";
import { mergeSchemeList } from '@/common/tool';
import _ from 'lodash';
import version, {versionList} from '@/common/version';
// console.show();

// 返回已保存的方案列表，如果未保存过，返回common中的schemeList
webview.on("getSchemeList").subscribe(([param, done]) => {
    let savedSchemeList = store.get("schemeList", defaultSchemeList);
    // 活动方案去除
    done(_.filter(savedSchemeList, item => item.id != 99));
});

// 保存方案列表
webview.on("saveSchemeList").subscribe(([schemeList, done]) => {
    store.put("schemeList", schemeList);
    console.log('schemeList已保存');
    done("success");
});

// 获取方案
webview.on("getScheme").subscribe(([schemeName, done]) => {
    let savedSchemeList = store.get("schemeList", []);
    let schemeList = mergeSchemeList(savedSchemeList, defaultSchemeList);
    for (let i = 0; i < schemeList.length; i++) {
        if (schemeList[i].schemeName === schemeName) {
            done(schemeList[i]);
            return;
        }
    }
    done({});
});

webview.on("saveScheme").subscribe(([scheme, done]) => {
    let savedSchemeList = store.get("schemeList", defaultSchemeList);
    let schemeList = mergeSchemeList(savedSchemeList, defaultSchemeList);
    for (let i = 0; i < schemeList.length; i++) {
        if (schemeList[i].schemeName === scheme.schemeName) {
            scheme.id = schemeList[i].id;
            schemeList[i] = scheme;
            break;
        }
    }
    store.put("schemeList", schemeList);
    done("success");
});

webview.on("setCurrentScheme").subscribe(([schemeName, done]) => {
    let savedSchemeList = store.get("schemeList", defaultSchemeList);
    for (let i = 0; i < savedSchemeList.length; i++) {
        if (savedSchemeList[i].schemeName === schemeName) {
            store.put('currentScheme', savedSchemeList[i]);
            break;
        }
    }
    done();
});

// todo使用core包的获取状态栏高度
webview.on("getStatusBarHeight").subscribe(([_param, done]) => {
    var resources = context.getResources();
    var resourceId = resources.getIdentifier("status_bar_height", "dimen", "android");
    var statusBarHeight = resources.getDimensionPixelSize(resourceId);
    var density = context.getResources().getDisplayMetrics().density;
    done(parseInt(statusBarHeight / density));
})

webview.on("startScript").subscribe(([_param, done]) => {
    done();
    context.startActivity(app.intent({
        action: Intent.ACTION_MAIN,
        category: Intent.CATEGORY_HOME,
        flags: ['ACTIVITY_NEW_TASK']
    }));
});

webview.on("getSettings").subscribe(([_param, done]) => {
    let storeSettings = storeCommon.get('settings', {});
    let ret = [];
    if (device.sdkInt >= 24) { // 无障碍
        ret.push({
            desc: '无障碍服务',
            name: 'autoService',
            type: 'autojs_inner_setting_auto_service',
            enabled: !!auto.service
        });
    }
    ret = [...ret, {
        desc: '悬浮窗权限',
        name: 'floatyPerminssion',
        type: 'autojs_inner_setting_floaty_permission',
        enabled: floaty.checkPermission()
    }, {
        desc: '音量上键停脚本及程序',
        name: 'stop_all_on_volume_up',
        type: 'autojs_inner_setting',
        enabled: $settings.isEnabled('stop_all_on_volume_up')
    }, {
        desc: '前台服务',
        name: 'foreground_service',
        type: 'autojs_inner_setting',
        enabled: $settings.isEnabled('foreground_service')
    }];
    if (device.sdkInt >= 23) {
        ret.push({
            desc: '忽略电池优化',
            name: 'ignoreBatteryOptimization',
            type: 'autojs_inner_setting_power_manage',
            enabled: $power_manager.isIgnoringBatteryOptimizations()
        });
    }
    ret = [...ret, {
        desc: '悬浮选择方案后是否直接启动脚本',
        name: 'floaty_scheme_direct_run',
        type: 'assttyys_setting',
        enabled: storeSettings.floaty_scheme_direct_run || false
    }];
    done(ret);
});



webview.on("saveSetting").subscribe(([item, done]) => {
    if ('autojs_inner_setting' === item.type) {
        $settings.setEnabled(item.name, item.enabled);
        done(true);
    } else if ('autojs_inner_setting_power_manage' === item.type) { // 忽略电池优化
        if (item.enabled) {
            $power_manager.requestIgnoreBatteryOptimizations();
            done(true);
        } else {
            done(false);
        }
    } else if ('autojs_inner_setting_auto_service' === item.type) { // 无障碍
        if (item.enabled) {
            // 启用无障碍服务
            if (isRoot) {
                $settings.setEnabled('enable_accessibility_service_by_root', true);
            } else {
                $settings.setEnabled('enable_accessibility_service_by_root', false);
                toastLog('在回到程序前请手动开启无障碍服务');
            }
            threads.start(function () {
                auto.waitFor();
                if (floaty.checkPermission()) {
                    myFloaty.init();
                }
                done(true);
            });
        } else {
            auto.service && auto.service.disableSelf();
            done(true);
        }
    } else if ('autojs_inner_setting_floaty_permission' === item.type) {
        if (item.enabled) {
            toastLog('在回到程序前请手动开启悬浮窗权限');
            floaty.requestPermission();
            let count = 0;
            let timmer = setInterval(function () {
                count++;
                if (count > 20) {
                    clearInterval(timmer);
                    done(false);
                }
                if (floaty.checkPermission()) {
                    clearInterval(timmer);
                    if (auto.service || device.sdkInt < 24) {
                        myFloaty.init();
                    }
                    done(true);
                }
            }, 1000)
        } else {
            done(false);
        }
    } else if ('assttyys_setting' === item.type) {
        let storeSettings = storeCommon.get('settings', {});
        storeSettings[item.name] = item.enabled;
        storeCommon.put('settings', storeSettings);
        done(true);
    }
});

webview.on("startActivityForLog").subscribe(([_param, done]) => {
    app.startActivity("console");
    done();
});

webview.on("clearStorage").subscribe(([_param, done]) => {
    storages.remove('asttyys_ng');
    done();
});

webview.on("versionInfo").subscribe(([_param, done]) => {
    // storages.remove('assttyys_ng_common');
    let storeVersion = storeCommon.get("storeVersion", null);
    storeCommon.put("storeVersion", version);
    done({
        storeVersion: storeVersion,
        versionList: versionList
    });
});

webview.on("toast").subscribe(([string, done]) => {
    done();
    toastLog(string);
});

webview.on("exit").subscribe(([_param, done]) => {
    done();
    exit();
});



// effect$是作业线程，当core的权限全部到位后，effect$才开始运作
effect$.subscribe(() => {
    // 监听放在effect里，只有当权限到位后，监听才生效
    helperBridge.init();
    if ((auto.service || device.sdkInt < 24) && floaty.checkPermission()) {
        myFloaty.init();
    }
});

fromEvent(ui.emitter, 'resume').subscribe(() => {
    // context.getResources().getConfiguration().orientation === 1 ? '竖屏' : '横屏';
    // 进入时如果是横屏，重置为竖屏
    if (context.getResources().getConfiguration().orientation !== 1) {
        activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
    }
});

// 调试用，完成后取消注释
fromEvent(ui.emitter, 'back_pressed').subscribe((e) => {
    e.consumed = true;
    webview.runHtmlFunction("routeBack");
});