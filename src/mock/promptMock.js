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
    saveScheme: function () {
        return 'success';
    },
    saveSchemeList: function () {
        return 'success';
    },
    versionInfo: function (){
        return {
            storeVersion: versionList[0].version,
            versionList: versionList
        }
    },
    getStatusBarHeight: 20,
    setCurrentScheme: 'sucess',
    startScript: 'sucess',
    saveSetting: 'sucess',
    toast: function () {
    }
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
