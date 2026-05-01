import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func005 implements IFuncOrigin {
	id = 5;
	name = '组队挑战';
	desc = '在组队界面时，点击挑战按钮，可配置三人开始或有人就开';
	config = [{
		desc: '',
		config: [{
			name: 'type',
			desc: '组队挑战',
			type: 'list',
			data: ['有人就开', '三人'],
			default: '有人就开',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{ // 组队界面_挑战亮
		desc: [1280, 720,
			[
				[left, 42, 38, 0xf7eaac],
				[right, 1177, 667, 0xd8b871],
				[right, 1187, 679, 0xcda35d],
				[right, 1188, 609, 0xf1e096],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717]
			]
		],
	}, {
		desc: [1280, 720,
			[[right, 645, 270, 0xfffefc]]
		]
	}, {
		desc: [1280, 720,
			[[right, 1064, 252, 0xfffffe]]
		]
	}, {
		oper: [
			[right, 1280, 720, 1192, 613, 1251, 677, 2000]
		]
	}, {
		// 永生之海
		desc: [1280, 720,
			[
				[right, 1199, 608, 0xe6dac6],
				[left, 29, 39, 0x1f160e],
				[left, 55, 45, 0xd7c5a2],
				[left, 126, 43, 0xd7c5a2],
				[center, 654, 306, 0xeae1e2],
				[center, 633, 327, 0xfdfbf9],
				[center, 636, 309, 0x413f53],
				[center, 655, 323, 0x343244],
				[right, 1170, 587, 0x604030]
			]
		],
		oper: [
			[right, 1280, 720, 1168, 598, 1250, 678, 2000]
		]
	}, { // 5 金币/经验妖怪界面_有人进入
		desc: [1280, 720,
			[
				[center, 420, 310, 0xfffefc],
			]
		],
	}, { // 6 金币/经验妖怪界面_10秒无人进入_退出
		desc: [1280, 720,
			[
				[center, 544, 29, 0xb38e57],
				[center, 556, 29, 0xcc9e5b],
				[center, 597, 29, 0xd2a25c],
				[center, 590, 29, 0xa6824c],
			]
		],
		oper: [
			[center, 1280, 720, 35, 24, 66, 53, 1000],
		]
	}, { // 7 金币/经验组队界面
		desc: [1280, 720,
			[
				[left, 59, 644, 0xf8f3e0],
				[left, 45, 645, 0xf8f3e0],
				[left, 43, 664, 0xf5f0db],
				[left, 53, 672, 0x614231],
				[left, 75, 694, 0x291c14],
				[left, 26, 688, 0x322c1f],
			]
		],
	}, { // 8 组队有探索奖励
		desc: [1280, 720,
			[
				[left, 11, 132, 0x49352f],
				[left, 61, 132, 0x49352f],
				[left, 119, 132, 0x49352f],
				[left, 19, 159, 0xe8d8bc],
			]
		],
	},];
	// 0-有人就开，1-第一个+号上的点，2-第二个+号上的点，如果1或者2任意一个匹配上了，说明人没满
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '组队界面奖励检测',
			operator: [{ desc: thisOperator[8].desc }]
		})) {
			const point = thisScript.findMultiColor('探索_宝箱');
			if (point) {
				const oper = [[point.x, point.y, point.x + 5, point.y + 5, 500]];
				thisScript.regionClick(oper);
				return true;
			}
		}
		if (thisScript.oper({
			name: '组队挑战_永生之海_判断',
			operator: [thisOperator[4]]
		}, 0)) {
			return true;
		}
		if (thisScript.oper({
			name: '组队挑战_判断',
			operator: [{ desc: thisOperator[0].desc }]
		}, 0)) {
			const thisconf = thisScript.scheme.config['5']; // 获取配置
			if (thisconf.type === '有人就开') {
				if (thisScript.oper({
					name: '金币/经验',
					operator: [thisOperator[7]]
				})) {
					if (!thisScript.oper({
						name: '金币/经验妖怪有人再开',
						operator: [thisOperator[5]]
					})) {
						thisScript.regionClick(thisOperator[3].oper);
						return true;
					}
					if (thisScript.oper({
						name: '10秒无人进入_退出',
						operator: [thisOperator[6]]
					})) {
						return true;
					}
				} else {
					if (!thisScript.oper({
						name: '二号位',
						operator: [thisOperator[1]]
					})) {
						if (thisScript.oper({
							name: '组队界面奖励检测',
							operator: [{ desc: thisOperator[8].desc }]
						})) {
							sleep(2000);
						}
						thisScript.regionClick(thisOperator[3].oper);
						return true;
					}
				}

			} else if (thisconf.type === '三人') {
				if (!thisScript.oper({
					name: '组队挑战_乘客1无人',
					operator: [thisOperator[1]]
				}, 0) && !thisScript.oper({
					name: '组队挑战_乘客2无人',
					operator: [thisOperator[2]]
				}, 0)) {
					thisScript.regionClick(thisOperator[3].oper);
					return true;
				}
			}
		}
		return false;
	}
}

export default new Func005();