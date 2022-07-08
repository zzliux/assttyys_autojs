const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;
let swiper = 0

export default {
  id: 47,
  name: '悬赏_点击已追踪任务',
  checked: false,
  operator: [{
    desc: [1280, 720,
      [
        [left, 54, 43, 0xeaf4fc],
        [left, 51, 36, 0x9eafee],
        [left, 52, 78, 0xcadbff],
        [left, 119, 652, 0xa86420],
        [left, 209, 643, 0xf6f0b7],
        [center, 326, 640, 0xcfc9b8],
        [center, 430, 652, 0xb96567],
        [center, 500, 640, 0x564635],
        [left, 135, 132, 0x76551c],
        [left, 117, 133, 0x47362e]
      ]
    ],
    oper: [
      [left, 1280, 720, 0, 0, -42, -51, 2000],
    ]
  }, {
    desc: [1280, 720,
      [
        [left, 54, 43, 0xeaf4fc],
        [left, 51, 36, 0x9eafee],
        [left, 52, 78, 0xcadbff],
        [left, 119, 652, 0xa86420],
        [left, 209, 643, 0xf6f0b7],
        [center, 326, 640, 0xcfc9b8],
        [center, 430, 652, 0xb96567],
        [center, 500, 640, 0x564635],
        [left, 135, 132, 0x76551c],
        [left, 117, 133, 0x47362e]
      ]
    ],
    oper: [
      [center, 1280, 720, 29, 461, 115, 467, 1],
      [center, 1280, 720, 25, 174, 105, 178, 1]
    ]
  }],
  operatorFunc(thisScript, thisOperator) {
    if (thisScript.oper({
        name: '悬赏_探索界面',
        operator: [{
          desc: thisOperator[0].desc
        }]
      })) {
      let point = thisScript.findMultiColor('悬赏_已追踪任务') || null;
      console.log(point, 'pointpointpointpoint')
      if (point != null) {
        let oper = [
          [point.x, point.y, point.x + 1, point.y + 1, 1000]
        ];
        thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
        return true;
      } else {
        if (swiper === 5) {
          thisScript.stop();
        }
        thisScript.helperBridge.regionSwipe(thisOperator[1].oper[0], thisOperator[1].oper[1], [100, 300], 2000);
        swiper++
        return true
      }
    } else {
      return false
    }
  }
}