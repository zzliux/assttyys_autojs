import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func209 implements IFuncOrigin {
	id = 209;
	name = '六道萤草_神秘之屿_转换';
	desc = '转换界面将无用的buff转换为金币';
	operator: IFuncOperatorOrigin[] = [{
		// 转换界面
		desc: [
			1280, 720,
			[
				[left, 24, 41, 0xedf5f5],
				[left, 63, 649, 0x2f4b54],
				[right, 919, 685, 0x968976],
				[right, 1101, 694, 0x412915],
				[left, 264, 40, 0x583716],
			]
		],
		oper: [
			[left, 1280, 720, 1082, 647, 1222, 697, 500], // 转换成金币区域
			[left, 1280, 720, 890, 638, 1036, 695, 500], // 转换成其他的buff
			[center, 1280, 720, 674, 406, 842, 456, 800], // 确认
			[left, 1280, 720, 814, 162, 1195, 461, -1], // 总搜索区域
			[left, 1280, 720, 824, 176, 908, 260, 500], // 区域1
			[left, 1280, 720, 914, 176, 997, 261, 500], // 区域2
			[left, 1280, 720, 1004, 177, 1089, 261, 500], // 区域3
			[left, 1280, 720, 1095, 175, 1178, 259, 500], // 区域4
			[left, 1280, 720, 822, 265, 909, 350, 500], // 区域5
			[left, 1280, 720, 914, 266, 998, 350, 500], // 区域6
			[left, 1280, 720, 1004, 266, 1088, 349, 500], // 区域7
			[left, 1280, 720, 1093, 266, 1179, 351, 500], // 区域8
			[left, 1280, 720, 824, 356, 907, 441, 500], // 区域9
			[left, 1280, 720, 913, 355, 998, 440, 500], // 区域10
			[left, 1280, 720, 1003, 353, 1089, 443, 500], // 区域11
			[left, 1280, 720, 1093, 355, 1179, 445, 500], // 区域12
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (!thisScript.global.d6NextEvent && thisScript.oper({
			id: 209,
			name: '六道萤草_神秘之屿_转换界面判断',
			operator: [{
				desc: thisOperator[0].desc,
			}]
		})) {
			const bufNames = ['腐草为萤', '妖力化身', '六道净化', '萤火之光'];
			let buffPoints = [];
			bufNames.forEach(bufName => {
				const points = thisScript.findMultiColorEx(`六道萤草_仿造_${bufName}`, thisOperator[0].oper[3]);
				buffPoints = [...buffPoints, ...points];
			});
			console.log(buffPoints);
			for (let i = 4; i <= 15; i++) {
				let flag = true;
				for (let j = 0; j < buffPoints.length; j++) {
					if (inRegion(buffPoints[j], thisOperator[0].oper[i])) {
						flag = false;
						break;
					}
				}
				if (flag) {
					const toClick = [thisOperator[0].oper[i], thisOperator[0].oper[0], thisOperator[0].oper[2]]
					thisScript.helperBridge.regionClick(toClick, thisScript.scheme.commonConfig.afterClickDelayRandom);
					break;
				}
			}
			return true;
		}
		return false;
	}
}

// 判断一个点是否在一个区域内
function inRegion(point, region) {
	return point.x >= region[0] && point.x <= region[2] && point.y >= region[1] && point.y <= region[3]
}