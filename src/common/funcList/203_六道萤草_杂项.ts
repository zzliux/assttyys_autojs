import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func203 implements IFuncOrigin {
	id = 203;
	name = '六道萤草_杂项';
	desc = '包含香行御点击开启按钮、鏖战之屿选技能怪挑战、混沌之屿选精英怪挑战、选择buff后的获得确认等';
	config = [{
		desc: '配置',
		config: [{
			name: 'ospPush',
			desc: '结束时使用ospPush推送结果',
			type: 'switch',
			default: false,
		}, {
			name: 'overTimes',
			desc: '挂机局数，完成后自动停止脚本，0表示一直刷',
			type: 'integer',
			default: '0'
		}],
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 香行御阵容点击开启按钮
		desc: [1280, 720,
			[
				[left, 22, 40, 0xf1f9f9],
				[left, 109, 54, 0x537c85],
				[right, 1205, 602, 0x384949],
				[right, 1155, 608, 0xffefb2],
				[right, 1173, 605, 0xfff1b5],
				[right, 1191, 616, 0x2b3c4c],
				[right, 1209, 654, 0xffebae],
				[right, 1169, 644, 0x273748],
				[right, 1184, 478, 0xdeceb5],
				[left, 66, 619, 0x493b90],
				[right, 1218, 613, 0x3a4a52],
			]
		],
		oper: [
			[right, 1280, 720, 1140, 581, 1221, 677, 500],
		],
	}, {
		// 评分界面
		desc: [1280, 720,
			[
				[right, 950, 656, 0x595c59],
				[right, 1205, 629, 0x5c7d75],
				[left, 74, 666, 0x505250],
				[center, 420, 571, 0x999b96],
				[left, 45, 36, 0x011821],
				[center, 787, 191, 0x33656d],
				[center, 1100, 78, 0x263636],
			]
		],
		oper: [
			[right, 1280, 720, 872, 146, 1197, 539, 500],
		],
		retest: 800
	}, {
		// 香行御点击开启按钮
		desc: [1280, 720,
			[
				[left, 21, 44, 0xeff4f7],
				[left, 253, 39, 0x583716],
				[right, 1203, 602, 0x3e4b4d],
				[right, 1160, 609, 0xfbe5ae],
				[right, 1155, 651, 0x354656],
			]
		],
		oper: [
			[right, 1280, 720, 1134, 590, 1203, 669, 1200],
		],
		retest: 1000,
	}, {
		// 香行御萤草点击开启按钮
		desc: [1280, 720,
			[
				[left, 22, 40, 0xf1f9f9],
				[left, 109, 54, 0x537c85],
				[right, 1205, 602, 0x384949],
				[right, 1177, 617, 0xffecaf],
				[left, 125, 67, 0x548696],
			]
		],
		oper: [
			[right, 1280, 720, 1140, 581, 1221, 677, 1200],
		],
		retest: 1000,
	}, {
		// 鏖战之屿 选技能怪
		desc: [1280, 720,
			[
				[center, 740, 225, 0x58657b],
				[center, 752, 251, 0xbcdef9],
				[left, 26, 43, 0xeaf2f2],
				[left, 251, 41, 0x583715],
			]
		],
		oper: [
			[center, 1280, 720, 815, 263, 878, 381, 200],
		]
	}, {
		// 鏖战之屿 挑战
		desc: [1280, 720,
			[
				[left, 24, 42, 0xedf5f5],
				[left, 252, 39, 0x583716],
				[right, 1205, 602, 0x384747],
				[right, 1169, 646, 0x2a3a4b],
				[right, 1163, 609, 0xffeeaa],
				[right, 1141, 598, 0xfff4ba],
				[right, 1210, 650, 0xfeedba],
				[left, 53, 645, 0x344957],
			]
		],
		oper: [
			[right, 1280, 720, 1137, 597, 1213, 676, 200],
		]
	}, {
		// 混沌之屿 精英怪
		desc: [1280, 720,
			[
				[left, 24, 42, 0xedf5f5],
				[left, 252, 42, 0x583614],
				[center, 644, 202, 0x79582f],
				[center, 629, 226, 0x725930],
				[center, 630, 218, 0x927137],
			]
		],
		oper: [
			[center, 1280, 720, 708, 246, 766, 365, 200],
		]
	}, {
		// 转换成功确认
		desc: [1280, 720,
			[
				[center, 542, 152, 0xffe99c],
				[center, 738, 189, 0xfff2c7],
				[center, 658, 171, 0xffefb8],
				[center, 616, 177, 0xffefbd],
				[center, 635, 202, 0xdcca7c],
			]
		],
		oper: [
			[right, 1280, 720, 913, 129, 1245, 648, 500],
		]
	}, {
		// 仿造成功确认
		desc: [1280, 720,
			[
				[center, 537, 160, 0xffe9a7],
				[center, 624, 174, 0xffeebb],
				[center, 741, 186, 0xfff1c7],
				[center, 710, 176, 0xffefbc],
				[center, 675, 181, 0xffefbd],
			]
		],
		oper: [
			[right, 1280, 720, 913, 129, 1245, 648, 500],
		]
	}, {
		// 幸运宝匣
		desc: [1280, 720,
			[
				[left, 25, 42, 0xe9f1f1],
				[left, 253, 41, 0x583715],
				[center, 637, 248, 0x293b45],
				[center, 646, 285, 0x2d404b],
				[center, 646, 241, 0x273a46],
			]
		],
		oper: [
			[center, 1280, 720, 698, 282, 756, 396, 200],
		]
	}, {
		// 	// 宁息直接退出
		// 	desc: [1280, 720,
		// 		[
		// 			[right, 1214, 180, 0x274658],
		// 			[right, 1218, 251, 0x334f5b],
		// 			[right, 1221, 631, 0xdacaa9],
		// 			[left, 26, 42, 0xeaf2f2],
		// 			[left, 252, 39, 0x583716],
		// 			[left, 72, 634, 0x384e5c],
		// 			[right, 1196, 632, 0xd1c1a0],
		// 		]
		// 	],
		// 	oper: [
		// 		[right, 1280, 720, 1187, 600, 1241, 670, 500],
		// 		[center, 1280, 720, 676, 405, 842, 460, 500],
		// 	]
		// }, {
		// 转换，直接退
		desc: [1280, 720,
			[
				[left, 24, 44, 0xecf3f7],
				[left, 252, 40, 0x583716],
				[right, 1234, 28, 0x323139],
				[left, 69, 644, 0x2b4751],
				[right, 944, 679, 0x0e1222],
				[right, 1216, 668, 0x111b1f],
			]
		],
		oper: [
			[right, 1280, 720, 15, 17, 66, 69, 500],
			[center, 1280, 720, 676, 405, 842, 460, 1000],
		]
	}, {
		// 结算-获得经验
		desc: [1280, 720,
			[
				[center, 599, 453, 0xeceae6],
				[center, 582, 139, 0xffeebb],
				[center, 634, 160, 0xdfc878],
				[center, 673, 149, 0xffeebb],
				[center, 281, 420, 0xd2d2c8],
				[center, 933, 448, 0xb0b2a9],
			]
		],
		oper: [
			[right, 1280, 720, 872, 146, 1197, 539, 500],
		]
	}, {
		// boss挑战
		desc: [1280, 720,
			[
				[left, 22, 41, 0xf0f8f8],
				[right, 1167, 644, 0x283949],
				[right, 888, 632, 0x3e505c],
				[right, 1007, 648, 0x405257],
				[left, 88, 575, 0x203141],
				[left, 203, 415, 0xe3cd84],
			]
		],
		oper: [
			[center, 1280, 720, 1135, 590, 1217, 671, 200],
		]
	}, {
		// 香行域右下角寻香切换为唤息
		desc: [1280, 720,
			[
				[left, 20, 43, 0xf0f6f7],
				[left, 252, 38, 0x583716],
				[left, 66, 649, 0x3d4f5c],
				[right, 1219, 616, 0x242526],
				[right, 1170, 645, 0x373737],
				[right, 1255, 584, 0x403a34],
				[right, 1177, 656, 0x353531],
				[right, 1193, 659, 0x44423b],
				[right, 1211, 614, 0x202428],
			]
		],
		oper: [
			[right, 1280, 720, 1235, 569, 1262, 596, 500],
		]
	}, {
		// 获得经验
		desc: [1280, 720,
			[
				[center, 608, 135, 0xffeeb4],
				[center, 639, 642, 0xc6d7d7],
				[center, 728, 151, 0xfdecca],
				[right, 1251, 82, 0x0d1010],
				[right, 1157, 646, 0x161615],
				[left, 63, 64, 0x00080b],
			]
		],
		oper: [
			[right, 1280, 720, 928, 169, 1167, 586, 500],
		]
	}, {
		// 极评分自动用万相赐福
		desc: [1280, 720,
			[
				[center, 520, 426, 0xdf6851],
				[center, 769, 437, 0xf4b25f],
				[left, 150, 144, 0x564623],
				[left, 208, 140, 0x5b4b28],
				[left, 264, 229, 0x504d31],
				[left, 108, 216, 0x535031],
				[left, 47, 61, 0x010c0f],
				[left, 293, 125, 0x091d1d],
				[center, 777, 327, 0x5d7987],
				[center, 484, 336, 0x5a7784],
			]
		],
		oper: [
			[right, 1280, 720, 672, 422, 796, 467, 500]
		]
	}, {
		// 其它评分时不使用万相赐福
		desc: [1280, 720,
			[
				[center, 506, 440, 0xdf6851],
				[center, 757, 431, 0xf4b25f],
				[center, 656, 325, 0x8e65a7],
				[left, 50, 76, 0x000d10],
				[right, 1178, 109, 0x141817],
				[center, 822, 251, 0x3b5d6e],
			]
		],
		oper: [
			[right, 1280, 720, 491, 419, 614, 469, 500]
		]
	}, {
		// 战斗失败选择放弃前行
		desc: [1280,720,
			[
				[center,400,225,0x2f1e0e],
				[center,635,224,0x6f4e3d],
				[center,880,225,0x2f1e0e],
				[center,400,494,0x675637],
				[center,627,492,0x4d3424],
				[center,878,496,0x513221],
				[center,445,406,0x8d233d],
				[center,840,410,0x994433],
				[center,585,309,0xcbb59e]
			]
		],
		oper: [
			[right, 1280, 720, 686,411, 836,451, 500]
		]
	},{
		// 战斗失败确定放弃
		desc: [1280,720,
				[
					[center,430,221,0x4f3a2c],
					[center,643,221,0x71503f],
					[center,853,224,0x3e2e1f],
					[center,428,492,0x625134],
					[center,627,493,0x6d4c3b],
					[center,852,494,0x5b3d2c],
					[center,632,392,0xcbb59e],
					[center,476,398,0x8b2547],
					[center,595,445,0x8b2547],
					[center,683,397,0x9b3535],
					[center,800,445,0x933e2d]
				]
			],
		oper: [
			[right, 1280, 720, 691,401, 794,444, 500]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 203,
			name: '六道萤草_杂项_开始',
			operator: [thisOperator[0]]
		})) {
			// 开新局，buff数重置
			thisScript.global.d6d = {
				// 0当前个数，1目标个数
				腐草为萤: [0, 5],
				妖力化身: [0, 2],
				六道净化: [0, 1],
				萤火之光: [0, 5]
			};
			thisScript.global.d6dCurrentBegin = new Date().getTime();
			if (!thisScript.global.d6dBegin) {
				thisScript.global.d6dBegin = new Date().getTime();
			}
			if (!thisScript.global.times) {
				thisScript.global.times = 0;
			}
			thisScript.global.times++
			thisScript.global.d6LoadedBuff = false;
			return true;
		} else if (thisScript.oper({
			id: 203,
			name: '六道萤草_杂项_结束',
			operator: [{
				desc: thisOperator[1].desc,
				retest: 1000
			}]
		})) {
			const thisconf = thisScript.scheme.config['203'];
			thisconf.overTimes = Math.floor(Number(thisconf.overTimes) || 0);
			const now = new Date().getTime();
			const currentCost = Math.floor((now - thisScript.global.d6dCurrentBegin) / 1000); // 秒
			const cost = ((now - thisScript.global.d6dBegin) / 1000 / 60).toFixed(2); // 分
			const costAvg = Math.floor((now - thisScript.global.d6dBegin) / 1000 / (thisScript.global.times || 0)) // 秒
			// 中途进入的不计次
			const bufLog = `本局buff：${['腐草为萤', '妖力化身', '六道净化', '萤火之光'].map(name => name + ':' + thisScript.global.d6d[name][0]).join(', ')}`;
			let toLog = `${bufLog}。通关次数: ${thisScript.global.times || 0}次, 本次通关时间: ${currentCost}秒, 平均通关时间: ${costAvg}秒, 总通关时间: ${cost}分`;
			thisScript.myToast(toLog);
			if (thisconf.overTimes && thisScript.global.times >= thisconf.overTimes) {
				toLog = `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。` + toLog;
			}
			if (thisconf.ospPush) {
				thisScript.doOspPush(thisScript, {
					text: toLog,
					before() {
						thisScript.myToast('正在上传数据');
					}
				});
			} else {
			}
			thisScript.helperBridge.regionClick(thisOperator[1].oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
			if (thisconf.overTimes && thisScript.global.times >= thisconf.overTimes) {
				thisScript.stop();
			}
			return true;
		}
		return thisScript.oper({
			id: 203,
			name: '六道萤草_杂项',
			operator: thisOperator.slice(2)
		});
	}
}