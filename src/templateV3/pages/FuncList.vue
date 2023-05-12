<template>
  <div style="height: 100%; width: 100%">
    <div class="navbar_box">
      <van-nav-bar
        title="功能列表 | ASSTTYYS NG"
        left-arrow
        @click-left="$router.back()"
        :style="'padding-top: ' + (statusBarHeight || 0) + 'px'"
      >
         <template #right>
          <element-search
            refSearchAttrName="func-list-name"
            refHighLightAttrName="func-list-to-highlight"
          />
          <van-icon name="setting-o" size="18"  @click="showCommonConfig($event, commonConfig)" />
          <!-- <van-icon name="success" size="18" @click="saveScheme" /> -->
        </template>
      </van-nav-bar>
    </div>

    <div class="rv_inner" :style="'padding-top: '+ (46 + (statusBarHeight || 0)) + 'px'">
      <van-cell-group class="itemBox" :title="'方案 - ' + params.schemeName" style="background: transparent">
        <draggable
          v-model="funcList"
          item-key="id"
          handle=".handle-area"
          :scroll-sensitivity="100"
          :force-fallback="true"
          :animation="200"
          group="description"
          :disabled="false"
          ghostClass="ghost"
          @start="dragTransition = true"
          @end="dragEnd"
          tag="transition-group"
          :component-data="{ name: !dragTransition ? 'flip-list' : null, type: 'transition' }"
        >
          <template #item = "{ element }">
            <div
              class="item"
              center
              :func-list-name="element.id + ' ' + element.name"
            >
              <div class="item-header" :func-list-to-highlight="element.id + ' ' + element.name" @click="showConfig($event, element)">
                <div class="item-title">{{element.id + ' ' + element.name + (element.config && element.config.length ? ' *': '')}}</div>
                <div class="item-value">
                  <span class="handle-area"><van-icon class="handle noShowConfigEvent" size="18" name="bars" /></span>
                  <van-switch class="itemSwitch" @change="toggleSwitchEvent" v-model="element.checked" size="18" />
                </div>
                <div v-if="element.desc" class="item-desc">{{element.desc}}</div>
              </div>
              <div v-if="element.id === showConfigId" class="item-config">
                <func-config-box
                  v-model:configModalObject="configModalObject"
                ></func-config-box>
              </div>
            </div>
          </template>
        </draggable>
      </van-cell-group>
    </div>

    <div style="display: block; position: fixed; bottom: 0; right: 0">
      <van-col style="display: inline-block;" v-if="scheme && scheme.inner">
        <div style="margin: 5px 5px 5px 10px; border-radius:5px; overflow: hidden;box-shadow: 1px 1px 1px #eaeaea">
          <van-button color="#FF3300" block @click="resetBtnEvent">
            <van-icon name="warn-o" size="12" /> 重置
            <!-- <van-icon name="play-circle" /> 启动 -->
          </van-button>
        </div>
      </van-col>
      <van-col style="display: inline-block;" >
        <div style="margin: 5px 5px 5px 5px; border-radius:5px; overflow: hidden;box-shadow: 1px 1px 1px #eaeaea">
          <van-button type="primary" block @click="saveScheme">
            <i class="iconfont iconfont-baocun"></i> 保存
            <!-- <van-icon name="setting-o"/> 保存 -->
          </van-button>
        </div>
      </van-col>
      <van-col style="display: inline-block;" >
        <div style="margin: 5px 10px 5px 5px; border-radius:5px; overflow: hidden;box-shadow: 1px 1px 1px #eaeaea">
          <van-button color="#FF9900" block @click="startBtnClickEvent">
            <i class="iconfont iconfont-fabusekuai"></i> 启动
            <!-- <van-icon name="play-circle" /> 启动 -->
            <van-loading v-if="startBtnClickEventLoading" style="display:inline-block" size="18" color="#fff" />
          </van-button>
        </div>
      </van-col>
    </div>
    <func-config-dialog
      v-model:show="commonConfigModalShow"
      v-model:configModalObject="commonConfigModalObject"
    ></func-config-dialog>
    <app-list-lauch-dialog
      v-model:show="appListLauchDialogShown"
      v-model:appList="appListLauchList"
    ></app-list-lauch-dialog>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import draggable from '@marshallswain/vuedraggable'
