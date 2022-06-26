var re1 = document.querySelector('.img1');

var re2 = document.querySelector('.img2').src;
var re3 = document.querySelector('.img3').src;
var re4 = document.querySelector('.img4').src;
console.log(re2);

function Slider(i){
    console.log(i);
    var re2 = document.querySelector(`.${i}`).src;
 re1.src = re2;


}




function Slider(i){
    console.log(i);
    var re2 = document.querySelector(`.${i}`).src;
 re1.src = re2;


}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

