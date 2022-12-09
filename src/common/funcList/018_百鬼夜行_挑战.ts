import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func018 implements InterfaceFuncOrigin {
	id = 18;
	name = '百鬼夜行_挑战';
	desc = '在百鬼夜行挑战界面，点击挑战';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280,720,
			 [// [center,170,600,0xfff2ce],
			[center,1128,594,0x402f1f],
			[center,1084,202,0xe7d4cf],
			[center,554,514,0x846866],
			[center,195,156,0xf9edee]]
		],
		oper: [
			[center, 1280, 720, 1084,576, 1138,628, 1500]
		]
	}];
}