<template>
  <div>
    <div class="navbar_box">
      <van-nav-bar title="ASSTTYYS NG" :style="'padding-top: ' + (statusBarHeight || 0) + 'px'">
        <template #left>
          <van-icon name="wap-nav" size="18" @click="$router.push('/settings')" />
          <!-- <van-icon name="success" size="18" @click="saveScheme" /> -->
        </template>
        <template #right>
          <!-- <van-icon name="todo-list-o" size="18" @click="exportAndImportModel = true"/> -->
          <span size="18" @click="exportAndImportModel = true">更多</span>
        </template>
      </van-nav-bar>
    </div>
    <div class="rv_inner" :style="'padding-top: '+ (46 + (statusBarHeight || 0)) + 'px; padding-bottom: 6px;'">
      <van-dropdown-menu>
        <van-dropdown-item
          v-model="filterGroupName"
          :options="filterGroupNames"
          @open="filterGroupNameOpen"
          @change="filterGroupNameChange"
        />
      </van-dropdown-menu>
      <van-cell-group class="itemBox" title="方案列表" style="background: transparent">
        <draggable
          :scroll-sensitivity="100"
          :force-fallback="true"
          v-model="schemeList"
          item-key="schemeName"
          handle=".handle-area"
          v-bind="dragOptions"
          @end="saveSchemeList"
          style="padding: 0px 5px"
          class="item-list-container"
        >
          <template #item="{ element, index }">
            <div class="item-container">
              <van-swipe-cell
                class="item-line"
                center
                @open="itemOpen"
                @close="itemClose"
                :before-close="itemBeforeClose"
                :stop-propagation="true"
                :disabled="filterGroupName !== '全部'"
              >
                <span>
                  <div v-if="element.groupName" class="group-color" :style="'background-color: ' + getGroupColor(element.groupName)"></div>
                  <div
                    class="item van-cell van-cell--center"
                    @click="schemeClickEvent($event, element)"
                    :style="'margin-left: ' + (element.groupName ? '6px' : '0px')"
                  >
                    <div class="van-cell__title item-title" :style="'margin-left: ' + (!element.groupName ? '6px' : '0px')">{{ element.schemeName }}</div>
                    <div class="van-cell__value item-value" :style="'margin-right: ' + (element.groupName ? '6px' : '0px')">
                      <span v-if="filterGroupName === '全部'" class="handle-area"
                        ><van-icon class="handle" size="18" name="bars"
                      /></span>
                      <span class="star-area">
                        <van-icon
                          class="star"
                          size="18"
                          :name="element.star ? 'star' : 'star-o'"
                          :color="element.star ? '#1989fa' : null"
                          @click="schemeStarEvent($event, element)"
                        />
                      </span>
                    </div>
                  </div>
                </span>
                <template #right
                  ><van-button
                    type="danger"
                    square
                    text="删除"
                    v-if="!element.inner"
                    @click="swipeCellCurrentAction = filterGroupName === '全部' ? 'delete' : null ; swipeCellCurrentIndex = index"
                  /><van-button
                    type="primary"
                    square
                    text="复制"
                    @click="swipeCellCurrentAction = filterGroupName === '全部' ? 'copy' : null; swipeCellCurrentIndex = index"
                /><van-button
                    type="warning"
                    square
                    text="修改"
                    @click="swipeCellCurrentAction = filterGroupName === '全部' ? 'modify' : null; swipeCellCurrentIndex = index"
                /></template>
              </van-swipe-cell>
            </div>
          </template>
        </draggable>
        <div v-if="filterGroupName === '全部'" style="margin:5px 10px 5px 10px; border-radius:5px; overflow: hidden; box-shadow: 1px 1px 1px #eaeaea">
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
        v-model:show="schemeNameInputShow"
        :before-close="schemeNameInputBeforeClose"
        :title="'copy' === schemeNameInputType ? '复制方案' : ('add' === schemeNameInputType ? '新增方案' : '修改方案')"
        show-cancel-button
      >
        <van-field
          :label="'add' === schemeNameInputType ? '方案名' : '新的方案名'"
          v-model="newSchemeName"
          placeholder="请输入..."
        />
        <van-field
          label="分组名"
          v-model="newGroupName"
          placeholder="请输入..."
        >
            <template #button>
              <van-button size="small" type="default" @click="newGroupNameSelect">选择</van-button>
            </template>
        </van-field>
      </van-dialog>
    </div>
    <!-- 分组名选择器 -->
    <van-popup v-model:show="selectNewGroupNameShow" position="bottom">
      <van-picker
        show-toolbar
        :columns="groupNameList"
        @confirm="selectNewGroupNameConfirm"
        @cancel="selectNewGroupNameShow = false"
        :default-index="groupNameIndex"
      />
    </van-popup>
    <export-scheme-dialog
      v-model:show="exportModel"
      :schemeList="schemeList"
    />
    <import-scheme-dialog
      v-model:show="importModel"
      :importCallback="schemeImportCallback"
    />
    <!-- 啊这个不知道用什么实现比较好了 -->
    <van-popup
      v-model:show="exportAndImportModel"
      :overlay-style="{ backgroundColor: 'rgba(0, 0, 0, 0)' }"
      style="background-color: rgba(0, 0, 0, 0);"
      position="top"
      @click="exportAndImportModel = false"
    >
      <div :style="`display: inline-block; border: #ccc 1px solid; float: right; background-color: #fff; font-size: 14px; margin-top: ${statusBarHeight + 46}px;`">
        <div class="import-export-btn" @click="importModel = true">导入方案</div>
        <div class="import-export-btn" @click="exportModel = true">导出方案</div>
        <div class="import-export-btn" @click="$router.push('/schedule/list')">定时任务</div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import ExportSchemeDialog from "../components/ExportSchemeDialog.vue";
