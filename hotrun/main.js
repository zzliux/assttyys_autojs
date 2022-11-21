"ui";
//设置状态栏为透明
activity.getWindow().setStatusBarColor(android.graphics.Color.TRANSPARENT);
if (device.sdkInt >= 23) {
    activity.getWindow().getDecorView().setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
}
ui.layout(
    <frame>
        <vertical w="*" h="*" layout_gravity="center">
            <vertical h="*" gravity="center" >
                <img src="file://./res/logo.png" w="120" h="120" scaleType="fitXY"/>
                <horizontal gravity="center" margin="25">
                    <text id="loadingtext">加载中，请稍后</text>
                </horizontal>
            </vertical>
        </vertical>
    </frame>
);

let cnt = 0;
setInterval(function() {
    cnt = (cnt + 1) % 5;
    ui.loadingtext.text('加载中，请稍后' + (new Array(cnt + 1)).join('.'));
}, 400);

let path = context.getExternalFilesDir(null).getAbsolutePath() + '/assttyus_ng';
threads.start(function () {

    let packageName = context.packageName;
    if (false && packageName.match(/^org.autojs.autojs(pro)?$/)) {
        sleep(2000);
        // 在aj里面运行，表示为开发环境，运行路径为../dist/auto.js
        engines.execScriptFile(files.cwd() + '/../dist/auto.js', {
            path: files.cwd() + '/../'
        });
        setTimeout(function () {
            ui.finish();
        }, 1000);
    } else {
        let r = http.get('https://assttyys.zzliux.cn/static/assttyys_ng.zip', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36 Edg/91.0.864.59'
            }
        });
        files.ensureDir(path + '/assttyys_ng.zip');
        files.writeBytes(path + '/assttyys_ng.zip', r.body.bytes());
        if (files.exists(path + '/assttyys_ng')) {
            files.listDir(path + '/assttyys_ng', function (name) {
                return !/^plugins$/.test(name);
            }).forEach(fn => {
                if (files.isDir(path + '/assttyys_ng/' + fn)) {
                    files.removeDir(path + '/assttyys_ng/' + fn);
                } else {
                    files.remove(path + '/assttyys_ng/' + fn);
                }
            });
        }
        $zip.unzip(path + '/assttyys_ng.zip', path);
        files.remove(path + '/assttyys_ng.zip');

        engines.execScriptFile(path + '/assttyys_ng/dist/auto.js', {
            path: path + '/assttyys_ng'
        });
        setTimeout(function () {
            ui.finish();
        }, 1000);
    }
});




// log(images.getScreenCaptureOptions())
// requestScreenCapture()
// log(images.getScreenCaptureOptions())
// images.stopScreenCapture()
// log(images.getScreenCaptureOptions())
// requestScreenCapture({async: true});
// log(images.getScreenCaptureOptions())
// images.stopScreenCapture()
// log(images.getScreenCaptureOptions())