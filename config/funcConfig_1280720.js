var zzUtils = require('../zz_modules/zzUtils');
var multiColor = {};
var multiColorNames = ['结界_0勋章', '结界_1勋章', '结界_2勋章', '结界_3勋章', '结界_4勋章', '结界_5勋章', '结界_进攻', '探索_经验怪标记', '探索_挑战图标', '探索_式神满级标记', '探索_挑战BOSS图标', '最近组队'];
for (var i = 0; i < multiColorNames.length; i++) {
    var t = require('../multi_colors/1280720/' + multiColorNames[i]);
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
                    { x:   34, y:   22, c: 0xd7c5a2, i: true },
                    { x: 1144, y:  504, c: 0xdbc3ab, i: true },
                    { x: 1179, y:  629, c: 0x262626, i: true },
                    { x: 1117, y:  663, c: 0xf1d8a7, i: true },
                ],
                operaPoints: [{ x: 1118, y: 510, ox: 97, oy: 87, ad: 2000 }]
            }
        ],
    },
    {
        id: 2,
        name: '退出结算',
        data: [
            { // 退出结算(左上角战斗数据图标)
                judgePoints: [
                    { x:   78, y:   57, c: 0x3c2a20, i: true },
                    { x:   71, y:   62, c: 0xb18f66, i: true },
                    { x:   77, y:   82, c: 0x3a2a22, i: true },
                ],
                operaPoints: [
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                ]
            },
            { // 退出结算(左下角战斗数据图标)
                judgePoints: [
                    { x:   78, y:  652, c: 0x3c2a20, i: true },
                    { x:   61, y:  658, c: 0x392920, i: true },
                    { x:   88, y:  663, c: 0xa77d54, i: true },
                ],
                operaPoints: [
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                ]
            },
            { // 退出结算(左上角贪吃鬼)
                judgePoints: [
                    { x:   61, y:   62, c: 0xececec, i: true },
                    { x:   50, y:   68, c: 0x6d3333, i: true },
                    { x:   79, y:   36, c: 0xcbbac2, i: true },
                    { x:  102, y:   58, c: 0x25160a, i: true },
                ],
                operaPoints: [
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                ]
            },
            
            { // 个人退出结算(胜利太鼓)
                judgePoints: [
                    { x:  484, y:  165, c: 0x831a10, i: true },
                    { x:  459, y:  199, c: 0x971c13, i: true },
                    { x:  512, y:  200, c: 0x9a1c10, i: true },
                    { x:  492, y:  227, c: 0xd5c4ab, i: true },
                    { x:  813, y:  155, c: 0xffffff, i: true },
                ],
                operaPoints: [
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                ]
            },
            { // 组队退出结算(胜利太鼓)
                judgePoints: [
                    { x:  481, y:  106, c: 0x821a10, i: true },
                    { x:  457, y:  151, c: 0xa11c10, i: true },
                    { x:  507, y:  147, c: 0xa01b11, i: true },
                    { x:  821, y:   93, c: 0xf7efd0, i: true },
                ],
                operaPoints: [
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 50 },
                ]
            },
            { // 退出结算(打开的胜利达摩)
                judgePoints: [
                    { x:  484, y:  611, c: 0x3e82c6, i: true },
                    { x:  519, y:  599, c: 0x3f83c5, i: true },
                    { x:  670, y:  522, c: 0xba401b, i: true },
                    { x:  639, y:  532, c: 0x2c1712, i: true },
                    { x:  697, y:  424, c: 0x49382c, i: true },
                ],
                operaPoints: [
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 500 },
                ]
            },
            { // 个人退出结算(失败太鼓)
                judgePoints: [
                    { x:  470, y:  149, c: 0x544d5f, i: true },
                    { x:  444, y:  188, c: 0x5f556b, i: true },
                    { x:  497, y:  191, c: 0x5d5265, i: true },
                    { x:  731, y:  169, c: 0xbfb8aa, i: true },
                ],
                operaPoints: [
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 3000 },
                ]
            },
            { // 组队退出结算(失败太鼓)
                judgePoints: [
                    { x:  468, y:   94, c: 0x524b5e, i: true },
                    { x:  449, y:  131, c: 0x5c5164, i: true },
                    { x:  496, y:  138, c: 0x5a5165, i: true },
                    { x:  733, y:  110, c: 0xc5c1b4, i: true },
                ],
                operaPoints: [
                    { x: 1070, y: 101, ox: 120, oy: 488, ad: 3000 },
                ]
            }
        ]
    },
    {
        id: 3,
        name: '接受协作',
        data: [{
            judgePoints: [
                { x:  850, y:  425, c: 0x53ae5c, i: true },
                { x:  844, y:  526, c: 0xe0715f, i: true },
                { x:  531, y:  138, c: 0xb29375, i: true },
                { x:  616, y:  140, c: 0xb29375, i: true },
                { x:  868, y:  434, c: 0x3c2a29, i: true },
            ],
            operaPoints: [
                { x: 832, y: 398, ox: 42, oy: 42, ad: 500 },
            ]
        }]
    },
    {
        id: 4,
        name: '拒绝协作',
        data: [{
            judgePoints: [
                { x:  850, y:  425, c: 0x53ae5c, i: true },
                { x:  844, y:  526, c: 0xe0715f, i: true },
                { x:  531, y:  138, c: 0xb29375, i: true },
                { x:  616, y:  140, c: 0xb29375, i: true },
                { x:  868, y:  434, c: 0x3c2a29, i: true },
            ],
            operaPoints: [
                { x: 835, y: 497, ox: 37, oy: 45, ad: 500 },
            ]
        }]
    },
    {
        id: 5,
        name: '接受邀请',
        data: [
            { // 自动接受邀请
                judgePoints: [
                    { x:  130, y:  256, c: 0x59b462, i: true },
                    { x:  138, y:  262, c: 0x55b05e, i: true },
                    { x:  149, y:  253, c: 0x5cb765, i: true },
                    { x:   46, y:  255, c: 0xd96655, i: true },
                    { x:    5, y:  300, c: 0xf1be36, i: true },
                ],
                operaPoints: [
                    { x: 121, y: 236, ox: 38, oy: 42, ad: 500 },
                ]
            },
            { // 接受邀请
                judgePoints: [
                    { x:   40, y:  249, c: 0xdf6f5c, i: true },
                    { x:  135, y:  261, c: 0x52ad5b, i: true },
                    { x:  236, y:  252, c: 0xebc58e, i: true },
                    { x:  248, y:  270, c: 0x58b361, i: true },
                    { x:    7, y:  300, c: 0xf1be36, i: true },
                    { x:  261, y:  255, c: 0x846e5b, i: true },
                ],
                operaPoints: [
                    { x: 221, y: 233, ox: 37, oy: 42, ad: 500 },
                ]
            }
        ]
    },
    {
        id: 6,
        name: '组队挑战',
        data: [{
            judgePoints: [
                { x:   45, y:   37, c: 0xefdea9, i: true },
                { x: 1213, y:  607, c: 0xf5e59a, i: true },
                { x: 1210, y:  656, c: 0x34281c, i: true },
                { x: 1179, y:  667, c: 0xd9bd75, i: true },
                { x: 1262, y:  618, c: 0xd9ba71, i: true },
            ],
            operaPoints: [
                { x: 1193, y: 615, ox: 56, oy: 61, ad: 500 },
            ]
        }]
    },
    {
        id: 7,
        name: '组队三人挑战',
        data: [{
            judgePoints: [
                { x:   45, y:   37, c: 0xefdea9, i: true },
                { x: 1213, y:  607, c: 0xf5e59a, i: true },
                { x: 1210, y:  656, c: 0x34281c, i: true },
                { x: 1179, y:  667, c: 0xd9bd75, i: true },
                { x: 1262, y:  618, c: 0xd9ba71, i: true },
                { x: 1089, y:  255, c: 0xffffff, i: false },
            ],
            operaPoints: [
                { x: 1193, y: 615, ox: 56, oy: 61, ad: 500 },
            ]
        }]
    },
    {
        id: 8,
        name: '取消确定框点确定',
        data: [
            { // 未点默认邀请队友
                judgePoints: [
                    { x:  491, y:  266, c: 0xcbb59e, i: true },
                    { x:  561, y:  356, c: 0x715e4f, i: true },
                    { x:  575, y:  428, c: 0xdf6851, i: true },
                    { x:  815, y:  432, c: 0xf4b25f, i: true },
                ],
                operaPoints: [
                    { x: 551, y: 350, ox: 171, oy: 19, ad: 200 },
                    { x: 676, y: 408, ox: 163, oy: 45, ad: 500 },
                ]
            },
            { // 已点默认邀请队友或者没有默认邀请队友
                judgePoints: [
                    { x:  491, y:  266, c: 0xcbb59e, i: true },
                    { x:  575, y:  428, c: 0xdf6851, i: true },
                    { x:  815, y:  432, c: 0xf4b25f, i: true },
                ],
                operaPoints: [
                    { x: 676, y: 408, ox: 163, oy: 45, ad: 500 },
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
                    { x:   38, y:   37, c: 0xc3cce0, i: true },
                    { x: 1141, y:  597, c: 0xe3d9c3, i: true },
                    { x: 1101, y:  599, c: 0x583636, i: true },
                    { x: 1190, y:  677, c: 0x371f16, i: true },
                    { x: 1126, y:   48, c: 0xd7b388, i: true },
                ],
                operaPoints: [
                    { x: 1106, y: 594, ox: 79, oy: 84, ad: 500 },
                ]
            },
            { // 御魂
                judgePoints: [
                    { x:   46, y:   42, c: 0xc2cbe2, i: true },
                    { x: 1150, y:  603, c: 0xe3d8c3, i: true },
                    { x: 1198, y:  683, c: 0x382014, i: true },
                    { x: 1125, y:   48, c: 0xd7b38a, i: true },
                    { x: 1217, y:   47, c: 0xd3ae84, i: true },
                ],
                operaPoints: [
                    { x: 1115, y: 600, ox: 80, oy: 80, ad: 500 },
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
            var point = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['结界_进攻'].firstColor, multiColor['结界_进攻'].colors, { region: [306, 210, 860, 462], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 115), point.y + random(0, 44), random(10, 100));
            var delay = 2000 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 11,
        name: '结界_0勋章',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:   81, y:  106, c: 0x644924, i: true },
                        { x:  550, y:   93, c: 0x5a4131, i: true },
                        { x:  722, y:   93, c: 0x583716, i: true },
                        { x:  682, y:  103, c: 0xf8f3e0, i: true },
                        { x: 1209, y:  131, c: 0xebdac9, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;
            // 多点找色
            var point = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['结界_0勋章'].firstColor, multiColor['结界_0勋章'].colors, { region: [234, 137, 730, 452], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 214), point.y + random(0, 92), random(10, 100));
            var delay = 500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
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
                        { x:   81, y:  106, c: 0x644924, i: true },
                        { x:  550, y:   93, c: 0x5a4131, i: true },
                        { x:  722, y:   93, c: 0x583716, i: true },
                        { x:  682, y:  103, c: 0xf8f3e0, i: true },
                        { x: 1209, y:  131, c: 0xebdac9, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['结界_1勋章'].firstColor, multiColor['结界_1勋章'].colors, { region: [234, 137, 730, 452], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 214), point.y + random(0, 92), random(10, 100));
            var delay = 500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
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
                        { x:   81, y:  106, c: 0x644924, i: true },
                        { x:  550, y:   93, c: 0x5a4131, i: true },
                        { x:  722, y:   93, c: 0x583716, i: true },
                        { x:  682, y:  103, c: 0xf8f3e0, i: true },
                        { x: 1209, y:  131, c: 0xebdac9, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['结界_2勋章'].firstColor, multiColor['结界_2勋章'].colors, { region: [234, 137, 730, 452], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 214), point.y + random(0, 92), random(10, 100));
            var delay = 500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
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
                        { x:   81, y:  106, c: 0x644924, i: true },
                        { x:  550, y:   93, c: 0x5a4131, i: true },
                        { x:  722, y:   93, c: 0x583716, i: true },
                        { x:  682, y:  103, c: 0xf8f3e0, i: true },
                        { x: 1209, y:  131, c: 0xebdac9, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['结界_3勋章'].firstColor, multiColor['结界_3勋章'].colors, { region: [234, 137, 730, 452], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 214), point.y + random(0, 92), random(10, 100));
            var delay = 500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
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
                        { x:   81, y:  106, c: 0x644924, i: true },
                        { x:  550, y:   93, c: 0x5a4131, i: true },
                        { x:  722, y:   93, c: 0x583716, i: true },
                        { x:  682, y:  103, c: 0xf8f3e0, i: true },
                        { x: 1209, y:  131, c: 0xebdac9, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['结界_4勋章'].firstColor, multiColor['结界_4勋章'].colors, { region: [234, 137, 730, 452], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 214), point.y + random(0, 92), random(10, 100));
            var delay = 500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
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
                        { x:   81, y:  106, c: 0x644924, i: true },
                        { x:  550, y:   93, c: 0x5a4131, i: true },
                        { x:  722, y:   93, c: 0x583716, i: true },
                        { x:  682, y:  103, c: 0xf8f3e0, i: true },
                        { x: 1209, y:  131, c: 0xebdac9, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var point = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['结界_5勋章'].firstColor, multiColor['结界_5勋章'].colors, { region: [234, 137, 730, 452], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 214), point.y + random(0, 92), random(10, 100));
            var delay = 500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 17,
        name: '结界_个人_3次刷新',
        data: [{
            judgePoints: [
                { x:   81, y:  106, c: 0x644924, i: true },
                { x:  550, y:   93, c: 0x5a4131, i: true },
                { x:  722, y:   93, c: 0x583716, i: true },
                { x:  682, y:  103, c: 0xf8f3e0, i: true },
                { x: 1209, y:  131, c: 0xebdac9, i: true },
                { x:  394, y:  610, c: 0xfc9630, i: true }, // 3次达摩左边
                { x:  478, y:  607, c: 0x39405a, i: true }, // 3次达摩右边，如果大于3次就刷新的话直接注释这一行，如果只有3次就刷新的话就保留这一行
                { x:  991, y:  590, c: 0xf4b25f, i: true }, // 亮着的刷新按钮上的一个点
            ],
            operaPoints: [
                { x: 970, y: 576, ox: 158, oy: 44, ad: 500 },
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
                        { x:   81, y:  106, c: 0x644924, i: true },
                        { x:  550, y:   93, c: 0x5a4131, i: true },
                        { x:  722, y:   93, c: 0x583716, i: true },
                        { x:  682, y:  103, c: 0xf8f3e0, i: true },
                        { x: 1209, y:  131, c: 0xebdac9, i: true },
                        { x:  394, y:  610, c: 0xfc9630, i: true }, // 3次达摩左边
                        { x:  478, y:  607, c: 0x39405a, i: true }, // 3次达摩右边，如果大于3次就刷新的话直接注释这一行，如果只有3次就刷新的话就保留这一行
                        { x:  991, y:  590, c: 0xf4b25f, i: false }, // 亮着的刷新按钮上的一个点
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
                { x: 1169, y:  147, c: 0xd4cebf, i: true },
                { x:   20, y:  694, c: 0x64402f, i: true },
                { x:   43, y:   59, c: 0xeff5fb, i: true },
                { x: 1125, y:   36, c: 0xd7b389, i: true },
                { x: 1044, y:  708, c: 0x694330, i: true },
            ],
            operaPoints: [
                { x: 278, y: 627, ox: 66, oy: 74, ad: 500 },
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
                        { x:   81, y:  106, c: 0x644924, i: true },
                        { x:  550, y:   93, c: 0x5a4131, i: true },
                        { x:  722, y:   93, c: 0x583716, i: true },
                        { x:  682, y:  103, c: 0xf8f3e0, i: true },
                        { x: 1209, y:  131, c: 0xebdac9, i: true },
                        { x:  279, y:  575, c: 0x48413a, i: true }, // 数字0上的5个点
                        { x:  287, y:  575, c: 0x3c3630, i: true },
                        { x:  283, y:  576, c: 0xaa9786, i: true },
                        { x:  283, y:  571, c: 0xaa9786, i: true },
                        { x:  283, y:  579, c: 0xaa9886, i: true },
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
                { x: 1169, y:  147, c: 0xd4cebf, i: true },
                { x:   20, y:  694, c: 0x64402f, i: true },
                { x:   43, y:   59, c: 0xeff5fb, i: true },
                { x: 1125, y:   36, c: 0xd7b389, i: true },
                { x: 1044, y:  708, c: 0x694330, i: true },
            ],
            operaPoints: [
                { x: 1055, y: 558, ox: 193, oy: 88, ad: 1500 },
            ]
        }]
    },
    {
        id: 22,
        name: '探索_最后一章确认界面点击探索',
        data: [{
            judgePoints: [
                { x:  294, y:  134, c: 0x493624, i: true },
                { x:  878, y:  133, c: 0x493624, i: true },
                { x: 1050, y:  149, c: 0xeddccb, i: true },
                { x:  986, y:  529, c: 0xf4b25f, i: true },
                { x:  738, y:  134, c: 0x583716, i: true },
            ],
            operaPoints: [
                { x: 446, y: 201, ox: 49, oy: 52, ad: 500 },
                { x: 889, y: 518, ox: 113, oy: 41, ad: 1500 },
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
                            { x:   39, y:   68, c: 0xeff5fb, i: true },
                            { x:   35, y:  578, c: 0x922f58, i: true },
                            { x: 1126, y:   35, c: 0xd7b389, i: true },
                        ],
                        operaPoints: []
                    }]
                }
                if (!_self.commonClick(sceneJudge)) return false;
    
                // 如果是boss就直接挑战
                var point0 = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['探索_挑战BOSS图标'].firstColor, multiColor['探索_挑战BOSS图标'].colors, { region: [75, 140, 1070, 228], threshold: 10 });
                if (null != point0) {
                    _self.automator.press(point0.x + random(0, 35), point0.y + random(0, 57), random(10, 100));
                    sleep(1000 + _self.userConfigs.afterClickDelay + random(0, _self.userConfigs.afterClickDelayRandom));
                    return true;
                }
    
                // 找经验怪挑战
                var point = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['探索_经验怪标记'].firstColor, multiColor['探索_经验怪标记'].colors, { region: [42, 345, 1131, 276], threshold: 12 });
                // 如果没有经验怪标记的话就重找
                var cnt1 = 2;
                while (null == point && --cnt1 >= 0) {
                    sleep(200);
                    _self.captureScreen();
                    point = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['探索_经验怪标记'].firstColor, multiColor['探索_经验怪标记'].colors, { region: [42, 345, 1131, 276], threshold: 12 });
                }
                if (null != point) {
                    // 从内向外多点找色，可点击的挑战图标，可能会处理为不停的进行多点找色，找不到的时候放大区域
                    var l = 5 * 7 // 搜索区域宽高,5倍 "探索_经验怪标记" 的宽高，当这个区域找不到时，l以倍数增长，直到找到为止或者达到一定次数, 这样处理的话会找重复的地方
                    for (var tryTimes = 1; tryTimes <= 12; tryTimes++, l += 4 * 4) { // 尝试 12 次, 大概算了一下，12次内基本可以找到，找不到的话就滑屏
                        var region = [point.x -  l / 2, point.y - l - 40, l, l];
                        if (region[0] < 0) region[0] = 0;
                        if (region[1] < 0) region[1] = 0;
                        if (region[0] + region[2] > 1275) region[2] = 1275 - region[0];
                        if (region[1] + region[3] > 715) region[3] = 715 - region[1];

                        var pointChange = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['探索_挑战图标'].firstColor, multiColor['探索_挑战图标'].colors, { region: region, threshold: _self.userConfigs.multiColorSimilar });
                        if (null != pointChange) {
                            _self.automator.press(pointChange.x + random(0, 40), pointChange.y + random(0, 40), random(10, 100));
                            sleep(1000 + _self.userConfigs.afterClickDelay + random(0, _self.userConfigs.afterClickDelayRandom));
                            console.log('[assttyys]: successS tryTimes: ' + tryTimes);
                            return true;
                        }
                    }
                }
                if (count) {
                    // 屏幕右往坐滑
                    _self.automator.swipe(1039 + random(0, 180), 129 + random(0, 52), 87 + random(0, 128), 235 + random(0, 380), random(300, 500));
                    sleep(200);
                    _self.captureScreen();
                }
            }

            // 退出
            var outScene = {
                data: [{ // 用来判断是不是探索小怪的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:   39, y:   68, c: 0xeff5fb, i: true },
                        { x:   35, y:  578, c: 0x922f58, i: true },
                        { x: 1126, y:   35, c: 0xd7b389, i: true },
                    ],
                    operaPoints: [
                        { x: 36, y: 48, ox: 35, oy: 30, ad: 700 },
                        { x: 701, y: 389, ox: 146, oy: 29, ad: 1000}
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
                        { x:   34, y:   22, c: 0xd7c5a2, i: true },
                        { x: 1144, y:  504, c: 0xdbc3ab, i: true },
                        { x: 1179, y:  629, c: 0x262626, i: true },
                        { x: 1117, y:  663, c: 0xf1d8a7, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 找满级标记
            var point = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['探索_式神满级标记'].firstColor, multiColor['探索_式神满级标记'].colors, { region: [403, 247, 407, 218], threshold: 15 });
            if (null != point) {
                var clickPoints = {
                    data: [{
                        judgePoints: [],
                        operaPoints: [
                            { x: 128, y: 483, ox: 546, oy: 128, ad: 0}, // 把换式神的界面点出来
                            { x: 128, y: 483, ox: 546, oy: 128, ad: 1500}, // 把换式神的界面点出来
                            { x: 40, y: 636, ox: 56, oy: 44, ad: 200 }, // 全部
                            { x: 43, y: 295, ox: 51, oy: 47, ad: 200}, // 素材
                        ]
                    }]
                }
                _self.commonClick(clickPoints);
                // 第一个素材换到右边
                _self.automator.swipe(203 + random(0, 37), 551 + random(0, 64), 618 + random(0, 46), 324 + random(0, 72), random(300, 500));
                sleep(random(700, 900));
                // 第二个素材换到左边
                _self.automator.swipe(337 + random(0, 30), 564 + random(0, 50), 183 + random(0, 45), 321 + random(0, 76), random(300, 500));
                sleep(random(500, 600));
            };
            return false;
        }
    },
    {
        id: 25,
        name: '探索_单人时退出',
        data: [{ // 用来判断是不是探索小怪的场景，直接用多点找色的话会在此占用太多资源
            judgePoints: [
                { x:   39, y:   68, c: 0xeff5fb, i: true },
                { x:   35, y:  578, c: 0x922f58, i: true },
                { x: 1126, y:   35, c: 0xd7b389, i: true },
                { x:   59, y:  463, c: 0xf9faef, i: false },
            ],
            operaPoints: [
                { x: 36, y: 48, ox: 35, oy: 30, ad: 700 },
                { x: 701, y: 389, ox: 146, oy: 29, ad: 1000}
            ]
        }]
    },
    {
        id: 26,
        name: '探索_最后一章确认界面邀请好友(废弃)',
        data: []
    },
    {
        id: 27,
        name: '探索_司机换素材',
        data: function () {
            var _self = this;
            var sceneJudge = {
                data: [{ // 用来判断是不是准备的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x:   34, y:   22, c: 0xd7c5a2, i: true },
                        { x: 1144, y:  504, c: 0xdbc3ab, i: true },
                        { x: 1179, y:  629, c: 0x262626, i: true },
                        { x: 1117, y:  663, c: 0xf1d8a7, i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 找满级标记
            var point = _self.graphicHelper.findMultiColorsPalace(_self.memImage, multiColor['探索_式神满级标记'].firstColor, multiColor['探索_式神满级标记'].colors, { region: [12, 301, 688, 343], threshold: 15 });
            if (null != point) {
                var clickPoints = {
                    data: [{
                        judgePoints: [],
                        operaPoints: [
                            { x: 128, y: 483, ox: 546, oy: 128, ad: 0}, // 把换式神的界面点出来
                            { x: 128, y: 483, ox: 546, oy: 128, ad: 1500}, // 把换式神的界面点出来
                            { x: 40, y: 636, ox: 56, oy: 44, ad: 200 }, // 全部
                            { x: 43, y: 295, ox: 51, oy: 47, ad: 200}, // 素材
                        ]
                    }]
                }
                _self.commonClick(clickPoints);
                // 第一个素材换到右边
                _self.automator.swipe(203 + random(0, 37), 551 + random(0, 64), 920 + random(0, 38), 335 + random(0, 47), random(500, 800));
                sleep(random(700, 900));
                // 第二个素材换到左边
                _self.automator.swipe(337 + random(0, 30), 564 + random(0, 50), 334 + random(0, 29), 334 + random(0, 55), random(300, 500));
                sleep(random(500, 600));

            };
            return false;
        }
    },
    {
        id: 28,
        name: '大江山之战_修罗战场_挑战(废弃)',
        data: []
    },
    {
        id: 29,
        name: '大江山之战_海国退治_挑战(废弃)',
        data: []
    },
    {
        id: 30,
        name: '结界_个人_刷新',
        data: [{
            judgePoints: [
                { x:   81, y:  106, c: 0x644924, i: true },
                { x:  550, y:   93, c: 0x5a4131, i: true },
                { x:  722, y:   93, c: 0x583716, i: true },
                { x:  682, y:  103, c: 0xf8f3e0, i: true },
                { x: 1209, y:  131, c: 0xebdac9, i: true },
                { x:  991, y:  590, c: 0xf4b25f, i: true }, // 亮着的刷新按钮上的一个点
            ],
            operaPoints: [
                { x: 970, y: 576, ox: 158, oy: 44, ad: 500 },
            ]
        }]
    },
    {
        id: 31,
        name: '准备界面直接退出',
        data: [{
            judgePoints: [
                { x:   34, y:   22, c: 0xd7c5a2, i: true },
                { x: 1144, y:  504, c: 0xdbc3ab, i: true },
                { x: 1179, y:  629, c: 0x262626, i: true },
                { x: 1117, y:  663, c: 0xf1d8a7, i: true },
            ],
            operaPoints: [
                { x: 21, y: 16, ox: 26, oy: 29, ad: 500 },
                { x: 681, y: 399, ox: 120, oy: 46, ad: 500 },
            ]
        }]
    },
    {
        id: 32,
        name: '发现鬼王_点击(废弃)',
        data: []
    }, {
        id: 33,
        name: '缘结之镜_小纸人寻路(废弃)',
        data: []
    }, {
        id: 34,
        name: '缘结之镜_挑战(废弃)',
        data: []
    }, {
        id: 35,
        name: '万事屋_事件领取(废弃)',
        data: []
    }, {
        id: 36,
        name: '万事屋_事件获得奖励(废弃)',
        data: []
    }, {
        id: 37,
        name: '幻境间隙_挑战(废弃)',
        data: []
    }, {
        id: 38,
        name: '恶灵巢穴_挑战(废弃)',
        data: []
    }, {
        id: 39,
        name: '御魂过多确认',
        data: [{
            judgePoints: [
                { x:  452, y:  248, c: 0xcbb59e, i: true },
                { x:  814, y:  452, c: 0xcbb59e, i: true },
                { x:  714, y:  349, c: 0xcbb59e, i: true },
                { x:  680, y:  223, c: 0x603f2e, i: true },
                { x:  592, y:  407, c: 0xf4b25f, i: true },
                { x:  687, y:  438, c: 0xf4b25f, i: true },
                { x:  699, y:  446, c: 0x923d2c, i: true },
                { x:  580, y:  398, c: 0x993333, i: true },
            ],
            operaPoints: [{ x: 580, y: 398, ox: 119, oy: 48, ad: 1000 }]
        }]
    }
]