import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
// const center = 1;
// const right = 2;

export class Func046 implements IFuncOrigin {
	id = 46;
	name = '悬赏_领取任务奖励';
	operator: IFuncOperatorOrigin[] = [{
		desc: '探索地图界面',
		oper: [
			[left, 1280, 720, 0, 0, 42, 51, 2000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '悬赏_探索界面',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			const point = thisScript.findMultiColor('悬赏_宝箱') || null;
			if (point != null) {
				const oper = [
					[point.x, point.y, point.x + 1, point.y + 1, 1000]
				];
				thisScript.regionClick(oper);
				return true;
			} else {
				return false
			}
		} else {
			return false
		}
	}
}