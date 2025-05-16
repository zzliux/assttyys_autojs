import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
// const right = 2;

export class Func040 implements IFuncOrigin {
	id = 40;
	name = '关闭BUFF';
	config = [{
		desc: '结束后切换方案',
		config: [{
			name: 'scheme_switch_enabled',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '返回庭院',
		}, {
			name: 'afterCountOper',
			desc: '不开启切换方案	则',
			type: 'list',
			data: ['停止脚本', '关闭应用', '不进行任何操作'],
			default: '停止脚本',
			value: null,
		}]
	}, {
		desc: '准备界面下关闭buff',
		config: [{
			name: 'ready_once_buff',
			desc: '是否在准备界面下关闭buff，运行一次后不再运行，启用需将本功能排在“001准备”前',
			type: 'switch',
			default: false,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 0 已适配66 buff界面
		desc: 'BUFF界面',
		oper: [
			[center, 1280, 720, 0, 0, 855 - 782, 431 - 415, 2000],
			[center, 1280, 720, 110, 120, 338, 549, 500],
		]
	}, {
		// 1 准备界面
		desc: '准备界面_未准备',
		oper: [
			[left, 1280, 720, 119, 659, 150, 712, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['40'];
		if (thisScript.oper({
			id: 40,
			name: 'BUFF界面',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			thisScript.global.closed_buff = true;
			// 金币妖怪_判断挑战次数是否用完
			const point = thisScript.findMultiColor('开启的BUFF') || null
			if (point) {
				thisScript.regionClick([
					[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], 1000]
				]);
				return true
			} else {
				thisScript.regionClick([thisOperator[0].oper[1]]);
				let next_scheme = thisScript.superGlobal.next_scheme_name;
				thisScript.superGlobal.next_scheme_name = null;
				if (thisconf && thisconf.scheme_switch_enabled) {
					next_scheme = thisconf.next_scheme as string;
					sleep(3000);
				}
				if (!next_scheme) {
					if ('停止脚本' === thisconf.afterCountOper || !thisconf.afterCountOper) {
						thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
						thisScript.stop();
					} else if ('关闭应用' === thisconf.afterCountOper) {
						sleep(1000);
						const packageNames = thisScript.stopRelatedApp();
						thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，应用[${packageNames}]已杀，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
						sleep(2000);
						thisScript.stop();
					}
					return true;
				} else {
					sleep(1000);
					thisScript.rerun(next_scheme);
					return true;
				}
			}
		}

		if (thisconf && thisconf.ready_once_buff && !thisScript.global.closed_buff) {
			return thisScript.oper({
				id: 40,
				name: '准备界面关buff',
				operator: [thisOperator[1]]
			});
		}

		return false;
	}
}
