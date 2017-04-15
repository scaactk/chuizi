var deleteBotton = document.querySelectorAll(".items_inner .items_right_delete");
var goodsNumber = document.querySelector(".car_total p strong");
var totalMoney = document.querySelector(".car_total .price_num");
var wy_card = document.querySelector(".car_hidden");
var totalNum = document.querySelector("#totalNum");

function getTotalMoney(){
	var result = 0;
	var blocks = document.querySelectorAll(".items_inner");
	var $blocks = Array.prototype.slice.call(blocks);
	$blocks.map(function(li, index, array){
		if(li.style.display != "none"){
			var number = li.children[1].children[2].children[2];
		var price_num = li.children[1].children[2].children[1];
		result += Number(number.innerHTML.trim().slice(1)) * Number(price_num.innerHTML.trim());
		}
		
	});
	return result;
}
//购物车添加减少
Array.prototype.slice.call(deleteBotton).map(function(value, index, array){
	value.addEventListener("click",function(event){
		var outer = event.target.parentNode.parentNode.parentNode;
		var thisMoney = outer.children[1].children[2].children[1];
		var thisNumber = outer.children[1].children[2].children[2];
		outer.style.display = "none";
		goodsNumber.innerHTML = Number(goodsNumber.innerHTML) - Number(thisNumber.innerHTML.trim().slice(1));
		totalNum.innerHTML = goodsNumber.innerHTML;
		thisNumber.innerHTML = "x1";
		totalMoney.innerHTML = getTotalMoney();
	});
});

var blueAddBotton = document.querySelectorAll(".goods-price");
var $blueAddBotton = [];
$blueAddBotton.push(blueAddBotton[0]);
$blueAddBotton.push(blueAddBotton[1]);
$blueAddBotton.push(blueAddBotton[3]);
$blueAddBotton.map(function(value, index, array){
	value.addEventListener("click",function(event){
		var i = $blueAddBotton.indexOf(event.target.parentNode.parentNode);
		var x = Number(wy_card.children[i].children[1].children[2].children[2].innerHTML.trim().slice(1));
		if (wy_card.children[i].style.display == "none") {
			wy_card.children[i].style.display = "block";
		} else {
			x += 1;
			wy_card.children[i].children[1].children[2].children[2].innerHTML = "x" + x; 
		
		}
		var thisMoney = wy_card.children[i].children[1].children[2].children[1];
		totalMoney.innerHTML = getTotalMoney();
		goodsNumber.innerHTML = Number(goodsNumber.innerHTML)+1;
		totalNum.innerHTML = goodsNumber.innerHTML;
		
	},false);
});