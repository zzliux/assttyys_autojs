<template>
  <div>
    <!-- 功能的参数配置 -->
    <van-popup class="configModal" v-model="dialogShow" closeable>
      <div class="configModalTitle">配置: {{ configModalObject.name }}</div>
      <van-cell-group
        v-for="configItem in configModalObject.config"
        :key="configItem.desc"
        :title="configItem.desc"
      >
        <!-- <van-cell v-for="(configItemItem) in configItem.config" :key="configItemItem.name" :title="configItemItem.desc">
            <template v-if="'switch' == configItemItem.type">
                <van-switch v-model="configItemItem.value" size="18" />
            </template>
            <template v-else-if="'list' == configItemItem.type">
                <div class="configItemValue" @click="showItemConfigList($event, configItemItem)">{{configItemItem.value}}</div>
            </template>
            </van-cell> -->
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
            <van-switch v-model="configItemItem.value" size="20" />
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
        </van-field>
      </van-cell-group>
    </van-popup>

    <!-- 功能的参数里面的list下拉单选 -->
    <van-popup v-model="configItemItemShowPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="configItemItemPickerList"
        @confirm="configItemItemPickerConfirm"
        @cancel="configItemItemShowPicker = false"
        :default-index="curItemItemIndex"
      />
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup, Field, CellGroup, Picker } from 'vant';
Vue.use(Popup);
Vue.use(Field);
Vue.use(CellGroup);
Vue.use(Picker);

export default {
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
    }
  },
  computed: {
    dialogShow: {
      get() {
        return this.show;
      },
      set(s) {
        this.$emit('update:show', s)
      }
    }
  },
  watch: {
    show(val) {
      this.dialogShow = val;
    },
  },
  methods: {
    configItemItemPickerConfirm(text, _index) {
      this.curItemItem.value = text;
      this.configItemItemShowPicker = false;
    },
    showItemConfigList(e, configItemItem) {
      this.configItemItemPickerList = configItemItem.data;
      this.curItemItem = configItemItem;
      this.curItemItemIndex = this.configItemItemPickerList.indexOf(configItemItem.value);
      this.configItemItemShowPicker = true;
    },
    async showItemConfigScheme(e, configItemItem) {
      let schemeList = await AutoWeb.autoPromise('getSchemeList');
      this.configItemItemPickerList = schemeList.map(item => item.schemeName);
      this.curItemItem = configItemItem;
      this.curItemItemIndex = this.configItemItemPickerList.indexOf(configItemItem.value);
      this.configItemItemShowPicker = true;
    }
  },
  mounted() {
  },
};
</script>


<style scoped>
.configModal {
  width: 100%;
  max-height: 70%;
}
.configModalTitle {
  padding-top: 16px;
  padding-left: 16px;
}
.configItemValue {
  text-align: right;
}
</style>