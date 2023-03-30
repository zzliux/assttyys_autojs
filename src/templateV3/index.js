import Vue, { createApp } from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";
// import 'vant/lib/index.css';
// import './assets/icon/iconfont.css';
import App from './App.vue';
import { NavBar, Cell, SwipeCell, CellGroup, Icon, Button, Dialog, Field, Notify, Picker, DropdownMenu, DropdownItem, Popup } from 'vant';


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


var router = createRouter({
	history: createWebHashHistory(),
	routes: [{
		path: "/",
		name: 'index',
		meta: {
			index: 0
		},
		component: () => import('./pages/SchemeList.vue')
	}
		// }, {
		// 	path: "/schemeList",
		// 	name: 'schemeList',
		// 	meta: {
		// 		index: 0
		// 	},
		// 	component: () => import('./pages/SchemeList.vue')
		// }, {
		// 	path: "/funcList",
		// 	name: 'funcList',
		// 	meta: {
		// 		index: 1
		// 	},
		// 	component: () => import('./pages/FuncList.vue')
		// }, {
		// 	path: '/settings',
		// 	name: 'settings',
		// 	meta: {
		// 		index: 1
		// 	},
		// 	component: () => import('./pages/Settings.vue')
		// }, {
		// 	path: '/about',
		// 	name: 'about',
		// 	meta: {
		// 		index: 2
		// 	},
		// 	component: () => import('./pages/About.vue')
		// }, {
		// 	path: '/schedule/list',
		// 	name: 'ScheduleList',
		// 	meta: {
		// 		index: 3
		// 	},
		// 	component: () => import('./pages/schedule_module/ScheduleList.vue')
		// }
	]
});

const myApp = createApp(App);
myApp.use(router);

myApp.use(NavBar);
myApp.use(Cell);
myApp.use(SwipeCell);
myApp.use(CellGroup);
myApp.use(Icon);
myApp.use(Button);
myApp.use(Dialog);
myApp.use(Field);
myApp.use(Notify);
myApp.use(Picker);
myApp.use(DropdownMenu);
myApp.use(DropdownItem);
myApp.use(Popup);

myApp.mount('#app');

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