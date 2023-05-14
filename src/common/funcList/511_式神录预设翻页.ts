import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func511 implements IFuncOrigin {
    id = 511;
    name = '式神录预设_翻页';
    desc = '式神录预设列表操作，应排在[510]后';
    config = [{
        desc: '',
        config: [{
            name: 'count',
            desc: '连续执行x次后执行完成',
            type: 'list',
            data: ['2', '3', '4', '5', '6', '7', '8', '9'],
            default: '3',
            value: null,
        }, {
            name: 'afterCountOper',
            desc: '执行完成的操作',
            type: 'list',
            data: ['停止脚本', '退出式神录'],
            default: '退出式神录',
            value: null,
        }]
    }];
    operator: IFuncOperatorOrigin[] = [
        {
            desc:   //  式神录已展开 预设 侧栏
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
                [left, 1280, 720, 24, 10, 65, 43, 1200],      //  退出
            ]
        }, {
            desc:	// 是否为预设分组列表底部
                [
                    1280, 720,
                    [
                        [right, 1119, 628, 0x3a2b23],
                        [left, 260, 78, 0x614c44],
                        [right, 1077, 669, 0x6e4e2f],
                        [right, 1257, 650, 0x765130],
                    ]
                ],
            oper: [
                [right, 1280, 720, 1126, 544, 1222, 597, -1],     //  预设分组 滑动开始位置
                [right, 1280, 720, 1128, 339, 1206, 382, -1],     //  预设分组 滑动结束位置
            ]
        }, {
            desc:	// 是否为队伍预设列表底部
                [
                    1280, 720,
                    [
                        [right, 1040, 606, 0x4c2f21],
                        [right, 1052, 615, 0x4a2e20],
                        [center, 861, 105, 0x583716],
                        [left, 260, 80, 0x614c45],
                        [center, 432, 85, 0x5d4741],
                        [right, 1077, 368, 0x724e2d],
                    ]
                ],
            oper: [
                [center, 1280, 720, 705, 461, 806, 473, -1],    //  预设分组 滑动开始位置
                [center, 1280, 720, 727, 274, 837, 290, -1],    //  预设分组 滑动结束位置
                [right, 1280, 720, 1087, 563, 1245, 626, -1],     //  预设分组最后一项区域
            ]
        }];
    operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
        let thisConf = thisScript.scheme.config['511'];
        let thisConfFor510 = thisScript.scheme.config['510'];
        let defaultCount = +thisConf.count;
        if (thisConfFor510.fastMode == false && thisScript.oper({
            id: 511,
            name: '式神录已展开 预设 侧栏_判断',
            operator: [{ desc: thisOperator[0].desc }]
        })) {
            if (thisScript.global.change_shikigami_state === 'search_group') {
                thisScript.helperBridge.regionBezierSwipe(thisOperator[1].oper[0], thisOperator[1].oper[1], [1200, 1500], 1000);

                let toDetectAreaBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[2].oper[2].slice(0, 4))
                console.time('ocr.detect.area');
                let resultArea = thisScript.getOcr().loadImage(toDetectAreaBmp);
                console.timeEnd('ocr.detect.area');
                toDetectAreaBmp.recycle();

                let _last_group_name = ''
                if (Array.isArray(resultArea) && resultArea.length > 0 && resultArea[0].label) {
                    if (resultArea[0] && resultArea[0].label) {
                        console.log('识别成功,预设分组名称为:' + resultArea[0].label);
                        _last_group_name = resultArea[0].label;
                    }
                }

                if (thisScript.oper({
                    id: 511,
                    name: '是否为预设分组列表底部',
                    operator: [{
                        desc: thisOperator[1].desc
                    }]
                })) {
                    thisScript.global.change_shikigami_list_swipe_times++;
                    console.log('找不到指定预设分组');
                    sleep(600);
                } else if (_last_group_name === thisScript.global.change_shikigami_last_group_name) {
                    thisScript.global.change_shikigami_list_swipe_times++;
                    console.log('找不到指定队伍预设');
                    sleep(600);
                }

                if (_last_group_name.trim()) {
                    thisScript.global.change_shikigami_last_group_name = _last_group_name;
                }
            } else if (thisScript.global.change_shikigami_state === 'search_default') {
                thisScript.helperBridge.regionBezierSwipe(thisOperator[2].oper[0], thisOperator[2].oper[1], [1200, 1500], 1000);

                if (thisScript.oper({
                    id: 511,
                    name: '是否为预设分组列表底部',
                    operator: [{
                        desc: thisOperator[2].desc
                    }]
                })) {
                    thisScript.global.change_shikigami_list_swipe_times++;
                    console.log('找不到指定队伍预设');
                    sleep(600);
                }
            }

            if (thisScript.global.change_shikigami_list_swipe_times >= defaultCount) {
                thisScript.global.change_shikigami_list_swipe_times = 0;
                if ('停止脚本' === thisConf.afterCountOper) {
                    thisScript.doOspPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
                    thisScript.stop();
                } else if ('退出式神录' === thisConf.afterCountOper) {
                    return thisScript.oper({
                        name: '退出式神录',
                        operator: [{
                            oper: [thisOperator[0].oper[0]]
                        }]
                    });
                }
            }
            return true;
        }
        return false;
    }
}