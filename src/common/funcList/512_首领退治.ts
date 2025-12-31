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

export class Func512 implements IFuncOrigin {
	id = 512;
	name = '首领退治_挑战';
	operator: IFuncOperatorOrigin[] = [
		{
			// 0 检测_是否为首领退治集结页
			desc: [
				1280,
				720,
				[
					[left, 182, 37, 0xd5c4a3],
					[left, 108, 26, 0xd7c5a2],
					[left, 47, 28, 0xd7c5a2],
					[left, 232, 139, 0x583716],
					[left, 76, 550, 0x322219],
					[right, 1039, 648, 0xd3c3bd],
					[center, 872, 606, 0x493a38],
					[center, 727, 611, 0xdfc7ac],
					[right, 1172, 568, 0xd6bda3],
					[right, 1217, 662, 0xebc47b],
				],
			],
			oper: [
				[right, 1280, 720, 1157, 577, 1232, 646, 1200], // 点击挑战
			],
		},
		{
			//	1 检测_首领结束页
			desc: [
				1280,
				720,
				[
					[left, 172, 262, 0xd7cfbe],
					[left, 164, 347, 0xd8cfbf],
					[left, 129, 442, 0xe0d8c8],
					[center, 486, 132, 0xd5c6b0],
					[center, 841, 130, 0x8a6940],
					[right, 1098, 341, 0x9c8154],
				],
			],
			oper: [
				[right, 1280, 720, 1224, 112, 1274, 691, 1200], //	点击空白处关闭
			],
		},
		{
			//  2 检测_寮活动神社
			desc: [
				1280,
				720,
				[
					[left, 43, 29, 0xf4e3a4],
					[right, 1042, 60, 0x2f1e36],
					[left, 258, 60, 0x392741],
					[left, 77, 367, 0x341f2c],
					[right, 1185, 602, 0x2c1a1a],
					[right, 1203, 665, 0x802523],
					[center, 621, 711, 0x7d5f2d],
				],
			],
		},
		{
			//  3 检测_寮活动信息
			desc: [
				1280,
				720,
				[
					[center, 480, 79, 0xb7a897],
					[right, 1216, 159, 0xc57747],
					[right, 1216, 543, 0x724938],
					[right, 1219, 396, 0x885740],
					[right, 1180, 294, 0x835941],
					[center, 470, 656, 0xb3a392],
					[right, 1112, 634, 0x518ab3],
				],
			],
		},
		{
			// 4 检测_首领退治 会长页
			desc: [
				1280,
				720,
				[
					[center, 800, 30, 0x593716],
					[left, 40, 42, 0xfff1ee],
					[right, 1228, 25, 0x25161f],
					[right, 1178, 623, 0xf1d5a2],
					[right, 1210, 541, 0xdfc5a6],
					[center, 532, 23, 0x221420],
					[center, 750, 537, 0x8b0813],
				],
			],
			oper: [
				[right, 1280, 720, 1137, 542, 1224, 609, 1200], //	点击开启
				[left, 1280, 720, 25, 20, 75, 70, 1200], //  点击返回
			],
		},
		{
			//	5 检测_首领退治开启后弹框
			desc: [
				1280,
				720,
				[
					[center, 448, 240, 0xc4ae95],
					[center, 834, 458, 0xcbb59c],
					[center, 785, 406, 0xf3b25e],
					[center, 695, 432, 0xf3b25e],
					[center, 637, 426, 0xcbb59c],
					[center, 581, 408, 0xdf6851],
					[center, 487, 429, 0xdf6851],
				],
			],
			oper: [
				[center, 1280, 720, 697, 410, 794, 436, 1200], //	点击确认
			],
		},
		{ // 6 检查_首领退治是否已开启
			desc: [1280, 720,
				[[center, 765, 235, 0xb63b32],
					[center, 815, 265, 0xdebae3],
					[center, 840, 242, 0x241212],
					[center, 846, 185, 0x802318],
					[center, 705, 242, 0x070605],
					[center, 750, 256, 0xa96b68]]
			],
			oper: [
				[center, 1280, 720, 656, 177, 855, 322, 1200]	// 打开首领退治
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// const thisconf = thisScript.scheme.config['512'];

		if (
			thisScript.oper({
				name: '检测_首领退治开启后弹框',
				operator: [thisOperator[5]],
			})
		) {
			// 做延时检测 防止登陆后的弹窗
			if (!thisScript.global.checked_yard_count) {
				thisScript.global.checked_yard_count = 1;
			} else {
				thisScript.global.checked_yard_count += 1;
				sleep(1000);
			}

			return true;
		}

		if (
			thisScript.oper({
				name: '检测_是否为首领退治开启页',
				operator: [
					{
						desc: thisOperator[4].desc,
					},
				],
			})
		) {
			if (thisScript.global.checked_yard_count === 3) {
				return thisScript.oper({
					name: '检测_是否为首领退治已开启，返回寮活动界面',
					operator: [
						{
							oper: [thisOperator[4].oper[1]],
						},
					],
				});
			} else {
				return thisScript.oper({
					name: '检测_点击首领退治开启',
					operator: [
						{
							oper: [thisOperator[4].oper[0]],
						},
					],
				});
			}
		}

		if (
			thisScript.oper({
				name: '检测_是否为首领退治集结页',
				operator: [thisOperator[0], thisOperator[6]],
			})
		) {
			return true;
		}

		if (
			thisScript.oper({
				name: '检测_首领结束页',
				operator: [thisOperator[1], thisOperator[2], thisOperator[3]],
			})
		) {
			if (
				thisScript.runtimeParams &&
        thisScript.runtimeParams.liao_activity_state
			) {
				thisScript.runtimeParams.liao_activity_state['huntBoss'] = true;

				const next_scheme = '返回庭院';
				thisScript.rerun(next_scheme, {
					next_scheme_name: '庭院进入寮每日活动',
					liao_activity_state: thisScript.runtimeParams.liao_activity_state,
				});
			} else {
				const next_scheme = '返回庭院';
				thisScript.rerun(next_scheme);
			}
		}
		return false;
	}
}
