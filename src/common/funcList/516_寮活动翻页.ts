import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
// const right = 2;

export class Func516 implements IFuncOrigin {
	id = 516;
	name = '寮活动翻页';
	desc = '寮活动列表翻页操作，翻页后返回上一层，应排在[506]后';
	config = [{
		desc: '',
		config: [{
			name: 'count',
			desc: '连续执行x次后执行完成',
			type: 'list',
			data: ['2', '5', '10', '20', '40', '60', '80', '100'],
			default: '10',
		}, {
			name: 'afterCountOper',
			desc: '执行完成的操作',
			type: 'list',
			data: ['停止脚本', '切换方案', '不做任何操作'],
			default: '停止脚本',
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用准备退出',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: '寮神社界面',
		oper: [
			[center, 1280, 720, 552, 162, 836, 212, -1],     //  寮活动 滑动上位置
			[center, 1280, 720, 526, 500, 863, 505, -1],     //  寮活动 滑动下位置
			[left, 1280, 720, 25, 10, 75, 54, 1000],     //  寮活动 返回区域
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['516'];
		const defaultCount = +thisConf.count;
		if (thisScript.oper({
			id: 516,
			name: '检测_寮活动神社',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			const leftTimes = Math.max(Math.floor(defaultCount - ((thisScript.global.liao_activity_page_flag - 2) / 2)), 0);
			if (thisScript.global.liao_activity_page_flag % 2 === 1) {
				thisScript.myToast(`滑动${leftTimes}次数后：${thisConf.afterCountOper}`);
			}
			if (leftTimes == 0) {
				thisScript.global.liao_activity_page_flag = 0;
				if ('停止脚本' === thisConf.afterCountOper) {
					thisScript.doPush(thisScript, { text: `寮活动翻页次数已达到限制次数${defaultCount}，脚本已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				} else if ('切换方案' === thisConf.afterCountOper) {
					thisScript.rerun(thisConf.next_scheme);
				} else if ('不做任何操作' === thisConf.afterCountOper) {
					thisScript.global.liao_activity_page_flag = defaultCount;
					return false;
				}
			} else if (leftTimes == 1) {
				thisScript.superGlobal.liao_activity_Swith = {
					...thisScript.superGlobal.liao_activity_Swith,
					'a_ctivity_dojo': false,
					'a_ctivity_dojo_again': false,
					'a_ctivity_hunt': false,
					'a_ctivity_narrow': false,
					'a_ctivity_banquet': false,
					'a_ctivity_huntBoss': false,
				};
				return true
			}

			if (thisScript.global.liao_activity_page_flag % 2 === 1) {
				//  滑动寮活动神社
				thisScript.regionBezierSwipe(thisOperator[0].oper[1], thisOperator[0].oper[0], [1200, 1500], 1000);
				sleep(500);
				return true;
			} else {
				// thisScript.regionBezierSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [1200, 1500], 1000);
				// 由原来的上下滑动修改为返回上一级
				// const r = random(8000, 10000);
				const r = 1000
				thisScript.myToast(`未找到已开启寮活动，等待${Math.round(r / 1000)}秒后再次检测`);
				thisScript.regionClick([thisOperator[0].oper[2]], 2000);
				sleep(r);
				return true;
			}
		}
		return false;
	}
}
