import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func504 implements IFuncOrigin {
	id = 504;
	name = '庭院进入现世逢魔界面';
	desc = '从庭院进入现世逢魔界面';
	operator: IFuncOperatorOrigin[] = [
		{
			// 0 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
			desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
			oper: [
				[left, 1280, 720, 0, 0, 20, 20, 1000]
			]
		},
		{
			// 1 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
			desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		},
		{
			//	2 页面是否为庭院(菜单已展开)另一种图标 御祝图标 只支持默认庭院皮肤与默认装饰
			desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
		},
		{
			// 3 庭院已打开菜单，另另外一种图标
			desc: '庭院已打开菜单_另另外一种图标',
		},
		{	// 检测_町中
			desc:
				[
					1280, 720,
					[
						[right, 1053, 441, 0x8c8888],
						[right, 1096, 229, 0xa8a196],
						[right, 1040, 239, 0xb6b0bb],
						[right, 1220, 48, 0xcba375],
						[right, 1155, 38, 0xd7b28a],
					]
				],
			oper: [
				[center, 1280, 720, 622, 145, 661, 198, 1200]	//	点击逢魔灯笼
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// const thisconf = thisScript.scheme.config['504'];

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
			const point = thisScript.findMultiColor('庭院_町中竖牌');
			if (point) {
				const oper = [
					[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]
				];
				thisScript.regionClick(oper);
				sleep(2000);
				return true;
			}
		}

		// const point = thisScript.findMultiColor('町中_逢魔之时灯笼');
		// if (point) {
		// 	let oper = [
		// 		[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]
		// 	];
		// 	thisScript.regionClick(oper);
		// 	sleep(2000);

		// 	return false;
		// }

		if (thisScript.oper({
			name: '町中_逢魔之时灯笼',
			operator: [thisOperator[4]]
		})) {
			return true;
		}

		return false;
	}
}