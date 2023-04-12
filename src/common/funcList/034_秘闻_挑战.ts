import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func034 implements IFuncOrigin {
	id = 34;
	name = '秘闻_挑战';
	desc = '目前仅支持镰鼬百战、妖刀姬竞速、小鹿男竞速、青行灯竞速，后续百战、竞速将陆续支持';
	operator: IFuncOperatorOrigin[] = [{
		// 镰鼬百战
		desc: [1280, 720,
			[
				[right, 1194, 606, 0xe3d7c0],
				[right, 1130, 606, 0xd9d0b8],
				[right, 1168, 583, 0x0c0e0f],
				[left, 88, 150, 0x4f2822],
				[right, 1225, 468, 0xe5d4b3]
			]
		],
		oper: [
			[right, 1280, 720, 1120, 555, 1206, 646, 1000]
		]
	}, {
		// 妖刀姬竞速
		desc: [1280, 720,
			[
				[left, 78, 575, 0x3d4d6e],
				[left, 41, 52, 0xc2cbde],
				[left, 250, 47, 0x583716],
				[right, 1162, 640, 0xe2dac1],
				[right, 1038, 586, 0xcaaa7c]
			]
		],
		oper: [
			[right, 1280, 720, 1120, 555, 1206, 646, 1000]
		]
	}, {
		// 小路男竞速
		desc: [1280, 720,
			[
				[center, 829, 249, 0xd7beae],
				[right, 1055, 187, 0x13192d],
				[right, 1092, 273, 0x20223c],
				[center, 867, 587, 0x383035],
				[left, 111, 463, 0x31425d]
			]
		],
		oper: [
			[right, 1280, 720, 1120, 555, 1206, 646, 1000]
		]
	}, {
		// 青行灯竞速
		desc: [1280, 720,
			[
				[right, 1050, 152, 0x0c0d15],
				[center, 912, 206, 0x414241],
				[center, 901, 186, 0x916a34],
				[center, 864, 217, 0xffffff],
				[center, 758, 284, 0x323a52],
				[center, 925, 442, 0x5799a0]
			]
		],
		oper: [
			[right, 1280, 720, 1120, 555, 1206, 646, 1000]
		]
	}]
}