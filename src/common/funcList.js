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
		desc: [1280, 720,
			[[center, 556, 418, 0xdd9922],
			[center, 536, 607, 0x712a0c],
			[center, 652, 621, 0x320204],
			[center, 489, 621, 0x3d82c6]]
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
	id: 5,
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
	id: 6,
	name: '组队挑战 TODO',
	checked: false,
	config: [{
		desc: '',
		config: [{
			name: 'type',
			desc: '组队挑战',
			type: 'list',
			data: ['有人就开', '双人', '三人'],
			default: '双人',
			value: null,
		}]
	}]
}, {
	id: 8,
	name: '取消确定框点确定 TODO',
	checked: false
}, {
	id: 9,
	name: '御魂/御灵挑战 TODO',
	checked: false
}, {
	id: 10,
	name: '结界_进攻按钮 TODO',
	checked: false
}, {
	id: 11,
	name: '结界_刷新按钮 TODO',
	checked: false,
	config: [{
		desc: '',
		config: [{
			name: 'type',
			desc: '刷新条件',
			type: 'list',
			data: ['三次刷新', '直接刷新'],
			default: '三次刷新',
			value: null,
		}]
	}]
}, {
	id: 12,
	name: '结界_勋章点击 TODO',
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
	}]
}];

export default FuncList;