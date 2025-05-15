import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func999 implements IFuncOrigin {
	id = 999;
	name = '式神育成';
	desc = '打开阴阳寮式神育成页面';
	operator: IFuncOperatorOrigin[] = [
		{ // 0 在首页打开菜单
			desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
			oper: [
				[right, 1280, 720, 1168, 592, 1230, 690, 1200]	// 在首页打开菜单
			]
		}, { // 1 点击阴阳寮
			desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
			oper: [
				[center, 1280, 720, 544, 612, 594, 661, 2000]	// 点击阴阳寮
			]
		}, { // 2 点击阴阳寮，另外一种图标
			desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
			oper: [
				[center, 1280, 720, 544, 612, 594, 661, 1200]	// 点击阴阳寮
			]
		}, { // 3 点击结界
			desc: [
				1280, 720,
				[
					[right, 1096, 630, 0xb1251f],
					[right, 1105, 662, 0xdbe3f1],
					[left, 45, 39, 0xf4e4a3],
					[center, 886, 644, 0xe0cbaa],
				]
			],
			oper: [
				[center, 1280, 720, 1067, 624, 1129, 689, 1200]
			]
		}, {
			// 4 庭院已打开菜单，另另外一种图标
			desc: '庭院已打开菜单_另另外一种图标',
			oper: [
				[center, 1280, 720, 544, 612, 594, 661, 1200]	// 点击阴阳寮
			]
		}, { // 5 判断_奖励弹窗
			desc:
				[
					1280, 720,
					[
						[center, 365, 240, 0x38281c],
						[center, 916, 254, 0x3f2d21],
						[center, 930, 404, 0x76542e],
						[center, 852, 400, 0xc3ab93],
						[center, 438, 398, 0xcab49b],
						[center, 702, 208, 0xffefcd],
					]
				],
			oper: [
				[center, 1280, 720, 370, 516, 930, 674, 600]
			]
		}, { // 6 判断_领用寮资金
			desc:
				[
					1280, 720,
					[
						[center, 390, 184, 0xcbb59e],
						[center, 888, 182, 0xcbb59e],
						[center, 896, 530, 0xcbb59e],
						[center, 392, 524, 0xcbb59e],
						[center, 684, 454, 0xf4b25f],
						[center, 586, 468, 0xf4b25f],
					]
				],
			oper: [
				[center, 1280, 720, 586, 442, 692, 470, 600] // 点击确认
			]
		}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '进入式神寄养结界',
			operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[4], thisOperator[5], thisOperator[6]]
		})) {
			return true;
		}
		let curCnt = 0;
		const maxCount = 3;
		while (thisScript.oper({
			name: '检测_阴阳寮主页',
			operator: [{
				desc: thisOperator[3].desc
			}]
		})) {
			const point = thisScript.findMultiColor('阴阳寮_奖励体力');
			if (point) {
				console.log('查找阴阳寮_奖励体力成功');
				const oper = [[
					point.x,
					point.y,
					point.x,
					point.y,
					1200
				]];
				thisScript.regionClick(oper);
				return true;
			}
			const point1 = thisScript.findMultiColor('阴阳寮_奖励金币');
			if (point1) {
				console.log('查找阴阳寮_奖励金币成功');
				const oper = [[
					point1.x,
					point1.y,
					point1.x,
					point1.y,
					1200
				]];
				thisScript.regionClick(oper);
				return true;
			}
			curCnt++;
			thisScript.keepScreen(false);
			if (curCnt >= maxCount) {
				return thisScript.oper({
					name: '点击结界',
					operator: [{ oper: thisOperator[3].oper }]
				});
			}
		}

		return false;
	}
}
