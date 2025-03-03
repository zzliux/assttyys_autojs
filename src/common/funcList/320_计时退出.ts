import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';

// const normal = -1; //定义常量
const left = 0;
const center = 1;

export class Func320 implements IFuncOrigin {
	id = 320;
	name = '计时退出';
	desc: '进入战斗后开始计时，达到设置时间后退出';
	config = [{
		desc: '',
		config: [{
			name: 'time',
			desc: '时间（单位：秒）',
			type: 'number',
			default: 5,
		}]
	}]
	operator: IFuncOperatorOrigin[] = [{
		desc: '战斗界面',
		oper: [
			[left, 1280, 720, 22, 19, 52, 47, 1500], // 左上角返回
			[center, 1280, 720, 683, 401, 795, 442, 500], // 确认
		]
	}, { // 1 战字
		desc: [
			1280, 720,
			[
				[center, 528, 311, 0xe2ceba],
				[center, 593, 316, 0x030303],
				[center, 660, 332, 0x030303],
				[center, 749, 297, 0xe4d0b6],
				[center, 569, 523, 0x8e2214],
				[center, 709, 524, 0x881509],
				[center, 638, 472, 0xf3daaa],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisConf = thisScript.scheme.config['320'];
		if (!thisScript.global.finght_time && thisScript.oper({
			name: '战斗界面',
			operator: [{
				desc: thisOperator[0].desc
			}]
		})) {
			thisScript.global.finght_time = new Date().getTime() + Number(thisConf.time) * 1000;
		}
		if (thisScript.global.finght_time && new Date().getTime() > thisScript.global.finght_time) {
			thisScript.global.finght_time = null;
			return thisScript.oper({
				id: 320,
				name: '计时退出',
				operator: [thisOperator[0]]
			});
		}
		if (thisScript.oper({
			id: 320,
			name: '战字',
			operator: [{
				desc: thisOperator[1].desc
			}]
		})) {
			thisScript.global.finght_time = new Date().getTime() + Number(thisConf.time) * 1000;
		}
		return false;
	}
}