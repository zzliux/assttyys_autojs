<template>
  <div>
    <!-- 功能的参数配置 -->
    <van-popup
      class="configModal"
      v-model="dialogShow"
      style="width: 100%; max-height: 70%"
    >
      <div style="padding: 16px 16px 10px 16px">选择需要启动的应用</div>
      <div>
        <div
          :class="'item' + (app.referred ? ' referred' : '')"
          v-for="app in innerAppList"
          :key="app.packageName"
          @click="launchPackage(app.packageName)"
        >
          <span class="logo">
            <van-loading v-if="!app.appIcon" />
            <van-icon v-if="app.appIcon === 'fail'" name="failure" size="32px" />
            <img v-else-if="app.appIcon" :src="app.appIcon"/>  
          </span>
          <span class="item-content">
            <div class="appName">{{ app.appName }}</div>
            <div class="packageName">{{ app.packageName }}</div>
          </span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Col, Row, Popup, Switch } from "vant";

export default {
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Popup.name]: Popup,
    [Switch.name]: Switch,
  },
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
        this.$emit("update:show", s);
      },
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
    launchPackage(packageName) {
      this.dialogShow = false;
      AutoWeb.autoPromise("launchPackage", packageName);
    },
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
};
</script>
<style scoped>
.item:active {
  background-color: #f2f3f5;
}
.item {
  position: relative;
  height: 44px;
  margin: 5px 10px 5px 10px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  padding: 0px 16px 0px 0px;
  font-size: 14px;
  box-shadow: 1px 1px 1px #eaeaea;
  transition: all 0.1s linear;
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
</style>