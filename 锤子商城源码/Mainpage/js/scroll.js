var headfix = document.querySelector(".header");
addEventListener("scroll", function() {
    var pos = document.body.scrollTop;
    if (pos > 180) {
        headfix.id = "fix-main";
    } else {
        headfix.id = "";
    }
}, false);