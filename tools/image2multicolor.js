var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');


var img = document.getElementsByTagName('IMG')[0];
canvas.setAttribute('width', img.width);
canvas.setAttribute('height', img.height);
ctx.drawImage(img, 0, 0, img.width, img.height);
var imgData = ctx.getImageData(0, 0, img.width, img.height);

var alphaColor = getPixColor(imgData, 0, 0);
var colorCorner = [];
colorCorner.push(getPixColor(imgData, 0, 0));
colorCorner.push(getPixColor(imgData, imgData.width - 1, 0));
colorCorner.push(getPixColor(imgData, imgData.width - 1, imgData.height - 1));
colorCorner.push(getPixColor(imgData, 0, imgData.height - 1));
for (var i = 1; i < colorCorner.length; i++) {
    if (colorCorner[i] != colorCorner[i - 1]) {
        alphaColor = -1;
        break;
    }
}

var result = {
    firstColor: getPixColor(imgData, 1, 1),
    colors: [],
}
var stepLen = 1;
// 因为四个角是透明颜色了，只能把外围一圈全部忽略了
for (var x = 1; x < imgData.width - 1; x += stepLen) {
    for (var y = 1; y < imgData.height - 1; y += stepLen) {
        var color = getPixColor(imgData, x, y);
        if (color === alphaColor || (x == 1 && y == 1)) continue;
        result.colors.push([x - 1, y - 1, color]);
    }
}

console.log(JSON.stringify(result));

function getPixColor(imgData, x, y) {
    var r = imgData.data[imgData.width * 4 * y + 4 * x].toString(16);
    var g = imgData.data[imgData.width * 4 * y + 4 * x + 1].toString(16);
    var b = imgData.data[imgData.width * 4 * y + 4 * x + 2].toString(16);
    if (r.length == 1) {
        r = '0' + r;
    }
    if (g.length == 1) {
        g = '0' + g;
    }
    if (b.length == 1) {
        b = '0' + b;
    }
    return ('#' + r + g + b).toUpperCase();
}
