import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func109 implements InterfaceFuncOrigin {
	id = 109;
	name = '流火之擂_挑战';
	desc = '连续执行3次后未开始，脚本将自动停止';
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 挑战
		desc:[1280, 720,
			[
				[right, 703, 590, 0xa27b67],
				[right, 1150, 576, 0x272420],
				[right, 1142, 576, 0xe8d7af],
				[left, 42, 38, 0xf7e7ad],
				[left, 84, 620, 0xd6c5a2],
			]
		],
		oper: [
			[right, 1280, 720, 1149, 546, 1224, 613, 1000]
		]
	}];
	operatorFunc(thisScript, thisOperator) {
		let curCnt = 0;
		let maxCount = 3;
		while (thisScript.oper({
			name: '流火之擂_挑战',
			operator: thisOperator
		})) {
			curCnt++;
			thisScript.keepScreen();
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