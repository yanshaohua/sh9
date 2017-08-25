<template>
	<div class='tmpl'>
        <nav-bar title="商品详情"></nav-bar>
        <my-swipe :url="'getthumimages/'+ $route.params.id"></my-swipe>
        <div class="product-desc">
            <ul>
                <li><span class="product-desc-span">
                    {{detailData.title}}
                </span></li>
                <li class="price-li">市场价：
                    <s>￥{{detailData.market_price}}</s> 销售价：<span>￥{{detailData.sell_price}}</span></li>
                <li class="number-li">购买数量：<span @click="sub">-</span><span>{{passNum}}</span><span @click="add">+</span></li>
                <li>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click="change">加入购物车</mt-button>
                </li>
            </ul>
        </div>
        <transition name="ball"  v-on:after-enter="afterEnter">
            <div class="ball" v-if="isShow"></div>
        </transition>
        <div class="product-props">
            <ul>
                <li>商品参数</li>
                <li>商品货号：{{detailData.goods_no}}</li>
                <li>库存情况：{{detailData.stock_quantity}}件</li>
                <li>上架时间：{{detailData.add_time | Time}}</li>
            </ul>
        </div>
        <div class="product-info">
            <ul>
                <li>
                    <mt-button type="primary"  size="large" plain @click="showPhotoInfo">图文介绍</mt-button>
                </li>
                <li>
                    <mt-button type="danger" size="large" plain @click="showGoodsComment">商品评论</mt-button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Connect from '../commons/Connect.js';

	export default {
		data(){
			return {
				detailData:{},
                isShow:false,
                passNum:1,
                maxNum:0
			}
		},
		created(){
			var id = this.$route.params.id;
			this.$ajax.get('/goods/getinfo/' + id)
			.then(res => {
				this.detailData = res.data.message[0];
                this.maxNum = res.data.message[0].stock_quantity;
			})
			.catch(err => {

			})
		},
        methods:{
            change(){
                if(this.passNum === 0){
                    
                }
                this.isShow = true;

                Connect.$emit('changeShopcart',this.passNum);
            },
            afterEnter(){
                this.isShow = false;
            },
            sub(){
                if(this.passNum <= 0) return;
                this.passNum -= 1;
            },
            add(){
                if(this.passNum >= this.maxNum) return;
                this.passNum += 1;
            },
            showGoodsComment(){
                this.$router.push({
                    name:'goods.comment',
                    query:{goodsId:this.detailData.id}
                })
            },
            showPhotoInfo(){
                this.$router.push({
                    name:'goods.photo',
                    query:{id:this.detailData.id}
                })
            }
        }
	}
</script>
<style scoped>
.ball-enter-active {
    animation: bounce-in 1s;
}

@keyframes bounce-in {
    0% {
        transform: translate3d(0, 0, 0);
    }
    50% {
        transform: translate3d(140px, -50px, 0);
    }
    75% {
        transform: translate3d(160px, 0px, 0);
    }
    100% {
        transform: translate3d(140px, 300px, 0);
    }
}

.swiper {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 8px;
    width: 95%;
    border-radius: 15px;
    overflow: hidden;
}

.outer-swiper,
.product-desc,
.product-props,
.product-info {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 3px;
}


/*请ulpadding*/

.outer-swiper ul,
.product-desc ul,
.product-props ul,
.product-info ul {
    padding: 0;
}

.product-desc ul li,
.product-props ul li,
.product-info ul li {
    list-style: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 8px;
}

.product-desc ul >:nth-child(1) span {
    color: blue;
    font-size: 22px;
    font-weight: bold;
}

.product-desc ul >:nth-child(1) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.product-desc ul,
.product-info ul,
.product-props ul {
    padding-left: 10px;
}

.price-li span {
    color: red;
    font-size: 25px;
}

.price-li s {
    margin-right: 16px;
}


/*加减*/

.number-li span {
    display: inline-block;
    border: 2px solid rgba(0, 0, 0, 0.1);
    width: 25px;
}


/*商品参数*/

.product-props ul >:nth-child(1) {
    text-align: left;
}

.product-props ul:not(:nth-child(1)) {
    margin-left: 40px;
}

.product-info ul {
    margin-bottom: 70px;
    padding: 0 5;
}

.number-li span {
    text-align: center;
}

.number-li >:nth-child(2) {
    width: 40px;
}

.ball {
    border-radius: 50%;
    background-color: red;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 440px;
    left: 120px;
    display: inline-block;
    z-index: 9999;
}
</style>