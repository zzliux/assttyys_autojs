import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func100 implements IFuncOrigin {
	id = 100;
	name = '伊吹之擂_杂项';
	desc = '开启、';
	operator: IFuncOperatorOrigin[] = [{
		// 开启
		desc: [1280, 720,
			[
				[right, 1213, 620, 0x662e28],
				[left, 43, 38, 0xf5e5a8],
				[left, 201, 234, 0xe8d6be],
				[left, 216, 194, 0x502f2f],
				[center, 1147, 64, 0x97bae7],
			]
		],
		oper: [
			[right, 1280, 720, 1147, 600, 1207, 668, 1000]
		]
	}, {
		// 结果继续
		desc: [1280,720,
			[
				[center,326,599,0xd59c84],
				[center,663,599,0xdca38a],
				[center,966,596,0xdba58e],
				[right,1180,606,0xc49b72],
				[left,46,42,0x9c8f68]
			]
		],
		oper: [
			[right, 1280, 720, 1148,610, 1195,670, 1000]
		]
	}, {
		// 结果继续2
		desc: [1280,720,
			[
				[left,43,41,0x9d916d],
				[center,530,43,0x8b7769],
				[center,526,144,0xf2e28f],
				[center,774,124,0x844f44]
			]
		],
		oper: [
			[right, 1280, 720, 152,640, 1088,709, 1000]
		],
	}, {
		// 公布最终结果
		desc: [1280, 720,
			[
				[left, 308, 684, 0x24191d],
				[center, 941, 687, 0x24191e],
				[left, 174, 47, 0x3d342c],
				[center, 522, 34, 0xbb8d61],
				[center, 770, 35, 0xbb8a61],
				[right, 1252, 45, 0x746666],
			]
		],
		oper: [
			[right, 1280, 720, 67, 607, 1223, 685, 1000]
		]
	}, {
		// 排名
		desc: [1280, 720,
			[
				[right, 965, 652, 0x261b21],
				[left, 164, 72, 0x4b6079],
				[right, 1225, 21, 0x4b5c76],
				[right, 1198, 592, 0xebd992],
				[center, 817, 559, 0x332b33],
			]
		],
		oper: [
			[right, 1280, 720, 522, 510, 1066, 689, 1000]
		]
	}]
}