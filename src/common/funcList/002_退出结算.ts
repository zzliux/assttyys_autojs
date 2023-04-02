import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from "@/interface/InterfaceFunc";
import { Script } from "@/system/script";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func002 implements InterfaceFuncOrigin {
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
		}]
	}];
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 调整优先级，提高识别贪吃鬼的级别
		// 左上角的贪吃鬼图标
		desc: [1280, 720,
			[
				[left, 50, 66, 0x693430],
				[left, 62, 65, 0xf5f5f5],
				[left, 112, 58, 0x312012],
				[left, 74, 90, 0x927150]
			]
		],
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
		// 已打开的达摩，取点比较高
		desc: [1280, 720,
			[
				[center, 482, 611, 0x3c82ca],
				[center, 487, 620, 0x3b84c6],
				[center, 588, 619, 0x300204],
				[center, 712, 621, 0x340204],
				[center, 557, 418, 0xda961f]
			]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 537, 401, 1244, 612, 300, 5],
				[center, 1280, 720, 1063, 56, 1226, 685, 300, 5],
				[center, 1280, 720, 24, 515, 537, 616, 300, 5],
				[center, 1280, 720, 94, 136, 219, 606, 300, 5],
			]
		],
		retest: 300
	}, { // 已打开的达摩, 优先级最高
		desc: [1280, 720,
			[
				[center, 482, 611, 0x3c82ca],
				[center, 487, 620, 0x3b84c6],
				[center, 588, 619, 0x300204],
				[center, 712, 621, 0x340204]
			]
		],
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 300, 2], // 最后一个参数，表示执行这个的概率
				[right, 1280, 720, 1104, 72, 1200, 528, 300, 5],
			]
		],
		retest: 300
	}, {
		// 已打开的达摩 体服更新后的UI
		desc: [1280, 720,
			[
				[center, 438, 614, 0x3f84c9],
				[center, 588, 622, 0x340204],
				[center, 722, 618, 0x380204],
				[center, 533, 605, 0x712a0c],
				[center, 471, 612, 0x3b83c9]
			]
		],
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 300, 2], // 最后一个参数，表示执行这个的概率
				[right, 1280, 720, 1104, 72, 1200, 528, 300, 5],
			]
		],
		retest: 300
	}, {// 邀请好友确认
		desc: [1280, 720,
			[
				[center, 460, 258, 0xcbb59e],
				[center, 799, 268, 0xcbb59e],
				[center, 467, 429, 0xdf6851],
				[center, 700, 431, 0xf4b25f],
				[center, 641, 429, 0xcbb59e]
			]
		],
		oper: [
			[center, 1280, 720, 550, 347, 730, 376, 300],
			[center, 1280, 720, 680, 411, 838, 452, 1000],
		],
		notForCnt: true, // 点击确认不统计退出结算的次数
	}, {
		// 单人-胜利太鼓
		desc: [1280, 720,
			[
				[center, 481, 159, 0x841b12],
				[center, 458, 207, 0xa11c10],
				[center, 512, 205, 0xa11b10],
				[center, 515, 168, 0xc7b39e],
				[center, 447, 169, 0xc6b5a0],
				[center, 484, 222, 0xd3c4ae],
				[center, 510, 249, 0xd4c4ab]
			]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 165, 60, 1070, 604, 400, 1],
				[center, 1280, 720, 165, 60, 1263, 530, 400, 1],
			]
		],
		notForCnt: true,
	}, {
		// 组队-胜利太鼓,斗技-胜利太鼓
		desc: [1280, 720,
			[
				[center, 482, 104, 0x851b11],
				[center, 456, 148, 0x9e1c10],
				[center, 503, 147, 0x9d1c10],
				[center, 480, 132, 0xcfc0aa],
				[center, 514, 109, 0xc7b5a1],
				[center, 429, 171, 0xd6c9b1]
			]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 124, 60, 1188, 363, 400, 5],
				[center, 1280, 720, 90, 380, 380, 580, 400, 5],
				[center, 1280, 720, 888, 359, 1204, 492, 400, 5],
			]
		],
		notForCnt: true,
	}
		/*, { // 未打开的达摩
				desc: [1280, 720,
					[[center, 667, 377, 0xba4618],
					[center, 678, 316, 0x080808],
					[center, 589, 314, 0x060606],
					[center, 636, 324, 0xe7e1cf],
					[center, 588, 486, 0x330202]]
				],
				oper: [
					[center, 1280, 720, 153,60, 1202,614, 800],
				],
				notForCnt: true,
			}, { // 未打开的达摩
				desc: [1280,720,
					[[center,667,377,0xd35e2c],
					[center,678,316,0x171614],
					[center,589,314,0x1b1a16],
					[center,636,324,0xfffae4],
					[center,588,486,0x340303]]
				],
				oper: [
					[center, 1280, 720, 153,60, 1202,614, 800],
				],
				notForCnt: true,
			}*/
		, {
		// 单人-失败太鼓
		desc: [1280, 720,
			[
				[center, 465, 151, 0x514a5c],
				[center, 447, 189, 0x60566b],
				[center, 496, 192, 0x5b5165],
				[center, 466, 175, 0xb7a78e],
				[center, 502, 154, 0xae9982],
				[center, 418, 210, 0xb6a388]
			]
		],
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 2000, 2],
				[right, 1280, 720, 1104, 72, 1200, 528, 2000, 5],
			]
		],
	}, {
		// 组队-失败太鼓
		desc: [1280, 720,
			[
				[center, 466, 93, 0x514c5d],
				[center, 448, 135, 0x5d5469],
				[center, 497, 140, 0x5a5365],
				[center, 470, 123, 0xb8a88f],
				[center, 415, 151, 0xb8a589]
			]
		],
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 2000, 2],
				[right, 1280, 720, 1104, 72, 1200, 528, 2000, 5],
			]
		],
	}, {
		// 左上角的统计图标
		desc: [1280, 720,
			[
				[left, 71, 65, 0xac8a5a],
				[left, 80, 59, 0x3c2a21],
				[left, 88, 67, 0xa8835a],
				[left, 77, 82, 0x3a2a22]
			]
		],
		operStepRandom: [
			[
				[right, 1280, 720, 1217, 106, 1272, 700, 400, 5],
				[left, 1280, 720, 600, 672, 1216, 712, 400, 5],
			]
		],
		notForCnt: true,
	}, {
		// 秘闻的胜利，太鼓位置很高
		desc: [1280, 720,
			[
				[center, 816, 101, 0xd1b887],
				[center, 512, 117, 0x9e1c10],
				[center, 455, 122, 0x9f1c10],
				[center, 477, 81, 0x7c1910],
				[center, 481, 102, 0xcebeac],
				[center, 541, 139, 0xd0bfa7]
			]
		],
		oper: [
			[center, 1280, 720, 96, 53, 1177, 210, 1000],
		],
		retest: 300,
	}, {
		// 御魂溢出点确认
		desc: [1280, 720,
			[
				[center, 448, 221, 0x684736],
				[center, 829, 222, 0x654434],
				[center, 705, 248, 0xcbb59e],
				[center, 504, 408, 0xcbb59e],
				[center, 762, 415, 0xcbb59e],
				[center, 771, 352, 0xcbb59e],
				[center, 519, 340, 0xcbb59e],
				[center, 604, 411, 0xf4b25f],
				[center, 684, 438, 0xf4b25f],
				[center, 698, 446, 0x923d2c],
				[center, 596, 493, 0x6d4c3b]
			]
		],
		oper: [
			[center, 1280, 720, 585, 398, 694, 446, 300]
		],
		notForCnt: true,
	}, {
		// 打开后的达摩，所有点都被结算挡住了，使用经验，金币buff，和第一个奖励的xx作为特征
		desc: [1280, 720,
			[
				[left, 172, 657, 0x97bae0],
				[left, 187, 668, 0xf7e624],
				[left, 339, 668, 0xf7e525],
				[center, 268, 177, 0x52422c],
				[center, 363, 177, 0x5e492c],
				[center, 270, 269, 0x604938]
			]
		],
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 2000, 2],
				[right, 1280, 720, 1104, 72, 1200, 528, 2000, 5],
			]
		],
	}, {
		// 金币妖怪
		desc: [1280, 720,
			[
				[center, 435, 68, 0x831a10],
				[center, 364, 67, 0xc94130],
				[left, 297, 44, 0xc83d2e],
				[center, 754, 81, 0xdfca9b],
				[center, 653, 184, 0xf8f3e0],
				[center, 755, 208, 0xf3eedb],
				[center, 643, 194, 0x89b9cc],
				[left, 68, 197, 0x8abdce]
			]
		],
		oper: [
			[center, 1280, 720, 535, 674, 743, 709, 1000],
		]
	}, {//体力不足
		desc: [1280, 720,
			[[center, 586, 471, 0xf7b263],
			[center, 590, 362, 0xfa8f38],
			[center, 670, 366, 0x272420],
			[center, 645, 214, 0xf8f3e0]]
		],
		oper: [
			[center, 1280, 720, 916, 179, 951, 211, 1000]
		]
	}, {
		// 单人-失败太鼓
		desc: [1280, 720,
			[
				[center, 465, 151, 0x514a5c],
				[center, 447, 189, 0x60566b],
				[center, 496, 192, 0x5b5165],
				[center, 466, 175, 0xb7a78e],
				[center, 502, 154, 0xae9982],
				[center, 418, 210, 0xb6a388]
			]
		],
		oper: [
			[center, 1280, 720, 813, 465, 909, 570, 500],
		],
		retest: 800,
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		let thisconf = thisScript.scheme.config['2'];
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
				thisScript.setCurrentScheme(thisconf.next_scheme as string);
				thisScript.myToast(`切换方案为[${thisconf.next_scheme}]`);
				thisScript.rerun();
				sleep(3000);
				return;
			} else if (thisconf && !thisconf.no_sushi_switch_enabled) {
				thisScript.doOspPush(thisScript, { text: '体力不够已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
			}
		}
		return thisScript.oper({
			id: 2,
			name: '退出结算',
			operator: thisOperator.slice(0, -2)
		});
	}
}

export default new Func002();