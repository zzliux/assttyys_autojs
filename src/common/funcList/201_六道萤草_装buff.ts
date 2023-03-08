import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func201 implements InterfaceFuncOrigin {
	id = 201;
	name = '六道萤草_装buff';
	// desc: '腐草为萤-5级，妖力化身-2级，六道净化-1级，萤火之光-最好5级';
	operator: InterfaceFuncOperatorOrigin[] = [{
		// 事件
		desc: [1280, 720,
			[
				[left, 20, 43, 0xf0f6f7],
				[left, 252, 38, 0x583716],
				[left, 66, 649, 0x3d4f5c],
				[right, 1255, 584, 0x403a34],
				[left, 46, 656, 0xcdbb90],
			]
		],
		oper: [
			[left, 1280, 720, 29, 642, 82, 695, 500]
		]
	}, {
		// 技能装配界面
		desc: [1280, 720,
			[
				[left, 23, 40, 0xf0f9f9],
				[left, 251, 40, 0x583716],
				[center, 749, 655, 0x495c67],
				[center, 710, 662, 0x576972],
				[center, 744, 644, 0x3b4d59],
				[right, 1232, 28, 0x292025],
			]
		],
		oper: [
			[center, 1280, 720, 711, 643, 751, 684, 600], // 重置
			[center, 1280, 720, 682, 399, 800, 450, 600], // 确认
			[center, 1280, 720, 388, 587, 535, 633, 500], // 装备
			[left, 1280, 720, 0, 0, 893 - 843, 244 - 197, 300], // 技能大小
			[left, 1280, 720, 13, 17, 61, 63, 1000], // 左上角退出
		]
	}, {
		// 备战界面
		desc: [1280, 720,
			[
				[right, 1230, 30, 0x3a2b2d],
				[right, 1168, 621, 0xdbcbb2],
				[right, 1173, 594, 0x2c4250],
				[left, 26, 41, 0xeef6f6],
				[left, 252, 40, 0x583716],
				[right, 1107, 618, 0x354958],
			]
		],
		oper: [
			[center, 1280, 720, 1010, 475, 1035, 504, 500], // 更换buff的刷新按钮
		]
	}, {
		// boss
		desc: [1280, 720,
			[
				[left, 22, 41, 0xf0f8f8],
				[right, 1167, 644, 0x283949],
				[right, 888, 632, 0x3e505c],
				[right, 1007, 648, 0x405257],
				[left, 88, 575, 0x203141],
				[left, 203, 415, 0xe3cd84],
			]
		],
		oper: [
			[center, 1280, 720, 855, 630, 907, 685, 500], // boss界面的装备按钮
		]
	}, {
		// 点开了技能的装配界面
		desc: [1280, 720,
			[
				[left, 23, 40, 0xf0f9f9],
				[left, 251, 40, 0x583716],
				[center, 749, 655, 0x495c67],
				[center, 710, 662, 0x576972],
				[center, 744, 644, 0x3b4d59],
				[right, 1232, 28, 0x292025],
				[center, 398, 610, 0xffd595],
				[center, 518, 610, 0xffd494],
				[center, 495, 599, 0xfed684],
			]
		]
	}, {
		// 四个buff全装的备战界面
		desc: [1280, 720,
			[
				[right, 1230, 30, 0x3a2b2d],
				[right, 1168, 621, 0xdbcbb2],
				[right, 1173, 594, 0x2c4250],
				[left, 26, 41, 0xeef6f6],
				[left, 252, 40, 0x583716],
				[right, 1107, 618, 0x354958],
				[center, 894, 163, 0xe0ee83],
				[center, 883, 162, 0x5caa2f],
				[center, 978, 223, 0xffffff],
				[center, 994, 225, 0xffffa1],
				[center, 1025, 289, 0xb4c5fa],
				[center, 1047, 316, 0x08033f],
				[center, 1047, 378, 0x408400],
				[center, 1044, 400, 0x294808],
			]
		],
		oper: [
			[left, 1280, 720, 13, 17, 61, 63, 1000], // 左上角退出
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {

		// 事件
		if (thisScript.global.d6LoadBuff && thisScript.oper({
			id: 201,
			name: '六道萤草_装buff_事件界面',
			operator: [{
				desc: thisOperator[0].desc,
				retest: 800
			}]
		})) {
			thisScript.helperBridge.regionClick([thisOperator[0].oper[0]], thisScript.scheme.commonConfig.afterClickDelayRandom);
			thisScript.global.d6LoadBuff = false;
			return true;
		}

		// boss 必点一下装buff
		if (!thisScript.global.d6LoadedBuff && thisScript.oper({
			id: 201,
			name: '六道萤草_装buff_boss界面',
			operator: [{
				desc: thisOperator[3].desc,
				retest: 800
			}]
		})) {
			thisScript.helperBridge.regionClick([thisOperator[3].oper[0]], thisScript.scheme.commonConfig.afterClickDelayRandom);
			return true;
		}

		// buff如果都装上了就直接退出
		if (thisScript.oper({
			id: 201,
			name: '六道萤草_装buff_满buff',
			operator: [thisOperator[5]]
		})) {
			thisScript.global.d6LoadedBuff = true;
			return true;
		}

		if (thisScript.oper({
			name: '六道萤草_装buff_装配界面',
			operator: [{
				desc: thisOperator[1].desc,
				retest: 500,
			}]
		})) {
			// 先卸buff
			thisScript.helperBridge.regionClick([thisOperator[1].oper[0], thisOperator[1].oper[1]], thisScript.scheme.commonConfig.afterClickDelayRandom);

			// 再装buff
			const buffNames = ['腐草为萤', '妖力化身', '六道净化', '萤火之光'];
			let retestTimes = 0;
			for (let bufInd = 0; bufInd < buffNames.length; bufInd++) {
				const buffName = buffNames[bufInd];
				const p = thisScript.findMultiColor(`六道萤草_仿造_${buffName}`); // 用仿造的色组
				if (p) {
					thisScript.helperBridge.regionClick([[
						p.x, p.y, p.x + thisOperator[1].oper[3][2], p.y + thisOperator[1].oper[3][3], thisOperator[1].oper[3][4]
					]], thisScript.scheme.commonConfig.afterClickDelayRandom);
					// 有可能会没点到，没点到就再点一次
					if (thisScript.compareColorLoop(thisOperator[4].desc, 500)) {
						thisScript.helperBridge.regionClick([thisOperator[1].oper[2]], thisScript.scheme.commonConfig.afterClickDelayRandom);
					} else {
						bufInd--;
					}
					retestTimes = 0;
				} else if (retestTimes++ < 3) {
					// buff齐了的情况下可以作死的找
					thisScript.keepScreen(true); // 重新截下图，怕没到位就在上buff
					bufInd--;
				}
			}
			sleep(500);
			thisScript.helperBridge.regionClick([thisOperator[1].oper[4], thisOperator[1].oper[4]], thisScript.scheme.commonConfig.afterClickDelayRandom);
			sleep(500);
			thisScript.global.d6LoadedBuff = true;
			return true;
		}
		return thisScript.oper({
			id: 201,
			name: '六道萤草_装buff_备战界面',
			operator: [thisOperator[2]]
		});
	}
}