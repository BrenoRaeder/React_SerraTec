var cores = ["#325281", "#c4bfbf", "#242222", "#a04d4d", "#bbbb67"];
var cor = ""

function changeColor() {
   cor = cores[Math.floor(Math.random() * 4)];

   document.querySelector('body').style.backgroundColor = cor;
}