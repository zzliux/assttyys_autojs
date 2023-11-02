import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func041 implements IFuncOrigin {
	id = 41;
	name = '悬赏_一键追踪';
	operator: IFuncOperatorOrigin[] = [{
		desc: [
			// 已适配66，一键追踪界面点一键追踪
			1280, 720,
			[
				[center, 1175, 121, 0x65343d],
				[center, 546, 84, 0x58402f],
				[center, 714, 81, 0x5c3a1a],
				[center, 844, 67, 0x3e3c42],
				[center, 1117, 615, 0x3c2a18],
				[center, 1142, 653, 0xddb03f],
				[center, 1098, 596, 0xf3e39e],
				[center, 1169, 610, 0xefd787],
			]
		],
		oper: [
			[center, 1280, 720, 1105, 583, 1181, 660, 1000],
		]
	}]
}