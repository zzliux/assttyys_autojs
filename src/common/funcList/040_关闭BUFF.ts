import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

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
			default: '寮突破',
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
		// 0 buff界面
		desc: [1280, 720,
			[
				[center, 352, 526, 0x9c977e],
				[center, 933, 526, 0x747865],
				[center, 848, 528, 0xb89e7c],
				[center, 497, 522, 0x9e9d8c],
				[center, 363, 120, 0xd4c4bb],
				[center, 913, 121, 0xd8c7bf],
				[center, 878, 124, 0xdfd4cb]
			]
		],
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
			name: 'BUFF界面',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			// 金币妖怪_判断挑战次数是否用完
			let point = thisScript.findMultiColor('开启的BUFF') || null
			if (point) {
				thisScript.regionClick([
					[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], 1000]
				]);
				return true
			} else {
				thisScript.regionClick([thisOperator[0].oper[1]]);
				if (thisconf && thisconf.scheme_switch_enabled) {
					thisScript.setCurrentScheme(thisconf.next_scheme as string);
					thisScript.myToast(`切换方案为[${thisconf.next_scheme}]`);
					thisScript.rerun();
					sleep(3000);
				} else {
					thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
					sleep(3000);
				}
				return false
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
