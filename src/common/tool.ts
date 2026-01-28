import { IScheme } from '@/interface/IScheme';
import CommonConfig from './commonConfig';
import funcList from './funcListIndex';

export function similarity(s1: string, s2: string, filterSimilar?: number) {
	const len1 = s1.length;
	const len2 = s2.length;
	const maxLen = Math.max(len1, len2);
	const thres = Math.floor((1 - (filterSimilar || 0)) * maxLen); // 编辑距离超过这个数后直接返回false，加快匹配速度;


	const matrix = []

	for (let i = 0; i <= len1; i++) {
		// 构造二维数组
		matrix[i] = []
		for (let j = 0; j <= len2; j++) {
			// 初始化
			if (i == 0) {
				matrix[i][j] = j
			} else if (j == 0) {
				matrix[i][j] = i
			} else {
				// 进行最小值分析
				let cost = 0
				if (s1[i - 1] != s2[j - 1]) { // 相同为0，不同置1
					cost = 1
				}
				const temp = matrix[i - 1][j - 1] + cost

				matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, temp);
				if ((i === j || (i === len1 && i < j) || (j === len2 && i > j)) && matrix[i][j] > thres) {
					return false;
				}
			}
		}
	}
	return 1 - (matrix[len1][len2] / maxLen); // 返回右下角的值
}

export function setCurrentScheme(schemeName: string, store) {
	const savedSchemeList: IScheme[] = store.get('schemeList', []);
	for (let i = 0; i < savedSchemeList.length; i++) {
		if (savedSchemeList[i].schemeName === schemeName) {
			// 1. commonConfig没有值的赋默认值
			if (!savedSchemeList[i].commonConfig) {
				savedSchemeList[i].commonConfig = {}
			}
			CommonConfig.forEach(group => {
				group.config?.forEach(item => {
					if (typeof savedSchemeList[i].commonConfig[item.name] === 'undefined') {
						savedSchemeList[i].commonConfig[item.name] = item.default;
					}
				});
			});
			// 2. config没有值的赋默认值
			if (!savedSchemeList[i].config) {
				savedSchemeList[i].config = {};
			}
			funcList.filter(func => savedSchemeList[i].list.includes(func.id)).forEach(func => {
				if (!savedSchemeList[i].config[func.id]) {
					savedSchemeList[i].config[func.id] = {}
				}
				func.config?.forEach(group => {
					group.config?.forEach(item => {
						if (typeof savedSchemeList[i].config[func.id][item.name] === 'undefined') {
							savedSchemeList[i].config[func.id][item.name] = item.default;
						}
					});
				});
			});
			store.put('currentScheme', savedSchemeList[i]);
			console.log(`设置方案：${savedSchemeList[i].schemeName}`);
			return;
		}
	}
}

const getRawType = (val) => {
	return Object.prototype.toString.call(val).slice(8, -1);
};
const isPlainObject = (val) => {
	return getRawType(val) === 'Object';
};

const isPlainObjectOrArray = (val) => {
	return isPlainObject(val) || Array.isArray(val);
};

const inMerge = (object, ...sources) => {
	for (const source of sources) {
		for (const key in source) {
			if (source[key] === undefined && key in object) {
				continue;
			}
			if (isPlainObjectOrArray(source[key])) {
				if (
					isPlainObjectOrArray(object[key]) &&
					getRawType(object[key]) === getRawType(source[key])
				) {
					if (isPlainObject(object[key])) {
						inMerge(object[key], source[key]);
					} else {
						object[key] = object[key].concat(source[key]);
					}
				} else {
					object[key] = source[key];
				}
			} else {
				object[key] = source[key];
			}
		}
	}
	return object;
};

export const merge = (object, ...sources) => {
	const sources2 = [];
	for (let i = 0; i < sources.length; i++) {
		sources2.push(deepClone(sources[i]));
	}
	return inMerge(object, ...sources2);
}

export function deepClone<T>(obj: T): T {
	if (!obj && typeof obj !== 'object') {
		throw new Error('error arguments deepClone');
	}
	const targetObj = obj.constructor === Array ? [] : {};
	Object.keys(obj).forEach(keys => {
		if (obj[keys] && typeof obj[keys] === 'object') {
			targetObj[keys] = deepClone(obj[keys]);
		} else {
			targetObj[keys] = obj[keys];
		}
	});
	return targetObj as T;
}
