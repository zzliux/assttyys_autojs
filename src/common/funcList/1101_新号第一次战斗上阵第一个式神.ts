import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
export class Func518 implements IFuncOrigin {
	id = 1101;
	name = '新号探索战斗上阵第一个式神';
	desc = '新号探索战斗上阵第一个式神（真旅居式神）(用于小号)';
	operator: IFuncOperatorOrigin[] = [{ // 0 探索副本界面内_取消锁定阵容
		desc: [
			1280, 720,
			[
				[center, 891, 666, 0xa098c7],
				[center, 920, 666, 0x9b93ca],
				[center, 901, 664, 0x786243],
				[center, 909, 665, 0x725e43],
				[right, 1172, 30, 0xd8b28a],
				[right, 1230, 32, 0xd4ad83],
			]
		],
		oper: [
			[center, 1280, 720, 892, 654, 916, 679, 1000],
		]
	}, { // 1 准备界面_进入更换
		desc: [
			1280, 720,
			[
				[left, 48, 30, 0xd9b48b],
				[left, 108, 23, 0xd0a77a],
				[left, 177, 24, 0xd4ad83],
				[left, 41, 669, 0xdb6d60],
				[left, 77, 698, 0xdf806b],
				[right, 1080, 700, 0x231917],
			]
		],
		oper: [
			[center, 1280, 720, 418, 456, 559, 557, 500],
			[center, 1280, 720, 418, 456, 559, 557, 2000],
		]
	}, { // 2 更换内_滑动一号位
		desc: [
			1280, 720,
			[
				[left, 61, 645, 0x584cac],
				[left, 36, 527, 0xf8e8c4],
				[left, 38, 507, 0xe8d9b5],
				[left, 97, 660, 0x293984],
				[left, 274, 699, 0x4c2e20],
			]
		],
		oper: [
			[center, 1280, 720, 277, 552, 349, 629, 1000],
			[center, 1280, 720, 233, 352, 339, 434, 1000],
		]
	}, { // 3 锁定阵容
		desc: [
			1280, 720,
			[
				[center, 892, 666, 0x28221c],
				[center, 919, 666, 0x28211c],
				[right, 1173, 32, 0xd7b288],
				[right, 1233, 32, 0xd4ae84],
			]
		],
		oper: [
			[center, 1280, 720, 891, 658, 919, 678, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (!thisScript.global.nextChange && thisScript.oper({
			name: '探索副本界面内_取消锁定阵容',
			operator: [thisOperator[0], { desc: thisOperator[3].desc }]
		})) {
			thisScript.global.nextChange = true;
			return true;
		}
		if (thisScript.global.nextChange && thisScript.oper({
			name: '更换式神',
			operator: [thisOperator[1]]
		})) {
			return true;
		}
		if (thisScript.global.nextChange && thisScript.oper({
			name: '更换式神',
			operator: [{ desc: thisOperator[2].desc }]
		})) {
			thisScript.regionSwipe(thisOperator[2].oper[0], thisOperator[2].oper[1], [600, 800], 0, 500);
			return false;
		}
		if (thisScript.runTimes['2'] > 2 && thisScript.oper({
			name: '锁定阵容',
			operator: [thisOperator[3]]
		})) {
			log('guanbi')
			thisScript.shutDown['1101'] = true;
			return true;
		}
	}
}