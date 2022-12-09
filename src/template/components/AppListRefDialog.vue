<template>
  <div>
    <!-- 功能的参数配置 -->
    <van-popup class="configModal" v-model="dialogShow" style="width: 100%; height: 70%; overflow: hidden">
      <div style="position: absolute; top: 0; padding: 16px 16px 10px 16px; width: 100%; z-index: 2002; background: #fff;">请选择需要关联启动的应用</div>
      <div style="height: 100%; overflow: auto">
        <div style="padding-top: 52px; padding-bottom: 52px">
          <div
            :class="'item' + (app.referred ? ' referred': '')"
            v-for="app in innerAppList"
            :key="app.packageName"
            @click="app.referred = !app.referred"
          >
            <span class="logo">
              <van-loading v-if="!app.appIcon" />
              <van-icon v-if="app.appIcon === 'fail'" name="failure" size="32px" />
              <img v-else-if="app.appIcon" :src="app.appIcon"/>
            </span>
            <span class="item-content">
              <div class="appName">{{app.appName}}</div>
              <div class="packageName">{{app.packageName}}</div>
            </span>
          </div>
        </div>
      </div>
      <div style="display: block; position: absolute; bottom: 0; width: 100%;">
        <van-row>
          <van-col span="12">
            <div style="margin: 5px 5px 5px 10px; border-radius:5px; overflow: hidden;box-shadow: 1px 1px 1px #eaeaea">
              <van-button type="warning" block @click="cancel">
                取消
              </van-button>
            </div>
          </van-col>
          <van-col span="12">
            <div style="margin: 5px 10px 5px 5px; border-radius:5px; overflow: hidden;box-shadow: 1px 1px 1px #eaeaea">
              <van-button type="info" block @click="save">
                <i class="iconfont iconfont-baocun"></i> 保存
              </van-button>
            </div>
          </van-col>
        </van-row>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Col, Row, Popup, Switch, Loading, Icon } from 'vant';
Vue.use(Col);
Vue.use(Row);
Vue.use(Popup);
Vue.use(Switch)
Vue.use(Loading);
Vue.use(Icon);

export default {
  props: {
    show: Boolean,
    appList: Array,
  },
  computed: {
    dialogShow: {
      get() {
        return this.show;
      },
      set(s) {
        this.$emit('update:show', s)
      }
    },
    innerAppList: {
      get() {
        return this.appList;
      },
      set(s) {
        this.$emit('update:appList', s);
      }
    }
  },
  methods: {
    cancel() {
      this.dialogShow = false
    },
    async save() {
      let toSave = this._props.appList.filter(item => item.referred).map(item => item.packageName);
      await AutoWeb.autoPromise('saveToSetDefaultLaunchAppList', toSave);
      this.dialogShow = false
      await AutoWeb.autoPromise('toast', '保存成功');
    }
  },
  watch: {
    show(val) {
      this.dialogShow = val;
    },
    async appList(val) {
      this.innerAppList = val;
      this.innerAppList.forEach((appInfo) => {
        appInfo.appIcon = '';
      });
      for (let i = 0; i < this.innerAppList.length; i++) {
        this.innerAppList[i].appIcon = (await AutoWeb.autoPromise('getIconByPackageName', this.innerAppList[i].packageName)) || 'fail';
        this.$forceUpdate();
      }
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
.item {
  position: relative;
  height: 44px;
  margin:5px 10px 5px 10px;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  padding: 0px 16px 0px 0px;
  font-size: 14px;
  box-shadow: 1px 1px 1px #eaeaea;
  transition: all .1s linear;
}
.logo {
  position: absolute;
  top: 6px;
  left: 6px;
}
.logo img {
  max-width: 32px;
  max-height: 32px;
}
.item-content {
  display: block;
  margin-top: 5px;
  margin-left: 44px;
  font-size: 14px;
}
.referred {
  color: #fff;
  background-color: #0066CC
}
</style>