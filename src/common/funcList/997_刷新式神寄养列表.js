const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
  id: 997,
  name: '刷新式神寄养列表',
  desc: '刷新式神寄养列表_让其重新排序',
  checked: false,
  operator: [
    {
      // 检测是否微式神寄养列表
      desc: [1280, 720,
        [[left, 186, 171, 0x30221f],
        [center, 555, 138, 0xcbb59e],
        [center, 720, 249, 0x3e2615],
        [center, 880, 562, 0xf4b25f]]
      ],
      oper: [
        [center, 1280, 720, 344, 101, 440, 152, 5000],  // 点击跨区页签
        [center, 1280, 720, 222, 95, 320, 152, 5000]   // 点击好友页签
      ],
    },
  ],
  operatorFunc(thisScript, thisOperator) {
    if (thisScript.oper({
      id: 997,
      name: '检测是否为式神寄养列表',
      operator: [{
        desc: thisOperator[0].desc,
      }]
    })) {
      thisScript.oper({
        id: 997,
        name: '刷新式神寄养列表_让其重新排序',
        operator: [{
          oper: thisOperator[0].oper,
        }]
      })
    }
  }
};
