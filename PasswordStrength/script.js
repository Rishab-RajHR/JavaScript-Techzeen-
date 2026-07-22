function toggle() {
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");

    if(password.getAttribute("type") == "password"){
        password.setAttribute("type","text");
    }
    else{
       password.setAttribute("type","password");
    }
}