<template>
  <div style="width: 100%; height: 100%;">
    <div class="rv_box">
      <transition :name="transitionName">
        <router-view class="rv" :status-bar-height="statusBarHeight"></router-view>
      </transition>
    </div>
    <!-- <div class="tabbar_box">
      <van-tabbar route>
        <van-tabbar-item replace to="/" icon="orders-o">方案列表</van-tabbar-item>
        <van-tabbar-item replace to="/me" icon="friends-o">我</van-tabbar-item>
      </van-tabbar>
    </div> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem, NavBar } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);

export default {
  data() {
    return {
      transitionName: "slide-right",
      statusBarHeight: 0
    };
  },
  methods: {
    navLeft() {
      this.$router.back();
    },
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
  async mounted() {
    this.statusBarHeight = (await AutoWeb.autoPromise('getStatusBarHeight')) * 0.7;
  },
};
</script>

<style>
html {
  width: 100%;
  height: 100%;
}
body {
  background-color: #f7f8fa;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all .3s ease-in-out;
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
  transition: transform .2s;
}
.no-move {
  transition: transform 0s;
}
.sortable-chosen.sortable-fallback.sortable-drag {
  opacity: .3 !important;
}
.rv {
  width: 100%;
}
.rv_inner {
  padding: 46px 0px 50px 0px;
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