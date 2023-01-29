<template>
  <div style="width: 100%; height: 100%">
    <div class="rv_box">
      <transition :name="transitionName">
        <keep-alive :include="['index', 'schemeList']">
          <router-view
            class="rv"
            :status-bar-height="statusBarHeight"
          ></router-view>
        </keep-alive>
      </transition>
    </div>
    <van-popup
      closeable
      v-model="updateInfoShow"
      :style="{ width: '100%', maxHeight: '70%' }"
    >
      <div style="padding: 20px">
        <div class="popup_version_title">已为你完成更新：</div>
        <div v-for="(item, id) of updateInfoList" :key="id">
          <!-- {{item.version}}....{{id}} -->
          <div class="popup_version_version">{{ item.version }}:</div>
          <div class="popup_version_desc">{{ item.desc }}</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem, NavBar, Popup, Dialog } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Popup);
Vue.use(Dialog);

export default {
  data() {
    return {
      updateInfoList: [],
      updateInfoShow: false,
      transitionName: "slide-right",
      statusBarHeight: 20,
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
  computed: {},
  async mounted() {
    this.statusBarHeight = await AutoWeb.autoPromise("getStatusBarHeight");

    await AutoWeb.autoPromise("webloaded");

    // 版本查询
    let versionInfo = await AutoWeb.autoPromise("versionInfo");
    let updateContent = [];
    let versionIndex = -1;
    for (let j = 0; j < versionInfo.versionList.length; j++) {
      if (versionInfo.versionList[j].version === versionInfo.storeVersion) {
        versionIndex = j;
        break;
      }
    }
    while (++versionIndex < versionInfo.versionList.length) {
      updateContent.push(versionInfo.versionList[versionIndex]);
    }
    this.updateInfoList = updateContent.reverse();
    this.updateInfoShow = !!this.updateInfoList.length;

    // 强制检查的信息
    let appInfo = await AutoWeb.autoPromise("getAppInfo");
    if (appInfo.needForceUpdate) {
      Dialog.alert({
        title: "提示",
        message: appInfo.msg,
      }).then(() => {
        AutoWeb.autoPromise("exit");
      });
    } else if (appInfo.msg) {
      Dialog.alert({
        title: "提示",
        message: appInfo.msg,
      }).then(() => {});
    }
  },
};
</script>
<style scoped>
.popup_version_title {
  margin-bottom: 5px;
}
.popup_version_version {
  margin-top: 15px;
}
.popup_version_desc {
  padding-left: 10px;
  white-space: pre-wrap;
}
</style>
<style>
html {
  width: 100%;
  height: 100%;
}
body {
  background-color: #f4f5f7;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-in-out;
  width: 100%;
  position: absolute;
  overflow: hidden;
}
.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter-to {
  transform: translate3d(0, 0, 0);
}
.slide-left-leave {
  transform: translate3d(0, 0, 0);
}
.slide-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.slide-right-enter {
  transform: translate3d(-100%, 0, 0);
}
.slide-right-enter-to {
  transform: translate3d(0, 0, 0);
}
.slide-right-leave {
  transform: translate3d(0, 0, 0);
}
.slide-right-leave-to {
  transform: translate3d(100%, 0, 0);
}
.flip-list-move {
  transition: transform 0.2s;
}
.no-move {
  transition: transform 0s;
}
.sortable-chosen.sortable-fallback.sortable-drag {
  opacity: 0.3 !important;
}
.rv {
  width: 100%;
  height: 100%;
}
.rv_inner {
  padding: 46px 0px 0px 0px;
}
.rv_box {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
}
.navbar_box {
  z-index: 1;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0px;
}
.tabbar_box {
  z-index: 1;
  position: fixed;
  left: 0;
  bottom: 0;
}
.itemBox .van-cell:active {
  background-color: #f2f3f5;
}
</style>