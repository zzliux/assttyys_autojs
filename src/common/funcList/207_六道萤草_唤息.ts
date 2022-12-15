import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func207 implements InterfaceFuncOrigin {
	id = 207;
	name = '六道萤草_唤息';
	desc = '召唤宁息商店，应放在“204 六道萤草_选事件”前';
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 香行域 唤息
		desc: [1280, 720,
			[
				[left, 20, 43, 0xf0f6f7],
				[left, 252, 38, 0x583716],
				[left, 66, 649, 0x3d4f5c],
				[right, 1255, 584, 0x403a34],
				[left, 46, 656, 0xcdbb90],
				[right, 1166, 634, 0x5c4932],
				[right, 1226, 638, 0x5c4830],
				[right, 1213, 645, 0xf6edcb],
				[right, 1178, 656, 0xf0ecc5],
			]
		],
		oper: [
			[right, 1280, 720, 1171, 609, 1227, 674, 500], // 唤息
		]
	}, {
		// x回合后迎战持国天区域
		oper: [
			[right, 1280, 720, 1044, 218, 1279, 279, -1]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		if (!thisScript.global.d6NextEvent && thisScript.oper({
			id: 207,
			name: '六道萤草_唤息_香行域界面判断',
			operator: [{
				desc: thisOperator[0].desc,
			}]
		})) {
			const r = thisScript.findText('^1回合.+', 0, thisOperator[1].oper[0], '包含');
			if (r.length) {
				thisScript.helperBridge.regionClick(thisOperator[0].oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				thisScript.global.d6NextEvent = ['宁息'];
				return true;
			}
		}
		return false;
	}
}