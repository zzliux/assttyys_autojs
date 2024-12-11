import { AbstractStorages, IStore } from './AbstractStorages';

export default class DefaultStorages extends AbstractStorages {
	name = '默认存储';

	configDefine = [];
	create(name: string): IStore {
		console.log(`创建存储桶: ${name}`)
		return new DefaultStore(name, this);
	}
	remove(name: string): boolean {
		return storages.remove(name);
	}

	isAvailable(): boolean {
		return true;
	}
}

export class DefaultStore implements IStore {

	bucketName: string;

	bucket: AutoStorage;

	storages: DefaultStorages;

	constructor(bucketName: string, selfStorages: DefaultStorages) {
		this.bucketName = bucketName;
		this.bucket = storages.create(bucketName);
		this.storages = selfStorages;
	}

	getAll(): any {
		const NAME_PREFIX = 'autojs.localstorage.';
		const map = context.getSharedPreferences(NAME_PREFIX + this.bucketName, 0).getAll();
		const iter = map.entrySet().iterator();
		const obj = {};
		while (iter.hasNext()) {
			const entry = iter.next();
			obj[entry.key] = JSON.parse(entry.value);
		}
		return obj;
	}

	get(key: string, defaultValue?: any) {
		return this.bucket.get(key, defaultValue);
	}
	put(key: string, value: any): void {
		this.bucket.put(key, value);
	}
	remove(key: string): void {
		this.bucket.remove(key);
	}
	contains(key: string): boolean {
		return this.bucket.contains(key);
	}
	clear(): void {
		this.bucket.clear();
	}
}
