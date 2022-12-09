import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func108 implements InterfaceFuncOrigin {
	id = 108;
	name = '百妖之巅_挑战';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[center, 976, 555, 0xe3d9c3],
				[center, 1083, 212, 0xf9eacc],
				[center, 1142, 133, 0x61263f],
				[center, 170, 79, 0x422e2b],
			]
		],
		oper: [
			[center, 1280, 720, 940, 545, 1026, 628, 2000], // 挑战按钮
		]
	}]
}