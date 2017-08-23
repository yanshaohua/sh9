<template>
	<div class="tmpl">
		<nav-bar title="图片详情"></nav-bar>
        <div class="photo-title" :key="imgInfo.id">
            <p>{{imgInfo.title}}</p>
            <span>发起日期：{{imgInfo.add_time | Time}}</span>
            <span>{{imgInfo.click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="(img,index) in imgs" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <!-- <img :src="img.src"> -->
                <!-- 缩略图 -->
                <img class="preview-img" :src="img.src" height="100" @click="$preview.open(index, imgs)">
            </li>
        </ul>
        <div class="photo-desc">
            <p v-html="imgInfo.content"></p>
        </div>
        <comment :Id="imgId"></comment>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				imgId:'',
				imgInfo:{},
				imgs:[],
			}
		},
		created(){
			this.imgId = this.$route.params.id;
			
			this.$ajax.all([
				this.$ajax.get('getthumimages/'+ this.imgId),
				this.$ajax.get('getimageInfo/'+ this.imgId)
			])
			.then( this.$ajax.spread( (imgsRes,infoRes)=>{
				this.imgs = imgsRes.data.message;
				this.imgInfo= infoRes.data.message[0];

				this.imgs.forEach(ele => {
					ele.w = 600;
					ele.h = 400;
				})
			}))
			.catch(err => {
				console.log(err);
			})
		}
	}
</script>
<style>
	
</style>