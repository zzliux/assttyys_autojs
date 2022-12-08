<template>
  <div style="height: 100%; width: 100%">
    <div class="navbar_box">
      <van-nav-bar title="定时任务列表 | ASSTTYYS NG" left-arrow @click-left="$router.back()"
        :style="'padding-top: ' + (statusBarHeight || 0) + 'px'">
        <!-- <template #right>
          <van-icon name="setting-o" size="18" @click="showCommonConfig($event, commonConfig)" />
        </template> -->
      </van-nav-bar>
    </div>

    <div class="rv_inner" :style="'padding-top: '+ (46 + (statusBarHeight || 0)) + 'px'">
      <van-cell-group class="itemBox" :title="'定时任务'" style="background: transparent">
        <div v-for="(item, index) in scheduleList" :key="item.id" class="item" center>
          <van-swipe-cell center @open="itemOpen" @close="itemClose" :before-close="itemBeforeClose"
            :stop-propagation="true" :disabled="item.checked">
            <template>
              <div class="item-header" @click="showConfig($event, item)">
                <div class="item-title">{{item.id + ' ' + item.name}}</div>
                <div class="item-value">
                  <span class="handle-area"></span>
                  <van-switch class="itemSwitch" v-model="item.checked" size="18"
                    @change="onScheduleChange($event, item)" />
                </div>
                <div v-if="item.desc" class="item-desc">{{item.desc}}</div>
                <div class="item-desc">最近执行时间: {{ item.lastRunTime }}</div>
              </div>
            </template>
            <template #right>
              <van-button type="danger" square text="删除" v-if="!item.inner"
                @click="swipeCellCurrentAction = 'delete'; swipeCellCurrentIndex = index" />
              <van-button type="warning" square text="修改"
                @click="swipeCellCurrentAction = 'modify'; swipeCellCurrentIndex = index" />
            </template>
          </van-swipe-cell>
          <div v-if="item.id === showConfigId" class="item-config">
            <van-field label="运行方案" label-width="70%" :disabled="item.checked"
              :rules="[{ required: true, message: '必填' }]">
              <template #input>
                <div style="width: 100%;" :style="item.checked ? 'color: rgb(200, 195, 188)': ''"
                  @click="showItemConfigScheme($event, item)">
                  {{ item.config.scheme }}
                </div>
              </template>
            </van-field>
            <van-field label="执行时间(秒分时日月周-cron格式, 详见http://cron.ciding.cc/)" label-width="70%" :disabled="item.checked"
              :rules="[{ required: true, message: '必填' }]">
              <template #input>
                <div class="van-field__body">
                  <input type="text" :disabled="item.checked" v-model="item.config.cron" class="van-field__control" />
                </div>
              </template>
            </van-field>
          </div>
        </div>
        <div style="margin:5px 10px 5px 10px; border-radius:5px; overflow: hidden; box-shadow: 1px 1px 1px #eaeaea">
          <van-cell class="itemAdd" center @click="addScheduleClickEvent($event)">
            <div style="text-align: center; height: 24px;">
              <van-icon name="plus" style="font-weight: bolder; vertical-align: middle" />
              <span style="position: relative; top: 2px">添加定时任务</span>
            </div>
          </van-cell>
        </div>
      </van-cell-group>
    </div>
    <van-popup v-model="configItemItemShowPicker" position="bottom">
      <van-picker show-toolbar :columns="configItemItemPickerList" @confirm="configItemItemPickerConfirm"
        @cancel="configItemItemShowPicker = false" :default-index="curItemItemIndex"></van-picker>
    </van-popup>
    <van-dialog v-model="scheduleNameInputShow" :before-close="scheduleNameInputBeforeClose"
      :title="'add' === scheduleNameInputType ? '新增定时任务' : '修改定时任务'"
      show-cancel-button>
      <van-field :label="'add' === scheduleNameInputType ? '定时任务名' : '新的定时任务名'" v-model="addScheduleForm.name"
        placeholder="请输入..." />
      <van-field label="描述" v-model="addScheduleForm.desc" placeholder="请输入..." />
    </van-dialog>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Cell, CellGroup, Icon, Switch, Popup, Picker, Field, Dialog, Notify, SwipeCell, Button } from "vant";
import schedule from 'node-schedule';
import _ from "lodash";

import { mergeScheduleList } from "../../../common/toolWeb";
import dScheduleList from '../../../common/scheduleList'

