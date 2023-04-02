
export const mergeSchemeList = (savedSchemeList, innerSchemeList) => {
    // TODO toMerge更新id
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
    // TODO toMerge更新id
    let toMerge = [];
    for (let innerSchedule of innerScheduleList) {
        let flag = true;
        innerSchedule.inner = true;
        innerSchedule.nextDate = innerSchedule.nextDate ? new Date(innerSchedule.nextDate) : null;
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
    savedScheduleList.forEach(item => {
        if (item.nextDate) {
            item.nextDate = new Date(item.nextDate);
        }
    })
    return [...savedScheduleList, ...toMerge];
}