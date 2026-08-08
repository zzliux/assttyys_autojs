import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const left = 0;
// const center = 1;
const right = 2;

export class Func703 implements IFuncOrigin {
	id = 703;
	name = '武道大会-探索';
	desc = '武道大会探索界面（配合通用活动使用）：已探索出御灵则点击左侧御灵图标进入挑战界面，未探索则点击右侧探索按钮，探索后自动进入御灵挑战界面';
	operator: IFuncOperatorOrigin[] = [{
		// 0 检测_御灵挑战界面（仅比色，不点击）
		desc: [1280, 720,
			[
				[left, 80, 614, 0xdcdcdc],
				[left, 168, 611, 0xfec78d],
				[right, 1118, 628, 0xff9035],
				[right, 1141, 575, 0xe5dac3],
				[right, 1096, 29, 0xff9531],
				[right, 746, 619, 0xe9f4ff],
			]
		]
	}, {
		// 1 探索界面_已探索出御灵 → 点击左侧御灵图标
		desc: [1280, 720,
			[
				[right, 894, 36, 0xf8e2b6],
				[right, 896, 20, 0xfbeecf],
				[right, 1097, 19, 0xf7d099],
				[right, 1096, 38, 0xf9edae],
				[left, 260, 83, 0xa92b36], // 御灵名牌，未探索时不存在
				[right, 1148, 624, 0xb4a88d],
				[right, 1169, 623, 0x3b3a35],
			]
		],
		oper: [
			[left, 1280, 720, 21, 87, 283, 191, 1500], // 点击 左侧御灵图标
		]
	}, {
		// 2 探索界面_未探索 → 点击右侧探索按钮
		desc: [1280, 720,
			[
				[right, 894, 40, 0xc889a5],
				[right, 896, 19, 0xf7e3d1],
				[right, 1099, 22, 0xf9edbf],
				[right, 1094, 44, 0xfcf0b8],
				[right, 1144, 588, 0xd8ccb5],
				[right, 1130, 637, 0x27231f],
				[right, 1158, 656, 0xd8ceb8],
			]
		],
		oper: [
			[right, 1280, 720, 1099, 537, 1191, 645, 2000], // 点击 右侧探索按钮
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// 已经在御灵挑战界面，本功能不再操作，交给方案里后续功能处理
		if (thisScript.oper({
			id: 703,
			name: '武道大会_已在挑战界面',
			operator: [{ desc: thisOperator[0].desc, notForCnt: true }]
		})) {
			return false;
		}
		// 已探索出御灵：点击左侧御灵图标进入挑战界面
		if (thisScript.oper({
			id: 703,
			name: '武道大会_点击御灵图标',
			operator: [thisOperator[1]]
		})) {
			return true;
		}
		// 未探索：点击右侧探索按钮，探索后游戏会自动进入御灵挑战界面
		if (thisScript.oper({
			id: 703,
			name: '武道大会_点击探索',
			operator: [thisOperator[2]]
		})) {
			return true;
		}
		return false;
	}
}

export default new Func703();
