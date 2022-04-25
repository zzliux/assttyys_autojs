const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
    '结界_进攻': {
        region: [center, 1280, 720, 304,317, 1166,713],
        desc: [[1280,720,
			[[center,657,362,0x993333],
			[center,677,375,0xf4b25f],
			[center,773,407,0xf5b25e],
			[center,776,411,0x933e2d],
			[center,702,383,0x282520],
			[center,736,394,0x272420],
			[center,704,385,0xf4b25f]]
        ], [1280,720,
            [[center,600,492,0x993333],
            [center,719,540,0x923d2c],
            [center,702,509,0xf4b25f],
            [center,646,513,0xf4b25f],
            [center,679,522,0x272420],
            [center,678,517,0xf4b25f],
            [center,649,510,0x2b2721],
            [center,651,528,0x272420],
            [center,654,528,0x272420],
            [center,715,536,0xf5b15c]]
        ]]
    },
    '结界_进攻_灰': {
        region: [center, 1280, 720, 304,317, 1166,713],
        desc: [[1280,720,
            [[center,600,480,0x685f5f],
            [center,639,493,0xb0a8a0],
            [center,679,511,0x272420],
            [center,712,523,0xafaaa2],
            [center,719,533,0x8c837b],
            [center,727,540,0xbfa98f]]
        ], [1280,720,
            [[center,601,497,0x665d5d],
            [center,610,506,0xb0a8a0],
            [center,712,540,0xafaaa2],
            [center,720,546,0x685f5f],
            [center,726,557,0xbfa98f],
            [center,679,529,0x282521]]
        ],[1280,720,
            [[center,600,356,0x675e5a],
            [center,615,392,0xadaa9c],
            [center,649,380,0x2a2723],
            [center,679,387,0x272420],
            [center,719,404,0x645e5b],
            [center,714,400,0xadae9c]]
        ]]
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
        desc: [[1280,720,
            [[center,576,291,0xdacbbc],
            [center,787,295,0xdacbbc],
            [center,785,397,0xa39087],
            [center,590,369,0x88817d],
            [center,629,369,0x88827d],
            [center,669,369,0x88827d],
            [center,708,369,0x88827d],
            [center,748,369,0x89837e],
            [center,608,381,0xdcc7b9],
            [center,610,360,0xddc5b6]]
        ]]
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
            [1280,720,
                [[center,907,294,0xdacebc],
                [right,1120,295,0xdaccbc],
                [center,922,369,0x88827e],
                [center,962,369,0x88837e],
                [center,1001,369,0x87827d],
                [center,1040,369,0x87827d],
                [center,1081,369,0xc9b6a5],
                [right,1118,396,0xa3938a],
                [right,1102,284,0xd4c3b2],
                [right,1104,303,0xdacebc],
                [right,1088,300,0xdacebc]]
            ]
        ]
            
    },
    '结界_3勋章': {
        region: [center, 1280, 720, 124, 125, 1152, 545],
        desc: [[1280,720,
            [[center,511,281,0xd9cabb],
            [center,726,289,0xdacdbc],
            [center,532,361,0x8a847f],
            [center,572,361,0x88827d],
            [center,611,361,0x8a857f],
            [center,652,361,0xc9b6a4],
            [center,691,361,0xc9b6a4],
            [center,728,389,0xa38f86],
            [center,631,351,0xdbc5b5]]
        ]]
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
        desc: [[1280,720,
            [[center,577,426,0xdacbbc],
            [center,784,428,0xdacbbc],
            [center,785,532,0xa49088],
            [center,590,504,0x86807b],
            [center,629,504,0x86817b],
            [center,668,504,0xc9b6a4],
            [center,708,504,0xc9b6a4],
            [center,748,504,0xc9b6a4],
            [center,610,494,0xdbc4b4],
            [center,608,518,0xddcbbd]]
        ]]
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
        desc: [[1280,720,
            [[center,574,428,0xdacbbc],
            [center,786,428,0xdacabc],
            [center,785,532,0xa49088],
            [center,590,504,0x86807b],
            [center,630,504,0xc9b6a4],
            [center,670,504,0xc9b6a4],
            [center,709,504,0xc9b6a4],
            [center,748,504,0xc9b6a4],
            [center,610,495,0xdcc4b5],
            [center,610,515,0xdac9bb]]
        ]]
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
        desc: [[1280,720,
            [[center,904,155,0xdacbbc],
            [center,1116,161,0xdacdbc],
            [center,1118,262,0xa38f86],
            [center,923,233,0xc9b4a4],
            [center,962,233,0xc9b6a4],
            [center,1002,233,0xc9b6a4],
            [center,1041,233,0xc9b6a4],
            [center,1080,233,0xc9b6a4],
            [center,942,223,0xd9c3b5],
            [center,942,245,0xdbcbbd]]
        ]]
    },
    '探索_经验标识': {
        region: [center, 1280, 720, 42, 345, 1173, 700],
        similar: 95,
        desc: [[1280,720,
            [[left,946,516,0x9d2120],
            [left,947,516,0x921f1d],
            [left,948,516,0x8d1e1c],
            // [left,949,516,0x881e1c],
            [left,946,517,0x9b2120],
            [left,947,517,0x95201e],
            [left,948,517,0x901f1d],
            // [left,949,517,0x8b1e1c],
            [left,946,518,0x9a2121],
            [left,947,518,0x98201f],
            [left,948,518,0x931f1e],
            // [left,948,518,0x8e1e1d],
            [left,946,519,0x972221],
            [left,947,519,0x9a2221],
            [left,948,519,0x95201f],
            // [left,949,519,0x901e1d]
        ]
        ]]
    },
    '探索_挑战': {
        region: [center, 1280, 720, 87,178, 1257,547],
        desc: [[1280,720,
            [[center,1000,447,0x422918],
            [center,1016,450,0xf8b6be],
            [center,1011,473,0x424a7b],
            [center,1032,488,0x31396b],
            [center,1040,508,0x1a0e05]]
        ],[1280,720,
            [[center,1000,442,0xffffed],
            [center,1016,450,0xeeacb4],
            [center,1011,473,0x404879],
            [center,1032,488,0x31396b],
            [center,1040,505,0xfffbe2]]
        ]]
    },
    '探索_挑战BOSS': {
        region: [center, 1280, 720, 87,178, 1257,547],
        similar: 95, // 手动修改这个相似度不受外部控制
        desc: [[1280,720,
            [[center,609,248,0x2f0d09],
            [center,643,236,0xeeb4bc],
            [center,656,244,0x361d0d],
            [center,672,278,0x3d2514],
            [center,654,298,0x703d1b],
            [center,637,283,0xfffff9],
            [center,646,307,0x251308]]
        ], [1280,720,
            [[center,648,240,0x332211],
            [center,674,236,0xf0b0b0],
            [center,708,282,0x30180c],
            [center,643,281,0x3d668f],
            [center,660,239,0x402716],
            [center,686,272,0xf4ece3]]
        ]]
        // desc: [[1280,720,
        //     [[center,595,247,0x2b1a09],
        //     [center,628,236,0xf4b2ba],
        //     [center,616,298,0xf4b2ba],
        //     [center,658,289,0x2d180c],
        //     [center,595,277,0x498daf]]
        // ]]
    },
    '准备界面_满级标识': {
        region: [center, 1280, 720, 6,257, 866,640],
        desc: [[1280,720,
            [[center,473,318,0xeca831],
            [center,480,319,0xf89f22],
            [center,472,334,0xf8e71b],
            [center,489,333,0xf4e317],
            [center,485,318,0xfaa31b]]
        ], [1280,720,
            [[center,740,403,0xe8a42f],
            [center,748,404,0xfe9f18],
            [center,753,403,0xf9a41e],
            [center,745,418,0xcdbc00],
            [center,756,419,0xf4e317]]
        ]]
    },
    '地鬼_难度把手': {
        region: [center, 1280, 720, 94,241, 567,348],
        desc: [[1280,720,
            [[center,403,287,0x644127],
            [center,417,305,0x583720],
            [center,408,297,0x603d24],
            [center,403,303,0x583625],
            [center,415,289,0x613f27]]
        ]]
    },
    '准备_N卡': {
        region: [center, 1280, 720, 121,485, 1016,656],
        desc: [[1280,720,
            [[center,544,506,0x382214],
            [center,561,662,0x6fa8c9],
            [center,576,663,0x6ea8c9],
            [center,590,662,0x7a7a7a],
            [center,604,662,0x777777],
            [center,551,507,0xded8c6]]
        ]]
    },
    '绿标_标识_A': {
        region: [center, 1280, 720, 0,156, 1279,650],
        similar: 90,
        desc: [[1280,720,
            [[center,59,308,0xdcc3b2],
            [center,59,314,0x8c372f],
            [center,59,319,0x8b362e],
            [center,53,308,0x89372d],
            [center,64,308,0x89372c],
            [center,63,319,0xd0ae9f],
            [center,54,319,0xdabeaf]]
        ], [1280,720,
            [[center,59,308,0xdcc2b0],
            [center,63,308,0x8c3423],
            [center,55,308,0x8c3423],
            [center,59,314,0x8f3426],
            [center,59,320,0x8c3424],
            [center,54,319,0xdabeac],
            [center,63,319,0xd1ad9c]]
        ], [1280,720,
            [[center,855,252,0xdfc7b6],
            [center,850,251,0x97443b],
            [center,860,251,0x97423b],
            [center,855,257,0x97413b],
            [center,855,264,0x99453d],
            [center,850,263,0xdabaac],
            [center,859,262,0xd8b7a9]]
        ], [1280,720,
            [[center,1132,363,0xdbc4b0],
            [center,1127,363,0x863a27],
            [center,1138,363,0x873f2b],
            [center,1132,369,0x873827],
            [center,1132,375,0x853321],
            [center,1128,374,0xcaa593],
            [center,1137,374,0xd2b4a2]]
        ], [1280,720,
            [[center,1132,364,0xc7aa97],
            [center,1126,364,0x8a4f3e],
            [center,1138,364,0x8d5441],
            [center,1132,369,0x8c4d3e],
            [center,1132,374,0x894637],
            [center,1129,371,0xd9c3b2],
            [center,1136,371,0xd0b5a4]]
        ], [1280,720,
            [[center,370,304,0xdbc6b3],
            [center,365,303,0x8a432f],
            [center,375,303,0x894330],
            [center,370,310,0x883b2b],
            [center,370,316,0x853321],
            [center,366,314,0xcead9b],
            [center,374,313,0xcba796]]
        ], [1280,720,
            [[center,370,304,0xdbc4b2],
            [center,365,304,0x843d30],
            [center,375,304,0x863828],
            [center,370,310,0x88382b],
            [center,370,314,0x873629],
            [center,366,314,0xceae9d],
            [center,374,313,0xcba898]]
        ], [1280,720,
            [[center,237,352,0x8d4139],
            [center,244,353,0xddc7b7],
            [center,244,365,0x8b423b],
            [center,240,362,0xd0b2a4],
            [center,248,362,0xd1b3a5],
            [center,244,358,0x8b403b],
            [center,249,354,0x8b4139]]
        ], [1280,720,
            [[center,239,352,0xb15946],
            [center,244,353,0xe6ccb9],
            [center,240,363,0xd5b0a0],
            [center,248,362,0xd8b6a5],
            [center,244,363,0x9e473a],
            [center,249,353,0xae5644]]
        ], [1280,720,
            [[center,841,339,0x8f3522],
            [center,847,339,0xdcc1ad],
            [center,852,339,0x882c17],
            [center,847,351,0x892d18],
            [center,851,348,0xd4b29f],
            [center,844,348,0xb77e6b]]
        ], [1280,720,
            [[center,461,337,0x903220],
            [center,467,337,0xddc1ae],
            [center,472,337,0x943522],
            [center,467,348,0x92301e],
            [center,463,347,0xd6b19f],
            [center,472,347,0xd5b09e]]
        ]]
    },
    '庭院_探索灯笼': {
        region: [center, 1280, 720, 0,83, 1279,412],
        desc: [
            [1280,720,
                [[center,658,109,0xd2a580],
                [center,670,120,0x020100],
                [center,681,120,0x020101],
                [center,681,134,0xfee4a5],
                [center,676,145,0x100b03],
                [center,688,144,0xfff6b2],
                [center,688,156,0xffffc2]]
            ],
            [1280,720,
                [[right,1112,107,0xd0a786],
                [center,1120,113,0x010100],
                [center,1133,120,0x010101],
                [center,1136,132,0xfadd9d],
                [center,1126,133,0xf9de9f],
                [center,1130,143,0x0e0903],
                [center,1126,158,0x1e1405],
                [center,1126,175,0xffffc7]]
            ]
        ]
    },
    '探索_宝箱': {
        region: [left, 1280, 720, 0, 121, 148, 577],
        desc: [
            [1280,720,
                [[left,27,315,0xebdfc3],
                [left,64,324,0x221514],
                [left,75,355,0xb63818],
                [left,43,354,0xae2b18],
                [left,112,322,0xe9dabe],
                [left,104,360,0x241717]]
            ]
        ]
    },
    '公频聊天_未读红点': {
        region: [left, 1280, 720, 21,22, 108,714],
        desc: [
            [1280,720,
                [[left,54,349,0xe7d5be],
                [left,90,345,0xfd1010],
                [left,90,354,0xfe1010],
                [left,84,349,0xdc0000],
                [left,96,349,0xfc5c5c],
                [left,78,399,0x745230]]
            ],
            [1280,720,
                [[left,54,349,0x822d2d],
                [left,90,345,0xfd1010],
                [left,90,354,0xfe1111],
                [left,84,349,0xdc0000],
                [left,96,349,0xfc5c5c],
                [left,78,399,0xd3a05c]]
            ]
        ]
    }
}