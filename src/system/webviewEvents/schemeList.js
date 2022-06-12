import { fromEvent } from 'rxjs';
import { webview } from "@/system";
import store, { storeCommon } from '@/system/store';
import { requestMyScreenCapture } from '@/common/toolAuto';
import { isRoot, getWidthPixels, getHeightPixels, statusBarHeight } from "@auto.pro/core";
// import _ from 'lodash';
import version, {versionList} from '@/common/version';
import defaultSchemeList from '@/common/schemeList';
import MyAutomator from '@/system/MyAutomator';
import helperBridge from '@/system/helperBridge';

export default function webviewSchemeList() {
    // 返回已保存的方案列表，如果未保存过，返回common中的schemeList
    webview.on("getSchemeList").subscribe(([param, done]) => {
        let savedSchemeList = store.get("schemeList", defaultSchemeList);
        console.log(savedSchemeList);
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

    webview.on("webloaded").subscribe(([_param, done]) => {
        // 界面加载完成后申请截图权限
        requestMyScreenCapture(done);
        
        // 加载完界面后再注册返回事件
        fromEvent(ui.emitter, 'back_pressed').subscribe((e) => {
            e.consumed = true;
            webview.runHtmlFunction("routeBack");
        });

        // 初始化automator
        let storeSettings = storeCommon.get('settings', {});
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
    webview.on("getStatusBarHeight").subscribe(([_param, done]) => {
        // var resources = context.getResources();
        // var resourceId = resources.getIdentifier("status_bar_height", "dimen", "android");
        // var statusBarHeight = resources.getDimensionPixelSize(resourceId);
        // var density = context.getResources().getDisplayMetrics().density;
        // done(parseInt(statusBarHeight / density));
        done(statusBarHeight);
    });

    // 获取版本信息，前端对版本信息进行拼接，告知更新内容
    webview.on("versionInfo").subscribe(([_param, done]) => {
        // storages.remove('assttyys_ng_common');
        let storeVersion = storeCommon.get("storeVersion", null);
        storeCommon.put("storeVersion", version);
        done({
            storeVersion: storeVersion,
            versionList: versionList
        });
    });

    // 获取应用信息，每次进入app都会以弹窗形式出现
    webview.on("getAppInfo").subscribe(([_param, done]) => {
        let ret = {
            msg: '感谢使用本辅助，进群864842180了解更多信息~'
        }
        let w = getWidthPixels();
        let h = getHeightPixels();
        if (!(w == 1280 && h == 720) && !(w == 720 && h == 1280)) {
            ret.msg = `当前分辨率为 ${w} * ${h}, 非推荐分辨率 720 * 1280, 不保证正常运行。感谢使用本辅助，进群864842180了解更多信息`;
        }
        done(ret);
    });

    // 提供toast给前端使用
    webview.on("toast").subscribe(([string, done]) => {
        done();
        toastLog(string);
    });

    // 退出，前端回到方案界面后返回按两次后退出
    webview.on("exit").subscribe(([_param, done]) => {
        done();
        exit();
    });
}