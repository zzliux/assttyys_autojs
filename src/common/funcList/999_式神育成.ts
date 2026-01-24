import {
	IFuncOrigin,
	IFuncOperatorOrigin,
	IFuncOperator,
} from '@/interface/IFunc';
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
		{
			// 0 在首页打开菜单
			desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
			oper: [
				[right, 1280, 720, 1168, 592, 1230, 690, 1200], // 在首页打开菜单
			],
		},
		{
			// 1 点击阴阳寮
			desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
			oper: [
				[center, 1280, 720, 544, 612, 594, 661, 1200], // 点击阴阳寮
			],
		},
		{
			// 2 点击阴阳寮，另外一种图标
			desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
			oper: [
				[center, 1280, 720, 544, 612, 594, 661, 1200], // 点击阴阳寮
			],
		},
		{
			// 3 阴阳寮主界面_点击结界
			desc: [1280, 720,
				[
					[right, 1096, 630, 0xb1251f],
					[right, 1105, 662, 0xdbe3f1],
					[left, 45, 39, 0xf4e4a3],
					[center, 886, 644, 0xe0cbaa],
				],
			],
			oper: [[center, 1280, 720, 1067, 624, 1129, 689, 1200]],
		},
		{
			// 4 庭院已打开菜单，另另外一种图标
			desc: '庭院已打开菜单_另另外一种图标',
			oper: [
				[center, 1280, 720, 544, 612, 594, 661, 1200], // 点击阴阳寮
			],
		},
		{
			// 5 判断_奖励弹窗
			desc: [
				1280,
				720,
				[
					[center, 365, 240, 0x38281c],
					[center, 916, 254, 0x3f2d21],
					[center, 930, 404, 0x76542e],
					[center, 852, 400, 0xc3ab93],
					[center, 438, 398, 0xcab49b],
					[center, 702, 208, 0xffefcd],
				],
			],
			oper: [[center, 1280, 720, 370, 516, 930, 674, 600]],
		},
		{
			// 6 判断_领用寮资金
			desc: [
				1280,
				720,
				[
					[center, 390, 184, 0xcbb59e],
					[center, 888, 182, 0xcbb59e],
					[center, 896, 530, 0xcbb59e],
					[center, 392, 524, 0xcbb59e],
					[center, 684, 454, 0xf4b25f],
					[center, 586, 468, 0xf4b25f],
				],
			],
			oper: [
				[center, 1280, 720, 586, 442, 692, 470, 600], // 点击确认
			],
		}, {
			// 7 阴阳寮主界面_植树活动 关闭
			desc: [1280, 720,
				[
					[right, 1096, 630, 0x350b09],
					[right, 1105, 662, 0x424448],
					[left, 45, 39, 0x494431],
					[center, 886, 644, 0x433d33],
					[center, 460, 118, 0xefdacb],
					[center, 781, 109, 0x8e684a],
					[center, 794, 108, 0xe5cc92],
					[center, 794, 472, 0xf3e3d8],
					[center, 512, 581, 0xefd9c6],
				]
			],
			oper: [
				[center, 1280, 720, 782, 89, 812, 126, 1000],
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (
			thisScript.oper({
				id: 999,
				name: '进入式神寄养结界',
				operator: [
					thisOperator[0],
					thisOperator[1],
					thisOperator[2],
					thisOperator[4],
					thisOperator[5],
					thisOperator[6],
					thisOperator[7],
				],
			})
		) {
			return true;
		}
		// 点击10都点不中就直接跳过不点了
		if (thisScript.global.checked_yard_count_999 > 10) {
			thisScript.global.checked_yard_count_999 = 0;
			return thisScript.oper({
				id: 999,
				name: '点击阴阳寮',
				operator: [
					{
						desc: thisOperator[3].desc,
						oper: thisOperator[3].oper,
					},
				],
			});
		} else {
			sleep(1500);
			if (!thisScript.global.checked_yard_count_999) {
				thisScript.global.checked_yard_count_999 = 1;
			} else {
				thisScript.global.checked_yard_count_999 += 1;
			}
		}

		if (
			thisScript.oper({
				id: 999,
				name: '检测_阴阳寮主页',
				operator: [
					{
						desc: thisOperator[3].desc,
					},
				],
			})
		) {
			const point = thisScript.findMultiColor('阴阳寮_奖励体力');

			if (point) {
				console.log('查找阴阳寮_奖励体力成功');
				const oper = [
					[point.x - 5, point.y - 5, point.x + 5, point.y + 5, 1200],
				];
				thisScript.regionClick(oper);
				return true;
			}

			const point1 = thisScript.findMultiColor('阴阳寮_奖励金币');

			if (point1) {
				console.log('查找阴阳寮_奖励金币成功');
				const oper = [
					[point1.x - 5, point1.y - 5, point1.x + 5, point1.y + 5, 1200],
				];
				thisScript.regionClick(oper);
				return true;
			}
		}

		return false;
	}
}
