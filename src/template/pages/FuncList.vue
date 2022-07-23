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
          <van-icon name="setting-o" size="18"  @click="showCommonConfig($event, commonConfig)" />
          <!-- <van-icon name="success" size="18" @click="saveScheme" /> -->
        </template>
      </van-nav-bar>
    </div>

    <div class="rv_inner" :style="'padding-top: '+ (46 + (statusBarHeight || 0)) + 'px'">
      <van-cell-group class="itemBox" :title="'方案 - ' + this.params.schemeName" style="background: transparent">
        <draggable
          v-model="funcList"
          handle=".handle-area"
          :scroll-sensitivity="100"
          :force-fallback="true"
          v-bind="dragOptions"
          @start="dragTransition = true"
          @end="dragEnd"
        >
          <transition-group type="transition" :name="!dragTransition ? 'flip-list' : null">
            <div
              v-for="item in funcList" :key="item.id"
              class="item"
              center
              >
              <div class="item-header" @click="showConfig($event, item)">
                <div class="item-title">{{item.id + ' ' + item.name + (item.config && item.config.length ? ' *': '')}}</div>
                <div class="item-value">
                  <span class="handle-area"><van-icon class="handle noShowConfigEvent" size="18" name="bars" /></span>
                  <van-switch class="itemSwitch" @change="toggleSwitchEvent" v-model="item.checked" size="18" />
                </div>
                <div v-if="item.desc" class="item-desc">{{item.desc}}</div>
              </div>
              <div v-if="item.id === showConfigId" class="item-config">
                <func-config-box
                  :configModalObject.sync="configModalObject"
                ></func-config-box>
              </div>
            </div>
          </transition-group>
        </draggable>
      </van-cell-group>
    </div>

    <div style="display: block; position: fixed; bottom: 0; width: 100%;">
      <van-row>
        <van-col span="12">
          <div style="margin: 5px 5px 5px 10px; border-radius:5px; overflow: hidden;box-shadow: 1px 1px 1px #eaeaea">
            <van-button type="info" block @click="saveScheme">
              <i class="iconfont iconfont-baocun"></i> 保存
              <!-- <van-icon name="setting-o"/> 保存 -->
            </van-button>
          </div>
        </van-col>
        <van-col span="12">
          <div style="margin: 5px 10px 5px 5px; border-radius:5px; overflow: hidden;box-shadow: 1px 1px 1px #eaeaea">
            <van-button color="#FF9900" block @click="startBtnClickEvent">
              <i class="iconfont iconfont-fabusekuai"></i> 启动
              <!-- <van-icon name="play-circle" /> 启动 -->
              <van-loading v-if="startBtnClickEventLoading" style="display:inline-block" size="18" color="#fff" />
            </van-button>
          </div>
        </van-col>
      </van-row>
    </div>
    <func-config-dialog
      :show.sync="commonConfigModalShow"
      :configModalObject.sync="commonConfigModalObject"
    ></func-config-dialog>
    <app-list-lauch-dialog
      :show.sync="appListLauchDialogShown"
      :appList.sync="appListLauchList"
    ></app-list-lauch-dialog>
  </div>
</template>
<script>
import Vue from "vue";
import { Col, Row, Switch, Icon, Button, Picker, Loading } from "vant";
import draggable from 'vuedraggable'
import dfuncList from "../../common/funcList";
import dCommonConfig from "../../common/commonConfig";
import _ from 'lodash';
import funcConfigBox from '../components/FuncConfigBox.vue';
import funcConfigDialog from '../components/FuncConfigDialog.vue';
import appListLauchDialog from '../components/AppListLaunchDialog.vue';

Vue.use(Col);
Vue.use(Row);
Vue.use(Switch);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Picker);
Vue.use(Loading);

