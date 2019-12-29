findMultiColorInRegionFuzzy( 0xc6ae9d, "463|11|0xc9b8a0,168|123|0x7f7a74,227|123|0x7f7a74,286|123|0x807b74,346|123|0x7f7a74,406|124|0xb3a28b", 90, 499, 478, 0, 0)

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