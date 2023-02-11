import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func1000 implements InterfaceFuncOrigin {
	id = 1000;
	name = '宴会';
	desc = '宴会_摆烂';
	operator: InterfaceFuncOperatorOrigin[] = [
		{	//	检测_宴会
			desc: [
				1280, 720,
				[
					[left, 40, 39, 0xfdeeb4],
					[right, 1127, 35, 0xd7af82],
					[right, 1181, 40, 0xcfa578],
					[right, 1243, 41, 0xcca174],
					[right, 1063, 21, 0xfa8c42],
					[left, 212, 106, 0x633f26],
					[left, 101, 474, 0xe5bc8b],
					[right, 1216, 645, 0xfefcf7],
				]
			],
			oper: [
				[left, 1280, 720, 19, 156, 98, 242, 1200],
			]
		}, {
			desc:
				[
					1280, 720,
					[
						[center, 330, 257, 0xf2d7ab],
						[center, 568, 257, 0xf2d7ab],
						[center, 806, 257, 0xf2d7a9],
						[center, 753, 129, 0x301c13],
						[left, 216, 711, 0x3e2d1c],
						[right, 1228, 687, 0x381c10],
						[right, 1170, 559, 0xe8d6ae],
					]
				]
		}, {	//	检测_寮会结束
			desc:
				[
					1280, 720,
					[
						[center, 590, 177, 0xe4b231],
						[center, 717, 166, 0xf1f1e6],
						[center, 652, 223, 0xe8a639],
						[left, 102, 200, 0xf3d9af],
						[left, 101, 446, 0xf3d8a5],
						[right, 1219, 639, 0xfffdf9],
						[right, 1057, 69, 0xf7dca9],
					]
				]
		}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '宴会_吃饭界面',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {

			let point1 = thisScript.findMultiColor('宴会_举高高');

			if (point1) {
				console.log(`查找举高高成功`);
				let oper = [[
					point1.x - 5,
					point1.y - 5,
					point1.x + 5,
					point1.y + 5,
					120
				]];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			}
			return false;
		}

		if (thisScript.oper({
			name: '宴会_结束',
			operator: [{
				desc: thisOperator[2].desc
			}]
		})) {
			if (thisScript.runtimeParams && thisScript.runtimeParams.liao_activity_state) {
				thisScript.runtimeParams.liao_activity_state['banquet'] = true;

				const next_scheme = '返回庭院';
				thisScript.setCurrentScheme(next_scheme as string, {
					next_scheme_name: '庭院进入寮每日活动',
					liao_activity_state: thisScript.runtimeParams.liao_activity_state
				});
				thisScript.myToast(`切换方案为[${next_scheme}]`);
				thisScript.rerun();
			}
			return false;
		}
		return false;
	}
}