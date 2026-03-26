// About to get loaded
window.addEventListener('DOMContentLoaded', function() {
    let heading = document.getElementById("main");
    heading.textContent = "DOM Loaded";
})


// When everything  is loaded 
window.addEventListener('load', function(){
    alert("Page fully Loaded!")
})