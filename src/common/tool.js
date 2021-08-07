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

export function search(list, prop, str, filterSimilar) {
    let maxSimilarity = 0;
    let maxSimilarityIndex = -1;
    for (let i = 0; i < list.length; i++) {
        let sim = similarity(list[i][prop], str, filterSimilar) || 0;
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

export function questionSearch(str) {
    return search(fmmxQuestionList, 'question', str);
}

export function similarity(s1, s2, filterSimilar) {
    let len1 = s1.length;
    let len2 = s2.length;
    let maxLen = Math.max(len1, len2);
    let thres = parseInt((1 - (filterSimilar || 0)) * maxLen); // 编辑距离超过这个数后直接返回false，加快匹配速度;


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
                let temp = matrix[i - 1][j - 1] + cost

                matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, temp);
                if ((i === j || (i === len1 && i < j) || (j === len2 && i > j)) && matrix[i][j] > thres) {
                    return false;
                }
            }
        }
    }
    return 1 - (matrix[len1][len2] / maxLen); //返回右下角的值
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