let elem = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".sliders input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

function generateShadow(){
     let hShadow = document.getElementById("h-shadow").value;
     let vShadow = document.getElementById("v-shadow").value;
     let blurRadius = document.getElementById("blur-radius").value;
     let spreadRadius = document.getElementById("spread-radius").value;
     let shadowRadius = document.getElementById("shadow-color").value;
     let shadowColorOpacity = document.getElementById("shadow-color-opacity").value;
     let shadowInset = document.getElementById("shadow-inset").checked;
     console.log(hexToRgba(shadowColor, shadowColorOpacity));
}

function hexToRgba(shadowColor, shadowColorOpacity) {
    let r = parseInt(shadowColor.substr(1, 2), 16);
    let g = parseInt(shadowColor.substr(3, 2), 16);
    let b = parseInt(shadowColor.substr(5, 2), 16);
}