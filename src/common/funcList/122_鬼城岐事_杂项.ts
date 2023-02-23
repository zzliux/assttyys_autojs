import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin, InterfaceFuncOperator } from '@/interface/InterfaceFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func122 implements InterfaceFuncOrigin {
    id = 122;
    name = '鬼城岐事_杂项';
    operator: InterfaceFuncOperatorOrigin[] = [{
        desc:   //  探索
            [
                1280, 720,
                [
                    [left, 36, 39, 0xf0f5fb],
                    [center, 550, 19, 0xf8f7f7],
                    [center, 510, 501, 0x5e1d17],
                    [right, 1198, 601, 0xdcccc7],
                    [center, 761, 6, 0x24191c],
                ]
            ],
        oper: [
            [right, 1280, 720, 1133, 580, 1230, 679, 1000]  //  挑战按钮
        ],
    }, {
        desc: // 跳过
            [
                1280, 720,
                [
                    [center, 560, 645, 0x171717],
                    [center, 885, 438, 0x163c94],
                    [center, 802, 433, 0x5f42e1],
                    [left, 40, 35, 0xa5a8ae],
                    [center, 922, 637, 0x161616],
                ]
            ],
        oper: [
            [right, 1280, 720, 796, 424, 892, 463, 1000]  //  跳过按钮
        ]
    }, {
        desc: // 判定成功
            [
                1280, 720,
                [
                    [left, 378, 621, 0xafaca9],
                    [right, 889, 618, 0xadaba9],
                    [center, 805, 135, 0x581512],
                    [center, 657, 10, 0x1c1213],
                    [left, 35, 40, 0xe0e5ea],
                ]
            ],
        oper: [
            [right, 1280, 720, 790, 603, 914, 637, 1000]  //  确认按钮
        ]
    }, {
        desc: // 判定失败
            [
                1280, 720,
                [
                    [left, 39, 38, 0xe0e5ea],
                    [center, 756, 11, 0x281a1f],
                    [left, 377, 623, 0xc9c7c4],
                    [right, 885, 617, 0xcac7c5],
                    [center, 801, 125, 0x541b17],
                ]
            ],
        oper: [
            [right, 1280, 720, 790, 603, 914, 637, 1000]  //  确认按钮
        ]
    }, {
        desc: // 各种剧情点击
            [
                1280, 720,
                [
                    [left, 35, 41, 0xe0e5ea],
                    [left, 91, 36, 0x1a326d],
                    [center, 763, 13, 0x321e22],
                    [center, 605, 703, 0x131317],
                    [center, 802, 693, 0x141217],
                    [center, 1004, 698, 0x131116],
                ]
            ],
        oper: [
            [right, 1280, 720, 181, 629, 1116, 691, 1000]  //  各种剧情点击
        ]
    }, {
        desc: // 挑战
            [
                1280, 720,
                [
                    [left, 38, 41, 0xecf3fa],
                    [left, 93, 48, 0x19296a],
                    [center, 522, 10, 0x291c20],
                    [center, 751, 8, 0x241a1d],
                    [center, 1218, 50, 0xdfdfe4],
                    [right, 1194, 578, 0xe7d7d2],
                    [right, 1173, 645, 0xd5d3d0],
                    [right, 1236, 593, 0xac4945],
                ]
            ],
        oper: [
            [right, 1280, 720, 1134, 561, 1232, 669, 1000]  //  挑战
        ]
    }, {
        desc: // 点击空白处继续
            [
                1280, 720,
                [
                    [left, 37, 37, 0xf0f5fb],
                    [left, 250, 38, 0x32414e],
                    [left, 53, 53, 0xdeeaf8],
                    [center, 1053, 398, 0x873535],
                    [center, 1053, 175, 0x6a3737],
                ]
            ],
        oper: [
            [right, 1280, 720, 815, 111, 1231, 643, 1000]
        ]
    }, {
        desc: // 重新探索
            [
                1280, 720,
                [
                    [left, 37, 37, 0xf0f5fb],
                    [left, 250, 38, 0x32414e],
                    [left, 53, 53, 0xdeeaf8],
                    [left, 93, 642, 0xc9c6c2],
                    [left, 233, 645, 0xefced8],
                    [left, 325, 648, 0x5c5d71],
                ]
            ],
        oper: [
            [right, 1280, 720, 53, 600, 134, 682, 1000]
        ]
    }];
}