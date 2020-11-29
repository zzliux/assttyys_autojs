<template>
  <div>
    <van-nav-bar
      title="ASSTTYYS NG"
      left-arrow
      @click-left="navLeft"
      fixed
    />
    <router-view class="rv"></router-view>
    <van-tabbar fixed route>
      <van-tabbar-item replace to="/home" icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item replcae to="/search" icon="search">Search</van-tabbar-item>
      <van-tabbar-item replace to="/me" icon="friends-o">Me</van-tabbar-item>
      <van-tabbar-item replace to="/settings" icon="setting-o">Settings</van-tabbar-item>
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
  },
  methods: {
    navLeft() {
      this.$router.back();
    }
  },
  mounted() {
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