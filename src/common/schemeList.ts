import funcList from './funcListIndex';
import commonConfigArr from './commonConfig';
import { IScheme } from '@/interface/IScheme';
import { merge } from './tool';

const SchemeList: IScheme[] = [
  {
    id: 2,
    schemeName: '组队乘客',
    star: true,
    list: [0, 1, 2, 3, 4],
  },
  {
    id: 3,
    schemeName: '组队司机',
    star: true,
    list: [0, 1, 2, 3, 5],
  },
  {
    id: 5,
    schemeName: '个人突破_降级',
    star: true,
    list: [0, 1, 2, 3, 8, 9, 10, 11],
    config: {
      '0': {
        jspd_enabled_1: true,
        jspd_times_1: 27,
      },
      '1': {
        exitBeforeReady: true,
      },
      '8': {
        count: '2',
        afterCountOper: '停止脚本',
        type: '个人突破',
      },
      '9': {
        priority: '0->1->2->3->4->5',
      },
      '10': {
        type: '个人突破',
      },
    },
  },
  {
    id: 5,
    schemeName: '个突_9退4_进攻',
    groupName: '个突9退4',
    star: true,
    list: [0, 1, 2, 3, 8, 9, 10],
    config: {
      '0': {
        scheme_switch_enabled: true,
        next_scheme: '个突_9退4_退出',
      },
      '3': { type: '关闭' },
      '8': {
        count: '2',
        afterCountOper: '停止脚本',
        type: '个人突破',
      },
      '9': {
        priority: '4->5->3->2->1->0',
        scheme_switch_enabled: true,
      },
      '10': { type: '个人突破' },
    },
    commonConfig: {
      // 通用参数
      multiColorSimilar: 97,
    },
  },
  {
    id: 5,
    schemeName: '个突_9退4_退出',
    groupName: '个突9退4',
    list: [0, 1, 2, 3, 8, 9, 10],
    config: {
      '0': {
        jspd_enabled_2: true,
        jspd_times_2: '4',
        scheme_switch_enabled: true,
        next_scheme: '个突_9退4_进攻',
      },
      '1': { exitBeforeReady: true },
      '2': { rechallenge: true },
      '8': {
        count: '2',
        afterCountOper: '停止脚本',
        type: '个人突破',
      },
      '9': { priority: '0->1->2->3->4->5' },
      '10': { type: '个人突破' },
    },
    commonConfig: {
      // 通用参数
      multiColorSimilar: 97,
    },
  },
  {
    id: 8,
    schemeName: '组队探索_队长',
    star: false,
    list: [0, 15, 1, 2, 3, 5, 14],
    config: {
      '15': {
        type: '队长',
      },
    },
  },
  {
    id: 8,
    schemeName: '组队探索_打手',
    star: false,
    list: [0, 15, 1, 2, 3, 4, 25],
    config: {
      '15': {
        type: '打手',
      },
    },
  },
  {
    id: 12,
    schemeName: '抽厕纸',
    list: [3, 22],
  },
  {
    id: 16,
    schemeName: '继续育成',
    list: [3, 28],
  },
  {
    id: 17,
    schemeName: '斗技',
    list: [0, 1, 2, 3, 30, 307],
  },
  {
    id: 18,
    schemeName: '结界卡_继续合成',
    list: [0, 3, 31],
  },
  {
    id: 22,
    schemeName: '秘闻',
    list: [0, 51, 1, 2, 3, 34],
    star: true,
    config: {
      '0': {
        jspd_enabled_1: true,
        jspd_times_1: 15,
      },
      '51': {
        greenType: '自定义文本',
        greenText: '绿标专用',
        preSearch: true,
      },
    },
  },
  {
    id: 23,
    schemeName: '悬赏',
    star: true,
    list: [0, 1, 2, 3, 52, 29, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    config: {
      '52': {
        scheme_switch_enabled: false,
      },
    },
  },
  {
    id: 26,
    schemeName: '关闭BUFF',
    list: [502, 1, 2, 3, 29, 40, 501],
  },
  {
    id: 27,
    schemeName: '开启BUFF_打探索',
    list: [501, 50],
  },
  {
    id: 39,
    schemeName: '夜行荒河',
    list: [2, 3, 220, 221],
  },
  {
    id: 47,
    groupName: '御魂奉纳',
    schemeName: '奉纳御魂_贪食鬼吃经验',
    list: [0, 301, 303],
    star: true,
  },
  {
    id: 48,
    groupName: '御魂奉纳',
    schemeName: '奉纳御魂_开始奉纳',
    list: [0, 2, 302],
  },
  {
    id: 49,
    groupName: '绘卷进度检测',
    schemeName: '绘卷进度_检测并提醒',
    list: [0, 304],
    star: true,
  },
  {
    id: 50,
    groupName: '绘卷进度检测',
    schemeName: '绘卷进度_持续查询进度',
    list: [0, 305],
  },
  {
    id: 57,
    groupName: '组队循环示例',
    schemeName: '组队队长创建和邀请',
    list: [0, 27, 306],
    commonConfig: {
      colorSimilar: 91,
    },
  },
  {
    id: 58,
    groupName: '组队循环示例',
    schemeName: '组队队员接受邀请',
    list: [4],
    config: {
      '4': {
        exit: true,
      },
    },
  },
  {
    id: 59,
    schemeName: '强化御魂',
    list: [0, 303, 309],
    config: {
      '0': {
        jspd_times_longtime_nodo: '1',
      },
    },
    commonConfig: {
      multiColorSimilar: 93,
    },
    star: true,
  },
  {
    id: 61,
    schemeName: '暴食鬼吃经验',
    list: [0, 310],
    config: {
      '0': {
        jspd_times_longtime_nodo: '1',
      },
    },
    star: true,
  },
  {
    id: 62,
    schemeName: '通用活动',
    star: true,
    list: [0, 1, 2, 3, 312],
  },
  {
    id: 63,
    schemeName: '重启模拟器',
    list: [991],
  },
  {
    id: 64,
    schemeName: '每日签到与收取邮件',
    list: [0, 2, 3, 518],
    config: {
      '0': {
        jspd_enabled_longtime_nodo: true,
        jspd_times_longtime_nodo: 1,
      },
    },
  },
  {
    id: 65,
    schemeName: '定时任务-启动游戏-每日签到与收取邮件',
    star: true,
    groupName: '定时任务',
    list: [1, 2, 3, 503, 993],
    config: {
      '993': {
        area: '',
        is_shutdown_the_game_before: true,
        next_scheme: '每日签到与收取邮件',
      },
      '503': {
        afterCountOper: '不进行任何操作',
      },
    },
  }, {
    id: 66,
    schemeName: '契灵',
    list: [510, 0, 1, 51, 2, 3, 313, 29],
    star: true,
    config: {
      '510': {
        fastMode: true
      }
    }
  }, {
    id: 67,
    schemeName: '庭院进入寮每日活动(狭间)',
    list: [3, 505, 506, 516],
    config: {
      '506': {
        gateOfHades_switch: false,
      },
      '516': {
        count: '2',
        afterCountOper: '不做任何操作',
        next_scheme: '通用准备退出',
      },
    },
  }, {
    id: 68,
    schemeName: '定时任务-启动游戏-庭院进入寮每日活动(狭间)',
    star: true,
    groupName: '定时任务',
    list: [1, 2, 3, 503, 993],
    config: {
      '993': {
        area: '',
        is_shutdown_the_game_before: true,
        next_scheme: '庭院进入寮每日活动(狭间)',
      },
      '503': {
        afterCountOper: '不进行任何操作',
      },
    },
  }, {
    id: 99,
    schemeName: '伊吹之擂',
    list: [0, 3, 24, 99, 100],
  }, {
    id: 101,
    schemeName: '活动_森间试炼',
    list: [0, 1, 2, 3, 24, 132],
    star: true,
  }
  // , {
  //     id: 101,
  //     groupName: '活动',
  //     schemeName: '银之绮都_妖塔燃战',
  //     star: true,
  //     list: [0, 1, 2, 3, 128]
  // }
  // , {
  //     id: 102,
  //     groupName: '活动',
  //     schemeName: '夏日游园会_消消乐',
  //     star: true,
  //     list: [0, 3, 129, 130],
  //     commonConfig: { multiColorSimilar: 95 }
  // }
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
}
let allConfig = {};
for (let i = 0; i < funcList.length; i++) {
  let configs = funcList[i].config;
  if (configs) {
    allConfig[funcList[i].id] = {};
    for (let config of configs) {
      config.config.forEach((item) => {
        allConfig[funcList[i].id][item.name] = item.default;
      });
    }
  }
}

// 内置方案列表
const innerSchemeListName = {};

SchemeList.forEach((item, id) => {
  innerSchemeListName[item.schemeName] = true;
  let thisConfig = {};
  item.list.forEach((funcId) => {
    if (allConfig[funcId]) {
      thisConfig[funcId] = allConfig[funcId];
    }
  });
  SchemeList[id] = merge(
    {},
    {
      id: id + 1,
      schemeName: '未命名',
      inner: true,
      star: false,
      list: [],
      config: thisConfig,
      commonConfig: commonConfig,
    },
    item
  );
});

export const schemeNameMap = innerSchemeListName;
export default SchemeList;
