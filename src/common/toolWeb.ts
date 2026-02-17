import { IScheme } from "@/interface/IScheme";

export const mergeSchemeList = (savedSchemeList: IScheme[], innerSchemeList: IScheme[]) => {
    innerSchemeList = deepClone(innerSchemeList);
    let maxId = savedSchemeList.reduce((num, t) => (Math.max(num, t.id)), -1);
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
            innerScheme.id = ++maxId;
            toMerge.push(innerScheme);
        }
    }
    return [...savedSchemeList, ...toMerge];
}

export const mergeScheduleList = (savedScheduleList, innerScheduleList) => {
    innerScheduleList = deepClone(innerScheduleList);
    let maxId = savedScheduleList.reduce((num, t) => (Math.max(num, t.id)), -1);
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
            innerSchedule.id = ++maxId;
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

function deepClone<T>(obj: T): T {
	if (!obj && typeof obj !== "object") {
		throw new Error("error arguments deepClone");
	}
	const targetObj = obj.constructor === Array ? [] : {};
	Object.keys(obj).forEach(keys => {
		if (obj[keys] && typeof obj[keys] === "object") {
			targetObj[keys] = deepClone(obj[keys]);
		} else {
			targetObj[keys] = obj[keys];
		}
	});
	return targetObj as T;
}
