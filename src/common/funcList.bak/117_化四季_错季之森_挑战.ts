import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func117 implements IFuncOrigin {
	id = 117;
	name = '化四季_错季之森_挑战';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[right, 1060, 594, 0xd1bac0],
				[right, 1088, 638, 0xf0dbe3],
				[left, 81, 649, 0xc0e1d0],
				[left, 48, 42, 0xfde7ea],
				[left, 55, 60, 0xbb8696],
				[left, 340, 44, 0x2f4245],
			]
		],
		oper: [
			[right, 1280, 720, 987, 599, 1089, 692, 4000]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		let maxCount = 3;
		while (thisScript.oper({
			id: 117,
			name: '化四季_错季之森_挑战',
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
