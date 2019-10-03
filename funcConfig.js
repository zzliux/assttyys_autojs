module.exports = [
    null, // 0 放着占位,后续可能会放必执行的东西
    {
        id: 1,
        name: '准备',
        data: [
            {
                judgePoints: [
                    { x: 1782, y: 845, c: '#FFF3D1', i: true },
                    { x: 1733, y: 835, c: '#FFF3D1', i: true },
                    { x: 1754, y: 822, c: '#D3AE79', i: true },
                ],
                operaPoints: [{ x: 1679, y: 770, ox: 151, oy: 122, ad: 2000 }]
            }
        ],
    },
    {
        id: 2,
        name: '退出结算',
        data: [
            { // 退出结算(左上角战斗数据图标识别),最优，速度最快
                judgePoints: [
                    { x: 76, y: 89, c: '#371F13', i: true },
                    { x: 125, y: 61, c: '#FCECD3', i: true },
                    { x: 156, y: 114, c: '#31190D', i: true },
                    { x: 85, y: 126, c: '#E8D3B8', i: true },
                ],
                operaPoints: [
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 500 },
                ]
            },
            { // 个人退出结算(胜利太鼓)
                judgePoints: [
                    { x: 720, y: 239, c: '#831B12', i: true },
                    { x: 683, y: 310, c: '#9F1A11', i: true },
                    { x: 768, y: 304, c: '#A11C13', i: true },
                    { x: 719, y: 280, c: '#CFBFA6', i: true },
                ],
                operaPoints: [
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 500 },
                ]
            },
            { // 组队退出结算(胜利太鼓)
                judgePoints: [
                    { x: 684, y: 225, c: '#9C1C11', i: true },
                    { x: 765, y: 219, c: '#9F1B0F', i: true },
                    { x: 727, y: 164, c: '#821B14', i: true },
                    { x: 722, y: 196, c: '#D0C1AA', i: true },
                ],
                operaPoints: [
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 500 },
                ]
            },
            { // 退出结算(未打开的胜利达摩)
                judgePoints: [
                    { x: 889, y: 477, c: '#000000', i: true },
                    { x: 1015, y: 476, c: '#000000', i: true },
                    { x: 864, y: 597, c: '#CA271E', i: true },
                ],
                operaPoints: [
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 500 },
                ]
            },
            { // 退出结算(打开的胜利达摩)
                judgePoints: [
                    { x: 732, y: 932, c: '#3783D1', i: true },
                    { x: 1023, y: 791, c: '#BF391E', i: true },
                    { x: 897, y: 927, c: '#300205', i: true },
                ],
                operaPoints: [
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 500 },
                ]
            },
            { // 个人退出结算(失败太鼓)
                judgePoints: [
                    { x: 668, y: 280, c: '#5B5265', i: true },
                    { x: 756, y: 288, c: '#5B5265', i: true },
                    { x: 704, y: 228, c: '#514A5A', i: true },
                    { x: 705, y: 265, c: '#BAAA90', i: true },
                ],
                operaPoints: [
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 500 },
                ]
            },
            { // 组队退出结算(失败太鼓)
                judgePoints: [
                    { x: 688, y: 197, c: '#564F5F', i: true },
                    { x: 754, y: 204, c: '#5C5366', i: true },
                    { x: 707, y: 145, c: '#524B5B', i: true },
                    { x: 703, y: 186, c: '#B9A990', i: true },
                ],
                operaPoints: [
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 500 },
                ]
            },
        ]
    },
    {
        id: 3,
        name: '接受协作',
        data: [{
            judgePoints: [
                { x: 1254, y: 618, c: '#59B560', i: true },
                { x: 1279, y: 771, c: '#DE6D5D', i: true },
                { x: 1277, y: 601, c: '#2D212D', i: true },
                { x: 1279, y: 741, c: '#312533', i: true },
            ],
            operaPoints: [
                { x: 1252, y: 595, ox: 56, oy: 65, ad: 500 },
            ]
        }]
    },
    {
        id: 4,
        name: '拒绝协作',
        data: [{
            judgePoints: [
                { x: 1254, y: 618, c: '#59B560', i: true },
                { x: 1279, y: 771, c: '#DE6D5D', i: true },
                { x: 1277, y: 601, c: '#2D212D', i: true },
                { x: 1279, y: 741, c: '#312533', i: true },
            ],
            operaPoints: [
                { x: 1253, y: 748, ox: 55, oy: 59, ad: 500 },
            ]
        }]
    },
    {
        id: 5,
        name: '接受邀请',
        data: [
            { // 自动接受邀请
                judgePoints: [
                    { x: 67, y: 378, c: '#DB725F', i: true },
                    { x: 215, y: 388, c: '#55B262', i: true },
                    { x: 350, y: 376, c: '#EDC490', i: true },
                    { x: 372, y: 404, c: '#5BB462', i: true },
                ],
                operaPoints: [
                    { x: 327, y: 353, ox: 57, oy: 62, ad: 500 },
                ]
            },
            { // 接受邀请
                judgePoints: [
                    { x: 67, y: 378, c: '#DB725F', i: true },
                    { x: 215, y: 388, c: '#55B262', i: true },
                    { x: 298, y: 411, c: '#E7DECD', i: true },
                ],
                operaPoints: [
                    { x: 181, y: 354, ox: 59, oy: 60, ad: 500 },
                ]
            }
        ]
    }
]