<template>
	<div class="tmpl">
        <!-- 引入返回导航 -->
        <nav-bar title="图文分享"></nav-bar>
        <div class="photo-header">
            <ul>
            	<li>
                    <a href="javascript:;" @click="getData(0)">全部</a>
                </li>
                <li v-for="titleData in titleDatas" :key="titleData.id">
                    <a href="javascript:;" @click="getData(titleData.id)">{{titleData.title}}</a>
                </li>
                
            </ul>
        </div>

        <div class="photo-list">
            <ul>
                <li v-for="imgData in imgDatas" :key="imgData.id">
                    <router-link :to="{name:'phone.detail',params:{id:imgData.id}}">
                    	<img v-lazy="imgData.img_url">
                        <p>
                            <span>{{imgData.title}}</span>
                            <br>
                            <span>{{imgData.zhaiyao}}</span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
	export default {
		data(){
			return {	
				titleDatas:[],
				imgDatas:[],
			}
		},
		created(){
			this.$ajax.get('getimgcategory')
			.then(res => {
				this.titleDatas = res.data.message;
			})
			.catch(err => {
				console.log(err);
			})
			this.getData(0);
		},
		methods:{
			getData(id){
				this.$ajax.get('getimages/'+ id )
				.then(res => {
					this.imgDatas = res.data.message;
				})
				.catch(err => {
					console.log(err);
				})
			}
		}
	}
</script>
<style>
	image[lazy=loading] {
	  width: 40px;
	  height: 300px;
	  margin: auto;
	}


	.photo-header li{
		list-style: none;
	    display: inline-block;
	    margin-left: 10px;
	    height: 30px;
	}
	.photo-header ul{
		margin:0;
		white-space: nowrap;
	    overflow-x: auto;
	    padding-left: 0px;
	    margin: 5;
	}


	.photo-list li {
	    list-style: none;
	    position: relative;
	}

	.photo-list li img {
	    width: 100%;
	    height: 230px;
	    vertical-align: top;
	}

	.photo-list ul {
	    padding-left: 0px;
	    margin: 0;
	}

	.photo-list p {
	    position: absolute;
	    bottom: 0px;
	    color: white;
	    background-color: rgba(0, 0, 0, 0.3);
	    margin-bottom: 0px;
	}

	.photo-list p span:nth-child(1) {
	    font-weight: bold;
	    font-size: 16px;
	}

</style>