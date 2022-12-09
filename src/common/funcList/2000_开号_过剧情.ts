import { InterfaceFuncOrigin, InterfaceFuncOperatorOrigin } from '@/interface/InterfaceFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func2000 implements InterfaceFuncOrigin {
	id = 2000;
	name = '开号_过剧情';
	desc = '自动点击快进、跳过等固定场景';
	operator: InterfaceFuncOperatorOrigin[] = [{
        // 快进
		desc: [1280, 720,
            [
                [center, 828, 683, 0xe3dbd3],
                [center, 1064, 684, 0xf4b25f],
                [right, 1179, 57, 0xd3ac85],
                [right, 1182, 40, 0x30212e],
                [right, 1044, 33, 0x34222f],
            ]
        ],
		oper: [
			[right, 1280, 720, 1145,35, 1185,78, 500],
		]
	}, {
        // 跳过
        desc: [1280, 720,
            [
                [left, 51, 34, 0xd7c5a2],
                [left, 106, 31, 0xd4c4a3],
                [left, 18, 43, 0x1f160e],
                [center, 846, 538, 0x5639df],
                [center, 862, 554, 0x3e47db],
            ]
        ],
        oper: [
            [center, 1280, 720, 851,529, 906,554, 500]
        ]
    }]
}