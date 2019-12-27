var multiColor = {};
var multiColorNames = ['结界_0勋章', '结界_1勋章', '结界_2勋章', '结界_3勋章', '结界_4勋章', '结界_5勋章', '结界_进攻', '探索_经验怪标记', '探索_挑战图标', '探索_式神满级标记', '探索_挑战BOSS图标', '最近组队'];
for (var i = 0; i < multiColorNames.length; i++) {
    multiColor[multiColorNames[i]] = require('../multi_colors/21601080/' + multiColorNames[i]);
}

module.exports = [
    null, // 0 放着占位,后续可能会放必执行的东西
    {
        id: 1,
        name: '准备',
        data: [
            {
                judgePoints: [
                    { x: 62, y: 62, c: 0xd4c4a3, i: true},
                    { x: 2020, y: 818, c: 0xfff3d3, i: true},
                    { x: 2021, y: 845, c: 0xfff3d3, i: true},
                ],
                operaPoints: [{ x: 1911, y: 773, ox: 155, oy: 126, ad: 2000 }]
            }
        ],
    },
    {
        id: 2,
        name: '退出结算',
        data: [
            { // 退出结算(左上角战斗数据图标识别),最优，速度最快
                judgePoints: [
                    { x:  120, y:   61, c: 0xfdedd4, i: true},
                    { x:  153, y:  118, c: 0x311810, i: true},
                    { x:   78, y:   86, c: 0x392010, i: true},
                    { x:  109, y:  134, c: 0xeddcbb, i: true},

                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 500 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 500 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 500 },
                ]
            },
            { // 个人退出结算(胜利太鼓)
                judgePoints: [
                    { x:  843, y:  242, c: 0x841b12, i: true},
                    { x:  805, y:  304, c: 0x9c1c12, i: true},
                    { x:  880, y:  314, c: 0xa51b12, i: true},
                    { x:  840, y:  287, c: 0xd0c0a9, i: true},
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 500 },
                ]
            },
            { // 组队退出结算(胜利太鼓)
                judgePoints: [
                    { x:  841, y:  167, c: 0x7c1a13, i: true},
                    { x:  806, y:  218, c: 0x9c1c12, i: true},
                    { x:  881, y:  229, c: 0xa51b12, i: true},
                    { x:  842, y:  200, c: 0xd0c0a9, i: true},
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 500 },
                ]
            },
            { // 退出结算(未打开的胜利达摩)
                judgePoints: [
                    { x: 1004, y:  474, c: 0x020101, i: true},
                    { x: 1134, y:  472, c: 0x020101, i: true},
                    { x: 1011, y:  578, c: 0xba3a1f, i: true},
                    { x: 1184, y:  720, c: 0x350204, i: true},
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 500 },
                ]
            },
            { // 退出结算(打开的胜利达摩)
                judgePoints: [
                    { x:  853, y:  931, c: 0x3c8ace, i: true},
                    { x:  988, y:  934, c: 0x350204, i: true},
                    { x: 1171, y:  927, c: 0x350204, i: true},
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 500 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 500 },
                ]
            },
            { // 个人退出结算(失败太鼓)
                judgePoints: [
                    { x:  819, y:  224, c: 0x514b5c, i: true},
                    { x:  792, y:  268, c: 0x5b5265, i: true},
                    { x:  867, y:  285, c: 0x5b5265, i: true},
                    { x:  825, y:  265, c: 0xbbaa92, i: true},
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 500 },
                ]
            },
            { // 组队退出结算(失败太鼓)
                judgePoints: [
                    { x:  821, y:  159, c: 0x4c4453, i: true},
                    { x:  783, y:  188, c: 0x5b5265, i: true},
                    { x:  855, y:  206, c: 0x5b5265, i: true},
                    { x:  825, y:  182, c: 0xbbaa92, i: true},
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 500 },
                ]
            }
        ]
    },
    {
        id: 3,
        name: '接受协作',
        data: [{
            judgePoints: [
                { x: 1403, y:  631, c: 0x58b361, i: true},
                { x: 1405, y:  765, c: 0xe06d5c, i: true},
                { x: 1367, y:  778, c: 0x302324, i: true},
                { x:  965, y:  243, c: 0xb29178, i: true},
            ],
            operaPoints: [
                { x: 1363, y: 593, ox: 66, oy: 73, ad: 500 },
            ]
        }]
    },
    {
        id: 4,
        name: '拒绝协作',
        data: [{
            judgePoints: [
                { x: 1403, y:  631, c: 0x58b361, i: true},
                { x: 1405, y:  765, c: 0xe06d5c, i: true},
                { x: 1367, y:  778, c: 0x302324, i: true},
                { x:  965, y:  243, c: 0xb29178, i: true},
            ],
            operaPoints: [
                { x: 1366, y: 746, ox: 68, oy: 66, ad: 500 },
            ]
        }]
    },
    {
        id: 5,
        name: '接受邀请',
        data: [
            { // 自动接受邀请
                judgePoints: [
                    { x:   63, y:  373, c: 0xe06d5c, i: true},
                    { x:  216, y:  388, c: 0x58b361, i: true},
                    { x:  352, y:  376, c: 0xedc492, i: true},
                    { x:  433, y:  416, c: 0xe9e0d0, i: true},
                ],
                operaPoints: [
                    { x: 326, y: 353, ox: 60, oy: 64, ad: 500 },
                ]
            },
            { // 接受邀请
                judgePoints: [
                    { x:   62, y:  373, c: 0xe06d5c, i: true},
                    { x:  211, y:  389, c: 0x58b361, i: true},
                    { x:  290, y:  409, c: 0xe9e0d0, i: true},
                ],
                operaPoints: [
                    { x: 181, y: 353, ox: 58, oy: 63, ad: 500 },
                ]
            }
        ]
    },
    {
        id: 6,
        name: '组队挑战',
        data: [{
            judgePoints: [
                { x: 2021, y:  915, c: 0xf1e096, i: true},
                { x: 2132, y: 1020, c: 0xe5c35d, i: true},
                { x: 2009, y: 1000, c: 0xdebd73, i: true},
            ],
            operaPoints: [
                { x: 2029, y: 926, ox: 81, oy: 83, ad: 500 },
            ]
        }]
    },
    {
        id: 7,
        name: '组队三人挑战',
        data: [{
            judgePoints: [
                { x: 2021, y:  915, c: 0xf1e096, i: true},
                { x: 2132, y: 1020, c: 0xe5c35d, i: true},
                { x: 2009, y: 1000, c: 0xdebd73, i: true},
                { x: 1085, y:  380, c: 0xffffff, i: false},
                { x: 1752, y:  380, c: 0xffffff, i: false},
            ],
            operaPoints: [
                { x: 2029, y: 926, ox: 81, oy: 83, ad: 500 },
            ]
        }]
    },
    {
        id: 8,
        name: '取消确定框点确定',
        data: [
            { // 未点默认邀请队友
                judgePoints: [
                    { x:  778, y:  391, c: 0xccb49b, i: true},
                    { x: 1381, y:  409, c: 0xccb49b, i: true},
                    { x:  963, y:  538, c: 0x9d8771, i: true},
                    { x:  993, y:  644, c: 0xdd6951, i: true},
                    { x: 1180, y:  644, c: 0xf4b25f, i: true},
                ],
                operaPoints: [
                    { x: 943, y: 522, ox: 273, oy: 46, ad: 100 },
                    { x: 1133, y: 610, ox: 248, oy: 74, ad: 2000 },
                ]
            },
            { // 已点默认邀请队友或者没有默认邀请队友
                judgePoints: [
                    { x:  778, y:  391, c: 0xccb49b, i: true},
                    { x: 1381, y:  409, c: 0xccb49b, i: true},
                    { x:  993, y:  644, c: 0xdd6951, i: true},
                    { x: 1180, y:  644, c: 0xf4b25f, i: true},
                ],
                operaPoints: [
                    { x: 1018, y: 612, ox: 242, oy: 71, ad: 2000 },
                ]
            },
        ]
    },
    {
        id: 9,
        name: '御魂/御灵挑战',
        data: [
            { // 御灵
                judgePoints: [
                    { x: 1931, y:   75, c: 0xd7b287, i: true},
                    { x: 2071, y:   92, c: 0xcba173, i: true},
                    { x: 1829, y:  900, c: 0xe2d9c1, i: true},
                    { x: 1909, y: 1014, c: 0x371f16, i: true},
                ],
                operaPoints: [
                    { x: 1783, y: 894, ox: 101, oy: 122, ad: 500 },
                ]
            },
            { // 御魂
                judgePoints: [
                    { x: 1926, y:   77, c: 0xd7b287, i: true},
                    { x: 2085, y:   74, c: 0xd4ae82, i: true},
                    { x: 1846, y:  917, c: 0xe2d9c1, i: true},
                    { x: 1926, y: 1015, c: 0x382016, i: true},
                ],
                operaPoints: [
                    { x: 1794, y: 900, ox: 122, oy: 116, ad: 500 },
                ]
            }
        ]
    },
    {
        id: 10,
        name: '结界_进攻',
        data: function () {
            var _self = this;
            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_进攻'].firstColor, multiColor['结界_进攻'].colors, { region: [388, 434, 1531, 636], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 167), point.y + random(0, 79), random(10, 100));
            var delay = 2000 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 11,
        name: '结界_0勋章', // 这个多点取色取的是框框左上角内，而不是像1920*1080那个分辨率取点从头像右边作为firstColor
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:  671, y:   74, c: 0x483726, i: true},
                        { x: 1610, y:   78, c: 0x483726, i: true},
                        { x: 1896, y:  102, c: 0xf3d2d2, i: true},
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_0勋章'].firstColor, multiColor['结界_0勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(140, 457), point.y + random(0, 154), random(10, 100));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 12,
        name: '结界_1勋章',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:  671, y:   74, c: 0x483726, i: true},
                        { x: 1610, y:   78, c: 0x483726, i: true},
                        { x: 1896, y:  102, c: 0xf3d2d2, i: true},
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_1勋章'].firstColor, multiColor['结界_1勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(140, 457), point.y + random(0, 154), random(10, 100));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 13,
        name: '结界_2勋章（开发中）',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:  671, y:   74, c: 0x483726, i: true},
                        { x: 1610, y:   78, c: 0x483726, i: true},
                        { x: 1896, y:  102, c: 0xf3d2d2, i: true},
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_2勋章'].firstColor, multiColor['结界_2勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(140, 457), point.y + random(0, 154), random(10, 100));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 14,
        name: '结界_3勋章（开发中）',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:  671, y:   74, c: 0x483726, i: true},
                        { x: 1610, y:   78, c: 0x483726, i: true},
                        { x: 1896, y:  102, c: 0xf3d2d2, i: true},
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_3勋章'].firstColor, multiColor['结界_3勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(140, 457), point.y + random(0, 154), random(10, 100));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 15,
        name: '结界_4勋章（开发中）',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:  671, y:   74, c: 0x483726, i: true},
                        { x: 1610, y:   78, c: 0x483726, i: true},
                        { x: 1896, y:  102, c: 0xf3d2d2, i: true},
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_4勋章'].firstColor, multiColor['结界_4勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(140, 457), point.y + random(0, 154), random(10, 100));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 16,
        name: '结界_5勋章（开发中）',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:  671, y:   74, c: 0x483726, i: true},
                        { x: 1610, y:   78, c: 0x483726, i: true},
                        { x: 1896, y:  102, c: 0xf3d2d2, i: true},
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_5勋章'].firstColor, multiColor['结界_5勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(140, 457), point.y + random(0, 154), random(10, 100));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 17,
        name: '结界_个人_3次刷新',
        data: [{
            judgePoints: [
                { x:  896, y:  836, c: 0xfdca31, i: true}, // 3次达摩左边
                { x:  985, y:  837, c: 0x363e57, i: true}, // 3次达摩右边，如果大于3次就刷新的话直接注释这一行，如果只有3次就刷新的话就保留这一行
                { x: 1614, y:  817, c: 0xf4b25f, i: true}, // 亮着的刷新按钮上的一个点
                { x:  801, y:   77, c: 0x483726, i: true},
                { x: 1344, y:   78, c: 0x483726, i: true},
            ],
            operaPoints: [
                { x: 1575, y: 781, ox: 235, oy: 61, ad: 500 },
            ]
        }]
    },
    {
        id: 18,
        name: '结界_个人_3次刷新CD等待', // 该功能会在判定处于cd时sleep30秒，且后面的功能不会执行
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:  896, y:  836, c: 0xfdca31, i: true}, // 3次达摩左边
                        { x:  985, y:  837, c: 0x363e57, i: true}, // 3次达摩右边，如果大于3次就刷新的话直接注释这一行，如果只有3次就刷新的话就保留这一行
                        { x: 1581, y:  809, c: 0xb0a8a0, i: true}, // 灭着的刷新按钮上的一个点
                        { x:  801, y:   77, c: 0x483726, i: true},
                        { x: 1344, y:   78, c: 0x483726, i: true},
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;
            sleep(30000);
            return true;
        }
    },
    {
        id: 19,
        name: '结界_个人_地图进入突破界面',
        data: [{
            judgePoints: [
                { x: 1926, y:   57, c: 0xd7b287, i: true},
                { x: 2077, y:   50, c: 0xd4ae82, i: true},
                { x: 1982, y:  237, c: 0xd8d0bf, i: true},
                { x:  381, y: 1048, c: 0x68402f, i: true},
                { x:  430, y:  961, c: 0xe5d4c4, i: true},
            ],
            operaPoints: [
                { x: 416, y: 951, ox: 96, oy: 103, ad: 500 },
            ]
        }]
    },
    {
        id: 20,
        name: '结界_寮突_CD等待（开发中）',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x: 264, y: 75, c: '#483727', i: true },
                        { x: 1308, y: 78, c: '#483727', i: true },
                        { x: 434, y: 837, c: '#3A3128', i: true }, // 数字0上随便取了3个点，不知道效果怎样
                        { x: 421, y: 837, c: '#3A3128', i: true }, // 数字0上随便取了3个点，不知道效果怎样
                        { x: 428, y: 837, c: '#D0BFAD', i: true }, // 数字0上随便取了3个点，不知道效果怎样
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;
            sleep(30000);
            return true;
        }
    },
    {
        id: 21,
        name: '探索_地图进入最后一章（开发中）',
        data: [{
            judgePoints: [
                { x: 52, y: 1039, c: '#633E2B', i: true },
                { x: 65, y: 87, c: '#EDF6FD', i: true },
                { x: 1531, y: 1066, c: '#6D4333', i: true },
                { x: 1740, y: 236, c: '#D8D2C2', i: true },
            ],
            operaPoints: [
                { x: 1585, y: 837, ox: 291, oy: 146, ad: 1500 },
            ]
        }]
    },
    {
        id: 22,
        name: '探索_最后一章确认界面点击探索（开发中）',
        data: [{
            judgePoints: [
                { x: 562, y: 194, c: '#483727', i: true },
                { x: 1326, y: 199, c: '#483727', i: true },
                { x: 1361, y: 812, c: '#F5B15E', i: true },
                { x: 740, y: 644, c: '#C9AF96', i: true },
            ],
            operaPoints: [
                { x: 667, y: 306, ox: 87, oy: 62, ad: 500 },
                { x: 1333, y: 776, ox: 172, oy: 63, ad: 1500 },
            ]
        }]
    },
    {
        id: 23,
        name: '探索_挑战经验怪（开发中）',
        data: function () {
            var _self = this;
            var count = 4;
            while (count--) {
                var sceneJudge = {
                    data: [{ // 用来判断是不是探索小怪的场景，直接用多点找色的话会在此占用太多资源
                        judgePoints: [
                            { x: 61, y: 99, c: '#EDF5FD', i: true },
                            { x: 59, y: 808, c: '#524A5A', i: true },
                            { x: 1686, y: 79, c: '#CBA173', i: true },
                        ],
                        operaPoints: []
                    }]
                }
                if (!_self.commonClick(sceneJudge)) return false;
    
                // 如果是boss就直接挑战
                var point0 = images.findMultiColors(_self.memImage, multiColor['探索_挑战BOSS图标'].firstColor, multiColor['探索_挑战BOSS图标'].colors, { region: [40, 187, 1598, 468], threshold: 10 });
                if (null != point0) {
                    _self.automator.press(point0.x + random(0, 68), point0.y + random(0, 66), random(10, 100));
                    sleep(1000 + _self.userConfigs.afterClickDelay + random(0, _self.userConfigs.afterClickDelayRandom));
                    return true;
                }
    
                // 找经验怪挑战
                var point = images.findMultiColors(_self.memImage, multiColor['探索_经验怪标记'].firstColor, multiColor['探索_经验怪标记'].colors, { region: [200, 360, 1520, 700], threshold: 10 });
                // 如果没有经验怪标记的话就重找
                var cnt1 = 2;
                while (null == point && --cnt1 >= 0) {
                    sleep(200);
                    _self.captureScreen();
                    point = images.findMultiColors(_self.memImage, multiColor['探索_经验怪标记'].firstColor, multiColor['探索_经验怪标记'].colors, { region: [200, 360, 1520, 700], threshold: 10 });
                }
                if (null != point) {
                    // 从内向外多点找色，可点击的挑战图标，可能会处理为不停的进行多点找色，找不到的时候放大区域
                    var l = 5 * 7 // 搜索区域宽高,5倍 "探索_经验怪标记" 的宽高，当这个区域找不到时，l以倍数增长，直到找到为止或者达到一定次数, 这样处理的话会找重复的地方
                    for (var tryTimes = 1; tryTimes <= 14; tryTimes++, l += 5 * 7) { // 尝试 14 次, 大概算了一下，14次内基本可以找到，找不到的话就滑屏
                        var region = [point.x -  l / 2, point.y - l - 40, l, l];
                        if (region[0] < 0) region[0] = 0;
                        if (region[1] < 0) region[1] = 0;
                        if (region[0] + region[2] > 1920) region[2] = 1920 - region[0];
                        if (region[1] + region[3] > 1080) region[3] = 1080 - region[1];

                        var pointChange = images.findMultiColors(_self.memImage, multiColor['探索_挑战图标'].firstColor, multiColor['探索_挑战图标'].colors, { region: region, threshold: _self.userConfigs.multiColorSimilar });
                        if (null != pointChange) {
                            _self.automator.press(pointChange.x + random(0, 77), pointChange.y + random(0, 91), random(10, 100));
                            sleep(1000 + _self.userConfigs.afterClickDelay + random(0, _self.userConfigs.afterClickDelayRandom));
                            console.log('[assttyys]: successS tryTimes: ' + tryTimes);
                            return true;
                        }
                    }
                }
                if (count) {
                    // 屏幕右往坐滑
                    _self.automator.swipe(1476 + random(0, 180), 179 + random(0, 626), 200 + random(0, 262), 228 + random(0, 745), random(300, 600));
                    sleep(200);
                    _self.captureScreen();
                }
            }

            var outScene = {
                data: [{ // 用来判断是不是探索小怪的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x: 61, y: 99, c: '#EDF5FD', i: true },
                        { x: 59, y: 808, c: '#524A5A', i: true },
                        { x: 1686, y: 79, c: '#CBA173', i: true },
                    ],
                    operaPoints: [
                        { x: 46, y: 70, ox: 61, oy: 51, ad: 700 },
                        { x: 1052, y: 583, ox: 220, oy: 45, ad: 2000}
                    ]
                }]
            }
            return _self.commonClick(outScene);
        }
    },
    {
        id: 24,
        name: '探索_打手换素材（开发中）',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是准备的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x: 1782, y: 845, c: '#FFF3D1', i: true },
                        { x: 1733, y: 835, c: '#FFF3D1', i: true },
                        { x: 1754, y: 822, c: '#D3AE79', i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 找满级标记
            var point = images.findMultiColors(_self.memImage, multiColor['探索_式神满级标记'].firstColor, multiColor['探索_式神满级标记'].colors, { region: [532, 388, 793, 299], threshold: 15 });
            if (null != point) {
                var clickPoints = {
                    data: [{
                        judgePoints: [],
                        operaPoints: [
                            { x: 448, y: 731, ox: 554, oy: 202, ad: 0}, // 把换式神的界面点出来
                            { x: 448, y: 731, ox: 554, oy: 202, ad: 0}, // 把换式神的界面点出来
                            { x: 448, y: 731, ox: 554, oy: 202, ad: 3000}, // 把换式神的界面点出来
                            { x: 65, y: 952, ox: 78, oy: 78, ad: 500 }, // 全部
                            { x: 66, y: 446, ox: 74, oy: 74, ad: 1000}, // 素材
                        ]
                    }]
                }
                _self.commonClick(clickPoints);
                // 第一个素材换到左边
                _self.automator.swipe(261 + random(0, 148), 752 + random(0, 254), 179 + random(0, 201), 546 + random(0, 88), random(800, 1000));
                sleep(random(500, 600));
                // 第二个素材换到右边
                _self.automator.swipe(456 + random(0, 80), 758 + random(0, 241), 877 + random(0, 160), 546 + random(0, 88), random(1000, 1200));
                sleep(random(100, 200));

            };
            return false;
        }
    },
    {
        id: 25,
        name: '探索_单人时退出（开发中）',
        data: [{ // 用来判断是不是探索小怪的场景，直接用多点找色的话会在此占用太多资源
            judgePoints: [
                { x: 61, y: 99, c: '#EDF5FD', i: true },
                { x: 59, y: 808, c: '#524A5A', i: true },
                { x: 1686, y: 79, c: '#CBA173', i: true },
                { x: 88, y: 692, c: '#FAFCF1', i: false },
            ],
            operaPoints: [
                { x: 46, y: 70, ox: 61, oy: 51, ad: 700 },
                { x: 1052, y: 583, ox: 220, oy: 45, ad: 2000}
            ]
        }]
    },
    {
        id: 26,
        name: '探索_最后一章确认界面邀请好友（开发中）', // TODO，邀请最近组队
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{
                    judgePoints: [
                        { x: 562, y: 194, c: '#483727', i: true },
                        { x: 1326, y: 199, c: '#483727', i: true },
                        { x: 1361, y: 812, c: '#F5B15E', i: true },
                        { x: 740, y: 644, c: '#C9AF96', i: true },
                    ],
                    operaPoints: [
                        { x: 888, y: 773, ox: 180, oy: 74, ad: 3000 },
                        // { x: 1076, y: 827, ox: 170, oy: 64, ad: 3000 },
                    ]
                }]
            };
            // 点击组队
            if (!_self.commonClick(sceneJudge)) return false;

            _self.captureScreen();
            var point = images.findMultiColors(_self.memImage, multiColor['最近组队'].firstColor, multiColor['最近组队'].colors, { region: [478, 194, 937, 683], threshold: 15 });
            if (null != point) {
                toastLog('邀请最近组队');
                // 点最近组队好友
                _self.automator.press(point.x + random(0, 390), point.y + random(0, 108), random(10, 100));
                sleep(200 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom)));
                // 邀请
                _self.automator.press(1076 + random(0, 170), 827 + random(0, 64), random(10, 100));
                sleep(2000 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom)));
            } else {
                // 点第一个好友
                // _self.automator.press(539 + random(0, 397), 283 + random(0, 110), random(10, 100));
                sleep(200 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom)));
                // 邀请
                _self.automator.press(1076 + random(0, 170), 827 + random(0, 64), random(10, 100));
                sleep(2000 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom)));
            }
            return true;
        }
    },
    {
        id: 27,
        name: '探索_司机换素材（开发中）',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是准备的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x: 1782, y: 845, c: '#FFF3D1', i: true },
                        { x: 1733, y: 835, c: '#FFF3D1', i: true },
                        { x: 1754, y: 822, c: '#D3AE79', i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 找满级标记
            var point = images.findMultiColors(_self.memImage, multiColor['探索_式神满级标记'].firstColor, multiColor['探索_式神满级标记'].colors, { region: [16, 435, 900, 547], threshold: 15 });
            if (null != point) {
                var clickPoints = {
                    data: [{
                        judgePoints: [],
                        operaPoints: [
                            { x: 448, y: 731, ox: 554, oy: 202, ad: 0}, // 把换式神的界面点出来
                            { x: 448, y: 731, ox: 554, oy: 202, ad: 0}, // 把换式神的界面点出来
                            { x: 448, y: 731, ox: 554, oy: 202, ad: 3000}, // 把换式神的界面点出来
                            { x: 65, y: 952, ox: 78, oy: 78, ad: 500 }, // 全部
                            { x: 66, y: 446, ox: 74, oy: 74, ad: 1000}, // 素材
                        ]
                    }]
                }
                _self.commonClick(clickPoints);
                // 第一个素材换到左边
                _self.automator.swipe(261 + random(0, 148), 752 + random(0, 254), 475 + random(0, 111), 470 + random(0, 107), random(800, 1000));
                sleep(random(500, 600));
                // 第二个素材换到右边
                _self.automator.swipe(456 + random(0, 80), 758 + random(0, 241), 1383 + random(0, 107), 470 + random(0, 107), random(1000, 1200));
                sleep(random(100, 200));

            };
            return false;
        }
    },
    {
        id: 28,
        name: '大江山之战_修罗战场_挑战（已废弃）',
        data: [
            {
                judgePoints: [
                    { x: 766, y: 863, c: '#F4B25E', i: true },
                    { x: 766, y: 912, c: '#F5B15E', i: true },
                    { x: 1176, y: 861, c: '#F4B25C', i: true },
                    { x: 1128, y: 912, c: '#F4B25C', i: true },
                    { x: 1450, y: 52, c: '#381E0D', i: true },
                ],
                operaPoints: [
                    { x: 1015, y: 857, ox: 214, oy: 57, ad: 2000 },
                ]
            }
        ]
    },
    {
        id: 29,
        name: '大江山之战_海国退治_挑战（已废弃）',
        data: [
            {
                judgePoints: [
                    { x: 263, y: 964, c: '#2A2220', i: true },
                    { x: 1475, y: 883, c: '#E0C195', i: true },
                    { x: 1626, y: 893, c: '#DEA86C', i: true },
                    { x: 1564, y: 844, c: '#25251D', i: true },
                    { x: 1564, y: 870, c: '#E2B985', i: true },
                ],
                operaPoints: [
                    { x: 1475, y: 819, ox: 143, oy: 117, ad: 2000 },
                ]
            }
        ]
    },
    {
        id: 30,
        name: '结界_个人_刷新',
        data: [{
            judgePoints: [
                { x: 1614, y:  817, c: 0xf4b25f, i: true}, // 亮着的刷新按钮上的一个点
                { x:  801, y:   77, c: 0x483726, i: true},
                { x: 1344, y:   78, c: 0x483726, i: true},
            ],
            operaPoints: [
                { x: 1575, y: 781, ox: 235, oy: 61, ad: 500 },
            ]
        }]
    },
    {
        id: 31,
        name: '准备界面直接退出（开发中）',
        data: [{
            judgePoints: [
                { x: 1782, y: 845, c: '#FFF3D1', i: true },
                { x: 1733, y: 835, c: '#FFF3D1', i: true },
                { x: 1754, y: 822, c: '#D3AE79', i: true },
            ],
            operaPoints: [
                { x: 27, y: 27, ox: 53, oy: 44, ad: 2000 },
                { x: 1025, y: 601, ox: 169, oy: 64, ad: 500 },
            ]
        }]
    },
]