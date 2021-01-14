<template>
  <div>
    <div class="navbar_box">
      <van-nav-bar
        title="ASSTTYYS NG"
        left-arrow
        @click-left="$router.back()"
      >
         <template #right>
          <van-icon name="setting-o" size="18" @click="showConfig($event, commonConfig)"/>
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          <van-icon name="success" size="18" @click="saveScheme" />
        </template>
      </van-nav-bar>
    </div>

    <div class="rv_inner">
      <van-cell-group class="itemBox" :title="'方案 - ' + this.params.schemeName">
        <draggable
          v-model="funcList"
          handle=".handle-area"
          :scroll-sensitivity="100"
          :force-fallback="true"
          v-bind="dragOptions"
          @start="dragTransition = true"
          @end="dragEnd"
        >
          <transition-group type="transition" :name="!dragTransition ? 'flip-list' : null">
            <div v-for="item in funcList" :key="item.id">
              <van-cell
                class="item"
                center
                :title="item.name + (item.config && item.config.length ? ' *': '')"
                @click="showConfig($event, item)"
              >
                <template>
                  <span class="handle-area"><van-icon class="handle" size="18" name="bars" /></span>
                  <van-switch class="itemSwitch" @change="toggleSwitchEvent" v-model="item.checked" size="18" />
                </template>
              </van-cell>
            </div>
          </transition-group>
        </draggable>
      </van-cell-group>
    </div>

    <!-- 功能的参数配置 -->
    <van-popup class="configModal" v-model="configModalShow" closeable>
      <div class="configModalTitle">配置: {{configModalObject.name}}</div>
      <van-cell-group v-for="(configItem) in configModalObject.config" :key="configItem.desc" :title="configItem.desc">
        <!-- <van-cell v-for="(configItemItem) in configItem.config" :key="configItemItem.name" :title="configItemItem.desc">
          <template v-if="'switch' == configItemItem.type">
            <van-switch v-model="configItemItem.value" size="18" />
          </template>
          <template v-else-if="'list' == configItemItem.type">
            <div class="configItemValue" @click="showItemConfigList($event, configItemItem)">{{configItemItem.value}}</div>
          </template>
        </van-cell> -->
        <van-field
          v-for="(configItemItem) in configItem.config" :key="configItemItem.name"
          label-width="70%"
          :label="configItemItem.desc"
          :rules="[{ required: true, message: '必填' }]"
        >
          <template v-if="'integer' === configItemItem.type" #input>
            <div class="van-field__body"><input type="number" v-model="configItemItem.value" class="van-field__control"></div>
          </template>
          <template v-else-if="'switch' === configItemItem.type" #input>
            <van-switch v-model="configItemItem.value" size="20" />
          </template>
          <template v-else-if="'list' === configItemItem.type" #input>
            <div class="configItemValue" @click="showItemConfigList($event, configItemItem)">{{configItemItem.value}}</div>
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
      />
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup, Switch, Icon, Toast, Popup, Form, Field, Picker } from "vant";
import draggable from 'vuedraggable'
import dfuncList from "../../common/funcList";
import dCommonConfig from "../../common/commonConfig";
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
    var schemeConfig = prompt('getScheme', JSON.stringify(this.$route.query.schemeName));


    let fl = _.cloneDeep(dfuncList);
    fl.forEach(item => {
      if (!item.config) {
        item.config = [];
      }
      item.config.forEach(iItem => {
        iItem.config.forEach(iIItem => {
          iIItem.value = iIItem.default;
        });
      });
      // 已保存的方案和funcList
      if (schemeConfig.list.indexOf(item.id) !== -1) {
        item.checked = true
        item.config.forEach(iItem => {
          iItem.config.forEach(iIItem => {
            if (schemeConfig.config[item.id] && schemeConfig.config[item.id][iIItem.name]) {
              iIItem.value = schemeConfig.config[item.id][iIItem.name];
            } else {
              iIItem.value = iIItem.default;
            }
          });
        });
      }
    });

    let cc = _.cloneDeep(dCommonConfig);
    cc.forEach(item => {
      if (!item.config) {
        item.config = [];
      }
      item.config.forEach(iItem => {
        iItem.value = iItem.default;
      });
    });

    return {
      dragTransition: false,
      funcList: fl,
      commonConfig: {
        name: '公共配置',
        config: cc
      },
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
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  mounted() {
    if (this.params) {
      if (this.params.schemeName) {
        Toast(`加载方案 [ ${this.params.schemeName} ] `);
      }
    }
    this.reSort();
    this.$EventBus.$emit('toggleShowNavLeft', true);
  },
  methods: {
    toggleSwitchEvent(value) {
      setTimeout(() => {
        this.reSort();
      }, 100);
    },
    dragEnd() {
      this.dragTransition = false;
      this.reSort();
    },
    reSort() {
      let list = [[], []];
      this.funcList.forEach((item) => {
        list[item.checked + 0].push(item);
      });
      this.funcList = [...list[1], ...list[0]];
    },
    showConfig(e, item) {
      if (e.target.className.match(/switch|handle/)) {
        return;
      }
      if (item.config && item.config.length > 0) {
        this.configModalObject = item;
        this.configModalShow = true;
      } else {
        // Toast('无可配置项');
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
    },
    saveScheme() {
      if (this.params && this.params.schemeName) {
        var commonConfig = {}; // TODO

        var r = prompt('saveScheme', JSON.stringify({
          name: this.params.schemeName,
          funcList: _.cloneDeep(this.funcList),
          commonConfig: commonConfig
        }));
        Toast(`保存成功`);
      } else {
        Toast(`参数错误：params.schemeName为空`);
      }
    }
  }
};
</script>

<style scoped>
.item {
  height: 48px;
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