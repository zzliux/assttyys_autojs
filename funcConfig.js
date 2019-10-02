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
            { // 个人退出结算1(胜利太鼓))
                judgePoints: [
                    { x: 720, y: 239, c: '#831B12', i: true },
                    { x: 683, y: 310, c: '#9F1A11', i: true },
                    { x: 768, y: 304, c: '#A11C13', i: true },
                    { x: 719, y: 280, c: '#CFBFA6', i: true },
                ],
                operaPoints: [
                    { x: 29, y:180, ox: 194, oy: 620, ad: 500},
                ]
            }
            // TODO:
            // 组队退出结算，根据左上角的战斗数据，等等
        ]
    }
]