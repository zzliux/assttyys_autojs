option = {
  xAxis: { min: 0, max: 1280 },
  yAxis: { min: 0, max: 720, inverse: true },
  series: [
    {
      symbolSize: 2,
      data: (() => {
        const uid = randStr();
        const regions = [
          [124, 60, 1188, 363],
          [165, 60, 1070, 604],
          [165, 60, 1263, 530],
          [535, 674, 743, 709],
          [550, 347, 730, 376],
          [585, 398, 694, 446],
          [680, 411, 838, 452],
          [888, 359, 1204, 492],
          [90, 380, 380, 580],
          [96, 53, 1177, 210],
          [69, 171, 170, 452],
          [1104, 72, 1200, 528],
        ];
        const data = []
        regions.forEach(region => {
          let cnt = 10 * parseInt(Math.sqrt((region[2] - region[0]) * (region[3] - region[1])));
          while (cnt--) {
            // 根据uid生成偏向坐标，根据region和偏向坐标生成随机点
            data.push(getRndBias(region, [myHash(uid, region[0], region[2]), myHash(uid, region[1], region[3])], 1));
          }
        });

        return data;

        /**
         * 
         * @param {*} region 区域[x1, y1, x2, y2]
         * @param {*} pointBias 偏向坐标 [x, y]
         * @param {*} influence 影响力 [0, 1]之间
         * @returns 
         */
        function getRndBias(region, pointBias, influence) {
          let rnd1 = Math.random() * (region[2] - region[0]) + region[0];
          let rnd2 = Math.random() * (region[3] - region[1]) + region[1];
          let mix1 = Math.random() * influence;
          let mix2 = Math.sqrt(Math.abs(mix1 * mix1 - Math.pow(Math.random() * influence, 2)));
          return [parseInt(rnd1 * (1 - mix1) + pointBias[0] * mix1), parseInt(rnd2 * (1 - mix2) + pointBias[1] * mix2)];
        }

        /**
         * 根据Androidid 和点击区域 hash 出一个偏向点，偏向点不能过于接近start和end
         * @param {*} str 
         * @param {*} start 
         * @param {*} end 
         * @returns 
         */
        function myHash (str, start, end) {
          let sStart = (end - start) / 7 + start;
          let sEnd = (start - end) / 7 + end;
          let sum = 0;
          let factor = 13;
          for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i) * factor;
          }
          return sum * Math.max((sum % factor), 1) % (sEnd - sStart - 1) + sStart;
        }

        function randStr () {
          const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()~_+-=,./;\'[]{}:"<>?';
          let ret = '';
          for (let i = 0; i < 36; i++) {
              ret += chars[parseInt(Math.random() * chars.length)];
          }
          return ret;
        }
      })(),
      type: 'scatter'
    }
  ]
};