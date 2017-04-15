var a1 = document.getElementById("check_img_1_1");
var a2 = document.getElementById("check_img_1_2");
var b1 = document.getElementById("check_img_2_1");
var b2 = document.getElementById("check_img_2_2");
var c1 = document.getElementById("check_img_3_1");
var c2 = document.getElementById("check_img_3_2");
var all1 = document.getElementById("check_all_1");
var all2 = document.getElementById("check_all_2");

a1.addEventListener("click",function(event){
    a1.style.display = "none";
    a2.style.display = "block";
    all1.style.display="none";
    all2.style.display="inline-block";
},false);
a2.addEventListener("click",function(e){
    a2.style.display="none";
    a1.style.display="block";
},false);

b1.addEventListener("click",function(e){
    b2.style.display="block";
    b1.style.display="none";
    all1.style.display="none";
    all2.style.display="inline-block";
},false);
b2.addEventListener("click",function(e){
    b1.style.display="block";
    b2.style.display="none";
},false);
c1.addEventListener("click",function(e){
    c2.style.display="block";
    c1.style.display="none";
    all1.style.display="none";
    all2.style.display="inline-block";
},false);
c2.addEventListener("click",function(e){
    c1.style.display="block";
    c2.style.display="none";
},false);
all1.addEventListener("click",function(e){
	all2.style.display="inline-block";
	all1.style.display="none";
	a1.click();
	b1.click();
	c1.click();
},false);
all2.addEventListener("click",function(e){
	all1.style.display ="inline-block";
	all2.style.display = "none";
	a2.click();
	b2.click();
	c2.click();
},false);
function checkall(){
    if(!(a2.style.display=="none" && b2.style.display=="none" && c2.style.display=="none") ){

    }
}
