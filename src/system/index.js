runtime.unloadDex('./assets/lib/scriptlib.dex');
runtime.loadDex('./assets/lib/scriptlib.dex');
importClass(com.scriptlib.AnchorGraphicHelper);

import core, { closeForeground, setSystemUiVisibility, getWidthPixels, getHeightPixels } from '@auto.pro/core'
import { run } from '@auto.pro/webview'

let needCap = '竖屏';
if (getWidthPixels() > getHeightPixels()) {
    needCap = '横屏';
}
core({
    needCap: needCap,
    capType: '同步',
    needFloaty: true,
    needService: true,
    needScreenListener: true,
    // needForeground: true,
});

export const webview = run('file://' + files.path('dist/index.html'), {
    afterLayout() {
        setSystemUiVisibility('有状态栏的沉浸式界面')
        activity.getWindow().setStatusBarColor(android.graphics.Color.TRANSPARENT);
    },
    chromeClientOption: {
        onConsoleMessage: function (msg) {
            console.log(msg.message());
        }
    }
});
webview.webviewObject.clearCache(true);
// webview.webviewObject.getSettings().setCacheMode(android.webkit.WebSettings.LOAD_NO_CACHE);

// 监听退出事件，关闭前台服务
events.on('exit', () => {
    closeForeground()
})

// // 监听返回键并共享事件
// const back$ = fromEvent(ui.emitter, "back_pressed").pipe(share())
// back$.pipe(
//     exhaustMap((e) => {
//         toast("再次返回可退出")
//         e.consumed = true
//         return race(
//             back$.pipe(tap(() => (e.consumed = false))),
//             timer(2000)
//         )
//     })
// ).subscribe()
