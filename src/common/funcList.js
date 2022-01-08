// 自动加载当前目录下所有配置统一导出

const fl = require.context('./funcList', false, /\.js$/);

let funcList = [];

fl.keys().forEach(key => {
    if (key.indexOf('index.js') !== -1) return;
    funcList.push(fl(key).default);
});

export default funcList;
