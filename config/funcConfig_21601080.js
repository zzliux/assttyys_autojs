var zzUtils = require('../zz_modules/zzUtils');
var multiColor = {};
var multiColorNames = ['结界_0勋章', '结界_1勋章', '结界_2勋章', '结界_3勋章', '结界_4勋章', '结界_5勋章', '结界_进攻', '探索_经验怪标记', '探索_挑战图标', '探索_式神满级标记', '探索_挑战BOSS图标', '最近组队'];
for (var i = 0; i < multiColorNames.length; i++) {
    var t = require('../multi_colors/21601080/' + multiColorNames[i]);
    multiColor[multiColorNames[i]] = {
        firstColor: zzUtils.parseColorToGraphicHelper(t.firstColor),
        colors: zzUtils.parseColorToGraphicHelper(t.colors)
    };
}

module.exports = [
    null, // 0 放着占位,后续可能会放必执行的东西
    {
        id: 1,
        name: '准备',
        data: [
            {
                judgePoints: [
                    { x:   62, y:  62, c: 0xd4c4a3, i: true },
                    { x: 2020, y: 818, c: 0xfff3d3, i: true },
                    { x: 2021, y: 845, c: 0xfff3d3, i: true },
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
                    { x:  118, y:   83, c: 0x3c2c20, i: true },
                    { x:   91, y:  101, c: 0x3c2c1e, i: true },
                    { x:  106, y:   92, c: 0xb08e6b, i: true },
                    { x:  142, y:  100, c: 0x392920, i: true },
                    { x:  142, y:  108, c: 0x856431, i: true },
                    { x:  131, y:  106, c: 0xa67d54, i: true },
                    { x:  119, y:  106, c: 0xaa7755, i: true },
                    { x:  119, y:   91, c: 0x3c2a20, i: true },
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 50 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 50 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 50 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 50 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 50 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 50 },
                ]
            },
            { // 退出结算(左上角贪吃鬼图标),最优，速度最快
                judgePoints: [
                    { x:   79, y:  105, c: 0x6a3630, i: true },
                    { x:   95, y:  101, c: 0xf3f3f0, i: true },
                    { x:  113, y:  143, c: 0x463017, i: true },
                    { x:  113, y:  135, c: 0x927150, i: true },
                    { x:  131, y:   97, c: 0x5e5252, i: true },
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 50 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 50 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 50 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 50 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 50 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 50 },
                ]
            },
            { // 个人退出结算(胜利太鼓)
                judgePoints: [
                    { x:  843, y:  242, c: 0x841b12, i: true },
                    { x:  805, y:  304, c: 0x9c1c12, i: true },
                    { x:  880, y:  314, c: 0xa51b12, i: true },
                    { x:  840, y:  287, c: 0xd0c0a9, i: true },
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 100 },
                ]
            },
            { // 组队退出结算(胜利太鼓)
                judgePoints: [
                    { x:  841, y:  167, c: 0x7c1a13, i: true },
                    { x:  806, y:  218, c: 0x9c1c12, i: true },
                    { x:  881, y:  229, c: 0xa51b12, i: true },
                    { x:  842, y:  200, c: 0xd0c0a9, i: true },
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 100 },
                ]
            },
            { // 退出结算(未打开的胜利达摩)
                judgePoints: [
                    { x: 1004, y:  474, c: 0x020101, i: true },
                    { x: 1134, y:  472, c: 0x020101, i: true },
                    { x: 1011, y:  578, c: 0xba3a1f, i: true },
                    { x: 1184, y:  720, c: 0x350204, i: true },
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 100 },
                ]
            },
            { // 退出结算(打开的胜利达摩)
                judgePoints: [
                    { x:  853, y:  931, c: 0x3c8ace, i: true },
                    { x:  988, y:  934, c: 0x350204, i: true },
                    { x: 1171, y:  927, c: 0x350204, i: true },
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 100 },
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 100 },
                ]
            },
            { // 个人退出结算(失败太鼓)
                judgePoints: [
                    { x:  819, y:  224, c: 0x514b5c, i: true },
                    { x:  792, y:  268, c: 0x5b5265, i: true },
                    { x:  867, y:  285, c: 0x5b5265, i: true },
                    { x:  825, y:  265, c: 0xbbaa92, i: true },
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 3000 },
                ]
            },
            { // 组队退出结算(失败太鼓)
                judgePoints: [
                    { x:  821, y:  159, c: 0x4c4453, i: true },
                    { x:  783, y:  188, c: 0x5b5265, i: true },
                    { x:  855, y:  206, c: 0x5b5265, i: true },
                    { x:  825, y:  182, c: 0xbbaa92, i: true },
                ],
                operaPoints: [
                    { x: 41, y: 207, ox: 240, oy: 660, ad: 3000 },
                ]
            }
        ]
    },
    {
        id: 3,
        name: '接受协作',
        data: [{
            judgePoints: [
                { x: 1403, y:  631, c: 0x58b361, i: true },
                { x: 1405, y:  765, c: 0xe06d5c, i: true },
                { x: 1367, y:  778, c: 0x302324, i: true },
                { x:  965, y:  243, c: 0xb29178, i: true },
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
                { x: 1403, y:  631, c: 0x58b361, i: true },
                { x: 1405, y:  765, c: 0xe06d5c, i: true },
                { x: 1367, y:  778, c: 0x302324, i: true },
                { x:  965, y:  243, c: 0xb29178, i: true },
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
                    { x:   63, y:  373, c: 0xe06d5c, i: true },
                    { x:  216, y:  388, c: 0x58b361, i: true },
                    { x:  352, y:  376, c: 0xedc492, i: true },
                    { x:  433, y:  416, c: 0xe9e0d0, i: true },
                ],
                operaPoints: [
                    { x: 326, y: 353, ox: 60, oy: 64, ad: 500 },
                ]
            },
            { // 接受邀请
                judgePoints: [
                    { x:   62, y:  373, c: 0xe06d5c, i: true },
                    { x:  211, y:  389, c: 0x58b361, i: true },
                    { x:  290, y:  409, c: 0xe9e0d0, i: true },
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
                { x: 2021, y:  915, c: 0xf1e096, i: true },
                { x: 2132, y: 1020, c: 0xe5c35d, i: true },
                { x: 2009, y: 1000, c: 0xdebd73, i: true },
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
                { x: 2021, y:  915, c: 0xf1e096, i: true },
                { x: 2132, y: 1020, c: 0xe5c35d, i: true },
                { x: 2009, y: 1000, c: 0xdebd73, i: true },
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
                    { x:  778, y:  391, c: 0xccb49b, i: true },
                    { x: 1381, y:  409, c: 0xccb49b, i: true },
                    { x:  963, y:  538, c: 0x9d8771, i: true },
                    { x:  993, y:  644, c: 0xdd6951, i: true },
                    { x: 1180, y:  644, c: 0xf4b25f, i: true },
                ],
                operaPoints: [
                    { x: 943, y: 522, ox: 273, oy: 46, ad: 100 },
                    { x: 1133, y: 610, ox: 248, oy: 74, ad: 2000 },
                ]
            },
            { // 已点默认邀请队友或者没有默认邀请队友
                judgePoints: [
                    { x:  778, y:  391, c: 0xccb49b, i: true },
                    { x: 1381, y:  409, c: 0xccb49b, i: true },
                    { x:  993, y:  644, c: 0xdd6951, i: true },
                    { x: 1180, y:  644, c: 0xf4b25f, i: true },
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
                    { x: 1931, y:   75, c: 0xd7b287, i: true },
                    { x: 2071, y:   92, c: 0xcba173, i: true },
                    { x: 1829, y:  900, c: 0xe2d9c1, i: true },
                    { x: 1909, y: 1014, c: 0x371f16, i: true },
                ],
                operaPoints: [
                    { x: 1783, y: 894, ox: 101, oy: 122, ad: 500 },
                ]
            },
            { // 御魂
                judgePoints: [
                    { x: 1926, y:   77, c: 0xd7b287, i: true },
                    { x: 2085, y:   74, c: 0xd4ae82, i: true },
                    { x: 1846, y:  917, c: 0xe2d9c1, i: true },
                    { x: 1926, y: 1015, c: 0x382016, i: true },
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
            var point = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['结界_进攻'].firstColor, multiColor['结界_进攻'].colors, { region: [388, 434, 1531, 636], threshold: _self.userConfigs.multiColorSimilar });
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
                        { x:  416, y:  121, c: 0x3b393d, i: true },
                        { x: 1045, y:   72, c: 0x4d4a53, i: true },
                        { x: 1930, y:  199, c: 0xebdac9, i: true },
                        { x: 1046, y:  131, c: 0xf8f3e0, i: true },
                        { x: 1172, y:  132, c: 0x5f4937, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['结界_0勋章'].firstColor, multiColor['结界_0勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 280), point.y + random(0, 154), random(10, 100));
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
                        { x:  416, y:  121, c: 0x3b393d, i: true },
                        { x: 1045, y:   72, c: 0x4d4a53, i: true },
                        { x: 1930, y:  199, c: 0xebdac9, i: true },
                        { x: 1046, y:  131, c: 0xf8f3e0, i: true },
                        { x: 1172, y:  132, c: 0x5f4937, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['结界_1勋章'].firstColor, multiColor['结界_1勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 280), point.y + random(0, 154), random(10, 100));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 13,
        name: '结界_2勋章',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:  416, y:  121, c: 0x3b393d, i: true },
                        { x: 1045, y:   72, c: 0x4d4a53, i: true },
                        { x: 1930, y:  199, c: 0xebdac9, i: true },
                        { x: 1046, y:  131, c: 0xf8f3e0, i: true },
                        { x: 1172, y:  132, c: 0x5f4937, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['结界_2勋章'].firstColor, multiColor['结界_2勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 280), point.y + random(0, 154), random(10, 100));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 14,
        name: '结界_3勋章',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:  416, y:  121, c: 0x3b393d, i: true },
                        { x: 1045, y:   72, c: 0x4d4a53, i: true },
                        { x: 1930, y:  199, c: 0xebdac9, i: true },
                        { x: 1046, y:  131, c: 0xf8f3e0, i: true },
                        { x: 1172, y:  132, c: 0x5f4937, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['结界_3勋章'].firstColor, multiColor['结界_3勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 280), point.y + random(0, 154), random(10, 100));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 15,
        name: '结界_4勋章',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:  416, y:  121, c: 0x3b393d, i: true },
                        { x: 1045, y:   72, c: 0x4d4a53, i: true },
                        { x: 1930, y:  199, c: 0xebdac9, i: true },
                        { x: 1046, y:  131, c: 0xf8f3e0, i: true },
                        { x: 1172, y:  132, c: 0x5f4937, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['结界_4勋章'].firstColor, multiColor['结界_4勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 280), point.y + random(0, 154), random(10, 100));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 16,
        name: '结界_5勋章',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:  416, y:  121, c: 0x3b393d, i: true },
                        { x: 1045, y:   72, c: 0x4d4a53, i: true },
                        { x: 1930, y:  199, c: 0xebdac9, i: true },
                        { x: 1046, y:  131, c: 0xf8f3e0, i: true },
                        { x: 1172, y:  132, c: 0x5f4937, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['结界_5勋章'].firstColor, multiColor['结界_5勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 280), point.y + random(0, 154), random(10, 100));
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
                { x:  711, y:  917, c: 0xfc9630, i: true }, // 3次达摩左边
                { x:  838, y:  915, c: 0x383c59, i: true }, // 3次达摩右边，如果大于3次就刷新的话直接注释这一行，如果只有3次就刷新的话就保留这一行
                { x: 1609, y:  890, c: 0xf4b25f, i: true }, // 亮着的刷新按钮上的一个点
                { x:  416, y:  121, c: 0x3b393d, i: true },
                { x: 1045, y:   72, c: 0x4d4a53, i: true },
                { x: 1930, y:  199, c: 0xebdac9, i: true },
                { x: 1046, y:  131, c: 0xf8f3e0, i: true },
                { x: 1172, y:  132, c: 0x5f4937, i: true },
            ],
            operaPoints: [
                { x: 1872, y: 859, ox: 246, oy: 74, ad: 500 },
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
                        { x:  711, y:  917, c: 0xfc9630, i: true }, // 3次达摩左边
                        { x:  838, y:  915, c: 0x383c59, i: true }, // 3次达摩右边，如果大于3次就刷新的话直接注释这一行，如果只有3次就刷新的话就保留这一行
                        { x: 1609, y:  890, c: 0xf4b25f, i: false }, // 亮着的刷新按钮上的一个点
                        { x:  416, y:  121, c: 0x3b393d, i: true },
                        { x: 1045, y:   72, c: 0x4d4a53, i: true },
                        { x: 1930, y:  199, c: 0xebdac9, i: true },
                        { x: 1046, y:  131, c: 0xf8f3e0, i: true },
                        { x: 1172, y:  132, c: 0x5f4937, i: true },
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
                { x: 1926, y:   57, c: 0xd7b287, i: true },
                { x: 2077, y:   50, c: 0xd4ae82, i: true },
                { x: 1982, y:  237, c: 0xd8d0bf, i: true },
                { x:  381, y: 1048, c: 0x68402f, i: true },
                { x:  430, y:  961, c: 0xe5d4c4, i: true },
            ],
            operaPoints: [
                { x: 416, y: 951, ox: 96, oy: 103, ad: 500 },
            ]
        }]
    },
    {
        id: 20,
        name: '结界_寮突_CD等待',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:  416, y:  121, c: 0x3b393d, i: true },
                        { x: 1045, y:   72, c: 0x4d4a53, i: true },
                        { x: 1930, y:  199, c: 0xebdac9, i: true },
                        { x: 1046, y:  131, c: 0xf8f3e0, i: true },
                        { x: 1172, y:  132, c: 0x5f4937, i: true },
                        { x:  538, y:  862, c: 0x302c27, i: true }, // 数字0上随便取的几个点
                        { x:  538, y:  863, c: 0x302c27, i: true },
                        { x:  544, y:  863, c: 0xa99786, i: true },
                        { x:  550, y:  863, c: 0x4a433b, i: true },
                        { x:  550, y:  862, c: 0x4a423b, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;
            toastLog('寮突CD等待');
            sleep(30000);
            return true;
        }
    },
    {
        id: 21,
        name: '探索_地图进入最后一章',
        data: [{
            judgePoints: [
                { x: 1926, y:   57, c: 0xd7b287, i: true },
                { x: 2077, y:   50, c: 0xd4ae82, i: true },
                { x: 1982, y:  237, c: 0xd8d0bf, i: true },
                { x:  381, y: 1048, c: 0x68402f, i: true },
                { x:  430, y:  961, c: 0xe5d4c4, i: true },
            ],
            operaPoints: [
                { x: 1824, y: 836, ox: 288, oy: 135, ad: 1500 },
            ]
        }]
    },
    {
        id: 22,
        name: '探索_最后一章确认界面点击探索',
        data: [{
            judgePoints: [
                { x:  507, y:  199, c: 0x483726, i: true },
                { x: 1690, y:  226, c: 0xf3d2d2, i: true },
                { x: 1473, y:  199, c: 0x483726, i: true },
                { x: 1468, y:  799, c: 0xf4b25f, i: true },
                { x: 1764, y:  428, c: 0xc46916, i: true },
            ],
            operaPoints: [
                { x: 780, y: 304, ox: 82, oy: 80, ad: 500 },
                { x: 1449, y: 773, ox: 177, oy: 73, ad: 1500 },
            ]
        }]
    },
    {
        id: 23,
        name: '探索_挑战经验怪',
        data: function () {
            var _self = this;
            var count = 4;
            while (count--) {
                var sceneJudge = {
                    data: [{ // 用来判断是不是探索小怪的场景，直接用多点找色的话会在此占用太多资源
                        judgePoints: [
                            { x:   59, y:   93, c: 0xedf5fd, i: true },
                            { x: 1929, y:   54, c: 0xd7b287, i: true },
                            { x: 2078, y:   51, c: 0xd4ae82, i: true },
                            { x:   51, y:  868, c: 0x943152, i: true },
                            { x:  122, y: 1034, c: 0x2e3e2f, i: true },
                        ],
                        operaPoints: []
                    }]
                }
                if (!_self.commonClick(sceneJudge)) return false;
    
                // 如果是boss就直接挑战
                var point0 = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['探索_挑战BOSS图标'].firstColor, multiColor['探索_挑战BOSS图标'].colors, { region: [84, 200, 2024, 512], threshold: 10 });
                if (null != point0) {
                    _self.automator.press(point0.x + random(0, 68), point0.y + random(0, 66), random(10, 100));
                    sleep(1000 + _self.userConfigs.afterClickDelay + random(0, _self.userConfigs.afterClickDelayRandom));
                    return true;
                }
    
                // 找经验怪挑战
                var point = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['探索_经验怪标记'].firstColor, multiColor['探索_经验怪标记'].colors, { region: [632, 366, 1430, 530], threshold: 5 });
                // 如果没有经验怪标记的话就重找
                var cnt1 = 2;
                while (null == point && --cnt1 >= 0) {
                    sleep(200);
                    _self.captureScreen();
                    point = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['探索_经验怪标记'].firstColor, multiColor['探索_经验怪标记'].colors, { region: [632, 366, 1430, 530], threshold: 5 });
                }
                if (null != point) {
                    // 从内向外多点找色，可点击的挑战图标，可能会处理为不停的进行多点找色，找不到的时候放大区域
                    var l = 5 * 7 // 搜索区域宽高,5倍 "探索_经验怪标记" 的宽高，当这个区域找不到时，l以倍数增长，直到找到为止或者达到一定次数, 这样处理的话会找重复的地方
                    for (var tryTimes = 1; tryTimes <= 15; tryTimes++, l += 5 * 7) { // 尝试 14 次, 大概算了一下，14次内基本可以找到，找不到的话就滑屏
                        var region = [point.x -  l / 2, point.y - l - 40, l, l];
                        if (region[0] < 0) region[0] = 0;
                        if (region[1] < 0) region[1] = 0;
                        if (region[0] + region[2] > 2160) region[2] = 2160 - region[0];
                        if (region[1] + region[3] > 1080) region[3] = 1080 - region[1];

                        var pointChange = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['探索_挑战图标'].firstColor, multiColor['探索_挑战图标'].colors, { region: region, threshold: _self.userConfigs.multiColorSimilar });
                        if (null != pointChange) {
                            _self.automator.press(pointChange.x + random(0, 70), pointChange.y + random(0, 85), random(10, 100));
                            sleep(1000 + _self.userConfigs.afterClickDelay + random(0, _self.userConfigs.afterClickDelayRandom));
                            console.log('[assttyys]: successS tryTimes: ' + tryTimes);
                            return true;
                        }
                    }
                }
                if (count) {
                    // 屏幕右往坐滑
                    _self.automator.swipe(1658 + random(0, 390), 176 + random(0, 166), 298 + random(0, 234), 270 + random(0, 516), random(300, 600));
                    sleep(200);
                    _self.captureScreen();
                }
            }

            var outScene = {
                data: [{ // 用来判断是不是探索小怪的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:   59, y:   93, c: 0xedf5fd, i: true },
                        { x: 1929, y:   54, c: 0xd7b287, i: true },
                        { x: 2078, y:   51, c: 0xd4ae82, i: true },
                        { x:   51, y:  868, c: 0x943152, i: true },
                        { x:  122, y: 1034, c: 0x2e3e2f, i: true },
                    ],
                    operaPoints: [
                        { x:   44, y:  68, ox:  63, oy: 62, ad: 700  },
                        { x: 1174, y: 584, ox: 215, oy: 44, ad: 2000 }
                    ]
                }]
            }
            return _self.commonClick(outScene);
        }
    },
    {
        id: 24,
        name: '探索_打手换素材',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是准备的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:   62, y:  62, c: 0xd4c4a3, i: true },
                        { x: 2020, y: 818, c: 0xfff3d3, i: true },
                        { x: 2021, y: 845, c: 0xfff3d3, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 找满级标记
            var point = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['探索_式神满级标记'].firstColor, multiColor['探索_式神满级标记'].colors, { region: [656, 393, 739, 341], threshold: 15 });
            if (null != point) {
                var clickPoints = {
                    data: [{
                        judgePoints: [],
                        operaPoints: [
                            { x: 528, y: 723, ox: 491, oy: 238, ad: 50 }, // 把换式神的界面点出来
                            { x: 528, y: 723, ox: 491, oy: 238, ad: 50 }, // 把换式神的界面点出来
                            { x: 528, y: 723, ox: 491, oy: 238, ad: 1500 }, // 把换式神的界面点出来
                            { x:  62, y: 949, ox:  77, oy:  76, ad: 500 }, // 全部
                            { x:  63, y: 444, ox:  73, oy:  75, ad: 1000 }, // 素材
                        ]
                    }]
                }
                _self.commonClick(clickPoints);
                // 第一个素材换到左边
                _self.automator.swipe(429 + random(0, 56), 847 + random(0, 58), 366 + random(0, 100), 470 + random(0, 93), random(800, 1000));
                sleep(random(500, 600));
                // 第二个素材换到右边
                _self.automator.swipe(625 + random(0, 44), 848 + random(0, 46), 1020 + random(0, 101), 474 + random(0, 85), random(1000, 1200));
                sleep(random(100, 200));

            };
            return false;
        }
    },
    {
        id: 25,
        name: '探索_单人时退出',
        data: [{ // 用来判断是不是探索小怪的场景，直接用多点找色的话会在此占用太多资源
            judgePoints: [
                { x:   59, y:   93, c: 0xedf5fd, i: true },
                { x: 1929, y:   54, c: 0xd7b287, i: true },
                { x: 2078, y:   51, c: 0xd4ae82, i: true },
                { x:   51, y:  868, c: 0x943152, i: true },
                { x:  122, y: 1034, c: 0x2e3e2f, i: true },
                { x:   97, y:  684, c: 0xf5f5e5, i: false },
                { x:   78, y:  653, c: 0xcf3243, i: false },
            ],
            operaPoints: [
                { x:   44, y:  68, ox:  63, oy: 62, ad: 700  },
                { x: 1174, y: 584, ox: 215, oy: 44, ad: 2000 }
            ]
        }]
    },
    {
        id: 26,
        name: '探索_最后一章确认界面邀请好友', // TODO，邀请最近组队
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{
                    judgePoints: [
                        { x:  507, y:  199, c: 0x483726, i: true },
                        { x: 1690, y:  226, c: 0xf3d2d2, i: true },
                        { x: 1473, y:  199, c: 0x483726, i: true },
                        { x: 1468, y:  799, c: 0xf4b25f, i: true },
                        { x: 1764, y:  428, c: 0xc46916, i: true },
                    ],
                    operaPoints: [
                        { x: 780, y: 304, ox: 82, oy: 80, ad: 500 },
                        { x: 1011, y: 778, ox: 170, oy: 63, ad: 1500 },
                    ]
                }]
            };
            // 点击组队
            if (!_self.commonClick(sceneJudge)) return false;

            _self.captureScreen();
            var point = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['最近组队'].firstColor, multiColor['最近组队'].colors, { region: [643, 215, 874, 636], threshold: 15 });
            if (null != point) {
                toastLog('邀请最近组队');
                // 点最近组队好友
                _self.automator.press(point.x + random(0, 397), point.y + random(0, 109), random(10, 100));
                sleep(200 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom)));
                // 邀请
                _self.automator.press(1197 + random(0, 170), 830 + random(0, 63), random(10, 100));
                sleep(2000 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom)));
            } else {
                // 点第一个好友
                _self.automator.press(661 + random(0, 397), 284 + random(0, 109), random(10, 100));
                sleep(200 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom)));
                // 邀请
                _self.automator.press(1197 + random(0, 170), 830 + random(0, 63), random(10, 100));
                sleep(2000 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom)));
            }
            return true;
        }
    },
    {
        id: 27,
        name: '探索_司机换素材',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是准备的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:   62, y:  62, c: 0xd4c4a3, i: true },
                        { x: 2020, y: 818, c: 0xfff3d3, i: true },
                        { x: 2021, y: 845, c: 0xfff3d3, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 找满级标记
            var point = _self.graphicHelper.findMultiColors(_self.memImage, multiColor['探索_式神满级标记'].firstColor, multiColor['探索_式神满级标记'].colors, { region: [106, 446, 833, 522], threshold: 15 });
            if (null != point) {
                var clickPoints = {
                    data: [{
                        judgePoints: [],
                        operaPoints: [
                            { x: 528, y: 723, ox: 491, oy: 238, ad: 50 }, // 把换式神的界面点出来
                            { x: 528, y: 723, ox: 491, oy: 238, ad: 50 }, // 把换式神的界面点出来
                            { x: 528, y: 723, ox: 491, oy: 238, ad: 3000 }, // 把换式神的界面点出来
                            { x:  62, y: 949, ox:  77, oy:  76, ad: 500 }, // 全部
                            { x:  63, y: 444, ox:  73, oy:  75, ad: 1000 }, // 素材
                        ]
                    }]
                }
                _self.commonClick(clickPoints);
                // 第一个素材换到左边
                _self.automator.swipe(429 + random(0, 56), 847 + random(0, 58), 596 + random(0, 77), 497 + random(0, 62), random(800, 1000));
                sleep(random(500, 600));
                // 第二个素材换到右边
                _self.automator.swipe(625 + random(0, 44), 848 + random(0, 46), 1482 + random(0, 90), 496 + random(0, 79), random(1000, 1200));
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
                { x: 1614, y:  817, c: 0xf4b25f, i: true }, // 亮着的刷新按钮上的一个点
                { x:  801, y:   77, c: 0x483726, i: true },
                { x: 1344, y:   78, c: 0x483726, i: true },
            ],
            operaPoints: [
                { x: 1575, y: 781, ox: 235, oy: 61, ad: 500 },
            ]
        }]
    },
    {
        id: 31,
        name: '准备界面直接退出',
        data: [{
            judgePoints: [
                { x: 62, y: 62, c: 0xd4c4a3, i: true },
                { x: 2020, y: 818, c: 0xfff3d3, i: true },
                { x: 2021, y: 845, c: 0xfff3d3, i: true },
            ],
            operaPoints: [
                { x: 30, y: 23, ox: 52, oy: 50, ad: 2000 },
                { x: 1147, y: 602, ox: 170, oy: 63, ad: 500 },
            ]
        }]
    },
    {
        id: 32,
        name: '发现鬼王_点击',
        data: function () {
            var res = this.commonClick({
                data: [{
                    judgePoints: [
                        { x:   38, y:  335, c: 0xfdf5e5, i: true },
                        { x:   30, y:  387, c: 0xb4a593, i: true },
                        { x:   48, y:  397, c: 0xcc8a41, i: true },
                        { x:   86, y:  408, c: 0xb4a593, i: true },
                        { x:  779, y:  426, c: 0xdcd3c6, i: true },
                    ],
                    operaPoints: [{ x: 129, y: 358, ox: 630, oy: 100, ad: 2000 }]
                }]
            });
            if (res) {
                zzUtils.sendNotification({
                    title: 'assttyys',
                    content: '发现鬼王了！',
                    ticker: '发现鬼王了！'
                });
                device.vibrate(2000);
            }
            return res;
        }
    }, {
        id: 33,
        name: '缘结之镜_小纸人寻路（开发中）',
        data: function () {
            var res = this.commonClick({
                data: [{
                    judgePoints: [
                        { x: 1834, y:  815, c: 0xf1c89a, i: true },
                        { x: 1244, y:   18, c: 0xd66867, i: true },
                        { x:   61, y:   71, c: 0xe8f1f8, i: true },
                        { x: 1368, y:  997, c: 0x5a3719, i: true },
                        { x: 1357, y:  990, c: 0xddbb4d, i: true },
                        { x: 1603, y:  998, c: 0x202454, i: true }, // 自动挑战图标上的一个点
                    ],
                    operaPoints: [{ x: 1591, y: 986, ox: 29, oy: 25, ad: 1000 }]
                }]
            });
            if (res) {
                var res2 = false;
                var cnt = 30;
                do {
                    this.captureScreen();
                    res2 = this.commonClick({
                        data: [{
                            judgePoints: [
                                { x: 1834, y:  815, c: 0xf1c89a, i: true },
                                { x: 1244, y:   18, c: 0xd66867, i: true },
                                { x:   61, y:   71, c: 0xe8f1f8, i: true },
                                { x: 1368, y:  997, c: 0x5a3719, i: true },
                                { x: 1357, y:  990, c: 0xddbb4d, i: true },
                                { x: 1603, y:  998, c: 0x202454, i: false }, // 自动挑战图标上的一个点
                            ],
                            operaPoints: []
                        }]
                    });
                    sleep(1000);
                } while (res2 && cnt--); 
                if (cnt < 30) {
                    zzUtils.sendNotification({
                        title: '请手动操作',
                        content: '请手动操作',
                        ticker: '请手动操作'
                    });
                }   
            }
            return res;
        }
    }, {
        id: 34,
        name : '缘结之镜_挑战',
        data: [{
            judgePoints: [
                { x: 1594, y:  772, c: 0xd7bfa5, i: true },
                { x: 1585, y:  786, c: 0xd7ba8e, i: true },
                { x: 1343, y:  768, c: 0xd8bb9d, i: true },
                { x: 1373, y:  771, c: 0xdcc8ad, i: true },
                { x: 1376, y:  813, c: 0x060405, i: true },
                { x: 1592, y:  800, c: 0x000100, i: true },
                { x: 1643, y:  161, c: 0xd2c29e, i: true },
                { x: 1339, y:  161, c: 0xd2c29e, i: true },
                { x: 1035, y:  161, c: 0xd1c1a0, i: true },
            ],
            operaPoints: [{ x: 1528, y: 773, ox: 103, oy: 91, ad: 1000 }]
        }]
    }, {
        id: 35,
        name: '万事屋_事件领取(开发中)',
        data: function () {
            var ret = this.commonClick({
                data: [{
                    judgePoints: [
                        { x:   70, y:   71, c: 0xf8e6a4, i: true },
                        { x: 1050, y: 1033, c: 0x4e331e, i: true },
                        { x: 1551, y: 1011, c: 0xf6d7a8, i: true },
                        { x: 1733, y:  925, c: 0xf0e0a2, i: true },
                        { x: 1796, y:  924, c: 0x433323, i: true },
                    ],
                    operaPoints: [{ x: 1533, y: 957, ox: 74, oy: 79, ad: 1000 }]
                }]
            });
            if (ret) {
                var cd = random(this.userConfigs.wsw_sjlq_cd_down, this.userConfigs.wsw_sjlq_cd_up);
                toastLog('等待CD: ' + cd + 'ms');
                sleep(cd);
            }
        }
    }, {
        id: 36,
        name: '万事屋_事件获得奖励(开发中)',
        data: function () {
            var ret = this.commonClick({
                data: [{
                    judgePoints: [
                        { x:  556, y:  352, c: 0x3a2921, i: true },
                        { x:  582, y:  351, c: 0x3b2b1c, i: true },
                        { x: 1245, y:  356, c: 0x3c2b21, i: true },
                        { x: 1272, y:  356, c: 0x3b2b1b, i: true },
                        { x: 1009, y:  360, c: 0xeadaa6, i: true },
                        { x:  901, y:  312, c: 0xfff1ce, i: true },
                    ],
                    operaPoints: [{ x: 1166, y: 718, ox: 319, oy: 325, ad: 3000 }]
                }]
            });
            if (ret) {
                zzUtils.sendNotification({
                    title: '万事屋自动领奖励, 请查看是否有其它需要手动操作的事件',
                    content: '万事屋自动领奖励, 请查看是否有其它需要手动操作的事件',
                    ticker: '万事屋自动领奖励, 请查看是否有其它需要手动操作的事件'
                });
            }
        }
    }, {
        id: 37,
        name : '幻境间隙_挑战',
        data: [{
            judgePoints: [
                { x: 1962, y:  909, c: 0xe2d7c2, i: true },
                { x: 2005, y:  908, c: 0xded1b9, i: true },
                { x: 1633, y:  234, c: 0xe7d5cf, i: true },
                { x: 1994, y:  939, c: 0x272420, i: true },
                { x: 1995, y:  954, c: 0xe4d9c4, i: true },
            ],
            operaPoints: [{ x: 1927, y: 897, ox: 119, oy: 116, ad: 1000 }]
        }]
    }
]
