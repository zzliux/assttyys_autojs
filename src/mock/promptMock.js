import defaultSchemeList from '../common/schemeList';
import version, { versionList } from '../common/version';

const promptMockData = {
    getScheme: function (schemeName) {
        // for (let i = 0; i < defaultSchemeList.length; i++) {
        //     if (schemeName === defaultSchemeList[i].schemeName) {
        //         return defaultSchemeList[i];
        //     }
        // }
        // return defaultSchemeList[0];
        return {
            "id": 1,
            "schemeName": "通用准备退出",
            "inner": true,
            "star": true,
            "list": [0, 1, 2, 3],
            "config": {
                "0": {
                    "jspd_enabled_longtime_nodo": true,
                    "jspd_times_longtime_nodo": 10,
                    "jspd_enabled_zjsj": false,
                    "jspd_times_zjsj": 30,
                    "jspd_txpl_zjsj": 60,
                    "jspd_enabled_1": false,
                    "jspd_times_1": 20,
                    "jspd_enabled_2": false,
                    "jspd_times_2": 20,
                    "stop_with_launched_app_exit": false,
                    "scheme_switch_enabled": false,
                    "next_scheme": "通用准备退出",
                    "pause_enabled": false,
                    "define_run_time": "10,30",
                    "define_pause_time": "2,7"
                },
                "1": {
                    "exitBeforeReady": false,
                    "greenType": "自定义坐标",
                    "greenPosition": "245,500"
                },
                "3": {
                    type: "关闭"
                }
            },
            "commonConfig": {
                "loopDelay": 200,
                "afterClickDelayRandom": 200,
                "colorSimilar": 93,
                "multiColorSimilar": 98
            }
        };
    },
    getSchemeList: function () {
        return defaultSchemeList;
    },
    getSettings: function () {
        // return [{
        //     desc: '音量上键停脚本及程序',
        //     name: 'stop_all_on_volume_up',
        //     type: 'autojs_inner_setting',
        //     enabled: true
        // }, {
        //     desc: '前台服务',
        //     name: 'foreground_service',
        //     type: 'autojs_inner_setting',
        //     enabled: false
        // }, {
        //     desc: '点击/滑动模式',
        //     name: 'tapType',
        //     type: 'assttyys_setting',
        //     stype: 'list',
        //     data: ['无障碍', 'Root', 'Shell', 'RootAutomator'],
        //     value: 'Root'
        // }]
        return [
            { desc: "点击/滑动模式", name: "tapType", type: "assttyys_setting", "stype": "list", "data": ["无障碍", "Root", "Shell", "RootAutomator"], "value": "无障碍" },
            { desc: "无障碍服务(仅使用无障碍模式时生效)", name: "autoService", type: "autojs_inner_setting_auto_service", "enabled": true },
            { desc: "截图权限", name: "screenCapturePermission", type: "autojs_inner_settings_capture_permission", "enabled": true },
            { desc: "悬浮窗权限", name: "floatyPerminssion", type: "autojs_inner_setting_floaty_permission", "enabled": true },
            { desc: "音量上键停脚本及程序", name: "stop_all_on_volume_up", type: "autojs_inner_setting", "enabled": true },
            { desc: "前台服务", name: "foreground_service", type: "autojs_inner_setting", "enabled": false },
            { desc: "忽略电池优化", name: "ignoreBatteryOptimization", type: "autojs_inner_setting_power_manage", "enabled": true },
            { desc: "悬浮选择方案后是否直接启动脚本", name: "floaty_scheme_direct_run", type: "assttyys_setting", "enabled": false },
            { desc: "调试绘制", name: "floaty_debugger_draw", type: "assttyys_setting_floaty_debugger_draw", "enabled": false },
            { desc: "脚本停止是否启用推送", name: "use_push_plus", type: "assttyys_setting", "enabled": false },
            { desc: "推送加token", name: "push_plus_token", type: "assttyys_setting", "stype": "text", "value": "" }
        ];
    },
    getToSetDefaultLaunchAppList() {
        return [{
            appName: 'assttyys_ng',
            packageName: 'com.example.script161',
            versionName: '1.0.0',
            versionCode: 1,
            appIcon: '',
            referred: false
        }, {
            appName: '魅族游戏框架',
            packageName: 'com.meizu.gamecenter.service',
            versionName: '5.4.0',
            versionCode: 5004000,
            appIcon: '',
            referred: false
        }, {
            appName: 'assttyys',
            packageName: 'com.xixdaoq.rsicybi',
            versionName: '0.0.4_build_20201001',
            versionCode: 1,
            appIcon: '',
            referred: false
        }, {
            appName: '阴阳师',
            packageName: 'com.netease.onmyoji.mz',
            versionName: '1.6.6',
            versionCode: 103,
            appIcon: '',
            referred: true
        }, {
            appName: 'AutoJsPro',
            packageName: 'org.autojs.autojspro',
            versionName: 'Pro 8.7.4-0',
            versionCode: 8070400,
            appIcon: '',
            referred: false
        }]
    },
    saveScheme: function () {
        return 'success';
    },
    saveSchemeList: function () {
        return 'success';
        // return false;
    },
    versionInfo: function () {
        return {
            storeVersion: versionList[versionList.length - 1].version,
            versionList: versionList
        }
    },
    getStatusBarHeight: 20,
    setCurrentScheme: 'sucess',
    startScript: [],
    saveSetting: 'sucess',
    toast: function () { },
    initFloaty: function () { },
    startActivityForLog: function () { },
    saveToSetDefaultLaunchAppList: function () { },
    openOpenSource() { },
    mailTo() { },
    copyToClip() { },
    webloaded() { },
    getAppInfo: {},
    getShapedScreenConfig: [{
        device: 'xiaomi 11(3200*1440)',
        enabled: true
    }, {
        device: 'meizu 16th plus(2160*1080)',
        enabled: false
    }],
    setShapedScreenConfigEnabled: {}
};

// 注入修改prompt
window.promptMock = function (apiName, apiValue) {
    if (promptMockData[apiName]) {
        let option = JSON.parse(apiValue);
        let params = null;
        let deviceFn = null;
        if (option.PROMPT_CALLBACK) {
            params = option.params
            deviceFn = option.PROMPT_CALLBACK;
        } else {
            params = option;
        }
        let ret = null;
        if (typeof promptMockData[apiName] === 'function') {
            ret = promptMockData[apiName](apiValue && params);
        } else {
            ret = promptMockData[apiName];
        }
        if (deviceFn) {
            // 使用setTimoutout模拟异步环境
            setTimeout(() => {
                console.log(`[promptMockData]apiName:${apiName}`);
                console.log(`[promptMockData]apiValue:${JSON.stringify(params)}`);
                console.log(`[promptMockData]returnData:${JSON.stringify(ret)}`);
                window[deviceFn](ret);
                AutoWeb.removeDevicelly(deviceFn);
            }, Math.random())
        } else {
            return ret;
        }
    } else {
        throw new Error(`apiName[${apiName}] can not find in promptMock`);
    }
}

export default promptMockData;
