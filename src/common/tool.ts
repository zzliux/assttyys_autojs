import fmmxQuestionList from '@/common/fmmxQuestionList';

export function search(list: Record<string, any>[], prop: string, str: string, filterSimilar?: number) {
	let maxSimilarity = 0;
	let maxSimilarityIndex = -1;
	for (let i = 0; i < list.length; i++) {
		const sim = similarity(list[i][prop], str, filterSimilar) || 0;
		if (sim > maxSimilarity) {
			maxSimilarity = sim;
			maxSimilarityIndex = i;
		}
	}
	if (-1 === maxSimilarityIndex) {
		return null;
	}
	return {
		data: list[maxSimilarityIndex],
		similarity: maxSimilarity
	}
}

export function questionSearch(str: string) {
	return search(fmmxQuestionList, 'question', str, .5);
}

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
	const savedSchemeList = store.get('schemeList', []);
	for (let i = 0; i < savedSchemeList.length; i++) {
		if (savedSchemeList[i].schemeName === schemeName) {
			store.put('currentScheme', savedSchemeList[i]);
			return;
		}
	}
	toastLog(`修改方案失败：请检查是否存在方案[${schemeName}]`);
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

// 合并对象，返回一个新的对象
const inMerge = (object, ...sources) => {
	// 遍历sources中的每一个source
	for (const source of sources) {
		// 遍历source中的每一个key
		for (const key in source) {
			// 如果source[key]是undefined，且key在object中，则跳过
			if (source[key] === undefined && key in object) {
				continue;
			}
			// 如果source[key]是普通对象或数组，则进行合并
			if (isPlainObjectOrArray(source[key])) {
				// 如果object[key]是普通对象或数组，且类型相同，则进行合并
				if (
					isPlainObjectOrArray(object[key]) &&
					getRawType(object[key]) === getRawType(source[key])
				) {
					// 如果object[key]是普通对象，则进行合并
					if (isPlainObject(object[key])) {
						inMerge(object[key], source[key]);
					// 否则，将source[key]的值赋值给object[key]
					} else {
						object[key] = object[key].concat(source[key]);
					}
				// 否则，将source[key]的值赋值给object[key]
				} else {
					object[key] = source[key];
				}
			// 否则，将source[key]的值赋值给object[key]
			} else {
				object[key] = source[key];
			}
		}
	}
	// 返回新的对象
	return object;
};
// 导出一个名为merge的函数，该函数接受两个参数：object和sources，sources是一个数组
export const merge = (object, ...sources) => {
	// 创建一个sources2数组，用于存放sources数组中的每一项的深拷贝
	const sources2 = [];
	// 遍历sources数组，将每一项的深拷贝放入sources2数组中
	for (let i = 0; i < sources.length; i++) {
		sources2.push(deepClone(sources[i]));
	}
	// 调用inMerge函数，将object和sources2数组中的每一项传入，并返回结果
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
