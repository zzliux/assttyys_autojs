<template>
  <div>
    <div class="navbar_box">
      <van-nav-bar :style="'padding-top: ' + (statusBarHeight || 0) + 'px'">
        <template #left>
          <van-icon name="wap-nav" size="18" @click="$router.push('/settings')" />
          <!-- <van-icon name="success" size="18" @click="saveScheme" /> -->
        </template>
        <template #title>
          ASSTTYYS NG
        </template>
        <template #right>
          <!-- <van-icon name="todo-list-o" size="18" @click="exportAndImportModel = true"/> -->
          <element-search ref="eleSearch" refSearchAttrName="scheme-list-name"
            refHighLightAttrName="scheme-list-to-highlit" />
          <span size="18" @click="exportAndImportModel = true">更多</span>
        </template>
      </van-nav-bar>
    </div>
    <div class="rv_inner" :style="'padding-top: ' + (46 + (statusBarHeight || 0)) + 'px; padding-bottom: 6px;'">
      <van-dropdown-menu>
        <van-dropdown-item v-model="filterGroupName" :options="filterGroupNames" @open="filterGroupNameOpen"
          @change="filterGroupNameChange" />
      </van-dropdown-menu>
      <van-cell-group class="itemBox" title="方案列表" style="background: transparent">
        <draggable :scroll-sensitivity="100" :force-fallback="true" v-model="schemeList" item-key="schemeName"
          handle=".handle-area" v-bind="dragOptions" @end="saveSchemeList" style="padding: 0px 5px"
          class="item-list-container">
          <template #item="{ element, index }">
            <div class="item-container" :scheme-list-name="element.schemeName">
              <van-swipe-cell class="item-line" center @open="itemOpen" @close="itemClose" :before-close="itemBeforeClose"
                :stop-propagation="true" :disabled="filterGroupName !== '全部'">
                <span>
                  <div v-if="element.groupName" class="group-color"
                    :style="'background-color: ' + getGroupColor(element.groupName)"></div>
                  <div :scheme-list-to-highlit="element.schemeName" class="item van-cell van-cell--center"
                    @click="schemeClickEvent($event, element)"
                    :style="'margin-left: ' + (element.groupName ? '6px' : '0px')">
                    <div class="van-cell__title item-title"
                      :style="'margin-left: ' + (!element.groupName ? '6px' : '0px')">{{ element.schemeName }}</div>
                    <div class="van-cell__value item-value"
                      :style="'margin-right: ' + (element.groupName ? '6px' : '0px')">
                      <span v-if="filterGroupName === '全部'" class="handle-area"><van-icon class="handle" size="18"
                          name="bars" /></span>
                      <span class="star-area">
                        <van-icon class="star" size="18" :name="element.star ? 'star' : 'star-o'"
                          :color="element.star ? '#1989fa' : null" @click="schemeStarEvent($event, element)" />
                      </span>
                    </div>
                  </div>
                </span>
                <template #right>
                  <van-button type="danger" square text="删除" v-if="!element.inner || true"
                    @click="swipeCellCurrentAction = filterGroupName === '全部' ? 'delete' : null; swipeCellCurrentIndex = index" />
                  <van-button type="primary" square text="复制"
                    @click="swipeCellCurrentAction = filterGroupName === '全部' ? 'copy' : null; swipeCellCurrentIndex = index" />
                  <van-button type="warning" square text="修改"
                    @click="swipeCellCurrentAction = filterGroupName === '全部' ? 'modify' : null; swipeCellCurrentIndex = index" />
                  <van-button type="success" square text="置顶" @click="toTop(element.schemeName); swipeCellCurrentIndex = 0" />
                </template>
              </van-swipe-cell>
            </div>
          </template>
        </draggable>
        <div v-if="filterGroupName === '全部'"
          style="margin:5px 10px 5px 10px; border-radius:5px; overflow: hidden; box-shadow: 1px 1px 1px #eaeaea">
          <van-cell class="item" center @click="addSchemeClickEvent($event)">
            <div style="text-align: center; height: 24px;">
              <van-icon name="plus" style="font-weight: bolder; vertical-align: middle" />
              <span style="position: relative; top: 2px">添加方案</span>
            </div>
          </van-cell>
        </div>
      </van-cell-group>

      <van-dialog v-model:show="schemeNameInputShow" :before-close="schemeNameInputBeforeClose"
        :title="'copy' === schemeNameInputType ? '复制方案' : ('add' === schemeNameInputType ? '新增方案' : '修改方案')"
        show-cancel-button>
        <van-field :label="'add' === schemeNameInputType ? '方案名' : '新的方案名'" v-model="newSchemeName"
          placeholder="请输入..." />
        <van-field label="分组名" v-model="newGroupName" placeholder="请输入...">
          <template #button>
            <van-button size="small" type="default" @click="newGroupNameSelect">选择</van-button>
          </template>
        </van-field>
      </van-dialog>
    </div>
    <!-- 分组名选择器 -->
    <van-popup v-model:show="selectNewGroupNameShow" position="bottom">
      <van-picker show-toolbar :columns="groupNameList" @confirm="selectNewGroupNameConfirm"
        @cancel="selectNewGroupNameShow = false" :default-index="groupNameIndex" />
    </van-popup>
    <export-scheme-dialog v-model:show="exportModel" :schemeList="schemeList" />
    <import-scheme-dialog v-model:show="importModel" :importCallback="schemeImportCallback" />
    <!-- 啊这个不知道用什么实现比较好了 -->
    <van-popup v-model:show="exportAndImportModel" :overlay-style="{ backgroundColor: 'rgba(0, 0, 0, 0)' }"
      style="background-color: rgba(0, 0, 0, 0);" position="top" @click="exportAndImportModel = false">
      <div
        :style="`display: inline-block; border: #ccc 1px solid; float: right; background-color: #fff; font-size: 14px; margin-top: ${statusBarHeight + 46}px;`">
        <div class="import-export-btn" @click="importModel = true">导入方案</div>
        <div class="import-export-btn" @click="exportModel = true">导出方案</div>
        <div class="import-export-btn" @click="$router.push('/schedule/list')">定时任务</div>
      </div>
    </van-popup>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import ExportSchemeDialog from "../components/ExportSchemeDialog.vue";
