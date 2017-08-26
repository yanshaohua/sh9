<template>
	<div class="tmpl">
        <nav-bar title="购物车"></nav-bar>
        <div class="pay-detail">
            <ul>
                <li v-for="(goods,index) in goodsList" :key="goods.id" class="p-list">
                    <mt-switch v-model="goods.isChecked"></mt-switch>
                    <img :src="goods.thumb_path">
                    <div class="pay-calc">
                        <p v-text="goods.title"></p>
                        <div class="calc">
                            <span>￥{{goods.sell_price}}</span>
                            <span @click="sub(goods)">-</span>
                            <span>{{goods.num}}</span>
                            <span @click="add(goods)">+</span>
                            <a href="javascript:;" @click='del(index)'>删除</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计(不含运费):</p>
                <span>已经选择商品{{payment.count}}件，总价{{payment.totalPrice}}元</span>
            </div>
            <div class="show-2">
                <mt-button type="danger" size="large">去结算</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import GoodsTools from '../commons/GoodsTools.js';
import Connect from '../commons/Connect.js';
	export default {
		data(){
			return {
				goodsList:[]
			}
		},
		created(){
			let prods = GoodsTools.getProds();
			let ids = Object.keys(prods).join(',');
			let url = "goods/getshopcarlist/" + ids;

			this.$ajax.get(url)
			.then(res => {
				this.goodsList = res.data.message;

				this.goodsList.forEach( ele => {
					this.$set(ele,'isChecked',true);
                	this.$set(ele,'num',prods[ele.id]);
				})
			})
			.catch(err => {
				console.log(err);
			})
		},
		methods:{
			sub(goods){
				if(goods.num <= 0) return;
				goods.num --;
			},
			add(goods){
				goods.num ++;
			},
			del(i){
				if(confirm('是否确定删除')){
					let id = '';
					this.goodsList.forEach( (ele,index) => {
						if(i == index){
							id = ele.id;
						}
					})
					this.goodsList.splice(i,1);

					GoodsTools.deleteProd(id);
				}
			}
		},
		computed:{
			payment(){
				let count = 0;
				let totalPrice = 0;

				this.goodsList.forEach(ele => {
					if(ele.isChecked){
						count += ele.num;
						totalPrice += ele.sell_price * ele.num;
					}
				})

				return {
					count,totalPrice
				}
			}
		},
		beforeRouteLeave (to, from, next){
			if(confirm('亲，确定要离开吗，这么好的商品')){
				let obj = {};

				this.goodsList.forEach(ele => obj[ele.id] = ele.num);

				GoodsTools.save(obj);

				let sum = GoodsTools.getProdCount();

				Connect.$emit('changeShopcart2',sum);

				next();
			}else{
				next(false);
			}
		}
	}
</script>
<style scoped>
	.pay-detail ul li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 3px;
}

.pay-detail ul {
    padding-left: 5px;
    margin-top: 5px;
}

.pay-detail ul li img {
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
}

.pay-detail ul li >:nth-child(1),
.pay-detail ul li >:nth-child(3) {
    display: inline-block;
}

.pay-calc p {
    display: inline-block;
    width: 250px;
    overflow: hidden;
    color: blue;
    font-size: 15px;
    margin-bottom: 10px;
}

.pay-detail ul li >:nth-child(1) {
    line-height: 80px;
}

.calc:nth-child(1) {
    color: red;
    font-size: 20px;
}

.calc span:not(:nth-child(1)) {
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: 20px;
    text-align: center;
}

.calc a {
    margin-left: 20px;
}

.show-1,
.show-2 {
    display: inline-block;
}

.show-1,
.show-2 {
    margin-left: 30px;
}

.show-price {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>