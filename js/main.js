/*
window.onload = function() {

    var images = [
        image1.jpg,
        image2.jpg,
        image3.jpg,
        ];

    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var img = document.getElementsByTagName("img");
    var i = 0, r;

    prev.addEventListener("click", function() {move(-1)});
    next.addEventListener("click", function() {move(+1)});

    function move(r) {
        i += r;
        i >= images.length ? i = 0 : i;
        i < 0 ? i = images.length -1 : i;
        img[0].src = images[i];

    }
    */