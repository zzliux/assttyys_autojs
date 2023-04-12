import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func124 implements IFuncOrigin {
	id = 124;
	name = '决裂庭院_挑战';
	operator: IFuncOperatorOrigin[] = [{
		desc: [
			1280, 720,
			[
				[left, 39, 45, 0xf0f5fb],
				[left, 251, 38, 0x32414e],
				[left, 71, 399, 0xf2c8d0],
				[right, 1193, 576, 0xded1cd],
				[right, 1193, 650, 0xefefed],
			]
		],
		oper: [
			[right, 1280, 720, 1127, 554, 1244, 663, 4000]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		let maxCount = 3;
		while (thisScript.oper({
			id: 124,
			name: '决裂庭院_挑战',
			operator: thisOperator
		})) {
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
				thisScript.doOspPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
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