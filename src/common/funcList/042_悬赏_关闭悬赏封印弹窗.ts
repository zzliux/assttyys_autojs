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
				[center, 644, 40, 0x544321],
				[center, 638, 52, 0x75542a],
				[left, 95, 124, 0x7b7372],
				[left, 105, 90, 0x634724],
				[right, 1161, 85, 0x553c1f],
				[right, 1097, 582, 0xffeeaa],
				[right, 1110, 580, 0xf9eba8],
				[right, 1107, 611, 0xf4e39a],
				[right, 1128, 606, 0xe5cf89],
				[right, 1122, 584, 0xf4e3a4]
			]
		],
		oper: [
			[left, 1280, 720, 1164, 116, 1189, 143, 500],
		]
	}]
}