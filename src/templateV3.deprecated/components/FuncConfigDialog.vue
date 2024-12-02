<template>
  <div>
    <!-- 功能的参数配置 -->
    <van-popup class="configModal" v-model:show="dialogShow" closeable>
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
          <template v-else-if="'text' === configItemItem.type" #input>
            <div class="van-field__body">
              <input
                type="text"
                v-model="configItemItem.value"
                class="van-field__control"
              />
            </div>
          </template>
        </van-field>
      </van-cell-group>
    </van-popup>

    <!-- 功能的参数里面的list下拉单选 -->
    <van-popup v-model:show="configItemItemShowPicker" position="bottom">
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

<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['update:show']);

const props = defineProps({
    show: Boolean,
    configModalObject: Object,
})
const configItemItemShowPicker = ref(false);
const configItemItemPickerList = ref([]);
const curItemItemIndex = ref(10);
const curItemItem = ref(null);

const dialogShow = computed({
  get() {
    return props.show;
  },
  set(val) {
    emit('update:show', val);
  }
});


function configItemItemPickerConfirm({ selectedOptions }) {
  curItemItem.value.value = selectedOptions[0].value;
  configItemItemShowPicker.value = false;
}
function showItemConfigList(e, configItemItem) {
  configItemItemPickerList.value = configItemItem.data.map(item => ({text: item, value: item}));
  curItemItem.value = configItemItem;
  curItemItemIndex.value = configItemItemPickerList.value.indexOf(configItemItem.value);
  configItemItemShowPicker.value = true;
}
async function showItemConfigScheme(e, configItemItem) {
  let schemeList = await AutoWeb.autoPromise('getSchemeList');
  configItemItemPickerList.value = schemeList.map(item => item.schemeName);
  curItemItem.value = configItemItem;
  curItemItemIndex.value = configItemItemPickerList.value.indexOf(configItemItem.value);
  configItemItemShowPicker.value = true;
}
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