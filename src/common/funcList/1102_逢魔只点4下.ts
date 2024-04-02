import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1102 implements IFuncOrigin {
	id = 1102;
	name = '新号现世逢魔';
	desc = '只点4下';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[left, 19, 700, 0x3c3841],
				[left, 42, 46, 0xc3cbdf],
				[center, 754, 39, 0x583716],
				[center, 1181, 650, 0xffffff],
				[left, 43, 680, 0xc7957c],
				[left, 54, 676, 0x433b42]
			]
		],
		oper: [
			[right, 1280, 720, 1157, 616, 1202, 666, 5000], // 发现
			[right, 1280, 720, 1212, 217, 1250, 254, 1500], // 红蛋
		]
	}, { // 1 红蛋完成
		desc: [
			1280, 720,
			[
				[left, 41, 48, 0xc3cce0],
				[left, 52, 35, 0xc2cbe0],
				[right, 1227, 243, 0x5e5e5e],
				[right, 1228, 208, 0x757575],
			]
		],
		oper: [
			[center, 1280, 720, 28, 27, 74, 66, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {

		if (thisScript.oper({
			name: '现世逢魔_最后一次奖励',
			operator: [thisOperator[1]]
		})) {
			thisScript.shutDown['26'] = true;
			sleep(1000);
			return true;
		}
		if (thisScript.oper({
			name: '现世逢魔_界面判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			if (new Date().getHours() >= 22 || new Date().getHours() < 17) {
				thisScript.regionClick([thisOperator[1].oper[0]])
				thisScript.shutDown['26'] = true;
				sleep(1000);
				return true;
			}
			sleep(2000);
			for (let i = 0; i < 4; i++) {
				thisScript.oper({
					name: `现世逢魔_第${i + 1}次`,
					operator: [{
						oper: [thisOperator[0].oper[0]]
					}]
				})
			}
			thisScript.regionClick([thisOperator[0].oper[1]]);
			return true;
		}
	}
}