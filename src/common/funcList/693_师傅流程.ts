import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;

export class Func692 implements IFuncOrigin {
	id = 692;
	name = '师傅流程';
	config = [{
		desc: '用于战斗前进入式神录进行御魂装配，需启用510功能，逗号分隔，0,0表示不切换预设，5,1表示第5个分组第1组预设',
		config: [{
			name: 'preset_pair_金币',
			desc: '金币妖怪',
			type: 'text',
			default: '0,0',
		}, {
			name: 'preset_pair_经验',
			desc: '经验妖怪',
			type: 'text',
			default: '0,0',
		}, {
			name: 'preset_pair_守护',
			desc: '守护历练',
			type: 'text',
			default: '0,0',
		}]
	}, {
		desc: '计时退出,自行观测需要多少秒退出',
		config: [{
			name: 'coin',
			desc: '金币妖怪',
			type: 'text',
			default: '90',
		}, {
			name: 'exp',
			desc: '经验妖怪',
			type: 'text',
			default: '90',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院进入探索
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 658, 127, 697, 170, 1000],
		]
	}, { // 1 有横幅邀请
		desc: [1280, 720,
			[
				[left, 37, 240, 0xda6856],
				[left, 54, 257, 0xe0705e],
				[left, 131, 251, 0x58b563],
				[left, 153, 243, 0x5bb765],
			]
		],
		oper: [
			[center, 1280, 720, 310, 253, 444, 289, 1000],
			[center, 1280, 720, 1102, 622, 1153, 659, 1000],
		]
	}, { // 2 战字
		desc: [
			1280, 720,
			[
				[center, 528, 311, 0xe2ceba],
				[center, 593, 316, 0x030303],
				[center, 660, 332, 0x030303],
				[center, 749, 297, 0xe4d0b6],
				[center, 569, 523, 0x8e2214],
				[center, 709, 524, 0x881509],
				[center, 638, 472, 0xf3daaa],
			]
		]
	}, { // 3 战斗退出
		desc: '战斗界面',
		oper: [
			[left, 1280, 720, 22, 19, 52, 47, 1000], // 左上角返回
			[center, 1280, 720, 683, 401, 795, 442, 500], // 确认
		]
	}, { // 4 接受
		desc: [1280, 720,
			[
				[left, 37, 240, 0xda6856],
				[left, 54, 257, 0xe0705e],
				[left, 131, 251, 0x58b563],
				[left, 153, 243, 0x5bb765],
			]
		],
		oper: [
			[center, 1280, 720, 120, 230, 158, 269, 1000],
		]
	}, { // 5 石距
		desc: [1280, 720,
			[
				[center, 384, 43, 0xcb4138],
				[center, 396, 27, 0xf85a4b],
				[center, 412, 19, 0x5b413a],
				[center, 396, 52, 0xd84a41],
				[center, 408, 45, 0xd4463e],
			]
		],
		oper: [
			[left, 1280, 720, 22, 19, 52, 47, 1000], // 左上角返回
			[center, 1280, 720, 683, 401, 795, 442, 500], // 确认
		]
	}, { // 6 队长退出
		desc: [1280, 720,
			[
				[left, 113, 203, 0x79290c],
				[left, 113, 230, 0x6e2208],
				[left, 116, 260, 0x4c0f02],
				[left, 125, 230, 0x6e210b],
				[left, 50, 30, 0xf2dd9a],
				[left, 43, 38, 0xf5e9a9],
			]
		],
		oper: [
			[center, 1280, 720, 34, 28, 70, 59, 1000],
			[center, 1280, 720, 683, 411, 839, 451, 1000],
		]
	}, { // 7 愤怒的石距
		desc: [1280, 720,
			[
				[center, 399, 26, 0x87141d],
				[center, 390, 29, 0x881220],
				[center, 400, 52, 0xae2a15],
				[center, 408, 45, 0xaa3218],
				[center, 414, 19, 0x5c413a],
			]
		],
		oper: [
			[left, 1280, 720, 22, 19, 52, 47, 1000], // 左上角返回
			[center, 1280, 720, 683, 401, 795, 442, 500], // 确认
		]
	},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['692'];
		if (thisScript.oper({
			id: 692,
			name: '师傅流程',
			operator: [thisOperator[5], thisOperator[6], thisOperator[7]]
		})) {
			thisScript.global.preset_once_groupNum = 0;
			thisScript.global.preset_once_defaultNum = 0;
			thisScript.global.change_shikigami_state = 'flushed'
			return true;
		}
		if (thisScript.global.change_shikigami_state === 'finish') {
			if (thisScript.oper({
				id: 692,
				name: '师傅流程',
				operator: [thisOperator[4]]
			})) {
				return true;
			}
		}
		if (thisScript.oper({
			id: 691,
			name: '出战',
			operator: [{ desc: thisOperator[1].desc }]
		})) {
			const result = thisScript.findText('.+', 0, thisOperator[1].oper[0], '包含');
			let presetStr;
			if (result[0].label.includes('币')) {
				presetStr = thisconf['preset_pair_金币'] as string
				thisScript.global.timestamp = thisconf.coin as number
			} else if (result[0].label.includes('经验')) {
				presetStr = thisconf['preset_pair_经验'] as string
				thisScript.global.timestamp = thisconf.exp as number
			} else if (result[0].label.includes('守护')) {
				presetStr = thisconf['preset_pair_守护'] as string
			} else {
				presetStr = '0, 0'
			}
			const [p, q] = presetStr.split(/[,，]/);
			thisScript.global.preset_once_groupNum = parseInt(p?.trim(), 10);
			thisScript.global.preset_once_defaultNum = parseInt(q?.trim(), 10);
			if (thisScript.global.preset_once_groupNum > 0) {
				thisScript.regionClick([thisOperator[1].oper[1]]);
				thisScript.global.change_shikigami_state = 'flushed';
			} else {
				thisScript.global.change_shikigami_state = 'finish';
			}
			return true;
		}
		if (thisScript.global.timestamp != 0) {
			if (thisScript.global.timestamp < 360 && thisScript.oper({
				id: 320,
				name: '战字_初始流程',
				operator: [{
					desc: thisOperator[2].desc
				}]
			})) {
				thisScript.global.timestamp = new Date().getTime() + thisScript.global.timestamp * 1000;
				return true;
			} else if (thisScript.global.timestamp > 1700000) {
				if (new Date().getTime() > thisScript.global.timestamp) {
					if (new Date().getTime() > thisScript.global.timestamp + 10000 || thisScript.oper({
						id: 320,
						name: '计时退出',
						operator: [thisOperator[3]]
					})) {
						thisScript.global.timestamp = 0;
						thisScript.global.preset_once_groupNum = 0;
						thisScript.global.preset_once_defaultNum = 0;
						thisScript.global.change_shikigami_state = 'flushed'
						return true;
					}
				}
			}
		}
	}
}