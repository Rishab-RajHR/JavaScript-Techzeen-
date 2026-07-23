let parameters = {
     count : false,
     letters : false,
     numbers: false,
     special: false
}

let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");



function toggle() {
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");

    if(password.getAttribute("type") == "password"){
        password.setAttribute("type","text");
        eye.style.color = "#0be881";
    }
    else{
       password.setAttribute("type","password");
       eye.style.color = "#808080";
    }
}