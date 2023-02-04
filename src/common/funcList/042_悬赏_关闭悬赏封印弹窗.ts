import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func042 implements InterfaceFuncOrigin {
	id = 42;
	name = '悬赏_关闭悬赏封印弹窗';
	desc = '请打开悬赏封印弹窗后开启脚本';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[center, 505, 45, 0x46454c],
				[center, 880, 62, 0x3f3e44],
				[center, 560, 84, 0x5b4332],
				[right, 1022, 88, 0x4c3827],
				[right, 1098, 581, 0xfff3b0],
				[right, 1110, 581, 0xfee7b8],
				[right, 1097, 605, 0xfedb92],
				[right, 1124, 604, 0xf0dd8f],
				[right, 1108, 595, 0xf2e4a1],
				[right, 1149, 600, 0x58290a]
			]
		],
		oper: [
			[left, 1280, 720, 1164, 116, 1189, 143, 500],
		]
	}]
}