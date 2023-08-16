// inner HTML
const headline = document.querySelector(".headline");
console.log(headline);
headline.innerHTML="<h1>Hey this is me</h1>";
headline.innerHTML += "<button class=\'btn\'>This is button comes from</button>";
console.log(headline);