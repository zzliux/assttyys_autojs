import { storeCommon } from '@/system/Store/store';

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

export abstract class AbstractPushClient {

	/**
	 * 推送组件名称/类型
	 */
	abstract name: string;

	/**
	 * 推送配置，如url,token之类的放这里面
	 */
	abstract configDefine?: ConfigDefineItem[];

	/**
	 * 推送消息
	 * @param data 推送数据
	 */
	abstract push(data: Message[], config: Config): any;

	/**
	 * 配置转换成settings中的配置格式，那边代码一坨翔，先用any[]放着
	 */
	getSettingsConfig(): any[] {
		const storeSettings = storeCommon.get('settings', {});
		return this.configDefine?.map(configItem => {
			const item: any = {
				desc: configItem.desc,
				name: configItem.name,
				type: 'assttyys_setting',
			};
			if (configItem.type === 'switch') {
				item.stype = 'switch';
				item.enabled = storeSettings[configItem.name] || configItem.default;
			} else if (configItem.type === 'list') {
				item.stype = 'list';
				item.data = configItem.data;
				item.value = storeSettings[configItem.name] || configItem.default;
			} else if (configItem.type === 'text') {
				item.stype = 'text';
				item.value = storeSettings[configItem.name] || configItem.default;
			}
			return item;
		});
	}

	getKVConfig(): Record<string, string | number | boolean> {
		const storeSettings = storeCommon.get('settings', {});
		const ret = {};
		let needSave = false;
		this.configDefine?.forEach(configItem => {
			if (typeof storeSettings[configItem.name] === 'undefined') {
				storeSettings[configItem.name] = configItem.default;
				needSave = true;
			}
			ret[configItem.name] = storeSettings[configItem.name];
		});
		if (needSave) {
			storeCommon.put('settings', storeSettings);
		}
		return ret;
	}
}