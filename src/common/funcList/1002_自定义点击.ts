import { IFuncOrigin } from '@/interface/IFunc';
import { Script } from '@/system/script';

// Removed unused constants if not needed
// const normal = -1; //定义常量
// const left = 0;
// const center = 1;
// const right = 2;

export class Func1002 implements IFuncOrigin {
	id = 1002;
	name = '自定义点击';
	desc = '点击config中定义的xy坐标范围';
	config = [{
		desc: '',
		config: [{
			name: 'xy',
			desc: '点击坐标范围，格式为：左上角x,左上角y,右下角x,右下角y，例：1134,590,1225,645',
			type: 'text',
			default: '1134,590,1225,645',
			value: null,
		}, {
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '通用准备退出',
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
		for (let i = 0; i < 1; i++) {
			thisScript.regionClick(oper); // 执行一次点击
			sleep(1500);
		}
		thisScript.keepScreen();
		// 后面新增的配置，如果未定义的话默认值给true
		if (typeof thisConf.scheme_switch_enabled === 'undefined') {
			thisConf.scheme_switch_enabled = true;
		}
		if (thisConf.scheme_switch_enabled) {
			thisScript.rerun(thisConf.next_scheme);
			sleep(3000);
			return true;
		} else {
			thisScript.global.open_only_once = true;
			return true;
		}
	}
}