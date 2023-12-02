const button = document.querySelector('.button');
const move = document.querySelector('.move');
const compChoice = document.querySelector('.comp-choice');
const userWin = document.querySelector('.user-win');
const compWin = document.querySelector('.comp-win');
const stalemate = document.querySelector('.stalemate');

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const index = Math.floor(Math.random() * 3);
const choices = [rock, paper, scissors];

function game() {
    const computer = choices[index];
    if (move.value == rock && computer == paper) {
        compChoice.textContent = 'computer has chosen: ' + computer;
        compWin.textContent = 'computer wins!';
    } else if (move.value == rock && computer == scissors) {
        compChoice.textContent = 'computer has chosen: ' + computer;
        userWin.textContent = 'user wins!';
    } else if (move.value == paper && computer == rock) {
        compChoice.textContent = 'computer has chosen: ' + computer;
        userWin.textContent = 'user wins!';
    } else if (move.value == paper && computer == scissors) {
        compChoice.textContent = 'computer has chosen: ' + computer;
        compWin.textContent = 'computer wins!';
    } else if (move.value == scissors && computer == rock) {
        compChoice.textContent = 'computer has chosen: ' + computer;
        compWin.textContent = 'computer wins!';
    } else if (move.value == scissors && computer == paper) {
        compChoice.textContent = 'computer has chosen: ' + computer;
        userWin.textContent = 'user wins!';
    } else if (move.value == rock && computer == rock || move.value == paper && computer == paper || move.value == scissors && computer == scissors) {
        compChoice.textContent = 'computer has chosen: ' + computer;
        stalemate.textContent = 'stalemate. choose again...';
    } else {
        alert('you must choose between \'rock\' \'paper\' or \'scissors\'')
    }
}

button.addEventListener('click', game);

/* test #2 */