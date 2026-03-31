let divElement = document.getElementById("mainDiv");
let buttonElement = document.getElementById("btn");

// Default =>(false) Event Bubbling -> child first
buttonElement.addEventListener('click', btnClick)
divElement.addEventListener('click', divClick)
document.body.addEventListener('click', bodyClick)

function btnClick(){
    console.log("Button Clicked!!!")
}
function divClick(){
    console.log("Div Clicked!!!")
}
function bodyClick(){
    console.log("Body Clicked!!!")
}