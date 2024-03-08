import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { OcrResult } from '@/system/Ocr/IOcr';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func134 implements IFuncOrigin {
	id = 101;
	name = '音动小街_集音';
	operator: IFuncOperatorOrigin[] = [{ // 0 音动小街挑战准备界面
		desc: [
			1280, 720,
			[
				[left, 47, 49, 0xf5e5a6],
				[left, 330, 37, 0x88a7b3],
				[left, 30, 621, 0x3b514e],
				[right, 1179, 601, 0xdbf5e8],
				[right, 1093, 37, 0xf2f2ef],
			]
		],
		oper: [
			[center, 1280, 720, 1127, 578, 1241, 691, 1000],
		],
		retest: 1000
	}, { // 1 音动小街挑战界面
		desc: [
			1280, 720,
			[
				[left, 46, 49, 0xf5e5a6],
				[center, 366, 74, 0x1e3437],
				[center, 403, 75, 0x20383c],
				[center, 984, 57, 0x264047],
				[right, 1082, 46, 0xe1a8a8],
			]
		],
		oper: [
			[center, 1280, 720, 153, 499, 1150, 608, 1000], // 数字大区域
		],

	}, { // 2 集音达成
		desc: [
			1280, 720,
			[
				[right, 1186, 652, 0x302318],
				[center, 376, 574, 0xffe993],
				[center, 349, 659, 0xa49982],
				[right, 1205, 121, 0xffffff],
				[left, 100, 58, 0x919c91],
				[left, 263, 602, 0x302418],
			]
		],
		oper: [
			[center, 1280, 720, 1013, 200, 1252, 510, 1000],
		]
	}, { // 3 集音选店长
		desc: [
			1280, 720,
			[
				[left, 45, 47, 0xf7ebad],
				[left, 267, 48, 0x593716],
				[left, 130, 605, 0x527c7e],
				[left, 338, 608, 0x313f45],
				[center, 1210, 586, 0xd9cfc0],
				[center, 1190, 102, 0x685546],
			]
		],
		oper: [
			[center, 1280, 720, 266, 296, 406, 440, 200],
			[center, 1280, 720, 547, 296, 668, 433, 200],
			[center, 1280, 720, 806, 290, 939, 434, 200],
			[center, 1280, 720, 1054, 291, 1133, 434, 200],
			[center, 1280, 720, 1132, 562, 1249, 679, 1000],
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {

		// 连续挑战未开始
		let curCnt = 0;
		const maxCount = 3;
		while (thisScript.oper({
			id: 101,
			name: '音动小街_集音_挑战',
			operator: [thisOperator[0]]
		})) {
			curCnt++;
			thisScript.keepScreen();
			if (curCnt >= maxCount) {
				thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
				thisScript.doPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
				thisScript.stop();
				sleep(2000);
				return true
			}
		}
		if (curCnt) {
			return true;
		}

		if (thisScript.oper({
			id: 101,
			name: '音动小街_集音_杂项',
			operator: [thisOperator[2]]
		})) {
			return true;
		}

		if (thisScript.oper({
			id: 101,
			name: '音动小街_集音_选人',
			operator: [{
				desc: thisOperator[3].desc,
				oper: [
					thisOperator[3].oper[0],
					thisOperator[3].oper[1],
					thisOperator[3].oper[2],
					thisOperator[3].oper[3],
				]
			}]
		})) {
			thisScript.regionSwipe(thisOperator[3].oper[2], thisOperator[3].oper[1], [500, 800]);
			thisScript.regionClick([thisOperator[3].oper[3], thisOperator[3].oper[4]]);
			return true;
		}

		if (thisScript.oper({
			name: '音动小街_挑战_箱子',
			operator: [{ desc: thisOperator[1].desc }]
		})) {
			const point = thisScript.findMultiColor('音动小街_挑战_箱子');
			if (point) {
				thisScript.regionClick([[point.x - 15, point.y - 15, point.x + 15, point.y + 15, 200]]);
				return true;
			}

			const yyzArr = thisScript.findMultiColorEx('音动小街_挑战_营业中');
			// const numResult = thisScript.findText('^\\d+$', 0, thisOperator[1].oper[0], '包含');
			const numResult = thisScript.findNum(0, thisOperator[1].oper[0]);
			let maxNumR: OcrResult = null;
			for (const numR of numResult) {
				const centerX = (numR.points[0].x + numR.points[2].x) / 2;
				let flag = true;
				for (const yyz of yyzArr) {
					if (centerX - 40 < yyz.x && centerX + 40 > yyz.x) {
						flag = false;
						break;
					}
				}
				if (flag) {
					if (!maxNumR || parseInt(maxNumR.label) < parseInt(numR.label)) {
						maxNumR = numR;
					}
				}
			}
			if (maxNumR) {
				thisScript.regionClick([[
					maxNumR.points[0].x,
					maxNumR.points[0].y + 80,
					maxNumR.points[2].x,
					maxNumR.points[2].y + 80,
					200
				]]);
				return true;
			}


			const point2 = thisScript.findMultiColor('音动小街_挑战_加号');
			if (point2) {
				thisScript.regionClick([[point2.x - 15, point2.y - 15, point2.x + 15, point2.y + 15, 200]]);
				return true;
			}
		}


		return false;
	}
}
