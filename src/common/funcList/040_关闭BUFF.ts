const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 40,
	name: '关闭BUFF',
	config: [{
		desc: '结束后切换方案',
		config: [{
			name: 'scheme_switch_enabled',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '寮突破',
		}]
	}],
	operator: [{
		desc: [1280, 720,
			[
				[center, 352, 526, 0x9c977e],
				[center, 933, 526, 0x747865],
				[center, 848, 528, 0xb89e7c],
				[center, 497, 522, 0x9e9d8c],
				[center, 363, 120, 0xd4c4bb],
				[center, 913, 121, 0xd8c7bf],
				[center, 878, 124, 0xdfd4cb]
			]
		],
		oper: [
			[center, 1280, 720, 0, 0, 855 - 782, 431 - 415, 2000],
			[center, 1280, 720, 110, 120, 338, 549, 500],
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: 'BUFF界面',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			// 金币妖怪_判断挑战次数是否用完
			let point = thisScript.findMultiColor('开启的BUFF') || null
			if (point) {
				thisScript.helperBridge.regionClick([
					[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], 300]
				], thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true
			} else {
				thisScript.helperBridge.regionClick([thisOperator[0].oper[1]], thisScript.scheme.commonConfig.afterClickDelayRandom);
				let thisconf = thisScript.scheme.config['40'];
				if (thisconf && thisconf.scheme_switch_enabled) {
					thisScript.setCurrentScheme(thisconf.next_scheme);
					thisScript.myToast(`切换方案为[${thisconf.next_scheme}]`);
					thisScript.rerun();
				} else {
					thisScript.doOspPush(thisScript, { text: '脚本已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				}
				return false
			}
		}
	}
}