let outputCode = document.getElementById("css-code");

let sliders = document.querySelectorAll("input['type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input",createBlob);
});