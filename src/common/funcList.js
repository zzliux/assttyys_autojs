// import helperBridge from '@/system/helperBridge';
import { search, questionSearch, setCurrentScheme } from '@/common/tool';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

const FuncList = [{
	id: 0,
	name: '结束判断',
	desc: '配置停止或切换方案的条件',
	checked: false,
	operator: [],
	config: [{
		desc: '运行时间判断',
		config: [{
			name: 'jspd_enabled_zjsj',
			desc: '是否启用',
			type: 'switch',
			default: false,
			value: null,
		}, {
			name: 'jspd_times_zjsj',
			desc: '执行时间(min)',
			type: 'integer',
			default: 30,
		}, {
			name: 'jspd_txpl_zjsj',
			desc: '提醒频率(s)',
			type: 'integer',
			default: 60
		}]
	}, {
		desc: '准备功能次数判断',
		config: [{
			name: 'jspd_enabled_1',
			desc: '是否启用',
			type: 'switch',
			default: false,
			value: null,
		}, {
			name: 'jspd_times_1',
			desc: '执行次数',
			type: 'integer',
			default: 20,
		}]
	}, {
		desc: '退出结算次数判断',
		config: [{
			name: 'jspd_enabled_2',
			desc: '是否启用',
			type: 'switch',
			default: false,
			value: null,
		}, {
			name: 'jspd_times_2',
			desc: '执行次数',
			type: 'integer',
			default: 20,
		}]
	}, {
		desc: '结束当前方案后切换方案',
		config: [{
			name: 'scheme_switch_enabled',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用准备退出',
		}]
	}],
	operatorFunc(thisScript, _thisOperator) {
		let thisconf = thisScript.scheme.config['0'];
		if (thisconf.jspd_enabled_zjsj) { // 执行时间
			let currentNotifyDate = thisScript.global.currentNotifyDate;
			if (!currentNotifyDate) {
				toastLog(`脚本将于${cvtTime(thisconf.jspd_times_zjsj * 60)}后停止`);
				currentNotifyDate = new  Date();
				thisScript.global.currentNotifyDate = currentNotifyDate;
			}
			let now = new Date();
			if (now.getTime() - currentNotifyDate.getTime() > thisconf.jspd_txpl_zjsj * 1000) {
				let leftSec = (thisconf.jspd_times_zjsj * 60000 + thisScript.runDate.getTime() - now.getTime()) / 1000;
				thisScript.global.currentNotifyDate = new Date();
				toastLog(`脚本将于${cvtTime(leftSec)}后停止`);
			}
			if (thisScript.runDate.getTime() + thisconf.jspd_times_zjsj * 60000 < now.getTime()) {
				toastLog('脚本已停止');
				stopOrReRun();
			}
		}
		if (thisconf.jspd_enabled_1) {
			if (thisScript.runTimes['1'] >= thisconf.jspd_times_1) {
				toastLog(`准备功能执行${thisScript.runTimes['1']}次后停止脚本`);
				stopOrReRun();
			}
		}
		if (thisconf.jspd_enabled_2) {
			if (thisScript.runTimes['2'] >= thisconf.jspd_times_2) {
				toastLog(`退出结算功能执行${thisScript.runTimes['2']}次后停止脚本`);
				stopOrReRun();
			}
		}

		function stopOrReRun() {
			if (thisconf.scheme_switch_enabled) {
				setCurrentScheme(thisconf.next_scheme);
				toastLog(`切换方案为[${thisconf.next_scheme}]`);
				events.broadcast.emit('SCRIPT_RERUN', '');
			} else {
				thisScript.stop();
			}
		}

		function cvtTime(s) {
			if (s > 3600) {
				return ((s / 3600).toFixed(2)) + '小时';
			} else if (s > 60) {
				return ((s / 60).toFixed(2)) + '分钟';
			} else {
				return ((s).toFixed(2)) + '秒';
			}
		}
	}
}, {
	id: 1,
	name: '准备',
	desc: '在准备界面执行准备或退出操作，可配置是否启用绿标',
	checked: false,
	config: [{
		desc: '退出',
		config: [{
			name: 'exitBeforeReady',
			desc: '准备前是否退出,常用于个人突破的降级',
			type: 'switch',
			default: false,
		}],
	}, {
		desc: '绿标',
		config: [{
			name: 'greenFlag',
			desc: '是否启用绿标（需要将绿标的式神改名为“A”，若无法标记可尝试调整式神站位）',
			type: 'switch',
			default: false,
		}]
	}],
	operator: [{
		desc: [1280, 720,
			[[left, 34, 41, 0xd7c5a2],
			[left, 109, 37, 0xd7c5a2],
			[left, 183, 39, 0xd7c5a2],
			[right, 1114, 660, 0xefd6a5],
			[right, 1220, 659, 0xedcc99],
			[right, 1218, 529, 0xe0c8a9]]
		],
		// 0-方向, 1-左上角x, 2-左上角y, 3-右下角x, 4-右下角y, 5-点击后延迟
		oper: [
			[right, 1280, 720, 1119, 504, 1227, 592, 2000], // 准备
			[left, 1280, 720, 22,19, 52,47, 500], // 左上角返回
			[left, 1280, 720, 683,401, 795,442, 500], // 确认
		]
	}, {
		// 开始战斗后的场景
		desc: [1280, 720,
			[[left,34,22,0xd7c5a2],
			[left,62,648,0x796556],
			[right,1277,508,0x422e1c],
			[right,1260,567,0x4d4471],
			[left,4,715,0x334433]]
		],
		oper: [
			[left, 1280, 720, 0,0, 0, 160, -1], // A的下方位置
			[left, 1280, 720, 0,0, 70, 90, -1], // 下方位置的矩形
			[left, 1280, 720, 0,0, 1279, 719, -1] // 屏幕大小
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let thisconf = thisScript.scheme.config['1'];
		if (thisconf.exitBeforeReady) {
			return thisScript.oper({
				id: 1,
				name: '准备界面_退出',
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[1], thisOperator[0].oper[2]]
				}]
			})
		} else {
			if (thisScript.oper({
				id: 1,
				name: '准备',
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[0]]
				}]
			})) {
				if (thisconf.greenFlag) {
					// 开启绿标
					if (thisScript.compareColorLoop(thisOperator[1].desc, 16000)) {
						let p = thisScript.findMultiColorLoop('绿标_标识_A', 5000);
						if (p) {
							const lx = p.x - thisOperator[1].oper[1][2] / 2;
							const ly = p.y + thisOperator[1].oper[0][3] - thisOperator[1].oper[1][3] / 2;
							const rx = p.x + thisOperator[1].oper[1][2] / 2;
							const ry = p.y + thisOperator[1].oper[0][3] + thisOperator[1].oper[1][3] / 2;
							const toClick = [
								lx > 0 ? lx : 0,
								ly > 0 ? ly : 0,
								rx < thisOperator[1].oper[2][2] ? rx : thisOperator[1].oper[2][2],
								ry < thisOperator[1].oper[2][3] ? ry : thisOperator[1].oper[2][3],
								4000
							];
							thisScript.helperBridge.regionClick([toClick], thisScript.scheme.commonConfig.afterClickDelayRandom);
							return true;
						} else {
							toastLog('未识别式神别名“A”');
							return true;
						}
					} else {
						toastLog('准备15秒后未检测到战斗场景');
						return true;
					}
				} else {
					return true;
				}
			}
		}
	}
}, {
	id: 2,
	name: '退出结算',
	checked: false,
	operator: [{ // 已打开的达摩, 优先级最高
		desc: [1280,720,
			[[center,482,611,0x3c82ca],
			[center,487,620,0x3b84c6],
			[center,588,619,0x300204],
			[center,712,621,0x340204]]
		],
		oper: [
			// [left, 1280, 720, 69, 171, 170, 452, 400],
			[left, 1280, 720, 69, 171, 170, 452, 1000]
		],
	}, { // 邀请好友确认
		desc: [1280,720,
			[[center,460,258,0xcbb59e],
			[center,799,268,0xcbb59e],
			[center,467,429,0xdf6851],
			[center,700,431,0xf4b25f],
			[center,641,429,0xcbb59e]]
		],
		oper: [
			[center, 1280, 720, 550,347, 730,376, 300],
			[center, 1280, 720, 680,411, 838,452, 1000],
		]
	}, { // 左上角的统计图标
		desc: [1280, 720,
			[[left, 71, 65, 0xac8a5a],
			[left, 80, 59, 0x3c2a21],
			[left, 88, 67, 0xa8835a],
			[left, 77, 82, 0x3a2a22]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 400]
		],
		notForCnt: true,
	}, { // 左上角的贪吃鬼图标
		desc: [1280, 720,
			[[left, 50, 66, 0x693430],
			[left, 62, 65, 0xf5f5f5],
			[left, 112, 58, 0x312012],
			[left, 74, 90, 0x927150]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 400]
		],
		notForCnt: true,
	}, { // 单人-胜利太鼓
		desc: [1280, 720,
			[[center, 481, 159, 0x841b12],
			[center, 458, 207, 0xa11c10],
			[center, 512, 205, 0xa11b10],
			[center, 515, 168, 0xc7b39e],
			[center, 447, 169, 0xc6b5a0],
			[center, 484, 222, 0xd3c4ae],
			[center, 510, 249, 0xd4c4ab]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 400]
		],
		notForCnt: true,
	}, { // 组队-胜利太鼓
		desc: [1280,720,
			[[center,482,104,0x851b11],
			[center,456,148,0x9e1c10],
			[center,503,147,0x9d1c10],
			[center,480,132,0xcfc0aa],
			[center,514,109,0xc7b5a1],
			[center,429,171,0xd6c9b1]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 400]
		],
		notForCnt: true,
	}, { // 未打开的达摩
		desc: [1280, 720,
			[[center, 667, 377, 0xba4618],
			[center, 678, 316, 0x080808],
			[center, 589, 314, 0x060606],
			[center, 636, 324, 0xe7e1cf],
			[center, 588, 486, 0x330202]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 1000]
		],
		notForCnt: true,
	}, { // 单人-失败太鼓
		desc: [1280, 720,
			[[center, 465, 151, 0x514a5c],
			[center, 447, 189, 0x60566b],
			[center, 496, 192, 0x5b5165],
			[center, 466, 175, 0xb7a78e],
			[center, 502, 154, 0xae9982],
			[center, 418, 210, 0xb6a388]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 2000]
		]
	}, { // 组队-失败太鼓
		desc: [1280,720,
			[[center,466,93,0x514c5d],
			[center,448,135,0x5d5469],
			[center,497,140,0x5a5365],
			[center,470,123,0xb8a88f],
			[center,415,151,0xb8a589]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 2000]
		]
	}, {
		// 御魂溢出点确认
		desc: [1280,720,
			[[center,448,221,0x684736],
			[center,829,222,0x654434],
			[center,705,248,0xcbb59e],
			[center,504,408,0xcbb59e],
			[center,762,415,0xcbb59e],
			[center,771,352,0xcbb59e],
			[center,519,340,0xcbb59e],
			[center,604,411,0xf4b25f],
			[center,684,438,0xf4b25f],
			[center,698,446,0x923d2c],
			[center,596,493,0x6d4c3b]]
		],
		oper: [
			[center, 1280, 720, 585,398, 694,446, 1000]
		],
		notForCnt: true,
	}]
}, {
	id: 3,
	name: '悬赏协作',
	checked: false,
	operator: [{
		desc: [1280, 720,
			[[center,519,139,0xb29375],
			[center,727,171,0xb29375],
			[center,855,518,0xdc6958],
			[center,849,422,0x53ae5b]]
		],
		oper: [
			[center, 1280, 720, 768,109, 796,138, 1000], // 关闭
			[center, 1280, 720, 833,397, 874,438, 1000], // 接受
			[center, 1280, 720, 835,500, 875,538, 1000], // 拒绝
		]
	}],
	/**
	 * 
	 * @param {*} thisScript script.js 这样可以拿到里面的对象用来做点击等操作
	 * @param {*} thisOperator 转换过适合当前分辨率的operator
	 */
	operatorFunc: (thisScript, thisOperator) => {
		let thisconf = thisScript.scheme.config['3']; // 获取配置
		return thisScript.oper({
			name: '悬赏协作_' + thisconf.type,
			operator: [{
				desc: thisOperator[0].desc,
				oper: [thisOperator[0].oper[{
					'关闭': 0,
					'接受': 1,
					'拒绝': 2
				}[thisconf.type]]]
			}]
		});
	},
	config: [{
		desc: '',
		config: [{
			name: 'type',
			desc: '操作',
			type: 'list',
			data: ['关闭', '接受', '拒绝'],
			default: '关闭',
			value: null,
		}]
	}]
}, {
	id: 4,
	name: '接受邀请',
	desc: '左侧弹出邀请提示时，自动接受邀请',
	checked: false,
	operator: [{
		// 自动接受邀请
		desc: [1280,720,
			[[left,20,254,0x7e6750],
			[left,45,248,0xdf6e5b],
			[left,138,260,0x57b260],
			[left,234,251,0xefc791],
			[left,247,269,0x59b462],
			[left,255,276,0x86705d],
			[left,192,276,0xeadece]]
		],
		oper: [
			[left, 1280, 720, 219,237, 254,275, 600]
		]
	}, { // 接受一次邀请
		desc: [1280,720,
			[[left,128,255,0x58b361],
			[left,45,257,0xdd6a59],
			[left,79,222,0xe3d3c2],
			[left,14,299,0xf1be36],
			[left,176,291,0xefe5d6]]
		],
		oper: [
			[left, 1280, 720, 120,239, 159,273, 600]
		]
	}]
}, {
	id: 5,
	name: '组队挑战',
	desc: '在组队界面时，点击挑战按钮，可配置三人开始或有人就开',
	checked: false,
	config: [{
		desc: '',
		config: [{
			name: 'type',
			desc: '组队挑战',
			type: 'list',
			data: ['有人就开', '三人'],
			default: '有人就开',
			value: null,
		}]
	}],
	operator: [{
		desc: [1280,720,
			[[left,43,37,0xf5e6a8],
			// [right,1238,27,0xd7c5a2],
			[right,1177,667,0xd8b871],
			[right,1187,679,0xcda35d],
			[right,1188,609,0xf1e096],
			[left,60,39,0x84582f],
			[left,19,47,0x281717]]
		],
	}, {
		desc: [1280,720,
			[[center, 643,254,0xffffff]]
		]
	}, {
		desc: [1280,720,
			[[center, 1088,253,0xffffff]]
		]
	}, {
		oper: [
			[right, 1280, 720, 1192,613, 1251,677, 2000]
		]
	}, {
		// 永生之海
		desc: [1280, 720,
			[[right,1199,608,0xe6dac6],
			[left,29,39,0x1f160e],
			[left,55,45,0xd7c5a2],
			[left,126,43,0xd7c5a2],
			[center,654,306,0xeae1e2],
			[center,633,327,0xfdfbf9],
			[center,636,309,0x413f53],
			[center,655,323,0x343244],
			[right,1170,587,0x604030]]
		],
		oper: [
			[right, 1280, 720, 1168,598, 1250,678, 2000]
		]
	}], // 0-有人就开，1-第一个+号上的点，2-第二个+号上的点，如果1或者2任意一个匹配上了，说明人没满
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '组队挑战_永生之海_判断',
			operator: [thisOperator[4]]
		})) {
			return true;
		}
		if (thisScript.oper({
			name: '组队挑战_判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			let thisconf = thisScript.scheme.config['5']; // 获取配置
			if (thisconf.type === '有人就开') {
				thisScript.helperBridge.regionClick(thisOperator[3].oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			} else if (thisconf.type === '三人') {
				if (!thisScript.oper({
					name: '组队挑战_乘客1无人',
					operator: [thisOperator[1]]
				}) && !thisScript.oper({
					name: '组队挑战_乘客2无人',
					operator: [thisOperator[2]]
				})) {
					thisScript.helperBridge.regionClick(thisOperator[3].oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
					return true;
				}
			}
		}
		return false;
	}
}, {
	id: 6,
	name: '御魂/御灵挑战',
	desc: '在御魂或者御灵的挑战界面时，点击挑战按钮',
	checked: false,
	operator: [{ // 三类御魂
		desc: [1280,720,
			[[left,44,43,0xc2cbe3],
			[right,1124,47,0xd8b188],
			[right,1237,47,0xd3af84],
			[right,1161,608,0xded2bb],
			[right,1207,671,0x372015]]
		],
		oper: [
			[right, 1280, 720, 1116,602, 1197,683, 2000]
		]
	}, { // 御灵
		desc: [1280,720,
			[[left,37,37,0xc3cce1],
			[right,1121,47,0xd7b389],
			[right,1230,46,0xd3ae83],
			[right,1106,628,0xe5d9c3],
			[right,1188,679,0x371f16],
			[right,1091,663,0x472c1f]]
		],
		oper: [
			[right, 1280, 720, 1104,595, 1196,681, 2000]
		]
	}]
}, {
	id: 7,
	name: '结界_三次刷新',
	desc: '启用后会在打了三个结界后进行刷新，若CD中则等待CD后刷新',
	checked: false,
	operator: [{  // CD
		desc: [1280,720,
			[[center,549,93,0x5a4130],
			[center,720,93,0x583716],
			[center,224,104,0x4a3525],
			[center,997,127,0x958c83],
			[center,400,610,0xfd9328],
			[center,995,595, 0xAEA69E],
			[center,646,97,0xf8f3e0]]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 30000]
		]
	}, {
		desc: [1280,720, // 刷新
			[[center,549,93,0x5a4130],
			[center,720,93,0x583716],
			[center,224,104,0x4a3525],
			[center,997,127,0x958c83],
			[center,400,610,0xfd9328],
			[center,995,595,0xf4b25f],
			[center,646,97,0xf8f3e0]]
		],
		oper: [
			[center, 1280, 720, 970,573, 1130,621, 1500],
			[center, 1280, 720, 674,407, 839,457, 2000]
		]
	}, {
		desc: [1280,720, // 有呱太活动的刷新
			[[center,342,610,0xffaf2d],
			[center,396,610,0x383c5d],
			[center,1008,598,0xf4b25f],
			[center,704,596,0x83b542],
			[center,1205,112,0x632d34],
			[center,721,94,0x583716],
			[center,370,100,0x4e3926],
			[center,122,450,0xdedacf]]
		],
		oper: [
			[center, 1280, 720, 970,573, 1130,621, 1500],
			[center, 1280, 720, 674,407, 839,457, 2000]
		]
	}]
}, {
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
					events.broadcast.emit('SCRIPT_RERUN', '');
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
					events.broadcast.emit('SCRIPT_RERUN', '');
				}
				break;
			}
		}
		if (count < defaultCount) {
			return true;
		}
		return false;
	}
}, {
	id: 9,
	name: '结界_勋章点击',
	desc: '在突破界面点击勋章，可配置点击勋章的优先级',
	checked: false,
	config: [{
		desc: '',
		config: [{
			name: 'priority',
			desc: '挑战顺序',
			type: 'list',
			data: ['4->5->3->2->1->0', '5->4->3->2->1->0', '0->1->2->3->4->5'],
			default: '4->5->3->2->1->0',
			value: null,
		}]
	}],
	operator: [{
		desc: [1280,720,
			[[center,171,104,0x4a3624],
			[center,564,89,0x5e4735],
			[center,718,92,0x583716],
			[center,728,86,0xdebc56],
			[center,1210,130,0xebdac9],
			[center,1076,104,0x4d3826]]
		],
		oper: [
			[left, 1280, 720, 30, 10, 160, 80, 500]
		]
	}, {
		desc: [1280,720,
			[[center,570,290,0xded8ca],
			[center,786,293,0xdfd7cb],
			[center,786,396,0x3d5534],
			[center,652,349,0xdfd9cb],
			[center,772,327,0xc1bfb3]]
		],
		oper: [
			[center, 1280, 720, 492,289, 783,385, 500]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '突破界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			// 呱
			if (thisScript.oper({
				name: '个人突破_呱',
				operator: [{
					desc: thisOperator[1].desc,
					oper: thisOperator[1].oper
				}]
			})) {
				return true;
			}
			let thisconf = thisScript.scheme.config['9']; // 获取配置
			let priority = thisconf.priority.split('->');
			let multiColorKey = [];
			for (let item of priority) {
				multiColorKey.push(`结界_${item}勋章`);
			}
			for (let key of multiColorKey) {
				let point = thisScript.findMultiColor(key);
				if (point) {
					let oper = [[
						point.x + thisOperator[0].oper[0][0],
						point.y + thisOperator[0].oper[0][1],
						point.x + thisOperator[0].oper[0][2],
						point.y + thisOperator[0].oper[0][3],
						// point.x,
						// point.y,
						// point.x,
						// point.y,
						thisOperator[0].oper[0][4]]];
					thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
					console.log(key);
					return true;
				}
			}
			return false;
		}
		return false;
	}
}, {
	id: 10,
	name: '地图进入突破界面',
	desc: '在地图界面时点击突破按钮进入突破界面，可配置进入个人突破或寮突破界面',
	checked: false,
	config: [{
		desc: '',
		config: [{
			name: 'type',
			desc: '突破类型',
			type: 'list',
			data: ['个人突破', '寮突破'],
			default: '个人突破',
			value: null,
		}]
	}],
	operator: [{
		desc: [1280,720,
			[[left,44,59,0xeff5fb],
			[right,1126,35,0xd7b389],
			[right,1225,33,0xd3af84],
			[right,1169,147,0xd4cebf],
			[left,34,693,0x643f2e],
			[left,155,695,0x64402f],
			[left,254,690,0x653d2c]]
		],
		oper: [
			[left, 1280, 720, 280,631, 334,695, 1500],
			[center, 1280, 720, 1210,366, 1254,453, 1500]
		]
	}, {
		desc: [1280,720,
			[[center,276,129,0x493624],
			[center,867,131,0x493624],
			[center,1043,147,0xeecccc],
			[center,904,535,0xf4b25f],
			[right,1121,35,0xd7b389],
			[right,1222,32,0xd3af85] // #D9B38A
		]
		],
		oper: [
			[center, 1280, 720, 1036,133, 1065,158, 500]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let thisconf = thisScript.scheme.config['10']; // 获取配置
		if ('个人突破' === thisconf.type) {
			return thisScript.oper({
				name: '地图进入个人突破',
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[0]]
				}, thisOperator[1]]
			});
		} else if ('寮突破' === thisconf.type) {
			return thisScript.oper({
				name: '地图进入寮突破',
				operator: thisOperator
			});
		}
		return false;
	}
}, {
	id: 11,
	name: '结界_刷新按钮',
	desc: '个人突破时点击刷新按钮，应排在[9勋章点击]后',
	checked: false,
	operator: [{
		desc: [1280,720, // 刷新
			[[center,549,93,0x5a4130],
			[center,720,93,0x583716],
			[center,224,104,0x4a3525],
			[center,997,127,0x958c83],
			// [center,400,610,0xffac2c],
			[center,995,595,0xf4b25f],
			[center,646,97,0xf8f3e0]]
		],
		oper: [
			[center, 1280, 720, 970,573, 1130,621, 1500],
			[center, 1280, 720, 674,407, 839,457, 2000]
		]
	}]
}, {
	id: 12,
	name: '寮突破_翻页',
	desc: '寮突破时执行翻页操作，应排在[9勋章点击]后',
	checked: false,
	config: [{
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
	}],
	operator: [{
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
			[center, 1280, 720, 431,149, 1064,239, 0],
			[center, 1280, 720, 1188,115, 1225,151, 500],
		]
	}],
	operatorFunc(thisScript, thisOperator) {
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
					thisScript.stop();
				} else if ('切换方案' === thisConf.afterCountOper) {
					let oper = thisOperator[0].oper[2];
					thisScript.helperBridge.regionClick([oper], 500 + thisScript.scheme.commonConfig.afterClickDelayRandom);
					setCurrentScheme(thisConf.next_scheme);
					toastLog(`切换方案为[${thisConf.next_scheme}]`);
					events.broadcast.emit('SCRIPT_RERUN', '');
				}
			}
			return true;
		}
		return false;
	}
}, {
	id: 13,
	name: '探索_地图进入最后一章',
	desc: '在地图界面时，点击最后一章进行挑战',
	checked: false,
	operator: [{
		desc: [1280,720,
			[[left,24,689,0x633e2d],
			[left,42,57,0xeff5fb],
			[right,1120,37,0xd7b288],
			[right,1228,47,0xcfa67c],
			[right,1161,157,0xd8d0bf]]
		],
		oper: [
			[right, 1280, 720, 1056,557, 1246,643,1000],
			[center, 1280, 720, 446,201, 492,255, 200],
			[center, 1280, 720, 889,517, 1002,559, 1000]
		],
		retest: 1000
	}, {
		desc: [1280,720,
			[[center,276,129,0x493624],
			[center,867,131,0x493624],
			[center,1043,147,0xeecccc],
			[center,904,535,0xf4b25f],
			[right,1121,35,0xd7b389],
			[right,1222,32,0xd3af85]]
		],
		oper: [
			[center, 1280, 720, 1036,133, 1065,158, 500]
		]
	}, {
		oper: [
			[left, 1280, 720, 0, 0, 77, 45, 1000]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '探索_地图判断',
			operator: [{ desc: thisOperator[0].desc, retest: 500 }]
		})) {
			let point = thisScript.findMultiColor('探索_宝箱');
			if (point) {
				let oper = [[point.x, point.y, point.x + thisOperator[2].oper[0][2], point.y + thisOperator[2].oper[0][3], thisOperator[2].oper[0][4]]];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			} else {
				return thisScript.oper({
					name: '探索_地图进入最后一章_关闭章节窗口',
					operator: [thisOperator[0]]
				});
			}
		} else if (thisScript.oper({
			name: '探索_地图进入最后一章_关闭章节窗口',
			operator: [thisOperator[1]]
		})) {
			return true;
		}
		return false;
	}
}, {
	id: 14,
	name: '探索_点击挑战图标',
	desc: '在探索界面时，选择小怪或boss进攻，优先打boss，可配置无差别挑战或只打经验怪',
	config: [{
		desc: '',
		config: [{
			name: 'type',
			desc: '挑战类型',
			type: 'list',
			data: ['无差别', '打经验'],
			default: '打经验',
			value: null,
		}, {
			name: 'swipeTime',
			desc: '划屏次数',
			type: 'list',
			data: ['2', '3', '4', '5', '6'],
			default: '3',
			value: null,
		}]
	}],
	operator: [{
		desc: [1280,720,
			[[left,38,65,0xf1f5fb],
			[left,36,570,0x983254],
			[left,29,672,0x615a77],
			[right,1124,36,0xd7b388],
			[right,1225,49,0xcba375]]
		],
		oper: [
			[left, 1280, 720, 0, 0, 42, 51, 2000],
			[right, 1280, 720, 1121,117, 1224,209, 0],
			[left, 1280, 720, 46,215, 162,525, 0],
			[left, 1280, 720, 30,47, 71,85, 500],
			[center, 1280, 720, 702,388, 846,421, 500],
			[left, 1280, 720, 0, 0, 16, 16, 0],
			[right, 1280, 720, 0, 0, 1275, 715, 0]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let thisconf = thisScript.scheme.config['14'];
		while (thisScript.oper({
			name: '探索界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			if (thisScript.global.tsAttackSwhipeNum === undefined) {
				thisScript.global.tsAttackSwhipeNum = parseInt(thisconf.swipeTime);
				// sleep(3000); // 从地图进来，先休息一下再进行判断
			}
			let point = null;
			// TODO 挑战经验怪
			if ('打经验' === thisconf.type) {
				let trycnt = 5;
				do {
					point = thisScript.findMultiColor('探索_挑战BOSS');
					if (point) {
						let oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
						thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
						thisScript.global.tsAttackSwhipeNum = 1;
						return true;
					}
					let flagPoint = thisScript.findMultiColor('探索_经验标识');
					if (null != flagPoint) {
						let step = thisOperator[0].oper[5][2];
						// 从内向外多点找色，可点击的挑战图标，可能会处理为不停的进行多点找色，找不到的时候放大区域
						let l = step // 搜索区域宽高,5倍 "探索_经验怪标记" 的宽高，当这个区域找不到时，l以倍数增长，直到找到为止或者达到一定次数, 这样处理的话会找重复的地方
						for (let tryTimes = 1; tryTimes <= 15; tryTimes++, l += step) { // 尝试 12 次, 大概算了一下，12次内基本可以找到，找不到的话就滑屏
							let region = [flagPoint.x -  l / 2, flagPoint.y - l - 40, flagPoint.x + l / 2, flagPoint.y - 40];
							if (region[0] < 0) region[0] = 0;
							if (region[1] < 0) region[1] = 0;
							if (region[2] > thisOperator[0].oper[6][2]) region[2] = thisOperator[0].oper[6][2];
							if (region[3] > thisOperator[0].oper[6][3]) region[3] = thisOperator[0].oper[6][3];
							point = thisScript.findMultiColor('探索_挑战', region);
							if (point) {
								break;
							}
						}
					} else {
						sleep(400);
						thisScript.keepScreen(true);
					}
				} while (!point && --trycnt > 0);
			} else {
				point = thisScript.findMultiColor('探索_挑战BOSS');
				if (point) {
					let oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
					thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.global.tsAttackSwhipeNum = 1;
					return true;
				}
				point = thisScript.findMultiColor('探索_挑战');
			}
			if (point) {
				let oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			} else {
				if (--thisScript.global.tsAttackSwhipeNum <= 0) {
					thisScript.helperBridge.regionClick([thisOperator[0].oper[3], thisOperator[0].oper[4]], thisScript.scheme.commonConfig.afterClickDelayRandom);
					thisScript.global.tsAttackSwhipeNum = undefined;
					return true;
				}
				if (thisScript.oper({
					name: '探索界面_判断',
					operator: [{ desc: thisOperator[0].desc }]
				})) {
					// toastLog(`剩余滑屏次数：${thisScript.global.tsAttackSwhipeNum}`);
					thisScript.helperBridge.regionBezierSwipe(thisOperator[0].oper[1], thisOperator[0].oper[2], [800, 1200], 200);
					thisScript.keepScreen(true);
				} else {
					return false;
				}
			}
		}
		return false;
	}
}, {
	id: 15,
	name: '探索_换狗粮',
	desc: '准备界面时，队长位置在左(换式神界面时队长位置在右)，若在非队长位置出现满级式神，则上素材的第一个和第二个，因此使用时需要将要练的素材添加喜欢，并取消折叠；N卡则是找到1级的N卡后上N卡',
	config: [{
		desc: '',
		config: [{
			name: 'type',
			desc: '类型',
			type: 'list',
			data: ['队长', '打手'],
			default: '打手',
		}, {
			name: 'dog_food_type',
			desc: '狗粮类型',
			type: 'list',
			data: ['素材', 'N卡'],
			default: '素材'
		}, {
			name: 'handle_position',
			desc: '换N卡时第一次滚动条拖动比例',
			type: 'list',
			data: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'],
			default: '20%'
		}]
	}],
	operator: [{
		desc: [1280, 720,
			[[left, 34, 41, 0xd7c5a2],
			[left, 109, 37, 0xd7c5a2],
			[left, 183, 39, 0xd7c5a2],
			[right, 1114, 660, 0xefd6a5],
			[right, 1220, 659, 0xedcc99],
			[right, 1218, 529, 0xe0c8a9],
			[left,70,691,0xfff9f1],
			[left,75,667,0xdc6d61]]
		],
		oper: [
			[center, 1280, 720, 215,475, 721,642, 100],
			[center, 1280, 720, 215,475, 721,642, 1500],
			[left, 1280, 720, 44,633, 97,682, 400],
			[left, 1280, 720, 44,295, 92,345, 400], // 3-素材
			[left, 1280, 720, 148,311, 195,361, 400], // 4-N
			[center, 1280, 720, 205,551, 246,608, 0], // 5-第一个位置
			[center, 1280, 720, 336,555, 371,611, 0], // 6-第二个位置
			[center, 1280, 720, 184,339, 234,403, 0], // 7-打手-待换的第一个位置
			[center, 1280, 720, 616,334, 669,389, 0], // 8-打手-待换的第二个位置
			[center, 1280, 720, 312,298, 358,362, 0], // 9-队长-待换的第一个位置
			[center, 1280, 720, 910,282, 951,352, 0], // 10-队长-待换的第二个位置
			[center, 1280, 720, 181,516, 267,664, 0], // 11-式神列表的第一个位置
			[center, 1280, 720, 934,520, 1024,656, 0], // 12-式神列表的最后一个位置
			[center, 1280, 720, 178,684, 204,699, 0], // 13-滚动条把手左侧
			[center, 1280, 720, 868,684, 895,699, 0], // 14-滚动条把手右侧
			[left, 1280, 720, 27, 51, 62, 84, 0], // 15-1级标识到中心区域的相对位置
			[left, 1280, 720, 149, 51, 185, 84, 0], // 16-1级标识到第二个中心区域的相对位置
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '准备界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		}, 1000)) {
			if (thisScript.findMultiColor('准备界面_满级标识')) {
				let thisconf = thisScript.scheme.config['15'];
				if (!thisconf.dog_food_type || '素材' === thisconf.dog_food_type) {
					// 素材
					while (thisScript.oper({
						name: '换狗粮_素材_step1',
						operator: [{
							desc: thisOperator[0].desc,
							oper: [thisOperator[0].oper[0], thisOperator[0].oper[0]]
						}]
					})) {
						sleep(500);
						thisScript.keepScreen(false);
					}
					sleep(1500);
					thisScript.helperBridge.regionClick([thisOperator[0].oper[2], thisOperator[0].oper[3]], thisScript.scheme.commonConfig.afterClickDelayRandom);
					sleep(1500);

					if ('打手' == thisconf.type) {
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[7], [800, 1200], 200);
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[6], [200, 400], 500);
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[6], thisOperator[0].oper[8], [1200, 1500], 200);
					} else if ('队长' == thisconf.type) {
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[9], [800, 1200], 200);
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[6], [200, 400], 500);
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[6], thisOperator[0].oper[10], [1200, 1500], 200);
					}
				} else {
					// N卡
					while (thisScript.oper({
						name: '换狗粮_N卡_step1',
						operator: [{
							desc: thisOperator[0].desc,
							oper: [thisOperator[0].oper[0], thisOperator[0].oper[0]]
						}]
					})) {
						sleep(500);
						thisScript.keepScreen(false);
					}
					sleep(1500);
					thisScript.helperBridge.regionClick([thisOperator[0].oper[2], thisOperator[0].oper[4]], thisScript.scheme.commonConfig.afterClickDelayRandom);
					sleep(1500);
					let handlePos = parseInt(thisconf.handle_position);
					// 先用把手拖一段距离
					if (handlePos) {
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[13], [
							thisOperator[0].oper[13][0] + (thisOperator[0].oper[14][0] - thisOperator[0].oper[13][0]) * handlePos / 100,
							thisOperator[0].oper[13][1],
							thisOperator[0].oper[13][2] + (thisOperator[0].oper[14][2] - thisOperator[0].oper[13][2]) * handlePos / 100,
							thisOperator[0].oper[13][3],
						], [800, 1200], 200);
						sleep(500);
						thisScript.keepScreen(true);
					}
					let point = thisScript.findMultiColor('准备_N卡');
					let pointCnt = 20;
					while (!point && --pointCnt) {
						thisScript.helperBridge.regionSwipe(thisOperator[0].oper[12], thisOperator[0].oper[11], [800, 1200], 200);
						sleep(1000);
						point = thisScript.findMultiColor('准备_N卡');
						thisScript.keepScreen(true);
					}
					let path1 = [
						{
							x: point.x + random(thisOperator[0].oper[15][0], thisOperator[0].oper[15][2]),
							y: point.y + random(thisOperator[0].oper[15][1], thisOperator[0].oper[15][3])
						}, 
						{ delay: 800, x: null, y: null }, 
						{ delay: 800, x: null, y: null }
					];
					let path2 = [
						{
							x: point.x + random(thisOperator[0].oper[16][0], thisOperator[0].oper[16][2]),
							y: point.y + random(thisOperator[0].oper[16][1], thisOperator[0].oper[16][3])
						}, 
						{ delay: 800, x: null, y: null }, 
						{ delay: 800, x: null, y: null }
					]
					if ('打手' == thisconf.type) {
						path1[2].x = random(thisOperator[0].oper[7][0], thisOperator[0].oper[7][2]);
						path1[2].y = random(thisOperator[0].oper[7][1], thisOperator[0].oper[7][3]);
						path1[1].y = random(thisOperator[0].oper[7][1], thisOperator[0].oper[7][3]);

						path2[2].x = random(thisOperator[0].oper[8][0], thisOperator[0].oper[8][2]);
						path2[2].y = random(thisOperator[0].oper[8][1], thisOperator[0].oper[8][3]);
						path2[1].y = random(thisOperator[0].oper[8][1], thisOperator[0].oper[8][3]);
					} else if ('队长' == thisconf.type) {
						path1[2].x = random(thisOperator[0].oper[9][0], thisOperator[0].oper[9][2]);
						path1[2].y = random(thisOperator[0].oper[9][1], thisOperator[0].oper[9][3]);
						path1[1].y = random(thisOperator[0].oper[9][1], thisOperator[0].oper[9][3]);

						path2[2].x = random(thisOperator[0].oper[10][0], thisOperator[0].oper[10][2]);
						path2[2].y = random(thisOperator[0].oper[10][1], thisOperator[0].oper[10][3]);
						path2[1].y = random(thisOperator[0].oper[10][1], thisOperator[0].oper[10][3]);
					}
					path1[1].x = point.x + random(thisOperator[0].oper[15][0], thisOperator[0].oper[15][2]);
					path2[1].x = point.x + random(thisOperator[0].oper[16][0], thisOperator[0].oper[16][2]);
					thisScript.helperBridge.swipePath(path1);
					sleep(random(300, 500));
					thisScript.helperBridge.swipePath(path2);
				}
				return true;
			}
		}
	}
}, {
	id: 16,
	name: '地鬼_热门挑战',
	desc: '在地域鬼王界面时，从热门挑战中的前3(可配置)个选择要挑战的怪进行挑战',
	config: [{
		desc: '',
		config: [{
			name: 'callengeTimes',
			desc: '开放挑战次数',
			type: 'list',
			data: ['1', '2', '3'],
			default: '3',
			value: null,
		}]
	}],
	operator: [{
		desc: [1280,720,
			[[left,60,58,0xc2cbe3],
			[left,69,670,0xaf544c],
			[right,1157,49,0xfbf5e5],
			[right,1137,39,0xce737b],
			[right,1206,42,0xc55149],
			[right,1197,532,0xf4f4f4]]
		],
		oper: [
			[right, 1280,720, 1116,34, 1148,62, 1000], // 筛选
			[right, 1280,720, 1194,398, 1233,515, 500], // 热门
			[right, 1280,720, 1093,235, 1136,282, 500], // 第一个
			[right, 1280,720, 1095,363, 1138,410, 500], // 第二个
			[right, 1280,720, 1091,490, 1137,541, 500], // 第三个
			[left, 1280,720, 0, 0, 13, 19, 0], // 难度把手大小区域
			[left, 1280,720, 53,265, 108,326, 0], // 难度把手滑动停止区域
			[left, 1280,720, 1104,495, 1177,563, 0], // 挑战
		]
	}, {
		// 关闭界面
		desc: [1280,720,
			[[center,159,224,0xe2dad3],
			[center,236,223,0xeccba1],
			[center,455,223,0xefd0a1],
			[center,530,218,0xe7e1db],
			[center,1157,71,0xeecccc]]
		],
		oper: [
			[center, 1280, 720, 1145,59, 1165,83, 500]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '地鬼_挑战_关闭',
			operator: [{
				desc: thisOperator[1].desc,
				oper: thisOperator[1].oper,
			}]
		})) {
			return true;
		}
		if (thisScript.oper({
			name: '地鬼_热门挑战',
			operator: [{
				desc: thisOperator[0].desc
			}]
		}, 2000)) { // 加了个两秒的重检测时间，防止退出来后
			let thisconf = thisScript.scheme.config['16'];
			if (thisScript.global.dgCurNum >= parseInt(thisconf.callengeTimes)) {
				toastLog('已完成');
				thisScript.stop();
				return;
			}
			if (thisScript.global.dgCurNum === undefined) {
				thisScript.global.dgCurNum = 0;
			}
			thisScript.global.dgCurNum++;
			let clickOper = thisOperator[0].oper[1 + thisScript.global.dgCurNum];
			thisScript.helperBridge.regionClick([thisOperator[0].oper[0], thisOperator[0].oper[1], clickOper], thisScript.scheme.commonConfig.afterClickDelayRandom);
			sleep(1500);
			thisScript.keepScreen(true);
			let point = thisScript.findMultiColor('地鬼_难度把手');
			if (point) {
				let beginRegion = [
					point.x,
					point.y,
					point.x + thisOperator[0].oper[5][2],
					point.y + thisOperator[0].oper[5][3],
				];
				thisScript.helperBridge.regionSwipe(beginRegion, thisOperator[0].oper[6], [100, 300], 200);
			}
			thisScript.helperBridge.regionClick([thisOperator[0].oper[7]], thisScript.scheme.commonConfig.afterClickDelayRandom);
			toastLog(`地鬼_热门挑战_第${thisScript.global.dgCurNum}次`);
			sleep(1500);
			return true;
		}
	}
}, {
	id: 17,
	name: '百鬼夜行_邀请好友',
	desc: '在百鬼夜行挑战界面，随机邀请好友',
	operator: [{
		desc: [1280,720,
			[[center,170,600,0xfff2ce],
			[center,1128,594,0x402f1f],
			[center,1084,202,0xe7d4cf],
			[center,554,514,0x846866],
			[center,195,156,0xf9edee]]
		],
		oper: [
			[center, 1280, 720, 152,578, 190,623, 1500]
		]
	}, {
		desc: [1280,720,
			[[center,170,600,0xc3b99e],
			[center,392,156,0xe7bc93],
			[center,391,200,0xd7bfae],
			[center,582,208,0xd7bfae],
			[center,886,276,0xeac9a0],
			[center,608,277,0xeac9a0],
			[center,1084,202,0xb1a29e],
			[center,1132,590,0x322518]]
		],
		oper: [
			[center,1280,720, 468,233, 624,550, 500],
			[center,1280,720, 731,229, 890,563, 500],
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		return thisScript.oper({
			id: 17,
			name: '百鬼夜行_邀请好友',
			operator: [thisOperator[0], {
				desc: thisOperator[1].desc,
				oper: [thisOperator[1].oper[random(0 ,1)]]
			}]
		});
	}
}, {
	id: 18,
	name: '百鬼夜行_挑战',
	desc: '在百鬼夜行挑战界面，点击挑战',
	operator: [{
		desc: [1280,720,
			 [// [center,170,600,0xfff2ce],
			[center,1128,594,0x402f1f],
			[center,1084,202,0xe7d4cf],
			[center,554,514,0x846866],
			[center,195,156,0xf9edee]]
		],
		oper: [
			[center, 1280, 720, 1084,576, 1138,628, 1500]
		]
	}]
}, {
	id: 19,
	name: '百鬼夜行_选择鬼王挑战',
	desc: '百鬼夜行中三选一鬼王界面时，选择一个鬼王后开始挑战，可配置随机或指定位置',
	operator: [{
		desc: [1280,720,
			[[center,626,13,0x1b1420],
			[center,45,45,0xf5e5a3],
			[right,1177,574,0xc7a185],
			[center,47,650,0x201018],
			[center,997,628,0x7b4341]]
		],
		oper: [
			[center, 1280, 720, 245,444, 304,522, 500], // 第一个怪物位置
			[center, 1280, 720, 591,429, 654,504, 500], // 第二个怪物位置
			[center, 1280, 720, 978,460, 1046,515, 500], // 第三个怪物位置
			[center, 1280, 720, 1132,562, 1210,640, 5000], // 开始
		]
	}],
	config: [{
		desc: '',
		config: [{
			name: 'bossPosition',
			desc: '选择第几个鬼王',
			type: 'list',
			data: ['1', '2', '3', '随机'],
			default: '随机',
			value: null,
		}]
	}],
	operatorFunc(thisScript, thisOperator) {
		let thisconf = thisScript.scheme.config['19'];
		let oper = null;
		if ('随机' === thisconf.bossPosition) {
			oper = [thisOperator[0].oper[random(0, 2)], thisOperator[0].oper[3]];
		} else {
			oper = [thisOperator[0].oper[parseInt(thisconf.bossPosition) - 1], thisOperator[0].oper[3]];
		}
		return thisScript.oper({
			id: '18',
			name: '百鬼夜行_选择鬼王挑战',
			operator: [{
				desc: thisOperator[0].desc,
				oper: oper
			}]
		})
	}
}, {
	id: 20,
	name: '百鬼夜行_随机散豆',
	desc: '在百鬼夜行的界面，随机自由散豆',
	operator: [{
		desc: [1280,720,
			[[left,45,42,0xf5e5a3],
			[center,242,657,0xf3b969],
			[center,640,6,0x261c29],
			[center,598,31,0x201723],
			[center,458,583,0x4f1e2c]]
		],
		oper: [
			[center, 1280, 720, 90,270, 1252,528, 500]
		]
	}]
}, {
	id: 21,
	name: '百鬼夜行_退出结算',
	operator: [{
		desc: [1280,720,
			[[center,204,277,0xf0f0df],
			[center,133,122,0xb5b5d6],
			[center,102,413,0xf5ede5],
			[center,233,583,0xeeeae2],
			[center,1164,245,0xefebe3],
			[center,698,88,0x7b7b9c]]
		],
		oper: [
			[center, 1280, 720, 71,75, 207,642, 2000]
		]
	}]
}, {
	id: 22,
	name: '抽厕纸(普通召唤)',
	operator: [{
		desc: [1280,720,
			[[center,442,650,0xf4b25f],
			[center,707,647,0xf4b25f],
			[center,586,671,0x964130],
			[center,856,671,0x933e2d]]
		],
		oper: [
			[center, 1280, 720, 697,629, 855,665, 1000] // 再次召唤
		]
	}
	// , {
	// 	desc: [1280,720,
	// 		[[center,272,586,0xd2d3d2],
	// 		[center,499,585,0x97daef],
	// 		[center,775,606,0x4f4f4f],
	// 		[center,990,598,0xbc68db],
	// 		[left,40,43,0x876241],
	// 		[left,224,32,0x583716]]
	// 	],
	// 	oper: [
	// 		[center, 1280, 720, 262,588, 327,666, 1000] // 普通召唤
	// 	]
	// }
	]
}, {
	id: 23,
	name: '逢魔答题',
	desc: '逢魔密信自动答题，需要安装OCR插件，已知问题：答案为单字或单数字时无法识别',
	operator: [{
		desc: [1280,720,
			[[center,456,96,0xa72c01],
			[center,692,90,0xddcdc3],
			[center,871,63,0xeecccc],
			[center,818,610,0xc4b3a3],
			[center,723,618,0xcfbcad]]
		],
		oper: [
			[center, 1280, 720, 429,163, 429 + 433, 163 + 72, 0], // 问题区域
			[center, 1280, 720, 426,252, 426 + 446, 252 + 264, 0], // 答案区域
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '逢魔答题_界面判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			let screenImg = images.captureScreen();
			// 识别问题
			let toDetectQuestionBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[0].slice(0, 4));
			console.time('ocr.detect.question');
			let resultQuestion = thisScript.getOcr().detect(toDetectQuestionBmp, 1);
			console.timeEnd('ocr.detect.question');
			toDetectQuestionBmp.recycle();
			let question = '';
			for (let i = 0, len = resultQuestion.size(); i < len; i++) {
				question += resultQuestion.get(i).text;
			}
			console.log(`识别题目: ${question}`);
			
			let stdQuestion = questionSearch(question);
			console.log(`搜索题库:${JSON.stringify(stdQuestion)}`);

			let toDetectAnsBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[1].slice(0, 4));
			console.time('ocr.detect.ans');
			let resultAns = thisScript.getOcr().detect(toDetectAnsBmp, 1);
			console.timeEnd('ocr.detect.ans');
			toDetectAnsBmp.recycle();
			let ansList = [];
			for (let i = 0, len = resultAns.size(); i < len; i++) {
				let row = resultAns.get(i);
				let frame = row.frame;
				let rect = [
					thisOperator[0].oper[1][0] + frame.get(0),
					thisOperator[0].oper[1][1] + frame.get(1),
					thisOperator[0].oper[1][0] + frame.get(4),
					thisOperator[0].oper[1][1] + frame.get(5)
				];
				ansList.push({
					text: row.text,
					rect: rect
				});
			}
			console.log(`答案区域识别:${JSON.stringify(ansList)}`);
			let stdAns = search(ansList, 'text', stdQuestion.data.ans);
			toastLog(`选择答案: ${stdAns.data.text}, 置信度为: ${(stdQuestion.similarity * stdAns.similarity).toFixed(4)}`);
			thisScript.helperBridge.regionClick([[...stdAns.data.rect, 1500]], thisScript.scheme.commonConfig.afterClickDelayRandom);
			return true;
		}
		return false;
	}
}, {
	id: 24,
	name: '获得奖励确认',
	operator: [{
		desc: [1280,720, // 奖励只有1排
			[[center,424,328,0xbfa88f],
			[center,408,237,0x382a1c],
			[center,854,241,0x382a1c],
			[center,669,242,0xe6d79c],
			[center,869,327,0xb79e86],
			[center,926,386,0x825e34],
			[center,371,395,0x8b673e]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}, {
		desc: [1280,720, // 奖励有2排
			[[center,401,210,0x39291d],
			[center,828,208,0x3c2a20],
			[center,602,172,0xfbf2cd],
			[center,917,418,0x8e6a41],
			[center,370,430,0x8d6940],
			[center,619,254,0xcbb59e]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}]
	// 预留id 25: 现世逢魔 26:寻找首领 27:挑战首领 28:4次现式逢魔奖励
}, {
	id: 25,
	name: '探索_单人时退出',
	desc: '探索小怪界面时，若只有自己一个人在里面，则退出',
	operator: [{
		desc: [1280,720, // 组队匹配上了的话就不做任何操作
			[[left,38,65,0xf1f5fb],
			[left,36,570,0x983254],
			[left,29,672,0x615a77],
			[right,1124,36,0xd7b388],
			[right,1225,49,0xcba375],
			[left,64,456,0xf6f6e9],
			[left,72,444,0x483726]]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 1000]
		],
		notForCnt: true,
	}, {
		desc: [1280,720,
			[[left,38,65,0xf1f5fb],
			[left,36,570,0x983254],
			[left,29,672,0x615a77],
			[right,1124,36,0xd7b388],
			[right,1225,49,0xcba375]]
		],
		oper: [
			[left, 1280, 720, 32,45, 70,86, 1000],
			[center, 1280, 720, 700,386, 850,418, 1000]
		]
	}]
}, {
	id: 26,
	name: '现世逢魔',
	desc: '逢魔界面点击右下角的图标后点击右侧相关事件图标',
	operator: [{
		desc: [1280,720,
			[[left,19,700,0x3c3841],
			[left,42,46,0xc3cbdf],
			[center,754,39,0x583716],
			[center,1181,650,0xffffff],
			[left,43,680,0xc7957c],
			[left,54,676,0x433b42]]
		],
		oper: [
			[right, 1280, 720, 1157,616, 1202,666, 5000], // 发现
		]
	}, {
		desc: [1280,720,
			// 4次逢魔
			[[right,1240,505,0x8ebaf3],
			[right,1220,430,0x91bbf3],
			[right,1246,371,0x8cb9f3],
			[right,1226,310,0x8fbdf1],]
		],
		oper: [
			[right, 1280, 720, 1233,496, 1252,514, 3000],
			[right, 1280, 720, 1215,425, 1228,440, 3000],
			[right, 1280, 720, 1243,360, 1256,378, 3000],
			[right, 1280, 720, 1219,298, 1235,315, 3000],
		]
	}, {
		desc: [1280,720,
			// 最后一次奖励
			[[right,1243,264,0x5c4a6f],
			[right,1224,262,0x5e4c6c]]
		],
		oper: [
			[right, 1280, 720, 1223,208, 1246,251, 1500]
		]
	}, { // 花钱的宝箱都不领
		desc: [1280,720,
			[[left,43,51,0x4f525c],
			[center,436,338,0xcbb59e],
			[center,803,342,0xcbb59e],
			[center,578,444,0xf4b25f],
			[center,537,213,0x694737],
			[center,658,507,0x694837]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}, {
		// 逢魔boss挑战
		desc: [1280,720,
			[[center,134,54,0xc3a765],
			[center,1090,54,0xdbd3bf],
			[center,1139,74,0xeecccc],
			[center,1104,556,0xded0be],
			[center,988,648,0x201d1a]]
		],
		oper: [
			[center, 1280, 720, 1072,546, 1164,628, 1000]
		]
	}, {
		// 神秘任务_不做
		desc: [1280,720,
			[[left,37,50,0x3c3e44],
			[center,650,140,0xcaa85d],
			[center,846,131,0xeecccc],
			[center,564,339,0x86201f],
			[center,566,234,0x852221]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}, {
		// 鬼王_挑战
		desc: [1280,720,
			[[center,114,54,0xc3a765],
			[center,1139,73,0xeecccc],
			[center,1117,565,0xead9ba],
			[center,631,652,0x1f1c19],
			[center,122,161,0xd4cac3],
			[center,1121,611,0xf3d5a6]]
		],
		oper: [
			[center, 1280, 720, 1075,550, 1150,631, 1000]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '现世逢魔_界面判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			for (let i = 0; i < thisOperator[1].desc.length; i++) {
				if (thisScript.oper({
					name: `现世逢魔_第${i}次`,
					operator: [{
						desc: [thisOperator[1].desc[i]],
						oper: [
							thisOperator[0].oper[0],
							thisOperator[1].oper[i]
						]
					}]
				})) {
					return true;
				}
			}
			if (!thisScript.oper({
				name: '现世逢魔_最后一次奖励',
				operator: [{
					desc: thisOperator[2].desc,
				}]
			})) {
				thisScript.helperBridge.regionClick(thisOperator[2].oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			}
			return false;
		}
		if (thisScript.oper({
			name: '宝箱_不领|逢魔boss挑战|神秘任务_不做|鬼王_挑战',
			operator: [thisOperator[3], thisOperator[4], thisOperator[5], thisOperator[6]]
		})) {
			return true;
		}
		return false;
	}
}, {
	id: 27,
	name: '组队_自动匹配',
	desc: '在庭院中点击下方的组队按钮后点击排队按钮',
	operator: [{
		desc: [1280,720,
		[[center,400,50,0x513b14], //妖气自动匹配中的 图像
		[center,392,46,0x644217],
		[center,804,44,0x986f55],
		[center,660,53,0xac9e90],
		[center,704,27,0xaa9379],
		[center,807,27,0x9d7051],
		[center,556,98,0x2e090d],
		[center,626,83,0xab9f8b],
		[center,620,30,0xaa937b],
		[center,397,22,0x766838]]
	]},{
		desc: [1280,720, //首页比色
			[[center,229,30,0x614040],
			[center,404,36,0xfbcb78],
			[center,437,79,0xee7a59],
			[center,1151,53,0xcba574],
			[center,1237,54,0xceac79],
			[center,1218,603,0x8c5a38],
			[center,1226,695,0x391816],
			[center,58,663,0x4b2e31],
			[center,1238,41,0x6e5c50]]
		],
		oper: [
			[center, 1280, 720, 350, 640, 402, 664, 1500], //首页组队按钮
		]
	},{
		desc: [1280,720,
			// [[left,86,36,0x100a0b],  //不知道为啥 取得点居然匹配不是 换了好几次点集了
			// [right,1167,44,0x2a2327],
			[[center,840,143,0xd7c8ba],
			[center,650,150,0xded1c3],
			[right,1104,157,0xf46c28],
			[center,623,620,0xccbbaa],
			// [left,76,615,0x927969],
			// [right,1186,679,0x402623],
			[center,721,625,0xf4b25f],
			[center,422,631,0xdc935a]]
		],
		oper: [
			[center, 1280, 720, 702, 601, 865, 650, 1000] //组队界面 自动匹配
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if(!thisScript.oper({
			name: '判断自动匹配非排队中',
			operator: [{
				desc: thisOperator[0].desc
			}]
		}) && thisScript.oper({
			name: '首页判断并点击组队',
			operator: [thisOperator[1], thisOperator[2]]
		})){
			// return thisScript.oper({
			// 	name: '妖气界面判断自动匹配',
			// 	operator: [thisOperator[2]]
			// });
			// thisScript.helperBridge.regionClick(thisOperator[2].oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
			return true;
		}
		return false;
	}
}, {
	id: 28,
	name: '继续育成',
	desc: '式神升级界面点击确定后再点击继续育成',
	config: [{
		desc: '材料个数，低于这个值时判定结束，比如说5个红蛋喂1个蓝蛋，最后一次上的红蛋个数不足5个时说明红蛋已经不够喂了，脚本会自动停止',
		config: [{
			name: 'count',
			desc: '材料个数',
			type: 'list',
			data: ['1', '2', '3', '4', '5', '6', '7', '8'],
			default: '5',
		}]
	}],
	operator: [{
		// 等级提升界面
		desc: [1280,720,
			[[right,866,410,0xe2d1c1],
			[right,698,602,0xefb561],
			[right,938,606,0xf4b25f],
			[right,874,140,0xc59d47],
			[right,1066,132,0xcad2de]]
		],
		oper: [
			[center, 1280, 720, 695,597, 830,634, 500], // 继续育成
		]
	}, {
		// 育成选材料界面
		desc: [1280,720,
			[[left,44,37,0xf5e8a9],
			[center,964,631,0xcbb9b2],
			[center,919,642,0xf4b25f],
			[right,1233,45,0xd7c5a2],
			[right,1222,161,0xfbeddb],
			[center,598,674,0x2b1f1b]]
		],
		oper: [
			[center, 1280, 720, 821,632, 932,670, 2500], // 确定
		]
	}, {
		desc: [1280,720,
			// 8个+号的中心
			[[center,590,182,0xd3c3b5],
			[center,590,303,0xd3c4b7],
			[center,590,428,0xd2c1b5],
			[center,592,550,0xcfc1b5],
			[center,1048,184,0xd2c1b5],
			[center,1049,305,0xd3c2b6],
			[center,1049,427,0xd3c2b6],
			[center,1049,550,0xd3c1b6]]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let thisconf = thisScript.scheme.config['28'];
		let cntIndex = parseInt(thisconf.count) - 1;
		if (thisScript.oper({
			name: '继续育成',
			operator: [thisOperator[0]]
		})) {
			return true;
		} else if (thisScript.oper({
			name: '育成',
			operator: [{
				desc: thisOperator[1].desc,
			}]
		}) && !thisScript.oper({
			name: '育成_材料个数判断',
			operator: [{
				desc: [thisOperator[2].desc[cntIndex]],
			}]
		})) {
			thisScript.helperBridge.regionClick(thisOperator[1].oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
			return true;
		}
		return false;
	}
}, {
	id: 29,
	name: '庭院进入探索地图',
	desc: '请使用默认庭院皮肤，启用该功能后在庭院下会自动进入探索地图界面',
	operator: [{
		desc: [1280,720, //首页比色
			[[center,229,30,0x614040],
			[center,404,36,0xfbcb78],
			[center,437,79,0xee7a59],
			[center,1151,53,0xcba574],
			[center,1237,54,0xceac79],
			[center,1218,603,0x8c5a38],
			[center,1226,695,0x391816],
			[center,58,663,0x4b2e31],
			[center,1238,41,0x6e5c50]]
		],
		oper: [
			[left, 1280, 720, 0, 0, 32, 63, 1000]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '庭院判断',
			operator: [thisOperator[0]]
		})) {
			let point = thisScript.findMultiColor('庭院_探索灯笼');
			if (point) {
				let oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
			} else {
				return false
			}
		}
		return false;
	}
}, {
	id: 101,
	name: '夏日花火会_猜灯迷_答题',
	config: [{
		desc: '',
		config: [{
			name: 'path',
			desc: '题目识别不到时保存截图路径(不填表示不保存)',
			type: 'text',
			default: '',
		}]
	}],
	operator: [{
		desc: [1280,720,
			[[left,48,52,0xf5e7a9],
			[left,219,54,0x583716],
			[center,527,103,0xeedcb0],
			[center,705,112,0x554e5d],
			[center,755,254,0xc2a488],
			[center,755,320,0xc4ad8b],
			[center,755,385,0xc1ae94],
			[center,755,451,0xc3b094],
			[center,759,274,0xc4a788],
			[center,759,340,0xbfb08e],
			[center,759,405,0xbfac90],
			[center,759,470,0xc1af94]]
		],
		oper: [
			[center, 1280, 720, 449,151, 827,245, 0],
			[center, 1280, 720, 494,241, 786,505, 0],
			[center, 1280, 720, 452,72, 830,528, 0],
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '猜灯谜_答题界面',
			operator: [{
				desc: thisOperator[0].desc,
			}]
		})) {
			if (!thisScript.global.dynamicQA) {
				console.log('初始化题库');
				let str = files.read(files.cwd() + '/assets/dynamicQA.txt');
				let arr = str.split(/\r?\n/);
				thisScript.global.dynamicQA = [];
				arr.forEach(item => {
					let par = item.split(' \\\\\\]]]');
					thisScript.global.dynamicQA.push({
						question: par[0].replace(/[，,？?\'\"【】\-「」\|。]/g, ''),
						ans: par[1]
					});
				});
			}
			let thisconf = thisScript.scheme.config['101'];
			let t1 = new Date().getTime();
			let bmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[0].slice(0, 4));
			// 识别问题
			console.time('ocr.detect.question');
			let res = thisScript.getOcr().detect(bmp, 1);
			console.timeEnd('ocr.detect.question');
			bmp.recycle();
			let resText = '';
			for (let i = 0, len = res.size(); i < len; i++) {
				resText += res.get(i).text;
			}
			resText = resText.replace(/[，,？?\'\"【】\-「」\|。]/g, '');
			console.log(`识别问题: ${resText}`);
			// 搜索题库
			console.time('ocr.question.search');
			let stdQuestion = search(thisScript.global.dynamicQA, 'question', resText, 0.7);
			console.timeEnd('ocr.question.search');
			if (null === stdQuestion) {
				// todo 更新题库
				toastLog('未搜索到题库');
				// throw new Error('未搜索到题库');
				// 保存图片
				let path = thisconf.path;
				if (path) {
					let qa = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[2].slice(0, 4));
					let qaIw = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(qa);
					images.save(qaIw, path + '/' + new Date().getTime() + '.png');
					qa.recycle();
					qaIw.recycle();
				}
				sleep(12000);
				return false;
			}
			// stdQuestion.data.question;

			// 识别答案
			let bmp2 = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[1].slice(0, 4));
			// 识别答案
			console.time('ocr.detect.ans');
			let res2 = thisScript.getOcr().detect(bmp2, 1);
			console.timeEnd('ocr.detect.ans');
			bmp2.recycle();

			let ansList = [];
			for (let i = 0, len = res2.size(); i < len; i++) {
				let row = res2.get(i);
				let frame = row.frame;
				let rect = [
					thisOperator[0].oper[1][0] + frame.get(0),
					thisOperator[0].oper[1][1] + frame.get(1),
					thisOperator[0].oper[1][0] + frame.get(4),
					thisOperator[0].oper[1][1] + frame.get(5)
				];
				ansList.push({
					text: row.text,
					rect: rect
				});
			}
			console.log(`答案区域识别:${JSON.stringify(ansList)}`);
			let stdAns = search(ansList, 'text', stdQuestion.data.ans);
			if (stdAns === null) {
				toastLog('未搜索到答案');
				// throw new Error('未搜索到答案');
				return false;
			}
			let t2 = new Date().getTime();
			toastLog(`识别题目: ${stdQuestion.data.question}, 选择答案: ${stdAns.data.text}, 置信度为: ${(stdQuestion.similarity * stdAns.similarity).toFixed(4)}, 总耗时: ${t2 - t1}ms`);
			thisScript.helperBridge.regionClick([[...stdAns.data.rect, 3000]], thisScript.scheme.commonConfig.afterClickDelayRandom);
		}
	}
}, {
	id: 102,
	name: '夏日花火会_猜灯迷_杂项',
	operator: [{
		// 结算
		desc: [1280,720,
			[[center,458,179,0x6a423b],
			[center,521,132,0xd7b27d],
			[center,661,579,0xccba98],
			[center,754,635,0x985c4b]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 1000]
		]
	}, {
		// 开始
		desc: [1280,720,
			[[left,48,51,0xf5e7a9],
			[left,219,58,0x583716],
			[left,103,288,0xd1b78a],
			[right,1222,597,0xd7a975],
			[right,1164,43,0xd7c5a2],
			[center,1204,644,0xffeecc]]
		],
		oper: [
			[right, 1280, 720, 1170,601, 1264,700, 1000]
		]
	}]
}];

export default FuncList;