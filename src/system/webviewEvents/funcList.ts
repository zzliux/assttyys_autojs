import { webview } from "@/system";
import { setCurrentScheme } from '@/common/tool';
import store, { storeCommon } from '@/system/store';
import { getInstalledPackages, mergeSchemeList } from '@/common/toolAuto';
import defaultSchemeList from '@/common/schemeList';
import script from '@/system/script';

export default function webviewFuncList() {

    // 获取方案
    webview.on("getScheme").subscribe(([schemeName, done]) => {
        let savedSchemeList = store.get("schemeList", []);
        let schemeList = mergeSchemeList(savedSchemeList, defaultSchemeList);
        for (let i = 0; i < schemeList.length; i++) {
            if (schemeList[i].schemeName === schemeName) {
                console.log(`getScheme: ${JSON.stringify(schemeList[i], null, 4)}`);
                done(schemeList[i]);
                return;
            }
        }
        done({});
    });

    // 保存方案
    webview.on("saveScheme").subscribe(([scheme, done]) => {
        let savedSchemeList = store.get("schemeList", defaultSchemeList);
        console.log(`saveScheme: ${JSON.stringify(scheme, null, 4)}`);
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

    // 点击保存，设置当前方案
    webview.on("setCurrentScheme").subscribe(([schemeName, done]) => {
        setCurrentScheme(schemeName, store);
        done();
    });

    // 根据packagename启动应用
    webview.on('launchPackage').subscribe(([packageName, done]) => {
        done(true);
        launchPackage(packageName);
    });


    webview.on('startCurrentScheme').subscribe(([_param, done]) => {
        done(true);
        script.rerun();
    });

    // 点击启动按钮，返回启动信息
    webview.on("startScript").subscribe(([_param, done]) => {
        let storeSettings = storeCommon.get('settings', {});
        let defaultLaunchAppList = storeSettings.defaultLaunchAppList || [];
        if (defaultLaunchAppList.length == 0) {
            done(null);
            script.rerun();
            context.startActivity(app.intent({
                action: android.content.Intent.ACTION_MAIN,
                category: android.content.Intent.CATEGORY_HOME,
                flags: ['ACTIVITY_NEW_TASK']
            }));
        } else if(defaultLaunchAppList.length === 1) {
            done(null);
            script.rerun();
            launchPackage(defaultLaunchAppList[0]);
        } else {
            let storeSettings = storeCommon.get('settings', {});
            let defaultLaunchAppList = storeSettings.defaultLaunchAppList || [];
            let packageList = getInstalledPackages();
            // done([]);
            let appList = packageList.filter(packageInfo => {
                // 保留非系统应用
                return (packageInfo.applicationInfo.flags & android.content.pm.ApplicationInfo.FLAG_SYSTEM) === 0 && defaultLaunchAppList.indexOf(packageInfo.packageName) !== -1;
            }).map(packageInfo => {
                return {
                    appName: packageInfo.applicationInfo.label,
                    packageName: packageInfo.packageName, // 获取应用包名，可用于卸载和启动应用
                    versionName: packageInfo.versionName, // 获取应用版本名
                    versionCode: packageInfo.versionCode, // 获取应用版本号
                    referred: defaultLaunchAppList.indexOf(packageInfo.packageName) !== -1,
                }
            });
            done(appList);
        }
    });
}