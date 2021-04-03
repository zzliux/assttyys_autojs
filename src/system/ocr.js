//导入插件
let ocr = null;

//识别图片
// console.time('ocr.detect');
// let results = ocr.detect(img.getBitmap(), 1)
// console.timeEnd('ocr.detect');
// console.info("过滤前结果数：" + results.size())
// //识别结果过滤
// results = ocr.filterScore(results, 0.1, 0.1, 0.1)
// console.info("过滤后结果数：" + results.size())

export default function () {
    if (!ocr) {
        ocr = $plugins.load("com.hraps.ocr");
    }
    return ocr;
};