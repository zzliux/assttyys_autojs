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
			name: 'mini_area_click',
			desc: '是否缩小区域点击，解决部分掉落过多时点击错误的问题',
			type: 'switch',
			default: false,
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
		oper: [
			[right, 1280, 720, 1201, 102, 1278, 621, 400],
		],
		// operStepRandom: [
		// 	[
		// 		[left, 1280, 720, 69, 171, 170, 452, 400, 2],
		// 		[right, 1280, 720, 1104, 72, 1200, 528, 400, 5],
		// 	]
		// ],
	}, {
		// 1 左上角贪吃鬼，mumu截图
		desc: '退出结算_左上角贪吃鬼_mumu',
		oper: [
			[right, 1280, 720, 1201, 102, 1278, 621, 400],
		],
	}, {
		// 2 已打开的达摩，取点比较高
		desc: '退出结算_已打开的达摩_1',
		operStepRandom: [
			[
				[center, 1280, 720, 537, 401, 1244, 612, 300, 5],
				[center, 1280, 720, 1063, 56, 1226, 685, 300, 5],
				[center, 1280, 720, 24, 515, 537, 616, 300, 5],
				[center, 1280, 720, 94, 136, 219, 606, 300, 5],
			]
		],
		retest: 300
	}, { // 3 已打开的达摩, 优先级最高
		desc: '退出结算_已打开的达摩_2',
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 300, 2], // 最后一个参数，表示执行这个的概率
				[right, 1280, 720, 1104, 72, 1200, 528, 300, 5],
			]
		],
		retest: 300
	}, {
		// 4 已打开的达摩 体服更新后的UI
		desc: '退出结算_已打开的达摩_3',
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 300, 2], // 最后一个参数，表示执行这个的概率
				[right, 1280, 720, 1104, 72, 1200, 528, 300, 5],
			]
		],
		retest: 300
	}, {
		// 5 邀请好友确认
		desc: '退出结算_邀请好友确认',
		oper: [
			[center, 1280, 720, 550, 347, 730, 376, 300],
			[center, 1280, 720, 680, 411, 838, 452, 1000],
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
		// 左上角的统计图标
		desc: '退出结算_左上角统计图标',
		operStepRandom: [
			[
				[right, 1280, 720, 1217, 106, 1272, 700, 400, 5],
				[left, 1280, 720, 600, 672, 1216, 712, 400, 5],
			]
		],
		notForCnt: true,
	}, {
		// 秘闻的胜利，太鼓位置很高
		desc: '退出结算_秘闻_胜利太鼓',
		oper: [
			[center, 1280, 720, 96, 53, 1177, 210, 1000],
		],
		retest: 300,
	}, {
		// 御魂溢出点确认
		desc: '退出结算_御魂溢出确认',
		oper: [
			[center, 1280, 720, 585, 398, 694, 446, 300]
		],
		notForCnt: true,
	}, {
		// 打开后的达摩，所有点都被结算挡住了，使用经验，金币buff，和第一个奖励的xx作为特征
		desc: '退出结算_经验金币buff_第一个掉落',
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 2000, 2],
				[right, 1280, 720, 1104, 72, 1200, 528, 2000, 5],
			]
		],
	}, {
		// 经验金币妖怪，胜利太鼓
		desc: '退出结算_经验金币妖怪_胜利太鼓',
		oper: [
			[center, 1280, 720, 535, 674, 743, 709, 1000],
		]
	}, { // 契灵结契失败
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
			[center, 1280, 720, 444, 552, 814, 701, 1000],
		]
	}, { // 体力不足
		desc: '退出结算_体力不足',
		oper: [
			[center, 1280, 720, 916, 179, 951, 211, 2000]
		]
	}, {
		// 单人-失败太鼓,重新挑战
		desc: '退出结算_单人_失败太鼓',
		oper: [
			[center, 1280, 720, 813, 465, 909, 570, 500],
		],
		retest: 800,
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['2'];
		if (thisconf && thisconf.rechallenge && thisScript.oper({
			id: 2,
			name: '退出结算_重新挑战',
			operator: thisOperator.slice(-1)
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 2,
			name: '体力不足',
			operator: thisOperator.slice(-2, -1)
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
		if (thisconf && thisconf.mini_area_click && thisScript.oper({
			id: 2,
			name: '退出结算_小区域点击',
			operator: [{
				desc: '退出结算_已打开的达摩_1',
				oper: thisOperator[0].oper
			}, {
				desc: '退出结算_已打开的达摩_2',
				oper: thisOperator[0].oper
			}, {
				desc: '退出结算_已打开的达摩_3',
				oper: thisOperator[0].oper
			}, {
				desc: '退出结算_单人_胜利太鼓',
				oper: thisOperator[0].oper
			}]
		})) {
			return true
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
			operator: thisOperator.slice(0, -2)
		});
	}
}

export default new Func002();
