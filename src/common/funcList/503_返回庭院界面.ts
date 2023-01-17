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
		}]
	}];
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 探索地图
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
	}, {	// 旧版町中界面
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
	}, {	// 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
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
	}, {
		desc: [	//	判断_是否为庭院中的'町中'立牌
			1280, 720,
			[
				[center, 738, 324, 0x979693],
				[center, 738, 349, 0x999595],
				[center, 740, 247, 0xb7b0af],
				[center, 754, 302, 0xaba896],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		let thisConf = thisScript.scheme.config['503'];

		if (thisScript.oper({
			name: '探索地图返回庭院',
			operator: [{
				desc: thisOperator[0].desc,
				oper: thisOperator[0].oper
			}]
		})) {

			return true;
		}

		if (thisScript.oper({
			name: '阴阳寮返回庭院',
			operator: [{
				desc: thisOperator[1].desc,
				oper: thisOperator[1].oper
			}]
		})) {

			return true;
		}

		if (thisScript.oper({
			name: '斗技返回庭院',
			operator: [{
				desc: thisOperator[2].desc,
				oper: thisOperator[2].oper
			}]
		})) {

			return true;
		}

		if (thisScript.oper({
			name: '栏目返回庭院',
			operator: [{
				desc: thisOperator[3].desc,
				oper: thisOperator[3].oper
			}]
		})) {

			return true;
		}

		if (thisScript.oper({
			name: '现世逢魔返回庭院',
			operator: [{
				desc: thisOperator[5].desc,
				oper: thisOperator[5].oper
			}]
		})) {

			return true;
		}

		if (thisScript.oper({
			name: '宠物后院返回庭院',
			operator: [{
				desc: thisOperator[6].desc,
				oper: thisOperator[6].oper
			}]
		})) {

			return true;
		}

		if (thisScript.oper({
			name: '召唤屋返回庭院',
			operator: [{
				desc: thisOperator[7].desc,
				oper: thisOperator[7].oper
			}]
		})) {

			return true;
		}

		if (thisScript.oper({
			name: '判断_阴阳寮主页',
			operator: [{
				desc: thisOperator[10].desc,
				oper: thisOperator[10].oper
			}]
		})) {

			return true;
		}

		if (thisScript.oper({
			name: '判断_是否为己方结界',
			operator: [{
				desc: thisOperator[11].desc,
				oper: thisOperator[11].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '是否为庭院(未展开菜单)',
			operator: [{
				desc: thisOperator[8].desc,
				oper: thisOperator[8].oper
			}]
		}) || thisScript.oper({
			name: '是否为庭院(已展开菜单)',
			operator: [{
				desc: thisOperator[9].desc,
				oper: thisOperator[9].oper
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
					thisScript.doOspPush(thisScript, { text: '没有方案需要执行，脚本已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
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