import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from "@/interface/IFunc";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func004 implements IFuncOrigin {
	id = 4;
	name = '接受邀请';
	desc = '左侧弹出邀请提示时，自动接受邀请';
	config = [{
		desc: '',
		config: [{
			name: 'exit',
			desc: '对邀请提示不做动作并切换方案（常用于组队队员开始前打开buff或组队队员停止当前方案）',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用准备退出',
		},{
			name: 'teammate_exit',
			desc: '队长退出后切换方案',
			type: 'switch',
			default: true,
		},{
			name: 'teammate_exit_next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '关闭BUFF',
		},]
	}]
	operator: IFuncOperatorOrigin[] = [{
		// 自动接受邀请
		desc: [1280, 720,
			[[left, 20, 254, 0x7e6750],
			[left, 45, 248, 0xdf6e5b],
			[left, 138, 260, 0x57b260],
			[left, 234, 251, 0xefc791],
			[left, 247, 269, 0x59b462],
			[left, 255, 276, 0x86705d],
			[left, 192, 276, 0xeadece]]
		],
		oper: [
			[left, 1280, 720, 219, 237, 254, 275, 600]
		]
	}, { // 接受一次邀请
		desc: [1280, 720,
			[[left, 128, 255, 0x58b361],
			[left, 45, 257, 0xdd6a59],
			[left, 79, 222, 0xe3d3c2],
			[left, 14, 299, 0xf1be36],
			[left, 176, 291, 0xefe5d6]]
		],
		oper: [
			[left, 1280, 720, 120, 239, 159, 273, 600]
		]
	}, { // 开始战斗后的场景，提供给方案的自动判断
		desc: [1280, 720,
			[[left, 32, 89, 0x5d361c],
			[left, 32, 190, 0x5a321a],
			[left, 55, 402, 0xe3caa3],
			[left, 51, 502, 0xe4cca3]]
		]
	}, {//3	挑战_亮
		desc: [1280, 720,
			[
				[left, 43, 37, 0xf5e6a8],
				[right, 1177, 667, 0xd8b871],
				[right, 1187, 679, 0xcda35d],
				[right, 1188, 609, 0xf1e096],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717]
			]
		]
	}, {//4	挑战_暗
		desc: [
			1280, 720,
			[
				[left, 43, 37, 0xf5e6a8],
				[right, 1210, 621, 0xd9d9d9],
				[right, 1228, 658, 0xc8c8c8],
				[right, 1214, 698, 0xff9d48],
				[left, 60, 39, 0x84582f],
				[left, 19, 47, 0x281717]
			]
		],
		oper:[

		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let thisConf = thisScript.scheme.config['4'];
		if (thisConf && thisConf.exit && thisScript.oper({
			id: 4,
			name: '接受邀请',
			operator: [{ desc: thisOperator[0].desc }, { desc: thisOperator[1].desc }]
		})) {
			thisScript.rerun(thisConf.next_scheme);
		} else {
			if (thisScript.oper({
				id: 4,
				name: '接受邀请',
				operator: thisOperator.slice(0, 2)
			})) {
				return true;
			};
		}

		if (thisConf && thisConf.teammate_exit && thisScript.oper({
			id: 4,
			name: '队长退出',
			operator: [thisOperator[3],thisOperator[4]]
		})){
			thisScript.rerun(thisConf.teammate_exit_next_scheme);
		}
	}
}