import ImportSchemeDialog from "../components/ImportSchemeDialog.vue";
import ElementSearch from "../components/ElementSearch";
import draggable from "@marshallswain/vuedraggable";
import { mergeSchemeList } from "../../common/toolWeb";
import dSchemeList from "../../common/schemeList";
import groupColor from "../../common/groupColors";
import { merge } from '@/common/tool';
import { showNotify, showConfirmDialog } from 'vant';

const $router = useRouter();

const itemOpenList = ref([]);
const swipeCellCurrentAction = ref(null);
const swipeCellCurrentIndex = ref(null);
const schemeNameInputShow = ref(false);
const schemeNameInputType = ref(null);
const newSchemeName = ref(null);
const newScheme = ref(null);
const newGroupName = ref(null);
const schemeList = ref([]);
const selectNewGroupNameShow = ref(false);
const groupNameList = ref([]);
const groupNameIndex = ref(0);
const exportAndImportModel = ref(false);
const exportModel = ref(false);
const importModel = ref(false);
const eleSearch = ref();

const filterGroupNames = ref([{ text: '全部', value: '全部' }]);
const filterGroupName = ref('全部');

const props = defineProps({
  statusBarHeight: Number
});

(async function () {
  const savedSchemeList = await AutoWeb.autoPromise("getSchemeList", null);
  const deletedSchemeNames = await AutoWeb.autoPromise("getDeletedSchemeNames", null);
  schemeList.value = mergeSchemeList(savedSchemeList, dSchemeList).filter(item => !deletedSchemeNames.includes(item.schemeName));
  // 获取后保存一下方案列表，避免出现展示内容与保存内容不一样的情况
  AutoWeb.autoPromise('saveSchemeList', schemeList.value);
  eleSearch.value.doHighlightFromQuery();
})();

const dragOptions = computed({
  get() {
    return {
      animation: 200,
      group: "description",
      disabled: false,
      ghostClass: "ghost",
    };
  },
  set(val) { }
});

function saveSchemeList() {
  AutoWeb.autoPromise('saveSchemeList', schemeList.value);
}

