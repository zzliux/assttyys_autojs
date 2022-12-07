const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 30,
	name: '斗技_杂项',
	desc: '斗技界面点击“战”按钮，自动跳过结算拔得头筹，自动跳过段位提升等',
	operator: [{
		desc: [1280,720,
			[[left,36,25,0xf7e8a9],
			[right,1210,82,0x725942],
			[right,1208,178,0x745845],
			[right,1202,574,0xd8c8a7],
			[right,1179,602,0x3c1e0c],
			[right,1202,643,0xe2cfa0],
			[right,1180,624,0xe2cca1],
			[right,1189,626,0x3c1e0c]]
		],
		oper: [
			[right, 1280, 720, 1166,580, 1232,638, 1000]
		]
	}, {
		// 有段位保护
		desc: [1280,720,
			[[left,37,25,0xf6e6a7],
			[left,207,26,0x583716],
			[right,1206,74,0x745a45],
			[right,1206,178,0x745a44],
			[right,1179,594,0x585a5d],
			[right,1203,601,0x565358],
			[right,1179,624,0xc6cbb9]]
		],
		oper: [
			[right, 1280, 720, 1166,580, 1232,638, 1000]
		]
	}, {
		// 有裂痕的段位保护
		desc: [1280,720,
			[[left,37,25,0xf6e6a7],
			[left,207,26,0x583716],
			[right,1206,74,0x745a45],
			[right,1206,178,0x745a44],
			[right,1182,574,0xaeccda],
			[right,1162,600,0xaec8cd],
			[right,1179,601,0x657e90],
			[right,1180,625,0xb4cbcf]]
		],
		oper: [
			[right, 1280, 720, 1166,580, 1232,638, 1000]
		]
	}, {
		// 段位上升
		desc: [1280,720,
			[[center,424,329,0xaa8957],
			[center,579,298,0xe6d8a9],
			[center,738,382,0xb6261c],
			[center,774,293,0xf3e5ba],
			[center,774,332,0x967742],
			[center,869,325,0x9d824c]]
		],
		oper: [
			[right, 1280, 720, 1166,580, 1232,638, 1000]
		]
	}, {
		// 斗技结算-拔得头筹
		desc: [1280,720,
			[[left,68,133,0x1e2026],
			[right,1096,619,0xfcecd2],
			[right,1198,639,0x3d2828],
			[right,1262,59,0x252b30],
			[left,54,632,0x2f3131],
			[left,342,62,0x522018]]
		],
		oper: [
			[center, 1280, 720, 290,136, 935,584, 1000]
		]
	}, {
		// 自动上阵
		desc: [1280,720,
			[[center,614,60,0x1c100c],
			[center,628,58,0xfff1cf],
			[center,666,56,0x190f0c],
			[left,34,143,0x826851],
			[left,44,149,0xffffff],
			[left,60,158,0x826851],
			[left,69,512,0x423141],
			[right,1166,532,0xd5bb9d]]
		],
		oper: [
			[left, 1280, 720, 44,139, 77,178, 1000]
		]
	}]
}