runtime.unloadDex('./assets/lib/scriptlib.dex');
runtime.loadDex('./assets/lib/scriptlib.dex');
importClass(com.scriptlib.AnchorGraphicHelper);

import core, { closeForeground, setSystemUiVisibility, getWidthPixels, getHeightPixels } from '@auto.pro/core'
import { run } from '@auto.pro/webview'

// $debug.setMemoryLeakDetectionEnabled(true);

let needCap = '竖屏';
if (getWidthPixels() > getHeightPixels()) {
    needCap = '横屏';
}
core({
    // needCap: needCap,
    // capType: '同步',
    // needFloaty: true,
    // needService: true,
    needScreenListener: true,
    // needForeground: true,
});

console.log(context.getExternalFilesDir(null).getAbsolutePath());
console.log(files.cwd());

let url = 'https://assttyys.zzliux.cn/static/webview/'
// 调试模式，可能存在有人用run.js运行脚本，这时就得用运行路径判断了
if (context.packageName.match(/^org.autojs.autojs(pro)?$/) && files.cwd().indexOf(context.getExternalFilesDir(null).getAbsolutePath()) === -1) {
    url = 'file://' + files.path('dist/index.html');
}

export const webview = run(url, {
    fitsSystemWindows: 'true',
    afterLayout() {
        if (device.sdkInt >= 23) { // SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
            setSystemUiVisibility('有状态栏的沉浸式界面')
        }
        activity.getWindow().setStatusBarColor(android.graphics.Color.TRANSPARENT);
    },
    chromeClientOption: {
        onConsoleMessage: function (msg) {
            console.log('[web]:', msg.message());
        }
    },
    // webviewClientOption: {
    //     shouldInterceptRequest(webView, webResourceRequest) {
    //         let input;
    //         const url = webResourceRequest.getUrl().toString();
    //         const key = 'https://local_resources';
    //         /*如果请求包含约定的字段 说明是要拿本地的图片*/
    //         if (url.contains(key)) {
    //             const filePath = url.replace(new RegExp(`^${key.replace('/', '\\/')}\/`), '');
    //             console.log(filePath);
    //             try {
    //                 /*重新构造WebResourceResponse  将数据已流的方式传入*/
    //                 input = new java.io.FileInputStream(new java.io.File(filePath));
    //                 let response = new android.webkit.WebResourceResponse('text/plain', 'UTF-8', input);
    //                 if (key === 'https://local_resources_image_png') {
    //                     response = new android.webkit.WebResourceResponse('image/png', 'UTF-8', input);
    //                 }
    
    //                 /*返回WebResourceResponse*/
    //                 return response;
    //             } catch (e) {
    //                 console.error($debug.getStackTrace(e));
    //             }
    //         }
    //         return this$super.shouldInterceptRequest(webView, webResourceRequest);
    //     }
    // }
});
webview.webviewObject.clearCache(true);
// webview.webviewObject.getSettings().setCacheMode(android.webkit.WebSettings.LOAD_NO_CACHE);

// 监听退出事件，关闭前台服务
events.on('exit', () => {
    closeForeground()
})

// // 监听返回键并共享事件
// const back$ = fromEvent(ui.emitter, 'back_pressed').pipe(share())
// back$.pipe(
//     exhaustMap((e) => {
//         toast('再次返回可退出')
//         e.consumed = true
//         return race(
//             back$.pipe(tap(() => (e.consumed = false))),
//             timer(2000)
//         )
//     })
// ).subscribe()
