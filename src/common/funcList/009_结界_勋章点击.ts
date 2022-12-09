import { Script } from './../../system/script';
import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from "@/interface/InterfaceFunc";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func009 implements InterfaceFuncOrigin {
	id = 9;
	name = '结界_勋章点击';
	desc = '在突破界面点击勋章，可配置点击勋章的优先级';
	config = [{
		desc: '',
		config: [{
			name: 'priority',
			desc: '挑战顺序',
			type: 'list',
			data: ['4->5->3->2->1->0', '5->4->3->2->1->0', '0->1->2->3->4->5'],
			default: '4->5->3->2->1->0',
			value: null,
		}]
	}];
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280,720,
			[[center,171,104,0x4a3624],
			[center,564,89,0x5e4735],
			[center,718,92,0x583716],
			[center,728,86,0xdebc56],
			[center,1210,130,0xebdac9],
			[center,1076,104,0x4d3826]]
		],
		oper: [
			[left, 1280, 720, 30, 10, 160, 80, 500]
		]
	}, {
		desc: [1280,720,
			[[center,570,290,0xded8ca],
			[center,786,293,0xdfd7cb],
			[center,786,396,0x3d5534],
			[center,652,349,0xdfd9cb],
			[center,772,327,0xc1bfb3]]
		],
		oper: [
			[center, 1280, 720, 492,289, 783,385, 500]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator): boolean {
		if (thisScript.oper({
			name: '突破界面_判断',
			operator: [{ desc: thisOperator[0].desc }]
		}, 0)) {
			// 呱
			if (thisScript.oper({
				name: '个人突破_呱',
				operator: [{
					desc: thisOperator[1].desc,
					oper: thisOperator[1].oper
				}]
			}, 0)) {
				return true;
			}
			let thisconf = thisScript.scheme.config['9']; // 获取配置
			let priority = thisconf.priority.split('->');
			let multiColorKey = [];
			for (let item of priority) {
				multiColorKey.push(`结界_${item}勋章`);
			}
			for (let key of multiColorKey) {
				let point = thisScript.findMultiColor(key);
				if (point) {
					let oper = [[
						point.x + thisOperator[0].oper[0][0],
						point.y + thisOperator[0].oper[0][1],
						point.x + thisOperator[0].oper[0][2],
						point.y + thisOperator[0].oper[0][3],
						// point.x,
						// point.y,
						// point.x,
						// point.y,
						thisOperator[0].oper[0][4]]];
					thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
					console.log(key);
					return true;
				}
			}
			return false;
		}
		return false;
	}
}
