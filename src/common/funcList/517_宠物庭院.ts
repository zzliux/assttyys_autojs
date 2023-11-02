import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func517 implements IFuncOrigin {
    id = 517;
    name = '宠物庭院';
    desc = '宠物庭院喂猫喂狗';
    operator: IFuncOperatorOrigin[] = [
        {	// 页面是否为庭院且能识别宠物屋(菜单已展开)另一种图标 御祝图标 只支持默认庭院皮肤与默认装饰
            desc:
                [1280, 720,
                    [
                        [right, 1223, 662, 0xdbcbc7],
                        [right, 1155, 41, 0xd7b188],
                        [center, 451, 631, 0xe8e4e1],
                        [center, 673, 651, 0xdb8b3f],
                        [right, 1034, 448, 0xfff1be],
                        [right, 1084, 450, 0x241738],
                        [right, 1020, 448, 0x302552],
                    ]
                ],
            oper: [
                [right, 1280, 720, 1022, 420, 1080, 464, 1200]  //  点击宠物屋
            ]
        }, {	// 页面是否为庭院且能识别宠物屋(菜单未展开) 只支持默认庭院皮肤与默认装饰
            desc:
                [1280, 720,
                    [
                        [right, 1226, 47, 0xcda47a],
                        [right, 1157, 45, 0xb39671],
                        [center, 389, 65, 0xfbc573],
                        [right, 1207, 637, 0xdfd1cb],
                        [right, 1034, 448, 0xfff1be],
                        [right, 1084, 450, 0x241738],
                        [right, 1020, 448, 0x302552],
                    ]
                ]
        }, {	// 页面是否为庭院且能识别宠物屋(菜单已展开) 只支持默认庭院皮肤与默认装饰
            desc:
                [1280, 720,
                    [
                        [right, 1226, 47, 0xcda47a],
                        [right, 1157, 45, 0xb29670],
                        [center, 389, 65, 0xfbc573],
                        [right, 1228, 646, 0xd6c6c3],
                        [right, 1034, 448, 0xfff1be],
                        [right, 1084, 450, 0x241738],
                        [right, 1020, 448, 0x302552],
                    ]
                ]
        }, {    //  检测_宠物小屋
            desc:
                [
                    1280, 720,
                    [
                        [right, 1198, 660, 0xa5815c],
                        [right, 1228, 666, 0x2a1a12],
                        [left, 36, 616, 0x918980],
                        [left, 48, 616, 0xa7a8a2],
                        [left, 22, 666, 0x2f1f1f],
                        [left, 64, 44, 0xd6c5a3],
                    ]
                ],
            oper: [
                [left, 1280, 720, 26, 628, 86, 670, 600]    //  点击小屋
            ]
        }, {    //  检测_宠物后庭
            desc:
                [
                    1280, 720,
                    [
                        [right, 1260, 670, 0x9e6830],
                        [right, 1062, 698, 0x6b4332],
                        [right, 992, 672, 0xfbefe3],
                        [center, 954, 698, 0x6b4232],
                        [right, 1202, 682, 0x946241],
                        [left, 34, 666, 0xd4c4a3],
                        [left, 66, 42, 0xd5c3a1],
                    ]
                ],
            oper: [
                [left, 1280, 720, 251, 572, 284, 600, 1200],    //  左1
                [center, 1280, 720, 385, 597, 421, 625, 1200],  //  左2
                [center, 1280, 720, 412, 528, 452, 556, 1200],  //  左3   存疑
                [center, 1280, 720, 816, 362, 866, 410, 1200],    //  右1
                [center, 1280, 720, 728, 350, 772, 394, 1200],    //  右2
                [center, 1280, 720, 889, 377, 922, 410, 1200],    //  右3
            ]
        }, {    //  检测_宠物奖励
            desc:
            [
                1280, 720,
                [
                    [center, 892, 268, 0x040306],
                    [center, 922, 450, 0x030206],
                    [center, 554, 454, 0x030205],
                    [center, 748, 364, 0x030305],
                    [center, 692, 326, 0x0f0b09],
                    [center, 604, 260, 0x030205],
                    [left, 65, 39, 0x575143],
                    [right, 1176, 685, 0x2a1a12],
                ]
            ],
            oper: [
                [center, 1280, 720, 350, 528, 932, 636, 600]    //  点击空白处
            ]
        }, {    //  检测_宠物食物桌子(右)
            desc:
                [
                    1280, 720,
                    [
                        [center, 834, 334, 0xe7ddb2],
                        [center, 834, 353, 0xe7ddb2],
                        [center, 824, 269, 0xf2f2e1],
                    ]
                ],
            oper: [
                [center, 1280, 720, 805, 378, 868, 407, 1200]   //  点击桌子
            ]
        }, {    //  检测_宠物食物桌子(左)
            desc:
                [
                    1280, 720,
                    [
                        [center, 363, 525, 0xe7ddb2],
                        [center, 361, 507, 0xe7ddb2],
                        [center, 381, 425, 0xeeeedd],
                    ]
                ],
            oper: [
                [center, 1280, 720, 325, 542, 412, 576, 1200]   //  点击桌子
            ]
        }, {    //  检测_宠物食材弹窗
            desc:
                [
                    1280, 720,
                    [
                        [center, 936, 577, 0xf4b25f],
                        [center, 794, 572, 0xf4b25f],
                        [right, 1198, 76, 0x692c45],
                        [right, 1128, 95, 0xe6e6dd],
                        [right, 1149, 637, 0xc0bab4],
                        [left, 118, 648, 0x3d2c1c],
                        [left, 142, 97, 0x4c3120],
                        [left, 198, 95, 0xd4ccc7],
                    ]
                ],
            oper: [
                [center, 1280, 720, 322, 161, 502, 192, 1200],  //  点击_列表第一项食材
                [center, 1280, 720, 796, 571, 935, 607, 1200]   //  点击_放置食材
            ]
        }, {    //  检测_已投食
            desc:
                [
                    1280, 720,
                    [
                        [right, 1260, 670, 0x9e6830],
                        [right, 1062, 698, 0x6b4332],
                        [right, 992, 672, 0xfbefe3],
                        [center, 954, 698, 0x6b4232],
                        [right, 1202, 682, 0x946241],
                        [left, 34, 666, 0xd4c4a3],
                        [left, 66, 42, 0xd5c3a1],
                        [center, 378, 548, 0xe57a52],
                        [center, 835, 386, 0x9c9c7a],
                    ]
                ]
        }, {    //  式神选择弹窗
            desc:
                [
                    1280, 720,
                    [
                        [center, 322, 185, 0xe5d4c4],
                        [right, 961, 194, 0xe5d4c4],
                        [center, 952, 106, 0x2b1e14],
                        [left, 319, 594, 0xdecebd],
                        [center, 960, 537, 0xe5d4c4],
                        [right, 994, 68, 0xe7d5cf],
                    ]
                ],
            oper: [
                [right, 1280, 720, 975, 57, 1004, 84, 1200]
            ]
        }, {	// 页面是否为庭院且能识别宠物屋(菜单未展开) 只支持默认庭院皮肤与默认装饰
            desc:
                [1280, 720,
                    [
                        [right, 1223, 658, 0xdac9c4],
                        [right, 1155, 41, 0xd6b187],
                        [center, 451, 631, 0xe6e3e1],
                        [center, 683, 657, 0xda6b29],
                        [right, 1034, 448, 0xeeeabd],
                        [right, 1084, 450, 0x211440],
                        [right, 1020, 448, 0x302552],
                    ]
                ]
        }];
    operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {

        if (thisScript.oper({
            id: 517,
            name: '页面是否为庭院且能识别宠物屋',
            operator: [{
                desc: thisOperator[0].desc
            }, {
                desc: thisOperator[1].desc
            }, {
                desc: thisOperator[2].desc
            }, {
                desc: thisOperator[11].desc
            }]
        })) {
            return thisScript.oper({
                id: 517,
                name: '点击宠物屋',
                operator: [{
                    oper: thisOperator[0].oper
                }]
            });
        }

        if (thisScript.oper({
            id: 517,
            name: '页面为宠物小屋',
            operator: [thisOperator[3], thisOperator[5], thisOperator[6], thisOperator[7], thisOperator[8], thisOperator[10]]
        })) {
            return true;
        }

        if (thisScript.oper({
            id: 517,
            name: '检测_已投食',
            operator: [thisOperator[9]]
        })) {
            const next_scheme = '返回庭院';
            thisScript.rerun(next_scheme);
        }

        if (thisScript.oper({
            id: 517,
            name: '检测_宠物后庭',
            operator: [{
                desc: thisOperator[4].desc
            }]
        })) {

            // 做延时检测 防止登陆后的弹窗
            if (thisScript.global.checked_yard_count >= 6) {
                thisScript.global.checked_yard_count = 0;
                return true;
            } else {
                sleep(1500);
                if (!thisScript.global.checked_yard_count || Number.isNaN(thisScript.global.checked_yard_count)) {
                    thisScript.global.checked_yard_count = 1;
                } else {
                    thisScript.global.checked_yard_count += 1;
                }

                return thisScript.oper({
                    id: 517,
                    name: '检测_宠物后庭',
                    operator: [{
                        oper: [thisOperator[4].oper[thisScript.global.checked_yard_count - 1]]
                    }]
                });
            }
        }

        return false;
    }
}

export default new Func517();