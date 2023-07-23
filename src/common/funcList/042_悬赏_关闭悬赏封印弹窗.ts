import { IFuncOrigin, IFuncOperator, IFuncOperatorOrigin } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func042 implements IFuncOrigin {
	id = 42;
	name = '悬赏_关闭悬赏封印弹窗';
	desc = '请打开悬赏封印弹窗后开启脚本';
	config = [{
		desc: '结束后切换方案',
		config: [{
			name: 'scheme_switch_enabled',
			desc: '是否启用',
			type: 'switch',
			default: false,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '地鬼日常',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[center, 505, 45, 0x46454c],
				[center, 880, 62, 0x3f3e44],
				[center, 560, 84, 0x5b4332],
				[right, 1022, 88, 0x4c3827],
				[right, 1098, 581, 0xfff3b0],
				[right, 1110, 581, 0xfee7b8],
				[right, 1097, 605, 0xfedb92],
				[right, 1124, 604, 0xf0dd8f],
				[right, 1108, 595, 0xf2e4a1],
				[right, 1149, 600, 0x58290a]
			]
		],
		oper: [
			[left, 1280, 720, 1164, 116, 1189, 143, 500],
		]
	},
	// 旧
	{
		desc: [1280, 720,
			[
				[center, 644, 40, 0x544321],
				[center, 638, 52, 0x75542a],
				[left, 95, 124, 0x7b7372],
				[left, 105, 90, 0x634724],
				[right, 1161, 85, 0x553c1f],
				[right, 1097, 582, 0xffeeaa],
				[right, 1110, 580, 0xf9eba8],
				[right, 1107, 611, 0xf4e39a],
				[right, 1128, 606, 0xe5cf89],
				[right, 1122, 584, 0xf4e3a4]
			]
		],
		oper: [
			[left, 1280, 720, 1164, 116, 1189, 143, 500],
		]
	},
	// 如果所有任务已经完成
	{
		desc: [1280, 720,
			[
				[center, 647, 79, 0xe9e2d0],
				[center, 640, 50, 0x7a5930],
				[center, 552, 30, 0x484850],
				[right, 1114, 67, 0x3c3a41],
				[right, 1161, 86, 0x5d4223],
				[right, 1179, 134, 0xecdbca],
				[right, 1173, 593, 0x705a44],
				[right, 1116, 624, 0x765443],
				[right, 1170, 623, 0x705847]
			]
		],
		oper: [
			[left, 1280, 720, 1164, 116, 1189, 143, 500],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '悬赏_关闭悬赏封印弹窗',
			operator: [{
				desc: thisOperator[0].desc
			}, {
				desc: thisOperator[1].desc
			}]
		})) {
			thisScript.regionClick([[1164, 116, 1189, 143, 500]]);
			return true
		} else {
			// 如果所有任务已经完成,就关闭弹窗后停止脚本或者执行下个方案
			if (thisScript.oper({
				name: '悬赏_关闭悬赏封印弹窗',
				operator: [{
					desc: thisOperator[2].desc
				}]
			})) {
				thisScript.regionClick([[1164, 116, 1189, 143, 1000]]);
				const thisconf = thisScript.scheme.config['42'];
				if (thisconf && thisconf.scheme_switch_enabled) {
					thisScript.rerun(thisconf.next_scheme);
				} else {
					thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
					thisScript.stop();
				}
			}
		}
	}
}
