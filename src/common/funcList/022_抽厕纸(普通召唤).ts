import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';

// const normal = -1; //定义常量
// const left = 0;
const center = 1;
// const right = 2;

export class Func022 implements IFuncOrigin {
	id = 22;
	name = '抽厕纸(普通召唤)';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[center, 442, 650, 0xf4b25f],
				[center, 707, 647, 0xf4b25f],
				[center, 586, 671, 0x964130],
				[center, 856, 671, 0x933e2d]]
		],
		oper: [
			[center, 1280, 720, 697, 629, 855, 665, 1000] // 再次召唤
		]
	}, {
		desc: [
			1280, 720,
			[
				[center, 559, 590, 0xddd5c3],
				[center, 629, 590, 0xe1dac7],
				[center, 688, 591, 0xcbc1af],
				[center, 743, 590, 0xe0d9c6],
				[center, 650, 599, 0xddd6c3],
			]
		],
		oper: [
			[center, 1280, 720, 609, 418, 689, 489, 1000],
		]
	}
	]
}