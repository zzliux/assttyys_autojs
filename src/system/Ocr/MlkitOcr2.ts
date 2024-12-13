import { nlpSimilarity } from '@/common/toolAuto';
import drawFloaty from '../drawFloaty';
import { IOcr, IOcrDetector, OcrResult } from './IOcr';

export class MlkitOcrDetector2 implements IOcrDetector {
	instance: any;
	constructor() {
		const plg = $plugins.load('cn.zzliux.assttyys.plugin');
		this.instance = plg.ocr;
	}
	loadImage(bitmap: any): Array<OcrResult> {
		const ajImg = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(bitmap);
		console.time('ocr.detect');
		const resultOrigin = this.instance.detect(ajImg);
		console.timeEnd('ocr.detect');
		ajImg.recycle();
		const result = resultOrigin.map(item => {
			return new OcrResult(item.confidence, item.text, item.rotation, [{
				// 左上
				x: item.bounds.left,
				y: item.bounds.top
			}, {
				// 右上
				x: item.bounds.right,
				y: item.bounds.top
			}, {
				// 右下
				x: item.bounds.right,
				y: item.bounds.bottom
			}, {
				// 左下
				x: item.bounds.left,
				y: item.bounds.bottom
			}]);
		});
		console.log(JSON.stringify(result));
		return result;
	}
}

class MlkitOcr2 implements IOcr {

	detector: MlkitOcrDetector2;
	typeName: string = 'MlkitOcr';

	constructor() {
		this.detector = null;
	}

	/**
     * 获取ocr是否安装
     */
	isInstalled(): boolean {
		try {
			$plugins.load('cn.zzliux.assttyys.plugin');
		} catch (e) {
			console.error(e);
			return false;
		}
		return true;
	}

	/**
     * 安装
     */
	install(option: { failCallback: Function, successCallback: Function }): void {
		if (app.autojs.versionCode < '9121400') {
			toastLog('软件版本过低，当前版本不支持ocr请安装新版');
			option.failCallback();
			return;
		}
		if (this.isInstalled()) {
			option.successCallback();
			return;
		}
		dialogs.confirm('提示', '请根据CPU架构自行下载并安装OCR插件', function (cr: boolean) {
			if (cr) {
				$app.openUrl('https://github.com/zzliux/assttyys_autojs/releases');
			}
			option.failCallback();
		});
	}

	prepare(): MlkitOcrDetector2 {
		try {
			this.detector = new MlkitOcrDetector2()
			return this.detector;
		} catch (e) {
			console.error($debug.getStackTrace(e));
			return null;
		}
	}

	findText(getBmpFunc: Function, text: string, timeout: number, region: Array<number>, textMatchMode: string): Array<OcrResult> {
		return this.findTextByOcr(this.detector, getBmpFunc, text, timeout, region, textMatchMode);
	}

	findTextByOcr(detector: MlkitOcrDetector2, getBmpFunc: Function, text: string, timeout: number, region: Array<number>, textMatchMode: string): Array<OcrResult> {
		const startTime = new Date().getTime();
		// eslint-disable-next-line no-constant-condition
		while (true) {
			let bmp = getBmpFunc();
			if (region) {
				const newBmp = android.graphics.Bitmap.createBitmap(bmp, region[0], region[1], region[2] - region[0], region[3] - region[1]);
				bmp.recycle();
				bmp = newBmp;
			}
			const rs = detector.loadImage(bmp);
			bmp.recycle()

			if (region) {
				rs.forEach(item => {
					item.points.forEach(point => {
						point.x += region[0];
						point.y += region[1];
					})
				});
			}
			const [mode, simStr] = (textMatchMode || '').split('|');
			let sim = 0.7;
			if (sim) sim = Number(simStr);
			const res = this.findTextByOcrResult(text, rs, mode, sim);

			if (res.length > 0) {
				// console.log('识别结果', JSON.stringify(rs));
				return res;
			} else if (new Date().getTime() - startTime > timeout) {
				return [];
			}
		}
	}

	findTextByOcrResult (text: string, ocrResult: Array<OcrResult>, textMatchMode: string, similarityRatio?: number): Array<OcrResult> {
		let res = [];
		let toDraw = [];
		if (textMatchMode === '包含') {
			const reg = new RegExp(text);
			res = ocrResult.filter(item => reg.test(item.label));
			toDraw = ocrResult.map(item => ({
				region: [item.points[0].x, item.points[0].y, item.points[2].x, item.points[2].y],
				color: reg.test(item.label) ? 'green' : 'red',
				text: item.label + ':' + item.confidence
			}));
		} else /* if (textMatchMode === '模糊') */{
			res = ocrResult.filter(item => {
				item.similar = nlpSimilarity(item.label, text);
				return (item.similar as number) >= (similarityRatio || .7)
			});
			res.sort((a, b) => (b.similar || 0) - (a.similar || 0));
			toDraw = ocrResult.map(item => ({
				region: [item.points[0].x, item.points[0].y, item.points[2].x, item.points[2].y],
				color: item.similar as number >= (similarityRatio || .7) ? 'green' : 'red',
				text: item.label + ':' + item.confidence
			}));
		}
		// 开了绘制有可能绘制内容也被ocr给识别了
		if (drawFloaty.instacne) {
			drawFloaty.draw(toDraw, 200);
		}
		return res;
	}
}

export const mlkitOcr2 = new MlkitOcr2();