function schemeClickEvent(e, item) {
  if (itemOpenList.value.length > 0) return;
  if (e.target.className.match(/handle|star/)) {
    return;
  }
  $router.push({
    path: "/funcList",
    query: {
      schemeName: item.schemeName,
    },
  });
}

function schemeLongClickEvent(e, i) { }

async function schemeStarEvent(e, item) {
  const newScheme = await AutoWeb.autoPromise('starScheme', {
    star: !item.star,
    schemeName: item.schemeName,
  });
  item.star = newScheme.star;
}

function addSchemeClickEvent(e) {
  schemeNameInputType.value = 'add';
  newSchemeName.value = null;
  newScheme.value = null;
  schemeNameInputShow.value = true;
}

function addScheme(scheme, callback) {
  var maxId = 0;
  schemeList.value.forEach(item => {
    if (maxId < item.id) {
      maxId = item.id;
    }
  });
  scheme.id = maxId + 1;
  scheme.star = false;
  scheme.inner = false; // 新增的都是用户方案
  schemeList.value.push(scheme);
  saveSchemeList();
}

const toTop = (schemeName) => {
  const index = schemeList.value.findIndex((item, index) => item.schemeName === schemeName);
  const scheme = schemeList.value.splice(index, 1)[0];
  schemeList.value.unshift(scheme);
  saveSchemeList();
}

function itemOpen() {
  itemOpenList.value.push(0);
}

function itemClose() {
  setTimeout(() => { itemOpenList.value.pop() }, 200)
}

function itemBeforeClose(option) {
  switch (option.position) {
    case 'left':
    case 'cell':
    case 'outside':
      if (!swipeCellCurrentAction.value) {
        return true;
      }
      break;
    case 'right':
      if ('delete' === swipeCellCurrentAction.value) {
        showConfirmDialog({
          message: '确定删除吗？',
        }).then(() => {
          // option.instance.close();
          schemeList.value.splice(swipeCellCurrentIndex.value, 1);
          itemClose();
          saveSchemeList();
          AutoWeb.autoPromise('toast', "已删除");
          swipeCellCurrentAction.value = null;
        }).catch(() => {
          swipeCellCurrentAction.value = null;
        });
      } else if ('copy' === swipeCellCurrentAction.value) {
        itemClose();
        schemeNameInputType.value = 'copy';
        schemeNameInputShow.value = true;
        newScheme.value = merge({}, schemeList.value[swipeCellCurrentIndex.value]);
        newSchemeName.value = newScheme.value.schemeName;
        newGroupName.value = newScheme.value.groupName;
      } else if ('modify' === swipeCellCurrentAction.value) {
        itemClose();
        schemeNameInputType.value = 'modify';
        newSchemeName.value = schemeList.value[swipeCellCurrentIndex.value].schemeName;
        schemeNameInputShow.value = true;
        newGroupName.value = schemeList.value[swipeCellCurrentIndex.value].groupName;
      }
      break;
  }
}

function schemeNameInputBeforeClose(action, done) {
  if ('cancel' === action) {
    newScheme.value = null;
    newSchemeName.value = null;
    newGroupName.value = null;
    swipeCellCurrentAction.value = null;
    return true;
  } else {
    if (!newSchemeName.value) {
      showNotify({ type: 'warning', message: '请输入方案名。' });
      return false;
    }

    if ('copy' === schemeNameInputType.value) {
      for (let i = 0; i < schemeList.value.length; i++) {
        if (schemeList.value[i].schemeName == newSchemeName.value) {
          showNotify({ type: 'warning', message: '存在重复的方案名，请重新输入。' });
          return false;
        }
      }
      newScheme.value.schemeName = newSchemeName.value;
      newScheme.value.groupName = newGroupName.value;
      addScheme(newScheme.value);
      AutoWeb.autoPromise('toast', "已复制");
      swipeCellCurrentAction.value = null;
      newScheme.value = null;
      newSchemeName.value = null;
      newGroupName.value = null;
      return true;
    } else if ('add' == schemeNameInputType.value) {
      for (let i = 0; i < schemeList.value.length; i++) {
        if (schemeList.value[i].schemeName == newSchemeName.value) {
          showNotify({ type: 'warning', message: '存在重复的方案名，请重新输入。' });
          return false;
        }
      }
      addScheme({
        id: null,
        schemeName: newSchemeName.value,
        groupName: newGroupName.value,
        star: false,
        list: [],
        config: {},
        commonConfig: {}
      });
      swipeCellCurrentAction.value = null;
      newScheme.value = null;
      newSchemeName.value = null;
      newGroupName.value = null;
      return true;
    } else if ('modify' === schemeNameInputType.value) {
      schemeList.value[swipeCellCurrentIndex.value].schemeName = newSchemeName.value;
      schemeList.value[swipeCellCurrentIndex.value].groupName = newGroupName.value;
      saveSchemeList();
      AutoWeb.autoPromise('toast', '修改成功');
      swipeCellCurrentAction.value = null;
      newScheme.value = null;
      newSchemeName.value = null;
      newGroupName.value = null;
      return true;
    }
  }
}

