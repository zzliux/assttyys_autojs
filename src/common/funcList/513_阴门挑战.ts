import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func513 implements IFuncOrigin {
	id = 513;
	name = '阴门_挑战';
	operator: IFuncOperatorOrigin[] = [{
		desc: //  检测_阴门
			[
				1280, 720,
				[
					[right, 1106, 632, 0x180a28],
					[right, 1126, 625, 0x180a28],
					[right, 1161, 618, 0x84a5bd],
					[right, 1262, 650, 0x698bad],
					[left, 72, 62, 0xb9c2da],
					[center, 713, 25, 0xe3d698],
				]
			],
		oper: [
			[right, 1280, 720, 1058, 601, 1268, 687, 1200],  // 点击挑战
		]
	},
	{
		desc: //  检测_阴门挑战弹窗界面
			[
				1280, 720,
				[
					[left, 125, 56, 0x493624],
					[right, 1124, 56, 0x493624],
					[right, 1208, 76, 0x632942],
					[right, 1194, 397, 0x180a28],
					[right, 1137, 634, 0xc1b7ac],
					[center, 330, 615, 0xf4b25f],
					[center, 454, 630, 0xf4b25f],
					[left, 130, 646, 0x9a8f83],
				]
			],
		oper: [
			[center, 1280, 720, 342, 596, 443, 638, 1200] //  点击挑战
		]
	},
	{
		desc: //  检测_是否为36轮挑战弹窗
			[
				1280, 720,
				[
					[center, 866, 245, 0xcbb59e],
					[center, 414, 244, 0xcbb49a],
					[center, 411, 474, 0xcbb49a],
					[center, 865, 469, 0xcbb59e],
					[center, 461, 420, 0xdf6851],
					[center, 698, 425, 0xf4b25f],
				]
			],
		oper: [
			[center, 1280, 720, 699, 415, 816, 447, 1200]   //  点击确认
		]
	},
	{
		desc: // 检测_已完成挑战弹窗
			[
				1280, 720,
				[
					[left, 125, 56, 0x493624],
					[right, 1124, 56, 0x493624],
					[right, 1208, 76, 0x632942],
					[right, 1194, 397, 0x180a28],
					[right, 1137, 634, 0xc1b7ac],
					[left, 130, 646, 0x9a8f83],
					[center, 342, 621, 0xc7bdb2],
					[center, 432, 617, 0xc7bdb2],
				]
			],
		oper: [
			[right, 1280, 720, 1168, 62, 1198, 88, 1200]  //  点击_关闭按钮
		]
	}, { // 寮神社点击狩猎战
		desc: [1280, 720,
			[
				[left, 191, 445, 0xc1ae93],
				[left, 251, 476, 0xf7ae94],
				[left, 277, 478, 0xd76364],
				[left, 289, 499, 0xbe6c78],
				[left, 233, 522, 0xe4caa1],
			]
		],
		oper: [
			[center, 1280, 720, 211, 435, 336, 559, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '检测_阴门挑战弹窗界面',
			operator: [thisOperator[0], thisOperator[1], thisOperator[4]]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_是否为36轮挑战弹窗',
			operator: [thisOperator[2]]
		})) {
			return true;
		}

		if (thisScript.oper({
			name: '检测_已完成挑战弹窗',
			operator: [thisOperator[3]]
		})) {
			thisScript.rerun('返回庭院');
			return true;
		}
		return false;
	}
}