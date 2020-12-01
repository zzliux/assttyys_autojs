const FuncList = [{
	id: 1,
	name: '准备',
	checked: false,
	config: [{
		desc: '准备后绿标',
		config: [{
			name: 'enabled',
			desc: '是否启用',
			type: 'switch',
			default: false,
			value: null,
		}, {
			name: 'position',
			desc: '标记位置',
			type: 'list',
			data: ['五人-左1', '五人-左2', '五人-左3', '五人-左4', '五人-左5', '三人-左1', '三人-左2', '三人-左3'],
			default: '五人-左1',
			value: null,
		}]
	}]
}, {
	id: 2,
	name: '退出结算',
	checked: false
}, {
	id: 3,
	name: '悬赏协作',
	checked: false,
	config: [{
		desc: '',
		config: [{
			name: 'type',
			desc: '悬赏协作',
			type: 'list',
			data: ['拒绝', '接受'],
			default: '拒绝',
			value: null,
		}]
	}]
}, {
	id: 5,
	name: '接受邀请',
	checked: false
}, {
	id: 6,
	name: '组队挑战',
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
	name: '取消确定框点确定',
	checked: false
}, {
	id: 9,
	name: '御魂/御灵挑战',
	checked: false
}, {
	id: 10,
	name: '结界_进攻按钮',
	checked: false
}, {
	id: 11,
	name: '结界_刷新按钮',
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
	}]
}];

export default FuncList;