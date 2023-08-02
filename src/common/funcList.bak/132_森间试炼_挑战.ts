import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func132 implements IFuncOrigin {
	id = 132;
	name = '森间试炼_挑战';
	operator: IFuncOperatorOrigin[] = [{
		desc: [
			1280, 720,
			[
				[left, 41, 40, 0xf7dccf],
				[right, 1197, 602, 0xdde5e2],
				[right, 1187, 611, 0xdfe6e0],
				[right, 1254, 471, 0x93f4ff],
				[right, 1046, 580, 0xc6edf2],
				[left, 323, 51, 0x275e69],
				[left, 63, 524, 0x42897e],
			]
		],
		oper: [
			[center, 1280, 720, 1129, 586, 1221, 687, 1000],
		],
		retest: 1000
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		let maxCount = 6;
		while (thisScript.oper({
			id: 132,
			name: '森间试炼挑战',
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
