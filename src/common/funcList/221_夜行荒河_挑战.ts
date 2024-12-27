import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func221 implements IFuncOrigin {
	id = 221;
	name = '夜行荒河_挑战';
	operator: IFuncOperatorOrigin[] = [{
		// 匹配
		desc: [1280, 720,
			[
				[right, 1201, 48, 0x725742],
				[right, 1203, 134, 0x745944],
				[left, 47, 46, 0xf5e4a2],
				[right, 1165, 561, 0xd7c6a4],
				[left, 356, 32, 0x282f57],
				[right, 1208, 230, 0x735843],
			]
		],
		oper: [
			[right, 1280, 720, 1119, 560, 1214, 646, 1500],
		]
	}, {
		// 锁魂罗网的“战”
		desc: [
			1280, 720,
			[
				[left, 38, 43, 0xf0f5fb],
				[left, 342, 38, 0x6a2125],
				[right, 1227, 78, 0xbabac4],
				[right, 1226, 609, 0xbfaaa6],
				[right, 1060, 633, 0xf4c6ce],
			]
		],
		oper: [
			[right, 1280, 720, 1148, 564, 1234, 659, 1500],
		]
	}, {
		// 结算
		desc: [1280, 720,
			[
				[left, 91, 200, 0x445566],
				[left, 677, 291, 0x697f74],
				[right, 1166, 621, 0x312819],
				[left, 104, 610, 0x27262c],
				[left, 35, 696, 0xbc4e4f],
				[center, 396, 679, 0x292931],
			]
		],
		oper: [
			[right, 1280, 720, 741, 92, 1166, 251, 1500],
		]
	}, {
		// 自动切手动
		desc: [1280, 720,
			[
				[right, 1102, 602, 0x000000],
				[right, 1116, 626, 0xf1dcb1],
				[right, 1182, 599, 0x000000],
				[right, 1226, 605, 0x000000],
				[right, 1224, 612, 0xe3b778],
				[right, 1187, 555, 0xe0bf96],
				[left, 73, 536, 0x826851],
				[left, 31, 39, 0xd7c5a2],
				[left, 63, 517, 0xffffff],
			]
		],
		oper: [
			[left, 1280, 720, 45, 502, 106, 566, 500],
		]
	}, {
		// 败
		desc: [1280, 720,
			[
				[center, 483, 253, 0x505879],
				[center, 560, 193, 0x5c6181],
				[center, 615, 199, 0x201e1c],
				[center, 674, 181, 0x474656],
				[center, 775, 256, 0x545c7d],
				[center, 804, 229, 0xc1c1b0],
			]
		],
		oper: [
			[center, 1280, 720, 132, 567, 1138, 682, 1000],
		]
	}, {
		// 败2
		desc: [
			1280, 720,
			[
				[center, 762, 277, 0xe1e3d7],
				[center, 780, 241, 0x5a6080],
				[center, 618, 187, 0x221e1d],
				[center, 502, 251, 0x5c6281],
				[center, 515, 296, 0xc1c2b0],
				[center, 918, 251, 0x2c3453],
			]
		],
		oper: [
			[center, 1280, 720, 132, 567, 1138, 682, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 221,
			name: '夜行荒河_挑战',
			operator: thisOperator.slice(2)
		})) {
			return true;
		}
		let curCnt = 0;
		const maxCount = 3;
		while (thisScript.oper({
			id: 221,
			name: '夜行荒河_挑战',
			operator: [thisOperator[0], thisOperator[1]]
		})) {
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
				thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				return false;
			}
		}
		if (curCnt) {
			return true;
		}
		return false;
	}
}
