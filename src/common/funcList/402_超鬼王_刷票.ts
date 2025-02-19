import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func402 implements IFuncOrigin {
	id = 402;
	name = '超鬼王_刷票';
	desc = '爬塔获取50票';
	config = [{
		desc: '结束后切换方案',
		config: [{
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '超鬼王_低星',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 300次副本挑战
		desc: [
			1280, 720,
			[
				[right, 1146, 597, 0xe1d6c1],
				[right, 1183, 600, 0x3c2b26],
				[right, 1205, 621, 0x3c2b26],
				[right, 1150, 646, 0xfd892e],
				[right, 1163, 634, 0xddd1bb],
				[right, 1170, 588, 0xe3d8c2],
			]
		],
		oper: [
			[center, 1280, 720, 1130, 591, 1213, 661, 1000],
		]
	}, { // 1 50次票收齐
		desc: [
			1280, 720,
			[
				[left, 269, 597, 0xcea740],
				[left, 265, 600, 0xcaa440],
				[left, 268, 602, 0xdbb140],
				[left, 271, 606, 0xecbd40],
				[left, 267, 610, 0xf0c040],
				[left, 298, 600, 0xf2eadd],
			]
		]
	}, { // 2 庭院进入超鬼王
		desc: [
			1280, 720,
			[
				[left, 115, 33, 0x543a3a],
				[left, 270, 46, 0x4c3838],
				[center, 326, 45, 0x765828],
				[center, 328, 61, 0x775928],
			]
		],
		oper: [
			[center, 1280, 720, 516, 175, 559, 206, 1000],
		]
	}, { // 3 花札获取
		desc: [
			1280, 720,
			[
				[center, 386, 251, 0x6b5a3b],
				[center, 382, 310, 0x50381a],
				[center, 400, 340, 0x50381a],
				[center, 384, 405, 0x584124],
				[center, 390, 424, 0xf3edde],
			]
		],
		oper: [
			[center, 1280, 720, 375, 267, 401, 436, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 402,
			name: '检测_召唤鬼王处',
			operator: [thisOperator[2], thisOperator[3]]
		})) {
			return true;
		}
		if (thisScript.oper({
			id: 402,
			name: '检测_副本挑战',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			if (thisScript.oper({
				id: 402,
				name: '检测_50次票收齐',
				operator: [thisOperator[1]]
			})) {
				thisScript.rerun('关闭BUFF', {
					next_scheme_name: thisScript.scheme.config['402'].next_scheme,
					untransmit: true
				});
				sleep(3000);
				return;
			} else {
				thisScript.regionClick([thisOperator[0].oper[0]]);
				return true;
			}
		}
		return false;
	}
}
