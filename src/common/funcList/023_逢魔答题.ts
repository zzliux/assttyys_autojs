import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
// const normal = -1; //定义常量
// const left = 0;
const center = 1;
// const right = 2;

export class Func023 implements IFuncOrigin {
	id = 23;
	name = '逢魔答题';
	desc = '逢魔密信自动答题，需要安装OCR扩展';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[center, 456, 96, 0xa72c01],
				[center, 692, 90, 0xddcdc3],
				[center, 871, 63, 0xeecccc],
				[center, 818, 610, 0xc4b3a3],
				[center, 723, 618, 0xcfbcad]
			]
		],
		oper: [
			[center, 1280, 720, 429, 163, 429 + 433, 163 + 72, 0], // 问题区域
			[center, 1280, 720, 426, 252, 426 + 446, 252 + 264, 0], // 答案区域
			[center, 1280, 720, 487, 276, 810, 320, 1200],	//	第一条答案区域
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '逢魔答题_界面判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			// let screenImg = images.captureScreen();
			// 识别问题
			const toDetectQuestionBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[0].slice(0, 4));
			console.time('ocr.detect.question');
			const resultQuestion = thisScript.getOcrDetector().loadImage(toDetectQuestionBmp);
			console.timeEnd('ocr.detect.question');
			toDetectQuestionBmp.recycle();
			let question = '';
			for (let i = 0; i < resultQuestion.length; i++) {
				question += resultQuestion[i].label;
			}
			console.log(`识别题目: ${question}`);

			const stdQuestion = thisScript.questionSearch(question.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, ''));
			console.log(`搜索题库:${JSON.stringify(stdQuestion)}`);

			const toDetectAnsBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[1].slice(0, 4));
			console.time('ocr.detect.ans');
			const resultAns = thisScript.getOcrDetector().loadImage(toDetectAnsBmp);
			console.timeEnd('ocr.detect.ans');
			toDetectAnsBmp.recycle();

			if (resultAns.length < 1) {
				const img = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(thisScript.helperBridge.helper.GetBitmap());
				const path = `/sdcard/assttyys/screenshot/fmmxdt_${new Date().getTime()}.png`;
				files.ensureDir(path);
				img.saveTo(path);
				img.recycle();
				media.scanFile(path);

				thisScript.myToast('题库中没找到对应的答案，默认选择第一个答案');
				thisScript.regionClick([thisOperator[0].oper[2]]);
				return true;
			}

			const ansList = [];
			for (let i = 0; i < resultAns.length; i++) {
				const row = resultAns[i];
				const frame = row.points;
				const rect = [
					thisOperator[0].oper[1][0] + frame[0].x,
					thisOperator[0].oper[1][1] + frame[0].y,
					thisOperator[0].oper[1][0] + frame[2].x,
					thisOperator[0].oper[1][1] + frame[2].y,
				];
				ansList.push({
					text: row.label,
					rect: rect
				});
			}
			console.log(`答案区域识别:${JSON.stringify(ansList)}`);
			if (stdQuestion) {
				const stdAns = thisScript.search(ansList, 'text', stdQuestion.data.ans);
				if (stdAns) {
					thisScript.myToast(`选择答案: ${stdAns.data.text}, 置信度为: ${(stdQuestion.similarity * stdAns.similarity).toFixed(4)}`);
					thisScript.regionClick([[...stdAns.data.rect, 1500]]);
					return true;
				}
			}

			thisScript.myToast('题库中没找到对应的答案，默认选择第一个答案');
			thisScript.regionClick([[...ansList[0].rect, 1500]]);
			return true;
		}
		return false;
	}
}