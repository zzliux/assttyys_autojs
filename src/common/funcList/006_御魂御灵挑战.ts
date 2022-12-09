import { Script } from '@/system/script';
import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func006 implements InterfaceFuncOrigin {
	id = 6;
	name = '御魂/御灵挑战';
	desc = '在御魂或者御灵的挑战界面时，点击挑战按钮，连续点击3次后未开始将自动停止脚本';
	operator: InterfaceFuncOperatorOrigin[] = [{ // 三类御魂
		desc: [1280,720,
			[[left,44,43,0xc2cbe3],
			[right,1124,47,0xd8b188],
			[right,1237,47,0xd3af84],
			[right,1161,608,0xded2bb],
			[right,1207,671,0x372015]]
		],
		oper: [
			[right, 1280, 720, 1116,602, 1197,683, 2000]
		]
	}, { // 御灵
		desc: [1280,720,
			[[left,37,37,0xc3cce1],
			[right,1121,47,0xd7b389],
			[right,1230,46,0xd3ae83],
			[right,1106,628,0xe5d9c3],
			[right,1188,679,0x371f16],
			[right,1091,663,0x472c1f]]
		],
		oper: [
			[right, 1280, 720, 1104,595, 1196,681, 2000]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]) : boolean {
		let curCnt = 0;
		let maxCount = 3;
		while (thisScript.oper({
			id: 6,
			name: '御魂/御灵挑战',
			operator: thisOperator
		}, 0)) {
			curCnt++;
			thisScript.keepScreen(false);
			if (curCnt >= maxCount) {
				thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
				thisScript.doOspPush(thisScript, { text: '脚本已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(2000);
				return false;
			}
		}
		if (curCnt) {
			return true;
		}
		return false;
	}
}

export default new Func006();