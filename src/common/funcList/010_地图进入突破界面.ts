import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; // 定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func010 implements IFuncOrigin {
	id = 10;
	name = '地图进入突破界面';
	desc = '在地图界面时点击突破按钮进入突破界面，可配置进入个人突破或寮突破界面';
	config = [{
		desc: '',
		config: [{
			name: 'type',
			desc: '突破类型',
			type: 'list',
			data: ['个人突破', '寮突破'],
			default: '个人突破',
			value: null,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: '探索地图界面',
		oper: [
			[left, 1280, 720, 244, 641, 310, 704, 1500],
			[center, 1280, 720, 1214, 423, 1248, 485, 1000],
		]
	}, {
		desc: [1280, 720,
			[
				[center, 276, 129, 0x493624],
				[center, 867, 131, 0x493624],
				[center, 1043, 147, 0xeecccc],
				[center, 904, 535, 0xf4b25f],
				[right, 1121, 35, 0xd7b389],
				[right, 1222, 32, 0xd3af85] // #D9B38A
			]
		],
		oper: [
			[center, 1280, 720, 1036, 133, 1065, 158, 500]
		]
	}, {
		desc: '探索地图界面_含时空秘境',
		oper: [
			[left, 1280, 720, 343, 645, 413, 703, 1500],
			[center, 1280, 720, 1210, 366, 1254, 453, 1500]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['10']; // 获取配置
		if ('个人突破' === thisconf.type) {
			return thisScript.oper({
				name: '地图进入个人突破',
				operator: [{
					desc: thisOperator[2].desc,
					oper: [thisOperator[2].oper[0]]
				}, {
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[0]]
				}, thisOperator[1]]
			});
		} else if ('寮突破' === thisconf.type) {
			return thisScript.oper({
				name: '地图进入寮突破',
				operator: [thisOperator[2], thisOperator[0], thisOperator[1]]
			});
		}
		return false;
	}
}