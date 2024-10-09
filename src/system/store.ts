// storages.remove('asttyys_ng');
// storages.remove('assttyys_ng_common');


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

export const storeCommon = storages.create('assttyys_ng_common');

const store = storages.create('asttyys_ng');
export default store;
