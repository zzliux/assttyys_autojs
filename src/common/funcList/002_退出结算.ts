import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func002 implements IFuncOrigin {
	id = 2;
	name = '退出结算';
	desc = '';
	config = [{
		desc: '配置',
		config: [{
			name: 'rechallenge',
			desc: '失败点击重新挑战',
			type: 'switch',
			default: false,
		}, {
			name: 'no_sushi_switch_enabled',
			desc: '当体力不足时切换方案',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '关闭BUFF',
		}, {
			name: 'fail',
			desc: '失败后停止脚本',
			type: 'switch',
			default: false,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		// 调整优先级，提高识别贪吃鬼的级别
		// 0 左上角的贪吃鬼图标
		desc: '退出结算_左上角贪吃鬼',
		operStepRandom: [
			[
				[center, 1280, 720, 15, 139, 83, 309, 1000, 25], // 最后一个参数，表示执行这个的概率(已废弃)
				[center, 1280, 720, 12, 391, 93, 548, 1000, 25],
				[center, 1280, 720, 1202, 140, 1267, 630, 1000, 50],
			]
		],
	}, {
		// 1 左上角贪吃鬼，mumu截图
		desc: '退出结算_左上角贪吃鬼_mumu',
		operStepRandom: [
			[
				[center, 1280, 720, 15, 139, 83, 309, 1000, 25], // 最后一个参数，表示执行这个的概率(已废弃)
				[center, 1280, 720, 12, 391, 93, 548, 1000, 25],
				[center, 1280, 720, 1202, 140, 1267, 630, 1000, 50],
			]
		],
	}, {
		// 2 已打开的达摩，取点比较高
		desc: '退出结算_已打开的达摩_1',
		operStepRandom: [
			[
				[center, 1280, 720, 15, 139, 83, 309, 1000, 25], // 最后一个参数，表示执行这个的概率(已废弃)
				[center, 1280, 720, 12, 391, 93, 548, 1000, 25],
				[center, 1280, 720, 1202, 140, 1267, 630, 1000, 50],
			]
		],
		retest: 300
	}, { // 3 已打开的达摩, 优先级最高
		desc: '退出结算_已打开的达摩_2',
		operStepRandom: [
			[
				[center, 1280, 720, 15, 139, 83, 309, 1000, 25], // 最后一个参数，表示执行这个的概率(已废弃)
				[center, 1280, 720, 12, 391, 93, 548, 1000, 25],
				[center, 1280, 720, 1202, 140, 1267, 630, 1000, 50],
			]
		],
		retest: 300
	}, {
		// 4 已打开的达摩 体服更新后的UI
		desc: '退出结算_已打开的达摩_3',
		operStepRandom: [
			[
				[center, 1280, 720, 15, 139, 83, 309, 1000, 25], // 最后一个参数，表示执行这个的概率(已废弃)
				[center, 1280, 720, 12, 391, 93, 548, 1000, 25],
				[center, 1280, 720, 1202, 140, 1267, 630, 1000, 50],
			]
		],
		retest: 300
	}, {
		// 5 邀请好友确认
		desc: '退出结算_取消确认框_未勾',
		oper: [
			[center, 1280, 720, 550, 347, 730, 376, 300],
			[center, 1280, 720, 680, 411, 838, 452, 500],
		],
		notForCnt: true, // 点击确认不统计退出结算的次数
	}, {
		// 6 单人-胜利太鼓
		desc: '退出结算_单人_胜利太鼓',
		operStepRandom: [
			[
				[center, 1280, 720, 165, 60, 1070, 604, 400, 1],
				[center, 1280, 720, 165, 60, 1263, 530, 400, 1],
			]
		],
		notForCnt: true,
	}, {
		// 7 组队-胜利太鼓,斗技-胜利太鼓 - 适配
		desc: '退出结算_斗技_胜利太鼓',
		oper: [
			[center, 1280, 720, 705, 601, 1026, 700, 400],
		],
		notForCnt: true,
	}, {
		// 8 组队-胜利太鼓,斗技-胜利太鼓
		desc: '退出结算_组队_胜利太鼓',
		operStepRandom: [
			[
				[center, 1280, 720, 124, 60, 1188, 363, 400, 5],
				[center, 1280, 720, 90, 380, 380, 580, 400, 5],
				[center, 1280, 720, 888, 359, 1204, 492, 400, 5],
			]
		],
		notForCnt: true,
	}, {
		// 9 单人-失败太鼓
		desc: '退出结算_单人_失败太鼓',
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 2000, 2],
				[right, 1280, 720, 1104, 72, 1200, 528, 2000, 5],
			]
		],
	}, {
		// 10 组队-失败太鼓
		desc: '退出结算_组队_失败太鼓',
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 2000, 2],
				[right, 1280, 720, 1104, 72, 1200, 528, 2000, 5],
			]
		],
	}, {
		// 11 左上角的统计图标
		desc: '退出结算_左上角统计图标',
		operStepRandom: [
			[
				[right, 1280, 720, 1217, 106, 1272, 700, 400, 5],
				[left, 1280, 720, 600, 672, 1216, 712, 400, 5],
			]
		],
		notForCnt: true,
	}, {
		// 12 秘闻的胜利，太鼓位置很高
		desc: '退出结算_秘闻_胜利太鼓',
		oper: [
			[center, 1280, 720, 96, 53, 1177, 210, 1000],
		],
		retest: 300,
	}, {
		// 13 御魂溢出点确认
		desc: '退出结算_御魂溢出确认',
		oper: [
			[center, 1280, 720, 686, 398, 799, 445, 300],
		],
		notForCnt: true,
	}, {
		// 14 打开后的达摩，所有点都被结算挡住了，使用经验，金币buff，和第一个奖励的xx作为特征
		desc: '退出结算_经验金币buff_第一个掉落',
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 2000, 2],
				[right, 1280, 720, 1104, 72, 1200, 528, 2000, 5],
			]
		],
	}, {
		// 15 经验金币妖怪，胜利太鼓
		desc: '退出结算_经验金币妖怪_胜利太鼓',
		oper: [
			[center, 1280, 720, 535, 674, 743, 709, 1000],
		]
	}, { // 16 契灵结契失败
		desc: [
			1280, 720,
			[
				[center, 512, 297, 0xbbbbbb],
				[center, 610, 277, 0xbbbbbb],
				[center, 684, 295, 0xb0b0b0],
				[center, 785, 296, 0xc0c0c0],
				[center, 520, 339, 0x9f9f9f],
				[center, 797, 328, 0xc1c1c1],
			]
		],
		oper: [
			[center, 1280, 720, 404, 609, 578, 644, 1000]	//	放弃结契 总不能有人想选再次结契吧
		]
	}, { // 17 自选120关闭
		desc: [
			1280, 720,
			[
				[center, 508, 124, 0xf4d38b],
				[center, 664, 127, 0xf7e4b3],
				[center, 753, 135, 0xf4e1b8],
				[center, 853, 106, 0xeece86],
				[right, 1001, 494, 0x433325],
			]
		],
		oper: [
			[center, 1280, 720, 1045, 125, 1078, 154, 1000],
		]
	}, {
		// 18 结界卡超上限提示
		desc: '结界卡超上限提示',
		oper: [
			[center, 1280, 720, 544, 348, 570, 373, 500],
			[center, 1280, 720, 436, 405, 606, 459, 200],
		]
	}, { // 19 体力不足
		desc: '退出结算_体力不足',
		oper: [
			[center, 1280, 720, 916, 179, 951, 211, 2000]
		]
	}, {
		// 20 单人-失败太鼓,重新挑战
		desc: '退出结算_单人_失败太鼓',
		oper: [
			[center, 1280, 720, 813, 465, 909, 570, 500],
		],
		retest: 800,
	}, {
		// 21 邀请好友确认
		desc: '退出结算_取消确认框',
		oper: [
			[center, 1280, 720, 680, 411, 838, 452, 500],
		],
		notForCnt: true, // 点击确认不统计退出结算的次数
	}, {
		// 22 退出结算_再次挑战_取消确认框_未勾
		desc: '退出结算_再次挑战_取消确认框_未勾',
		oper: [
			[center, 1280, 720, 544, 347, 570, 374, 300],
			[center, 1280, 720, 680, 411, 838, 452, 500],
		],
		notForCnt: true, // 点击确认不统计退出结算的次数
	}, {
		// 23 阴阳师/英杰技能升级提示
		desc: [1280, 720,
			[
				[center, 413, 394, 0x8e6a40],
				[center, 869, 393, 0x8f6b41],
				[center, 652, 275, 0x483424],
				[center, 802, 312, 0xcab49b],
				[center, 421, 262, 0x38291d],
				[center, 835, 387, 0xaf947c],
				[center, 397, 299, 0x817976],
			]
		],
		oper: [
			[center, 1280, 720, 225, 486, 1082, 679, 1000],
		]
	}, {
		// 24 缓存过多点击确认按钮
		desc: [1280, 720,
			[
				[center, 332, 142, 0x644435],
				[center, 946, 142, 0x654435],
				[center, 441, 492, 0xdf6851],
				[center, 756, 497, 0xf3b25e],
				[center, 919, 484, 0xcbb59c],
				[center, 944, 165, 0xcbb59c],
				[center, 354, 499, 0xcbb59c],
				[center, 573, 570, 0x6d4a38],
			]
		],
		oper: [
			[center, 1280, 720, 727, 484, 859, 535, 1000],
		]
	}, { // 25 斗技退出失败
		desc: [
			1280, 720,
			[
				[center, 470, 77, 0x544e60],
				[center, 452, 120, 0x595063],
				[center, 495, 120, 0x575062],
				[center, 736, 102, 0xc3bdaf],
				[center, 918, 112, 0xada596],
			]
		],
		oper: [
			[center, 1280, 720, 1110, 362, 1222, 493, 1000],
		]
	}, { // 26 斗技退出失败 阴阳师皮肤遮挡
		desc: [1280, 720,
			[
				[center, 470, 77, 0x544e60],
				[center, 452, 120, 0x595063],
				[center, 495, 120, 0x575062],
				[center, 570, 29, 0x91846b],
				[center, 371, 15, 0x5e4935],
			]
		],
		oper: [
			[center, 1280, 720, 1110, 362, 1222, 493, 1000],
		]
	}, { // 27  左下统计图标
		desc: [1280, 720,
			[
				[center, 78, 643, 0x3c2b20],
				[center, 72, 655, 0xae8b5f],
				[center, 89, 652, 0xb69363],
				[center, 78, 675, 0x36261a],
			]
		],
		oper: [
			[center, 1280, 720, 1112, 113, 1238, 595, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['2'];
		if (thisconf && thisconf.rechallenge && thisScript.oper({
			id: 2,
			name: '退出结算_重新挑战',
			operator: [thisOperator[20]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 2,
			name: '体力不足',
			operator: [thisOperator[19]]
		})) {
			if (thisconf && thisconf.no_sushi_switch_enabled) {
				thisScript.rerun(thisconf.next_scheme);
				sleep(3000);
				return;
			} else if (thisconf && !thisconf.no_sushi_switch_enabled) {
				thisScript.doPush(thisScript, { text: '体力不够已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(3000);
				return;
			}
		}
		if (thisconf && thisconf.fail && thisScript.oper({
			id: 2,
			name: '退出结算_失败停止',
			operator: [thisOperator[9], thisOperator[10]]
		})) {
			thisScript.doPush(thisScript, { text: '战斗失败，已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			sleep(3000);
			return true
		}
		return thisScript.oper({
			id: 2,
			name: '退出结算',
			operator: [
				thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[3],
				thisOperator[4], thisOperator[5], thisOperator[6], thisOperator[7],
				thisOperator[8], thisOperator[9], thisOperator[10], thisOperator[11],
				thisOperator[12], thisOperator[13], thisOperator[14], thisOperator[15],
				thisOperator[16], thisOperator[17], thisOperator[22], thisOperator[18], // 22要放18前面
				thisOperator[21], thisOperator[23], thisOperator[24], thisOperator[25],
				thisOperator[26], thisOperator[27],
			]
		});
	}
}

export default new Func002();
