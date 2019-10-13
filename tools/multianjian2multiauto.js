multianjian2multiauto("0F203A","20|-1|C0B3F7,67|72|091A2F,9|73|FAFFFF,7|95|9891E6,-66|263|1A1D78");


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