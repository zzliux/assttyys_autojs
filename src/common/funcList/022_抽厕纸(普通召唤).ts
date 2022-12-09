import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from "@/interface/InterfaceFunc";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func022 implements InterfaceFuncOrigin {
	id = 22;
	name = '抽厕纸(普通召唤)';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280,720,
			[[center,442,650,0xf4b25f],
			[center,707,647,0xf4b25f],
			[center,586,671,0x964130],
			[center,856,671,0x933e2d]]
		],
		oper: [
			[center, 1280, 720, 697,629, 855,665, 1000] // 再次召唤
		]
	}
	// , {
	// 	desc: [1280,720,
	// 		[[center,272,586,0xd2d3d2],
	// 		[center,499,585,0x97daef],
	// 		[center,775,606,0x4f4f4f],
	// 		[center,990,598,0xbc68db],
	// 		[left,40,43,0x876241],
	// 		[left,224,32,0x583716]]
	// 	],
	// 	oper: [
	// 		[center, 1280, 720, 262,588, 327,666, 1000] // 普通召唤
	// 	]
	// }
	]
}