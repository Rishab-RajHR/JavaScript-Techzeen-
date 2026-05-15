let playerText = document.getElementById('playerTxt');
let restartBtn = document.getElementById('restartBtn');

let winningBlock = getComputedStyle(document.body).getPropertyValue('--winning-block');

let boxes = Array.from(document.getElementsByClassName('box'));

// console.log(boxes);

const O_Text = "O";
const X_Text = "X";


let currentPlayer = X_Text;
let spaces = Array(9).fill(null);


const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
}

function boxClicked(e){
     const id  = e.target.id;
     if (!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
     }
}