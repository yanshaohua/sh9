<template>
	<div>
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		
		<!-- 轮播图 -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for='img in imgs'>
		  	<a :href="img.url">
		  		<img :src="img.img" alt="">
		  	</a>
		  </mt-swipe-item>
		</mt-swipe>

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
		            	<a href="#">
		                    <span class="mui-icon icon-tuwenfenxiang">
		                    <!-- <span class="mui-badge">5</span> -->
		                    </span>
		                    <div class="mui-media-body">图文分享</div>
		                </a>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<a href="#">
		                    <span class="mui-icon icon-shangpinzhanshi"></span>
		                    <div class="mui-media-body">商品展示</div>
		                </a>
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
				imgs:[]
			}
		},
		created(){
			this.$ajax.get('getlunbo')
			.then(res => {
				this.imgs = res.data.message;
			})
			.catch(err => {
				console.log("获取图片信息错误");
			})
		},
		methods:{
			click(){
			}
		}
	}
</script>
<style scoped>
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe img{
		width: 100%;
		height: 100%;
	}
</style>