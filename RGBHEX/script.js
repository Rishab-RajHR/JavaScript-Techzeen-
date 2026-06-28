let hexInput = document.getElementById("hex");
let rgbInput = document.getElementById("rgb");

window.onload=()=>{
   hexInput.value = "";
   rgbInput.value = "";
}

function valid(element){
     element.style.color = "#202040";
}

function invalid(element,otherElement){
    element.style.color = "#f04624";
    otherElement.value = 0;
}

function toRgb(){
    let hexCode = hexInput.value;
    console.log(hexInput);
}