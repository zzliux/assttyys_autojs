import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func116 implements IFuncOrigin {
	id = 116;
	name = '千年之守_神武行_风暴试炼_杂项';
	operator: IFuncOperatorOrigin[] = [{
		// 外面进攻的图标
		desc:[1280, 720,
			[
				[right, 985, 490, 0xebca91],
				[left, 52,55, 0xf0e3af ],
				[right, 1106, 608, 0xf5debc],
				[right, 1222, 471, 0xf4dbba],
				[left, 160, 554, 0x99999f],
			]
		],
		oper: [
			[right, 1280, 720, 978, 470, 1025, 522, 1000]
		]
	}, {
		// 外外面的战斗图标
		desc: [1280, 720,
			[
				[right, 1081, 607, 0xccbb99],
				[right, 989, 645, 0xbeb6ae],
				[left, 30, 45, 0xe8d7b5],
				[right, 802, 623, 0x1d262e],
				[right, 1106, 633, 0x61533a],
			]
		],
		oper: [
			[right, 1280, 720, 1077, 576, 1163, 658, 1000]
		]
	}]
}