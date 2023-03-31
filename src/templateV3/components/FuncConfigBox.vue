<template>
  <div class="func-config-box">
    <!-- 功能的参数配置 -->
    <van-cell-group
      v-for="configItem in configModalObject.config"
      :key="configItem.desc"
      :title="configItem.desc"
    >
      <van-field
        v-for="configItemItem in configItem.config"
        :key="configItemItem.name"
        label-width="70%"
        :label="configItemItem.desc"
        :rules="[{ required: true, message: '必填' }]"
      >
        <template v-if="'integer' === configItemItem.type" #input>
          <div class="van-field__body">
            <input
              type="number"
              v-model="configItemItem.value"
              class="van-field__control"
            />
          </div>
        </template>
        <template v-else-if="'switch' === configItemItem.type" #input>
          <van-switch v-model="configItemItem.value" size="16" />
        </template>
        <template v-else-if="'list' === configItemItem.type" #input>
          <div
            class="configItemValue"
            @click="showItemConfigList($event, configItemItem)"
          >
            {{ configItemItem.value }}
          </div>
        </template>
        <template v-else-if="'scheme' === configItemItem.type" #input>
          <div
            class="configItemValue"
            @click="showItemConfigScheme($event, configItemItem)"
          >
            {{ configItemItem.value }}
          </div>
        </template>
        <template v-else-if="'text' === configItemItem.type" #input>
          <div class="van-field__body">
            <input
              type="text"
              v-model="configItemItem.value"
              class="van-field__control"
            />
          </div>
        </template>
        <template v-else-if="'time' === configItemItem.type" #input>
          <div
            class="configItemValue"
            @click="showDateTimePicker($event, configItemItem)"
          >
            {{ configItemItem.value }}
          </div>
        </template>
      </van-field>
    </van-cell-group>

    <!-- 功能的参数里面的list下拉单选 -->
    <van-popup v-model="configItemItemShowPicker" position="bottom">
      <van-picker
        v-if="configItemItemShowPicker === 'switch'"
        show-toolbar
        :columns="configItemItemPickerList"
        @confirm="configItemItemPickerConfirm"
        @cancel="configItemItemShowPicker = false"
        :default-index="curItemItemIndex"
      />
      <van-datetime-picker 
        v-else-if="configItemItemShowPicker === 'datetime'" 
        type="time"
        :value="curItemItem.value"
        show-toolbar
        @confirm="configItemItemPickerConfirm"
        @cancel="configItemItemShowPicker = false"/>
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
import { merge } from '@/common/tool';

export default {
  components: {
  },
  props: {
    show: Boolean,
    configModalObject: Object,
  },
  data() {
    return {
      configItemItemShowPicker: false,
      configItemItemPickerList: [],
      curItemItemIndex: 10,
      curItemItem: null,

      schemePicker: false,
      schemeList: [],
    }
  },
  methods: {
    configItemItemPickerConfirm(text, _index) {
      this.curItemItem.value = text;
      this.configItemItemShowPicker = false;
    },
    schemeListConfirm([_, text], _index) {
      this.curItemItem.value = text;
      this.schemePicker = false;
    },
    showItemConfigList(e, configItemItem) {
      this.configItemItemPickerList = configItemItem.data;
      this.curItemItem = configItemItem;
      this.curItemItemIndex = this.configItemItemPickerList.indexOf(configItemItem.value);
      this.configItemItemShowPicker = 'switch';
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

    showDateTimePicker(e, configItemItem) {
      this.curItemItem = configItemItem;
      this.configItemItemShowPicker = 'datetime';
    }
  },
  mounted() {
  },
};
</script>


<style scoped>
.configItemValue {
  width: 100%;
  /* text-align: right; */
}
.func-config-box .van-cell,
.func-config-box .van-cell-group__title {
  font-size: 12px;
}
.func-config-box .van-cell {
  padding: 5px 16px;
}
.func-config-box .van-cell-group__title {
  padding: 10px 16px 2px 16px;
  color: #1989fa;
}
</style>