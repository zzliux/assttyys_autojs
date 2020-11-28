import { webview } from "@/system"
import { effect$ } from "@auto.pro/core"


// effect$是作业线程，当core的权限全部到位后，effect$才开始运作
effect$.subscribe(() => {
    toastLog('权限已经到位')

    // 监听html的prompt('submit', JSON.stringify(param))
    webview.on('test').subscribe(([param, done]) => {
        console.log('btn.click.autojs.event');
        toastLog(param);
        done(param);
    })
})