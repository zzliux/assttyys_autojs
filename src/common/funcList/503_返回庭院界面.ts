import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func503 implements InterfaceFuncOrigin {
	id = 503;
	name = '返回庭院界面';
	desc = '支持从探索地图退出至探索地图庭院界面';
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
			desc: '执行完成的操作',
			type: 'list',
			data: ['停止脚本', '关闭应用'],
			default: '停止脚本',
			value: null,
		}]
	}];
	operator: InterfaceFuncOperatorOrigin[] = [
		{	// 探索地图
			desc: [1280, 720,
				[[left, 53, 61, 0xe7edfc],
				[left, 78, 60, 0x273771],
				[left, 36, 82, 0x1c1322],
				[right, 1160, 143, 0x0b0909],
				[right, 1157, 198, 0x755320],
				[center, 454, 43, 0xfde8d0]]
			],
			oper: [
				[left, 1280, 720, 30, 35, 76, 80, 1000],
			]
		}, { 	// 阴阳寮神设首页
			desc: [1280, 720,
				[[left, 44, 28, 0xf1e0ad],
				[left, 74, 32, 0xaa885f],
				[left, 53, 42, 0xedd28f],
				[right, 1199, 89, 0x761021],
				[right, 1189, 628, 0x8c6a44]]
			],
			oper: [
				[left, 1280, 720, 25, 9, 74, 55, 2000]
			]
		}, { 	// 斗技
			desc: [1280, 720,
				[[left, 126, 26, 0xf8f3e0],
				[left, 164, 26, 0xe3decf],
				[right, 1203, 598, 0x3e1c0c],
				[right, 1196, 555, 0xb94311]]
			],
			oper: [
				[left, 1280, 720, 22, 6, 65, 45, 1000]
			]
		}, {	// 栏目
			desc: [1280, 720,
				[[center, 568, 108, 0x973933],
				[center, 742, 62, 0x8c3131],
				[center, 807, 50, 0x564c45],
				[right, 1144, 88, 0xe7d5cf],
				[right, 1113, 285, 0x5c3e2f]]
			],
			oper: [
				[right, 1280, 720, 1124, 75, 1163, 103, 1000]
			]
		}, {	// 5 旧版町中界面
			desc: [1280, 720,
				[[right, 1067, 221, 0xb5aaad],
				[right, 1054, 321, 0x989694],
				[right, 1054, 344, 0x969592],
				[right, 1052, 352, 0x999595],
				[right, 1056, 413, 0x938f8f],
				[right, 1054, 433, 0x8e8b8a]]
			],
			oper: [
				[right, 1280, 720, 1012, 228, 1093, 298, 1000],
			]
		}, {	// 现世逢魔
			desc: [1280, 720,
				[[left, 19, 700, 0x3c3841],
				[left, 42, 46, 0xc3cbdf],
				[center, 754, 39, 0x583716],
				[center, 1181, 650, 0xffffff],
				[left, 43, 680, 0xc7957c],
				[left, 54, 676, 0x433b42]]
			],
			oper: [
				[left, 1280, 720, 27, 25, 72, 73, 1000],
			]
		}, {	// 宠物后院(管他有没有人用)
			desc: [1280, 720,
				[[left, 34, 630, 0x4c3b3b],
				[left, 59, 672, 0x442b23],
				[right, 1210, 669, 0xc79e70],
				[right, 1122, 652, 0xb2cae3],
				[center, 638, 16, 0xf3e7e3]]
			],
			oper: [
				[left, 1280, 720, 37, 24, 70, 61, 1000],
			]
		}, {	// 召唤屋(管他有没有人用)
			desc: [1280, 720,
				[[left, 148, 38, 0xb28956],
				[left, 171, 28, 0xb28956],
				[center, 516, 22, 0x73abc9],
				[center, 544, 628, 0x5599dd],
				[right, 1180, 30, 0xd2ab80],
				[right, 1108, 35, 0xcb9e70]]
			],
			oper: [
				[left, 1280, 720, 31, 8, 76, 50, 1000],
			]
		}, {	// 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
			desc:
				[1280, 720,
					[[right, 1226, 47, 0xcda47a],
					[right, 1157, 45, 0xb39671],
					[center, 389, 65, 0xfbc573],
					[right, 1207, 637, 0xdfd1cb]]
				]
		}, {	// 10 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
			desc:
				[1280, 720,
					[[right, 1226, 47, 0xcda47a],
					[right, 1157, 45, 0xb29670],
					[center, 389, 65, 0xfbc573],
					[right, 1228, 646, 0xd6c6c3]]
				]
		}, { 	// 判断_阴阳寮主页
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
		}, { 	// 判断_是否为己方结界
			desc: [1280, 720,
				[[center, 611, 300, 0x0c0804],
				[center, 913, 305, 0x0c0804],
				[left, 318, 305, 0x0c0804],
				[center, 613, 294, 0xe1cf6b],
				[left, 202, 462, 0x10100c]]
			],
			oper: [
				[left, 1280, 720, 23, 10, 71, 56, 2000],   // 返回按钮
			]
		}, {	// 判断_是否为庭院中的'町中'立牌
			desc: [
				1280, 720,
				[
					[center, 738, 324, 0x979693],
					[center, 738, 349, 0x999595],
					[center, 740, 247, 0xb7b0af],
					[center, 754, 302, 0xaba896],
				]
			]
		}, {	// 页面是否为庭院(菜单已展开)另一种图标 御祝图标 只支持默认庭院皮肤与默认装饰
			desc:
				[1280, 720,
					[
						[right, 1223, 662, 0xdbcbc7],
						[right, 1155, 41, 0xd7b188],
						[center, 451, 631, 0xe8e4e1],
						[center, 673, 651, 0xdb8b3f],
					]
				],
		}, {	// 15 判断_阴阳寮成就页
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
		}, {	//式神录
			desc: [1280, 720,
				[[left, 114, 15, 0xaf8c56],
				[left, 155, 29, 0xaf8c56],
				[left, 183, 22, 0xae8b55],
				[right, 1268, 16, 0x312421]]
			],
			oper: [
				[center, 1280, 720, 21, 9, 59, 43, 1000],
			]
		}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		let thisConf = thisScript.scheme.config['503'];

		if (thisScript.oper({
			name: '返回庭院',
			operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[3], thisOperator[5], thisOperator[6], thisOperator[7], thisOperator[10], thisOperator[11], thisOperator[14], thisOperator[15]]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '是否为庭院',
			operator: [{
				desc: thisOperator[8].desc
			}, {
				desc: thisOperator[9].desc
			}, {
				desc: thisOperator[13].desc
			}]
		})) {

			// 町中与庭院几乎一致。。。只能用牌子来做比较
			if (thisScript.oper({
				name: '旧版町中界面',
				operator: [{
					desc: thisOperator[4].desc,
					oper: thisOperator[4].oper
				}]
			})) {
				return true;
			}

			if (thisScript.oper({
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
						thisScript.doOspPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
						thisScript.stop();
					} else if ('关闭应用' === thisConf.afterCountOper) {
						sleep(1000);
						let storeSettings = thisScript.storeCommon.get('settings', {});
						if (storeSettings.defaultLaunchAppList && storeSettings.defaultLaunchAppList.length) {
							storeSettings.defaultLaunchAppList.forEach(packageName => {
								thisScript.myToast(`停止应用[${packageName}]`);
								$shell(`am force-stop ${packageName}`, true);
								thisScript.doOspPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，应用[${packageName}]已杀，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
								sleep(1000);
							});
						} else {
							thisScript.myToast('未配置关联应用，不执行停止操作');
						}
						thisScript.stop();
					}
				} else {
					thisScript.setCurrentScheme(next_scheme as string, {
						...thisScript.runtimeParams,
					});
					thisScript.myToast(`切换方案为[${next_scheme}]`);
					thisScript.rerun();
				}
			}
		}
		return false;
	}
}