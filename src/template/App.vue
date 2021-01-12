<template>
  <div>
    <van-nav-bar
      title="ASSTTYYS NG"
      :left-arrow="showNavLeft"
      @click-left="navLeft"
      fixed
    />
    <router-view class="rv"></router-view>
    <van-tabbar fixed route>
      <van-tabbar-item replace to="/schemeList" icon="home-o">方案列表</van-tabbar-item>
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
      showNavLeft: false
    }
  },
  methods: {
    navLeft() {
      this.$router.back();
    },
    toggleShowNavLeft(shown) {
      if(shown === undefined) {
        this.showNavLeft = !this.showNavLeft;
      } else {
        this.showNavLeft = !!shown;
      }
    }
  },
  mounted() {
    var self = this;
    this.$EventBus.$on('toggleShowNavLeft', data => {
      self.toggleShowNavLeft(data);
    })
  }
};
</script>

<style>
body {
  background-color: #f7f8fa;
}
</style>
<style scoped>
.rv {
  margin: 46px 0px 50px 0px;
}
</style>