import { AbstractStorages } from './AbstractStorages';


const WebDavRequest = (method: string, url: string, authStr: string, body?: string) => {
	const options: any = {};
	options.method = method;
	if (body) {
		options.body = body.toString();
	}
	options.headers = {
		Authorization: `Basic ${authStr}`
	}
	// @ts-expect-error d.ts文件问题
	const r = http.request(url, options) as { statusCode: number, headers: Record<string, string>, body: any };
	const retBody = r.body.string() as string;
	const ret = { body: retBody, statusCode: r.statusCode, headers: r.headers };
	return ret;
}

export default class WebDAVStorage extends AbstractStorages {
	name = 'WebDAV存储';

	configDefine = [{
		desc: 'URL',
		name: 'WebDAV_URL',
		type: 'text', // 'switch' | 'integer' | 'text' | 'scheme' | 'list',
		default: 'http://127.0.0.1:1233',
	}, {
		desc: '存储路径',
		name: 'WebDAV_path',
		type: 'text',
		default: '/assttyys_config',
	}, {
		desc: 'WebDAV用户名',
		name: 'WebDAV_username',
		type: 'text',
		default: 'user',
	}, {
		desc: 'WebDAV密码',
		name: 'WebDAV_password',
		type: 'text',
		default: 'password',
	}];

	isAvailable(): boolean {
		const url = this.getStorageConfig('WebDAV_URL');
		// 认证模式没看懂是怎么回事，从别的代码里面看有是对username:password进行base64编码，但是从别的地方看Basic认证有的又是明文的
		const auth = java.lang.String(android.util.Base64.encode(java.lang.String(`${this.getStorageConfig('WebDAV_username')}:${this.getStorageConfig('WebDAV_password')}`).getBytes(), android.util.Base64.NO_WRAP));
		try {
			const res = WebDavRequest('PROPFIND', `${url}`, auth);
			const fileList = parsePropFindBodyXML(res.body);
			console.log(`当前目录的文件：${JSON.stringify(fileList)}`);
			return res.statusCode === 207;
		} catch (e) {
			console.error($debug.getStackTrace(e));
			return false;
		}
	}

	create(name: string): AutoStorage {
		return new WebDAVStore(name, this);
	}

	remove(_name: string): boolean {
		throw new Error('Method not implemented.');
	}
}

export class WebDAVStore implements AutoStorage {

	url: string;
	path: string;
	auth: string;
	name: string;
	constructor(name: string, selfStorage: WebDAVStorage) {
		this.url = selfStorage.getStorageConfig('WebDAV_URL') as string;
		this.path = selfStorage.getStorageConfig('WebDAV_path') as string;
		this.auth = java.lang.String(android.util.Base64.encode(java.lang.String(`${selfStorage.getStorageConfig('WebDAV_username')}:${selfStorage.getStorageConfig('WebDAV_password')}`).getBytes(), android.util.Base64.NO_WRAP));
		this.name = name;
		const res = WebDavRequest('GET', `${this.url}${this.path}/${this.name}.json`, this.auth);
		if (res.statusCode === 404) {
			const res2 = WebDavRequest('PUT', `${this.url}${this.path}/${this.name}.json`, this.auth, '{}');
			if (res2.statusCode === 201) {
				console.log(`${this.path}/${this.name}.json 创建成功`);
			}
		}
	}

	getAll(): any {
		const res = WebDavRequest('GET', `${this.url}${this.path}/${this.name}.json`, this.auth);
		if (res.statusCode === 200) {
			return JSON.parse(res.body || '{}');
		} else if (res.statusCode === 401) {
			throw new Error('WebDAV认证失败');
		}
	}
	get(key: string, defaultValue?: any) {
		return this.getAll()?.[key] ?? defaultValue;
	}
	put(key: string, value: any): void {
		const obj = this.getAll();
		obj[key] = value;
		const res = WebDavRequest('PUT', `${this.url}${this.path}/${this.name}.json`, this.auth, JSON.stringify(obj));
		if (res.statusCode !== 201) {
			throw new Error(`WebDAV存储失败，${res.body}`);
		}
	}
	remove(_key: string): void {
		throw new Error('Method not implemented.');
	}
	contains(_key: string): boolean {
		throw new Error('Method not implemented.');
	}
	clear(): void {
		const res = WebDavRequest('PUT', `${this.url}${this.path}/${this.name}.json`, this.auth, '{}');
		if (res.statusCode !== 201) {
			throw new Error(`WebDAV存储失败，${res.body}`);
		}
	}
}

function parsePropFindBodyXML(xml: string) {
	const dresponseItemStrs = xml.match(/<D:response>.+?<\/D:response>/ig).map(item => item.trim());
	return dresponseItemStrs.map(str => {
		return {
			path: str.match(/<D:href>(.+?)<\/D:href>/i)?.[1]?.trim(),
			name: str.match(/<D:displayname>(.+?)<\/D:displayname>/i)?.[1]?.trim(),
		}
	});
}
