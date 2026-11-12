import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
// const right = 2;

export class Func501 implements IFuncOrigin {
	id = 501;
	name = '打开BUFF界面';
	desc = '支持从探索地图、庭院、组队打开buff界面';
	config = [{
		desc: '',
		config: [{
			name: 'once',
			desc: '开关过buff后不再打开buff界面',
			type: 'switch',
			default: false
		}],
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 0 探索地图打开buff界面
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 239, 25, 275, 67, 1500], // 超鬼王期间多了个门票，把挑战券位置左移了，结束后这个还得改回来 412, 32, 441, 62,
		]
	}, {
		// 1 庭院
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 359, 45, 396, 74, 1500]
		]
	}, {
		// 2 组队界面
		desc: [1280, 720,
			[
				[center, 642, 3, 0x101011],
				[left, 42, 38, 0xf7e8aa],
				[center, 641, 52, 0x080c0a],
				[center, 648, 571, 0x422c29],
				[center, 816, 54, 0xfefbe4],
			]
		],
		oper: [
			[left, 1280, 720, 35, 27, 62, 55, 600] // [center, 1280, 720, 799, 38, 828, 76, 1500] 不管是队长还是队员，先退队伍在关闭buff
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['501'];
		if (thisconf?.once && (thisScript.runTimes['40'] > 0 || thisScript.runTimes['50'] > 0)) {
			return false;
		} else {
			if (thisScript.oper({
				id: 501,
				name: '打开buff界面',
				operator: thisOperator.slice(0)
			})) {
				return true;
			}
		}
	}
}