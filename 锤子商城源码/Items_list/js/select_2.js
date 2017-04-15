var item_app = [
    ["pic/line_erji_1.jpg", "pic/line_erji_2.jpg", "pic/line_erji_3.jpg", "pic/line_erji_4.jpg", "pic/line_erji_5.jpg"],
    ["pic/line_erji_black_1.jpg", "pic/line_erji_black_2.jpg", "pic/line_erji_black_3.jpg", "pic/line_erji_black_4.jpg", "pic/line_erji_black_5.jpg"],
    ["pic/line_erji_gray_1.jpg", "pic/line_erji_gray_2.jpg", "pic/line_erji_gray_3.jpg", "pic/line_erji_gray_4.jpg", "pic/line_erji_gray_5.jpg"]
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