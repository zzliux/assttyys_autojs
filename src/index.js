import { webview } from "@/system"
import { effect$ } from "@auto.pro/core"
import defaultSchemeList from '@/common/schemeList';

const storage = storages.create('asttyys_ng');


// 返回已保存的方案列表，如果未保存过，返回common中的schemeList
webview.on("getSchemeList").subscribe(([param, done]) => {
    let savedSchemeList = storage.get("schemeList", defaultSchemeList);
    console.log(savedSchemeList);
    done(savedSchemeList);
});

// 保存方案列表
webview.on("saveSchemeList").subscribe(([schemeList, done]) => {
    storage.put("schemeList", schemeList);
    console.log('schemeList已保存：' + schemeList);
    done("success");
});

// TODO 获取方案
webview.on("getScheme").subscribe(([schemeName, done]) => {
    done({
        id: '5',
        schemeName: schemeName, // 方案名
        list: [1, 2, 4, 10, 20, 15, 16, 14, 13, 12, 11], // funcList中启用的id集合
        config: { // 方案中的配置，如返回空的话使用默认配置
            '1': { // key为功能的ID（1表示准备）
                enabled: true,
                position: '五人-左1'
            }
        },
        commonConfig: { // 通用参数
            clickDelay: 200, // 点击后固定延时
            clickDelayRandom: 1000, // 点击后延时随机数
            // 等
        }
    });
})

// effect$是作业线程，当core的权限全部到位后，effect$才开始运作
effect$.subscribe(() => {
    // 监听放在effect里，只有当权限到位后，监听才生效
    toastLog("权限加载完成");
});