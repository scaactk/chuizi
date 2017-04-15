var item_app = [
    ["pic/whiteerji1.jpg", "pic/whiteerji2.jpg", "pic/whiteerji3.jpg", "pic/whiteerji4.jpg", "pic/whiteerji5.jpg"],
    ["pic/1.jpg", "pic/2.jpg", "pic/3.jpg", "pic/4.jpg", "pic/5.jpg"]
];
var item_colorBlock = document.querySelectorAll(".color_number .color_area ul .color_li");
var item_imgBlock = document.querySelectorAll(".thumbnail .thumbnail_ul .thumbnail_li img");
var item_bigImg = document.querySelector(".thumb .thumb_ul .thumb_li img");
Array.prototype.slice.call(item_colorBlock).map(function(value, index, array) {
    value.addEventListener("click", function(event) {
        item_colorBlockArray = Array.prototype.slice.call(item_colorBlock);
        var i = item_colorBlockArray.indexOf(event.target);
        for (var j = 0; j < item_imgBlock.length; j++) {
            item_imgBlock[j].src = item_app[i][j];
        }
        item_bigImg.src = item_app[i][0];
    })
});
Array.prototype.slice.call(item_imgBlock).map(function(value, index, array) {
    value.addEventListener("click", function() {
        item_bigImg.src = value.src;
    })
});

var item_minusIcon = document.querySelector(".minus_add span.minus_icon ");
var item_addIcon = document.querySelector(".minus_add span.add_icon");
var item_goodsNumber = document.querySelector(".minus_add span.input_area");

item_minusIcon.addEventListener("click", function() {
    item_goodsNumber.innerHTML = Number(item_goodsNumber.innerHTML) - 1 > 0 ? Number(item_goodsNumber.innerHTML) - 1 : 1;
}, false);

item_addIcon.addEventListener("click", function() {
    item_goodsNumber.innerHTML = Number(item_goodsNumber.innerHTML) + 1;
}, false);