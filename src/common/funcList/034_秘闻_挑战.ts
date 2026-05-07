import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func034 implements IFuncOrigin {
	id = 34;
	name = '秘闻_挑战';
	desc = '每周竞速或百战挑战';
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
	}, {  // 0 20230524正式服，探索地图进入秘闻
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 544, 636, 602, 701, 1000],
		]
	}, { // 1 每周挑战秘闻弹窗，暗
		desc: [
			1280, 720,
			[
				[left, 110, 42, 0x44423d],
				[left, 211, 38, 0x44423e],
				[left, 31, 634, 0x211719],
				[right, 1255, 706, 0x2b2326],
				[right, 1264, 364, 0x110b0b],
				[center, 886, 24, 0x4b290d]
			]
		],
		oper: [
			[center, 1280, 720, 1020, 112, 1230, 371, 1000]
		]
	}, { // 3 每周挑战秘闻选择并进入
		desc: [1280, 720,
			[
				[left, 50, 598, 0x2c2e3c],
				[left, 26, 149, 0x101014],
				[center, 465, 641, 0x857d6c],
				[right, 1258, 576, 0x3c2830],
				[left, 45, 47, 0xf6e6a7],
			]
		],
		oper: [
			[center, 1280, 720, 134, 150, 450, 246, 500],
			[center, 1280, 720, 1142, 598, 1239, 688, 500],
		]
	}, { // 4
		desc: '秘闻挑战开启',
		oper: [
			[left, 1280, 720, 452, 605, 870, 683, 2000],
		]
	}]
}