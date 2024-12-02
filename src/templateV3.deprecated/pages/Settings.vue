<template>
  <div>
    <div class="navbar_box">
      <van-nav-bar
        title="设置 | ASSTTYYS NG"
        left-arrow
        @click-left="$router.back()"
        :style="'padding-top: ' + (statusBarHeight || 0) + 'px'"
      >
        <!-- <van-nav-bar title="ASSTTYYS NG" style="height: 66px;"> -->
        <!-- <template #right>
          <van-icon
            class-prefix="iconfont"
            name="fabusekuai"
            size="18"
            color="#1989fa"
          />
        </template> -->
      </van-nav-bar>
    </div>

    <div
      class="rv_inner"
      :style="'padding-top: ' + (46 + (statusBarHeight || 0)) + 'px; margin-bottom: 40px'"
    >
      <van-cell-group
        class="itemBox"
        title="设置"
        style="background: transparent"
      >
        <div
          v-for="(item, id) of settings"
          :key="id"
          class="item"
        >
          <div class="item-title">
            {{item.desc}}
          </div>
          <div v-if="(item.stype || 'switch') === 'switch'" class="item-value">
            <van-switch
              v-model="item.enabled"
              :loading="!!item.loading"
              @change="toggleSwitchEvent($event, item)"
              class="itemSwitch"
              size="18"
            />
          </div>
          <div v-else-if="item.stype === 'text'" class="item-value">
            <div class="van-field__body">
              <input
                type="text"
                v-model="item.value"
                class="van-field__control"
                @change="inputChange(item)"
                @enter="enterEvent(item)"
                @unfocus="enterEvent(item)"
              />
            </div>
          </div>
          <div v-else-if="item.stype === 'list'" class="item-value">
            <div style="right: 0px">
              <div
                @click="showItemConfigList($event, item)"
              >
              {{item.value}}
              </div>
            </div>
          </div>
        </div>
      </van-cell-group>
      <br />
      <van-cell-group
        class="itemBox"
        title=""
        style="background: transparent"
      >
      
        <div class="item" style="position: relative;" @click="$router.push('/about')">
          <div class="item-title">
            关于项目与作者
          </div>
          <van-icon name="arrow" style="position: absolute; right: 15px; top: 15px" />
        </div>
      </van-cell-group>
      <br />
      <van-cell-group
        class="itemBox"
        title=""
        style="background: transparent"
      >
        <div class="item" @click="setDefaultLaunchApp">
          <div class="item-title">
            关联启动应用
          </div>
          <van-loading v-if="setDefaultLaunchAppLoading" size="24" style="position: absolute; right: 32px; top: 11px" />
        </div>
          <div class="item" @click="shapedScreenOptim($event)" v-if="false">
            <div class="item-title">
              异形屏兼容强化
            </div>
            <div class="func-config-box"
              v-for="item in shapedScreenList"
              :key="item.device"
            >
              <van-cell 
                label-width="70%"
                :title="item.device"
              >
                <template #right-icon>
                  <van-switch 
                  :loading="!!item.loading"
                  v-model="item.enabled" size="16" @change="setShapedScreenConfigEnabled($event, item)" />
                </template>
              </van-cell>
              </div>
          </div>
        <div class="item" @click="startActivityForLog">
          <div class="item-title">
            查看日志
          </div>
        </div>
        <div class="item" @click="resetScheme">
          <div class="item-title">
            重置方案及功能
          </div>
        </div>
      </van-cell-group>
    </div>
    <app-list-dialog
      v-model:show="setDefaultLaunchAppDialogShown"
      v-model:appList="toSetDefaultLaunchAppList"
    ></app-list-dialog>
    <van-popup v-model:show="popupListShown" position="bottom">
      <van-picker
        show-toolbar
        :columns="popupListData"
        @confirm="popupListConfirm"
        @cancel="popupListShown = false"
        :default-index="popupListValue"
      />
    </van-popup>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { showConfirmDialog } from 'vant';
import appListDialog from '../components/AppListRefDialog.vue';

const props = defineProps({
  statusBarHeight: Number,
});

const settings = ref([]);
const toSetDefaultLaunchAppList = ref([]);
const setDefaultLaunchAppDialogShown = ref(false);
const setDefaultLaunchAppLoading = ref(false);
const timeout = ref(null);
const shapedScreenList = ref([]);
const popupCurItem = ref(null);
const popupListShown = ref(false);
const popupListData = ref([]);
const popupListValue = ref('');

