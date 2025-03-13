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

export class Func030 implements IFuncOrigin {
	id = 30;
	name = '斗技_杂项';
	desc = '斗技界面点击“战”按钮，自动跳过段位提升等';
	config = [{
		desc: '',
		config: [{
			name: 'isKnowledgePvP',
			desc: '是否名仕局',
			type: 'switch',
			default: false,
		}, {
			name: 'banList',
			desc: '式神被ban时退出，输入单字简称，现仅支持“面龙辉犬狐”',
			type: 'text',
			default: '',
		}],
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 0 检测_斗技主界面
		desc: '斗技主界面',
		oper: [[right, 1280, 720, 1166, 580, 1232, 638, 1000]],
	}, {
		// 1 有段位保护
		desc: [1280, 720,
			[
				// [left, 37, 25, 0xf6e6a7],  // 图裂识别容错
				[left, 207, 26, 0x583716],
				[right, 1206, 74, 0x745a45],
				[right, 1206, 178, 0x745a44],
				[right, 1179, 594, 0x585a5d],
				[right, 1203, 601, 0x565358],
				[right, 1179, 624, 0xc6cbb9],
			],
		],
		oper: [[right, 1280, 720, 1166, 580, 1232, 638, 1000]],
	}, {
		// 2 有裂痕的段位保护
		desc: [1280, 720,
			[
				// [left, 37, 25, 0xf6e6a7],  // 图裂识别容错
				[left, 207, 26, 0x583716],
				[right, 1206, 74, 0x745a45],
				[right, 1206, 178, 0x745a44],
				[right, 1182, 574, 0xaeccda],
				[right, 1162, 600, 0xaec8cd],
				[right, 1179, 601, 0x657e90],
				[right, 1180, 625, 0xb4cbcf],
			],
		],
		oper: [[right, 1280, 720, 1166, 580, 1232, 638, 1000]],
	}, {
		// 3 段位上升
		desc: [1280, 720,
			[
				[center, 424, 329, 0xaa8957],
				[center, 579, 298, 0xe6d8a9],
				[center, 738, 382, 0xb6261c],
				[center, 774, 293, 0xf3e5ba],
				[center, 774, 332, 0x967742],
				[center, 869, 325, 0x9d824c],
			],
		],
		oper: [[right, 1280, 720, 1166, 580, 1232, 638, 1000]],
	}, {
		// 4 自动上阵
		desc: [
			1280, 720,
			[
				[center, 614, 60, 0x1c100c],
				[center, 628, 58, 0xfff1cf],
				[center, 666, 56, 0x190f0c],
				[left, 34, 143, 0x826851],
				[left, 45, 149, 0xffffff],
				[left, 60, 158, 0x826851],
				[left, 70, 598, 0x413244],
				[right, 1166, 532, 0xd5bb9d],
				[left, 49, 180, 0xffffff],
				[left, 65, 145, 0xffffff],
			]
		],
		oper: [[left, 1280, 720, 44, 139, 77, 178, 1000]],
	}, { // 5 名仕斗技界面
		desc: '斗技主界面_名士',
		oper: [
			[center, 1280, 720, 1145, 575, 1245, 664, 1000],
		]
	}, { // 6 禁选界面
		desc: [
			1280, 720,
			[
				[left, 29, 23, 0xd6c4a1],
				[center, 610, 63, 0x1b0e0b],
				[left, 80, 406, 0x533628],
				[right, 1202, 409, 0x533628],
				[right, 1132, 568, 0x000000],
				[right, 1181, 601, 0x000000],
				[right, 1168, 619, 0xe8ca96],
			]
		],
		oper: [
			[center, 1280, 720, 1100, 523, 1241, 653, 1000],
		]
	}, { // 7 巅峰斗技
		desc: '巅峰斗技主界面',
		oper: [
			[center, 1280, 720, 1167, 590, 1243, 659, 1000],
		]
	}, { // 8 巅峰斗技
		desc: '巅峰斗技主界面_段位保护',
		oper: [
			[center, 1280, 720, 1167, 590, 1243, 659, 1000],
		]
	}, { // 9 巅峰斗技
		desc: '巅峰斗技主界面_段位保护裂',
		oper: [
			[center, 1280, 720, 1167, 590, 1243, 659, 1000],
		]
	}, { // 10 巅峰斗技
		desc: '巅峰斗技主界面_名士',
		oper: [
			[center, 1280, 720, 1167, 590, 1243, 659, 1000],
		]
	}, { // 11 退出
		desc: [
			1280, 720,
			[
				[center, 623, 8, 0x261812],
				[center, 657, 10, 0x281813],
				[center, 622, 44, 0xe3c7ab],
				[center, 654, 48, 0xe3cc9c],
				[center, 626, 73, 0xb38a67],
				[center, 656, 78, 0xa57c5b],
			]
		],
		oper: [
			[left, 1280, 720, 22, 19, 52, 47, 1500], // 左上角返回
			[center, 1280, 720, 683, 401, 795, 442, 500], // 确认
		]
	}, { // 12 自动上阵
		desc: [
			1280, 720,
			[
				[center, 614, 60, 0x1c100c],
				[center, 628, 58, 0xfff1cf],
				[center, 666, 56, 0x190f0c],
				[left, 34, 143, 0x826851],
				[left, 44, 149, 0xffffff],
				[left, 60, 158, 0x826851],
				[right, 1166, 532, 0xd5bb9d],
				[left, 49, 181, 0xffffff],
				[left, 65, 145, 0xffffff],
			]
		],
		oper: [[left, 1280, 720, 44, 139, 77, 178, 1000]],
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['30'];
		if (thisScript.oper({
			id: 30,
			name: '斗技_杂项',
			operator: [
				thisOperator[0], thisOperator[1], thisOperator[3], thisOperator[4],
				thisOperator[6], thisOperator[7], thisOperator[8], thisOperator[9],
				thisOperator[12],
			]
		})) {
			return true;
		}

		if (thisconf.isKnowledgePvP) {
			if (thisScript.oper({
				id: 30,
				name: '斗技_杂项_名仕',
				operator: [
					thisOperator[5],
					thisOperator[6],
					thisOperator[10],
				],
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '斗技_杂项_ban位',
				operator: [{ desc: thisOperator[11].desc }],
			}) && typeof thisconf.banList === 'string') {
				for (let i = 0; i < thisconf.banList.length; i++) {
					if (thisScript.findMultiColor(`斗技ban选_${thisconf.banList[i]}`)) {
						return thisScript.oper({
							id: 30,
							name: '斗技_杂项_禁选',
							operator: [{ oper: thisOperator[11].oper }],
						})
					}
				}
			}
		}
	}
}
