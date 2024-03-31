import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
export class Func001 implements IFuncOrigin {
	id = 1;
	name = '准备';
	desc = '在准备界面执行准备或退出操作';
	config = [{
		desc: '退出',
		config: [{
			name: 'shotDownOpen',
			desc: '开启"功能达到目的后不再运行"',
			type: 'switch',
			default: true,
		}],
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: '准备界面_未准备',
		oper: [
			[right, 1280, 720, 1137, 542, 1228, 632, 1000], // 准备
			[left, 1280, 720, 22, 19, 52, 47, 1500], // 左上角返回
			[center, 1280, 720, 683, 401, 795, 442, 500], // 确认
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['1'];
		if (thisconf.shotDownOpen) {
			thisScript.shutDownOpen = true;
		}
		return true;
	}
}