findMultiColorInRegionFuzzy( 0xdbd0c4, "284|9|0xdbd1c3,17|88|0x86817e,76|88|0x86827f,135|88|0x87837f,195|88|0x85807d,254|88|0x85807d", 90, 0, 0, 1919, 1079)

function findMultiColorInRegionFuzzy(firstColor, colors, a, b, c, d, e) {
    var ret = {
        firstColor: firstColor,
        colors: []
    };
    var colors = colors.split(',');
    for (let i = 0; i < colors.length; i++) {
        colors[i] = colors[i].split('|');
        for (let j = 0; j < colors[i].length; j++) {
            colors[i][j] = parseInt(colors[i][j]);
        }
    }
    ret.colors = colors;
    console.log(JSON.stringify(ret));
    return ret;
}