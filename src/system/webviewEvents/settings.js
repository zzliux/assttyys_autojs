import { webview } from "@/system";
import drawFloaty from '@/system/drawFloaty';
import myFloaty from '@/system/myFloaty';
import { storeCommon } from '@/system/store';
import { requestMyScreenCapture } from '@/common/toolAuto';
import { isRoot } from "@auto.pro/core";
import helperBridge from '@/system/helperBridge';
import { ocr } from '@/system/ocr';


export default function webviewSettigns() {

    // 获取配置列表
    webview.on("getSettings").subscribe(([_param, done]) => {
        let storeSettings = storeCommon.get('settings', {});
        if (!storeSettings.tapType) {
            if (device.sdkInt >= 24) {
                storeSettings.tapType = '无障碍';
            } else {
                storeSettings.tapType = 'Root';
            }
            storeCommon.put('settings', storeSettings);
        }
        let ret = [];
        ret.push({
            desc: '点击/滑动模式',
            name: 'tapType',
            type: 'assttyys_setting',
            stype: 'list',
            data: ['无障碍', 'Root', 'Shell', 'RootAutomator'],
            value: storeSettings.tapType
        });
        if (device.sdkInt >= 24) { // 无障碍
            ret.push({
                desc: '无障碍服务(仅使用无障碍模式时生效)',
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
        }, {
            desc: '调试绘制',
            name: 'floaty_debugger_draw',
            type: 'assttyys_setting_floaty_debugger_draw',
            enabled: !!drawFloaty.instacne
        }, {
            desc: 'OCR扩展',
            name: 'ocr_extend',
            type: 'assttyys_setting_ocr_extend',
            enabled: ocr.isInstalled()
        }];
        done(ret);
    });

    // 保存配置
    webview.on("saveSetting").subscribe(([item, done]) => {
        if ('autojs_inner_setting' === item.type) {
            $settings.setEnabled(item.name, item.enabled);
            done(true);
        } else if ('autojs_inner_setting_power_manage' === item.type) { // 忽略电池优化
            if (item.enabled) {
                $power_manager.requestIgnoreBatteryOptimizations();
                done(true);
            } else {
                toastLog('已忽略电池优化请勿取消');
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
                    // if (floaty.checkPermission()) {
                    //     myFloaty.init();
                    // }
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
                        myFloaty.init();
                        done(true);
                    }
                }, 1000)
            } else {
                toastLog('请勿关闭悬浮权限');
                done(false);
            }
        } else if ('autojs_inner_settings_capture_permission' === item.type) {
            if (item.enabled) {
                requestMyScreenCapture(function (res) {
                    done(res)
                });
            } else {
                toastLog('请勿关闭截图权限');
                done(false);
                // threads.start(function () {
                //     images.stopScreenCapture();
                //     done(true);
                // });
            }
        } else if ('assttyys_setting' === item.type) {
            let storeSettings = storeCommon.get('settings', {});
            if ((item.stype || 'switch') === 'switch') {
                storeSettings[item.name] = item.enabled;
            } else if (item.stype === 'text') {
                storeSettings[item.name] = item.value;
            } else if (item.stype === 'list') {
                storeSettings[item.name] = item.value;
            }
            if (item.name === 'tapType') {
                helperBridge.automator.setTapType(item.value);
            }
            storeCommon.put('settings', storeSettings);
            done(true);
            toastLog('保存成功');
        } else if ('assttyys_setting_floaty_debugger_draw' === item.type) {
            if (item.enabled) {
                drawFloaty.init();
            } else {
                drawFloaty.destroy();
            }
            done(true);
        } else if ('assttyys_setting_ocr_extend' === item.type) {
            if (item.enabled) {
                ocr.install({
                    successCallback: function () {
                        console.log(111);
                        done(true)
                    },
                    failCallback: function () {
                        done(false)
                    },
                });
            } else {
                // done(true);
                // todo 卸载扩展
                toastLog('已安装扩展请勿取消');
                done(false);
            }
        }
    });

    // 打开日志
    webview.on("startActivityForLog").subscribe(([_param, done]) => {
        app.startActivity("console");
        done();
    });

    // 清空storage
    webview.on("clearStorage").subscribe(([_param, done]) => {
        storages.remove('asttyys_ng');
        done();
    });

    // 获取所有应用列表
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
                        // appIcon: 'https://local_resources_image_png' + impPath, // 获取应用图标
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

    // 保存默认启动应用，在功能列表界面点击启动后直接启动已配置的应用
    webview.on('saveToSetDefaultLaunchAppList').subscribe(([packageNameList, done]) => {
        let storeSettings = storeCommon.get('settings', {});
        storeSettings.defaultLaunchAppList = packageNameList;
        storeCommon.put('settings', storeSettings);
        done(true);
    });

    // 获取异型屏兼容强化配置
    webview.on('getShapedScreenConfig').subscribe(([_param, done]) => {
        let shapedScreenDevices = ['xiaomi 11(3200*1440)'];
        let storedShapedScreenConfig = storeCommon.get('shapedScreenConfig', []);
        let ret = [];
        shapedScreenDevices.forEach(deviceName => {
            let enabled = false;
            for (let i = 0; i < storedShapedScreenConfig.length; i++) {
                if (storedShapedScreenConfig[i] === deviceName) {
                    enabled = true;
                    break;
                }
            }
            ret.push({
                device: deviceName,
                enabled
            });
        });
        console.log(ret);
        done(ret);
    });

    // 保存异型屏兼容强化配置
    webview.on('setShapedScreenConfigEnabled').subscribe(([deviceParam, done]) => {
        let storedShapedScreenConfig = storeCommon.get('shapedScreenConfig', []);
        let indx = storedShapedScreenConfig.indexOf(deviceParam.device);
        if (indx === -1) {
            if (deviceParam.enabled) {
                storedShapedScreenConfig.push(deviceParam.device);
            }
        } else {
            if (!deviceParam.enabled) {
                storedShapedScreenConfig.splice(indx, 1);
            }
        }
        storeCommon.put('shapedScreenConfig', storedShapedScreenConfig);
        console.log('storedShapedScreenConfig:' + JSON.stringify(storedShapedScreenConfig));
        done();
    });
}