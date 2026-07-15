let outputCode = document.getElementById("css-code");

let sliders = document.querySelectorAll("input['type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input",createBlob);
});

let inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(function(inp){
    inp.addEventListener("change",createBlob);
});

function createBlob(){
     let radiusOne = sliders[0].value;
     let radiusTwo = sliders[1].value;
     let radiusThree = sliders[2].value;
     let radiusFour = sliders[3].value;

     let blobHeight = inputs[0].value;
     let blobWidth = inputs[1].value;

     let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`;
}