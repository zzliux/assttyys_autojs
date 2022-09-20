const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 115,
	name: '千年之守_神武行_风暴试炼_挑战',
	desc: '连续执行3次后未开始，脚本将自动停止',
	operator: [{
		// 挑战
		desc:[1280, 720,
			[
				[left, 52, 57, 0xf3e4ad],
				[right, 1236, 513, 0xcec5a5],
				[right, 1177, 636, 0x1b1819],
				[right, 1208, 637, 0xedd49a],
				[right, 1030, 573, 0xddd5cd],
			]
		],
		oper: [
			[right, 1280, 720, 1142, 590, 1229, 672, 1000]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let curCnt = 0;
		let maxCount = 3;
		while (thisScript.oper({
			name: '千年之守_神武行_风暴试炼_挑战',
			operator: thisOperator
		})) {
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				toastLog(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
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