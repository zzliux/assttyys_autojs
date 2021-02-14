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
			[left, 0, 0, 119, 49, 2000],
			[center, 1188,115, 1225,151, 500],
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
			[left, 0, 0, 214, 98, 500]
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
			[center, 492,289, 783,385, 500]
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
			[right, 1056,557, 1246,643, 1500],
			// [center, 446,201, 492,255, 200],
			// [center, 889,517, 1002,559, 1000]
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
			[center, 446,201, 492,255, 200],
			[center, 889,517, 1002,559, 1000]
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
			[left, 0, 0, 42, 51, 2000],
			[right, 1121,117, 1224,209, 0],
			[left, 46,215, 162,525, 0],
			[left, 30,47, 71,85, 500],
			[center, 702,388, 846,421, 500],
			[left, 0, 0, 16, 16, 0],
			[right, 0, 0, 1275, 715, 0]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.global.tsAttackSwhipeNum === undefined) {
			thisScript.global.tsAttackSwhipeNum = 5;
		}
		let thisconf = thisScript.scheme.config['14'];
		while (thisScript.oper({
			name: '探索界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			let point = thisScript.findMultiColor('探索_挑战BOSS');
			if (point) {
				let oper = [[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				thisScript.global.tsAttackSwhipeNum = 1;
				return true;
			}
			point = null;
			// TODO 挑战经验怪
			if ('打经验' === thisconf.type) {
				let trycnt = 3;
				do {
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
						sleep(500);
						thisScript.keepScreen(true);
					}
				} while (!point && --trycnt > 0);
			} else {
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
					thisScript.helperBridge.regionBezierSwipe(thisOperator[0].oper[1], thisOperator[0].oper[2], [300, 800], 200);
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
			[center, 215,475, 721,642, 200],
			[center, 215,475, 721,642, 1500],
			[left, 44,633, 97,682, 400],
			[left, 44,295, 92,345, 400], // 素材
			[left, 148,311, 195,361, 400], // N
			[center, 205,551, 246,608, 0], // 第一个位置
			[center, 336,555, 371,611, 0], // 第二个位置
			[center, 184,339, 234,403, 0], // 待换的第一个位置
			[center, 616,334, 669,389, 0], // 待换的第二个位置
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '准备界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			if (thisScript.findMultiColor('准备界面_满级标识')) {
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

				thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[7], [800, 1200], 200);
				thisScript.helperBridge.regionSwipe(thisOperator[0].oper[5], thisOperator[0].oper[6], [200, 400], 500);
				thisScript.helperBridge.regionSwipe(thisOperator[0].oper[6], thisOperator[0].oper[8], [1200, 1500], 200);

				return true;
			}
		}
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