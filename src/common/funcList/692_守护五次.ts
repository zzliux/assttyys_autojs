import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func692 implements IFuncOrigin {
	id = 692;
	name = '守护历练';
	config = [{
		desc: '',
		config: [{
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '返回庭院',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 庭院进入探索
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰',
		oper: [
			[center, 1280, 720, 658, 127, 697, 170, 1000],
		]
	}, { // 1 点击契约碎片
		desc: [1280, 720,
			[
				[center, 559, 233, 0xa1321c],
				[center, 574, 234, 0xa1321c],
				[center, 560, 330, 0x912514],
				[center, 573, 344, 0x8c2212],
			]
		],
		oper: [
			[center, 1280, 720, 590, 555, 649, 590, 2000],
		]
	}, { // 2 点击二十五章
		desc: [1280, 720,
			[
				[left, 45, 36, 0xf5e5a6],
				[left, 125, 29, 0xf9eeb7],
				[left, 68, 653, 0xd45ed4],
				[left, 182, 639, 0xad8012],
				[left, 259, 642, 0xe8dbcd],
			]
		],
		oper: [
			[center, 1280, 720, 1066, 204, 1242, 228, 1000],
		]
	}, { // 3 关闭二十五章
		desc: [1280, 720,
			[
				[center, 339, 191, 0x451854],
				[center, 470, 201, 0x2d2d2d],
				[center, 410, 425, 0xc7b096],
				[right, 905, 543, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 1031, 130, 1061, 164, 1000],
		]
	}, { // 4 约碎片滑动
		desc: [1280, 720,
			[
				[center, 591, 167, 0x2c334a],
				[right, 1098, 174, 0x493829],
				[right, 719, 545, 0x444f6c],
				[right, 1098, 543, 0x6c5b45],
			]
		],
		oper: [
			[center, 1280, 720, 1147, 352, 1212, 412, 1000],
			[center, 1280, 720, 71, 325, 155, 388, 1000],
		]
	}, { // 5 守护历练
		desc: [1280, 720,
			[
				[right, 976, 186, 0xdddbce],
				[right, 1206, 172, 0x584247],
				[right, 1188, 240, 0x6d5058],
				[right, 1196, 354, 0x6f525b],
				[right, 964, 546, 0x6e4d5a],
				[right, 1170, 630, 0x7f5a68],
			]
		],
		oper: [
			[center, 1280, 720, 1098, 261, 1204, 370, 1000],
		]
	}, { // 6 守护历练(邀请师傅)
		desc: [1280, 720,
			[
				[center, 370, 259, 0xfefefd],
				[center, 406, 259, 0xfefefd],
				[center, 386, 260, 0xfffffe],
				[center, 387, 274, 0xfefefe],
			]
		],
		oper: [
			[center, 1280, 720, 366, 259, 404, 285, 1000],
		]
	}, { // 7 邀请
		desc: [1280, 720,
			[
				[center, 425, 230, 0x3c496b],
				[center, 435, 244, 0x515a78],
				[center, 539, 580, 0xdf6851],
				[right, 732, 575, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 471, 209, 532, 234, 1000],
			[center, 1280, 720, 729, 558, 826, 590, 1000],
		]
	}, { // 8 灰挑战
		desc: [1280, 720,
			[
				[right, 1184, 610, 0xdedede],
				[right, 1186, 635, 0xd3d3d3],
				[right, 1205, 657, 0x2c2c2c],
				[right, 1239, 626, 0x323232],
				[right, 1228, 653, 0xcbcbcb],
			]
		]
	}, { // 9 守护次数完成
		desc: [1280, 720,
			[
				[right, 1147, 573, 0xccc9bd],
				[right, 1155, 574, 0xb8b3a5],
				[right, 1173, 567, 0xcbc8bc],
				[right, 1179, 566, 0xb8b2a5],
				[right, 1180, 576, 0xccc9bd],
				[right, 964, 543, 0x6e4d5a],
				[right, 1209, 176, 0x5a434b],
			]
		],
		oper: [
			[center, 1280, 720, 109, 22, 143, 50, 1000],
		]
	},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['692'];
		if (thisScript.oper({
			id: 691,
			name: '出战',
			operator: [thisOperator[9]]
		})) {
			thisScript.rerun(thisconf.next_scheme);
			return true;
		}
		if (thisScript.oper({
			id: 691,
			name: '出战',
			operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[3]
				, thisOperator[5], thisOperator[6]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 691,
			name: '出战',
			operator: [thisOperator[7]]
		})) {
			thisScript.keepScreen();
			for (let i = 0; i < 15; i++) {
				if (!thisScript.oper({
					id: 691,
					name: '出战',
					operator: [{ desc: thisOperator[8].desc }]
				})) {
					break;
				}
				thisScript.keepScreen()
				sleep(1000);
			}
			return true
		}
		if (thisScript.oper({
			id: 691,
			name: '出战',
			operator: [{ desc: thisOperator[4].desc }]
		})) {
			thisScript.regionBezierSwipe(thisOperator[4].oper[0], thisOperator[4].oper[1], [300, 400], 1000);
			return true;
		}
	}
}