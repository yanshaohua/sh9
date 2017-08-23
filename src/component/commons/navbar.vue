<template>
	<div>
		<header id="header" class="mui-bar mui-bar-nav">
			<a @click='click' class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">{{title}}</h1>
		</header>
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
				this.$router.go(-1);
			}
		},
		props:['title']
	}
</script>
<style>
	#header{
		position: relative;
	}
</style>