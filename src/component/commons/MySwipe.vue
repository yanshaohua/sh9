<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for='img in imgs'>
		  	<a :href="img.url">
		  		<img :src="img.img" alt="">
		  	</a>
		  </mt-swipe-item>
		</mt-swipe>	
	</div>
</template>
<script>
	export default {
		data(){
			return {
				imgs:[]
			}
		},
		props:["url"],
		created(){
			this.$ajax.get(this.url)
			.then(res => {
				this.imgs = res.data.message;
			})
			.catch(err => {
				console.log("获取图片信息错误");
			})
		},
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