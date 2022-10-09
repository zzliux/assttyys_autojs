import { setCurrentScheme } from '@/common/tool';
import { myToast } from '@/common/toolAuto';

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
        config: [{
            name: 'maxTimeForwait',
            desc: '等待时间阈值(秒)_用于判断是否等待',
            type: 'text',
            default: '600',
            value: '600',
        },
        {
            name: 'afterCountOper',
            desc: '执行完成的操作',
            type: 'list',
            data: ['停止脚本', '关闭应用'],
            default: '停止脚本',
            value: null,
        }]
    }],
    operator: [
        {
            // 检测_是否有可寄养的空位
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
            desc:   // 可用寄养位置被占用
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
            name: '检测_是否有可寄养的空位',
            operator: [{
                desc: thisOperator[0].desc
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
                thisScript.stop();
            } else if ('关闭应用' === thisConf.afterCountOper) {
                sleep(1000);
                myToast(`停止应用[${packageName}]`);
                shell(`am force-stop ${packageName}`, true);
                thisScript.stop();
            }
        }

        if (thisScript.oper({
            id: 995,
            name: '检测_结界页面是否有“寄”标志',
            operator: [{
                desc: thisOperator[2].desc
            }]
        })) {
            return thisScript.oper({
                id: 995,
                name: '结界页面点击“式神育成”',
                operator: [{
                    oper: thisOperator[2].oper
                }]
            });
        }

        if (thisScript.oper({
            id: 995,
            name: '检测_可用未禁用的寄养位置是否被占用',
            operator: [{
                desc: thisOperator[1].desc
            }]
        })) {
            // 检测结界寄养坑位的所剩时间
            let toDetectAreaBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[1].oper[0].slice(0, 4))
            console.time('ocr.detect.area');
            let resultArea = thisScript.getOcr().loadImage(toDetectAreaBmp, 1);
            console.timeEnd('ocr.detect.area');
            toDetectAreaBmp.recycle();

            if (Array.isArray(resultArea) && resultArea.length > 0) {
                for (let resultItem of resultArea) {
                    if (resultItem && resultItem.label) {
                        let timeRemaining = timeFormat(resultItem.label);
                        if (!timeRemaining || isNaN(timeRemaining.countSecond)) {
                            thisScript.global.jy_list_getTime_fault_count += 1;
                            console.log('抓取所剩时间失败');
                            continue;
                        }

                        if (timeRemaining.countSecond <= maxTimeForwait) {
                            console.log(`所剩时间为${timeRemaining.countSecond}秒`);
                            toastLog(`所剩时间为${timeRemaining.countSecond}秒`);
                            thisScript.global.jy_list_getTime_fault_count = 0;
                            return thisScript.oper({
                                id: 995,
                                name: '返回_结界页面',
                                operator: [{
                                    oper: [thisOperator[1].oper[1]]
                                }]
                            });
                        } else if (timeRemaining.countSecond > maxTimeForwait) {
                            console.log(`所剩时间为${timeRemaining.countSecond}秒`);
                            continue;
                        }
                    }
                }

                if (thisScript.global.jy_list_getTime_fault_count === 3) {
                    thisScript.oper({
                        id: 995,
                        name: '返回_我的结界页面',
                        operator: [{
                            oper: [thisOperator[1].oper[1], thisOperator[1].oper[1], thisOperator[1].oper[1]]
                        }]
                    });

                    if ('停止脚本' === thisConf.afterCountOper) {
                        thisScript.stop();
                    } else if ('关闭应用' === thisConf.afterCountOper) {
                        sleep(1000);
                        myToast(`停止应用[${packageName}]`);
                        shell(`am force-stop ${packageName}`, true);
                        thisScript.stop();
                    }
                }
            } else {
                console.log('抓取所剩时间失败');
                return true;
            }
        }

        function timeFormat(timeStr) {
            let resultTime = undefined;

            timeStr = timeStr.replace(/\D/g, '');

            if (timeStr && timeStr.length === 6) {

                let hour = parseInt(timeStr.slice(0, 2), 10);
                let minute = parseInt(timeStr.slice(2, 4), 10);
                let second = parseInt(timeStr.slice(4, 6), 10);

                resultTime = {
                    hour: hour,
                    minute: minute,
                    second: second,
                    countSecond: second + minute * 60 + hour * 360
                };
            }

            return resultTime;
        }


        return true;

    }
};
