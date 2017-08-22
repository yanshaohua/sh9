import Vue from 'vue';

import App from './app.vue';
import Home from './component/home/home.vue';
import Vip from './component/vip/vip.vue';
import Shopcart from './component/shopcart/shopcart.vue';
import Search from './component/search/search.vue';

// 加载 MintUi
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
// 安装插件
Vue.use(MintUi);

// 加载 mui
import './static/libs/mui-master/dist/css/mui.css';

// 加载 路由
import VueRouter from 'vue-router';
// 安装插件
Vue.use(VueRouter);
let router = new VueRouter({
	routes:[
		{
			path:'/',redirect:{name:'home'}
		},
		{
			name:'home',path:'/home',component:Home
		},
		{
			name:'vip',path:'/vip',component:Vip
		},
		{
			name:'shopcart',path:'/shopcart',component:Shopcart
		},
		{
			name:'search',path:'/search',component:Search
		}
	]
})

import Axios from 'axios';
Vue.prototype.$ajax = Axios;
Axios.defaults.baseURL = "http://182.254.146.100:8899/api/";


Axios.interceptors.request.use(function (config) {
	MintUi.Indicator.open({
	  text: '加载中...',
	  spinnerType: 'fading-circle'
	});

	return config;
}) 
Axios.interceptors.response.use(function (response) {
	MintUi.Indicator.close();

	return response;
})

new Vue({
	el:'#app',
	router,
	render: c => c(App)
})

