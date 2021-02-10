import { webview } from "@/system"
import { effect$ } from "@auto.pro/core"
import defaultSchemeList from '@/common/schemeList';
import myFloaty from '@/system/myFloaty';
import store, { storeCommon } from '@/system/store';
import helperBridge from "@/system/helperBridge";
import { mergeSchemeList } from '@/common/tool';
import version, {versionList} from '@/common/version';
// console.show();

// 返回已保存的方案列表，如果未保存过，返回common中的schemeList
webview.on("getSchemeList").subscribe(([param, done]) => {
    let savedSchemeList = store.get("schemeList", defaultSchemeList);
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
    done([{
        desc: '音量上键停脚本及程序',
        name: 'stop_all_on_volume_up',
        type: 'autojs_inner_setting',
        enabled: $settings.isEnabled('stop_all_on_volume_up')
    }, {
        desc: '前台服务',
        name: 'foreground_service',
        type: 'autojs_inner_setting',
        enabled: $settings.isEnabled('foreground_service')
    }]);
});

webview.on("clearStorage").subscribe(([_param, done]) => {
    storages.remove('asttyys_ng');
    done();
});

webview.on("versionInfo").subscribe(([_param, done]) => {
    // storages.remove('assttyys_ng_common');
    let storeVersion = storeCommon.get("storeVersion", null);
    done({
        storeVersion: storeVersion,
        versionList: versionList
    });
    storeCommon.put("storeVersion", version);
});

webview.on("saveSetting").subscribe(([item, done]) => {
    if (item.type === 'autojs_inner_setting') {
        $settings.setEnabled(item.name, item.enabled);
    }
    done();
});

webview.on("toast").subscribe(([string, done]) => {
    done();
    toast(string);
});

webview.on("exit").subscribe(([_param, done]) => {
    done();
    exit();
});



// effect$是作业线程，当core的权限全部到位后，effect$才开始运作
effect$.subscribe(() => {
    // 监听放在effect里，只有当权限到位后，监听才生效

    
    toastLog("权限加载完成");

    myFloaty.init();

    helperBridge.init();
    
});

ui.emitter.on("back_pressed", function (e) {
    e.consumed = true;
    webview.runHtmlFunction("routeBack");
});