multianjian2multiauto("AEBECF","32|115|8BA2B3,90|116|8BA2B3,151|114|8BA2B3,209|115|8BA2B3,269|116|8BA2B3,330|0|9EB6C7,61|103|B7C8D8");


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
    var r = color.substring(4, 6);
    var g = color.substring(2, 4);
    var b = color.substring(0, 2);
    return (('#' + r) + g) + b;
}