import _ from 'lodash';
import funcList from './funcList';
import commonConfigArr from './commonConfig';

const SchemeList = [{
    id: 1,
    schemeName: '通用准备退出',
    star: true,
    list: [0, 1, 2, 3],
}, {
    id: 2,
    schemeName: '组队乘客',
    star: true,
    list: [0, 1, 2, 3, 4],
}, {
    id: 3,
    schemeName: '组队司机',
    star: true,
    list: [0, 1, 2, 3, 5],
}, {
    id: 4,
    schemeName: '个人御魂',
    star: false,
    list: [0, 1, 2, 3, 6]
}, {
    id: 5,
    schemeName: '个人突破',
    star: true,
    list: [0, 1, 2, 3, 7, 10, 8, 9, 11],
    config: {
        '8': { count: '2', afterCountOper: '停止脚本', type: '个人突破' },
        '10': { type: '个人突破' }
    }
}, {
    id: 5,
    schemeName: '个人突破_降级',
    star: true,
    list: [0, 1, 2, 3, 8, 9, 10, 11],
    config: {
        '0': { jspd_enabled_1: true, jspd_times_1: 27 },
        '1': { exitBeforeReady: true },
        '8': { count: '2', afterCountOper: '停止脚本', type: '个人突破' },
        '9': { priority: '0->1->2->3->4->5' },
        '10': { type: '个人突破' }
    }
}, {
    id: 6,
    schemeName: '寮突破',
    star: true,
    list: [0, 1, 2, 3, 8, 9, 10, 12],
    config: {
        '8': { count: '2', afterCountOper: '关闭界面', type: '寮突破' },
        '10': { type: '寮突破' }
    }
}, {
    id: 7,
    schemeName: '个人探索',
    star: true,
    list: [0, 15, 1, 2, 3, 13, 14, 29]
}, {
    id: 8,
    schemeName: '组队探索_队长',
    star: false,
    list: [0, 15, 1, 2, 3, 5, 14],
    config: {
        '15': { type: '队长' }
    }
}, {
    id: 8,
    schemeName: '组队探索_打手',
    star: false,
    list: [0, 15, 1, 2, 3, 4, 25],
    config: {
        '15': { type: '打手' }
    }
}, {
    id: 9,
    schemeName: '地鬼日常',
    star: true,
    list: [1, 2, 16]
}, {
    id: 10,
    schemeName: '逢魔日常',
    star: true,
    list: [1, 2, 3, 23, 24, 26, 8]
}, {
    id: 11,
    schemeName: '百鬼夜行',
    list: [3, 17, 18, 19, 20, 21]
}, {
    id: 12,
    schemeName: '抽厕纸',
    list: [3, 22]
}, {
    id: 13,
    schemeName: '例_个人探索30次_转个人突破',
    star: true,
    list: [0, 15, 1, 2, 3, 13, 14],
    config: {
        '0': {
            jspd_enabled_2: true,
            jspd_times_2: 30,
            scheme_switch_enabled: true,
            next_scheme: '例_个人突破_结束后转寮突破'
        }
    }
}, {
    id: 14,
    schemeName: '例_个人突破_结束后转寮突破',
    star: true,
    list: [0, 1, 2, 3, 7, 10, 8, 9, 11, 25],
    config: {
        '8': { count: '2', afterCountOper: '切换方案', type: '个人突破', next_scheme: '寮突破' },
        '10': { type: '个人突破' }
    }
}, {
    id: 15,
    schemeName: '组队_自动匹配流程',
    star: true,
    list: [0, 1, 2, 3, 5, 27]
}, {
    id: 16,
    schemeName: '继续育成',
    list: [3, 28]
}, {
    id: 17,
    schemeName: '斗技',
    list: [0, 1, 2, 3, 30]
}, {
    id: 18,
    schemeName: '结界卡_继续合成',
    list: [0, 3, 31]
}, {
    id: 19,
    schemeName: '道馆',
    list: [0, 1, 2, 3, 32],
}, {
    id: 99,
    schemeName: '赤月谜影_夜影诡谈',
    list: [0, 1, 2, 3, 99],
}
    // 完整demo
    // , {
    //     id: 2,
    //     schemeName: '组队队长',
    //     star: false,
    //     list: [0, ], // funcList中的id集合
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


let commonConfig = {};
for (let i = 0 ; i < commonConfigArr.length; i++) {
    for (let j = 0; j < commonConfigArr[i].config.length; j++) {
        let item = commonConfigArr[i].config[j];
        commonConfig[item.name] = item.default;
    }
};
let allConfig = {};
for (let i = 0; i <funcList.length; i++) {
    let configs = funcList[i].config;
    if (configs) {
        allConfig[funcList[i].id] = {};
        for (let config of configs) {
            config.config.forEach(item => {
                allConfig[funcList[i].id][item.name] = item.default;
            })
        }
    }
}

SchemeList.forEach((item, id) => {
    let thisConfig = {};
    item.list.forEach(funcId => {
        if (allConfig[funcId]) {
            thisConfig[funcId] = allConfig[funcId];
        }
    });
    SchemeList[id] = _.merge({}, {
        id: id + 1,
        schemeName: '未命名',
        inner: true,
        star: false,
        list: [0, ],
        config: thisConfig,
        commonConfig: commonConfig
    }, item)
});
export default SchemeList;