function newGroupNameSelect() {
  let gSet = {};
  schemeList.value.forEach(s => {
    if (s.groupName) gSet[s.groupName] = 1;
  });
  groupNameList.value = Object.keys(gSet).map(item => ({ text: item, value: item }));
  selectNewGroupNameShow.value = true;
  if (newGroupName.value) {
    for (let i = 0; i < groupNameList.value.length; i++) {
      if (groupNameList.value[i] === newGroupName.value) {
        groupNameIndex.value = i;
        break;
      }
    }
  }
}

function selectNewGroupNameConfirm({ selectedOptions }) {
  newGroupName.value = selectedOptions[0].text;
  selectNewGroupNameShow.value = false;
}

function getGroupColor(groupName) {
  // 计算hash值
  let sum = 0;
  for (let i = 0; i < groupName.length; i++) {
    sum += groupName.charCodeAt(i);
  }
  return groupColor[sum % groupColor.length];
}

async function schemeImportCallback() {
  schemeList.value = await AutoWeb.autoPromise("getSchemeList");
}

async function filterGroupNameOpen() {
  filterGroupNames.value = ['全部', ...await AutoWeb.autoPromise('getGroupNames')].map(item => ({ text: item, value: item }));
}

async function filterGroupNameChange() {
  const left = await AutoWeb.autoPromise("getSchemeList");
  if (filterGroupName.value === '全部') {
    schemeList.value = left;
    return;
  }

  // 1. 根据groupName过滤
  const filterd = [];
  for (let i = 0; i < left.length; i++) {
    if (left[i].groupName === filterGroupName.value) {
      filterd.push(left[i]);
      left.splice(i, 1);
      i--;
    }
  }

  // 2. 查询当前方案内功能的配置中type为scheme（好麻烦，先用配置key中包含scheme的就遍历），的配置的value
  for (let i = 0; i < filterd.length; i++) {
    const conf = filterd[i].config;
    for (let key in conf) {
      for (let keyName in conf[key]) {
        if (/scheme/i.test(keyName)) {
          const v = conf[key][keyName];
          for (let j = 0; j < left.length; j++) {
            if (left[j].schemeName === v) {
              filterd.push(left[j]);
              left.splice(j, 1);
              break;
            }
          }
        }
      }
    }
  }
  schemeList.value = filterd;
}

</script>

<style scoped>
@media (orientation: landscape) {
  .item-container {
    flex-basis: 50%;
  }
}

@media (orientation: portrait) {
  .item-container {
    flex-basis: 100%;
  }
}

.item-list-container {
  display: flex;
  flex-wrap: wrap;
}

.item-line {
  margin: 5px 5px 0px 5px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 1px #eaeaea;
}

.star-area,
.handle-area {
  margin-top: 8px;
  height: 24px;
  position: absolute;
  top: 4px;
}

.handle-area {
  right: 35px;
}

.star-area {
  right: 0px;
}

.item {
  height: 44px;
}

.item-title {
  display: inline-block;
  height: 44px;
  line-height: 44px;
  flex: 3;
}

.item-value {
  float: right;
  height: 44px;
}

.group-color {
  width: 6px;
  height: 100%;
  position: absolute;
  background-color: #ff00ff
}

.import-export-btn {
  transition: all .1s;
  user-select: none;
  padding: 5px;
  box-shadow: 0px 1px 1px #ccc;
}

.import-export-btn:hover {
  background: #ccc;
}
</style>
