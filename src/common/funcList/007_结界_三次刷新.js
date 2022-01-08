const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 7,
	name: '结界_三次刷新',
	desc: '启用后会在打了三个结界后进行刷新，若CD中则等待CD后刷新',
	checked: false,
	operator: [{  // CD
		desc: [1280,720,
			[[center,549,93,0x5a4130],
			[center,720,93,0x583716],
			[center,224,104,0x4a3525],
			[center,997,127,0x958c83],
			[center,400,610,0xfd9328],
			[center,995,595, 0xAEA69E],
			[center,646,97,0xf8f3e0]]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 30000]
		]
	}, {
		desc: [1280,720, // 刷新
			[[center,549,93,0x5a4130],
			[center,720,93,0x583716],
			[center,224,104,0x4a3525],
			[center,997,127,0x958c83],
			[center,400,610,0xfd9328],
			[center,995,595,0xf4b25f],
			[center,646,97,0xf8f3e0]]
		],
		oper: [
			[center, 1280, 720, 970,573, 1130,621, 1500],
			[center, 1280, 720, 674,407, 839,457, 2000]
		]
	}, {
		desc: [1280,720, // 有呱太活动的刷新
			[[center,342,610,0xffaf2d],
			[center,396,610,0x383c5d],
			[center,1008,598,0xf4b25f],
			[center,704,596,0x83b542],
			[center,1205,112,0x632d34],
			[center,721,94,0x583716],
			[center,370,100,0x4e3926],
			[center,122,450,0xdedacf]]
		],
		oper: [
			[center, 1280, 720, 970,573, 1130,621, 1500],
			[center, 1280, 720, 674,407, 839,457, 2000]
		]
	}]
}