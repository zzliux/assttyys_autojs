import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const center = 1;

export class Func321 implements IFuncOrigin {
	id = 321;
	name = '寻香行五层后切二技能';
	desc: '';
	operator: IFuncOperatorOrigin[] = [{
		desc: '战斗界面',
	}, { // 1 战字
		desc: [
			1280, 720,
			[
				[center, 528, 311, 0xe2ceba],
				[center, 593, 316, 0x030303],
				[center, 660, 332, 0x030303],
				[center, 749, 297, 0xe4d0b6],
				[center, 569, 523, 0x8e2214],
				[center, 709, 524, 0x881509],
				[center, 638, 472, 0xf3daaa],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// 0_找三层 1_找五层 2_等待重置
		if (thisScript.oper({
			id: 321,
			name: '战字',
			operator: [thisOperator[1]]
		})) {
			thisScript.global.xxxskill === 0;
			const point = thisScript.findMultiColor('寻香行头像');
			if (point) {
				thisScript.regionClick([[point.x, point.y, point.x + 15, point.y + 15, 500]]);
				thisScript.regionClick([[point.x + 140, point.y - 130, point.x + 140 + 15, point.y - 130 + 15, 200]]);
				return true;
			}
		}
		if (thisScript.oper({
			name: '战斗界面',
			operator: [thisOperator[0]]
		}) && thisScript.global.xxxskill !=2) {
			if (thisScript.global.xxxskill === 0) {
				const point = thisScript.findMultiColor('寻香行三层');
				if (point) {
					thisScript.global.xxxskill = 1;
					return true;
				}
			} else if (thisScript.global.xxxskill === 1) {
				const point = thisScript.findMultiColor('寻香行五层');
				if (point) {
					const point = thisScript.findMultiColor('寻香行头像');
					if (point) {
						thisScript.global.xxxskill = 2;
						thisScript.regionClick([[point.x, point.y, point.x + 15, point.y + 15, 500]]);
						thisScript.regionClick([[point.x - 30, point.y - 130, point.x - 30 + 15, point.y - 130 + 15, 200]]);
						return true;
					}
				}
			}
		}
		return false;
	}
}