import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

export class Func318 implements IFuncOrigin {
	id = 318;
	name = '星灭切换';
	desc = '必须带普通的镇墓兽契灵';
	operator: IFuncOperatorOrigin[] = [{ // 0 契灵
		desc: [
			1280, 720,
			[
				[right, 1143, 482, 0x69dbff],
				[right, 1190, 480, 0x6bffff],
				[right, 1155, 483, 0xf8f4ed],
				[right, 1155, 473, 0xfdf8ee],
				[right, 1174, 497, 0xeae0ce],
			]
		],
		oper: [
			[center, 1280, 720, 1190, 633, 1259, 691, 250], // 清明
		]
	}, { // 1 开始战斗后的场景
		desc: '战斗界面',
	}, { // 2 妖术二
		desc: [
			1280, 720,
			[
				[right, 1247, 674, 0xe0cec1],
				[right, 1251, 685, 0xdfccbf],
				[right, 1246, 685, 0xe1cec1],
				[right, 1241, 685, 0xdbc9bd],
				[right, 1243, 680, 0x9d9086],
				[right, 1243, 677, 0x8c8178],
			]
		]
	}, { // 3 技能框
		desc: [
			1280, 720,
			[
				[center, 897, 445, 0xc79b56],
				[right, 1250, 442, 0x9c6331],
				[right, 1263, 445, 0xb18245],
				[right, 1266, 454, 0xb48446],
				[right, 1265, 555, 0xb3894c],
				[center, 904, 546, 0xb58447],
			]
		]
	}];

	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 318,
			name: '战斗界面',
			operator: [thisOperator[1]]
		}) && thisScript.oper({
			id: 318,
			name: '契灵行动',
			operator: [thisOperator[0]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 318,
			name: '技能框',
			operator: [thisOperator[3]]
		})) {
			if (thisScript.oper({
				id: 318,
				name: '锁定妖术二中,切换为妖术三',
				operator: [thisOperator[2]]
			})) {
				const point = thisScript.findMultiColor('晴明_星');
				if (point) {
					const oper = [[
						point.x - 5,
						point.y - 5,
						point.x + 5,
						point.y + 5,
						1200
					]];
					thisScript.regionClick(oper);
					return true;
				}
			} else {
				const point = thisScript.findMultiColor('晴明_灭');
				if (point) {
					const oper = [[
						point.x - 5,
						point.y - 5,
						point.x + 5,
						point.y + 5,
						1200
					]];
					thisScript.regionClick(oper);
					return true;
				}
			}
		}
		return false;
	}
}
