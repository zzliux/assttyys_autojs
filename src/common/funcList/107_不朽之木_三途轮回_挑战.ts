const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 107,
	name: '不朽之木_三途轮回_挑战',
	desc: '连续执行5次后未开始，脚本将自动停止',
	operator: [{
		// 挑战
		desc: [1280, 720,
			[[left, 38, 42, 0xf5e7a9],
			[right, 1149, 568, 0xe3d9c3],
			[right, 1154, 620, 0xdfd2ba],
			[right, 1173, 208, 0xeedddd],
			[right, 1201, 546, 0x5a3929]]
		],
		oper: [
			[right, 1280, 720, 1119, 542, 1202, 632, 1000]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let curCnt = 0;
		let maxCount = 5;
		while (thisScript.oper({
			name: '不朽之木_三途轮回_挑战',
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