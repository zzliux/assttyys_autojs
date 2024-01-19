<template>
  <div>
    <!-- 功能的参数配置 -->
    <van-popup class="configModal" v-model:show="dialogShow" style="width: 100%; height: 100%; background: #f4f5f7; overflow: hidden">
      <div style="position: absolute; top: 0; padding: 16px 16px 10px 16px; width: 100%; z-index: 2002; background: #f4f5f7;">导出方案</div>
      <div style="height: 100%; overflow: auto">
        <div style="padding-top: 52px; padding-bottom: 52px">
          <div v-for="(item, index) of schemeList" :key="index">
            <div
              :class="'item' + (item.export ? ' export' : '')"
              style="margin: 5px 10px; border-radius: 5px; overflow: hidden; box-shadow: rgb(234, 234, 234) 1px 1px 1px;"
              center
            >
              <div v-if="item.groupName" class="group-color" :style="'background-color: ' + getGroupColor(item.groupName)"></div>
              <div
                @click="item.export = !item.export; $forceUpdate()"
                :style="'background-color: transparent; line-height: 44px; margin-left: ' + (item.groupName ? '14px' : '0px')"
              >
                <span :style="'margin-left: ' + (!item.groupName ? '14px' : '0px')">{{ item.schemeName }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="display: block; position: absolute; bottom: 0; width: 100%;">
        <van-row>
          <van-col span="12">
            <div style="margin: 5px 5px 5px 10px; border-radius:5px; overflow: hidden;box-shadow: 1px 1px 1px #eaeaea">
              <van-button type="warning" block @click="cancel">关闭</van-button>
            </div>
          </van-col>
          <van-col span="12">
            <div style="margin: 5px 10px 5px 5px; border-radius:5px; overflow: hidden;box-shadow: 1px 1px 1px #eaeaea">
              <van-button type="primary" block @click="doExport">
                <i class="iconfont iconfont-fabusekuai"></i> 导出
              </van-button>
            </div>
          </van-col>
        </van-row>
      </div>
    </van-popup>
    <van-popup style="width: 60%; height: 60%; z-index: 2222;" v-model:show="editTextModal">
      <div style="height: 100%; overflow: scroll;">
        <van-field
          v-model="exportString"
          autosize
          spellcheck="false"
          type="textarea"
        />
        <van-button type="warning" size="small" style="position: absolute; right: 0; bottom: 0" @click="copyExportString()">复制</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import groupColor from '@/common/groupColors';
import defaultFuncList from '@/common/funcListIndex';
import defaultCommonConfig from '@/common/commonConfig';

const props = defineProps({
  show: Boolean,
  schemeList: Array,
});
const editTextModal = ref(false);
const exportString = ref('');

const emit = defineEmits(['update:show']);
const dialogShow = computed({
  get() {
    return props.show;
  },
  set(val) {
    emit('update:show', val)
  }
});

function doExport() {
  editTextModal.value = true;
  exportString.value = JSON.stringify(simplifySchemeList(props.schemeList.filter(i => i.export)));
}

function getSingleDefaultConfig(func) {
  const ret = {};
  if (func.config) {
    for (let configGroup of func.config) {
      for (let config of configGroup.config) {
        ret[config.name] = config.default;
      }
    }
  }
  if (Object.keys(ret).length) {
    return ret;
  }
  return null;
}

function getCommonConfig() {
  const ret = {};
  for (let configGroup of defaultCommonConfig) {
    for (let config of configGroup.config) {
      ret[config.name] = config.default;
    }
  }
  return ret;
}

function simplifySchemeList(schemeList) {
  const allDefaultConfig = {};
  defaultFuncList.forEach(func => {
    const v = getSingleDefaultConfig(func);
    if(v) {
      allDefaultConfig[func.id] = v;
    }
  });
  const allDefaultCommonConfig = getCommonConfig();

  console.log(allDefaultConfig);
  schemeList.forEach(expScheme => {
    delete expScheme.id;
    delete expScheme.inner;
    delete expScheme.export;
    // 删除默认功能配置
    for (let funcId in expScheme.config) {
      const defaultConfig = allDefaultConfig[funcId];
      let flag = true;
      for (let configKey in expScheme.config[funcId]) {
        if (defaultConfig[configKey] == expScheme.config[funcId][configKey]) {
          delete expScheme.config[funcId][configKey];
        } else {
          flag = false;
        }
      }
      if (flag) {
        delete expScheme.config[funcId]
      }
    }
    if (expScheme.config && Object.keys(expScheme.config).length === 0) {
      delete expScheme.config;
    }

    // 删除默认公共配置
    let flag = true;
    for (let commonConfigKey in expScheme.commonConfig) {
      if (allDefaultCommonConfig[commonConfigKey] == expScheme.commonConfig[commonConfigKey]) {
        delete expScheme.commonConfig[commonConfigKey];
      } else {
        flag = false;
      }
    }
    if (flag) {
      delete expScheme.commonConfigKey;
    }
    
  });
  return schemeList;
}

function cancel() {
  dialogShow.value = false
}
    
function getGroupColor(groupName) {
  // 计算hash值
  let sum = 0;
  for (let i = 0; i < groupName.length; i++) {
    sum += groupName.charCodeAt(i);
  }
  return groupColor[sum % groupColor.length];
}

async function copyExportString() {
  await AutoWeb.autoPromise('copyToClip', exportString.value);
}
</script>

<style scoped>
.item {
  position: relative;
  height: 44px;
  margin:5px 10px 5px 10px;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  padding: 0px 16px 0px 0px;
  font-size: 14px;
  box-shadow: 1px 1px 1px #eaeaea;
  transition: all .1s linear;
}
.logo {
  position: absolute;
  top: 6px;
  left: 6px;
}
.logo img {
  max-width: 32px;
  max-height: 32px;
}
.item-content {
  display: block;
  margin-top: 5px;
  margin-left: 44px;
  font-size: 14px;
}
.export {
  color: #fff;
  background-color: #0066CC
}
.group-color {
  width: 6px;
  height: 100%;
  position: absolute;
  background-color: #ff00ff
}
</style>
<style>
textarea.van-field__control {
  overflow:hidden;
  word-break: break-all;
}
</style>