import dfuncList from "../../common/funcListIndex";
import dCommonConfig from "../../common/commonConfig";
import funcConfigBox from '../components/FuncConfigBox.vue';
import ElementSearch from "../components/ElementSearch";
import funcConfigDialog from '../components/FuncConfigDialog.vue';
import appListLauchDialog from '../components/AppListLaunchDialog.vue';
import { merge } from '@/common/tool';

const $route = useRoute();
const dragTransition = ref(false);
const showConfigId = ref(null);
const funcList = ref([]);
const commonConfig = ref({
  name: "公共配置",
  config: [],
});
const params = ref($route.query);
const configModalShow = ref(false);
const commonConfigModalShow = ref(false);
const configModalObject = ref({
  config: []
});
const commonConfigModalObject = ref({
  config: []
});
const scheme = ref(null);
const appListLauchDialogShown = ref(false);
const appListLauchList = ref([]);
const startBtnClickEventLoading = ref(false);


const props = defineProps({
  statusBarHeight: Number
});

  // components: {
  //   draggable,
  //   funcConfigBox,
  //   funcConfigDialog,
  //   appListLauchDialog,
  // },
const dragOptions = computed({
  get() {
    return {
      animation: 200,
      group: "description",
      disabled: false,
      ghostClass: "ghost"
    }
  },
  set(val) {},
});

(async function () {
  if (params.value) {
    if (params.value.schemeName) {
      // AutoWeb.autoPromise('toast', `加载方案 [ ${params.value.schemeName} ] `);
    }
  }
  await loadScheme('getScheme', $route.query.schemeName);
})()

async function loadScheme(func, schemeName) {
  const schemeConfig = await AutoWeb.autoPromise(func, schemeName);
  // 启用的功能
  let fl = [];
  schemeConfig.config = schemeConfig.config || {};
  schemeConfig.list.forEach((id) => {
    for (let funcOrigin of dfuncList) {
      if (funcOrigin.id === id) {
        let item = merge({}, funcOrigin);
        if (!item.config) {
          item.config = [];
        }
        if (schemeConfig.config[item.id] || item.config.length) {
          item.config.forEach((iItem) => {
            iItem.config.forEach((iIItem) => {
              if (
                schemeConfig.config[item.id] &&
                schemeConfig.config[item.id][iIItem.name] !== undefined
              ) {
                iIItem.value = schemeConfig.config[item.id][iIItem.name];
              } else {
                iIItem.value = iIItem.default;
              }
            });
          });
        }
        item.desc = funcOrigin.desc || null;
        item.checked = true;
        fl.push(item);
        break;
      }
    }
  });

  // 未启用的功能
  let toAppend = [];
  dfuncList.forEach((item) => {
    item = merge({}, item);
    let flag = true;
    for (let singleFl of fl) {
      if (item.id === singleFl.id) {
        flag = false;
        break;
      }
    }
    if (flag) {
      if (!item.config) {
        item.config = [];
      }
      item.config.forEach((iItem) => {
        iItem.config.forEach((iIItem) => {
          iIItem.value = iIItem.default;
        });
      });
      toAppend.push(item);
    }
  });

  // 公共配置
  let cc = merge([], dCommonConfig);
  cc.forEach((item) => {
    if (!item.config) {
      item.config = [];
    }
    item.config.forEach((iItem) => {
      iItem.value = iItem.default;
      for (let key in schemeConfig.commonConfig) {
        if (key === iItem.name) {
          iItem.value = schemeConfig.commonConfig[key];
        }
      }
    });
  });
  
  scheme.value = schemeConfig;
  funcList.value = [...fl, ...toAppend];
  commonConfig.value.config = cc;
  reSort();
}

