const promptMock = {
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
        }
    },
    saveScheme: function () {
        return 'success';
    },
    saveSchemeList: function () {
        return 'success';
    }
};

// 注入修改prompt
window.prompt = function (apiName, apiValue) {
    if (promptMock[apiName]) {
        if (typeof promptMock[apiName] === 'function') {
            return promptMock[apiName](JSON.parse(apiValue));
        } else {
            return promptMock[apiName];
        }
    } else {
        throw new Error(`apiName[${apiName}] can not find in promptMock`);
    }
}
export default promptMock;
