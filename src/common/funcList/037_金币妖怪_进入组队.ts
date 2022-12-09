import { InterfaceFunc, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func037 implements InterfaceFunc {
	id = 37;
	name = '金币妖怪_进入组队';
	desc = '从庭院进入金币妖怪组队界面';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[left, 53, 27, 0xefd28f],
				[left, 40, 35, 0xf5edb3],
				[center, 425, 602, 0x9a3434],
				[center, 501, 616, 0x2e2922],
				[center, 530, 636, 0x473a2a],
				[right, 1224, 116, 0x714840],
				[right, 1227, 195, 0x794e45],
				[right, 1228, 219, 0x361615]
			]
		],
		oper: [
			[center, 1280, 720, 166, 613, 348, 650, 1],
			[center, 1280, 720, 170, 138, 351, 187, 1]
		]
	}];
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
				id: 36,
				name: '金币妖怪_进入组队',
				operator: [{
					desc: thisOperator[0].desc
				}]
			})) {
			// let point = thisScript.findMultiColor('金币妖怪_金币妖怪字样') || null;
			// if (!point) {
			thisScript.helperBridge.regionSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [100, 300], 3000);
			thisScript.helperBridge.regionClick([
				[154, 125, 356, 141, 1000]
			], thisScript.scheme.commonConfig.afterClickDelayRandom);
			return true;
			// } else if (point) {
			// 	let oper = [
			// 		[point.x, point.y, point.x + 10, point.y + 10, 1000]
			// 	];
			// 	thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
			// 	return true
			// } else {
			// 	return false
			// }
		}
	}
}