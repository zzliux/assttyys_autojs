import { webview } from "@/system";
import script from '@/system/script';
import store from '@/system/store';
import ScheduleDefaultList from '@/common/scheduleList';

export default function webviewSchedule() {

    // 返回已保存的方案列表，如果未保存过，返回common中的scheduleList
    webview.on("getScheduleList").subscribe(([param, done]) => {
        let savedScheduleList = store.get("scheduleList", ScheduleDefaultList);

        if (Array.isArray(savedScheduleList)) {
            savedScheduleList.forEach(item => {
                item.job = script.getScheduleJobInstance(item.id);
                item.checked = item.job ? item.checked : false;
            });
        }

        done(savedScheduleList);
    });

    // 保存方案列表
    webview.on("saveScheduleList").subscribe(([scheduleList, done]) => {
        store.put("scheduleList", scheduleList);
        
        if (Array.isArray(scheduleList)) {
            scheduleList.forEach(item => {
                item.job && script.setScheduleJobInstance(item.id, item.job);
            });
        }

        console.log('scheduleList已保存');
        done("success");
    });
}


