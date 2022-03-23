const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 99,
	name: '伊吹之擂_匹配',
	desc: '连续执行5次后未开始，脚本将自动停止',
	operator: [{
		// 一键装备
		desc: [1280,720,
			[[left,44,44,0xf5e5a3],
			[left,111,646,0xe2bd84],
			[right,1213,618,0x693028],
			[right,950,596,0xe3a19c],
			[right,1201,70,0xebe9e6],
			[center,760,333,0xa06545],
			[center,919,268,0x9d6645],
			[center,914,408,0xa06545]]
		],
		oper: [
			[right, 1280, 720, 900,576, 945,614, 1000]
		]
	}, {
		// 匹配
		desc: [1280,720,
			[[left,44,44,0xf5e5a3],
			[left,111,646,0xe2bd84],
			[right,1213,618,0x693028],
			[right,950,596,0xe3a19c],
			[right,1201,70,0xebe9e6]]
		],
		oper: [
			[right, 1280, 720, 1154,595, 1210,660, 1000]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let curCnt = 0;
		let maxCount = 5;
		while (thisScript.oper({
			name: '伊吹之擂_匹配',
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