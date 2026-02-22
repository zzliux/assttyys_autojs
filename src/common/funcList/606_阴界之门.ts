import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func606 implements IFuncOrigin {
	id = 606;
	name = '阴门之门';
	operator: IFuncOperatorOrigin[] = [{	// 检测_是否为首领退治集结页
		desc: //  检测_阴门
			[
				1280, 720,
				[
					[right, 1106, 632, 0x180a28],
					[right, 1126, 625, 0x180a28],
					[right, 1161, 618, 0x84a5bd],
					[right, 1262, 650, 0x698bad],
					[left, 67, 38, 0xb1824d],
					[center, 713, 25, 0xe3d698],
				]
			],
		oper: [
			[right, 1280, 720, 1058, 601, 1268, 687, 1200],  // 点击挑战
			[left, 1280, 720, 27, 15, 78, 61, 1200], //  点击退出
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
	}, { // 阴界之门_寮神社未下滑位置
		desc: [1280, 720,
			[
				[left, 191, 450, 0xc2ae92],
				[left, 222, 501, 0xcc93e4],
				[left, 245, 510, 0xe0c5e6],
				[left, 282, 514, 0xdfc5e6],
				[left, 260, 545, 0xe78ac6],
			]
		],
		oper: [
			[center, 1280, 720, 176, 441, 351, 553, 1000],
		]
	}, { // 阴界之门_寮神社已下滑位置
		desc: [1280, 720,
			[
				[left, 220, 307, 0xcd94e5],
				[left, 245, 315, 0xe0c5e6],
				[left, 281, 321, 0xdfc4e5],
				[left, 238, 355, 0x99599b],
				[left, 272, 334, 0xedd4ef],
			]
		],
		oper: [
			[center, 1280, 720, 187, 244, 330, 358, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '检测_阴门挑战弹窗界面',
			operator: [thisOperator[0], thisOperator[1], thisOperator[4], thisOperator[5]]
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