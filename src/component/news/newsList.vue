<template>
	<div>
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		<nav-bar title="新闻列表"></nav-bar>
		<div class="tmpl">
	        <ul class="mui-table-view">
	            <li v-for="news in newsList" class="mui-table-view-cell mui-media">
	                <router-link :to="{name:'news.detail',query:{id:news.id}}">
	                    <img class="mui-media-object mui-pull-left" :src="news.img_url">
	                    <div class="mui-media-body">
	                        <span>{{news.title}}</span>
	                        <div class="news-desc">
	                            <p>点击数:{{news.click}}</p>
	                            <p>发表时间:{{news.add_time | Time}}</p>
	                        </div>
	                    </div>
	                </router-link>
	            </li>
	        </ul>
	    </div>

	</div>
</template>
<script>
	export default{
		data(){
			return {
				newsList:[]
			}
		},
		created(){
			this.$ajax.get("getnewslist")
			.then(res => {
				this.newsList = res.data.message
			})
			.catch(err => {
				console.log(err);
			})
		}
	}
</script>
<style>
	.tmpl{
		margin-bottom: 50px;
	}
</style>