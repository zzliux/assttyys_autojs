const SchemeList = [ // TODO
    {
        id: 1,
        schemeName: '通用准备退出',
        star: false,
        list: [1, 2, 3],
    },
    {
        id: 2,
        schemeName: '组队乘客',
        star: false,
        list: [1, 2, 3, 4]
    }
    // 完整demo
    // , {
    //     id: 2,
    //     schemeName: '组队队长',
    //     star: false,
    //     list: [], // funcList中的id集合
    //     config: { // 方案中的配置，如返回空的话使用默认配置
    //         '1': { // key为功能的ID（1表示准备）
    //             enabled: false,
    //             position: '五人-左1'
    //         }
    //     },
    //     commonConfig: { // 通用参数
    //         clickDelay: 200, // 点击后固定延时
    //         clickDelayRandom: 1000, // 点击后延时随机数
    //         // 等
    //     }
    // }
];

export default SchemeList;