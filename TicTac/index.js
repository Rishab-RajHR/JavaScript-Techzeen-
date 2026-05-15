let playerText = document.getElementById('playerTxt');
let restartBtn = document.getElementById('restartBtn');

let winningBlock = getComputedStyle(document.body).getPropertyValue('--winning-block');

let boxes = Array.from(document.getElementsByClassName('box'));

console.log(boxes);