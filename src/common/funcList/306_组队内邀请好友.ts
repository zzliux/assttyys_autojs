import { Script } from '@/system/script';
import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { ContactList } from 'vant';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func306 implements InterfaceFuncOrigin {
  id = 306;
  name = '组队内邀请好友';
  desc = '组队界面邀请好友'
  config = [{
    desc: '',
    config: [{
      name: 'selectArea',
      desc: '选择好友所在区域',
      type: 'list',
      data: ['好友或最近', '跨区'],
      default: '好友或最近',
      value: null,
    }, {
      name: 'inviteName',
      desc: '好友昵称',
      type: 'text',
      default: '昵称'
    }, {
      name: 'secondPlayer',
      desc: '邀请的是第二名好友（是否是三人组队）',
      type: 'switch',
      default: 'false'
    }, {
      name: 'next_scheme',
      desc: '下一个方案',
      type: 'scheme',
      default: '通用准备退出',
    }],
  }];
  operator: InterfaceFuncOperatorOrigin[] = [{//0,三号位
    desc: [1280, 720,
      [[center, 642, 3, 0x101011],
      [left, 42, 38, 0xf7e8aa],
      [center, 641, 52, 0x080c0a],
      [center, 648, 571, 0x422c29],
      [right, 1088, 254, 0xffffff]]
    ],
    oper: [
      [center, 1280, 720, 1025, 194, 1145, 306, 1000]
    ]
  }, {//1,邀请界面
    desc: [1280, 720,
      [[center, 390, 570, 0xd6bead],
      [center, 502, 574, 0xde6952],
      [center, 638, 583, 0xd6bead],
      [center, 776, 582, 0xf7b263]]
    ],
    oper: [
      [center, 1280, 720, 478, 91, 563, 134, 1500],//好友或最近
      [center, 1280, 720, 590, 88, 680, 135, 1500],//跨区
      [center, 1280, 720, 436, 188, 910, 526, 0],//ocr区域
      [center, 1280, 720, 718, 553, 827, 597, 1500],//邀请
      [center, 1280, 720, 360, 86, 454, 137, 1500],//最左刷新
    ]
  }, {//2,组队界面
    desc: [1280, 720,
      [[center, 642, 3, 0x101011],
      [left, 42, 38, 0xf7e8aa],
      [center, 641, 52, 0x080c0a],
      [center, 648, 571, 0x422c29]]
    ]
  }, {//3,组队挑战按钮
    desc: [1280, 720,
      [[left, 43, 37, 0xf5e6a8],
      [right, 1177, 667, 0xd8b871],
      [right, 1187, 679, 0xcda35d],
      [right, 1188, 609, 0xf1e096],
      [left, 60, 39, 0x84582f],
      [left, 19, 47, 0x281717]]
    ],
  }]
  operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {

    let team_up_Frist = thisScript.global.team_up_Frist;
    let team_up_lagTime = thisScript.global.team_up_lagTime;
    //非组队界面重置计时
    if (!team_up_lagTime || !thisScript.oper({
      name: '非组队界面',
      operator: [{ desc: thisOperator[2].desc }]
    })) {
      thisScript.global.team_up_lagTime = new Date();
    }
    team_up_lagTime = new Date();
    //开启后首次进入组队则邀请 或 停留组队界面超过10秒
    if (team_up_Frist || team_up_lagTime.getTime() - thisScript.global.team_up_lagTime.getTime() > 15000) {
      if (thisScript.oper({
        name: '三号位',
        operator: [thisOperator[0]]
      })) {
        thisScript.global.team_up_Frist = false;
        thisScript.global.team_up_lagTime = new Date();
      };
    }

    let thisConf = thisScript.scheme.config['306'];
    if (thisScript.oper({
      name: '邀请界面',
      operator: [{ desc: thisOperator[1].desc }]
    })) {

      thisScript.oper({
        id: 306,
        name: "最左刷新",
        operator: [{ oper: [thisOperator[1].oper[4]] }]
      })

      if ('好友或最近' === thisConf.selectArea) {
        thisScript.oper({
          id: 306,
          name: "好友或最近",
          operator: [{ oper: [thisOperator[1].oper[0]] }]
        })
      }
      else if ('跨区' === thisConf.selectArea) {
        thisScript.oper({
          id: 306,
          name: "跨区",
          operator: [{ oper: [thisOperator[1].oper[1]] }]
        })
      }
      if (thisScript.getOcr()) {
        let result = thisScript.findText('.+', 0, thisOperator[1].oper[2], '包含');
        if (result.length === 0) {
          console.log(`未识别到任何昵称`);
          return false;
          // thisConf.inviteName as string
        } else {
          let toClickRegion = null;
          for (let i in result) {
            console.log(`昵称历遍:${result[i].label}`)
          }
          let findInvName = thisScript.findTextByOcrResult(thisConf.inviteName as string, result, '包含')
          if (findInvName.length) {
            toClickRegion = [
              findInvName[0].points[0].x,
              findInvName[0].points[0].y,
              findInvName[0].points[0].x,
              findInvName[0].points[0].y + 65,
              1000,
            ]
          }
          if (toClickRegion === null) {
            console.log(`未识别到昵称:${thisConf.inviteName}`);
            return false;
          }
          toClickRegion && thisScript.helperBridge.regionClick([toClickRegion], thisScript.scheme.commonConfig.afterClickDelayRandom);
          if (toClickRegion && thisScript.oper({
            id: 306,
            name: '邀请按钮',
            operator: [{
              oper: [thisOperator[1].oper[3]]
            }]
          })) {
            return true;
          }
        }
      }
    };

    if (thisScript.oper({
      name: '组队挑战_判断',
      operator: [{ desc: thisOperator[3].desc }]
    }, 0)) {
      if (thisConf && !thisConf.secondPlayer) {
        thisScript.setCurrentScheme(thisConf.next_scheme as string);
        thisScript.myToast(`切换方案为[${thisConf.next_scheme}]`);
        thisScript.rerun();
      } else if (thisConf && thisConf.secondPlayer && !thisScript.oper({
        name: '三号位',
        operator: [{ desc: thisOperator[0].desc }]
      })) {
        thisScript.setCurrentScheme(thisConf.next_scheme as string);
        thisScript.myToast(`切换方案为[${thisConf.next_scheme}]`);
        thisScript.rerun();
      }
    }
    return false;
  }
}
