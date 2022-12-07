import { myToast, doOspPush } from '@/common/toolAuto';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 204,
	name: '六道萤草_选事件',
	// desc: '腐草为萤-5级，妖力化身-2级，六道净化-1级，萤火之光-最好5级',
	operator: [{
		// 事件
		desc: [1280, 720,
			[
				[left, 20, 43, 0xf0f6f7],
				[left, 252, 38, 0x583716],
				[left, 66, 649, 0x3d4f5c],
				[right, 1219, 616, 0x242526],
				[right, 1170, 645, 0x373737],
				[right, 1205, 680, 0xf8f3e0],
			]
		],
		oper: [
			[center, 1280, 720, 0, 0, 931 - 905, 448 - 366, 400], // 鏖战点击区域的大小
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '六道萤草_选事件',
			operator: [{
				desc: thisOperator[0].desc,
				// retest: 100,
			}]
		})) {
			let eventNames = ['鏖战', '混沌', '神秘', '宁息'];
			// let eventNames = ['鏖战', '混沌', '神秘', '宁息'];
			// TODO 待优化：buff达到目标个数后优先神秘与宁息，再混沌再鏖战
			for (let i = 0; i < eventNames.length; i++) {
				const en = eventNames[i];
				const p = thisScript.findMultiColor(`六道萤草_${en}`);
				if (p) {
					const toClick = [
						p.x,
						p.y,
						p.x + thisOperator[0].oper[0][2],
						p.y + thisOperator[0].oper[0][3],
						thisOperator[0].oper[0][4]
					];
					thisScript.helperBridge.regionClick([toClick], thisScript.scheme.commonConfig.afterClickDelayRandom);
					myToast(`选择事件${en}`);
					break;
				}
			}
			sleep(200);
			return true;
		}
		return false;
	}
}