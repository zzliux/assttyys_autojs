<template>
  <div>
    <div class="navbar_box">
      <van-nav-bar
        title="ASSTTYYS NG" 
        left-arrow
        @click-left="$router.back()"
        :style="'padding-top: ' + (statusBarHeight || 0) + 'px'">
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

    <div class="rv_inner" :style="'padding-top: '+ (46 + (statusBarHeight || 0)) + 'px'">
        <h1>设置界面，待开发</h1>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup, Icon, Button, Dialog, Field, Notify } from "vant";
import _ from "lodash";

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Field);
Vue.use(Notify);

export default {
  data() {
    return {
        
    };
  },
  props: {
    statusBarHeight: Number
  },
  mounted() {
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
