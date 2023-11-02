import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func134 implements IFuncOrigin {
	id = 134;
	name = '真火切磋_挑战';
	operator: IFuncOperatorOrigin[] = [{
		desc: [
			1280, 720,
			[
				[right, 1192, 591, 0xf4e1c2],
				[right, 1158, 632, 0xfae8cb],
				[left, 321, 46, 0x793e1b],
				[left, 252, 41, 0x593716],
				[left, 145, 603, 0xb86925],
				[right, 1030, 597, 0xe1c7b7],
			]
		],
		oper: [
			[center, 1280, 720, 1121, 566, 1236, 679, 1000],
		],
		retest: 1000
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		const maxCount = 6;
		while (thisScript.oper({
			id: 134,
			name: '真火切磋挑战',
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
