const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 99,
	name: '赤月谜影_夜影诡谈挑战',
	desc: '连续执行5次后未开始，脚本将自动停止',
	operator: [{
		desc: [1280,720,
			[[left,42,43,0xf5e6a6],
			[left,41,148,0x211a20],
			[left,65,254,0xc1b8a0],
			[right,1179,542,0xefe8e6],
			[right,1082,590,0xc83333],
			[right,1181,323,0x17141b]]
		],
		oper: [
			[right, 1280, 720, 1102,543, 1185,633, 1000]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let curCnt = 0;
		let maxCount = 5;
		while (thisScript.oper({
			name: '赤月谜影_夜影诡谈挑战',
			operator: thisOperator
		})) {
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				toastLog(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
				thisScript.stop();
				sleep(1000);
				return false;
			}
		}
		if (curCnt) {
			return true;
		}
		return false;
	}
}