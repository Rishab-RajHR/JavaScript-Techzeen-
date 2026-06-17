let [milliseconds,seconds,minute,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');

document.getElementById('startTimer').addEventListener('click', ()=>{
    int = setInterval(displayTimer,10);
})