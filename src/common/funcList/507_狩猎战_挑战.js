import { setCurrentScheme } from '@/common/tool';

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
    id: 507,
    name: '狩猎战_挑战',
    operator: [
        {	// 检测_是否为挑战奉献榜场景_待开始
            desc: [1280, 720,
                [[right, 1104, 568, 0xd7bfa5],
                [right, 1175, 600, 0xdfc29d],
                [right, 1122, 697, 0x5b0d07],
                [right, 1086, 615, 0x272420],
                [right, 1068, 593, 0xdec7aa]]
            ],
            oper: [
                [right, 1280, 720, 1073, 568, 1171, 646, 1000]  // 进入鬼王挑战页
            ]
        },
        {	// 检测_挑战是否可用
            desc: [1280, 720,
                [[left, 64, 482, 0x291522],
                [left, 33, 38, 0xd7c5a2],
                [left, 109, 24, 0xd7c5a2],
                [left, 179, 37, 0xd7c6a5],
                [center, 547, 34, 0x9a8958],
                [right, 1138, 561, 0xdbc5ae],
                [right, 1218, 641, 0xebc683],
                [right, 1167, 608, 0x272420]]
            ],
            oper: [
                [right, 1280, 720, 1138, 561, 1218, 641, 1000]
            ]
        }, {	// 检测_挑战奉献榜场景_已结束
            desc: [1280, 720,
                [[right, 1000, 648, 0xd42c23],
                [right, 986, 624, 0x060503],
                [right, 995, 671, 0x2d1c1c],
                [right, 1095, 640, 0xf0d09e],
                [right, 1155, 640, 0xe6bc83],
                [right, 1128, 620, 0x272420],
                [right, 1080, 595, 0x272420],
                [right, 1157, 595, 0x272420]]
            ],
            oper: [
                [right, 1280, 720, 1166, 52, 1200, 86, 2200],
                [left, 1280, 720, 58, 43, 96, 82, 2200]
            ]
        }],
    operatorFunc(thisScript, thisOperator) {
        let thisConf = thisScript.scheme.config['507'];

        if (thisScript.oper({
            name: '检测_是否为挑战奉献榜场景_待开始',
            operator: [{
                desc: thisOperator[0].desc,
                oper: thisOperator[0].oper
            }]
        })) {
            return true;
        }

        if (thisScript.oper({
            name: '检测_挑战是否可用',
            operator: [{
                desc: thisOperator[1].desc,
                oper: thisOperator[1].oper
            }]
        })) {
            return true;
        }

        if (thisScript.oper({
            name: '检测_挑战奉献榜场景_已结束',
            operator: [{
                desc: thisOperator[2].desc,
                oper: thisOperator[2].oper
            }]
        })) {
            const next_scheme = '返回庭院';
            setCurrentScheme(next_scheme);
            toastLog(`切换方案为[${next_scheme}]`);
            thisScript.rerun();
        }
        return true;
    }
}