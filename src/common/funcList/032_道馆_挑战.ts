import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func032 implements IFuncOrigin {
	id = 32;
	name = '道馆_挑战';
	config = [{
		desc: '配置',
		config: [{
			name: 'after_fail_operation',
			desc: '挑战失败投票',
			type: 'list',
			data: ['不投票', '保留赏金', '再战道馆'],
			default: '不投票',
		}, {
			name: 'fail_exit',
			desc: '馆主无挑战次数时放弃突破',
			type: 'switch',
			default: 'true',
		}, {
			name: 'exit_second',
			desc: '不攻打第二阵容',
			type: 'switch',
			default: false,
		}, {
			name: 'exit_second_again',
			desc: '第二次打道馆时仍然不攻打第二阵容(仅在519开启时生效)',
			type: 'switch',
			default: false,
		}, {
			name: 'switch_team_group',
			desc: '打馆主时切换阵容_目标阵容的分组在第N个(输入数字,只支持7个以内,需打开315)',
			type: 'text',
			default: '0',
			value: '0',
		}, {
			name: 'switch_team_default',
			desc: '打馆主时切换阵容_目标阵容在第N个(输入数字,只支持4个以内)',
			type: 'text',
			default: '0',
			value: '0',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 检测_挑战是否可用
		desc: [1280, 720,
			[
				[left, 64, 482, 0x291522],
				[left, 33, 38, 0xd7c5a2],
				[left, 109, 24, 0xd7c5a2],
				[left, 179, 37, 0xd7c6a5],
				[center, 547, 34, 0x9a8958],
				[right, 1138, 561, 0xdbc5ae],
				[right, 1218, 641, 0xebc683],
				[right, 1167, 608, 0x272420]
			]
		],
		oper: [
			[right, 1280, 720, 1138, 561, 1218, 641, 1000]
		]
	}, { // 1 胜利_突破排名
		desc: [1280, 720,
			[
				[left, 221, 115, 0xf8f3e0],
				[left, 231, 115, 0x5a9ca5],
				[center, 182, 634, 0x520c19],
				[center, 316, 633, 0x930618],
				[center, 473, 85, 0xa11b11],
				[center, 510, 83, 0x9f1c12],
				[center, 486, 53, 0x7c1710],
				[center, 510, 59, 0xc6b49f],
				[center, 196, 101, 0x8bb9cb],
				[center, 233, 111, 0x5aa1a8],
			]
		],
		oper: [
			[right, 1280, 720, 1146, 82, 1266, 696, 3000],
		]
	}, { // 2 挑战结束(无论胜败)
		desc: [1280, 720,
			[
				[center, 698, 44, 0xe4c879],
				[center, 546, 42, 0x1e191c],
				[center, 703, 48, 0xdec879],
				[center, 600, 51, 0xe8c879],
				[center, 645, 684, 0xb87037],
				[right, 665, 683, 0xcaa585],
			]
		]
	}, { // 3 胜利_100进度
		desc: [
			1280, 720,
			[
				[center, 476, 485, 0xd2c1c1],
				[center, 424, 494, 0xca8642],
				[center, 605, 278, 0xf8f3e0],
				[center, 556, 274, 0xf7f2df],
				[center, 636, 448, 0xf8f3e0],
				[center, 461, 485, 0xbe2b1f],
			]
		],
		oper: [
			[right, 1280, 720, 1146, 82, 1266, 696, 3000],
		]
	}, { // 4 失败
		desc: [
			1280, 720,
			[
				[center, 476, 49, 0x514a5b],
				[center, 468, 74, 0x5d5468],
				[center, 501, 78, 0x5a5165],
				[left, 36, 41, 0x413b31],
				[left, 60, 535, 0x270a13],
				[center, 888, 153, 0xe4ded5],
				[center, 771, 111, 0x695f51],
			]
		],
		oper: [
			[center, 1280, 720, 1176, 454, 1255, 578, 1000],
		]
	}, { // 5 参与投票
		desc: [
			1280, 720,
			[
				[center, 655, 38, 0xe7c779],
				[left, 34, 40, 0xd6c4a1],
				[left, 107, 26, 0xd6c4a1],
				[left, 169, 24, 0xd6c4a1],
				[left, 61, 530, 0x8f2550],
				[right, 1119, 282, 0x341f19],
				[right, 1240, 281, 0x341e19],
			]
		],
		oper: [
			[right, 1280, 720, 1048, 237, 1144, 328, 800], // 保留赏金
			[right, 1280, 720, 1166, 235, 1256, 328, 800], // 再战道馆
		]
	}, { // 6 道馆页_挑战成功 和 2重复
		desc: [
			1280, 720,
			[
				[left, 64, 482, 0x291522],
				[left, 33, 38, 0xd7c5a2],
				[left, 109, 24, 0xd7c5a2],
				[left, 179, 37, 0xd7c6a5],
				[center, 718, 666, 0xe9e4d2],
				[center, 743, 669, 0xece7d5],
				[center, 584, 663, 0xf4efdd],
				[center, 641, 639, 0xd79e70],
				[center, 645, 684, 0xb87237],
			]
		]
	}, { // 7 第一阵容击破
		desc: [
			1280, 720,
			[
				[center, 500, 466, 0x805134],
				[center, 420, 352, 0xb3845c],
				[center, 561, 386, 0xd9be89],
				[center, 713, 394, 0xbf9f6b],
				[center, 770, 380, 0xe4d09f],
				[center, 866, 352, 0xb3835a],
				[center, 786, 459, 0x784a31],
			]
		],
		oper: [
			[left, 1280, 720, 22, 19, 52, 47, 1500], // 左上角返回
			[center, 1280, 720, 683, 401, 795, 442, 500], // 确认
		],
		retest: 1000,
	}, { // 8 放弃突破
		desc: [
			1280, 720,
			[
				[left, 60, 610, 0xad7b12],
				[left, 112, 624, 0x473a39],
				[left, 84, 651, 0xce992a],
				[left, 124, 640, 0x979da0],
				[left, 90, 668, 0x473a39],
			]
		],
		oper: [
			[center, 1280, 720, 54, 595, 132, 669, 1000],
			[center, 1280, 720, 677, 399, 797, 447, 10000],
		]
	}, { // 9 选道馆界面:今日挑战成功
		desc: [
			1280, 720,
			[
				[center, 518, 653, 0xddd9c8],
				[center, 533, 650, 0xdedac9],
				[center, 558, 649, 0xe8e4d2],
				[center, 577, 653, 0xc1beaf],
				[center, 599, 650, 0xbdbbad],
				[center, 622, 648, 0xe2decd],
				[center, 644, 649, 0x9d9c91],
				[center, 666, 649, 0xbab8aa],
				[center, 690, 648, 0xb8b6a7],
			]
		]
	}, { // 10  第一馆主界面_预设
		desc: [
			1280, 720,
			[
				[right, 1125, 220, 0xeee6d3],
				[right, 1153, 217, 0xe9e0cd],
				[right, 1194, 226, 0xe7decb],
				[right, 1269, 700, 0x231917],
				[left, 40, 675, 0xd97262],
				[left, 50, 677, 0xfffaf1],
			]
		],
		oper: [
			[center, 1280, 720, 41, 663, 73, 695, 1000],
		],
		retest: 2000
	}, { // 11 没次数和馆主标识
		desc: [1280, 720,
			[
				[right, 883, 75, 0x9f4c43],
				[right, 894, 116, 0x8f3e3c],
				[right, 1145, 595, 0x272420],
				[right, 1199, 588, 0x272420],
				[right, 1147, 605, 0xdabf99],
			]
		],
		oper: [
			[center, 1280, 720, 54, 595, 132, 669, 1000],
			[center, 1280, 720, 677, 399, 797, 447, 1000],
		]
	}, { // 12 放弃突破投票（投票人数需要超一半）
		desc: [1280, 720,
			[
				[left, 32, 40, 0xd6c5a4],
				[left, 107, 38, 0xd6c4a2],
				[center, 728, 35, 0x938051],
				[center, 889, 78, 0x9e4942],
				[right, 1115, 282, 0xe0c875],
				[right, 1232, 282, 0xd7b76a]
			]
		],
		oper: [
			[right, 1280, 720, 1055, 235, 1137, 328, 800], // 放弃突破
		]
	}, { // 13 选道馆界面:今日挑战0次机会
		desc: [1280, 720,
			[
				[center, 507, 642, 0xcbc7b6],
				[center, 536, 649, 0xe8e3d1],
				[center, 558, 650, 0xefead8],
				[center, 601, 647, 0xebe7d5],
				[right, 664, 649, 0xed8902],
				[right, 673, 649, 0xe88603],
				[right, 689, 651, 0xec8902],
			]
		],
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['32'];
		if (thisconf.fail_exit && thisScript.oper({
			id: 32,
			name: '检测_无次数退出',
			operator: [thisOperator[11]]
		})) {
			thisScript.global.shangyushe = true;
			return true;
		}
		if (thisScript.global.daoGuan_exit && thisScript.oper({
			id: 32,
			name: '检测_开始放弃突破',
			operator: [thisOperator[8]]
		})) {
			thisScript.global.daoGuan_exit = false;
			return true;
		}
		if (thisScript.global.daoguan_team && thisScript.oper({
			id: 32,
			name: '检测_第一阵容',
			operator: [thisOperator[10]]
		}) && (thisconf.switch_team_group !== '0')) {
			if (!thisScript.global.preset_once_team_groupNum) {
				thisScript.global.preset_once_team_groupNum = Number(thisconf.switch_team_group) - 1;
			}
			if (!thisScript.global.preset_once_team_defaultNum) {
				thisScript.global.preset_once_team_defaultNum = Number(thisconf.switch_team_default) - 1;
			}
			// 第一阵容切换预设完毕
			thisScript.global.daoguan_team = false;
			return true;
		}
		if (thisScript.oper({
			name: '检测_挑战是否可用',
			operator: [{
				desc: thisOperator[0].desc,
				oper: thisOperator[0].oper,
				retest: 1000,
			}]
		})) {
			return true;
		}
		// 框不点掉来耗掉道馆关闭
		if (thisScript.oper({
			id: 32,
			name: '检测_挑战失败',
			operator: [thisOperator[1], thisOperator[3], thisOperator[4]]
		})) {
			return true;
		}
		if (thisconf && thisconf.after_fail_operation && thisScript.oper({
			id: 32,
			name: '道馆_失败后抉择',
			operator: [{ desc: thisOperator[5].desc }]
		})) {
			// 投票后，倒计时结束会返回到小地图（补充：道馆突破成功倒计时会返回到庭院）
			thisScript.global.daoguan_team = true;
			thisScript.global.shangyushe = true;
			if (thisScript.superGlobal.daoguan_lose) {
				if (thisScript.superGlobal.liao_activity_Swith) {
					thisScript.superGlobal.liao_activity_Swith['a_ctivity_dojo_again'] = true;
				}
				thisScript.superGlobal.daoguan_lose = false;
			}
			if (thisconf.after_fail_operation === '保留赏金') {
				thisScript.regionClick([thisOperator[5].oper[0]]);
			} else if (thisconf.after_fail_operation === '再战道馆') {
				thisScript.regionClick([thisOperator[5].oper[1]]);
			}
			return true;
		}
		if (thisconf && thisScript.global.daoGuan_again && thisconf.exit_second && thisScript.oper({
			id: 32,
			name: '检测_第二阵容退出',
			operator: [thisOperator[7]]
		})) {
			// 第一次第二阵容后退出后开始放弃突破
			thisScript.global.daoGuan_exit = true;
			// 第一次道馆放弃突破后第二次道馆是否再次退出
			if (thisconf.exit_second_again) {
				thisScript.global.daoGuan_again = true;
			} else {
				thisScript.global.daoGuan_again = false;
			}
			return true;
		}
		if (thisScript.oper({
			name: '检测_投票放弃', // 管理发起投票放弃时，非管理人员的投票
			operator: [{ desc: thisOperator[12].desc }],
		})) {
			sleep(1500);
			return thisScript.oper({
				name: '点击放弃',
				operator: [{ oper: thisOperator[12].oper }],
			});
		}
		// 判断是否是僵尸寮道馆来选择是否切换方案
		if (thisScript.oper({
			id: 32,
			name: '检测_挑战结束',
			operator: [thisOperator[2], thisOperator[9], thisOperator[13]]
		})) {
			if (!thisScript.scheme.list.includes(519)) {
				thisScript.rerun('返回庭院');
			}
			return true;
		}
	}
}