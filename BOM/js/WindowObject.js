// innerWidth innerHeight

// console.log(window.innerWidth);
// console.log(window.innerWidth);


// outerWidth outerHeight

// console.log(window.outerWidth);
// console.log(window.outerWidth);


// open new window
let element1 = document.getElementById('btn-1');
let element2 = document.getElementById('btn-2');
let element3 = document.getElementById('btn-3');

let url = "https://www.yahoo.com";
let features = "height=500, width=500";

let openWindow;

element1.addEventListener('click', function(){
    // first parameter = url, second parameter = name, third paramter = features
   openWindow =  window.open(URL, 'web', features);
})


// Change url
element2.addEventListener('click', function(){
    window.open('https://www.google.com', 'web');
})


// Close Window
element3.addEventListener('click', function(){
    openWindow.close();
})

