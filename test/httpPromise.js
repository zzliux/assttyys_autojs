var result = new Array();

function requestDemo() {
    return new Promise(function(resolve, reject) {
        threads.start(function () {
            let res = http.get("www.baidu.com");
            if (res.statusCode == 200) {
                let list = res.body.string();
                //log(list);
                resolve(list);
            } else {
                reject(res);
            }
        })
    });
}
var n = 0;
while (n < 10) {

    requestDemo().then(function(data_pms) {
        log(data_pms);
        result.push(data_pms);
    }).catch(function(e) {
        log(e);
    });
    n++;
}