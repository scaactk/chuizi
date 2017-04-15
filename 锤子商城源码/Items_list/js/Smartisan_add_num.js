// var wy_select_good = document.querySelectorAll(".items_choose");
// var wy_single_money = document.querySelectorAll(".price_text span");
// var wy_min_btn = document.querySelectorAll(".down");
// var wy_single_num = document.querySelectorAll(".num_input");
// var wy_add_btn = document.querySelectorAll(".up");
// var wy_little_money = document.querySelectorAll(".littel_price_span b");
// var wy_big_delete_btn = document.querySelectorAll(".delete_img");

// var selectNum = document.querySelector("#pay_goods_num");
// var totalNum = document.querySelector("#pay_goods_num_total");
// var totalMoney = document.querySelector(".total_money");

function single_money(){
	var wy_select_good = document.querySelectorAll(".items_choose");
	var wy_single_money = document.querySelectorAll(".price_text span");
	var wy_min_btn = document.querySelectorAll(".down");
	var wy_single_num = document.querySelectorAll(".num_input");
	var wy_add_btn = document.querySelectorAll(".up");
	var wy_little_money = document.querySelectorAll(".littel_price_span b");
	var wy_big_delete_btn = document.querySelectorAll(".delete_img");


	var selectNum = document.querySelector("#pay_goods_num");
	var totalNum = document.querySelector("#pay_goods_num_total");
	var totalMoney = document.querySelector(".total_money");
	for(var i = 0; i < wy_single_money.length; i++){
		var singleMoney = Number(wy_single_money[i].innerHTML.trim().slice(1));
		var singleNum = Number(wy_single_num[i].innerText);
		var singleTotalMoney = singleNum*singleMoney;
		wy_little_money[i].innerHTML = "￥ " +singleTotalMoney.toFixed(2);
	}
}

function minGoodsNumber(){
	var wy_select_good = document.querySelectorAll(".items_choose");
	var wy_single_money = document.querySelectorAll(".price_text span");
	var wy_min_btn = document.querySelectorAll(".down");
	var wy_single_num = document.querySelectorAll(".num_input");
	var wy_add_btn = document.querySelectorAll(".up");
	var wy_little_money = document.querySelectorAll(".littel_price_span b");
	var wy_big_delete_btn = document.querySelectorAll(".delete_img");

	var selectNum = document.querySelector("#pay_goods_num");
	var totalNum = document.querySelector("#pay_goods_num_total");
	var totalMoney = document.querySelector(".total_money");
	var $minBtn = Array.prototype.slice.call(wy_min_btn);
	$minBtn.map(function(value, index, array){
		value.addEventListener("click",function(){
			wy_single_num[index].innerHTML = Number(wy_single_num[index].innerHTML)-1 > 0 ? Number(wy_single_num[index].innerHTML)-1: 1;
			single_money();
			changeAllMoney();changeAllNum();changeSelectNum();
		},false);
	});
	changeAllMoney();
}

function addGoodsNumber(){
	var wy_select_good = document.querySelectorAll(".items_choose");
	var wy_single_money = document.querySelectorAll(".price_text span");
	var wy_min_btn = document.querySelectorAll(".down");
	var wy_single_num = document.querySelectorAll(".num_input");
	var wy_add_btn = document.querySelectorAll(".up");
	var wy_little_money = document.querySelectorAll(".littel_price_span b");
	var wy_big_delete_btn = document.querySelectorAll(".delete_img");


	var selectNum = document.querySelector("#pay_goods_num");
	var totalNum = document.querySelector("#pay_goods_num_total");
	var totalMoney = document.querySelector(".total_money");
	var $addBtn = Array.prototype.slice.call(wy_add_btn);
	$addBtn.map(function(value, index, array){
		value.addEventListener("click",function(){
			wy_single_num[index].innerHTML = Number(wy_single_num[index].innerHTML) + 1;
			single_money();
				changeAllMoney();changeAllNum();changeSelectNum();
		},false);
	});
	changeAllMoney();
}

