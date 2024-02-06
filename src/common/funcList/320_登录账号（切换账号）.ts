import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

export class Func320 implements IFuncOrigin {
	id = 320;
	name = '登录账号（切换账号）';
	desc = '常用于僵尸寮活跃登录小号';
	config = [{
		desc: '',
		config: [{
			name: 'accountNum',
			desc: '账号个数(同个账号的ios端和安卓端要分开算)',
			type: 'text',
			default: '0',
		}
			// , {
			// 	name: 'xiajian_scheme',
			// 	desc: '切换至狭间方案',
			// 	type: 'scheme',
			// 	default: '狭间暗域',
			// }
		]
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 登录界面
		desc: [
			1280, 720,
			[
				[right, 1199, 268, 0xc1b8a1],
				[right, 1213, 267, 0xb5a992],
				[right, 1234, 264, 0xbcb19b],
				[right, 1257, 271, 0xc6bda7],
				[right, 1201, 241, 0x524332],
			]
		],
		oper: [
			[center, 1280, 720, 1210, 231, 1238, 252, 1000], // 用户中心
		]
	}, { // 1 账号界面,登录
		desc: [
			1280, 720,
			[
				[center, 550, 212, 0xe82131],
				[center, 597, 192, 0xe50113],
				[center, 663, 218, 0x3c3939],
				[center, 723, 214, 0x3c3939],
				[center, 745, 199, 0xe50113],
				[center, 410, 450, 0xfb4f4f],
			]
		],
		oper: [
			[center, 1280, 720, 510, 416, 788, 469, 1000], // 点击红色登录
			[center, 1280, 720, 511, 294, 872, 359, 1000], // 选择账号
			[center, 1280, 720, 441, 443, 854, 523, 1000], // 选择账号
			[center, 1280, 720, 819, 558, 874, 582, 1000], // 滑动起点
			[center, 1280, 720, 827, 11, 872, 36, 1000], // 滑动终点
		]
	}, { // 2 账号界面,选择端号
		desc: [
			1280, 720,
			[
				[center, 550, 212, 0xe82131],
				[center, 597, 192, 0xe50113],
				[center, 663, 218, 0x3c3939],
				[center, 723, 214, 0x3c3939],
				[center, 745, 199, 0xe50113],
				[center, 518, 383, 0x1a1a1a],
				[center, 757, 388, 0x8ec220],
			]
		],
		oper: [
			[center, 1280, 720, 710, 371, 763, 436, 1000], // 安卓端
			[center, 1280, 720, 505, 376, 564, 435, 1000], // ios端
		]
	}, { // 3 账号界面,切换账号
		desc: [
			1280, 720,
			[
				[center, 596, 126, 0x4a4948],
				[center, 626, 125, 0x4a4948],
				[center, 653, 117, 0x4a4948],
				[center, 678, 122, 0x4a4948],
				[right, 1006, 208, 0xfb5454],
				[right, 1033, 208, 0xfb4f4f],
			]
		],
		oper: [
			[center, 1280, 720, 950, 192, 1056, 224, 1000],
		]
	}, { // 4 庭院内
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
	}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['320'];
		if (thisScript.global.dengluState) { // 登录状态
			if (thisScript.oper({
				id: 320,
				name: '登录账号_杂项',
				operator: [thisOperator[0], thisOperator[3]]
			})) {
				return true;
			}
			if (thisScript.oper({
				id: 320,
				name: '登录账号_登入',
				operator: [{ desc: thisOperator[1].desc }]
			})) {
				if (thisScript.global.dengluNumOT != 0 && thisScript.global.dengluNumOT % 2 == 0) {
					thisScript.regionClick([thisOperator[1].oper[1]]);
					thisScript.regionBezierSwipe(thisOperator[1].oper[3], thisOperator[1].oper[4], [300, 500], 0, 1000);
					thisScript.regionClick([thisOperator[1].oper[2]]);
				}
				if (thisScript.global.dengluNumOT < Number(thisConf.accountNum)) {
					thisScript.regionClick([thisOperator[1].oper[0]]);
					return true;
				} else {
					thisScript.stop();
					return true;
				}
			}
			if (thisScript.oper({
				id: 320,
				name: '登录账号_选择端号',
				operator: [{ desc: thisOperator[2].desc }]
			})) {
				if (thisScript.global.dengluNumOT % 2 == 0) {
					thisScript.regionClick([thisOperator[2].oper[0]]);// 安卓端
				} else {
					thisScript.regionClick([thisOperator[2].oper[1]]);// ios端
				}
				thisScript.global.dengluNumOT++;
				thisScript.global.dengluState = false;
				return true;
			}
		}
		if (thisScript.oper({
			id: 993,
			name: '是否为庭院',
			operator: [thisOperator[4]]
		})) {
			thisScript.global.dengluState = true;
			return false;
		}

	}
}
