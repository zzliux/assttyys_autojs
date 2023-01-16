import { InterfaceMultiColorOrigin } from "@/interface/InterfaceMulticolor";

const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

const multiColor: InterfaceMultiColorOrigin = {
    '结界_进攻': {
        // 重新取色，使用时需要指定查找区域
        region: [center, 1280, 720, 304, 317, 1166, 713],
        desc: [
            [1280, 720,
                [
                    [center, 325, 362, 0x9a3434],
                    [center, 444, 363, 0x933e2d],
                    [center, 329, 367, 0xf5b15c],
                    [center, 440, 407, 0xf5b25e],
                    [center, 444, 411, 0x983e2d],
                ]
            ],
            [1280, 720,
                [
                    [center, 989, 363, 0x943031],
                    [center, 995, 368, 0xefa858],
                    [center, 1105, 367, 0xf7ae63],
                    [center, 1110, 363, 0x943c29],
                    [center, 1105, 407, 0xf1b05c],
                    [center, 1109, 411, 0x993f2f],
                ]
            ]
        ]
    },
    '结界_进攻_灰': {
        region: [center, 1280, 720, 304, 317, 1166, 713],
        desc: [
            [1280, 720,
                [
                    [center, 600, 480, 0x685f5f],
                    [center, 639, 493, 0xb0a8a0],
                    [center, 679, 511, 0x272420],
                    [center, 712, 523, 0xafaaa2],
                    [center, 719, 533, 0x8c837b],
                    [center, 727, 540, 0xbfa98f]
                ]
            ],
            [1280, 720,
                [
                    [center, 601, 497, 0x665d5d],
                    [center, 610, 506, 0xb0a8a0],
                    [center, 712, 540, 0xafaaa2],
                    [center, 720, 546, 0x685f5f],
                    [center, 726, 557, 0xbfa98f],
                    [center, 679, 529, 0x282521]
                ]
            ],
            [1280, 720,
                [
                    [center, 600, 356, 0x675e5a],
                    [center, 615, 392, 0xadaa9c],
                    [center, 649, 380, 0x2a2723],
                    [center, 679, 387, 0x272420],
                    [center, 719, 404, 0x645e5b],
                    [center, 714, 400, 0xadae9c]
                ]
            ]
        ]
    },
    '结界_5勋章': {
        region: [center, 1280, 720, 124, 125, 1152, 545],
        // desc: [[1280,720,
        //     [[center,512,282,0xd8cabb],
        //     [center,728,289,0xdacdbc],
        //     [center,532,362,0x86807b],
        //     [center,572,362,0x86807b],
        //     [center,611,362,0x86807b],
        //     [center,651,362,0x87817c],
        //     [center,690,362,0x86807b],
        //     [center,728,391,0xa28f85]]
        // ]]
        // desc: [[1280,720,
        //     [[center,573,157,0xdacbbc],
        //     [center,795,211,0xab9988],
        //     [center,787,157,0xdacbbc],
        //     [center,785,262,0xa39087],
        //     [center,590,234,0x88827d],
        //     [center,629,234,0x8a857f],
        //     [center,669,234,0x87827c],
        //     [center,708,234,0x8a847f],
        //     [center,748,234,0x88827d]]
        // ]]
        desc: [
            [1280, 720,
                [
                    [center, 576, 291, 0xdacbbc],
                    [center, 787, 295, 0xdacbbc],
                    [center, 785, 397, 0xa39087],
                    [center, 590, 369, 0x88817d],
                    [center, 629, 369, 0x88827d],
                    [center, 669, 369, 0x88827d],
                    [center, 708, 369, 0x88827d],
                    [center, 748, 369, 0x89837e],
                    [center, 608, 381, 0xdcc7b9],
                    [center, 610, 360, 0xddc5b6]
                ]
            ]
        ]
    },
    '结界_4勋章': {
        region: [center, 1280, 720, 124, 125, 1152, 545],
        desc: [
            // [1280, 720, // 呱太5勋章
            //     [[center,908,426,0xdfd7cb],
            //     [center,1118,428,0xdfd7cb],
            //     [center,922,504,0x87827d],
            //     [center,962,504,0x89837f],
            //     [center,1001,504,0x87827d],
            //     [center,1040,504,0x88837e],
            //     [center,1080,504,0x88827d]]
            // ],
            // [1280, 720, // 呱太5勋章
            //     [[center, 572, 428, 0xdfd8cb],
            //     [center, 781, 432, 0xdfd9cb],
            //     [center, 590, 504, 0x87827d],
            //     [center, 629, 504, 0x87827d],
            //     [center, 669, 504, 0x87827d],
            //     [center, 708, 504, 0x87827d],
            //     [center, 748, 504, 0x8a847f]]
            // ],
            // [1280, 720,
            //     [[center, 514, 147, 0xdacbbc],
            //     [center, 725, 155, 0xdacebc],
            //     [center, 532, 226, 0x8c8681],
            //     [center, 572, 226, 0x88837d],
            //     [center, 611, 226, 0x8d8782],
            //     [center, 650, 226, 0x86817c],
            //     [center, 690, 226, 0xc9b6a4],
            //     [center, 728, 254, 0xa38f86]]
            // ]
            [1280, 720,
                [
                    [center, 907, 294, 0xdacebc],
                    [right, 1120, 295, 0xdaccbc],
                    [center, 922, 369, 0x88827e],
                    [center, 962, 369, 0x88837e],
                    [center, 1001, 369, 0x87827d],
                    [center, 1040, 369, 0x87827d],
                    [center, 1081, 369, 0xc9b6a5],
                    [right, 1118, 396, 0xa3938a],
                    [right, 1102, 284, 0xd4c3b2],
                    [right, 1104, 303, 0xdacebc],
                    [right, 1088, 300, 0xdacebc]
                ]
            ]
        ]

    },
    '结界_3勋章': {
        region: [center, 1280, 720, 124, 125, 1152, 545],
        desc: [
            [1280, 720,
                [
                    [center, 511, 281, 0xd9cabb],
                    [center, 726, 289, 0xdacdbc],
                    [center, 532, 361, 0x8a847f],
                    [center, 572, 361, 0x88827d],
                    [center, 611, 361, 0x8a857f],
                    [center, 652, 361, 0xc9b6a4],
                    [center, 691, 361, 0xc9b6a4],
                    [center, 728, 389, 0xa38f86],
                    [center, 631, 351, 0xdbc5b5]
                ]
            ]
        ]
    },
    '结界_2勋章': {
        region: [center, 1280, 720, 124, 125, 1152, 545],
        // desc: [[1280,720,
        //     [[center,901,153,0xd8caba],
        //     [center,1119,158,0xdacbbc],
        //     [center,922,234,0x8a847f],
        //     [center,962,234,0x88827d],
        //     [center,1002,234,0xc9b6a4],
        //     [center,1040,234,0xc9b6a4],
        //     [center,1081,234,0xc9b6a4],
        //     [center,1117,262,0xa49087]]
        // ]]
        // desc: [[1280,720,
        //     [[center,242,427,0xdacbbc],
        //     [center,456,428,0xd9c9bb],
        //     [center,463,448,0xac9a89],
        //     [center,453,532,0xa39087],
        //     [center,257,504,0x87817c],
        //     [center,297,504,0x86817b],
        //     [center,337,504,0xc9b6a4],
        //     [center,376,504,0xc9b6a4],
        //     [center,417,504,0xc9b6a4]]
        // ]]
        desc: [
            [1280, 720,
                [
                    [center, 577, 426, 0xdacbbc],
                    [center, 784, 428, 0xdacbbc],
                    [center, 785, 532, 0xa49088],
                    [center, 590, 504, 0x86807b],
                    [center, 629, 504, 0x86817b],
                    [center, 668, 504, 0xc9b6a4],
                    [center, 708, 504, 0xc9b6a4],
                    [center, 748, 504, 0xc9b6a4],
                    [center, 610, 494, 0xdbc4b4],
                    [center, 608, 518, 0xddcbbd]
                ]
            ]
        ]
    },
    '结界_1勋章': {
        region: [center, 1280, 720, 124, 125, 1152, 545],
        // desc: [[1280,720,
        //     [[center,510,142,0xd7c9b9],
        //     [center,732,149,0xd8c9ba],
        //     [center,532,224,0x8b8580],
        //     [center,573,224,0xc9b6a4],
        //     [center,611,224,0xc9b6a4],
        //     [center,651,223,0xc9b6a4],
        //     [center,691,223,0xc9b6a4],
        //     [center,727,252,0xa49088]]
        // ]]
        // desc: [[1280,720,
        //     [[center,576,426,0xdacbbc],
        //     [center,789,426,0xd8c8ba],
        //     [center,785,532,0xa49088],
        //     [center,795,456,0xab9988],
        //     [center,590,504,0x86807b],
        //     [center,631,504,0xc9b6a4],
        //     [center,670,504,0xc9b6a4],
        //     [center,710,504,0xc9b6a4],
        //     [center,749,504,0xc9b6a4]]
        // ]]
        desc: [
            [1280, 720,
                [
                    [center, 574, 428, 0xdacbbc],
                    [center, 786, 428, 0xdacabc],
                    [center, 590, 504, 0x86807b],
                    [center, 630, 504, 0xc9b6a4],
                    [center, 670, 504, 0xc9b6a4],
                    [center, 709, 504, 0xc9b6a4],
                    [center, 748, 504, 0xc9b6a4],
                    [center, 610, 495, 0xdcc4b5],
                    [center, 610, 515, 0xdac9bb],
                    [center, 785, 530, 0xa3958a],
                    [center, 775, 534, 0x9f9085]
                ]
            ]
        ]
    },
    '结界_0勋章': {
        region: [center, 1280, 720, 124, 125, 1152, 545],
        // desc: [[1280,720,
        //     [[center,567,286,0xd6c5b3],
        //     [center,784,297,0xdacdbc],
        //     [center,589,369,0xc9b4a4],
        //     [center,630,368,0xc9b6a4],
        //     [center,670,368,0xc9b6a4],
        //     [center,710,369,0xc9b6a4],
        //     [center,748,369,0xc9b6a4],
        //     [center,784,397,0xa49088]]
        // ]]
        // desc: [[1280,720,
        //     [[center,562,158,0xdaccbc],
        //     [center,789,157,0xd8c9ba],
        //     [center,795,205,0xab9988],
        //     [center,591,232,0xc9b5a4],
        //     [center,629,233,0xc9b6a4],
        //     [center,668,234,0xc9b6a4],
        //     [center,709,232,0xc9b6a4],
        //     [center,748,232,0xc9b6a4],
        //     [center,785,262,0xa39087]]
        // ]]
        desc: [
            [1280, 720,
                [
                    [center, 904, 155, 0xdacbbc],
                    [center, 1116, 161, 0xdacdbc],
                    [center, 1118, 262, 0xa38f86],
                    [center, 923, 233, 0xc9b4a4],
                    [center, 962, 233, 0xc9b6a4],
                    [center, 1002, 233, 0xc9b6a4],
                    [center, 1041, 233, 0xc9b6a4],
                    [center, 1080, 233, 0xc9b6a4],
                    [center, 942, 223, 0xd9c3b5],
                    [center, 942, 245, 0xdbcbbd]
                ]
            ]
        ]
    },
    '式神寄养_全列表空结界卡': {
        region: [center, 1280, 720, 215, 167, 660, 598],
        desc: [
            [
                1280, 720,
                [
                    [center, 649, 235, 0x82675d],
                    [center, 580, 192, 0xd7c9ba],
                    [center, 572, 215, 0xd7c9ba],
                    [center, 577, 252, 0xd7c9ba],
                    [center, 577, 300, 0xd7c9ba],
                    [center, 567, 340, 0xd7c9ba],
                    [center, 575, 362, 0xd7c9ba],
                    [center, 575, 402, 0xd7c9ba],
                    [center, 575, 445, 0xd7c9ba],
                    [center, 572, 470, 0xd7c9ba],
                    [center, 580, 510, 0xd7c9ba],
                    [center, 572, 532, 0xd7c9ba],
                    [center, 577, 562, 0xd7c9ba],
                    [center, 635, 242, 0xcbb59e],
                ]
            ]
        ]
    },
    '式神寄养_全列表被占用': {
        region: [center, 1280, 720, 215, 167, 646, 598],
        desc: [
            [
                1280, 720,
                [
                    [center, 563, 282, 0xae9b82],
                    [center, 560, 380, 0xae9b82],
                    [center, 556, 485, 0xae9b82],
                    [center, 570, 602, 0xae9b82],
                ]
            ]
        ]
    },
    '结界卡_斗鱼6星': {
        region: [center, 1280, 720, 215, 167, 646, 598],
        desc: [
            [1280, 720,
                [
                    [center, 593, 243, 0xe54c2a],
                    [center, 587, 244, 0xf7802b],
                    [center, 576, 213, 0x4fcef0],
                    [center, 560, 233, 0x4c90a1],
                    [center, 344, 254, 0xd7c9b9],
                    [center, 339, 187, 0xd7c9ba]
                ]
            ]
        ]
    },
    '结界卡_斗鱼5星': {
        region: [center, 1280, 720, 215, 167, 646, 598],
        desc: [
            [1280, 720,
                [
                    [center, 593, 243, 0x8a8282],
                    [center, 587, 244, 0xf7802b],
                    [center, 576, 213, 0xe2e3e2],
                    [center, 560, 233, 0x569098],
                    [center, 344, 254, 0xd7c9b9],
                    [center, 339, 187, 0xd7c9ba],
                    [center, 578, 243, 0xed7610]
                ]
            ]
        ]
    },
    '结界卡_斗鱼4星': {
        region: [center, 1280, 720, 215, 167, 646, 598],
        desc: [
            [1280, 720,
                [
                    [center, 593, 243, 0x8a8282],
                    [center, 587, 244, 0x948c8c],
                    [center, 576, 213, 0xe2e3e3],
                    [center, 560, 233, 0x569098],
                    [center, 344, 254, 0xd7c9b9],
                    [center, 339, 187, 0xd7c9ba],
                    [center, 578, 243, 0xed7610]
                ]
            ]
        ]
    },
    '结界卡_太鼓6星': {
        region: [center, 1280, 720, 215, 167, 646, 598],
        desc: [
            [1280, 720,
                [
                    [center, 593, 243, 0xe54c2a],
                    [center, 587, 244, 0xf7802b],
                    [center, 576, 213, 0xfea181],
                    [center, 560, 233, 0xe9549e],
                    [center, 344, 254, 0xd7c9b9],
                    [center, 339, 187, 0xd7c9ba]
                ]
            ],
            [
                1280, 720,
                [
                    [center, 595, 233, 0xf46d28],
                    [center, 586, 233, 0xed7610],
                    [center, 576, 221, 0xa77d75],
                    [center, 573, 239, 0xe5cc69],
                    [center, 579, 199, 0xd3a28b],
                ]
            ],
            [
                1280, 720,
                [
                    [center, 595, 378, 0xf46d28],
                    [center, 587, 378, 0xf46e28],
                    [center, 588, 367, 0xdf9b86],
                    [center, 580, 345, 0xd1a28d],
                    [center, 574, 385, 0xe5cc68],
                ]
            ]
        ]
    },
    '结界卡_太鼓5星': {
        region: [center, 1280, 720, 215, 167, 646, 598],
        desc: [
            [1280, 720,
                [
                    [center, 593, 243, 0x8a8282],
                    [center, 587, 244, 0xf7802b],
                    [center, 576, 213, 0xba8970],
                    [center, 560, 233, 0xdeb48b],
                    [center, 344, 254, 0xd7c9b9],
                    [center, 339, 187, 0xd7c9ba]
                ]
            ],
            [
                1280, 720,
                [
                    [center, 595, 490, 0x8c8a8a],
                    [center, 587, 490, 0xfd9137],
                    [center, 578, 490, 0xef841e],
                    [center, 574, 495, 0xe9d77d],
                    [center, 572, 467, 0xe7ceb6],
                    [center, 577, 458, 0xbb8a72],
                ]
            ],
            [
                1280, 720,
                [
                    [center, 595, 597, 0x8d8a8a],
                    [center, 586, 597, 0xf0831d],
                    [center, 578, 597, 0xf0831d],
                    [center, 570, 584, 0xe0af9e],
                    [center, 578, 567, 0xc59281],
                    [center, 574, 603, 0xefdb7d],
                ]
            ]
        ]
    },
    '结界卡_太鼓4星': {
        region: [center, 1280, 720, 215, 167, 646, 598],
        desc: [
            [1280, 720,
                [
                    [center, 593, 243, 0x8a8282],
                    [center, 587, 244, 0x948c8c],
                    [center, 576, 213, 0xba8970],
                    [center, 560, 233, 0xdeb48b],
                    [center, 344, 254, 0xd7c9b9],
                    [center, 339, 187, 0xd7c9ba],
                    [center, 578, 243, 0xed7610]
                ]
            ]
        ]
    },
    '结界卡_太鼓3星': {
        region: [center, 1280, 720, 215, 167, 646, 598],
        desc: [
            [1280, 720,
                [
                    [center, 593, 243, 0x8a8282],
                    [center, 587, 244, 0x948c8c],
                    [center, 576, 213, 0xce9887],
                    [center, 560, 233, 0xb88f6e],
                    [center, 344, 254, 0xd7c9b9],
                    [center, 339, 187, 0xd7c9ba],
                    [center, 578, 243, 0x8f8787],
                    [center, 590, 246, 0xc9b865]
                ]
            ]
        ]
    },
    '皮肤广告关闭按钮': {
        region: [left, 1280, 720, 1, 1, 1279, 719],
        similar: 95,
        desc: [
            [
                1280, 720,
                [
                    [right, 1200, 96, 0x892478],
                    [right, 1191, 94, 0xeecccc],
                    [right, 1181, 88, 0xe5d4cc],
                    [right, 1170, 88, 0x8e334e],
                    [right, 1187, 88, 0xb63f62],
                    [right, 1187, 108, 0x892e58],
                ]
            ]
        ]
    },
    '探索_经验标识': {
        region: [center, 1280, 720, 42, 345, 1173, 700],
        similar: 95,
        desc: [
            [1280, 720,
                [
                    [left, 946, 516, 0x9d2120],
                    [left, 947, 516, 0x921f1d],
                    [left, 948, 516, 0x8d1e1c],
                    // [left,949,516,0x881e1c],
                    [left, 946, 517, 0x9b2120],
                    [left, 947, 517, 0x95201e],
                    [left, 948, 517, 0x901f1d],
                    // [left,949,517,0x8b1e1c],
                    [left, 946, 518, 0x9a2121],
                    [left, 947, 518, 0x98201f],
                    [left, 948, 518, 0x931f1e],
                    // [left,948,518,0x8e1e1d],
                    [left, 946, 519, 0x972221],
                    [left, 947, 519, 0x9a2221],
                    [left, 948, 519, 0x95201f],
                    // [left,949,519,0x901e1d]
                ]
            ]
        ]
    },
    '探索_掉落标识': {
        region: [center, 1280, 720, 42, 345, 1173, 700],
        similar: 95,
        desc: [
            [1280, 720,
                [
                    [center, 896, 435, 0xcd3624],
                    [center, 896, 439, 0xa11b09],
                    [center, 902, 439, 0xfccc17]
                ]
            ],
            [1280, 720,
                [
                    [left, 54, 387, 0xd05625],
                    [left, 68, 424, 0xecda22],
                    [left, 32, 411, 0xb01a14]
                ]
            ]
        ]
    },
    '探索_挑战': {
        region: [center, 1280, 720, 87, 178, 1257, 547],
        desc: [
            [1280, 720,
                [
                    [center, 1000, 442, 0xffffed],
                    [center, 1016, 450, 0xeeacb4],
                    [center, 1011, 473, 0x404879],
                    [center, 1032, 488, 0x31396b],
                    [center, 1040, 505, 0xfffbe2]
                ]
            ],
            [1280, 720,
                [
                    [center, 1000, 447, 0x422918],
                    [center, 1016, 450, 0xf8b6be],
                    [center, 1011, 473, 0x424a7b],
                    [center, 1032, 488, 0x31396b],
                    [center, 1040, 508, 0x1a0e05]
                ]
            ]
        ]
    },
    '探索_挑战BOSS': {
        region: [center, 1280, 720, 87, 178, 1257, 547],
        similar: 95, // 手动修改这个相似度不受外部控制
        desc: [
            [1280, 720,
                [
                    [center, 609, 248, 0x2f0d09],
                    [center, 643, 236, 0xeeb4bc],
                    [center, 656, 244, 0x361d0d],
                    [center, 672, 278, 0x3d2514],
                    [center, 654, 298, 0x703d1b],
                    [center, 637, 283, 0xfffff9],
                    [center, 646, 307, 0x251308]
                ]
            ],
            [1280, 720,
                [
                    [center, 648, 240, 0x332211],
                    [center, 674, 236, 0xf0b0b0],
                    [center, 708, 282, 0x30180c],
                    [center, 643, 281, 0x3d668f],
                    [center, 660, 239, 0x402716],
                    [center, 686, 272, 0xf4ece3]
                ]
            ],
            [1280, 720,
                [
                    [center, 406, 238, 0x312010],
                    [center, 428, 236, 0xf7b2b5],
                    [center, 455, 262, 0x422c60],
                    [center, 455, 278, 0x3c2313],
                    [center, 457, 289, 0x31120a],
                    [center, 420, 284, 0xf7fbff],
                    [center, 417, 301, 0xef9fa9],
                    [center, 389, 270, 0x1f0f08],
                ]
            ]
        ]
        // desc: [[1280,720,
        //     [[center,595,247,0x2b1a09],
        //     [center,628,236,0xf4b2ba],
        //     [center,616,298,0xf4b2ba],
        //     [center,658,289,0x2d180c],
        //     [center,595,277,0x498daf]]
        // ]]
    },
    '准备界面_满级标识': {
        region: [center, 1280, 720, 6, 257, 866, 640],
        desc: [
            [1280, 720,
                [
                    [center, 473, 318, 0xeca831],
                    [center, 480, 319, 0xf89f22],
                    [center, 472, 334, 0xf8e71b],
                    [center, 489, 333, 0xf4e317],
                    [center, 485, 318, 0xfaa31b]
                ]
            ],
            [1280, 720,
                [
                    [center, 740, 403, 0xe8a42f],
                    [center, 748, 404, 0xfe9f18],
                    [center, 753, 403, 0xf9a41e],
                    [center, 745, 418, 0xcdbc00],
                    [center, 756, 419, 0xf4e317]
                ]
            ]
        ]
    },
    '地鬼_难度把手': {
        region: [center, 1280, 720, 158, 231, 575, 337],
        desc: [
            [1280, 720,
                [
                    [center, 403, 273, 0xffff81],
                    [center, 413, 276, 0xfffcbf],
                    [center, 405, 288, 0xfffdb0],
                    [center, 424, 287, 0xfef77c],
                ]
            ]
        ]
    },
    '准备_N卡': {
        region: [center, 1280, 720, 121, 485, 1016, 656],
        desc: [
            [1280, 720,
                [
                    [center, 544, 506, 0x382214],
                    [center, 561, 662, 0x6fa8c9],
                    [center, 576, 663, 0x6ea8c9],
                    [center, 590, 662, 0x7a7a7a],
                    [center, 604, 662, 0x777777],
                    [center, 551, 507, 0xded8c6]
                ]
            ]
        ]
    },
    '绿标_标识_A': {
        region: [center, 1280, 720, 0, 156, 1279, 650],
        similar: 90,
        desc: [
            [1280, 720,
                [
                    [center, 59, 308, 0xdcc3b2],
                    [center, 59, 314, 0x8c372f],
                    [center, 59, 319, 0x8b362e],
                    [center, 53, 308, 0x89372d],
                    [center, 64, 308, 0x89372c],
                    [center, 63, 319, 0xd0ae9f],
                    [center, 54, 319, 0xdabeaf]
                ]
            ],
            [1280, 720,
                [
                    [center, 59, 308, 0xdcc2b0],
                    [center, 63, 308, 0x8c3423],
                    [center, 55, 308, 0x8c3423],
                    [center, 59, 314, 0x8f3426],
                    [center, 59, 320, 0x8c3424],
                    [center, 54, 319, 0xdabeac],
                    [center, 63, 319, 0xd1ad9c]
                ]
            ],
            [1280, 720,
                [
                    [center, 855, 252, 0xdfc7b6],
                    [center, 850, 251, 0x97443b],
                    [center, 860, 251, 0x97423b],
                    [center, 855, 257, 0x97413b],
                    [center, 855, 264, 0x99453d],
                    [center, 850, 263, 0xdabaac],
                    [center, 859, 262, 0xd8b7a9]
                ]
            ],
            [1280, 720,
                [
                    [center, 1132, 363, 0xdbc4b0],
                    [center, 1127, 363, 0x863a27],
                    [center, 1138, 363, 0x873f2b],
                    [center, 1132, 369, 0x873827],
                    [center, 1132, 375, 0x853321],
                    [center, 1128, 374, 0xcaa593],
                    [center, 1137, 374, 0xd2b4a2]
                ]
            ],
            [1280, 720,
                [
                    [center, 1132, 364, 0xc7aa97],
                    [center, 1126, 364, 0x8a4f3e],
                    [center, 1138, 364, 0x8d5441],
                    [center, 1132, 369, 0x8c4d3e],
                    [center, 1132, 374, 0x894637],
                    [center, 1129, 371, 0xd9c3b2],
                    [center, 1136, 371, 0xd0b5a4]
                ]
            ],
            [1280, 720,
                [
                    [center, 370, 304, 0xdbc6b3],
                    [center, 365, 303, 0x8a432f],
                    [center, 375, 303, 0x894330],
                    [center, 370, 310, 0x883b2b],
                    [center, 370, 316, 0x853321],
                    [center, 366, 314, 0xcead9b],
                    [center, 374, 313, 0xcba796]
                ]
            ],
            [1280, 720,
                [
                    [center, 370, 304, 0xdbc4b2],
                    [center, 365, 304, 0x843d30],
                    [center, 375, 304, 0x863828],
                    [center, 370, 310, 0x88382b],
                    [center, 370, 314, 0x873629],
                    [center, 366, 314, 0xceae9d],
                    [center, 374, 313, 0xcba898]
                ]
            ],
            [1280, 720,
                [
                    [center, 237, 352, 0x8d4139],
                    [center, 244, 353, 0xddc7b7],
                    [center, 244, 365, 0x8b423b],
                    [center, 240, 362, 0xd0b2a4],
                    [center, 248, 362, 0xd1b3a5],
                    [center, 244, 358, 0x8b403b],
                    [center, 249, 354, 0x8b4139]
                ]
            ],
            [1280, 720,
                [
                    [center, 239, 352, 0xb15946],
                    [center, 244, 353, 0xe6ccb9],
                    [center, 240, 363, 0xd5b0a0],
                    [center, 248, 362, 0xd8b6a5],
                    [center, 244, 363, 0x9e473a],
                    [center, 249, 353, 0xae5644]
                ]
            ],
            [1280, 720,
                [
                    [center, 841, 339, 0x8f3522],
                    [center, 847, 339, 0xdcc1ad],
                    [center, 852, 339, 0x882c17],
                    [center, 847, 351, 0x892d18],
                    [center, 851, 348, 0xd4b29f],
                    [center, 844, 348, 0xb77e6b]
                ]
            ],
            [1280, 720,
                [
                    [center, 461, 337, 0x903220],
                    [center, 467, 337, 0xddc1ae],
                    [center, 472, 337, 0x943522],
                    [center, 467, 348, 0x92301e],
                    [center, 463, 347, 0xd6b19f],
                    [center, 472, 347, 0xd5b09e]
                ]
            ]
        ]
    },
    '庭院_町中竖牌': {
        region: [center, 1280, 720, 0, 83, 1279, 412],
        desc: [
            [1280, 720,
                [
                    [center, 745, 269, 0x12110f],
                    [center, 741, 272, 0xb6aca7],
                    [center, 737, 297, 0x160d07],
                    [center, 751, 291, 0xaba69a],
                    [center, 726, 294, 0xaeaa97],
                    [center, 728, 267, 0x060503]
                ]
            ]
        ]
    },
    '町中_逢魔之时灯笼': {
        region: [center, 1280, 720, 0, 83, 1279, 412],
        desc: [
            [1280, 720,
                [
                    [center, 645, 180, 0xfff4b0],
                    [center, 643, 185, 0xfbe5a3],
                    [center, 649, 184, 0x0c0808],
                    [center, 653, 148, 0xeeccaa],
                    [center, 640, 181, 0x0c0808],
                    [center, 646, 196, 0xd8a78e]
                ]
            ]
        ]
    },
    '庭院_探索灯笼': {
        region: [center, 1280, 720, 0, 83, 1279, 412],
        desc: [
            [1280, 720,
                [
                    [center, 658, 109, 0xd2a580],
                    [center, 670, 120, 0x020100],
                    [center, 681, 120, 0x020101],
                    [center, 681, 134, 0xfee4a5],
                    [center, 676, 145, 0x100b03],
                    [center, 688, 144, 0xfff6b2],
                    [center, 688, 156, 0xffffc2]
                ]
            ],
            [1280, 720,
                [
                    [right, 1112, 107, 0xd0a786],
                    [center, 1120, 113, 0x010100],
                    [center, 1133, 120, 0x010101],
                    [center, 1136, 132, 0xfadd9d],
                    [center, 1126, 133, 0xf9de9f],
                    [center, 1130, 143, 0x0e0903],
                    [center, 1126, 158, 0x1e1405],
                    [center, 1126, 175, 0xffffc7]
                ]
            ]
        ]
    },
    '探索_宝箱': {
        region: [left, 1280, 720, 0, 121, 148, 577],
        desc: [
            [1280, 720,
                [
                    [left, 27, 315, 0xebdfc3],
                    [left, 64, 324, 0x221514],
                    [left, 75, 355, 0xb63818],
                    [left, 43, 354, 0xae2b18],
                    [left, 112, 322, 0xe9dabe],
                    [left, 104, 360, 0x241717]
                ]
            ]
        ]
    },
    '公频聊天_未读红点': {
        region: [left, 1280, 720, 21, 22, 108, 714],
        desc: [
            [1280, 720,
                [
                    [left, 54, 349, 0xe7d5be],
                    [left, 90, 345, 0xfd1010],
                    [left, 90, 354, 0xfe1010],
                    [left, 84, 349, 0xdc0000],
                    [left, 96, 349, 0xfc5c5c],
                    [left, 78, 399, 0x745230]
                ]
            ],
            [1280, 720,
                [
                    [left, 54, 349, 0x822d2d],
                    [left, 90, 345, 0xfd1010],
                    [left, 90, 354, 0xfe1111],
                    [left, 84, 349, 0xdc0000],
                    [left, 96, 349, 0xfc5c5c],
                    [left, 78, 399, 0xd3a05c]
                ]
            ]
        ]
    },
    '悬赏_挑战字样': {
        region: [left, 1280, 720, 512, 45, 1256, 428],
        desc: [
            [1280, 720,
                [
                    [center, 544, 316, 0x883322],
                    [center, 595, 317, 0x923220],
                    [center, 597, 331, 0x963321],
                    [center, 541, 331, 0x883322],
                    [center, 571, 322, 0x8a3420]
                ]
            ]
        ]
    },
    '悬赏_秘闻字样': {
        region: [left, 1280, 720, 512, 45, 1256, 428],
        desc: [
            [1280, 720,
                [
                    [center, 541, 319, 0x3070aa],
                    [center, 601, 319, 0x3070aa],
                    [center, 541, 333, 0x3070aa],
                    [center, 597, 333, 0x3070aa],
                    [center, 555, 317, 0xcae1da],
                    [center, 591, 334, 0xdeefde]
                ]
            ],
            [1280, 720,
                [
                    [center, 541, 247, 0x3072ab],
                    [center, 598, 247, 0x2f72a5],
                    [center, 599, 264, 0x3070aa],
                    [center, 541, 267, 0x3070aa],
                    [center, 555, 249, 0xdff0df],
                    [center, 553, 266, 0xd6e7de],
                    [center, 548, 263, 0xd9ebdc],
                    [center, 565, 249, 0xa4b6b7],
                    [center, 577, 250, 0x3477aa],
                    [center, 579, 249, 0xbfd8e0],
                    [center, 591, 265, 0xdeefde]
                ]
            ],
            [1280, 720,
                [
                    [center, 541, 384, 0x3272a9],
                    [center, 601, 385, 0x2d71a4],
                    [center, 600, 405, 0x3070aa],
                    [center, 542, 405, 0x3070aa],
                    [center, 564, 393, 0xe8f4f4],
                    [center, 579, 387, 0x70a0c2]
                ]
            ]
        ]
    },
    '悬赏_宝箱': {
        region: [left, 1280, 720, 0, 92, 155, 557],
        desc: [
            [1280, 720,
                [
                    [left, 70, 337, 0x51252b],
                    [left, 50, 345, 0xb52c19],
                    [left, 85, 344, 0x7f401c],
                    [left, 60, 354, 0xe2aa30],
                    [left, 51, 360, 0xd18d22],
                    [left, 74, 366, 0xe19d26]
                ]
            ],
            [1280, 720,
                [
                    [left, 58, 192, 0xbd461f],
                    [left, 70, 194, 0x4a2839],
                    [left, 85, 194, 0xb25922],
                    [left, 59, 206, 0xe0a927],
                    [left, 49, 216, 0xcc8827],
                    [left, 86, 215, 0x682412],
                    [left, 78, 227, 0x460202]
                ]
            ],
            [1280, 720,
                [
                    [left, 71, 433, 0x3e1c29],
                    [left, 63, 449, 0xc08d16],
                    [left, 51, 456, 0xd08c1e],
                    [left, 73, 461, 0xd7931c],
                    [left, 83, 458, 0x551105]
                ]
            ]
        ]
    },
    '悬赏_已追踪任务': {
        region: [left, 1280, 720, 0, 112, 153, 555],
        desc: [
            [1280, 720,
                [
                    [left, 130, 418, 0x28303c],
                    [left, 36, 383, 0x989488],
                    [left, 60, 402, 0xa9a598],
                    [left, 83, 400, 0x79756b],
                    [left, 102, 402, 0xbab6a7]
                ]
            ],
            [1280, 720,
                [
                    [left, 36, 238, 0x9d998d],
                    [left, 26, 256, 0x8b877c],
                    [left, 61, 259, 0x33302b],
                    [left, 49, 259, 0x292622],
                    [left, 83, 256, 0xeae5d3],
                    [left, 84, 238, 0xafaa9d],
                    [left, 103, 259, 0x312e2a],
                    [left, 128, 272, 0x27303c]
                ]
            ],
            [1280, 720,
                [
                    [left, 85, 406, 0xb2904c],
                    [left, 70, 405, 0x7a5529],
                    [left, 56, 405, 0x6d4e21],
                    [left, 28, 431, 0x472e2e],
                    [left, 106, 429, 0x493131],
                    [left, 106, 467, 0x312020],
                    [left, 26, 462, 0x352424],
                    [left, 128, 513, 0x27303c]
                ]
            ]
        ]
    },
    '悬赏_挑战弹窗界面': {
        region: [left, 1280, 720, 718, 420, 1122, 629],
        desc: [
            [1280, 720,
                [
                    [right, 989, 517, 0xf4b25f],
                    [right, 991, 542, 0xf4b25f],
                    [center, 909, 518, 0xf4b25f],
                    [center, 910, 540, 0xf4b25f],
                    [right, 1009, 506, 0x993333],
                    [right, 1013, 548, 0x933e2d],
                    [right, 1003, 555, 0x903b2a],
                    [right, 1011, 527, 0xf6b462],
                    [right, 981, 541, 0x332c24]
                ]
            ]
        ]
    },
    '悬赏_识别秘闻界面': {
        region: [left, 1280, 720, 929, 23, 1230, 689],
        desc: [
            [1280, 720,
                [
                    [right, 1178, 102, 0x67333c],
                    [right, 1176, 212, 0x754420],
                    [right, 1169, 270, 0xe0be58],
                    [right, 1180, 427, 0xe7d6b2],
                    [right, 1103, 556, 0xb1937b],
                    [right, 1105, 611, 0xe1d8c0],
                    [right, 1088, 620, 0xf48a37],
                    [right, 1153, 79, 0x533b23],
                    [right, 1192, 328, 0xfef2c2]
                ]
            ],
        ]
    },
    "探索界面_检测左边是否有追踪任务的悬浮列表": {
        region: [left, 1280, 720, 0, 95, 154, 284],
        desc: [
            [1280, 720,
                [
                    [left, 135, 133, 0x7c5b22],
                    [left, 80, 132, 0x43322a],
                    [left, 8, 132, 0x48372f],
                    [left, 42, 132, 0x44332b]
                ]
            ],
            [1280, 720,
                [
                    [left, 138, 133, 0x88671e],
                    [left, 110, 133, 0x45342c],
                    [left, 59, 131, 0x47362e],
                    [left, 13, 132, 0x493430]
                ]
            ]

        ]
    },
    "地鬼_探索界面检测地鬼入口": {
        region: [left, 1280, 720, 407, 594, 1040, 713],
        desc: [
            [1280, 720,
                [
                    [center, 835, 641, 0x1f171f],
                    [center, 859, 638, 0xb72e20],
                    [center, 870, 632, 0xfffff9],
                    [center, 880, 645, 0xc24e35],
                    [center, 878, 663, 0xd45037],
                    [center, 870, 670, 0xcd4431],
                    [center, 852, 682, 0x839db6],
                    [center, 837, 679, 0xddeeff]
                ]
            ],
            [1280, 720,
                [
                    [center, 848, 627, 0x785f4f],
                    [center, 867, 626, 0xfa8462],
                    [center, 882, 634, 0xb43325],
                    [center, 881, 673, 0x714a5f],
                    [center, 859, 674, 0x8e2828],
                    [center, 843, 661, 0xb9463a],
                    [center, 854, 654, 0x9f5018]
                ]
            ]

        ]
    },
    "悬赏_庭院检测悬赏图标": {
        region: [left, 1280, 720, 3, 199, 1272, 477],
        desc: [
            [1280, 720,
                [
                    [left, 222, 268, 0x352554],
                    [left, 236, 268, 0x555567],
                    [left, 247, 273, 0x793a34],
                    [left, 224, 284, 0xe2caae],
                    [left, 242, 281, 0xfdddbc],
                    [left, 224, 289, 0xc8a976],
                    [left, 241, 287, 0xf7d6a3],
                    [left, 232, 303, 0xbca37a]
                ]
            ],
            [1280, 720,
                [
                    [left, 226, 268, 0x706362],
                    [left, 237, 268, 0x55556a],
                    [left, 248, 278, 0xb03939],
                    [left, 221, 284, 0xb7685c],
                    [left, 237, 285, 0x572413],
                    [left, 221, 300, 0x6c5b5a],
                    [left, 244, 300, 0x922c2c]
                ]
            ],
            [1280, 720,
                [
                    [center, 451, 329, 0xd0ae7e],
                    [center, 473, 334, 0xc73f3f],
                    [center, 446, 346, 0x80453e],
                    [center, 463, 345, 0xf0e1bc],
                    [center, 459, 354, 0xe6c29d],
                    [center, 445, 364, 0x776649],
                    [center, 464, 369, 0x883d3d]
                ]
            ]
        ]
    },
    '金币妖怪_金币妖怪字样': {
        region: [left, 1280, 720, 130, 106, 369, 687],
        desc: [
            [1280, 720,
                [
                    [left, 151, 161, 0x79502f],
                    [center, 359, 210, 0x79502f],
                    [left, 206, 177, 0x282521],
                    [left, 194, 190, 0x2b2824],
                    [left, 238, 201, 0x2a2723],
                    [left, 282, 199, 0x2a2622],
                    [left, 259, 199, 0x3b3731],
                    [left, 293, 201, 0x312d28],
                    [left, 313, 189, 0x37332e]
                ]
            ],
            [1280, 720,
                [
                    [left, 148, 159, 0x755331],
                    [center, 362, 213, 0x735230],
                    [left, 206, 177, 0x282521],
                    [left, 206, 200, 0x332f2a],
                    [left, 242, 176, 0x2d2925],
                    [left, 239, 203, 0x59534b],
                    [left, 230, 185, 0x7b7267]
                ]
            ]
        ]
    },
    '金币妖怪_判断队伍是否有人': {
        region: [left, 1280, 720, 347, 232, 465, 338],
        desc: [
            [1280, 720,
                [
                    [center, 421, 273, 0xfffffc],
                    [center, 419, 314, 0xfffff8],
                    [center, 399, 293, 0xffffff],
                    [center, 442, 295, 0xfffff1],
                    [center, 421, 295, 0xffffff]
                ]
            ]
        ]
    },
    '金币妖怪_判断挑战次数是否用完': {
        region: [left, 1280, 720, 0, 0, 1280, 720],
        desc: [
            [1280, 720,
                [
                    [left, 150, 361, 0x241407],
                    [left, 150, 368, 0x251408],
                    [left, 258, 362, 0x844e32],
                    [left, 230, 365, 0x683321],
                    [left, 252, 371, 0x743d26],
                    [center, 359, 362, 0x96521f],
                    [center, 361, 413, 0x965423],
                    [left, 152, 413, 0xa05f27]
                ]
            ],
            [1280, 720,
                [
                    [left, 150, 360, 0x241407],
                    [left, 149, 370, 0x27170a],
                    [left, 249, 361, 0x6d3924],
                    [left, 249, 368, 0x6e3723],
                    [left, 149, 366, 0x241408],
                    [center, 358, 366, 0x96521f],
                    [left, 149, 411, 0x995522],
                    [center, 358, 413, 0x96521f]
                ]
            ]
        ]
    },
    '开启的BUFF': {
        region: [center, 1280, 720, 744, 116, 919, 530],
        desc: [
            [1280, 720,
                [
                    [center, 775, 143, 0xdb9009],
                    [center, 776, 159, 0xe08500],
                    [center, 854, 143, 0xf5c206],
                    [center, 854, 160, 0xeebb05],
                ]
            ],
            [1280, 720,
                [
                    [center, 775, 415, 0xe08300],
                    [center, 777, 432, 0xe08602],
                    [center, 851, 415, 0xebb700],
                    [center, 851, 432, 0xe9b701]
                ]
            ],
            [1280, 720,
                [
                    [center, 775, 482, 0xe08300],
                    [center, 853, 484, 0xF1BC06],
                    [center, 849, 485, 0xebb600],
                    [center, 776, 485, 0xe38600],
                ]
            ],
            // 不到一个小时的buff
            [1280, 720,
                [
                    [center, 775, 280, 0xe38500],
                    [center, 776, 297, 0xe08602],
                    [center, 855, 298, 0x2e3743],
                    [center, 854, 279, 0x28313e],
                ]
            ]
        ]
    },
    '关闭的BUFF_觉醒': {
        region: [center, 1280, 720, 744, 116, 919, 530],
        desc: [
            [1280, 720,
                [
                    [center, 775, 145, 0xb00e2c],
                    [center, 872, 147, 0x9e9e7c],
                    [center, 867, 157, 0x9e9d7d],
                    [center, 879, 156, 0x9e9b7d],
                    [center, 402, 138, 0xef6b06],
                    [center, 380, 162, 0xcfc0b6],
                ]
            ]
        ]
    },
    '关闭的BUFF_御魂': {
        region: [center, 1280, 720, 744, 116, 919, 530],
        desc: [
            [1280, 720,
                [
                    [center, 776, 212, 0xb10c2d],
                    [center, 874, 213, 0x9e9b7d],
                    [center, 867, 225, 0x9e9d7d],
                    [center, 879, 224, 0x9e9b7d],
                    [center, 396, 235, 0x0cd2e3],
                    [center, 401, 206, 0x01c8dc],
                    [center, 407, 202, 0xd3c7be],
                ]
            ]
        ]
    },
    '关闭的BUFF_金币': {
        region: [center, 1280, 720, 744, 116, 919, 530],
        desc: [
            [1280, 720,
                [
                    [center, 775, 348, 0xb00e2c],
                    [center, 873, 350, 0x9f9f7d],
                    [center, 867, 359, 0x9e9e7d],
                    [center, 879, 359, 0x9e9b7d],
                    [center, 390, 362, 0xd2c2b7],
                    [center, 385, 374, 0xd49240],
                    [center, 412, 368, 0xf7e526],
                ]
            ]
        ]
    },
    '关闭的BUFF_经验': {
        region: [center, 1280, 720, 744, 116, 919, 530],
        desc: [
            [1280, 720,
                [
                    [center, 776, 415, 0xb10c2d],
                    [center, 872, 418, 0x9e9e7c],
                    [center, 868, 427, 0x9f9f7d],
                    [center, 879, 427, 0x9e9b7d],
                    [center, 396, 440, 0x9eb7df],
                    [center, 411, 435, 0xf7e72b],
                ]
            ],
            [1280, 720,
                [
                    [center, 775, 483, 0xb00e2c],
                    [center, 872, 485, 0x9e9e7c],
                    [center, 867, 495, 0xaba08d],
                    [center, 879, 494, 0xaca28e],
                    [center, 412, 484, 0x94b9e3],
                    [center, 411, 499, 0xc4b482],
                ]
            ]
        ]
    },
    '宴会_食物': {
        region: [left, 1280, 720, 0, 312, 1280, 522],
        desc: [
            [1280, 720,
                [
                    [left, 202, 402, 0x4d555d],
                    [left, 213, 416, 0xdad2c2],
                    [left, 212, 424, 0xdfc7b6],
                    [left, 209, 434, 0x7b2121],
                    [left, 199, 442, 0x67482a],
                    [left, 184, 438, 0x62472c],
                    [left, 181, 423, 0x4c3b24],
                    [left, 183, 412, 0xd7c98f],
                    [left, 192, 418, 0x966e3b]
                ]
            ],
            [1280, 720,
                [
                    [center, 641, 422, 0xb5735e],
                    [center, 649, 416, 0xd63d3d],
                    [center, 655, 416, 0xa6bcbc],
                    [center, 667, 415, 0xb5243f],
                    [center, 675, 426, 0x2e181c],
                    [center, 674, 434, 0xd0a17f],
                    [center, 671, 444, 0xd8b196],
                    [center, 659, 449, 0xfafaf7],
                    [center, 649, 443, 0xbd2a3e]
                ]
            ],
            [1280, 720,
                [
                    [right, 1052, 419, 0xf69033],
                    [right, 1078, 417, 0xfae9d8],
                    [right, 1079, 434, 0xc13b3b],
                    [right, 1064, 442, 0xcdc09c],
                    [right, 1054, 431, 0xf0cf36],
                    [right, 1045, 435, 0xafafad],
                    [right, 1058, 420, 0x9d6b37]
                ]
            ]
        ]
    },
    '宴会_爆竹': {
        region: [left, 1280, 720, 1000, 621, 1115, 712],
        desc: [
            [1280, 720,
                [
                    [right, 1049, 640, 0xc0af9e],
                    [right, 1057, 644, 0x30271f],
                    [right, 1041, 650, 0x844239],
                    [right, 1040, 662, 0xa84545],
                    [right, 1042, 676, 0xa84141],
                    [right, 1057, 650, 0x9b8a75],
                    [right, 1053, 657, 0xc35d5d],
                    [right, 1057, 687, 0x282828],
                    [right, 1073, 666, 0x762425],
                    [right, 1054, 640, 0x857463],
                    [right, 1053, 638, 0x53493e],
                    [right, 1052, 640, 0xb09f8e]
                ]
            ]
        ]
    },
    '宴会_爆竹经验': {
        region: [left, 1280, 720, 3, 127, 1269, 521],
        desc: [
            [1280, 720,
                [
                    [center, 481, 348, 0xbedbef],
                    [center, 481, 353, 0x216598],
                    [center, 481, 364, 0xa5c8f3],
                    [center, 480, 372, 0x5880c2],
                    [center, 480, 378, 0x7a9fd4],
                    [center, 482, 382, 0x91b0de]
                ]
            ],
            [1280, 720,
                [
                    [center, 485, 353, 0x488ad4],
                    [center, 478, 353, 0x2c76a8],
                    [center, 475, 365, 0x98bae3],
                    [center, 488, 364, 0x9fbee3],
                    [center, 474, 378, 0xa1b8e3],
                    [center, 489, 378, 0xa4bfe1]
                ]
            ]
        ]
    },
    '宴会_式神满级': {
        region: [left, 1280, 720, 4, 210, 1249, 504],
        desc: [
            [1280, 720,
                [
                    [center, 665, 357, 0xcb9821],
                    [center, 663, 361, 0xf1b021],
                    [center, 662, 370, 0xecca53],
                    [center, 670, 356, 0xfbb821],
                    [center, 675, 354, 0xcc911c],
                    [center, 670, 351, 0x3e1c1c],
                    [center, 670, 373, 0x2c1b0d],
                    [center, 671, 362, 0xf5c23a]
                ]
            ],
            [1280, 720,
                [
                    [center, 551, 352, 0xb78415],
                    [center, 560, 355, 0x7e4f11],
                    [center, 552, 346, 0x3e1c1c],
                    [center, 553, 342, 0xe7cd9c],
                    [center, 553, 373, 0xedbb99],
                    [center, 552, 367, 0x2b160b],
                    [center, 559, 364, 0xe3c139]
                ]
            ]
        ]
    },
    '开号_剧情更多按钮': {
        region: [center, 1280, 720, 0, 0, 1279, 719],
        desc: [
            // 三个点的按钮
            [1280, 720,
                [
                    [right, 1216, 332, 0x0f100c],
                    [right, 1217, 353, 0xffecec],
                    [right, 1236, 353, 0xffe9e9],
                    [right, 1253, 353, 0xffe9e9],
                    [right, 1235, 375, 0x10100c],
                    [right, 1236, 390, 0x211d19],
                    [right, 1265, 351, 0x1f140e],
                ]
            ],
            // 眼睛按钮
            [1280, 720,
                [
                    [center, 640, 169, 0xffffff],
                    [center, 661, 201, 0x443b44],
                    [center, 681, 185, 0x423942],
                    [center, 680, 211, 0xccaa11],
                    [center, 640, 227, 0xe3c106],
                    [center, 678, 184, 0x433a43],
                ]
            ],
            // 探索挑战图标1
            [1280, 720,
                [
                    [center, 1000, 442, 0xffffed],
                    [center, 1016, 450, 0xeeacb4],
                    [center, 1011, 473, 0x404879],
                    [center, 1032, 488, 0x31396b],
                    [center, 1040, 505, 0xfffbe2]
                ]
            ],
            // 探索挑战图标2
            [1280, 720,
                [
                    [center, 1000, 447, 0x422918],
                    [center, 1016, 450, 0xf8b6be],
                    [center, 1011, 473, 0x424a7b],
                    [center, 1032, 488, 0x31396b],
                    [center, 1040, 508, 0x1a0e05]
                ]
            ]
        ]
    },
    '绿标': {
        region: [center, 1280, 720, 33, 58, 1243, 597],
        desc: [
            [1280, 720,
                [
                    [center, 812, 281, 0x14964e],
                    [center, 810, 289, 0x2db560],
                    [center, 816, 288, 0x41d57a],
                ]
            ],
            [1280, 720,
                [
                    [center, 662, 338, 0x1ed995],
                    [center, 663, 339, 0x22dd99],
                    [center, 665, 334, 0x028654],
                ]
            ],
            [1280, 720,
                [
                    [center, 959, 258, 0x2eb661],
                    [center, 957, 255, 0x2db560],
                    [center, 960, 261, 0x34bc67],
                ]
            ],
            [1280, 720,
                [
                    [center, 909, 207, 0x3bce73],
                    [center, 907, 210, 0x4dda7f],
                    [center, 905, 214, 0x5be386],
                ]
            ]
        ]
    },
    '六道萤草_腐草为萤': {
        region: [center, 1280, 720, 62, 471, 1068, 684],
        desc: [
            // 打怪后选择的腐草为萤
            [1280, 720,
                [
                    [center, 267, 559, 0x25363d],
                    [center, 308, 177, 0x60b52d],
                    [center, 302, 219, 0xf4ff77],
                    [center, 322, 197, 0xdfef95],
                    [center, 350, 192, 0x2a5424],
                    [center, 324, 233, 0xa04d45],
                    [center, 288, 202, 0x263e1f],
                ]
            ],
            // 开局的腐草为萤
            [1280, 720,
                [
                    [center, 267, 559, 0x25363d],
                    [center, 308, 177, 0x60b52d],
                    [center, 302, 219, 0xf4ff77],
                    [center, 322, 197, 0xdfef95],
                    [center, 350, 192, 0x2a5424],
                    [center, 324, 233, 0xa04d45],
                    [center, 288, 202, 0x263e1f],
                ]
            ],
        ]
    },
    '六道萤草_妖力化身': {
        region: [center, 1280, 720, 62, 471, 1068, 684],
        desc: [
            [1280, 720,
                [
                    [center, 708, 560, 0x253639],
                    [center, 735, 216, 0xffffb2],
                    [center, 795, 222, 0xffffa0],
                    [center, 775, 178, 0xffffa4],
                    [center, 766, 192, 0x3d1c0b],
                    [center, 742, 175, 0x462514],
                ]
            ]
        ]
    },
    '六道萤草_六道净化': {
        region: [center, 1280, 720, 62, 471, 1068, 684],
        desc: [
            [1280, 720,
                [
                    [center, 434, 560, 0x253639],
                    [center, 479, 186, 0xafc0f9],
                    [center, 496, 184, 0xb5c6fa],
                    [center, 459, 199, 0xb8c9ff],
                    [center, 516, 226, 0x060639],
                    [center, 504, 172, 0x1a2e6e],
                ]
            ]
        ]
    },
    '六道萤草_萤火之光': {
        region: [center, 1280, 720, 62, 471, 1068, 684],
        desc: [
            [1280, 720,
                [
                    [center, 436, 558, 0x27383c],
                    [center, 491, 185, 0x4e9002],
                    [center, 489, 227, 0x334a12],
                    [center, 491, 234, 0xa3508a],
                    [center, 509, 202, 0xd5ffa1],
                    [center, 468, 191, 0xffffce],
                    [center, 455, 200, 0x071117],
                ]
            ]
        ]
    },
    '六道萤草_鏖战': {
        region: [center, 1280, 720, 38, 154, 1269, 630],
        desc: [
            // 两个时的右
            [1280, 720,
                [
                    [center, 903, 370, 0xc3ad9a],
                    [center, 925, 361, 0xc65f48],
                    [center, 943, 366, 0xfaf3ea],
                    [center, 942, 411, 0xcb6d57],
                    [center, 854, 459, 0x75ab79],
                    [center, 958, 480, 0x619269],
                ]
            ],
            // 两个时的右
            [1280, 720,
                [
                    [center, 907, 372, 0xf5f1e9],
                    [center, 943, 370, 0xf9f1e9],
                    [center, 937, 391, 0xde8260],
                    [center, 953, 486, 0x67966d],
                    [center, 932, 523, 0x4d5555],
                ]
            ],
            // 两个时的左
            [1280, 720,
                [
                    [center, 372, 366, 0xf8f0e8],
                    [center, 414, 364, 0xf9f1e9],
                    [center, 405, 380, 0xd77a5d],
                    [center, 406, 505, 0x73ad7a],
                    [center, 408, 540, 0x495553],
                ]
            ],
            // 一个时的中
            [1280, 720,
                [
                    [center, 645, 354, 0xf7f0e9],
                    [center, 684, 354, 0xf9f1e9],
                    [center, 673, 358, 0xd97358],
                    [center, 683, 402, 0xce745c],
                    [center, 688, 476, 0x619069],
                    [center, 596, 448, 0x75a675],
                ]
            ],
            // 三个时的左
            [1280, 720,
                [
                    [center, 286, 265, 0xf7f0e7],
                    [center, 302, 267, 0xd16a51],
                    [center, 319, 266, 0xf9f1e9],
                    [center, 326, 296, 0xe1906e],
                    [center, 318, 357, 0x5b8a63],
                    [center, 313, 391, 0x495757],
                ]
            ],
            // 三个时的右
            [1280, 720,
                [
                    [center, 1040, 291, 0xf5f0e8],
                    [center, 1068, 292, 0xfaf4ea],
                    [center, 1056, 294, 0xd06d54],
                    [center, 1068, 328, 0xc57459],
                    [center, 1091, 394, 0x79ac79],
                    [center, 1099, 413, 0x414c4d],
                ]
            ],
            // TODO 三个时的中

        ]
    },
    '六道萤草_混沌': {
        region: [center, 1280, 720, 38, 154, 1269, 630],
        desc: [
            // 两个时的左
            [1280, 720,
                [
                    [center, 355, 395, 0xa95e53],
                    [center, 339, 464, 0xa46a59],
                    [center, 411, 459, 0x9b5d51],
                    [center, 380, 537, 0x84ae7b],
                    [center, 292, 583, 0x7da482],
                ]
            ],
            // 两个时的右
            [1280, 720,
                [
                    [center, 891, 407, 0xa75e53],
                    [center, 939, 464, 0x8f5649],
                    [center, 902, 520, 0x759f8a],
                    [center, 881, 561, 0x474d50],
                ]
            ],
            // 三个时的中
            [1280, 720,
                [
                    [center, 695, 367, 0xa75e53],
                    [center, 757, 399, 0xa55e55],
                    [center, 649, 505, 0x82ac7d],
                    [center, 646, 501, 0x8bb586],
                    [center, 624, 541, 0x576165],
                ]
            ],
            // 一个时的中
            [1280, 720,
                [
                    [center, 631, 370, 0xa75d52],
                    [center, 612, 431, 0xa66559],
                    [center, 684, 440, 0x9e6055],
                    [center, 599, 550, 0x7ca584],
                    [center, 607, 523, 0x4d5455],
                ]
            ],
            // 一个时的中
            [1280, 720,
                [
                    [center, 624, 355, 0xa75b53],
                    [center, 680, 410, 0x8d5148],
                    [center, 667, 488, 0x7eac79],
                    [center, 597, 531, 0x7da584],
                    [center, 599, 549, 0x707070],
                ]
            ]
        ]
    },
    '六道萤草_神秘': {
        region: [center, 1280, 720, 38, 154, 1269, 630],
        desc: [
            // 一个时的中
            [1280, 720,
                [
                    [center, 631, 448, 0xfbf8f3],
                    [center, 622, 449, 0xedebe8],
                    [center, 645, 513, 0x6f9f75],
                    [center, 617, 544, 0x4c5757],
                    [center, 704, 517, 0x6c9770],
                ]
            ]
        ]
    },
    '六道萤草_宁息': {
        region: [center, 1280, 720, 38, 154, 1269, 630],
        desc: [
            // 一个时的中
            [1280, 720,
                [
                    [center, 642, 432, 0x8f8169],
                    [center, 649, 483, 0x739f86],
                    [center, 648, 522, 0x495355],
                    [center, 630, 451, 0xd5ccb1],
                    [center, 716, 460, 0x86856d],
                    [center, 777, 469, 0x78a183],
                ]
            ],
            // 两个时的右
            [1280, 720,
                [
                    [center, 899, 472, 0xa19884],
                    [center, 899, 514, 0x85a68f],
                    [center, 925, 554, 0x747c79],
                    [center, 939, 563, 0x6e7777],
                    [center, 969, 584, 0x76957a],
                    [center, 1025, 510, 0x8fb194],
                    [center, 849, 602, 0x858884],
                ]
            ]
        ]
    },
    '六道萤草_仿造_腐草为萤': {
        region: [right, 1280, 720, 794, 68, 1243, 636],
        desc: [
            [1280, 720,
                [
                    [center, 831, 191, 0x3a2415],
                    [center, 864, 203, 0xdff0a4],
                    [center, 884, 206, 0x2e5c23],
                    [center, 868, 257, 0x9f4a4a],
                    [center, 848, 227, 0xf6ff79],
                    [center, 885, 205, 0x2b5521],
                ]
            ],
            [1280, 720,
                [
                    [center, 835, 111, 0x3e2917],
                    [center, 868, 119, 0xe0efaf],
                    [center, 852, 145, 0xf2ff7c],
                    [center, 870, 157, 0xa04d45],
                    [center, 881, 138, 0x478f2c],
                    [center, 841, 138, 0x2a4422],
                ]
            ]
        ]
    },
    '六道萤草_仿造_妖力化身': {
        region: [right, 1280, 720, 794, 68, 1243, 636],
        desc: [
            [1280, 720,
                [
                    [center, 1100, 281, 0x382715],
                    [center, 1131, 276, 0x442211],
                    [center, 1155, 294, 0xffffdf],
                    [center, 1155, 321, 0xffff9b],
                    [center, 1144, 328, 0xbe7a25],
                ]
            ],
            [1280, 720,
                [
                    [center, 1124, 209, 0x3b2615],
                    [center, 1156, 212, 0xffff99],
                    [center, 1173, 222, 0xfcfcea],
                    [center, 1172, 248, 0xffff9e],
                    [center, 1147, 255, 0xc07c34],
                    [center, 1145, 271, 0xc5782d],
                ]
            ]
        ]
    },
    '六道萤草_仿造_六道净化': {
        region: [right, 1280, 720, 794, 68, 1243, 636],
        desc: [
            [1280, 720,
                [
                    [center, 1101, 191, 0x372214],
                    [center, 1126, 202, 0xb3c4fd],
                    [center, 1148, 202, 0x2b2b65],
                    [center, 1153, 235, 0x07043d],
                    [center, 1117, 244, 0x735ba5],
                ]
            ],
            [1280, 720,
                [
                    [center, 1124, 111, 0x372213],
                    [center, 1158, 116, 0xb5cafe],
                    [center, 1158, 122, 0xb3c4fd],
                    [center, 1172, 166, 0x7562a4],
                    [center, 1156, 157, 0x755ca3],
                    [center, 1174, 153, 0x00002d],
                ]
            ],
            [1280, 720,
                [
                    [center, 1028, 209, 0x372213],
                    [center, 1062, 220, 0xb3c4fd],
                    [center, 1050, 219, 0xb2c2fc],
                    [center, 1076, 257, 0x7463a5],
                    [center, 1072, 217, 0x28285d],
                ]
            ]
        ]
    },
    '六道萤草_仿造_萤火之光': {
        region: [right, 1280, 720, 794, 68, 1243, 636],
        desc: [
            [1280, 720,
                [
                    [center, 921, 281, 0x402817],
                    [center, 979, 290, 0x081116],
                    [center, 969, 304, 0xd5ffa1],
                    [center, 950, 298, 0x7ec001],
                    [center, 955, 323, 0x2f4610],
                    [center, 956, 330, 0x9c588b],
                ]
            ],
            [1280, 720,
                [
                    [left, 1027, 209, 0x3f2a17],
                    [center, 1083, 219, 0x041118],
                    [center, 1076, 256, 0xa15287],
                    [center, 1059, 256, 0xa3508a],
                    [center, 1059, 247, 0x2e4610],
                    [center, 1059, 235, 0x2b4e09],
                    [center, 1062, 214, 0x418500],
                ]
            ]
        ]
    },
    '六道萤草_宁息_腐草为萤': {
        region: [right, 1280, 720, 708, 63, 1137, 570],
        desc: [
            [1280, 720,
                [
                    [center, 1056, 346, 0x454b4d],
                    [center, 1109, 349, 0x313f42],
                    [center, 1056, 398, 0x383f44],
                    [center, 1107, 395, 0x4c4e4f],
                    [center, 1070, 380, 0xf2ff77],
                    [center, 1081, 369, 0xdfee8b],
                    [center, 1096, 364, 0x326722],
                    [center, 1069, 356, 0x529d3a],
                    [center, 1083, 389, 0xa04d46],
                ]
            ],
            [1280, 720,
                [
                    [center, 734, 581, 0x41494d],
                    [center, 786, 583, 0x394448],
                    [center, 734, 635, 0x384245],
                    [center, 786, 630, 0x4e5453],
                    [center, 758, 604, 0xe0f091],
                    [center, 748, 615, 0xf2ff7a],
                    [center, 761, 625, 0xa04d45],
                    [center, 771, 600, 0x3f7d25],
                ]
            ]
        ]
    },
    '六道萤草_宁息_妖力化身': {
        region: [right, 1280, 720, 708, 63, 1137, 570],
        desc: [
            [1280, 720,
                [
                    [center, 1056, 584, 0x42494b],
                    [center, 1106, 580, 0x333e41],
                    [center, 1088, 624, 0xbe7a25],
                    [center, 1065, 617, 0xffffbf],
                    [center, 1082, 614, 0xffffff],
                    [center, 1096, 600, 0xfffff3],
                    [center, 1074, 583, 0x3e2615],
                ]
            ]
        ]
    },
    '六道萤草_宁息_六道净化': {
        region: [right, 1280, 720, 708, 63, 1137, 570],
        desc: [
            [1280, 720,
                [
                    [center, 896, 347, 0x3c4349],
                    [center, 945, 345, 0x313a3f],
                    [center, 896, 396, 0x303a40],
                    [center, 944, 398, 0x464b51],
                    [center, 912, 357, 0xb2c5ff],
                    [center, 923, 357, 0xbfd0ff],
                    [center, 931, 358, 0x26275e],
                    [center, 922, 388, 0x77609e],
                ]
            ],
            [1280, 720,
                [
                    [center, 1057, 347, 0x3c4248],
                    [center, 1105, 346, 0x3a4046],
                    [center, 1083, 389, 0x755ca7],
                    [center, 1096, 386, 0x07043e],
                    [center, 1083, 357, 0xbfd0ff],
                    [center, 1074, 359, 0xb0c1fa],
                ]
            ]
        ]
    },
    '六道萤草_宁息_萤火之光': {
        region: [right, 1280, 720, 708, 63, 1137, 570],
        desc: [
            [1280, 720,
                [
                    [center, 735, 580, 0x3e464a],
                    [center, 785, 579, 0x313e43],
                    [center, 760, 625, 0x9f548a],
                    [center, 762, 591, 0x428601],
                    [center, 773, 597, 0x043130],
                    [center, 746, 612, 0x1e411e],
                    [center, 758, 619, 0x314812],
                ]
            ],
            [1280, 720,
                [
                    [center, 897, 579, 0x404a4e],
                    [center, 946, 582, 0x40484c],
                    [center, 925, 592, 0x498d03],
                    [center, 921, 619, 0x2d4511],
                    [center, 907, 612, 0x1f421f],
                    [center, 921, 625, 0xa0538a],
                ]
            ]
        ]
    },
    '狩猎_酒瓶': {
        region: [right, 1280, 720, 525, 334, 798, 515],
        desc: [
            [
                1280, 720,
                [
                    [center, 657, 433, 0xdac9b8],
                    [center, 637, 419, 0x98edfe],
                    [center, 673, 429, 0xa3f2ff],
                    [center, 663, 453, 0x77472b],
                    [center, 660, 406, 0xfefdfd],
                ]
            ]
        ]
    },
    '逢魔_捡垃圾': {
        region: [left, 1280, 720, 159, 207, 1267, 584],
        desc: [
            [
                1280, 720,
                [
                    [center, 627, 376, 0xb24620],
                    [center, 633, 362, 0xab4220],
                    [center, 618, 370, 0xfff5d3],
                    [center, 637, 382, 0xfff4d2],
                ]
            ],
            [
                1280, 720,
                [
                    [center, 488, 338, 0xb34620],
                    [center, 493, 324, 0xa94120],
                    [center, 501, 332, 0xfff4d4],
                    [center, 500, 344, 0xfff4d2],
                ]
            ],
            [
                1280, 720,
                [
                    [right, 1010, 347, 0xb14520],
                    [right, 1013, 333, 0xa94120],
                    [right, 1021, 341, 0xfff4d4],
                    [right, 1019, 352, 0xfff5d3],
                ]
            ],
            [
                1280, 720,
                [
                    [center, 871, 325, 0xb1461f],
                    [center, 877, 313, 0xb0481d],
                    [center, 883, 319, 0xfff4d4],
                    [center, 882, 332, 0xfff4d2],
                ]
            ]
        ]
    },
}

export default multiColor;