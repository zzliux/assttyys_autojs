import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func049 implements InterfaceFuncOrigin {
	id = 49;
	name = '悬赏_退出结算';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[center, 440, 613, 0x4387cb],
				[center, 467, 602, 0x3b8dc4],
				[center, 473, 609, 0x488acc],
				[center, 558, 417, 0xda961f],
				[center, 634, 552, 0x8f5c29],
				[center, 637, 510, 0xffe7c8],
				[center, 763, 590, 0x9b5c28]
			]
		],
		oper: [
			[left, 1280, 720, 685, 492, 1038, 686, 3000],
		]
	}, {
		desc: [1280, 720,
			[
				[center, 355, 353, 0xcdc7b6],
				[center, 356, 365, 0xede8d5],
				[center, 372, 365, 0xe8e2d0],
				[center, 377, 355, 0xcac4b3],
				[center, 368, 354, 0xbab3a3]
			]
		],
		oper: [
			[left, 1280, 720, 685, 492, 1038, 686, 2000],
		]
	}]
}