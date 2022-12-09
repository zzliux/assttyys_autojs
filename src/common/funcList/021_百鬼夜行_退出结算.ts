import { InterfaceFunc, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func021 implements InterfaceFunc {
	id = 21;
	name = '百鬼夜行_退出结算';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280,720,
			[[center,204,277,0xf0f0df],
			[center,133,122,0xb5b5d6],
			[center,102,413,0xf5ede5],
			[center,233,583,0xeeeae2],
			[center,1164,245,0xefebe3],
			[center,698,88,0x7b7b9c]]
		],
		oper: [
			[center, 1280, 720, 71,75, 207,642, 2000]
		]
	}];
}
