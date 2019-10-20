multianjian2multiauto("A3C7EB","146|73|9DC8E9,278|82|9DC8E9,357|90|9DC8E9,370|-3|000008,391|-6|23C7FC");


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