import { IFuncOrigin } from '@/interface/IFunc';
import { Script } from '@/system/script';

// This is test
// Removed unused constants if not needed
// const normal = -1; //定义常量
// const left = 0;
// const center = 1;
// const right = 2;

export class Func1002 implements IFuncOrigin {
	id = 1002;
	name = '自定义点击(配合通用结束切换方案)';
	desc = '点击config中定义的xy坐标范围';
	config = [{
		desc: '',
		config: [{
			name: 'xy',
			desc: '点击坐标范围，格式为：左上角x,左上角y,右下角x,右下角y，例：1134,590,1225,645',
			type: 'text',
			default: '1134,590,1225,645',
			value: null,
		}]
	}];
	operatorFunc(thisScript: Script): boolean {
		const thisConf = thisScript.scheme.config['1002'];
		const xy = String(thisConf.xy).split(',');
		if (xy.length !== 4) {
			thisScript.myToast('自定义坐标格式定义错误，请检查');
			return false;
		}
		const [inX1, inY1, inX2, inY2] = xy.map(Number);
		if (Number.isNaN(inX1) || Number.isNaN(inY1) || Number.isNaN(inX2) || Number.isNaN(inY2)) {
			thisScript.myToast('自定义坐标格式定义错误，请检查');
			return false;
		}
		const oper = [[inX1, inY1, inX2, inY2, 1000]];
		thisScript.regionClick(oper);
		let curCnt = 0;
		const maxCount = 1;
		curCnt++;
		if (curCnt >= maxCount) {
			thisScript.myToast(`点击${maxCount}次，脚本自动切换`);
			thisScript.stop();
			sleep(2000);
			return false;
		}
	}
}
