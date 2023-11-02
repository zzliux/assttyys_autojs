import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
// const center = 1;
const right = 2;

export class Func035 implements IFuncOrigin {
	id = 35;
	name = '金币妖怪_庭院进入组队';
	desc = '从庭院进入组队界面（请提前手动打开buff）';
	operator: IFuncOperatorOrigin[] = [{
		// 庭院未打开菜单
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[right, 1280, 720, 1168, 592, 1230, 690, 1200]
		]
	}, { // 庭院已打开菜单
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, {
		// 庭院已打开菜单，另外一种图标
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, {
		// 庭院已打开菜单，另另外一种图标
		desc: '庭院已打开菜单_另另外一种图标',
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// const thisconf = thisScript.scheme.config['35'];

		if (thisScript.oper({
			id: 38,
			name: '庭院进入组队',
			operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[3]],
		})) {
			//	点击组队计数清零
			thisScript.global.checked_yard_count = 1;
			return true;
		}

		return false;
	}
}