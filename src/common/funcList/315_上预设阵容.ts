import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func315 implements IFuncOrigin {
	id = 315;
	name = '上预设阵容';
	desc = '准备前上固定预设';
	config = [{
		desc: '',
		config: [{
			name: 'groupNum',
			desc: '目标阵容的分组在第N个（输入数字，只支持7个以内）',
			type: 'text',
			default: '1',
			value: '1',
		}, {
			name: 'defaultNum',
			desc: '目标阵容在第N个（输入数字，只支持4个以内）',
			type: 'text',
			default: '1',
			value: '1',
		}],
	}];
	operator: IFuncOperatorOrigin[] = [{ // 0 准备的预设
		desc: [1280, 720,
			[
				[right, 1240, 702, 0xcead83],
				[right, 1182, 586, 0xf7e6c3],
				[center, 360, 699, 0x241818],
				[left, 32, 23, 0xdbb48b],
				[right, 1122, 698, 0xddbb8f],
				[center, 40, 678, 0xe08673],
				[left, 32, 23, 0xdbb48b]
			]
		],
		oper: [
			[center, 1280, 720, 42, 662, 74, 703, 1000],
		],
		retest: 1000
	}, { // 1  准备预设里界面
		desc: [
			1280, 720,
			[
				[left, 70, 226, 0x77522d],
				[center, 688, 277, 0x5a4536],
				[center, 580, 254, 0xdfc9b6],
				[center, 609, 256, 0xdfc9b6],
				[left, 81, 225, 0x241c1a],
			]
		]
	}, { // 2  预设组
		oper: [
			[center, 1280, 720, 33, 242, 162, 291, 63], // 分组第一，像素相隔63
		]
	}, { // 3  选预设
		oper: [
			[right, 1280, 720, 205, 241, 655, 340, 500], // 预设第一
			[right, 1280, 720, 197, 359, 655, 462, 500], // 预设第二
			[right, 1280, 720, 197, 477, 658, 584, 500], // 预设第三
			[right, 1280, 720, 197, 597, 660, 628, 500], // 预设第四
		]
	}, { // 4  出战
		oper: [
			[right, 1280, 720, 359, 648, 491, 683, 500], // 出战
		]
	}, { // 5  战斗界面
		desc: '战斗界面'
	}
	]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['315'];
		if (thisScript.global.shangyushe && thisScript.oper({
			name: '准备的预设',
			operator: [thisOperator[0]]
		})) {
			return true;
		}
		if (thisScript.oper({
			name: '准备预设里界面',
			operator: [thisOperator[1]]
		})) {
			if (!thisScript.global.preset_once_team_groupNum) {
				thisScript.global.preset_once_team_groupNum = Number(thisConf.groupNum);
			}
			if (!thisScript.global.preset_once_team_defaultNum) {
				thisScript.global.preset_once_team_defaultNum = Number(thisConf.defaultNum);
			}
			const oper = [[
				thisOperator[2].oper[0][0],
				thisOperator[2].oper[0][1] + (thisOperator[2].oper[0][4] * (thisScript.global.preset_once_team_groupNum - 1)),
				thisOperator[2].oper[0][2],
				thisOperator[2].oper[0][3] + (thisOperator[2].oper[0][4] * (thisScript.global.preset_once_team_groupNum - 1)),
				500
			]];
			thisScript.regionClick(oper);
			const opertwo = thisOperator[3].oper[(thisScript.global.preset_once_team_defaultNum - 1)];
			thisScript.regionClick([opertwo]);
			thisScript.regionClick(thisOperator[4].oper);
			thisScript.global.shangyushe = false;
			thisScript.global.preset_once_team_groupNum = null;
			thisScript.global.preset_once_team_defaultNum = null;
			return true;
		}
		return false;
	}
}