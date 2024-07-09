// 自动加载funcList目录下所有配置统一导出
const module = require.context('.', false, /\.[jt]s$/);

const pushClientList = [];

if (!pushClientList.length) {
	module.keys().forEach(key => {
		const keys = Object.keys(module(key));
		if (keys.includes('default')) {
			if (module(key)?.default?.name) { // 集成的AbstractPushClient实现了name就加到列表里来
				const cls = module(key).default
				pushClientList.push(new cls);
			}
		}
	});
}

export default pushClientList;
