var multiColor = {};
var multiColorNames = ['结界_0勋章', '结界_1勋章', '结界_2勋章', '结界_3勋章', '结界_4勋章', '结界_5勋章', '结界_进攻', '探索_经验怪标记', '探索_挑战图标', '探索_式神满级标记', '探索_挑战BOSS图标', '最近组队'];
for (var i = 0; i < multiColorNames.length; i++) {
    multiColor[multiColorNames[i]] = require('../multi_colors/' + multiColorNames[i]);
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
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 500 },
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
                    { x: 838, y: 939, c: '#73290C', i: true },
                    { x: 897, y: 927, c: '#300205', i: true },
                ],
                operaPoints: [
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 500 },
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 500 },
                    // { x: 29, y: 180, ox: 194, oy: 620, ad: 1000 },
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
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 3000 },
                ]
            },
            { // 组队退出结算(失败太鼓)
                judgePoints: [
                    { x: 688, y: 197, c: '#564F5F', i: true },
                    { x: 754, y: 204, c: '#5C5366', i: true },
                    { x: 707, y: 145, c: '#524A5A', i: true },
                    { x: 703, y: 186, c: '#B9A990', i: true },
                ],
                operaPoints: [
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 3000 },
                ]
            },
            { // 大岳丸活动 大江山退出结算，后续可能会删除该场景判断
                judgePoints: [
                    { x: 982, y: 261, c: '#821A11', i: true },
                    { x: 907, y: 342, c: '#CDB17F', i: true },
                    { x: 1007, y: 327, c: '#971C14', i: true },
                    { x: 1128, y: 256, c: '#D3B47E', i: true },
                ],
                operaPoints: [
                    { x: 29, y: 180, ox: 194, oy: 620, ad: 3000 },
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
            var point = images.findMultiColors(_self.memImage, multiColor['结界_进攻'].firstColor, multiColor['结界_进攻'].colors, { region: [388, 434, 1531, 636], threshold: _self.userConfigs.multiColorSimilar });
            if (!point) return false;
            _self.automator.press(point.x + random(0, 190), point.y + random(0, 86), random(10, 100));
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
            var point = images.findMultiColors(_self.memImage, multiColor['结界_0勋章'].firstColor, multiColor['结界_0勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            var t2 = new Date();
            console.log('结界_0勋章:单次多点找色时间: ' + (t2 - t1));
            if (!point) return false;
            _self.automator.press(point.x + random(0, 340), point.y + random(0, 161), random(10, 100));
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
            var point = images.findMultiColors(_self.memImage, multiColor['结界_1勋章'].firstColor, multiColor['结界_1勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            var t2 = new Date();
            console.log('结界_1勋章:单次多点找色时间: ' + (t2 - t1));
            if (!point) return false;
            _self.automator.press(point.x + random(0, 340), point.y + random(0, 161), random(10, 100));
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
            var point = images.findMultiColors(_self.memImage, multiColor['结界_2勋章'].firstColor, multiColor['结界_2勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            var t2 = new Date();
            console.log('结界_2勋章:单次多点找色时间: ' + (t2 - t1));
            if (!point) return false;
            _self.automator.press(point.x + random(0, 340), point.y + random(0, 161), random(10, 100));
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
            var point = images.findMultiColors(_self.memImage, multiColor['结界_3勋章'].firstColor, multiColor['结界_3勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            var t2 = new Date();
            console.log('结界_3勋章:单次多点找色时间: ' + (t2 - t1));
            if (!point) return false;
            _self.automator.press(point.x + random(0, 340), point.y + random(0, 161), random(10, 100));
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
            var point = images.findMultiColors(_self.memImage, multiColor['结界_4勋章'].firstColor, multiColor['结界_4勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            var t2 = new Date();
            console.log('结界_4勋章:单次多点找色时间: ' + (t2 - t1));
            if (!point) return false;
            _self.automator.press(point.x + random(0, 340), point.y + random(0, 161), random(10, 100));
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
            var t1 = new Date();
            var point = images.findMultiColors(_self.memImage, multiColor['结界_5勋章'].firstColor, multiColor['结界_5勋章'].colors, { region: [200, 141, 1531, 900], threshold: _self.userConfigs.multiColorSimilar });
            var t2 = new Date();
            console.log('结界_5勋章:单次多点找色时间: ' + (t2 - t1));

            if (!point) return false;
            _self.automator.press(point.x + random(0, 340), point.y + random(0, 161), random(10, 100));
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
                { x: 1503, y: 814, c: '#F4B25E', i: true }, // 亮着的刷新按钮上的一个点
            ],
            operaPoints: [
                { x: 1448, y: 774, ox: 206, oy: 74, ad: 500 },
            ]
        }]
    },
    {
        id: 18,
        name: '结界_个人_3次刷新CD等待', // 该功能会在判定处于cd时sleep30秒，且后面的功能不会执行
        data: function (_self) {
            var sceneJudge = {
                data: [{ // 用来判断是不是结界突破的场景，直接用多点找色的话会在此占用太多资源
                    judgePoints: [
                        { x: 264, y: 75, c: '#483727', i: true },
                        { x: 1308, y: 78, c: '#483727', i: true },
                        { x: 766, y: 837, c: '#FCBA30', i: true }, // 3次达摩左边
                        { x: 887, y: 838, c: '#363D57', i: true }, // 3次达摩右边，如果大于3次就刷新的话直接注释这一行，如果只有3次就刷新的话就保留这一行
                        { x: 1564, y: 827, c: '#B0A7A0', i: true }, // 灭着的刷新按钮上的一个点
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
                { x: 52, y: 1039, c: '#633E2B', i: true },
                { x: 65, y: 87, c: '#EDF6FD', i: true },
                { x: 1531, y: 1066, c: '#6D4333', i: true },
                { x: 1740, y: 236, c: '#D8D2C2', i: true },
            ],
            operaPoints: [
                { x: 414, y: 953, ox: 94, oy: 93, ad: 500 },
            ]
        }]
    },
    {
        id: 20,
        name: '结界_寮突_CD等待',
        data: function (_self) {
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
        name: '探索_地图进入最后一章',
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
        name: '探索_最后一章确认界面点击探索',
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
        name: '探索_挑战经验怪',
        data: function (_self) {
            var count = 3;
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
                var t1 = new Date();
                var point0 = images.findMultiColors(_self.memImage, multiColor['探索_挑战BOSS图标'].firstColor, multiColor['探索_挑战BOSS图标'].colors, { region: [40, 187, 1598, 468], threshold: 10 });
                var t2 = new Date();
                console.log('探索_挑战BOSS图标:单次多点找色时间: ' + (t2 - t1));
                if (null != point0) {
                    _self.automator.press(point0.x + random(0, 68), point0.y + random(0, 66), random(10, 100));
                    sleep(1000 + _self.userConfigs.afterClickDelay + random(0, _self.userConfigs.afterClickDelayRandom));
                    return true;
                }
    
                // 找经验怪挑战
                var t1 = new Date();
                var point = images.findMultiColors(_self.memImage, multiColor['探索_经验怪标记'].firstColor, multiColor['探索_经验怪标记'].colors, { region: [200, 360, 1520, 700], threshold: 10 });
                // 如果没有经验怪标记的话就重找
                var cnt1 = 2;
                while (null == point && --cnt1 >= 0) {
                    sleep(200);
                    _self.memImage = captureScreen();
                    point = images.findMultiColors(_self.memImage, multiColor['探索_经验怪标记'].firstColor, multiColor['探索_经验怪标记'].colors, { region: [200, 360, 1520, 700], threshold: 10 });
                }
                var t2 = new Date();
                console.log('探索_经验怪标记:单次多点找色时间: ' + (t2 - t1));
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
                // 屏幕右往坐滑
                _self.automator.swipe(1476 + random(0, 180), 179 + random(0, 626), 200 + random(0, 262), 228 + random(0, 745), random(300, 600));
                sleep(200);
                _self.memImage = captureScreen();
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
        name: '探索_打手换素材',
        data: function (_self) {
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
            var t1 = new Date();
            var point = images.findMultiColors(_self.memImage, multiColor['探索_式神满级标记'].firstColor, multiColor['探索_式神满级标记'].colors, { region: [532, 388, 793, 299], threshold: 15 });
            var t2 = new Date();
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
                _self.automator.swipe(261 + random(0, 148), 752 + random(0, 254), 179 + random(0, 201), 566 + random(0, 88), random(800, 1000));
                sleep(random(500, 600));
                // 第二个素材换到右边
                _self.automator.swipe(456 + random(0, 80), 758 + random(0, 241), 877 + random(0, 160), 566 + random(0, 88), random(1000, 1200));
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
        name: '探索_最后一章确认界面邀请好友', // TODO，邀请最近组队
        data: function (_self) {
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

            _self.memImage = captureScreen();
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
        name: '探索_司机换素材',
        data: function (_self) {
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
                _self.automator.swipe(261 + random(0, 148), 752 + random(0, 254), 475 + random(0, 111), 480 + random(0, 107), random(800, 1000));
                sleep(random(500, 600));
                // 第二个素材换到右边
                _self.automator.swipe(456 + random(0, 80), 758 + random(0, 241), 1383 + random(0, 107), 479 + random(0, 121), random(1000, 1200));
                sleep(random(100, 200));

            };
            return false;
        }
    },
    {
        id: 28,
        name: '大江山之战_修罗战场_挑战',
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
        name: '大江山之战_海国退治_挑战',
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
    }
]