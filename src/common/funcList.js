// import helperBridge from '@/system/helperBridge';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

const FuncList = [{
	id: 1,
	name: '准备',
	checked: false,
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
		oper: [[right, 1119, 504, 1227, 592, 2000]]
	}],
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
	operator: [{ // 左上角的统计图标
		desc: [1280, 720,
			[[left, 71, 65, 0xac8a5a],
			[left, 80, 59, 0x3c2a21],
			[left, 88, 67, 0xa8835a],
			[left, 77, 82, 0x3a2a22]]
		],
		oper: [
			[left, 69, 171, 170, 452, 400]
		]
	}, { // 左上角的贪吃鬼图标
		desc: [1280, 720,
			[[left, 50, 66, 0x693430],
			[left, 62, 65, 0xf5f5f5],
			[left, 112, 58, 0x312012],
			[left, 74, 90, 0x927150]]
		],
		oper: [
			[left, 69, 171, 170, 452, 400]
		]
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
			[left, 69, 171, 170, 452, 400]
		]
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
			[left, 69, 171, 170, 452, 400]
		]
	}, {// 未打开的达摩
		desc: [1280, 720,
			[[center, 667, 377, 0xba4618],
			[center, 678, 316, 0x080808],
			[center, 589, 314, 0x060606],
			[center, 636, 324, 0xe7e1cf],
			[center, 588, 486, 0x330202]]
		],
		oper: [
			[left, 69, 171, 170, 452, 400]
		]
	}, { // 已打开的达摩
		desc: [1280,720,
			[[center,482,611,0x3c82ca],
			[center,487,620,0x3b84c6],
			[center,588,619,0x300204],
			[center,712,621,0x340204]]
		],
		oper: [
			[left, 69, 171, 170, 452, 1000]
		]
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
			[left, 69, 171, 170, 452, 2000]
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
			[left, 69, 171, 170, 452, 2000]
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
			[center, 768,109, 796,138, 1000], // 关闭
			[center, 833,397, 874,438, 1000], // 接受
			[center, 835,500, 875,538, 1000], // 拒绝
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
		oper: [[left, 219,237, 254,275, 600]]
	}, { // 接受一次邀请
		desc: [1280,720,
			[[left,128,255,0x58b361],
			[left,45,257,0xdd6a59],
			[left,79,222,0xe3d3c2],
			[left,14,299,0xf1be36],
			[left,176,291,0xefe5d6]]
		],
		oper: [[left, 120,239, 159,273, 600]]
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
			[[center,643,254,0xffffff]]
		]
	}, {
		desc: [1280,720,
			[[center,1088,253,0xffffff]]
		]
	}, {
		oper: [[right, 1192,613, 1251,677, 2000]]
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
		oper: [[right, 1116,602, 1197,683, 2000]]
	}, { // 御灵
		desc: [1280,720,
			[[left,37,37,0xc3cce1],
			[right,1121,47,0xd7b389],
			[right,1230,46,0xd3ae83],
			[right,1106,628,0xe5d9c3],
			[right,1188,679,0x371f16],
			[right,1091,663,0x472c1f]]
		],
		oper: [[right, 1104,595, 1196,681, 2000]]
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
			[center, -1, -1, -1, -1, 30000],
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
			[center, 970,573, 1130,621, 1500],
			[center, 674,407, 839,457, 2000]
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
		}]
	}],
	operator: [{
		oper: [
			[left, 0, 0, 119, 49, 2000],
			[center, 1188,115, 1225,151, 500],
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let thisConf = thisScript.scheme.config['8'];
		let count = parseInt(thisConf.count);
		let defaultCount = count;
		let point = null;
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
			[left, 0, 0, 214, 98, 500]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '突破界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			let thisconf = thisScript.scheme.config['9']; // 获取配置
			let priority = thisconf.priority.split('->');
			let multiColorKey = [];
			for (let item of priority) {
				multiColorKey.push(`结界_${item}勋章`);
			}
			for (let key of multiColorKey) {
				let point = thisScript.findMultiColor(key);
				if (point) {
					let oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
					thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
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
			[left, 280,631, 334,695, 1500],
			[center, 1210,366, 1254,453, 1500]
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
			[center, 970,573, 1130,621, 1500],
			[center, 674,407, 839,457, 2000]
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
			[center, 428,592, 1071,643, 0],
			[center, 431,149, 1064,239, 0]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '突破界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			thisScript.helperBridge.regionSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [800, 1600], 200);
			return true;
		}
		return false;
	}
}, {
	id: 99,
	name: '百鬼料理屋_挑战',
	config: [{
		desc: '',
		config: [{
			name: 'count',
			desc: '连续执行x次后执行完成',
			type: 'list',
			data: ['2', '3', '4', '5'],
			default: '3',
			value: null,
		}]
	}],
	operator: [{
		desc: [1280,720,
			[[center,1177,569,0xffd5a7],
			[center,698,36,0x975e45],
			[left,54,32,0xf1e19f],
			[right,1183,38,0x2c2127],
			[center,769,36,0xe7c65a]]
		],
		oper: [[center, 1158,549, 1224,645, 2000]]
	}, {
		oper: [[center, 988,579, 1009,599, 1000]]
	}],
	operatorFunc(thisScript, thisOperator) {
		let count = parseInt(thisScript.scheme.config['99'].count);
		while (thisScript.oper({
			name: '百鬼料理屋_挑战',
			operator: [thisOperator[0]]
		})) {
			thisScript.keepScreen(false);
			if (--count === 0) {
				// thisScript.helperBridge.regionClick(thisOperator[1].oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				thisScript.stop();
				break;
			}
		}
		if (count < 2) {
			return true;
		}
		return false;
	}
}];

export default FuncList;