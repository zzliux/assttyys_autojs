import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func043 implements IFuncOrigin {
	id = 43;
	name = '悬赏_点击前往任务副本';
	desc = '只会挑战能挑战副本或秘闻副本完成的任务，如任务推荐副本前两项没有挑战副本或秘闻副本选项则会取消追踪该任务。无法完成未揭晓谜底的猜谜任务';
	operator: IFuncOperatorOrigin[] = [{
		desc: [
			1280, 720,
			[
				[center, 466, 167, 0x8b6d60],
				[center, 719, 165, 0x8a6b5e],
				[center, 532, 195, 0x7d3030],
				[center, 589, 196, 0x8b3232],
				[center, 274, 556, 0x917265],
				[center, 198, 166, 0x957969],
			]
		],
		oper: [
			[left, 1280, 720, 0, 0, 38, 21, 4000],
		]
	}, {
		desc: [1280, 720,
			[
				[center, 384, 164, 0x957464],
				[right, 1002, 165, 0x927161],
				[center, 590, 195, 0x8a3131],
				[left, 182, 191, 0x4656da],
				[left, 194, 205, 0x3a4ab7]
			]
		],
		oper: [
			[left, 1280, 720, 176, 193, 193, 208, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '悬赏_发现地点弹窗',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			let unknownStory, challengeArr;
			unknownStory = thisScript.findMultiColor('悬赏_挑战字样') || null;
			// 如果有挑战副本
			if (unknownStory) {
				let oper = [
					[unknownStory.x + 440, unknownStory.y, unknownStory.x + thisOperator[0].oper[0][2] + 440, unknownStory.y + thisOperator[0].oper[0][3], 4000]
				];
				thisScript.regionClick(oper);
				thisScript.regionClick([[887, 514, 1004, 560, 1000]]);
				return true
				// 如果没有挑战副本就寻找秘闻副本
			} else if (!unknownStory) {
				challengeArr = thisScript.findMultiColorEx('悬赏_秘闻字样') || null;
				if (challengeArr.length) {
					const challenge = challengeArr.reduce((min, obj) => {
						return obj.y < min.y ? obj : min;
					});
					let oper = [
						[challenge.x + 440, challenge.y, challenge.x + thisOperator[0].oper[0][2] + 440, challenge.y + thisOperator[0].oper[0][3], 4000]
					];
					thisScript.regionClick(oper);
					thisScript.regionClick([[1055, 563, 1131, 642, 1000]]);
					return true
				} else {
					// 如果秘闻和挑战都没有就取消任务追踪
					if (thisScript.oper({
						name: '悬赏_取消任务追踪',
						operator: [thisOperator[1]]
					}) != null) {
						// 关闭任务弹窗
						thisScript.regionClick([[430, 633, 780, 698, 1000]]);
						return true
					} else {
						return false
					}
				}
			}
		}
		return false
	}
}