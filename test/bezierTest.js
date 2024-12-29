option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 5,
        data: randomSwipe(0,0, 100, 100),
        // data: g(),
        type: 'scatter'
      }
    ]
  };
  
  
  
  
  
  
  
  
  
  function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  
  function bezierCreate(x1, y1, x2, y2, x3, y3, x4, y4) {
      //构建参数
      var h = 100;
      var cp = [
          { x: x1, y: y1 + h },
          { x: x2, y: y2 + h },
          { x: x3, y: y3 + h },
          { x: x4, y: y4 + h },
      ];
      var numberOfPoints = 100;
      var curve = [];
      var dt = 1.0 / (numberOfPoints - 1);
  
      //计算轨迹
      for (var i = 0; i < numberOfPoints; i++) {
          var ax, bx, cx;
          var ay, by, cy;	
          var tSquared, tCubed;
          var result_x, result_y;
  
          cx = 3.0 * (cp[1].x - cp[0].x);
          bx = 3.0 * (cp[2].x - cp[1].x) - cx;
          ax = cp[3].x - cp[0].x - cx - bx;
          cy = 3.0 * (cp[1].y - cp[0].y);
          by = 3.0 * (cp[2].y - cp[1].y) - cy;
          ay = cp[3].y - cp[0].y - cy - by;
  
          var t = dt * i;
          tSquared = t * t;
          tCubed = tSquared * t;
          result_x = ax * tCubed + bx * tSquared + cx * t + cp[0].x;
          result_y = ay * tCubed + by * tSquared + cy * t + cp[0].y;
          curve[i] = {
              x: result_x,
              y: result_y,
          };
      }
  
      //轨迹转路数组
      var array = [];
      for (var i = 0; i < curve.length; i++) {
          try {
              var j = i < 100 ? i : 199 - i;
              xx = parseInt(curve[j].x);
              yy = parseInt(Math.abs(100 - curve[j].y));
          } catch (e) {
              break;
          }
          array.push([xx, yy]);
      }
  
      return array;
  }
  
  /**
   * 真人模拟滑动函数
   *
   * 传入值：起点终点坐标
   * 效果：模拟真人滑动
   */
  function randomSwipe(sx, sy, ex, ey) {
      // debugger;
      //设置随机滑动时长范围
      var timeMin = 500;
      var timeMax = 1500;
      //设置控制点极限距离
      var leaveHeightLength = 500;
  
      const [p1, p2] = generateRandomPoints([sx, sy], [ex, ey]);
      const x2 = p1[0];
      const y2 = p1[1];
      const x3 = p2[0];
      const y3 = p2[1];
      //获取运行轨迹，及参数
      var time = [0, random(timeMin, timeMax)];
      var track = bezierCreate(sx, sy, x2, y2, x3, y3, ex, ey);
  
      console.log("随机控制点A坐标：" + x2 + "," + y2);
      console.log("随机控制点B坐标：" + x3 + "," + y3);
      console.log("随机滑动时长：" + time[1]);
  
  
      // console.log(track);
      return [...track, [x2, y2], [x3, y3]]
  
      //滑动
      // gestures(time.concat(track));
      // console.hide();
  }
  
  
  function getRandomPoint(q1, q2, tMin, tMax) {
      // 计算从 q1 到 q2 的向量
      const vector = [q2[0] - q1[0], q2[1] - q1[1]];
      
      // 生成一个随机的 t 值，确保点在 q1 和 q2 的线段内
      const t = Math.random() * (tMax - tMin) + tMin;
      
      // 计算随机点的坐标
      const px = q1[0] + t * vector[0];
      const py = q1[1] + t * vector[1];
      
      // 生成一个随机的偏移量，确保点不在连线上
      const offset = Math.random() * 0.4 - 0.2;
      
      // 计算垂直向量
      const perpendicularVector = [-vector[1], vector[0]];
      
      // 应用偏移量
      const finalPx = px + offset * perpendicularVector[0];
      const finalPy = py + offset * perpendicularVector[1];
      
      return [finalPx, finalPy];
  }
  
  function isOnSameSide(p1, p2, q1, q2) {
      // 计算向量 q1q2
      const q1q2 = [q2[0] - q1[0], q2[1] - q1[1]];
      
      // 计算向量 q1p1 和 q1p2
      const q1p1 = [p1[0] - q1[0], p1[1] - q1[1]];
      const q1p2 = [p2[0] - q1[0], p2[1] - q1[1]];
      
      // 计算叉积
      const crossProduct1 = q1q2[0] * q1p1[1] - q1q2[1] * q1p1[0];
      const crossProduct2 = q1q2[0] * q1p2[1] - q1q2[1] * q1p2[0];
      
      // 判断叉积是否同号
      return crossProduct1 * crossProduct2 > 0;
  }
  
  function generateRandomPoints(q1, q2) {
      let p1, p2;
      // let attempts = 0;
      // do {
          p1 = getRandomPoint(q1, q2, 0.0005, 0.2); // p1 更靠近 q1
          p2 = getRandomPoint(q1, q2, 0.8, 0.9995); // p2 更靠近 q2
          // attempts++;
          // if (attempts > 1000) {
          //     console.error("Too many attempts to generate points. Possible issue with logic.");
          //     break;
          // }
      // } while (!isOnSameSide(p1, p2, q1, q2));
      
      return [p1, p2];
  }
  
  // randomSwipe(0,0, 200, 200)