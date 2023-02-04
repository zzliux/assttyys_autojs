import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func046 implements InterfaceFuncOrigin {
	id = 46;
	name = '悬赏_领取任务奖励';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[left, 35, 45, 0x2e1972],
				[left, 67, 652, 0xde67e2],
				[right, 1170, 145, 0xd5cec1],
				[right, 1164, 29, 0xd8b38a],
				[left, 190, 671, 0xd22c2b],
				[center, 382, 641, 0xeedbc8],
				[left, 145, 709, 0x70432d]
			]
		],
		oper: [
			[left, 1280, 720, 0, 0, 42, 51, 2000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '悬赏_探索界面',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			let point = thisScript.findMultiColor('悬赏_宝箱') || null;
			if (point != null) {
				let oper = [
					[point.x, point.y, point.x + 1, point.y + 1, 1000]
				];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			} else {
				return false
			}
		} else {
			return false
		}
	}
}