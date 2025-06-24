import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1104 implements IFuncOrigin {
	id = 1104;
	name = '珍旅居兑换';
	desc: '兑换千物宝库奖励';
	config = [{
		desc: '',
		config: [{
			name: 'oper_3',
			desc: '蓝票',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_4',
			desc: '黑碎',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_5',
			desc: '体力',
			type: 'switch',
			default: true,
		}, {
			name: 'oper_6',
			desc: '樱饼',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_7',
			desc: '金达摩',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_8',
			desc: '花笺',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_9',
			desc: '御守',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_10',
			desc: '经验手札小',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_11',
			desc: '蓝蛋',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_12',
			desc: '白蛋',
			type: 'switch',
			default: false,
		}, {
			name: 'oper_13',
			desc: '红蛋',
			type: 'switch',
			default: false,
		}]
	},
	];
	operator: IFuncOperatorOrigin[] = [{ // 0 珍旅居
		desc: [
			1280, 720,
			[
				[left, 200, 612, 0xeb904a],
				[left, 246, 619, 0x3d362f],
				[left, 239, 651, 0xf17260],
				[left, 215, 649, 0xef7e67],
				[left, 229, 650, 0xfbe89f],
			]
		],
		oper: [
			[center, 1280, 720, 205, 627, 252, 663, 1000],
		]
	}, { // 1 千物宝库
		desc: [
			1280, 720,
			[
				[right, 1136, 626, 0x7f371f],
				[right, 1160, 597, 0xf9dfd2],
				[right, 1193, 603, 0xefdddd],
				[right, 1187, 625, 0xe8c9b3],
				[right, 1177, 626, 0x7b361e],
			]
		],
		oper: [
			[center, 1280, 720, 1141, 590, 1198, 648, 1000],
		]
	}, { // 2 千物宝库内
		desc: [
			1280, 720,
			[
				[left, 201, 55, 0xd5b575],
				[left, 233, 51, 0xdec186],
				[left, 284, 54, 0xd8c07e],
				[center, 330, 47, 0xe7d198],
				[center, 390, 61, 0x593716],
				[right, 1174, 588, 0x4c3f4c],
			]
		],
	}, { // 3 蓝票
		desc: [
			1280, 720,
			[
				[center, 521, 201, 0x84b5ce],
				[center, 531, 207, 0x82b3cc],
				[center, 508, 235, 0x382961],
				[center, 533, 233, 0x2a1c5c],
				[center, 461, 293, 0xaa2b11],
			]
		],
		oper: [
			[center, 1280, 720, 442, 283, 608, 328, 1000],
		]
	}, { // 4 黑碎
		desc: [
			1280, 720,
			[
				[center, 741, 225, 0xffffff],
				[center, 768, 223, 0x2c2929],
				[center, 754, 215, 0xfeecd6],
				[center, 746, 200, 0x484544],
				[center, 733, 257, 0x504d4c],
			]
		],
		oper: [
			[center, 1280, 720, 681, 279, 831, 322, 1000],
		]
	}, { // 5 体力
		desc: [
			1280, 720,
			[
				[right, 982, 213, 0xfd9133],
				[right, 964, 226, 0x060805],
				[right, 985, 245, 0x13160f],
				[right, 1001, 239, 0x191d14],
				[right, 996, 219, 0xe63123],
			]
		],
		oper: [
			[center, 1280, 720, 905, 275, 1057, 323, 1000],
		]
	}, { // 6 樱饼
		desc: [
			1280, 720,
			[
				[left, 280, 485, 0x617d33],
				[left, 277, 454, 0x5f743d],
				[left, 316, 462, 0x729446],
				[left, 315, 483, 0xfde6cf],
			]
		],
		oper: [
			[center, 1280, 720, 228, 528, 378, 574, 1000],
		]
	}, { // 7 金达摩
		desc: [
			1280, 720,
			[
				[center, 521, 470, 0xedca46],
				[center, 526, 499, 0x9c621c],
				[center, 525, 484, 0xe7cf5e],
				[center, 502, 476, 0xe6c250],
				[center, 551, 475, 0x935a18],
			]
		],
		oper: [
			[center, 1280, 720, 453, 527, 603, 581, 1000],
		]
	}, { // 8 花笺
		desc: [
			1280, 720,
			[
				[center, 757, 470, 0xefdebf],
				[center, 751, 451, 0xdb435a],
				[center, 777, 466, 0xf54978],
				[center, 761, 500, 0xae2d34],
				[center, 736, 490, 0xdfd3b8],
			]
		],
		oper: [
			[center, 1280, 720, 675, 531, 833, 580, 1000],
		]
	}, { // 9 御守
		desc: [
			1280, 720,
			[
				[right, 995, 473, 0x82b8e3],
				[right, 976, 468, 0xfffcf5],
				[right, 968, 470, 0x81b3e1],
				[right, 977, 447, 0xf3d8d8],
				[right, 999, 457, 0xdabcb1],
			]
		],
		oper: [
			[center, 1280, 720, 912, 530, 1059, 577, 1000],
		]
	}, { // 10 经验手札
		desc: [
			1280, 720,
			[
				[left, 305, 450, 0x939c9c],
				[left, 283, 425, 0xb5b6b4],
				[left, 305, 431, 0xf3e2c1],
				[left, 287, 480, 0xf17e28],
				[left, 287, 455, 0x879193],
			]
		],
		oper: [
			[center, 1280, 720, 228, 499, 368, 551, 1000],
		]
	}, { // 11 蓝蛋
		desc: [
			1280, 720,
			[
				[center, 506, 465, 0x76a6d2],
				[center, 507, 470, 0x70a1d0],
				[center, 553, 456, 0x36569e],
				[center, 544, 466, 0x79aad3],
			]
		],
		oper: [
			[center, 1280, 720, 457, 504, 600, 550, 1000],
		]
	}, { // 12 白蛋
		desc: [
			1280, 720,
			[
				[center, 756, 442, 0xffefdc],
				[center, 755, 421, 0xffffff],
				[center, 742, 451, 0x2a2424],
				[center, 773, 450, 0x2a2424],
				[center, 737, 481, 0xffffff],
			]
		],
		oper: [
			[center, 1280, 720, 681, 507, 832, 555, 1000],
		]
	}, { // 13 红蛋
		desc: [
			1280, 720,
			[
				[right, 965, 445, 0xf2eeec],
				[right, 1000, 443, 0xf4f1f1],
				[right, 975, 423, 0xf86959],
				[center, 952, 478, 0xd35248],
				[right, 1001, 481, 0xed7c63],
			]
		],
		oper: [
			[center, 1280, 720, 909, 505, 1064, 552, 1000],
		]
	}, { // 14 购买确认_一行字
		desc: [
			1280, 720,
			[
				[center, 562, 533, 0xf3b25e],
				[center, 562, 570, 0xf2b05d],
				[center, 712, 567, 0xf3b25e],
				[center, 712, 533, 0xf3b25e],
				[center, 771, 454, 0x412b24],
				[center, 795, 461, 0x422d2a],
			]
		],
		oper: [
			[center, 1280, 720, 762, 438, 803, 473, 1000],
			[center, 1280, 720, 560, 528, 717, 573, 1000],
		]
	}, { // 15 购买确认_二行字
		desc: [
			1280, 720,
			[
				[center, 560, 546, 0xf4b35f],
				[center, 562, 581, 0xf3b25e],
				[center, 713, 582, 0xf1af5d],
				[center, 712, 545, 0xf4b35e],
				[center, 772, 467, 0x462b22],
				[center, 795, 475, 0x422d29],
			]
		],
		oper: [
			[center, 1280, 720, 763, 448, 799, 488, 1000],
			[center, 1280, 720, 561, 543, 714, 584, 1000],
		]
	}, { // 16 购买确认_三行字
		desc: [
			1280, 720,
			[
				[center, 561, 558, 0xf6b660],
				[center, 561, 597, 0xf2b05d],
				[center, 713, 597, 0xf0af5d],
				[center, 713, 559, 0xf4b15e],
				[center, 770, 481, 0x422b24],
				[center, 795, 488, 0x422d2a],
			]
		],
		oper: [
			[center, 1280, 720, 761, 462, 800, 498, 1000],
			[center, 1280, 720, 560, 556, 715, 598, 1000],
		]
	}, { // 17 结束关闭
		oper: [
			[center, 1280, 720, 1127, 81, 1168, 122, 1000],
			[center, 1280, 720, 1127, 81, 1168, 122, 1000],
			[center, 1280, 720, 32, 21, 74, 58, 1000],
		]
	}, { // 18 滑动
		oper: [
			[center, 1280, 720, 853, 556, 877, 578, 1000],
			[center, 1280, 720, 856, 22, 883, 47, 1000],
		]
	}, { // 19 樱饼_溢出
		desc: [
			1280, 720,
			[
				[center, 455, 222, 0x6a4736],
				[center, 838, 221, 0x654535],
				[center, 449, 494, 0x624233],
				[center, 832, 492, 0x624232],
				[center, 573, 421, 0xdf6851],
				[center, 701, 420, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 683, 401, 800, 447, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['1104'];
		if (thisScript.global.zhenLvJu) {
			if (thisScript.oper({
				id: 1104,
				name: '珍旅居兑换_杂项',
				operator: [thisOperator[0], thisOperator[1], thisOperator[19]]
			})) {
				return true;
			}
			const enabledThisOperator = Object.keys(thisConf).filter(keyName => /oper_\d+/.test(keyName) && thisConf[keyName]).map(keyName => thisOperator[parseInt(keyName.split('_')[1])]);
			let curCnt = 0;
			let maxCount = 5;
			while (thisScript.oper({
				id: 1104,
				name: '珍旅居兑换_特殊',
				operator: [thisOperator[2]]
			})) {
				curCnt++;
				if (thisScript.oper({
					id: 1104,
					name: '珍旅居兑换_杂项',
					operator: enabledThisOperator
				})) {
					return true;
				}
				if (maxCount === 5 && curCnt >= maxCount) {
					thisScript.regionSwipe(thisOperator[18].oper[0], thisOperator[18].oper[1], [400, 450], 500);
					maxCount = 10;
				} else if (maxCount === 10 && curCnt >= maxCount) {
					thisScript.regionClick(thisOperator[17].oper);
					thisScript.global.zhenLvJu = false;
					break;
				}
				thisScript.keepScreen(false);
				sleep(500);
			}
			while (thisScript.oper({
				id: 1104,
				name: '珍旅居兑换_特殊',
				operator: [thisOperator[14], thisOperator[15], thisOperator[16]]
			})) {
				curCnt++;
				if (curCnt >= maxCount) {
					thisScript.regionClick(thisOperator[17].oper);
					thisScript.global.zhenLvJu = false;
					break;
				}
				thisScript.keepScreen(false);
				sleep(500);
			}
			return false;
		}
	}
}