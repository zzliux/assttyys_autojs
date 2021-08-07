//导入插件
let ocr = $plugins.load("com.hraps.ocr");
let path = '/sdcard/Pictures/toDetects';
let imagesList = files.listDir(path, function (name) {
    return /^.+.png$/.test(name);
});
for (let i = 0; i < imagesList.length; i++) {
    let st = new Date().getTime();
    let img = images.read(path + '/' + imagesList[i]);
    let toDetectQue = images.clip(img, 0, 70, 373 - 0, 173 - 70);
    img.recycle();
    let resultQue = ocr.detect(toDetectQue.getBitmap(), 1);
    toDetectQue.recycle();
    let question = '';
    for (let i = 0, len = resultQue.size(); i < len; i++) {
        question += resultQue.get(i).text;
    }
    question = question.replace(/[，,？?\'\"【】\-「」\|。]/g, '')
    let sml = similarity(question, imagesList[i].replace(/Z_|.png/g, ''));
    let ed = new Date().getTime();
    console.log('耗时' + (ed - st) + 'ms: 相似度: ' + sml.toFixed(4) + ': '+ imagesList[i].replace(/Z_|.png/g, '') + '<->' + question);
}

function similarity(s1, s2, filterSimilar) {
    let len1 = s1.length;
    let len2 = s2.length;
    let maxLen = Math.max(len1, len2);
    let thres = parseInt((1 - (filterSimilar || 0)) * maxLen); // 编辑距离超过这个数后直接返回false，加快匹配速度;


    let matrix = []

    for (let i = 0; i <= len1; i++) {
        // 构造二维数组
        matrix[i] = []
        for (let j = 0; j <= len2; j++) {
            // 初始化
            if (i == 0) {
                matrix[i][j] = j
            } else if (j == 0) {
                matrix[i][j] = i
            } else {
                // 进行最小值分析
                let cost = 0
                if (s1[i - 1] != s2[j - 1]) { // 相同为0，不同置1
                    cost = 1
                }
                let temp = matrix[i - 1][j - 1] + cost

                matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, temp);
                if ((i === j || (i === len1 && i < j) || (j === len2 && i > j)) && matrix[i][j] > thres) {
                    return false;
                }
            }
        }
    }
    return 1 - (matrix[len1][len2] / maxLen); //返回右下角的值
}

