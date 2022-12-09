import { Script } from '@/system/script';
import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func008 implements InterfaceFuncOrigin {
	id = 8;
	name = '结界_进攻';
	desc = '出现进攻按钮后点击进攻按钮，若进攻按钮点击不生效可选择退出到上一级（寮突破用）或停止脚本（个人突破用）或切换方案；若在寮突破时进攻为灰色，会自动等待CD或切换方案';
	config = [{
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
			desc: '寮突破CD检测频率(s)，逗号分隔，表示随机范围的下限与上限',
			type: 'text',
			default: '30,60'
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
	}];
	operator: InterfaceFuncOperatorOrigin[] = [{
		oper: [
			[left, 1280, 720, 0, 0, 119, 49, 2000],
			[center, 1280, 720, 1188, 115, 1225, 151, 500],
			[center, 1280, 720, 313, 349, 1131, 696, -1], // 个人突破找色范围
			[center, 1280, 720, 578, 119, 751, 699, -1], // 寮突破找色范围1
			[center, 1280, 720, 921, 119, 1093, 698, -1], // 寮突破找色范围2
		]
	}, {
		// 个人突破与寮突破的前提判断
		desc: [1280, 720,
			[
				[center, 199, 102, 0x20170f],
				[center, 1206, 132, 0x615a53],
				[center, 729, 50, 0x1f1f22],
				[center, 1192, 81, 0x1b1a1d],
				[center, 84, 167, 0x594f42],
			]
		]
	}, {
		// 逢魔的前提判断
		desc: [1280, 720,
			[
				[left, 44, 50, 0x4c5059],
				[left, 73, 43, 0x162539],
				[center, 751, 39, 0x241709],
				[right, 1182, 648, 0x696969],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]) : boolean {
		if (!thisScript.oper({
			name: '突破界面_暗_判断',
			operator: [{ desc: thisOperator[1].desc }]
		}, 0) && !thisScript.oper({
			name: '逢魔之时_暗_判断',
			operator: [{ desc: thisOperator[2].desc }]
		}, 0)) {
			return false;
		}
		let thisConf = thisScript.scheme.config['8'];
		let count = +thisConf.count;
		let defaultCount = count;
		let point = null;
		let region = [thisOperator[0].oper[2]];
		if ('寮突破' === thisConf.type) {
			region = [thisOperator[0].oper[3], thisOperator[0].oper[4]];
			if (thisScript.findMultiColor('结界_进攻_灰', region, true)) {
				if (thisConf.cdSwitchSchemeEnable) {
					let oper = thisOperator[0].oper[1];
					thisScript.helperBridge.regionClick([oper, oper], 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.setCurrentScheme(thisConf.cdSwitchScheme);
					thisScript.myToast(`切换方案为[${thisConf.cdSwitchScheme}]`);
					thisScript.rerun();
				} else {
					let oper = thisOperator[0].oper[1];
					thisScript.helperBridge.regionClick([oper], 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
					let cdWaiteTimePair = String(thisConf.cdWaitTime).split(',');
					if (cdWaiteTimePair.length === 1) {
						thisScript.myToast(`寮突破CD, ${(parseInt(cdWaiteTimePair[0]))}秒后再次检测`);
						sleep(1000 * (parseInt(cdWaiteTimePair[0])));
					} else {
						let cdWaitTime = random(parseInt(cdWaiteTimePair[0]), parseInt(cdWaiteTimePair[1]));
						thisScript.myToast(`寮突破CD, ${(cdWaitTime)}秒后再次检测`);
						sleep(1000 * (cdWaitTime));
					}
					return true;
				}
			}
		}
		while (point = thisScript.findMultiColor('结界_进攻', region, true)) {
			let oper = [[point.x, point.y, point.x + +thisOperator[0].oper[0][2], point.y + +thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
			thisScript.helperBridge.regionClick(oper, 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
			thisScript.keepScreen(true);
			console.log('结界_进攻:', count);
			if (--count === 0) {
				if ('停止脚本' === thisConf.afterCountOper) {
					let oper = thisOperator[0].oper[1];
					thisScript.helperBridge.regionClick([oper], 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.doOspPush(thisScript, { text: '脚本已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				} else if ('关闭界面' === thisConf.afterCountOper) {
					let oper = thisOperator[0].oper[1];
					thisScript.helperBridge.regionClick([oper, oper], 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
				} else if ('切换方案' === thisConf.afterCountOper) {
					let oper = thisOperator[0].oper[1];
					thisScript.helperBridge.regionClick([oper, oper], 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.setCurrentScheme(thisConf.next_scheme);
					thisScript.myToast(`切换方案为[${thisConf.next_scheme}]`);
					thisScript.rerun();
				}
				break;
			}
		}
		if (count < defaultCount) {
			return true;
		}
		return false;
	};
}
