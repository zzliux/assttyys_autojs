let data = [];

let cnt = 2000;
while (cnt--) {
    // TODO 需要根据坐标范围和用户的androidid hash出一个中值点
    // TODO 根据用户的androidid hash出一个标准差
    // [69, 171, 170, 452]
    // x: 69~170
    // y: 171~452
    data.push([
        getRndBias(69, 170, 113, 1),
        getRndBias(171, 452, 206, 1),
    ]);
}

console.log(JSON.stringify(data));

/**
 * 
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @param {*} bias 偏向值
 * @param {*} influence 影响力 [0.0, 1.0]
 * @returns 
 */
function getRndBias(min, max, bias, influence) {
    var rnd = Math.random() * (max - min) + min,   // random in range
        mix = Math.random() * influence;           // random mixer
    return parseInt(rnd * (1 - mix) + bias * mix);           // mix full range and bias
}

/**
 * 
 * @param {*} min 
 * @param {*} max 
 * @param {*} N 
 * @param {*} D 
 * @returns 
 */
function getRndBias2(min, max, N, D) {
    var a = 1,
        b = 50,
        c = D * 100;
  
    var influence = Math.floor(Math.random() * (101)),
      x = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return x > N 
           ? x + Math.floor(gauss(influence) * (N - x)) 
           : x - Math.floor(gauss(influence) * (x - N));
  
    function gauss(x) {
      return a * Math.exp(-(x - b) * (x - b) / (2 * c * c));
    }
}