import store, { storeCommon } from '@/system/store';
import defaultSchemeList from '@/common/schemeList';
// import { mergeSchemeList } from '@/common/tool';
import _ from 'lodash';

export default {
    show(myfloaty, schemeList) {
        let staredSchemeList = schemeList || _.filter(store.get('schemeList', defaultSchemeList), item => {
            return item.star //&& item.id != 99;
        });
        if (staredSchemeList.length === 0) {
            toast('还没有收藏任何方案哦~');
            return;
        }
        threads.start(function () {
            dialogs.select('选择方案', _.map(staredSchemeList, item => {
                return item.schemeName
            }), i => {
                if (i < 0) return; // 取消
                store.put('currentScheme', staredSchemeList[i]);
                let storeSettings = storeCommon.get('settings', {});
                if (storeSettings.floaty_scheme_direct_run) {
                    // myfloaty.fy.start();
                    myfloaty.thisRun();
                } else {
                    toast('设置方案[' + staredSchemeList[i].schemeName + ']');
                }
            });
        });
    }
}
