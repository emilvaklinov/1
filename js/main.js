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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}