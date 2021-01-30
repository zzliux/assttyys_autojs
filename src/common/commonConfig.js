const CommonConfig = [
    {
        desc: '自动停止配置',
        config: [
            {
                name: 'auto_stop_lower_bound',
                desc: '自动停止时间下界(单位min)',
                type: 'integer',
                default: 60,
                value: null,
            },
            {
                name: 'auto_stop_upper_bound',
                desc: '自动停止时间上界(单位min,-1为不自动停止)',
                type: 'integer',
                default: -1,
                value: null,
            }
        ]
    },
    {
        desc: '通用配置',
        config: [
            {
                name: 'tapType',
                desc: '模拟点击方式',
                type: 'list',
                data: ['无障碍', 'RootAutomator', 'Shell', '普通Root'],
                default: '无障碍',
                value: null
            },
            {
                name: 'dirctionReverse',
                desc: '坐标反转',
                type: 'switch',
                default: false,
                value: null,
            },
            {
                name: 'loopDelay',
                desc: '循环延时',
                type: 'integer',
                default: 200,
                value: null,
            },
            {
                name: 'afterClickDelay',
                desc: '点击后延时',
                type: 'integer',
                default: 200,
                value: null,
            },
            {
                name: 'afterClickDelayRandom',
                desc: '点击后延时随机数',
                type: 'integer',
                default: 200,
                value: null,
            },
            {
                name: 'colorSimilar',
                desc: '多点比色相似度(%)',
                type: 'integer',
                default: 93,
                value: null,
            },
            {
                name: 'continuityTimeToStop',
                desc: '连续执行相同功能停止脚本的次数',
                type: 'integer',
                default: 20,
                value: null,
            },
            {
                name: 'multiColorSimilar',
                desc: '多点找色相似度(%)',
                type: 'integer',
                default: 95,
                value: null,
            }
        ]
    }
];

export default CommonConfig;