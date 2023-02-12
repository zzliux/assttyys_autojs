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
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 三类御魂
		desc: [1280, 720,
			[
				[left, 44, 43, 0xc2cbe3],
				[right, 1124, 47, 0xd8b188],
				[right, 1237, 47, 0xd3af84],
				[right, 1161, 608, 0xded2bb],
				[right, 1207, 671, 0x372015]
			]
		],
		oper: [
			[right, 1280, 720, 1116, 602, 1197, 683, 2000]
		]
	}, {
		// 御灵
		desc: [1280, 720,
			[
				[left, 37, 37, 0xc3cce1],
				[right, 1121, 47, 0xd7b389],
				[right, 1230, 46, 0xd3ae83],
				[right, 1106, 628, 0xe5d9c3],
				[right, 1188, 679, 0x371f16],
				[right, 1091, 663, 0x472c1f]
			]
		],
		oper: [
			[right, 1280, 720, 1104, 595, 1196, 681, 2000]
		]
	}, {
		// 觉醒
		desc: [1280, 720,
			[
				[left, 45, 45, 0xc2cbe3],
				[left, 250, 44, 0x583716],
				[right, 1230, 41, 0xd3ae84],
				[right, 1163, 602, 0xddd2b9],
				[left, 333, 62, 0xfbdfc5],
				[right, 1200, 675, 0x382015],
			]
		],
		oper: [
			[right, 1280, 720, 1108, 593, 1204, 688, 2000]
		]
	}, { // 检测_喂猫喂狗弹窗
		desc: [
			1280, 720,
			[
				[center, 942, 156, 0xdfd1c3],
				[right, 968, 530, 0x443323],
				[center, 916, 484, 0xebdfcf],
				[center, 344, 162, 0xe2d6c6],
				[center, 340, 554, 0xdfcdbe],
				[center, 386, 548, 0xebdfcf],
				[center, 864, 574, 0x252321],
			]
		],
		oper: [
			[center, 1280, 720, 920, 514, 974, 574, 1200] // 点击喂食
		]
	}, {	//	喂猫喂狗_获得奖励
		desc:
			[
				1280, 720,
				[
					[center, 526, 194, 0xfbf1ca],
					[center, 620, 196, 0xfbf4d0],
					[center, 872, 300, 0xb29b82],
					[center, 418, 288, 0xb69f86],
					[center, 464, 406, 0xc9b298],
				]
			],
		oper: [
			[center, 1280, 720, 346, 492, 920, 594, 1200]	// 点击空白处
		]
	}, {	// 喂猫喂狗_发现宝藏
		desc:
			[
				1280, 720,
				[
					[center, 428, 246, 0xc3ad92],
					[center, 886, 242, 0xa88f77],
					[center, 868, 450, 0xb49b81],
					[center, 914, 406, 0x8f693f],
					[center, 680, 190, 0xe9d8a0],
				]
			],
		oper: [
			[center, 1280, 720, 426, 562, 910, 630, 1200]	// 点击空白处
		]
	}, {
		// 战斗界面
		desc: [1280, 720,
			[
				[left, 34, 23, 0xdbb48b],
				[left, 106, 24, 0xcfa375],
				[right, 1270, 132, 0x48371f],
				[right, 1270, 700, 0x241919],
				[right, 1268, 80, 0x946430],
				[right, 1266, 545, 0x573f26],
			]
		],
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		let curCnt = 0;
		let maxCount = 3;

		if (thisScript.oper({
			name: '战斗界面检测',
			operator: [{
				desc: thisOperator[6].desc,
			}]
		})) {
			let point = thisScript.findMultiColor('御魂挑战_喂猫喂狗');
	
			if (point) {
				console.log(`查找御魂挑战_喂猫喂狗成功`);
				let oper = [[
					point.x - 5,
					point.y - 5,
					point.x + 5,
					point.y + 5,
					1200
				]];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			}
		}

		if (thisScript.oper({
			id: 6,
			name: '检测喂猫喂狗',
			operator: [thisOperator[3], thisOperator[4], thisOperator[5]]
		})) {
			return true;
		}

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