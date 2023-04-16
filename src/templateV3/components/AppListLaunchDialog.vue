<template>
  <div>
    <!-- 功能的参数配置 -->
    <van-popup
      class="configModal"
      v-model:show="dialogShow"
      style="width: 100%; max-height: 70%"
    >
      <div style="padding: 16px 16px 10px 16px">选择需要启动的应用</div>
      <div>
        <div
          :class="'item' + (app.referred ? ' referred' : '')"
          v-for="app in appList"
          :key="app.packageName"
          @click="launchPackage(app.packageName)"
        >
          <span class="logo">
            <van-loading v-if="!packageNameToIcon[app.packageName]" />
            <van-icon v-if="packageNameToIcon[app.packageName] === 'fail'" name="failure" size="32px" />
            <img v-else-if="packageNameToIcon[app.packageName]" :src="packageNameToIcon[app.packageName]"/>  
          </span>
          <span class="item-content">
            <div class="appName">{{ app.appName }}</div>
            <div class="packageName">{{ app.packageName }}</div>
          </span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { reactive, computed, watch } from 'vue';

const props = defineProps({
  show: Boolean,
  appList: Array,
});
const packageNameToIcon = reactive({});

const emit = defineEmits(['update:show']);
const dialogShow = computed({
  get() {
    return props.show;
  },
  set(val) {
    emit('update:show', val);
  }
});

function launchPackage(packageName) {
  dialogShow.value = false;
  AutoWeb.autoPromise("launchPackage", packageName);
}

async function getAppIcon(packageName) {
  if (packageNameToIcon[packageName]) {
    return packageNameToIcon[packageName]
  }
  packageNameToIcon[packageName] = (await AutoWeb.autoPromise('getIconByPackageName', packageName)) || 'fail';
  return packageNameToIcon[packageName];
}
watch(() => props.appList, async (newVal, oldVal) => {
  for (let app of newVal) {
    await getAppIcon(app.packageName);
  }
});


</script>
<style scoped>
.item:active {
  background-color: #f2f3f5;
}
.item {
  position: relative;
  height: 44px;
  margin: 5px 10px 5px 10px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  padding: 0px 16px 0px 0px;
  font-size: 14px;
  box-shadow: 1px 1px 1px #eaeaea;
  transition: all 0.1s linear;
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
</style>