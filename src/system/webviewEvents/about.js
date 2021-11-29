import { webview } from "@/system";

export default function webviewAbout() {

    webview.on("openOpenSource").subscribe(([_param, done]) => {
        app.openUrl('https://gitee.com/zzliux/assttyys_autojs');
        done();
    });

    webview.on("mailTo").subscribe(([_param, done]) => {
        try {
            context.startActivity(app.intent({
                action: 'android.intent.action.SENDTO',
                category: 'android.intent.category.BROWSABLE',
                flags: ['ACTIVITY_NEW_TASK'],
                data: 'mailto:zzliux@outlook.com'
            }));
        } catch (e) {
            toastLog('未找到邮件类应用，已复制至剪贴板');
            setClip('zzliux@outlook.com');
            console.log(e);
        }
        done();
    });

    webview.on("copyToClip").subscribe(([str, done]) => {
        setClip(str);
        toastLog(`已复制 ${str} 至剪贴板`)
    });
}