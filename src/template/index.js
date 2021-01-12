import Vue from 'vue';
import VueRouter from "vue-router";
import 'vant/lib/index.css';
import App from './App.vue';
import '../mock/promptMock';

Vue.use(VueRouter);

var router = new VueRouter({
	routes: [{
		path:"/",
		name: 'schemeList',
		component: () => import('./pages/SchemeList.vue')
	}, {
		path:"/schemeList",
		name: 'schemeList',
		component: () => import('./pages/SchemeList.vue')
	}, {
		path:"/me",
		name: 'me',
		component: () => import('./pages/Me.vue')
	}, {
		path:"/search",
		name: 'search',
		component: () => import('./pages/Search.vue')
	}, {
		path:"/settings",
		name: 'settings',
		component: () => import('./pages/Settings.vue')
	}, {
		path:"/funclist",
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
