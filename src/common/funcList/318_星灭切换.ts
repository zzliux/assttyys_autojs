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
				[right, 1146, 476, 0x231a23],
				[right, 1162, 471, 0xfffffc],
				[right, 1174, 472, 0x675f58],
				[right, 1173, 487, 0xf2eadb],
				[right, 1163, 495, 0x8a878e],
				[right, 1189, 480, 0x6bffff],
			]
		],
		oper: [
			[center, 1280, 720, 1194, 636, 1252, 695, 0], // 晴明
		],
		retest: 500
	}, { // 1 开始战斗后的场景
		desc: '战斗界面',
	}, { // 2 妖术二
		desc: [
			1280, 720,
			[
				[right, 1240, 684, 0xdeccbf],
				[right, 1245, 684, 0xe0cdc0],
				[right, 1253, 688, 0xd9c6ba],
				[right, 1247, 674, 0xe4d1c4],
				[right, 1242, 677, 0xdbc9bc],
			]
		]
	}, { // 3 技能框
		desc: [
			1280, 720,
			[
				[center, 940, 479, 0x1f2552],
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
				[right, 1266, 478, 0xbd8a49],
				[center, 895, 569, 0xaa7743],
				[center, 902, 577, 0xb08043],
				[right, 1154, 483, 0x473a32],
				[right, 1165, 462, 0x231a23],
				[right, 1172, 486, 0x473a30],
				[right, 1173, 471, 0x2b1d15],
				[right, 1189, 480, 0x2b3d36],
			]
		],
		oper: [
			[center, 1280, 720, 1011, 481, 1051, 518, 1000], // 2技能
			[center, 1280, 720, 1099, 482, 1145, 519, 1000], // 3技能
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
			sleep(1000);
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
