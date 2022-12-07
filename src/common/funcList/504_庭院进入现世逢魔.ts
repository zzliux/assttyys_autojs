const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export default {
    id: 504,
    name: '庭院进入现世逢魔界面',
    desc: '从庭院进入现世逢魔界面',
    operator: [
        {
            desc:   // 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
                [1280, 720,
                    [[right, 1226, 47, 0xcda47a],
                    [right, 1157, 45, 0xb39671],
                    [center, 389, 65, 0xfbc573],
                    [right, 1207, 637, 0xdfd1cb]]
                ],
                oper: [
                    [left, 1280, 720, 0, 0, 20, 20, 1000]
                ]
        },
        {
            desc:   // 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
                [1280, 720,
                    [[right, 1226, 47, 0xcda47a],
                    [right, 1157, 45, 0xb29670],
                    [center, 389, 65, 0xfbc573],
                    [right, 1228, 646, 0xd6c6c3]]
                ]
        }
    ],
    operatorFunc(thisScript, thisOperator) {
        let thisConf = thisScript.scheme.config['504'];

        if (thisScript.oper({
            name: '庭院判断',
            operator: [{
                desc: thisOperator[0].desc
            }, {
                desc: thisOperator[1].desc
            }]
        })) {
            let point = thisScript.findMultiColor('庭院_町中竖牌');
			if (point) {
				let oper = [
					[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]
				];
				thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
                sleep(2000);
				return true;
			}
        }

        let point = thisScript.findMultiColor('町中_逢魔之时灯笼');
        if (point) {
            let oper = [
                [point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]
            ];
            thisScript.helperBridge.regionClick(oper, thisScript.scheme.commonConfig.afterClickDelayRandom);
            sleep(2000);

            return false;
        }

        return false;
    }
}