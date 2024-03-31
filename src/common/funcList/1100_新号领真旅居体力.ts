import {
	IFuncOrigin,
	IFuncOperatorOrigin,
	IFuncOperator,
} from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1100 implements IFuncOrigin {
	id = 1100;
	name = '新号领真旅居体力';
	operator: IFuncOperatorOrigin[] = [{ // 0 无同心队的真旅居位置
		desc: [
			1280, 720,
			[
				[left, 240, 616, 0x3a322c],
				[left, 262, 615, 0x3a322c],
				[left, 277, 651, 0x772b2d],
				[left, 264, 655, 0xf47764],
				[left, 245, 646, 0xfad988],
			]
		],
		oper: [
			[center, 1280, 720, 190, 565, 327, 705, 1000],
		]
	}, { // 1 千物宝库
		desc: [
			1280, 720,
			[
				[right, 1148, 591, 0x411611],
				[right, 1215, 580, 0x822413],
				[right, 1187, 626, 0xeac8b6],
				[right, 1170, 617, 0xead3c3],
			]
		],
		oper: [
			[center, 1280, 720, 1136, 588, 1205, 647, 1000],
		]
	}, { // 2 购买体力
		desc: [
			1280, 720,
			[
				[center, 695, 446, 0x5a4167],
				[center, 735, 474, 0xff9e36],
				[center, 658, 462, 0xdfddd2],
				[center, 672, 582, 0xae5a57],
				[center, 666, 500, 0xddc5b4],
			]
		],
		oper: [
			[center, 1280, 720, 655, 531, 799, 581, 1000],
			[center, 1280, 720, 757, 444, 800, 489, 1000],
			[center, 1280, 720, 557, 539, 714, 586, 1000]
		]
	}, { // 3 关闭窗口
		desc: [
			1280, 720,
			[
				[center, 485, 106, 0x71547f],
				[center, 794, 110, 0x4f395e],
				[right, 1006, 89, 0x211717],
				[right, 1114, 105, 0x615956],
			]
		],
		oper: [
			[center, 1280, 720, 1092, 87, 1139, 123, 1000],
		]
	}, { // 4 红叉
		desc: [
			1280, 720,
			[
				[left, 194, 59, 0xd7bd83],
				[left, 319, 54, 0xebd198],
				[center, 391, 63, 0x593716],
				[right, 1114, 105, 0xebd7d0],
			]
		],
		oper: [
			[center, 1280, 720, 1092, 87, 1139, 123, 1000],
		]
	}, { // 5 左上角返回
		desc: [
			1280, 720,
			[
				[right, 1145, 593, 0x481910],
				[right, 1170, 619, 0xe3c8b4],
				[right, 1202, 625, 0x7b361b],
				[left, 55, 30, 0xefd490],
				[left, 43, 39, 0xf7ebad],
			]
		],
		oper: [
			[center, 1280, 720, 24, 15, 77, 60, 1000],
		]
	}, { // 6 庭院
		desc: '页面是否为庭院_菜单已展开_只支持默认庭院皮肤与默认装饰'
	}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.global.zhenLvJu_tiLi) {
			if (thisScript.oper({
				name: '购买体力',
				operator: [thisOperator[0], thisOperator[1]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '购买体力完毕',
				operator: [thisOperator[2]]
			})) {
				thisScript.global.zhenLvJu_tiLi = false;
				return true;
			}
		} else if (!thisScript.global.zhenLvJu_tiLi) {
			if (thisScript.oper({
				name: '返回庭院',
				operator: [thisOperator[3], thisOperator[4], thisOperator[5]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '返回庭院',
				operator: [thisOperator[3]]
			})) {
				thisScript.global.zhenLvJu_tiLi = null;
				return true;
			}
		} else {
			return false;
		}
	}
}
