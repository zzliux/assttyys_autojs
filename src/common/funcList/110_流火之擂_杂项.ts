import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func110 implements InterfaceFuncOrigin {
	id = 110;
	name = '流火之擂_杂项';
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 失败
		desc: [1280, 720,
			[
				[center, 371, 414, 0xffffff],
				[center, 381, 555, 0xe4b459],
				[center, 706, 435, 0xffffff],
				[center, 710, 573, 0xffd28e],
				[center, 359, 81, 0x881414],
			]
		],
		oper: [
			[right, 1280, 720, 108,95, 1231,682, 1000]
		]
	}, {
		// 胜利
		desc: [1280, 720,
			[
				[center, 428, 422, 0xffffff],
				[center, 428, 422, 0xffffff],
				[center, 371, 565, 0xd39133],
				[center, 703, 573, 0xffd28e],
				[center, 357, 75, 0x8c1818],
			]
		],
		oper: [
			[right, 1280, 720, 108,95, 1231,682, 1000]
		]
	}]
}