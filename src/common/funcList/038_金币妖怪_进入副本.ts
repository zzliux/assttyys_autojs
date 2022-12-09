import { InterfaceFunc, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func038 implements InterfaceFunc {
	id = 38;
	name = '金币妖怪_进入副本 ';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[right, 1211, 692, 0xfbab4a],
				[right, 1186, 599, 0xf0df9b],
				[right, 1186, 643, 0xddcc77],
				[right, 1262, 679, 0xddbb66],
				[right, 1258, 642, 0xeecc77],
				[right, 1254, 690, 0xf8f3e0],
				[right, 1254, 707, 0xefead8],
				[right, 1272, 707, 0xb9b5a5],
				[right, 1264, 693, 0xe3dfce],
				[left, 55, 662, 0xf9f9f1],
				[left, 49, 634, 0xcc3344],
				[left, 102, 37, 0xf8f3e0]
			]
		],
		oper: [
			[center, 1280, 720, 1186, 608, 1253, 679, 2000],
		]
	}];
	operatorFunc(thisScript, thisOperator) {
		// 判断是不是组队界面并且判断队伍是否有人
		if (thisScript.oper({
				name: '金币妖怪_组队界面',
				operator: [{
					desc: thisOperator[0].desc
				}]
			})) {
			let point2 = thisScript.findMultiColor('金币妖怪_判断队伍是否有人') || null;
			if (!point2) {
				thisScript.helperBridge.regionClick([
					[1191, 610, 1245, 674, 1000]
				], thisScript.scheme.commonConfig.afterClickDelayRandom);
			} else {
				return false
			}
		} else {
			return false
		}
	}
}