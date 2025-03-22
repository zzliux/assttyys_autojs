import { IMultiFindColorsOrigin } from '@/interface/IMultiColor';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
// const top = 3;
// const middle = 4;
// const bottom = 5;

const multiFindColors: IMultiFindColorsOrigin = {
	'结界_进攻': {
		// 重新取色，使用时需要指定查找区域
		region: [center, 1280, 720, 304, 317, 1166, 713],
		desc: [
			[1280, 720,
				[
					[center, 325, 362, 0x9a3434],
					[center, 444, 363, 0x933e2d],
					[center, 329, 367, 0xf5b15c],
					[center, 440, 407, 0xf5b25e],
					[center, 444, 411, 0x983e2d],
				]
			],
			[1280, 720,
				[
					[center, 989, 363, 0x943031],
					[center, 995, 368, 0xefa858],
					[center, 1105, 367, 0xf7ae63],
					[center, 1110, 363, 0x943c29],
					[center, 1105, 407, 0xf1b05c],
					[center, 1109, 411, 0x993f2f],
				]
			]
		]
	},
	'结界_进攻_灰': {
		region: [center, 1280, 720, 304, 317, 1166, 713],
		desc: [
			[1280, 720,
				[
					[center, 600, 480, 0x685f5f],
					[center, 639, 493, 0xb0a8a0],
					[center, 679, 511, 0x272420],
					[center, 712, 523, 0xafaaa2],
					[center, 719, 533, 0x8c837b],
					[center, 727, 540, 0xbfa98f]
				]
			],
			[1280, 720,
				[
					[center, 601, 497, 0x665d5d],
					[center, 610, 506, 0xb0a8a0],
					[center, 712, 540, 0xafaaa2],
					[center, 720, 546, 0x685f5f],
					[center, 726, 557, 0xbfa98f],
					[center, 679, 529, 0x282521]
				]
			],
			[1280, 720,
				[
					[center, 600, 356, 0x675e5a],
					[center, 615, 392, 0xadaa9c],
					[center, 649, 380, 0x2a2723],
					[center, 679, 387, 0x272420],
					[center, 719, 404, 0x645e5b],
					[center, 714, 400, 0xadae9c]
				]
			]
		]
	},
	'结界_5勋章': {
		region: [center, 1280, 720, 124, 125, 1152, 545],
		desc: [
			[1280, 720,
				[
					[center, 914, 431, 0xdacdbd],
					[center, 842, 447, 0x613f21],
					[center, 842, 468, 0x613f21],
					[center, 1120, 426, 0xd8caba],
					[center, 925, 486, 0xa64e42],
					[center, 965, 486, 0xa64e42],
					[center, 1005, 486, 0xa64e42],
					[center, 1045, 486, 0xa64e42],
					[center, 1085, 486, 0xa64e42],
					[center, 911, 519, 0xc65644],
					[center, 911, 537, 0x83756f]
				]
			]
		]
	},
	'结界_4勋章': {
		region: [center, 1280, 720, 124, 125, 1152, 545],
		desc: [
			[1280, 720,
				[
					[center, 914, 431, 0xdacdbd],
					[center, 842, 447, 0x613f21],
					[center, 842, 468, 0x613f21],
					[center, 1120, 426, 0xd8caba],
					[center, 925, 486, 0xa64e42],
					[center, 965, 486, 0xa64e42],
					[center, 1005, 486, 0xa64e42],
					[center, 1045, 486, 0xa64e42],
					[center, 1085, 486, 0xae9b8b],
					[center, 911, 519, 0xc65644],
					[center, 911, 537, 0x83756f]
				]
			]
		]
	},
	'结界_3勋章': {
		region: [center, 1280, 720, 124, 125, 1152, 545],
		desc: [
			[1280, 720,
				[
					[center, 914, 431, 0xdacdbd],
					[center, 842, 447, 0x613f21],
					[center, 842, 468, 0x613f21],
					[center, 1120, 426, 0xd8caba],
					[center, 925, 486, 0xa64e42],
					[center, 965, 486, 0xa64e42],
					[center, 1005, 486, 0xa64e42],
					[center, 1045, 486, 0xae9b8b],
					[center, 1085, 486, 0xae9b8b],
					[center, 911, 519, 0xc65644],
					[center, 911, 537, 0x83756f]
				]
			]
		]
	},
	'结界_2勋章': {
		region: [center, 1280, 720, 124, 125, 1152, 545],
		desc: [
			[1280, 720,
				[
					[center, 914, 431, 0xdacdbd],
					[center, 842, 447, 0x613f21],
					[center, 842, 468, 0x613f21],
					[center, 1120, 426, 0xd8caba],
					[center, 925, 486, 0xa64e42],
					[center, 965, 486, 0xa64e42],
					[center, 1005, 486, 0xae9b8b],
					[center, 1045, 486, 0xae9b8b],
					[center, 1085, 486, 0xae9b8b],
					[center, 911, 519, 0xc65644],
					[center, 911, 537, 0x83756f]
				]
			]
		]
	},
	'结界_1勋章': {
		region: [center, 1280, 720, 124, 125, 1152, 545],
		desc: [
			[1280, 720,
				[
					[center, 914, 431, 0xdacdbd],
					[center, 842, 447, 0x613f21],
					[center, 842, 468, 0x613f21],
					[center, 1120, 426, 0xd8caba],
					[center, 925, 486, 0xa64e42],
					[center, 965, 486, 0xae9b8b],
					[center, 1005, 486, 0xae9b8b],
					[center, 1045, 486, 0xae9b8b],
					[center, 1085, 486, 0xae9b8b],
					[center, 911, 519, 0xc65644],
					[center, 911, 537, 0x83756f]
				]
			]
		]
	},
	'结界_0勋章': {
		region: [center, 1280, 720, 124, 125, 1152, 545],
		desc: [
			[1280, 720,
				[
					[center, 914, 431, 0xdacdbd],
					[center, 842, 447, 0x613f21],
					[center, 842, 468, 0x613f21],
					[center, 1120, 426, 0xd8caba],
					[center, 925, 486, 0xae9b8b],
					[center, 965, 486, 0xae9b8b],
					[center, 1005, 486, 0xae9b8b],
					[center, 1045, 486, 0xae9b8b],
					[center, 1085, 486, 0xae9b8b],
					[center, 911, 537, 0x83756f]
				]
			]
		]
	},
	'结界_呱太勋章': {
		region: [center, 1280, 720, 124, 125, 1152, 545],
		desc: [
			[1280, 720,
				[
					[center, 904, 418, 0x49793a],
					[center, 904, 417, 0x739530],
					[center, 1117, 530, 0x3c5833],
					[center, 862, 450, 0x946b2c],
					[center, 1002, 504, 0x8f8a85]
				]
			],
			[1280, 720,
				[
					[center, 907, 418, 0x477a36],
					[center, 907, 417, 0x608e3f],
					[center, 1117, 530, 0x3c5631],
					[center, 862, 450, 0x966330],
					[center, 1002, 504, 0x918c87]
				]
			]
		]
	},
	'式神寄养_全列表空结界卡': {
		region: [center, 1280, 720, 215, 167, 660, 598],
		desc: [
			[
				1280, 720,
				[
					[center, 580, 192, 0xd7c9ba],
					[center, 572, 215, 0xd7c9ba],
					[center, 577, 252, 0xd7c9ba],
					[center, 577, 300, 0xd7c9ba],
					[center, 567, 340, 0xd7c9ba],
					[center, 575, 362, 0xd7c9ba],
					[center, 575, 402, 0xd7c9ba],
					[center, 575, 445, 0xd7c9ba],
					[center, 572, 470, 0xd7c9ba],
					[center, 580, 510, 0xd7c9ba],
					[center, 572, 532, 0xd7c9ba],
					[center, 577, 562, 0xd7c9ba],
					[center, 802, 554, 0xf6b45b],
					[center, 959, 554, 0xf4b260],
				]
			]
		]
	},
	'式神寄养_全列表被占用': {
		region: [center, 1280, 720, 215, 167, 646, 598],
		desc: [
			[
				1280, 720,
				[
					[center, 563, 282, 0xae9b82],
					[center, 560, 380, 0xae9b82],
					[center, 556, 485, 0xae9b82],
					[center, 570, 602, 0xae9b82],
				]
			]
		]
	},
	'结界卡_斗鱼6星': {
		region: [center, 1280, 720, 215, 167, 646, 598],
		desc: [
			[1280, 720,
				[
					[center, 593, 243, 0xe54c2a],
					[center, 587, 244, 0xf7802b],
					[center, 576, 213, 0x4fcef0],
					[center, 560, 233, 0x4c90a1],
					[center, 344, 254, 0xd7c9b9],
					[center, 339, 187, 0xd7c9ba]
				]
			],
			[
				1280, 720,
				[
					[center, 556, 510, 0x68a1a8],
					[center, 593, 507, 0x325667],
					[center, 595, 518, 0xf8882c],
					[center, 555, 518, 0xfa9130],
					[center, 572, 508, 0x5f9199],
				]
			]
		]
	},
	'结界卡_斗鱼5星': {
		region: [center, 1280, 720, 215, 167, 646, 598],
		desc: [
			[1280, 720,
				[
					[center, 593, 243, 0x8a8282],
					[center, 587, 244, 0xf7802b],
					[center, 576, 213, 0xe2e3e2],
					[center, 560, 233, 0x569098],
					[center, 344, 254, 0xd7c9b9],
					[center, 339, 187, 0xd7c9ba],
					[center, 578, 243, 0xed7610]
				]
			],
			[
				1280, 720,
				[
					[center, 575, 397, 0x6da7a7],
					[center, 595, 411, 0x948c8c],
					[center, 554, 411, 0xf37c16],
					[center, 574, 401, 0x54868e],
					[center, 558, 400, 0x599098],
					[center, 568, 400, 0x5d8f97],
				]
			]
		]
	},
	'结界卡_斗鱼4星': {
		region: [center, 1280, 720, 215, 167, 646, 598],
		desc: [
			[1280, 720,
				[
					[center, 593, 243, 0x8a8282],
					[center, 587, 244, 0x948c8c],
					[center, 576, 213, 0xe2e3e3],
					[center, 560, 233, 0x569098],
					[center, 344, 254, 0xd7c9b9],
					[center, 339, 187, 0xd7c9ba],
					[center, 578, 243, 0xed7610]
				]
			],
			[
				1280, 720,
				[
					[center, 566, 552, 0x6ca6a6],
					[center, 595, 565, 0x948c8c],
					[center, 587, 565, 0x948c8c],
					[center, 555, 565, 0xf7832c],
					[center, 555, 557, 0x619a9a],
					[center, 578, 552, 0x6fa9a9],
				]
			]
		]
	},
	'结界卡_太鼓6星': {
		region: [center, 1280, 720, 215, 167, 646, 598],
		desc: [
			[1280, 720,
				[
					[center, 593, 243, 0xe54c2a],
					[center, 587, 244, 0xf7802b],
					[center, 576, 213, 0xfea181],
					[center, 560, 233, 0xe9549e],
					[center, 344, 254, 0xd7c9b9],
					[center, 339, 187, 0xd7c9ba]
				]
			],
			[
				1280, 720,
				[
					[center, 595, 233, 0xf46d28],
					[center, 586, 233, 0xed7610],
					[center, 576, 221, 0xa77d75],
					[center, 573, 239, 0xe5cc69],
					[center, 579, 199, 0xd3a28b],
				]
			],
			[
				1280, 720,
				[
					[center, 595, 378, 0xf46d28],
					[center, 587, 378, 0xf46e28],
					[center, 588, 367, 0xdf9b86],
					[center, 580, 345, 0xd1a28d],
					[center, 574, 385, 0xe5cc68],
				]
			],
			[
				1280, 720,
				[
					[center, 592, 460, 0xdd8b79],
					[center, 578, 440, 0xd4a190],
					[center, 595, 474, 0xf46d28],
					[center, 587, 474, 0xf47028],
					[center, 539, 456, 0xd7c9ba],
				]
			],
			[
				1280, 720,
				[
					[center, 595, 244, 0xf28628],
					[center, 587, 244, 0xf28729],
					[center, 579, 244, 0xf28729],
					[center, 571, 244, 0xf28729],
					[center, 563, 244, 0xf28729],
					[center, 555, 244, 0xf28729],
					[center, 586, 234, 0xdd9e8a],
					[center, 581, 210, 0xd2a08c],
					[center, 590, 232, 0xde9682],
				]
			],
		]
	},
	'结界卡_太鼓5星': {
		region: [center, 1280, 720, 215, 167, 646, 598],
		desc: [
			[1280, 720,
				[
					[center, 593, 243, 0x8a8282],
					[center, 587, 244, 0xf7802b],
					[center, 576, 213, 0xba8970],
					[center, 560, 233, 0xdeb48b],
					[center, 344, 254, 0xd7c9b9],
					[center, 339, 187, 0xd7c9ba]
				]
			],
			[
				1280, 720,
				[
					[center, 595, 490, 0x8c8a8a],
					[center, 587, 490, 0xfd9137],
					[center, 578, 490, 0xef841e],
					[center, 574, 495, 0xe9d77d],
					[center, 572, 467, 0xe7ceb6],
					[center, 577, 458, 0xbb8a72],
				]
			],
			[
				1280, 720,
				[
					[center, 595, 597, 0x8d8a8a],
					[center, 586, 597, 0xf0831d],
					[center, 578, 597, 0xf0831d],
					[center, 570, 584, 0xe0af9e],
					[center, 578, 567, 0xc59281],
					[center, 574, 603, 0xefdb7d],
				]
			],
			[
				1280, 720,
				[
					[center, 577, 456, 0xba8978],
					[center, 556, 469, 0xe8caaf],
					[center, 592, 472, 0xd78773],
					[center, 595, 488, 0x918989],
					[center, 587, 488, 0xf46f28],
					[center, 538, 477, 0xd7c9ba],
				]
			]
		]
	},
	'结界卡_太鼓4星': {
		region: [center, 1280, 720, 215, 167, 646, 598],
		desc: [
			[1280, 720,
				[
					[center, 593, 243, 0x8a8282],
					[center, 587, 244, 0x948c8c],
					[center, 576, 213, 0xba8970],
					[center, 560, 233, 0xdeb48b],
					[center, 344, 254, 0xd7c9b9],
					[center, 339, 187, 0xd7c9ba],
					[center, 578, 243, 0xed7610]
				]
			],
			[1280, 720,
				[
					[center, 595, 458, 0x928c8d],
					[center, 587, 458, 0x928c8d],
					[center, 579, 458, 0xf28a2a],
					[center, 571, 458, 0xf28b2b],
					[center, 563, 458, 0xf28c2b],
					[center, 555, 458, 0xf28c2b],
					[center, 555, 440, 0xe8cbaf],
					[center, 589, 441, 0xd68672],
					[center, 578, 424, 0xca9580],
					[center, 596, 407, 0xd6c9b9],
					[center, 340, 459, 0xd6c9b9],
				]
			],
		]
	},
	'结界卡_太鼓3星': {
		region: [center, 1280, 720, 215, 167, 646, 598],
		desc: [
			[1280, 720,
				[
					[center, 593, 243, 0x8a8282],
					[center, 587, 244, 0x948c8c],
					[center, 576, 213, 0xce9887],
					[center, 560, 233, 0xb88f6e],
					[center, 344, 254, 0xd7c9b9],
					[center, 339, 187, 0xd7c9ba],
					[center, 578, 243, 0x8f8787],
					[center, 590, 246, 0xc9b865]
				]
			]
		]
	},
	'皮肤广告关闭按钮': {
		region: [right, 1280, 720, 1078, 22, 1261, 164],
		similar: 95,
		desc: [
			[
				1280, 720,
				[
					[right, 1181, 75, 0xe8d4cf],
					[right, 1172, 81, 0xe9d4d0],
					[right, 1167, 88, 0xebd0ce],
					[right, 1182, 91, 0xe8d1d1],
				]
			],
			[
				1280, 720,
				[
					[right, 1189, 82, 0xe9d4d0],
					[right, 1177, 82, 0x9f3b5e],
					[right, 1192, 95, 0x9b4067],
					[right, 1200, 74, 0xe8d4cf],
				]
			]
		]
	},
	'探索_经验标识': {
		region: [center, 1280, 720, 42, 345, 1173, 700],
		similar: 95,
		desc: [
			[1280, 720,
				[
					[left, 946, 516, 0x9d2120],
					[left, 947, 516, 0x921f1d],
					[left, 948, 516, 0x8d1e1c],
					// [left,949,516,0x881e1c],
					[left, 946, 517, 0x9b2120],
					[left, 947, 517, 0x95201e],
					[left, 948, 517, 0x901f1d],
					// [left,949,517,0x8b1e1c],
					[left, 946, 518, 0x9a2121],
					[left, 947, 518, 0x98201f],
					[left, 948, 518, 0x931f1e],
					[left, 946, 519, 0x972221],
					[left, 947, 519, 0x9a2221],
					[left, 948, 519, 0x95201f],
				]
			]
		]
	},
	'探索_掉落标识': {
		region: [center, 1280, 720, 42, 345, 1173, 700],
		similar: 95,
		desc: [
			[1280, 720,
				[
					[center, 896, 435, 0xcd3624],
					[center, 896, 439, 0xa11b09],
					[center, 902, 439, 0xfccc17]
				]
			],
			[1280, 720,
				[
					[left, 54, 387, 0xd05625],
					[left, 68, 424, 0xecda22],
					[left, 32, 411, 0xb01a14]
				]
			],
			[
				1280, 720,
				[
					[center, 601, 381, 0xd5502d],
					[center, 597, 406, 0xcf3f28],
					[center, 599, 392, 0x040403],
				]
			],
			[
				1280, 720,
				[
					[center, 1060, 538, 0xd25c2a],
					[center, 1053, 559, 0x030302],
					[center, 1053, 584, 0xd43125],
				]
			]
		]
	},
	'探索_挑战': {
		region: [center, 1280, 720, 87, 178, 1257, 547],
		desc: [
			[1280, 720,
				[
					[center, 1000, 442, 0xffffed],
					[center, 1016, 450, 0xeeacb4],
					[center, 1011, 473, 0x404879],
					[center, 1032, 488, 0x31396b],
					[center, 1040, 505, 0xfffbe2]
				]
			],
			[1280, 720,
				[
					[center, 1000, 447, 0x422918],
					[center, 1016, 450, 0xf8b6be],
					[center, 1011, 473, 0x424a7b],
					[center, 1032, 488, 0x31396b],
					[center, 1040, 508, 0x1a0e05]
				]
			],
		]
	},
	'探索_挑战BOSS': {
		region: [center, 1280, 720, 87, 178, 1257, 547],
		similar: 95, // 手动修改这个相似度不受外部控制
		desc: [
			[1280, 720,
				[
					[center, 609, 248, 0x2f0d09],
					[center, 643, 236, 0xeeb4bc],
					[center, 656, 244, 0x361d0d],
					[center, 672, 278, 0x3d2514],
					[center, 654, 298, 0x703d1b],
					[center, 637, 283, 0xfffff9],
					[center, 646, 307, 0x251308]
				]
			],
			[1280, 720,
				[
					[center, 648, 240, 0x332211],
					[center, 674, 236, 0xf0b0b0],
					[center, 708, 282, 0x30180c],
					[center, 643, 281, 0x3d668f],
					[center, 660, 239, 0x402716],
					[center, 686, 272, 0xf4ece3]
				]
			],
			[1280, 720,
				[
					[center, 406, 238, 0x312010],
					[center, 428, 236, 0xf7b2b5],
					[center, 455, 262, 0x422c60],
					[center, 455, 278, 0x3c2313],
					[center, 457, 289, 0x31120a],
					[center, 420, 284, 0xf7fbff],
					[center, 417, 301, 0xef9fa9],
					[center, 389, 270, 0x1f0f08],
				]
			]
		]
	},
	'准备界面_满级标识': {
		region: [center, 1280, 720, 6, 257, 866, 640],
		desc: [
			[1280, 720,
				[
					[center, 473, 318, 0xeca831],
					[center, 480, 319, 0xf89f22],
					[center, 472, 334, 0xf8e71b],
					[center, 489, 333, 0xf4e317],
					[center, 485, 318, 0xfaa31b]
				]
			],
			[1280, 720,
				[
					[center, 740, 403, 0xe8a42f],
					[center, 748, 404, 0xfe9f18],
					[center, 753, 403, 0xf9a41e],
					[center, 745, 418, 0xcdbc00],
					[center, 756, 419, 0xf4e317]
				]
			]
		]
	},
	'地鬼_难度把手': {
		region: [center, 1280, 720, 158, 231, 575, 337],
		desc: [
			[1280, 720,
				[
					[center, 403, 273, 0xffff81],
					[center, 413, 276, 0xfffcbf],
					[center, 405, 288, 0xfffdb0],
					[center, 424, 287, 0xfef77c],
				]
			]
		]
	},
	'准备_N卡': {
		region: [center, 1280, 720, 121, 485, 1016, 656],
		desc: [
			[1280, 720,
				[
					[center, 544, 506, 0x382214],
					[center, 561, 662, 0x6fa8c9],
					[center, 576, 663, 0x6ea8c9],
					[center, 590, 662, 0x7a7a7a],
					[center, 604, 662, 0x777777],
					[center, 551, 507, 0xded8c6]
				]
			]
		]
	},
	'庭院_町中竖牌': {
		region: [center, 1280, 720, 0, 83, 1279, 412],
		desc: [
			[1280, 720,
				[
					[center, 745, 269, 0x12110f],
					[center, 741, 272, 0xb6aca7],
					[center, 737, 297, 0x160d07],
					[center, 751, 291, 0xaba69a],
					[center, 726, 294, 0xaeaa97],
					[center, 728, 267, 0x060503]
				]
			],
			[   //  画质为极速适配
				1280, 720,
				[
					[center, 748, 296, 0xa6a396],
					[center, 738, 325, 0x999592],
					[center, 733, 246, 0xb7aeaf],
					[center, 738, 312, 0x766e66],
					[center, 709, 307, 0xa59e9d],
					[center, 697, 257, 0xaaa290],
				]
			]
		]
	},
	'庭院_探索灯笼': {
		region: [center, 1280, 720, 0, 83, 1006, 284],
		desc: [
			[1280, 720,
				[
					[center, 658, 109, 0xd2a580],
					[center, 670, 120, 0x020100],
					[center, 681, 120, 0x020101],
					[center, 681, 134, 0xfee4a5],
					[center, 676, 145, 0x100b03],
					[center, 688, 144, 0xfff6b2],
					[center, 688, 156, 0xffffc2]
				]
			],
			[1280, 720,
				[
					[right, 1112, 107, 0xd0a786],
					[center, 1120, 113, 0x010100],
					[center, 1133, 120, 0x010101],
					[center, 1136, 132, 0xfadd9d],
					[center, 1126, 133, 0xf9de9f],
					[center, 1130, 143, 0x0e0903],
					[center, 1126, 158, 0x1e1405],
					[center, 1126, 175, 0xffffc7]
				]
			],
			[   //  低画质适配
				1280, 720,
				[
					[center, 658, 109, 0xd2a580],
					[center, 670, 120, 0x020100],
					[center, 681, 120, 0x020101],
					[center, 680, 123, 0x020201],
					[center, 712, 128, 0xcda281],
					[center, 679, 198, 0xffffde],
				]
			],

			// 亮着的
			[
				1280, 720,
				[
					[center, 670, 121, 0x3d393d],
					[center, 662, 146, 0xfffffd],
					[center, 678, 159, 0x606060],
					[center, 681, 173, 0xffffff],
					[center, 699, 141, 0xffffc9],
				]
			],
			[
				1280, 720,
				[
					[center, 487, 111, 0x2f2f2f],
					[center, 486, 136, 0xffffeb],
					[center, 492, 148, 0x595959],
					[center, 512, 155, 0xffffff],
					[center, 523, 169, 0xffffe5],
				]
			],
			[
				1280, 720,
				[
					[center, 874, 115, 0x333334],
					[center, 886, 122, 0x3a3a3b],
					[center, 891, 138, 0xffffe6],
					[center, 897, 178, 0xffffee],
					[center, 879, 158, 0x5b5b5b],
				]
			],
		]
	},
	'探索_宝箱': {
		region: [left, 1280, 720, 0, 121, 148, 577],
		desc: [
			[1280, 720,
				[
					[left, 27, 315, 0xebdfc3],
					[left, 64, 324, 0x221514],
					[left, 75, 355, 0xb63818],
					[left, 43, 354, 0xae2b18],
					[left, 112, 322, 0xe9dabe],
					[left, 104, 360, 0x241717]
				]
			]
		]
	},
	'公频聊天_未读红点': {
		region: [left, 1280, 720, 21, 22, 108, 714],
		desc: [
			[1280, 720,
				[
					[left, 54, 349, 0xe7d5be],
					[left, 90, 345, 0xfd1010],
					[left, 90, 354, 0xfe1010],
					[left, 84, 349, 0xdc0000],
					[left, 96, 349, 0xfc5c5c],
					[left, 78, 399, 0x745230]
				]
			],
			[1280, 720,
				[
					[left, 54, 349, 0x822d2d],
					[left, 90, 345, 0xfd1010],
					[left, 90, 354, 0xfe1111],
					[left, 84, 349, 0xdc0000],
					[left, 96, 349, 0xfc5c5c],
					[left, 78, 399, 0xd3a05c]
				]
			]
		]
	},
	'悬赏_挑战字样': {
		region: [left, 1280, 720, 513, 205, 642, 558],
		desc: [
			[1280, 720,
				[
					[center, 544, 316, 0x883322],
					[center, 595, 317, 0x923220],
					[center, 597, 331, 0x963321],
					[center, 541, 331, 0x883322],
					[center, 571, 322, 0x8a3420]
				]
			],
			[1280, 720,
				[
					[center, 540, 243, 0x893723],
					[center, 572, 245, 0x8b3421],
					[center, 595, 247, 0x933320],
					[center, 552, 265, 0xf3e8d6],
					[center, 569, 265, 0xc8a394],
					[center, 593, 266, 0xe3c9b2],
					[center, 570, 253, 0x8a3421]
				]
			],
			// 旧
			[1280, 720,
				[
					[center, 537, 240, 0xbb9182],
					[center, 569, 241, 0xc19386],
					[center, 600, 241, 0xd5c3b7],
					[center, 542, 259, 0x893522],
					[center, 562, 257, 0xe5c9b9],
					[center, 575, 257, 0xc89f91],
					[center, 598, 266, 0x913420]
				]
			]
		]
	},
	'悬赏_秘闻字样': {
		region: [left, 1280, 720, 512, 160, 1256, 500],
		desc: [
			[1280, 720,
				[
					[center, 534, 238, 0x457ab0],
					[center, 568, 238, 0x3674ab],
					[center, 597, 238, 0x3872ab],
					[center, 537, 251, 0x8ba5bb],
					[center, 564, 254, 0xbcd1d2],
					[center, 582, 254, 0x9fbfcc],
					[center, 591, 254, 0xe7eedd],
					[center, 552, 264, 0x9dbbc9],
					[center, 590, 264, 0xf4f7e0]
				]
			],
			[1280, 720,
				[
					[center, 537, 311, 0xb2bac1],
					[center, 570, 311, 0x90a6b9],
					[center, 600, 312, 0xa7b2bf],
					[center, 548, 325, 0xd4e1db],
					[center, 590, 324, 0xaec8ce],
					[center, 573, 325, 0x3171ab],
					[center, 562, 337, 0x3171ab],
					[center, 581, 335, 0x3071aa]
				]
			],
			[1280, 720,
				[
					[center, 542, 314, 0x3171ab],
					[center, 600, 316, 0x3071aa],
					[center, 541, 333, 0x3171ab],
					[center, 564, 325, 0xadc8cf],
					[center, 582, 324, 0xc0d6d4],
					[center, 590, 332, 0xbacfd1],
					[center, 561, 330, 0xecf1e0],
					[center, 602, 336, 0x3571ab]
				]
			],
			// 旧
			[1280, 720,
				[
					[center, 541, 319, 0x3070aa],
					[center, 601, 319, 0x3070aa],
					[center, 541, 333, 0x3070aa],
					[center, 597, 333, 0x3070aa],
					[center, 555, 317, 0xcae1da],
					[center, 591, 334, 0xdeefde]
				]
			],
			[1280, 720,
				[
					[center, 541, 247, 0x3072ab],
					[center, 598, 247, 0x2f72a5],
					[center, 599, 264, 0x3070aa],
					[center, 541, 267, 0x3070aa],
					[center, 555, 249, 0xdff0df],
					[center, 553, 266, 0xd6e7de],
					[center, 548, 263, 0xd9ebdc],
					[center, 565, 249, 0xa4b6b7],
					[center, 577, 250, 0x3477aa],
					[center, 579, 249, 0xbfd8e0],
					[center, 591, 265, 0xdeefde]
				]
			],
			[1280, 720,
				[
					[center, 541, 384, 0x3272a9],
					[center, 601, 385, 0x2d71a4],
					[center, 600, 405, 0x3070aa],
					[center, 542, 405, 0x3070aa],
					[center, 564, 393, 0xe8f4f4],
					[center, 579, 387, 0x70a0c2]
				]
			]
		]
	},
	'悬赏_宝箱': {
		region: [left, 1280, 720, 0, 92, 155, 557],
		desc: [
			[
				1280, 720,
				[
					[left, 53, 347, 0xb02a18],
					[left, 84, 349, 0x4e0306],
					[left, 83, 358, 0x4c0605],
					[left, 73, 349, 0xb7381a],
					[left, 72, 365, 0xc78521],
				]
			]
		]
	},
	'悬赏_已追踪任务': {
		region: [left, 1280, 720, 0, 112, 153, 555],
		desc: [
			[
				1280, 720,
				[
					[left, 24, 160, 0xe9dabf],
					[left, 129, 273, 0x28303d],
					[left, 113, 215, 0x3c2826],
					[left, 124, 203, 0xddcba9],
					[left, 122, 237, 0xe2d2b2],
					[left, 121, 249, 0xe4d4b4],
					[left, 120, 262, 0xe4d4b5],
					[left, 107, 231, 0x2a1c1b],
					[left, 128, 276, 0x28303c],
					[left, 128, 269, 0x262d3b],
					[left, 120, 276, 0x272f3b],
				]
			]
		]
	},
	'悬赏_挑战弹窗界面': {
		region: [left, 1280, 720, 718, 420, 1122, 629],
		desc: [
			[1280, 720,
				[
					[right, 989, 517, 0xf4b25f],
					[right, 991, 542, 0xf4b25f],
					[right, 909, 518, 0xf4b25f],
					[right, 910, 540, 0xf4b25f],
					[right, 1009, 506, 0x993333],
					[right, 1013, 548, 0x933e2d],
					[right, 1003, 555, 0x903b2a],
					[right, 1011, 527, 0xf6b462],
					[right, 981, 541, 0x332c24]
				]
			]
		]
	},
	'悬赏_识别秘闻界面': {
		region: [left, 1280, 720, 929, 23, 1230, 689],
		desc: [
			[1280, 720,
				[
					[right, 1178, 102, 0x67333c],
					[right, 1176, 212, 0x754420],
					[right, 1169, 270, 0xe0be58],
					[right, 1180, 427, 0xe7d6b2],
					[right, 1105, 611, 0xe1d8c0],
					[right, 1192, 328, 0xfef2c2]
				]
			],
			// 旧
			[1280, 720,
				[
					[right, 1178, 102, 0x67333c],
					[right, 1176, 212, 0x754420],
					[right, 1169, 270, 0xe0be58],
					[right, 1180, 427, 0xe7d6b2],
					// [right, 1103, 556, 0xb1937b],
					[right, 1105, 611, 0xe1d8c0],
					// [right, 1088, 620, 0xf48a37],
					[right, 1153, 79, 0x533b23],
					[right, 1192, 328, 0xfef2c2]
				]
			],
		]
	},
	'悬赏_金币协作': {
		region: [left, 1280, 720, 100, 75, 1188, 636],
		desc: [
			[
				1280, 720,
				[
					[center, 370, 522, 0xa6917d],
					[left, 148, 374, 0xbc2925],
					[left, 167, 394, 0xb4302b],
					[left, 227, 541, 0xf9f2df],
					[left, 233, 550, 0xf7f3df],
					[left, 257, 522, 0xf9e8cb],
					[left, 247, 525, 0xf3dbbd],
					[left, 308, 544, 0xe3c873],
					[center, 340, 541, 0xedd7b1],
				]
			]
		]
	},
	'悬赏_体力协作': {
		region: [left, 1280, 720, 100, 75, 1188, 636],
		desc: [
			[
				1280, 720,
				[
					[center, 370, 522, 0xa6917d],
					[left, 148, 374, 0xbc2925],
					[left, 167, 394, 0xb4302b],
					[left, 227, 541, 0xf9f2df],
					[left, 233, 550, 0xf7f3df],
					[left, 257, 522, 0xf9e8cb],
					[left, 247, 525, 0xf3dbbd],
					[left, 311, 553, 0x0b0c0a],
					[center, 328, 543, 0xff9932],
				]
			]
		]
	},
	'悬赏_狗粮协作': {
		region: [left, 1280, 720, 100, 75, 1188, 636],
		desc: [
			[
				1280, 720,
				[
					[center, 370, 522, 0xa6917d],
					[left, 148, 374, 0xbc2925],
					[left, 167, 394, 0xb4302b],
					[left, 308, 544, 0xe3c873],
					[center, 340, 541, 0xedd7b1],
					[left, 218, 580, 0xf29530],
					[left, 229, 580, 0xf29831],
					[left, 240, 580, 0xf29b33],
				]
			]
		]
	},
	'悬赏_勾玉协作': {
		region: [left, 1280, 720, 100, 75, 1188, 636],
		desc: [
			[
				1280, 720,
				[
					[center, 370, 522, 0xa6917d],
					[left, 145, 374, 0xbc2925],
					[left, 166, 391, 0xb52e2a],
					[left, 233, 550, 0xf7f3df],
					[left, 227, 541, 0xfef5e1],
					[center, 321, 553, 0xc8a98b],
					[center, 338, 548, 0xe9361d],
				]
			]
		]
	},
	'探索界面_检测左边是否有追踪任务的悬浮列表': {
		region: [left, 1280, 720, 0, 95, 154, 284],
		desc: [
			// 适配“拓”
			[1280, 720,
				[
					[left, 7, 132, 0x4a3931],
					[left, 49, 132, 0x43322a],
					[left, 89, 132, 0x43322a],
					[left, 111, 132, 0x6475db],
					[left, 123, 132, 0xcdcdd1]
				]
			],
			// 适配“宠”
			[1280, 720,
				[
					[left, 4, 132, 0x47362e],
					[left, 37, 132, 0x44332b],
					[left, 80, 132, 0x43322a],
					[left, 112, 132, 0xbc8080],
					[left, 124, 132, 0xeacebd]
				]
			],
			[1280, 720,
				[
					[left, 135, 133, 0x7c581e],
					[left, 80, 132, 0x45302b],
					[left, 8, 132, 0x4a352f],
					[left, 42, 132, 0x45312b]
				]
			],
			[1280, 720,
				[
					[left, 6, 130, 0x48342e],
					[left, 41, 132, 0x45312b],
					[left, 138, 130, 0x896520],
					[left, 132, 132, 0x8a6424],
					[left, 105, 130, 0x48342e]
				]
			],
			// 旧
			[1280, 720,
				[
					[left, 135, 133, 0x7c5b22],
					[left, 80, 132, 0x43322a],
					[left, 8, 132, 0x48372f],
					[left, 42, 132, 0x44332b]
				]
			],
			[1280, 720,
				[
					[left, 138, 133, 0x88671e],
					[left, 110, 133, 0x45342c],
					[left, 59, 131, 0x47362e],
					[left, 13, 132, 0x493430]
				]
			]

		]
	},
	'地鬼_探索界面检测地鬼入口': {
		region: [left, 1280, 720, 407, 594, 1040, 713],
		desc: [
			[1280, 720,
				[
					[center, 835, 641, 0x1f171f],
					[center, 859, 638, 0xb72e20],
					[center, 870, 632, 0xfffff9],
					[center, 880, 645, 0xc24e35],
					[center, 878, 663, 0xd45037],
					[center, 870, 670, 0xcd4431],
					[center, 852, 682, 0x839db6],
					[center, 837, 679, 0xddeeff]
				]
			],
			[1280, 720,
				[
					[center, 848, 627, 0x785f4f],
					[center, 867, 626, 0xfa8462],
					[center, 882, 634, 0xb43325],
					[center, 881, 673, 0x714a5f],
					[center, 859, 674, 0x8e2828],
					[center, 843, 661, 0xb9463a],
					[center, 854, 654, 0x9f5018]
				]
			]
		]
	},
	'悬赏_庭院检测悬赏图标': {
		region: [left, 1280, 720, 0, 88, 1280, 520],
		desc: [
			[1280, 720, // 封
				[
					[left, 263, 263, 0xd5bd92],
					[left, 261, 280, 0xffe9bd],
					[left, 277, 271, 0x444441],
					[left, 255, 283, 0xba4545],
					[left, 281, 287, 0xbb4840],
					[left, 256, 301, 0x534c53],
					[left, 276, 302, 0x6a5f54],
					[left, 271, 292, 0x43302f]
				]
			],
			[1280, 720, // 封
				[
					[left, 262, 262, 0xd6be93],
					[left, 284, 268, 0xd94e40],
					[left, 263, 277, 0xffe9c8],
					[left, 283, 280, 0x893926],
					[left, 256, 286, 0x8f604e],
					[left, 261, 296, 0xc1a56b],
					[left, 272, 302, 0x52494e]
				]
			],
			[1280, 720, // 封
				[
					[left, 261, 264, 0xd5b58b],
					[left, 269, 264, 0xab9786],
					[left, 284, 269, 0xda4e40],
					[left, 255, 283, 0xba4545],
					[left, 265, 282, 0xd4b89d],
					[left, 281, 284, 0x8f2c26],
					[left, 268, 293, 0x453d49],
					[left, 265, 302, 0x6e6264],
					[left, 276, 305, 0xa5302e]
				]
			],
			[1280, 720, // 封
				[
					[left, 247, 345, 0xf0e4b3],
					[left, 246, 351, 0xead3a0],
					[left, 258, 355, 0xefda9c],
					[left, 259, 363, 0xe2d093],
					[left, 278, 339, 0xffeec9],
					[left, 273, 342, 0xfcefba],
					[left, 265, 348, 0xe8d4ab],
					[left, 263, 354, 0xf4deb2]
				]
			],
			[1280, 720, // 封
				[
					[center, 249, 346, 0xffe9c7],
					[center, 262, 348, 0xfee8bd],
					[center, 253, 372, 0xb39c77],
					[center, 264, 373, 0xa52e2c],
					[center, 274, 341, 0xd4d4d4],
				]
			],
			// 旧
			[1280, 720, // 封
				[
					[left, 222, 268, 0x352554],
					[left, 236, 268, 0x555567],
					[left, 247, 273, 0x793a34],
					[left, 224, 284, 0xe2caae],
					[left, 242, 281, 0xfdddbc],
					[left, 224, 289, 0xc8a976],
					[left, 241, 287, 0xf7d6a3],
					[left, 232, 303, 0xbca37a]
				]
			],
			[1280, 720, // 封
				[
					[left, 226, 268, 0x706362],
					[left, 237, 268, 0x55556a],
					[left, 248, 278, 0xb03939],
					[left, 221, 284, 0xb7685c],
					[left, 237, 285, 0x572413],
					[left, 221, 300, 0x6c5b5a],
					[left, 244, 300, 0x922c2c]
				]
			],
			[1280, 720, // 封
				[
					[center, 451, 329, 0xd0ae7e],
					[center, 473, 334, 0xc73f3f],
					[center, 446, 346, 0x80453e],
					[center, 463, 345, 0xf0e1bc],
					[center, 459, 354, 0xe6c29d],
					[center, 445, 364, 0x776649],
					[center, 464, 369, 0x883d3d]
				]
			],
			[1280, 720, // √
				[
					[left, 261, 107, 0x56566f],
					[left, 252, 116, 0xfff7c4],
					[left, 274, 111, 0xbb4433],
					[left, 263, 124, 0x622f1e],
					[left, 252, 137, 0x333344],
					[left, 269, 136, 0x942f2e],
					[left, 272, 125, 0xad4a42],
					[left, 260, 113, 0x914b49]
				]
			],
			[1280, 720, // √
				[
					[left, 259, 274, 0xfde5b3],
					[left, 264, 280, 0xe1c88e],
					[left, 268, 284, 0xddc588],
					[left, 270, 287, 0xecdb9e],
					[left, 274, 279, 0xead9a6],
					[left, 279, 275, 0xeddda9],
					[left, 282, 271, 0xf7e6c4]
				]
			],
		]
	},
	'金币妖怪_金币妖怪字样': {
		region: [left, 1280, 720, 128, 103, 371, 682],
		desc: [
			[1280, 720,
				[
					[left, 196, 562, 0xe8d6c1],
					[left, 206, 563, 0x292622],
					[left, 194, 576, 0x2b2723],
					[left, 218, 573, 0x272420],
					[left, 198, 587, 0x3a3530],
					[left, 215, 585, 0x423d37],
					[left, 242, 562, 0x2c2924],
					[left, 232, 566, 0x38332e],
					[left, 231, 581, 0x312e29],
					[left, 238, 588, 0x423d36],
					[left, 246, 581, 0x3a3630]
				]
			], [1280, 720,
				[
					[left, 186, 556, 0xe8d6c1],
					[left, 205, 563, 0x3d3832],
					[left, 194, 576, 0x2b2723],
					[left, 207, 569, 0xe8d6c1],
					[left, 217, 573, 0x282521],
					[left, 206, 576, 0x2b2824],
					[left, 198, 586, 0x857b6f],
					[left, 215, 585, 0x423d37],
					[left, 239, 564, 0x292622],
					[left, 231, 580, 0x282521],
					[left, 236, 577, 0xd3c2af],
					[left, 244, 576, 0xd2c2af],
					[left, 238, 587, 0x2a2723]
				]
			], [1280, 720,
				[
					[left, 194, 564, 0xe8d6c1],
					[left, 203, 566, 0x48433c],
					[left, 194, 575, 0x524c44],
					[left, 214, 570, 0x675f56],
					[left, 204, 579, 0xa29586],
					[left, 201, 586, 0x6b6359],
					[left, 216, 586, 0x504a42],
					[left, 230, 573, 0x38342e],
					[left, 246, 571, 0x282521],
					[left, 238, 589, 0x8b8073],
					[left, 245, 580, 0x2e2b26],
					[left, 240, 562, 0x908578]
				]
			],
			// 旧
			[1280, 720,
				[
					[left, 151, 161, 0x79502f],
					[left, 359, 210, 0x79502f],
					[left, 206, 177, 0x282521],
					[left, 194, 190, 0x2b2824],
					[left, 238, 201, 0x2a2723],
					[left, 282, 199, 0x2a2622],
					[left, 259, 199, 0x3b3731],
					[left, 293, 201, 0x312d28],
					[left, 313, 189, 0x37332e]
				]
			],
			[1280, 720,
				[
					[left, 148, 159, 0x755331],
					[left, 362, 213, 0x735230],
					[left, 206, 177, 0x282521],
					[left, 206, 200, 0x332f2a],
					[left, 242, 176, 0x2d2925],
					[left, 239, 203, 0x59534b],
					[left, 230, 185, 0x7b7267]
				]
			]
		]
	},
	'金币妖怪_判断队伍是否有人': {
		region: [left, 1280, 720, 347, 232, 465, 338],
		desc: [
			[1280, 720,
				[
					[center, 421, 273, 0xfffffc],
					[center, 419, 314, 0xfffff8],
					[center, 399, 293, 0xffffff],
					[center, 442, 295, 0xfffff1],
					[center, 421, 295, 0xffffff]
				]
			]
		]
	},
	'金币妖怪_判断挑战次数是否用完': {
		region: [left, 1280, 720, 0, 0, 1280, 720],
		desc: [
			[1280, 720,
				[
					[left, 150, 361, 0x241407],
					[left, 150, 368, 0x251408],
					[left, 258, 362, 0x844e32],
					[left, 230, 365, 0x683321],
					[left, 252, 371, 0x743d26],
					[left, 359, 362, 0x96521f],
					[left, 361, 413, 0x965423],
					[left, 152, 413, 0xa05f27]
				]
			],
			[1280, 720,
				[
					[left, 150, 360, 0x241407],
					[left, 149, 370, 0x27170a],
					[left, 249, 361, 0x6d3924],
					[left, 249, 368, 0x6e3723],
					[left, 149, 366, 0x241408],
					[left, 358, 366, 0x96521f],
					[left, 149, 411, 0x995522],
					[left, 358, 413, 0x96521f]
				]
			]
		]
	},
	'开启的BUFF': {
		region: [center, 1280, 720, 744, 116, 919, 530],
		desc: [
			[1280, 720,
				[
					[center, 775, 143, 0xdb9009],
					[center, 776, 159, 0xe08500],
					[center, 854, 143, 0xf5c206],
					[center, 854, 160, 0xeebb05],
				]
			],
			[1280, 720,
				[
					[center, 775, 415, 0xe08300],
					[center, 777, 432, 0xe08602],
					[center, 851, 415, 0xebb700],
					[center, 851, 432, 0xe9b701]
				]
			],
			[1280, 720,
				[
					[center, 775, 482, 0xe08300],
					[center, 853, 484, 0xF1BC06],
					[center, 849, 485, 0xebb600],
					[center, 776, 485, 0xe38600],
				]
			],
			// 不到一个小时的buff
			[1280, 720,
				[
					[center, 775, 280, 0xe38500],
					[center, 776, 297, 0xe08602],
					[center, 855, 298, 0x2e3743],
					[center, 854, 279, 0x28313e],
				]
			]
		]
	},
	'关闭的BUFF_觉醒': {
		region: [center, 1280, 720, 744, 116, 919, 530],
		desc: [
			[1280, 720,
				[
					[center, 775, 145, 0xb00e2c],
					[center, 872, 147, 0x9e9e7c],
					[center, 867, 157, 0x9e9d7d],
					[center, 879, 156, 0x9e9b7d],
					[center, 402, 138, 0xef6b06],
					[center, 380, 162, 0xcfc0b6],
				]
			]
		]
	},
	'关闭的BUFF_御魂': {
		region: [center, 1280, 720, 744, 116, 919, 530],
		desc: [
			[1280, 720,
				[
					[center, 776, 212, 0xb10c2d],
					[center, 874, 213, 0x9e9b7d],
					[center, 867, 225, 0x9e9d7d],
					[center, 879, 224, 0x9e9b7d],
					[center, 396, 235, 0x0cd2e3],
					[center, 401, 206, 0x01c8dc],
					[center, 407, 202, 0xd3c7be],
				]
			]
		]
	},
	'关闭的BUFF_金币': {
		region: [center, 1280, 720, 744, 116, 919, 530],
		desc: [
			[1280, 720,
				[
					[center, 775, 348, 0xb00e2c],
					[center, 873, 350, 0x9f9f7d],
					[center, 867, 359, 0x9e9e7d],
					[center, 879, 359, 0x9e9b7d],
					[center, 390, 362, 0xd2c2b7],
					[center, 385, 374, 0xd49240],
					[center, 412, 368, 0xf7e526],
				]
			]
		]
	},
	'关闭的BUFF_经验': {
		region: [center, 1280, 720, 744, 116, 919, 530],
		desc: [
			[1280, 720,
				[
					[center, 776, 415, 0xb10c2d],
					[center, 872, 418, 0x9e9e7c],
					[center, 868, 427, 0x9f9f7d],
					[center, 879, 427, 0x9e9b7d],
					[center, 396, 440, 0x9eb7df],
					[center, 411, 435, 0xf7e72b],
				]
			],
			[1280, 720,
				[
					[center, 775, 483, 0xb00e2c],
					[center, 872, 485, 0x9e9e7c],
					[center, 867, 495, 0xaba08d],
					[center, 879, 494, 0xaca28e],
					[center, 412, 484, 0x94b9e3],
					[center, 411, 499, 0xc4b482],
				]
			]
		]
	},
	'宴会_食物': {
		region: [left, 1280, 720, 0, 312, 1280, 522],
		desc: [
			[1280, 720,
				[
					[left, 202, 402, 0x4d555d],
					[left, 213, 416, 0xdad2c2],
					[left, 212, 424, 0xdfc7b6],
					[left, 209, 434, 0x7b2121],
					[left, 199, 442, 0x67482a],
					[left, 184, 438, 0x62472c],
					[left, 181, 423, 0x4c3b24],
					[left, 183, 412, 0xd7c98f],
					[left, 192, 418, 0x966e3b]
				]
			],
			[1280, 720,
				[
					[center, 641, 422, 0xb5735e],
					[center, 649, 416, 0xd63d3d],
					[center, 655, 416, 0xa6bcbc],
					[center, 667, 415, 0xb5243f],
					[center, 675, 426, 0x2e181c],
					[center, 674, 434, 0xd0a17f],
					[center, 671, 444, 0xd8b196],
					[center, 659, 449, 0xfafaf7],
					[center, 649, 443, 0xbd2a3e]
				]
			],
			[1280, 720,
				[
					[right, 1052, 419, 0xf69033],
					[right, 1078, 417, 0xfae9d8],
					[right, 1079, 434, 0xc13b3b],
					[right, 1064, 442, 0xcdc09c],
					[right, 1054, 431, 0xf0cf36],
					[right, 1045, 435, 0xafafad],
					[right, 1058, 420, 0x9d6b37]
				]
			]
		]
	},
	'宴会_爆竹': {
		region: [left, 1280, 720, 1000, 621, 1115, 712],
		desc: [
			[1280, 720,
				[
					[right, 1049, 640, 0xc0af9e],
					[right, 1057, 644, 0x30271f],
					[right, 1041, 650, 0x844239],
					[right, 1040, 662, 0xa84545],
					[right, 1042, 676, 0xa84141],
					[right, 1057, 650, 0x9b8a75],
					[right, 1053, 657, 0xc35d5d],
					[right, 1057, 687, 0x282828],
					[right, 1073, 666, 0x762425],
					[right, 1054, 640, 0x857463],
					[right, 1053, 638, 0x53493e],
					[right, 1052, 640, 0xb09f8e]
				]
			]
		]
	},
	'宴会_爆竹经验': {
		region: [left, 1280, 720, 3, 127, 1269, 521],
		desc: [
			[1280, 720,
				[
					[center, 481, 348, 0xbedbef],
					[center, 481, 353, 0x216598],
					[center, 481, 364, 0xa5c8f3],
					[center, 480, 372, 0x5880c2],
					[center, 480, 378, 0x7a9fd4],
					[center, 482, 382, 0x91b0de]
				]
			],
			[1280, 720,
				[
					[center, 485, 353, 0x488ad4],
					[center, 478, 353, 0x2c76a8],
					[center, 475, 365, 0x98bae3],
					[center, 488, 364, 0x9fbee3],
					[center, 474, 378, 0xa1b8e3],
					[center, 489, 378, 0xa4bfe1]
				]
			]
		]
	},
	'宴会_式神满级': {
		region: [left, 1280, 720, 4, 210, 1249, 504],
		desc: [
			[1280, 720,
				[
					[center, 665, 357, 0xcb9821],
					[center, 663, 361, 0xf1b021],
					[center, 662, 370, 0xecca53],
					[center, 670, 356, 0xfbb821],
					[center, 675, 354, 0xcc911c],
					[center, 670, 351, 0x3e1c1c],
					[center, 670, 373, 0x2c1b0d],
					[center, 671, 362, 0xf5c23a]
				]
			],
			[1280, 720,
				[
					[center, 551, 352, 0xb78415],
					[center, 560, 355, 0x7e4f11],
					[center, 552, 346, 0x3e1c1c],
					[center, 553, 342, 0xe7cd9c],
					[center, 553, 373, 0xedbb99],
					[center, 552, 367, 0x2b160b],
					[center, 559, 364, 0xe3c139]
				]
			]
		]
	},
	'绿标': {
		region: [center, 1280, 720, 33, 58, 1243, 597],
		desc: [
			[1280, 720,
				[
					[center, 812, 281, 0x14964e],
					[center, 810, 289, 0x2db560],
					[center, 816, 288, 0x41d57a],
				]
			],
			[1280, 720,
				[
					[center, 662, 338, 0x1ed995],
					[center, 663, 339, 0x22dd99],
					[center, 665, 334, 0x028654],
				]
			],
			[1280, 720,
				[
					[center, 959, 258, 0x2eb661],
					[center, 957, 255, 0x2db560],
					[center, 960, 261, 0x34bc67],
				]
			],
			[1280, 720,
				[
					[center, 909, 207, 0x3bce73],
					[center, 907, 210, 0x4dda7f],
					[center, 905, 214, 0x5be386],
				]
			],
			[1280, 720,
				[
					[left, 217, 342, 0x36b866],
					[left, 220, 342, 0x71ec9b],
					[left, 219, 346, 0x6ddb92],
				]
			]
		]
	},
	'狩猎_酒瓶': {
		region: [right, 1280, 720, 525, 334, 798, 515],
		desc: [
			[
				1280, 720,
				[
					[center, 641, 455, 0x10100c],
					[center, 641, 436, 0x654028],
					[center, 645, 409, 0x10100c],
					[center, 672, 417, 0x16160e],
					[center, 673, 447, 0x613d27],
					[center, 656, 425, 0xeeeae6],
				]
			]
		]
	},
	'逢魔_捡垃圾': {
		region: [left, 1280, 720, 159, 207, 1267, 584],
		desc: [
			[
				1280, 720,
				[
					[center, 627, 376, 0xb24620],
					[center, 633, 362, 0xab4220],
					[center, 618, 370, 0xfff5d3],
					[center, 637, 382, 0xfff4d2],
				]
			],
			[
				1280, 720,
				[
					[center, 488, 338, 0xb34620],
					[center, 493, 324, 0xa94120],
					[center, 501, 332, 0xfff4d4],
					[center, 500, 344, 0xfff4d2],
				]
			],
			[
				1280, 720,
				[
					[right, 1010, 347, 0xb14520],
					[right, 1013, 333, 0xa94120],
					[right, 1021, 341, 0xfff4d4],
					[right, 1019, 352, 0xfff5d3],
				]
			],
			[
				1280, 720,
				[
					[center, 871, 325, 0xb1461f],
					[center, 877, 313, 0xb0481d],
					[center, 883, 319, 0xfff4d4],
					[center, 882, 332, 0xfff4d2],
				]
			]
		]
	},
	'式神录_当前选中队伍预设': {
		region: [center, 1280, 720, 522, 146, 1024, 622],
		desc: [
			[
				1280, 720,
				[
					[center, 990, 163, 0xf7d9a0],
					[center, 589, 155, 0xe3dbd3],
					[center, 688, 155, 0xe3dbd3],
					[center, 834, 155, 0xe3dbd3],
					[center, 854, 155, 0xe3bb70],
					[center, 908, 155, 0xe3ba70],
					[center, 960, 155, 0xe3ba70],
				]
			]
		]
	},
	'红包_夜樱御祝': {
		region: [left, 1280, 720, 105, 86, 610, 620],
		desc: [
			[
				1280, 720,
				[
					[center, 341, 482, 0xf3dfcb],
					[center, 598, 435, 0xf2e1cd],
					[center, 597, 532, 0xeeddcc],
					[center, 388, 483, 0xf3dfcb],
					[center, 302, 454, 0xf7a1a6],
					[center, 261, 427, 0xf79fab],
					[center, 275, 484, 0xf1e9d8],
					[center, 215, 476, 0xefa338],
				]
			],

		]
	},
	'红包_鸢尾御祝': {
		region: [left, 1280, 720, 105, 86, 610, 620],
		desc: [
			[
				1280, 720,
				[
					[center, 341, 482, 0xf3dfcb],
					[center, 597, 351, 0xf1dfcb],
					[center, 597, 450, 0xeeddcc],
					[center, 302, 362, 0xcbb3d4],
					[center, 276, 402, 0xebe0d1],
					[center, 259, 350, 0xf7f2e7],
					[center, 253, 398, 0xeeeeee],
					[center, 224, 432, 0xf3dfcb],
				]
			]
		]
	},
	'红包_皇菊御祝': {
		region: [left, 1280, 720, 105, 86, 610, 620],
		desc: [
			[
				1280, 720,
				[
					[left, 341, 482, 0xf3dfcb],
					[left, 598, 336, 0xf4e2d0],
					[left, 598, 433, 0xeeddcd],
					[left, 583, 421, 0xf3dfcb],
					[left, 273, 410, 0xefe3d7],
					[left, 218, 383, 0xea9a29],
					[left, 222, 416, 0xf3dfcb],
					[left, 254, 351, 0xbb3344],
					[left, 273, 404, 0xefe3d7],
					[left, 293, 391, 0xaa2233],
				]
			]
		]
	},
	'狭间暗域_怪物分布奖励': {
		region: [left, 1280, 720, 96, 90, 223, 643],
		desc: [
			[
				1280, 720,
				[
					[left, 163, 326, 0xff412f],
					[left, 152, 328, 0xff3c31],
					[left, 143, 445, 0xffffff],
					[left, 182, 444, 0xffffff],
					[left, 162, 440, 0xffffff],
				]
			],
			[
				1280, 720,
				[
					[left, 172, 594, 0xff4031],
					[left, 158, 595, 0xff3c31],
					[left, 174, 594, 0xff3d2f],
					[left, 166, 573, 0xffffff],
				]
			]
		]
	},
	'阴阳寮_奖励体力': {
		region: [left, 1280, 720, 219, 301, 592, 407],
		desc: [
			[
				1280, 720,
				[
					[center, 568, 336, 0x0c0e0c],
					[center, 583, 341, 0x191f15],
					[center, 573, 313, 0xe77b2a],
				]
			]
		]
	},
	'阴阳寮_奖励金币': {
		region: [left, 1280, 720, 219, 301, 592, 407],
		desc: [
			[
				1280, 720,
				[
					[center, 565, 339, 0xe96561],
					[center, 563, 321, 0xbf3a36],
					[center, 585, 320, 0xb72a32],
					[center, 586, 334, 0xce433f],
					[center, 573, 335, 0xd6a750],
				]
			],
			[
				1280, 720,
				[
					[center, 331, 346, 0xf87b72],
					[center, 341, 331, 0xca3837],
					[center, 338, 319, 0xb72a32],
					[center, 319, 320, 0xbd3c37],
					[center, 315, 334, 0xde5954],
					[center, 326, 339, 0xf5c268],
					[center, 329, 333, 0xdaaf58],
				]
			]
		]
	},
	'御魂挑战_喂猫喂狗': {
		region: [left, 1280, 720, 153, 96, 377, 511],
		desc: [
			[
				1280, 720,
				[
					[left, 212, 178, 0xffffff],
					[left, 216, 202, 0xffd64e],
					[left, 228, 200, 0xfdcd49],
					[left, 242, 180, 0xffffff],
					[left, 230, 212, 0xffffff],
				]
			]
		]
	},
	'宴会_举高高': {
		region: [left, 1280, 720, 127, 155, 1171, 569],
		desc: [
			[
				1280, 720,
				[
					[center, 653, 212, 0xfffeed],
					[center, 665, 200, 0x484f60],
					[center, 672, 186, 0x485061],
					[center, 636, 205, 0x474f5e],
					[center, 619, 214, 0x363647],
					[center, 614, 197, 0x37384b],
					[center, 632, 247, 0x688baf],
				]
			]
		]
	},
	'勾协判定': {
		region: [center, 1280, 720, 648, 456, 720, 528],
		similar: 98,
		desc: [
			[1280, 720,
				[
					[center, 696, 488, 0xef4c34],
					[center, 699, 489, 0xf5502b],
					[center, 699, 493, 0xe92c12],
					[center, 696, 493, 0xe9331a]
				]
			]
		]
	},
	'突破失败': {
		region: [center, 1280, 720, 380, 140, 1230, 485],
		similar: 95,
		desc: [
			[1280, 720,
				[
					[center, 445, 314, 0xDAAD61],
					[center, 443, 286, 0x2a0905],
					[center, 461, 305, 0x390b06],
					[center, 446, 308, 0xedcd7f],
					[center, 459, 322, 0xd5a74c]
				]
			],
			[1280, 720,
				[
					[right, 1091, 287, 0xc89541],
					[right, 1104, 284, 0x260703],
					[right, 1125, 308, 0x3d0c07],
					[right, 1116, 313, 0xdfba5f],
					[right, 1126, 323, 0xd2a047]
				]
			]
		]
	},
	'活动说明的感叹号': {
		region: [center, 1280, 720, 100, 0, 350, 100],
		desc: [
			[1280, 720,
				[
					[left, 250, 40, 0x593716],
					[left, 265, 40, 0x583716],
					[left, 258, 32, 0xe7c55b],
					[left, 258, 49, 0xd99e36],
					[left, 257, 56, 0x876238],
					[left, 257, 25, 0x8f6b4b]
				]
			]
		]
	},
	'寄养狗粮_满级标识': {
		region: [left, 1280, 720, 38, 226, 1251, 289],
		desc: [
			[
				1280, 720,
				[
					[left, 68, 256, 0xe4b52f],
					[left, 140, 258, 0x4d2d1e],
					[left, 109, 205, 0x4e4e4e],
					[left, 114, 461, 0x454545],
					[left, 114, 450, 0xf8c67f],
					[left, 69, 391, 0x6f6054],
					[left, 163, 390, 0x6f6054],
				]
			],
		]
	},
	'寄养狗粮_空': {
		region: [left, 1280, 720, 19, 183, 1269, 481],
		desc: [
			[
				1280, 720,
				[
					[center, 756, 203, 0x525252],
					[center, 756, 227, 0xd9bc99],
					[center, 778, 303, 0xc6c0ae],
					[center, 751, 290, 0x262420],
					[center, 760, 443, 0xdcbc96],
				]
			],
			[
				1280, 720,
				[
					[center, 544, 203, 0x515151],
					[center, 546, 228, 0xd8bc9b],
					[center, 536, 290, 0x262420],
					[center, 543, 414, 0xc9c0ac],
					[center, 544, 445, 0xd5b48d],
				]
			]
		]
	},
	'体力图标': {
		region: [center, 1280, 720, 582, 2, 1269, 64],
		desc: [
			[
				1280, 720,
				[
					[center, 869, 23, 0xe86f2a],
					[center, 882, 23, 0xf47430],
					[center, 875, 36, 0xd34a22],
					[center, 888, 36, 0xfd6528],
					[center, 867, 37, 0x070906],
					[center, 882, 48, 0x1c2217],
				]
			],
			[
				1280, 720,
				[
					[right, 1068, 27, 0xf08134],
					[right, 1064, 32, 0xe26629],
					[right, 1084, 34, 0xf77a2e],
					[right, 1066, 46, 0x0e100b],
					[right, 1081, 54, 0x161a11],
				]
			],
		]
	},
	'契灵_火灵': {
		region: [center, 1280, 720, 40, 444, 1138, 611],
		desc: [[
			1280, 720,
			[
				[right, 1047, 502, 0xfbfbec],
				[right, 1053, 502, 0xa0c8bc],
				[right, 1059, 504, 0xfbfbec],
				[right, 1044, 510, 0xa0c8bc],
				[right, 1053, 512, 0xa0c8bc],
				[right, 1058, 511, 0xa0c8bc],
			]
		]]
	},
	'契灵_小黑': {
		region: [center, 1280, 720, 40, 444, 1138, 611],
		desc: [[
			1280, 720,
			[
				[center, 424, 499, 0xfd8131],
				[center, 430, 498, 0x9f2902],
				[center, 437, 500, 0xfd8131],
				[center, 422, 508, 0x9f2902],
				[center, 428, 508, 0x9f2902],
				[center, 436, 509, 0x9f2902],
			]
		]]
	},
	'契灵_镇墓兽': {
		region: [center, 1280, 720, 40, 444, 1138, 611],
		desc: [[
			1280, 720,
			[
				[left, 247, 544, 0xfbfbec],
				[left, 253, 545, 0xc9ab49],
				[left, 259, 544, 0xfbfbec],
				[left, 242, 552, 0xc9ab49],
				[left, 252, 553, 0xc9ab49],
				[left, 262, 554, 0xc8af4f],
			]
		]]
	},
	'契灵_茨球': {
		region: [center, 1280, 720, 40, 444, 1138, 611],
		desc: [[1280, 720,
			[
				[center, 713, 520, 0xffffff],
				[center, 718, 520, 0xf1e7c8],
				[center, 724, 521, 0xffffff],
				[center, 709, 528, 0xf1e7c8],
				[center, 718, 528, 0xf1e7c8],
				[center, 723, 529, 0xf1e7c8],
			]
		]]
	},
	'右下角锁定阵容': {
		region: [center, 1280, 720, 734, 530, 1279, 719],
		desc: [
			[1280, 720,
				[
					[right, 1068, 27, 0xf08134],
					[right, 1064, 32, 0xe26629],
					[right, 1084, 34, 0xf77a2e],
					[right, 1066, 46, 0x0e100b],
					[right, 1081, 54, 0x161a11],
				]
			]
		],
	},
	'六道椒图_升级buff': {
		region: [center, 1280, 720, 160, 149, 827, 200],
		desc: [
			[
				1280, 720,
				[
					[center, 479, 166, 0xffe4af],
					[center, 483, 166, 0xffe8b8],
					[center, 483, 169, 0xffe1a2],
					[center, 481, 170, 0xffdd94],
				]
			], [
				1280, 720,
				[
					[center, 207, 166, 0xffebc1],
					[center, 208, 168, 0xffe4a6],
					[center, 208, 170, 0xffdf9b],
					[center, 210, 166, 0xf4e6b2],
				]
			]
		],
	},
	'六道椒图_购买buff': {
		region: [center, 1280, 720, 0, 0, 1279, 719],
		desc: [
			[
				1280, 720,
				[
					[right, 1071, 153, 0x2bdaf1],
					[right, 1074, 157, 0x2ee3e4],
					[right, 1069, 165, 0xa25287],
					[right, 1056, 164, 0xa55284],
					[right, 1060, 138, 0xffffff],
				]
			]
		],
	},
	'六道椒图_事件': {
		region: [left, 1280, 720, 79, 86, 1020, 631],
		desc: [
			[ // 神秘
				1280, 720,
				[
					[center, 643, 408, 0xf2e4c9],
					[center, 643, 409, 0xf0e2c7],
					[center, 643, 410, 0xeadcc2],
					[center, 643, 411, 0xe9dcc1],
				]
			],
			[ // 混沌
				1280, 720,
				[
					[center, 724, 427, 0xf2e4c9],
					[center, 725, 427, 0xf2e4c9],
					[center, 725, 428, 0xf2e4c9],
					[center, 724, 428, 0xf1e3c8],
				]
			],
			[ // 鏖战
				1280, 720,
				[
					[center, 915, 482, 0xf4e9d3],
					[center, 916, 482, 0xf4e9d3],
					[center, 916, 481, 0xf3e8d2],
					[center, 915, 481, 0xf4e9d3],
				]
			],
		]
	},
	'返回图标': {
		region: [left, 1280, 720, 0, 0, 253, 145],
		desc: [[ // 准备界面、站斗界面的左上角返回图标
			1280, 720,
			[
				[center, 28, 23, 0xd9b48c],
				[center, 33, 40, 0xcea478],
				[center, 46, 31, 0xd8b289],
				[center, 60, 33, 0x825e41],
				[center, 11, 31, 0x896343],
				[center, 36, 7, 0x4c3432],
			]
		], [ // 对弈竞猜界面左上角的返回图标
			1280, 720,
			[
				[center, 38, 24, 0x8e6036],
				[center, 40, 53, 0x8a5d33],
				[center, 46, 39, 0xf6e7a8],
				[center, 71, 39, 0x855a31],
				[center, 59, 63, 0xd8be8d],
			]
		], [ // 商店主界面的左上角返回图标
			1280, 720,
			[
				[center, 35, 38, 0x2d156a],
				[center, 35, 58, 0xf0f5fb],
				[center, 35, 83, 0x21162b],
				[center, 61, 83, 0x201c47],
				[center, 57, 72, 0xdeeaf8],
				[center, 56, 41, 0xd5e4f5],
				[center, 74, 43, 0x1a2662],
			]
		], [ // 道馆突破主界面的左上角返回图标
			1280, 720,
			[
				[center, 25, 21, 0xd6c4a1],
				[center, 48, 29, 0xd6c4a1],
				[center, 43, 20, 0xd6c4a1],
				[center, 35, 45, 0xd6c4a1],
				[center, 27, 39, 0xd6c4a0],
				[center, 27, 51, 0x2b1f12],
				[center, 51, 47, 0x2c2013],
				[center, 40, 9, 0x291a10],
			]
		]]
	},
	'右边侧栏下一页图标': {
		region: [center, 1280, 720, 1150, 145, 1261, 513],
		desc: [[
			1280, 720,
			[
				[right, 1204, 479, 0xfde894],
				[right, 1204, 483, 0xfde995],
				[right, 1213, 486, 0xffe995],
				[right, 1217, 471, 0xffea95],
				[right, 1215, 467, 0xffe694],
				[right, 1203, 464, 0xffec97],
			]
		]]

	},
	'对弈竞猜': {
		region: [center, 1280, 720, 1169, 143, 1253, 456],
		desc: [[
			1280, 720,
			[
				[right, 1204, 263, 0x69121b],
				[right, 1210, 256, 0xa5d42a],
				[right, 1196, 252, 0xfefeff],
				[right, 1218, 252, 0xffffff],
				[right, 1208, 278, 0xd8e3ba],
				[right, 1206, 241, 0xe09d1f],
			]
		], [
			1280, 720,
			[
				[right, 1201, 415, 0x72151c],
				[right, 1219, 403, 0xffffff],
				[right, 1193, 397, 0xe3a129],
				[right, 1212, 423, 0xd34053],
				[right, 1222, 431, 0xd2cdc8],
				[right, 1187, 413, 0x6cb623],
			]
		], [
			1280, 720,
			[
				[right, 1201, 415, 0x75151f],
				[right, 1219, 403, 0xe4e4e4],
				[right, 1193, 397, 0xe3a129],
				[right, 1212, 423, 0xcd414e],
				[right, 1222, 431, 0xa4a19d],
				[right, 1187, 413, 0x9bc467],
			]
		], [
			1280, 720,
			[
				[center, 1195, 325, 0xf3f3f3],
				[right, 1217, 325, 0xffffff],
				[right, 1221, 335, 0xdc698c],
				[right, 1250, 310, 0xd8d8c4],
				[right, 1242, 315, 0xd2d0bd],
				[right, 1209, 308, 0x110e0c],
				[right, 1184, 315, 0xdbd4c6],
				[right, 1185, 336, 0x67b61e],
			]
		]]
	},
	'经营_箱子': { // 领箱子
		region: [center, 1280, 720, 107, 81, 1210, 444],
		desc: [[
			1280, 720,
			[
				[center, 607, 341, 0xe1a928],
				[center, 600, 337, 0xa82518],
				[center, 616, 337, 0xb73619],
				[center, 625, 337, 0x4d0305],
				[center, 609, 341, 0xf3c436],
			]
		]]
	},
	'经营_加号': { // 点+号
		region: [center, 1280, 720, 107, 81, 1210, 444],
		desc: [[
			1280, 720,
			[
				[left, 182, 204, 0xeef7f7],
				[left, 168, 182, 0x485a9f],
				[left, 200, 189, 0x4962a5],
				[left, 167, 204, 0xeef7f7],
				[left, 183, 204, 0xeef7f7],
				[left, 178, 245, 0xd9d1c3],
			]
		]]
	},
	'经营_选取店长': {
		region: [center, 1280, 720, 153, 616, 1150, 719],
		desc: [[
			1280, 720,
			[
				[center, 596, 690, 0xe5ca9f],
				[center, 617, 690, 0x4e5a7f],
				[center, 660, 691, 0x535f81],
				[center, 705, 693, 0x4b526d],
			]
		]]
	},
	'敌方道馆_挑战': {
		region: [center, 1280, 720, 15, 94, 965, 707,],
		desc: [[
			1280, 720,
			[
				[center, 699, 474, 0xf2e19a],
				[center, 748, 521, 0xe7c765],
				[center, 739, 487, 0x413123],
				[center, 712, 512, 0x36291c],
				[center, 723, 499, 0xecd27e],
				[center, 409, 417, 0xca6c41],
				[center, 413, 402, 0xc54c19],
			]]
		]
	},
	'神荒': {
		region: [center, 1280, 720, 0, 0, 1279, 719],
		desc: [[ // 腐血
			1280, 720,
			[
				[center, 719, 203, 0x094084],
				[center, 740, 209, 0x1466ad],
				[center, 735, 215, 0x1374d2],
				[center, 730, 217, 0x1580ea],
				[center, 721, 221, 0x1867b3],
				[center, 726, 226, 0x157ddb],
				[center, 741, 223, 0x49a4ed],
				[center, 735, 219, 0xffffff],
			]
		], [
			1280, 720,
			[// 新取色,腐血
				[center, 603, 125, 0xffffff],
				[center, 615, 126, 0xffffff],
				[center, 616, 133, 0xffffff],
				[center, 602, 136, 0xebf5ff],
				[center, 596, 134, 0xf1ffff],
				[center, 610, 134, 0x013c6f],
				[center, 617, 130, 0x021b3c],
				[center, 600, 129, 0x001f49],
			]
		], [ // 星爆图标_正常取色
			1280, 720,
			[
				[center, 719, 204, 0x000b1f],
				[center, 729, 205, 0x7cb1e0],
				[center, 719, 215, 0x3a90d9],
				[center, 720, 221, 0x1361c0],
				[center, 721, 224, 0x0976ff],
				[center, 731, 225, 0x217cd3],
				[center, 740, 217, 0x296db9],
				[center, 735, 208, 0xfaeee0],
			]
		], [
			1280, 720,
			[// 新取色,星爆图标_正常取色
				[right, 996, 70, 0x000b1f],
				[right, 1005, 71, 0x113a71],
				[right, 996, 81, 0x012b5f],
				[right, 1007, 82, 0xffffff],
				[right, 996, 88, 0x00337a],
				[right, 1005, 89, 0x1d5fb0],
				[right, 996, 94, 0x2f72bc],
				[right, 1012, 88, 0x001f49],
				[right, 1015, 91, 0x002451],
			]
		], [// 星爆图标_下半部分取色
			1280, 720,
			[
				[center, 594, 229, 0x00143d],
				[center, 596, 232, 0x0a529d],
				[center, 599, 234, 0x107aff],
				[center, 606, 234, 0x01408b],
				[center, 610, 234, 0x003373],
				[center, 618, 234, 0x00204e],
				[center, 608, 232, 0xffffff],
				[center, 601, 237, 0x619edf],
			]
		], [
			1280, 720,
			[// 新取色,星爆图标_下半部分取色
				[right, 995, 87, 0x001c4a],
				[right, 1005, 86, 0x4181ce],
				[right, 1009, 87, 0x003473],
				[right, 1018, 88, 0x001e46],
				[right, 1012, 92, 0x002452],
				[right, 1005, 92, 0x004594],
				[right, 997, 94, 0x5990cb],
				[right, 1007, 87, 0xf7ffff],
			]
		]],
		similar: 95,
	},
	'宴会筹备': {
		region: [center, 1280, 720, 239, 158, 1264, 646],
		desc: [[
			1280, 720, // 狸猫
			[
				[left, 286, 290, 0x774f32],
				[left, 289, 311, 0x302116],
				[left, 308, 305, 0xf7dca1],
				[left, 300, 284, 0xbebb3c],
				[left, 308, 317, 0xcf722f],
			]
		], [
			1280, 720, // 饿鬼
			[
				[left, 290, 285, 0xf8dc66],
				[left, 286, 288, 0xf7d748],
				[left, 300, 290, 0x6f6565],
				[left, 306, 320, 0x446693],
				[left, 312, 310, 0x3b547c],
			]
		], [
			1280, 720, // 河童
			[
				[left, 290, 384, 0x5ba29f],
				[left, 306, 380, 0x296e64],
				[left, 319, 384, 0x549292],
				[left, 319, 417, 0x5368df],
				[left, 292, 421, 0x1c1c32],
			]
		]]
	},
	'宴会筹备_狸猫': {
		region: [center, 1280, 720, 1038, 187, 1248, 618],
		desc: [[
			1280, 720,
			[
				[right, 1172, 398, 0xe9b36f],
				[right, 1177, 401, 0xe7a962],
				[right, 1163, 390, 0x764e30],
				[right, 1183, 389, 0xe7b26e],
				[right, 1177, 383, 0xb9b73b],
			]
		]]
	},
	'宴会筹备_饿鬼': {
		region: [center, 1280, 720, 1038, 187, 1248, 618],
		similar: 90,
		desc: [[
			1280, 720,
			[
				[right, 1168, 392, 0xfae695],
				[right, 1166, 398, 0xffe177],
				[right, 1169, 408, 0x3b2e2c],
				[right, 1182, 407, 0xfcfcfc],
				[right, 1180, 418, 0x4d72a3],
			]
		]]
	},
	'宴会筹备_河童': {
		region: [center, 1280, 720, 1038, 187, 1248, 618],
		desc: [[
			1280, 720,
			[
				[right, 1197, 372, 0x5ba3a0],
				[right, 1218, 374, 0x5eafa9],
				[right, 1189, 401, 0x5764bd],
				[right, 1228, 400, 0x73d4d3],
				[right, 1211, 385, 0x8b6d73],
			]
		]]
	},
	'红标_血条': {
		region: [center, 1280, 720, 0, 0, 1279, 719],
		desc: [[
			1280, 720,
			[
				[center, 874, 247, 0xe03635],
				[center, 874, 248, 0xd62e2b],
				[center, 828, 247, 0xb43431],
				[center, 828, 248, 0xca3434],
				[center, 927, 247, 0xc73834],
				[center, 927, 248, 0xec3b38],
			]
		]]
	},
	'斗技ban选_面': {
		region: [center, 1280, 720, 1145, 352, 1246, 447],
		desc: [[
			1280, 720,
			[
				[right, 1183, 377, 0xaf6326],
				[right, 1191, 383, 0xf580aa],
				[right, 1179, 416, 0x00a3d1],
				[right, 1187, 412, 0xfce8d1],
				[right, 1202, 410, 0xfff7ed],
			]
		]]
	},
	'斗技ban选_犬': {
		region: [center, 1280, 720, 1145, 352, 1246, 447],
		desc: [[
			1280, 720,
			[
				[right, 1188, 378, 0xe0a864],
				[right, 1203, 389, 0xba965e],
				[right, 1188, 395, 0xf8f7f0],
				[right, 1185, 410, 0xe9e6e4],
				[right, 1203, 409, 0x627ba3],
			]
		]]
	},
	'斗技ban选_龙': {
		region: [center, 1280, 720, 1145, 352, 1246, 447],
		desc: [[
			1280, 720,
			[
				[right, 1179, 384, 0x3f6671],
				[right, 1187, 394, 0xfdf6f2],
				[right, 1198, 382, 0x344147],
				[right, 1194, 408, 0x609595],
				[right, 1184, 418, 0x5ca8a8],
			]
		]]
	},
	'斗技ban选_辉': {
		region: [center, 1280, 720, 1145, 352, 1246, 447],
		desc: [[
			1280, 720,
			[
				[right, 1185, 379, 0xfcfaf9],
				[right, 1176, 407, 0xffffff],
				[right, 1194, 417, 0xfaebe6],
				[right, 1197, 399, 0xf9ece8],
				[right, 1192, 377, 0xa5d3c9],
			]
		]]
	},
	'斗技ban选_狐': {
		region: [center, 1280, 720, 1145, 352, 1246, 447],
		desc: [[
			1280, 720,
			[
				[right, 1183, 384, 0xf1ebe7],
				[right, 1194, 391, 0xd67461],
				[right, 1193, 401, 0xd47f76],
				[right, 1183, 415, 0xfff4f3],
				[right, 1206, 397, 0xf6f4ed],
			]
		]]
	},
	'超鬼王_低星': {
		region: [center, 1280, 720, 277, 275, 995, 430],
		desc: [[ // 2星
			1280, 720,
			[
				[center, 517, 366, 0xed742a],
				[center, 526, 366, 0xeb7724],
				[center, 536, 366, 0x958686],
				[center, 545, 366, 0x958787],
				[center, 554, 366, 0x968788],
				[center, 563, 366, 0x968888],
			]
		], [ // 3星
			1280, 720,
			[
				[center, 616, 366, 0xee732b],
				[center, 625, 366, 0xeb7725],
				[center, 634, 366, 0xe87a1f],
				[center, 644, 366, 0x958787],
				[center, 653, 366, 0x968788],
				[center, 662, 366, 0x968888],
			]
		], [ // 4星
			1280, 720,
			[
				[center, 715, 366, 0xee732b],
				[center, 724, 366, 0xeb7725],
				[center, 733, 366, 0xe87a1f],
				[center, 742, 366, 0xe77b1d],
				[center, 752, 366, 0x968787],
			]
		]]
	},
	'寻香行头像': {
		region: [center, 1280, 720, 668, 588, 1177, 717],
		desc: [[
			1280, 720,
			[
				[center, 908, 643, 0xd9dfdf],
				[center, 920, 664, 0xf1f1f1],
				[center, 940, 647, 0x707373],
				[center, 907, 682, 0xc8ced9],
				[center, 920, 686, 0x734040],
				[center, 947, 690, 0xccdada],
				[center, 940, 676, 0x5b413a],
			]
		]]
	},
	'寻香行三层': {
		region: [left, 1280, 720, 0, 0, 1280, 720],
		desc: [[
			1280, 720,
			[
				[center, 591, 165, 0xffdede],
				[center, 600, 165, 0x960000],
				[center, 602, 156, 0xffffff],
				[center, 595, 148, 0xffffff],
				[center, 590, 143, 0x190000],
				[center, 607, 152, 0xffffff],
				[center, 615, 147, 0x1f0101],
				[center, 612, 170, 0x550101],
			]
		]]
	},
	'寻香行五层': {
		region: [left, 1280, 720, 0, 0, 1280, 720],
		desc: [[
			1280, 720,
			[
				[center, 833, 189, 0x490000],
				[center, 839, 187, 0x470000],
				[center, 847, 184, 0xfefefe],
				[center, 848, 178, 0xf3e8d5],
				[center, 851, 178, 0xc9c9bb],
				[center, 852, 171, 0xc9bdb3],
				[center, 847, 171, 0xd7c8ab],
				[center, 836, 170, 0xffffff],
				[center, 828, 169, 0x1e0000],
			]
		]]
	},
	'道馆集结': { // 地图里面的集结
		region: [left, 1280, 720, 0, 0, 1280, 720],
		desc: [[
			1280, 720,
			[
				[center, 762, 441, 0xe8ba8b],
				[center, 769, 459, 0xe4b388],
				[center, 747, 457, 0xffffba],
				[center, 753, 472, 0xffe88b],
				[center, 767, 484, 0xe9d94d],
				[center, 776, 493, 0xe9dd51],
				[center, 780, 480, 0xffda6d],
				[center, 773, 472, 0xe1b17b],
				[center, 805, 415, 0x8b3f16],
				[center, 804, 427, 0xae6c3b],
			]
		], [
			1280, 720,
			[
				[center, 746, 457, 0xffffb6],
				[center, 756, 465, 0xf4e89a],
				[center, 762, 477, 0xffff6d],
				[center, 769, 486, 0xfbf457],
				[center, 783, 495, 0xffe85c],
				[center, 760, 484, 0xe1af7f],
				[center, 770, 460, 0xe4b388],
				[center, 743, 474, 0xf4ed98],
			]
		]],
		similar: 90,
	}
}
export default multiFindColors;