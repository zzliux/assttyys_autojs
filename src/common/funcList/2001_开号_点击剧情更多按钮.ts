import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
export class Func2001 implements InterfaceFuncOrigin {
	id = 2001;
	name = '开号_点击剧情更多按钮';
	desc = '仨点的按钮，在剧情与庭院场景中找到并点击';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[left, 38, 31, 0xd7c5a2],
				[left, 25, 40, 0x2e2518],
				[left, 104, 33, 0xd4c4a3],
				[left, 109, 20, 0x2e1d0c],
			]
		],
		oper: [
			// 框框区域
			[left, 1280, 720, 0, 0, 41, 42, -1], // [1222,333,1263,375]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '开号_剧情场景判断',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			let point = thisScript.findMultiColor('开号_剧情更多按钮');
			if (point) {
				let clickRegion = [
					[
						point.x,
						point.y,
						point.x + thisOperator[0].oper[0][2],
						point.y + thisOperator[0].oper[0][3],
						500,
					]
				];
				thisScript.helperBridge.regionClick(clickRegion, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			}
		}
		return false;
	}
}