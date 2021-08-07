//导入插件
let ocr = $plugins.load("com.hraps.ocr");
let path = '/sdcard/Pictures/toDetects';
let imagesList = files.listDir(path, function (name) {
    return /^\d+\.png$/.test(name);
});
for (let i = 0; i < imagesList.length; i++) {
    let st = new Date().getTime();
    let img = images.read(path + '/' + imagesList[i]);
    let toDetectQue = images.clip(img, 3, 80, 373 - 3, 173 - 80);
    img.recycle();
    let resultQue = ocr.detect(toDetectQue.getBitmap(), 0.7);
    toDetectQue.recycle();
    let question = '';
    for (let i = 0, len = resultQue.size(); i < len; i++) {
        question += resultQue.get(i).text;
    }
    question = question.replace(/[，,？?\'\"【】\-「」\|。]/g, '');
    files.renameWithoutExtension(path + '/' + imagesList[i], question);
    let ed = new Date().getTime();
    console.log('耗时' + (ed - st) + 'ms: '+ imagesList[i] + '->' + question + '.png');
}

// images.read()

// let res = thisScript.getOcr().detect(bmp, 0.7);


