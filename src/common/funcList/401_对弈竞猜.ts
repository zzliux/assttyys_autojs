import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func401 implements IFuncOrigin {
	id = 401;
	name = '对弈竞猜';
	desc = '对弈竞猜选边';
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰'
	}, { // 1 庭院
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰'
	}, { // 2 选边
		desc: [
			1280, 720,
			[
				[left, 48, 39, 0xf4e3a2],
				[center, 575, 16, 0xf8f3e0],
				[center, 670, 14, 0xf8f3e0],
				[left, 80, 148, 0xa33939],
				[right, 1188, 157, 0x29437b],
				[left, 161, 359, 0xb78a61],
				[right, 1123, 349, 0xbd9168],
			]
		],
		oper: [
			[center, 1280, 720, 97, 351, 216, 457, 1000], // 左边
			[center, 1280, 720, 1053, 350, 1182, 450, 1000], // 右边
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 401,
			name: '庭院内',
			operator: [thisOperator[0], thisOperator[1]]
		})) {
			let point = thisScript.findMultiColor('对弈竞猜');
			if (!point) {
				point = thisScript.findMultiColor('右边侧栏下一页图标');
			}
			if (point) {
				console.log('右边侧栏下一页图标');
				const oper = [[
					point.x - 5,
					point.y - 5,
					point.x + 5,
					point.y + 5,
					1200
				]];
				thisScript.regionClick(oper);
				return true;
			}
		}
		if (thisScript.oper({
			id: 401,
			name: '对弈竞猜_选边',
			operator: [{ desc: thisOperator[2].desc }]
		})) {
			// 选边
			// if (true) {
			// 	thisScript.regionClick([thisOperator[2].oper[0]]);
			// } else {
			// 	thisScript.regionClick([thisOperator[2].oper[1]]);
			// }
			// return true;
		}
		return false;
	}
}
