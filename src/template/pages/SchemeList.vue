<template>
  <div>
    <div class="navbar_box">
      <van-nav-bar title="ASSTTYYS NG" :style="'padding-top: ' + (statusBarHeight || 0) + 'px'">
         <template #left>
          <van-icon name="wap-nav" size="18" @click="$router.push('/settings')" />
          <!-- <van-icon name="success" size="18" @click="saveScheme" /> -->
        </template>
      </van-nav-bar>
    </div>
    <div class="rv_inner" :style="'padding-top: '+ (46 + (statusBarHeight || 0)) + 'px'">
      <van-cell-group class="itemBox" title="方案列表" style="background: transparent">
        <draggable
          :scroll-sensitivity="100"
          :force-fallback="true"
          v-model="schemeList"
          handle=".handle-area"
          v-bind="dragOptions"
          @end="saveSchemeList"
        >
          <div
            v-for="(item, index) of schemeList"
            :key="index"
            style="margin:5px 10px 5px 10px; border-radius:10px; overflow: hidden; box-shadow: 1px 1px 2px #aaa;"
          >
            <van-swipe-cell
              center
              @open="itemOpen"
              @close="itemClose"
              :before-close="itemBeforeClose"
              :stop-propagation="true"
            >
              <template>
                <div
                  class="item van-cell van-cell--center"
                  @click="schemeClickEvent($event, item)"
                >
                  <div class="van-cell__title">{{ item.schemeName }}</div>
                  <div class="van-cell__value">
                    <span class="handle-area"
                      ><van-icon class="handle" size="18" name="bars"
                    /></span>
                    <span class="star-area">
                      <van-icon
                        class="star"
                        size="18"
                        :name="item.star ? 'star' : 'star-o'"
                        :color="item.star ? '#1989fa' : null"
                        @click="schemeStarEvent($event, item)"
                      />
                    </span>
                  </div>
                </div>
              </template>

              <template #right
                ><van-button
                  type="danger"
                  square
                  text="删除"
                  v-if="!item.inner"
                  @click="swipeCellCurrentAction = 'delete'; swipeCellCurrentIndex = index"
                /><van-button
                  type="info"
                  square
                  text="复制"
                  @click="swipeCellCurrentAction = 'copy'; swipeCellCurrentIndex = index"
              /><van-button
                  type="warning"
                  square
                  text="修改"
                  @click="swipeCellCurrentAction = 'modify'; swipeCellCurrentIndex = index"
              /></template>
            </van-swipe-cell>
          </div>
        </draggable>
        <div style="margin:5px 10px 5px 10px; border-radius:10px; overflow: hidden; box-shadow: 1px 1px 2px #aaa">
          <van-cell class="item" center @click="addSchemeClickEvent($event)">
            <div style="text-align: center; height: 24px;">
              <van-icon
                name="plus"
                style="font-weight: bolder; vertical-align: middle"
              />
              <span style="position: relative; top: 2px">添加方案</span>
            </div>
          </van-cell>
        </div>
      </van-cell-group>

      <van-dialog 
        v-model="schemeNameInputShow"
        :before-close="schemeNameInputBeforeClose"
        :title="'copy' === schemeNameInputType ? '复制方案' : ('add' === schemeNameInputType ? '新增方案' : '修改方案')"
        show-cancel-button
      >
        <van-field
          :label="'add' === schemeNameInputType ? '方案名' : '新的方案名'"
          v-model="newSchemeName"
          placeholder="请输入..."
        >
        </van-field>
      </van-dialog>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, SwipeCell, CellGroup, Icon, Button, Dialog, Field, Notify } from "vant";
import draggable from "vuedraggable";
import { mergeSchemeList } from "../../common/tool";
import dSchemeList from "../../common/schemeList";
import _ from "lodash";

Vue.use(Cell);
Vue.use(SwipeCell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Field);
Vue.use(Notify);

