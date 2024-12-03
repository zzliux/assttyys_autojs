import { storeCommon } from '@/system/Store/store';
import { AbstractPushClient } from './AbstractPushClient';

// 自动加载当前目录下所有类统一导出
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


let client = null;
export const getPushClient = (): AbstractPushClient => {
	const storeSettings = storeCommon.get('settings', {});
	if (!client || client.name !== storeSettings.push_type) {
		for (const item of pushClientList) {
			if (item.name === storeSettings.push_type) {
				client = item;
				break;
			}
		}
	}
	return client;
}
