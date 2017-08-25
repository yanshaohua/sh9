<template>
	<div class="tmpl">
		<nav-bar :title="title"></nav-bar>
        <div class="news-title">
            <p>{{detailData.title}}</p>
            <div>
                <span>{{detailData.click}}次点击</span>
                <span>分类:民生经济</span>
                <span>添加时间:{{detailData.add_time | Time}}</span>
            </div>
        </div>
        <div class="news-content" v-html="detailData.content"></div>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				detailData:{},
				title:''
			}
		},
		created(){
			let id = this.$route.query.id;
			this.$ajax.get('getnew/'+ id)
			.then(res => {
				this.detailData = res.data.message[0]
			})
			.catch(err => {
				console.log(err);
			})
		},
		beforeRouteEnter (to,from,next){
			let title = '';
			if(from.name === 'goods.detail' || to.name.startsWith === 'goods'){
				title="商品详情";
			}else if(from.name === 'newsList' || to.name.startsWith === 'news'){
				title="新闻详情";
			}

			next(vm => {
				vm.title = title;
			});
		}
	}
</script>
<style>
	
</style>