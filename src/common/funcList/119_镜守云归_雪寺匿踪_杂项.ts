import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func119 implements InterfaceFuncOrigin {
	id = 119;
	name = '镜守云归_雪寺匿踪_破魔伏诛_挑战';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[left, 44, 47, 0xf1dc9c],
				[left, 252, 46, 0x5a3716],
				[right, 1190, 575, 0xede5d4],
				[right, 1048, 582, 0xe0d2a7],
				[right, 947, 598, 0x422e2d],
			]
		],
		oper: [
			[right, 1280, 720, 1140, 563, 1222, 656, 1000]
		],
		retest: 1000,
	}, {
		desc: [1280, 720,
			[
				[center, 278, 180, 0x705a3c],
				[center, 319, 203, 0x191416],
				[center, 407, 181, 0x655137],
				[center, 427, 253, 0x332323],
				[center, 332, 208, 0x4d494c],
			]
		],
		oper: [
			[right, 1280, 720, 1076, 173, 1188, 561, 1000]
		]
	}, {
		desc: [1280, 720,
			[
				[right, 1198, 548, 0xeee6d3],
				[left, 41, 45, 0xf3dfa3],
				[left, 332, 37, 0x4b4741],
				[left, 194, 464, 0xcab390],
				[left, 63, 378, 0xdacaa1],
				[right, 1050, 563, 0xe0d2a7],
				[center, 969, 64, 0x121620],
			]
		],
		oper: [
			[right, 1280, 720, 1145, 534, 1229, 631, 1000]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		let curCnt = 0;
		let maxCount = 3;
		while (thisScript.oper({
			id: 119,
			name: '镜守云归_雪寺匿踪_破魔伏诛_挑战',
			operator: [thisOperator[0], thisOperator[2]],
		})) {
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
				thisScript.doOspPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(2000);
				return false;
			}
		}
		if (curCnt) {
			return true;
		}
		return thisScript.oper({
			id: 119,
			name: '镜守云归_雪寺匿踪_破魔伏诛_挑战_挑战',
			operator: [thisOperator[1]]
		});
	}
}