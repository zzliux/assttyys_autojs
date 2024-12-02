<template>
    <van-picker-group
        title="选择日期时间"
        :tabs="['选择日期', '选择时间']"
        @confirm="thisConfirm"
        @cancel="thisCancel"
      >
        <van-date-picker
          :min-date="props.minDate"
          :max-date="props.maxDate"
          v-model="selectedDate"
        />
        <van-time-picker
          :columns-type="['hour', 'minute', 'second']"
          v-model="selectedTime"
        />
    </van-picker-group>
</template>
<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    modelValue: Date,
    minDate: Date,
    maxDate: Date,
});
const emit = defineEmits(['confirm', 'cancel', 'update:modelValue']);

const now = new Date();
const selectedDate = ref([now.format('yyyy'), now.format('MM'), now.format('dd')]);
const selectedTime = ref([now.format('hh'), now.format('ii'), now.format('ss')]);

watch(() => selectedDate, (newVal) => {
    emit('update:modelValue', new Date(`${newVal.join('-')}  ${selectedTime.value.join(':')}`));
});

watch(() => selectedTime, (newVal) => {
    emit('update:modelValue', new Date(`${selectedDate.value.join('-')}  ${newVal.join(':')}`));
});

watch(() => props.modelValue, (newVal) => {
    selectedDate.value = [newVal.format('yyyy'), newVal.format('MM'), newVal.format('dd')];
    selectedTime.value = [newVal.format('hh'), newVal.format('ii'), newVal.format('ss')];
});

function thisCancel() {
    emit('cancel');
}

function thisConfirm() {
    emit('update:modelValue', new Date(`${selectedDate.value.join('-')}  ${selectedTime.value.join(':')}`));
    emit('confirm');
}
</script>
