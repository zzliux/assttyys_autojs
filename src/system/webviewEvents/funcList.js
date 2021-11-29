import { webview } from "@/system";
import { storeCommon } from '@/system/store';


export default function webviewFuncList() {

    // 点击保存，设置当前方案
    webview.on("setCurrentScheme").subscribe(([schemeName, done]) => {
        setCurrentScheme(schemeName);
        done();
    });

    // 根据packagename启动应用
    webview.on('launchPackage').subscribe(([packageName, done]) => {
        done(true);
        launchPackage(packageName);
    });

    // 点击启动按钮，返回启动信息
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
}