<template>
  <div>
    <div class="navbar_box">
      <van-nav-bar
        title="ASSTTYYS NG"
      >
        <template #right>
          <van-icon class-prefix="iconfont" name="fabusekuai" size="18" color="#1989fa"/>
        </template>
      </van-nav-bar>
    </div>
    <div class="rv_inner">
      <van-cell-group class="itemBox" title="方案列表">
        <draggable
          :scroll-sensitivity="100"
          :force-fallback="true"
          v-model="schemeList"
          handle=".handle-area"
          v-bind="dragOptions"
          @end="saveSchemeList"
        >
          <van-cell
            class="item"
            center
            v-for="item in schemeList"
            :key="item.id"
            :title="item.schemeName"
            @click="schemeClickEvent($event, item)"
          >
            <template>
              <span class="handle-area"><van-icon class="handle" size="18" name="bars"/></span>
              <span class="star-area">
                <van-icon
                  class="star"
                  size="18"
                  :name="item.star ? 'star' : 'star-o'"
                  :color="item.star ? '#1989fa' : null"
                  @click="schemeStarEvent($event, item)"
                />
              </span>
            </template>
          </van-cell>
        </draggable>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup, Icon, Toast } from "vant";
import draggable from "vuedraggable";
import dSchemeList from "../../common/schemeList";
import _ from "lodash";

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Toast);

export default {
  data() {
    return {
      schemeList: _.cloneDeep(dSchemeList),
    };
  },
  components: {
    draggable,
  },
  mounted() {
    this.$EventBus.$emit("toggleShowNavLeft", false);
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    saveSchemeList() {
      prompt("saveSchemeList", JSON.stringify(this.schemeList));
    },
    schemeClickEvent(e, item) {
      if (e.target.className.match(/handle|star/)) {
        return;
      }
      this.$router.push({
        path: "/funcList",
        query: {
          schemeName: item.schemeName,
        },
      });
    },
    schemeStarEvent(e, item) {
      item.star = !item.star;
      this.saveSchemeList();
      if (item.star) {
        Toast("收藏成功");
      } else {
        Toast("已取消收藏");
      }
    },
  },
};
</script>

<style scoped>
.item {
  height: 48px;
}
.star-area,
.handle-area {
  margin-top: 8px;
  height: 24px;
  width: 36px;
  display: inline-block;
}
</style>
