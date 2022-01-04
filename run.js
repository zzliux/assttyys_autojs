// let path = '/sdcard/Android/data/' + context.getPackageName() + '/assttyys_ng';
let path = context.getExternalFilesDir(null).getAbsolutePath() + '/assttyus_ng';
toastLog("正在加载程序，请稍后");
let r = http.get('https://gitee.com/zzliux/assttyys_autojs/raw/ng_dev/assttyys_ng.zip', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36 Edg/91.0.864.59'
    }
});
files.ensureDir(path + '/assttyys_ng.zip');
files.writeBytes(path + '/assttyys_ng.zip', r.body.bytes());
files.removeDir(path + '/assttyys_ng');
$zip.unzip(path + '/assttyys_ng.zip', path);
files.remove(path + '/assttyys_ng.zip');


engines.execScriptFile(path + '/assttyys_ng/dist/auto.js', {
    path: path + '/assttyys_ng'
});