import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func693 implements IFuncOrigin {
	id = 693;
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
			name: 'preset_pair_历练',
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
	}, {
		desc: '',
		config: [{
			name: 'name',
			desc: '徒弟昵称',
			type: 'text',
			default: '徒弟',
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
	}, { // 8 有信
		desc: [1280, 720,
			[
				[right, 1084, 396, 0xe9d3a4],
				[right, 1084, 410, 0xe3cc9e],
				[right, 1069, 401, 0xe3cb9b],
				[right, 1098, 402, 0xe6d2a2],
				[right, 1154, 39, 0xd8b389],
				[right, 1223, 36, 0xd4ae84],
			]
		],
		oper: [
			[center, 1280, 720, 1070, 386, 1098, 413, 2000],
		]
	}, {  // 9 有申请
		desc: [1280, 720,
			[
				[right, 1176, 168, 0xde6c59],
				[right, 1186, 178, 0xe07360],
				[right, 1230, 173, 0x52ad5c],
				[right, 1245, 170, 0x57b361],
			]
		],
		oper: [
			[center, 1280, 720, 847, 120, 1026, 153, 1000],
		]
	}, { // 10 守护关系完成
		desc: [1280, 720,
			[
				[center, 475, 155, 0xf3dd90],
				[center, 601, 166, 0xf2d985],
				[right, 753, 156, 0xf9e78e],
				[right, 817, 172, 0xefd184],
				[right, 876, 141, 0xf3db8e],
			]
		],
		oper: [
			[center, 1280, 720, 961, 203, 989, 233, 1000],
		]
	}, { // 11 已是守护关系
		desc: [1280, 720,
			[
				[left, 99, 627, 0xf5e7d4],
				[center, 577, 629, 0xbf6ade],
				[left, 232, 635, 0xacc6d1],
				[center, 463, 640, 0xf5d4bf],
			]
		],
		oper: [
			[center, 1280, 720, 766, 27, 851, 60, 1000],
			[center, 1280, 720, 27, 26, 55, 52, 1000],
		]
	}, {  // 12 庭院_式神录
		desc: [
			1280, 720,
			[
				[right, 1217, 620, 0xcca56e],
				[right, 1222, 641, 0xddcdc7],
				[right, 1221, 663, 0xdac9c4],
				[right, 1219, 695, 0xb14c43],
				[right, 1222, 706, 0x432118],
			]
		],
		oper: [
			[right, 1280, 720, 1106, 623, 1153, 653, 1200]	// 点击式神录
		]
	},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['693'];
		if (thisScript.oper({
			id: 693,
			name: '师傅流程',
			operator: [thisOperator[5], thisOperator[6], thisOperator[7]]
		})) {
			thisScript.global.preset_once_groupNum = 0;
			thisScript.global.preset_once_defaultNum = 0;
			thisScript.global.change_shikigami_state = 'flushed'
			return true;
		}
		if (thisScript.oper({
			id: 693,
			name: '收徒',
			operator: [thisOperator[8], thisOperator[10], thisOperator[11]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 693,
			name: '收徒',
			operator: [{ desc: thisOperator[9].desc }]
		})) {
			const result = thisScript.findText('.+', 0, thisOperator[9].oper[0], '包含');
			const findName = thisScript.findTextByOcrResult(thisconf.name as string, result, '包含')
			if (findName.length > 0) {
				const toClickRegion = [
					findName[0].points[0].x + 375,
					findName[0].points[0].y + 40,
					findName[0].points[0].x + 380,
					findName[0].points[0].y + 45,
					1000,
				]
				thisScript.regionClick([toClickRegion]);
			}
			return true;
		}
		if (thisScript.global.change_shikigami_state === 'finish') {
			if (thisScript.oper({
				id: 693,
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
			} else if (result[0].label.includes('经')) {
				presetStr = thisconf['preset_pair_经验'] as string
				thisScript.global.timestamp = thisconf.exp as number
			} else if (result[0].label.includes('历')) {
				presetStr = thisconf['preset_pair_历练'] as string
			} else {
				presetStr = '0, 0'
			}
			const [p, q] = presetStr.split(/[,，]/);
			thisScript.global.preset_once_groupNum = parseInt(p?.trim(), 10);
			thisScript.global.preset_once_defaultNum = parseInt(q?.trim(), 10);
			if (thisScript.global.preset_once_groupNum > 0) {
				thisScript.oper({
					id: 693,
					name: '换御魂',
					operator: [thisOperator[12]]
				})
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