import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func121 implements InterfaceFuncOrigin {
    id = 121;
    name = '月烬宵宴_伪月落';
    operator: InterfaceFuncOperatorOrigin[] = [{
        desc:   //  月烬宵宴_伪月落_挑战页
            [
                1280, 720,
                [
                    [right, 1207, 412, 0xeaeaf4],
                    [right, 1188, 603, 0x1e202f],
                    [right, 1201, 645, 0xfeeaaf],
                    [left, 33, 47, 0xe1ebfe],
                    [left, 244, 48, 0x2f2f23],
                ]
            ],
        oper: [
            [right, 1280, 720, 1120, 569, 1236, 690, 1000]  //  挑战按钮
        ],
        retest: 1000,
    }];
    operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
        let curCnt = 0;
        let maxCount = 3;
        while (thisScript.oper({
            id: 121,
            name: '月烬宵宴_伪月落_挑战',
            operator: [thisOperator[0]],
        })) {
            curCnt++;
            thisScript.keepScreen();
            if (curCnt >= maxCount) {
                thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
                thisScript.doOspPush(thisScript, { text: '脚本已停止，请查看。', before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
                thisScript.stop();
                sleep(2000);
                return false;
            }
        }
        if (curCnt) {
            return true;
        }
    }
}