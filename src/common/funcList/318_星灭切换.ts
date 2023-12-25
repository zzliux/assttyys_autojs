import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

export class Func318 implements IFuncOrigin {
	id = 318;
	name = '星灭切换';
	desc = '必须带普通的镇墓兽契灵，只有晴明会二三技能切换，其他阴阳师不会';
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
				[center, 940, 479, 0x1f2552],
				[center, 956, 481, 0x3772b3],
				[right, 965, 506, 0x1f214e],
				[center, 928, 514, 0x383a91],
				[center, 938, 504, 0xf4feff],
				[center, 897, 445, 0xc79b56],
				[right, 1250, 442, 0x9c6331],
				[right, 1263, 445, 0xb18245],
				[right, 1266, 454, 0xb48446],
				[right, 1265, 555, 0xb3894c],
				[center, 904, 546, 0xb58447],
			]
		]
	}, { // 4 未弹起的技能框和 技能坐标
		desc: [
			1280, 720,
			[
				[center, 895, 469, 0xbf9350],
				[right, 1248, 466, 0xaa733d],
				[right, 1266, 478, 0xbd8a49],
				[right, 1265, 577, 0xb88c4e],
				[center, 895, 569, 0xaa7743],
				[center, 902, 577, 0xb08043],
				[right, 1154, 483, 0x473a32],
				[right, 1165, 462, 0x231a23],
				[right, 1172, 486, 0x473a30],
			]
		],
		oper: [
			[center, 1280, 720, 1009, 487, 1052, 512, 1000], // 2技能
			[center, 1280, 720, 1099, 482, 1147, 520, 1000], // 3技能
			[center, 1280, 720, 1099, 482, 1147, 520, 1000], // 3技能
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
				thisScript.regionClick([thisOperator[4].oper[1]]);
			} else {
				thisScript.regionClick([thisOperator[4].oper[0]]);
			}
			return true;
		}
		if (thisScript.oper({
			id: 318,
			name: '未弹起的技能框',
			operator: [{ desc: thisOperator[4].desc }]
		})) {
			thisScript.regionClick([thisOperator[0].oper[0]]);
			return true;
		}
		return false;
	}
}
