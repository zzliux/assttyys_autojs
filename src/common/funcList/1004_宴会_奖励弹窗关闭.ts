import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
// const right = 2;

export class Func1004 implements IFuncOrigin {
	id = 1004;
	name = '宴会_奖励弹窗关闭';
	operator: IFuncOperatorOrigin[] = [{
		// 吃宴会只有经验奖励
		desc: [1280, 720,
			[
				[center, 783, 180, 0xf1f1e9],
				[center, 828, 212, 0xcbd5e2],
				[center, 854, 196, 0xb0251c],
				[center, 456, 219, 0xcdd7e3],
				[center, 478, 175, 0x855c30],
				[center, 617, 242, 0xaa7733],
				[center, 566, 265, 0xe93b2b]
			]
		],
		oper: [
			[left, 1280, 720, 1022, 166, 1179, 509, 1000],
		]
	}, {
		// 吃宴会幸运料理
		desc: [1280, 720,
			[
				[center, 789, 93, 0xe4dbd4],
				[center, 847, 103, 0xdb4234],
				[center, 492, 144, 0xc9d2dc],
				[center, 474, 92, 0x825a30],
				[center, 451, 140, 0xccd6e3],
				[center, 562, 188, 0xe93e2c]
			]
		],
		oper: [
			[left, 1280, 720, 1022, 166, 1179, 509, 1000],
		]
		}, {
		// 鞭炮奖励
		desc: [1280, 720,
			[
				[center, 347, 282, 0x7b7372],
				[center, 939, 280, 0x77716d],
				[center, 960, 235, 0x614123],
				[center, 321, 235, 0x613f23],
				[center, 616, 238, 0xeadba5],
				[center, 793, 241, 0xd1bb77],
				[center, 493, 262, 0x906f3e],
				[center, 631, 431, 0xcdb49b],
				[center, 425, 356, 0xc0a98f],
				[center, 858, 361, 0xbca78f]
			]
		],
		oper: [
			[left, 1280, 720, 406, 551, 976, 608, 1000],
		]
	}]
}