import ImportSchemeDialog from "../components/ImportSchemeDialog.vue";
import draggable from "vuedraggable";
import { mergeSchemeList } from "../../common/toolWeb";
import dSchemeList from "../../common/schemeList";
import groupColor from "../../common/groupColors";
import { merge } from '@/common/tool';
import { showNotify, showConfirmDialog } from 'vant';

export default {
  name: 'schemeList',
  data() {
    return {
      itemOpenList: [],
      swipeCellCurrentAction: null,
      swipeCellCurrentIndex: null,
      schemeNameInputShow: false,
      schemeNameInputType: null,
      newSchemeName: null,
      newScheme: null,
      newGroupName: null,
      schemeList: [],
      selectNewGroupNameShow: false,
      groupNameList: [],
      groupNameIndex: 0,
      exportAndImportModel: false,
      exportModel: false,
      importModel: false,

      filterGroupNames: [{ text: '全部', value: '全部' }],
      filterGroupName: '全部'
    };
  },
  props: {
    statusBarHeight: Number
  },
  components: {
    draggable,
    ExportSchemeDialog,
    ImportSchemeDialog,
  },
  async mounted() {
    var self = this;
    const savedSchemeList = await AutoWeb.autoPromise("getSchemeList", null)
    self.schemeList = mergeSchemeList(savedSchemeList, dSchemeList);
    // 获取后保存一下方案列表，避免出现展示内容与保存内容不一样的情况
    AutoWeb.autoPromise('saveSchemeList', self.schemeList);
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
      AutoWeb.autoPromise('saveSchemeList', this.schemeList);
    },
    schemeClickEvent(e, item) {
      // console.log(this.itemOpenList);
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
    async schemeStarEvent(e, item) {
      const newScheme = await AutoWeb.autoPromise('starScheme', {
        star: !item.star,
        schemeName: item.schemeName,
      });
      item.star = newScheme.star;
      // item.star = !item.star;
      // this.saveSchemeList();
      // if (item.star) {
      //   AutoWeb.autoPromise('toast', "收藏成功");
      // } else {
      //   AutoWeb.autoPromise('toast', "已取消收藏");
      // }
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
            return true;
          }
          break;
        case 'right':
          if ('delete' === this.swipeCellCurrentAction) {
            showConfirmDialog({
              message: '确定删除吗？',
            }).then(() => {
              // option.instance.close();
              this.schemeList.splice(this.swipeCellCurrentIndex, 1);
              this.saveSchemeList();
              AutoWeb.autoPromise('toast', "已删除");
              this.swipeCellCurrentAction = null;
            }).catch(()=>{
              this.swipeCellCurrentAction = null;
            });
          } else if ('copy' === this.swipeCellCurrentAction) {
            this.schemeNameInputType = 'copy';
            this.schemeNameInputShow = true;
            this.newScheme = merge({}, this.schemeList[this.swipeCellCurrentIndex]);
            this.newSchemeName = this.newScheme.schemeName;
            this.newGroupName = this.newScheme.groupName;
          } else if ('modify' === this.swipeCellCurrentAction) {
            this.schemeNameInputType = 'modify';
            this.newSchemeName = this.schemeList[this.swipeCellCurrentIndex].schemeName;
            this.schemeNameInputShow = true;
            this.newGroupName = this.schemeList[this.swipeCellCurrentIndex].groupName;
          }
          break;
      }
    },
    schemeNameInputBeforeClose(action, done) {
      if ('cancel' === action) {
        this.newScheme = null;
        this.newSchemeName = null;
        this.newGroupName = null;
        this.swipeCellCurrentAction = null;
        return true;
      } else {
        if (!this.newSchemeName) {
          showNotify({ type: 'warning', message: '请输入方案名。' });
          return false;
        }
        
        if ('copy' === this.schemeNameInputType) {
          for (let i = 0; i < this.schemeList.length; i++) {
            if (this.schemeList[i].schemeName == this.newSchemeName) {
              showNotify({ type: 'warning', message: '存在重复的方案名，请重新输入。' });
              return false;
            }
          }
          this.newScheme.schemeName = this.newSchemeName;
          this.newScheme.groupName = this.newGroupName;
          this.addScheme(this.newScheme);
          AutoWeb.autoPromise('toast', "已复制");
          this.swipeCellCurrentAction = null;
          this.newScheme = null;
          this.newSchemeName = null;
          this.newGroupName = null;
          return true;
        } else if ('add' == this.schemeNameInputType) {
          for (let i = 0; i < this.schemeList.length; i++) {
            if (this.schemeList[i].schemeName == this.newSchemeName) {
              showNotify({ type: 'warning', message: '存在重复的方案名，请重新输入。' });
              return false;
            }
          }
          this.addScheme({
            id: null,
            schemeName: this.newSchemeName,
            groupName: this.newGroupName,
            star: false,
            list: [],
            config: {},
            commonConfig: {}
          });
          this.swipeCellCurrentAction = null;
          this.newScheme = null;
          this.newSchemeName = null;
          this.newGroupName = null;
          return true;
        } else if ('modify' === this.schemeNameInputType) {
          this.schemeList[this.swipeCellCurrentIndex].schemeName = this.newSchemeName;
          this.schemeList[this.swipeCellCurrentIndex].groupName = this.newGroupName;
          this.saveSchemeList();
          AutoWeb.autoPromise('toast', '修改成功');
          this.swipeCellCurrentAction = null;
          this.newScheme = null;
          this.newSchemeName = null;
          this.newGroupName = null;
          return true;
        }
      }
    },
    newGroupNameSelect() {
      let gSet = {};
      this.schemeList.forEach(s => {
        if (s.groupName) gSet[s.groupName] = 1;
      });
      this.groupNameList = Object.keys(gSet).map(item => ({text: item, value: item}));
      this.selectNewGroupNameShow = true;
      if (this.newGroupName) {
        for (let i = 0; i < this.groupNameList.length; i++) {
          if (this.groupNameList[i] === this.newGroupName) {
            this.groupNameIndex = i;
            break;
          }
        }
      }
    },
    selectNewGroupNameConfirm({ selectedOptions }, _index) {
      this.newGroupName = selectedOptions[0].text;
      this.selectNewGroupNameShow = false;
    },
    getGroupColor(groupName) {
      // 计算hash值
      let sum = 0;
      for (let i = 0; i < groupName.length; i++) {
        sum += groupName.charCodeAt(i);
      }
      return groupColor[sum % groupColor.length];
    },
    async schemeImportCallback() {
      this.schemeList = await AutoWeb.autoPromise("getSchemeList");
    },
    async filterGroupNameOpen() {
      this.filterGroupNames = ['全部', ...await AutoWeb.autoPromise('getGroupNames')].map(item => ({ text: item, value: item }));
    },
    async filterGroupNameChange() {
      const left = await AutoWeb.autoPromise("getSchemeList");
      if (this.filterGroupName === '全部') {
        this.schemeList = left;
        return;
      }

      // 1. 根据groupName过滤
      const filterd = [];
      // console.log(this.filterGroupName);
      for (let i = 0 ; i < left.length; i++) {
        if (left[i].groupName === this.filterGroupName) {
          filterd.push(left[i]);
          left.splice(i, 1);
          i--;
        }
      }

      // 2. 查询当前方案内功能的配置中type为scheme（好麻烦，先用配置key中包含scheme的就遍历），的配置的value
      for (let i = 0; i < filterd.length; i++) {
        const conf = filterd[i].config;
        for (let key in conf) {
          for (let keyName in conf[key]) {
            if (/scheme/i.test(keyName)) {
              const v = conf[key][keyName];
              for (let j = 0; j < left.length; j++) {
                if (left[j].schemeName === v) {
                  filterd.push(left[j]);
                  left.splice(j, 1);
                  break;
                }
              }
            }
          }
        }
      }
      this.schemeList = filterd;
    },
  },
};
</script>

<style scoped>
@media (orientation: landscape) {
  .item-container {
    flex-basis: 50%;
  }
}
@media (orientation: portrait) {
  .item-container {
    flex-basis: 100%;
  }
}

.item-list-container {
  display: flex;
  flex-wrap: wrap;
}
.item-line {
  margin:5px 5px 0px 5px;
  border-radius:5px;
  overflow: hidden;
  box-shadow: 1px 1px 1px #eaeaea;
}
.star-area,
.handle-area {
  margin-top: 8px;
  height: 24px;
  position: absolute;
  top: 4px;
}
.handle-area {
  right: 35px;
}
.star-area {
  right: 0px;
}
.item {
  height: 44px;
}
.item-title {
  display: inline-block;
  height: 44px;
  line-height: 44px;
  flex: 3;
}
.item-value {
  float: right;
  height:44px;
}
.group-color {
  width: 6px;
  height: 100%;
  position: absolute;
  background-color: #ff00ff
}
.import-export-btn {
  transition: all .1s;
  user-select: none;
  padding: 5px;
  box-shadow: 0px 1px 1px #ccc;
}
.import-export-btn:hover {
  background: #ccc;
}
</style>
