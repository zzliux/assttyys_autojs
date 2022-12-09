import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func025 implements InterfaceFuncOrigin {
	id = 25;
	name = '探索_单人时退出';
	desc = '探索小怪界面时，若只有自己一个人在里面，则退出';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720, // 组队匹配上了的话就不做任何操作
			[
				[left, 38, 65, 0xf1f5fb],
				[left, 36, 570, 0x983254],
				[left, 29, 672, 0x615a77],
				[right, 1227, 30, 0xd3af84],
				[right, 1174, 33, 0xd7b287],
				[left, 64, 456, 0xf6f6e9],
				[left, 72, 444, 0x483726]
			]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 1000]
		],
		notForCnt: true,
	}, {
		desc: [1280, 720,
			[
				[left, 38, 65, 0xf1f5fb],
				[left, 36, 570, 0x983254],
				[left, 29, 672, 0x615a77],
				[right, 1227, 30, 0xd3af84],
				[right, 1174, 33, 0xd7b287],
			]
		],
		oper: [
			[left, 1280, 720, 32, 45, 70, 86, 1000],
			[center, 1280, 720, 700, 386, 850, 418, 1000]
		]
	}]
}