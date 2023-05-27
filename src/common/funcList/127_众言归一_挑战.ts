import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func127 implements IFuncOrigin {
	id = 127;
	name = '众言归一_挑战';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[right, 1171, 594, 0xd94f39],
				[left, 34, 46, 0xe7e7e7],
				[left, 290, 53, 0x485263],
				[left, 126, 569, 0x202830],
				[left, 135, 470, 0xca897b],
				[right, 1039, 589, 0xbec9ce],
			]
		],
		oper: [
			[right, 1280, 720, 1122, 573, 1229, 685, 2000]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		let maxCount = 3;
		while (thisScript.oper({
			id: 124,
			name: '众言归一_挑战',
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
