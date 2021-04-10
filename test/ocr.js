//导入插件
let ocr = $plugins.load("com.hraps.ocr")

let imagePath = './test.png';

//导入需识别的图片，请自行输入图片路径
let img = images.read(imagePath)
//识别图片
console.time('ocr.detect');
let results = ocr.detect(img.getBitmap(), 0.8)
console.timeEnd('ocr.detect');
console.info("过滤前结果数：" + results.size())
//识别结果过滤
results = ocr.filterScore(results, 0.1, 0.1, 0.1)
console.info("过滤后结果数：" + results.size())

showData(results, imagePath, 'detected')

function showData(dataList, imgPath, ocrType) {
    log("显示数据 imgPath = " + imgPath);
    var img = images.read(imgPath);
    var canvas = new Canvas(img);
    let rectanglePaint = new Paint();
    rectanglePaint.setStrokeWidth(3);
    rectanglePaint.setColor(colors.parseColor("#00ff00"));
    rectanglePaint.setStyle(Paint.Style.STROKE); //空心矩形框


    let textPaint = new Paint();
    textPaint.setTextAlign(Paint.Align.CENTER);
    textPaint.setTextSize(15);
    textPaint.setStyle(Paint.Style.FILL);
    textPaint.setColor(colors.parseColor("#f000ff"));
    let fontMetrics = textPaint.getFontMetrics();

    var len = dataList.size();
    for (var i = 0; i < len; i++) {
        let data = dataList.get(i);
        let frame = data.frame;
        let rect = [frame.get(0), frame.get(1), frame.get(4), frame.get(5)];
        canvas.drawRect(rect[0], rect[1], rect[2], rect[3], rectanglePaint);
        canvas.drawText(
            data.text + ':' + avg(data.crnnScore),
            rect[0] + parseInt((rect[2] - rect[0]) / 2),
            rect[3] + Math.abs(fontMetrics.top),
            textPaint
        );
    }

    var image = canvas.toImage();
    let newFilename = files.getNameWithoutExtension(imgPath) + "_" + ocrType + ".png";
    let newFilepath = files.cwd() + '/' + newFilename;
    files.createWithDirs(newFilepath);
    images.save(image, newFilepath);
    log("识别后的图片保存路径: " + newFilepath);
    img.recycle();
    return newFilepath;
}

function avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.size(); i++) {
        sum += arr.get(i);
       // log(arr.get(i))
    }
    return (sum / arr.size()).toFixed(4);
}