import {
  IFuncOrigin,
  IFuncOperatorOrigin,
  IFuncOperator,
} from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func993 implements IFuncOrigin {
  id = 993;
  name = '启动游戏';
  desc = '启动游戏';
  config = [
    {
      desc: '',
      config: [
        {
          name: 'area',
          desc: '游戏区域',
          type: 'text',
          default: '',
          value: '',
        },
        {
          name: 'is_shutdown_the_game_before',
          desc: '启动前是否先关闭游戏',
          type: 'switch',
          default: false,
          value: false,
        },
        {
          name: 'next_scheme',
          desc: '下一个方案',
          type: 'scheme',
          default: '式神寄养',
        },
        {
          name: 'account_index',
          desc: '账号序号(用于同区多账号，指从上往下数第N个账号，目前指适配三个账号的情况，账号序号优先级大于账号昵称！)',
          type: 'text',
          default: 0,
          value: 0,
        },
        {
          name: 'account_name',
          desc: '账号昵称(用于同区多账号，建议只填容易识别的字眼(OCR识别容易识别失败，字数越少容错率越高)，程序会包含识别)',
          type: 'text',
          default: '',
          value: '',
        },
      ],
    },
  ];
  operator: IFuncOperatorOrigin[] = [
    {
      // 0 是否为登录页
      desc: [
        1280,
        720,
        [
          [center, 704, 602, 0xffffff],
          [center, 713, 611, 0xffffff],
          [center, 623, 597, 0xfffefe],
          [center, 630, 601, 0xfdfdfd],
          [center, 590, 611, 0xffffff],
          [center, 588, 592, 0xfefdfd],
        ],
      ],
      oper: [
        [center, 1280, 720, 562, 574, 722, 617, 1200], // 点击开始游戏
        [center, 1280, 720, 424, 456, 660, 578, 5000], // 游戏区区域
      ],
    },
    {
      // 1 是否为公告页(23年公告)
      desc: [
        1280,
        720,
        [
          [left, 60, 56, 0x5d4248],
          [right, 1208, 96, 0xf0e3d6],
          [right, 1200, 48, 0xfff0e1],
          [center, 501, 74, 0xa07b66],
          [right, 1145, 104, 0xe4d4c8],
        ],
      ],
      oper: [
        [right, 1280, 720, 1184, 34, 1212, 55, 1200], // 点击关闭公告
      ],
    },
    {
      // 2 是否为切换账号页
      desc: [
        1280,
        720,
        [
          [left, 210, 580, 0x284d16],
          [center, 376, 190, 0xcec6bc],
          [center, 658, 440, 0xffffff],
          [center, 450, 446, 0x361d0d],
        ],
      ],
      oper: [
        [center, 1280, 720, 386, 418, 893, 474, 1200], // 点击确认
      ],
    },
    {
      // 3 是否为被强登
      desc: [
        1280,
        720,
        [
          [center, 780, 260, 0x573828],
          [center, 677, 398, 0xf4b25f],
          [center, 664, 415, 0x272420],
          [center, 788, 393, 0xcbb59e],
        ],
      ],
      oper: [
        [center, 1280, 720, 578, 373, 704, 432, 1200], // 点击确认
      ],
    },
    {
      // 4 是否为选择游戏区域
      desc: [
        1280,
        720,
        [
          [left, 161, 149, 0xcc9955],
          [center, 643, 74, 0xdab883],
          [right, 1050, 592, 0xffe5be],
        ],
      ],
      oper: [
        [center, 1280, 720, 706, 507, 770, 539, 1200], // 切换按钮 区域
      ],
    },
    {
      // 5 是否为选择游戏区域 已有角色未展开
      desc: [
        1280,
        720,
        [
          [left, 161, 149, 0xcc9955],
          [center, 643, 74, 0xdab883],
          [right, 1050, 592, 0xffe5be],
          [center, 382, 568, 0x433b34],
        ],
      ],
      oper: [
        [left, 1280, 720, 241, 532, 1023, 566, 600], // 角色所属区域名称 区域, 用于识别区域
        [left, 1280, 720, 0, 468, 98, 558, -1], // 游戏区域边框方位
        [left, 1280, 720, 0, 0, 1279, 719, -1], // 屏幕大小
        [right, 1280, 720, 1025, 576, 1072, 627, 1200], // 展开角色按钮 区域
      ],
    },
    {
      // 6 登陆后是否有下载插画弹窗
      desc: [
        1280,
        720,
        [
          [center, 439, 471, 0xdf6851],
          [center, 740, 463, 0xf4b25f],
          [center, 639, 280, 0xdbc5ae],
          [center, 642, 183, 0x765443],
        ],
      ],
      oper: [
        [center, 1280, 720, 432, 455, 564, 500, 1200], // 取消按钮
      ],
    },
    {
      // 7 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
      desc: [
        1280,
        720,
        [
          [right, 1226, 47, 0xcda47a],
          [right, 1157, 45, 0xb39671],
          [center, 389, 65, 0xfbc573],
          [right, 1207, 637, 0xdfd1cb],
        ],
      ],
      oper: [
        [right, 1280, 720, 1168, 592, 1230, 690, 5000], // 在首页打开菜单
      ],
    },
    {
      // 8 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
      desc: [
        1280,
        720,
        [
          [right, 1226, 47, 0xcda47a],
          [right, 1157, 45, 0xb29670],
          [center, 389, 65, 0xfbc573],
          [right, 1228, 646, 0xd6c6c3],
        ],
      ],
    },
    {
      // 9 登陆后是否有皮肤广告弹窗
      desc: [
        1280,
        720,
        [
          [right, 1191, 97, 0xe79292],
          [right, 1195, 87, 0xe9d2ce],
          [right, 1195, 87, 0xe9d2ce],
          [right, 1198, 104, 0xefcacd],
        ],
      ],
      oper: [
        [right, 1280, 720, 1166, 72, 1209, 110, 1200], // 关闭按钮
      ],
    },
    {
      // 10 网络连接出错弹窗(适配 mumu6)
      desc: [
        1280,
        720,
        [
          [center, 928, 260, 0xffffff],
          [center, 330, 254, 0xffffff],
          [center, 332, 462, 0xffffff],
          [center, 376, 294, 0xf9e4d8],
        ],
      ],
      oper: [
        [center, 1280, 720, 875, 426, 924, 450, 1200], // 确认按钮
      ],
    },
    {
      // 11 同心队弹窗
      desc: [
        1280,
        720,
        [
          [right, 1127, 628, 0xf4b25f],
          [right, 1197, 116, 0x6d334c],
          [center, 744, 64, 0x543e2b],
          [left, 134, 657, 0xcbbdab],
          [left, 131, 100, 0xc9bcaa],
        ],
      ],
      oper: [
        [right, 1280, 720, 1155, 91, 1204, 138, 1200], // 关闭按钮
      ],
    },
    {
      // 12 检测_无响应窗口(适配 雷电)
      desc: [
        1280,
        720,
        [
          [center, 328, 271, 0xffffff],
          [center, 875, 273, 0xffffff],
          [center, 333, 486, 0xffffff],
          [center, 951, 481, 0xffffff],
          [center, 532, 381, 0xffffff],
          [center, 484, 458, 0xffffff],
        ],
      ],
      oper: [
        [center, 1280, 720, 425, 436, 484, 464, 1200], //	点击等待
      ],
    },
    {
      // 13 页面是否为庭院(菜单已展开)另一种图标 御祝图标 只支持默认庭院皮肤与默认装饰
      desc: [
        1280,
        720,
        [
          [right, 1223, 662, 0xdbcbc7],
          [right, 1155, 41, 0xd7b188],
          [center, 451, 631, 0xe8e4e1],
          [center, 673, 651, 0xdb8b3f],
        ],
      ],
    },
    {
      // 14 继续战斗弹窗
      desc: [
        1280,
        720,
        [
          [center, 835, 252, 0xcbb59e],
          [center, 452, 245, 0xcbb59e],
          [center, 817, 460, 0xcbb59e],
          [center, 447, 465, 0xcbb59e],
          [center, 582, 412, 0xdf6851],
          [center, 782, 410, 0xf4b25f],
        ],
      ],
      oper: [
        [center, 1280, 720, 492, 405, 590, 440, 1200], //	点击取消
      ],
    },
    {
      // 15 是否为公告页(22年公告)
      desc: [
        1280,
        720,
        [
          [center, 648, 37, 0x676060],
          [right, 1214, 142, 0x59242c],
          [left, 204, 53, 0x555351],
          [right, 1155, 498, 0xe7d9cb],
        ],
      ],
      oper: [
        [right, 1280, 720, 1190, 135, 1242, 186, 1200], // 点击关闭公告
      ],
    },
    {
      // 16 庭院已打开菜单，另另外一种图标
      desc: [
        1280,
        720,
        [
          [right, 1223, 658, 0xdac9c4],
          [right, 1155, 41, 0xd6b187],
          [center, 451, 631, 0xe6e3e1],
          [center, 683, 657, 0xda6b29],
        ],
      ],
    },
    {
      // 17 客户端更新窗口关闭
      desc: [
        1280,
        720,
        [
          [center, 405, 395, 0xeddccc],
          [center, 869, 419, 0xeddccc],
          [center, 714, 556, 0xf4b25f],
          [center, 915, 131, 0x65333b],
          [right, 1224, 50, 0x54422f],
        ],
      ],
      oper: [[center, 1280, 720, 894, 119, 941, 175, 1000]],
    },
    {
      //  18 同区多账号(目前只适配两个账号，多个账户需要进一步适配)
      desc: [
        1280,
        720,
        [
          [left, 38, 58, 0xeff5fb],
          [left, 90, 146, 0x371f16],
          [left, 98, 164, 0x432f2c],
          [left, 26, 163, 0x3e2825],
          [left, 97, 290, 0x422e2a],
          [left, 90, 270, 0x371f16],
          [left, 28, 302, 0x302020],
        ],
      ],
      oper: [
        [left, 1280, 720, 106, 101, 424, 607, 1200], //  多账号区域
        [left, 1280, 720, 142, 142, 261, 180, 1200], //  第一个账号坐标
        [left, 1280, 720, 126, 272, 264, 307, 1200], //  第二个账号坐标
        [left, 1280, 720, 126, 377, 289, 409, 1200], //  第三个账号坐标(瞎猜的，没有三个账号同区的场景)
      ],
    }, 
    { // 19 看CG确认窗口点取消
      desc: [
        1280, 720,
        [
          [center, 498, 416, 0xdf6851],
          [center, 646, 420, 0xcbb59c],
          [center, 716, 421, 0xf3b25e],
          [center, 438, 236, 0x634233],
          [center, 764, 329, 0xcbb59c],
          [center, 856, 376, 0xcbb59c],
          [center, 656, 465, 0xc3ad93],
          [center, 423, 485, 0x674536],
        ]
      ],
      oper: [
        [center, 1280, 720, 471, 395, 595, 455, 1000],
      ]
    }, 
    {
      // 20 网络连接出错弹窗(适配 雷电)
      desc: [
        1280,
        720,
        [
          [center, 910, 436, 0x009688],
          [center, 928, 260, 0xffffff],
          [center, 330, 254, 0xffffff],
          [center, 332, 462, 0xffffff],
        ],
      ],
      oper: [
        [center, 1280, 720, 875, 426, 924, 450, 1200], // 确认按钮
      ],
    },
  ];
  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    let thisConf = thisScript.scheme.config['993'];
    if (typeof thisScript.global.app_is_open_flag === 'undefined') {
      thisScript.global.app_is_open_flag = 0;
    }

    if (thisScript.oper({
      id: 993,
      name: '登录时不看CG',
      operator: [thisOperator[19]],
    })) {
      return true;
    }

    if (
      thisScript.oper({
        id: 993,
        name: '是否为庭院(未展开菜单)',
        operator: [
          {
            desc: thisOperator[7].desc,
            oper: thisOperator[7].oper,
          },
        ],
      })
    ) {
      console.log('展开庭院菜单');
      return true;
    }

    if (
      thisScript.oper({
        id: 993,
        name: '是否为庭院',
        operator: [
          {
            desc: thisOperator[8].desc,
          },
          {
            desc: thisOperator[13].desc,
          },
          {
            desc: thisOperator[16].desc,
          },
        ],
      })
    ) {
      // 做延时检测 防止登陆后的弹窗
      if (
        (thisScript.global.app_is_open_flag >= 3 &&
          thisScript.global.checked_yard_count >= 10) ||
        thisScript.global.app_is_open_flag < 3
      ) {
        thisScript.global.checked_yard_count = 0;
        thisScript.setCurrentScheme(thisConf.next_scheme as string);
        thisScript.myToast(`切换方案为[${thisConf.next_scheme}]`);
        thisScript.rerun();
        sleep(3000);
        return true;
      } else {
        sleep(1500);
        if (!thisScript.global.checked_yard_count) {
          thisScript.global.checked_yard_count = 1;
        } else {
          thisScript.global.checked_yard_count += 1;
        }
        return false;
      }
    }

    if (
      thisScript.global.app_is_open_flag >= 3 &&
      thisScript.global.app_is_open_flag !== 99
    ) {
      if (thisConf.is_shutdown_the_game_before) {
        // $shell(`am force-stop ${packageName}`, true);
        thisScript.stopRelatedApp();
        sleep(5000);
      }
      thisScript.launchRelatedApp();
      thisScript.global.game_area = '';
      thisScript.global.app_is_open_flag = 99;
    } else if (thisScript.global.app_is_open_flag < 3) {
      sleep(2000);
      thisScript.global.app_is_open_flag++;
    }

    if (
      thisScript.oper({
        name: '是否为登录页',
        operator: [
          {
            desc: thisOperator[0].desc,
          },
        ],
      })
    ) {
      let toDetectAreaBmp = thisScript.helperBridge.helper.GetBitmap(
        ...thisOperator[0].oper[1].slice(0, 4)
      );
      console.time('ocr.detect.area');
      let resultArea = thisScript.getOcrDetector().loadImage(toDetectAreaBmp);
      console.timeEnd('ocr.detect.area');
      toDetectAreaBmp.recycle();

      if (
        Array.isArray(resultArea) &&
        resultArea.length > 0 &&
        resultArea[0].label
      ) {
        console.log('识别成功，识别结果为:', resultArea);
        thisScript.global.game_area = resultArea[0].label;
        if (thisConf.area) {
          for (let resultItem of resultArea) {
            if (resultItem && resultItem.label) {
              console.log('当前区域为' + resultItem.label);
              if (!resultItem.label.includes(String(thisConf.area))) {
                return thisScript.oper({
                  name: '切换区域',
                  operator: [
                    {
                      oper: thisOperator[4].oper,
                    },
                  ],
                });
              }
            }
          }
        }

        return thisScript.oper({
          name: '点击开始游戏',
          operator: [
            {
              oper: [thisOperator[0].oper[0]],
            },
          ],
        });
      } else {
        console.log('识别游戏区域失败，识别结果为:', resultArea);
        return false;
      }
    }

    if (
      thisScript.global.game_area &&
      thisScript.oper({
        name: '是否为同区多账号',
        operator: [
          {
            desc: thisOperator[18].desc,
          },
        ],
      })
    ) {
      if (thisConf.account_index) {
        let index = parseInt(thisConf.account_index as string, 10);
        if (index > 3 || index < 1) {
          console.log('993 ==> 账号序号有误，大于3小于1，请检查账号序号!');
          thisScript.stop();
          return false;
        }
        return thisScript.oper({
          name: `点击第${thisConf.account_index}个同区账号`,
          operator: [
            {
              oper: [thisOperator[18].oper[index], thisOperator[0].oper[0]],
            },
          ],
        });
      } else if (thisConf.account_name) {
        let toDetectAreaBmp = thisScript.helperBridge.helper.GetBitmap(
          ...thisOperator[18].oper[0].slice(0, 4)
        );
        console.time('ocr.detect.area');
        let resultArea = thisScript.getOcrDetector().loadImage(toDetectAreaBmp);
        console.timeEnd('ocr.detect.area');
        toDetectAreaBmp.recycle();

        if (
          Array.isArray(resultArea) &&
          resultArea.length > 0 &&
          resultArea[0].label
        ) {
          console.log('识别成功，识别结果为:', resultArea);
          if (thisConf.account_name) {
            for (let resultItem of resultArea) {
              if (resultItem && resultItem.label) {
                console.log('当前账号为' + resultItem.label);
                if (resultItem.label.includes(String(thisConf.account_name))) {
                  let p = {
                    x:
                      (resultItem.points[0].x + resultItem.points[1].x) / 2 +
                      thisOperator[18].oper[0][0], // 补位
                    y:
                      (resultItem.points[0].y + resultItem.points[3].y) / 2 +
                      thisOperator[18].oper[0][1],
                  };

                  let lx = p.x - 10;
                  let ly = p.y - 10;
                  let rx = p.x + 10;
                  let ry = p.y + 10;

                  let toClick = [
                    lx > 0 ? lx : 0,
                    ly > 0 ? ly : 0,
                    rx,
                    ry,
                    1200,
                  ];
                  console.log('识别成功, 点击坐标为', toClick);

                  thisScript.regionClick([toClick]);

                  return thisScript.oper({
                    name: '点击开始游戏',
                    operator: [
                      {
                        oper: [thisOperator[0].oper[0]],
                      },
                    ],
                  });
                }
              }
            }
          }
        } else {
          console.log('识别同区账号失败，识别结果为:', resultArea);
          return false;
        }
      }
    }

    if (
      thisConf.area &&
      thisScript.oper({
        name: '是否为切换区域页',
        operator: [
          {
            desc: thisOperator[4].desc,
          },
        ],
      })
    ) {
      thisScript.oper({
        name: '点击展开角色区域',
        operator: [
          {
            desc: thisOperator[5].desc,
            oper: [thisOperator[5].oper[3]],
          },
        ],
      });
      let switchGameAreaBmp = thisScript.helperBridge.helper.GetBitmap(
        ...thisOperator[5].oper[0].slice(0, 4)
      );
      console.time('ocr.game.area');
      let resultGameArea = thisScript
        .getOcrDetector()
        .loadImage(switchGameAreaBmp);
      console.timeEnd('ocr.game.area');
      switchGameAreaBmp.recycle();
      console.log(resultGameArea);
      if (
        Array.isArray(resultGameArea) &&
        resultGameArea.length > 0 &&
        resultGameArea[0].label
      ) {
        for (let resultGameItem of resultGameArea) {
          if (resultGameItem.label.includes(String(thisConf.area))) {
            let p = {
              x:
                (resultGameItem.points[0].x + resultGameItem.points[1].x) / 2 +
                thisOperator[5].oper[0][0], // 补位
              y:
                (resultGameItem.points[0].y + resultGameItem.points[3].y) / 2 +
                thisOperator[5].oper[0][1],
            };

            let lx = p.x - thisOperator[5].oper[1][2] / 2;
            let ly = thisOperator[5].oper[1][1];
            let rx = p.x + thisOperator[5].oper[1][2] / 2;
            let ry = thisOperator[5].oper[1][3];

            let toClick = [
              lx > 0 ? lx : 0,
              ly > 0 ? ly : 0,
              rx < thisOperator[5].oper[2][2] ? rx : thisOperator[5].oper[2][2],
              ry < thisOperator[5].oper[2][3] ? ry : thisOperator[5].oper[2][3],
              1000,
            ];
            console.log('识别成功, 点击坐标为', toClick);

            thisScript.regionClick([toClick]);
            return true;
          }
        }
      }
    }

    if (
      thisScript.oper({
        id: 993,
        name: '登陆后是否有弹窗',
        operator: [
          thisOperator[1],
          thisOperator[2],
          thisOperator[3],
          thisOperator[6],
          thisOperator[9],
          thisOperator[10],
          thisOperator[11],
          thisOperator[12],
          thisOperator[14],
          thisOperator[15],
          thisOperator[17],
          thisOperator[20],
        ],
      })
    ) {
      return true;
    }

    //	游戏区域状态不为空
    if (thisScript.global.game_area) {
      // 检测是否有皮肤广告	误触太多了，关了
      let point = thisScript.findMultiColor('皮肤广告关闭按钮');
      if (point) {
        console.log('识别广告关闭按钮成功');
        let oper = [[point.x - 10, point.y - 10, point.x, point.y, 1200]];
        thisScript.regionClick(oper);
        return true;
      }
    }

    return false;
  }
}
