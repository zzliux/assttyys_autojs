import { setCurrentScheme } from '@/common/tool';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 8,
	name: '结界_进攻',
	desc: '出现进攻按钮后点击进攻按钮，若进攻按钮点击不生效可选择退出到上一级（寮突破用）或停止脚本（个人突破用）或切换方案；若在寮突破时进攻为灰色，会自动等待CD或切换方案',
	checked: false,
	config: [{
		desc: '',
		config: [{
			name: 'count',
			desc: '连续执行x次后执行完成',
			type: 'list',
			data: ['2', '3', '4', '5'],
			default: '2',
			value: null,
		}, {
			name: 'afterCountOper',
			desc: '执行完成的操作',
			type: 'list',
			data: ['停止脚本', '关闭界面', '切换方案'],
			default: '停止脚本',
			value: null,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用准备退出',
		}, {
			name: 'type',
			desc: '突破类型',
			type: 'list',
			data: ['个人突破', '寮突破'],
			default: '个人突破',
			value: null,
		}, {
			name: 'cdWaitTime',
			desc: '寮突破CD检测频率(s)',
			type: 'integer',
			default: '30'
		}, {
			name: 'cdSwitchSchemeEnable',
			desc: '寮突破CD后是否切换方案(启用后CD检测将关闭)',
			type: 'switch',
			default: false,
		}, {
			name: 'cdSwitchScheme',
			desc: '寮突破CD切换方案',
			type: 'scheme',
			default: '个人突破'
		}]
	}],
	operator: [{
		oper: [
			[left, 1280, 720, 0, 0, 119, 49, 2000],
			[center, 1280, 720, 1188,115, 1225,151, 500],
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let thisConf = thisScript.scheme.config['8'];
		let count = parseInt(thisConf.count);
		let defaultCount = count;
		let point = null;
		if ('寮突破' === thisConf.type) {
			if (thisScript.findMultiColor('结界_进攻_灰')) {
				if (thisConf.cdSwitchSchemeEnable) {
					let oper = thisOperator[0].oper[1];
					thisScript.helperBridge.regionClick([oper, oper], 500 + thisScript.scheme.commonConfig.afterClickDelayRandom);
					setCurrentScheme(thisConf.cdSwitchScheme);
					toastLog(`切换方案为[${thisConf.cdSwitchScheme}]`);
					thisScript.rerun();
				} else {
					let oper = thisOperator[0].oper[1];
					thisScript.helperBridge.regionClick([oper], 500 + thisScript.scheme.commonConfig.afterClickDelayRandom);
					toastLog(`寮突破CD, ${(thisConf.cdWaitTime || 30)}秒后再次检测`);
					sleep(1000 * (thisConf.cdWaitTime || 30));
					return true;
				}
			}
		}
		while (point = thisScript.findMultiColor('结界_进攻')) {
			let oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
			thisScript.helperBridge.regionClick(oper, 500 + thisScript.scheme.commonConfig.afterClickDelayRandom);
			thisScript.keepScreen(true);
			console.log('结界_进攻:', count);
			if (--count === 0) {
				if ('停止脚本' === thisConf.afterCountOper) {
					let oper = thisOperator[0].oper[1];
					thisScript.helperBridge.regionClick([oper], 500 + thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.stop();
				} else if ('关闭界面' === thisConf.afterCountOper) {
					let oper = thisOperator[0].oper[1];
					thisScript.helperBridge.regionClick([oper, oper], 500 + thisScript.scheme.commonConfig.afterClickDelayRandom);
				} else if ('切换方案' === thisConf.afterCountOper) {
					let oper = thisOperator[0].oper[1];
					thisScript.helperBridge.regionClick([oper, oper], 500 + thisScript.scheme.commonConfig.afterClickDelayRandom);
					setCurrentScheme(thisConf.next_scheme);
					toastLog(`切换方案为[${thisConf.next_scheme}]`);
					thisScript.rerun();
				}
				break;
			}
		}
		if (count < defaultCount) {
			return true;
		}
		return false;
	}
}
