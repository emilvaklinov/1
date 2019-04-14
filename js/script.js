
function pauseSlideshow() {
    pauseButton.innerHTML = "&#9658;"; // play character
    playing = false;
    clearInterval(slideInterval);
  }
  
  function playSlideshow() {
    pauseButton.innerHTML = "&#10074;&#10074;"; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
  }
  
  pauseButton.onclick = function() {
    if (playing) {
      pauseSlideshow();
    } else {
      playSlideshow();
    }
  };
  
  var next = document.getElementById("next");
  var previous = document.getElementById("previous");
  
  next.onclick = function() {
    pauseSlideshow();
    nextSlide();
  };
 
  previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
  };