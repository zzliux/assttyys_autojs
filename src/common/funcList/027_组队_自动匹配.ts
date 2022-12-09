import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from "@/interface/InterfaceFunc";
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func027 implements InterfaceFuncOrigin {
	id = 27;
	name = '组队_自动匹配';
	desc = '在庭院中点击下方的组队按钮后点击排队按钮';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280,720,
			[
				//妖气自动匹配中的 图像
				[center,392,46,0x644217],
				[center,804,44,0x986f55],
				[center,660,53,0xac9e90],
				[center,704,27,0xaa9379],
				[center,807,27,0x9d7051],
				[center,556,98,0x2e090d],
				[center,397,22,0x766838]
			]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 5000] // 匹配中等5秒
		]
	}, {
		// 庭院未打开菜单
		desc: [1280, 720,
			[[right, 1211, 606, 0x885f46],
			[right, 1205, 624, 0x987777],
			[right, 1208, 646, 0xaf4949],
			[right, 1175, 680, 0xb08e7d]]
		],
		oper: [
			[left, 1280, 720, 0, 0, 32, 63, 1000]
		]
	}, { // 庭院已打开菜单
		desc: [1280, 720,
			[
				[center, 560, 608, 0xbc3433],
				[center, 542, 639, 0x7b1515],
				[center, 575, 646, 0xc1b8b0],
				[center, 590, 638, 0xb07970]
			]
		],
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, {
		// 庭院已打开菜单，另外一种图标
		desc: [1280, 720,
			[
				[right, 1223, 662, 0xdbcbc7],
				[right, 1155, 41, 0xd7b188],
				[center, 451, 631, 0xe8e4e1],
				[center, 673, 651, 0xdb8b3f],
			]
		],
		oper: [
			[left, 1280, 720, 427, 619, 486, 683, 1000]
		]
	}, {
		desc: [1280,720,
			[[center,840,143,0xd7c8ba],
			[center,623,620,0xccbbaa],
			[center,721,625,0xf4b25f],
			[center,422,631,0xdc935a],
			[center,722,156,0xdbcdc4],
			[center,1134,98,0x482f28]]
		],
		oper: [
			[center, 1280, 720, 702, 601, 865, 650, 1000] //组队界面 自动匹配
		]
	}]
	// operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
	// 	if(!thisScript.oper({
	// 		id: 27,
	// 		name: '判断自动匹配非排队中',
	// 		operator: [thisOperator[0]]
	// 	}) && thisScript.oper({
	// 		id: 27,
	// 		name: '首页判断并点击组队',
	// 		operator: [thisOperator[1], thisOperator[2]]
	// 	})){
	// 		// return thisScript.oper({
	// 		// 	name: '妖气界面判断自动匹配',
	// 		// 	operator: [thisOperator[2]]
	// 		// });
	// 		// thisScript.helperBridge.regionClick(thisOperator[2].oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
	// 		return true;
	// 	}
	// 	return false;
	// }
}