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
      :style="'padding-top: ' + (46 + (statusBarHeight || 0)) + 'px'"
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
      :show.sync="setDefaultLaunchAppDialogShown"
      :appList.sync="toSetDefaultLaunchAppList"
    ></app-list-dialog>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup, Icon, Button, Dialog, Field, Notify, Switch, Loading } from "vant";
import appListDialog from '../components/AppListRefDialog.vue';
import _ from "lodash";

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Field);
Vue.use(Notify);
Vue.use(Switch);
Vue.use(Loading);

export default {
  data() {
    return {
      settings: [],
      toSetDefaultLaunchAppList: [],
      setDefaultLaunchAppDialogShown: false,
      setDefaultLaunchAppLoading: false,
      timeout: null
    };
  },
  components: {
    appListDialog
  },
  props: {
    statusBarHeight: Number,
  },
  async mounted() {
    let settings = (await AutoWeb.autoPromise('getSettings'));
    settings.forEach(item => {
      item.loading = false;
    });
    this.settings = settings;
  },
  computed: {},
  methods: {
    async toggleSwitchEvent(e, item) {
      item.loading = true;
      let result = await AutoWeb.autoPromise('saveSetting', item);
      item.loading = false;
      if (!result) {
        item.enabled = !item.enabled;
      }
    },
    startActivityForLog() {
      AutoWeb.autoPromise('startActivityForLog');
    },
    resetScheme() {
      Dialog.confirm({
        title: '提示',
        message: '是否完全清空方案及相关配置？',
      }).then(async () => {
        await AutoWeb.autoPromise('clearStorage');
        await AutoWeb.autoPromise('toast', '请手动重启脚本。');
        await AutoWeb.autoPromise('exit');
      }).catch(() => {
        // on cancel
      });
    },
    async setDefaultLaunchApp() {
      if (this.setDefaultLaunchAppLoading) return;
      this.setDefaultLaunchAppLoading = true;
      this.toSetDefaultLaunchAppList = await AutoWeb.autoPromise('getToSetDefaultLaunchAppList');
      this.setDefaultLaunchAppDialogShown = true;
      this.setDefaultLaunchAppLoading = false;
    },
    async saveSettings(item) {
      await AutoWeb.autoPromise('saveSetting', item);
    },
    debounce (func, wait) {
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        func();
      }, wait)
    },
    inputChange(item) {
      this.debounce(this.saveSettings.bind(this, item), 1000);
    },
    enterEvent(item) {
      if (this.timeout) clearTimeout(this.timeout);
      this.saveSettings(item);
    }
  },
};
</script>

<style scoped>

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
  box-shadow: 1px 1px 1px #eaeaea
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
</style>
