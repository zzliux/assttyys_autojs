import store from '../system/store';
import { SchemeConfig } from './IScheme';
import script from '@/system/script';
import { deepClone } from '@/common/tool';

class SchemeConfigStore {
	private static instance: SchemeConfigStore;
	private schemeConfigs: Record<string, SchemeConfig>;

	private constructor() {
		this.schemeConfigs = {};
	}

	public static getInstance(): SchemeConfigStore {
		if (!SchemeConfigStore.instance) {
			SchemeConfigStore.instance = new SchemeConfigStore();
		}
		return SchemeConfigStore.instance;
	}

	flushSchemeConfig(schemeName: string): void {
		const schemeList = store.get('schemeList');
		for (let i = 0; i < schemeList.length; i++) {
			if (schemeList[i].schemeName === schemeName) {
				const schemeConfig = schemeList[i].config || {};
				this.schemeConfigs[schemeName] = schemeConfig;
				break;
			}
		}
	}

	getSchemeConfig(schemeName: string): SchemeConfig {
		const schemeConfig = this.schemeConfigs[schemeName];
		if (!schemeConfig) {
			this.flushSchemeConfig(schemeName);
		}
		return schemeConfig;
	}

	setSchemeConfig(schemeName: string, schemeConfig: SchemeConfig): void {
		this.schemeConfigs[schemeName] = schemeConfig;
		const schemeList = store.get('schemeList');
		for (let i = 0; i < schemeList.length; i++) {
			if (schemeList[i].schemeName === schemeName) {
				schemeList[i].config = schemeConfig;
				break;
			}
		}
		store.put('schemeList', schemeList);
		// 回头更新script里面缓存的scheme.config
		if (script.scheme?.schemeName === schemeName) {
			script.scheme.config = deepClone(this.schemeConfigs[schemeName]);
		}
	}
}

export class SchemeConfigReader {
	schemeName: string;

	constructor(schemeName: string) {
		this.schemeName = schemeName;
		SchemeConfigStore.getInstance().flushSchemeConfig(schemeName);
	}

	get = (id: string | number, key: string): (boolean | string | number) => {
		const schemeConfig = SchemeConfigStore.getInstance().getSchemeConfig(this.schemeName);
		return schemeConfig[id][key];
	};
}

export class SchemeConfigOperator extends SchemeConfigReader {
	set = (id: string | number, key: string, value: (boolean | string | number)): void => {
		const schemeConfig = SchemeConfigStore.getInstance().getSchemeConfig(this.schemeName);
		if (!schemeConfig[id]) {
			schemeConfig[id] = {};
		}
		schemeConfig[id][key] = value;
		SchemeConfigStore.getInstance().setSchemeConfig(this.schemeName, schemeConfig);
	};
}