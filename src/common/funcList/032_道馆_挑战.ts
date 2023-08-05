import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func032 implements IFuncOrigin {
	id = 32;
	name = '道馆_挑战';
	operator: IFuncOperatorOrigin[] = [{ // 0 检测_挑战是否可用
		desc: [1280, 720,
			[
				[left, 64, 482, 0x291522],
				[left, 33, 38, 0xd7c5a2],
				[left, 109, 24, 0xd7c5a2],
				[left, 179, 37, 0xd7c6a5],
				[center, 547, 34, 0x9a8958],
				[right, 1138, 561, 0xdbc5ae],
				[right, 1218, 641, 0xebc683],
				[right, 1167, 608, 0x272420]
			]
		],
		oper: [
			[right, 1280, 720, 1138, 561, 1218, 641, 1000]
		]
	}, { // 1 已适配66 检测_挑战结束结算页
		desc: [1280, 720,
			[
				[left, 221, 115, 0xf8f3e0],
				[left, 231, 115, 0x5a9ca5],
				[center, 182, 634, 0x520c19],
				[center, 316, 633, 0x930618],
				[center, 473, 85, 0xa11b11],
				[center, 510, 83, 0x9f1c12],
				[center, 486, 53, 0x7c1710],
				[center, 510, 59, 0xc6b49f],
				[center, 196, 101, 0x8bb9cb],
				[center, 233, 111, 0x5aa1a8],
			]
		],
		oper: [
			[right, 1280, 720, 1146, 82, 1266, 696, 3000],
		]
	}, { // 2 检测_挑战结束场景
		desc: [1280, 720,
			[
				[center, 698, 44, 0xddbb77],
				[center, 546, 42, 0x161629],
				[center, 703, 48, 0xddbb77],
				[center, 600, 51, 0xe0ca86],
				[center, 645, 684, 0xc18f5d]
			]
		]
	}, { // 3 检测_攻打进度页
		desc: [1280, 720,
			[
				[center, 451, 479, 0xc0714a],
				[center, 476, 485, 0xd2c1c1],
				[center, 424, 494, 0xca8642],
				[center, 605, 278, 0xf8f3e0],
				[center, 556, 274, 0xf7f2df],
				[center, 636, 448, 0xf8f3e0]
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let thisConf = thisScript.scheme.config['32'];

		if (thisScript.oper({
			name: '检测_挑战是否可用',
			operator: [{
				desc: thisOperator[0].desc,
				oper: thisOperator[0].oper,
				retest: 1000,
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_挑战结束',
			operator: [{
				desc: thisOperator[1].desc,
				oper: thisOperator[1].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_挑战结束',
			operator: [{
				desc: thisOperator[3].desc,
				oper: thisOperator[1].oper
			}]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_挑战结束',
			operator: [{
				desc: thisOperator[2].desc
			}]
		})) {
			if (thisScript.runtimeParams && thisScript.runtimeParams.liao_activity_state) {
				thisScript.runtimeParams.liao_activity_state['dojo'] = true;
				const next_scheme = '返回庭院';
				thisScript.rerun(next_scheme, {
					next_scheme_name: '庭院进入寮每日活动',
					liao_activity_state: thisScript.runtimeParams.liao_activity_state
				});
			} else {
				const next_scheme = '返回庭院';
				thisScript.rerun(next_scheme);
			}

		}

		return false;
	}
}