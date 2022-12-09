import { InterfaceFunc, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func031 implements InterfaceFunc {
	id = 31;
	name = '结界卡_继续合成';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280,720,
			[[center,864,160,0x351d0d],
			[center,712,446,0x341c0c],
			[center,1010,443,0x361d0d],
			[center,752,60,0x543b2b],
			[center,268,68,0x4d3727],
			[center,1177,112,0xebd8c9],
			[center,705,66,0x5d3b1b],
			[center,1034,600,0x281c17],
			[center,921,588,0xf4b25f],
			[center,1090,598,0x241c13],
			[center,1060,571,0x222112],
			[center,1060,627,0x261d15]]
		],
		oper: [
			[center, 1280, 720, 1046,581, 1079,611, 50],
			[center, 1280, 720, 782,576, 936,616, 800],
		]
	}]
}