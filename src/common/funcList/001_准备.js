const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
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
			name: 'greenType',
			desc: '绿标类型',
			type: 'list',
			data: ['关闭', '标A', '自定义坐标'],
			default: '关闭',
		}, {
			name: 'greenPosition',
			desc: '绿标坐标，仅绿标类型为自定义坐标时生效，格式x,y，实际点击时xy坐标会在±20内随机点击，如245,500',
			type: 'text',
			default: '245,500'
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
			[center, 1280, 720, 683,401, 795,442, 500], // 确认
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
	}, {
		// 手动状态
		desc: [1280,720,
			[[left,28,654,0x74615d],
			[left,43,662,0xf6f1de],
			[left,54,666,0x5c523e],
			[left,47,33,0xd7c5a2],
			[right,1263,32,0x7a5126],
			[left,34,23,0xd7c5a2],
			[right,1266,606,0x5e5970]]
		],
		oper: [
			[left, 1280, 720, 41,640, 86,674, 1000]
		]
	}, {
		
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
				operator: [thisOperator[2]]
			}, 1000)) {
				if (thisconf.greenType === '标A' || thisconf.greenType === '自定义坐标') {
					// 开启绿标
					if (thisScript.compareColorLoop(thisOperator[1].desc, 16000)) {
						if (thisconf.greenType === '标A') {
							let p = thisScript.findMultiColorLoop('绿标_标识_A', 5000);
							if (p) {
								let lx = p.x - thisOperator[1].oper[1][2] / 2;
								let ly = p.y + thisOperator[1].oper[0][3] - thisOperator[1].oper[1][3] / 2;
								let rx = p.x + thisOperator[1].oper[1][2] / 2;
								let ry = p.y + thisOperator[1].oper[0][3] + thisOperator[1].oper[1][3] / 2;
								let toClick = [
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
						} else if (thisconf.greenType === '自定义坐标') {
							let posPam = (thisconf.greenPosition || '').split(',');
							if (posPam.length !== 2) {
								toastLog('自定义坐标格式定义错误，请检查');
								return true;
							}
							let inX = parseInt(posPam[0]);
							let inY = parseInt(posPam[1]);
							if (Number.isNaN(inX) || Number.isNaN(inY)) {
								toastLog('自定义坐标格式定义错误，请检查');
								return true;
							}
							let toClick = [
								Math.max(inX - 20, 0),
								Math.max(inY - 20, 0),
								inX + 20,
								inY + 20,
								4000
							]
							thisScript.helperBridge.regionClick([toClick], thisScript.scheme.commonConfig.afterClickDelayRandom);
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
}
