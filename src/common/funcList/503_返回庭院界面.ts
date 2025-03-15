import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func503 implements IFuncOrigin {
	id = 503;
	name = '返回庭院界面';
	desc = '支持从探索地图退出至庭院界面';
	config = [{
		desc: '结束后切换方案',
		config: [{
			name: 'scheme_switch_enabled',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用准备退出',
		}, {
			name: 'afterCountOper',
			desc: '不开启切换方案	则',
			type: 'list',
			data: ['停止脚本', '关闭应用', '不进行任何操作'],
			default: '停止脚本',
		}]
	}, {

		desc: '选择需要执行操作的界面',
		config: [{
			name: 'oper_0',
			desc: '0 探索地图界面',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_1',
			desc: '1 阴阳寮神设首页',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_2',
			desc: '2 斗技界面',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_3',
			desc: '3 栏目',
			type: 'switch',
			default: true,
		}, {

			name: 'oper_5',
			desc: '5 现世逢魔',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_6',
			desc: '6 宠物后院',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_7',
			desc: '7 召唤屋',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_10',
			desc: '10 阴阳寮主页',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_11',
			desc: '11 阴阳寮_寄养_己方结界',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_14',
			desc: '14 阴阳寮成就页',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_15',
			desc: '15 式神录',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_17',
			desc: '17 突破界面',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_18',
			desc: '18 客户端更新窗口关闭',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_19',
			desc: '19 阴阳寮神社 获取称号弹窗',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_20',
			desc: '20 道馆地图',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_21',
			desc: '21 点开勋章后的突破界面',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_22',
			desc: '22 战斗界面等待结束',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_23',
			desc: '23 战斗界面_手动状态等待结束',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_24',
			desc: '24 寮神社界面',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_25',
			desc: '25 寮信息界面',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_27',
			desc: '27 探索里面',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_28',
			desc: '28 探索章节界面_普通_困难',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_29',
			desc: '29 巅峰斗技主界面',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_30',
			desc: '30 巅峰斗技主界面_段位保护',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_31',
			desc: '31 巅峰斗技主界面_段位保护裂',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_32',
			desc: '32 巅峰斗技主界面_名士',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_33',
			desc: '33 狭间暗域4个区域',
			type: 'switch',
			default: true,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{	// 0 探索地图
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 32, 34, 76, 81, 1000],
		]
	}, { 	// 1 阴阳寮神设首页
		desc: [1280, 720,
			[
				[left, 44, 28, 0xf1e0ad],
				[left, 74, 32, 0xaa885f],
				[left, 53, 42, 0xedd28f],
				[right, 1199, 89, 0x761021],
				[right, 1189, 628, 0x8c6a44]
			]
		],
		oper: [
			[left, 1280, 720, 25, 9, 74, 55, 2000]
		]
	}, { 	// 2 斗技界面
		desc: [1280, 720,
			[
				[left, 126, 26, 0xf8f3e0],
				[left, 164, 26, 0xe3decf],
				[right, 1203, 598, 0x3e1c0c],
				[right, 1196, 555, 0xb94311]
			]
		],
		oper: [
			[left, 1280, 720, 22, 6, 65, 45, 1000]
		]
	}, {	// 3 栏目
		desc: [1280, 720,
			[
				[center, 568, 108, 0x973933],
				[center, 742, 62, 0x8c3131],
				[center, 807, 50, 0x564c45],
				[right, 1144, 88, 0xe7d5cf],
				[right, 1113, 285, 0x5c3e2f]
			]
		],
		oper: [
			[right, 1280, 720, 1124, 75, 1163, 103, 1000]
		]
	}, {	// 4 旧版町中界面
		desc: [1280, 720,
			[
				[right, 1067, 221, 0xb5aaad],
				[right, 1054, 321, 0x989694],
				[right, 1054, 344, 0x969592],
				[right, 1052, 352, 0x999595],
				[right, 1056, 413, 0x938f8f],
				[right, 1054, 433, 0x8e8b8a]
			]
		],
		oper: [
			[right, 1280, 720, 1012, 228, 1093, 298, 1000],
		]
	}, {	// 5 现世逢魔
		desc: [1280, 720,
			[
				[left, 19, 700, 0x3c3841],
				[left, 42, 46, 0xc3cbdf],
				[center, 754, 39, 0x583716],
				[center, 1181, 650, 0xffffff],
				[left, 43, 680, 0xc7957c],
				[left, 54, 676, 0x433b42]
			]
		],
		oper: [
			[left, 1280, 720, 27, 25, 72, 73, 1000],
		]
	}, {	// 6 宠物后院(管他有没有人用)
		desc: [1280, 720,
			[
				[left, 34, 630, 0x4c3b3b],
				[left, 59, 672, 0x442b23],
				[right, 1210, 669, 0xc79e70],
				[right, 1122, 652, 0xb2cae3],
				[center, 638, 16, 0xf3e7e3]
			]
		],
		oper: [
			[left, 1280, 720, 37, 24, 70, 61, 1000],
		]
	}, {	// 7 召唤屋(管他有没有人用)
		desc: [1280, 720,
			[
				[left, 148, 38, 0xb28956],
				[left, 171, 28, 0xb28956],
				[center, 516, 22, 0x73abc9],
				[center, 544, 628, 0x5599dd],
				[right, 1180, 30, 0xd2ab80],
				[right, 1108, 35, 0xcb9e70]
			]
		],
		oper: [
			[left, 1280, 720, 31, 8, 76, 50, 1000],
		]
	}, {
		// 8 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
		desc: '页面是否为庭院_菜单未展开_只支持默认庭院皮肤与默认装饰',
	},
	{
		// 9 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
	}, { 	// 10 判断_阴阳寮主页
		desc: [
			1280, 720,
			[
				[right, 1096, 630, 0xb1251f],
				[right, 1105, 662, 0xdbe3f1],
				[left, 45, 39, 0xf4e4a3],
				[center, 886, 644, 0xe0cbaa],
			]
		],
		oper: [
			[left, 1280, 720, 23, 10, 71, 56, 2000],   // 返回按钮
		]
	}, { 	// 11 阴阳寮_寄养_己方结界
		desc: [1280, 720,
			[
				[center, 611, 300, 0x0c0804],
				[center, 913, 305, 0x0c0804],
				[left, 318, 305, 0x0c0804],
				[center, 613, 294, 0xe1cf6b],
				[left, 202, 462, 0x10100c]
			]
		],
		oper: [
			[left, 1280, 720, 23, 10, 71, 56, 2000],   // 返回按钮
		]
	}, {	// 12 判断_是否为庭院中的'町中'立牌
		desc: [
			1280, 720,
			[
				[center, 738, 324, 0x979693],
				[center, 738, 349, 0x999595],
				[center, 740, 247, 0xb7b0af],
				[center, 754, 302, 0xaba896],
			]
		]
	}, {
		//	13 页面是否为庭院(菜单已展开)另一种图标 御祝图标 只支持默认庭院皮肤与默认装饰
		desc: '页面是否为庭院_菜单已展开_另一种图标_御祝图标_只支持默认庭院皮肤与默认装饰',
	}, {	// 14 判断_阴阳寮成就页
		desc:
			[
				1280, 720,
				[
					[right, 1055, 230, 0x997242],
					[right, 1072, 462, 0xecd7b9],
					[center, 347, 490, 0xb8a281],
					[center, 357, 240, 0xf5ebd5],
					[center, 830, 150, 0xefe4d0],
					[center, 697, 172, 0x805054],
					[center, 827, 230, 0xb58a55],
				]
			],
		oper: [
			[center, 1280, 720, 357, 535, 1045, 662, 1200]	//	点击空白处
		]
	}, {	// 15 式神录
		desc: '式神录',
		oper: [
			[center, 1280, 720, 21, 9, 59, 43, 1000],
		]
	}, {
		// 16 庭院已打开菜单，另另外一种图标
		desc: '庭院已打开菜单_另另外一种图标',
	}, {
		// 17 突破界面
		desc: '突破界面',
		oper: [
			[center, 1280, 720, 1187, 112, 1228, 150, 1000],
			[center, 1280, 720, 31, 37, 79, 76, 1000],
		]
	}, {
		// 18 客户端更新窗口关闭
		desc: [
			1280, 720,
			[
				[center, 405, 395, 0xeddccc],
				[center, 869, 419, 0xeddccc],
				[center, 714, 556, 0xf4b25f],
				[center, 915, 131, 0x65333b],
				[right, 1224, 50, 0x54422f],
			]
		],
		oper: [
			[center, 1280, 720, 894, 119, 941, 175, 1000],
		]
	}, {
		//	19 阴阳寮神社 获取称号弹窗
		desc: [
			1280, 720,
			[
				[center, 359, 256, 0xf5ebd6],
				[center, 716, 256, 0xf3e4d0],
				[right, 1004, 241, 0xc8b5a0],
				[right, 1061, 227, 0x966a3a],
				[right, 966, 472, 0xdccdb1],
				[right, 1079, 444, 0xf1debf],
				[center, 757, 211, 0x48261d],
				[left, 296, 319, 0xb74039],
			]
		],
		oper: [
			[center, 1280, 720, 576, 550, 834, 592, 600]	//	点击空白处
		]
	}, {
		// 20 道馆地图
		desc: [
			1280, 720,
			[
				[right, 1240, 659, 0xdfdbcf],
				[left, 33, 52, 0xeff5fb],
				[left, 87, 617, 0xc2baaa],
				[right, 953, 45, 0x25150c],
				[right, 1228, 80, 0xddd3c1],
				[right, 1251, 79, 0xc4b4a0],
			]
		],
		oper: [
			[center, 1280, 720, 17, 25, 74, 79, 1000],
		]
	}, { // 21 点开勋章后的突破界面
		desc: [
			1280, 720,
			[
				[left, 178, 80, 0x18171a],
				[center, 620, 42, 0x222124],
				[left, 58, 649, 0x1d1e22],
				[left, 74, 133, 0x4c3c36],
				[right, 1204, 134, 0x605855],
			]
		],
		oper: [
			[center, 1280, 720, 1180, 110, 1230, 153, 1000],
		]
	}, {
		// 22 战斗场景等待
		desc: '战斗界面',
		// oper: [
		// 	[center, 1280, 720, 16, 12, 60, 56, 1000],
		// 	[center, 1280, 720, 678, 396, 806, 450, 3000],
		// ]
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 2000]
		]
	}, {
		// 23 战斗场景_手动状态等待
		desc: '战斗界面_手动状态',
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 2000]
		]
	}, { // 24 寮神社界面
		desc: '寮神社界面',
		oper: [
			[left, 1280, 720, 22, 7, 75, 54, 2000]
		]
	}, { // 25 寮信息界面
		desc: '寮信息界面',
		oper: [
			[left, 1280, 720, 22, 7, 75, 54, 2000]
		]
	}, { // 26 组队界面
		desc: [1280, 720,
			[
				[left, 43, 37, 0xf5e6a8],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717],
				[left, 57, 565, 0xf9f9f1],
				[center, 830, 58, 0xfee0c8],
			]
		],
		oper: [
			[left, 1280, 720, 31, 20, 70, 59, 1000],
		]
	}, { // 27 探索里
		desc: [
			1280, 720,
			[
				[center, 811, 659, 0xc2baa2],
				[right, 1173, 35, 0xd7af86],
				[left, 40, 65, 0xf0f5fb],
				[center, 621, 45, 0xfce5cd],
				[right, 1094, 603, 0xfa812c],
			]
		],
		oper: [
			[center, 1280, 720, 28, 40, 77, 78, 1000],
			[center, 1280, 720, 700, 386, 850, 418, 1000]
		]
	}, { // 28 探索章节界面_普通_困难
		desc: [1280, 720,
			[
				[center, 276, 129, 0x493624],
				[center, 867, 131, 0x493624],
				[center, 1043, 147, 0xeecccc],
				[center, 904, 535, 0xf4b25f],
				[right, 1121, 35, 0xd7b389],
				[right, 1222, 32, 0xd3af85]]
		],
		oper: [
			[center, 1280, 720, 1036, 133, 1065, 158, 500]
		]
	}, { // 29 巅峰斗技返回
		desc: '巅峰斗技主界面',
		oper: [
			[left, 1280, 720, 22, 4, 67, 49, 500]
		]
	}, { // 30 巅峰斗技返回
		desc: '巅峰斗技主界面_段位保护',
		oper: [
			[left, 1280, 720, 22, 4, 67, 49, 500]
		]
	}, { // 31 巅峰斗技返回
		desc: '巅峰斗技主界面_段位保护裂',
		oper: [
			[left, 1280, 720, 22, 4, 67, 49, 500]
		]
	}, { // 32 巅峰斗技返回
		desc: '巅峰斗技主界面_名士',
		oper: [
			[left, 1280, 720, 22, 4, 67, 49, 500]
		]
	}, { // 33 狭间暗域4个区域通用
		desc: [
			1280,
			720,
			[
				[left, 38, 60, 0xeff7f8],
				[left, 216, 68, 0xd3a578],
				[center, 737, 31, 0x5a3718],
				[center, 897, 74, 0xf8dca7],
				[right, 1209, 305, 0xc5b593],
				[right, 1226, 395, 0xcdb694],
				[right, 1218, 486, 0xcebe9c]
			]
		],
		oper: [
			[left, 1280, 720, 32, 38, 70, 79, 1000]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['503'];
		// if (thisScript.global.change_shikigami_flag && thisScript.oper({
		// 	id: 503,
		// 	name: '返回庭院',
		// 	operator: [
		// 		thisOperator[0], thisOperator[1], thisOperator[2],
		// 		thisOperator[3], thisOperator[5], thisOperator[6],
		// 		thisOperator[7], thisOperator[10], thisOperator[11],
		// 		thisOperator[14], thisOperator[15], thisOperator[17],
		// 		thisOperator[18], thisOperator[19], thisOperator[20],
		// 		thisOperator[21], thisOperator[22], thisOperator[24],
		// 		thisOperator[25], thisOperator[27], thisOperator[28],
		// 		thisOperator[29], thisOperator[30], thisOperator[31],
		// 	]
		// })) {
		// 	return true;
		// }
		let enabledThisOperator = [];
		if (typeof thisConf.oper_0 === 'undefined') {
			// 升级兼容配置为空的情况，这一块代码暂时保留，以后有新增要处理的界面只新增配置，不修改这一块代码
			enabledThisOperator = [
				thisOperator[0], thisOperator[1], thisOperator[2],
				thisOperator[3], thisOperator[5], thisOperator[6],
				thisOperator[7], thisOperator[10], thisOperator[11],
				thisOperator[14], thisOperator[15], thisOperator[17],
				thisOperator[18], thisOperator[19], thisOperator[20],
				thisOperator[21], thisOperator[22], thisOperator[24],
				thisOperator[25], thisOperator[27], thisOperator[28],
				thisOperator[29], thisOperator[30], thisOperator[31],
				thisOperator[33],
			]
		} else {
			enabledThisOperator = Object.keys(thisConf).filter(keyName => /oper_\d+/.test(keyName) && thisConf[keyName]).map(keyName => thisOperator[parseInt(keyName.split('_')[1])]);
		}
		if (thisScript.oper({
			id: 503,
			name: '返回庭院',
			operator: enabledThisOperator
		})) {
			return true;
		}

		// 查找返回图标
		// const backPoint = thisScript.findMultiColor('返回图标');
		// if (backPoint) {
		// 	thisScript.regionClick([[backPoint.x, backPoint.y, backPoint.x + 20, backPoint.y + 20, 1200]]);
		// 	return true;
		// }

		if (thisScript.oper({
			name: '是否为庭院',
			operator: [{
				desc: thisOperator[8].desc
			}, {
				desc: thisOperator[9].desc
			}, {
				desc: thisOperator[13].desc
			}, {
				desc: thisOperator[16].desc
			}]
		})) {

			// 町中与庭院几乎一致。。。只能用牌子来做比较
			if (thisScript.oper({
				id: 503,
				name: '旧版町中界面',
				operator: [{
					desc: thisOperator[4].desc,
					oper: thisOperator[4].oper
				}]
			})) {
				return true;
			}

			if (thisScript.oper({
				id: 503,
				name: '庭院界面',
				operator: [{
					desc: thisOperator[12].desc
				}]
			})) {
				let next_scheme = thisScript.runtimeParams && thisScript.runtimeParams.next_scheme_name;
				if (thisConf.scheme_switch_enabled) {
					next_scheme = thisConf.next_scheme;
				}

				if (!next_scheme) {
					if ('停止脚本' === thisConf.afterCountOper || !thisConf.afterCountOper) {
						thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
						thisScript.stop();
					} else if ('关闭应用' === thisConf.afterCountOper) {
						sleep(1000);
						const packageNames = thisScript.stopRelatedApp();
						thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，应用[${packageNames}]已杀，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
						sleep(2000);
						thisScript.stop();
						return true;
					}
				} else {
					if (thisScript.runtimeParams?.untransmit === true) {
						thisScript.rerun(next_scheme);
					}
					sleep(1000);
					thisScript.rerun(next_scheme, {
						...thisScript.runtimeParams,
					});
					return true;
				}
			}
		}

		// TODO 不认识的界面，尝试发送back()/esc键事件
		// mumu模拟器不认识的界面可以通过按esc或back返回上一级，可以考虑从这上面去优化
		// back();
		// sleep(1000);
		return false;
	}
}
