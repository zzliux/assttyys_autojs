import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func204 implements InterfaceFuncOrigin {
	id = 204;
	name = '六道萤草_选事件';
	// desc: '腐草为萤-5级，妖力化身-2级，六道净化-1级，萤火之光-最好5级';
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 事件
		desc: [1280, 720,
			[
				[left, 20, 43, 0xf0f6f7],
				[left, 252, 38, 0x583716],
				[left, 66, 649, 0x3d4f5c],
				[right, 1255, 584, 0x403a34],
				[left, 46, 656, 0xcdbb90],
			]
		],
		oper: [
			[center, 1280, 720, 0, 0, 931 - 905, 448 - 366, 400], // 鏖战点击区域的大小
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '六道萤草_选事件',
			operator: [{
				desc: thisOperator[0].desc,
				// retest: 100,
			}]
		})) {
			let eventNames = thisScript.global.d6NextEvent || ['鏖战', '混沌', '神秘', '宁息'];
			// let eventNames = ['鏖战', '混沌', '神秘', '宁息'];
			// TODO 待优化：buff达到目标个数后优先神秘与宁息，再混沌再鏖战
			let p = null;
			let en = null;
			for (let i = 0; i < eventNames.length; i++) {
				en = eventNames[i];
				p = thisScript.findMultiColor(`六道萤草_${en}`);
				if (p) {
					break;
				}
			}
			if (p) {
				const toClick = [
					p.x,
					p.y,
					p.x + thisOperator[0].oper[0][2],
					p.y + thisOperator[0].oper[0][3],
					thisOperator[0].oper[0][4]
				];
				thisScript.helperBridge.regionClick([toClick], thisScript.scheme.commonConfig.afterClickDelayRandom);
				thisScript.myToast(`选择事件${en}`);
				sleep(200);
				thisScript.global.d6NextEvent = undefined;
			}
			return true;
		}
		return false;
	}
}