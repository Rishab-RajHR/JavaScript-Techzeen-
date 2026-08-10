let elem = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".sliders input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

function generateShadow(){
     let hShadow = document.getElementById("h-shadow").value;
     let vShadow = document.getElementById("v-shadow").value;
     let blurRadius = document.getElementById("blur-radius").value;
     let spreadRadius = document.getElementById("spread-radius").value;

}