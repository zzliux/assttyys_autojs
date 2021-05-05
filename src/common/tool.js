import fmmxQuestionList from '@/common/fmmxQuestionList';
import defaultSchemeList from '@/common/schemeList';
import store from '@/system/store';

export const mergeSchemeList = (savedSchemeList, innerSchemeList) => {
    let toMerge = [];
    for (let innerScheme of innerSchemeList) {
        let flag = true;
        innerScheme.inner = true;
        for (let savedScheme of savedSchemeList) {
            if (savedScheme.schemeName === innerScheme.schemeName) {
                flag = false;
                break;
            }
        }
        if (flag) {
            toMerge.push(innerScheme);
        }
    }
    return [...savedSchemeList, ...toMerge];
}

export function search(list, prop, str) {
    let maxSimilarity = 0;
    let maxSimilarityIndex = -1;
    for (let i = 0; i < list.length; i++) {
        let sim = similarity(list[i][prop], str);
        if (sim > maxSimilarity) {
            maxSimilarity = sim;
            maxSimilarityIndex = i;
        }
    }
    return {
        data: list[maxSimilarityIndex],
        similarity: maxSimilarity
    }
}

export function questionSearch(str) {
    return search(fmmxQuestionList, 'question', str);
}

export function similarity(s1, s2) {
    const len1 = s1.length
    const len2 = s2.length

    let matrix = []

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

                matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, temp)
            }
        }
    }
    return 1 - (matrix[len1][len2] / Math.max(len1, len2)); //返回右下角的值
}

export function setCurrentScheme(schemeName) {
    let savedSchemeList = store.get("schemeList", defaultSchemeList);
    for (let i = 0; i < savedSchemeList.length; i++) {
        if (savedSchemeList[i].schemeName === schemeName) {
            store.put('currentScheme', savedSchemeList[i]);
            return;
        }
    }
    toastLog(`修改方案失败：请检查是否存在方案[${schemeName}]`);
}