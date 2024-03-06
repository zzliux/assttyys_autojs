import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func032 implements IFuncOrigin {
	id = 32;
	name = '道馆_挑战';
	config = [{
		desc: '配置',
		config: [{
			name: 'after_fail_operation',
			desc: '挑战失败投票',
			type: 'list',
			data: ['不投票', '保留赏金', '再战道馆'],
			default: '不投票',
		}]
	}];
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
		desc: [
			1280, 720,
			[
				[center, 476, 485, 0xd2c1c1],
				[center, 424, 494, 0xca8642],
				[center, 605, 278, 0xf8f3e0],
				[center, 556, 274, 0xf7f2df],
				[center, 636, 448, 0xf8f3e0],
				[center, 461, 485, 0xbe2b1f],
			]
		]
	}, { // 4 失败_关闭
		desc: [
			1280, 720,
			[
				[center, 476, 49, 0x514a5b],
				[center, 468, 74, 0x5d5468],
				[center, 501, 78, 0x5a5165],
				[left, 36, 41, 0x413b31],
				[left, 60, 535, 0x270a13],
				[center, 888, 153, 0xe4ded5],
				[center, 771, 111, 0x695f51],
			]
		],
		oper: [
			[center, 1280, 720, 1147, 348, 1238, 614, 800],
		]
	}, { // 5 参与投票
		desc: [
			1280, 720,
			[
				[center, 655, 38, 0xe7c779],
				[left, 34, 40, 0xd6c4a1],
				[left, 107, 26, 0xd6c4a1],
				[left, 169, 24, 0xd6c4a1],
				[left, 61, 530, 0x8f2550],
				[right, 1119, 282, 0x341f19],
				[right, 1240, 281, 0x341e19],
			]
		],
		oper: [
			[right, 1280, 720, 1048, 237, 1144, 328, 800], // 保留赏金
			[right, 1280, 720, 1166, 235, 1256, 328, 800], // 再战道馆
		]
	}, { // 6 道馆页_挑战成功
		desc: [
			1280, 720,
			[
				[left, 64, 482, 0x291522],
				[left, 33, 38, 0xd7c5a2],
				[left, 109, 24, 0xd7c5a2],
				[left, 179, 37, 0xd7c6a5],
				[center, 718, 666, 0xe9e4d2],
				[center, 743, 669, 0xece7d5],
				[center, 584, 663, 0xf4efdd],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['32'];

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
			id: 32,
			name: '检测_挑战结束',
			operator: [thisOperator[1], thisOperator[3], thisOperator[4]]
		})) {
			return true;
		}

		if (thisconf && thisconf.after_fail_operation) {
			if (thisconf.after_fail_operation === '保留赏金') {
				return thisScript.oper({
					id: 32,
					name: '道馆_保留赏金',
					operator: [{
						desc: thisOperator[5].desc,
						oper: [thisOperator[1].oper[0]]
					}]
				})
			} else if (thisconf.after_fail_operation === '再战道馆') {
				return thisScript.oper({
					id: 32,
					name: '道馆_再战道馆',
					operator: [{
						desc: thisOperator[5].desc,
						oper: [thisOperator[1].oper[1]]
					}]
				})
			}
		}

		if (thisScript.oper({
			name: '检测_挑战结束',
			operator: [thisOperator[2], thisOperator[6]]
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