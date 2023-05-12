<template>
    <span style="position: relative; margin-right: 10px">
        <i @click="inputer.focus()" class="van-icon van-icon-search" style="position: absolute; top: 5px; left: 4px"></i>
        <input v-model="highLightStr" @input="elementSearchInputEvent" @keyup="elementSearchKeyEvent" ref="inputer" class="element-search">
    </span>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  refSearchAttrName: String,
  refHighLightAttrName: String,
});

const inputer = ref();
const highLightStr = ref('');
const highLightFullStr = ref('');


let lastSearchStr = '';
let lastSearchIndex = 0;
let lastList = [];
function elementSearchInputEvent() {
  if (highLightStr.value === lastSearchStr) {
    const list = document.querySelectorAll(`[${props.refSearchAttrName}*="${lastSearchStr}"]`);
    if (list.length) {
      const thisEle = list[(++lastSearchIndex) % list.length];
      highLightFullStr.value = thisEle.getAttribute('scheme-list-name');
      thisEle.scrollIntoView({
        behavior: "smooth",
        block:    "center"
      });
    } else {
      highLightFullStr.value = '';
    }
  } else {
    lastSearchStr = highLightStr.value;
    const list = document.querySelectorAll(`[${props.refSearchAttrName}*="${lastSearchStr}"]`);
    if (list.length) {
      const thisEle = list[0];
      thisEle.scrollIntoView({
        behavior: "smooth",
        block:    "center"
      });
      highLightFullStr.value = thisEle.getAttribute('scheme-list-name');
      lastSearchIndex = 0;
    } else {
      highLightFullStr.value = '';
    }
  }
}

function elementSearchKeyEvent(e) {
  if (e.keyCode === 13) {
    elementSearchInputEvent();
  }
}

</script>
<style scoped>

.element-search {
  transition: all 250ms;
  display: inline-block;
  box-sizing: border-box;
  width: 24px;
  min-width: 0;
  margin: 0;
  padding-left: 24px;
  color: var(--van-field-input-text-color);
  line-height: inherit;
  background-color: transparent;
  text-align: left;
  border: 0;
  border-radius: 6px;
  resize: none;
  -webkit-user-select: auto;
  user-select: auto;
}
.element-search:focus {
  background-color: #f2f3f5;
  width: 200px;
}
</style>
