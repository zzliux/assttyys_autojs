import { Script } from "@/system/script";
import { InterfaceFunc, InterfaceFuncOperatorOrigin } from "@/interface/InterfaceFunc";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func005 implements InterfaceFunc {
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
			value: null,
		}]
	}];
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[left, 43, 37, 0xf5e6a8],
				[right, 1177, 667, 0xd8b871],
				[right, 1187, 679, 0xcda35d],
				[right, 1188, 609, 0xf1e096],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717]
			]
		],
	}, {
		desc: [1280, 720,
			[[center, 643, 254, 0xffffff]]
		]
	}, {
		desc: [1280, 720,
			[[center, 1088, 253, 0xffffff]]
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
	}];
	// 0-有人就开，1-第一个+号上的点，2-第二个+号上的点，如果1或者2任意一个匹配上了，说明人没满
	operatorFunc(thisScript: Script, thisOperator): boolean {
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
			let thisconf = thisScript.scheme.config['5']; // 获取配置
			if (thisconf.type === '有人就开') {
				thisScript.helperBridge.regionClick(thisOperator[3].oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			} else if (thisconf.type === '三人') {
				if (!thisScript.oper({
					name: '组队挑战_乘客1无人',
					operator: [thisOperator[1]]
				}, 0) && !thisScript.oper({
					name: '组队挑战_乘客2无人',
					operator: [thisOperator[2]]
				}, 0)) {
					thisScript.helperBridge.regionClick(thisOperator[3].oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
					return true;
				}
			}
		}
		return false;
	}
}

export default new Func005();