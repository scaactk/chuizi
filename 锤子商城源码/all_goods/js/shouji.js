var shouji = document.querySelector(".white .white-main ul li:nth-child(2)");
var shoujihide = document.querySelector(".white-hidden");
var head = document.querySelector(".black");
var mid = document.querySelector(".main-main");
var main = document.querySelector(".main");
shouji.addEventListener("mouseover", function() {
    shoujihide.style.display = "block";
}, false);
head.addEventListener("mouseover", function() {
    shoujihide.style.display = "none";
}, false);
mid.addEventListener("mouseover", function() {
    shoujihide.style.display = "none";
}, true);

main.addEventListener("mouseover", function() {
    shoujihide.style.display = "none";
}, false);