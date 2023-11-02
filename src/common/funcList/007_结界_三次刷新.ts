import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

export class Func007 implements IFuncOrigin {
	id = 7;
	name = '结界_三次刷新';
	desc = '启用后会在打了三个结界后进行刷新，若CD中则等待CD后刷新';
	config = [{
		desc: '',
		config: [{
			name: 'switch_nineWin',
			desc: '无法九胜时才三次刷新',
			type: 'switch',
			default: false,
			value: null,
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: [
			// 0 CD
			1280, 720,
			[
				[center, 549, 93, 0x5a4130],
				[center, 720, 93, 0x583716],
				[center, 224, 104, 0x4a3525],
				[center, 997, 127, 0x958c83],
				[center, 400, 610, 0xfd9328],
				[center, 995, 595, 0xAEA69E],
				[center, 646, 97, 0xf8f3e0]
			]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 5000]
		]
	}, {  // 1 呱太 CD
		desc: [
			1280, 720,
			[
				[center, 549, 93, 0x5a4130],
				[center, 720, 93, 0x583716],
				[center, 224, 104, 0x4a3525],
				[center, 997, 127, 0x958c83],
				[center, 646, 97, 0xf8f3e0],
				[center, 350, 593, 0xcc7718],
				[center, 384, 593, 0x2d2824],
				[right, 972, 578, 0xb0a9a1],
				[right, 1126, 616, 0xb0a9a1],
			]
		],
		oper: [
			[center, 1280, 720, -1, -1, -1, -1, 30000]
		]
	}, { // 2 刷新
		desc: [1280, 720,
			[
				[center, 549, 93, 0x5a4130],
				[center, 720, 93, 0x583716],
				[center, 224, 104, 0x4a3525],
				[center, 997, 127, 0x958c83],
				[center, 995, 595, 0xf4b25f],
				[center, 646, 97, 0xf8f3e0],
				[center, 424, 584, 0xc86e16],
				[center, 472, 586, 0x232222]
			]
		],
		oper: [
			[center, 1280, 720, 970, 573, 1130, 621, 1500],
			[center, 1280, 720, 674, 407, 839, 457, 2000]
		]
	}, {	// 3 有呱太活动的刷新
		desc: [
			1280, 720,
			[
				[center, 549, 93, 0x5a4130],
				[center, 720, 93, 0x583716],
				[center, 224, 104, 0x4a3525],
				[center, 997, 127, 0x958c83],
				[center, 646, 97, 0xf8f3e0],
				[center, 350, 593, 0xcc7718],
				[center, 384, 593, 0x2d2824],
				[right, 976, 580, 0xf3b25e],
				[right, 1116, 614, 0xf3b25e],
			]
		],
		oper: [
			[center, 1280, 720, 970, 573, 1130, 621, 1500],
			[center, 1280, 720, 674, 407, 839, 457, 2000]
		]
	}, {
		// 4 突破界面
		desc: [
			1280, 720,
			[
				[center, 549, 93, 0x5a4130],
				[center, 720, 93, 0x583716],
				[center, 224, 104, 0x4a3525],
				[center, 997, 127, 0x958c83],
				[center, 646, 97, 0xf8f3e0],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '突破界面_判断',
			operator: [thisOperator[4]]
		})) {
			const thisconf = thisScript.scheme.config['7'];
			const switch_nineWin = thisconf?.switch_nineWin;
			if ((switch_nineWin && thisScript.findMultiColor('突破失败')) || !switch_nineWin) {
				return thisScript.oper({
					id: 7,
					name: '三次刷新',
					operator: [thisOperator[0], thisOperator[1], thisOperator[2], thisOperator[3]]
				});
			}
		}
		return false;
	}
}

export default new Func007();