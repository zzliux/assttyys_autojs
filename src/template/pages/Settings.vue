<template>
  <div>
    <div class="navbar_box">
      <van-nav-bar
        title="ASSTTYYS NG"
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
          center
        >
          <div class="item-title">
            {{item.desc}}
          </div>
          <div class="item-value">
            <van-switch
              class="itemSwitch"
              @change="toggleSwitchEvent($event, item)"
              v-model="item.enabled"
              size="18"
            />
          </div>
        </div>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup, Icon, Button, Dialog, Field, Notify, Switch } from "vant";
import _ from "lodash";

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Field);
Vue.use(Notify);
Vue.use(Switch);

export default {
  data() {
    return {
      settings: [],
    };
  },
  props: {
    statusBarHeight: Number,
  },
  async mounted() {
    let settings = await AutoWeb.autoPromise('getSettings');
    this.settings = settings;
  },
  computed: {},
  methods: {
    async toggleSwitchEvent(e, item) {
      await AutoWeb.autoPromise('saveSetting', item);
    },
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
  border-radius:10px;
  background-color: #fff;
  overflow: hidden;
  padding: 0px 16px;
  font-size: 14px;
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
