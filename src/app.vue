<template>
	<div>
		
		<mt-header title="vue项目" ref="n1"></mt-header>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
		<nav class="mui-bar mui-bar-tab" ref="n2">
			<router-link :to="{name:'home',params:'新闻列表'}" class="mui-tab-item" href="#tabbar">
				<span class="mui-icon icon-shouye"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link :to="{name:'vip'}" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon icon-huiyuan">
					
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link :to="{name:'shopcart'}" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon icon-gouwuchekong">
					<span class="mui-badge">{{changeNum}}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link :to="{name:'search'}" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon icon-sousu"></span>
				<span class="mui-tab-label">搜素</span>
			</router-link>
		</nav>	
	</div>
</template>
<script>
import Connect from './component/commons/Connect.js';
import GoodsTools from './component/commons/GoodsTools.js';

	export default {
		data(){
			return {
				changeNum:GoodsTools.getProdCount()
			}
		},
		created(){
			Connect.$on('changeShopcart', (num) => {
				this.changeNum += num;
			}),
			Connect.$on('changeShopcart2', (num) => {
				this.changeNum = num;
			})
		}
	}
</script>
<style>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
	  opacity: 0
	}
</style>