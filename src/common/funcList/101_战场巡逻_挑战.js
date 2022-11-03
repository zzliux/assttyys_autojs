import { myToast, doOspPush } from '@/common/toolAuto';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 101,
	name: '战场巡逻_挑战',
	desc: '连续执行5次后未开始，脚本将自动停止',
	operator: [{
		// 开始巡逻
		desc: [1280,720,
			[[right,1134,614,0xdbd5d3],
			[right,888,680,0x646464],
			[right,882,670,0x646464],
			[right,898,576,0xd9ccd4],
			[right,1021,570,0xcec6c6],
			[center,404,682,0x765a38]]
		],
		oper: [
			[right, 1280, 720, 1127,572, 1217,658, 1000]
		]
	}, {
		// 挑战
		desc: [1280,720,
			[[right,912,674,0x646464],
			[right,1160,656,0xd4d0ce],
			[right,1183,614,0x0c0c0c],
			[right,1210,610,0xd8d0d0],
			[right,1173,462,0xf2f1ea],
			[right,1040,135,0xe3e1f3],
			[left,61,680,0x715b3c]]
		],
		oper: [
			[right, 1280, 720, 1122,578, 1217,663, 1000]
		]
	}, {
		// 二阶段蛇魔挑战
		desc: [1280,720,
			[[right,1181,591,0xdbd5d3],
			[center,559,602,0x65523a],
			// [center,734,635,0x615037],
			[right,1071,477,0xe6dfdf],
			[right,1103,492,0x292945]]
		],
		oper: [
			[right, 1280, 720, 1146,586, 1229,679, 1000]
		]
	}, {
		desc: [1280,720,
			[[left,91,641,0xd6cdac],
			[left,42,47,0xf1f1f9],
			[left,225,645,0xbdb08f],
			[right,849,667,0x646464],
			[right,1187,610,0xdad6d3],
			[right,993,566,0xf5f3ed],
			[right,1183,303,0xb48b20]]
		],
		oper: [
			[right, 1280, 720, 1106,575, 1202,664, 1000]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		let curCnt = 0;
		let maxCount = 5;
		while (thisScript.oper({
			name: '战场巡逻_挑战',
			operator: thisOperator
		})) {
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				toastLog(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
				doOspPush(thisScript, { text: '脚本已停止，请查看。', before() { myToast('脚本即将停止，正在上传数据'); } });
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