import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
// const left = 0;
const center = 1;
const right = 2;

export class Func019 implements IFuncOrigin {
	id = 19;
	name = '协同对弈';
	desc = '进行协同对弈开始或结束等操作';
	operator: IFuncOperatorOrigin[] = [{ // 自动上阵
		desc: [
			1280, 720,
			[
				[right, 994, 656, 0x826952],
				[right, 1064, 654, 0x826952],
				[right, 1021, 638, 0xffffff],
				[right, 1041, 641, 0xfdfdfd],
				[right, 1012, 626, 0xf2f2f1],
				[right, 1053, 630, 0xfefefe],
				[right, 1159, 619, 0xe6d5b5],
			]
		],
		oper: [
			[center, 1280, 720, 993, 621, 1058, 677, 1000],
		]
	}, { // 1 取消自动_战
		desc: [
			1280, 720,
			[
				[right, 1006, 630, 0xfbfafa],
				[right, 1022, 633, 0xffffff],
				[right, 1041, 634, 0xfafaf9],
				[right, 1020, 640, 0xf2f1f1],
				[right, 1043, 642, 0xf8f7f7],
				[right, 1064, 645, 0x826952],
				[right, 993, 642, 0x826952],
				[right, 1159, 619, 0xe6d5b5],
			]
		],
		oper: [
			[center, 1280, 720, 1152, 594, 1243, 648, 1000],
		]
	}, { // 2 特写
		desc: [
			1280, 720,
			[
				[right, 1067, 632, 0x5eafbf],
				[right, 1093, 617, 0xfbecd1],
				[right, 1100, 633, 0x5aaeb9],
				[right, 1165, 633, 0x733841],
				[right, 1189, 643, 0x3e2829],
			]
		],
		oper: [
			[center, 1280, 720, 491, 530, 721, 658, 1000],
		]
	}, { // 3 胜利
		desc: [
			1280, 720,
			[
				[center, 481, 94, 0x831a11],
				[center, 504, 126, 0x8e1a11],
				[center, 751, 124, 0xb19968],
				[center, 907, 114, 0xdac395],
				[center, 756, 165, 0x89653e],
			]
		],
		oper: [
			[center, 1280, 720, 491, 530, 721, 658, 1000],
		]
	}, { // 4 失败
		desc: [
			1280, 720,
			[
				[center, 470, 83, 0x514a5b],
				[center, 451, 120, 0x5a5164],
				[center, 499, 124, 0x5e5468],
				[center, 727, 108, 0xb5aea0],
				[center, 921, 115, 0xa79e8f],
				[center, 851, 164, 0x756a5c],
				[center, 781, 189, 0x62574a],
			]
		],
		oper: [
			[center, 1280, 720, 491, 530, 721, 658, 1000],
		]
	}, { // 5 番胜
		desc: [
			1280, 720,
			[
				[center, 521, 345, 0x671915],
				[center, 781, 352, 0xa2372c],
				[center, 497, 271, 0x9e9958],
				[center, 822, 284, 0xdd5440],
				[center, 521, 385, 0xc73527],
			]
		],
		oper: [
			[center, 1280, 720, 491, 530, 721, 658, 1000],
		]
	}, { // 6 开始前
		desc: [
			1280, 720,
			[
				[center, 778, 630, 0xa27c67],
				[center, 882, 637, 0xc8a77b],
				[right, 979, 650, 0x977461],
				[right, 1080, 641, 0xebd1a0],
				[right, 1169, 617, 0xe7d8bb],
			]
		]
	}]
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '协同对弈_界面判断',
			operator: [thisOperator[0], thisOperator[2], thisOperator[3], thisOperator[4], thisOperator[5]]
		})) {
			return true;
		}
		let curCnt = 0;
		const maxCount = 3;
		while (thisScript.oper({
			id: 19,
			name: '协同对弈_开始',
			operator: [thisOperator[6], thisOperator[1]]
		})) {
			curCnt++;
			thisScript.keepScreen(false);
			if (curCnt >= maxCount) {
				thisScript.myToast('开始对弈前画面，脚本自动停止');
				sleep(2000);
				thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。` });
				thisScript.stop();
				sleep(2000);
				return false;
			}
			sleep(1000);
		}
		return false;
	}
}