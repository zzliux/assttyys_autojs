import store from '../system/store';
import { SchemeConfig } from './IScheme';

export class SchemeConfigReader {
	schemeName: string;
	schemeConfig: SchemeConfig;

	constructor(schemeName: string) {
		this.schemeName = schemeName;
		const schemeList = store.get('schemeList');
		for (let i = 0; i < schemeList.length; i++) {
			if (schemeList[i].schemeName === schemeName) {
				this.schemeConfig = schemeList[i].config || {};
				break;
			}
		}
		if (!this.schemeConfig) {
			this.schemeConfig = {};
		}
	}

	get = (id: string | number, key: string): (boolean | string | number) => {
		return this.schemeConfig[id][key];
	};
}

export class SchemeConfigOperator extends SchemeConfigReader {

	set = (id: string | number, key: string, value: (boolean | string | number)): void => {
		// 更新内存配置
		if (!this.schemeConfig[id]) {
			this.schemeConfig[id] = {};
		}
		this.schemeConfig[id][key] = value;

		// 回写配置
		const schemeList = store.get('schemeList');
		for (let i = 0; i < schemeList.length; i++) {
			if (schemeList[i].schemeName === this.schemeName) {
				schemeList[i].config = this.schemeConfig;
				break;
			}
		}
		store.put('schemeList', schemeList);
	};
}


