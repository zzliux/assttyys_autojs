import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func208 implements IFuncOrigin {
	id = 208;
	name = '六道萤草_获得奖励统计';
	desc = '在获得奖励界面统计buff数量';
	operator: IFuncOperatorOrigin[] = [{
		// 选buff后的获得奖励确认，颜色比较近，可能会有误判断的情况
		desc: [1280, 720,
			[
				[center, 554, 142, 0xfede96],
				[center, 622, 143, 0xf7e691],
				[center, 745, 181, 0xffeeaa],
				[center, 583, 184, 0xf6e6b4],
				[center, 635, 192, 0xeacd7e],
			]
		],
		oper: [
			[right, 1280, 720, 913, 129, 1245, 648, 1500], // 点击区域
			[center, 1280, 720, 278, 251, 981, 504, - 1], // 找色区域
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (!thisScript.global.d6NextEvent && thisScript.oper({
			id: 208,
			name: '六道萤草_获得奖励界面判断',
			operator: [{
				desc: thisOperator[0].desc,
			}]
		})) {
			const bufNames = ['腐草为萤', '妖力化身', '六道净化', '萤火之光'];
			bufNames.forEach(bufName => {
				const points = thisScript.findMultiColorEx(`六道萤草_仿造_${bufName}`, thisOperator[0].oper[1]);
				// 新增加了buff
				if (thisScript.global.d6d[bufName][0] === 0 && points.length > 0) {
					thisScript.global.d6LoadBuff = true;
					console.log(points);
				}
				thisScript.global.d6d[bufName][0] += points.length;
			});
			// 新增加了buff且buff满了再装buff
			if (thisScript.global.d6LoadBuff) {
				let hasCnt = 0;
				['腐草为萤', '妖力化身', '六道净化', '萤火之光'].forEach(name => hasCnt += Math.min(thisScript.global.d6d[name][0], 1));
				if (hasCnt < 4) thisScript.global.d6LoadBuff = false;
			}
			if (thisScript.global.d6LoadBuff) {
				thisScript.myToast('准备装buff');
			}
			thisScript.myToast(`当前buff：${['腐草为萤', '妖力化身', '六道净化', '萤火之光'].map(name => name + ':' + thisScript.global.d6d[name][0]).join(', ')}`);

			thisScript.regionClick([thisOperator[0].oper[0]]);
			return true;
		}
		return false;
	}
}