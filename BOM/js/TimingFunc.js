// Timeout Function

let timeId = setTimeout(show, 3000); // 3000ms --> 3sec

function show(){
  console.log("Good Morning");
}

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    clearTimeout(timeId);
})