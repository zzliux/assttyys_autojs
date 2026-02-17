import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func700 implements IFuncOrigin {
	id = 700;
	name = '进入结界并领取食盒';
	desc = '';
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
				[center, 1280, 720, 1067, 624, 1129, 689, 2500]
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
		}, { // 7 desc:式神育成页 oper123:上阵N卡
			desc: [1280, 720,
				[
					[right, 1084, 83, 0xa7371d],
					[right, 1184, 203, 0x525252],
					[right, 968, 204, 0x505150],
					[right, 1127, 715, 0x3e2d1c],
					[right, 1185, 152, 0x414141],
				],
			],
			oper: [
				[center, 1280, 720, 40, 636, 90, 670, 700],
				[center, 1280, 720, 126, 303, 177, 343, 1000],
				[center, 1280, 720, 1034, 548, 1056, 576, 700],
				[left, 1280, 720, 23, 24, 60, 63, 1200], //	点击 退出
				[center, 1280, 720, 599, 301, 626, 389, 1000], //  点击 式神育成
			]
		}, { //	8 检测_是否有体力
			desc: [1280, 720,
				[
					[center, 841, 490, 0x10100c],
					[center, 812, 459, 0x10100e],
					[center, 869, 457, 0x10100c],
					[center, 842, 480, 0x822f16],
					[center, 832, 587, 0x2d2322],
				],
			],
			oper: [
				[center, 1280, 720, 821, 440, 861, 484, 1200], //	点击 体力
				[center, 1280, 720, 611, 476, 676, 519, 1200], //	点击领取
				[center, 1280, 720, 956, 151, 994, 179, 1200], //  点击关闭
				[center, 1280, 720, 956, 151, 994, 179, 1200], //  点击关闭
			],
		}, { //	9 检测_是否有经验
			desc: [1280, 720,
				[
					[center, 915, 487, 0x10100c],
					[center, 895, 456, 0x10100c],
					[center, 622, 308, 0xe2cbbf],
					[center, 918, 431, 0x10100c],
				],
			],
			oper: [
				[center, 1280, 720, 896, 440, 932, 480, 1200], //	点击 经验
				[center, 1280, 720, 611, 476, 676, 519, 1200], //	点击领取
			],
		}, { //	10 判断_是否为己方结界
			desc: [1280, 720,
				[
					[center, 611, 300, 0x0c0804],
					[center, 913, 305, 0x0c0804],
					[left, 318, 305, 0x0c0804],
					[center, 613, 294, 0xe1cf6b],
					[left, 202, 462, 0x10100c],
				],
			],
			oper: [
				[center, 1280, 720, 582, 270, 638, 400, 600], //  点击 式神育成
			],
		}, { // 11 育成候补式神
			desc: [1280, 720,
				[
					[center, 460, 258, 0xcbb59e],
					[center, 799, 268, 0xcbb59e],
					[center, 467, 429, 0xdf6851],
					[center, 700, 431, 0xf4b25f],
					[center, 641, 429, 0xcbb59c],
					[center, 560, 356, 0x3e2e10],
				]
			],
			oper: [
				[center, 1280, 720, 544, 351, 566, 369, 1000],
				[center, 1280, 720, 690, 414, 831, 453, 1000],
			]
		}, { // 12 退出结算_取消确认框
			desc: '退出结算_取消确认框',
			oper: [
				[center, 1280, 720, 444, 410, 598, 449, 1000],
				[center, 1280, 720, 955, 150, 988, 185, 1000],
			]
		}, { // 13 育成界面_全部
			desc: [1280, 720,
				[
					[left, 36, 642, 0x4e2e9f],
					[left, 60, 660, 0x3534b8],
					[left, 94, 650, 0x263e82],
					[left, 79, 635, 0x2c3d8e],
					[left, 65, 671, 0x2b2788],
				]
			],
			oper: [
				[center, 1280, 720, 40, 636, 90, 670, 700],
				[center, 1280, 720, 39, 292, 86, 329, 1000],
			]
		}, { // 14 经验已满
			desc: [1280, 720,
				[
					[center, 590, 478, 0xbce1f4],
					[right, 692, 480, 0xbee2f4],
					[left, 307, 494, 0xf9f9f1],
					[center, 507, 465, 0xeddccb],
					[center, 605, 390, 0xac380f],
				]
			],
			oper: [
				[center, 1280, 720, 951, 144, 993, 185, 1000],
			]
		}
	];
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
			sleep(500);
		}
		if (thisScript.oper({
			id: 700,
			name: '是否为己方结界',
			operator: [{ desc: thisOperator[10].desc }],
		})) {
			if (thisScript.oper({
				id: 700,
				name: '获取体力奖励',
				operator: [thisOperator[8]]
			})) {
				return true;
			}
			if (thisScript.global.shiHe_jingYan) {
				log('食盒经验已达上限，不再领取');
				return false;
			} else if (thisScript.oper({
				id: 700,
				name: '获取经验奖励',
				operator: [thisOperator[9]]
			})) {

				change();
				return true;
			}
		}
		function change() {
			log('开始更换满级式神');
			let curCnt = 0;
			const maxCount = 10;
			for (; ;) {
				thisScript.keepScreen();
				if (thisScript.oper({
					id: 700,
					name: '进入式神育成',
					operator: [thisOperator[10], thisOperator[11], thisOperator[12]]
				})) {
					curCnt = 0;
					continue;
				}
				if (thisScript.oper({
					id: 700,
					name: '判断_是否为己方结界_点击式神育成',
					operator: [{ desc: thisOperator[7].desc }]
				})) {
					const emptyPoint = thisScript.findMultiColorEx('寄养狗粮_空');
					if (emptyPoint && emptyPoint.length > 0) {
						const emptyCount = emptyPoint.length;
						if (thisScript.oper({
							id: 700,
							name: '式神育成_全部',
							operator: [{ desc: thisOperator[13].desc }]
						})) {
							thisScript.regionClick([thisOperator[7].oper[0]]);
							thisScript.regionClick([thisOperator[7].oper[1]]);
						}
						thisScript.keepScreen();
						const region = [910, 473, 1138, 568];
						const fullLevelPoint = thisScript.findMultiColorEx('寄养狗粮_满级标识', region);
						if (fullLevelPoint && fullLevelPoint.length > 0) {
							thisScript.regionClick(thisOperator[13].oper);
							thisScript.doPush(thisScript, { text: '全部N卡已满级' });
							curCnt = 0;
							continue;
						}
						for (let i = 0; i < emptyCount; i++) {
							thisScript.regionClick([thisOperator[7].oper[2]]);
						}
						curCnt = 0;
						continue;
					} else {
						console.log('没有空位了');
					}
					const fullLevelPoint = thisScript.findMultiColorEx('寄养狗粮_满级标识');
					if (fullLevelPoint && fullLevelPoint.length > 0) {
						console.log('有狗粮满级了,清空狗粮');
						for (let i = 0; i < fullLevelPoint.length; i++) {
							if (fullLevelPoint[i].y < 350) {
								const oper = [
									[
										fullLevelPoint[i].x,
										fullLevelPoint[i].y,
										fullLevelPoint[i].x + 20,
										fullLevelPoint[i].y + 20,
										500,
									],
								];
								console.log('清空满级狗粮', i);
								thisScript.regionClick(oper);
							}
						}
						curCnt = 0;
						continue;
					} else {
						// 狗粮没满级
						console.log('更换完毕');
						thisScript.regionClick([thisOperator[7].oper[3]]);
						break;
					}
				}
				if (thisScript.oper({
					id: 700,
					name: '经验已满',
					operator: [thisOperator[14]]
				})) {
					thisScript.global.shiHe_jingYan = true;
					break;
				}
				curCnt++;
				if (curCnt >= maxCount) {
					break;
				}
				sleep(300)
			}
		}
	}
}