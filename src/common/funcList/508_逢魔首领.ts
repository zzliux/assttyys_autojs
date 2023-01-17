import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func508 implements InterfaceFuncOrigin {
	id = 508;
	name = '逢魔首领';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [	//	检测_现世逢魔奖励是否已领取
			1280, 720,
			[
				[right, 1230, 210, 0x767676],
				[right, 1244, 227, 0x989898],
				[right, 1256, 248, 0x434343],
				[right, 1230, 248, 0x774a4a],
				[right, 1242, 248, 0x494949]
			]
		],
		oper: [
			[right, 1280, 720, 1002, 645, 1045, 693, 1000]  // 进入首领按钮
		]
	}, {	// 检测_是否找到逢魔首领
		desc: [
			1280, 720,
			[
				[center, 685, 398, 0x8c0717],
				[center, 620, 396, 0x540c18],
				[center, 690, 397, 0x930818],
			]
		],
		oper: [
			[center, 1280, 720, 579, 303, 702, 407, 1200]	//	点击逢魔首领
		]
	}, {	// 检测_首领BOSS挑战页
		desc: [
			1280, 720,
			[
				[left, 111, 57, 0xc3a765],
				[left, 111, 245, 0xd4cbc3],
				[left, 161, 673, 0xc3a561],
				[center, 627, 621, 0x1f1b18],
				[right, 1101, 265, 0xc7c5bc],
				[right, 1004, 673, 0xad855e],
			]
		],
		oper: [
			[right, 1280, 720, 1058, 558, 1162, 640, 1200],	//	点击集结挑战
			[right, 1280, 720, 1120, 59, 1164, 92, 1200],	//	点击关闭按钮
		]
	},
	{	// 检测_是否为提示框
		desc: [
			1280, 720,
			[
				[right, 1058, 558, 0xcfc3b2],
				[center, 815, 422, 0xf4b25f],
				[center, 585, 433, 0xdf6851],
				[center, 843, 336, 0xcbb59e],
				[left, 117, 214, 0x595450],
			]
		],
		oper: [
			[center, 1280, 720, 551, 343, 577, 371, 1200],	//	点击确认
			[center, 1280, 720, 677, 407, 838, 456, 1200]
		]
	},
	{
		desc: [		//	检测_点击进入战斗
			1280, 720,
			[
				[left, 174, 36, 0xd5c5a4],
				[left, 108, 26, 0xd7c5a2],
				[left, 48, 32, 0xd7c5a2],
				[center, 687, 484, 0xbeab92],
				[center, 846, 631, 0x8b4243],
				[right, 1022, 609, 0xc73e4d],
			]
		],
		oper: [
			[center, 1280, 720, 597, 465, 689, 539, 1200]	//	点击进入战斗
		]
	},
	{
		desc: 	//	检测_战斗页结算页
		[	
			1280, 720,
			[
				[center, 530, 115, 0xd3c4ae],
				[left, 150, 197, 0xf6f1de],
				[center, 888, 79, 0xdcc499],
				[center, 781, 443, 0xf8f3e0],
				[center, 639, 113, 0xf34c38],
			]
		],
		oper: [
			[right, 1280, 720, 1217, 164, 1273, 706, 1200]	//	点击空白处
		]
	},
	{
		desc:	//	检测_集结页结算页
		[
			1280, 720,
			[
				[center, 530, 115, 0xd3c4ae],
				[left, 157, 210, 0xf8f3e0],
				[center, 888, 79, 0xdcc499],
				[center, 789, 456, 0xf8f3e0],
				[center, 639, 113, 0xf34c38],
			]
		]
	},
	{
		desc:	// 结束_集结页结算捡垃圾
		[
			1280, 720,
			[
				[left, 106, 25, 0xd7c5a2],
				[left, 33, 21, 0xd7c5a2],
				[left, 186, 38, 0xd7c5a2],
				[left, 63, 493, 0xeecfad],
				[left, 44, 503, 0x981c10],
				[left, 27, 544, 0xf6f1de],
				[right, 1042, 621, 0xcf4955],
				[center, 845, 634, 0x944945],
				[right, 1179, 621, 0xe0d0cf],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		let thisConf = thisScript.scheme.config['508'];

		let point = thisScript.findMultiColor('逢魔_捡垃圾');

		if (point) {
			console.log(`逢魔_捡垃圾`);
			let oper = [[
				point.x - 2,
				point.y - 2,
				point.x + 2,
				point.y + 2,
				1200
			]];
			thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
		}
		
		if (thisScript.oper({
			name: '检测_是否找到逢魔首领',
			operator: [{
				desc: thisOperator[1].desc,
				oper: thisOperator[1].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_首领BOSS挑战页',
			operator: [{
				desc: thisOperator[2].desc,
				oper: [thisOperator[2].oper[0]]
			}]
		})) {
			// 做延时检测 防止登陆后的弹窗
			if (thisScript.global.checked_yard_count === 5) {
				thisScript.global.checked_yard_count = undefined;
				console.log('无法点击首领BOSS集结挑战，退出集结挑战页');
				thisScript.oper({
					name: '检测_关闭首领BOSS',
					operator: [{
						oper: [thisOperator[2].oper[1]]
					}]
				})
			} else {
				sleep(1500);
				if (!thisScript.global.checked_yard_count) {
					thisScript.global.checked_yard_count = 1;
				} else {
					thisScript.global.checked_yard_count += 1;
				}
			}

			return true;
		}

		if (thisScript.oper({
			name: '检测_是否为提示框',
			operator: [{
				desc: thisOperator[3].desc,
				oper: thisOperator[3].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_点击进入战斗',
			operator: [{
				desc: thisOperator[4].desc,
				oper: thisOperator[4].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_结算页',
			operator: [{
				desc: thisOperator[5].desc,
				oper: thisOperator[5].oper
			}]
		}) || thisScript.oper({
			name: '检测_结算页',
			operator: [{
				desc: thisOperator[6].desc,
				oper: thisOperator[5].oper
			}]
		})) {
			thisScript.global.fm_kiss_boss_flag = true;
			return true;
		}

		if (thisScript.oper({
			name: '检测_结算页',
			operator: [{
				desc: thisOperator[7].desc
			}]
		})) {
			thisScript.global.fm_kiss_boss_flag = true;
			return true;
		}

		if (thisScript.oper({
			name: '检测_现世逢魔奖励是否已领取',
			operator: [{
				desc: thisOperator[0].desc,
			}]
		})) {
			if (thisScript.global.fm_kiss_boss_flag) {
				const next_scheme = '返回庭院';
				thisScript.setCurrentScheme(next_scheme);
				thisScript.myToast(`切换方案为[${next_scheme}]`);
				thisScript.rerun();
			} else {
				return thisScript.oper({
					name: '检测_点击寻找首领按钮',
					operator: [{
						oper: thisOperator[0].oper,
					}]
				})
			}
		}


		return false;
	}
}