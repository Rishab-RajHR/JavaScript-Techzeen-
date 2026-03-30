let element = document.getElementById("me");

function myFocus(){
     element.style.background = "aqua";
}

function myBlur(){
     element.style.background = "white";
}

function myChange() {
     console.log(this.value);
}


element.addEventListener('focus', myFocus);
element.addEventListener('blur', myBlur);