import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

export class Func006 implements IFuncOrigin {
	id = 6;
	name = '御魂/御灵挑战';
	desc = '在御魂或者御灵的挑战界面时，点击挑战按钮，连续点击3次后未开始将自动停止脚本';
	config = [{
		desc: '',
		config: [{
			name: 'next_scheme',
			desc: '下一个方案',
			type: 'scheme',
			default: '__停止脚本__',
		}]
	}];
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[right, 1011, 595, 0xe3d7c2],
				[right, 1012, 668, 0xe7dac3],
				[right, 964, 591, 0x543825],
				[right, 1149, 585, 0x5b3d2d],
				[right, 1188, 588, 0xe2d5c1],
				[right, 1153, 679, 0x392418],
			]
		],
		oper: [
			[center, 1280, 720, 1148, 602, 1235, 663, 1000],
		]
	}, { // 1 御灵
		desc: [1280, 720,
			[
				[right, 1059, 583, 0x5d402e],
				[right, 1095, 592, 0xe1d6c0],
				[right, 1140, 586, 0x553b2c],
				[right, 1056, 673, 0x392318],
				[right, 1100, 676, 0xe3d9c2],
			]
		],
		oper: [
			[center, 1280, 720, 1055, 595, 1143, 669, 1000],
		]
	},];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		const thisconf = thisScript.scheme.config['6'];
		let curCnt = 0;
		const maxCount = 3;
		while (thisScript.oper({
			id: 6,
			name: '御魂/御灵挑战',
			operator: [thisOperator[0], thisOperator[1]]
		}, 0)) {
			curCnt++;
			thisScript.keepScreen(false);
			if (curCnt >= maxCount) {
				thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
				thisScript.rerun(thisconf.next_scheme);
				sleep(2000);
				return false;
			}
		}
		if (curCnt) {
			return true;
		}
		return false;
	}
}

export default new Func006();
