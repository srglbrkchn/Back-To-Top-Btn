topButton = document.getElementById("topBtn");


window.onscroll = function(){scrollDown()};

function scrollDown() {
  if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
    topButton.style.display = "block";
  }else {
    topButton.style.display = "none";
  }
}


function toTheTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTo = 0;
}
