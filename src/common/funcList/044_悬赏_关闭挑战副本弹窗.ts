import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func044 implements IFuncOrigin {
	id = 44;
	name = '悬赏_关闭挑战副本弹窗';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[right, 1046, 147, 0xedcbcb],
				[right, 1056, 127, 0x682446],
				[center, 808, 524, 0x761e11],
				[center, 790, 535, 0xcbeded],
				[center, 803, 548, 0xd46e6a],
				[center, 803, 553, 0xa8c9c9]
			]
		],
		oper: [
			[left, 1280, 720, 1027, 128, 1063, 168, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// 由于阴阳师的问题，有时候这个弹窗位置会有偏差，所以无法使用多点比色进行弹窗确认
		let point = thisScript.findMultiColor('悬赏_挑战弹窗界面') || null
		console.log(point, '悬赏_挑战弹窗界面')
		if (point) {
			thisScript.helperBridge.regionClick([
				[1045, 131, 1064, 146, 1000]
			], thisScript.scheme.commonConfig.afterClickDelayRandom);
		} else {
			return false
		}
	}
}