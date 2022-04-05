const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 2,
	name: '退出结算',
	checked: false,
	operator: [{
		// 已打开的达摩，取点比较高
		desc: [1280,720,
			[[center,482,611,0x3c82ca],
			[center,487,620,0x3b84c6],
			[center,588,619,0x300204],
			[center,712,621,0x340204],
			[center,557,418,0xda961f]]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 537,401, 1244,612, 1000, 5],
				[center, 1280, 720, 1063,56, 1226,685, 1000, 5],
				[center, 1280, 720, 24,515, 537,616, 1000, 5],
				[center, 1280, 720, 94,136, 219,606, 1000, 5],
			]
		],
		retest: 300
	}, { // 已打开的达摩, 优先级最高
		desc: [1280,720,
			[[center,482,611,0x3c82ca],
			[center,487,620,0x3b84c6],
			[center,588,619,0x300204],
			[center,712,621,0x340204]]
		],
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 1000, 2], // 最后一个参数，表示执行这个的概率
				[right, 1280, 720, 1104,72, 1200,528, 1000, 5],
			]
		],
		retest: 300
	}, {
		// 已打开的达摩 体服更新后的UI
		desc: [1280,720,
			[[center,438,614,0x3f84c9],
			[center,588,622,0x340204],
			[center,722,618,0x380204],
			[center,533,605,0x712a0c],
			[center,471,612,0x3b83c9]]
		],
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 1000, 2], // 最后一个参数，表示执行这个的概率
				[right, 1280, 720, 1104,72, 1200,528, 1000, 5],
			]
		],
		retest: 300
	}, { // 邀请好友确认
		desc: [1280,720,
			[[center,460,258,0xcbb59e],
			[center,799,268,0xcbb59e],
			[center,467,429,0xdf6851],
			[center,700,431,0xf4b25f],
			[center,641,429,0xcbb59e]]
		],
		oper: [
			[center, 1280, 720, 550,347, 730,376, 300],
			[center, 1280, 720, 680,411, 838,452, 1000],
		]
	}, { // 单人-胜利太鼓
		desc: [1280, 720,
			[[center, 481, 159, 0x841b12],
			[center, 458, 207, 0xa11c10],
			[center, 512, 205, 0xa11b10],
			[center, 515, 168, 0xc7b39e],
			[center, 447, 169, 0xc6b5a0],
			[center, 484, 222, 0xd3c4ae],
			[center, 510, 249, 0xd4c4ab]]
		],
		oper: [
			[center, 1280, 720, 165,60, 1263, 604, 400],
		],
		notForCnt: true,
	}, { // 组队-胜利太鼓
		desc: [1280,720,
			[[center,482,104,0x851b11],
			[center,456,148,0x9e1c10],
			[center,503,147,0x9d1c10],
			[center,480,132,0xcfc0aa],
			[center,514,109,0xc7b5a1],
			[center,429,171,0xd6c9b1]]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 124,60, 1188,363, 400, 5],
				[center, 1280, 720, 90,380, 438,604, 400, 5],
				[center, 1280, 720, 848,359, 1204,588, 400, 5],
			]
		],
		notForCnt: true,
	}/*, { // 未打开的达摩
		desc: [1280, 720,
			[[center, 667, 377, 0xba4618],
			[center, 678, 316, 0x080808],
			[center, 589, 314, 0x060606],
			[center, 636, 324, 0xe7e1cf],
			[center, 588, 486, 0x330202]]
		],
		oper: [
			[center, 1280, 720, 153,60, 1202,614, 800],
		],
		notForCnt: true,
	}, { // 未打开的达摩
		desc: [1280,720,
			[[center,667,377,0xd35e2c],
			[center,678,316,0x171614],
			[center,589,314,0x1b1a16],
			[center,636,324,0xfffae4],
			[center,588,486,0x340303]]
		],
		oper: [
			[center, 1280, 720, 153,60, 1202,614, 800],
		],
		notForCnt: true,
	}*/, { // 单人-失败太鼓
		desc: [1280, 720,
			[[center, 465, 151, 0x514a5c],
			[center, 447, 189, 0x60566b],
			[center, 496, 192, 0x5b5165],
			[center, 466, 175, 0xb7a78e],
			[center, 502, 154, 0xae9982],
			[center, 418, 210, 0xb6a388]]
		],
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 2000, 2],
				[right, 1280, 720, 1104,72, 1200,528, 2000, 5],
			]
		],
	}, { // 组队-失败太鼓
		desc: [1280,720,
			[[center,466,93,0x514c5d],
			[center,448,135,0x5d5469],
			[center,497,140,0x5a5365],
			[center,470,123,0xb8a88f],
			[center,415,151,0xb8a589]]
		],
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 2000, 2],
				[right, 1280, 720, 1104,72, 1200,528, 2000, 5],
			]
		],
	}, { // 左上角的统计图标
		desc: [1280, 720,
			[[left, 71, 65, 0xac8a5a],
			[left, 80, 59, 0x3c2a21],
			[left, 88, 67, 0xa8835a],
			[left, 77, 82, 0x3a2a22]]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 124,60, 1188,363, 400, 5],
				[center, 1280, 720, 90,380, 438,604, 400, 5],
				[center, 1280, 720, 848,359, 1204,588, 400, 5],
			]
		],
		notForCnt: true,
	}, { // 左上角的贪吃鬼图标
		desc: [1280, 720,
			[[left, 50, 66, 0x693430],
			[left, 62, 65, 0xf5f5f5],
			[left, 112, 58, 0x312012],
			[left, 74, 90, 0x927150]]
		],
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 400, 2],
				[right, 1280, 720, 1104,72, 1200,528, 400, 5],
			]
		],
		notForCnt: true,
	}, {
		// 御魂溢出点确认
		desc: [1280,720,
			[[center,448,221,0x684736],
			[center,829,222,0x654434],
			[center,705,248,0xcbb59e],
			[center,504,408,0xcbb59e],
			[center,762,415,0xcbb59e],
			[center,771,352,0xcbb59e],
			[center,519,340,0xcbb59e],
			[center,604,411,0xf4b25f],
			[center,684,438,0xf4b25f],
			[center,698,446,0x923d2c],
			[center,596,493,0x6d4c3b]]
		],
		oper: [
			[center, 1280, 720, 585,398, 694,446, 300]
		],
		notForCnt: true,
	}, {
		// 打开后的达摩，所有点都被结算挡住了，使用经验，金币buff，和第一个奖励的金币作为特征
		desc: [1280,720,
			[[left,172,657,0x97bae0],
			[left,187,668,0xf7e624],
			[left,339,668,0xf7e525],
			[center,282,188,0x544d3e],
			[center,318,226,0xb49c1b]]
		],
		operStepRandom: [
			[
				[left, 1280, 720, 69, 171, 170, 452, 2000, 2],
				[right, 1280, 720, 1104,72, 1200,528, 2000, 5],
			]
		],
	}]
}