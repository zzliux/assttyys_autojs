var zzUtils = require('../zz_modules/zzUtils');
var multiColor = {};
var multiColorNames = ['结界_0勋章', '结界_1勋章', '结界_2勋章', '结界_3勋章', '结界_4勋章', '结界_5勋章', '结界_进攻', '探索_经验怪标记', '探索_挑战图标', '探索_式神满级标记', '探索_挑战BOSS图标', '最近组队'];
for (var i = 0; i < multiColorNames.length; i++) {
    multiColor[multiColorNames[i]] = require('../multi_colors/1280720/' + multiColorNames[i]);
}

module.exports = [
    null, // 0 放着占位,后续可能会放必执行的东西
    {
        id: 1,
        name: '准备',
        data: [
            {
                judgePoints: [
                    { x:   35, y:   42, c: 0xd4c4a3, i: true },
                    { x: 1155, y:  548, c: 0xfff3d3, i: true },
                    { x: 1186, y:  545, c: 0xfff3d3, i: true },
                ],
                operaPoints: [{ x: 1120, y: 512, ox: 97, oy: 86, ad: 2000 }]
            }
        ],
    },
    {
        id: 2,
        name: '退出结算',
        data: [
            { // 退出结算(左上角战斗数据图标识别),最优，速度最快
                judgePoints: [
                    { x:   50, y:   63, c: 0x361d0d, i: true },
                    { x:   74, y:   62, c: 0xf2f2d5, i: true },
                    { x:   88, y:   43, c: 0xfcecd3, i: true },
                    { x:  102, y:   78, c: 0x311810, i: true },
                    { x:   55, y:   88, c: 0xe2d9b8, i: true },
                ],
                operaPoints: [
                    { x: 39, y: 150, ox: 131, oy: 444, ad: 500 },
                    { x: 39, y: 150, ox: 131, oy: 444, ad: 500 },
                    { x: 39, y: 150, ox: 131, oy: 444, ad: 500 },
                ]
            },
            { // 个人退出结算(胜利太鼓)
                judgePoints: [
                    { x:  481, y:  160, c: 0x841b12, i: true },
                    { x:  460, y:  203, c: 0x9c1c12, i: true },
                    { x:  497, y:  206, c: 0xa51b12, i: true },
                    { x:  480, y:  189, c: 0xd0c0a9, i: true },
                ],
                operaPoints: [
                    { x: 39, y: 150, ox: 131, oy: 444, ad: 500 },
                ]
            },
            { // 组队退出结算(胜利太鼓)
                judgePoints: [
                    { x:  487, y:  108, c: 0x841b12, i: true },
                    { x:  493, y:  150, c: 0xa51b12, i: true },
                    { x:  453, y:  146, c: 0x9c1c12, i: true },
                    { x:  479, y:  134, c: 0xd0c0a9, i: true },
                ],
                operaPoints: [
                    { x: 39, y: 150, ox: 131, oy: 444, ad: 500 },
                ]
            },
            { // 退出结算(未打开的胜利达摩)
                judgePoints: [
                    { x:  582, y:  394, c: 0xca271e, i: true },
                    { x:  687, y:  389, c: 0xba3a1f, i: true },
                    { x:  671, y:  380, c: 0xbc451c, i: true },
                    { x:  676, y:  317, c: 0x020101, i: true },
                    { x:  631, y:  436, c: 0x0e0101, i: true },
                ],
                operaPoints: [
                    { x: 39, y: 150, ox: 131, oy: 444, ad: 500 },
                ]
            },
            { // 退出结算(打开的胜利达摩)
                judgePoints: [
                    { x:  488, y:  621, c: 0x3c8ace, i: true },
                    { x:  574, y:  623, c: 0x350204, i: true },
                    { x:  715, y:  624, c: 0x350204, i: true },
                ],
                operaPoints: [
                    { x: 39, y: 150, ox: 131, oy: 444, ad: 500 },
                    { x: 39, y: 150, ox: 131, oy: 444, ad: 500 },
                ]
            },
            { // 个人退出结算(失败太鼓)
                judgePoints: [
                    { x:  467, y:  160, c: 0x4c4453, i: true },
                    { x:  448, y:  180, c: 0x5b5265, i: true },
                    { x:  493, y:  195, c: 0x5b5265, i: true },
                    { x:  488, y:  167, c: 0xb5a38b, i: true },
                ],
                operaPoints: [
                    { x: 39, y: 150, ox: 131, oy: 444, ad: 500 },
                ]
            },
            { // 组队退出结算(失败太鼓)
                judgePoints: [
                    { x:  468, y:  106, c: 0x4c4453, i: true },
                    { x:  449, y:  124, c: 0x5b5265, i: true },
                    { x:  490, y:  138, c: 0x5b5265, i: true },
                    { x:  500, y:  177, c: 0xb8a487, i: true },
                ],
                operaPoints: [
                    { x: 39, y: 150, ox: 131, oy: 444, ad: 500 },
                ]
            }
        ]
    },
    {
        id: 3,
        name: '接受协作',
        data: [{
            judgePoints: [
                { x:  854, y:  421, c: 0x58b361, i: true },
                { x:  845, y:  512, c: 0xe06d5c, i: true },
                { x:  613, y:  146, c: 0xb29178, i: true },
                { x:  617, y:  146, c: 0xb29178, i: true },
            ],
            operaPoints: [
                { x: 831, y: 397, ox: 41, oy: 43, ad: 500 },
            ]
        }]
    },
    {
        id: 4,
        name: '拒绝协作',
        data: [{
            judgePoints: [
                { x:  854, y:  421, c: 0x58b361, i: true },
                { x:  845, y:  512, c: 0xe06d5c, i: true },
                { x:  613, y:  146, c: 0xb29178, i: true },
                { x:  617, y:  146, c: 0xb29178, i: true },
            ],
            operaPoints: [
                { x: 833, y: 497, ox: 42, oy: 44, ad: 500 },
            ]
        }]
    },
    {
        id: 5,
        name: '接受邀请',
        data: [
            { // 自动接受邀请
                judgePoints: [
                    { x:  238, y:  253, c: 0xedc492, i: true },
                    { x:  144, y:  258, c: 0x58b361, i: true },
                    { x:   38, y:  247, c: 0xe06d5c, i: true },
                    { x:  233, y:  283, c: 0xbaaa99, i: true },
                ],
                operaPoints: [
                    { x: 216, y: 238, ox: 38, oy: 41, ad: 500 },
                ]
            },
            { // 接受邀请
                judgePoints: [
                    { x:   38, y:  248, c: 0xe06d5c, i: true },
                    { x:  129, y:  253, c: 0x58b361, i: true },
                    { x:   38, y:  247, c: 0xe06d5c, i: true },
                    { x:  135, y:  242, c: 0xbaaa99, i: true },
                ],
                operaPoints: [
                    { x: 120, y: 240, ox: 38, oy: 37, ad: 500 },
                ]
            }
        ]
    },
    {
        id: 6,
        name: '组队挑战',
        data: [{
            judgePoints: [
                { x: 1187, y:  611, c: 0xf1e096, i: true },
                { x: 1210, y:  655, c: 0x392920, i: true },
                { x: 1221, y:  640, c: 0xecd380, i: true },
                { x: 1169, y:  666, c: 0xd0a765, i: true },
            ],
            operaPoints: [
                { x: 1192, y: 615, ox: 55, oy: 58, ad: 500 },
            ]
        }]
    },
    {
        id: 7,
        name: '组队三人挑战',
        data: [{
            judgePoints: [
                { x: 1187, y:  611, c: 0xf1e096, i: true },
                { x: 1210, y:  655, c: 0x392920, i: true },
                { x: 1221, y:  640, c: 0xecd380, i: true },
                { x: 1169, y:  666, c: 0xd0a765, i: true },
                { x:  643, y:  254, c: 0xffffff, i: false },
                { x: 1088, y:  252, c: 0xffffff, i: false },
            ],
            operaPoints: [
                { x: 1192, y: 615, ox: 55, oy: 58, ad: 500 },
            ]
        }]
    },
    {
        id: 8,
        name: '取消确定框点确定',
        data: [
            { // 未点默认邀请队友
                judgePoints: [
                    { x:  455, y:  259, c: 0xccb49b, i: true },
                    { x:  548, y:  258, c: 0xccb49b, i: true },
                    { x:  621, y:  266, c: 0xccb49b, i: true },
                    { x:  563, y:  359, c: 0x9d8771, i: true },
                    { x:  562, y:  433, c: 0xdd6951, i: true },
                    { x:  692, y:  433, c: 0xf4b25f, i: true },
                ],
                operaPoints: [
                    { x: 550, y: 347, ox: 172, oy: 29, ad: 100 },
                    { x: 680, y: 441, ox: 155, oy: 40, ad: 2000 },
                ]
            },
            { // 已点默认邀请队友或者没有默认邀请队友
                judgePoints: [
                    { x:  455, y:  259, c: 0xccb49b, i: true },
                    { x:  548, y:  258, c: 0xccb49b, i: true },
                    { x:  621, y:  266, c: 0xccb49b, i: true },
                    { x:  562, y:  433, c: 0xdd6951, i: true },
                    { x:  692, y:  433, c: 0xf4b25f, i: true },
                ],
                operaPoints: [
                    { x: 680, y: 441, ox: 155, oy: 40, ad: 2000 },
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
                    { x:   37, y:   36, c: 0xc2cbe3, i: true },
                    { x: 1124, y:   48, c: 0xd7b287, i: true },
                    { x: 1226, y:   46, c: 0xd4ae82, i: true },
                    { x: 1142, y:  597, c: 0xe2d9c1, i: true },
                    { x: 1195, y:  672, c: 0x371f16, i: true },
                ],
                operaPoints: [
                    { x: 1105, y: 593, ox: 85, oy: 88, ad: 500 },
                ]
            },
            { // 御魂
                judgePoints: [
                    { x:   48, y:   39, c: 0xc2cbe3, i: true },
                    { x: 1122, y:   51, c: 0xd7b287, i: true },
                    { x: 1223, y:   48, c: 0xd4ae82, i: true },
                    { x: 1137, y:  611, c: 0xe3dac2, i: true },
                    { x: 1193, y:  686, c: 0x371f16, i: true },
                ],
                operaPoints: [
                    { x: 1113, y: 595, ox: 86, oy: 88, ad: 500 },
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
            var point = images.findMultiColors(_self.memImage, multiColor['结界_进攻'].firstColor, multiColor['结界_进攻'].colors, { region: [129, 83, 978, 590], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 110), point.y + random(0, 41), random(10, 100));
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
                        { x:  313, y:   47, c: 0x483726, i: true },
                        { x:  906, y:   51, c: 0x483726, i: true },
                        { x: 1182, y:   66, c: 0xe6d5d5, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_0勋章'].firstColor, multiColor['结界_0勋章'].colors, { region: [129, 83, 978, 590], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(88, 311), point.y + random(0, 105), random(10, 100));
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
                        { x:  313, y:   47, c: 0x483726, i: true },
                        { x:  906, y:   51, c: 0x483726, i: true },
                        { x: 1182, y:   66, c: 0xe6d5d5, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_1勋章'].firstColor, multiColor['结界_1勋章'].colors, { region: [129, 83, 978, 590], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(88, 311), point.y + random(0, 105), random(10, 100));
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
                        { x:  313, y:   47, c: 0x483726, i: true },
                        { x:  906, y:   51, c: 0x483726, i: true },
                        { x: 1182, y:   66, c: 0xe6d5d5, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_2勋章'].firstColor, multiColor['结界_2勋章'].colors, { region: [129, 83, 978, 590], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(88, 311), point.y + random(0, 105), random(10, 100));
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
                        { x:  313, y:   47, c: 0x483726, i: true },
                        { x:  906, y:   51, c: 0x483726, i: true },
                        { x: 1182, y:   66, c: 0xe6d5d5, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_3勋章'].firstColor, multiColor['结界_3勋章'].colors, { region: [129, 83, 978, 590], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(88, 311), point.y + random(0, 105), random(10, 100));
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
                        { x:  313, y:   47, c: 0x483726, i: true },
                        { x:  906, y:   51, c: 0x483726, i: true },
                        { x: 1182, y:   66, c: 0xe6d5d5, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_4勋章'].firstColor, multiColor['结界_4勋章'].colors, { region: [129, 83, 978, 590], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(88, 311), point.y + random(0, 105), random(10, 100));
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
                        { x:  313, y:   47, c: 0x483726, i: true },
                        { x:  906, y:   51, c: 0x483726, i: true },
                        { x: 1182, y:   66, c: 0xe6d5d5, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_5勋章'].firstColor, multiColor['结界_5勋章'].colors, { region: [129, 83, 978, 590], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(88, 311), point.y + random(0, 105), random(10, 100));
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
                { x:  437, y:   48, c: 0x483726, i: true },
                { x:  823, y:   50, c: 0x483726, i: true },
                { x:  510, y:  558, c: 0xfdba30, i: true },// 3次达摩左边
                { x:  581, y:  558, c: 0x363e57, i: true },// 3次达摩右边，如果大于3次就刷新的话直接注释这一行，如果只有3次就刷新的话就保留这一行
                { x:  997, y:  538, c: 0xf4b25f, i: true },// 亮着的刷新按钮上的一个点
            ],
            operaPoints: [
                { x: 970, y: 521, ox: 157, oy: 41, ad: 500 },
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
                        { x:  437, y:   48, c: 0x483726, i: true },
                        { x:  823, y:   50, c: 0x483726, i: true },
                        { x:  510, y:  558, c: 0xfdba30, i: true },// 3次达摩左边
                        { x:  581, y:  558, c: 0x363e57, i: true },// 3次达摩右边，如果大于3次就刷新的话直接注释这一行，如果只有3次就刷新的话就保留这一行
                        { x:  973, y:  540, c: 0xb0a8a0, i: true },// 灭着的刷新按钮上的一个点
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
                { x: 1168, y:  147, c: 0xd8d0bf, i: true },
                { x:  253, y:  691, c: 0x653e2d, i: true },
                { x:  284, y:  643, c: 0xe3d3c2, i: true },
            ],
            operaPoints: [
                { x: 280, y: 361, ox: 57, oy: 71, ad: 500 },
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
                        { x:  348, y:   49, c: 0x483726, i: true },
                        { x:  874, y:   51, c: 0x483726, i: true },
                        { x:  276, y:  557, c: 0xd0bfaf, i: true }, // 数字0上随便取的几个点
                        { x:  286, y:  558, c: 0xd0bfaf, i: true },
                        { x:  289, y:  558, c: 0x46403a, i: true },
                        { x:  280, y:  558, c: 0x35312c, i: true },
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
                { x: 1168, y:  147, c: 0xd8d0bf, i: true },
                { x:  253, y:  691, c: 0x653e2d, i: true },
                { x:  284, y:  643, c: 0xe3d3c2, i: true },
            ],
            operaPoints: [
                { x: 1056, y: 557, ox: 191, oy: 99, ad: 1500 },
            ]
        }]
    },
    {
        id: 22,
        name: '探索_最后一章确认界面点击探索',
        data: [{
            judgePoints: [
                { x:  374, y:  131, c: 0x483726, i: true },
                { x:  400, y:  133, c: 0x483726, i: true },
                { x:  843, y:  132, c: 0x483726, i: true },
                { x:  897, y:  533, c: 0xf4b25f, i: true },
                { x:  897, y:  546, c: 0xf4b25f, i: true },
                { x:  991, y:  539, c: 0xf4b25f, i: true },
                { x: 1044, y:  148, c: 0xe6d5d5, i: true },
            ],
            operaPoints: [
                { x: 444, y: 201, ox: 53, oy: 55, ad: 500 },
                { x: 890, y: 519, ox: 111, oy: 41, ad: 1500 },
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
                            { x:   44, y:  578, c: 0x99365c, i: true },
                            { x: 1125, y:   36, c: 0xd7b287, i: true },
                            { x: 1227, y:   36, c: 0xd4ae83, i: true },
                            { x:   38, y:   64, c: 0xedf5fd, i: true },
                            { x:   31, y:  684, c: 0x4c4464, i: true },
                        ],
                        operaPoints: []
                    }]
                }
                if (!_self.commonClick(sceneJudge)) return false;
    
                // 如果是boss就直接挑战
                var point0 = images.findMultiColors(_self.memImage, multiColor['探索_挑战BOSS图标'].firstColor, multiColor['探索_挑战BOSS图标'].colors, { region: [22, 106, 1242, 370], threshold: 10 });
                if (null != point0) {
                    _self.automator.press(point0.x + random(0, 50), point0.y + random(0, 59), random(10, 100));
                    sleep(1000 + _self.userConfigs.afterClickDelay + random(0, _self.userConfigs.afterClickDelayRandom));
                    return true;
                }
    
                // 找经验怪挑战
                var point = images.findMultiColors(_self.memImage, multiColor['探索_经验怪标记'].firstColor, multiColor['探索_经验怪标记'].colors, { region: [14, 214, 1240, 500], threshold: 5 });
                // 如果没有经验怪标记的话就重找
                var cnt1 = 2;
                while (null == point && --cnt1 >= 0) {
                    sleep(200);
                    _self.captureScreen();
                    point = images.findMultiColors(_self.memImage, multiColor['探索_经验怪标记'].firstColor, multiColor['探索_经验怪标记'].colors, { region: [14, 214, 1240, 500], threshold: 5 });
                }
                if (null != point) {
                    // 从内向外多点找色，可点击的挑战图标，可能会处理为不停的进行多点找色，找不到的时候放大区域
                    var l = 3 * 4 // 搜索区域宽高,5倍 "探索_经验怪标记" 的宽高，当这个区域找不到时，l以倍数增长，直到找到为止或者达到一定次数, 这样处理的话会找重复的地方
                    for (var tryTimes = 1; tryTimes <= 14; tryTimes++, l += 3 * 4) { // 尝试 14 次, 大概算了一下，14次内基本可以找到，找不到的话就滑屏
                        var region = [point.x -  l / 2, point.y - l - 40, l, l];
                        if (region[0] < 0) region[0] = 0;
                        if (region[1] < 0) region[1] = 0;
                        if (region[0] + region[2] > 1280) region[2] = 1280 - region[0];
                        if (region[1] + region[3] > 720) region[3] = 720 - region[1];

                        var pointChange = images.findMultiColors(_self.memImage, multiColor['探索_挑战图标'].firstColor, multiColor['探索_挑战图标'].colors, { region: region, threshold: _self.userConfigs.multiColorSimilar });
                        if (null != pointChange) {
                            _self.automator.press(pointChange.x + random(0, 50), pointChange.y + random(0, 50), random(10, 100));
                            sleep(1000 + _self.userConfigs.afterClickDelay + random(0, _self.userConfigs.afterClickDelayRandom));
                            console.log('[assttyys]: successS tryTimes: ' + tryTimes);
                            return true;
                        }
                    }
                }
                if (count) {
                    // 屏幕右往坐滑
                    _self.automator.swipe(1024 + random(0, 210), 122 + random(0, 72), 84 + random(0, 150), 200 + random(0, 336), random(300, 700));
                    sleep(200);
                    _self.captureScreen();
                }
            }

            var outScene = {
                data: [{ // 用来判断是不是探索小怪的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:   44, y:  578, c: 0x99365c, i: true },
                        { x: 1125, y:   36, c: 0xd7b287, i: true },
                        { x: 1227, y:   36, c: 0xd4ae83, i: true },
                        { x:   38, y:   64, c: 0xedf5fd, i: true },
                        { x:   31, y:  684, c: 0x4c4464, i: true },
                    ],
                    operaPoints: [
                        { x:  27, y:  45, ox:  46, oy: 40, ad: 700  },
                        { x: 702, y: 389, ox: 146, oy: 30, ad: 2000 }
                    ]
                }]
            }
            return _self.commonClick(outScene);
        }
    },
    {
        id: 24,
        name: '探索_打手换素材(开发中)',
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
            var point = images.findMultiColors(_self.memImage, multiColor['探索_式神满级标记'].firstColor, multiColor['探索_式神满级标记'].colors, { region: [656, 393, 739, 341], threshold: 15 });
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
        name: '探索_单人时退出(开发中)',
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
        name: '探索_最后一章确认界面邀请好友(开发中)', // TODO，邀请最近组队
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
            var point = images.findMultiColors(_self.memImage, multiColor['最近组队'].firstColor, multiColor['最近组队'].colors, { region: [643, 215, 874, 636], threshold: 15 });
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
        name: '探索_司机换素材(开发中)',
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
            var point = images.findMultiColors(_self.memImage, multiColor['探索_式神满级标记'].firstColor, multiColor['探索_式神满级标记'].colors, { region: [106, 446, 833, 522], threshold: 15 });
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
                { x:  408, y:   49, c: 0x483726, i: true },
                { x:  856, y:   50, c: 0x483726, i: true },
                { x:  993, y:  537, c: 0xf4b25f, i: true }, // 亮着的刷新按钮上的一个点
            ],
            operaPoints: [
                { x: 970, y: 521, ox: 157, oy: 41, ad: 500 },
            ]
        }]
    },
    {
        id: 31,
        name: '准备界面直接退出',
        data: [{
            judgePoints: [
                { x:   35, y:   42, c: 0xd4c4a3, i: true },
                { x: 1155, y:  548, c: 0xfff3d3, i: true },
                { x: 1186, y:  545, c: 0xfff3d3, i: true },
            ],
            operaPoints: [
                { x: 21, y: 18, ox: 31, oy: 30, ad: 2000 },
                { x: 685, y: 402, ox: 111, oy: 40, ad: 500 },
            ]
        }]
    },
    {
        id: 32,
        name: '发现鬼王_点击（开发中）',
        data: function () {
            var res = this.commonClick({
                data: [{
                    judgePoints: [
                        { x:   36, y:  334, c: 0xfef5e4, i: true },
                        { x:   52, y:  333, c: 0x56514d, i: true },
                        { x:   51, y:  395, c: 0xce8f40, i: true },
                        { x:   78, y:  404, c: 0xb4a592, i: true },
                        { x:  777, y:  423, c: 0xdcd2c6, i: true },
                    ],
                    operaPoints: [{ x: 129, y: 363, ox: 627, oy: 93, ad: 2000 }]
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
    }
]