const scheduleDefaultFormData = {
  id: NaN,
  name: '',
  desc: '',
  checked: false,
  lastRunTime: '',
  job: undefined,
  config: {
    scheme: '默认方案_记得改哦_(:з」∠)_',
    cron: '* * * * * *',
  }
};
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Switch);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Field);
Vue.use(Dialog);
Vue.use(Notify);
Vue.use(SwipeCell);
Vue.use(Button);
export default {
  name: 'ScheduleList',
  data() {
    return {
      itemOpenList: [],
      swipeCellCurrentAction: null,
      swipeCellCurrentIndex: null,

      commonConfig: {
        name: '公共配置',
        config: []
      },
      showConfigId: 0,
      params: this.$route.query,
      commonConfigModalShow: false,

      // 功能方案弹出 相关属性
      configItemItemShowPicker: false,
      configItemItemPickerList: [],
      curItemItemIndex: 10,
      curItemItem: null,

      scheduleNameInputShow: false,
      scheduleNameInputType: null,
      addScheduleForm: {},

      commonConfigModalObject: {
        config: []
      },
      scheduleList: []
    };
  },
  props: {
    statusBarHeight: Number
  },
  async mounted() {
    var self = this;

    const savedScheduleList = await AutoWeb.autoPromise("getScheduleList", null)
    self.scheduleList = mergeScheduleList(savedScheduleList, dScheduleList);

    // 获取后保存一下方案列表，避免出现展示内容与保存内容不一样的情况
    AutoWeb.autoPromise('saveScheduleList', self.scheduleList);
  },
  methods: {
    saveScheduleList() {
      AutoWeb.autoPromise('saveScheduleList', this.scheduleList);
    },
    async onScheduleChange(e, item) {
      if (item.checked) {
        this.saveScheduleList();
        if (item.job) {
          item.job.reschedule(item.config.cron, function () {
            AutoWeb.autoPromise('setCurrentScheme', item.config.scheme);
            item.lastRunTime = new Date().toLocaleString();
          });
        } else {
          item.job = schedule.scheduleJob(item.config.cron, function () {
            AutoWeb.autoPromise('setCurrentScheme', item.config.scheme);
            item.lastRunTime = new Date().toLocaleString();
          });
        }

      } else {
        item.job.cancel();
      }
    },
    showCommonConfig(e, item) {
      if (item.config && item.config.length > 0) {
        this.commonConfigModalObject = item;
        this.commonConfigModalShow = true;
      }
    },
    showConfig(e, item) {
      if (this.itemOpenList.length > 0) return;
      if (e.target.className.match(/switch|handle/)) {
        return;
      }
      if (item.config) {
        if (this.showConfigId === item.id) {
          this.showConfigId = null;
        } else {
          this.showConfigId = item.id;
        }
      } else {
        // Toast('无可配置项');
      }
    },
    configItemItemPickerConfirm(text, _index) {
      this.curItemItem.config.scheme = text;
      this.configItemItemShowPicker = false;
    },
    async showItemConfigScheme(e, configItemItem) {
      if (!configItemItem.checked) {
        let schemeList = await AutoWeb.autoPromise('getSchemeList');
        this.configItemItemPickerList = schemeList.map(item => item.schemeName);
        this.curItemItem = configItemItem;
        this.curItemItemIndex = this.configItemItemPickerList.indexOf(configItemItem.config.scheme);
        this.configItemItemShowPicker = true;
      }
    },
    itemOpen() {
      this.itemOpenList.push(0);
    },
    itemClose() {
      setTimeout(() => { this.itemOpenList.pop() }, 200)
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
              this.scheduleList.splice(this.swipeCellCurrentIndex, 1);
              this.saveScheduleList();
              AutoWeb.autoPromise('toast', "已删除");
              this.swipeCellCurrentAction = null;
            }).catch(() => {
              this.swipeCellCurrentAction = null;
            });
          } else if ('modify' === this.swipeCellCurrentAction) {
            this.scheduleNameInputType = 'modify';
            this.addScheduleForm = this.scheduleList[this.swipeCellCurrentIndex];
            this.scheduleNameInputShow = true;
          }
          break;
      }
    },
    addScheduleClickEvent() {
      this.scheduleNameInputType = 'add';
      this.addScheduleForm = _.clone(scheduleDefaultFormData);
      this.scheduleNameInputShow = true;
    },
    addScheme(scheduleData, callback) {
      scheduleData.id = this.scheduleList.length > 0 ? this.scheduleList[this.scheduleList.length - 1].id + 1 : 1;
      this.scheduleList.push(scheduleData);
      this.saveScheduleList();
    },
    scheduleNameInputBeforeClose(action, done) {
      if ('cancel' === action) {
        this.addScheduleForm = _.clone(scheduleDefaultFormData);
        this.swipeCellCurrentAction = null;
        done(true);
      } else {
        if (!this.addScheduleForm.name) {
          Notify({ type: 'warning', message: '请输入定时任务名。' });
          done(false);
          return;
        }

        if ('add' == this.scheduleNameInputType) {
          for (let i = 0; i < this.scheduleList.length; i++) {
            if (this.scheduleList[i].name == this.addScheduleForm.name) {
              Notify({ type: 'warning', message: '存在重复的定时任务名，请重新输入。' });
              done(false);
              return;
            }
          }
          this.addScheme(
            _.cloneDeep(this.addScheduleForm)
          );
          this.swipeCellCurrentAction = null;
          done(true);
          this.addScheduleForm = _.clone(scheduleDefaultFormData);
        } else if ('modify' === this.scheduleNameInputType) {
          this.scheduleList[this.swipeCellCurrentIndex] = this.addScheduleForm;
          this.saveScheduleList();
          AutoWeb.autoPromise('toast', '修改成功');
          this.swipeCellCurrentAction = null;
          done(true);
          this.addScheduleForm = _.clone(scheduleDefaultFormData);
        }
      }
    },
  }
}
</script>

<style scoped>
.rv_inner {
  padding: 46px 0px 56px 0px;
}

.handle {
  margin-right: 18px;
}

.handle-area {
  margin-top: 8px;
  height: 24px;
  width: 36px;
  display: inline-block;
}

.itemSwitch {
  margin-right: 5px;
}

.item {
  margin: 5px 10px 5px 10px;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  font-size: 14px;
  box-shadow: 1px 1px 1px #eaeaea
}

.item-header {
  padding: 0px 16px 0px 16px;
}

.item-header:active {
  background-color: #f2f3f5;
}

.item-title {
  display: inline-block;
  height: 44px;
  line-height: 44px;
}

.item-value {
  margin-top: 5px;
  float: right;
}

.item-desc {
  color: #aaa;
  margin-top: -5px;
  padding-bottom: 10px;
  font-size: 12px;
  word-break: break-all;
}

.item-config {
  max-height: 300px;
  overflow-y: auto;
  border-top: 1px solid #efefef;
  padding-bottom: 10px;
}
</style>