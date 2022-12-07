
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

export const mergeScheduleList = (savedScheduleList, innerScheduleList) => {
    let toMerge = [];
    for (let innerSchedule of innerScheduleList) {
        let flag = true;
        innerSchedule.inner = true;
        for (let savedSchedule of savedScheduleList) {
            if (savedSchedule.name === innerSchedule.name) {
                flag = false;
                break;
            }
        }
        if (flag) {
            toMerge.push(innerSchedule);
        }
    }
    return [...savedScheduleList, ...toMerge];
}