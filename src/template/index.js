import Vue from 'vue';
import VueRouter from "vue-router";
import 'vant/lib/index.css';
import './assets/icon/iconfont.css';
import App from './App.vue';
import '../mock/promptMock';

let autoWebMode = 'prompt';
if (localStorage && localStorage.debug) {
	autoWebMode = 'promptMock';
}
AutoWeb.setMode(autoWebMode);

AutoWeb.autoPromise = function (eventname, params) {
	return new Promise((resolve, reject) => {
		AutoWeb.auto(eventname, params, result => {
			resolve(result);
		});
	});
}


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
		path:"/funcList",
		name: 'funcList',
		meta: {
			index: 1
		},
		component: () => import('./pages/FuncList.vue')
	}, {
		path: '/settings',
		name: 'settings',
		meta: {
			index: 1
		},
		component: () => import('./pages/Settings.vue')
	}, {
		path: '/about',
		name: 'about',
		meta: {
			index: 2
		},
		component: () => import('./pages/About.vue')
	}]
});
// 事件总线
Vue.prototype.$EventBus = new Vue();
var myApp = new Vue({
	el: '#app',
	router,
	render: h => h(App),
});
window.routeBack = function () {
	if (/^index|schemeList$/.test(myApp.$route.name)) {
		if (window.routeBackFlag) {
			AutoWeb.autoPromise('exit');
		} else {
			window.routeBackFlag = true;
			AutoWeb.autoPromise('toast', '再按一次退出程序');
			setTimeout(() => {
				window.routeBackFlag = false;
			}, 1000)
		}
	} else {
		myApp.$router.back();
	}
}