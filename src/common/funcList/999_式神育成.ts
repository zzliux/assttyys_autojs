import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func999 implements InterfaceFuncOrigin {
	id = 999;
	name = '式神育成';
	desc = '打开阴阳寮式神育成页面';
	operator: InterfaceFuncOperatorOrigin[] = [
		{ // 在首页打开菜单
			desc: [1280, 720,
				[[right, 1211, 606, 0x885f46],
				[right, 1205, 624, 0x987777],
				[right, 1208, 646, 0xaf4949],
				[right, 1175, 680, 0xb08e7d]]
			],
			oper: [
				[right, 1280, 720, 1168, 592, 1230, 690, 1200]	// 在首页打开菜单
			]
		}, { // 点击阴阳寮
			desc: [1280, 720,
				[[center, 560, 608, 0xbc3433],
				[center, 542, 639, 0x7b1515],
				[center, 575, 646, 0xc1b8b0],
				[center, 590, 638, 0xb07970]]
			],
			oper: [
				[center, 1280, 720, 544, 612, 594, 661, 1200]	// 点击阴阳寮
			]
		}, { // 点击阴阳寮，另外一种图标
			desc: [1280, 720,
				[
					[right, 1223, 662, 0xdbcbc7],
					[right, 1155, 41, 0xd7b188],
					[center, 451, 631, 0xe8e4e1],
					[center, 673, 651, 0xdb8b3f],
				]
			],
			oper: [
				[center, 1280, 720, 544, 612, 594, 661, 1200]	// 点击阴阳寮
			]
		}, { // 点击结界
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
		}, { //	判断_是否为己方结界
			desc: [1280, 720,
				[[center, 611, 300, 0x0c0804],
				[center, 913, 305, 0x0c0804],
				[left, 318, 305, 0x0c0804],
				[center, 613, 294, 0xe1cf6b],
				[left, 202, 462, 0x10100c]]
			],
			oper: [
				[center, 1280, 720, 582, 270, 638, 400, 600]
			]
		}, { // 判断_奖励弹窗
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
		}, { // 判断_领用寮资金
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
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '进入式神寄养结界',
			operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[4], thisOperator[5], thisOperator[6]]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_阴阳寮主页',
			operator: [{
				desc: thisOperator[3].desc
			}]
		})) {
			let point = thisScript.findMultiColor('阴阳寮_奖励体力');

			if (point) {
				console.log(`查找阴阳寮_奖励体力成功`);
				let oper = [[
					point.x - 1,
					point.y - 1,
					point.x + 1,
					point.y + 1,
					1200
				]];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			}

			let point1 = thisScript.findMultiColor('阴阳寮_奖励金币');

			if (point1) {
				console.log(`查找阴阳寮_奖励金币成功`);
				let oper = [[
					point1.x - 1,
					point1.y - 1,
					point1.x + 1,
					point1.y + 1,
					1200
				]];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			}

			if (thisScript.global.checked_yard_count > 3) {
				thisScript.global.checked_yard_count = 0;
				return thisScript.oper({
					name: '点击阴阳寮',
					operator: [{
						oper: thisOperator[3].oper
					}]
				});
			} else {
				sleep(1500);
				if (!thisScript.global.checked_yard_count) {
					thisScript.global.checked_yard_count = 1;
				} else {
					thisScript.global.checked_yard_count += 1;
				}
			}
		}

		return false;
	}
}
