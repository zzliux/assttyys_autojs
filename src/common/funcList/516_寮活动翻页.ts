import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func516 implements InterfaceFuncOrigin {
    id = 516;
    name = '寮活动翻页';
    desc = '寮活动列表翻页操作，应排在[506]后';
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
    operator: InterfaceFuncOperatorOrigin[] = [
        {
            desc:   //  检测_寮活动神社
                [
                    1280, 720,
                    [
                        [right, 1176, 171, 0x7f543d],
                        [right, 1219, 173, 0x7a5138],
                        [right, 1220, 292, 0x7b5239],
                        [right, 1176, 288, 0x855640],
                        [right, 1179, 414, 0xbb764a],
                        [right, 1218, 418, 0xbb7148],
                        [right, 1178, 540, 0x81553f],
                        [right, 1221, 536, 0x7c533a],
                        [right, 1200, 662, 0x791f1f],
                        [left, 46, 36, 0xeddc9a],
                        [left, 50, 20, 0xecd391],
                    ]
                ],
            oper: [
                [center, 1280, 720, 552, 162, 836, 212, -1],     //  寮活动 滑动上位置
                [center, 1280, 720, 526, 500, 863, 505, -1],     //  寮活动 滑动下位置
            ]
        }];
    operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
        let thisConf = thisScript.scheme.config['516'];
        let defaultCount = +thisConf.count;
        if (thisScript.oper({
            id: 516,
            name: '检测_寮活动神社',
            operator: [{ desc: thisOperator[0].desc }]
        })) {
            if (thisScript.global.liao_activity_page_flag) {
                //  滑动寮活动神社
                thisScript.helperBridge.regionBezierSwipe(thisOperator[0].oper[1], thisOperator[0].oper[0], [1200, 1500], 1000);
            } else {
                thisScript.helperBridge.regionBezierSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [1200, 1500], 1000);
            }
            sleep(500);
        }
        return false;
    }
}