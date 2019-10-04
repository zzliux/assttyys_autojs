var multiColor = {};
var multiColorNames = ['结界_0勋章', '结界_1勋章', '结界_2勋章', '结界_3勋章', '结界_4勋章', '结界_5勋章', '结界_进攻'];
for (let i = 0; i < multiColorNames.length; i++) {
    multiColor[multiColorNames[i]] = require('./multi_colors/' + multiColorNames[i]);
}



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
    },
    {
        id: 6,
        name: '组队挑战',
        data: [{
            judgePoints: [
                { x: 1900, y: 929, c: '#D4B066', i: true },
                { x: 1763, y: 1001, c: '#D7B56D', i: true },
                { x: 1815, y: 985, c: '#382720', i: true },
            ],
            operaPoints: [
                { x: 1784, y: 913, ox: 93, oy: 101, ad: 500 },
            ]
        }]
    },
    {
        id: 7,
        name: '组队三人挑战',
        data: [{
            judgePoints: [
                { x: 1900, y: 929, c: '#D4B066', i: true },
                { x: 1763, y: 1001, c: '#D7B56D', i: true },
                { x: 1815, y: 985, c: '#382720', i: true },
                { x: 1633, y: 379, c: '#FFFFFE', i: false },
            ],
            operaPoints: [
                { x: 1784, y: 913, ox: 93, oy: 101, ad: 500 },
            ]
        }]
    },
    {
        id: 8,
        name: '取消确定框点确定',
        data: [
            { // 未点确定
                judgePoints: [
                    { x: 705, y: 649, c: '#DD6950', i: true },
                    { x: 1064, y: 643, c: '#F4B25E', i: true },
                    { x: 956, y: 644, c: '#CCB49A', i: true },
                    { x: 838, y: 544, c: '#9D8770', i: true },
                ],
                operaPoints: [
                    { x: 827, y: 518, ox: 258, oy: 43, ad: 100 },
                    { x: 1018, y: 612, ox: 242, oy: 71, ad: 2000 },
                ]
            },
            { // 已点确定或者没有确定
                judgePoints: [
                    { x: 705, y: 649, c: '#DD6950', i: true },
                    { x: 1064, y: 643, c: '#F4B25E', i: true },
                    { x: 956, y: 644, c: '#CCB49A', i: true },
                ],
                operaPoints: [
                    { x: 1018, y: 612, ox: 242, oy: 71, ad: 2000 },
                ]
            },
        ]
    },
    {
        id: 9,
        name: '御魂/御灵/业原火挑战',
        data: [{
            judgePoints: [
                { x: 389, y: 156, c: '#483727', i: true },
                { x: 1369, y: 737, c: '#F4B25E', i: true },
                { x: 1499, y: 744, c: '#F4B25E', i: true },
            ],
            operaPoints: [
                { x: 1346, y: 709, ox: 171, oy: 71, ad: 500 },
            ]
        }]
    },
    {
        id: 10,
        name: '结界_进攻',
        data: function (_self) {
            // 多点找色
            var point = images.findMultiColors(_self.memImage, multiColor['结界_进攻'].firstColor, multiColor['结界_进攻'].colors, { region: [388, 434, 1357, 636], threshold: _self.userConfigs.multiColorSimilar });
            console.log(point);
            if (!point) return false;
            Tap(point.x + random(0, 190), point.y + random(0, 86));
            var delay = 2000 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 11,
        name: '结界_0勋章',
        data: function (_self) {
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x: 264, y: 75, c: '#483727', i: true },
                        { x: 1308, y: 78, c: '#483727', i: true },
                        { x: 1118, y: 76, c: '#E5C25A', i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var t1 = new Date();
            var point = images.findMultiColors(_self.memImage, multiColor['结界_0勋章'].firstColor, multiColor['结界_0勋章'].colors, { region: [200, 141, 1531, 603], threshold: _self.userConfigs.multiColorSimilar });
            var t2 = new Date();
            console.log('结界_0勋章:单次多点找色时间: ' + (t2 - t1));
            if (!point) return false;
            Tap(point.x + random(0, 340), point.y + random(0, 161));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 12,
        name: '结界_1勋章',
        data: function (_self) {
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x: 264, y: 75, c: '#483727', i: true },
                        { x: 1308, y: 78, c: '#483727', i: true },
                        { x: 1118, y: 76, c: '#E5C25A', i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var t1 = new Date();
            var point = images.findMultiColors(_self.memImage, multiColor['结界_1勋章'].firstColor, multiColor['结界_1勋章'].colors, { region: [200, 141, 1531, 603], threshold: _self.userConfigs.multiColorSimilar });
            var t2 = new Date();
            console.log('结界_1勋章:单次多点找色时间: ' + (t2 - t1));
            if (!point) return false;
            Tap(point.x + random(0, 340), point.y + random(0, 161));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 13,
        name: '结界_2勋章',
        data: function (_self) {
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x: 264, y: 75, c: '#483727', i: true },
                        { x: 1308, y: 78, c: '#483727', i: true },
                        { x: 1118, y: 76, c: '#E5C25A', i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var t1 = new Date();
            var point = images.findMultiColors(_self.memImage, multiColor['结界_2勋章'].firstColor, multiColor['结界_2勋章'].colors, { region: [200, 141, 1531, 603], threshold: _self.userConfigs.multiColorSimilar });
            var t2 = new Date();
            console.log('结界_2勋章:单次多点找色时间: ' + (t2 - t1));
            if (!point) return false;
            Tap(point.x + random(0, 340), point.y + random(0, 161));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 14,
        name: '结界_3勋章',
        data: function (_self) {
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x: 264, y: 75, c: '#483727', i: true },
                        { x: 1308, y: 78, c: '#483727', i: true },
                        { x: 1118, y: 76, c: '#E5C25A', i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var t1 = new Date();
            var point = images.findMultiColors(_self.memImage, multiColor['结界_3勋章'].firstColor, multiColor['结界_3勋章'].colors, { region: [200, 141, 1531, 603], threshold: _self.userConfigs.multiColorSimilar });
            var t2 = new Date();
            console.log('结界_3勋章:单次多点找色时间: ' + (t2 - t1));
            if (!point) return false;
            Tap(point.x + random(0, 340), point.y + random(0, 161));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 15,
        name: '结界_4勋章',
        data: function (_self) {
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x: 264, y: 75, c: '#483727', i: true },
                        { x: 1308, y: 78, c: '#483727', i: true },
                        { x: 1118, y: 76, c: '#E5C25A', i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var t1 = new Date();
            var point = images.findMultiColors(_self.memImage, multiColor['结界_4勋章'].firstColor, multiColor['结界_4勋章'].colors, { region: [200, 141, 1531, 603], threshold: _self.userConfigs.multiColorSimilar });
            var t2 = new Date();
            console.log('结界_4勋章:单次多点找色时间: ' + (t2 - t1));
            if (!point) return false;
            Tap(point.x + random(0, 340), point.y + random(0, 161));
            var delay = 1500 + _self.userConfigs.afterClickDelay + parseInt(random(0, _self.userConfigs.afterClickDelayRandom));
            sleep(delay);
            return true;
        }
    },
    {
        id: 16,
        name: '结界_5勋章',
        data: function (_self) {
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x: 264, y: 75, c: '#483727', i: true },
                        { x: 1308, y: 78, c: '#483727', i: true },
                        { x: 1118, y: 76, c: '#E5C25A', i: true },
                    ],
                    operaPoints: []
                }]
            }
            if (!_self.commonClick(sceneJudge)) return false;

            // 多点找色
            var mc = multiColor['结界_5勋章'];
            var t1 = new Date();
            var point = images.findMultiColors(_self.memImage, mc.firstColor, mc.colors, { region: [200, 141, 1531, 603], threshold: _self.userConfigs.multiColorSimilar });
            var t2 = new Date();
            console.log('结界_5勋章:单次多点找色时间: ' + (t2 - t1));

            if (!point) return false;
            Tap(point.x + random(0, 340), point.y + random(0, 161));
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
                { x: 264, y: 75, c: '#483727', i: true },
                { x: 1308, y: 78, c: '#483727', i: true },
                { x: 766, y: 837, c: '#FCBA30', i: true }, // 3次达摩左边
                { x: 887, y: 838, c: '#363D57', i: true }, // 3次达摩右边，如果大于3次就刷新的话直接注释这一行，如果只有3次就刷新的话就保留这一行
            ],
            operaPoints: [
                { x: 1448, y: 774, ox: 206, oy: 74, ad: 500 },
            ]
        }]
    }
]