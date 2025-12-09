import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func099 implements IFuncOrigin {
	id = 99;
	name = '伊吹之擂_匹配';
	desc = '连续执行5次后未开始，脚本将自动停止';
	operator: IFuncOperatorOrigin[] = [{
		// 一键装备
		desc: [1280, 720,
			[
				[left, 44, 44, 0xf5e5a3],
				[left, 111, 646, 0xe2bd84],
				[right, 1213, 618, 0x693028],
				[right, 950, 596, 0xe3a19c],
				[right, 1201, 70, 0xebe9e6],
				[center, 760, 333, 0xa06545],
				[center, 919, 268, 0x9d6645],
				[center, 914, 408, 0xa06545]]
		],
		oper: [
			[right, 1280, 720, 900, 576, 945, 614, 1000]
		]
	}, {
		// 匹配
		desc: [1280, 720,
			[
				[left, 44, 44, 0xf5e5a3],
				[left, 111, 646, 0xe2bd84],
				[right, 1213, 618, 0x693028],
				[right, 950, 596, 0xe3a19c],
				[right, 1201, 70, 0xebe9e6]]
		],
		oper: [
			[right, 1280, 720, 1154, 595, 1210, 660, 1000]
		]
	}, {
		// 开启
		desc: [1280, 720,
			[
				[right, 1213, 620, 0x662e28],
				[left, 43, 38, 0xf5e5a8],
				[left, 201, 234, 0xe8d6be],
				[left, 216, 194, 0x502f2f],
				[center, 1147, 64, 0x97bae7],
				[right, 1232, 688, 0xd8a757],
			]
		],
		oper: [
			[right, 1280, 720, 1147, 600, 1207, 668, 1000]
		]
	}, {
		// 结果继续
		desc: [1280, 720,
			[
				[center, 326, 599, 0xd59c84],
				[center, 663, 599, 0xdca38a],
				[center, 966, 596, 0xdba58e],
				[right, 1180, 606, 0xc49b72],
				[left, 46, 42, 0x9c8f68]
			]
		],
		oper: [
			[right, 1280, 720, 1148, 610, 1195, 670, 1000]
		]
	}, {
		// 结果继续2
		desc: [1280, 720,
			[
				[left, 43, 41, 0x9d916d],
				[center, 530, 43, 0x8b7769],
				[center, 526, 144, 0xf2e28f],
				[center, 774, 124, 0x844f44]
			]
		],
		oper: [
			[right, 1280, 720, 152, 640, 1088, 709, 1000]
		],
	}, {
		// 公布最终结果
		desc: [1280, 720,
			[
				[left, 308, 684, 0x24191d],
				[center, 941, 687, 0x24191e],
				[left, 174, 47, 0x3d342c],
				[center, 522, 34, 0xbb8d61],
				[center, 770, 35, 0xbb8a61],
				[right, 1252, 45, 0x746666],
			]
		],
		oper: [
			[right, 1280, 720, 67, 607, 1223, 685, 1000]
		]
	}, {
		// 排名
		desc: [1280, 720,
			[
				[right, 965, 652, 0x261b21],
				[left, 164, 72, 0x4b6079],
				[right, 1225, 21, 0x4b5c76],
				[right, 1198, 592, 0xebd992],
				[center, 817, 559, 0x332b33],
			]
		],
		oper: [
			[right, 1280, 720, 522, 510, 1066, 689, 1000]
		]
	}, { // 无奖励次数
		desc: [1280, 720,
			[
				[right, 1150, 607, 0xd6ca9c],
				[right, 1167, 615, 0xd7c7a1],
				[right, 1204, 638, 0xdfd1a6],
				[right, 1191, 662, 0xbda66e],
				[right, 1105, 680, 0xe6b35a],
				[right, 1148, 685, 0xd9a857],
				[right, 1195, 685, 0xba8f4f],
			]
		],
		oper: [
			[center, 1280, 720, 563, 146, 680, 223, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		let curCnt = 0;
		const maxCount = 5;
		while (thisScript.oper({
			name: '伊吹之擂_匹配',
			operator: thisOperator
		})) {
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
				thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
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
