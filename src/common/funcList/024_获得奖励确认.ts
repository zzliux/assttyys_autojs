import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from "@/interface/InterfaceFunc";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func024 implements InterfaceFuncOrigin {
	id = 24;
	name = '获得奖励确认';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280,720, // 奖励只有1排
			[[center,424,328,0xbfa88f],
			[center,408,237,0x382a1c],
			[center,854,241,0x382a1c],
			[center,669,242,0xe6d79c],
			[center,869,327,0xb79e86],
			[center,926,386,0x825e34],
			[center,371,395,0x8b673e]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}, {
		desc: [1280,720, // 奖励有2排
			[[center,401,210,0x39291d],
			[center,828,208,0x3c2a20],
			[center,602,172,0xfbf2cd],
			[center,917,418,0x8e6a41],
			[center,370,430,0x8d6940],
			[center,619,254,0xcbb59e]]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}, {
		desc: [1280, 720, // 周年活动999的获得奖励1排
			[
				[center, 498, 201, 0xf2e5ad],
				[center, 363, 382, 0x8c673f],
				[center, 913, 383, 0x8d673e],
				[center, 836, 257, 0x402f1f],
				[center, 748, 198, 0xfbf3cf],
			]
		],
		oper: [
			[left, 1280, 720, 69, 171, 170, 452, 500]
		]
	}]
}