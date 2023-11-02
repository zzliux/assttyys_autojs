import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func220 implements IFuncOrigin {
	id = 220;
	name = '夜行荒河_杂项';
	operator: IFuncOperatorOrigin[] = [{
		// 结算
		desc: [1280, 720,
			[
				[left, 91, 200, 0x445566],
				[left, 677, 291, 0x697f74],
				[right, 1166, 621, 0x312819],
				[left, 104, 610, 0x27262c],
				[left, 35, 696, 0xbc4e4f],
				[center, 396, 679, 0x292931],
			]
		],
		oper: [
			[right, 1280, 720, 741, 92, 1166, 251, 1500],
		]
	}, {
		// 自动切手动
		desc: [1280, 720,
			[
				[right, 1102, 602, 0x000000],
				[right, 1116, 626, 0xf1dcb1],
				[right, 1182, 599, 0x000000],
				[right, 1226, 605, 0x000000],
				[right, 1224, 612, 0xe3b778],
				[right, 1187, 555, 0xe0bf96],
				[left, 73, 536, 0x826851],
				[left, 31, 39, 0xd7c5a2],
				[left, 63, 517, 0xffffff],
			]
		],
		oper: [
			[left, 1280, 720, 45, 502, 106, 566, 500],
		]
	}, {
		// 败
		desc: [1280, 720,
			[
				[center, 483, 253, 0x505879],
				[center, 560, 193, 0x5c6181],
				[center, 615, 199, 0x201e1c],
				[center, 674, 181, 0x474656],
				[center, 775, 256, 0x545c7d],
				[center, 804, 229, 0xc1c1b0],
			]
		],
		oper: [
			[center, 1280, 720, 132, 567, 1138, 682, 1000],
		]
	}, {
		// 败2
		desc: [
			1280, 720,
			[
				[center, 762, 277, 0xe1e3d7],
				[center, 780, 241, 0x5a6080],
				[center, 618, 187, 0x221e1d],
				[center, 502, 251, 0x5c6281],
				[center, 515, 296, 0xc1c2b0],
				[center, 918, 251, 0x2c3453],
			]
		],
		oper: [
			[center, 1280, 720, 132, 567, 1138, 682, 1000],
		]
	}
		// , {
		// 	// 胜
		// 	desc: [1280, 720,
		// 		[
		// 			[center, 484, 285, 0xd1a25d],
		// 			[center, 616, 228, 0xa82926],
		// 			[center, 678, 181, 0xc93e3c],
		// 			[center, 761, 261, 0xa02b28],
		// 			[center, 803, 249, 0xbb9a61],
		// 			[center, 491, 238, 0xfdf5e5],
		// 		]
		// 	],
		// 	oper: [
		// 		[center, 1280, 720, 132, 567, 1138, 682, 1000],
		// 	]
		// }
	];
}