import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func025 implements IFuncOrigin {
	id = 25;
	name = '探索_单人时退出';
	desc = '探索小怪界面时，若只有自己一个人在里面，则退出';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720, // 0 组队匹配上了的话就不做任何操作
			[
				[left, 46, 36, 0xf7e3a5],
				[left, 36, 570, 0x983254],
				[left, 29, 672, 0x615a77],
				[right, 1227, 30, 0xd3af84],
				[right, 1174, 33, 0xd7b287],
				[left, 64, 456, 0xf6f6e9],
				[left, 72, 444, 0x483726]
			]
		],
		oper: [
			[left, 1280, 720, 32, 45, 70, 86, 1000],
			[center, 1280, 720, 700, 386, 850, 418, 2000]
		]
	}, { // 1 探索界面
		desc: [1280, 720,
			[
				[left, 46, 36, 0xf7e3a5],
				[left, 36, 570, 0x983254],
				[left, 29, 672, 0x615a77],
				[right, 1227, 30, 0xd3af84],
				[right, 1174, 33, 0xd7b287],
			]
		]
	}, { // 2确认退出探索，该色组取点不太好，但考虑上面一步已执行过，暂时不修改，待后续慢设备反馈再考虑重新取点
		desc: [1280, 720,
			[
				[center, 340, 261, 0x472b18],
				[center, 938, 261, 0xe19398],
				[center, 560, 327, 0xffcf57],
				[center, 722, 326, 0xc46823],
				[center, 539, 401, 0xa56942],
				[center, 729, 404, 0x6b413e]]
		],
		oper: [
			[center, 1280, 720, 700, 386, 848, 420, 1000]
		]
	}, { // 3探索界面点击退出后确认窗口
		desc: [1280, 720,
			[
				[left, 45, 35, 0x666046],
				[left, 124, 29, 0x66624b],
				[right, 1046, 28, 0x585043],
				[right, 1105, 45, 0x544330],
				[center, 555, 405, 0xf4b25d],
				[right, 827, 405, 0xf4b25d],
				[right, 812, 660, 0x534d41]
			]
		],
		oper: [
			[center, 1280, 720, 713, 392, 836, 419, 500]
		]
	}, { // 4 新版_点击章节后界面
		desc: [1280, 720,
			[
				[left, 35, 30, 0xf7e5a7],
				[left, 111, 21, 0xf8edb5],
				[right, 848, 29, 0xd6c4a2],
				[right, 1105, 47, 0xcca273],
				[left, 304, 128, 0xa5361e],
				[left, 291, 144, 0x9e331b],
				[center, 323, 145, 0x9c3018],
			]
		],
		oper: [
			[center, 1280, 720, 25, 19, 56, 46, 500]
		]
	}]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '探索界面',
			operator: [{ desc: thisOperator[1].desc }]
		})) {
			if (!thisScript.oper({
				name: '是否组队',
				operator: [{ desc: thisOperator[0].desc }]
			})) {
				thisScript.regionClick(thisOperator[0].oper)
				return true;
			}
		}
		if (thisScript.oper({
			name: '探索_章节里退出到探索地图', // 有时会卡住没点到
			operator: [thisOperator[3], thisOperator[4]]
		})) {
			return true;
		}
	}
}