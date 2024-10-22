import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
// const right = 2;

export class Func031 implements IFuncOrigin {
	id = 31;
	name = '结界卡_继续合成';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[center, 864, 160, 0x351d0d],
				[center, 712, 446, 0x341c0c],
				[center, 1010, 443, 0x361d0d],
				[center, 752, 60, 0x543b2b],
				[center, 268, 68, 0x4d3727],
				[center, 1177, 112, 0xebd8c9],
				[center, 705, 66, 0x5d3b1b],
				[center, 1034, 600, 0x281c17],
				[center, 921, 588, 0xf4b25f],
				[center, 1090, 598, 0x241c13],
				[center, 1060, 571, 0x222112],
				[center, 1060, 627, 0x261d15]]
		],
		oper: [
			[center, 1280, 720, 1046, 581, 1079, 611, 50],
			[center, 1280, 720, 782, 576, 936, 616, 800],
		]
	}, {
		desc: [
			1280, 720,
			[
				[left, 168, 119, 0xdcd0c5],
				[center, 656, 121, 0xecce9b],
				[center, 525, 624, 0xf3b25e],
				[left, 194, 612, 0xf5bc6f],
				[center, 630, 627, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 514, 600, 682, 646, 1000],
		]
	}, {
		desc: [
			1280, 720,
			[
				[center, 403, 121, 0xcbb59c],
				[center, 868, 127, 0xcbb59c],
				[center, 464, 566, 0xdf6851],
				[center, 668, 567, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 663, 543, 824, 590, 1000],
		]
	}]
}