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

export class Func508 implements IFuncOrigin {
	id = 508;
	name = '逢魔首领';
	config = [
		{
			desc: '是否开启极',
			config: [
				{
					name: 'switch_ji_enabled',
					desc: '是否启用逢魔·极',
					type: 'switch',
					default: false,
					value: false,
				},
			],
		},
	];
	operator: IFuncOperatorOrigin[] = [
		{ // 0 已适配66 检测_现世逢魔奖励是否已领取
			desc: [1280, 720,
				[
					// 逢魔场景
					[left, 19, 700, 0x3c3841],
					[left, 42, 46, 0xc3cbdf],
					[center, 754, 39, 0x583716],
					[center, 1181, 650, 0xffffff],
					[left, 45, 680, 0xc99c7e],
					[left, 54, 676, 0x433b42],
					// 4次完成后的灰达摩
					[right, 1242, 248, 0x494949],
					[right, 1228, 209, 0x767676],
					[right, 1243, 252, 0x333333],
				],
			],
			oper: [
				[right, 1280, 720, 1002, 645, 1045, 693, 1000], // 进入首领按钮
			],
		},
		{
			// 1 已适配66 检测_是否找到逢魔首领
			desc: [1280, 720,
				[
					[center, 694, 400, 0x810517],
					[center, 615, 399, 0x500c19],
					[center, 693, 401, 0x830417],
				]
			],
			oper: [
				[center, 1280, 720, 579, 303, 702, 407, 1200], //	点击逢魔首领
			],
		},
		{
			// 2 已适配66 检测_首领BOSS挑战页
			desc: [
				1280, 720,
				[
					[left, 111, 57, 0xc3a765],
					[left, 111, 245, 0xd4cbc3],
					[left, 161, 673, 0xc3a561],
					[center, 627, 621, 0x1f1b18],
					[right, 1101, 265, 0xc7c5bc],
					[right, 1129, 680, 0x5e1919],
					[right, 1119, 564, 0xead8b9],
				]
			],
			oper: [
				[right, 1280, 720, 1120, 550, 1160, 587, 1000], //	点击挑战
				[right, 1280, 720, 1141, 68, 1160, 89, 1000], //	点击关闭
			],
		},
		{
			// 3 检测_是否为提示框
			desc: [1280, 720,
				[
					[right, 1058, 558, 0xcfc3b2],
					[center, 815, 422, 0xf4b25f],
					[center, 585, 433, 0xdf6851],
					[center, 843, 336, 0xcbb59e],
					[left, 117, 214, 0x595450],
				],
			],
			oper: [
				[center, 1280, 720, 551, 343, 577, 371, 1200], //	点击确认
				[center, 1280, 720, 677, 407, 838, 456, 1200],
			],
		},
		{ //	4 检测_点击进入战斗
			desc: [1280, 720,
				[
					[left, 174, 36, 0xd5c5a4],
					[left, 108, 26, 0xd7c5a2],
					[left, 48, 32, 0xd7c5a2],
					[center, 687, 484, 0xbeab92],
					[center, 846, 631, 0x8b4243],
					[right, 1022, 609, 0xc73e4d],
				],
			],
			oper: [
				[center, 1280, 720, 597, 465, 689, 539, 1200], //	点击进入战斗
			],
		},
		{
			//	5 检测_战斗页结算页
			desc: [1280, 720,
				[
					[center, 530, 115, 0xd3c4ae],
					[left, 150, 197, 0xf6f1de],
					[center, 888, 79, 0xdcc499],
					[center, 781, 443, 0xf8f3e0],
					[center, 639, 113, 0xf34c38],
				],
			],
			oper: [
				[right, 1280, 720, 1217, 164, 1273, 706, 1200], //	点击空白处
			],
		},
		{
			//	6 检测_集结页结算页
			desc: [1280, 720,
				[
					[center, 530, 115, 0xd3c4ae],
					[left, 157, 210, 0xf8f3e0],
					[center, 888, 79, 0xdcc499],
					[center, 789, 456, 0xf8f3e0],
					[center, 639, 113, 0xf34c38],
				],
			],
		},
		{
			//	7 检测_逢魔BOSS集结场景
			desc: [1280, 720,
				[
					[center, 846, 632, 0x8f4544],
					[right, 1022, 609, 0xc73e4d],
					[right, 1159, 616, 0xefefef],
					[left, 108, 26, 0xd7c5a2],
					[left, 180, 22, 0xd4c4a3],
				],
			],
		},
		{
			// 8 检测_逢魔·极 首领BOSS挑战页
			desc: [1280, 720,
				[
					[right, 1108, 84, 0xcb9d66],
					[right, 1181, 140, 0x8e3128],
					[right, 1214, 625, 0x9a4037],
					[right, 1056, 621, 0x1d0c0a],
					[left, 73, 585, 0x892b25],
					[center, 610, 127, 0xcab9ab],
				],
			],
		},
		{
			//	9 检测_是否有寻找 逢魔·极 按钮
			desc: [1280, 720,
				[
					[right, 1022, 659, 0x8b3038],
					[right, 1022, 646, 0x471a21],
					[right, 1230, 241, 0x696969],
					[center, 811, 657, 0xdbd1c3],
					[center, 921, 678, 0xbf443b],
				]
			],
			oper: [
				[center, 1280, 720, 903, 658, 940, 689, 1000], // 进入首领极按钮
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['508'];
		if (
			thisScript.oper({
				name: '检测_结算页',
				operator: [
					{
						desc: thisOperator[7].desc,
					},
				],
			})
		) {
			const point = thisScript.findMultiColor('逢魔_捡垃圾');

			if (point) {
				console.log('逢魔_捡垃圾');
				const oper = [[point.x - 2, point.y - 2, point.x + 2, point.y + 2, 1200]];
				thisScript.regionClick(oper);
			}

			if (!thisScript.global.fm_kiss_boss_flag) {
				thisScript.global.fm_kiss_boss_flag = true;
			}
		}

		if (
			thisScript.oper({
				name: '检测_是否找到逢魔首领',
				operator: [
					{
						desc: thisOperator[1].desc,
						oper: thisOperator[1].oper,
					},
				],
			})
		) {
			return true;
		}

		if (
			thisScript.oper({
				name: '检测_首领BOSS挑战页',
				operator: [
					{
						desc: thisOperator[2].desc,
					},
					{
						desc: thisOperator[8].desc,
					},
				],
			})
		) {
			thisScript.oper({
				name: '点击首领BOSS挑战按钮',
				operator: [
					{
						oper: [thisOperator[2].oper[0]],
					},
				],
			});
			console.log(
				'检测首领boss是否能挑战,重试次数为:',
				thisScript.global.checked_yard_count
			);
			// 做延时检测 防止不断重试点击挑战
			if (thisScript.global.checked_yard_count >= 3) {
				thisScript.global.checked_yard_count = 0;
				console.log('无法点击首领BOSS集结挑战，退出集结挑战页');
				thisScript.oper({
					name: '检测_关闭首领BOSS',
					operator: [
						{
							oper: [
								thisOperator[2].oper[1],
							],
						},
					],
				});

				sleep(500);

				if (thisConf && thisConf['switch_ji_enabled']) {
					if (
						thisScript.oper({
							name: '检测_是否有寻找 逢魔·极 按钮',
							operator: [
								thisOperator[9]
							],
						})
					) {
						if (!thisScript.global.fm_boss_btn_click_cnt) {
							thisScript.global.fm_boss_btn_click_cnt = 0;
						}
						if (++thisScript.global.fm_boss_btn_click_cnt >= 10) {
							thisScript.global.fm_kiss_boss_flag = true;
							thisScript.myToast(
								`第${thisScript.global.fm_boss_btn_click_cnt}次点击查找逢魔·极首领按钮未成功进入首领挑战，标记挑战成功a`
							);
						} else {
							thisScript.myToast(
								`第${thisScript.global.fm_boss_btn_click_cnt}次点击查找逢魔·极首领按钮a`
							);
						}
						return true;
					}
				}

				if (
					thisScript.oper({
						name: '检测_点击寻找首领按钮',
						operator: [
							{
								oper: thisOperator[0].oper,
							},
						],
					})
				) {
					if (!thisScript.global.fm_boss_btn_click_cnt) {
						thisScript.global.fm_boss_btn_click_cnt = 0;
					}
					if (++thisScript.global.fm_boss_btn_click_cnt >= 10) {
						thisScript.global.fm_kiss_boss_flag = true;
						thisScript.myToast(
							`第${thisScript.global.fm_boss_btn_click_cnt}次点击查找逢魔首领按钮未成功进入首领挑战，标记挑战成功a`
						);
					} else {
						thisScript.myToast(
							`第${thisScript.global.fm_boss_btn_click_cnt}次点击查找逢魔首领按钮a`
						);
					}
					return true;
				}
			} else {
				sleep(1500);
				if (!thisScript.global.checked_yard_count) {
					thisScript.global.checked_yard_count = 1;
				} else {
					thisScript.global.checked_yard_count += 1;
				}
			}

			return true;
		}

		if (
			thisScript.oper({
				name: '检测_是否为提示框',
				operator: [
					{
						desc: thisOperator[3].desc,
						oper: thisOperator[3].oper,
					},
				],
			})
		) {
			return true;
		}

		if (
			thisScript.oper({
				name: '检测_点击进入战斗',
				operator: [
					{
						desc: thisOperator[4].desc,
						oper: thisOperator[4].oper,
					},
				],
			})
		) {
			return true;
		}

		if (
			thisScript.oper({
				name: '检测_结算页',
				operator: [
					{
						desc: thisOperator[5].desc,
						oper: thisOperator[5].oper,
					},
				],
			}) ||
			thisScript.oper({
				name: '检测_结算页',
				operator: [
					{
						desc: thisOperator[6].desc,
						oper: thisOperator[5].oper,
					},
				],
			})
		) {
			thisScript.global.fm_kiss_boss_flag = true;
			return true;
		}

		if (
			thisScript.oper({
				name: '检测_现世逢魔奖励是否已领取',
				operator: [
					{
						desc: thisOperator[0].desc,
					},
				],
			})
		) {
			if (thisScript.global.fm_kiss_boss_flag) {
				const next_scheme = '返回庭院';
				thisScript.rerun(next_scheme);
			} else {
				//	检测 是否有开启 逢魔·极
				if (thisConf && thisConf['switch_ji_enabled']) {
					if (
						thisScript.oper({
							name: '检测_是否有寻找 逢魔·极 按钮',
							operator: [thisOperator[9]],
						})
					) {
						if (!thisScript.global.fm_boss_btn_click_cnt) {
							thisScript.global.fm_boss_btn_click_cnt = 0;
						}
						if (++thisScript.global.fm_boss_btn_click_cnt >= 4) {
							thisScript.global.fm_kiss_boss_flag = true;
							thisScript.myToast(
								`第${thisScript.global.fm_boss_btn_click_cnt}次点击查找逢魔·极首领按钮未成功进入首领挑战，标记挑战成功e`
							);
						} else {
							thisScript.myToast(
								`第${thisScript.global.fm_boss_btn_click_cnt}次点击查找逢魔·极首领按钮e`
							);
						}
						return true;
					}
				}

				if (
					thisScript.oper({
						name: '检测_点击寻找首领按钮',
						operator: [
							{
								oper: thisOperator[0].oper,
							},
						],
					})
				) {
					if (!thisScript.global.fm_boss_btn_click_cnt) {
						thisScript.global.fm_boss_btn_click_cnt = 0;
					}
					if (++thisScript.global.fm_boss_btn_click_cnt >= 4) {
						thisScript.global.fm_kiss_boss_flag = true;
						thisScript.myToast(
							`第${thisScript.global.fm_boss_btn_click_cnt}次点击查找逢魔首领按钮未成功进入首领挑战，标记挑战成功e`
						);
					} else {
						thisScript.myToast(
							`第${thisScript.global.fm_boss_btn_click_cnt}次点击查找逢魔首领按钮e`
						);
					}
					return true;
				}
			}
		}

		return false;
	}
}
