let divElement = document.getElementById("mainDiv");
let buttonElement = document.getElementById("btn");

// Default =>(false) Event Bubbling -> child first
buttonElement.addEventListener('click', btnClick)
divElement.addEventListener('click', divClick)
document.body.addEventListener('click', bodyClick)



// For doing Event Bubbling we do not pass true as parameter
// Event Capturing --> true(capturing)--> parent first
// buttonElement.addEventListener('click', btnClick, true)
// divElement.addEventListener('click', divClick, true)
// document.body.addEventListener('click', bodyClick, true)


// For stopping the execution we use stipPropogation

function btnClick(){
    console.log("Button Clicked!!!")
}
function divClick(event){
    console.log("Div Clicked!!!")
    event.stopPropagation();
}
function bodyClick(){
    console.log("Body Clicked!!!")
}