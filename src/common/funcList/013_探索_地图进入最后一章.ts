import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func013 implements IFuncOrigin {
	id = 13;
	name = '探索_地图进入最后一章';
	desc = '在地图界面时，点击最后一章进行挑战';
	operator: IFuncOperatorOrigin[] = [{
		desc: '探索地图界面',
		oper: [
			[right, 1280, 720, 1056, 557, 1246, 643, 1000],
			[center, 1280, 720, 446, 201, 492, 255, 200],
			[center, 1280, 720, 889, 517, 1002, 559, 1000]
		],
		retest: 1000
	}, {
		desc: [1280, 720,
			[[center, 276, 129, 0x493624],
				[center, 867, 131, 0x493624],
				[center, 1043, 147, 0xeecccc],
				[center, 904, 535, 0xf4b25f],
				[right, 1121, 35, 0xd7b389],
				[right, 1222, 32, 0xd3af85]]
		],
		oper: [
			[center, 1280, 720, 1036, 133, 1065, 158, 500]
		]
	}, {
		oper: [
			[left, 1280, 720, 0, 0, 77, 45, 1000]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '探索_地图判断',
			operator: [{ desc: thisOperator[0].desc, retest: 500 }]
		})) {
			thisScript.global.tsAttackSwhipeNum = undefined;
			const point = thisScript.findMultiColor('探索_宝箱');
			if (point) {
				const oper = [[point.x, point.y, point.x + thisOperator[2].oper[0][2], point.y + thisOperator[2].oper[0][3], thisOperator[2].oper[0][4]]];
				thisScript.regionClick(oper);
				return true;
			} else {
				if (thisScript.oper({
					name: '探索_地图进入最后一章',
					operator: [{
						desc: thisOperator[0].desc,
						oper: [thisOperator[0].oper[0]]
					}]
				})) {
					if (thisScript.compareColorLoop(thisOperator[1].desc, 3000)) {
						thisScript.regionClick([thisOperator[0].oper[1], thisOperator[0].oper[2]]);
						return true;
					}
				}
				return false;
			}
		} else if (thisScript.oper({
			name: '探索_地图进入最后一章_关闭章节窗口',
			operator: [thisOperator[1]]
		})) {
			thisScript.global.tsAttackSwhipeNum = undefined;
			return true;
		}
		return false;
	}
}