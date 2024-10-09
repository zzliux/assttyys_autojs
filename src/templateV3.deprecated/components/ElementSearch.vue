<template>
  <span style="position: relative; margin-right: 10px">
    <i
      @click="inputer.focus()"
      class="van-icon van-icon-search"
      style="position: absolute; top: 5px; left: 4px"
    ></i>
    <input
      type="text"
      v-model="highLightStr"
      @input="elementSearchInputEvent"
      @keyup="elementSearchKeyEvent"
      ref="inputer"
      class="element-search"
    />
  </span>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router';

function throttle(fn, delay){
	let valid = true;
	return function(){
		if(valid) {
			fn.apply(this, arguments);
      valid = false;
      setTimeout(()=> {
				valid = true;
			}, delay)
		}
	}
}

const props = defineProps({
  refSearchAttrName: String,
  refHighLightAttrName: String,
});
const $router = useRouter();
const $route = useRoute();


const inputer = ref();
const highLightStr = ref("");
const highLightFullStr = ref("");


if (!localStorage.getItem('elementSearch')) {
  localStorage.setItem('elementSearch', JSON.stringify({}));
}

const store = JSON.parse(localStorage.getItem('elementSearch'));
const key = $route.fullPath;
if (!store[key]) {
  storeInfo('', -1);
}
function storeInfo(k, i) {
  store[key] = { k, i };
  localStorage.setItem('elementSearch', JSON.stringify(store));
}


let lastSearchStr = "";
let lastSearchIndex = 0;
let lastList = [];

function elementSearchInputEventOrigin(e, up) {
  storeInfo(highLightStr.value, lastSearchIndex + (up ? -1 : 1));
  if (highLightStr.value === lastSearchStr) {
    const list = document.querySelectorAll(`[${props.refSearchAttrName}*="${lastSearchStr}"]`);
    const highLightList = document.querySelectorAll(`[${props.refHighLightAttrName}*="${lastSearchStr}"]`);

    for (let i = 0; i < lastList.length; i++) {
      lastList[i].style.backgroundColor = ''
    }
    lastList = [];

    if (list.length && highLightList.length) {
      const thisIndex = (up ? (--lastSearchIndex + list.length) : (++lastSearchIndex + list.length)) % list.length;
      const thisEle = list[thisIndex];
      highLightFullStr.value = thisEle.getAttribute(props.refSearchAttrName);

      for (let i = 0; i < highLightList.length; i++) {
        if (thisIndex === i) {
          highLightList[i].style.backgroundColor = '#eee8aa'
        } else {
          highLightList[i].style.backgroundColor = '#ffffe0'
        }
      }

      setTimeout(() => {
        thisEle.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        
      }, 0);
    } else {
      highLightFullStr.value = "";
    }
    lastList = highLightList;
  } else {
    lastSearchStr = highLightStr.value;
    const list = document.querySelectorAll(`[${props.refSearchAttrName}*="${lastSearchStr}"]`);
    const highLightList = document.querySelectorAll(`[${props.refHighLightAttrName}*="${lastSearchStr}"]`);
    
    for (let i = 0; i < lastList.length; i++) {
      lastList[i].style.backgroundColor = ''
    }
    lastList = [];

    if (list.length && highLightList.length) {
      const thisEle = list[0];
      highLightFullStr.value = thisEle.getAttribute(props.refSearchAttrName);
      lastSearchIndex = 0;

      highLightList[0].style.backgroundColor = '#eee8aa'
      for (let i = 1; i < highLightList.length; i++) {
        highLightList[i].style.backgroundColor = '#ffffe0'
      }
      setTimeout(() => {
        thisEle.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 0);
    } else {
      highLightFullStr.value = "";
    }
    lastList = highLightList;
  }
}

function elementSearchKeyEvent(e) {
  if (e.keyCode === 13) {
    elementSearchInputEvent(e, e.shiftKey);
  }
}

const elementSearchInputEvent = throttle(elementSearchInputEventOrigin, 200);

function doHighlightFromQuery() {
  highLightStr.value = store[key].k;
  lastSearchStr = store[key].k;
  lastSearchIndex = store[key].i - 1;
  setTimeout(elementSearchInputEvent, 100);
};

defineExpose({ doHighlightFromQuery });
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
  background-color: #f4f5f7;
  width: 200px;
}
</style>
