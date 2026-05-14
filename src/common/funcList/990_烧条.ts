import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func990 implements IFuncOrigin {
	id = 990;
	name = '烧条';
	desc = '只针对斗技浪川阵容,放在最前面,悬赏后面(参照排序3,990,0,1,2)';
	operator: IFuncOperatorOrigin[] = [{ // 0 浪川皮肤
		desc: [1280, 720,
			[
				[right, 1210, 479, 0xef5252],
				[right, 1277, 479, 0xee3535],
				[right, 1242, 471, 0xdde3e6],
				[right, 1249, 482, 0xdde1e4],
				[right, 1251, 504, 0xdcdfe3],
				[right, 1224, 494, 0xc3cdd4],
			]
		]
	}, { // 1 浪川皮肤1
		desc: [1280, 720,
			[
				[right, 1210, 479, 0xef5252],
				[right, 1277, 479, 0xee3535],
				[right, 1247, 465, 0xfbf9f5],
				[right, 1242, 475, 0xfefbf8],
				[right, 1246, 493, 0xd7c3b5],
				[right, 1234, 503, 0xf9f7f6],
			]
		]
	}, { // 2 浪川皮肤2
		desc: [1280, 720,
			[
				[right, 1210, 479, 0xef5252],
				[right, 1277, 479, 0xee3535],
				[right, 1243, 481, 0xd1d6e1],
				[right, 1247, 474, 0xd4dae4],
				[right, 1251, 505, 0xcdd2dd],
				[right, 1230, 499, 0x65687c],
			]
		]
	}, { // 3 自动切换手动
		desc: [1280, 720,
			[
				[left, 43, 660, 0xe9c3a5],
				[left, 43, 665, 0xefc9ab],
				[left, 54, 665, 0xf0caac],
				[left, 54, 657, 0xf1cbad],
				[left, 48, 651, 0xdab499],
			]
		],
		oper: [
			[center, 1280, 720, 40, 636, 86, 690, 1000],
		]
	}, { // 4 倒计时五
		desc: [1280, 720,
			[
				[right, 1017, 489, 0xc6a828],
				[right, 1009, 487, 0xc6a524],
				[right, 1003, 488, 0xc6a621],
				[right, 1002, 506, 0xdec742],
				[right, 1002, 529, 0xffe77b],
				[right, 990, 532, 0xf2ed80],
				[right, 1016, 512, 0xe9dd6f],
			]
		],
		oper: [
			[center, 1280, 720, 44, 636, 81, 683, 1000],
			[center, 1280, 720, 44, 636, 81, 683, 1000],
		]
	}, { // 5 失败
		desc: [1280, 720,
			[
				[center, 470, 77, 0x534d61],
				[center, 508, 121, 0x63556b],
				[right, 730, 101, 0xbdb7a6],
				[right, 914, 116, 0xaca493],
				[right, 840, 148, 0x8a7f6e],
				[center, 498, 77, 0xaa9580],
			]
		],
	}, { // 6 胜利
		desc: [1280, 720,
			[
				[center, 481, 97, 0x7f1a10],
				[center, 453, 135, 0x9c1c13],
				[center, 503, 133, 0x9d1c11],
				[right, 755, 124, 0xbca579],
				[right, 920, 126, 0xc0a876],
			]
		],
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '浪川皮肤',
			operator: [
				thisOperator[0], thisOperator[1], thisOperator[2],]
		})) {
			thisScript.global.shaoTiao = true;
			sleep(1000);
			return true;
		}
		if (thisScript.global.shaoTiao) {
			if (thisScript.oper({
				name: '杂项',
				operator: [thisOperator[3], thisOperator[4]]
			})) {
				return true;
			}
			if (thisScript.oper({
				name: '杂项',
				operator: [thisOperator[5], thisOperator[6]]
			})) {
				thisScript.global.shaoTiao = false;
				return true;
			}
			return true;
		}
		return false;
	}
}
