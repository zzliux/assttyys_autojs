importClass(android.content.pm.ApplicationInfo);

import { fromEvent } from 'rxjs';
import { webview } from "@/system";
import { effect$, isRoot, getWidthPixels, getHeightPixels } from "@auto.pro/core";
import defaultSchemeList from '@/common/schemeList';
import myFloaty from '@/system/myFloaty';
import store, { storeCommon } from '@/system/store';
import { mergeSchemeList, setCurrentScheme } from '@/common/tool';
import { requestMyScreenCapture } from '@/common/toolAuto';
import _ from 'lodash';
import version, {versionList} from '@/common/version';
// console.show();

// 返回已保存的方案列表，如果未保存过，返回common中的schemeList
webview.on("getSchemeList").subscribe(([param, done]) => {
    let savedSchemeList = store.get("schemeList", defaultSchemeList);
    // 活动方案去除
    // done(_.filter(savedSchemeList, item => item.id != 99));
    done(savedSchemeList);
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
    setCurrentScheme(schemeName);
    done();
});

webview.on("webloaded").subscribe(([_param, done]) => {
    requestMyScreenCapture(done);
})

// todo使用core包的获取状态栏高度
webview.on("getStatusBarHeight").subscribe(([_param, done]) => {
    var resources = context.getResources();
    var resourceId = resources.getIdentifier("status_bar_height", "dimen", "android");
    var statusBarHeight = resources.getDimensionPixelSize(resourceId);
    var density = context.getResources().getDisplayMetrics().density;
    done(parseInt(statusBarHeight / density));
})

webview.on("startScript").subscribe(([_param, done]) => {
    let storeSettings = storeCommon.get('settings', {});
    let defaultLaunchAppList = storeSettings.defaultLaunchAppList || [];
    if (defaultLaunchAppList.length == 0) {
        done(null);
        context.startActivity(app.intent({
            action: Intent.ACTION_MAIN,
            category: Intent.CATEGORY_HOME,
            flags: ['ACTIVITY_NEW_TASK']
        }));
    } else if(defaultLaunchAppList.length === 1) {
        done(null);
        launchPackage(defaultLaunchAppList[0]);
    } else {
        let packages = context.getPackageManager().getInstalledPackages(0);
        let appList = [];
        let imgDirPath = files.cwd() + '/assets/img/packagesicons';
        files.ensureDir(imgDirPath + '/');
        
        let storeSettings = storeCommon.get('settings', {});
        let defaultLaunchAppList = storeSettings.defaultLaunchAppList || [];
        
        for (let i = 0; i < packages.size(); i++) {
            let packageInfo = packages.get(i);
            if ((packageInfo.applicationInfo.flags & ApplicationInfo.FLAG_SYSTEM) == 0 && defaultLaunchAppList.indexOf(packageInfo.packageName) !== -1) { // 非系统应用且在list中
                try {
                    let appIcon = packageInfo.applicationInfo.loadIcon(context.getPackageManager());
                    let impPath = imgDirPath + '/' + packageInfo.packageName + '.png';
                    if (!files.exists(impPath)) {
                        let bmp = null;
                        if (appIcon.getBitmap) {
                            bmp = appIcon.getBitmap();
                        } else if (appIcon.getBackground && appIcon.getForeground) {
                            bmp = android.graphics.Bitmap.createBitmap(appIcon.getIntrinsicWidth(), appIcon.getIntrinsicHeight(), android.graphics.Bitmap.Config.ARGB_8888);
                            let canvas = new android.graphics.Canvas(bmp);
                            appIcon.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
                            appIcon.draw(canvas);
                        }
                        if (!bmp) continue;
                        let baos = new java.io.ByteArrayOutputStream();
                        bmp.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, baos);
                        baos.flush();
                        baos.close();
                        bmp.recycle();
                        (new java.io.FileOutputStream(impPath)).write(baos.toByteArray());
                    }
                    
                    let appInfo = {
                        appName: packageInfo.applicationInfo.loadLabel(context.getPackageManager()).toString(), // 获取应用名称
                        packageName: packageInfo.packageName, // 获取应用包名，可用于卸载和启动应用
                        versionName: packageInfo.versionName, // 获取应用版本名
                        versionCode: packageInfo.versionCode, // 获取应用版本号
                        appIcon: impPath, // 获取应用图标
                    }
                    appList.push(appInfo);
                } catch (e) {
                    toastLog(e);
                }
            }
        }
        done(appList);
    }
});

