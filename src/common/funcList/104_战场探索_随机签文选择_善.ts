import { InterfaceFunc, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func104 implements InterfaceFunc {
	id = 104;
	name = '战场探索_随机签文选择_善';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280,720,
			[[center,353,535,0x7b624a],
			[center,582,537,0x7d644b],
			[center,804,536,0x7b624a],
			[center,1099,156,0xe2e1f2],
			[right,1205,616,0x070723],
			[right,1195,632,0xe0d8bc]]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 350,522, 475,555, 1000, 1],
				[center, 1280, 720, 577,521, 699,556, 1000, 1],
				[center, 1280, 720, 800,518, 923,555, 1000, 1],
			]
		]
	}]
}