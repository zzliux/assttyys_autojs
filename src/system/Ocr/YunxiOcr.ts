import { similarity } from "@/common/tool";
import drawFloaty from "../drawFloaty";
import { IOcr, IOcrDetector, OcrResult } from "./IOcr";

class YunxiOcrDetector implements IOcrDetector {
    instance = null;
    initResult: boolean = false;

    init(path1, path2, path3) {
        var result = this.instance.init(4, files.read(path1), files.path(path2), files.path(path3)); //设置模型文件路径
        if (result) {
            return true;
        } else {
            console.error(this.instance.getLastError());
            return false; // this.instance.getLastError(); //如果有错误可以用getLastError获取
        }
    }

    constructor(path1, path2, path3) {
        this.instance = new com.plugin.PaddleOCR.YunxiPlugin(context);
        var isLoad = this.instance.OnLoad();
        this.initResult = this.init(path1, path2, path3);
        console.log(`YunxiOcr Prepared: ${isLoad}`);
        events.on('exit', () => {
            this.instance.destroy(); //必须释放,否则下次无法init
        });
    }

    loadImage(bitmap) {
        if (this.initResult === true) {
            var result = this.instance.ocr(bitmap, 0.1);
            return JSON.parse(result);
        } else {
            return null;
        }
    }

    destroy() {
        this.instance.destroy();
    }
}

export class YunxiOcr implements IOcr {
    detector: YunxiOcrDetector;
    is64: boolean = /64$/.test(context.getApplicationInfo().nativeLibraryDir);
    typeName: string = 'YunxiOcr';

    /**
     * 获取ocr是否安装
     */
    isInstalled(): boolean {
        const path = context.getExternalFilesDir(null).getAbsolutePath() + '/assttyus_ng';
        const toCheckPaths = [
            path + '/ocr/libs/YunxiOcr.dex',
            path + '/ocr/libs/libc++_shared.so',
            path + '/ocr/libs/libedge-infer.so',
            path + '/ocr/data/config.json',
            path + '/ocr/data/eng.traineddata',
            path + '/ocr/data/chi_sim.traineddata',
        ];
        let flag = true
        for (let path of toCheckPaths) {
            if (!files.exists(path)) {
                console.error(`该文件不存在${path}`);
                flag = false;
            }
        }
        return flag;
    }

    /**
     * 安装
     */
    install(option) {
        let self = this;
        dialogs.confirm('提示', '大约消耗12Mb，是否下载OCR扩展？', function (cr) {
            if (cr) {
                try {
                    threads.start(function () {
                        try {
                            toastLog('下载中，请稍后...');
                            const path = context.getExternalFilesDir(null).getAbsolutePath() + '/assttyus_ng/ocr';
                            let url = 'https://assttyys.zzliux.cn/static/ocr_deps_64.zip';
                            if (!self.is64) {
                                url = 'https://assttyys.zzliux.cn/static/ocr_deps_32.zip';
                            }
                            const r = http.get(url);
                            console.log(`解压路径：${path}`);
                            files.ensureDir(path + '/ocr_deps.zip');
                            // @ts-ignore
                            files.writeBytes(path + '/ocr_deps.zip', r.body.bytes());
                            $zip.unzip(path + '/ocr_deps.zip', path);
                            toastLog('下载完成');
                            files.remove(path + '/ocr_deps.zip');
                            if (self.isInstalled()) {
                                option.successCallback();
                            } else {
                                option.failCallback();
                            }
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

    prepare() {
        const path = context.getExternalFilesDir(null).getAbsolutePath() + '/assttyus_ng/ocr';
        console.log(`YunxiOcr Path: ${path}`);
        runtime.loadDex(path + '/libs/YunxiOcr.dex');
        if (!files.exists(runtime.files.join(runtime.libraryDir, 'libc++_shared.so'))) {
            files.copy(path + '/libs/libc++_shared.so', runtime.files.join(runtime.libraryDir, 'libc++_shared.so'));
        }
        if (!files.exists(runtime.files.join(runtime.libraryDir, 'libedge-infer.so'))) {
            files.copy(path + '/libs/libedge-infer.so', runtime.files.join(runtime.libraryDir, 'libedge-infer.so'));
        }
        this.detector = new YunxiOcrDetector(path + '/data/config.json', path + '/data/eng.traineddata', path + '/data/chi_sim.traineddata');
        return this.detector;
    }

    findTextByOcr(detector: YunxiOcrDetector, getBmpFunc: Function, text: string, timeout: number, region: number[], textMatchMode: string) {
        const startTime = new Date().getTime();
        while (true) {
            console.time('ocr.detect');
            let bmp = getBmpFunc();
            if (region) {
                let newBmp = android.graphics.Bitmap.createBitmap(bmp, region[0], region[1], region[2] - region[0], region[3] - region[1]);
                bmp.recycle();
                bmp = newBmp;
            }
            let rs = detector.loadImage(bmp);
            bmp.recycle()
            console.timeEnd('ocr.detect');

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
                console.log('识别结果', JSON.stringify(rs));
                return res;
            } else if (new Date().getTime() - startTime > timeout) {
                return [];
            }
        }
    }

    findText(getBmpFunc: Function, text: string, timeout: number, region: number[], textMatchMode: string): OcrResult[] {
        return this.findTextByOcr(this.detector, getBmpFunc, text, timeout, region, textMatchMode);
    }

    findTextByOcrResult(text: string, ocrResult: OcrResult[], textMatchMode: string, similarityRatio?: number): OcrResult[] {
        let res = [];
        let toDraw = [];
        if (textMatchMode === '包含') {
            let reg = new RegExp(text);
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

export const yunxiOcr = new YunxiOcr();
