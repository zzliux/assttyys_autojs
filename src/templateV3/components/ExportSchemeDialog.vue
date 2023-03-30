<template>
  <div>
    <!-- 功能的参数配置 -->
    <van-popup class="configModal" v-model="dialogShow" style="width: 100%; height: 100%; background: #f4f5f7; overflow: hidden">
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
              <van-button type="info" block @click="editTextModal = true; exportString = JSON.stringify(schemeList.filter(i => i.export), null, 4)">
                <i class="iconfont iconfont-fabusekuai"></i> 导出
              </van-button>
            </div>
          </van-col>
        </van-row>
      </div>
    </van-popup>
    <van-popup style="width: 60%; height: 60%; z-index: 2222;" v-model="editTextModal">
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

<script>
import { Col, Row, Cell, Popup, Switch, Loading, Icon } from 'vant';
import groupColor from "../../common/groupColors";

export default {
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Popup.name]: Popup,
    [Switch.name]: Switch,
    [Loading.name]: Loading,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
  },
  props: {
    show: Boolean,
    schemeList: Array,
  },
  data() {
    return {
      editTextModal: false,
      exportString: ''
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
  methods: {
    cancel() {
      this.dialogShow = false
    },
    
    getGroupColor(groupName) {
      // 计算hash值
      let sum = 0;
      for (let i = 0; i < groupName.length; i++) {
        sum += groupName.charCodeAt(i);
      }
      return groupColor[sum % groupColor.length];
    },
    async copyExportString() {
      await AutoWeb.autoPromise('copyToClip', this.exportString);
    }
  },
  watch: {
    show(val) {
      this.dialogShow = val;
    }
  },
  mounted() {
  },
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
  overflow:hidden
}
</style>