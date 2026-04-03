// innerWidth innerHeight

// console.log(window.innerWidth);
// console.log(window.innerWidth);


// outerWidth outerHeight

// console.log(window.outerWidth);
// console.log(window.outerWidth);


// open new window
let element1 = document.getElementById('btn-1');

let url = "https://www.yahoo.com";
let features = "height=500, width=500";

element1.addEventListener('click', function(){
    // first parameter = url, second parameter = name, third paramter = features
    window.open(URL, 'yahoo', features);
})