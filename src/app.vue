<template>
	<div>
		
		<mt-header title="vue项目"></mt-header>
		<router-view></router-view>
		<nav class="mui-bar mui-bar-tab">
			<router-link :to="{name:'home',params:'新闻列表'}" class="mui-tab-item" href="#tabbar">
				<span class="mui-icon icon-shouye"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link :to="{name:'vip'}" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon icon-huiyuan">
					<!-- <span class="mui-badge">9</span> -->
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link :to="{name:'shopcart'}" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon icon-gouwuchekong"></span>
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
	
</script>
<style>
	
</style>