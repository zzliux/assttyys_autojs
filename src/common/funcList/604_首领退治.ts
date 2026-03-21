import {
	IFuncOrigin,
	IFuncOperatorOrigin,
	IFuncOperator,
} from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func604 implements IFuncOrigin {
	id = 604;
	name = '首领退治';
	operator: IFuncOperatorOrigin[] = [{ // 0 检测_是否为首领退治集结页
		desc: [1280, 720,
			[
				[left, 108, 26, 0xd7c5a2],
				[left, 47, 28, 0xd7c5a2],
				[right, 1039, 648, 0xd3c3bd],
				[center, 872, 606, 0x493a38],
				[center, 727, 611, 0xdfc7ac],
				[right, 1172, 568, 0xd6bda3],
				[right, 1217, 662, 0xebc47b],
			],
		],
		oper: [
			[right, 1280, 720, 1157, 577, 1232, 646, 1200], // 点击挑战
		],
	}, { // 1 阴阳寮
		desc: [1280, 720,
			[
				[right, 1096, 630, 0xb1251f],
				[right, 1105, 662, 0xdbe3f1],
				[left, 45, 39, 0xf4e4a3],
				[center, 886, 644, 0xe0cbaa],
			]
		],
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '检测_首领退治',
			operator: [thisOperator[0]]
		})) {
			return true;
		}
		if (thisScript.oper({
			name: '检测_阴阳寮页',
			operator: [thisOperator[1]]
		})) {
			const next_scheme = '返回庭院';
			thisScript.rerun(next_scheme);
			sleep(1000);
			return true;
		}
		return false;
	}
}