function delete_block_fn(){
	var wy_select_good = document.querySelectorAll(".items_choose");
	var wy_single_money = document.querySelectorAll(".price_text span");
	var wy_min_btn = document.querySelectorAll(".down");
	var wy_single_num = document.querySelectorAll(".num_input");
	var wy_add_btn = document.querySelectorAll(".up");
	var wy_little_money = document.querySelectorAll(".littel_price_span b");
	var wy_big_delete_btn = document.querySelectorAll(".delete_img");

	var selectNum = document.querySelector("#pay_goods_num");
	var totalNum = document.querySelector("#pay_goods_num_total");
	var totalMoney = document.querySelector(".total_money");
	var $wy_big_delete_btn = Array.prototype.slice.call(wy_big_delete_btn);
	$wy_big_delete_btn.map(function(value, index, array){
		value.addEventListener("click", function(){
			value.parentNode.parentNode.parentNode.removeChild(value.parentNode.parentNode);
				changeAllMoney();changeAllNum();changeAllNum();changeSelectNum();
		});
	});

}

function changeAllNum(){
	var wy_select_good = document.querySelectorAll(".items_choose");
	var wy_single_money = document.querySelectorAll(".price_text span");
	var wy_min_btn = document.querySelectorAll(".down");
	var wy_single_num = document.querySelectorAll(".num_input");
	var wy_add_btn = document.querySelectorAll(".up");
	var wy_little_money = document.querySelectorAll(".littel_price_span b");
	var wy_big_delete_btn = document.querySelectorAll(".delete_img");
	var all = document.querySelector(".items");
	var selectNum = document.querySelector("#pay_goods_num");
	var totalNum = document.querySelector("#pay_goods_num_total");
	var totalMoney = document.querySelector(".total_money");
	var result = 0;
	
	var $wy_single_num = Array.prototype.slice.call(wy_single_num);
	if(all.children.length == 1){
		totalNum.innerHTML = 0;
	} else {
		$wy_single_num.map(function(value, index, array){
			totalNum.innerHTML = result += Number(value.innerHTML);
		});
	}
}


function changeAllMoney(){
	var wy_select_good = document.querySelectorAll(".items_choose");
	var wy_single_money = document.querySelectorAll(".price_text span");
	var wy_min_btn = document.querySelectorAll(".down");
	var wy_single_num = document.querySelectorAll(".num_input");
	var wy_add_btn = document.querySelectorAll(".up");
	var wy_little_money = document.querySelectorAll(".littel_price_span b");
	var wy_big_delete_btn = document.querySelectorAll(".delete_img");
	var all = document.querySelector(".items");
	var selectNum = document.querySelector("#pay_goods_num");
	var totalNum = document.querySelector("#pay_goods_num_total");
	var totalMoney = document.querySelector(".total_money");
	var result = 0;
	var flag = 0;
	var $wy_little_money = Array.prototype.slice.call(wy_little_money);
	if(all.children.length == 0){
		totalMoney.innerHTML = 0;
	} else {
		$wy_little_money.map(function(value, index, array){
			if(value.parentNode.parentNode.parentNode.children[0].children[0].style.display == "block"){
				totalMoney.innerHTML = result+=Number(value.innerHTML.trim().slice(1));
				flag = 1;
			}
		});
	}
	if(flag == 0){
		totalMoney.innerHTML = "0";
	}
}

function changeSelectNum(){
	var wy_select_good = document.querySelectorAll(".items_choose");
	var wy_single_money = document.querySelectorAll(".price_text span");
	var wy_min_btn = document.querySelectorAll(".down");
	var wy_single_num = document.querySelectorAll(".num_input");
	var wy_add_btn = document.querySelectorAll(".up");
	var wy_little_money = document.querySelectorAll(".littel_price_span b");
	var wy_big_delete_btn = document.querySelectorAll(".delete_img");
	var all = document.querySelector(".items");
	var selectNum = document.querySelector("#pay_goods_num");
	var totalNum = document.querySelector("#pay_goods_num_total");
	var totalMoney = document.querySelector(".total_money");
	var result = 0;
	var flag_se = 0;

	var $wy_single_num = Array.prototype.slice.call(wy_single_num);
	$wy_single_num.map(function(value, index, array){
			if(value.parentNode.parentNode.children[0].children[0].style.display == "block"){
				result += Number(value.innerHTML);
			}
		}
	);
	selectNum.innerHTML = result;
}


function selectFn(){
	var wy_select_good = document.querySelectorAll(".items_choose");
	var $wy_select_good = Array.prototype.slice.call(wy_select_good);
	$wy_select_good.map(function(value, index, array){
		value.addEventListener("click",changeAllMoney,false);
		value.addEventListener("click",changeSelectNum,false);
	});
}


// changeSelectNum();
minGoodsNumber();
addGoodsNumber();
delete_block_fn();
selectFn();