
// Getting the button
topButton = document.getElementById("topBtn");


// Calling the function when user scrolls down
window.onscroll = function(){scrollDown()};

// Function called when user scrolls down
function scrollDown() {
  if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
    topButton.style.display = "block";
  }else {
    topButton.style.display = "none";
  }
}

// Functin called by button click
function toTheTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
