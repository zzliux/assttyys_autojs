import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator, } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func605 implements IFuncOrigin {
	id = 605;
	name = '宴会';
	desc = '宴会';
	config = [{
		desc: '',
		config: [{
			name: 'admin',
			desc: '是否是寮管理主动开启',
			type: 'switch',
			default: false,
		}]
	}]
	operator: IFuncOperatorOrigin[] = [{ //	0 检测_宴会
		desc: [1280, 720,
			[
				[left, 40, 39, 0xfdeeb4],
				[right, 1127, 35, 0xd7af82],
				[right, 1181, 40, 0xcfa578],
				[right, 1243, 41, 0xcca174],
				[right, 1063, 21, 0xfa8c42],
				[left, 101, 474, 0xe5bc8b],
				[right, 1216, 645, 0xfefcf7],
			],
		],
		oper: [
			[left, 1280, 720, 19, 156, 98, 242, 1200], //	点击左侧式神
			[center, 1280, 720, 1006, 175, 1037, 238, 1000], //	点击轮换
		],
	}, { //	1 检测_寮会结束
		desc: [1280, 720,
			[
				[center, 590, 177, 0xe4b231],
				[center, 717, 166, 0xf1f1e6],
				[center, 652, 223, 0xe8a639],
				[left, 102, 200, 0xf3d9af],
				[left, 101, 446, 0xf3d8a5],
				[right, 1219, 639, 0xfffdf9],
				[right, 1057, 69, 0xf7dca9],
			],
		],
	}, { //	2 检测_吃饭式神未开轮换
		desc: [1280, 720,
			[
				[center, 330, 257, 0xf2d7ab],
				[center, 568, 257, 0xf2d7ab],
				[center, 806, 257, 0xf2d7a9],
				[center, 753, 129, 0x301c13],
				[left, 216, 711, 0x3e2d1c],
				[right, 1228, 687, 0x381c10],
				[right, 1170, 559, 0xe8d6ae],
				[right, 1024, 287, 0x2f398b],
			],
		],
		oper: [
			[right, 1280, 720, 1005, 177, 1040, 231, 1200], //	点击_轮换按钮
		],
	}, { //	3 检测_吃饭式神已开轮换
		desc: [1280, 720,
			[
				[center, 330, 257, 0xf2d7ab],
				[center, 568, 257, 0xf2d7ab],
				[center, 806, 257, 0xf2d7a9],
				[center, 753, 129, 0x301c13],
				[right, 1228, 687, 0x381c10],
				[right, 1170, 559, 0xe8d6ae],
				[right, 1023, 296, 0xffffff],
			],
		],
		oper: [
			[left, 1280, 720, 30, 17, 75, 62, 1200], //	返回
		],
	}, { //	4 宴会_寮管理开启
		desc: [1280, 720,
			[
				[right, 940, 228, 0x9aaf98],
				[right, 991, 240, 0xcb614a],
				[right, 1014, 231, 0xcb6049],
				[right, 1034, 221, 0xc74c4b],
				[right, 1051, 219, 0xc85050],
				[right, 1064, 231, 0xcc5554],
			]
		],
		oper: [
			[center, 1280, 720, 922, 197, 1091, 305, 522],
		]
	}, { //	5 宴会_料理筹备界面
		desc: [1280, 720,
			[
				[left, 157, 96, 0x43312f],
				[left, 157, 144, 0x1e1311],
				[center, 418, 80, 0x32231f],
				[center, 434, 122, 0x241815],
				[left, 188, 112, 0xeab35a],
				[center, 365, 111, 0xeab85d],
			]
		]
	}, { // 6 宴会_宴会筹备完成
		desc: [1280, 720,
			[
				[right, 678, 596, 0x8bb729],
				[right, 766, 648, 0xe94f48],
				[right, 884, 602, 0xcdc2bb],
				[right, 946, 626, 0xb7213c],
				[right, 1097, 652, 0x745130],
				[right, 1147, 645, 0xefeade],
			]
		],
		oper: [
			[center, 1280, 720, 910, 326, 965, 371, 1000],
			[center, 1280, 720, 834, 382, 942, 417, 1000],
		]
	}, { // 7 宴会_一键放入
		desc: [1280, 720,
			[
				[center, 478, 417, 0x453429],
				[center, 576, 427, 0x46362a],
				[right, 712, 425, 0x443328],
				[right, 817, 427, 0x453429],
				[left, 307, 149, 0x870818],
			]
		],
		oper: [
			[center, 1280, 720, 707, 416, 813, 438, 1000],
			[center, 1280, 720, 1083, 422, 1117, 456, 1000],
		]
	}, { // 8 点击阴阳寮
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 544, 612, 594, 661, 1200]	// 点击阴阳寮
		]
	}, { // 9 判断是否为寮首页
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
			[center, 1280, 720, 868, 627, 927, 684, 1200]	// 点击下方神社
		],
		retest: 1000
	}, { // 10 本周已开启两次
		desc: [1280, 720,
			[
				[center, 582, 228, 0xe3d2bf],
				[right, 991, 233, 0x7b7570],
				[center, 584, 324, 0xe7d6c4],
				[right, 797, 364, 0xa72d02],
				[right, 805, 366, 0xb44e28],
				[right, 804, 378, 0xb14720],
				[right, 797, 378, 0xa72d02],
			]
		],
		oper: [
			[center, 1280, 720, 24, 40, 76, 73, 1000],
		]
	}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconfig = thisScript.scheme.config['605'];
		if (thisScript.global.liao_banquet_onGoing) {
			if (thisScript.oper({
				name: '宴会_结束',
				operator: [{ desc: thisOperator[1].desc }, thisOperator[10]]
			})) {
				thisScript.rerun('返回庭院');
				return true;
			}
			if (thisconfig.admin) {
				if (!thisScript.oper({
					name: '宴会_吃饭界面',
					operator: [{ desc: thisOperator[0].desc }],
				}) && thisScript.oper({
					name: '宴会__寮管理开启',
					operator: [thisOperator[4], thisOperator[9]],
				})) {
					return true;
				}
				if (thisScript.oper({
					name: '宴会__宴会筹备界面',
					operator: [thisOperator[5]],
				})) {
					if (thisScript.oper({
						name: '宴会__宴会筹备完成',
						operator: [thisOperator[6]],
					})) {
						return true;
					} else {
						thisScript.global.liao_banquet_collect = true;
						thisScript.global.liao_banquet_onGoing = false;
						return true;
					}
				}
			}
			if (thisScript.oper({
				name: '进入寮神社',
				operator: [thisOperator[8]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '宴会_吃饭界面',
				operator: [{ desc: thisOperator[0].desc }],
			})) {
				const point1 = thisScript.findMultiColor('宴会_举高高');
				if (point1) {
					console.log('查找举高高成功');
					const oper = [[point1.x, point1.y, point1.x, point1.y, 120]];
					thisScript.regionClick(oper);
					return true;
				}
				if (!thisScript.global.banquet_change_flag) {
					return thisScript.oper({
						name: '宴会_式神轮换',
						operator: [{ oper: thisOperator[0].oper }]
					});
				}
				return true;
			}
			if (thisScript.oper({
				name: '检测_吃饭式神已开轮换',
				operator: [thisOperator[3]],
			})) {
				thisScript.global.banquet_change_flag = true;
				return true;
			}
			if (thisScript.oper({
				name: '检测_吃饭式神未开轮换',
				operator: [thisOperator[2]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '宴会_一键放入',
				operator: [thisOperator[7]]
			})) {
				return true;
			}
			return false;
		}
	}
}