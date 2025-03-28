import { webview } from '@/system';
import { merge, setCurrentScheme } from '@/common/tool';
import store, { storeCommon } from '@/system/Store/store';
import { getInstalledPackages } from '@/common/toolAuto';
import defaultSchemeList from '@/common/schemeList';
import script from '@/system/script';
import { IScheme } from '@/interface/IScheme';
import funcList from '@/common/funcListIndex';
import CommonConfig from '@/common/commonConfig';
import MyFloaty from '../MyFloaty';

export default function webviewFuncList() {

	// 获取方案
	webview.on('getScheme').subscribe(([schemeName, done]) => {
		// const savedSchemeList = store.get('schemeList', []);
		// const schemeList = mergeSchemeList(savedSchemeList, defaultSchemeList);
		// for (let i = 0; i < schemeList.length; i++) {
		// 	if (schemeList[i].schemeName === schemeName) {
		// 		console.log(`getScheme: ${JSON.stringify(schemeList[i], null, 4)}`);
		// 		schemeList[i].inner = schemeNameMap[schemeList[i].schemeName] || false;
		// 		done(schemeList[i]);
		// 		return;
		// 	}
		// }
		// done({});
		const schemeList: IScheme[] = store.get('schemeList');
		done(schemeList.find((scheme) => scheme.schemeName === schemeName));
	});

	// 获取默认方案
	webview.on('getDefaultScheme').subscribe(([schemeName, done]) => {
		const schemeList = merge([], defaultSchemeList);
		for (let i = 0; i < schemeList.length; i++) {
			if (schemeList[i].schemeName === schemeName) {
				console.log(`getDefaultScheme: ${JSON.stringify(schemeList[i], null, 4)}`);
				schemeList[i].inner = true;
				done(schemeList[i]);
				return;
			}
		}
		done({});
	});

	// 点击保存，设置当前方案
	webview.on('setCurrentScheme').subscribe(([schemeName, done]) => {
		script.isPause = false;
		MyFloaty.fb.removeItem('Pause');
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

	webview.on('getFuncList').subscribe(([_param, done]) => {
		done(funcList);
	});

	webview.on('getCommonConfig').subscribe(([_param, done]) => {
		done(CommonConfig);
	});

	// 点击启动按钮，返回启动信息
	webview.on('startScript').subscribe(([_param, done]) => {
		const storeSettings = storeCommon.get('settings', {});
		const defaultLaunchAppList = storeSettings.defaultLaunchAppList || [];
		if (defaultLaunchAppList.length == 0) {
			done(null);
			script.rerun();
			context.startActivity(app.intent({
				action: android.content.Intent.ACTION_MAIN,
				category: android.content.Intent.CATEGORY_HOME,
				flags: ['ACTIVITY_NEW_TASK']
			}));
		} else if (defaultLaunchAppList.length === 1) {
			done(null);
			script.rerun();
			launchPackage(defaultLaunchAppList[0]);
		} else {
			const storeSettings = storeCommon.get('settings', {});
			const defaultLaunchAppList = storeSettings.defaultLaunchAppList || [];
			const packageList = getInstalledPackages();
			// done([]);
			const appList = packageList.filter(packageInfo => {
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