export default {
  data() {
    return {
      itemOpenList: [],
      swipeCellCurrentAction: null,
      swipeCellCurrentIndex: null,
      schemeNameInputShow: false,
      schemeNameInputType: null,
      newSchemeName: null,
      newScheme: null,
      schemeList: [],
    };
  },
  props: {
    statusBarHeight: Number
  },
  components: {
    draggable,
  },
  mounted() {
    var self = this;
    AutoWeb.auto("getSchemeList", null, function (savedSchemeList) {
      self.schemeList = mergeSchemeList(savedSchemeList, dSchemeList);
    });
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  methods: {
    saveSchemeList() {
      AutoWeb.auto('saveSchemeList', this.schemeList);
    },
    schemeClickEvent(e, item) {
      console.log(this.itemOpenList);
      if (this.itemOpenList.length > 0) return;
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
    schemeLongClickEvent(e, i) {},
    schemeStarEvent(e, item) {
      item.star = !item.star;
      this.saveSchemeList();
      if (item.star) {
        AutoWeb.auto('toast', "收藏成功");
      } else {
        AutoWeb.auto('toast', "已取消收藏");
      }
    },
    addSchemeClickEvent(e) {
      this.schemeNameInputType = 'add';
      this.newSchemeName = null;
      this.newScheme = null;
      this.schemeNameInputShow = true;
    },
    addScheme(scheme, callback) {
      var maxId = 0;
      this.schemeList.forEach(item => {
        if (maxId < item.id) {
          maxId = item.id;
        }
      });
      scheme.id = maxId + 1;
      scheme.star = false;
      scheme.inner = false; // 新增的都是用户方案
      this.schemeList.push(scheme);
      this.saveSchemeList();
    },
    itemOpen() {
      // setTimeout(() => { this.itemOpenList.push(0) }, 200)
      this.itemOpenList.push(0);
    },
    itemClose() {
      setTimeout(() => { this.itemOpenList.pop() }, 200)
      // this.itemOpenList.pop();
    },
    itemBeforeClose(option) {
      switch (option.position) {
        case 'left':
        case 'cell':
        case 'outside':
          if (!this.swipeCellCurrentAction) {
            option.instance.close();
          }
          break;
        case 'right':
          if ('delete' === this.swipeCellCurrentAction) {
            Dialog.confirm({
              message: '确定删除吗？',
            }).then(() => {
              option.instance.close();
              this.schemeList.splice(this.swipeCellCurrentIndex, 1);
              this.saveSchemeList();
              AutoWeb.auto('toast', "已删除");
              this.swipeCellCurrentAction = null;
            }).catch(()=>{
              this.swipeCellCurrentAction = null;
            });
          } else if ('copy' === this.swipeCellCurrentAction) {
            this.schemeNameInputType = 'copy';
            this.schemeNameInputShow = true;
            this.newScheme = _.cloneDeep(this.schemeList[this.swipeCellCurrentIndex]);
          } else if ('modify' === this.swipeCellCurrentAction) {
            this.schemeNameInputType = 'modify';
            this.newSchemeName = this.schemeList[this.swipeCellCurrentIndex].schemeName;
            this.schemeNameInputShow = true;
          }
          break;
      }
    },
    schemeNameInputBeforeClose(action, done) {
      if ('cancel' === action) {
        this.newScheme = null;
        this.newSchemeName = null;
        this.swipeCellCurrentAction = null;
        done(true);
      } else {
        if (!this.newSchemeName) {
          Notify({ type: 'warning', message: '请输入方案名。' });
          done(false);
          return;
        }
        
        if ('copy' === this.schemeNameInputType) {
          for (let i = 0; i < this.schemeList.length; i++) {
            if (this.schemeList[i].schemeName == this.newSchemeName) {
              Notify({ type: 'warning', message: '存在重复的方案名，请重新输入。' });
              done(false);
              return;
            }
          }
          this.newScheme.schemeName = this.newSchemeName;
          this.addScheme(this.newScheme);
          AutoWeb.auto('toast', "已复制");
          this.swipeCellCurrentAction = null;
          done(true);
          this.newScheme = null;
          this.newSchemeName = null;
        } else if ('add' == this.schemeNameInputType) {
          for (let i = 0; i < this.schemeList.length; i++) {
            if (this.schemeList[i].schemeName == this.newSchemeName) {
              Notify({ type: 'warning', message: '存在重复的方案名，请重新输入。' });
              done(false);
              return;
            }
          }
          this.addScheme({
            id: null,
            schemeName: this.newSchemeName,
            star: false,
            list: [],
            config: {},
            commonConfig: {}
          });
          this.swipeCellCurrentAction = null;
          done(true);
          this.newScheme = null;
          this.newSchemeName = null;
        } else if ('modify' === this.schemeNameInputType) {
          this.schemeList[this.swipeCellCurrentIndex].schemeName = this.newSchemeName;
          this.saveSchemeList();
          AutoWeb.auto('toast', '修改成功');
          this.swipeCellCurrentAction = null;
          done(true);
          this.newScheme = null;
          this.newSchemeName = null;
        }
      }
    }
  },
};
</script>

<style scoped>
.star-area,
.handle-area {
  margin-top: 8px;
  height: 24px;
  width: 36px;
  display: inline-block;
}
.item {
  height: 44px;
}
</style>
