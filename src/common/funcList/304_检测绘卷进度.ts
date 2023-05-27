import { Script } from '@/system/script';
import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func304 implements IFuncOrigin {
  id = 304;
  name = '检测绘卷进度';
  desc = '达到进度即osp推送，搭配Takser食用更佳（ASSTTYYS用户操作手册304功能有说明），使用该功能需安装OCR扩展'
  config = [{
    desc: '详细设置',
    config: [{
      name: 'cdWaitTime',
      desc: '检测频率(s)，逗号分隔，表示检测频率的下限与上限',
      type: 'text',
      default: '300,360'
    }, {
      name: 'choiceEmaki',
      desc: '选择卷X（输入数字1,2,3,4,5,6）',
      type: 'text',
      default: '1'
    }, {
      name: 'progress',
      desc: '达到X进度时则osp提醒（输入数字，例95,97,99）',
      type: 'text',
      default: '95'
    }
    ]
  }, {
    desc: '结束当前方案后切换方案',
    config: [{
      name: 'scheme_switch_enabled',
      desc: '是否启用',
      type: 'switch',
      default: true,
    }, {
      name: 'next_scheme',
      desc: '下一个方案',
      type: 'scheme',
      default: '绘卷进度_持续查询进度',
    }]
  }
  ];
  operator: IFuncOperatorOrigin[] = [{
    desc: [1280, 720, [//0,绘卷界面和卷X坐标
      [left, 26, 539, 0xd6ae21],
      [left, 32, 689, 0x42174a],
      [center, 559, 26, 0x543d33],
      [center, 676, 34, 0xf8f3e0]]
    ],
    oper: [
      [center, 1280, 720, 127, 124, 446, 350, 1000],//卷1
      [center, 1280, 720, 476, 124, 800, 354, 1000],//卷2
      [center, 1280, 720, 823, 123, 1150, 354, 1000],//卷3
      [center, 1280, 720, 126, 378, 450, 606, 1000],//卷4
      [center, 1280, 720, 476, 378, 801, 605, 1000],//卷5
      [center, 1280, 720, 826, 379, 1146, 605, 1000],//卷6
      [center, 1280, 720, 1188, 290, 1224, 402, 2000]//排行榜
    ]
  }, {//1,绘卷进度
    desc: [1280, 720,
      [[left, 43, 50, 0x393735],
      [center, 637, 64, 0x946d52],
      [center, 604, 652, 0x946d52],
      [right, 1161, 67, 0xefcbce]]
    ],
    oper: [
      [center, 1280, 720, 1151, 54, 1175, 79, 1000],//红色关闭
      [center, 1280, 720, 397, 592, 490, 624, 1000]//百分比坐标

    ]
  }]

  operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
    let thisconf = thisScript.scheme.config['304'];
    const emaki = Number(thisconf.choiceEmaki) - 1;
    if (thisScript.oper({
      name: '绘卷界面',
      operator: [{
        desc: thisOperator[0].desc,
        oper: [thisOperator[0].oper[emaki], thisOperator[0].oper[6]]
      }]
    })) { }
    if (thisScript.oper({
      name: '绘卷进度界面',
      operator: [{
        desc: thisOperator[1].desc
      }]
    }) && thisScript.getOcrDetector()) {
      const realTimeBmp = thisScript.findTextWithCompareColor(
        '.+', 0, thisOperator[1].oper[1], '包含',
        {
          id: 304,
          name: '绘卷进度界面检测',
          operator: [{
            desc: thisOperator[1].desc,
          }]
        })
      if (realTimeBmp.length != 0) {
        let realTimeText = realTimeBmp[0].label;
        let realTimeNum = Number(realTimeText.replace("%", "0"));
        console.log(`ocr识别为：[${realTimeNum}]`);
        if (!isNaN(realTimeNum) && (realTimeNum as number) > (thisconf.progress as number)) {
          thisScript.doPush(thisScript, { text: '绘卷进度已达到目标进度。', before() { thisScript.myToast('绘卷进度已达到目标进度，正在上传数据'); } });
          if (thisconf && thisconf.scheme_switch_enabled) {
            thisScript.setCurrentScheme(thisconf.next_scheme as string);
            thisScript.myToast(`切换方案为[${thisconf.next_scheme}]`);
            thisScript.rerun();
            sleep(3000);
            return;
          } else {
            thisScript.stop();
          }
        } else if (!isNaN(realTimeNum) && (realTimeNum as number) < (thisconf.progress as number)) {
          let cdWaiteTimePair = String(thisconf.cdWaitTime).split(',');
          let cdWaitTime = random(parseInt(cdWaiteTimePair[0]), parseInt(cdWaiteTimePair[1]));
          thisScript.myToast(`绘卷刷新CD, ${(cdWaitTime)}秒后再次检测`);
          sleep(1000 * (cdWaitTime));
        }
      }
      if (thisScript.oper({
        name: '绘卷进度界面关闭',
        operator: [{
          oper: [thisOperator[1].oper[0]]
        }]
      })) { return true; }
    }
    return false;
  }
}

