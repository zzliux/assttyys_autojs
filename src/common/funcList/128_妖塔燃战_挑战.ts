import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func128 implements IFuncOrigin {
	id = 128;
	name = '妖塔燃战_挑战';
	operator: IFuncOperatorOrigin[] = [{
		desc: [
			1280, 720,
			[
				[left, 43, 39, 0xf6e8a9],
				[right, 1173, 602, 0xddcfb9],
				[left, 169, 555, 0xc7b5a1],
				[left, 86, 450, 0xf0efea],
				[left, 269, 41, 0x593716],
				[left, 334, 30, 0x8b3147],
				[left, 105, 455, 0x7b4839],
			]
		],
		oper: [
			[center, 1280, 720, 1118, 584, 1227, 707, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		let maxCount = 3;
		while (thisScript.oper({
			id: 128,
			name: '妖塔燃战_挑战',
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