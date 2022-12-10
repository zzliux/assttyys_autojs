import { Script } from '@/system/script';
import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func023 implements InterfaceFuncOrigin {
	id = 23;
	name = '逢魔答题';
	desc = '逢魔密信自动答题，需要安装OCR扩展';
	operator: InterfaceFuncOperatorOrigin[] = [{
		desc: [1280,720,
			[[center,456,96,0xa72c01],
			[center,692,90,0xddcdc3],
			[center,871,63,0xeecccc],
			[center,818,610,0xc4b3a3],
			[center,723,618,0xcfbcad]]
		],
		oper: [
			[center, 1280, 720, 429,163, 429 + 433, 163 + 72, 0], // 问题区域
			[center, 1280, 720, 426,252, 426 + 446, 252 + 264, 0], // 答案区域
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '逢魔答题_界面判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			// let screenImg = images.captureScreen();
			// 识别问题
			let toDetectQuestionBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[0].slice(0, 4));
			console.time('ocr.detect.question');
			let resultQuestion = thisScript.getOcr().loadImage(toDetectQuestionBmp);
			console.timeEnd('ocr.detect.question');
			toDetectQuestionBmp.recycle();
			let question = '';
			for (let i = 0; i < resultQuestion.length; i++) {
				question += resultQuestion[i].label;
			}
			console.log(`识别题目: ${question}`);
			
			let stdQuestion = thisScript.questionSearch(question.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, ''));
			console.log(`搜索题库:${JSON.stringify(stdQuestion)}`);

			let toDetectAnsBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[1].slice(0, 4));
			console.time('ocr.detect.ans');
			let resultAns = thisScript.getOcr().loadImage(toDetectAnsBmp);
			console.timeEnd('ocr.detect.ans');
			toDetectAnsBmp.recycle();
			let ansList = [];
			for (let i = 0; i < resultAns.length; i++) {
				let row = resultAns[i];
				let frame = row.points;
				let rect = [
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
				let stdAns = thisScript.search(ansList, 'text', stdQuestion.data.ans);
				if (stdAns) {
					thisScript.myToast(`选择答案: ${stdAns.data.text}, 置信度为: ${(stdQuestion.similarity * stdAns.similarity).toFixed(4)}`);
					thisScript.helperBridge.regionClick([[...stdAns.data.rect, 1500]], thisScript.scheme.commonConfig.afterClickDelayRandom);
					return true;
				}			
			}
			
			thisScript.myToast(`题库中没找到对应的答案，默认选择第一个答案`);
			thisScript.helperBridge.regionClick([[...ansList[0].rect, 1500]], thisScript.scheme.commonConfig.afterClickDelayRandom);
			return true;
		}
		return false;
	}
}