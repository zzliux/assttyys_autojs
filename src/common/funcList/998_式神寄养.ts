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

export class Func998 implements IFuncOrigin {
	id = 998;
	name = '式神寄养';
	desc = '阴阳寮式神寄养页面';
	config = [
		{
			desc: '',
			config: [
				{
					name: 'change_enchantment_switch',
					desc: '更换结界卡开官',
					type: 'switch',
					default: false,
					value: false,
				},
				{
					name: 'change_enchantment_type',
					desc: '更换结界卡的所属类型',
					type: 'list',
					data: ['太鼓', '斗鱼'],
					default: '太鼓',
					value: '太鼓',
				},
			],
		},
	];
	operator: IFuncOperatorOrigin[] = [
		{
			//	0 检测_是否有体力
			desc: [
				1280,
				720,
				[
					[center, 841, 490, 0x10100c],
					[center, 812, 459, 0x10100e],
					[center, 869, 457, 0x10100c],
					[center, 842, 480, 0x822f16],
					[center, 832, 587, 0x2d2322],
				],
			],
			oper: [
				[center, 1280, 720, 821, 440, 861, 484, 1200], //	点击 体力
			],
		},
		{
			//	1 检测_是否有经验
			desc: [
				1280,
				720,
				[
					[center, 915, 487, 0x10100c],
					[center, 895, 456, 0x10100c],
					[center, 622, 308, 0xe2cbbf],
					[center, 918, 431, 0x10100c],
				],
			],
			oper: [
				[center, 1280, 720, 896, 440, 932, 480, 1200], //	点击 经验
			],
		},
		{
			//	2 检测_体力弹窗
			desc: [1280, 720,
				[
					[center, 332, 151, 0xeeddcc],
					[center, 918, 159, 0xeddccc],
					[center, 372, 553, 0xdfcebe],
					[center, 484, 133, 0x5d3c1f],
					[center, 782, 148, 0x6f5326],
					[center, 453, 678, 0x89341c],
					[center, 696, 675, 0x9cb9df],
					[left, 297, 589, 0xe3e3da],
					[center, 421, 271, 0x8d351f],
				],
			],
			oper: [
				[center, 1280, 720, 611, 476, 676, 519, 1200], //	点击领取
				[center, 1280, 720, 956, 151, 994, 179, 1200], //  点击关闭
				[center, 1280, 720, 956, 151, 994, 179, 1200], //  点击关闭
			],
		},
		{
			//	3 检测_寄养奖励
			desc: [
				1280,
				720,
				[
					[center, 612, 141, 0x10100c],
					[center, 604, 192, 0x10100c],
					[center, 591, 166, 0xffc90d],
					[center, 606, 304, 0xe3cfc3],
				],
			],
			oper: [
				[center, 1280, 720, 592, 148, 628, 183, 1200], //	点击 寄养收成
			],
		},
		{
			//	4 检测_获取奖励
			desc: [
				1280,
				720,
				[
					[center, 526, 194, 0xfbf1ca],
					[center, 620, 196, 0xfbf4d0],
					[center, 872, 300, 0xb29b82],
					[center, 418, 288, 0xb69f86],
					[center, 464, 406, 0xc9b298],
				],
			],
			oper: [
				[center, 1280, 720, 448, 609, 812, 671, 1200], //	点击 空白处
			],
		},
		{
			// 5 点击 式神养成页 空式神寄养
			desc: [
				1280,
				720,
				[
					[right, 1186, 74, 0xd4ccbb],
					[right, 1186, 95, 0x282420],
					[right, 1186, 136, 0xc19b6d],
					[right, 1200, 106, 0xbab19c],
					[center, 756, 186, 0xac9b79],
				],
			],
			oper: [[right, 1280, 720, 1142, 50, 1226, 129, 1200]], //  点击 空式神寄养
		},
		{
			//	6 检测_寄养的式神是否已经寄养结束
			desc: [
				1280,
				720,
				[
					[left, 40, 35, 0xeff5fb],
					[right, 1175, 564, 0xecdbb2],
					[left, 151, 695, 0x4d2f20],
					[right, 1075, 86, 0xaa3620],
					[right, 1166, 137, 0xd0a76d],
					[right, 1197, 128, 0xf3d793],
				],
			],
			oper: [
				[right, 1280, 720, 1147, 49, 1222, 132, 1200], // 点击寄养的式神
			],
		},
		{
			//	7 检测_式神寄养式页
			desc: [
				1280,
				720,
				[
					[right, 1084, 83, 0xa7371d],
					[right, 1184, 203, 0x525252],
					[right, 968, 204, 0x505150],
					[right, 1171, 564, 0xe5d4ab],
					[right, 1127, 715, 0x3e2d1c],
					[right, 1185, 152, 0x414141],
				],
			],
			oper: [
				[left, 1280, 720, 23, 24, 60, 63, 1200], //	点击 退出
			],
		},
		{
			//	8 检测_式神育成是否不为空
			oper: [
				[left, 1280, 720, 92, 299, 135, 333, 1200], //  第一个狗粮位置
				[left, 1280, 720, 297, 308, 352, 334, 1200], //  第二个狗粮位置
				[center, 1280, 720, 515, 297, 572, 342, 1200], //  第三个狗粮位置
				[center, 1280, 720, 728, 299, 780, 339, 1200], //  第四个狗粮位置
				[center, 1280, 720, 953, 294, 998, 344, 1200], //  第五个狗粮位置
				[right, 1280, 720, 1162, 315, 1211, 357, 1200], //  第六个狗粮位置
			],
		},
		{
			//	9 检测_式神育成是否为空
			desc: [
				1280,
				720,
				[
					[left, 112, 228, 0xdabd9b],
					[center, 324, 228, 0xdabd9b],
					[center, 542, 228, 0xdabd9b],
					[center, 752, 228, 0xdabd9b],
					[right, 968, 228, 0xdabd9b],
					[right, 1182, 228, 0xdabd9b],
				],
			],
			oper: [
				[center, 1280, 720, 472, 560, 495, 575, 1200], //	点击 第三个式神
				[center, 1280, 720, 608, 559, 631, 574, 1200], //	点击 第四个式神
				[center, 1280, 720, 745, 555, 769, 576, 1200], //	点击 第五个式神
				[center, 1280, 720, 876, 556, 897, 572, 1200], //	点击 第六个式神
				[center, 1280, 720, 1008, 558, 1032, 578, 1200], //	点击 第七个式神
				[right, 1280, 720, 1041, 556, 1049, 592, -1], //  滑动开始
				[right, 1280, 720, 896, 551, 908, 596, -1], //  滑动结束
			],
		},
		{
			//	10 判断_是否为己方结界
			desc: [
				1280, 720,
				[
					[center, 326, 306, 0xe2cfc4],
					[left, 307, 336, 0xd9c1b3],
					[center, 602, 303, 0xe4cfc3],
					[center, 623, 303, 0xe4cec3],
					[center, 899, 303, 0xe4cfc3],
					[center, 920, 303, 0xe4cfc3],
					[center, 910, 296, 0xe0c065],
					[left, 614, 294, 0xe3c366],
					[left, 629, 293, 0xcaa454],
					[right, 595, 344, 0xb9833b],
					[center, 626, 437, 0x6f4d24],
					[left, 206, 461, 0x12100c],
					[left, 207, 514, 0x12100c],
				]
			],
			oper: [
				[center, 1280, 720, 582, 270, 638, 400, 600], //  点击 式神养成
				[center, 1280, 720, 890, 305, 917, 391, 600], //  点击 结界卡
			],
		},
		{
			//  11 判断_是否有结界卡奖励
			desc: [
				1280,
				720,
				[
					[center, 909, 304, 0xdecdc3],
					[center, 908, 150, 0x10100c],
					[center, 623, 308, 0xe4ccc1],
				],
			],
			oper: [
				[center, 1280, 720, 904, 171, 939, 197, 1200], //  点击 结界卡奖励
			],
		},
		{
			//  12 检测_是否狗粮满级了
			desc: [
				1280,
				720,
				[
					[center, 933, 145, 0x605953],
					[center, 323, 146, 0x625c55],
					[center, 863, 254, 0xcbb59e],
					[center, 420, 246, 0xcbb59e],
					[center, 826, 426, 0xf4b25f],
					[center, 589, 417, 0xdf6851],
					[center, 744, 625, 0x68533e],
				],
			],
			oper: [
				[center, 1280, 720, 449, 415, 584, 448, 1200], //  点击 取消
				[center, 1280, 720, 953, 145, 995, 183, 1200], //  点击 关闭
			],
		},
		{
			//  13 检测_是否为结界卡界面
			desc: [
				1280,
				720,
				[
					[left, 120, 76, 0x75542b],
					[right, 1116, 109, 0xc7bdb2],
					[center, 748, 64, 0x543b2b],
					[right, 1150, 531, 0xb9b0a5],
					[center, 562, 498, 0xc7bdb2],
				],
			],
			oper: [
				[right, 1280, 720, 1160, 96, 1202, 128, 1200], //  点击 关闭
			],
		},
		{
			//  14 检测_结界卡界面_结界卡为空
			desc: [
				1280,
				720,
				[
					[center, 850, 317, 0x452e20],
					[center, 850, 205, 0x826c61],
					[right, 1105, 100, 0xc7bdb3],
					[left, 114, 71, 0x6b4d28],
					[center, 747, 61, 0x543d2c],
				],
			],
			oper: [
				[center, 1280, 720, 381, 107, 486, 140, 1200], // 点击 结界卡类型下拉框
			],
		},
		{
			//  15 检测_检测_结界卡界面_结界卡为空_下拉框已打开
			desc: [
				1280,
				720,
				[
					[center, 844, 291, 0x452e20],
					[center, 844, 211, 0x826c61],
					[center, 575, 102, 0xc7bdb2],
					[center, 466, 120, 0xe7d7c3],
					[center, 490, 566, 0x825e49],
					[center, 377, 192, 0xd7c9ba],
				],
			],
			oper: [
				[center, 1280, 720, 386, 248, 497, 278, 2000], // 点击 结界卡分类 太鼓
				[center, 1280, 720, 392, 317, 491, 348, 2000], // 点击 结界卡分类 斗鱼
				[left, 1280, 720, 278, 201, 465, 266, 2000], // 点击 第一个结界卡
			],
		},
		{
			//  16 检测_结界卡已放置待激活
			desc: [
				1280, 720,
				[
					[center, 897, 276, 0xd0c8bf],
					[center, 847, 208, 0x826c61],
					[right, 1117, 117, 0xc7bdb2],
					[center, 572, 107, 0xc7bdb2],
					[right, 1088, 553, 0xfbf1b1],
					[right, 1150, 563, 0xdec47e],
					[right, 981, 605, 0x423128],
					[center, 958, 590, 0x3f3025],
					[center, 934, 640, 0x423128],
				]
			],
			oper: [
				[right, 1280, 720, 1062, 573, 1140, 638, 1200], //  点击激活
			],
		},
		{
			//  17 检测_结界卡激活确认框
			desc: [
				1280,
				720,
				[
					[center, 854, 188, 0x362d28],
					[right, 1152, 561, 0x5c5235],
					[right, 1109, 120, 0x524e49],
					[center, 850, 255, 0xcbb59e],
					[center, 430, 256, 0xcbb59e],
					[center, 820, 436, 0xf4b25f],
					[center, 580, 430, 0xdf6851],
				],
			],
			oper: [
				[center, 1280, 720, 704, 416, 820, 447, 1200], //  点击 确认
			],
		},
		{
			//  18 检测_结界卡已激活_高星(4+星)适配
			desc: [
				1280,
				720,
				[
					[center, 897, 276, 0xd0c8bf],
					[center, 847, 208, 0x826c61],
					[right, 1117, 117, 0xc7bdb2],
					[center, 572, 107, 0xc7bdb2],
					[right, 1150, 563, 0xdec47e],
					[center, 946, 605, 0xc4a379],
					[right, 986, 586, 0xd2af88],
					[right, 974, 596, 0xbc9a73],
				],
			],
		},
		{
			//  19 检测_经验弹窗
			desc: [
				1280,
				720,
				[
					[center, 332, 151, 0xeeddcc],
					[center, 918, 159, 0xeddccc],
					[center, 372, 553, 0xdfcebe],
					[center, 484, 133, 0x5d3c1f],
					[center, 782, 148, 0x6f5326],
					[center, 453, 678, 0x89341c],
					[center, 696, 675, 0x9cb9df],
					[left, 292, 460, 0xffffff],
				],
			],
		},
		{
			//  20 检测_结界卡已激活_低星(3-星)适配
			desc: [
				1280,
				720,
				[
					[center, 897, 276, 0xd0c8bf],
					[center, 847, 208, 0x826c61],
					[right, 1117, 117, 0xc7bdb2],
					[center, 572, 107, 0xc7bdb2],
					[right, 1150, 563, 0xdec47e],
					[center, 946, 605, 0xc4a379],
					[right, 986, 586, 0x3f2f27],
					[right, 974, 596, 0x403027],
				],
			],
		},
		{
			//  21  检测_是否前往寄养弹窗
			desc: [
				1280, 720,
				[
					[center, 797, 177, 0x9e866e],
					[center, 836, 177, 0xcbb59e],
					[center, 805, 505, 0xf4b25f],
					[center, 667, 534, 0xf4b25f],
					[center, 640, 518, 0xcbb59e],
					[center, 611, 508, 0xf4b25f],
					[center, 470, 530, 0xf4b25f],
					[center, 441, 549, 0xcbb59e],
				]
			],
			oper: [
				[center, 1280, 720, 392, 590, 872, 666, 1200] //  点击空白处_退出
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['998'];

		if (
			thisScript.oper({
				id: 998,
				name: '检测_获取奖励',
				operator: [
					{
						desc: thisOperator[4].desc,
					},
					thisOperator[21]
				],
			})
		) {
			return true;
		}

		if (
			thisScript.global.jy_change_shikigami === 'change' &&
			thisScript.oper({
				id: 998,
				name: '判断_是否为己方结界_点击式神育成',
				operator: [
					{
						desc: thisOperator[10].desc,
					},
				],
			})
		) {
			return thisScript.oper({
				id: 998,
				name: '点击式神育成',
				operator: [
					{
						oper: [thisOperator[10].oper[0]],
					},
				],
			});
		}

		if (
			thisScript.global.jy_change_shikigami !== 'jy_flag' &&
			thisScript.oper({
				id: 998,
				name: '检测是否为式神寄养列表',
				operator: [
					{
						desc: thisOperator[7].desc,
					},
				],
			})
		) {
			if (thisScript.global.jy_change_shikigami === 'get_reward') {
				return thisScript.oper({
					id: 998,
					name: '退出式神寄养列表',
					operator: [
						{
							oper: [thisOperator[7].oper[0]],
						},
					],
				});
			}

			console.log('检测式神育成是否不为空');
			const fullLevelPoint = thisScript.findMultiColorEx('寄养狗粮_满级标识');
			if (fullLevelPoint && fullLevelPoint.length > 0) {
				console.log('有狗粮满级了,清空狗粮');

				for (let i = 0; i < fullLevelPoint.length; i++) {
					sleep(1000);

					const oper = [
						[
							fullLevelPoint[i].x,
							fullLevelPoint[i].y,
							fullLevelPoint[i].x + 20,
							fullLevelPoint[i].y + 20,
							200,
						],
					];
					console.log('清空满级狗粮', i);
					thisScript.regionClick(oper);
				}

				return true;
			} else {
				// 狗粮没满级
				console.log('狗粮没满级');
			}

			const emptyPoint = thisScript.findMultiColorEx('寄养狗粮_空');
			if (emptyPoint && emptyPoint.length > 0) {
				const emptyCount = emptyPoint.length;

				const shikigamiIndex = 6 - emptyCount;

				if (shikigamiIndex === 5) {
					// 需要滑动
					thisScript.regionBezierSwipe(thisOperator[9].oper[5], thisOperator[9].oper[6], [1200, 1250], 1000);
					sleep(1000);
					return thisScript.oper({
						id: 998,
						name: '缺一个狗粮补狗粮',
						operator: [
							{
								oper: [thisOperator[9].oper[4]],
							},
						],
					});
				} else {
					for (let i = 0; i < emptyCount; i++) {
						sleep(1000);
						thisScript.oper({
							id: 998,
							name: '补狗粮',
							operator: [
								{
									oper: [thisOperator[9].oper[shikigamiIndex]],
								},
							],
						});
					}
				}
				return true;
			} else {
				console.log('没有空位了');
				console.log('状态为：获取奖励');
				thisScript.global.jy_change_shikigami = 'get_reward';
			}
		}

		if (
			thisScript.oper({
				id: 998,
				name: '检测_是否狗粮满级了',
				operator: [thisOperator[12]],
			})
		) {
			thisScript.global.jy_change_shikigami = 'change';
			return true;
		}

		if (thisScript.global.jy_change_shikigami === 'get_reward') {
			if (
				thisScript.oper({
					id: 998,
					name: '获取体力奖励',
					operator: [
						thisOperator[0], //	0 检测_是否有体力
						thisOperator[2], //	2 检测_体力弹窗
					],
				})
			) {
				return true;
			} else {
				if (thisScript.global.jy_experience_wine_pot_count < 3) {
					if (
						thisScript.oper({
							id: 998,
							name: '检测_是否有经验酒壶',
							operator: [thisOperator[1]],
						})
					) {
						return true;
					}
				}

				if (
					thisScript.oper({
						id: 998,
						name: '检测_经验酒壶弹窗',
						operator: [
							{
								desc: thisOperator[19].desc,
								oper: thisOperator[2].oper,
							},
						],
					})
				) {
					// 提取经验酒壶次数 + 1
					thisScript.global.jy_experience_wine_pot_count += 1;
					return true;
				}

				if (thisScript.global.jy_enchantment_experience_count < 1) {
					if (
						thisScript.oper({
							id: 998,
							name: '判断_是否有结界卡奖励',
							operator: [thisOperator[11]],
						})
					) {
						thisScript.global.jy_enchantment_experience_count += 1;
						return true;
					}
				}

				if (
					thisScript.oper({
						id: 998,
						name: '检测_寄养奖励',
						operator: [thisOperator[3]],
					})
				) {
					return true;
				}

				//	做延时识别
				if (thisScript.global.checked_yard_count > 30) {
					thisScript.global.checked_yard_count = 0;

					// 获取寄养奖励是获取奖励的最后一步，获取成功后则开始更换结界卡逻辑
					if (thisconf && thisconf.change_enchantment_switch) {
						thisScript.global.jy_change_shikigami = 'change_enchantment';
						console.log('状态为：更换结界卡');
					} else {
						thisScript.global.jy_change_shikigami = 'jy_flag';
						console.log('状态为：开始寄养');
					}

					return true;
				} else {
					sleep(500);
					if (!thisScript.global.checked_yard_count) {
						thisScript.global.checked_yard_count = 1;
					} else {
						thisScript.global.checked_yard_count += 1;
					}
					return true;
				}
			}
		}

		if (thisScript.global.jy_change_shikigami === 'change_enchantment') {
			if (
				thisScript.oper({
					id: 998,
					name: '更换结界卡',
					operator: [
						{
							desc: thisOperator[10].desc,
							oper: [thisOperator[10].oper[1]],
						},
					],
				})
			) {
				return true;
			}

			if (
				thisScript.oper({
					id: 998,
					name: '检测_结界卡激活确认框',
					operator: [thisOperator[17]],
				})
			) {
				return true;
			}

			if (
				thisScript.oper({
					id: 998,
					name: '检测_是否为结界卡界面',
					operator: [
						{
							desc: thisOperator[13].desc,
						},
					],
				})
			) {
				if (
					thisScript.oper({
						id: 998,
						name: '检测_结界卡界面_结界卡为空_下拉框已打开',
						operator: [
							{
								desc: thisOperator[15].desc,
							},
						],
					})
				) {
					const change_enchantment_type_index =
						thisconf && thisconf.change_enchantment_type === '斗鱼'
							? 1
							: 0 || 0;
					return thisScript.oper({
						id: 998,
						name: '点击 结界卡分类',
						operator: [
							{
								oper: [
									thisOperator[15].oper[change_enchantment_type_index],
									thisOperator[15].oper[2],
								],
							},
						],
					});
				}

				if (
					thisScript.oper({
						id: 998,
						name: '更换结界操作_点击下拉框',
						operator: [thisOperator[14], thisOperator[16]],
					})
				) {
					return true;
				}

				if (
					thisScript.oper({
						id: 998,
						name: '检测_结界卡已激活',
						operator: [
							{
								desc: thisOperator[18].desc,
							},
							{
								desc: thisOperator[20].desc,
							},
						],
					})
				) {
					thisScript.global.jy_change_shikigami = 'jy_flag';
					return thisScript.oper({
						id: 998,
						name: '退出结界卡界面',
						operator: [
							{
								oper: [thisOperator[13].oper[0]],
							},
						],
					});
				}
			}
		}

		if (thisScript.global.jy_change_shikigami === 'jy_flag') {
			if (
				thisScript.oper({
					id: 998,
					name: '检测是否为式神寄养列表',
					operator: [
						{
							desc: thisOperator[10].desc,
							oper: [thisOperator[10].oper[0]],
						},
						thisOperator[5],
						thisOperator[6],
					],
				})
			) {
				return true;
			}
		}

		return false;
	}
}
