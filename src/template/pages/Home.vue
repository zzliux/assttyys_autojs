<template>
    <div>
        <h1>Home</h1>
        <van-button type="info" @click="btnclick">打开测试方案</van-button>
    </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);

export default {
    methods: {
        btnclick() {
            this.$router.push({
                path: '/funclist',
                query: {
                    schemeName: '测试方案'
                }
            })
        }
    }
}
</script>
