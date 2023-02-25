import { Script } from '@/system/script';
import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from "@/interface/InterfaceFunc";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func004 implements InterfaceFuncOrigin {
	id = 4;
	name = '接受邀请';
	desc = '左侧弹出邀请提示时，自动接受邀请';
	config = [{
		desc: '',
		config: [{
			name: 'exit',
			desc: '对邀请提示不做动作并切换方案（常用于组队队员开始前打开buff）',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '开启BUFF_打探索',
		},]
	}]
	operator: InterfaceFuncOperatorOrigin[] = [{
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
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		let thisConf = thisScript.scheme.config['4'];
		if (thisConf && thisConf.exit && thisScript.oper({
			id: 2,
			name: '接受邀请',
			operator: [{ desc: thisOperator[0].desc },{desc: thisOperator[1].desc}]
		})) {
			thisScript.setCurrentScheme(thisConf.next_scheme as string);
			thisScript.myToast(`切换方案为[${thisConf.next_scheme}]`);
			thisScript.rerun();
		} else {
			return thisScript.oper({
				id: 2,
				name: '接受邀请',
				operator: thisOperator.slice(0, 2)
			});
		}
	}
}
