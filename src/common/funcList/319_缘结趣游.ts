import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func319 implements IFuncOrigin {
	id = 319;
	name = '缘结趣游';
	desc = '确保勾玉足够买票';
	config = [{
		desc: '',
		config: [{
			name: 'buy',
			desc: '是否买门票',
			type: 'switch',
			default: false,
		}, {
			name: 'over',
			desc: '抽够10铃铛后是否继续',
			type: 'switch',
			default: false,
		}]
	}]
	operator: IFuncOperatorOrigin[] = [{ // 0 缘结趣游界面
		desc: [
			1280, 720,
			[
				[center, 875, 39, 0xec4732],
				[right, 1065, 40, 0xde907c],
				[left, 50, 646, 0x695665],
				[left, 104, 648, 0xe94b58],
				[left, 117, 35, 0xf6f1de],
				[left, 206, 35, 0xf8f3e0],
			]
		],
		oper: [
			[center, 1280, 720, 1070, 540, 1170, 624, 1000],
		]
	}, { // 1 勾选十连抽
		desc: [
			1280, 720,
			[
				[right, 1082, 681, 0x824c15],
				[right, 1074, 681, 0x51350f],
				[right, 1088, 680, 0x653f12],
				[right, 1081, 675, 0x623d11],
				[right, 1081, 686, 0x6b4112],
			]
		],
		oper: [
			[center, 1280, 720, 1070, 669, 1091, 689, 1000],
		]
	}, { // 2 不足十抽
		desc: [
			1280, 720,
			[
				[center, 639, 227, 0x362e3f],
				[center, 641, 249, 0xde907c],
				[center, 622, 265, 0xf5e9cc],
				[center, 625, 564, 0xed3e22],
				[center, 783, 473, 0xfedca4],
			]
		],
		oper: [
			[center, 1280, 720, 949, 311, 1199, 421, 1000],
		]
	}, { // 3 取消勾选十连抽
		desc: [
			1280, 720,
			[
				[right, 1074, 681, 0xfffffb],
				[right, 1094, 670, 0xfffffd],
				[right, 1080, 671, 0x0c85a5],
				[right, 1089, 687, 0x1088a5],
				[right, 1073, 689, 0x0e84a4],
			]
		],
		oper: [
			[center, 1280, 720, 1070, 669, 1091, 689, 1000],
		]
	}, { // 4 购买显示1张门票
		desc: [
			1280, 720,
			[
				[center, 599, 464, 0xf8f3e0],
				[center, 599, 475, 0xf8f3e0],
				[center, 632, 567, 0xe92c11],
				[center, 650, 560, 0x272420],
				[center, 665, 567, 0x272420],
				[center, 676, 565, 0x272420],
				[center, 698, 563, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 949, 311, 1199, 421, 1000],
		]
	}, { // 5 购买门票
		oper: [
			[center, 1280, 720, 760, 449, 799, 486, 1000],
			[center, 1280, 720, 562, 544, 715, 583, 1000],
		]
	}, { // 6 铃铛已够
		desc: [
			1280, 720,
			[
				[center, 367, 275, 0x9a6b33],
				[center, 914, 276, 0x9c6e2c],
				[center, 632, 352, 0x4e4945],
				[center, 410, 417, 0xcbb59c],
				[center, 871, 432, 0xcbb59c],
				[center, 787, 363, 0xa7340c],
			]
		],
		oper: [
			[center, 1280, 720, 949, 302, 1207, 413, 1000],
		]
	}, { // 7 领取铃铛奖励
		desc: [
			1280, 720,
			[
				[left, 257, 646, 0xf9f5e4],
				[left, 258, 654, 0xe6e2d3],
				[left, 264, 653, 0xf9f5e4],
				[left, 272, 652, 0xeae6d6],
				[left, 267, 645, 0xfdf9e8],
				[left, 268, 659, 0xd9d5c7],
				[left, 54, 652, 0x9c8a9b],
				[left, 84, 643, 0xde8c31],
			]
		],
		oper: [
			// [center, 1280, 720, 380, 625, 431, 667, 1000],
			// [center, 1280, 720, 989, 321, 1165, 393, 1000],
			// [center, 1280, 720, 589, 620, 637, 668, 1000],
			// [center, 1280, 720, 989, 321, 1165, 393, 1000],
			// [center, 1280, 720, 793, 619, 843, 666, 1000],
			// [center, 1280, 720, 989, 321, 1165, 393, 1000],
			// [center, 1280, 720, 925, 624, 983, 672, 1000],
			// [center, 1280, 720, 989, 321, 1165, 393, 1000],
		]
	}, { // 8 购买全部票
		desc: [
			1280, 720,
			[
				[center, 640, 247, 0xde907c],
				[center, 643, 260, 0x362e3e],
				[center, 593, 470, 0xf6f1de],
				[center, 604, 469, 0xf2edda],
				[center, 599, 461, 0xc1b6a7],
				[center, 600, 480, 0xb4a89a],
				[center, 657, 566, 0x272420],
				[center, 669, 566, 0x413628],
			]
		],
		oper: [
			[center, 1280, 720, 964, 301, 1222, 401, 1000],
			// [center, 1280, 720, 380, 625, 431, 667, 1000],
			// [center, 1280, 720, 989, 321, 1165, 393, 1000],
			// [center, 1280, 720, 589, 620, 637, 668, 1000],
			// [center, 1280, 720, 989, 321, 1165, 393, 1000],
			// [center, 1280, 720, 793, 619, 843, 666, 1000],
			// [center, 1280, 720, 989, 321, 1165, 393, 1000],
			// [center, 1280, 720, 925, 624, 983, 672, 1000],
			// [center, 1280, 720, 989, 321, 1165, 393, 1000],
		]
	}, { // 9 出现铃铛
		desc: [
			1280, 720,
			[
				[center, 596, 367, 0xebc272],
				[center, 649, 332, 0xe3ac4b],
				[center, 630, 375, 0xd99b43],
				[center, 646, 387, 0x220f06],
			]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 2000],
			[center, 1280, 720, 989, 321, 1165, 393, 1000],
			[center, 1280, 720, -1, -1, -1, -1, 2000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['319'];
		if (thisScript.oper({
			id: 319,
			name: '缘结趣游出现铃铛',
			operator: [thisOperator[9]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 319,
			name: '缘结趣游不足十抽',
			operator: [{ desc: thisOperator[2].desc }]
		})) {
			if (thisConf.buy) {
				if (thisConf.over) {
					thisScript.regionClick([thisOperator[5].oper[0]]);
					thisScript.regionClick([thisOperator[5].oper[1]]);
				} else {
					thisScript.regionClick([thisOperator[5].oper[1]]);
				}
			} else {
				thisScript.regionClick([thisOperator[2].oper[0]]);
				thisScript.global.youjiequyuan_ten = false;
			}
			return true;
		}
		if (thisScript.oper({
			id: 319,
			name: '缘结趣游不足一抽',
			operator: [thisOperator[4]]
		})) {
			thisScript.myToast('缘结趣游不足一抽，脚本自动停止');
			thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			sleep(2000);
			return false;
		}
		if (thisScript.oper({
			id: 319,
			name: '缘结趣游抽足铃铛（黑蛋加成弹窗）',
			operator: [thisOperator[6]]
		})) {
			return true;
		}
		if (!thisConf.over && thisScript.oper({
			id: 319,
			name: '缘结趣游抽足铃铛',
			operator: [thisOperator[7]]
		})) {
			thisScript.myToast('缘结趣游抽足铃铛，脚本自动停止');
			thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
			thisScript.stop();
			sleep(2000);
			return false;
		}
		if (thisScript.oper({
			id: 319,
			name: '缘结趣游界面',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			if (thisScript.global.youjiequyuan_ten) {
				thisScript.oper({
					id: 319,
					name: '勾选十连抽',
					operator: [thisOperator[1]]
				})
			} else {
				thisScript.oper({
					id: 319,
					name: '取消勾选十连抽',
					operator: [thisOperator[3]]
				})
			}
			thisScript.regionClick([thisOperator[0].oper[0]]);
			return true;
		}
		if (thisScript.oper({
			id: 319,
			name: '缘结趣游购买并抽完票',
			operator: [thisOperator[8]]
		})) {
			thisScript.global.youjiequyuan_ten = false;
		}
		return false;
	}
}