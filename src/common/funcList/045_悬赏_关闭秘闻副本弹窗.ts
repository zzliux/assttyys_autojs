import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func045 implements IFuncOrigin {
	id = 45;
	name = '悬赏_关闭秘闻副本弹窗';
	operator: IFuncOperatorOrigin[] = [
		// 秘闻副本关闭
		{
			desc: [1280, 720,
				[
					[right, 1082, 627, 0xdd5825],
					[right, 1182, 215, 0x754420],
					[right, 1181, 118, 0xeecccc],
					[center, 637, 48, 0x79582f],
					[center, 960, 81, 0x332317],
					[right, 1171, 607, 0x795128],
					[right, 1037, 608, 0xa57d44],
					[right, 1195, 325, 0xfff7c6]
				]
			],
			oper: [
				[left, 1280, 720, 1158, 98, 1193, 135, 1000],
			]
		},
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		// 由于阴阳师/脚本问题，有时候这个弹窗位置会有偏差/无法识别，所以无法使用多点比色进行弹窗确认
		let point = thisScript.findMultiColor('悬赏_识别秘闻界面') || null
		console.log(point, '悬赏_识别秘闻界面')
		if (point) {
			thisScript.helperBridge.regionClick([
				[1164, 98, 1196, 132, 1000]
			], thisScript.scheme.commonConfig.afterClickDelayRandom);
		} else {
			return false
		}
	}
}