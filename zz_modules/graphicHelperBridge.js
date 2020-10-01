importClass("com.scriptlib.GraphicHelper");

var graphicHelper = new GraphicHelper(runtime.getImages());//初始化传入aj截图类的父对象
var zzUtils = require('./zzUtils');


var bridge = {
    graphicHelper: graphicHelper,
    keepScreen: function () {
        return this.graphicHelper.KeepScreen();
    },

    /**
     * 
     * @param {*} _img 占位用，兼容老的方式，但不使用传入的img，而是使用内存中的img
     * @param {*} firstColor 
     * @param {*} path 
     * @param {*} options 
     */
    findMultiColors: function (_img, firstColor, path, options) {
        var sim = parseInt((255 - options.threshold) * 100 / 255);
        var ret = this.graphicHelper.FindMultiColor(options.region[0], options.region[1], options.region[0] + options.region[2], options.region[1] + options.region[3],
            firstColor, path, sim, 0);
        if (ret.x == -1) return null;
        return ret;
    },

    /**
     * 用法同上，只不过这个方法的找色为每个点所在的宫的所有点都去比较一次
     * @param {*} _img 
     * @param {*} firstColor 
     * @param {*} path 
     * @param {*} options 
     */
    findMultiColorsPalace: function (_img, firstColor, path, options) {
        var sim = parseInt((255 - options.threshold) * 100 / 255);
        var ret = this.graphicHelper.FindMultiColor(options.region[0], options.region[1], options.region[0] + options.region[2], options.region[1] + options.region[3],
            firstColor, path, sim, 1);
        if (ret.x == -1) return null;
        return ret;
    },

    /**
     * 
     * @param {*} judgePoints 
     * judgePoints: [
     *     { x:   67, y:   71, c: 0xeff5fb, i: true },
     *     { x:  587, y:  167, c: 0xa8977f, i: true },
     * ]
     */
    detectsMultiColors: function (judgePoints, colorSimilar) {
        var colorSimilar = parseInt((255 - colorSimilar) * 100 / 255);
        var to = [];
        for (var i = 0; i < judgePoints.length; i++) {
            var toPush = [];
            toPush.push(judgePoints[i].x);
            toPush.push(judgePoints[i].y);
            var rgb = zzUtils.parseColor(judgePoints[i].c);
            toPush.push(rgb[0]);
            toPush.push(rgb[1]);
            toPush.push(rgb[2]);
            toPush.push(judgePoints[i].i ? 1 : 0);
            to.push(toPush);
        }
        return this.graphicHelper.CompareColorExEx(to, colorSimilar, 0, 0, 0);
    }
}

module.exports = bridge;
