<template>
  <div style="height: 100%; width: 100%">
    <div class="navbar_box">
      <van-nav-bar title="定时任务列表 | ASSTTYYS NG" left-arrow @click-left="$router.back()"
        :style="'padding-top: ' + (statusBarHeight || 0) + 'px'">
        <template #right>
          <van-icon name="replay" size="18" @click="refresh($event)" />
        </template>
      </van-nav-bar>
    </div>

    <div class="rv_inner" :style="'padding-top: ' + (46 + (statusBarHeight || 0)) + 'px'">
      <van-cell-group class="itemBox" :title="'定时任务'" style="background: transparent">
        <div v-for="(item, index) in scheduleList" :key="item.id" class="item" center>
          <van-swipe-cell center @open="itemOpen" @close="itemClose" :before-close="itemBeforeClose"
            :stop-propagation="true" :disabled="item.checked">
            <template>
              <div class="item-header" @click="showConfig($event, item)">
                <div class="item-title">{{ item.id + ' ' + item.name }}</div>
                <div class="item-value">
                  <span class="handle-area"></span>
                  <van-switch class="itemSwitch" v-model="item.checked" size="18"
                    @change="onScheduleChange($event, item)" />
                </div>
                <div v-if="item.desc" class="item-desc">{{ item.desc }}</div>
                <div class="item-desc">上次执行开始时间: {{ item.lastRunTime && new Date(item.lastRunTime).toLocaleString() }}</div>
                <div class="item-desc">上次执行结束时间: {{ item.lastStopTime && new Date(item.lastStopTime).toLocaleString() }}</div>
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
                <div style="width: 100%;" :style="item.checked ? 'color: rgb(200, 195, 188)' : ''"
                  @click="showItemConfigScheme($event, item)">
                  {{ item.config.scheme }}
                </div>
              </template>
            </van-field>
            <van-field label="重复模式" label-width="70%" :disabled="item.checked"
              :rules="[{ required: true, message: '必填' }]">
              <template #input>
                <div style="width: 100%;" :style="item.checked ? 'color: rgb(200, 195, 188)' : ''"
                  @click="showRepeatModeDialog($event, item)">
                  {{ repeatModeEnum[item.repeatMode || 0] }}
                </div>
              </template>
            </van-field>
            <van-field label="重复间隔(分钟)" label-width="70%" :disabled="item.checked"
              :rules="[{ required: true, message: '必填' }]">
              <template #input>
                <div class="van-field__body">
                  <input :disabled="item.checked" v-model="item.interval" @input="intervalInputEvent($event, item)" class="van-field__control" />
                </div>
              </template>
            </van-field>
            <van-field label="下次执行时间" label-width="70%" :disabled="item.checked"
              :rules="[{ required: true, message: '必填' }]">
              <template #input>
                <div class="van-field__body">
                  <div style="width: 100%;" :style="item.checked ? 'color: rgb(200, 195, 188)' : ''"
                    @click="showNextDateDialog($event, item)">
                    {{ item.nextDate ? item.nextDate.toLocaleString() : ( item.repeatMode == 3 ? '无法解析CRON表达式' : '请选择') }}
                  </div>
                </div>
              </template>
            </van-field>
            <van-field type="number" label="优先级" label-width="70%" :disabled="item.checked"
              :rules="[{ required: true, message: '必填' }]" v-model="item.level" >
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
      :title="'add' === scheduleNameInputType ? '新增定时任务' : '修改定时任务'" show-cancel-button>
      <van-field :label="'add' === scheduleNameInputType ? '定时任务名' : '新的定时任务名'" v-model="addScheduleForm.name"
        placeholder="请输入..." />
      <van-field label="描述" v-model="addScheduleForm.desc" placeholder="请输入..." />
    </van-dialog>
    <van-popup v-model="repeatModeDialogShow" position="bottom">
      <van-picker show-toolbar :columns="repeatModeEnum" @confirm="repeatModeDialogConfirm"
        @cancel="repeatModeDialogShow = false" :default-index="curDialogRepeatMode"></van-picker>
    </van-popup>
    <van-popup v-model="nextDateDialogshow" position="bottom">
      <van-datetime-picker
        v-model="curNextDate"
        type="datetime"
        title="选择下次执行时间"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="nextDateDialogshow = false"
        @confirm="nextDateDialogConfirm"
      />
    </van-popup>
    <van-popup v-model="schemePicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="schemeList"
        @confirm="schemeListConfirm"
        @cancel="schemePicker = false"
      />
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Cell, CellGroup, Icon, Switch, Popup, Picker, Field, Dialog, Notify, SwipeCell, Button, DatetimePicker } from "vant";
// import schedule from 'node-schedule';

