// Timeout Function

// let timeId = setTimeout(show, 3000); // 3000ms --> 3sec

//timeInterval Function => after every interval  of time
let timeInterval = setInterval(show, 3000);


function show(){
  console.log("Good Morning");
}

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    // clearTimeout(timeId);
    clearInterval(timeInterval);
})