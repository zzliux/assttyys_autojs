<template>
  <div style="height: 100%; width: 100%">
    <div class="navbar_box">
      <van-nav-bar
        title="定时任务列表 | ASSTTYYS NG"
        left-arrow
        @click-left="$router.back()"
        :style="'padding-top: ' + (statusBarHeight || 0) + 'px'"
      >
        <template #right>
          <van-icon name="replay" size="18" @click="refresh($event)" />
        </template>
      </van-nav-bar>
    </div>
    <div
      class="rv_inner"
      :style="'padding-top: ' + (46 + (statusBarHeight || 0)) + 'px'"
    >
      <div class="van-cell-group__title" style="position: relative">
        <span>定时任务</span>
        <span
          style="
            position: absolute;
            right: 16px;
            bottom: 3px;
            display: flex;
            text-align: right;
          "
        >
          <span>免打扰模式（开启后，定时任务会直接跳过执行）：</span>
          <span
            ><van-switch
              v-model="lazyModeCpt"
              size="14"
              :loading="lazyModeLoading"
            ></van-switch
          ></span>
        </span>
      </div>
      <TransitionGroup tag="span" type="transition" name="flip-list">
        <div
          v-for="(item, index) in scheduleList"
          :key="item.id"
          class="item"
          center
        >
          <van-swipe-cell
            center
            @open="itemOpen"
            @close="itemClose"
            :before-close="itemBeforeClose"
            :stop-propagation="true"
            :disabled="item.checked"
          >
            <div>
              <div class="item-header" @click="showConfig($event, item)">
                <div class="item__container">
                  <div
                    class="item-title"
                    :style="
                      'color: ' +
                      (item.nextDate
                        ? new Date().getTime() - item.nextDate.getTime() >
                          180000
                          ? 'red'
                          : 'initial'
                        : 'initial')
                    "
                  >
                    {{ item.id + ' ' + item.name }}
                  </div>
                  <div class="item-value" style="display: flex">
                    <span class="handle-area"></span>
                    <van-button
                      type="danger"
                      text="立即执行"
                      round
                      size="mini"
                      style="margin-right: 5px"
                      @click.stop="runSchedule($event, item)"
                    ></van-button>
                    <van-switch
                      class="itemSwitch"
                      v-model="item.checked"
                      size="18"
                      @change="onScheduleChange($event, item)"
                    />
                  </div>
                </div>

                <div v-if="item.desc" class="item-desc">{{ item.desc }}</div>
                <div class="item-desc">
                  上次执行开始时间:
                  {{
                    item.lastRunTime &&
                    new Date(item.lastRunTime).toLocaleString()
                  }}
                </div>
                <div class="item-desc">
                  上次执行结束时间:
                  {{
                    item.lastStopTime &&
                    new Date(item.lastStopTime).toLocaleString()
                  }}
                </div>
                <div class="item-desc">
                  下次执行时间:
                  {{
                    item.nextDate &&
                    new Date(item.nextDate).toLocaleString()
                  }}
                </div>
              </div>
            </div>
            <template #right>
              <van-button
                type="danger"
                square
                text="删除"
                v-if="!item.inner"
                @click="
                  swipeCellCurrentAction = 'delete';
                  swipeCellCurrentIndex = index;
                "
              />
              <van-button
                type="warning"
                square
                text="修改"
                @click="
                  swipeCellCurrentAction = 'modify';
                  swipeCellCurrentIndex = index;
                "
              />
            </template>
          </van-swipe-cell>
          <div v-if="item.id === showConfigId" class="item-config">
            <van-field
              label="运行方案"
              label-width="70%"
              :disabled="item.checked"
              :rules="[{ required: true, message: '必填' }]"
            >
              <template #input>
                <div
                  style="width: 100%"
                  :style="item.checked ? 'color: rgb(200, 195, 188)' : ''"
                  @click="showItemConfigScheme($event, item)"
                >
                  {{ item.config.scheme }}
                </div>
              </template>
            </van-field>
            <van-field
              label="重复模式"
              label-width="70%"
              :disabled="item.checked"
              :rules="[{ required: true, message: '必填' }]"
            >
              <template #input>
                <div
                  style="width: 100%"
                  :style="item.checked ? 'color: rgb(200, 195, 188)' : ''"
                  @click="showRepeatModeDialog($event, item)"
                >
                  {{ repeatModeEnum[item.repeatMode || 0].value }}
                </div>
              </template>
            </van-field>
            <van-field
              label="重复间隔(分钟)"
              label-width="70%"
              :disabled="item.checked"
              :rules="[{ required: true, message: '必填' }]"
            >
              <template #input>
                <div class="van-field__body">
                  <input
                    :disabled="item.checked"
                    v-model="item.interval"
                    @input="intervalInputEvent($event, item)"
                    class="van-field__control"
                  />
                </div>
              </template>
            </van-field>
            <van-field
              label="下次执行偏移随机数(分钟，用逗号分隔)"
              label-width="70%"
              :disabled="item.checked"
            >
              <template #input>
                <div class="van-field__body">
                  <input
                    :disabled="item.checked"
                    v-model="item.nextOffset"
                    @input="intervalInputEvent($event, item)"
                    class="van-field__control"
                  />
                </div>
              </template>
            </van-field>
            <van-field
              label="下次执行时间"
              label-width="70%"
              :disabled="item.checked"
              :rules="[{ required: true, message: '必填' }]"
            >
              <template #input>
                <div class="van-field__body">
                  <div
                    style="width: 100%"
                    :style="item.checked ? 'color: rgb(200, 195, 188)' : ''"
                    @click="showNextDateDialog($event, item)"
                  >
                    {{
                      item.nextDate
                        ? item.nextDate.toLocaleString()
                        : item.repeatMode == 3
                        ? '无法解析CRON表达式'
                        : '请选择'
                    }}
                  </div>
                </div>
              </template>
            </van-field>
            <van-field
              type="number"
              label="优先级"
              label-width="70%"
              :disabled="item.checked"
              :rules="[{ required: true, message: '必填' }]"
              v-model="item.level"
            >
            </van-field>
          </div>
        </div>
      </TransitionGroup>
      <div
        style="
          margin: 5px 10px 5px 10px;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 1px 1px 1px #eaeaea;
        "
      >
        <van-cell class="itemAdd" center @click="addScheduleClickEvent($event)">
          <div style="text-align: center; height: 24px">
            <van-icon
              name="plus"
              style="font-weight: bolder; vertical-align: middle"
            />
            <span style="position: relative; top: 2px">添加定时任务</span>
          </div>
        </van-cell>
      </div>
    </div>
    <van-dialog
      v-model:show="scheduleNameInputShow"
      :before-close="scheduleNameInputBeforeClose"
      :title="'add' === scheduleNameInputType ? '新增定时任务' : '修改定时任务'"
      show-cancel-button
    >
      <van-field
        :label="
          'add' === scheduleNameInputType ? '定时任务名' : '新的定时任务名'
        "
        v-model="addScheduleForm.name"
        placeholder="请输入..."
      />
      <van-field
        label="描述"
        v-model="addScheduleForm.desc"
        placeholder="请输入..."
      />
    </van-dialog>
    <van-popup v-model:show="repeatModeDialogShow" position="bottom">
      <van-picker
        show-toolbar
        :columns="repeatModeEnum"
        @confirm="repeatModeDialogConfirm"
        @cancel="repeatModeDialogShow = false"
        :default-index="curDialogRepeatMode"
      ></van-picker>
    </van-popup>
    <van-popup v-model:show="nextDateDialogshow" position="bottom">
      <date-time-picker
        v-model="curNextDate"
        title="选择下次执行时间"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="nextDateDialogshow = false"
        @confirm="nextDateDialogConfirm"
      />
    </van-popup>
    <van-popup v-model:show="schemePicker" position="bottom">
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
import { mergeScheduleList } from '../../../common/toolWeb';
import dScheduleList from '../../../common/scheduleList';
import { merge } from '@/common/tool';
import { getNextByCron } from '@/common/toolCron';
import DateTimePicker from '../../components/DateTimePicker.vue';
import { showNotify, showConfirmDialog } from 'vant';

