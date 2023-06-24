import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func308 implements IFuncOrigin {
	id = 308;
	name = '探索地图进入每周挑战秘闻';
	desc = '从探索地图进入每周挑战秘闻';
	operator: IFuncOperatorOrigin[] = [{
		// 0 20230524正式服，探索地图进入秘闻
		desc: '探索地图界面',
		oper: [
			[center, 1280, 720, 544, 636, 602, 701, 1000],
		]
	}, {
		// 1 每周挑战秘闻弹窗，暗
		desc: [
			1280, 720,
			[
				[left, 110, 42, 0x44423d],
				[left, 211, 38, 0x44423e],
				[left, 31, 634, 0x211719],
				[right, 1255, 706, 0x2b2326],
				[right, 1264, 364, 0x110b0b],
				[center, 886, 24, 0x4b290d]
			]
		],
		oper: [
			[center, 1280, 720, 1020, 112, 1230, 371, 1000]
		]
	}, { // 2 每周挑战秘闻选择并进入
		desc: [1280, 720,
			[
				[left, 110, 42, 0xe0daca],
				[left, 211, 38, 0xe2dccc],
				[left, 50, 598, 0x2c2e3c],
				[left, 26, 149, 0x101014],
				[center, 465, 641, 0x857d6c],
				[right, 1258, 576, 0x3c2830]
			]
		],
		oper: [
			[center, 1280, 720, 134, 150, 450, 246, 500],
			[center, 1280, 720, 1142, 598, 1239, 688, 500],
		]
	}]
}