// storages.remove('asttyys_ng');
// storages.remove('assttyys_ng_common');

import { myToast } from '@/common/toolAuto';
import { AbstractStorages, IStore } from './AbstractStorages';


// class LocalStorage {
// 	private readonly name: string;
// 	private readonly mSharedPreferences: any;

// 	constructor(name: string) {
// 		this.name = 'autojs.localstorage.' + name;
// 		this.mSharedPreferences = context.getSharedPreferences(name, context.MODE_PRIVATE);
// 	}

// 	put(key: string, value: any): this {
// 		this.mSharedPreferences.edit()
// 			.putString(key, JSON.stringify(value))
// 			.commit(); // 原版是apply，修改为commit，apply为异步，避免数据不一致的情况手动修改
// 		return this;
// 	}

// 	get(key: string, defaultValue?: any) {
// 		const value = this.mSharedPreferences.getString(key, null);
// 		if (!value) {
// 			return defaultValue;
// 		}
// 		return JSON.parse(value);
// 	}
// }

// export const storeCommon = new LocalStorage('assttyys_ng_common');

// const store = new LocalStorage('asttyys_ng');
// export default store;


// 这个用于储存store的配置
export const storeStore = storages.create('store');

// 自动加载当前目录下所有类统一导出
const module = require.context('.', false, /\.[jt]s$/);

const StoragesList = [];

if (!StoragesList.length) {
	module.keys().forEach(key => {
		const keys = Object.keys(module(key));
		if (keys.includes('default')) {
			if (module(key)?.default?.name) {
				const cls = module(key).default
				StoragesList.push(new cls);
			}
		}
	});
}


let selfStorages: AbstractStorages;
let selfStoreCommon: IStore;
let selfStore: IStore;

export const testStorage = (name: string) => {
	for (const item of StoragesList) {
		if (item.name === name) {
			const configSave = storeStore.get('config', {});
			item.setStorageConfig(configSave);
			if (item.isAvailable()) {
				return true;
			} else {
				return false;
			}
		}
	}
	return false;
}

export const setStorages = (name: string) => {
	for (const item of StoragesList) {
		if (item.name === name) {
			selfStorages = item;
			const configSave = storeStore.get('config', {});
			const config = {};
			selfStorages.configDefine.forEach(item => {
				config[item.name] = configSave?.[item.name] || item.default;
			})
			selfStorages.setStorageConfig(config)
			selfStoreCommon = selfStorages.create('assttyys_ng_common');
			selfStore = selfStorages.create('asttyys_ng');
			console.log(`设置存储模式：${name}`);
			return;
		}
	}
};

const storeName = storeStore.get('storage_name', '默认存储');
console.log(`当前保存储存：${storeName}`);
if (testStorage(storeName)) {
	setStorages(storeName);
} else {
	myToast('存储模式验证失败，切换为默认存储，请在设置界面修改存储模式参数并验证成功后自动切换')
	setStorages('默认存储');
}

/**
 * @param name 未传时返回当前使用存储，传入时获取指定存储
 * @returns
 */
export const getStorages = (name?: string) => {
	if (!name) return selfStorages;
	for (const item of StoragesList) {
		if (item.name === name) {
			return item;
		}
	}
};
export const getStoragesList = () => {
	return StoragesList;
};


// 接管存储
export const storeCommon = {
	put(key: string, value: any): void {
		selfStoreCommon.put(key, value);
	},

	get(key: string, defaultValue?: any) {
		return selfStoreCommon.get(key, defaultValue);
	},

	getAll() {
		return selfStoreCommon.getAll();
	}
};

const store = {
	put(key: string, value: any): void {
		selfStore.put(key, value);
	},

	get(key: string, defaultValue?: any) {
		return selfStore.get(key, defaultValue);
	},

	getAll() {
		return selfStore.getAll();
	}
}
export default store;
