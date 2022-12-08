const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
    id: 993,
    name: '启动游戏',
    desc: '启动游戏',
    checked: false,
    config: [{
        desc: '',
        config: [{
            name: 'area',
            desc: '游戏区域',
            type: 'text',
            default: '',
            value: ''
        }, {
            name: 'package_name',
            desc: '程序包名，用于不同渠道服，默认官方渠道',
            type: 'text',
            default: 'com.netease.onmyoji',
            value: 'com.netease.onmyoji'
        }, {
            name: 'is_shutdown_the_game_before',
            desc: '启动前是否先关闭游戏',
            type: 'switch',
            default: false,
            value: false,
        }, {
            name: 'next_scheme',
            desc: '下一个方案',
            type: 'scheme',
            default: '式神寄养',
        }]
    }],
    operator: [{
        desc: // 是否为登录页
        [
            1280, 720,
            [
                [center, 627, 600, 0xfcfcfc],
                [center, 682, 596, 0xfdf7f0],
                [center, 487, 595, 0xe7d6b4],
                [center, 780, 600, 0xcdca9a],
            ]
        ],
        oper: [
            [center, 1280, 720, 562, 574, 722, 617, 1200],	// 点击开始游戏
            [center, 1280, 720, 424, 456, 660, 578, 5000], // 游戏区区域
        ]
    },
    {
        desc: 	// 是否为公告页
            [1280, 720,
                [[center, 648, 37, 0x676060],
                [right, 1214, 142, 0x59242c],
                [left, 204, 53, 0x555351],
                [right, 1155, 498, 0xe7d9cb]]
            ],
        oper: [
            [right, 1280, 720, 1190, 135, 1242, 186, 1200],  // 点击关闭公告
        ]
    },
    {
        desc:   // 是否为切换账号页
            [1280, 720,
                [[left, 210, 580, 0x284d16],
                [center, 376, 190, 0xcec6bc],
                [center, 658, 440, 0xffffff],
                [center, 450, 446, 0x361d0d]]
            ],
        oper: [
            [center, 1280, 720, 386, 418, 893, 474, 1200], // 点击确认
        ]
    },
    {
        desc:   // 是否为被强登
            [1280, 720,
                [[center, 780, 260, 0x573828],
                [center, 677, 398, 0xf4b25f],
                [center, 664, 415, 0x272420],
                [center, 788, 393, 0xcbb59e]]
            ],
        oper: [
            [center, 1280, 720, 578, 373, 704, 432, 1200], // 点击确认
        ]
    },
    {
        desc:   // 是否为选择游戏区域
            [1280, 720,
                [[left, 161, 149, 0xcc9955],
                [center, 643, 74, 0xdab883],
                [right, 1050, 592, 0xffe5be]]
            ],
        oper: [
            [center, 1280, 720, 706, 507, 770, 539, 1200], // 切换按钮 区域
        ]
    },
    {
        desc: // 是否为选择游戏区域 已有角色未展开
            [1280, 720,
                [[left, 161, 149, 0xcc9955],
                [center, 643, 74, 0xdab883],
                [right, 1050, 592, 0xffe5be],
                [center, 382, 568, 0x433b34]]
            ],
        oper: [
            [left, 1280, 720, 241, 532, 1023, 566, 600], // 角色所属区域名称 区域, 用于识别区域
            [left, 1280, 720, 0, 468, 98, 558, -1],    // 游戏区域边框方位
            [left, 1280, 720, 0, 0, 1279, 719, -1], // 屏幕大小
            [right, 1280, 720, 1025, 576, 1072, 627, 1200], // 展开角色按钮 区域
        ]
    },
    {
        desc:   // 登陆后是否有下载插画弹窗
            [1280, 720,
                [[center, 439, 471, 0xdf6851],
                [center, 740, 463, 0xf4b25f],
                [center, 639, 280, 0xdbc5ae],
                [center, 642, 183, 0x765443]]
            ],
        oper: [
            [center, 1280, 720, 432, 455, 564, 500, 1200], // 取消按钮
        ]
    },
    {
        desc:   // 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
            [1280, 720,
                [[right, 1226, 47, 0xcda47a],
                [right, 1157, 45, 0xb39671],
                [center, 389, 65, 0xfbc573],
                [right, 1207, 637, 0xdfd1cb]]
            ],
            oper: [
                [right, 1280, 720, 1168, 592, 1230, 690, 1200]	// 在首页打开菜单
            ]
    },
    {
        desc:   // 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
            [1280, 720,
                [[right, 1226, 47, 0xcda47a],
                [right, 1157, 45, 0xb29670],
                [center, 389, 65, 0xfbc573],
                [right, 1228, 646, 0xd6c6c3]]
            ]
    },
    {
        desc:   // 登陆后是否有皮肤广告弹窗
            [1280, 720,
                [[right, 1191, 97, 0xe79292],
                [right, 1195, 87, 0xe9d2ce],
                [right, 1195, 87, 0xe9d2ce],
                [right, 1198, 104, 0xefcacd]]
            ],
        oper: [
            [right, 1280, 720, 1166, 72, 1209, 110, 1200], // 关闭按钮
        ]
    },
    {
        desc:   // 网络连接出错弹窗
            [1280, 720,
                [[center, 910, 436, 0x009688],
                [center, 928, 260, 0xffffff],
                [center, 330, 254, 0xffffff],
                [center, 332, 462, 0xffffff]]
            ],
        oper: [
            [center, 1280, 720, 875, 426, 924, 450, 1200], // 确认按钮
        ]
    },
    {
        desc:  // 同心队弹窗
            [1280, 720,
                [[right, 1127, 628, 0xf4b25f],
                [right, 1197, 116, 0x6d334c],
                [center, 744, 64, 0x543e2b],
                [left, 134, 657, 0xcbbdab],
                [left, 131, 100, 0xc9bcaa]]
            ],
        oper: [
            [right, 1280, 720, 1155, 91, 1204, 138, 1200] // 关闭按钮
        ]
    }],
    operatorFunc(thisScript, thisOperator) {
        let thisConf = thisScript.scheme.config['993'];

        const packageName = thisConf.package_name;
        const isInstalled = app.getAppName(packageName);

        if (isInstalled && !thisScript.global.app_is_open) {

            if (thisConf.is_shutdown_the_game_before) {
                $shell(`am force-stop ${packageName}`, true);
                sleep(5000);
            }
            app.launchPackage(packageName);
            thisScript.global.app_is_open = true;
        } else if (!isInstalled) {
            thisScript.myToast(`未找到对应的应用[${packageName}]`);
            thisScript.doOspPush(thisScript, { text: '脚本已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
            thisScript.stop();
        }

        if (thisScript.oper({
            name: '是否为登录页',
            operator: [{
                desc: thisOperator[0].desc,
            }]
        })) {
            let toDetectAreaBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[1].slice(0, 4))
            console.time('ocr.detect.area');
            let resultArea = thisScript.getOcr().loadImage(toDetectAreaBmp, 1);
            console.timeEnd('ocr.detect.area');
            toDetectAreaBmp.recycle();

            if (Array.isArray(resultArea) && resultArea.length > 0 && resultArea[0].label) {
                console.log('识别成功，识别结果为:', resultArea);
                if (thisConf.area) {
                    for (let resultItem of resultArea) {
                        if (resultItem && resultItem.label) {
                            console.log('当前区域为' + resultItem.label);
                            if (!resultItem.label.includes(thisConf.area)) {

                                return thisScript.oper({
                                    name: '切换区域',
                                    operator: [{
                                        oper: thisOperator[4].oper
                                    }]
                                });
                            }
                        }
                    }
                }

                return thisScript.oper({
                    name: '点击开始游戏',
                    operator: [{
                        oper: [thisOperator[0].oper[0]]
                    }]
                });
            } else {
                console.log('识别游戏区域失败，识别结果为:', resultArea);
                return true;
            }
        }

        if (thisConf.area && thisScript.oper({
            name: '是否为切换区域页',
            operator: [{
                desc: thisOperator[4].desc,
            }]
        })) {
            thisScript.oper({
                name: '点击展开角色区域',
                operator: [{
                    desc: thisOperator[5].desc,
                    oper: [thisOperator[5].oper[3]]
                }]
            });
            let switchGameAreaBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[5].oper[0].slice(0, 4))
            console.time('ocr.game.area');
            let resultGameArea = thisScript.getOcr().loadImage(switchGameAreaBmp, 1);
            console.timeEnd('ocr.game.area');
            switchGameAreaBmp.recycle();
            console.log(resultGameArea);
            if (Array.isArray(resultGameArea) && resultGameArea.length > 0 && resultGameArea[0].label) {
                for (let resultGameItem of resultGameArea) {
                    if (resultGameItem.label.includes(thisConf.area)) {
                        let p = {
                            x: ((resultGameItem.points[0].x + resultGameItem.points[1].x) / 2) + thisOperator[5].oper[0][0],    // 补位
                            y: ((resultGameItem.points[0].y + resultGameItem.points[3].y) / 2) + thisOperator[5].oper[0][1],
                        }

                        let lx = p.x - thisOperator[5].oper[1][2] / 2;
                        let ly = thisOperator[5].oper[1][1];
                        let rx = p.x + thisOperator[5].oper[1][2] / 2;
                        let ry = thisOperator[5].oper[1][3];

                        let toClick = [
                            lx > 0 ? lx : 0,
                            ly > 0 ? ly : 0,
                            rx < thisOperator[5].oper[2][2] ? rx : thisOperator[5].oper[2][2],
                            ry < thisOperator[5].oper[2][3] ? ry : thisOperator[5].oper[2][3],
                            1000
                        ];
                        console.log('识别成功, 点击坐标为', toClick);

                        thisScript.helperBridge.regionClick([toClick], thisScript.scheme.commonConfig.afterClickDelayRandom);
                        return true;
                    }
                }
            }
        }

        if (thisScript.oper({
            name: '是否为庭院(未展开菜单)',
            operator: [{
                desc: thisOperator[7].desc,
                oper: thisOperator[7].oper
            }]
        })) {
            console.log('展开庭院菜单');
            return true;
        }

        if (thisScript.oper({
            name: '是否为庭院(已展开菜单)',
            operator: [{
                desc: thisOperator[8].desc,
            }]
        })) {
            // 做延时检测 防止登陆后的弹窗
            if (thisScript.global.checked_yard_count === 10) {
                thisScript.global.checked_yard_count = undefined;
                thisScript.setCurrentScheme(thisConf.next_scheme);
                thisScript.myToast(`切换方案为[${thisConf.next_scheme}]`);
                thisScript.rerun();
            } else {
                sleep(1500);
                if (!thisScript.global.checked_yard_count) {
                    thisScript.global.checked_yard_count = 1;
                } else {
                    thisScript.global.checked_yard_count += 1;
                }
            }

        }

        if (thisScript.oper({
            name: '是否为公告页',
            operator: [{
                desc: thisOperator[1].desc,
                oper: thisOperator[1].oper
            }]
        })) {
            return true;
        }

        if (thisScript.oper({
            name: '是否为切换账号页',
            operator: [{
                desc: thisOperator[2].desc,
                oper: thisOperator[2].oper
            }]
        })) {
            return true;
        }

        if (thisScript.oper({
            name: '是否为被强登',
            operator: [{
                desc: thisOperator[3].desc,
                oper: thisOperator[3].oper
            }]
        })) {
            return true;
        }

        if (thisScript.oper({
            name: '登陆后是否有下载插画弹窗',
            operator: [{
                desc: thisOperator[6].desc,
                oper: thisOperator[6].oper
            }]
        })) {
            return true;
        }

        if (thisScript.oper({
            name: '登陆后是否有皮肤广告弹窗',
            operator: [{
                desc: thisOperator[9].desc,
                oper: thisOperator[9].oper
            }]
        })) {
            return true;
        }

        if (thisScript.oper({
            name: '登陆后是否网络出错',
            operator: [{
                desc: thisOperator[10].desc,
                oper: thisOperator[10].oper
            }]
        })) {
            return true;
        }

        if (thisScript.oper({
            name: '登陆后是否同心队弹窗',
            operator: [{
                desc: thisOperator[11].desc,
                oper: thisOperator[11].oper
            }]
        })) {
            return true;
        }

        // 检测是否有皮肤广告
        let point = thisScript.findMultiColor('皮肤广告关闭按钮');
        if (point) {
            console.log('识别广告关闭按钮成功');
            let oper = [[
                point.x - 10,
                point.y - 10,
                point.x,
                point.y,
                1200
            ]];
            thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
        }

        return true;
    }
}