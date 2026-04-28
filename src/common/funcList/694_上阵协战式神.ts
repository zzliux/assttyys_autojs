import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func694 implements IFuncOrigin {
	id = 694;
	name = '上阵协战式神';
	desc = '上阵第一个式神进行协战,用于协战十五次(排在准备前面,不要锁定阵容)';
	operator: IFuncOperatorOrigin[] = [{ // 0 上阵协战式神
		desc: [1280, 720,
			[
				[center, 610, 536, 0xeba1ae],
				[center, 608, 619, 0xf95e89],
				[right, 714, 601, 0xf95e89],
				[right, 706, 674, 0xfa5c8a],
			]
		],
		oper: [
			[center, 1280, 720, 648, 581, 679, 607, 1000],
			[center, 1280, 720, 618, 240, 649, 265, 1000],
			[center, 1280, 720, 1134, 562, 1224, 611, 1000],
		]
	}, { // 1 未准备
		desc: '准备界面_未准备',
		oper: [
			[center, 1280, 720, 785, 494, 825, 530, 2000],
		]
	}, { // 2 无协战式神
		desc: [1280, 720,
			[
				[left, 270, 551, 0xffe78d],
				[center, 370, 636, 0xffed91],
				[center, 370, 558, 0xffec91],
				[left, 270, 631, 0xffe68c],
			]
		],
		oper: [
			[center, 1280, 720, 23, 19, 49, 45, 1000],
			[center, 1280, 720, 23, 19, 49, 45, 1000],
			[center, 1280, 720, 680, 397, 802, 448, 1000],
			[center, 1280, 720, 680, 397, 802, 448, 1000],
		]
	}, { // 3 上阵
		desc: [1280, 720,
			[
				[left, 266, 658, 0xf95e89],
				[center, 334, 675, 0xf95e89],
				[center, 372, 643, 0xee5a83],
				[left, 297, 512, 0xfa5c88],
			]
		],
		oper: [
			[center, 1280, 720, 297, 561, 337, 601, 1000],
			[center, 1280, 720, 604, 244, 634, 275, 1000],
			[center, 1280, 720, 1135, 557, 1217, 611, 1000],
		]
	}, { // 4 御魂九层
		desc: [1280, 720,
			[
				[left, 130, 523, 0x9f3f21],
				[left, 206, 534, 0x80281d],
				[left, 196, 543, 0x832e1c],
				[left, 159, 532, 0x943318],
				[left, 129, 543, 0x942c18],
			]
		],
		oper: [
			[center, 1280, 720, 99, 421, 183, 441, 1000],
		]
	}, { // 5 购买体力
		desc: [1280, 720,
			[
				[center, 363, 205, 0xcec4bb],
				[right, 875, 219, 0xd2c9c3],
				[center, 336, 496, 0xa3999e],
				[right, 919, 473, 0xcfc6be],
				[center, 586, 475, 0xf3b25e],
				[right, 701, 476, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 568, 454, 712, 485, 2000],
			[center, 1280, 720, 581, 672, 724, 699, 1000],
		]
	}, { // 6 解锁阵容 待改
		desc: [1280, 720,
			[
				[center, 558, 579, 0xa69dd5],
				[center, 586, 578, 0xa598c6],
				[center, 566, 577, 0x7f6747],
				[center, 577, 590, 0x6b5842],
				[center, 567, 587, 0x6d563f],
			]
		],
		oper: [
			[center, 1280, 720, 562, 572, 583, 589, 1000],
		]
	}, { // 7 解锁阵容(五倍券)
		desc: [1280, 720,
			[
				[right, 648, 671, 0xb4aaf3],
				[right, 648, 669, 0xb0a6ed],
				[right, 674, 669, 0xbbacec],
				[right, 674, 672, 0xc4b8f5],
				[right, 657, 672, 0x856949],
			]
		],
		oper: [
			[center, 1280, 720, 652, 665, 669, 680, 1000],
		]
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['0'];
		if (thisScript.global.frist) {
			if (thisScript.oper({
				id: 692,
				name: 'frist',
				operator: [thisOperator[2]]
			})) {
				if (thisconf.after_operation === '切换方案') {
					thisScript.rerun(thisconf.next_scheme);
					sleep(3000);
				} else if (thisconf.after_operation === '停止脚本') {
					thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					// 停止脚本时关闭应用
					if (thisconf.stop_with_launched_app_exit) {
						thisScript.stopRelatedApp();
					}
					thisScript.stop();
					sleep(3000);
				}
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'frist',
				operator: [{ desc: thisOperator[0].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[0].oper[0], thisOperator[0].oper[1], [800, 1000], 1000);
				thisScript.regionClick([thisOperator[0].oper[2]]);
				thisScript.global.frist = false;
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'frist',
				operator: [{ desc: thisOperator[3].desc }]
			})) {
				thisScript.regionSwipe(thisOperator[3].oper[0], thisOperator[3].oper[1], [800, 1000], 1000);
				thisScript.regionClick([thisOperator[3].oper[2]]);
				thisScript.global.frist = false;
				return true;
			}
			if (thisScript.oper({
				id: 692,
				name: 'frist',
				operator: [thisOperator[1], thisOperator[6]]
			})) {
				return true;
			}
		}
		if (thisScript.oper({
			id: 692,
			name: '特殊操作',
			operator: [thisOperator[4], thisOperator[5], thisOperator[7]]
		})) {
			return true;
		}
		return false;
	}
}