			var myGoodsSelect = {
			    eventElementUlArray: Array.prototype.slice.call(document.querySelectorAll(".goods-point ul")),
			    addFun: function() {
			        this.eventElementUlArray.map(function(ul, ulindex, uls) {
			            var lis = Array.prototype.slice.call(ul.children);
			            lis.map(function(li, liindex, lis) {
			                li.addEventListener("mouseover", function() {
			                    Array.prototype.slice.call(lis).map(function(value) {
			                        value.className = "";
			                    });
			                    li.className = "li_selected"
			                    var imgs = ul.parentNode.parentNode.children[0].children[0].children;
			                    Array.prototype.slice.call(imgs).map(function(img, imgindex, imgs) {
			                        if (imgindex == liindex) {
			                            img.style.display = "block";
			                        } else {
			                            img.style.display = "none";
			                        }
			                    });
			                }, false);
			            });
			        });
			    }
			}
			window.onload = myGoodsSelect.addFun();