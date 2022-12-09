import { Script } from '@/system/script';
import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func012 implements InterfaceFuncOrigin {
	id = 12;
	name = '寮突破_翻页';
	desc = '寮突破时执行翻页操作，应排在[9勋章点击]后';
	checked = false;
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
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280,720,
			[[center,171,104,0x4a3624],
			[center,564,89,0x5e4735],
			[center,718,92,0x583716],
			[center,728,86,0xdebc56],
			[center,1210,130,0xebdac9],
			[center,1076,104,0x4d3826]]
		],
		oper: [
			[center, 1280, 720, 428,592, 1071,643, 0],
			[center, 1280, 720, 431,234, 1064,318, 0],
			[center, 1280, 720, 1188,115, 1225,151, 500],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator): boolean {
		let thisConf = thisScript.scheme.config['12'];
		let defaultCount = parseInt(thisConf.count);
		if (thisScript.oper({
			name: '突破界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			thisScript.helperBridge.regionBezierSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [800, 1600], 200);
			if (!thisScript.global.tp_swipe_times) {
				thisScript.global.tp_swipe_times = 0;
			}
			thisScript.global.tp_swipe_times++;
			if (thisScript.global.tp_swipe_times >= defaultCount) {
				thisScript.global.tp_swipe_times = 0;
				if ('停止脚本' === thisConf.afterCountOper) {
					thisScript.doOspPush(thisScript, { text: '脚本已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				} else if ('切换方案' === thisConf.afterCountOper) {
					let oper = thisOperator[0].oper[2];
					thisScript.helperBridge.regionClick([oper], 500 + thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.setCurrentScheme(thisConf.next_scheme);
					thisScript.myToast(`切换方案为[${thisConf.next_scheme}]`);
					thisScript.rerun();
				}
			}
			return true;
		}
		return false;
	}
}