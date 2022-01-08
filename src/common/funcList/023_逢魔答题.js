const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 23,
	name: '逢魔答题',
	desc: '逢魔密信自动答题，需要安装OCR插件，已知问题：答案为单字或单数字时无法识别',
	operator: [{
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
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '逢魔答题_界面判断',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			let screenImg = images.captureScreen();
			// 识别问题
			let toDetectQuestionBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[0].slice(0, 4));
			console.time('ocr.detect.question');
			let resultQuestion = thisScript.getOcr().detect(toDetectQuestionBmp, 1);
			console.timeEnd('ocr.detect.question');
			toDetectQuestionBmp.recycle();
			let question = '';
			for (let i = 0, len = resultQuestion.size(); i < len; i++) {
				question += resultQuestion.get(i).text;
			}
			console.log(`识别题目: ${question}`);
			
			let stdQuestion = questionSearch(question);
			console.log(`搜索题库:${JSON.stringify(stdQuestion)}`);

			let toDetectAnsBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[1].slice(0, 4));
			console.time('ocr.detect.ans');
			let resultAns = thisScript.getOcr().detect(toDetectAnsBmp, 1);
			console.timeEnd('ocr.detect.ans');
			toDetectAnsBmp.recycle();
			let ansList = [];
			for (let i = 0, len = resultAns.size(); i < len; i++) {
				let row = resultAns.get(i);
				let frame = row.frame;
				let rect = [
					thisOperator[0].oper[1][0] + frame.get(0),
					thisOperator[0].oper[1][1] + frame.get(1),
					thisOperator[0].oper[1][0] + frame.get(4),
					thisOperator[0].oper[1][1] + frame.get(5)
				];
				ansList.push({
					text: row.text,
					rect: rect
				});
			}
			console.log(`答案区域识别:${JSON.stringify(ansList)}`);
			let stdAns = search(ansList, 'text', stdQuestion.data.ans);
			toastLog(`选择答案: ${stdAns.data.text}, 置信度为: ${(stdQuestion.similarity * stdAns.similarity).toFixed(4)}`);
			thisScript.helperBridge.regionClick([[...stdAns.data.rect, 1500]], thisScript.scheme.commonConfig.afterClickDelayRandom);
			return true;
		}
		return false;
	}
}