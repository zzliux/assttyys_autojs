<template>
  <div>
    <van-cell-group id="itemBox">
      <draggable v-model="funcList" handle=".handle-area" @end="reSort">
        <van-cell
          class="item"
          center
          v-for="item in funcList"
          :key="item.id"
          :title="item.name"
          is-link
          @click="itemClick($event, item)"
        >
          <template>
            <span class="handle-area"><van-icon class="handle" size="18" name="bars" /></span>
            <van-switch class="itemSwitch" @change="toggleSwitchEvent" v-model="item.checked" size="18" />
          </template>
        </van-cell>
      </draggable>
    </van-cell-group>
    <van-popup class="configModal" v-model="configModalShow" closeable>
      <div class="configModalTitle">配置: {{configModalObject.name}}</div>
      <van-cell-group v-for="(configItem) in configModalObject.config" :key="configItem.desc" :title="configItem.desc">
        <van-cell v-for="(configItemItem) in configItem.config" :key="configItemItem.name" :title="configItemItem.desc">
          <template v-if="'switch' == configItemItem.type">
            <van-switch v-model="configItemItem.value" size="18" />
          </template>
          <template v-else-if="'list' == configItemItem.type">
            <div class="configItemValue" @click="showItemConfigList($event, configItemItem)">{{configItemItem.value}}</div>
          </template>
        </van-cell>
      </van-cell-group>
    </van-popup>
    <van-popup v-model="configItemItemShowPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="configItemItemPickerList"
        @confirm="configItemItemPickerConfirm"
        @cancel="configItemItemShowPicker = false"
      />
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup, Switch, Icon, Toast, Popup, Form, Field, Picker } from "vant";
import draggable from 'vuedraggable'
import dfuncList from "../../common/funcList";
import _ from 'lodash';

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Switch);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Form);
Vue.use(Field);
Vue.use(Picker);

export default {
  data() {
    let fl = _.cloneDeep(dfuncList);
    fl.forEach(item => {
      (item.config || []).forEach(iItem => {
        iItem.config.forEach(iIItem => {
          iIItem.value = iIItem.default;
        });
      });
    });

    return {
      funcList: fl,
      params: this.$route.query,
      configModalShow: false,
      configModalObject: {
        config: []
      },
      configItemItemShowPicker: false,
      configItemItemPickerList: [],
      curItemItem: null,
    };
  },
  components: {
    draggable,
  },
  mounted() {
    if (this.params) {
      if (this.params.schemeName) {
        Toast(`加载方案 [ ${this.params.schemeName} ] `);
      }
    }
  },
  methods: {
    toggleSwitchEvent(value) {
      setTimeout(() => {
        this.reSort();
      }, 100);
    },
    reSort() {
      let list = [[], []];
      this.funcList.forEach((item) => {
        list[item.checked + 0].push(item);
      });
      this.funcList = [...list[1], ...list[0]];
    },
    itemClick(e, item) {
      if (e.target.className.match(/switch|handle/)) {
        return;
      }
      if (item.config && item.config.length > 0) {
        console.log(item);
        this.configModalObject = item;
        this.configModalShow = true;
      } else {
        Toast('无可配置项');
      }
    },
    showItemConfigList(e, configItemItem) {
      this.configItemItemShowPicker = true;
      this.configItemItemPickerList = configItemItem.data;
      this.curItemItem = configItemItem;
    },
    configItemItemPickerConfirm(text, _index) {
      this.curItemItem.value = text;
      this.configItemItemShowPicker = false;
    }
  }
};
</script>

<style scoped>
.item {
  height: 48px;
}
.handle {
  margin-right: 5px;
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
.configModal {
  width: 100%;
}
.configModalTitle {
  padding-top: 16px;
  padding-left: 16px;
}
.configItemValue {
  text-align: right;
}
</style>