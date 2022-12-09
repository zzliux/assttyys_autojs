import { InterfaceFunc, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func102 implements InterfaceFunc {
	id = 102;
	name = '战场探索_杂项';
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 战场探索 挑战胜利
		desc: [1280,720,
			[[center,407,206,0xd2b1d5],
			[center,851,232,0xf6eee4],
			[center,807,170,0xcaa9c7],
			[center,689,308,0x794849],
			[center,556,302,0x583c4f]]
		],
		oper: [
			[center, 1280, 720, 134,99, 1103,633, 1000]
		]
	}, {
		// 战场探索 挑战失败
		desc: [1280,720,
			[[center,420,294,0xd9d9d9],
			[center,592,290,0xe9e9e9],
			[center,893,334,0xebebeb],
			[center,664,405,0xcfcecf],
			[center,702,78,0x827965],
			[center,424,292,0xdfdfdf]]
		],
		oper: [
			[center, 1280, 720, 134,99, 1103,633, 1000]
		]
	}, {
		// 战场探索 胜利后选择式神
		desc: [1280,720,
			[[left,44,48,0xf0f0f8],
			[center,1232,578,0x3f2e1e],
			[center,977,576,0x443323],
			[center,728,581,0x443323],
			[left,219,50,0xf8f3e0],
			[left,260,46,0x21202d]]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 196,572, 227,611, 1000, 1],
				[center, 1280, 720, 442,567, 485,615, 1000, 1],
				[center, 1280, 720, 696,568, 735,611, 1000, 1],
				[center, 1280, 720, 943,564, 990,607, 1000, 1],
				[center, 1280, 720, 1203,568, 1244,608, 1000, 1],
			]
		],
	}, {
		// 战场探索 胜利后选择式神满了，则关闭
		desc: [1280,720,
			[[center,1095,89,0xfffdf5],
			[center,259,326,0x9d9db0],
			[center,1037,319,0xa1a0b2],
			[center,1071,291,0x493354],
			[center,213,556,0x4c4c8e],
			[center,457,611,0xb6b6c8]]
		],
		oper: [
			[center, 1280, 720, 1079,75, 1104,103, 1000],
			[center, 1280, 720, 31,26, 80,71, 1000],
		]
	}, {
		// 战场探索 随机选路
		desc: [1280,720,
			[[left,67,658,0xded6d9],
			[left,43,51,0xf1f1f9],
			// [left,246,48,0x262431],
			// [center,676,12,0xeddcb2],
			[right,1115,635,0x0e0e2c],
			[right,1206,630,0xe7dec6],
			[right,1205,620,0x12122b]]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 267,360, 374,464, 1000, 1],
				[center, 1280, 720, 604,297, 707,413, 4000, 8], // 选中间的路的概率要高点，不然老点两边
				[center, 1280, 720, 956,350, 1073,439, 1000, 1],
			]
		],
		retest: 1500,
	}, {
		// 战场探索 关闭签文选择_恶
		desc: [1280,720,
			[[center,629,11,0xdbcaa8],
			// [center,712,7,0xc1b08e],
			[center,404,527,0x886f56],
			[center,585,531,0x796148],
			[center,861,531,0x8b7259],
			[center,914,544,0x786047],
			[center,373,246,0x323245],
			[center,747,151,0xf6ecca],
			[center,745,168,0xa79674],
			[center,732,140,0x8c7956]]
		],
		oper: [
			[center, 1280, 720, 1086,140, 1113,173, 1000],
		]
	}, {
		// 战场探索 选择祝福
		desc: [1280,720,
			[[center,375,553,0x886f5e],
			[center,694,557,0x765e4d],
			[center,613,552,0x8c7b63],
			[center,838,557,0x907f67],
			[center,944,266,0x221d2e],
			// [center,1067,149,0xe3e1f3],
			[center,360,276,0x232135]]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 375,541, 469,570, 1000, 1],
				[center, 1280, 720, 590,536, 698,568, 1000, 1],
				[center, 1280, 720, 815,538, 926,567, 1000, 1],
			]
		],
		retest: 1500,
	}, {
		// 战场探索 选择祝福 当前祝福已满 关闭
		desc: [1280,720,
			[[center,299,503,0xcfc7cf],
			[center,577,501,0xd0c8d0],
			[center,519,462,0xaaaabb],
			[center,575,222,0xd4ccd4],
			[center,1092,91,0xfffcf2],
			[center,1091,104,0x291b38],
			[center,728,60,0x33233b],
			[center,209,548,0x49498b],
			[center,1074,554,0x514d8f]]
		],
		oper: [
			[center, 1280, 720, 1079,79, 1104,101, 1000],
			[center, 1280, 720, 1052,138, 1083,173, 1000],
		]
	}, {
		// 战场探索 自动上阵
		desc: [1280,720,
			[[left,35,528,0x826851],
			[right,1154,535,0xd7bb9e],
			[left,30,57,0xd7c5a2],
			[left,76,530,0x826851],
			[left,51,518,0xffffff],
			[left,89,510,0xffffff]]
		],
		oper: [
			[left, 1280, 720, 45,497, 103,555, 5000]
		]
	}, {
		// 战场探索 胧车冲锋
		desc: [1280,720,
			[[center,1018,380,0x463e6b],
			[center,1012,479,0x4a416f],
			[right,1206,630,0xe7dec6],
			[center,902,380,0xe2e3ef],
			[center,908,385,0xdadae8],
			[center,866,418,0x312455]]
		],
		oper: [
			[center, 1280, 720, 769,364, 1081,401, 3000]
		]
	}, {
		// 战场探索 式神祝福1比1替换选择继续
		desc: [1280,720,
			[[center,780,506,0x382655],
			[center,1082,508,0x443b63],
			[center,781,384,0x3f2a5d],
			[center,1078,388,0x0a0a2f],
			[center,782,276,0x392656],
			[center,1079,277,0x0a092d],
			[right,1205,637,0xdbccaa]]
		],
		oper: [
			[center, 1280, 720, 782,484, 1094,522, 1000]
		]
	}, {
		// 战场探索 祷告选择向善
		desc: [1280,720,
			[[center,369,598,0x6a6395],
			[center,415,274,0xbe36a0],
			[center,782,388,0xcdd5e6],
			[center,868,551,0x2a263b],
			[center,564,552,0x2a283c],
			[center,1070,157,0xe0e0f1]]
		],
		oper: [
			[center, 1280, 720, 730,246, 877,571, 1000]
		]
	}, {
		// 战场探索 末路逢生，打完5000分了
		desc: [1280,720,
			[[center,444,194,0x7a0850],
			[left,234,243,0x7e123d],
			[left,226,172,0xfbeff1],
			[right,1180,372,0x2d233d],
			[right,1107,678,0x33261b],
			[left,180,565,0x604160]]
		],
		oper: [
			[center, 1280, 720, 146,141, 1168,479, 2000]
		]
	}, {
		// 战场探索 末路终途，没有打完5000分
		desc: [1280,720,
			[[right,1108,683,0x392e20],
			[right,1202,383,0x1f1123],
			[left,225,588,0x2e193a],
			[center,602,265,0xffffff],
			[left,456,256,0xbf12b6],
			[right,812,369,0xf2f2f2]]
		],
		oper: [
			[center, 1280, 720, 146,141, 1168,479, 2000]
		]
	}, {
		// 战场探索 出战
		desc: [1280,720,
			[[left,64,662,0xd6cccf],
			[right,1088,639,0xc1b193],
			[right,1231,632,0x090924],
			[center,633,383,0xfffbc1],
			[center,711,337,0xbca395],
			[left,44,50,0xefeff7]]
		],
		oper: [
			[center, 1280, 720, 579,281, 710,433, 2000]
		]
	}, {
		// 继续战斗
		desc: [1280,720,
			[[right,1086,619,0x111130],
			[right,1225,631,0x10102d],
			[right,1203,643,0xdbd3b2],
			[right,1076,437,0x2a2241],
			[right,866,424,0x9c8cc6],
			[left,65,663,0xd5cbcf],
			[left,46,49,0xf1f1f9],
			[left,110,44,0xf8f3e0]]
		],
		oper: [
			[right, 1280, 720, 891,424, 1137,465, 1000]
		]
	}, {
		// 战场探索 开局的随机选择式神
		desc: [1280,720,
			[[left,251,594,0x443323],
			[center,576,601,0x413020],
			[left,40,46,0xf1f1f9],
			[left,122,42,0xf7f2df],
			[right,1217,592,0x443322],
			[center,866,84,0x020204]]
		],
		operStepRandom: [
			[
				[center, 1280, 720, 225,588, 265,626, 2000, 1],
				[center, 1280, 720, 544,588, 590,631, 2000, 1],
				[center, 1280, 720, 864,591, 909,629, 2000, 1],
				[center, 1280, 720, 1190,589, 1228,630, 2000, 1],
			]
		]
	}, {
		// 放弃选择奖励、是否放弃宝箱
		desc: [1280,720,
			[[center,490,257,0xcbb59e],
			[center,496,411,0xdf6851],
			[center,697,412,0xf4b25f],
			[center,718,361,0xcbb59e],
			[center,790,222,0x6c4736],
			[center,829,357,0xcbb59e]]
		],
		oper: [
			[center, 1280, 720, 683,400, 800,448, 2000],
		]
	}]
}