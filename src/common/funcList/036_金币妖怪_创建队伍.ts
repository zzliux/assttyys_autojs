import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func036 implements IFuncOrigin {
	id = 36;
	name = '金币妖怪_创建队伍 ';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[center, 436, 140, 0x645c50],
				[center, 438, 165, 0xf8f3e0],
				[center, 422, 153, 0x2d130e],
				[center, 450, 151, 0xe1dcca],
				[center, 464, 169, 0x43382f],
				[center, 469, 156, 0x24170f],
				[center, 486, 157, 0xd9d3c1],
				[center, 506, 165, 0x90887a],
				[center, 532, 157, 0x3e352a]
			]
		],
		oper: [
			[center, 1280, 720, 992, 600, 1154, 650, 1000],
			[center, 1280, 720, 410, 289, 426, 309, 500],
			[center, 1280, 720, 534, 491, 746, 537, 1000]
		]
	}]
}