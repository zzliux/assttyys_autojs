<template>
  <div>
    <div class="navbar_box">
      <van-nav-bar
        title="关于 | ASSTTYYS NG"
        left-arrow
        @click-left="$router.back()"
        :style="'padding-top: ' + (statusBarHeight || 0) + 'px'"
      >
      </van-nav-bar>
    </div>
    <div
      class="rv_inner"
      :style="'padding-top: ' + (46 + (statusBarHeight || 0)) + 'px'"
    >
      <div style="text-align: center; margin-top: 20px;">
        <img :src="'../assets/img/ay.png'" style="max-width: 108px; margin: 0 auto" />
      </div>
      <van-cell-group
        class="itemBox"
        title=""
        style="background: transparent; margin-top: 20px"
      >
        <div class="item" @click="versionInfoShow = true">
          <div class="item-title">
            版本：
          </div>
          <div class="item-content">
            {{version}}
          </div>
        </div>
        <div class="item">
          <div class="item-title">
            作者：
          </div>
          <div class="item-content">
            zzliux
          </div>
        </div>

        <div class="item" @click="openOpenSource">
          <div class="item-title">
            开源：
          </div>
          <div class="item-content">
            https://gitee.com/zzliux/assttyys_autojs
          </div>
        </div>
        <div class="item" @click="mailTo">
          <div class="item-title">
            邮件：
          </div>
          <div class="item-content">
            zzliux@outlook.com
          </div>
        </div>

        <div class="item" @click="clipGroup">
          <div class="item-title">
            QQ群：
          </div>
          <div class="item-content">
            864842180
          </div>
        </div>
      </van-cell-group>
    </div>
    <van-popup closeable v-model:show="versionInfoShow" :style="{ width: '100%', maxHeight: '70%' }">
      <div style="padding: 20px">
        <div class="popup_version_title">版本更新历史：</div>
        <div v-for="(item, id) of versionInfoList" :key="id">
          <!-- {{item.version}}....{{id}} -->
          <div class="popup_version_version">{{ item.version }}:</div>
          <div class="popup_version_desc">{{ item.desc }}</div>
        </div>  
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Cell, CellGroup, Icon, Button, Dialog, Field, Notify, Switch, Loading } from "vant";

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Dialog.name]: Dialog,
    [Field.name]: Field,
    [Notify.name]: Notify,
    [Switch.name]: Switch,
    [Loading.name]: Loading,
  },
  data() {
    return {
      version: '',
      versionInfoShow: false,
      versionInfoList: []
    };
  },
  props: {
    statusBarHeight: Number,
  },
  async mounted() {
    // 版本查询
    let versionInfo = await AutoWeb.autoPromise("versionInfo");
    this.version = versionInfo.storeVersion;
    this.versionInfoList = versionInfo.versionList;
  },
  computed: {},
  methods: {
    openOpenSource() {
      AutoWeb.autoPromise('openOpenSource', null);
    },
    mailTo() {
      AutoWeb.autoPromise('mailTo', null);
    },
    clipGroup() {
      AutoWeb.autoPromise('copyToClip', 864842180);
    }
  },
};
</script>

<style scoped>

.popup_version_title {
  margin-bottom: 5px;
}
.popup_version_version {
  margin-top: 15px;
}
.popup_version_desc {
  padding-left: 10px;
  white-space: pre-wrap;
}
.item:active {
  background-color: #f2f3f5;
}
.item {
  height: 44px;
  margin:5px 10px 5px 10px;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  padding: 0px 16px;
  font-size: 14px;
  box-shadow: 1px 1px 1px #eaeaea
}
.item-title {
  display: inline-block;
  position: absolute;
  height: 44px;
  line-height: 44px;
  width: 66px;
  text-align: right;
}
.item-content {
  margin-top: 14px;
  display: inline-block;
  margin-left: 66px;
  word-break: break-all;
}
</style>
