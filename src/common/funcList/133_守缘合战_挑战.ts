import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func133 implements IFuncOrigin {
	id = 133;
	name = '守缘合战_挑战';
	operator: IFuncOperatorOrigin[] = [{
		desc: [
			1280, 720,
			[
				[right, 1223, 624, 0xf9e6cc],
				[right, 1178, 653, 0xf8e8d5],
				[left, 33, 38, 0xf5e5a6],
				[left, 330, 22, 0x812021],
				[left, 253, 35, 0x593716],
				[right, 1024, 564, 0xae362d],
			]
		],
		oper: [
			[center, 1280, 720, 1123, 573, 1232, 679, 1000],
		],
		retest: 1000
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		let maxCount = 6;
		while (thisScript.oper({
			id: 132,
			name: '守缘合战挑战',
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
