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
		desc: '探索章节_挑战',
		oper: [
			[left, 1280, 720, 1025, 129, 1071, 174, 1000],
		]
	}, {
		desc: '探索章节_挑战2',
		oper: [
			[center, 1280, 720, 1032, 120, 1082, 166, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 44,
			name: '悬赏_关闭挑战副本弹窗',
			operator: thisOperator
		})) {
			return true;
		}
		// 由于阴阳师的问题，有时候这个弹窗位置会有偏差，所以无法使用多点比色进行弹窗确认
		let point = thisScript.findMultiColor('悬赏_挑战弹窗界面') || null
		if (point) {
			thisScript.regionClick([[1045, 131, 1064, 146, 1000]]);
			return true;
		} else {
			return false
		}
	}
}