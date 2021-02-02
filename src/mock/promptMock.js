import defaultSchemeList from '../common/schemeList';

const promptMockData = {
    getScheme: function (schemeName) {
        return {
            schemeName: schemeName, // 方案名
            list: [1, 2, 4, 10, 20, 15, 16, 14, 13, 12, 11], // funcList中的id集合
            config: { // 方案中的配置，如返回空的话使用默认配置
                '1': { // key为功能的ID（1表示准备）
                    enabled: true,
                    position: '五人-左3'
                }
            },
            commonConfig: { // 通用参数
                clickDelay: 200, // 点击后固定延时
                clickDelayRandom: 1000, // 点击后延时随机数
                // 等
            }
        };
    },
    getSchemeList: function () {
        return defaultSchemeList;
    },
    saveScheme: function () {
        return 'success';
    },
    saveSchemeList: function () {
        return 'success';
    },
    getStatusBarHeight: 20,
    setCurrentScheme: 'sucess',
    startScript: 'sucess',
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