function toggleSwitchEvent(value) {
  setTimeout(() => {
    reSort();
  }, 100);
}

function dragEnd() {
  dragTransition.value = false;
  reSort();
}

function reSort() {
  let list = [[], []];
  funcList.value.forEach((item) => {
    list[+!!item.checked].push(item);
  });
  funcList.value = [...list[1], ...list[0]];
}

function showCommonConfig(e, item) {
  if (item.config && item.config.length > 0) {
    commonConfigModalObject.value = item;
    commonConfigModalShow.value = true;
  }
}

function showConfig(e, item) {
  if (e.target.className.match(/switch|handle/)) {
    return;
  }
  if (item.config && item.config.length > 0) {
    if (showConfigId.value === item.id) {
      showConfigId.value = null;
    } else {
      showConfigId.value = item.id;
    }
    configModalObject.value = item;
  } else {
    // Toast('无可配置项');
  }
}

async function resetBtnEvent() {
  loadScheme('getDefaultScheme', $route.query.schemeName);
}

async function saveScheme() {
  if (params.value && params.value.schemeName) {
    let list = [];
    let config = {};
    let thiscommonConfig = {};
    for (let i = 0; i < funcList.value.length; i++) {
      if (funcList.value[i].checked) {
        list.push(funcList.value[i].id);
        for (let j = 0; j < funcList.value[i].config.length; j++) {
          let configs = funcList.value[i].config[j].config;
          for (let k = 0; k < configs.length; k++) {
            if (!config[funcList.value[i].id]) {
              config[funcList.value[i].id] = {};
            }
            config[funcList.value[i].id][configs[k].name] = configs[k].value;
          }
        }
      }
    }
    for (let i = 0; i < commonConfig.value.config.length; i++) {
      let configs = commonConfig.value.config[i].config;
      for (let j = 0; j < configs.length; j++) {
        thiscommonConfig[configs[j].name] = configs[j].value;
      }
    }
    let toSave = {
      schemeName: params.value.schemeName,
      star: scheme.value.star,
      inner: scheme.value.inner,
      groupName: scheme.value.groupName,
      list: list,
      config: config,
      commonConfig: thiscommonConfig
    }

    await AutoWeb.autoPromise('saveScheme', toSave);
    await AutoWeb.autoPromise('setCurrentScheme', params.value.schemeName);
    await AutoWeb.autoPromise('toast', `保存成功`);
  } else {
    await AutoWeb.autoPromise('toast', `参数错误：params.schemeName为空`);
  }
}

async function startBtnClickEvent() {
  if (startBtnClickEventLoading.value) return;
  startBtnClickEventLoading.value = true;
  await saveScheme();
  await AutoWeb.autoPromise('setCurrentScheme', params.value.schemeName);
  let list = await AutoWeb.autoPromise('startScript');
  startBtnClickEventLoading.value = false;
  if (list) {
    appListLauchDialogShown.value = true;
    appListLauchList.value = list;
  }
}
</script>

<style scoped>
.rv_inner {
  padding: 46px 0px 56px 0px;
}
.handle {
  margin-right: 18px;
}
.handle-area {
  margin-top: 8px;
  height: 24px;
  width: 36px;
  display: inline-block;
}
.itemSwitch {
  margin-right: 5px;
}
.item {
  margin:5px 10px 5px 10px;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  font-size: 14px;
  box-shadow: 1px 1px 1px #eaeaea
}
.item-header {
  padding: 0px 16px 0px 16px;
}
.item-header:active {
  background-color: #f2f3f5;
}
.item-title {
  display: inline-block;
  height: 44px;
  line-height: 44px;
}
.item-value {
  margin-top: 5px;
  float: right;
}
.item-desc {
  color: #aaa;
  margin-top: -5px;
  padding-bottom: 10px;
  font-size: 12px;
  word-break: break-all;
}
.item-config {
  max-height: 300px;
  overflow-y: auto;
  border-top: 1px solid #efefef;
  padding-bottom: 10px;
}
</style>