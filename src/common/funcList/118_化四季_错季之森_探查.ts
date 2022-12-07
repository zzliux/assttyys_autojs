const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 118,
	name: '化四季_错季之森_探查',
	operator: [{
		desc: [1280, 720,
			[
				[right, 1060, 594, 0xd1bac0],
				[right, 1088, 638, 0xf0dbe3],
				[left, 81, 649, 0xc0e1d0],
				[left, 48, 42, 0xfde7ea],
				[left, 55, 60, 0xbb8696],
				[left, 340, 44, 0x2f4245],
			]
		],
		oper: [
			[right, 1280, 720, 1161, 566, 1232, 638, 3000]
		]
	}, {
		desc: [1280, 720,
			[
				[left, 49, 42, 0xfde9eb],
				[left, 50, 50, 0xeac3c9],
				[left, 241, 47, 0x3a4f51],
				[left, 342, 39, 0x283c40],
				[left, 81, 651, 0xc0e1d0],
				[right, 1227, 604, 0xdbc2ce],
				[right, 1237, 649, 0xe5c2ce],
			]
		],
		oper: [
			[right, 1280, 720, 1138, 593, 1239, 692, 3000]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let curCnt = 0;
		let maxCount = 3;
		while (thisScript.oper({
			id: 118,
			name: '化四季_错季之森_探查',
			operator: [thisOperator[0]]
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
		return thisScript.oper({
			id: 118,
			name: '化四季_错季之森_探查_挑战',
			operator: [thisOperator[1]]
		});
	}
}