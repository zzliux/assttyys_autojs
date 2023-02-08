import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func999 implements InterfaceFuncOrigin {
    id = 510;
    name = '更改式神录御魂';
    desc = '进入式神录更改式神御魂';
    config = [{
        desc: '',
        config: [{
            name: 'groupName',
            desc: '预设分组名称',
            type: 'text',
            default: '默认分组',
            value: '默认分组',
        }, {
            name: 'defaultName',
            desc: '预设名称',
            type: 'text',
            default: '队伍1',
            value: '队伍1',
        }]
    }];
    operator: InterfaceFuncOperatorOrigin[] = [
        {   // 检测是否为式神录
            desc: [
                1280, 720,
                [
                    [left, 34, 27, 0xf7ebae],
                    [left, 231, 10, 0x302118],
                    [left, 164, 38, 0x48332c],
                    [left, 252, 90, 0x594641],
                    [left, 307, 94, 0x604c48],
                    [center, 405, 97, 0x5c4a48],
                    [center, 483, 98, 0x5c4946],
                    [center, 493, 687, 0x43322a],
                    [left, 29, 673, 0x413028],
                ]
            ]
        }, {   // 式神录未展开 预设 侧栏
            desc: [
                1280, 720,
                [
                    [left, 308, 93, 0x604c48],
                    [left, 251, 95, 0x594541],
                    [center, 415, 88, 0x634e4a],
                    [left, 31, 680, 0x47342e],
                ]
            ],
            oper: [
                [right, 1280, 720, 340, 77, 413, 106, 1200]	// 点击预设
            ]
        }, {   // 式神录已展开 预设 侧栏
            desc:
                [
                    1280, 720,
                    [
                        [left, 182, 79, 0x614c44],
                        [left, 254, 82, 0x614b42],
                        [left, 276, 85, 0x66514c],
                        [center, 338, 85, 0x967958],
                        [center, 418, 84, 0x95795b],
                        [right, 984, 72, 0x72502e],
                    ]
                ],
            oper: [
                [right, 1280, 720, 1128, 239, 1206, 282, -1],     //  预设分组 置顶开始滑动开始位置
                [right, 1280, 720, 1126, 544, 1222, 597, -1],      //  预设分组 置顶开始滑动结束位置
                [right, 1280, 720, 1086, 86, 1242, 624, -1],   //  预设分组区域
                [center, 1280, 720, 522, 146, 1024, 622, -1],   //  队伍预设区域
                [left, 1280, 720, 24, 10, 65, 43, 1200],      //  退出
                [right, 1280, 720, 1088, 88, 1244, 148, -1],    //  预设分组第一项区域
            ]
        }, {   // 更改预设队伍确认框
            desc:
                [
                    1280, 720,
                    [
                        [center, 456, 249, 0xcbb59e],
                        [center, 835, 257, 0xcbb59e],
                        [center, 853, 420, 0xcbb59e],
                        [center, 805, 420, 0xf4b25f],
                        [center, 572, 428, 0xdf6851],
                    ]
                ],
            oper: [
                [center, 1280, 720, 711, 411, 812, 450, 1200]   //  点击确认
            ]
        }, {   // 式神拓展包弹窗
            desc:
                [
                    1280, 720,
                    [
                        [center, 366, 191, 0xc8b29a],
                        [center, 909, 211, 0xcbb59e],
                        [center, 494, 290, 0x46322a],
                        [center, 600, 485, 0xf4b25f],
                        [center, 896, 516, 0xcbb59e],
                    ]
                ],
            oper: [
                [center, 1280, 720, 417, 413, 439, 436, 1200],    //  30天不提示,
                [center, 1280, 720, 910, 136, 944, 165, 1200],    //  关闭
            ]
        }, {   // 检测_提示下载式神模型
            desc:
                [
                    1280, 720,
                    [
                        [center, 363, 193, 0xcbb59e],
                        [center, 907, 208, 0xcbb59e],
                        [center, 521, 314, 0xe6d5ac],
                        [center, 574, 483, 0xf4b25f],
                        [center, 702, 499, 0xf4b25f],
                        [center, 916, 520, 0xcbb59e],
                    ]
                ],
            oper: [
                [center, 1280, 720, 916, 144, 943, 167, 1200]   //  关闭
            ]
        }, {   // 队伍预定锁定弹窗
            desc: [
                1280, 720,
                [
                    [center, 422, 252, 0xcbb59e],
                    [center, 862, 255, 0xcbb59e],
                    [center, 860, 465, 0xcbb59e],
                    [center, 427, 470, 0xcbb59e],
                    [center, 565, 422, 0xf4b25f],
                    [center, 565, 362, 0x715e4f],
                    [center, 705, 445, 0xf4b25f],
                ]
            ],
            oper: [
                [center, 1280, 720, 550, 342, 572, 367, 1200],  //  今天不再提示
                [center, 1280, 720, 592, 412, 682, 447, 1200]   //  点击确定
            ]
        }];
    operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
        let thisConf = thisScript.scheme.config['510'];

        thisScript.oper({
            name: '检测_弹窗',
            operator: [thisOperator[3], thisOperator[4], thisOperator[5], thisOperator[6]]
        })

        if (thisScript.oper({
            name: '页面为式神录',
            operator: [{
                desc: thisOperator[0].desc
            }]
        })) {

            if (thisScript.oper({
                name: '式神录展开 预设 侧栏',
                operator: [thisOperator[1]]
            })) {
                return true;
            }

            if (thisScript.oper({
                name: '式神录已展开 预设 侧栏',
                operator: [{
                    desc: thisOperator[2].desc
                }]
            })) {
                if (thisScript.global.change_shikigami_state === 'flushed') {

                    thisScript.helperBridge.regionBezierSwipe(thisOperator[2].oper[0], thisOperator[2].oper[1], [1200, 1500], 1000);

                    let toDetectAreaBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[2].oper[5].slice(0, 4))
                    console.time('ocr.detect.area');
                    let resultArea = thisScript.getOcr().loadImage(toDetectAreaBmp);
                    console.timeEnd('ocr.detect.area');
                    toDetectAreaBmp.recycle();

                    let _first_group_name = ''
                    if (Array.isArray(resultArea) && resultArea.length > 0 && resultArea[0].label) {
                        if (resultArea[0] && resultArea[0].label) {
                            console.log('识别成功,目前顶端预设分组名称为:' + resultArea[0].label);
                            _first_group_name = resultArea[0].label;
                        }
                    }

                    if (_first_group_name === thisScript.global.change_shikigami_last_group_name) {
                        thisScript.global.change_shikigami_list_swipe_times++;
                        console.log('已经到顶了');
                        sleep(600);
                    }

                    if (thisScript.global.change_shikigami_list_swipe_times >= 3) {
                        thisScript.global.change_shikigami_state = 'search_group';
                        thisScript.global.change_shikigami_list_swipe_times = 0;
                        thisScript.global.change_shikigami_last_group_name = undefined;
                    } else if (_first_group_name.trim()) {
                        thisScript.global.change_shikigami_last_group_name = _first_group_name;
                    }

                    return true;
                } else if (thisScript.global.change_shikigami_state === 'search_group') {
                    const grounpName = thisConf.groupName as string;
                    let result = thisScript.findText(grounpName, 5000, thisOperator[2].oper[2], '模糊');

                    if (result.length === 0) {
                        console.log(`未识别分组${thisConf.groupName}`);
                        return false;
                    } else {
                        console.log('识别分组成功:' + result, thisConf.groupName);

                        let p = {
                            x: (result[0].points[0].x + result[0].points[1].x) / 2,
                            y: (result[0].points[0].y + result[0].points[3].y) / 2,
                        }

                        let lx = p.x - 5
                        let ly = p.y - 5;
                        let rx = p.x + 5;
                        let ry = p.y + 5;

                        let toClick = [
                            lx > 0 ? lx : 0,
                            ly > 0 ? ly : 0,
                            rx,
                            ry,
                            1000
                        ];
                        console.log('分组目标坐标为:', toClick.toString(), p);
                        thisScript.global.change_shikigami_state = 'search_default';
                        thisScript.global.change_shikigami_list_swipe_times = 0;    //  重置翻页
                        thisScript.helperBridge.regionClick([toClick], thisScript.scheme.commonConfig.afterClickDelayRandom);
                        return true;
                    }
                } else if (thisScript.global.change_shikigami_state === 'search_default') {
                    const defaultName = thisConf.defaultName as string;
                    let result = thisScript.findText(defaultName, 5000, thisOperator[2].oper[3], '模糊');

                    if (result.length === 0) {
                        console.log(`未识别队伍预设${thisConf.defaultName}`);
                        return false;
                    } else {
                        console.log('识别队伍预设成功:' + result, thisConf.defaultName);

                        let p = {
                            x: (result[0].points[0].x + result[0].points[1].x) / 2,
                            y: (result[0].points[0].y + result[0].points[3].y) / 2,
                        }

                        let lx = p.x - 5
                        let ly = p.y - 5;
                        let rx = p.x + 5;
                        let ry = p.y + 5;

                        let toClick = [
                            lx > 0 ? lx : 0,
                            ly > 0 ? ly : 0,
                            rx,
                            ry,
                            1000
                        ];
                        console.log('队伍预设目标坐标为:', toClick.toString(), p);
                        thisScript.global.change_shikigami_state = 'change_team_default_1';
                        thisScript.helperBridge.regionClick([toClick], thisScript.scheme.commonConfig.afterClickDelayRandom);
                        sleep(1200)
                    }
                } else if (thisScript.global.change_shikigami_state.includes('change_team_default')) {
                    let point = thisScript.findMultiColor('式神录_当前选中队伍预设');

                    if (point) {
                        console.log(`式神录_当前选中队伍预设`);
                        let oper = [[
                            point.x - 2,
                            point.y - 2,
                            point.x + 2,
                            point.y + 2,
                            1200
                        ]];
                        //  需要点击两次
                        if (thisScript.global.change_shikigami_state === 'change_team_default_1') {
                            thisScript.global.change_shikigami_state = 'change_team_default_2';
                        } else {
                            thisScript.global.change_shikigami_state = 'finish';
                        }

                        thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
                    }
                } else if (thisScript.global.change_shikigami_state === 'finish') {
                    return thisScript.oper({
                        name: '退出式神录',
                        operator: [{
                            oper: [thisOperator[2].oper[4]]
                        }]
                    });
                }
            }
        }
        return false;
    }
}
