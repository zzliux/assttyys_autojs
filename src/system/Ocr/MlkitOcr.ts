import { similarity } from '@/common/tool';
import drawFloaty from '../drawFloaty';
import { IOcr, IOcrDetector, OcrResult } from './IOcr';

export class MlkitOcrDetector implements IOcrDetector {
    instance: any;
    constructor() {
        const MLKitOCR = $plugins.load('org.autojs.autojspro.plugin.mlkit.ocr');
        this.instance = new MLKitOCR();
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

class MlkitOcr implements IOcr {

    detector: MlkitOcrDetector;
    typeName: string = 'MlkitOcr';

    constructor() {
        this.detector = null;
    }

    /**
     * 获取ocr是否安装
     */
    isInstalled(): boolean {
        try { 
            $plugins.load('org.autojs.autojspro.plugin.mlkit.ocr');
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
        dialogs.confirm('提示', '大约消耗11Mb，是否下载OCR扩展？', function (cr) {
            if (cr) {
                try {
                    threads.start(function () {
                        try {
                            toastLog('下载中，请稍后...');
                            // const path = context.getExternalFilesDir(null).getAbsolutePath() + '/assttyus_ng/ocr';
                            const path = files.cwd() + '/plugins'
                            const url = 'https://assttyys.zzliux.cn/static/autojspro-mlkit-ocr-plugin-1.1.apk';
                            const r = http.get(url);
                            console.log(`下载路径${path}`);
                            files.ensureDir(path + '/autojspro-mlkit-ocr-plugin-1.1.apk');
                            if (files.exists(path + '/autojspro-mlkit-ocr-plugin-1.1.apk')) {
                                files.remove(path + '/autojspro-mlkit-ocr-plugin-1.1.apk');
                            }
                            // @ts-expect-error d.ts文件问题
                            files.writeBytes(path + '/org.autojs.autojspro.plugin.mlkit.ocr.apk', r.body.bytes());
                            if (mlkitOcr.isInstalled()) {
                                toastLog('安装完成');
                                option.successCallback();
                            } else {
                                toastLog('安装出错');
                                option.failCallback();
                            }
                            // if (isRoot) {
                            //     shell('install -t ' + path + '/autojspro-mlkit-ocr-plugin-1.1.apk', true);
                            // } else {
                                // app.viewFile(path + '/autojspro-mlkit-ocr-plugin-1.1.apk');
                            // }
                        } catch (e) {
                            toast(e);
                            console.error($debug.getStackTrace(e));
                            option.failCallback();
                        }
                    });
                } catch (e) {
                    toast(e);
                    console.error($debug.getStackTrace(e));
                    option.failCallback();
                }
            } else {
                option.failCallback();
            }
        });
    }

    prepare(): MlkitOcrDetector {
        try {
            this.detector = new MlkitOcrDetector()
            return this.detector;
        } catch (e) {
            console.error($debug.getStackTrace(e));
            return null;
        }
    }

    findText(getBmpFunc: Function, text: string, timeout: number, region: Array<number>, textMatchMode: string): Array<OcrResult> {
        return this.findTextByOcr(this.detector, getBmpFunc, text, timeout, region, textMatchMode);
    }

    findTextByOcr(detector: MlkitOcrDetector, getBmpFunc: Function, text: string, timeout: number, region: Array<number>, textMatchMode: string): Array<OcrResult> {
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
            
            const res = this.findTextByOcrResult(text, rs, textMatchMode);
            
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
        } else /*if (textMatchMode === '模糊') */{
            res = ocrResult.filter(item => {
                item.similar = similarity(item.label, text);
                return (item.similar as number) >= (similarityRatio || .5)
            });
            res.sort((a, b) => (b.similar || 0) - (a.similar || 0));
            toDraw = ocrResult.map(item => ({
                region: [item.points[0].x, item.points[0].y, item.points[2].x, item.points[2].y],
                color: item.similar as number >= (similarityRatio || .5) ? 'green' : 'red',
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

export const mlkitOcr = new MlkitOcr();
