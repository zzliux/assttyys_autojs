import store, { storeCommon } from '@/system/store';
import defaultSchemeList from '@/common/schemeList';

/**
 * 点击方案列表按钮的dialog，选择弹窗，点击方案后切换至该方案，若配置切换方案后直接运行则是切换方案并运行
 */
export default {
    show(myfloaty, schemeList?) {
        const staredSchemeList = schemeList || store.get('schemeList', defaultSchemeList).filter(item => {
            return item.star //&& item.id != 99;
        });
        if (staredSchemeList.length === 0) {
            toast('还没有收藏任何方案哦~');
            return;
        }
        threads.start(function () {
            dialogs.select('选择方案', staredSchemeList.map(item => {
                return item.schemeName
            }), i => {
                if (i < 0) return; // 取消
                store.put('currentScheme', staredSchemeList[i]);
                const storeSettings = storeCommon.get('settings', {});
                if (storeSettings.floaty_scheme_direct_run) {
                    // myfloaty.fy.start();
                    setTimeout(()=> {
                        myfloaty.thisRun();
                    }, 1000);
                    
                } else {
                    toast('设置方案[' + staredSchemeList[i].schemeName + ']');
                }
            });
        });
    }
}
