import { merge } from '@/common/tool';
import { versionList } from '../common/version';

const promptMockData = {
    getScheme: function (schemeName) {
        // for (let i = 0; i < defaultSchemeList.length; i++) {
        //     if (schemeName === defaultSchemeList[i].schemeName) {
        //         return defaultSchemeList[i];
        //     }
        // }
        // return defaultSchemeList[0];
        return {
            "schemeName": "百鬼夜行",
            "star": true,
            "inner": true,
            "list": [3, 17, 18, 19, 20, 21],
            "config": {
                "3": {
                    "type": "关闭"
                },
                "19": {
                    "bossPosition": "随机"
                }
            },
            "commonConfig": {
                "loopDelay": 200,
                "afterClickDelayRandom": 200,
                "colorSimilar": 93,
                "multiColorSimilar": 98
            },
            "id": 11
        };
    },
    getDefaultScheme: function (schemeName) {
        // for (let i = 0; i < defaultSchemeList.length; i++) {
        //     if (schemeName === defaultSchemeList[i].schemeName) {
        //         return defaultSchemeList[i];
        //     }
        // }
        // return defaultSchemeList[0];
        return {
            "schemeName": "百鬼夜行",
            "star": true,
            "inner": true,
            "list": [3, 17, 18, 19, 20, 21],
            "config": {
                "3": {
                    "type": "关闭"
                },
                "19": {
                    "bossPosition": "随机"
                }
            },
            "commonConfig": {
                "loopDelay": 200,
                "afterClickDelayRandom": 200,
                "colorSimilar": 93,
                "multiColorSimilar": 98
            },
            "id": 11
        };
    },
    getSchemeList: [{ "id": 1, "schemeName": "通用准备退出", "inner": true, "star": true, "list": [0, 1, 2, 3], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 2, "schemeName": "组队乘客", "inner": true, "star": true, "list": [0, 1, 2, 3, 4], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 3, "schemeName": "组队司机", "inner": true, "star": true, "list": [0, 1, 2, 3, 5], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "5": { "type": "有人就开" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 4, "schemeName": "个人御魂", "inner": true, "star": false, "list": [0, 1, 2, 3, 6], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 5, "schemeName": "个人突破", "inner": true, "star": true, "list": [0, 1, 2, 3, 7, 10, 8, 9, 11], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "7": {}, "8": { "count": "2", "afterCountOper": "停止脚本", "next_scheme": "通用准备退出", "type": "个人突破", "cdWaitTime": "30,60", "cdSwitchSchemeEnable": false, "cdSwitchScheme": "个人突破" }, "9": { "priority": "4->5->3->2->1->0" }, "10": { "type": "个人突破" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 5, "schemeName": "个人突破_降级", "inner": true, "star": true, "list": [0, 1, 2, 3, 8, 9, 10, 11], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": true, "jspd_times_1": 27, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": true }, "2": {}, "3": { "type": "关闭" }, "8": { "count": "2", "afterCountOper": "停止脚本", "next_scheme": "通用准备退出", "type": "个人突破", "cdWaitTime": "30,60", "cdSwitchSchemeEnable": false, "cdSwitchScheme": "个人突破" }, "9": { "priority": "0->1->2->3->4->5" }, "10": { "type": "个人突破" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 6, "schemeName": "寮突破", "inner": true, "star": true, "list": [0, 1, 2, 3, 8, 9, 10, 12], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "8": { "count": "2", "afterCountOper": "关闭界面", "next_scheme": "通用准备退出", "type": "寮突破", "cdWaitTime": "30,60", "cdSwitchSchemeEnable": false, "cdSwitchScheme": "个人突破" }, "9": { "priority": "4->5->3->2->1->0" }, "10": { "type": "寮突破" }, "12": { "count": "3", "afterCountOper": "停止脚本", "next_scheme": "通用准备退出" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 7, "schemeName": "个人探索", "inner": true, "star": true, "list": [0, 15, 1, 2, 3, 13, 14, 29], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "关闭BUFF", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "14": { "type": "打经验", "swipeTime": "4", "swipeSpeed": "慢" }, "15": { "type": "打手", "dog_food_type": "素材", "handle_position": "20%" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 8, "schemeName": "组队探索_队长", "inner": true, "star": false, "list": [0, 15, 1, 2, 3, 5, 14], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "5": { "type": "有人就开" }, "14": { "type": "打经验", "swipeTime": "4", "swipeSpeed": "慢" }, "15": { "type": "队长", "dog_food_type": "素材", "handle_position": "20%" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 8, "schemeName": "组队探索_打手", "inner": true, "star": false, "list": [0, 15, 1, 2, 3, 4, 25], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "15": { "type": "打手", "dog_food_type": "素材", "handle_position": "20%" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 9, "schemeName": "地鬼日常", "inner": true, "star": true, "list": [1, 2, 16], "config": { "1": { "exitBeforeReady": false }, "2": {} }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 10, "schemeName": "逢魔日常", "inner": true, "star": true, "list": [1, 2, 3, 23, 24, 26, 8], "config": { "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "8": { "count": "2", "afterCountOper": "停止脚本", "next_scheme": "通用准备退出", "type": "个人突破", "cdWaitTime": "30,60", "cdSwitchSchemeEnable": false, "cdSwitchScheme": "个人突破" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 11, "schemeName": "百鬼夜行", "inner": true, "star": false, "list": [3, 17, 18, 19, 20, 21], "config": { "3": { "type": "关闭" }, "19": { "bossPosition": "随机" }, "20": { "mode": "普通模式" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 12, "schemeName": "抽厕纸", "inner": true, "star": false, "list": [3, 22], "config": { "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 13, "schemeName": "例_个人探索30次_转个人突破", "inner": true, "star": true, "list": [0, 15, 1, 2, 3, 13, 14], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": true, "jspd_times_2": 30, "stop_with_launched_app_exit": false, "scheme_switch_enabled": true, "next_scheme": "例_个人突破_结束后转寮突破", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "14": { "type": "打经验", "swipeTime": "4", "swipeSpeed": "慢" }, "15": { "type": "打手", "dog_food_type": "素材", "handle_position": "20%" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "切换方案样例" }, { "id": 14, "schemeName": "例_个人突破_结束后转寮突破", "inner": true, "star": true, "list": [0, 1, 2, 3, 7, 10, 8, 9, 11, 25], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "7": {}, "8": { "count": "2", "afterCountOper": "切换方案", "next_scheme": "寮突破", "type": "个人突破", "cdWaitTime": "30,60", "cdSwitchSchemeEnable": false, "cdSwitchScheme": "个人突破" }, "9": { "priority": "4->5->3->2->1->0" }, "10": { "type": "个人突破" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "切换方案样例" }, { "id": 15, "schemeName": "组队_自动匹配流程", "inner": true, "star": true, "list": [0, 1, 2, 3, 5, 27], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "5": { "type": "有人就开" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 16, "schemeName": "继续育成", "inner": true, "star": false, "list": [3, 28], "config": { "3": { "type": "关闭" }, "28": { "count": "5" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 17, "schemeName": "斗技", "inner": true, "star": false, "list": [0, 1, 2, 3, 30], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 18, "schemeName": "结界卡_继续合成", "inner": true, "star": false, "list": [0, 3, 31], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 19, "schemeName": "道馆", "inner": true, "star": true, "list": [0, 1, 2, 3, 32], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 20, "schemeName": "个人突破_卡级_进攻", "inner": true, "star": true, "list": [0, 1, 2, 3, 10, 7, 8, 9, 11], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": true, "jspd_times_1": 2, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": true, "next_scheme": "个人突破_卡级_退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "7": {}, "8": { "count": "2", "afterCountOper": "停止脚本", "next_scheme": "通用准备退出", "type": "个人突破", "cdWaitTime": "30,60", "cdSwitchSchemeEnable": false, "cdSwitchScheme": "个人突破" }, "9": { "priority": "4->5->3->2->1->0" }, "10": { "type": "个人突破" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "个人突破卡级" }, { "id": 21, "schemeName": "个人突破_卡级_退出", "inner": true, "star": true, "list": [0, 1, 2, 3, 8, 9, 10, 11], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": true, "jspd_times_1": 1, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": true, "next_scheme": "个人突破_卡级_进攻", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": true }, "2": {}, "3": { "type": "关闭" }, "8": { "count": "2", "afterCountOper": "停止脚本", "next_scheme": "通用准备退出", "type": "个人突破", "cdWaitTime": "30,60", "cdSwitchSchemeEnable": false, "cdSwitchScheme": "个人突破" }, "9": { "priority": "0->1->2->3->4->5" }, "10": { "type": "个人突破" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "个人突破卡级" }, { "id": 22, "schemeName": "秘闻", "inner": true, "star": true, "list": [0, 51, 1, 2, 3, 34], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": true, "jspd_times_1": 15, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "51": { "greenType": "自定义文本", "greenPosition": "245,500", "greenText": "绿标专用", "greenTextMatchMode": "模糊", "preSearch": true } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 23, "schemeName": "悬赏", "inner": true, "star": true, "list": [0, 1, 2, 3, 29, 41, 42, 43, 44, 45, 46, 47, 48, 49], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "47": { "scheme_switch_enabled": false, "next_scheme": "地鬼日常" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 24, "schemeName": "金币妖怪", "inner": true, "star": true, "list": [0, 1, 2, 3, 39, 35, 36, 37, 38, 40], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "40": { "scheme_switch_enabled": false, "next_scheme": "寮突破" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 25, "schemeName": "宴会", "inner": true, "star": true, "list": [3, 1003, 1000, 1001, 1002, 1004], "config": { "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 26, "schemeName": "关闭BUFF", "inner": true, "star": false, "list": [1, 2, 3, 29, 40, 501, 502], "config": { "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "40": { "scheme_switch_enabled": false, "next_scheme": "寮突破" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 27, "schemeName": "开启BUFF_打探索", "inner": true, "star": false, "list": [501, 50], "config": { "50": { "scheme_switch_enabled": true, "next_scheme": "个人探索", "buff_type": "经验" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 28, "schemeName": "悬赏_庭院打开悬赏界面", "inner": true, "star": false, "list": [52], "config": { "52": { "scheme_switch_enabled": true, "next_scheme": "悬赏" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 29, "schemeName": "返回庭院", "inner": true, "star": false, "list": [503], "config": {}, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 30, "schemeName": "式神寄养", "inner": true, "star": true, "list": [999, 998, 997, 994, 995], "config": { "994": { "count": "3", "afterCountOper": "停止脚本", "next_scheme": "通用准备退出", "maxTimeForwait": "10" }, "995": { "maxTimeForwait": "10", "afterCountOper": "停止脚本", "isAutoFosterCare": true, "next_scheme": "返回庭院" }, "997": { "priority": "太鼓6->太鼓5->太鼓4->太鼓3->斗鱼6->斗鱼5->斗鱼4" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "式神寄养" }, { "id": 31, "schemeName": "定时任务-启动游戏-式神寄养", "inner": true, "star": true, "list": [993], "config": { "993": { "area": "", "package_name": "com.netease.onmyoji", "is_shutdown_the_game_before": true, "next_scheme": "式神寄养" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "式神寄养" }, { "id": 32, "schemeName": "式神指定寄养", "inner": true, "star": true, "list": [3, 999, 998, 996, 994, 995], "config": { "3": { "type": "关闭" }, "994": { "count": "3", "afterCountOper": "停止脚本", "next_scheme": "通用准备退出" }, "995": { "maxTimeForwait": "10", "afterCountOper": "停止脚本", "isAutoFosterCare": true, "next_scheme": "返回庭院" }, "996": { "friendName": "老王" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "定时任务" }, { "id": 33, "schemeName": "狩猎战", "inner": true, "star": false, "list": [0, 1, 2, 3, 507], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 34, "schemeName": "庭院进入寮每日活动", "inner": true, "star": false, "list": [505, 506], "config": {}, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 35, "schemeName": "六道萤草", "inner": true, "star": false, "list": [0, 1, 2, 3, 24, 201, 202, 203, 204, 205, 206], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" }, "202": { "腐草为萤": 0, "妖力化身": 0, "六道净化": 0, "萤火之光": 0, "priority": "腐草为萤,妖力化身,六道净化,萤火之光" }, "203": { "ospPush": false, "overTimes": "0" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 95 } }, { "id": 36, "schemeName": "定时任务-启动游戏-每日寮活动", "inner": true, "star": true, "list": [993], "config": { "993": { "area": "", "package_name": "com.netease.onmyoji", "is_shutdown_the_game_before": true, "next_scheme": "庭院进入寮每日活动" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "定时任务" }, { "id": 99, "schemeName": "伊吹之擂", "inner": true, "star": false, "list": [0, 3, 24, 99, 100], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 } }, { "id": 100, "schemeName": "活动_战场巡逻", "inner": true, "star": false, "list": [0, 1, 2, 3, 101], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "活动" }, { "id": 101, "schemeName": "活动_战场探索", "inner": true, "star": false, "list": [0, 3, 24, 102, 103, 104], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "活动" }, { "id": 102, "schemeName": "活动_前线作战", "inner": true, "star": false, "list": [0, 1, 2, 3, 24, 105, 106], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false, "greenType": "自定义坐标", "greenPosition": "628,511" }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "活动" }, { "id": 103, "schemeName": "活动_不朽之木_三途轮回", "inner": true, "star": false, "list": [0, 1, 2, 3, 24, 107], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "活动" }, { "id": 104, "schemeName": "流火之擂", "inner": true, "star": false, "list": [0, 1, 2, 3, 30, 109, 110], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "活动" }, { "id": 105, "schemeName": "红叶行狩", "inner": true, "star": false, "list": [0, 1, 2, 3, 24, 111], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "活动" }, { "id": 106, "schemeName": "活动_梦境徊游", "inner": true, "star": false, "list": [0, 1, 2, 3, 112], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "活动" }, { "id": 107, "schemeName": "活动_梦旅竞速", "inner": true, "star": false, "list": [0, 3, 113, 114], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "活动" }, { "id": 108, "schemeName": "活动_风暴试炼", "inner": true, "star": false, "list": [0, 1, 2, 3, 24, 115, 116], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "活动" }, { "id": 109, "schemeName": "化四季_小怪", "inner": true, "star": true, "list": [0, 1, 2, 3, 24, 117], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "活动" }, { "id": 110, "schemeName": "化四季_boss", "inner": true, "star": true, "list": [0, 1, 2, 3, 24, 118], "config": { "0": { "jspd_enabled_longtime_nodo": true, "jspd_times_longtime_nodo": 10, "jspd_enabled_zjsj": false, "jspd_times_zjsj": 30, "jspd_txpl_zjsj": 60, "jspd_enabled_1": false, "jspd_times_1": 20, "jspd_enabled_2": false, "jspd_times_2": 20, "stop_with_launched_app_exit": false, "scheme_switch_enabled": false, "next_scheme": "通用准备退出", "pause_enabled": false, "define_run_time": "10,30", "define_pause_time": "2,7" }, "1": { "exitBeforeReady": false }, "2": {}, "3": { "type": "关闭" } }, "commonConfig": { "loopDelay": 200, "afterClickDelayRandom": 200, "colorSimilar": 93, "multiColorSimilar": 98 }, "groupName": "活动" }],
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
        }, {
            desc: '点击/滑动模式',
            name: 'tapType',
            type: 'assttyys_setting',
            stype: 'list',
            data: ['无障碍', 'Root', 'Shell', 'RootAutomator'],
            value: 'Root'
        }, {
            desc: 'ospUserToken',
            name: 'osp_user_token',
            type: 'assttyys_setting',
            stype: 'text',
            value: '123'
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
    versionInfo: function () {
        return {
            storeVersion: versionList[versionList.length - 1].version,
            versionList: versionList
        }
    },
    getStatusBarHeight: 20,
    setCurrentScheme: 'sucess',
    startScript: [{
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
    }],
    launchPackage: true,
    saveSetting: 'sucess',
    toast: function () { },
    initFloaty: function () { },
    startActivityForLog: function () { },
    saveToSetDefaultLaunchAppList: function () { },
    openOpenSource() { },
    mailTo() { },
    copyToClip() { },
    webloaded() { },
    getAppInfo: { msg: '' },
    starScheme: function (opt) {
        return { star: opt.star }
    },
    getShapedScreenConfig: [{
        device: 'xiaomi 11(3200*1440)',
        enabled: true
    }, {
        device: 'meizu 16th plus(2160*1080)',
        enabled: false
    }],
    setShapedScreenConfigEnabled: {},
    getIconByPackageName: null,
    // getClip: JSON.stringify(_.cloneDeep(defaultSchemeList).slice(0, 4).map(item => {
    //     item.groupName = '导出测试分组'
    //     return item;
    // }), null, 4),
    getClip: JSON.stringify([]),
    getScheduleList: [
        {
            id: 1,
            name: '式神寄养',
            desc: '自动续式神寄养，建议把执行时间提前5分钟，启动前需要退出游戏',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 2,
            interval: '355',
            level: '10',
            config: {
                scheme: '定时任务-启动游戏-式神寄养',
            }
        },
        {
            id: 2,
            name: '寮活动',
            desc: '自动参加寮活动，目前只支持道馆、狩猎',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 3,
            interval: '* 0 19 * * *',
            level: '10',
            config: {
                scheme: '定时任务-启动游戏-每日寮活动',
            }
        },
        {
            id: 3,
            name: '逢魔',
            desc: '自动参加逢魔活动',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 3,
            interval: '* 0 17 * * *',
            level: '10',
            config: {
                scheme: '定时任务-启动游戏-每日逢魔',
            }
        },
        {
            id: 4,
            name: '喂猫喂狗',
            desc: '自动喂猫喂狗',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 3,
            interval: '* 10 5,16,23 * * *',
            level: '5',
            config: {
                scheme: '定时任务-启动游戏-喂猫喂狗',
            }
        },
        {
            id: 5,
            name: '寮突',
            desc: '自动寮突',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 3,
            interval: '* 10 7 * * *',
            level: '1',
            config: {
                scheme: '定时任务-启动游戏-寮突',
            }
        },
        {
            id: 6,
            name: '地鬼',
            desc: '自动地鬼',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 3,
            interval: '* 0 10 * * *',
            level: '6',
            config: {
                scheme: '定时任务-启动游戏-地鬼',
            }
        },
        {
            id: 7,
            name: '寮活动(阴门)',
            desc: '寮活动(阴门), 周五至周日',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 3,
            interval: '* 0 20 * * 5,6,0',
            level: '10',
            config: {
                scheme: '庭院进入寮每日活动(包含阴门)',
            }
        },
        {
            id: 8,
            name: '寮活动(狩猎)',
            desc: '寮活动(狩猎), 周一至周四',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 3,
            interval: '* 59 18 * * 1-4',
            level: '10',
            config: {
                scheme: '定时任务-启动游戏-庭院进入寮每日活动(包含阴门)',
            }
        },
        {
            id: 9,
            name: '寮活动(道馆)',
            desc: '寮活动(道馆), 周一至周四',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 3,
            interval: '* 5 19 * * 1-4',
            level: '10',
            config: {
                scheme: '庭院进入寮每日活动(不包含阴门)',
            }
        },
        {
            id: 10,
            name: '寮活动(狭间)',
            desc: '寮活动(狭间), 周五至周日',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 3,
            interval: '* 59 18 * * 5,6,0',
            level: '10',
            config: {
                scheme: '定时任务-启动游戏-庭院进入寮每日活动(不包含阴门)',
            }
        },
        {
            id: 11,
            name: '寮活动(宴会)',
            desc: '寮活动(宴会), 周五或周日',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 3,
            interval: '* 5 19 * * 5,0',
            level: '10',
            config: {
                scheme: '庭院进入寮每日活动(不包含阴门)',
            }
        },
        {
            id: 12,
            name: '寮活动(首领)',
            desc: '寮活动(首领), 周六',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 3,
            interval: '* 5 19 * * 6',
            level: '10',
            config: {
                scheme: '庭院进入寮每日活动(不包含阴门)',
            }
        },
        {
            id: 13,
            name: '悬赏',
            desc: '自动悬赏',
            checked: false,
            lastRunTime: null,
            nextDate: null,
            repeatMode: 3,
            interval: '* 0 7,1 * * *',
            level: '1',
            config: {
                scheme: '定时任务-启动游戏-悬赏',
            }
        },
    ],
    saveScheduleList: 'success',
    scheduleChange: null,
    getGroupNames: function () {
        const savedSchemeList = this['getSchemeList'];
        const groupNamesMap = {};
        savedSchemeList.forEach(s => {
            if (s.groupName) groupNamesMap[s.groupName] = 1;
        });
        return Object.keys(groupNamesMap);
    },
    clearStorage: null,
    exit: null,
    setScheduleLazyMode: 'success',
    getScheduleInstance: { lazyMode: true }
};

// 注入修改prompt
// @ts-ignore
window.promptMock = function (apiName, apiValue) {
    if (typeof promptMockData[apiName] !== 'undefined') {
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
                if (ret !== null && typeof ret === 'object') {
                    ret = deepClone(ret);
                }
                window[deviceFn](ret);
                // @ts-ignore
                AutoWeb.removeDevicelly(deviceFn);
            }, (Math.random() * 100000000 % 500))
        } else {
            return ret;
        }
    } else {
        throw new Error(`apiName[${apiName}] can not find in promptMock`);
    }
}

export default promptMockData;


function deepClone(obj) {
    if (!obj && typeof obj !== "object") {
        throw new Error("error arguments deepClone");
    }
    const targetObj = obj.constructor === Array ? [] : {};
    Object.keys(obj).forEach(keys => {
        if (obj[keys] && typeof obj[keys] === "object") {
            targetObj[keys] = deepClone(obj[keys]);
        } else {
            targetObj[keys] = obj[keys];
        }
    });
    return targetObj;
}