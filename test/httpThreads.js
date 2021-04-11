
for (var i = 1 ; i <= 30; i++) {
    threadd(i);
}

function threadd(i) {
    threads.start(function () {
        for (let j = 1; j <= 200; j++) {
            let startTime = new Date().getTime();
            var r = http.get("https://www.baidu.com")
            let txtContent = r.body.string() + "";
            let endTime2 = new Date().getTime();
            let allTime = endTime2 - startTime;
            log("线程:" + i + "第" + j + "次耗时：" + allTime)
        }
    })
}