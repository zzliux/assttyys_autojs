import { AbstractStorages, IStore } from './AbstractStorages';


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

	create(name: string): IStore {
		return new WebDAVStore(name, this);
	}

	remove(_name: string): boolean {
		throw new Error('Method not implemented.');
	}
}

export class WebDAVStore implements IStore {

	url: string;
	initPath: string;
	path: string;
	auth: string;
	name: string;
	constructor(name: string, selfStorage: WebDAVStorage) {
		this.url = selfStorage.getStorageConfig('WebDAV_URL') as string;
		this.path = selfStorage.getStorageConfig('WebDAV_path') as string;
		this.auth = java.lang.String(android.util.Base64.encode(java.lang.String(`${selfStorage.getStorageConfig('WebDAV_username')}:${selfStorage.getStorageConfig('WebDAV_password')}`).getBytes(), android.util.Base64.NO_WRAP));
		this.name = name;

		// 从URL中提取path
		this.initPath = extractPathFromUrl(this.url);
		this.url = extractBaseFromUrl(this.url);

		console.log(this);

		const fullURL = this.url + `/${this.initPath}/${this.path}/${this.name}.json`.replace(/\/+/g, '/');
		const res = WebDavRequest('GET', fullURL, this.auth);
		if (res.statusCode === 404 || res.statusCode === 409) {
			// TODO 坚果云需要一层一层的创建目录，alist可以直接一步创建到目标文件
			// 没有文件的话就一层一层的创建进去
			this.ensureDir(`/${this.initPath}/${this.path}/${this.name}.json`.replace(/\/+/g, '/'));

			const res2 = WebDavRequest('PUT', fullURL, this.auth, '{}');
			if (res2.statusCode === 201) {
				console.log(`${this.path}/${this.name}.json 创建成功`);
			} else {
				console.error('WebDAV文件创建失败(constructor, 1)');
				console.error(`status code: ${res.statusCode}`)
				console.error(`body: ${res.body}`);
				throw new Error('WebDAV文件创建失败');
			}
		} else if (res.statusCode !== 200) {
			console.error('WebDAV文件获取失败(constructor, 2)');
			console.error(`status code: ${res.statusCode}`)
			console.error(`body: ${res.body}`);
			throw new Error('WebDAV文件获取失败');
		}
	}

	// 确保path所在的目录存在，没有就创建到这一层
	ensureDir(path: string) {
		const res = WebDavRequest('PROPFIND', this.url + (`/${this.initPath}`.replace(/\/+/g, '/')), this.auth);
		const fileList = parsePropFindBodyXML(res.body);
		const toComparePath = path.replace(/\/+/g, '/');
		let nearestPath = '';
		fileList.forEach(item => {
			if (toComparePath.startsWith(item.path)) {
				if (item.path.length > nearestPath.length) {
					nearestPath = item.path
				}
			}
		});
		if (nearestPath !== toComparePath) {
			// 创建中间目录
			const dirs = toComparePath.substring(nearestPath.length).split('/').filter(item => item !== '');
			for (let i = 0; i < dirs.length - 1; i++) {
				if (dirs[i]) {
					const newPath = `${nearestPath}/${dirs.slice(0, i + 1).join('/')}`;
					const res = WebDavRequest('MKCOL', this.url + `/${newPath}`.replace(/\/+/g, '/'), this.auth);
					if (res.statusCode === 201) {
						console.log(`创建目录：${newPath}`);
					} else {
						console.error(`创建目录失败：${newPath}`);
						console.error(`status code: ${res.statusCode}`);
						console.error(`body: ${res.body}`);
						throw new Error(`创建目录失败：${newPath}`);
					}
				}
			}
		}
	}

	getAll(): any {
		const fullURL = this.url + (`${this.initPath}${this.path}/${this.name}.json`).replace(/\/+/g, '/');
		const res = WebDavRequest('GET', fullURL, this.auth);
		if (res.statusCode === 200) {
			try {
				return JSON.parse(res.body || '{}');
			} catch (e) {
				console.error($debug.getStackTrace(e));
				throw new Error('WebDAV数据解析失败：' + res.body);
			}
		} else if (res.statusCode === 401) {
			throw new Error('WebDAV认证失败');
		} else if (res.statusCode === 404) {
			return {}; // 没有这个文件，就返回一个空对象就行了
		} else {
			console.error('WebDAV获取数据失败(getAll)');
			console.error(`request url: ${fullURL}`)
			console.error(`status code: ${res.statusCode}`)
			console.error(`body: ${res.body}`);
			throw new Error(`WebDAV获取数据失败，${res.body}`);
		}
	}
	get(key: string, defaultValue?: any) {
		return this.getAll()?.[key] ?? defaultValue;
	}
	put(key: string, value: any): void {
		const obj = this.getAll();
		obj[key] = value;
		const fullURL = this.url + (`${this.initPath}${this.path}/${this.name}.json`).replace(/\/+/g, '/');
		const res = WebDavRequest('PUT', fullURL, this.auth, JSON.stringify(obj));
		if (res.statusCode !== 201 && res.statusCode !== 204) {
			console.error('WebDAV存储失败(put)');
			console.error(`request url: ${fullURL}`)
			console.error(`status code: ${res.statusCode}`)
			console.error(`body: ${res.body}`);
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
		const fullURL = this.url + (`${this.initPath}${this.path}/${this.name}.json`).replace(/\/+/g, '/');
		const res = WebDavRequest('PUT', fullURL, this.auth, '{}');
		if (res.statusCode !== 201 && res.statusCode !== 204) {
			console.error('WebDAV存储失败(clear)');
			console.error(`request url: ${fullURL}`)
			console.error(`status code: ${res.statusCode}`)
			console.error(`body: ${res.body}`);
			throw new Error(`WebDAV存储失败，${res.body}`);
		}
	}
}

// TODO 使用正经xml解析，正则无法处理包含CDATA的情况以及CDATA中包含当前结束符的情况
function parsePropFindBodyXML(xml: string) {
	const dresponseItemStrs = xml.match(/<D:response>.+?<\/D:response>/ig).map(item => item.trim());
	return dresponseItemStrs.map(str => {
		return {
			path: decodeURIComponent(str.match(/<D:href>(.+?)<\/D:href>/i)?.[1]?.trim()),
			name: decodeURIComponent(str.match(/<D:displayname>(.+?)<\/D:displayname>/i)?.[1]?.trim()),
		}
	});
}

function extractPathFromUrl(url: string): string {
	const startIndex = url.indexOf('//') + 2;
	const pathStart = url.indexOf('/', startIndex);
	if (pathStart === -1) {
		return '';
	}
	const queryIndex = url.indexOf('?', pathStart);
	const hashIndex = url.indexOf('#', pathStart);
	const endIndex = Math.min(
		queryIndex > -1 ? queryIndex : Infinity,
		hashIndex > -1 ? hashIndex : Infinity
	);
	return url.substring(pathStart, endIndex);
}

function extractBaseFromUrl(url: string): string {
	const startIndex = url.indexOf('//') + 2;
	const pathStart = url.indexOf('/', startIndex);
	if (pathStart === -1) {
		return url;
	}
	return url.substring(0, pathStart);
}