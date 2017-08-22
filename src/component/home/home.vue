<template>
	<div>
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
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
<style>
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe img{
		width: 100%;
		height: 100%;
	}
</style>