<template>
  <div style="width: 100%; height: 100%">
    <van-nav-bar
      title="ASSTTYYS NG"
      :left-arrow="showNavLeft"
      @click-left="navLeft"
      fixed
    />
    <div style="position: relative; overflow-x: hidden; width: 100%; height: 100%">
      <transition :name="transitionName">
        <router-view class="rv"></router-view>
      </transition>
    </div>
    <van-tabbar fixed route>
      <van-tabbar-item replace to="/schemeList" icon="orders-o">方案列表</van-tabbar-item>
      <van-tabbar-item replace to="/me" icon="friends-o">我</van-tabbar-item>
    </van-tabbar>
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
      transitionName: "",
      showNavLeft: false,
    };
  },
  methods: {
    navLeft() {
      this.$router.back();
    },
    toggleShowNavLeft(shown) {
      if (shown === undefined) {
        this.showNavLeft = !this.showNavLeft;
      } else {
        this.showNavLeft = !!shown;
      }
    },
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      console.log(arguments);
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }

    },
  },
  mounted() {
    var self = this;
    this.$EventBus.$on("toggleShowNavLeft", (data) => {
      self.toggleShowNavLeft(data);
    });
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
.slide-right-leave-acive {
  transition: all .3s;
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
  transform: translate3d(100%, 0, 0);
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
  transform: translate3d(-100%, 0, 0);
}
</style>
<style scoped>
.rv {
  margin: 46px 0px 50px 0px;
  overflow-x: hidden;
}
</style>