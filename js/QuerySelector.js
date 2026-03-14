// querySelector => selects the first element 
// querySelectorAll => selects all the matching element 


// let element = document.querySelector('h3.heading');

// element.innerHTML = "Hii";


let element = document.querySelectorAll('h3.heading');
// For accessing Array we use loops
for(let i=0; i<element.length; i++){
    element[i].innerHTML = "Alex";
}