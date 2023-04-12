import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func125 implements IFuncOrigin {
    id = 125;
    name = '万言归灵_残塔谜走';
    operator: IFuncOperatorOrigin[] = [{
        desc:   //  万言归灵_残塔谜走_挑战页
        [
            1280, 720,
            [
                [right, 1178, 575, 0xd0543f],
                [right, 1182, 636, 0xd8533d],
                [center, 912, 645, 0x191612],
                [center, 945, 583, 0xcbada9],
                [left, 117, 584, 0x242d35],
                [left, 32, 44, 0xf0f0f0],
                [right, 1186, 481, 0x914b40],
            ]
        ],
        oper: [
            [right, 1280, 720, 1152,573, 1212,636, 1000]  //  挑战按钮
        ],
        retest: 1000,
    }];
    operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
        let curCnt = 0;
        let maxCount = 3;
        while (thisScript.oper({
            id: 125,
            name: '万言归灵_残塔谜走_挑战',
            operator: [thisOperator[0]],
        })) {
            curCnt++;
            thisScript.keepScreen();
            if (curCnt >= maxCount) {
                thisScript.myToast(`连续执行${maxCount}次挑战后未开始，脚本自动停止`);
                thisScript.doOspPush(thisScript, { text: `[${thisScript.schemeHistory.map(item => item.schemeName).join('、')}]已停止，请查看。`, before() { thisScript.myToast('脚本即将停止，正在上传数据'); } });
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