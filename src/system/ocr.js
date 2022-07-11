export const ocr = {
    is64: /64$/.test(context.getApplicationInfo().nativeLibraryDir),

    /**
     * 获取ocr是否安装
     */
    isInstalled: function () {
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
    },

    /**
     * 安装
     */
    install: function (option) {
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
                            files.writeBytes(path + '/ocr_deps.zip', r.body.bytes());
                            $zip.unzip(path + '/ocr_deps.zip', path);
                            toastLog('下载完成');
                            files.remove(path + '/ocr_deps.zip');
                            option.successCallback();
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
    },

    prepare: function () {
        const path = context.getExternalFilesDir(null).getAbsolutePath() + '/assttyus_ng/ocr';
        runtime.loadDex(path + '/libs/YunxiOcr.dex');
        if (!files.exists(runtime.files.join(runtime.libraryDir, 'libc++_shared.so'))) {
            files.copy(path + '/libs/libc++_shared.so', runtime.files.join(runtime.libraryDir, 'libc++_shared.so'));
        }
        if (!files.exists(runtime.files.join(runtime.libraryDir, 'libedge-infer.so'))) {
            files.copy(path + '/libs/libedge-infer.so', runtime.files.join(runtime.libraryDir, 'libedge-infer.so'));
        }

        function detectOcr(path1, path2, path3) {
            var instance = new com.plugin.PaddleOCR.YunxiPlugin(context);
            var isLoad = instance.OnLoad()
            this.init = function (path1, path2, path3) {
                var result = instance.init(4, files.read(path1), files.path(path2), files.path(path3)); //设置模型文件路径
                if (result) {
                    return true;
                } else {
                    console.error(instance.getLastError());
                    return instance.getLastError(); //如果有错误可以用getLastError获取
                }
            }
            var InitResult = this.init(path1, path2, path3);
            this.loadImage = function (bitmap) {
                if (InitResult === true) {
                    var result = instance.ocr(bitmap, 0.7);
                    return JSON.parse(result);
                } else {
                    return '未初始化'
                }
            }
            this.Destroy = function () {
                instance.destroy();
            }
            events.on('exit', function (t) {
                instance.destroy(); //必须释放,否则下次无法init
            });
        }
        return new detectOcr(path + '/data/config.json', path + '/data/eng.traineddata', path + '/data/chi_sim.traineddata');
    },

    findText: function (where, myText, action) {
        let mypoint = android.graphics.Point()
        where.some(result => {
            if (result.label.search(myText) != -1) {
                pointArr = result.points
                mypoint.x = (pointArr[0].x + pointArr[1].x + pointArr[2].x + pointArr[3].x) / 4
                mypoint.y = (pointArr[0].y + pointArr[1].y + pointArr[2].y + pointArr[3].y) / 4
                return false
            }
        })
        if (action == 'click') {
            return click(mypoint.x, mypoint.y)
        }
        return mypoint
    }
}