/*
DOM EVENTS => Are actions or occurence that happens in a web page, like clicking a button, typing on a keyboard, or moving the mouse, which can be detected and responded to by JavaScript code.
*/

function btnClick(){
   console.log("Button Was Clicked!")
}

let btn = document.getElementById("btn");

// first paramter -> which event, second parameter -> which function
btn.addEventListener('click',btnClick);


// by using anoonymous function
btn.addEventListener('click',function(){
      btn.style.backgroundColor = "aqua";
});


// There can be more than one event listener

// Mouse Over Event
btn.addEventListener('mouseover', function(){
     console.log("Mouse Over Event!")
});

// Mouse Out Event
btn.addEventListener('mouseout', function(){
     console.log("Mouse Out Event!")
});