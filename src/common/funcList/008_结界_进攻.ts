import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func008 implements IFuncOrigin {
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
			data: ['停止脚本', '关闭界面', '切换方案', '九退四_切换方案', '指定方案'],
			default: '停止脚本',
			value: null,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用准备退出',
		}, {
			name: 'designated_scheme',
			desc: '所指定的方案(在历史运行方案中匹配所输入的字并切换过去,可用","隔断多个关键字)',
			type: 'text',
			default: ',',
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
	operator: IFuncOperatorOrigin[] = [{
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
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (!thisScript.oper({
			name: '突破界面_暗_判断',
			operator: [{ desc: thisOperator[1].desc }]
		}, 0) && !thisScript.oper({
			name: '逢魔之时_暗_判断',
			operator: [{ desc: thisOperator[2].desc }]
		}, 0)) {
			return false;
		}
		const thisConf = thisScript.scheme.config['8'];
		let count = +thisConf.count;
		const defaultCount = count;
		let point = null;
		let region = [thisOperator[0].oper[2]];
		if ('寮突破' === thisConf.type) {
			region = [thisOperator[0].oper[3], thisOperator[0].oper[4]];
			if (thisScript.findMultiColor('结界_进攻_灰', region, true)) {
				if (thisConf.cdSwitchSchemeEnable) {
					const oper = thisOperator[0].oper[1];
					thisScript.regionClick([oper, oper], 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.rerun(thisConf.cdSwitchScheme);
				} else {
					const oper = thisOperator[0].oper[1];
					thisScript.regionClick([oper], 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
					const cdWaiteTimePair = String(thisConf.cdWaitTime).split(',');
					if (cdWaiteTimePair.length === 1) {
						thisScript.myToast(`寮突破CD, ${(parseInt(cdWaiteTimePair[0]))}秒后再次检测`);
						sleep(1000 * (parseInt(cdWaiteTimePair[0])));
					} else {
						const cdWaitTime = random(parseInt(cdWaiteTimePair[0]), parseInt(cdWaiteTimePair[1]));
						thisScript.myToast(`寮突破CD, ${(cdWaitTime)}秒后再次检测`);
						sleep(1000 * (cdWaitTime));
					}
					return true;
				}
			}
		}
		// eslint-disable-next-line no-cond-assign
		while (point = thisScript.findMultiColor('结界_进攻', region, true)) {
			const oper = [[point.x, point.y, point.x + +thisOperator[0].oper[0][2], point.y + +thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
			thisScript.regionClick(oper, 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
			thisScript.keepScreen(true);
			console.log('结界_进攻:', count);
			if (--count === 0) {
				if ('停止脚本' === thisConf.afterCountOper) {
					const oper = thisOperator[0].oper[1];
					thisScript.regionClick([oper], 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				} else if ('关闭界面' === thisConf.afterCountOper) {
					const oper = thisOperator[0].oper[1];
					thisScript.regionClick([oper, oper], 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
				} else if ('切换方案' === thisConf.afterCountOper) {
					const oper = thisOperator[0].oper[1];
					thisScript.regionClick([oper, oper], 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.rerun(thisConf.next_scheme);
				} else if ('九退四_切换方案' === thisConf.afterCountOper) {
					// 此选项需在"个突_9退4_退出"里的008选择,因为"个突_9退4"视为一个整体,只需在"个突_9退4_进攻"里选择需要切换的方案即可,
					// 无需在"个突_9退4_退出"再次设置需要切换的方案,否者会在"退出"时跳出循环或卡主
					thisScript.rerun(thisConf.next_scheme);
					return true;
				} else if ('指定方案' === thisConf.afterCountOper) {
					const oper = thisOperator[0].oper[1];
					thisScript.regionClick([oper, oper], 500 + +thisScript.scheme.commonConfig.afterClickDelayRandom);
					const designated_scheme = String(thisConf.designated_scheme).split(',').map(s => s.trim()).filter(Boolean);
					if (designated_scheme.length < 1) {
						thisScript.myToast('格式定义错误，请检查');
						thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
						thisScript.stop();
					} else {
						const filtered = thisScript.schemeHistory.filter(item => designated_scheme.some(word => item.schemeName.includes(word)));
						if (filtered.length < 1) {
							thisScript.myToast('未找到指定方案，已停止');
							thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
							thisScript.stop();
						} else {
							log(filtered)
							thisScript.rerun(filtered[filtered.length - 1].schemeName);
						}
					}
					return true;
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
