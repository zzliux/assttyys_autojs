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
            '8': {
                count: '2',
                afterCountOper: '停止脚本',
                type: '个人突破'
            },
            '10': {
                type: '个人突破'
            }
        }
    }, {
        id: 5,
        schemeName: '个人突破_降级',
        star: true,
        list: [0, 1, 2, 3, 8, 9, 10, 11],
        config: {
            '0': {
                jspd_enabled_1: true,
                jspd_times_1: 27
            },
            '1': {
                exitBeforeReady: true
            },
            '8': {
                count: '2',
                afterCountOper: '停止脚本',
                type: '个人突破'
            },
            '9': {
                priority: '0->1->2->3->4->5'
            },
            '10': {
                type: '个人突破'
            }
        }
    }, {
        id: 6,
        schemeName: '寮突破',
        star: true,
        list: [0, 1, 2, 3, 8, 9, 10, 12],
        config: {
            '8': {
                count: '2',
                afterCountOper: '关闭界面',
                type: '寮突破'
            },
            '10': {
                type: '寮突破'
            }
        }
    }, {
        id: 7,
        schemeName: '个人探索',
        star: true,
        list: [0, 15, 1, 2, 3, 13, 14, 29],
        config: {
            '0': {
                next_scheme: '关闭BUFF'
            }
        }
    }, {
        id: 8,
        schemeName: '组队探索_队长',
        star: false,
        list: [0, 15, 1, 2, 3, 5, 14],
        config: {
            '15': {
                type: '队长'
            }
        }
    }, {
        id: 8,
        schemeName: '组队探索_打手',
        star: false,
        list: [0, 15, 1, 2, 3, 4, 25],
        config: {
            '15': {
                type: '打手'
            }
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
        groupName: '切换方案样例',
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
        groupName: '切换方案样例',
        schemeName: '例_个人突破_结束后转寮突破',
        star: true,
        list: [0, 1, 2, 3, 7, 10, 8, 9, 11, 25],
        config: {
            '8': {
                count: '2',
                afterCountOper: '切换方案',
                type: '个人突破',
                next_scheme: '寮突破'
            },
            '10': {
                type: '个人突破'
            }
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
        star: true,
    }, {
        id: 20,
        groupName: '个人突破卡级',
        schemeName: '个人突破_卡级_进攻',
        star: true,
        list: [0, 1, 2, 3, 10, 7, 8, 9, 11],
        config: {
            '0': {
                jspd_enabled_1: true,
                jspd_times_1: 2,
                scheme_switch_enabled: true,
                next_scheme: '个人突破_卡级_退出'
            },
            '8': {
                count: '2',
                afterCountOper: '停止脚本',
                type: '个人突破'
            },
            '10': {
                type: '个人突破'
            }
        }
    }, {
        id: 21,
        groupName: '个人突破卡级',
        schemeName: '个人突破_卡级_退出',
        star: true,
        list: [0, 1, 2, 3, 8, 9, 10, 11],
        config: {
            '0': {
                jspd_enabled_1: true,
                jspd_times_1: 1,
                scheme_switch_enabled: true,
                next_scheme: '个人突破_卡级_进攻'
            },
            '1': {
                exitBeforeReady: true
            },
            '8': {
                count: '2',
                afterCountOper: '停止脚本',
                type: '个人突破'
            },
            '9': {
                priority: '0->1->2->3->4->5'
            },
            '10': {
                type: '个人突破'
            }
        }
    }, {
        id: 22,
        schemeName: '秘闻',
        list: [0, 51, 1, 2, 3, 34],
        star: true,
        config: {
            '0': {
                jspd_enabled_1: true,
                jspd_times_1: 15
            },
            '51': {
                greenType: '自定义文本',
                greenText: '绿标专用',
                preSearch: true,
            }
        }
    }, {
        id: 23,
        schemeName: '悬赏',
        star: true,
        list: [0, 1, 2, 3, 29, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    }, {
        id: 24,
        schemeName: '金币妖怪',
        star: true,
        list: [0, 1, 2, 3, 39, 35, 36, 37, 38, 40]
    }, {
        id: 25,
        schemeName: '宴会',
        star: true,
        list: [3, 1003, 1000, 1001, 1002, 1004]
    }, {
        id: 26,
        schemeName: '关闭BUFF',
        list: [1, 2, 3, 29, 40, 501, 502]
    }, {
        id: 27,
        schemeName: '开启BUFF_打探索',
        list: [501, 50],
    }, {
        id: 28,
        schemeName: '悬赏_庭院打开悬赏界面',
        list: [52],
    }, 
    {
        id: 30,
        schemeName: "式神寄养",
        star: true,
        groupName: "式神寄养",
        list: [999, 998, 997, 994, 995],
        config: {
            "994": {
                count: "3",
                maxTimeForwait: "10",
                afterCountOper: "停止脚本",
                next_scheme: "通用准备退出"
            },
            "995": {
                afterCountOper: "停止脚本"
            },
            "997": {
                priority: "太鼓6->太鼓5->太鼓4->太鼓3->斗鱼6->斗鱼5->斗鱼4"
            }
        },
    },
    {
        id: 31,
        schemeName: "定时任务-启动游戏-式神寄养",
        star: true,
        groupName: "式神寄养",
        list: [993],
        config: {
            "993": {
                area: "",
                package_name: "com.netease.onmyoji",
                is_shutdown_the_game_before: true,
                next_scheme: "式神寄养"
            }
        },
    },
    {
        id: 32,
        schemeName: "式神指定寄养",
        star: true,
        groupName: "式神寄养",
        list: [999, 998, 996, 994, 995],
        config: {
            "994": {
                count: "3",
                afterCountOper: "停止脚本",
                next_scheme: "通用准备退出"
            },
            "995": {
                afterCountOper: "停止脚本"
            },
            "996": {
                friendName: "老王"
            }
        },
    },
    {
        id: 99,
        schemeName: '伊吹之擂',
        list: [0, 3, 24, 99, 100],
    }, {
        id: 100,
        groupName: '活动',
        schemeName: '活动_战场巡逻',
        list: [0, 1, 2, 3, 101]
    }, {
        id: 101,
        groupName: '活动',
        schemeName: '活动_战场探索',
        list: [0, 3, 24, 102, 103, 104]
    }, {
        id: 102,
        groupName: '活动',
        schemeName: '活动_前线作战',
        list: [0, 1, 2, 3, 24, 105, 106],
        config: {
            '1': {
                greenType: '自定义坐标',
                greenPosition: '628,511'
            } // 左3随缘
        }
    }, {
        id: 103,
        groupName: '活动',
        schemeName: '活动_不朽之木_三途轮回',
        list: [0, 1, 2, 3, 24, 107],
    }, {
        id: 104,
        groupName: '活动',
        schemeName: '流火之擂',
        list: [0, 1, 2, 3, 30, 109, 110],
    }, {
        id: 105,
        groupName: '活动',
        schemeName: '红叶行狩',
        list: [0, 1, 2, 3, 24, 111],
    }, {
        id: 106,
        groupName: '活动',
        schemeName: '活动_梦境徊游',
        list: [0, 1, 2, 3, 112]
    }, {
        id: 107,
        groupName: '活动',
        schemeName: '活动_梦旅竞速',
        list: [0, 3, 113, 114]
    }, {
        id: 108,
        groupName: '活动',
        schemeName: '活动_风暴试炼',
        list: [0, 1, 2, 3, 24, 115, 116]
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
for (let i = 0; i < commonConfigArr.length; i++) {
    for (let j = 0; j < commonConfigArr[i].config.length; j++) {
        let item = commonConfigArr[i].config[j];
        commonConfig[item.name] = item.default;
    }
};
let allConfig = {};
for (let i = 0; i < funcList.length; i++) {
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