let inputElement = document.getElementById("input-box");
let listElement = document.getElementById("list-container");

function addTask(){
    if(inputElement.value === ''){
        alert("You Must Write Something")
    }
    else{
       let listItem = document.createElement("li");
       listItem.innerHTML = inputElement.value;
       listElement.appendChild(listItem);
    }
}