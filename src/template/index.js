import Vue from 'vue';
import VueRouter from "vue-router";
import 'vant/lib/index.css';
import App from './App.vue';

Vue.use(VueRouter);

var router = new VueRouter({
	routes: [{
		path:"/",
		name: 'home',
		component: () => import('./pages/Home.vue')
	}, {
		path:"/home",
		name: 'home',
		component: () => import('./pages/Home.vue')
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

new Vue({
	el: '#app',
	router,
	render: h => h(App),
});
