import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
export class Func2000 implements IFuncOrigin {
	id = 1;
	name = '准备';
	desc = '在准备界面执行准备或退出操作';
	operator: IFuncOperatorOrigin[] = [{
		desc: '准备界面_未准备',
		oper: [
			[right, 1280, 720, 1137, 542, 1228, 632, 1000], // 准备
			[left, 1280, 720, 22, 19, 52, 47, 1500], // 左上角返回
			[center, 1280, 720, 683, 401, 795, 442, 500], // 确认
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '准备',
			operator: [thisOperator[0]]
		})) {
			thisScript.shutDown['2000'] = false;
		}
		return true;
	}
}