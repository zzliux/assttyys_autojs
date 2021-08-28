const globalCommonConfig = [{
    name: 'usePushPlus',
    desc: '脚本停止是否推送',
    type: 'switch',
    default: false,
    value: null,
},
{
    name: 'pushPlusToken',
    desc: '推送加token',
    type: 'text',
    default: '',
    value: null
}];

export default globalCommonConfig;