import { mergeScheduleList } from "../../../common/toolWeb";
import dScheduleList from '../../../common/scheduleList'
import { merge } from '@/common/tool';
import { getNextByCron } from '@/common/toolCron';

const scheduleDefaultFormData = {
  id: NaN,
  name: '',
  desc: '',
  checked: false,
  lastRunTime: null,
  nextDate: null,
  repeatMode: 1,
  interval: null,
  level: '1',
  config: {
    scheme: '默认方案_记得改哦_(:з」∠)_',
    // cron: '* * * * * *',
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
Vue.use(DatetimePicker);

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

      schemePicker: false,
      schemeList: [],

      scheduleNameInputShow: false,
      scheduleNameInputType: null,
      addScheduleForm: {},

      repeatModeEnum: ['不重复', '从运行开始计时', '从运行结束计时', 'CRON表达式'],
      repeatModeDialogShow: false,
      curDialogRepeatMode: 0,
      minDate: new Date(),
      maxDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),

      nextDateDialogshow: false,
      curNextDate: null,

      commonConfigModalObject: {
        config: []
      },
      scheduleList: [],
      jobList: [],
      
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
    async refresh() {
      const savedScheduleList = await AutoWeb.autoPromise("getScheduleList", null)
      this.scheduleList = mergeScheduleList(savedScheduleList, dScheduleList);
    },
    saveScheduleList() {
      return AutoWeb.autoPromise('saveScheduleList', this.scheduleList);
    },
    async onScheduleChange(e, item) {
      if (Array.isArray(this.jobList)) {
        // this.jobList ? this.jobList.cancel() : null;
        if (item.checked) {
          if (!item.config.scheme) {
            await AutoWeb.autoPromise('toast', '请设置执行方案');
            item.checked = false;
            return;
          }
          if (!item.interval) {
            await AutoWeb.autoPromise('toast', '请设置重复间隔');
            item.checked = false;
            return;
          }
          if (!item.nextDate) {
            await AutoWeb.autoPromise('toast', '请设置下次执行时间');
            item.checked = false;
            return;
          }
          if (!item.level) {
            await AutoWeb.autoPromise('toast', '请设置优先级');
            item.checked = false;
            return;
          }
        }
        await this.saveScheduleList();
        await AutoWeb.autoPromise('scheduleChange', item);


        // const index = this.jobList.findIndex(job => job.id === item.id);
        
        // if (index != -1) {
        //   if (item.checked) {
        //     this.jobList[index].job.reschedule(item.config.cron, async function () {
        //     await AutoWeb.autoPromise('setCurrentScheme', item.config.scheme);
        //     await AutoWeb.autoPromise('startCurrentScheme');
        //     item.lastRunTime = new Date().toLocaleString();
        //   });
        //   } else {
        //     this.jobList[index].job.cancel();
        //   }
          
        // } else {
        //   const jobTemp = schedule.scheduleJob(item.config.cron, async function () {
        //       await AutoWeb.autoPromise('setCurrentScheme', item.config.scheme);
        //       await AutoWeb.autoPromise('startCurrentScheme');
        //       item.lastRunTime = new Date().toLocaleString();
        //     });
        //   this.jobList.push({
        //     id: item.id,
        //     job: jobTemp
        //   })
        // }
      }
      // if (item.checked) {
      //   this.saveScheduleList();
      //   if (item.job) {
      //     console.log('reschedule');
      //     item.job.reschedule(item.config.cron, async function () {
      //       await AutoWeb.autoPromise('setCurrentScheme', item.config.scheme);
      //       await AutoWeb.autoPromise('startCurrentScheme');
      //       item.lastRunTime = new Date().toLocaleString();
      //     });
      //   } else {
      //     console.log('scheduleJob', item.config.cron);
      //     item.job = schedule.scheduleJob(item.config.cron, async function () {
      //       await  AutoWeb.autoPromise('setCurrentScheme', item.config.scheme);
      //       await AutoWeb.autoPromise('startCurrentScheme');
      //       item.lastRunTime = new Date().toLocaleString();
      //     });
      //   }

      // } else {
      //   item.job.cancel();
      // }
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
    schemeListConfirm([_, text], _index) {
      this.curItemItem.config.scheme = text;
      this.schemePicker = false;
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
    showRepeatModeDialog(e, configItemItem) {
      if (!configItemItem.checked) {
        this.curItemItem = configItemItem;
        this.curDialogRepeatMode = configItemItem.repeatMode;
        this.repeatModeDialogShow = true;
      }
    },
    repeatModeDialogConfirm(_text, index) {
      this.curItemItem.repeatMode = index;
      this.repeatModeDialogShow = false;
    },
    showNextDateDialog(e, configItemItem) {
      if (!configItemItem.checked) {
        this.curItemItem = configItemItem;
        this.curNextDate = configItemItem.nextDate || new Date();
        this.nextDateDialogshow = true;
      }
    },
    nextDateDialogConfirm() {
      this.curItemItem.nextDate = this.curNextDate;
      this.nextDateDialogshow = false;
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
      this.addScheduleForm = merge({}, scheduleDefaultFormData);
      this.scheduleNameInputShow = true;
    },
    addScheme(scheduleData, callback) {
      scheduleData.id = this.scheduleList.length > 0 ? this.scheduleList[this.scheduleList.length - 1].id + 1 : 1;
      this.scheduleList.push(scheduleData);
      this.saveScheduleList();
    },
    scheduleNameInputBeforeClose(action, done) {
      if ('cancel' === action) {
        this.addScheduleForm = merge({}, scheduleDefaultFormData);
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
            merge({}, this.addScheduleForm)
          );
          this.swipeCellCurrentAction = null;
          done(true);
          this.addScheduleForm = merge({}, scheduleDefaultFormData);
        } else if ('modify' === this.scheduleNameInputType) {
          this.scheduleList[this.swipeCellCurrentIndex] = this.addScheduleForm;
          this.saveScheduleList();
          AutoWeb.autoPromise('toast', '修改成功');
          this.swipeCellCurrentAction = null;
          done(true);
          this.addScheduleForm = merge({}, scheduleDefaultFormData);
        }
      }
    },

    async showItemConfigScheme(e, configItemItem) {
      let schemeList = await AutoWeb.autoPromise('getSchemeList');
      let groupScheme = ['全部', ...await AutoWeb.autoPromise('getGroupNames')].map(item => ({ text: item, children: this.getSchemeNamesByGroupName(item, schemeList) }));

      console.log(groupScheme);
      // this.configItemItemPickerList = schemeList.map(item => item.schemeName);
      this.schemeList = groupScheme;
      this.curItemItem = configItemItem;
      this.schemePicker = true;
      // this.curItemItemIndex = this.configItemItemPickerList.indexOf(configItemItem.value);
      // this.configItemItemShowPicker = 'switch';
    },

    getSchemeNamesByGroupName(groupName, schemeNames) {
      const left = merge([], schemeNames);
      if (groupName === '全部') {
        return left.map(item => ({ text: item.schemeName }));
      }

      // 1. 根据groupName过滤
      const filterd = [];
      // console.log(groupName);
      for (let i = 0 ; i < left.length; i++) {
        if (left[i].groupName === groupName) {
          filterd.push(left[i]);
          left.splice(i, 1);
          i--;
        }
      }
      return filterd.map(item => ({ text: item.schemeName }));
    },

    intervalInputEvent ($event, item) {
      if (item.repeatMode == 3) {
        item.nextDate = getNextByCron(item.interval);
        console.log(item.interval, item.nextDate);
      }
    }
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