export default {
  data() {
    return {
      dragTransition: false,
      showConfigId: null,
      funcList: [],
      commonConfig: {
        name: '公共配置',
        config: []
      },
      params: this.$route.query,
      configModalShow: false,
      commonConfigModalShow: false,
      configModalObject: {
        config: []
      },
      commonConfigModalObject: {
        config: []
      },
      scheme: null,
      appListLauchDialogShown: false,
      appListLauchList: [],
      startBtnClickEventLoading: false,
    };
  },
  props: {
    statusBarHeight: Number
  },
  components: {
    draggable,
    funcConfigBox,
    funcConfigDialog,
    appListLauchDialog
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  async mounted() {
    if (this.params) {
      if (this.params.schemeName) {
        // AutoWeb.auto('toast', `加载方案 [ ${this.params.schemeName} ] `);
      }
    }
    var schemeConfig = await AutoWeb.autoPromise('getScheme', this.$route.query.schemeName);
    this.scheme = schemeConfig;

    // 启用的功能
    let fl = [];
    schemeConfig.config = schemeConfig.config || {};
    schemeConfig.list.forEach(id => {
      for (let funcOrigin of dfuncList) {
        if (funcOrigin.id === id) {
          let item = _.cloneDeep(funcOrigin);
          if (!item.config) {
            item.config = [];
          }
          if (schemeConfig.config[item.id] || item.config.length) {
            item.config.forEach(iItem => {
              iItem.config.forEach(iIItem => {
                if (schemeConfig.config[item.id] && schemeConfig.config[item.id][iIItem.name] !== undefined) {
                  iIItem.value = schemeConfig.config[item.id][iIItem.name];
                } else {
                  iIItem.value = iIItem.default;
                }
              })
            })
          }
          item.desc = funcOrigin.desc || null
          item.checked = true;
          fl.push(item);
          break;
        }
      }
    });

    // 未启用的功能
    let toAppend = [];
    dfuncList.forEach(item => {
      item = _.cloneDeep(item);
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
        item.config.forEach(iItem => {
          iItem.config.forEach(iIItem => {
            iIItem.value = iIItem.default;
          });
        });
        toAppend.push(item);
      }
    });

    this.funcList = [...fl, ...toAppend];

    // 公共配置
    let cc = _.cloneDeep(dCommonConfig);
    cc.forEach(item => {
      if (!item.config) {
        item.config = [];
      }
      item.config.forEach(iItem => {
        iItem.value = iItem.default;
        for (let key in schemeConfig.commonConfig) {
          if (key === iItem.name) {
            iItem.value = schemeConfig.commonConfig[key];
          }
        }
      });
    });
    this.commonConfig.config = cc;
    this.reSort();
  },
  methods: {
    toggleSwitchEvent(value) {
      setTimeout(() => {
        this.reSort();
      }, 100);
    },
    dragEnd() {
      this.dragTransition = false;
      this.reSort();
    },
    reSort() {
      let list = [[], []];
      this.funcList.forEach((item) => {
        list[!!item.checked + 0].push(item);
      });
      this.funcList = [...list[1], ...list[0]];
    },
    showCommonConfig(e, item) {
      if (item.config && item.config.length > 0) {
        this.commonConfigModalObject = item;
        this.commonConfigModalShow = true;
      }
    },
    showConfig(e, item) {
      if (e.target.className.match(/switch|handle/)) {
        return;
      }
      if (item.config && item.config.length > 0) {
        if (this.showConfigId === item.id) {
          this.showConfigId = null;
        } else {
          this.showConfigId = item.id;
        }
        this.configModalObject = item;
      } else {
        // Toast('无可配置项');
      }
    },
    async saveScheme() {
      if (this.params && this.params.schemeName) {
        let list = [];
        let config = {};
        let commonConfig = {};
        for (let i = 0; i < this.funcList.length; i++) {
          if (this.funcList[i].checked) {
            list.push(this.funcList[i].id);
            for (let j = 0; j < this.funcList[i].config.length; j++) {
              let configs = this.funcList[i].config[j].config;
              for (let k = 0; k < configs.length; k++) {
                if (!config[this.funcList[i].id]) {
                  config[this.funcList[i].id] = {};
                }
                config[this.funcList[i].id][configs[k].name] = configs[k].value;
              }
            }
          }
        }
        for (let i = 0; i < this.commonConfig.config.length; i++) {
          let configs = this.commonConfig.config[i].config;
          for (let j = 0; j < configs.length; j++) {
            commonConfig[configs[j].name] = configs[j].value;
          }
        }
        let toSave = {
          schemeName: this.params.schemeName,
          star: this.scheme.star,
          inner: this.scheme.inner,
          groupName: this.scheme.groupName,
          list: list,
          config: config,
          commonConfig: commonConfig
        }

        await AutoWeb.autoPromise('saveScheme', toSave);
        await AutoWeb.autoPromise('toast', `保存成功`);
      } else {
        await AutoWeb.autoPromise('toast', `参数错误：params.schemeName为空`);
      }
    },
    async startBtnClickEvent() {
      if (this.startBtnClickEventLoading) return;
      this.startBtnClickEventLoading = true;
      await this.saveScheme();
      await AutoWeb.autoPromise('setCurrentScheme', this.params.schemeName);
      let list = await AutoWeb.autoPromise('startScript');
      this. startBtnClickEventLoading = false;
      if (list) {
        this.appListLauchDialogShown = true;
        this.appListLauchList = list;
      }
    }
  }
};
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