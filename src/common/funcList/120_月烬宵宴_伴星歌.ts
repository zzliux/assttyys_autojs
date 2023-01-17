import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func120 implements InterfaceFuncOrigin {
    id = 120;
    name = '月烬宵宴_伴星歌';
    operator: InterfaceFuncOperatorOrigin[] = [{
        desc:   //  月烬宵宴_伴星歌_挑战页
            [
                1280, 720,
                [
                    [left, 33, 46, 0xdbe4f8],
                    [left, 250, 42, 0xfee8c8],
                    [right, 996, 39, 0xd7c5a2],
                    [center, 799, 39, 0xd7c5a2],
                    [right, 1180, 592, 0xefe7de],
                    [right, 1152, 579, 0x7b7faa],
                    [right, 1125, 652, 0x38384e],
                ]
            ],
        oper: [
            [right, 1280, 720, 1154, 591, 1216, 650, 1000]  //  挑战按钮
        ],
        retest: 1000,
    }];
    operatorFunc(thisScript: Script, thisOperator: InterfaceFuncOperator[]): boolean {
        let curCnt = 0;
        let maxCount = 3;
        while (thisScript.oper({
            id: 120,
            name: '月烬宵宴_伴星歌_挑战',
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