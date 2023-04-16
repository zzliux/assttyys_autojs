<template>
  <div style="width: 100%; height: 100%">
    <div class="rv_box">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" appear>
          <component :is="Component" :statusBarHeight="statusBarHeight"/>
        </transition>
      </router-view>
    </div>
    <van-popup
      closeable
      v-model:show="updateInfoShow"
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

<script setup>
import { showDialog } from 'vant';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const updateInfoList = ref([]);
const updateInfoShow = ref(false);
const transitionName = ref("slide-right");
const statusBarHeight = ref(20);
const $route = useRoute();

watch(() => $route.meta, (toMeta, fromMeta) => {
  //如果to索引大于from索引,判断为前进状态,反之则为后退状态
  if (toMeta.index > fromMeta.index) {
    //设置动画名称
    transitionName.value = "slide-left";
  } else {
    transitionName.value = "slide-right";
  }
});

(async function () {
  statusBarHeight.value = await AutoWeb.autoPromise("getStatusBarHeight");

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
  updateInfoList.value = updateContent.reverse();
  updateInfoShow.value = !!updateInfoList.value.length;

  // 强制检查的信息
  let appInfo = await AutoWeb.autoPromise("getAppInfo");
  if (appInfo.needForceUpdate) {
    showDialog({
      title: "提示",
      message: appInfo.msg,
    }).then(() => {
      AutoWeb.autoPromise("exit");
    });
  } else if (appInfo.msg) {
    showDialog({
      title: "提示",
      message: appInfo.msg,
    }).then(() => {});
  }
})();

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
  /* height: 100%; */
}
body {
  background-color: #f4f5f7;
  /* overflow: hidden; */
  width: 100%;
  /* height: 100%; */
}
body > #app {
  width: 100%;
  /* height: 100%; */
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
.slide-left-enter-from {
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
.slide-right-enter-from {
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