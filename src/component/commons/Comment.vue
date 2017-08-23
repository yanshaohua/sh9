<template>
	<div class="tmpl">
        <div class="photo-bottom">
            <ul>
                <li class="photo-comment">
                    <div>
                        <span>提交评论</span>
                        <span><a @click="click">返回</a></span>
                    </div>
                </li>
                <li class="txt-comment">
                    <textarea v-model="comment"></textarea>
                </li>
                <li>
                    <mt-button @click="addData" type="primary" size="large">发表评论按钮</mt-button>
                </li>
                <li class="photo-comment">
                    <div>
                        <span>评论列表</span>
                        <span>44条评论</span>
                    </div>
                </li>
            </ul>
            <ul class="comment-list">
                <li v-for="comList in comLists">
                   	{{comList.user_name}} : {{comList.content}} {{comList.add_time | Time}}
                </li>
            </ul>
            <mt-button type="danger" size="large" @click="getPageData" plain>加载更多按钮</mt-button>
        </div>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				comLists:[],
				comment:'',
				currentPage:2
			}
		},
		props:["Id"],
		created(){
				this.getData();
		},	
		methods:{
			click(){
				this.$router.go(-1);
			},
			
			// getcomments/'+ this.Id +'?pageindex=
			getData(){
				this.$ajax.get('getcomments/'+this.Id+'?pageindex=1')
				.then(res => {
					this.comLists = res.data.message
				})
				.catch(err => {
					console.log(err);
				})
			},
			addData(){
				this.$ajax.post('postcomment/'+ this.Id ,'content=' + this.comment)
				.then(res => {
					this.currentPage = 2;
					this.comment = "";
					this.getData();
				})
				.catch(err => {
					console.log(err);
				})
			},
			getPageData(){
				this.$ajax.get('getcomments/' + this.Id + '?pageindex=' + this.currentPage)
				.then(res => {
					this.currentPage ++;
					this.comLists = this.comLists.concat(res.data.message);
				})
				.catch(err => {
					console.log(err);
				})
			}
		}	
	}
</script>
<style scoped>
	.photo-comment > div span:nth-child(1) {
    float: left;
    font-weight: bold;
    margin-left: 5px;
}

.photo-comment > div span:nth-child(2) {
    float: right;
}

.photo-comment {
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    line-height: 30px;
    margin-bottom: 5px;
}

.txt-comment {
    padding: 5 5;
}

.txt-comment textarea {
    margin-bottom: 5px;
}

.comment-list li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}
</style>