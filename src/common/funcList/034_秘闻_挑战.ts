import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func034 implements IFuncOrigin {
	id = 34;
	name = '秘闻_挑战';
	desc = '每周竞速或百战挑战';
	config = [{
		desc: '竞速分组一',
		config: [{
			name: 'weekMode_A',
			desc: '竞速模式',
			type: 'lists',
			data: ['红叶', '雨女', '镰鼬', '妖刀', '河童', '荒川', '姑获鸟', '山兔', '小鹿男', '青行灯'],
			default: [],
		}, {
			name: 'preset_pair_A',
			desc: '预设分组',
			type: 'text',
			default: '0,0',
		}]
	}, {
		desc: '竞速分组二',
		config: [{
			name: 'weekMode_B',
			desc: '竞速模式',
			type: 'lists',
			data: ['红叶', '雨女', '镰鼬', '妖刀', '河童', '荒川', '姑获鸟', '山兔', '小鹿男', '青行灯'],
			default: [],
		}, {
			name: 'preset_pair_B',
			desc: '预设分组',
			type: 'text',
			default: '0,0',
		}]
	}, {
		desc: '竞速分组三',
		config: [{
			name: 'weekMode_C',
			desc: '竞速模式',
			type: 'lists',
			data: ['红叶', '雨女', '镰鼬', '妖刀', '河童', '荒川', '姑获鸟', '山兔', '小鹿男', '青行灯'],
			default: [],
		}, {
			name: 'preset_pair_C',
			desc: '预设分组',
			type: 'text',
			default: '0,0',
		}]
	}, {
		desc: '竞速分组四',
		config: [{
			name: 'weekMode_D',
			desc: '竞速模式',
			type: 'lists',
			data: ['红叶', '雨女', '镰鼬', '妖刀', '河童', '荒川', '姑获鸟', '山兔', '小鹿男', '青行灯'],
			default: [],
		}, {
			name: 'preset_pair_D',
			desc: '预设分组',
			type: 'text',
			default: '0,0',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 镰鼬百战
		desc: [1280, 720,
			[
				[right, 1194, 606, 0xe3d7c0],
				[right, 1130, 606, 0xd9d0b8],
				[right, 1168, 583, 0x0c0e0f],
				[left, 88, 150, 0x4f2822],
				[right, 1225, 468, 0xe5d4b3]
			]
		],
		oper: [
			[right, 1280, 720, 1120, 555, 1206, 646, 1000]
		]
	}, { // 1 妖刀姬竞速
		desc: [1280, 720,
			[
				[left, 78, 575, 0x3d4d6e],
				[left, 41, 52, 0xc2cbde],
				[left, 250, 47, 0x583716],
				[right, 1162, 640, 0xe2dac1],
				[right, 1038, 586, 0xcaaa7c]
			]
		],
		oper: [
			[right, 1280, 720, 1120, 555, 1206, 646, 1000]
		]
	}, { // 2 小路男竞速
		desc: [1280, 720,
			[
				[center, 829, 249, 0xd7beae],
				[right, 1055, 187, 0x13192d],
				[right, 1092, 273, 0x20223c],
				[center, 867, 587, 0x383035],
				[left, 111, 463, 0x31425d]
			]
		],
		oper: [
			[right, 1280, 720, 1120, 555, 1206, 646, 1000]
		]
	}, { // 3 青行灯竞速
		desc: [1280, 720,
			[
				[right, 1050, 152, 0x0c0d15],
				[center, 912, 206, 0x414241],
				[center, 901, 186, 0x916a34],
				[center, 864, 217, 0xffffff],
				[center, 758, 284, 0x323a52],
				[center, 925, 442, 0x5799a0]
			]
		],
		oper: [
			[right, 1280, 720, 1120, 555, 1206, 646, 1000]
		]
	}, { // 4 探索地图进入秘闻
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 544, 636, 602, 701, 1000],
		]
	}, { // 5 每周挑战秘闻弹窗，暗
		desc: [
			1280, 720,
			[
				[left, 110, 42, 0x44423d],
				[left, 211, 38, 0x44423e],
				[left, 31, 634, 0x211719],
				[right, 1255, 706, 0x2b2326],
				[right, 1264, 364, 0x110b0b],
				[center, 886, 24, 0x4b290d]
			]
		],
		oper: [
			[center, 1280, 720, 1020, 112, 1230, 371, 1000]
		]
	}, { // 6 每周挑战秘闻选择并进入
		desc: [1280, 720,
			[
				[left, 50, 598, 0x2c2e3c],
				[left, 26, 149, 0x101014],
				[center, 465, 641, 0x857d6c],
				[right, 1258, 576, 0x3c2830],
				[left, 45, 47, 0xf6e6a7],
			]
		],
		oper: [
			[center, 1280, 720, 134, 150, 450, 246, 500],
			[center, 1280, 720, 1142, 598, 1239, 688, 500],
		]
	}, { // 7 秘闻挑战开启提示
		desc: '秘闻挑战开启',
		oper: [
			[left, 1280, 720, 452, 605, 870, 683, 2000],
		]
	}, { // 8 红叶
		desc: [1280, 720,
			[
				[right, 804, 361, 0xf9f7f6],
				[right, 797, 436, 0xedeae8],
				[right, 980, 431, 0xf4f2f0],
				[right, 903, 157, 0x817e8c],
				[right, 875, 379, 0x9f240f],
			]
		],
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['34'];
		if (!thisScript.global.miWenChange) {
			let i = 8;
			for (; i < 9; i++) {
				if (thisScript.oper({
					id: 34,
					name: '秘闻_识别竞速',
					operator: [thisOperator[i]]
				})) {
					break;
				}
			}
			const weekMode = ['红叶', '雨女', '镰鼬', '妖刀', '河童', '荒川', '姑获鸟', '山兔', '小鹿男', '青行灯'];
			if (i != 9) {
				log(thisconf.weekMode_A)
				if ((thisconf.weekMode_A as string[]).includes(weekMode[i - 8])) {
					change(thisconf.preset_pair_A as string);
				} else if ((thisconf.weekMode_B as string[]).includes(weekMode[i - 8])) {
					change(thisconf.preset_pair_B as string);
				} else if ((thisconf.weekMode_C as string[]).includes(weekMode[i - 8])) {
					change(thisconf.preset_pair_C as string);
				} else if ((thisconf.weekMode_D as string[]).includes(weekMode[i - 8])) {
					change(thisconf.preset_pair_D as string);
				}
				return true;
			}
		}
		if (thisScript.oper({
			name: '秘闻_杂项',
			operator: thisOperator.slice(0, 8)
		})) {
			return true;
		}
		return false;
		function change(presetStr) {
			// 读取参数位置
			const [p, q] = presetStr.split(/[,，]/);
			thisScript.global.miWenChange = true;
			thisScript.global.preset_once_groupNum = parseInt(p?.trim(), 10);
			thisScript.global.preset_once_defaultNum = parseInt(q?.trim(), 10);
			thisScript.global.preset_once_team_groupNum = parseInt(p?.trim(), 10);
			thisScript.global.preset_once_team_defaultNum = parseInt(q?.trim(), 10);
			if (thisScript.global.preset_once_groupNum > 0) {
				thisScript.global.shangyushe = true;
				thisScript.global.change_shikigami_state = 'flushed';
				thisScript.global.change_shikigami_flag = true;
				log(thisScript.global.preset_once_groupNum)
			} else {
				thisScript.global.shangyushe = false;
				thisScript.global.change_shikigami_state = 'finish';
			}
		}
	}
}