import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';

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
  },
};

export default defineComponent({
  name: 'ScheduleList',
  components: {
    DateTimePicker,
  },
  props: {
    statusBarHeight: Number,
  },
  setup(props, ctx) {
    const itemOpenList = ref([]);
    const swipeCellCurrentAction = ref(null);
    const swipeCellCurrentIndex = ref(null);

    const commonConfig = ref({
      name: '公共配置',
      config: [],
    });

    const showConfigId = ref(0);
    const params = useRoute().params;
    const commonConfigModalShow = ref(false);

    // 功能方案弹出 相关属性
    const configItemItemShowPicker = ref(false);
    const configItemItemPickerList = ref([]);
    const curItemItemIndex = ref(10);
    const curItemItem = ref(null);

    const schemePicker = ref(false);
    const schemeList = ref([]);

    const scheduleNameInputShow = ref(false);
    const scheduleNameInputType = ref(null);
    const addScheduleForm = ref({});

    const repeatModeEnum = ref(
      ['不重复', '从运行开始计时', '从运行结束计时', 'CRON表达式'].map(
        (item) => ({ text: item, value: item })
      )
    );
    const repeatModeDialogShow = ref(false);
    const curDialogRepeatMode = ref(0);
    const minDate = ref(new Date());
    const maxDate = ref(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000));

    const nextDateDialogshow = ref(false);
    const curNextDate = ref(null);

    const commonConfigModalObject = ref({
      config: [],
    });
    const scheduleList = ref([]);
    const jobList = ref([]);
    const lazyMode = ref(false);
    const lazyModeLoading = ref(false);

    const lazyModeCpt = computed({
      get: () => {
        return lazyMode.value.lazyMode;
      },
      set: (value) => {
        lazyModeLoading.value = true;
        AutoWeb.autoPromise('setScheduleLazyMode', value).then(() => {
          lazyMode.value.lazyMode = value;
          lazyModeLoading.value = false;
        });
      },
    });

    onMounted(async () => {
      await loadData();
      // 加载数据挂载给window，方便auto->webview的方向通信以更新界面数据
      window.loadScheduleData = loadData;
    });

    onUnmounted(() => {
      window.loadScheduleData = null;
    });

    async function loadData() {
      const savedScheduleList = await AutoWeb.autoPromise(
        'getScheduleList',
        null
      );

      scheduleList.value = mergeScheduleList(savedScheduleList, dScheduleList);

      // 获取后保存一下方案列表，避免出现展示内容与保存内容不一样的情况
      AutoWeb.autoPromise('saveScheduleList', scheduleList.value);

      lazyMode.value = await AutoWeb.autoPromise('getScheduleInstance', null);
    }

    async function refresh() {
      const savedScheduleList = await AutoWeb.autoPromise(
        'getScheduleList',
        null
      );

      scheduleList.value = mergeScheduleList(savedScheduleList, dScheduleList);
    }

    function saveScheduleList() {
      return AutoWeb.autoPromise('saveScheduleList', scheduleList.value);
    }

    async function runSchedule(e, item) {
      if (Array.isArray(jobList.value)) {
        item.nextDate = new Date(Date.now());
        if (item.checked) {
          if (!item.config.scheme) {
            await AutoWeb.autoPromise('toast', '请设置执行方案');
            item.checked = false;
            return;
          }
        }
        await saveScheduleList();
        await AutoWeb.autoPromise('scheduleChange', item);
      }
    }

    async function onScheduleChange(e, item) {
      if (Array.isArray(jobList.value)) {
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
        await saveScheduleList();
        await AutoWeb.autoPromise('scheduleChange', item);
      }
    }
    async function showCommonConfig(e, item) {
      if (item.config && item.config.length > 0) {
        commonConfigModalObject.value = item;
        commonConfigModalShow.value = true;
      }
    }
    function showConfig(e, item) {
      if (itemOpenList.value.length > 0) return;
      if (e.target.className.match(/switch|handle/)) {
        return;
      }
      if (item.config) {
        if (showConfigId.value === item.id) {
          showConfigId.value = null;
        } else {
          showConfigId.value = item.id;
        }
      } else {
        // Toast('无可配置项');
      }
    }
    function configItemItemPickerConfirm(text, _index) {
      curItemItem.value.config.scheme = text;
      configItemItemShowPicker.value = false;
    }
    function schemeListConfirm({ selectedOptions }) {
      curItemItem.value.config.scheme = selectedOptions[1].value;
      schemePicker.value = false;
    }
    function showRepeatModeDialog(e, configItemItem) {
      if (!configItemItem.checked) {
        curItemItem.value = configItemItem;
        curDialogRepeatMode.value = configItemItem.repeatMode;
        repeatModeDialogShow.value = true;
      }
    }
    function repeatModeDialogConfirm({ selectedIndexes }) {
      curItemItem.value.repeatMode = selectedIndexes[0];
      repeatModeDialogShow.value = false;
    }
    function showNextDateDialog(e, configItemItem) {
      if (!configItemItem.checked) {
        curItemItem.value = configItemItem;
        curNextDate.value = configItemItem.nextDate || new Date();
        nextDateDialogshow.value = true;
      }
    }
    function nextDateDialogConfirm() {
      curItemItem.value.nextDate = curNextDate.value;
      nextDateDialogshow.value = false;
      // 手选的时间是多少就是多少
      // mergeOffsetTime(curItemItem.value);
    }
    function itemOpen() {
      itemOpenList.value.push(0);
    }
    function itemClose() {
      setTimeout(() => {
        itemOpenList.value.pop();
      }, 200);
    }
    function itemBeforeClose(option) {
      switch (option.position) {
        case 'left':
        case 'cell':
        case 'outside':
          if (!swipeCellCurrentAction.value) {
            return true;
          }
          break;
        case 'right':
          if ('delete' === swipeCellCurrentAction.value) {
            showConfirmDialog({
              message: '确定删除吗？',
            })
              .then(() => {
                // option.instance.close();
                scheduleList.value.splice(swipeCellCurrentIndex.value, 1);
                saveScheduleList();
                AutoWeb.autoPromise('toast', '已删除');
                swipeCellCurrentAction.value = null;
              })
              .catch(() => {
                swipeCellCurrentAction.value = null;
              });
          } else if ('modify' === swipeCellCurrentAction.value) {
            scheduleNameInputType.value = 'modify';
            addScheduleForm.value =
              scheduleList.value[swipeCellCurrentIndex.value];
            scheduleNameInputShow.value = true;
          }
          break;
      }
    }
    function addScheduleClickEvent() {
      scheduleNameInputType.value = 'add';
      addScheduleForm.value = merge({}, scheduleDefaultFormData);
      scheduleNameInputShow.value = true;
    }
    function addScheme(scheduleData, callback) {
      scheduleData.id =
        scheduleList.value.length > 0
          ? scheduleList.value[scheduleList.value.length - 1].id + 1
          : 1;
      scheduleList.value.push(scheduleData);
      saveScheduleList();
    }
    function scheduleNameInputBeforeClose(action, done) {
      if ('cancel' === action) {
        addScheduleForm.value = merge({}, scheduleDefaultFormData);
        swipeCellCurrentAction.value = null;
        return true;
      } else {
        if (!addScheduleForm.value.name) {
          showNotify({ type: 'warning', message: '请输入定时任务名。' });
          return false;
        }

        if ('add' == scheduleNameInputType.value) {
          for (let i = 0; i < scheduleList.length; i++) {
            if (scheduleList.value[i].name == addScheduleForm.value.name) {
              showNotify({
                type: 'warning',
                message: '存在重复的定时任务名，请重新输入。',
              });
              return false;
            }
          }
          addScheme(merge({}, addScheduleForm.value));
          swipeCellCurrentAction.value = null;
          return true;
          addScheduleForm.value = merge({}, scheduleDefaultFormData);
        } else if ('modify' === scheduleNameInputType.value) {
          scheduleList.value[swipeCellCurrentIndex.value] =
            addScheduleForm.value;
          saveScheduleList();
          AutoWeb.autoPromise('toast', '修改成功');
          swipeCellCurrentAction.value = null;
          return true;
          addScheduleForm.value = merge({}, scheduleDefaultFormData);
        }
      }
    }

    async function showItemConfigScheme(e, configItemItem) {
      let _schemeList = await AutoWeb.autoPromise('getSchemeList');
      let groupScheme = [
        '全部',
        ...(await AutoWeb.autoPromise('getGroupNames')),
      ].map((item) => ({
        text: item,
        value: item,
        children: getSchemeNamesByGroupName(item, _schemeList),
      }));

      // configItemItemPickerList = schemeList.map(item => item.schemeName);
      schemeList.value = groupScheme;
      curItemItem.value = configItemItem;
      schemePicker.value = true;
      // curItemItemIndex = configItemItemPickerList.indexOf(configItemItem.value);
      // configItemItemShowPicker = 'switch';
    }

    function getSchemeNamesByGroupName(groupName, schemeNames) {
      const left = merge([], schemeNames);
      if (groupName === '全部') {
        return left.map((item) => ({
          text: item.schemeName,
          value: item.schemeName,
        }));
      }

      // 1. 根据groupName过滤
      const filterd = [];
      for (let i = 0; i < left.length; i++) {
        if (left[i].groupName === groupName) {
          filterd.push(left[i]);
          left.splice(i, 1);
          i--;
        }
      }
      return filterd.map((item) => ({
        text: item.schemeName,
        value: item.schemeName,
      }));
    }

    function intervalInputEvent($event, item) {
      if (item.repeatMode == 3) {
        item.nextDate = getNextByCron(item.interval);
      }
      mergeOffsetTime(item);
    }

    function mergeOffsetTime(item) {
      if (item.nextOffset) {
        let offsetTime = 0;
        const parts = item.nextOffset?.split(',');
        if (parts.length === 2) {
          const [ offsetMinuteLow, offsetMinuteHigh ] = parts.map(item => parseInt(item));
          if (Number.isInteger(offsetMinuteLow) && Number.isInteger(offsetMinuteHigh)) {
            offsetTime = random(offsetMinuteLow * 60 * 1000, offsetMinuteHigh * 60 * 1000);
          }
        }
        item.nextDate = new Date(item.nextDate.getTime() + offsetTime);
      }
    }

    function random(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {
      lazyModeLoading,
      lazyModeCpt,
      scheduleList,
      swipeCellCurrentAction,
      swipeCellCurrentIndex,
      showConfigId,
      repeatModeEnum,
      scheduleNameInputShow,
      scheduleNameInputType,
      addScheduleForm,
      repeatModeDialogShow,
      curDialogRepeatMode,
      nextDateDialogshow,
      curNextDate,
      schemePicker,
      schemeList,
      schemeListConfirm,
      refresh,
      itemOpen,
      itemClose,
      itemBeforeClose,
      showConfig,
      onScheduleChange,
      runSchedule,
      showItemConfigScheme,
      showRepeatModeDialog,
      intervalInputEvent,
      showNextDateDialog,
      addScheduleClickEvent,
      scheduleNameInputBeforeClose,
      repeatModeDialogConfirm,
      nextDateDialogConfirm,
      maxDate,
      minDate,
    };
  },
});
</script>

<style scoped>
.rv_inner {
  padding: 46px 0px 0px 0px;
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
  box-shadow: 1px 1px 1px #eaeaea;
}

.item__container {
  display: flex;
    justify-content: space-between;
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
  /* float: right; */
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
