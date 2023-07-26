import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func029 implements IFuncOrigin {
	id = 29;
	name = '庭院进入探索地图';
	desc = '请使用默认庭院皮肤，启用该功能后在庭院下会自动进入探索地图界面';
	operator: IFuncOperatorOrigin[] = [{
		// 庭院未打开菜单
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[left, 1280, 720, 0, 0, 32, 63, 1000]
		]
	}, { // 庭院已打开菜单
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰'
	}, {
		// 庭院已打开菜单，另外一种图标
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰'
	}, {
		// 庭院已打开菜单，另另外一种图标
		desc: '庭院已打开菜单_另另外一种图标'
	}]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '庭院判断',
			operator: [{
				desc: thisOperator[0].desc
			}, {
				desc: thisOperator[1].desc
			}, {
				desc: thisOperator[2].desc
			}, {
				desc: thisOperator[3].desc
			}]
		})) {
			let point = thisScript.findMultiColor('庭院_探索灯笼');
			if (point) {
				let oper = [
					[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]
				];
				thisScript.regionClick(oper);
				return true;
			} else {
				return false
			}
		}
		return false;
	}
}