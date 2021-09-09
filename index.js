function time() {
  let d = new Date();
  let h = d.getHours();
  let se = d.getSeconds();
  let min = d.getMinutes();
  if(h>12) h=h-12;
  if (se < 10) {
    document.getElementById("time").innerHTML = h + ":" + "0" + min;
     
  } else {
    document.getElementById("time").innerHTML = h + ":" + "0" + min;
  }
  if (min < 10) {
    document.getElementById("time").innerHTML = h + ":" + "0" + min;
  } else {
    document.getElementById("time").innerHTML = h + ":" + min;
  }
}
setInterval(time, 1000);

let ads = 95077;
let b=2;
let sum = 1;
function set() {
  ads += 5;
  document.getElementById("ads").innerHTML = ads;
}
setInterval(set, 50000);


function go() {
  let text = document.getElementById("input").value;
  document.getElementById("input").value=""
  document.getElementById("input").placeholder = ""
  window.location.assign(
    `https://www.google.com/search?q=${text}&oq=game&aqs=chrome.0.69i59j69i57j5l3.853j0j4&sourceid=chrome&ie=UTF-8`
  );
  console.log("hello");
}
function cre(){
  var tag = document.createElement("a");
  var name = prompt("Enter your tag name");
  var x = name[0];
  tag.innerHTML = x;
  tag.style.fontSize = "40px"
  var element=document.getElementById("bdy");
   element.appendChild(tag);
}



