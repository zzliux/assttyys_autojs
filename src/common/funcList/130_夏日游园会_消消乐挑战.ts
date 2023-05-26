import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func130 implements IFuncOrigin {
	id = 130;
	name = '夏日游园会_消消乐_挑战';
	operator: IFuncOperatorOrigin[] = [{
		desc: [
            1280, 720,
            [
                [left, 36, 38, 0xdfeaff],
                [left, 278, 41, 0x313125],
                [right, 1218, 444, 0xb7d4e5],
                [right, 1156, 641, 0x8688ae],
                [center, 243, 532, 0xd4ccd3],
            ]
        ],
        oper: [
            [center, 1280, 720, 1129, 581, 1232, 690, 1000],
        ]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		let maxCount = 3;
		while (thisScript.oper({
			id: 130,
			name: '夏日游园会_消消乐挑战',
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
