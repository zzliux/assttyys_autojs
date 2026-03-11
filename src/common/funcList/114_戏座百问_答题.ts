import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const left = 0;
const right = 2;

export class Func114 implements IFuncOrigin {
	id = 114;
	name = '戏座百问_答题';
	desc = '使用该功能需安装OCR扩展';
	operator: IFuncOperatorOrigin[] = [{
		// 开始
		desc: [1280, 720,
			[
				[right, 1200, 130, 0xf5e4ec],
				[left, 38, 40, 0xf6e7a7],
				[right, 940, 35, 0xd1c9da],
				[right, 1017, 36, 0xd0c9db],
			]
		],
		oper: [
			[right, 1280, 720, 871, 30, 1260, 121, 1000], // 题目区域
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
				[right, 928, 202, 0x84598d],
				[right, 1220, 202, 0x84598d],
			]
		]
	}, {
		// 选项2被选中
		desc: [1280, 720,
			[
				[right, 929, 312, 0x84598d],
				[right, 1220, 312, 0x84598d],
			]
		]
	}, {
		// 选项3被选中
		desc: [1280, 720,
			[
				[right, 928, 425, 0x84598d],
				[right, 1220, 425, 0x84598d],
			]
		]
	}, {
		// 选项4被选中
		desc: [1280, 720,
			[
				[right, 928, 534, 0x84598d],
				[right, 1220, 534, 0x84598d],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '戏座百问_答题',
			operator: [{ desc: thisOperator[0].desc }]
		})) {
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
			if (question == '入场中') return false;
			question = question.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '');
			const stdQuestion = thisScript.questionSearch(question);
			console.log(`搜索题库:${JSON.stringify(stdQuestion)}`);

			const toDetectAnsBmp = thisScript.helperBridge.helper.GetBitmap(...thisOperator[0].oper[1].slice(0, 4));
			console.time('ocr.detect.ans');
			const resultAns = thisScript.getOcrDetector().loadImage(toDetectAnsBmp);
			console.timeEnd('ocr.detect.ans');
			toDetectAnsBmp.recycle();
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

			if (!stdQuestion) {
				thisScript.myToast(`题目：${question} 未查找到标准题库`);
				const path = '/sdcard/assttyys/qaimage/' + question + '.png';
				if (files.exists(path)) return false;
				const bmp = thisScript.helperBridge.helper.GetBitmap();
				const img = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(bmp);
				files.ensureDir(path);
				img.saveTo(path);
				bmp.recycle();
				img.recycle();
				sleep(4000);
				return false;
			}

			// 结果列表小于等于1时则不点击，大概是因为结束展示正确答案时被识别了
			if (ansList.length <= 1) return false;
			const ansArr = stdQuestion.data.ans.split('|');
			let stdAns = null;
			for (const ans of ansArr) {
				const stdAns2 = thisScript.search(ansList, 'text', ans);
				if (stdAns && stdAns2 && stdAns2.similarity > stdAns.similarity && stdAns2.similarity > 0.8) { // 答案相似度要大于等于0.8
					stdAns = stdAns2;
				}
				if (!stdAns && stdAns2?.similarity > 0.8) stdAns = stdAns2;
			}

			// 如果stdAns为空，且ansList长度为3，说明正确答案没有识别到，找到没有识别到的选项区域，给它设为stdAns
			// 灶门炭治郎无法面不改色做的事情是 撒谎，正确答案刚好识别不到
			if (!stdAns && ansList.length === 3) {
				for (let j = 2; j <= 5; j++) {
					const ansY = (thisOperator[0].oper[j][1] + thisOperator[0].oper[j][3]) / 2
					let flag2 = true;
					for (let i = 0; i < ansList.length; i++) {
						if (ansY >= ansList[i].rect[1] && ansY <= ansList[i].rect[3]) {
							flag2 = false;
							break;
						}
					}
					if (flag2) {
						stdAns = {
							data: {
								text: '[不知道]',
								rect: thisOperator[0].oper[j],
							},
							similarity: 0
						}
						break;
					}
				}
			}

			if (!stdAns) {
				thisScript.myToast(`题目：${question} 未查找到答案`);
				const path = '/sdcard/assttyys/qaimage/' + question + '.png';
				if (files.exists(path)) return false;
				const bmp = thisScript.helperBridge.helper.GetBitmap();
				const img = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(bmp);
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
					name: `戏座百问_答题_判断第${i}个选项选中`,
					operator: [{ desc: thisOperator[i].desc }]
				})) {
					const ansY = thisOperator[i].desc[0][1];
					// 识别的答案已经选中
					if (ansY >= stdAns.data.rect[1] && ansY <= stdAns.data.rect[3]) {
						flag = false;
						break;
					}
				}
			}
			if (flag) {
				thisScript.myToast(`选择答案: ${stdAns.data.text}, 置信度为: ${(stdQuestion.similarity * stdAns.similarity).toFixed(4)}`);
				thisScript.regionClick([[...stdAns.data.rect, 500]]);
				return true;
			}
			return false;
		}
	}
}