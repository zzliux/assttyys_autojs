"ui";
// todo 需要做一个热更新的动画
let packageName = context.packageName;
if (packageName.match(/^org.autojs.autojs(pro)?$/)) {
    // 在aj里面运行，表示为开发环境，运行路径为../dist/auto.js
    engines.execScriptFile(files.cwd() + '/../dist/auto.js', {
        path: files.cwd() + '/../'
    });
    exit();
}




// log(images.getScreenCaptureOptions())
// requestScreenCapture()
// log(images.getScreenCaptureOptions())
// images.stopScreenCapture()
// log(images.getScreenCaptureOptions())
// requestScreenCapture({async: true});
// log(images.getScreenCaptureOptions())
// images.stopScreenCapture()
// log(images.getScreenCaptureOptions())