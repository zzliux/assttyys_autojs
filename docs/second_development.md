# 二次开发
## 基础知识
- 多点比色
    - 锚点比色
- 多点找色

## funcList.js
本脚本框架由功能组成方案，功能配置在`funcList.js`中，每个功能为该配置中的一个对象，该对象有两种模式，一个为纯多点比色模式，一个为自定义逻辑模式。其中纯多点比色模式代码以`退出结算`举例：
```js
{
    id: 2, // 功能ID，数字，不允许重复
    name: '退出结算', // 功能名
    operator: [{ // 已打开的达摩, 优先级最高
        // desc为锚点比色的描述，具体见gitee.com/yiszza/ScriptLib 或 gitee.com/yiszza/ScriptGraphicHelper中锚点比色模式
        desc: [1280,720, // 取色时的屏幕分辨率
            [   // center/left/right - 该点所在控件的对齐方式， 482, 611表示坐标x, y， 0x3c82ca表示该坐标的颜色，下同
                [center,482,611,0x3c82ca],
                [center,487,620,0x3b84c6],
                [center,588,619,0x300204],
                [center,712,621,0x340204]
            ]
        ],
        // oper为操作点数组，每个元素为操作点(点击操作)
        oper: [
            // 该区域对齐方式为左对齐，在1280*720分辨率下取得点，69, 171为执行点击操作区域的左上角坐标
            // 170, 452为执行点击操作区域的右下角坐标，构成矩形，点击操作在该矩形内生成随机点进行点击
            // 1000表示点击后延时1000ms后再做后面的操作，若元素为多个则表示进行连续点击操作
            [left, 1280, 720, 69, 171, 170, 452, 1000]
        ],
    }, 
    ...
    ]
}
```
第二种模式为自定义逻辑模式，以准备功能举例：
```js
{
	id: 1,
	name: '准备',
	desc: '在准备界面执行准备或退出操作，可配置是否启用绿标', // 功能的描述，在界面上以灰色小字展示
    // 自定义逻辑可以增加自己的配置，在界面上中若功能后有“*”则表示该功能有配置参数可进行配置
	config: [{
        // 配置组模式
		desc: '退出',
		config: [{
            // 配置的id，用于逻辑中获取该参数
			name: 'exitBeforeReady',
            // 配置描述，界面上用于展示该配置的作用
			desc: '准备前是否退出,常用于个人突破的降级',
            // 配置类型 (list|integer|switch|scheme)，其它类型的参考funcList.js中其他的配置
			type: 'switch',
            // 该配置的默认值
			default: false,
		}],
	}, {
		desc: '绿标',
		config: [{
			name: 'greenFlag',
			desc: '是否启用绿标（需要将绿标的式神改名为“A”，若无法标记可尝试调整式神站位）',
			type: 'switch',
			default: false,
		}]
	}],
    // 自定义模式的operator并不会自动执行比色和点击操作
    // 主要用于多分辨率适配的分辨率转换的作用，便于在后面的自定义逻辑中获取相关配置
	operator: [{
		desc: [1280, 720,
			[[left, 34, 41, 0xd7c5a2],
			[left, 109, 37, 0xd7c5a2],
			[left, 183, 39, 0xd7c5a2],
			[right, 1114, 660, 0xefd6a5],
			[right, 1220, 659, 0xedcc99],
			[right, 1218, 529, 0xe0c8a9]]
		],
		// 0-方向, 1-左上角x, 2-左上角y, 3-右下角x, 4-右下角y, 5-点击后延迟
		oper: [
			[right, 1280, 720, 1119, 504, 1227, 592, 2000], // 准备区域
			[left, 1280, 720, 22,19, 52,47, 500], // 左上角返回区域
			[left, 1280, 720, 683,401, 795,442, 500], // 确认区域
		]
	}, {
		// 开始战斗后的场景
		desc: [1280, 720,
			[[left,34,22,0xd7c5a2],
			[left,62,648,0x796556],
			[right,1277,508,0x422e1c],
			[right,1260,567,0x4d4471],
			[left,4,715,0x334433]]
		],
		oper: [
			[left, 1280, 720, 0,0, 0, 160, -1], // A的下方位置
			[left, 1280, 720, 0,0, 70, 90, -1], // 下方位置的矩形
			[left, 1280, 720, 0,0, 1279, 719, -1] // 屏幕大小
		]
	}],
    /**
     * @param thisScript script上下文对象，可从里面使用oper，findMultiColor等重要函数以及相关配置
     * @param thisOperator 上方的operator数组，经过坐标转换后的结果，以适配当前运行分辨率
     */
	operatorFunc(thisScript, thisOperator) {
        // 以下为自定义逻辑代码，可自行实现具体逻辑
        // 但返回结果为true时表示该功能执行成功，功能循环从头开始
        // 如果为false表示功能执行失败，功能循环继续


        // 获取当前配置
		let thisconf = thisScript.scheme.config['1'];
		if (thisconf.exitBeforeReady) {
            /**
             * oper函数主要处理多点比色成功后执行点击操作，或用于场景判断
             */
			return thisScript.oper({
				id: 1,
				name: '准备界面_退出',
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[1], thisOperator[0].oper[2]]
				}]
			})
		} else {
			if (thisScript.oper({
				id: 1,
				name: '准备',
				operator: [{
					desc: thisOperator[0].desc,
					oper: [thisOperator[0].oper[0]]
				}]
			})) {
				if (thisconf.greenFlag) {
					// 开启绿标
					if (thisScript.compareColorLoop(thisOperator[1].desc, 16000)) {
						let p = thisScript.findMultiColorLoop('绿标_标识_A', 5000);
						if (p) {
							const lx = p.x - thisOperator[1].oper[1][2] / 2;
							const ly = p.y + thisOperator[1].oper[0][3] - thisOperator[1].oper[1][3] / 2;
							const rx = p.x + thisOperator[1].oper[1][2] / 2;
							const ry = p.y + thisOperator[1].oper[0][3] + thisOperator[1].oper[1][3] / 2;
							const toClick = [
								lx > 0 ? lx : 0,
								ly > 0 ? ly : 0,
								rx < thisOperator[1].oper[2][2] ? rx : thisOperator[1].oper[2][2],
								ry < thisOperator[1].oper[2][3] ? ry : thisOperator[1].oper[2][3],
								4000
							];
							thisScript.regionClick([toClick]);
							return true;
						} else {
							toastLog('未识别式神别名“A”');
							return true;
						}
					} else {
						toastLog('准备15秒后未检测到战斗场景');
						return true;
					}
				} else {
					return true;
				}
			}
		}
	}
}
```