webview.on('launchPackage').subscribe(([packageName, done]) => {
    done(true);
    launchPackage(packageName);
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
    if (app.autojs.versionCode >= 8081200) {
        ret.push({
            desc: '截图权限',
            name: 'screenCapturePermission',
            type: 'autojs_inner_settings_capture_permission',
            enabled: !!images.getScreenCaptureOptions()
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
    } else if ('autojs_inner_settings_capture_permission' === item.type) {
        if (item.enabled) {
            requestMyScreenCapture(function (res) {
                done(res)
            });
        } else {
            threads.start(function () {
                images.stopScreenCapture();
                done(true);
            });
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

webview.on("getAppInfo").subscribe(([_param, done]) => {
    let ret = {};
    // if (app.autojs.versionCode < 8081200) { // Pro 8.8.12-0
    //     ret = {
    //         needForceUpdate: true,
    //         msg: '主程序版本过低，请更新安装主程序后再使用，欢迎进群864842180了解更多'
    //     };
    // } else {
        ret = {
            msg: '感谢使用本辅助，进群864842180了解更多信息~'
        }
        let w = getWidthPixels();
        let h = getHeightPixels();
        if (!(w == 1280 && h == 720) && !(w == 720 && h == 1280)) {
            ret.msg = `当前分辨率为 ${w} * ${h}, 非推荐分辨率 720 * 1280, 不保证正常运行。感谢使用本辅助，进群864842180了解更多信息`;
        }
    // }
    
    done(ret);
});

webview.on("openOpenSource").subscribe(([_param, done]) => {
    app.openUrl('https://gitee.com/zzliux/assttyys_autojs');
    done();
});

webview.on("mailTo").subscribe(([_param, done]) => {
    try {
        context.startActivity(app.intent({
            action: 'android.intent.action.SENDTO',
            category: 'android.intent.category.BROWSABLE',
            flags: ['ACTIVITY_NEW_TASK'],
            data: 'mailto:zzliux@outlook.com'
        }));
    } catch (e) {
        toastLog('未找到邮件类应用，已复制至剪贴板');
        setClip('zzliux@outlook.com');
        console.log(e);
    }
    done();
});

webview.on("copyToClip").subscribe(([str, done]) => {
    setClip(str);
    toastLog(`已复制 ${str} 至剪贴板`)
});

webview.on('getToSetDefaultLaunchAppList').subscribe(([_param, done]) => {
    let packages = context.getPackageManager().getInstalledPackages(0);
    let appList = [];
    let imgDirPath = files.cwd() + '/assets/img/packagesicons';
    files.ensureDir(imgDirPath + '/');
    
    let storeSettings = storeCommon.get('settings', {});
    let defaultLaunchAppList = storeSettings.defaultLaunchAppList || [];
    
    for (let i = 0; i < packages.size(); i++) {
        let packageInfo = packages.get(i);
        if ((packageInfo.applicationInfo.flags & ApplicationInfo.FLAG_SYSTEM) == 0) { // 非系统应用
            try {
                let appIcon = packageInfo.applicationInfo.loadIcon(context.getPackageManager());
                let impPath = imgDirPath + '/' + packageInfo.packageName + '.png';
                if (!files.exists(impPath)) {
                    let bmp = null;
                    if (appIcon.getBitmap) {
                        bmp = appIcon.getBitmap();
                    } else if (appIcon.getBackground && appIcon.getForeground) {
                        bmp = android.graphics.Bitmap.createBitmap(appIcon.getIntrinsicWidth(), appIcon.getIntrinsicHeight(), android.graphics.Bitmap.Config.ARGB_8888);
                        let canvas = new android.graphics.Canvas(bmp);
                        appIcon.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
                        appIcon.draw(canvas);
                    }
                    if (!bmp) continue;
                    let baos = new java.io.ByteArrayOutputStream();
                    bmp.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, baos);
                    baos.flush();
                    baos.close();
                    bmp.recycle();
                    (new java.io.FileOutputStream(impPath)).write(baos.toByteArray());
                }
                
                let appInfo = {
                    appName: packageInfo.applicationInfo.loadLabel(context.getPackageManager()).toString(), // 获取应用名称
                    packageName: packageInfo.packageName, // 获取应用包名，可用于卸载和启动应用
                    versionName: packageInfo.versionName, // 获取应用版本名
                    versionCode: packageInfo.versionCode, // 获取应用版本号
                    appIcon: impPath, // 获取应用图标
                    referred: defaultLaunchAppList.indexOf(packageInfo.packageName) !== -1,
                }
                appList.push(appInfo);
            } catch (e) {
                toastLog(e);
            }
        } else { // 系统应用
     
        }
    }
    done(appList);
});

webview.on('saveToSetDefaultLaunchAppList').subscribe(([packageNameList, done]) => {
    let storeSettings = storeCommon.get('settings', {});
    storeSettings.defaultLaunchAppList = packageNameList;
    storeCommon.put('settings', storeSettings);
    done(true);
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
    if ((auto.service || device.sdkInt < 24) && floaty.checkPermission()) {
        myFloaty.init();
    }
});

// fromEvent(ui.emitter, 'resume').subscribe(() => {
//     context.getResources().getConfiguration().orientation === 1 ? '竖屏' : '横屏';
//     // 进入时如果是横屏，重置为竖屏
//     if (context.getResources().getConfiguration().orientation !== 1) {
//         activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
//     }
// });

// 调试用，完成后取消注释
fromEvent(ui.emitter, 'back_pressed').subscribe((e) => {
    e.consumed = true;
    webview.runHtmlFunction("routeBack");
});