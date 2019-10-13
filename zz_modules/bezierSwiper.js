




var bezierSwiper = function () {
    this.dm = context.getResources().getDisplayMetrics();
}

bezierSwiper.prototype.swipe = function (x0, y0, x1, y1, time) {
    var stepLength = 0.1; // 步长， 实际也需要调整
    var regionOffset = [-300, -300, 300, 300]; // 需要调整
    var gestureArgs = [time];
    // 生存两个随机的 p1 和 p2
    var leftTop = {
        x: Math.min(x0, x1) + regionOffset[0],
        y: Math.min(y0, y1) + regionOffset[1],
    };
    if (leftTop.x < 0) {
        leftTop.x = 0;
    }
    if (leftTop.y < 0) {
        leftTop.y = 0;
    }
    var rightBottom = {
        x: Math.max(x0, x1) + regionOffset[2],
        y: Math.max(y0, y1) + regionOffset[3],
    };
    if (rightBottom.x > this.dm.widthPixels) {
        rightBottom.x = this.dm.widthPixels;
    }
    if (rightBottom.y > this.dm.heightPixels) {
        rightBottom.y = this.dm.heightPixels;
    }
    var p1 = {
        x: random(leftTop.x, rightBottom.x),
        y: random(leftTop.y, rightBottom.y)
    }
    var p2 = {
        x: random(leftTop.x, rightBottom.x),
        y: random(leftTop.y, rightBottom.y)
    }

    for (let t = 0; t <= 1; t += stepLength) {
        var cp = this.calculateBezierPointForCubic(t, {x: x0, y: y0}, p1, p2, {x: x1, y: y1});
        gestureArgs.push([cp.x, cp.y]);
    }
    gesture.apply(null, gestureArgs);
}

/**
 * 三阶贝塞尔曲线
 * B(t) = P0 * (1-t)^3 + 3 * P1 * t * (1-t)^2 + 3 * P2 * t^2 * (1-t) + P3 * t^3, t ∈ [0,1]
 *
 * @param t  曲线长度比例
 * @param p0 起始点
 * @param p1 控制点1
 * @param p2 控制点2
 * @param p3 终止点
 * @return t对应的点
 */
bezierSwiper.prototype.calculateBezierPointForCubic = function (t, p0, p1, p2, p3) {
    var point = {x: 0, y: 0};
    var temp = 1 - t;
    point.x = p0.x * temp * temp * temp + 3 * p1.x * t * temp * temp + 3 * p2.x * t * t * temp + p3.x * t * t * t;
    point.y = p0.y * temp * temp * temp + 3 * p1.y * t * temp * temp + 3 * p2.y * t * t * temp + p3.y * t * t * t;
    return point;
}

// tests
// if (typeof module == 'undefined') {
//     module = {};
//     var a = new bezierSwiper();
//     var cnt = 20;
//     while (cnt--) {
//         a.swipe(1080/2, 1920/5, 1080/2, 1920*4/5, random( 200, 1000));
//         sleep(200);
//     }
// }

module.exports = new bezierSwiper();
