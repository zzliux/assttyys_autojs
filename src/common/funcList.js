import helperBridge from '@/system/helperBridge';

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
	name: '退出结算 TODO',
	checked: false
}, {
	id: 3,
	name: '悬赏协作 TODO',
	checked: false,
	config: [{
		desc: '',
		config: [{
			name: 'type',
			desc: '操作',
			type: 'list',
			data: ['拒绝', '接受'],
			default: '拒绝',
			value: null,
		}]
	}]
}, {
	id: 5,
	name: '接受邀请 TODO',
	checked: false
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