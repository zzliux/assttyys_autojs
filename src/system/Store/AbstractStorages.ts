import { storeStore } from './store';

type ConfigDefineItem = {
	desc: string,
	name: string,
	type: string, // 'switch' | 'integer' | 'text' | 'scheme' | 'list',
	data?: string[], // type为list时，data为可选项
	default: boolean | string | number
};

type Config = Record<string, boolean | string | number>;

export type Message = {
	type: 'text',
	data: string,
} | {
	type: 'image',
	data: any // android.graphics.Bitmap
}

export abstract class AbstractStorages {

	/**
	 * 存储组件名称/类型
	 */
	abstract name: string;

	/**
	 * 存储配置，如url,token之类的放这里面
	 */
	abstract configDefine: ConfigDefineItem[];

	storageConfig: Config;

	setStorageConfig(config: Config) {
		this.storageConfig = {};
		this.configDefine.forEach(item => {
			this.storageConfig[item.name] = config[item.name] || item.default;
		});
	}

	getStorageConfig(key?: string): Config | boolean | string | number {
		if (key) {
			return this.storageConfig[key];
		}
		return this.storageConfig;
	}

	/**
	 * 配置转换成settings中的配置格式，那边代码一坨翔，先用any[]放着
	 */
	getSettingsConfig(): any[] {
		const storagesConfig = storeStore.get('config', {});
		return this.configDefine?.map(configItem => {
			const item: any = {
				desc: configItem.desc,
				name: configItem.name,
				type: 'assttyys_store_store',
			};
			if (configItem.type === 'switch') {
				item.stype = 'switch';
				item.enabled = storagesConfig[configItem.name] || configItem.default;
			} else if (configItem.type === 'list') {
				item.stype = 'list';
				item.data = configItem.data;
				item.value = storagesConfig[configItem.name] || configItem.default;
			} else if (configItem.type === 'text') {
				item.stype = 'text';
				item.value = storagesConfig[configItem.name] || configItem.default;
			}
			return item;
		});
	}

	abstract isAvailable(): boolean;

	abstract create(text: string): AutoStorage;

	abstract remove(text: string): boolean;
}