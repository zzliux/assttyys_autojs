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
				[left, 41, 32, 0xf7e4a6],
				[left, 121, 25, 0xf7eeb5],
				[right, 999, 646, 0xf8efc6],
				[right, 1126, 599, 0xe3d9c2],
				[right, 1157, 652, 0xdcd0bb],
				[right, 1185, 665, 0x372015],
				[right, 887, 35, 0xffeac3],
				[right, 1090, 35, 0xfff3c7],
			]
		],
		oper: [
			[right, 1280, 720, 1091, 580, 1195, 679, 2000], // 点击 右侧探索按钮
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

		let curCnt = 0;
		const maxCount = 5;
		// 未探索：点击右侧探索按钮，探索后游戏会自动进入御灵挑战界面
		while (thisScript.oper({
			id: 703,
			name: '武道大会_点击探索',
			operator: [thisOperator[2]]
		})) {
			curCnt++;
			thisScript.keepScreen(false);
			if (curCnt >= maxCount) {
				thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
				thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(2000);
				return false;
			}
		}
		if (curCnt) {
			return true;
		}
		return false;
	}
}

export default new Func703();
