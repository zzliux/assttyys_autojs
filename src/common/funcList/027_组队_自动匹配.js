const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 27,
	name: '组队_自动匹配',
	desc: '在庭院中点击下方的组队按钮后点击排队按钮',
	operator: [{
		desc: [1280,720,
			[[center,400,50,0x513b14], //妖气自动匹配中的 图像
			[center,392,46,0x644217],
			[center,804,44,0x986f55],
			[center,660,53,0xac9e90],
			[center,704,27,0xaa9379],
			[center,807,27,0x9d7051],
			[center,556,98,0x2e090d],
			[center,397,22,0x766838]]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 5000] // 匹配中等5秒
		]
	},{
		desc: [1280,720, // 首页比色
			[[center,404,36,0xfbcb78],
			[center,437,79,0xee7a59],
			[center,1151,53,0xcba574],
			[center,1237,54,0xceac79],
			[center,635,608,0xf4f4f3],
			[center,373,623,0xe2dfdc],
			[right,1228,638,0xd5c6c1],
			[center,734,618,0xf1e8df]]
		],
		oper: [
			[center, 1280, 720, 350, 640, 402, 664, 1500], //首页组队按钮
		]
	},{
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
	}],
	// operatorFunc(thisScript, thisOperator) {
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