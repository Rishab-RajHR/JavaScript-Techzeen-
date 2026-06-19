const sliders = document.querySelectorAll("input[type='range']");
console.log(sliders);
sliders.forEach(function(slider){
    slider.addEventListener("input",calculateTip);
});

function calculateTip(){
  
}