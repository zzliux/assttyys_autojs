import { webview } from "@/system"
import { effect$ } from "@auto.pro/core"
import defaultSchemeList from '@/common/schemeList';
import myFloaty from '@/system/myFloaty';
import store from '@/system/store';
import helperBridge from "@/system/helperBridge";
console.show();

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
    let savedSchemeList = store.get("schemeList", defaultSchemeList);
    for (let i = 0; i < savedSchemeList.length; i++) {
        if (savedSchemeList[i].schemeName === schemeName) {
            done(savedSchemeList[i]);
            return;
        }
    }
    done({});
});

webview.on("saveScheme").subscribe(([scheme, done]) => {
    let savedSchemeList = store.get("schemeList", defaultSchemeList);
    for (let i = 0; i < savedSchemeList.length; i++) {
        if (savedSchemeList[i].schemeName === scheme.schemeName) {
            scheme.id = savedSchemeList[i].id;
            savedSchemeList[i] = scheme;
            break;
        }
    }
    store.put("schemeList", savedSchemeList);
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
    done(statusBarHeight);
})

webview.on("startScript").subscribe(([_param, done]) => {
    done();
    context.startActivity(app.intent({
        action: Intent.ACTION_MAIN,
        category: Intent.CATEGORY_HOME,
        flags: ['ACTIVITY_NEW_TASK']
    }));
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