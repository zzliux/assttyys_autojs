export const mergeSchemeList = (savedSchemeList, innerSchemeList) => {
    let toMerge = [];
    for (let innerScheme of innerSchemeList) {
        let flag = true;
        innerScheme.inner = true;
        for (let savedScheme of savedSchemeList) {
            if (savedScheme.id == innerScheme.id) {
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