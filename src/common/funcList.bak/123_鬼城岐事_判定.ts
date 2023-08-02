import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func123 implements IFuncOrigin {
    id = 123;
    name = '鬼城岐事_判定';
    operator: IFuncOperatorOrigin[] = [{
        desc: // 判定界面
            [
                1280, 720,
                [
                    [left, 38, 39, 0xf0f5fb],
                    [center, 524, 12, 0x2e1c20],
                    [right, 1218, 50, 0xdfdfe4],
                    [right, 1207, 74, 0x6c66a2],
                    [center, 761, 10, 0x2b1b1f],
                ]
            ],
        oper: [
            [right, 1280, 720, 878, 270, 1200, 323, 500]  // 判定点击区域大小
        ],
    }, {
        // 点击开始判定
        desc: [
            1280, 720,
            [
                [left, 42, 42, 0xe0e5ea],
                [right, 1259, 189, 0x49161d],
                [right, 1212, 661, 0x8a291e],
                [right, 1066, 676, 0xffe6c2],
                [center, 542, 514, 0xe9cc93],
            ]
        ],
        oper: [
            [right, 1280, 720, 593, 233, 674, 352, 1000]  // 判定点击区域大小
        ]
    }];
    operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
        if (thisScript.oper({
            id: 123,
            name: '鬼城岐事_判定界面',
            operator: [{
                desc: thisOperator[0].desc
            }]
        })) {
            const p = thisScript.findMultiColor('鬼城岐事_判定');
            if (p) {
                const oper = [[
                    p.x,
                    p.y,
                    p.x + thisOperator[0].oper[0][2] - thisOperator[0].oper[0][0],
                    p.y + thisOperator[0].oper[0][3] - thisOperator[0].oper[0][1],
                    thisOperator[0].oper[0][4]
                ]];
                thisScript.regionClick(oper);
                return true;
            }
        }
        return thisScript.oper({
            id: 123,
            name: '鬼城岐事_点击判定',
            operator: [thisOperator[1]]
        });
    }
}