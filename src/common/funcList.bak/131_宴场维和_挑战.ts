import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func131 implements IFuncOrigin {
	id = 131;
	name = '宴场维和_挑战';
	operator: IFuncOperatorOrigin[] = [{
		// 宴场维和
		desc: [
			1280, 720,
			[
				[left, 44, 37, 0xf5e5a6],
				[right, 1183, 609, 0xf2e6c9],
				[right, 1048, 588, 0xece7ec],
				[left, 252, 41, 0x593716],
				[right, 1177, 668, 0xfaf5ea],
				[right, 957, 601, 0xd3d6dc],
			]
		],
		oper: [
			[center, 1280, 720, 1128, 587, 1235, 699, 1000],
		],
		retest: 2000
	}, {
		// 恋色障道
		desc: [
			1280, 720,
			[
				[left, 44, 36, 0xf5e5a6],
				[left, 250, 41, 0x593716],
				[right, 1222, 652, 0xdad5ed],
				[right, 1230, 686, 0x243469],
				[right, 1069, 599, 0xe0e8f8],
			]
		],
		oper: [
			[center, 1280, 720, 1139, 594, 1244, 701, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		let maxCount = 6;
		while (thisScript.oper({
			id: 131,
			name: '宴场维和挑战',
			operator: thisOperator
		})) {
			curCnt++;
			thisScript.keepScreen();
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
