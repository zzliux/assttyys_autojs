let xs = [];
let ys = [];

let cnt = 1000;
while (cnt--) {
    // TODO 需要根据坐标范围和用户的androidid hash出一个中值点
    // TODO 根据用户的androidid hash出一个标准差
}


// 因此，假如我们要获得均值为180，要68.26%左右的NPC身高都在[170,190]之内
// 即1个标准差范围内，因此标准差为10, 可以通过getNumberInNormalDistribution(180,10) 调用
function getNumberInNormalDistribution(mean, std_dev) {
    var u = 0.0, v = 0.0, w = 0.0, c = 0.0;
    do {
        u = Math.random() * 2 - 1.0;
        v = Math.random() * 2 - 1.0;
        w = u * u + v * v;
    } while (w == 0.0 || w >= 1.0)
    c = Math.sqrt((-2 * Math.log(w)) / w);
    return mean + (u * c * std_dev);
}
