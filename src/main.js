import Vue from 'vue';

import App from './app.vue';
import Home from './component/home/home.vue';
import Vip from './component/vip/vip.vue';
import Shopcart from './component/shopcart/shopcart.vue';
import Search from './component/search/search.vue';
import NewsList from './component/news/newsList.vue';
import NewsDetail from './component/news/newsdetail.vue';
import PhoneList from './component/phone/phoneList.vue';
import PhoneDetail from './component/phone/phoneDetail.vue';

import moment from 'moment';

// 引入css
import './static/css/global.css';

// 加载 MintUi
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';

import VuePreview from 'vue-preview';
Vue.use(VuePreview);

// 安装插件
Vue.use(MintUi);

Vue.filter('Time',function (result) {
	return moment(result).format('YYYY-MM-DD')
})

import NavBar from './component/commons/navbar.vue';
import Comment from './component/commons/Comment.vue';
Vue.component('NavBar',NavBar);
Vue.component('Comment',Comment);

// 加载 mui
import './static/libs/mui-master/dist/css/mui.css';

// 加载 路由
import VueRouter from 'vue-router';
// 安装插件
Vue.use(VueRouter);
let router = new VueRouter({
	linkActiveClass:'mui-active',
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
		},
		{
			name:'newsList',path:'/news/list',component:NewsList
		},
		{
			name:'news.detail',path:'/news/detail',component:NewsDetail
		},
		{
			name:'phone.list',path:'/phone/list',component:PhoneList
		},
		{
			name:'phone.detail',path:'/phone/detail/:id',component:PhoneDetail
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

