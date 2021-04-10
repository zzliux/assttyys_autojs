// import helperBridge from '@/system/helperBridge';
import { search, questionSearch } from '@/common/tool';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

const FuncList = [{
	id: 0,
	name: '结束判断',
	checked: false,
	operator: [],
	config: [{
		desc: '执行时间',
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
		desc: '准备',
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
		desc: '退出结算',
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
	}],
	operatorFunc(thisScript, thisOperator) {
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
				thisScript.stop();
			}
		}
		if (thisconf.jspd_enabled_1) {
			if (thisScript.runTimes['1'] >= thisconf.jspd_times_1) {
				toastLog(`准备功能执行${thisScript.runTimes['1']}次后停止脚本`);
				thisScript.stop();
			}
		}
		if (thisconf.jspd_enabled_2) {
			if (thisScript.runTimes['2'] >= thisconf.jspd_times_2) {
				toastLog(`退出结算功能执行${thisScript.runTimes['2']}次后停止脚本`);
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
	checked: false,
	config: [{
		desc: '退出',
		config: [{
			name: 'exitBeforeReady',
			desc: '准备前是否退出,常用于个人突破的降级',
			type: 'switch',
			default: false,
		}],
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
			return thisScript.oper({
				id: 1,
				name: '准备',
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[0]]
				}]
			});
		}
	}
	// config: [{
	// 	desc: '准备后绿标',
	// 	config: [{
	// 		name: 'enabled',
	// 		desc: '是否启用',
	// 		type: 'switch',
	// 		default: false,
	// 		value: null,
	// 	}, {
	// 		name: 'position',
	// 		desc: '标记位置',
	// 		type: 'list',
	// 		data: ['五人-左1', '五人-左2', '五人-左3', '五人-左4', '五人-左5', '三人-左1', '三人-左2', '三人-左3'],
	// 		default: '五人-左1',
	// 		value: null,
	// 	}]
	// }]
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
			[right,1238,27,0xd7c5a2],
			[right,1177,667,0xd8b871],
			[right,1187,679,0xcda35d],
			[right,1188,609,0xf1e096],
			[left,60,39,0x84582f],
			[left,19,47,0x281717]]
		],
	}, {
		desc: [1280,720,
			[[center, 1280, 720,643,254,0xffffff]]
		]
	}, {
		desc: [1280,720,
			[[center, 1280, 720,1088,253,0xffffff]]
		]
	}, {
		oper: [
			[right, 1280, 720, 1192,613, 1251,677, 2000]
		]
	}], // 0-有人就开，1-第一个+号上的点，2-第二个+号上的点，如果1或者2任意一个匹配上了，说明人没满
	operatorFunc(thisScript, thisOperator) {
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
					operator: [{ desc: thisOperator[1].desc }]
				}) && !thisScript.oper({
					name: '组队挑战_乘客2无人',
					operator: [{ desc: thisOperator[2].desc }]
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
	checked: false,
	operator: [{  // CD
		desc: [1280,720,
			[[center,549,93,0x5a4130],
			[center,720,93,0x583716],
			[center,224,104,0x4a3525],
			[center,997,127,0x958c83],
			[center,400,610,0xffac2c],
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
			[center,400,610,0xffac2c],
			[center,995,595,0xf4b25f],
			[center,646,97,0xf8f3e0]]
		],
		oper: [
			[center, 1280, 720, 970,573, 1130,621, 1500],
			[center, 1280, 720, 674,407, 839,457, 2000]
		]
	}]
}, {
	id: 8,
	name: '结界_进攻',
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
			data: ['停止脚本', '关闭界面'],
			default: '停止脚本',
			value: null,
		}, {
			name: 'type',
			desc: '突破类型',
			type: 'list',
			data: ['个人突破', '寮突破'],
			default: '个人突破',
			value: null,
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
				let oper = thisOperator[0].oper[1];
				thisScript.helperBridge.regionClick([oper], 500 + thisScript.scheme.commonConfig.afterClickDelayRandom);
				toastLog('寮突破CD, 30秒后再次检测');
				sleep(30000);
				return true;
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
	}],
	operatorFunc(thisScript, thisOperator) {
		let thisconf = thisScript.scheme.config['10']; // 获取配置
		if ('个人突破' === thisconf.type) {
			return thisScript.oper({
				name: '地图进入个人突破',
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[0]]
				}]
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
	checked: false,
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
			[center, 1280, 720, 431,149, 1064,239, 0]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '突破界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			thisScript.helperBridge.regionBezierSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [800, 1600], 200);
			return true;
		}
		return false;
	}
}, {
	id: 13,
	name: '探索_地图进入最后一章',
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
			[right, 1280, 720, 1056,557, 1246,643, 500]
		]
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
			[center, 1280, 720, 446,201, 492,255, 200],
			[center, 1280, 720, 889,517, 1002,559, 1000]
		]
	}]
}, {
	id: 14,
	name: '探索_点击挑战图标',
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
	config: [{
		desc: '',
		config: [{
			name: 'type',
			desc: '类型',
			type: 'list',
			data: ['队长', '打手'],
			default: '打手',
			value: null,
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
			[center, 1280, 720, 215,475, 721,642, 200],
			[center, 1280, 720, 215,475, 721,642, 1500],
			[left, 1280, 720, 44,633, 97,682, 400],
			[left, 1280, 720, 44,295, 92,345, 400], // 素材
			[left, 1280, 720, 148,311, 195,361, 400], // N
			[center, 1280, 720, 205,551, 246,608, 0], // 第一个位置
			[center, 1280, 720, 336,555, 371,611, 0], // 第二个位置
			[center, 1280, 720, 184,339, 234,403, 0], // 打手-待换的第一个位置
			[center, 1280, 720, 616,334, 669,389, 0], // 打手-待换的第二个位置
			[center, 1280, 720, 312,298, 358,362, 0], // 队长-待换的第一个位置
			[center, 1280, 720, 910,282, 951,352, 0], // 队长-待换的第二个位置
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '准备界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			if (thisScript.findMultiColor('准备界面_满级标识')) {
				let thisconf = thisScript.scheme.config['15'];
				// 素材
				while (thisScript.oper({
					name: '换狗粮_step1',
					operator: [{
						desc: thisOperator[0].desc,
						oper: [thisOperator[0].oper[0], thisOperator[0].oper[0]]
					}]
				})) {
					sleep(500);
					thisScript.keepScreen(false);
				}
				sleep(1500);
				thisScript.helperBridge.regionClick([thisOperator[0].oper[2], thisOperator[0].oper[3]], thisScript.scheme.commonConfig.afterClickDelayRandom)
				sleep(500);

				if ('打手' == thisconf.type) {
					thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[7], [800, 1200], 200);
					thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[6], [200, 400], 500);
					thisScript.helperBridge.regionSwipe(thisOperator[0].oper[6], thisOperator[0].oper[8], [1200, 1500], 200);
				} else if ('队长' == thisconf.type) {
					thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[9], [800, 1200], 200);
					thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[6], [200, 400], 500);
					thisScript.helperBridge.regionSwipe(thisOperator[0].oper[6], thisOperator[0].oper[10], [1200, 1500], 200);
				}
				return true;
			}
		}
	}
}, {
	id: 16,
	name: '地鬼_热门挑战',
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
	name: '逢魔答题(需要安装OCR插件)',
	operator: [{
		desc: [1280,720,
			[[center,456,96,0xa72c01],
			[center,692,90,0xddcdc3],
			[center,871,63,0xeecccc],
			[center,818,610,0xc4b3a3],
			[center,723,618,0xcfbcad]]
		],
		oper: [
			[center, 1280, 720, 429,163, 433, 72, 0], // 问题区域
			[center, 1280, 720, 426,252, 446,264, 0], // 答案区域
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '逢魔答题_界面判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			let screenImg = images.captureScreen();
			// 识别问题
			let toDetectQuestion = images.clip(screenImg, ...thisOperator[0].oper[0].slice(0, 4));
			console.time('ocr.detect.question');
			let resultQuestion = thisScript.getOcr().detect(toDetectQuestion.getBitmap(), 1);
			console.timeEnd('ocr.detect.question');
			toDetectQuestion.recycle();
			let question = '';
			for (let i = 0, len = resultQuestion.size(); i < len; i++) {
				question += resultQuestion.get(i).text;
			}
			console.log(`识别题目: ${question}`);
			
			let stdQuestion = questionSearch(question);
			console.log(`搜索题库:${JSON.stringify(stdQuestion)}`);

			let toDetectAns = images.clip(screenImg, ...thisOperator[0].oper[1].slice(0, 4));
			console.time('ocr.detect.ans');
			let resultAns = thisScript.getOcr().detect(toDetectAns.getBitmap(), 1);
			console.timeEnd('ocr.detect.ans');
			toDetectAns.recycle();
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
}];

export default FuncList;