import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func507 implements IFuncOrigin {
	id = 507;
	name = '狩猎战_挑战';
	operator: IFuncOperatorOrigin[] = [{ // 0 麒麟界面_未挑战
		desc: [1280, 720,
			[
				[left, 35, 592, 0x8a6138],
				[left, 112, 594, 0x664b30],
				[left, 139, 590, 0x5b452c],
				[left, 175, 603, 0x966f47],
				[right, 1178, 593, 0xe5dac3],
				[right, 1178, 657, 0xe0d5be],
				[right, 1187, 626, 0x482d20],
			]
		],
		oper: [
			[center, 1280, 720, 1139, 584, 1228, 666, 1000],
		]
	}, { // 1 狩猎战_已挑战
		desc: [1280, 720,
			[
				[left, 35, 592, 0x8a6138],
				[left, 112, 594, 0x664b30],
				[left, 139, 590, 0x5b452c],
				[left, 175, 603, 0x966f47],
				[right, 1178, 587, 0xdadada],
				[right, 1175, 662, 0xd5d5d5],
				[right, 1148, 627, 0xd3d3d3],
				[right, 1193, 610, 0xd7d7d7],
				[right, 1147, 675, 0x292929],
			]
		],
		oper: [
			[center, 1280, 720, 18, 19, 64, 56, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '麒麟界面_未挑战',
			operator: [thisOperator[0]]
		})) {
			return true;
		}
		if (thisScript.oper({
			name: '狩猎战_已挑战',
			operator: [thisOperator[1]]
		})) {
			thisScript.rerun('返回庭院');
			return true;
		}
		return false;
	}
}