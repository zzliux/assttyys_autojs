import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func105 implements InterfaceFuncOrigin {
	id = 105;
	name = '前线作战_杂项';
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 前线作战_决战团体战
		desc: [1280,720,
			[[right,1202,682,0x36354e],
			[right,1207,663,0xbfbf8c],
			[right,1228,635,0x0d0c25],
			[right,1052,659,0x09091e],
			[center,668,325,0xa87e34],
			[left,43,44,0xf3f3fb]]
		],
		oper: [
			[center, 1280, 720, 556,266, 722,454, 1000]
		]
	}, {
		// 前线作战匹配
		desc: [1280,720,
			[[right,1197,567,0xb7a796],
			[right,1022,642,0x1d1a2c],
			[right,1190,687,0x131425],
			[left,33,574,0xcbba99],
			[left,17,567,0x1d1a2c],
			[left,42,43,0xf2f2fa]]
		],
		oper: [
			[center, 1280, 720, 1139,575, 1238,668, 3000]
		]
	}, {
		// 随机选择印记
		desc: [1280,720,
			[[left,35,576,0xb6a685],
			[left,43,46,0x646467],
			[center,424,343,0xd4ccd4],
			[center,724,307,0xcfc7cf],
			[center,533,555,0x735a4a],
			[center,836,560,0x715a49],
			[right,1188,601,0x5c5959]]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 430,547, 540,577, 1000, 1],
				[center, 1280, 720, 732,547, 842,580, 1000, 1],
			]
		]
	}, {
		// 新庭院进入前线作战，没有拖动过视角的前提
		desc: [1280,720,
			[[right,1260,673,0xbeae8d],
			[right,1235,50,0xcaa274],
			[center,240,449,0x4b3c4a],
			[left,20,685,0xeeeebb],
			[right,1071,31,0xd7b38a],
			[right,1056,25,0x271717]]
		],
		oper: [
			[center, 1280, 720, 902,435, 932,564, 2000]
		]
	}, {
		// 随机选择一个祝福
		desc: [1280,720,
			[[center,432,565,0x796150],
			[center,975,471,0x403e55],
			[center,948,555,0x745c4c],
			[center,418,273,0x24212f],
			[left,43,44,0x646467]]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 331,543, 440,577, 2000, 1],
				[center, 1280, 720, 331,588, 704,576, 2000, 1],
				[center, 1280, 720, 842,539, 954,581, 2000, 1],
			]
		]
	}, {
		// 战胜奖励，体力领
		desc: [1280,720,
			[[center,270,214,0xdad2c1],
			[center,414,485,0xc5a472],
			[center,741,498,0xc99e6f],
			[center,920,554,0x5c4b4c],
			[center,987,218,0xddd7cc]]
		],
		oper: [
			[center, 1280, 720, 724,471, 874,513, 1000]
		]
	}, {
		// 终焉逆转，结束
		desc: [1280,720,
			[[right,1183,665,0x37271f],
			[right,1128,466,0x230323],
			[left,286,193,0x882211],
			[right,1063,599,0x1b051f],
			[right,1258,592,0x560906]]
		],
		oper: [
			[center, 1280, 720, 220,144, 1273,334, 1000]
		]
	}]
}