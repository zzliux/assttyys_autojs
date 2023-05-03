import { similarity } from "@/common/tool";
import drawFloaty from "./drawFloaty";

export class OcrResult {
    confidence: number;
    label: string;
    rotation: number;
    points: Array<{x: number, y: number}>;
    similar?: number | false;
    constructor(confidence: number, label: string, rotation: number, points: Array<{x: number, y: number}>) {
        this.confidence = confidence;
        this.label = label;
        this.rotation = rotation;
        this.points = points;
    }
}

export class TomatoOcrDetector {
    instance: any;
    constructor() {
        const TomatoOcr = $plugins.load('com.tomato.ocr');
        this.instance = new TomatoOcr();
    }
    loadImage(bitmap: any): Array<OcrResult> {
        // const ajImg = com.stardust.autojs.core.image.ImageWrapper.ofBitmap(bitmap);
        console.time('ocr.detect');
        const resultOrigin = this.instance.ocrBitmap(bitmap);
        console.timeEnd('ocr.detect');
        console.log(JSON.stringify(resultOrigin));
        // ajImg.recycle();
        const result = resultOrigin.map(item => {
            return new OcrResult(item.score, item.words, item.rotation, [{
                // 左上
                x: item.location[0][0],
                y: item.location[0][1]
            }, {
                // 右上
                x: item.location[1][0],
                y: item.location[1][1]
            }, {
                // 右下
                x: item.location[2][0],
                y: item.location[2][1]
            }, {
                // 左下
                x: item.location[3][0],
                y: item.location[3][1]
            }]);
        });
        return result;
    }
}

class TomatoOcr {

    detector: TomatoOcrDetector;

    constructor() {
        this.detector = null;
    }

    /**
     * 获取ocr是否安装
     */
    isInstalled(): boolean {
        try { 
            $plugins.load('com.tomato.ocr');
        } catch (e) {
            console.error(e);
            return false;
        }
        return true;
    }

    /**
     * 安装
     * TODO
     */
    install(option: { failCallback: Function, successCallback: Function }): void {
        let self = this;
        if (app.autojs.versionCode < '9121400') {
            toastLog('软件版本过低，当前版本不支持ocr请安装新版');
            option.failCallback();
            return;
        }
        // TODO
    }

    prepare(): TomatoOcrDetector {
        try {
            this.detector = new TomatoOcrDetector()
            return this.detector;
        } catch (e) {
            console.error($debug.getStackTrace(e));
            return null;
        }
    }

    findText(getBmpFunc: Function, text: string, timeout: number, region: Array<number>, textMatchMode: string): Array<OcrResult> {
        return this.findTextByOcr(this.detector, getBmpFunc, text, timeout, region, textMatchMode);
    }

    findTextByOcr(detector: TomatoOcrDetector, getBmpFunc: Function, text: string, timeout: number, region: Array<number>, textMatchMode: string): Array<OcrResult> {
        const startTime = new Date().getTime();
        while (true) {
            let bmp = getBmpFunc();
            if (region) {
                let newBmp = android.graphics.Bitmap.createBitmap(bmp, region[0], region[1], region[2] - region[0], region[3] - region[1]);
                bmp.recycle();
                bmp = newBmp;
            }
            let rs = detector.loadImage(bmp);
            bmp.recycle()

            if (region) {
                rs.forEach(item => {
                    item.points.forEach(point => {
                        point.x += region[0];
                        point.y += region[1];
                    })
                });
            }
            
            let res = this.findTextByOcrResult(text, rs, textMatchMode);
            
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
            let reg = new RegExp(text);
            toDraw = ocrResult.map(item => ({
                region: [item.points[0].x, item.points[0].y, item.points[2].x, item.points[2].y],
                color: reg.test(item.label) ? 'green' : 'red',
                text: item.label + ':' + item.confidence
            }));
            res = ocrResult.filter(item => reg.test(item.label));
        } else /*if (textMatchMode === '模糊') */{
            toDraw = ocrResult.map(item => ({
                region: [item.points[0].x, item.points[0].y, item.points[2].x, item.points[2].y],
                color: item.similar as number >= (similarityRatio || .5) ? 'green' : 'red',
                text: item.label + ':' + item.confidence
            }));
            res = ocrResult.filter(item => {
                item.similar = similarity(item.label, text);
                return (item.similar as number) >= (similarityRatio || .5)
            });
            res.sort((a, b) => (b.similar || 0) - (a.similar || 0));
        }
        // 开了绘制有可能绘制内容也被ocr给识别了
        if (drawFloaty.instacne) {
            drawFloaty.draw(toDraw, 200);
        }
        return res;
    }
}

export const ocr = new TomatoOcr();
