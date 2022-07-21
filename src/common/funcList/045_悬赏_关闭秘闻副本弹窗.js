const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 45,
	name: '悬赏_关闭秘闻副本弹窗',
	checked: false,
	operator: [
		// 秘闻副本关闭
		{
			desc: [1280, 720,
				[
					[right, 1082, 627, 0xdd5825],
					[right, 1182, 215, 0x754420],
					[right, 1181, 118, 0xeecccc],
					[center, 637, 48, 0x79582f],
					[center, 960, 81, 0x332317],
					[right, 1171, 607, 0x795128],
					[right, 1037, 608, 0xa57d44],
					[right, 1195, 325, 0xfff7c6]
				]
			],
			oper: [
				[left, 1280, 720, 1158, 98, 1193, 135, 1000],
			]
		},
	],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
				name: '悬赏_秘闻副本弹窗界面',
				operator: [{
					desc: thisOperator[0].desc
				}]
			})) {
			let point = thisScript.findMultiColor('悬赏_副本关闭按钮') || null
			if (point) {
				thisScript.helperBridge.regionClick([
					[point.x, point.y, point.x + 1, point.y + 1, 2000]
				], thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true
			} else {
				return false
			}
		} else {
			return false
		}
	}
}