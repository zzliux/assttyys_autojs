import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func010 implements IFuncOrigin {
	id = 11;
	name = '结界_刷新按钮';
	desc = '个人突破时点击刷新按钮，应排在[9勋章点击]后';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280,720, // 刷新
			[[center,549,93,0x5a4130],
			[center,720,93,0x583716],
			[center,224,104,0x4a3525],
			[center,997,127,0x958c83],
			// [center,400,610,0xffac2c],
			[center,995,595,0xf4b25f],
			[center,646,97,0xf8f3e0]]
		],
		oper: [
			[center, 1280, 720, 970,573, 1130,621, 1500],
			[center, 1280, 720, 674,407, 839,457, 2000]
		]
	}]
}