(async function (){
  let rsettings = (await AutoWeb.autoPromise('getSettings'));
  rsettings.forEach(item => {
    item.loading = false;
  });
  settings.value = rsettings;
})();
async function toggleSwitchEvent(e, item) {
  item.loading = true;
  let result = await AutoWeb.autoPromise('saveSetting', item);
  item.loading = false;
  if (!result) {
    item.enabled = !item.enabled;
  }
}
function startActivityForLog() {
  AutoWeb.autoPromise('startActivityForLog');
}
function resetScheme() {
  showConfirmDialog({
    title: '提示',
    message: '是否完全清空方案及相关配置？',
  }).then(async () => {
    await AutoWeb.autoPromise('clearStorage');
    await AutoWeb.autoPromise('toast', '请手动重启脚本。');
    await AutoWeb.autoPromise('exit');
  }).catch(() => {
    // on cancel
    // or on error
  });
}
async function setDefaultLaunchApp() {
  if (setDefaultLaunchAppLoading.value) return;
  setDefaultLaunchAppLoading.value = true;
  toSetDefaultLaunchAppList.value = await AutoWeb.autoPromise('getToSetDefaultLaunchAppList');
  setDefaultLaunchAppDialogShown.value = true;
  setDefaultLaunchAppLoading.value = false;
}
async function shapedScreenOptim(e) {
  if (e.target && e.target.className === 'item-title' || e.target.className === 'item item-expand' || e.target.className === 'item') {
    if (e.target && e.target.className === 'item') {// 展开
      let arr = await AutoWeb.autoPromise('getShapedScreenConfig', null);
      arr.forEach(i => i.loading = false);
      shapedScreenList.value = arr;
      e.target.className = 'item item-expand';
    } else if (e.target && e.target.className === 'item item-expand') {
      e.target.className = 'item'
    }
  }
}
async function setShapedScreenConfigEnabled(e, item) {
  item.loading = true;
  await AutoWeb.autoPromise('setShapedScreenConfigEnabled', item);
  item.loading = false;
}
async function saveSettings(item, reload) {
  await AutoWeb.autoPromise('saveSetting', item);
  if (reload) {
    let rsettings = (await AutoWeb.autoPromise('getSettings'));
    rsettings.forEach(item => {
      item.loading = false;
    });
    settings.value = rsettings;
  }
}
async function showItemConfigList(event, item) {
  popupCurItem.value = item;
  popupListData.value = item.data.map(item => ({text: item, value: item}));
  popupListValue.value = item.value;
  popupListShown.value = true;
}
async function popupListConfirm({ selectedOptions }) {
  popupCurItem.value.value = selectedOptions[0].text;
  popupListShown.value = false;
  await AutoWeb.autoPromise('saveSetting', popupCurItem.value);
  
  let rsettings = (await AutoWeb.autoPromise('getSettings'));
  rsettings.forEach(item => {
    item.loading = false;
  });
  settings.value = rsettings;
}
function debounce (func, wait, args) {
  if (timeout.value) clearTimeout(timeout.value)
  timeout.value = setTimeout(() => {
    func.apply(null, args);
  }, wait)
}
function inputChange(item) {
  // debounce(saveSettings, 300, [item]);
  saveSettings(item);
}
function enterEvent(item) {
  if (timeout.value) clearTimeout(timeout.value);
  saveSettings(item);
}
</script>

<style scoped>
.item.item-expand {
  transition: all 0.2s linear;
  height:initial;
}
.item:active {
  background-color: #f2f3f5;
}
.item {
  height: 44px;
  margin:5px 10px 5px 10px;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  padding: 0px 16px;
  font-size: 14px;
  box-shadow: 1px 1px 1px #eaeaea;
  transition: all 0.2s linear;
}
.item-title {
  display: inline-block;
  height: 44px;
  line-height: 44px;
}
.item-value {
  margin-top: 12px;
  float: right;
}
.func-config-box:last-child {
  margin-bottom: 10px;
}
.func-config-box .van-cell,
.func-config-box .van-cell-group__title {
  font-size: 12px;
}
.func-config-box .van-cell {
  padding: 2px 5px;
}
.func-config-box .van-cell-group__title {
  padding: 10px 16px 2px 16px;
}
</style>
