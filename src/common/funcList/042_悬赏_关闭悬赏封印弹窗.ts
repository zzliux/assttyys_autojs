import { IFuncOrigin, IFuncOperator, IFuncOperatorOrigin } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
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
		desc: [
			// 已适配66，一键取消界面点击右上角关闭
			1280, 720,
			[
				[center, 1175, 121, 0x65343d],
				[center, 546, 84, 0x58402f],
				[center, 714, 81, 0x5c3a1a],
				[center, 844, 67, 0x3e3c42],
				[center, 1117, 615, 0x3c2a18],
				[center, 1142, 653, 0xddb03f],
				[center, 1100, 582, 0xf7efad],
				[center, 1159, 581, 0xf7eead],
			]
		],
		oper: [
			[center, 1280, 720, 1153, 112, 1202, 157, 1000],
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
			operator: [thisOperator[0]]
		})) {
			return true
		}
		// 如果所有任务已经完成,就关闭弹窗后停止脚本或者执行下个方案
		if (thisScript.oper({
			name: '悬赏_关闭悬赏封印弹窗',
			operator: [{
				desc: thisOperator[1].desc
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
