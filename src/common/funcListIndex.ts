// 自动加载funcList目录下所有配置统一导出
const fl = require.context('./funcList', false, /\.[jt]s$/);

const funcList = [];

fl.keys().forEach(key => {
	const keys = Object.keys(fl(key));
	if (keys.includes('default')) {
		funcList.push(fl(key).default);
	} else {
		// 如果没有导出默认模块，则手工查找类然后实例化
		for (let i = 0; i < keys.length; i++) {
			if (keys[i].match(/Func\d+/)) {
				const cn = fl(key)[keys[i]];
				funcList.push(new cn);
				break;
			}
		}
	}
});
funcList.sort((a, b) => a.id - b.id);

export default funcList;
