import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
// const normal = -1; //定义常量
const left = 0;
// const center = 1;
const right = 2;

export class Func114 implements IFuncOrigin {
	id = 114;
	name = '烟花募集_答题';
	desc = '使用该功能需安装OCR扩展';
	operator: IFuncOperatorOrigin[] = [{
		// 烟花募集_答题界面
		desc: [1280, 720,
			[
				[right, 910, 28, 0xd2c9dc],
				[right, 1219, 24, 0xdacddc],
				[left, 38, 41, 0xf5e6a7],
				[left, 59, 41, 0x9b693d],
				[left, 92, 512, 0xffe6d3],
				[left, 109, 482, 0x2b355e],
			]
		],
		oper: [
			[right, 1280, 720, 905, 23, 1221, 135, 1000], // 题目区域
			[right, 1280, 720, 883, 161, 1248, 581, 1000], // 答案区域
			[right, 1280, 720, 904, 177, 1225, 230, 1000], // 选项1区域
			[right, 1280, 720, 904, 289, 1225, 339, 1000], // 选项2区域
			[right, 1280, 720, 904, 403, 1225, 454, 1000], // 选项3区域
			[right, 1280, 720, 904, 513, 1225, 566, 1000], // 选项4区域
		]
	}, {
		// 选项1被选中
		desc: [1280, 720,
			[
				[right, 933, 227, 0x6974ad],
				[right, 915, 202, 0x5e6399],
				[right, 1017, 226, 0x6672ab],
			]
		]
	}, {
		// 选项2被选中
		desc: [1280, 720,
			[
				[right, 943, 337, 0x6872ac],
				[right, 918, 315, 0x61659b],
				[right, 967, 337, 0x6872ab],
			]
		]
	}, {
		// 选项3被选中
		desc: [1280, 720,
			[
				[right, 951, 452, 0x6872ac],
				[right, 920, 429, 0x5e649a],
				[right, 980, 452, 0x6872ac],
			]
		]
	}, {
		// 选项4被选中
		desc: [1280, 720,
			[
				[right, 932, 562, 0x6873ad],
				[right, 913, 540, 0x5d649a],
				[right, 946, 562, 0x6772aa],
			]
		]
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			name: '烟花募集_答题',
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
				if (stdAns && stdAns2 && stdAns2.similarity > stdAns.similarity) {
					stdAns = stdAns2;
				}
				if (!stdAns) stdAns = stdAns2;
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
					name: `烟花募集_答题_判断第${i}个选项选中`,
					operator: [{ desc: thisOperator[i].desc }]
				})) {
					const ansY = thisOperator[i].desc[1][1];
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