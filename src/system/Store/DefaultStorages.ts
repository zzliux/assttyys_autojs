import { AbstractStorages } from './AbstractStorages';

export default class DefaultStorages extends AbstractStorages {
	name = '默认存储';

	configDefine = [];
	create(name: string): AutoStorage {
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

export class DefaultStore implements AutoStorage {

	bucket: AutoStorage;

	storages: DefaultStorages;

	constructor(bucketName: string, selfStorages: DefaultStorages) {
		this.bucket = storages.create(bucketName);
		this.storages = selfStorages;
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
