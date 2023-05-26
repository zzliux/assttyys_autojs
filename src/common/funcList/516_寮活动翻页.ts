import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func516 implements IFuncOrigin {
    id = 516;
    name = '寮活动翻页';
    desc = '寮活动列表翻页操作，应排在[506]后';
    config = [{
        desc: '',
        config: [{
            name: 'count',
            desc: '连续执行x次后执行完成',
            type: 'list',
            data: ['2','20', '40', '60', '80', '100'],
            default: '40',
            value: null,
        }, {
            name: 'afterCountOper',
            desc: '执行完成的操作',
            type: 'list',
            data: ['停止脚本', '切换方案'],
            default: '停止脚本',
            value: null,
        }, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用准备退出',
		}]
    }];
    operator: IFuncOperatorOrigin[] = [
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
    operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
        let thisConf = thisScript.scheme.config['516'];
        let defaultCount = +thisConf.count;
        if (thisScript.oper({
            id: 516,
            name: '检测_寮活动神社',
            operator: [{ desc: thisOperator[0].desc }]
        })) {

            if (thisScript.global.liao_activity_page_flag >= defaultCount) {
                thisScript.global.liao_activity_page_flag = 0;

                if ('停止脚本' === thisConf.afterCountOper) {
					thisScript.doPush(thisScript, { text: `寮活动翻页次数已达到限制次数${defaultCount}，脚本已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				} else if ('切换方案' === thisConf.afterCountOper) {
					// let oper = thisOperator[0].oper[2];
					// thisScript.helperBridge.regionClick([oper], 500 + thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.setCurrentScheme(thisConf.next_scheme as string);
					thisScript.myToast(`切换方案为[${thisConf.next_scheme}]`);
					thisScript.rerun();
				}
            }

            if (thisScript.global.liao_activity_page_flag % 2 === 1) {
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
