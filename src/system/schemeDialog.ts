import store, { storeCommon } from '@/system/Store/store';
import script from '@/system/script';
import { MyFloaty } from './MyFloaty';
import { IScheme } from '@/interface/IScheme';
import { GroupSchemeName } from '@/common/schemeList';
import { getHeightPixels, getWidthPixels } from '@auto.pro/core';


export default {
	show: (myfloaty: MyFloaty, schemeList?: IScheme[]) => {
		ui.post(() => {
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
			const screenWidth = getWidthPixels();
			const screenHeight = getHeightPixels();
			if (screenWidth > screenHeight) {
				schemeDialog.getWindow().setLayout(Math.max(screenWidth * 0.6, Math.min(576, screenWidth)), android.view.WindowManager.LayoutParams.WRAP_CONTENT);
				// schemeDialog.getWindow().setLayout(android.view.WindowManager.LayoutParams.MATCH_PARENT, android.view.WindowManager.LayoutParams.WRAP_CONTENT);
			}

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
				let itemStr = `<list id="groupSchemeList">
						<horizontal w="*">
							<vertical w="0dp" layout_weight="1">
								<text padding="10 5 10 5" textColor="black" textSize="14" id="leftText" text="{{left}}" layout_gravity="center" />
							</vertical>
							<vertical w="0dp" layout_weight="1">
								<text padding="10 5 10 5" textColor="black" textSize="14" id="rightText" text="{{right}}" layout_gravity="center" />
							</vertical>
						</horizontal>
					</list>`;
				if (screenWidth <= screenHeight) {
					itemStr = `<list id="groupSchemeList">
						<horizontal w="*">
							<vertical w="*">
								<text padding="10 5 10 5" textColor="black" textSize="14" id="leftText" text="{{left}}" layout_gravity="center" />
							</vertical>
						</horizontal>
					</list>`;
				}
				const schemeListView = ui.inflate(itemStr, itemView);
				itemView.addView(schemeListView);
			});

			customView.groupList.on('item_data_bind', function (itemView, itemHolder) {

				const data: { left: string, right?: string }[] = [];
				if (screenWidth > screenHeight) {
					for (let i = 0; i < itemHolder.item.schemeNames.length; i+= 2) {
						data.push({
							left: itemHolder.item.schemeNames[i],
							right: i + 1 < itemHolder.item.schemeNames.length ? itemHolder.item.schemeNames[i + 1] : ''
						});
					}
				} else {
					for (let i = 0; i < itemHolder.item.schemeNames.length; i++) {
						data.push({
							left: itemHolder.item.schemeNames[i],
							right: ''
						});
					}
				}
				itemView.groupSchemeList.setDataSource(data);
				itemView.groupSchemeList.on('item_data_bind', (itemView, itemHolder) => {
					const textClick = (schemeName) => {
						if (!schemeName) return;
						script.isPause = false;
						myfloaty.fb.removeItem('Pause');
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
					}
					itemView.leftText.attr('foreground', '?selectableItemBackground');
					itemView.leftText.click(() => {
						textClick(itemHolder.item.left);
					});
					if (screenWidth > screenHeight) {
						itemHolder.item.right && itemView.rightText.attr('foreground', '?selectableItemBackground');
						itemHolder.item.right && itemView.rightText.click(() => {
							textClick(itemHolder.item.right);
						});
					}
				});
				// itemView.groupSchemeList.on('item_click', function (item, _i, _itemView, _listView) {
				// 	const schemeName = item;
				// 	script.setCurrentScheme(schemeName);
				// 	const storeSettings = storeCommon.get('settings', {});
				// 	if (storeSettings.floaty_scheme_direct_run) {
				// 		// myfloaty.fy.start();
				// 		setTimeout(() => {
				// 			const storeSettings = storeCommon.get('settings', {});
				// 			if (storeSettings.floaty_scheme_openApp) {
				// 				script.launchRelatedApp();
				// 			}
				// 			myfloaty.thisRun();
				// 		}, 1000);
				// 	} else {
				// 		toast('设置方案[' + schemeName + ']');
				// 	}
				// 	schemeDialog.dismiss();
				// })
			});
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
