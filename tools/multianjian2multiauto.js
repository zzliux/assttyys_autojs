multianjian2multiauto("9FB5C7","159|116|777D82,218|116|777D82,278|116|747A7F,397|116|7A8085,447|8|A2BBCB");


/**
 * 按键精灵手机助手的抓抓工具抓出来的多点图色，通过该函数转成auto.js能直接使用的多点找色的json格式
 */

function multianjian2multiauto(firstColor, colors) {
    var ret = {
        firstColor: coloranjian2colorauto(firstColor),
        colors: []
    }
    var a = colors.split(',');
    for (var i = 0; i < a.length; i++) {
        var p = a[i].split('|');
        ret.colors.push([
            parseInt(p[0]),
            parseInt(p[1]),
            coloranjian2colorauto(p[2])
        ]);
    }
    return JSON.stringify(ret);
}

function coloranjian2colorauto(color) {
    var r = color.substring(4, 2);
    var g = color.substring(2, 2);
    var b = color.substring(0, 2);
    return '#' + r + g+ b;
}