import { myToast } from '@/common/toolAuto';
import { setCurrentScheme } from '@/common/tool';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
    id: 995,
    name: '寄养式神操作',
    desc: '在好友结界中寄养式神',
    checked: false,
    config: [{
        desc: '',
        config: [
            {
                name: 'maxTimeForwait',
                desc: '在好友结界等待时间阈值(分钟)',
                type: 'text',
                default: '10',
                value: '10',
            },
            {
                name: 'afterCountOper',
                desc: '执行完成的操作',
                type: 'list',
                data: ['停止脚本', '关闭应用'],
                default: '停止脚本',
                value: null,
            },
            {
                name: 'isAutoFosterCare',
                desc: '好友结界卡为空时是否启用自动寄养',
                type: 'switch',
                default: true,
                value: true,
            },
            {
                name: 'next_scheme',
                desc: '完成后下一个方案',
                type: 'scheme',
                default: '返回庭院',
                value: '返回庭院',
            }]
    }],
    operator: [
        {
            // 检测_第一个坑位是否有可寄养的空位
            desc: [1280, 720,
                [[right, 1188, 85, 0x7b776e],
                [right, 1162, 125, 0xac9b7a],
                [left, 71, 645, 0xffffff],
                [right, 1170, 574, 0xedcba9]]
            ],
            oper: [
                [center, 1280, 720, 565, 500, 670, 675, 1200],  // 点击排位第一的式神（前三为达摩）
                [center, 1280, 720, 672, 514, 798, 572, 600]   // 点击确认
            ],
        },
        {
            desc:   // 检测_第二个坑位是否有可寄养的空位
                [1280, 720,
                    [[left, 71, 645, 0xffffff],
                    [right, 1170, 574, 0xedcba9],
                    [right, 1019, 85, 0x7c786e],
                    [right, 993, 125, 0xac9b7a]]
                ]
        },
        {
            desc:   // 检测_第一个坑位是否可用且被占用
                [1280, 720,
                    [[right, 1144, 88, 0xf4e9b6],
                    [right, 1228, 93, 0xf1e4ad],
                    [right, 1170, 574, 0xedcba9],
                    [right, 1224, 123, 0xd7b674]]
                ],
            oper: [
                [right, 1280, 720, 962, 120, 1231, 146, 600],   // 寄养位置的所剩时间方位，用于检测所剩时间
                [left, 1280, 720, 23, 10, 71, 56, 1200],   // 返回按钮
            ]
        },
        {
            desc:   // 检测_结界界面是否可寄养
                [1280, 720,
                    [[center, 611, 300, 0x0c0804],
                    [center, 913, 305, 0x0c0804],
                    [left, 318, 305, 0x0c0804],
                    [center, 605, 295, 0xae2e13],
                    [center, 612, 148, 0xe6c8a3]]
                ],
            oper: [
                [center, 1280, 720, 576, 129, 649, 204, 600],   // 点击寄养
            ]
        },
        {
            desc:   // 检测_是否为好友结界
                [1280, 720,
                    [[left, 63, 48, 0x2a3b74],
                    [left, 32, 48, 0xeff5fb],
                    [center, 458, 33, 0x513930],
                    [center, 614, 307, 0x0c0804]]
                ],
            oper: [
                [left, 1280, 720, 17, 17, 69, 70, 1200],   // 点击返回
            ]
        },
        {
            desc:   // 检测_好友结界是否没有挂结界卡
                [1280, 720,
                    [[left, 63, 48, 0x2a3b74],
                    [left, 32, 48, 0xeff5fb],
                    [center, 458, 33, 0x513930],
                    [center, 614, 307, 0x0c0804],
                    [center, 914, 314, 0x0c0804],
                    [center, 917, 248, 0xc09642],
                    [center, 903, 259, 0xcba552],
                    [center, 927, 235, 0xd3ad58],
                    [center, 919, 291, 0x3d2c28]]
                ]
        },
        {
            desc:   // 检测_第二个坑位是否可用且被占用
                [1280, 720,
                    [[right, 975, 88, 0xf4e9b6],
                    [right, 1059, 93, 0xf1e4ad],
                    [right, 1170, 574, 0xedcba9],
                    [right, 1055, 123, 0xd7b674]]
                ],
        }
    ],
    operatorFunc(thisScript, thisOperator) {
        let thisConf = thisScript.scheme.config['995'];
        const maxTimeForwait = parseInt(thisConf.maxTimeForwait, 10);
        const packageName = 'com.netease.onmyoji';
        if (!thisScript.global.jy_list_getTime_fault_count) {
            thisScript.global.jy_list_getTime_fault_count = 0;
        }

        if (thisScript.oper({
            id: 995,
            name: '检测_是否为好友结界',
            operator: [{
                desc: thisOperator[4].desc
            }]
        })) {
            const now = new Date();
            if (now.getTime() - thisScript.global.jy_friends_enchantment_waitingtime > maxTimeForwait * 60000) {
                console.log(`已在好友结界等待${maxTimeForwait}分钟，切换到自选结界`);
                return thisScript.oper({
                    id: 995,
                    name: '返回我的结界页面，切换至自选结界逻辑',
                    operator: [{
                        oper: thisOperator[4].oper
                    }]
                });
            }
        }

        if (thisScript.oper({
            id: 995,
            name: '检测_好友结界是否没有挂结界卡',
            operator: [{
                desc: thisOperator[5].desc
            }]
        }) && thisConf.isAutoFosterCare) {
            console.log(`好友没有挂结界卡，切换到自选结界`);
            return thisScript.oper({
                id: 995,
                name: '返回我的结界页面，切换至自选结界逻辑',
                operator: [{
                    oper: thisOperator[4].oper
                }]
            });
        }

        if (thisScript.oper({
            id: 995,
            name: '检测_是否有可寄养的空位',
            operator: [{
                desc: thisOperator[0].desc
            }]
        }) || thisScript.oper({
            id: 995,
            name: '检测_二号坑位是否有可寄养的空位',
            operator: [{
                desc: thisOperator[1].desc
            }]
        })) {
            thisScript.oper({
                id: 995,
                name: '执行_寄养式神',
                operator: [{
                    oper: thisOperator[0].oper
                }]
            });

            if ('停止脚本' === thisConf.afterCountOper) {
                thisScript.oper({
                    id: 995,
                    name: '返回_阴阳寮页面',
                    operator: [{
                        oper: [thisOperator[2].oper[1], thisOperator[2].oper[1], thisOperator[2].oper[1]]
                    }]
                });
                setCurrentScheme(thisConf.next_scheme);
                myToast(`切换方案为[${thisConf.next_scheme}]`);
                thisScript.rerun();
            } else if ('关闭应用' === thisConf.afterCountOper) {
                sleep(1000);
                myToast(`停止应用[${packageName}]`);
                shell(`am force-stop ${packageName}`, true);
                thisScript.stop();
                return true;
            }
        }

        if (thisScript.oper({
            id: 995,
            name: '检测_结界页面是否有“寄”标志',
            operator: [{
                desc: thisOperator[3].desc
            }]
        })) {
            return thisScript.oper({
                id: 995,
                name: '结界页面点击“式神育成”',
                operator: [{
                    oper: thisOperator[3].oper
                }]
            });
        }

        if (thisScript.oper({
            id: 995,
            name: '检测_第一个坑位可用未禁用的寄养位置是否被占用',
            operator: [{
                desc: thisOperator[2].desc
            }]
        }) || thisScript.oper({
            id: 995,
            name: '检测_第二个坑位可用未禁用的寄养位置是否被占用',
            operator: [{
                desc: thisOperator[6].desc
            }]
        })) {
            // TOFIX
            // // 检测结界寄养坑位的所剩时间
            // let toDetectAreaBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[2].oper[0].slice(0, 4))
            // console.time('ocr.detect.area');
            // let resultArea = thisScript.getOcr().loadImage(toDetectAreaBmp, 1);
            // console.timeEnd('ocr.detect.area');
            // toDetectAreaBmp.recycle();

            // if (Array.isArray(resultArea) && resultArea.length > 0) {
            //     for (let resultItem of resultArea) {
            //         if (resultItem && resultItem.label) {
            //             let timeRemaining = timeFormat(resultItem.label);
            //             if (!timeRemaining || isNaN(timeRemaining.countSecond)) {
            //                 thisScript.global.jy_list_getTime_fault_count += 1;
            //                 console.log('抓取所剩时间失败');
            //                 continue;
            //             }

            //             if (timeRemaining.countSecond <= maxTimeForwait * 60000) {
            //                 console.log(`所剩时间为${timeRemaining.countSecond}秒`);
            //                 toastLog(`所剩时间为${timeRemaining.countSecond}秒`);
            //                 thisScript.global.jy_list_getTime_fault_count = 0;
            //                 return thisScript.oper({
            //                     id: 995,
            //                     name: '返回_结界页面',
            //                     operator: [{
            //                         oper: [thisOperator[2].oper[1]]
            //                     }]
            //                 });
            //             } else if (timeRemaining.countSecond > maxTimeForwait * 60000) {
            //                 console.log(`所剩时间为${timeRemaining.countSecond}秒`);
            //                 continue;
            //             }
            //         }
            //     }

            //     if (thisScript.global.jy_list_getTime_fault_count === 3) {
            //         thisScript.oper({
            //             id: 995,
            //             name: '返回_我的结界页面',
            //             operator: [{
            //                 oper: [thisOperator[2].oper[1], thisOperator[2].oper[1], thisOperator[2].oper[1]]
            //             }]
            //         });

            //         if ('停止脚本' === thisConf.afterCountOper) {
            //             thisScript.stop();
            //         } else if ('关闭应用' === thisConf.afterCountOper) {
            //             sleep(1000);
            //             myToast(`停止应用[${packageName}]`);
            //             shell(`am force-stop ${packageName}`, true);
            //             thisScript.stop();
            //         }
            //     }
            // } else {
            //     console.log('抓取所剩时间失败');
            //     return true;
            // }

            thisScript.global.jy_list_getTime_fault_count = 0;

            // 记录返回结界页面的开始时间
            if (thisScript.global.jy_friends_enchantment_waitingtime === undefined) {
                thisScript.global.jy_friends_enchantment_waitingtime = new Date().getTime();
            }

            return thisScript.oper({
                id: 995,
                name: '返回结界页面并等待寄养的坑位',
                operator: [{
                    oper: [thisOperator[2].oper[1]]
                }]
            });
        }

        // function timeFormat(timeStr) {
        //     let resultTime = undefined;

        //     timeStr = timeStr.replace(/\D/g, '');

        //     if (timeStr && timeStr.length === 6) {

        //         let hour = parseInt(timeStr.slice(0, 2), 10);
        //         let minute = parseInt(timeStr.slice(2, 4), 10);
        //         let second = parseInt(timeStr.slice(4, 6), 10);

        //         resultTime = {
        //             hour: hour,
        //             minute: minute,
        //             second: second,
        //             countSecond: second + minute * 60 + hour * 360
        //         };
        //     }

        //     return resultTime;
        // }

        return false;
    }
};
