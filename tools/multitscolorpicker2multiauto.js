findMultiColorInRegionFuzzy( 0xc7b69e, "458|2|0xc6b59d,161|118|0x827d76,218|118|0xb3a28b,279|117|0xb3a28b,339|118|0xb3a28b,399|116|0xb3a28b", 90, 499, 478, 0, 0);

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