// 自动加载funcList目录下所有配置统一导出
const fl = require.context('./funcList', false, /./);

const funcList = [];

fl.keys().forEach(key => {
    const func = fl(key).default;
    func.checked = false;
    funcList.push(func);
});

export default funcList;
