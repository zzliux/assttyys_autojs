const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 1,
	name: '准备',
	desc: '在准备界面执行准备或退出操作',
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
		desc: [1280,720,
			[[right,1124,698,0xd0af86],
			[right,1240,702,0xcead83],
			[right,1191,596,0xa46149],
			[right,1182,586,0xf7e6c3],
			[center,360,699,0x241818],
			[left,32,23,0xdbb48b]]
		],
		// 0-方向, 1-左上角x, 2-左上角y, 3-右下角x, 4-右下角y, 5-点击后延迟
		oper: [
			[right, 1280, 720, 1137,542, 1228,632, 2000], // 准备
			[left, 1280, 720, 22,19, 52,47, 500], // 左上角返回
			[center, 1280, 720, 683,401, 795,442, 500], // 确认
		]
	}, {
		// 手动状态
		desc: [1280,720,
			[[left,34,23,0xdbb48b],
			[left,106,24,0xcfa375],
			// [left,254,34,0xc5a57d],
			[right,1270,132,0x48371f],
			[right,1270,700,0x241919],
			[left,45,656,0xeac4a7],
			[left,78,670,0xf0caac]]
		],
		oper: [
			[left, 1280, 720, 37,637, 86,686, 1000]
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
			}) || thisScript.oper({
				id: 1,
				name: '手动修正自动',
				operator: [thisOperator[1]]
			}, 1000)) {
				return true;
			}
		}
	}
}
