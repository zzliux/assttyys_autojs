import { search, questionSearch } from '@/common/tool';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
	id: 114,
	name: '梦旅竞速_答题',
	desc: '使用该功能需安装OCR扩展',
	operator: [{
		// 开始
		desc: [1280, 720,
			[
				[right, 1229, 130, 0xfdfafd],
				[left, 30, 45, 0xeff5fb],
				[left, 152, 34, 0xb0c3e9],
				[right, 854, 46, 0xd0c8d8],
				[right, 1017, 36, 0x646faf],
			]
		],
		oper: [
			[right, 1280, 720, 848, 48, 1237, 143, 1000], // 题目区域
			[right, 1280, 720, 947, 179, 1203, 556, 1000], // 答案区域
			[right, 1280, 720, 947, 179, 1203, 227, 1000], // 选项1区域
			[right, 1280, 720, 947, 290, 1203, 337, 1000], // 选项2区域
			[right, 1280, 720, 947, 402, 1203, 451, 1000], // 选项3区域
			[right, 1280, 720, 947, 513, 1203, 556, 1000], // 选项4区域
		]
	}, {
		// 选项1被选中
		desc: [1280, 720,
			[
				[right, 928, 202, 0xfff5ef],
				[right, 1222, 202, 0xfff3f7],
			]
		]
	}, {
		// 选项2被选中
		desc: [1280, 720,
			[
				[right, 929, 312, 0xfff5ef],
				[right, 1223, 312, 0xfff3f7],
			]
		]
	}, {
		// 选项3被选中
		desc: [1280, 720,
			[
				[right, 928, 425, 0xfff5ef],
				[right, 1222, 425, 0xfff3f7],
			]
		]
	}, {
		// 选项4被选中
		desc: [1280, 720,
			[
				[right, 928, 534, 0xfff5ef],
				[right, 1222, 534, 0xfff3f7],
			]
		]
	}],
	operatorFunc(thisScript, thisOperator) {
		if (thisScript.oper({
			name: '梦旅竞速_答题',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
			// 识别问题
			let toDetectQuestionBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[0].slice(0, 4));
			console.time('ocr.detect.question');
			let resultQuestion = thisScript.getOcr().loadImage(toDetectQuestionBmp, 1);
			console.timeEnd('ocr.detect.question');
			toDetectQuestionBmp.recycle();
			let question = '';
			for (let i = 0; i < resultQuestion.length; i++) {
				question += resultQuestion[i].label;
			}
			console.log(`识别题目: ${question}`);
			if (question == '入场中') return false;
			question = question.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '');
			let stdQuestion = questionSearch(question);
			console.log(`搜索题库:${JSON.stringify(stdQuestion)}`);

			let toDetectAnsBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[1].slice(0, 4));
			console.time('ocr.detect.ans');
			let resultAns = thisScript.getOcr().loadImage(toDetectAnsBmp, 1);
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
			let stdAns = search(ansList, 'text', stdQuestion.data.ans);
			if (!stdAns) {
				toastLog(`题目：${question} 未查找到答案`);
				let path = '/sdcard/assttyys/qaimage/' + question + '.png';
				if (files.exists(path)) return false;
				let bmp = thisScript.helperBridge.helper.GetBitmap();
				let img = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(bmp);
				files.ensureDir(path);
				img.saveTo(path);
				bmp.recycle();
				img.recycle();
				sleep(4000);
				return false;
			}
			// 如果答案已经被选中，那就不点了
			let flag = true;
			for (let i = 1; i <= 4; i++) {
				if (thisScript.oper({
					name: `梦旅竞速_答题_判断第${i}个选项选中`,
					operator: [{ desc: thisOperator[i].desc }]
				})) {
					let ansY = thisOperator[i].desc[0][1];
					// 识别的答案已经选中
					if (ansY >= stdAns.data.rect[1] && ansY <= stdAns.data.rect[3]) {
						flag = false;
						break;
					}
				}
			}
			if (flag) {
				toastLog(`选择答案: ${stdAns.data.text}, 置信度为: ${(stdQuestion.similarity * stdAns.similarity).toFixed(4)}`);
				thisScript.helperBridge.regionClick([[...stdAns.data.rect, 500]], thisScript.scheme.commonConfig.afterClickDelayRandom);
				return true;
			}
			return false;
		}
	}
}