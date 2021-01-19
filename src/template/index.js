import Vue from 'vue';
import VueRouter from "vue-router";
import 'vant/lib/index.css';
import './assets/icon/iconfont.css';
import App from './App.vue';
import '../mock/promptMock';
AutoWeb.setMode('promptMock');


Vue.use(VueRouter);

var router = new VueRouter({
	routes: [{
		path:"/",
		name: 'index',
		meta: {
			index: 0
		},
		component: () => import('./pages/SchemeList.vue')
	}, {
		path:"/schemeList",
		name: 'schemeList',
		meta: {
			index: 0
		},
		component: () => import('./pages/SchemeList.vue')
	}, {
		path:"/me",
		name: 'me',
		meta: {
			index: 0
		},
		component: () => import('./pages/Me.vue')
	}, {
		path:"/funcList",
		name: 'funcList',
		meta: {
			index: 1
		},
		component: () => import('./pages/FuncList.vue')
	}]
});
// 事件总线
Vue.prototype.$EventBus = new Vue();
new Vue({
	el: '#app',
	router,
	render: h => h(App),
});
