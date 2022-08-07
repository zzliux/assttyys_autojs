// 自动加载funcList目录下所有配置统一导出
const fl = require.context('./funcList', false, /\.js$/);

let funcList = [];

fl.keys().forEach(key => {
    funcList.push(fl(key).default);
});

funcList.sort((a, b) => a.id - b.id);

export default funcList;
