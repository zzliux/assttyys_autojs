import store, { storeCommon } from '@/system/store';
import script from '@/system/script';
import { MyFloaty } from './MyFloaty';
import { IScheme } from '@/interface/IScheme';
import { GroupSchemeName } from '@/common/schemeList';

export default {
	show: (myfloaty: MyFloaty, schemeList?: IScheme[]) => {
		const customView = ui.inflate(
			`<androidx.core.widget.NestedScrollView fillViewport="true">
                <list id="groupList">
                    <vertical w="*">
                        <text textColor="#ababab" textSize="14" text="{{this.groupName}}" layout_gravity="center" />
                    </vertical>
                </list>
            </androidx.core.widget.NestedScrollView>`
		);
		const title = '选择方案';
		const schemeDialog = dialogs.build({ title, customView }).show();
		let groupSchemeNames: GroupSchemeName[] = store.get('groupSchemeNames');
		if (!schemeList) {
			schemeList = store.get('schemeList');
		}
		groupSchemeNames = groupSchemeNames.filter(group => !group.hidden);
		groupSchemeNames.forEach(group => {
			group.schemeNames = group.schemeNames.filter(schemeName => {
				return !!schemeList.find(scheme => scheme.schemeName === schemeName && scheme.star);
			});
		});
		groupSchemeNames = groupSchemeNames.filter(group => group.schemeNames?.length);

		customView.groupList.setDataSource(groupSchemeNames);

		customView.groupList.on('item_bind', function (itemView, _itemHolder) {
			const schemeListView = ui.inflate(
				`<list id="groupSchemeList">
                    <horizontal padding="10 10 10 10" bg="?selectableItemBackground" w="*">
                        <text textColor="black" textSize="14" text="{{this}}" layout_gravity="center" />
                    </horizontal>
                </list>`,
				itemView,
			);
			itemView.addView(schemeListView);
		});

		customView.groupList.on('item_data_bind', function (itemView, itemHolder) {
			itemView.groupSchemeList.setDataSource(itemHolder.item.schemeNames);
			itemView.groupSchemeList.on('item_click', function (item, _i, _itemView, _listView) {
				const schemeName = item;
				script.setCurrentScheme(schemeName);
				const storeSettings = storeCommon.get('settings', {});
				if (storeSettings.floaty_scheme_direct_run) {
					// myfloaty.fy.start();
					setTimeout(() => {
						const storeSettings = storeCommon.get('settings', {});
						if (storeSettings.floaty_scheme_openApp) {
							script.launchRelatedApp();
						}
						myfloaty.thisRun();
					}, 1000);
				} else {
					toast('设置方案[' + schemeName + ']');
				}
				schemeDialog.dismiss();
			})
		});
	},
}

/**
 * 点击方案列表按钮的dialog，选择弹窗，点击方案后切换至该方案，若配置切换方案后直接运行则是切换方案并运行
 */
// export default {
// 	show(myfloaty, schemeList?) {
// 		const staredSchemeList = schemeList || store.get('schemeList', defaultSchemeList).filter(item => {
// 			return item.star // && item.id != 99;
// 		});
// 		if (staredSchemeList.length === 0) {
// 			toast('还没有收藏任何方案哦~');
// 			return;
// 		}
// 		threads.start(function () {
// 			dialogs.select('选择方案', staredSchemeList.map(item => {
// 				return item.schemeName
// 			}), i => {
// 				if (i < 0) return; // 取消
// 				store.put('currentScheme', staredSchemeList[i]);
// 				const storeSettings = storeCommon.get('settings', {});
// 				if (storeSettings.floaty_scheme_direct_run) {
// 					// myfloaty.fy.start();
// 					setTimeout(() => {
// 						const storeSettings = storeCommon.get('settings', {});
// 						if (storeSettings.floaty_scheme_openApp) {
// 							script.launchRelatedApp();
// 						}
// 						myfloaty.thisRun();
// 					}, 1000);

// 				} else {
// 					toast('设置方案[' + staredSchemeList[i].schemeName + ']');
// 				}
// 			});
// 		});
// 	}
// }
