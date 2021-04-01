import defaultSchemeList from '../common/schemeList';
import version, { versionList } from '../common/version';

const promptMockData = {
    getScheme: function (schemeName) {
        for (let i = 0; i < defaultSchemeList.length; i++) {
            if (schemeName === defaultSchemeList[i].schemeName) {
                return defaultSchemeList[i];
            }
        }
        return defaultSchemeList[0];
    },
    getSchemeList: function () {
        return defaultSchemeList;
    },
    getSettings: function () {
        return [{
            desc: '音量上键停脚本及程序',
            name: 'stop_all_on_volume_up',
            type: 'autojs_inner_setting',
            enabled: true
        }, {
            desc: '前台服务',
            name: 'foreground_service',
            type: 'autojs_inner_setting',
            enabled: false
        }]
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
    },
    versionInfo: function (){
        return {
            storeVersion: versionList[versionList.length - 1].version,
            versionList: versionList
        }
    },
    getStatusBarHeight: 20,
    setCurrentScheme: 'sucess',
    startScript: 'sucess',
    saveSetting: 'sucess',
    toast: function () {},
    initFloaty: function () {},
    startActivityForLog: function () {},
    saveToSetDefaultLaunchAppList: function () {},
    openOpenSource() {},
    mailTo() {}
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
        console.log(`[promptMockData]apiName:${apiName}`);
        console.log(`[promptMockData]apiValue:${JSON.stringify(params)}`);
        console.log(`[promptMockData]returnData:${JSON.stringify(ret)}`);
        if (deviceFn) {
            window[deviceFn](ret);
            AutoWeb.removeDevicelly(deviceFn);
        } else {
            return ret;
        }
    } else {
        throw new Error(`apiName[${apiName}] can not find in promptMock`);
    }
}

export default promptMockData;
