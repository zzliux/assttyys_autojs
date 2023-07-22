import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1002 implements IFuncOrigin {
	id = 1002;
	name = '宴会_吃爆竹经验';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[center, 484, 36, 0x493428],
				[center, 788, 41, 0x47332a],
				[center, 633, 33, 0xf2ecda],
				[right, 1196, 562, 0x6333d6],
				[right, 1238, 562, 0x8892c2],
				[left, 31, 37, 0xd7c5a2],
				[center, 639, 71, 0x291c14]
			]
		],
		oper: [
			[left, 1280, 720, 529, 688, 744, 706, 2000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
				name: '宴会_吃饭界面',
				operator: [{
					desc: thisOperator[0].desc
				}]
			})) {
			let point = thisScript.findMultiColor('宴会_爆竹经验') || null
			if (point) {
				thisScript.regionClick([[point.x, point.y, point.x + 1, point.y + 1, 1500]]);
				return true
			} else {
				return false
			}
		}
	}
}