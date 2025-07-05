import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

const left = 0;
const center = 1;
const right = 2;

export class Func1106 implements IFuncOrigin {
	id = 1106;
	name = '每周两次真蛇';
	desc: '';
	config = [{
		desc: '切换御魂(需要打开509+510快速坐标模式)',
		config: [{
			name: 'switch_group',
			desc: '目标预设的分组在第N个（输入数字，只支持8个以内）',
			type: 'integer',
			default: '0',
			value: '0',
		}, {
			name: 'switch_default',
			desc: '目标预设在第N个（输入数字，只支持前4个）',
			type: 'integer',
			default: '0',
			value: '0',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 探索_真蛇
		desc: [
			1280, 720,
			[
				[left, 56, 203, 0x215543],
				[left, 101, 203, 0x271f1b],
				[left, 72, 230, 0x809074],
				[left, 89, 227, 0x18f7c2],
				[left, 45, 233, 0x231716],
			]
		],
		oper: [
			[center, 1280, 720, 33, 187, 109, 245, 1000],
		]
	}, { // 1 真八岐大蛇界面
		desc: [
			1280, 720,
			[
				[left, 266, 88, 0x130f1a],
				[left, 295, 270, 0x0d120a],
				[center, 516, 253, 0x1c2915],
				[center, 631, 427, 0xe3dcd4],
				[right, 969, 536, 0xdbd0ba],
			]
		],
		oper: [
			[center, 1280, 720, 965, 494, 1044, 565, 1000],
		]
	}, { // 2 创建队伍
		desc: [
			1280, 720,
			[
				[center, 372, 145, 0x684636],
				[center, 903, 145, 0x674636],
				[center, 412, 181, 0xcbb59c],
				[center, 878, 179, 0xcbb59c],
				[center, 636, 514, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 404, 418, 431, 439, 1000],
			[center, 1280, 720, 543, 493, 745, 532, 1000],
		]
	}, { // 3 挑战
		desc: [
			1280, 720,
			[
				[right, 1184, 610, 0xf2e198],
				[right, 1219, 623, 0xf0db8b],
				[right, 1228, 649, 0xeacf72],
				[right, 1250, 668, 0xe7c765],
			]
		],
		oper: [
			[center, 1280, 720, 1192, 621, 1245, 662, 1000],
		]
	}, { // 4 配装界面_准备
		desc: [
			1280, 720,
			[
				[left, 52, 634, 0x46307b],
				[left, 60, 677, 0x2e2a96],
				[left, 46, 681, 0x332b99],
				[left, 30, 653, 0x5536a3],
				[left, 91, 651, 0x2c3364],
				[right, 1163, 552, 0xd3ba9e],
			]
		],
		oper: [
			[center, 1280, 720, 1113, 551, 1222, 630, 1000],
		],
		retest: 1000,
	}, { // 5 真蛇出现
		desc: [
			1280, 720,
			[
				[left, 169, 636, 0x151919],
				[left, 237, 637, 0x1f4133],
				[left, 240, 655, 0x164b36],
				[left, 244, 694, 0x25654a],
				[left, 116, 701, 0x123d2b],
			]
		],
		oper: [
			[center, 1280, 720, 115, 646, 203, 683, 1000],
		]
	}, { // 6 真蛇_剩余一次
		desc: [
			1280, 720,
			[
				[center, 468, 395, 0x34312d],
				[center, 470, 394, 0x393531],
				[center, 470, 402, 0x4e4a45],
				[center, 494, 397, 0x383530],
				[center, 490, 406, 0x433f3b],
			]
		]
	}, { // 7 自动准备
		desc: [
			1280, 720,
			[
				[right, 1119, 473, 0x3f2c0c],
				[right, 1138, 474, 0x3a280b],
				[right, 1136, 486, 0x3e2b0c],
				[right, 1118, 485, 0x39280b],
				[right, 1127, 478, 0x7f4914],
			]
		],
		oper: [
			[center, 1280, 720, 1116, 467, 1140, 492, 1000],
		]
	}, { // 8 真蛇_框转换勾玉
		desc: [1280, 720,
			[
				[center, 468, 187, 0xbf5340],
				[right, 803, 186, 0xb64f3c],
				[center, 453, 531, 0xb04c39],
				[right, 823, 532, 0xb24d3a],
				[center, 599, 459, 0xf3b25e],
				[right, 678, 490, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 584, 454, 694, 493, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['1106'];
		if (thisScript.global.zhenShe > 0) { // 未完成
			if (thisScript.oper({
				id: 1106,
				name: '每周两次真蛇',
				operator: [thisOperator[0], thisOperator[5]]
			})) {
				thisScript.global.preset_once_groupNum = thisConf.switch_group as number
				thisScript.global.preset_once_defaultNum = thisConf.switch_default as number
				return true;
			}
			if (thisScript.global.preset_once_groupNum > 0 && thisScript.global.preset_once_defaultNum > 0) {
				thisScript.global.change_shikigami_flag = true; // 进入式神录
				thisScript.global.change_shikigami_state = 'flushed';// 再次更换御魂
			}
			if (thisScript.oper({
				id: 1106,
				name: '每周两次真蛇',
				operator: [thisOperator[4]]
			})) {
				thisScript.global.zhenShe--;
				thisScript.global.change_shikigami_flag = true; // 进入式神录
				thisScript.global.change_shikigami_state = 'flushed';// 再次更换御魂
				thisScript.global.preset_once_groupNum = thisScript.scheme.config?.['510'].groupNum as number;
				thisScript.global.preset_once_defaultNum = thisScript.scheme.config?.['510'].defaultNum as number;
				return true;
			}
			if (thisScript.oper({
				id: 1106,
				name: '每周两次真蛇',
				operator: [thisOperator[6]]
			})) {
				thisScript.global.zhenShe = 1;
			}
			if (thisScript.oper({
				id: 1106,
				name: '每周两次真蛇_杂项',
				operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[3]
					, thisOperator[7], thisOperator[8]]
			})) {
				return true;
			}
			return false;
		} else if (thisScript.global.zhenShe == 0) {
			thisScript.doPush(thisScript, { text: '已完成两次真蛇，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.global.zhenShe = -1; // 已完成
			return true
		} else {
			return false;
		}
	}
}