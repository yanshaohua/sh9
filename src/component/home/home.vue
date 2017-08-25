<template>
	<div>	
		<!-- 轮播图 -->
		<my-swipe url="getlunbo"></my-swipe>

		<!-- 九宫格 -->
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'newsList'}">
		                    <span class="mui-icon icon-xinwenzixun"></span>
		                    <div class="mui-media-body">新闻资讯</div>
		                </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'phone.list'}">
		                    <span class="mui-icon icon-tuwenfenxiang">
		                    <!-- <span class="mui-badge">5</span> -->
		                    </span>
		                    <div class="mui-media-body">图文分享</div>
		                </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'goods.list'}">
		                    <span class="mui-icon icon-shangpinzhanshi"></span>
		                    <div class="mui-media-body">商品展示</div>
		                </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<a href="#">
		                    <span class="mui-icon icon-liuyan"></span>
		                    <div class="mui-media-body">留言反馈</div>
		                </a>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<a href="#">
		                    <span class="mui-icon icon-zixun_sousuo"></span>
		                    <div class="mui-media-body">搜索资讯</div>
		                </a>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<a href="#">
		                    <span class="mui-icon icon-lianxiwomen"></span>
		                    <div class="mui-media-body">联系我们</div>
		                </a>
		            </li>
		        </ul> 
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				
			}
		},
		
		methods:{
			click(){
			}
		}
	}
</script>
<style scoped>
	
</style>