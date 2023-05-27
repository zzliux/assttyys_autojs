import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func220 implements IFuncOrigin {
	id = 221;
	name = '夜行荒河_挑战';
	operator: IFuncOperatorOrigin[] = [{
		// 匹配
		desc: [1280, 720,
			[
				[right, 1201, 48, 0x725742],
				[right, 1203, 134, 0x745944],
				[left, 47, 46, 0xf5e4a2],
				[right, 1165, 561, 0xd7c6a4],
				[left, 356, 32, 0x282f57],
				[right, 1208, 230, 0x735843],
			]
		],
		oper: [
			[right, 1280, 720, 1119, 560, 1214, 646, 1500],
		]
	}, {
		// 锁魂罗网的“战”
		desc: [
			1280, 720,
			[
				[left, 38, 43, 0xf0f5fb],
				[left, 342, 38, 0x6a2125],
				[right, 1227, 78, 0xbabac4],
				[right, 1226, 609, 0xbfaaa6],
				[right, 1060, 633, 0xf4c6ce],
			]
		],
		oper: [
			[right, 1280, 720, 1148, 564, 1234, 659, 1500],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		let maxCount = 3;
		while (thisScript.oper({
			id: 221,
			name: '夜行荒河_挑战',
			operator: thisOperator
		})) {
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
				thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				return false;
			}
		}
		if (curCnt) {
			return true;
		}
		return false;
	}
}
