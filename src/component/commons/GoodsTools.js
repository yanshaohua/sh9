let goodsTools = {};

let prods = JSON.parse(window.localStorage.getItem('prods')) || {}; 
goodsTools.addOrUpdate = function (goods) {
	if(prods[goods.id]){
		prods[goods.id] += goods.num;
	}else{
		prods[goods.id] = goods.num;
	}

	this.save(prods);
}

goodsTools.deleteProd = function (prodId) {
	delete prods[prodId];

	this.save(prods);
}

goodsTools.getProds = function (id) {
	let prods = JSON.parse(window.localStorage.getItem('prods')) || {}; 

	if(id){
		return prods[id];
	}else{
		return prods;
	}
}

goodsTools.save = function (prods) {
	window.localStorage.setItem('prods',JSON.stringify(prods));
}

goodsTools.getProdCount = function () {
	let sum = 0;
	let prods = this.getProds();

	for(let id in prods){
		sum += prods[id];
	}
	return sum;
}

export default goodsTools;